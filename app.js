// Renders the table of papers listed in papers/papers.json.
// Each paper's "Notes" cell is rendered from a Markdown file in papers/.
//
// To add a paper: write papers/<file>.md and add an entry to papers.json.

const MANIFEST = "papers/papers.json";

async function loadManifest() {
  const res = await fetch(MANIFEST, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Could not load ${MANIFEST} (${res.status})`);
  return res.json();
}

async function loadNotes(file) {
  if (!file) return "";
  const res = await fetch(`papers/${file}`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Could not load papers/${file} (${res.status})`);
  return res.text();
}

function cell(label, className, html) {
  const td = document.createElement("td");
  td.className = className;
  td.dataset.label = label;
  td.innerHTML = html;
  return td;
}

async function main() {
  const tbody = document.getElementById("rows");
  let papers;
  try {
    papers = await loadManifest();
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" class="error">${err.message}</td></tr>`;
    return;
  }

  // Newest first when a date is present.
  papers.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  let i = 1;
  for (const p of papers) {
    const tr = document.createElement("tr");

    const paperHtml = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>`
      : p.title || "";

    let notesHtml = "";
    try {
      const md = await loadNotes(p.file);
      notesHtml = marked.parse(md);
    } catch (err) {
      notesHtml = `<span class="error">${err.message}</span>`;
    }

    tr.appendChild(cell("#", "col-num", String(i++)));
    tr.appendChild(cell("Date", "col-date", p.date || ""));
    tr.appendChild(
      cell("Topic", "col-topic", p.topic ? `<span class="topic-tag">${p.topic}</span>` : "")
    );
    tr.appendChild(cell("Paper", "col-paper", paperHtml));
    tr.appendChild(cell("Notes", "col-notes notes", notesHtml));

    tbody.appendChild(tr);
  }
}

main();

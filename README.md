# feiyang3cat.github.io

My personal site — a black-and-white cartoon cat theme. **Pure HTML + CSS, no
build step, no server.** Just open `index.html` (or push to GitHub Pages).

**Live site:** https://feiyang3cat.github.io

## Pages

| Page             | What it is                                   |
| ---------------- | -------------------------------------------- |
| `index.html`     | Home hub — links to the four sections        |
| `papers.html`    | Tech Papers — papers I read, with notes      |
| `learning.html`  | Tech Learning — other tech I'm picking up    |
| `cheetah.html`   | Cheetah Protection                           |
| `bouldering.html`| Bouldering                                   |
| `style.css`      | Shared cartoon-cat theme (light/dark)        |

All pages share the same nav bar and `style.css`.

## Adding an entry to a section

Open the section's page (e.g. `papers.html`), copy an existing
`<article class="paper">` block inside `<main class="papers">`, and edit it:

```html
<article class="paper">
  <div class="paper-head">
    <h2 class="paper-title">
      <a href="https://..." target="_blank" rel="noopener">Title</a>
    </h2>
    <div class="paper-meta">
      <span class="meta-date">June 2026</span>
      <span class="tag tag-topic">Topic</span>
      <span class="tag level-simple">simple</span>
    </div>
  </div>
  <div class="notes">
    <p>Notes as HTML — <strong>bold</strong>, <code>code</code>, lists, etc.</p>
  </div>
</article>
```

- Tags: `tag-topic` (outline), `level-simple` / `level-medium` / `level-hard`
  (B&W difficulty scale), or `tag-todo` (dashed "todo" marker).
- Drop the `<a>` and just put text in the `<h2>` if there's no link.

## Adding a whole new section

1. Copy an existing page (e.g. `bouldering.html`) to `newsection.html`.
2. Edit its title, hero, and content.
3. Add a `<a href="newsection.html">…</a>` to the nav on every page, and a new
   `<a class="hub-card" …>` block to `index.html`.

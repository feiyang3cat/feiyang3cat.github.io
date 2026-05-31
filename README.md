# feiyang3cat.github.io

A simple static site listing the papers I read, as a table with notes. No build
step — plain HTML/CSS/JS that renders Markdown notes in the browser.

**Live site:** https://feiyang3cat.github.io

The table has five columns: **#**, **Date**, **Topic**, **Paper**, **Notes**.
The Notes cell is rendered from a Markdown file, so you just write Markdown.

## Adding a paper

1. Write your notes in a new Markdown file under `papers/`, e.g.
   `papers/my-paper.md`.
2. Add an entry to `papers/papers.json`:

   ```json
   {
     "title": "My Paper Title",
     "topic": "RL",
     "file": "my-paper.md",
     "date": "2026-06-01",
     "link": "https://arxiv.org/abs/...."
   }
   ```

   Only `title` and `file` are required. `date` sorts rows (newest first);
   the `#` column is numbered automatically. `link` makes the paper name a link.
3. Commit and push to `main`. GitHub Pages serves it automatically.

## Local preview

The page fetches Markdown via `fetch()`, so opening `index.html` as a `file://`
won't work — run a local server:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

| File                 | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `index.html`         | Page + table shell                         |
| `style.css`          | Styling (light/dark via system preference) |
| `app.js`             | Loads the manifest and renders the table   |
| `papers/papers.json` | List of papers (the manifest)              |
| `papers/*.md`        | One Markdown notes file per paper          |

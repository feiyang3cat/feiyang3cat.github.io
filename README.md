# feiyang3cat.github.io

My personal site — a black-and-white cartoon cat theme. **Pure HTML + CSS, no
build step, no server.** Just open `index.html` (or push to GitHub Pages).

**Live site:** https://feiyang3cat.github.io

## Pages

| Page             | What it is                                   |
| ---------------- | -------------------------------------------- |
| `index.html`     | Home hub — links to all sections             |
| `papers.html`    | Tech Papers — papers I read, with notes      |
| `cheetah.html`   | Cheetah Protection                           |
| `bouldering.html`| Bouldering                                   |
| `photography.html`| Photography portfolio                       |
| `style.css`      | Shared cartoon-cat theme (light/dark)        |

All pages share the same nav bar and `style.css`.

## Adding photographs

The photography section keeps publishable images separate from camera originals:

- Put resized, web-ready JPG/WebP files in `photos/web/`.
- Put RAW files and full-resolution originals in `photos/originals/`. This folder
  is ignored by Git, so originals stay on this computer and are not published.
- `photography.html` is the collection index. Copy its commented album-card
  template for each new theme, with one cover image and a short introduction.
- Create a matching page in `photo-albums/` and copy its commented
  `<figure class="photo-frame">` template for each photograph in that theme.

Keep another backup of `photos/originals/`: because Git ignores it, cloning the
website repository on a new computer will not restore those files.

### Converting an iPhone album

On macOS, place the untouched HEIC files in `photos/originals/<album-name>/`,
then run:

```sh
./scripts/process-photo-album.sh <album-name>
```

For example:

```sh
./scripts/process-photo-album.sh 09-26-gymn
```

The script uses macOS Quick Look and `sips` without visually inspecting the
photos. It creates browser-compatible JPG files in `photos/web/<album-name>/`
and byte-for-byte original HEIC downloads in `photos/downloads/<album-name>/`.
Files in `photos/downloads/` are public and may retain camera metadata.

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

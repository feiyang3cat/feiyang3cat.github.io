# feiyang3cat.github.io — Paper Reading

A dead-simple static page listing papers I read, with notes & summaries.
**Pure HTML + CSS — no JavaScript, no build step, no server.** Just open
`index.html` (or push to GitHub Pages).

**Live site:** https://feiyang3cat.github.io

## Adding a paper

Open `index.html` and copy an existing `<article class="paper">` block inside
`<main class="papers">`, then edit it. Newest papers go at the top.

```html
<article class="paper">
  <div class="paper-head">
    <h2 class="paper-title">
      <a href="https://arxiv.org/abs/..." target="_blank" rel="noopener">My Paper Title</a>
    </h2>
    <div class="paper-meta">
      <span class="meta-date">2026-06-01</span>
      <span class="tag tag-topic">Topic</span>
      <span class="tag level-simple">simple</span>
    </div>
  </div>
  <div class="notes">
    <p>Write your notes as HTML — <strong>bold</strong>, <code>code</code>,
       lists, etc.</p>
    <ul>
      <li>a bullet point</li>
    </ul>
  </div>
</article>
```

- Level pill: use `level-simple` (green), `level-medium` (amber), or `level-hard` (red).
- Drop the `<a>` if a paper has no link; just put the title text in the `<h2>`.

## Files

| File         | Purpose                                    |
| ------------ | ------------------------------------------ |
| `index.html` | The whole page — papers are HTML sections  |
| `style.css`  | Styling (light/dark via system preference) |

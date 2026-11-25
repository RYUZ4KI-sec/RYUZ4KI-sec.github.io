# ryuz4ki — writeups CTF

Site Jekyll publié par GitHub Pages depuis la branche `main`.

## Ajouter un writeup
1. Copie `_posts/2026-11-25-exemple-writeup.md` en `_posts/AAAA-MM-JJ-nom.md`.
2. Change le frontmatter (event, category, difficulty, lang, tags, summary) et écris le contenu.
3. `git add . && git commit -m "writeup: nom" && git push`

Les filtres de la page d'accueil se construisent tout seuls à partir du frontmatter.

## Tester en local (optionnel)
`gem install jekyll jekyll-feed && jekyll serve`

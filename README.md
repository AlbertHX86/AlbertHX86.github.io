# AlbertHX86.github.io

Source of my personal website, https://alberthx86.github.io. GitHub Pages builds it from the `master` branch with Jekyll.

## Where things are

| What | File |
|---|---|
| Home page (about, work, projects, research, awards) and its "On this page" card | `_pages/about.md` |
| Site settings, sidebar, visitor globe (`visitor_map`) | `_config.yml` |
| Top menu | `_data/navigation.yml` |
| Site-wide styling (Apple-style colours, type, cards) | `_sass/_apple.scss` |
| Publications, CV and other pages | `_publications/`, `_pages/` |
| Images and files | `images/`, `files/` |

## Run locally

```bash
bundle install
bundle exec jekyll serve -l -H localhost   # http://localhost:4000
```

The `github-pages` gem pins Jekyll 3.9, which doesn't run on Ruby 4 as-is. If you're on Ruby 4:
- add `csv`, `base64`, `bigdecimal`, `logger`, `ostruct` and `json` to a local copy of the Gemfile;
- load a small shim that defines `Object#tainted?`, `#taint` and `#untaint`, via `RUBYOPT=-r./shim.rb`.

Or use Ruby 3.x.

## Credits

Built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template, which comes from [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) (© Michael Rose, MIT License, see `LICENSE`).

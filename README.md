# avishaigonen123.github.io

Source for [avishaigonen123.github.io](https://avishaigonen123.github.io) - the personal site of Avishai Gonen, security researcher (vulnerability research, CVE disclosures, bug bounty and CTF writeups).

Built with Jekyll and served by GitHub Pages.

## Where things live

- `_data/*.yml` - homepage content: experience, education, publications, projects, bug bounty profiles, metrics and talks.
- `_cves/` - one markdown file per disclosure. Each file becomes a page at `/cve/<file-name>/` and a card on `/vulnerabilities/`.
  - With a CVE id: `2026-81095.md`
  - GHSA-only: `<vendor>-<package>.md` (no `cve_id` field)
- `_includes/` and `_layouts/` - page sections and templates.
- `PoC/` - proof-of-concept pages.

## Related

- [CTF Writeups](https://avishaigonen123.github.io/CTF_writeups/)
- [GitHub](https://github.com/avishaigonen123)

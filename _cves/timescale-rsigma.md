---
layout: cve
ghsa_id: GHSA-8x2w-m5v2-phxr
title: "rsigma: --rules-dir confinement bypass lets any MCP tool caller read and mutate arbitrary files"
description: "Six of rsigma-mcp's eight path-accepting tools resolve paths without honoring --rules-dir for absolute paths or collapsing ../ in relative ones, so any MCP caller can read any file the server user can read, and fix_rules with write: true can modify out-of-tree files in place."
vendor: Timescale
package: rsigma-mcp
ecosystem: cargo
severity: high
cvss: 8.5
cwe: [CWE-22]
disclosed: "2026-09-30"
year: 2026
affected: ">= 0.16.0, < 0.23.0"
patched: "0.23.0"
credit: Avishai Gonen
advisory: https://github.com/timescale/rsigma/security/advisories/GHSA-8x2w-m5v2-phxr
tags: [path-traversal, mcp]
---

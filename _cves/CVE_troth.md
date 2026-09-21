---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-x42w-fxc3-j24q
title: "troth: unauthenticated run_id path traversal in MCP tools leads to arbitrary-directory delete"
description: "The troth_status/troth_logs/troth_diff/troth_kill/troth_clean MCP tools pass a caller-supplied run_id directly into filesystem paths with no validation, letting a traversal payload escape the runs directory and, via a planted meta.json, delete an arbitrary attacker-chosen directory."
vendor: xgre1
package: troth
ecosystem: npm
severity: moderate
cvss: 5.8
cwe: [CWE-22]
disclosed: "2026-08-30"
year: 2026
affected: "<= 0.1.17"
patched: "0.1.18"
credit: Avishai Gonen
advisory: https://github.com/xgre1/troth/security/advisories/GHSA-x42w-fxc3-j24q
tags: [path-traversal, mcp, arbitrary-delete]
---

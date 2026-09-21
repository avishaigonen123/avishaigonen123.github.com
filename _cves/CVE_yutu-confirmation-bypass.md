---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-r9cw-h8gp-g9hf
title: "yutu: MCP tools delete YouTube videos, playlists, and comments with no confirmation gate"
description: "yutu's CLI enforces a real confirmation prompt (or --yes flag) before destructive operations, but all 15 destructive MCP tool handlers wire directly to the same delete functions and skip that gate entirely, letting any MCP caller delete videos, comments, playlists, subscriptions, and other resources with no human-facing confirmation."
vendor: eat-pray-ai
package: github.com/eat-pray-ai/yutu
ecosystem: go
severity: moderate
cwe: [CWE-862]
disclosed: "2026-08-19"
year: 2026
affected: "<= 0.10.11-dev2"
credit: Avishai Gonen
advisory: https://github.com/eat-pray-ai/yutu/security/advisories/GHSA-r9cw-h8gp-g9hf
tags: [missing-confirmation, mcp]
---

---
layout: cve
cve_id: CVE-2026-81099
title: "Timescale tiger-slack: DNS rebinding via disabled Host header allow-list"
description: With the Host header allow-list disabled, a malicious web page can reach the locally-bound tiger-slack MCP server through DNS rebinding.
vendor: Timescale
package: tiger-slack
severity: medium
cvss: 7.6
cwe: [CWE-346]
disclosed: "2026-08-27"
year: 2026
affected: < commit 23faf7e
patched: commit 23faf7e
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/timescale-tiger-slack-dns-rebinding-via-disabled-host-header-allow-list
tags: [dns-rebinding, mcp, host-header]
---

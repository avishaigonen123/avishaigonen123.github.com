---
layout: cve
cve_id: CVE-2026-81100
title: "Timescale tiger-gh-mcp-server: DNS rebinding via disabled Host header allow-list"
description: With the Host header allow-list disabled, a malicious web page can reach the locally-bound tiger-gh-mcp-server through DNS rebinding.
vendor: Timescale
package: tiger-gh-mcp-server
severity: medium
cvss: 7.6
cwe: [CWE-346]
disclosed: "2026-08-27"
year: 2026
affected: < commit e559b57
patched: commit e559b57
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/timescale-tiger-gh-mcp-server-dns-rebinding-via-disabled-host-header-allow-list
tags: [dns-rebinding, mcp, host-header]
---

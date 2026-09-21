---
layout: cve
cve_id: CVE-2026-81102
title: "Dropbox Dash MCP Server: DNS rebinding via missing Host header validation"
description: The MCP server omits Host header validation, so a browser-based DNS rebinding attack can reach the locally-bound service.
vendor: Dropbox
package: mcp-server-dash
ecosystem: npm
severity: low
cvss: 2.3
cwe: [CWE-346]
disclosed: "2026-08-27"
year: 2026
affected: < commit 84567b7
patched: commit 84567b7
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/dropbox-dash-mcp-server-dns-rebinding-via-missing-host-header-validation
bounty: Intigriti
tags: [dns-rebinding, mcp, host-header]
---

---
layout: cve
cve_id: CVE-2026-55637
ghsa_id: GHSA-cmwv-wf9p-p8wx
title: "genieacs-mcp: DNS rebinding reaches local GenieACS MCP Streamable HTTP transport"
description: The GenieACS MCP Streamable HTTP transport does not validate the Host header, so a malicious web page can reach the locally-bound service through DNS rebinding.
vendor: GeiserX
package: github.com/geiserx/genieacs-mcp
ecosystem: go
severity: high
cwe: [CWE-346]
disclosed: "2026-08-25"
year: 2026
affected: <= 0.3.1
patched: 0.3.2
credit: Avishai Gonen
advisory: https://github.com/GeiserX/genieacs-mcp/security/advisories/GHSA-cmwv-wf9p-p8wx
tags: [dns-rebinding, mcp, host-header]
---

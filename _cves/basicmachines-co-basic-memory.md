---
layout: cve
ghsa_id: GHSA-4gfv-c2mm-mvj2
title: "basic-memory: DNS rebinding lets a web page find, exfiltrate and delete private notes via the MCP SSE transport"
description: "basic-memory's HTTP/SSE MCP transport has no authentication and no Host/Origin validation, so the documented bind-to-localhost mitigation does not help: a malicious web page can reach the server through DNS rebinding and search, read and delete the user's notes."
vendor: basicmachines-co
package: basic-memory
ecosystem: pip
severity: high
cvss: 7.7
cwe: [CWE-306]
disclosed: "2026-10-23"
year: 2026
affected: "< 0.24.0"
patched: "0.24.0"
credit: Avishai Gonen
advisory: https://github.com/basicmachines-co/basic-memory/security/advisories/GHSA-4gfv-c2mm-mvj2
tags: [dns-rebinding, host-header, mcp]
---

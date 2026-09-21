---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-89h6-rm4x-9rw7
title: "mcp-gateway: DNS rebinding gives web pages unauthenticated admin control over the MCP surface"
description: "mcp-gateway's /mcp transport has no Host/Origin validation and ships with auth disabled by default, so a DNS-rebound browser is granted an anonymous admin identity and can invoke any of the 16 gateway-management tools, including gateway_invoke against any configured backend."
vendor: MikkoParkkola
package: mcp-gateway
ecosystem: npm
severity: high
cvss: 8.8
cwe: [CWE-346]
disclosed: "2026-08-28"
year: 2026
affected: ">= 2.12.0, <= 3.4.0"
patched: "3.5.0"
credit: Avishai Gonen
advisory: https://github.com/MikkoParkkola/mcp-gateway/security/advisories/GHSA-89h6-rm4x-9rw7
tags: [dns-rebinding, mcp, host-header]
---

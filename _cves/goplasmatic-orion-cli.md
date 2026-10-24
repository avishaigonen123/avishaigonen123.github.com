---
layout: cve
ghsa_id: GHSA-2v4r-q3fw-82j7
title: "orion-cli: unauthenticated MCP admin proxy lets DNS-rebound web pages administer Orion via disabled Host-guard"
description: "orion-cli mcp serve --http disables the MCP SDK's default Host/Origin allowlist and adds no auth middleware of its own, while binding 0.0.0.0:8081 by default, so a DNS-rebound browser can reach the endpoint and call any of the 32 administrative tools (workflow/channel/connector CRUD, data injection, DLQ purge, engine reload) with no credential, under whatever backend admin API key the operator configured."
vendor: GoPlasmatic
package: orion-cli
ecosystem: cargo
severity: high
cvss: 8.8
cwe: [CWE-306, CWE-346, CWE-1188]
disclosed: "2026-09-25"
year: 2026
affected: "< 1.2.0"
patched: "1.2.0 (fixed by removing the MCP server entirely)"
credit: Avishai Gonen
advisory: https://github.com/GoPlasmatic/Orion/security/advisories/GHSA-2v4r-q3fw-82j7
tags: [dns-rebinding, auth-bypass, mcp]
---

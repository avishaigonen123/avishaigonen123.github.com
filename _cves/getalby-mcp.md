---
layout: cve
title: "Alby MCP: DNS rebinding reaches the wallet MCP server over HTTP"
description: "Alby MCP's HTTP transport did not validate Host or Origin, so a DNS-rebound web page could act as an MCP client and use the wallet connection configured in the server."
vendor: getAlby
package: "@getalby/mcp"
ecosystem: npm
severity: high
cvss: 8.8
cwe: [CWE-346]
disclosed: "2026-09-29"
year: 2026
affected: "<= 1.1.1"
patched: "1.1.2"
credit: Avishai Gonen
advisory: https://github.com/getAlby/mcp/pull/33
tags: [dns-rebinding, host-header, mcp]
---

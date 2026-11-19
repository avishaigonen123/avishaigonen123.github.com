---
layout: cve
title: "alpaca-mcp-server: DNS rebinding lets any website control Alpaca trading through the local MCP server"
description: "The Streamable HTTP transport of alpaca-mcp-server accepted any Host and Origin header before dispatching MCP requests, so a DNS-rebound web page could initialize an MCP session with no authentication and call the trading tools (place and cancel orders, close positions) under the Alpaca API key configured on the server."
vendor: alpacahq
package: alpaca-mcp-server
ecosystem: pip
severity: high
cvss: 7.1
cwe: [CWE-346]
disclosed: "2026-08-17"
year: 2026
affected: "< 2.3.2"
patched: "2.3.2"
credit: Avishai Gonen
advisory: https://hackerone.com/reports/3947046
bounty: HackerOne
tags: [dns-rebinding, host-header, mcp]
---

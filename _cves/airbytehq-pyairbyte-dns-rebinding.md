---
layout: cve
title: "PyAirbyte MCP: DNS rebinding reaches the HTTP MCP server"
description: "PyAirbyte's HTTP MCP entrypoint accepted any Host and Origin header, so a DNS-rebound web page could drive a locally or privately run airbyte-mcp-http server and its tools."
vendor: airbytehq
package: airbyte
ecosystem: pip
severity: high
cvss: 8.8
cwe: [CWE-346]
disclosed: "2026-09-09"
year: 2026
affected: "< 0.59.1"
patched: "0.59.1"
credit: Avishai Gonen
advisory: https://github.com/airbytehq/PyAirbyte/pull/1120
tags: [dns-rebinding, host-header, mcp]
---

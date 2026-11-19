---
layout: cve
title: "ibm-watsonxdata-mcp-server: browser DNS rebinding can control IBM watsonx.data MCP tools"
description: "The watsonx.data MCP server's Streamable HTTP transport accepted browser-origin requests after DNS rebinding and required no inbound credential before MCP initialization, tools/list or tools/call, so a malicious web page could drive the watsonx.data tools with the IAM tokens the server mints from its configured WATSONX_DATA_API_KEY."
vendor: IBM
package: ibm-watsonxdata-mcp-server
ecosystem: pip
severity: critical
cvss: 9.6
cwe: [CWE-346]
disclosed: "2026-07-23"
year: 2026
affected: "< 0.1.5"
patched: "0.1.5"
credit: Avishai Gonen
advisory: https://hackerone.com/reports/3883702
bounty: HackerOne
tags: [dns-rebinding, host-header, mcp]
---

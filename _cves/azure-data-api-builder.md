---
layout: cve
title: "Data API Builder: DNS rebinding lets websites read and write database records through the MCP endpoint"
description: "Data API Builder's MCP Streamable HTTP endpoint accepted any Host and Origin, so with the anonymous permissions used in Microsoft's own quickstart, a DNS-rebound web page could read and modify database records through the MCP tools."
vendor: Azure
package: data-api-builder
ecosystem: other
severity: high
cvss: 8.8
cwe: [CWE-350, CWE-306]
disclosed: "2026-08-01"
year: 2026
affected: "< 2.1.5"
patched: "2.1.5"
credit: Avishai Gonen
advisory: https://github.com/Azure/data-api-builder/pull/3736
bounty: MSRC
tags: [dns-rebinding, host-header, database, mcp]
---

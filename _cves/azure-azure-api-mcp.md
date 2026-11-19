---
layout: cve
title: "azure-api-mcp: DNS rebinding lets a website run Azure CLI commands under the server identity"
description: "azure-api-mcp's streamable-http transport had no Host or Origin validation and no caller authentication, so a DNS-rebound web page could complete an MCP session and invoke the Azure CLI tool under the server's configured identity. The fix removed the HTTP transports."
vendor: Azure
package: azure-api-mcp
ecosystem: go
severity: high
cvss: 8.8
cwe: [CWE-346, CWE-306]
disclosed: "2026-08-10"
year: 2026
affected: "<= 0.0.7"
patched: "0.0.8"
credit: Avishai Gonen
advisory: https://github.com/Azure/azure-api-mcp/pull/32
bounty: MSRC
tags: [dns-rebinding, auth-bypass, mcp]
---

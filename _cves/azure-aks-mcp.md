---
layout: cve
title: "aks-mcp: DNS rebinding lets a website run Azure CLI tools under the server's Azure identity"
description: "AKS-MCP's streamable-http and SSE transports did not validate Host or Origin, so a DNS-rebound web page could become an MCP client and invoke Azure and Kubernetes tools under the server-held Azure identity. MSRC rated it Important."
vendor: Azure
package: aks-mcp
ecosystem: go
severity: high
cvss: 8.8
cwe: [CWE-346, CWE-350]
disclosed: "2026-06-24"
year: 2026
affected: "< 0.0.19"
patched: "0.0.19"
credit: Avishai Gonen
advisory: https://github.com/Azure/aks-mcp/pull/382
bounty: MSRC
tags: [dns-rebinding, host-header, mcp]
---

---
layout: cve
title: "mcp-foundry: DNS rebinding lets websites read local files, make SSRF requests and use Azure AI tools"
description: "mcp-foundry's SSE and Streamable HTTP transports had no Host or Origin validation, so a DNS-rebound web page could read local files, fetch internal URLs and manage Azure AI Search and Foundry resources with the server's credentials."
vendor: microsoft-foundry
package: mcp-foundry
ecosystem: other
severity: high
cvss: 8.8
cwe: [CWE-350, CWE-918]
disclosed: "2026-07-10"
year: 2026
patched: "fixed in pull request #71"
credit: Avishai Gonen
advisory: https://github.com/microsoft-foundry/mcp-foundry/pull/71
bounty: MSRC
tags: [dns-rebinding, ssrf, mcp]
---

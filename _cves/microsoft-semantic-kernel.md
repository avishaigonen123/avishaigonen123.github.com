---
layout: cve
title: "Semantic Kernel: DNS rebinding reaches the MCP SSE server samples and their agent tools"
description: "Semantic Kernel's Python MCP server samples bound SSE to all interfaces with no Host or Origin checks, so a DNS-rebound web page could invoke the sample agent's tools, including calls billed to the developer's Azure OpenAI key."
vendor: microsoft
package: semantic-kernel
ecosystem: other
severity: medium
cvss: 6.0
cwe: [CWE-346, CWE-306]
disclosed: "2026-06-30"
year: 2026
patched: "fixed in pull request #14127"
credit: Avishai Gonen
advisory: https://github.com/microsoft/semantic-kernel/pull/14127
bounty: MSRC
tags: [dns-rebinding, host-header, mcp]
---

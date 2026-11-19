---
layout: cve
title: "hf-mcp-server: DNS rebinding lets websites invoke Hugging Face tools through DEFAULT_HF_TOKEN"
description: "hf-mcp-server's HTTP transports accepted any Host and Origin and fell back to DEFAULT_HF_TOKEN when no Authorization header was sent, so a DNS-rebound web page could call Hugging Face tools, such as creating repositories, as the token owner."
vendor: huggingface
package: "@llmindset/hf-mcp-server"
ecosystem: npm
severity: medium
cvss: 6.2
cwe: [CWE-306, CWE-350]
disclosed: "2026-07-16"
year: 2026
affected: "<= 0.3.32"
patched: "0.3.33"
credit: Avishai Gonen
advisory: https://github.com/huggingface/hf-mcp-server/pull/195
tags: [dns-rebinding, host-header, credential-disclosure, mcp]
---

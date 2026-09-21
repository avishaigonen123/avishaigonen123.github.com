---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-m78m-g6g8-4455
title: "stockbit-mcp: caller-supplied confirm boolean bypasses MCP Elicitation confirmation on order-entry tools"
description: "The order-entry tools accept a caller-supplied confirm flag that satisfies the confirmation gate on its own, so any MCP client, or a prompt-injected LLM, can place, amend or cancel brokerage orders without a human ever approving them."
vendor: INo-xious
package: stockbit-mcp
ecosystem: npm
severity: high
cvss: 7.1
cwe: [CWE-862]
disclosed: "2026-08-28"
year: 2026
affected: "<= 1.0.1"
credit: Avishai Gonen
advisory: https://github.com/INo-xious/stockbit-mcp/security/advisories/GHSA-m78m-g6g8-4455
tags: [auth-bypass, mcp, prompt-injection]
---

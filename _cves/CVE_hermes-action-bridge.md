---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-9mpj-6v9h-42pj
title: "hermes-action-bridge: hermes_approve accepts its own prior tool call as human approval, letting unreviewed side effects execute"
description: "hermes_approve requires only a bare approvalId the calling MCP client already received from its own prior hermes_prepare call, with no out-of-band or human-facing check, so any MCP client can prepare and approve an action in the same session and dispatch a real side effect (message, payment, git push, credential change) with no human ever reviewing it."
vendor: TheBlueHouse75
package: hermes-action-bridge
ecosystem: npm
severity: high
cwe: [CWE-862]
disclosed: "2026-08"
year: 2026
affected: "<= 0.6.2"
patched: "0.6.3"
credit: Avishai Gonen
advisory: https://github.com/TheBlueHouse75/hermes-action-bridge/security/advisories/GHSA-9mpj-6v9h-42pj
tags: [missing-confirmation, mcp, prompt-injection]
---

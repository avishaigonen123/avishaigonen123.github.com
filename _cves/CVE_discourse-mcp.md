---
layout: cve
cve_id: CVE-2026-NONE
title: "discourse-mcp: DNS rebinding allows use of server-held Discourse API privileges"
description: "Discourse MCP's HTTP transport accepts unauthenticated MCP JSON-RPC requests and does not validate Host or Origin, so a DNS-rebound website can reach a victim's local MCP endpoint and call Discourse tools under the API key configured in the MCP process, gaining use of its effective Discourse privileges without ever learning the key itself."
vendor: discourse
package: discourse-mcp
ecosystem: npm
severity: high
cwe: [CWE-346]
year: 2026
patched: "fixed by commit 0064a760a00ba4ca63045bb2cc660290989f5935"
credit: Avishai Gonen
advisory: https://hackerone.com/reports/3803830
bounty: HackerOne
tags: [dns-rebinding, mcp]
---

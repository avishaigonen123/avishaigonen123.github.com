---
layout: cve
title: "ibmi-mcp-server: browser DNS rebinding can control IBM i SQL tools through server-held DB2i credentials"
description: "ibmi-mcp-server's HTTP MCP transport installs CORS but does not reject attacker-controlled Host and Origin values before MCP dispatch, and skips auth middleware entirely when MCP_AUTH_MODE=none, so a DNS-rebound public website can become an MCP client for the IBM i schema and SQL tooling under the server's own DB2i credentials."
vendor: IBM
package: ibmi-mcp-server
severity: high
cwe: [CWE-346, CWE-306]
year: 2026
patched: "fix in pull request #163"
credit: Avishai Gonen
advisory: https://hackerone.com/reports/3883762
bounty: HackerOne
tags: [dns-rebinding, auth-bypass, mcp]
---

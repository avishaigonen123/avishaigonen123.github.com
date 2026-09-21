---
layout: cve
cve_id: CVE-2026-81098
title: "Telnyx MCP Server through 6.83.0: missing authentication on Streamable HTTP transport"
description: The Streamable HTTP transport exposes its endpoints with no authentication, so anyone able to reach the port can invoke the server's tools.
vendor: Telnyx
package: telnyx-mcp
ecosystem: npm
severity: critical
cvss: 9.3
cwe: [CWE-306]
disclosed: "2026-08-27"
year: 2026
affected: <= 6.83.0
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/telnyx-mcp-server-through-6.83.0-missing-authentication-on-streamable-http-transport
tags: [auth-bypass, mcp]
---

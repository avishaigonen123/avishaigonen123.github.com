---
layout: cve
title: "PyAirbyte MCP: caller-supplied API URL headers exfiltrate Airbyte Cloud credentials"
description: "PyAirbyte's HTTP MCP server let callers override the Airbyte Cloud API base URLs through request headers, so the server's credentialed token exchange could be redirected to an attacker host that receives the client credentials."
vendor: airbytehq
package: airbyte
ecosystem: pip
severity: high
cvss: 8.4
cwe: [CWE-918, CWE-522]
disclosed: "2026-07-15"
year: 2026
affected: "< 0.51.0"
patched: "0.51.0"
credit: Avishai Gonen
advisory: https://github.com/airbytehq/PyAirbyte/pull/1080
tags: [ssrf, credential-disclosure, mcp]
---

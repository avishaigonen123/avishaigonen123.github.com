---
layout: cve
ghsa_id: GHSA-vr58-8mmm-pg6c
title: "mastyf.ai: dashboard MCP bridge bypasses authentication, granting unauthenticated tool execution"
description: "The mastyf.ai dashboard enforces authentication on its HTTP API, but the MCP bridge route is mounted ahead of that gate, so any caller can execute tools against every connected MCP server without credentials. The Fleet Hub local ingress exposes the same unauthenticated tool access through DNS rebinding."
vendor: mastyf-ai
package: "@mastyf_ai/server"
ecosystem: npm
severity: critical
cvss: 10.0
cwe: [CWE-306]
disclosed: "2026-09-19"
year: 2026
affected: "<= 4.1.12"
patched: "4.1.13"
credit: Avishai Gonen
advisory: https://github.com/mastyf-ai/mastyf.ai/security/advisories/GHSA-vr58-8mmm-pg6c
tags: [auth-bypass, dns-rebinding, mcp]
---

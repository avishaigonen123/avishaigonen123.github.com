---
layout: cve
title: "verify-mcp-server: browser DNS rebinding can control IBM Security Verify API tools through server-held OAuth2 credentials"
description: "The IBM Security Verify MCP server did not validate the Host or Origin of incoming HTTP requests, so a DNS-rebound web page could invoke its Security Verify API tools using the OAuth2 client credentials held by the server. Reported through HackerOne and closed as a duplicate."
vendor: ibm
package: "IBM/verify-mcp-server"
ecosystem: GitHub
severity: critical
cvss: 9.6
cwe: [CWE-346]
disclosed: "2026-07-23"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/IBM/verify-mcp-server
bounty: HackerOne
tags: [ssrf, mcp, duplicate]
---

---
layout: cve
title: "qradar-mcp-server: unauthenticated caller can capture the server's QRadar SEC token"
description: "The IBM QRadar MCP server let an unauthenticated caller steer the server's outbound requests, causing it to send its QRadar SEC token to an attacker-chosen destination. Reported through HackerOne and closed as a duplicate."
vendor: ibm
package: "IBM/qradar-mcp-server"
ecosystem: GitHub
severity: critical
cvss: 10.0
cwe: [CWE-918, CWE-306]
disclosed: "2026-07-23"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/IBM/qradar-mcp-server
bounty: HackerOne
tags: [ssrf, mcp, duplicate]
---

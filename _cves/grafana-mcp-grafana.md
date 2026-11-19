---
layout: cve
title: "mcp-grafana: browser DNS rebinding reaches the Grafana MCP server"
description: "The Grafana MCP server's HTTP transport did not validate the Host or Origin of incoming requests, so a DNS-rebound web page could reach a victim's local server and use its Grafana tools with the operator's Grafana credentials. Reported through Intigriti and closed as a duplicate."
vendor: grafana
package: "mcp-grafana"
ecosystem: Go
severity: critical
cvss: 9.6
cwe: [CWE-346]
disclosed: "2026-06-14"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/grafana/mcp-grafana
bounty: Intigriti
tags: [ssrf, mcp, duplicate]
---

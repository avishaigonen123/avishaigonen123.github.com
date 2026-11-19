---
layout: cve
title: "mcp-jfrog: browser DNS rebinding lets websites administer the JFrog Platform through the JFrog MCP server"
description: "The JFrog MCP server exposed its tools over HTTP with no authentication and no Host or Origin validation, so a DNS-rebound web page could call them with the operator's JFrog access token and administer the victim's JFrog Platform instance. Reported through HackerOne and closed as a duplicate."
vendor: jfrog
package: "mcp-jfrog"
ecosystem: GitHub
severity: critical
cvss: 9.6
cwe: [CWE-306, CWE-346]
disclosed: "2026-07-02"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/jfrog/mcp-jfrog
bounty: HackerOne
tags: [ssrf, mcp, duplicate]
---

---
layout: cve
title: "firebase-tools: browser DNS rebinding reaches the Firebase CLI MCP server"
description: "The Firebase CLI's MCP server did not validate the Host or Origin of incoming HTTP requests, so a DNS-rebound web page could reach it and use its Firebase tools with the developer's logged-in Firebase credentials. Reported to Google and closed as a duplicate."
vendor: google
package: "firebase-tools"
ecosystem: npm
severity: critical
cvss: 9.6
cwe: [CWE-346]
disclosed: "2026-08-25"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/firebase/firebase-tools
bounty: Google VRP
tags: [ssrf, mcp, duplicate]
---

---
layout: cve
title: "mongodb-mcp-server: browser DNS rebinding lets websites write and delete data through the MongoDB MCP server"
description: "The MongoDB MCP server's HTTP transport did not validate the Host or Origin of incoming requests, so a web page using DNS rebinding could reach a victim's locally running server and use its database tools with the operator's MongoDB connection, including writes and deletes. Reported through HackerOne and closed as a duplicate of an earlier report."
vendor: mongodb
package: "mongodb-mcp-server"
ecosystem: npm
severity: critical
cvss: 9.6
cwe: [CWE-346]
disclosed: "2026-07-01"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/mongodb-js/mongodb-mcp-server
bounty: HackerOne
tags: [dns-rebinding, mcp, duplicate]
---

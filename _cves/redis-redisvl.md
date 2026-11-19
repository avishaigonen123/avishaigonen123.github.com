---
layout: cve
title: "redisvl MCP: DNS rebinding reaches the Redis index search and upsert tools"
description: "RedisVL's MCP server answered any HTTP request on its streamable-http and SSE transports without Host or Origin checks, so a DNS-rebound web page could search and write to the configured Redis index."
vendor: redis
package: redisvl
ecosystem: pip
severity: high
cvss: 7.6
cwe: [CWE-346]
disclosed: "2026-07-03"
year: 2026
affected: "< 0.23.0"
patched: "0.23.0"
credit: Avishai Gonen
advisory: https://hackerone.com/reports/3837772
bounty: HackerOne
tags: [dns-rebinding, host-header, mcp]
---

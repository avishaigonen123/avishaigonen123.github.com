---
layout: cve
title: "yelp-mcp: DNS rebinding lets websites run Yelp Fusion AI through the local MCP server's API key"
description: "yelp-mcp's streamable-http and SSE transports had no bearer token, Host allowlist or Origin allowlist, so a DNS-rebound web page could call the yelp_agent tool as a confused deputy, spending the Yelp Fusion AI API key configured on the server. Fixed by PR #6, which enables DNS rebinding protection on the HTTP transports by default."
vendor: Yelp
package: yelp-mcp
ecosystem: pip
severity: high
cvss: 7.4
cwe: [CWE-346]
disclosed: "2026-07-09"
year: 2026
affected: "<= 0.1.0"
patched: "fixed by PR #6 (commit 50ed2f56), not yet released"
credit: Avishai Gonen
advisory: https://github.com/Yelp/yelp-mcp/pull/6
bounty: HackerOne
tags: [dns-rebinding, host-header, mcp]
---

---
layout: cve
title: "brave-search-mcp-server: any website can control a victim's Brave Search MCP over HTTP via DNS rebinding"
description: "The Brave Search MCP server's HTTP transport accepted MCP requests without caller authentication, Host validation or Origin validation, so a DNS-rebound web page could enumerate and invoke the Brave Search tools under the victim's configured BRAVE_API_KEY without ever learning the key. Fixed in v2.1.0, which adds Host and Origin allowlists and binds to 127.0.0.1 by default."
vendor: brave
package: "@brave/brave-search-mcp-server"
ecosystem: npm
severity: medium
cvss: 6.3
cwe: [CWE-346]
disclosed: "2026-06-11"
year: 2026
affected: "< 2.1.0"
patched: "2.1.0"
credit: Avishai Gonen
advisory: https://github.com/brave/brave-search-mcp-server/pull/317
bounty: HackerOne
tags: [dns-rebinding, host-header, mcp]
---

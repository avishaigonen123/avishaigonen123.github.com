---
layout: cve
title: "cloudflare/playwright-mcp: browser DNS rebinding lets websites drive the Playwright MCP browser-control tools"
description: "Cloudflare's playwright-mcp fork still shipped the vulnerable Playwright MCP 0.0.30 HTTP transport (same bug class as CVE-2025-9611). When started with --port, it accepted MCP requests with no Host, Origin or caller authentication check, so a DNS-rebound web page could open an MCP session against a victim's local server and invoke the browser-automation tools. Triaged by HackerOne as High; Cloudflare closed it as Informative, and the repository was archived on 2026-10-12 without a fix."
vendor: cloudflare
package: "cloudflare/playwright-mcp"
ecosystem: GitHub
severity: high
cvss: 8.2
cwe: [CWE-346, CWE-306]
disclosed: "2026-07-01"
year: 2026
affected: "0.0.30 (repository archived 2026-10-12)"
patched: "None (repository archived without a fix)"
credit: Avishai Gonen
advisory: https://github.com/cloudflare/playwright-mcp
bounty: HackerOne
tags: [dns-rebinding, mcp]
---

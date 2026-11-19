---
layout: cve
title: "netlify-mcp: unvalidated OAuth redirect_uri lets attackers capture victims' Netlify access tokens"
description: "The Netlify MCP server's OAuth flow did not restrict the redirect_uri, so an attacker could craft an authorization link that sent a victim's Netlify access token to an attacker-controlled address. Reported through HackerOne and closed as a duplicate."
vendor: netlify
package: "@netlify/mcp"
ecosystem: npm
severity: critical
cvss: 9.6
cwe: [CWE-601]
disclosed: "2026-08-19"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as duplicate)"
credit: Avishai Gonen
advisory: https://github.com/netlify/netlify-mcp
bounty: HackerOne
tags: [oauth, open-redirect, mcp, duplicate]
---

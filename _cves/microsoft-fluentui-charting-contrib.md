---
layout: cve
title: "fluentui-charting-contrib: DNS rebinding lets a website execute Python through the plotly examples MCP server"
description: "The plotly_examples MCP server in fluentui-charting-contrib had no Host or Origin validation, so a DNS-rebound web page could call its tools and execute Python on the developer's machine."
vendor: microsoft
package: fluentui-charting-contrib
ecosystem: other
severity: high
cvss: 7.7
cwe: [CWE-346, CWE-94]
disclosed: "2026-09-17"
year: 2026
patched: "fixed in pull request #776"
credit: Avishai Gonen
advisory: https://github.com/microsoft/fluentui-charting-contrib/pull/776
bounty: MSRC
tags: [dns-rebinding, rce, mcp]
---

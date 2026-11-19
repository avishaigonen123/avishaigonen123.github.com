---
layout: cve
title: "mcp-server-elasticsearch: browser DNS rebinding lets websites read private Elasticsearch documents through the Elastic MCP server"
description: "The Elastic MCP server's HTTP transport did not validate the Host or Origin of incoming requests, so a DNS-rebound web page could query the victim's Elasticsearch cluster through the server's stored credentials and read private documents. Reported through HackerOne and closed as Informative."
vendor: elastic
package: "@elastic/mcp-server-elasticsearch"
ecosystem: npm
severity: medium
cvss: 6.5
cwe: [CWE-346]
disclosed: "2026-07-01"
year: 2026
affected: "Versions current at time of report"
patched: "Unknown (closed as informative)"
credit: Avishai Gonen
advisory: https://github.com/elastic/mcp-server-elasticsearch
bounty: HackerOne
tags: [ssrf, mcp, duplicate]
---

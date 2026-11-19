---
layout: cve
ghsa_id: GHSA-m873-hg53-85r5
title: "Wassette: DNS rebinding on the HTTP and SSE MCP transports"
description: "Wassette releases before 0.5.0 accepted any Host on their HTTP and SSE MCP transports, so a DNS-rebound web page could reach a locally running Wassette server and use its tools."
vendor: microsoft
package: wassette
ecosystem: cargo
severity: medium
cvss: 6.8
cwe: [CWE-346]
disclosed: "2026-07-25"
year: 2026
affected: "<= 0.4.0"
patched: "0.5.0"
credit: Avishai Gonen
advisory: https://github.com/microsoft/wassette/security/advisories/GHSA-m873-hg53-85r5
bounty: MSRC
tags: [dns-rebinding, host-header, mcp]
---

---
layout: cve
ghsa_id: GHSA-6pw3-8hwr-wjh5
title: "unifi-mcp: unauthenticated MCP HTTP exposure through insecure deployment defaults"
description: "The UniFi Network, Protect and Access MCP HTTP transports do not authenticate callers, and the shipped defaults bound them on all interfaces, so any network peer could invoke tools with the server's controller credentials, including destructive network operations and physical door control. The confirm argument is client-controlled and does not prove human approval."
vendor: sirkirby
package: unifi-mcp
ecosystem: pip
severity: critical
cvss: 10.0
cwe: [CWE-306]
disclosed: "2026-09-08"
year: 2026
affected: "unifi-network-mcp < 0.32.4, unifi-protect-mcp < 0.8.6, unifi-access-mcp < 0.6.4, unifi-mcp-shared < 0.6.18"
patched: "unifi-network-mcp 0.32.4, unifi-protect-mcp 0.8.6, unifi-access-mcp 0.6.4, unifi-mcp-shared 0.6.18"
credit: Avishai Gonen
advisory: https://github.com/sirkirby/unifi-mcp/security/advisories/GHSA-6pw3-8hwr-wjh5
tags: [auth-bypass, missing-confirmation, docker, mcp]
---

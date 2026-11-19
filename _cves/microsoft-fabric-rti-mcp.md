---
layout: cve
title: "fabric-rti-mcp: DNS rebinding plus forged bearer tokens give websites Fabric and Kusto read and write"
description: "Fabric RTI MCP bound its HTTP transport to all interfaces without Host or Origin checks and accepted bearer tokens without verifying their signatures, so a DNS-rebound web page could read and write Fabric and Kusto data in the victim's context."
vendor: microsoft
package: microsoft-fabric-rti-mcp
ecosystem: pip
severity: high
cvss: 8.8
cwe: [CWE-346, CWE-347]
disclosed: "2026-06-30"
year: 2026
affected: "<= 0.5.5"
patched: "0.6.0"
credit: Avishai Gonen
advisory: https://github.com/microsoft/fabric-rti-mcp/pull/194
bounty: MSRC
tags: [dns-rebinding, host-header, auth-bypass, mcp]
---

---
layout: cve
cve_id: CVE-2026-81095
title: "Timescale pg-aiguide through 0.5.0: DNS rebinding via disabled Host header allow-list"
description: The Host header allow-list is disabled by configuration in pg-aiguide, so a browser-based DNS rebinding attack can reach the local MCP server.
vendor: Timescale
package: pg-aiguide
ecosystem: pip
severity: medium
cvss: 7.6
cwe: [CWE-346]
disclosed: "2026-08-27"
year: 2026
affected: <= 0.5.0
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/timescale-pg-aiguide-through-0.5.0-dns-rebinding-via-disabled-host-header-allow-list
tags: [dns-rebinding, mcp, host-header]
---

<!-- Narrative pending: root cause, exploitation, impact, remediation, timeline. -->

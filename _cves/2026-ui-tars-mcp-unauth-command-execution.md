---
layout: cve
cve_id: CVE-2026-81735
title: "UI-TARS-desktop @agent-infra MCP servers bind every interface without authentication"
description: "The bundled @agent-infra MCP servers listen on all interfaces with no authentication, exposing arbitrary command execution to anyone who can reach the host."
vendor: ByteDance
package: UI-TARS-desktop
ecosystem: npm
severity: critical
cvss: 10.0
cwe: [CWE-306]
disclosed: "2026-08-27"
year: 2026
affected: < commit c2ad42e
patched: commit c2ad42e
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/ui-tars-desktop-agent-infra-mcp-servers-bind-every-interface-without-authentication-exposing-arbitrary-command-execution
tags: [auth-bypass, rce, mcp]
---

<!-- Narrative pending: root cause, exploitation, impact, remediation, timeline. -->

---
layout: cve
cve_id: CVE-2026-61568
ghsa_id: GHSA-vmp7-252j-cwp7
title: "@zereight/mcp-gitlab: DNS rebinding reaches local Streamable HTTP MCP transport"
description: The Streamable HTTP transport accepts requests without validating the Host header, letting a malicious page reach the locally-bound MCP server via DNS rebinding.
vendor: zereight
package: "@zereight/mcp-gitlab"
ecosystem: npm
severity: critical
cvss: 9.6
cwe: [CWE-350]
disclosed: "2026-09-15"
year: 2026
affected: < 2.1.30
patched: 2.1.30
credit: Avishai Gonen
advisory: https://github.com/zereight/gitlab-mcp/security/advisories/GHSA-vmp7-252j-cwp7
tags: [dns-rebinding, mcp, host-header]
---

<!-- Narrative pending: root cause, exploitation, impact, remediation, timeline. -->

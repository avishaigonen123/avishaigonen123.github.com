---
layout: cve
cve_id: CVE-2026-61559
ghsa_id: GHSA-2h44-8472-frjj
title: "@zereight/mcp-gitlab vulnerable to server-side request forgery"
description: Unvalidated user-controlled URLs in the GitLab MCP server let an attacker make the host issue requests to arbitrary destinations, reaching internal services.
vendor: zereight
package: "@zereight/mcp-gitlab"
ecosystem: npm
severity: critical
cvss: 9.6
cwe: [CWE-918]
disclosed: "2026-09-15"
year: 2026
affected: ">= 0.0.1, < 2.1.27"
patched: 2.1.27
credit: Avishai Gonen
advisory: https://github.com/zereight/gitlab-mcp/security/advisories/GHSA-2h44-8472-frjj
tags: [ssrf, mcp]
---

---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-fcj2-hj27-hj26
title: "gitlab-mcp-server: caller-controlled GITLAB-URL enables SSRF in legacy HTTP mode"
description: "When no fixed GitLab URL is configured, the legacy HTTP MCP handler takes the GitLab base URL from a caller-supplied GITLAB-URL header, validates only syntax (no private/loopback/link-local/metadata check), and sends GitLab discovery requests with the caller's token to that URL before the token is ever verified, letting any network client force the server to make requests to internal targets."
vendor: jmrplens
package: github.com/jmrplens/gitlab-mcp-server
ecosystem: go
severity: high
cvss: 7.2
cwe: [CWE-918]
disclosed: "2026-09-14"
year: 2026
affected: ">= 1.1.0, <= 2.7.5 (module path github.com/jmrplens/gitlab-mcp-server/v2; neither v1 nor v2 module path received a patch)"
patched: "3.0.0 (new module path github.com/jmrplens/gitlab-mcp-server/v3)"
credit: Avishai Gonen
advisory: https://github.com/jmrplens/gitlab-mcp-server/security/advisories/GHSA-fcj2-hj27-hj26
tags: [ssrf, mcp]
---

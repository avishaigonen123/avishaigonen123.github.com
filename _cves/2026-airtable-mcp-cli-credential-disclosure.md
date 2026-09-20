---
layout: cve
cve_id: CVE-2026-81101
title: "Airtable MCP CLI before 0.2.5: credential disclosure via unvalidated configured endpoint"
description: The CLI sends stored credentials to whatever endpoint is configured, without validating it — so a crafted configuration exfiltrates the user's API token.
vendor: Airtable
package: airtable-mcp-cli
ecosystem: npm
severity: medium
cvss: 6.9
cwe: [CWE-200]
disclosed: "2026-08-27"
year: 2026
affected: ">= 0, < 0.2.5"
patched: 0.2.5
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/airtable-mcp-cli-before-0.2.5-credential-disclosure-via-unvalidated-configured-endpoint
bounty: HackerOne
tags: [credential-disclosure, mcp]
---

<!-- Narrative pending: root cause, exploitation, impact, remediation, timeline. -->

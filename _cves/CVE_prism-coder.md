---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-9cvx-7x8q-3g6m
title: "prism-coder: missing Host/Origin validation on the Mind Palace dashboard allows DNS rebinding to read and export all session memory"
description: "Prism's bundled dashboard auto-starts on loopback with auth disabled by default and validates neither Host nor Origin, so a DNS-rebound browser can read and export a developer's full cross-project AI-coding session memory (decisions, TODOs, summaries) with zero credentials."
vendor: dcostenco
package: prism-mcp-server
ecosystem: npm
severity: moderate
cvss: 6.0
cwe: [CWE-346]
disclosed: "2026-08-24"
year: 2026
affected: "<= 20.14.0"
patched: "20.15.0"
credit: Avishai Gonen
advisory: https://github.com/dcostenco/prism-coder/security/advisories/GHSA-9cvx-7x8q-3g6m
tags: [dns-rebinding, mcp]
---

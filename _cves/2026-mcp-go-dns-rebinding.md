---
layout: cve
cve_id: CVE-2026-81092
title: "mcp-go before 0.56.0: missing Host header validation enables DNS rebinding"
description: mcp-go's HTTP transports do not validate the Host header before 0.56.0, allowing a malicious web page to reach a locally-bound server through DNS rebinding.
vendor: mcp-go
package: mcp-go
ecosystem: go
severity: medium
cvss: 7.6
cwe: [CWE-346]
disclosed: "2026-08-27"
year: 2026
affected: ">= 0, < 0.56.0"
patched: 0.56.0
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/mcp-go-before-0.56.0-missing-host-header-validation-enables-dns-rebinding
tags: [dns-rebinding, mcp, host-header]
---

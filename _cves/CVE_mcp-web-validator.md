---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-hhq4-w9j2-38hg
title: "mcp-web-validator: SSRF guard (assertPublicHttpUrl) is bypassable via DNS rebinding, defeating the documented private-address block"
description: "assertPublicHttpUrl validates a hostname's resolved DNS addresses against a private/loopback/link-local blocklist but discards those addresses; fetch() and Chromium navigation then re-resolve the hostname independently, so an attacker controlling DNS can answer the validation lookup with a public IP and the connect-time lookup with a private/loopback address moments later, defeating the SSRF guard for links.broken, html.url, and screenshot.capture."
vendor: AKzar1el
package: mcp-web-validator
ecosystem: npm
severity: low
cwe: [CWE-918]
disclosed: "2026-08"
year: 2026
affected: "<= 1.0.0"
credit: Avishai Gonen
advisory: https://github.com/AKzar1el/mcp-web-validator/security/advisories/GHSA-hhq4-w9j2-38hg
tags: [ssrf, dns-rebinding, toctou, mcp]
---

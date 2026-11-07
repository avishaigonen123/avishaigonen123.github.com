---
layout: cve
ghsa_id: GHSA-j3rv-rv99-hg74
title: "brandsystem-mcp: SSRF blocklist bypass via IPv4-mapped IPv6 literals reaches cloud metadata and loopback"
description: "brandsystem-mcp's anti-SSRF guard only checks a few hardcoded IPv6 prefixes and never recognizes IPv4-mapped literals, so writing a blocked address as ::ffff:a.b.c.d reaches loopback, RFC1918 and cloud metadata endpoints."
vendor: Brandcode-Studio
package: "@brandsystem/mcp"
ecosystem: npm
severity: medium
cvss: 6.2
cwe: [CWE-918]
disclosed: "2026-10-25"
year: 2026
affected: "< 0.17.0"
patched: "0.17.0"
credit: Avishai Gonen
advisory: https://github.com/Brandcode-Studio/brandsystem-mcp/security/advisories/GHSA-j3rv-rv99-hg74
tags: [ssrf, mcp]
---

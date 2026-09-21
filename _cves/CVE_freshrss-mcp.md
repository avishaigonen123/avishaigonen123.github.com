---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-qqh2-7466-82f8
title: "freshrss-mcp: SSRF to loopback and cloud metadata via IPv6-mapped bypass in subscribe_feed and unvalidated import_opml"
description: "subscribe_feed's internal-host guard string-matches literals and misses IPv4-mapped IPv6 notation (::ffff:127.0.0.1), while import_opml never calls the guard at all, letting an RSS article or crafted OPML document make FreshRSS fetch loopback services or the cloud metadata endpoint server-side."
vendor: ni-c
package: freshrss-mcp
ecosystem: npm
severity: moderate
cvss: 4.9
cwe: [CWE-918]
disclosed: "2026-08-25"
year: 2026
affected: "<= 0.1.4"
patched: "0.1.5"
credit: Avishai Gonen
advisory: https://github.com/ni-c/freshrss-mcp/security/advisories/GHSA-qqh2-7466-82f8
tags: [ssrf, mcp]
---

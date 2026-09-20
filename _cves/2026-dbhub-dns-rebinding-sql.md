---
layout: cve
cve_id: CVE-2026-61742
ghsa_id: GHSA-fm8p-53ww-hf6w
title: DBHub HTTP transport DNS rebinding allows unauthenticated browser-origin SQL execution
description: The DBHub HTTP transport omits Host header validation, so a browser-based DNS rebinding attack can issue unauthenticated SQL queries from outside the local network.
vendor: bytebase
package: "@bytebase/dbhub"
ecosystem: npm
severity: high
cwe: [CWE-306, CWE-346]
disclosed: "2026-06-24"
year: 2026
affected: <= 0.22.4
credit: Avishai Gonen
advisory: https://github.com/bytebase/dbhub/security/advisories/GHSA-fm8p-53ww-hf6w
tags: [dns-rebinding, sqli, host-header]
---

<!-- Narrative pending: root cause, exploitation, impact, remediation, timeline. -->

---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-888h-2xjf-cgj7
title: "dbx: browser DNS rebinding lets websites execute SQL through local DBX Web"
description: "DBX Web binds all interfaces with no password configured by default and forwards every /api request when no password hash exists, combined with a fully permissive CORS policy, so a DNS-rebound browser can reach a victim's local DBX Web instance and execute database queries and connection management calls with no credential."
vendor: t8y2
package: dbx
ecosystem: cargo
severity: high
cwe: [CWE-306, CWE-346, CWE-350]
disclosed: "2026-06-22"
year: 2026
affected: "<= 0.5.36"
credit: Avishai Gonen
advisory: https://github.com/t8y2/dbx/security/advisories/GHSA-888h-2xjf-cgj7
tags: [dns-rebinding, auth-bypass, database]
---

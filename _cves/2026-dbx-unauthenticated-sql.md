---
layout: cve
cve_id: CVE-2026-55642
ghsa_id: GHSA-rqp4-8fxh-22vh
title: Unauthenticated arbitrary SQL execution in dbx-web
description: "dbx-web fails open when no password is configured: authentication is skipped entirely, so an unauthenticated client can execute arbitrary SQL against connected databases."
vendor: t8y2
package: t8y2/dbx
severity: critical
cvss: 9.8
cwe: [CWE-306]
disclosed: "2026-07-11"
year: 2026
affected: <= 0.5.50
credit: Avishai Gonen
advisory: https://github.com/t8y2/dbx/security/advisories/GHSA-rqp4-8fxh-22vh
tags: [auth-bypass, sqli]
---

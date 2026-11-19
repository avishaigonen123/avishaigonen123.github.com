---
layout: cve
ghsa_id: GHSA-fgq6-mm4x-93qq
title: "@agenticmail/api: two storage sandbox bypasses let any agent read and write other agents' data"
description: "AgenticMail's per-agent storage router interpolated the index where field into SQL and let ATTACH DATABASE past its access checks, so an agent holding only its own scoped key could read or write other agents' tables and files outside its sandbox."
vendor: agenticmail
package: "@agenticmail/api"
ecosystem: npm
severity: high
cvss: 8.6
cwe: [CWE-89]
disclosed: "2026-11-13"
year: 2026
affected: "<= 0.9.64"
patched: "0.9.65"
credit: Avishai Gonen
advisory: https://github.com/agenticmail/agenticmail/security/advisories/GHSA-fgq6-mm4x-93qq
tags: [sqli, auth-bypass, database]
---

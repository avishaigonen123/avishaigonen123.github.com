---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-v8jh-gv7v-3gvq
title: "ssh-mcp: command-substitution classifier bypass lets a 'safe'-only role run unapproved root commands"
description: "ssh-mcp's command classifier never inspects the contents of $(...) or backtick substitution, so a command like echo $(sudo useradd ...) classifies as 'safe' instead of 'privileged', skipping the human-approval gate and letting a safe-only role run root commands on production SSH targets."
vendor: tufantunc
package: ssh-mcp
ecosystem: npm
severity: high
cvss: 8.8
cwe: [CWE-863]
disclosed: "2026-08-25"
year: 2026
affected: ">= 2.0.0, < 2.4.1"
patched: "2.4.1"
credit: Avishai Gonen
advisory: https://github.com/tufantunc/ssh-mcp/security/advisories/GHSA-v8jh-gv7v-3gvq
tags: [auth-bypass, mcp, command-injection]
---

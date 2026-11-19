---
layout: cve
ghsa_id: GHSA-vm2m-87j8-8w9m
title: "@agenticmail/claudecode: unauthenticated bootstrap endpoint gives websites code execution via DNS rebinding"
description: "AgenticMail mounted its Claude Code install route before bearer auth and with no Host or Origin checks, so a DNS-rebound web page could write an attacker-chosen command into ~/.claude.json and get code execution on the victim's machine."
vendor: agenticmail
package: "@agenticmail/claudecode"
ecosystem: npm
severity: critical
cvss: 9.6
cwe: [CWE-306, CWE-346]
disclosed: "2026-11-13"
year: 2026
affected: "@agenticmail/claudecode <= 0.2.39, @agenticmail/api <= 0.9.64"
patched: "@agenticmail/claudecode 0.2.40, @agenticmail/api 0.9.65"
credit: Avishai Gonen
advisory: https://github.com/agenticmail/agenticmail/security/advisories/GHSA-vm2m-87j8-8w9m
tags: [dns-rebinding, rce, auth-bypass, mcp]
---

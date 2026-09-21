---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-m9x7-h9px-p447
title: "mcp-server-circleci: unauthenticated command injection in run_evaluation_tests leads to RCE in the CircleCI runner"
description: "The promptFiles[].fileName parameter of run_evaluation_tests is interpolated unquoted into shell commands submitted to the CircleCI API; in the documented shared-token remote deployment mode this requires no authentication, letting an unauthenticated caller run arbitrary shell under the server's CircleCI token."
vendor: CircleCI-Public
package: mcp-server-circleci
ecosystem: npm
severity: critical
cvss: 10.0
cwe: [CWE-78]
disclosed: "2026-07-22"
year: 2026
affected: "< 0.16.1"
patched: "0.16.1"
credit: Avishai Gonen
advisory: https://github.com/CircleCI-Public/mcp-server-circleci/security/advisories/GHSA-m9x7-h9px-p447
tags: [command-injection, rce, mcp]
---

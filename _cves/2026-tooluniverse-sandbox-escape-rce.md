---
layout: cve
cve_id: CVE-2026-81096
title: "ToolUniverse through 1.2.6: unauthenticated RCE via python_code_executor sandbox escape"
description: The python_code_executor tool can be escaped, and the service is reachable without authentication - together yielding remote code execution.
vendor: ToolUniverse
package: ToolUniverse
ecosystem: pip
severity: critical
cvss: 9.3
cwe: [CWE-94]
disclosed: "2026-08-27"
year: 2026
affected: <= 1.2.6
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/tooluniverse-through-1.2.6-unauthenticated-remote-code-execution-via-python-code-executor-sandbox-escape
tags: [rce, sandbox-escape, mcp]
---

<!-- Narrative pending: root cause, exploitation, impact, remediation, timeline. -->

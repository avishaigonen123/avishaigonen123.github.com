---
layout: cve
cve_id: CVE-2026-81097
title: "rails-mcp-server 1.4.0 through 1.6.0: OS command execution via execute_ruby PTY escape"
description: The execute_ruby tool's PTY handling can be escaped, letting an attacker run arbitrary operating-system commands on the host.
vendor: rails-mcp-server
package: rails-mcp-server
ecosystem: rubygems
severity: high
cvss: 8.6
cwe: [CWE-78]
disclosed: "2026-08-27"
year: 2026
affected: ">= 1.4.0, <= 1.6.0"
credit: Avishai Gonen
advisory: https://www.vulncheck.com/advisories/rails-mcp-server-1.4.0-through-1.6.0-os-command-execution-via-execute-ruby-pty-escape
tags: [command-injection, mcp]
---

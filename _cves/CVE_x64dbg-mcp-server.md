---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-4478-h5jv-647m
title: "x64dbg-mcp-server: unauthenticated MCP transport gives any network client remote control of x64dbg, including RCE"
description: "The x64dbg-MCP Server plugin exposes the full x64dbg debugging API (71 tools) over HTTP/SSE with no authentication and binds 0.0.0.0 by default, letting any network peer execute arbitrary x64dbg commands, attach to processes by PID, and read/write arbitrary memory, out of the box."
vendor: duty1g
package: x64dbg-mcp-server
severity: critical
cvss: 10.0
cwe: [CWE-306]
disclosed: "2026-08-24"
year: 2026
affected: "< 1.0"
patched: "1.0"
credit: Avishai Gonen
advisory: https://github.com/duty1g/x64dbg-mcp-server/security/advisories/GHSA-4478-h5jv-647m
tags: [auth-bypass, rce, mcp]
---

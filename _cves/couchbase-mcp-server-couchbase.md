---
layout: cve
title: "mcp-server-couchbase: DNS rebinding bypasses auth on the Streamable HTTP transport"
description: "The Couchbase MCP server's Streamable HTTP transport accepted any Host and Origin header with no allowlist check and shipped with OAuth disabled by default, so a DNS-rebound web page could drive the victim's own Couchbase MCP server and run every registered tool (bucket, document, schema and SQL++ reads, and writes when read-only mode is off) with the operator's Couchbase credentials. Fixed on main by PR #362, which adds an origin allowlist; not yet in a release."
vendor: couchbase
package: "couchbase-mcp-server"
ecosystem: pip
severity: high
cvss: 8.8
cwe: [CWE-346, CWE-350]
disclosed: "2026-08-20"
year: 2026
affected: "<= 1.1.0"
patched: "Unreleased (PR #362 on main)"
credit: Avishai Gonen
advisory: https://github.com/couchbase/mcp-server-couchbase/pull/362
tags: [dns-rebinding, host-header, mcp]
---

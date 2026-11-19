---
layout: cve
title: "entroly: path traversal in create_context_receipt_from_path reads files outside the project"
description: "Entroly's create_context_receipt_from_path MCP tool passed the caller's path to the ingester without a project-root check, so ../ paths let any MCP caller read files, or whole directory trees, outside the project."
vendor: juyterman1000
package: entroly
ecosystem: pip
severity: medium
cvss: 6.9
cwe: [CWE-22]
disclosed: "2026-08-27"
year: 2026
affected: "< 1.0.80"
patched: "1.0.80"
credit: Avishai Gonen
advisory: https://github.com/juyterman1000/entroly/pull/364
tags: [path-traversal, mcp]
---

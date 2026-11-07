---
layout: cve
ghsa_id: GHSA-vc99-47x2-wx2v
title: "dbmcp: unauthenticated HTTP MCP transport lets a network peer read and write the connected database"
description: "dbmcp's http subcommand serves MCP with no caller authentication, relying only on Host/Origin allowlists that a direct (non-browser) client can satisfy by setting the headers itself, so any network peer can query the database with dbmcp's credentials, and write to it when write mode is enabled."
vendor: haymon-ai
package: dbmcp
ecosystem: cargo
severity: high
cvss: 7.1
cwe: [CWE-306]
disclosed: "2026-10-22"
year: 2026
affected: "<= 0.13.2"
patched: "0.14.0"
credit: Avishai Gonen
advisory: https://github.com/haymon-ai/dbmcp/security/advisories/GHSA-vc99-47x2-wx2v
tags: [auth-bypass, host-header, database, mcp]
---

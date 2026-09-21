---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-4pvf-9j6w-8m88
title: "testkube: unauthenticated Streamable HTTP MCP endpoint grants full control of Testkube workflows and execution data"
description: "Testkube's MCP server in Streamable HTTP mode builds its transport with no inbound auth middleware, so any network client can complete the handshake and call any of the 32 registered tools, including run_workflow, create_workflow, and abort_workflow_execution, using the server's own outbound TK_ACCESS_TOKEN; the Docker image also silently escalates the bind host to 0.0.0.0 when this transport is enabled."
vendor: kubeshop
package: github.com/kubeshop/testkube
ecosystem: go
severity: critical
cwe: [CWE-306]
disclosed: "2026-08-19"
year: 2026
affected: "<= dd574c0"
credit: Avishai Gonen
advisory: https://github.com/kubeshop/testkube/security/advisories/GHSA-4pvf-9j6w-8m88
tags: [auth-bypass, mcp, docker]
---

---
layout: cve
ghsa_id: GHSA-j65h-q28x-6rhf
title: "hub-mcp: unauthenticated HTTP transport runs tools with the operator's Docker Hub token"
description: "Docker Hub MCP Server in --transport=http mode served /mcp with no authentication and no Host or Origin checks, so anyone who could reach the port, directly or through DNS rebinding, acted with the operator's Docker Hub personal access token."
vendor: docker
package: hub-mcp
ecosystem: other
severity: high
cvss: 8.3
cwe: [CWE-306, CWE-346, CWE-350]
disclosed: "2026-10-02"
year: 2026
affected: ">= 0.1.0, <= 0.18.0"
patched: "0.19.0"
credit: Avishai Gonen
advisory: https://github.com/docker/hub-mcp/security/advisories/GHSA-j65h-q28x-6rhf
tags: [auth-bypass, dns-rebinding, host-header, docker, mcp]
---

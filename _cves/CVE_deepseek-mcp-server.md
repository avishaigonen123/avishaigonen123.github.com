---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-pf89-39r3-75vq
title: "deepseek-mcp-server: DNS rebinding bypasses Host-validation guard in the shipped Docker default, exposing the DeepSeek API key"
description: "The MCP SDK's Host-header validation only installs for host=127.0.0.1/localhost/::1 or an explicit allowedHosts list; the project's own Dockerfile/docker-compose.yml runs with host=0.0.0.0 and no allowedHosts, so a DNS-rebound browser can reach the endpoint and invoke deepseek_chat/deepseek_fim under the operator's API key with no credential."
vendor: arikusi
package: deepseek-mcp-server
ecosystem: npm
severity: high
cwe: [CWE-346]
disclosed: "2026-09-05"
year: 2026
affected: ">= 1.8.0, < 2.3.0"
patched: "2.3.0"
credit: Avishai Gonen
advisory: https://github.com/arikusi/deepseek-mcp-server/security/advisories/GHSA-pf89-39r3-75vq
tags: [dns-rebinding, mcp, docker]
---

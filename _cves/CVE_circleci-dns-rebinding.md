---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-jwj7-74jh-p5c4
title: "mcp-server-circleci: DNS rebinding allows invocation of MCP tools using the server-held PAT"
description: "The local MCP server did not validate Host/Origin headers, so a DNS-rebinding attack from a malicious webpage could reach the local MCP endpoint and invoke tools such as pipeline execution, workflow reruns, and rollbacks under the victim's CircleCI Personal Access Token."
vendor: CircleCI-Public
package: mcp-server-circleci
ecosystem: npm
severity: high
cwe: [CWE-346, CWE-918]
disclosed: "2026-07-22"
year: 2026
affected: "< 0.17.0"
patched: "0.17.0"
credit: Avishai Gonen
advisory: https://github.com/CircleCI-Public/mcp-server-circleci/security/advisories/GHSA-jwj7-74jh-p5c4
tags: [dns-rebinding, ssrf, mcp]
---

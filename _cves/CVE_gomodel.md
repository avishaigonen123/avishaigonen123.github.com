---
layout: cve
cve_id: CVE-2026-NONE
ghsa_id: GHSA-2qr4-ww3x-mq4g
title: "gomodel: DNS rebinding bypasses the project's own claimed Origin-check defense, exposing the aggregated MCP tool surface"
description: "gomodel documents a DNS-rebinding defense (http.CrossOriginProtection with no trusted-origin configured), but its fallback check only compares Origin's hostname to Host's hostname, which a real DNS rebind always satisfies, letting an unauthenticated rebound caller reach the MCP gateway and its aggregated tools under the project's own documented Quick Start."
vendor: ENTERPILOT
package: gomodel
ecosystem: go
severity: moderate
cvss: 5.8
cwe: [CWE-350]
disclosed: "2026-08-30"
year: 2026
affected: ">= v0.1.52, <= v0.1.79"
patched: "v0.1.80"
credit: Avishai Gonen
advisory: https://github.com/ENTERPILOT/GoModel/security/advisories/GHSA-2qr4-ww3x-mq4g
tags: [dns-rebinding, mcp]
---

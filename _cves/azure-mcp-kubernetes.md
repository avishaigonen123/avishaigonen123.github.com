---
layout: cve
title: "mcp-kubernetes: DNS rebinding lets a website run kubectl under the victim's Kubernetes context"
description: "Azure mcp-kubernetes served its streamable-http and SSE transports without Host or Origin validation or caller authentication, so a DNS-rebound web page could drive kubectl through the server's kubeconfig at whatever access level the operator configured."
vendor: Azure
package: mcp-kubernetes
ecosystem: go
severity: high
cvss: 8.8
cwe: [CWE-346, CWE-306]
disclosed: "2026-07-23"
year: 2026
affected: "<= 0.0.15"
patched: "0.0.16"
credit: Avishai Gonen
advisory: https://github.com/Azure/mcp-kubernetes/pull/159
bounty: MSRC
tags: [dns-rebinding, host-header, auth-bypass, mcp]
---

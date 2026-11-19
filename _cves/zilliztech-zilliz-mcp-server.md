---
layout: cve
title: "zilliz-mcp-server: caller-controlled endpoint leaks the Zilliz Cloud API token"
description: "The Milvus data-plane tools accepted an endpoint argument from the caller and sent the server's ZILLIZ_CLOUD_TOKEN to it, so a caller or a prompt-injected agent could receive the token at any URL."
vendor: zilliztech
package: zilliz-mcp-server
ecosystem: pip
severity: high
cvss: 7.1
cwe: [CWE-918, CWE-522]
disclosed: "2026-08-18"
year: 2026
affected: "<= 1.0.0"
patched: "fixed in pull request #5"
credit: Avishai Gonen
advisory: https://github.com/zilliztech/zilliz-mcp-server/pull/5
tags: [ssrf, credential-disclosure, mcp]
---

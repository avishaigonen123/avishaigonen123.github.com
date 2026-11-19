---
layout: cve
title: "kubently: kubectl --raw bypasses the command whitelist and exposes Secrets and ConfigMaps"
description: "Kubently's kubectl command whitelist only checked the first argument and allowed unknown flags, so any API-key holder could run kubectl get --raw against the API server and read Secrets and ConfigMaps the whitelist is meant to block."
vendor: kubently
package: kubently
ecosystem: other
severity: high
cvss: 7.1
cwe: [CWE-863]
disclosed: "2026-08-25"
year: 2026
affected: "<= 1.1.2"
patched: "fixed in pull request #124"
credit: Avishai Gonen
advisory: https://github.com/kubently/kubently/pull/124
tags: [auth-bypass, credential-disclosure, mcp]
---

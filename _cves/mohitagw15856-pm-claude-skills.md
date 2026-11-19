---
layout: cve
title: "pm-claude-skills: community registry sha256 pin is not verified on install"
description: "pm-claude-skills installed community skills without enforcing the sha256 pin recorded in its registry, so a changed upstream SKILL.md could be installed without the review the pin is meant to guarantee."
vendor: mohitagw15856
package: pm-claude-skills
ecosystem: npm
severity: high
cvss: 7.1
cwe: [CWE-494]
disclosed: "2026-10-11"
year: 2026
affected: "< 83.0.0"
patched: "83.0.0"
credit: Avishai Gonen
advisory: https://github.com/mohitagw15856/pm-claude-skills/pull/355
tags: [supply-chain]
---

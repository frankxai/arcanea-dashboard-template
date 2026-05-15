# arcanea-dashboard-template — AGENTS.md

Starter template for Arcanea dashboard applications.

## Harness

- Manifest: `.agent-harness.json`
- Risk: template
- Deploy policy: none
- Health: `pnpm dev`
- Agent files: `AGENTS.md`, `CLAUDE.md`
- Global hooks: disabled.

## Operating Rules

1. Keep dashboard primitives reusable and dependency-light.
2. Do not hard-code private workspace paths, production credentials, or FrankX-specific content.
3. Preserve template ergonomics for a fresh install.
4. Use existing package scripts when validating; do not invent deploy behavior.


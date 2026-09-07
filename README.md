## Secret Scanning

This project uses [gitleaks](https://github.com/gitleaks/gitleaks) to block commits containing secrets (API keys, tokens, credentials...) before they reach git history.

### Installation

| OS      | Command                                                                            |
| ------- | ---------------------------------------------------------------------------------- |
| macOS   | `brew install gitleaks`                                                            |
| Windows | `scoop install gitleaks`                                                           |
| Linux   | See [official installation guide](https://github.com/gitleaks/gitleaks#installing) |

### How it works

The `secret-scan` job runs on every `pre-commit`, scanning staged changes only (`gitleaks protect --staged`). If gitleaks is not installed, the hook fails with an install guide link.

### Project-specific configuration

Custom rules and allowlist entries live in `.gitleaks.toml` at the repo root. Update this file when:

- A false positive blocks a legitimate commit (test fixtures, mock secrets)
- A new secret pattern specific to this project needs detection (internal API key format, etc.)

<!--
MAINTENANCE NOTE:
This heading ("## Secret Scanning") is referenced by an anchor link in `lefthook.yml`
(job: secret-scan, error message when gitleaks is not installed).
If you rename or remove this heading, update the corresponding anchor in `lefthook.yml`
to keep the "Remote guide" link working.
-->

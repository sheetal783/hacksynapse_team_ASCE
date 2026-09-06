# AgiesAI Sentinel — Chrome Extension

Lightweight Manifest V3 Chrome extension that intercepts ChatGPT inputs and checks them with the local AgiesAI Sentinel detection backend to prevent accidental leakage of secrets or PII.

## Features
- Intercepts ChatGPT prompt submissions before they are sent.
- Runs a client-side quick-check, then forwards text to the local `/api/detect` backend.
- Enforces backend policy decisions: ALLOW, WARN (user prompt), or BLOCK.
- Records only incident metadata (no raw prompt storage).

## Included files
- `manifest.json` — extension manifest (MV3).
- `background.js` — service worker / background logic.
- `content.js` — page script that captures ChatGPT inputs.
- `popup.html`, `popup.js`, `popup.css` — optional UI for demo identity selection and status.
- `README.md` — this file.

## Quick install (developer)
1. If you use the backend, start it locally (example):

```powershell
uvicorn app.main:app --reload --port 8000
```

2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this `extension` folder.
5. Open `https://chat.openai.com/` (or the target site) and test.

## Behavior
- BLOCK: submission is prevented.
- WARN: the user is shown a warning and can choose to cancel or continue.
- ALLOW: the submission proceeds.
- If the backend is unreachable, the extension defaults to fail-closed (does not send the message).

## Development notes
- To iterate, edit the files under `extension/` and reload the unpacked extension in Chrome.
- Console logs appear in the extension service worker (chrome://inspect) and the page context DevTools.

## Contributing
Open an issue or create a PR with your changes. Keep changes scoped and document how to test manually.

## License
Use the repository license (if any). If none, add a LICENSE file describing terms.



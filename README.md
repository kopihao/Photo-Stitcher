# 📸 Photo Stitcher — Private. Offline. Instant.

> Combine multiple photos into one — without uploading a single byte.

[![Live Demo](https://img.shields.io/badge/Try%20It-Live%20Demo-1565C0?style=for-the-badge)](https://kopihao.github.io/Photo-Stitcher/)
[![Version](https://img.shields.io/badge/version-1.0.3-BBDEFB?style=for-the-badge)](https://github.com/kopihao/Photo-Stitcher/releases)
[![License](https://img.shields.io/badge/license-Apache%202.0-green?style=for-the-badge)](LICENSE)

---

## Why Photo Stitcher?

Every other photo tool wants you to upload your images to a server. Photo Stitcher doesn't. Your photos **never leave your device** — not even for a millisecond.

| Other Tools | Photo Stitcher |
|-------------|---------------|
| Upload to server → process → download | Process instantly in your browser |
| Requires internet | Works offline after first visit |
| May store your data | Zero data collection. Period. |
| Slow on large files | Instant — no upload/download wait |

---

## ✨ Features

🔒 **100% Private** — All processing happens in your browser. No server. No uploads. No tracking.

⚡ **Instant Results** — No waiting for uploads or server processing. Stitch photos in milliseconds.

📴 **Works Offline** — Install as a PWA and use it anywhere — airplane, subway, no-signal zones.

🌍 **20+ Languages** — Auto-detects your region and prioritizes your language. Supports English, 中文, 日本語, 한국어, Español, Français, Deutsch, Português, Русский, हिंदी, العربية, and more.

📱 **Any Device** — Desktop, tablet, phone. Chrome, Safari, Firefox. Just works.

🎯 **Retina-Sharp Output** — DPR-aware rendering ensures crisp results on high-resolution displays.

---

## 🚀 Try It Now

**No install required.** Open the link and start stitching:

### 👉 [https://kopihao.github.io/Photo-Stitcher/](https://kopihao.github.io/Photo-Stitcher/)

Or install it on your phone:
- **Android** — Menu ⋮ → "Add to Home screen"
- **iOS** — Share ⎙ → "Add to Home Screen"

---

## 🛡️ Privacy Guarantee

This isn't marketing speak. It's architecturally enforced:

- ✅ **Zero server uploads** — no backend exists to receive your data
- ✅ **Zero analytics** — no Google Analytics, no tracking pixels, no cookies
- ✅ **Zero third-party code** — no CDNs, no external scripts, no dependencies
- ✅ **Fully auditable** — single HTML file, view source anytime
- ✅ **Works offline** — proof that no server is needed

**Verify it yourself:** Open DevTools → Network tab → upload photos → watch zero requests leave your device.

Perfect for handling sensitive documents, medical records, legal files, or any photos you don't want in someone else's cloud.

---

## 💡 Use Cases

| Scenario | How |
|----------|-----|
| 📄 **Combine document scans** | Stitch multi-page scans into one long image |
| 📱 **Merge screenshots** | Join chat screenshots or long webpage captures |
| 🧾 **Receipt management** | Combine multiple receipts into a single file |
| 📸 **Social media content** | Create vertical photo stories or before/after comparisons |
| 🏥 **Sensitive documents** | Process medical, legal, or financial images with zero cloud exposure |
| 🏢 **Enterprise compliance** | Meet data sovereignty requirements — nothing leaves the device |

---

## 🏗️ Technical Highlights

- **Blob-based storage** — photos stored as binary blobs, not base64 strings (~33% less memory)
- **Device-aware processing** — adapts image resolution to screen DPR (max 2048px)
- **createImageBitmap** — off-main-thread image decoding with fallback for older browsers
- **Smart save pipeline** — Blob download → PNG sessionStorage → JPEG fallback → graceful error
- **Network-first SW** — always serves fresh HTML when online, cached version when offline
- **Single source versioning** — `version.js` drives both SW cache and UI display

---

## 🤝 Support This Project

Photo Stitcher is **free, ad-free, and open source**. If it saves you time or protects your privacy, consider supporting its development:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-☕-6D4C41?style=for-the-badge)](https://ko-fi.com/kopihao)

Every coffee keeps this tool running, ad-free, and improving.

---

## 👤 Author

Built with ❤️ by **[kopihao](https://www.linkedin.com/in/kopihao/)** — Anak Malaysia 🇲🇾

---

## 📄 License

Copyright © 2026 kopihao

Licensed under the [Apache License 2.0](LICENSE) — free to use, modify, and distribute.

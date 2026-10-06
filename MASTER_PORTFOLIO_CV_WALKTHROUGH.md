# 📘 MASTER PORTFOLIO & CV WALKTHROUGH
### Ibnu Zaki Alhawari — Product-Minded Mobile Engineer (Android & AI-Augmented Workflows)

> **Dokumen Panduan Induk (Master Reference Guide)**  
> Dibuat sebagai *single source of truth* untuk seluruh informasi profil, strategi positioning, naskah CV, arsitektur teknis proyek, serta panduan modifikasi web portofolio masa depan.

---

## 📑 DAFTAR ISI
1. [Executive Profile & Identity Positioning](#1-executive-profile--identity-positioning)
2. [Master CV Template (Copy-Paste Ready)](#2-master-cv-template-copy-paste-ready)
3. [Dossier Teknis 5 Proyek Mobile Unggulan](#3-dossier-teknis-5-proyek-mobile-unggulan)
   - [3.1 Care360 (Real-Time 3D Telemetry & Geofencing)](#31-care360)
   - [3.2 AeroDrop / AirDrop X (Gigabit LAN P2P File Transfer)](#32-aerodrop--airdrop-x)
   - [3.3 ScrollSnap (Smart Long-Screenshot & Stitching Engine)](#33-scrollsnap)
   - [3.4 Stick.it / StickerCapture (Screen to Animated WebP Stickers)](#34-stickit--stickercapture)
   - [3.5 JSONFlow (High-Performance JSON Inspector DevTool)](#35-jsonflow)
4. [Struktur Web Portofolio & Panduan Update](#4-struktur-web-portofolio--panduan-update)
5. [Interview & Cold Outreach Cheat-Sheet (Khusus Dash Electric & Startups)](#5-interview--cold-outreach-cheat-sheet)

---

## 1. EXECUTIVE PROFILE & IDENTITY POSITIONING

### A. Siapa Kamu di Mata Industri?
Kamu adalah **Product-Minded Mobile Engineer** — tipe engineer langka yang menggabungkan:
1. **Kecepatan Eksekusi Ekstrem (0-to-1 in 1–3 Days):** Memanfaatkan Claude Code dan agentic tooling untuk melibas fase development dari ide, UI, integrasi backend, hingga rilis ke Google Play Store dalam hitungan hari.
2. **Penguasaan Sub-sistem Native Android Nyata:** Bukan hanya wrapper web, kamu menguasai subsistem low-level Android: *Background Services, Foreground Service, WorkManager, MediaProjection, AccessibilityService, ContentProvider, MediaScanner, dan Wi-Fi Direct socket streaming*.
3. **Validasi Pasar & Metrik Nyata:** Portofolio kamu bukan tugas kuliah di emulator, melainkan **10,000+ Total Downloads** dan **600+ Daily Active Users (DAU)** organik di Google Play Store.
4. **Product-Market Fit (PMF) & UI/UX Taste:** Pemenang Juara 2 Lomba Desain Web Nasional (INTECH FEST 2025). Kamu mengerti psikologi pengguna, alur navigasi yang intuitif, serta optimasi konversi ASO.

### B. Cara Menjawab Pertanyaan: "Ngoding Pakai AI Tanpa Menghafal Sintaks?"
Jika ditanya saat interview:
> *"Bagi saya, sintaks hanyalah implementasi detail yang bisa di-generate dan diverifikasi dalam hitungan detik. Kekuatan utama saya adalah **Software Architecture, System Design, Android Lifecycle understanding, dan Product Judgment**. Saya menggunakan Claude Code sebagai akselerator agar bisa merilis fitur 5x lebih cepat dibanding dev tradisional, namun saya tetap memegang kendali penuh atas audit memori, concurrency thread, dan stabilitas produksi."*

---

## 2. MASTER CV TEMPLATE (COPY-PASTE READY)

```text
================================================================================
IBNU ZAKI ALHAWARI
Product-Minded Mobile Engineer (Android & AI-Augmented Workflows)
Yogyakarta, Indonesia | +62 858-6217-4003 | zakiibnu723@gmail.com
LinkedIn: linkedin.com/in/ibnuzakial | GitHub: github.com/zakiibnu723
Portfolio: ibnuzakial.vercel.app
================================================================================

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
Product-minded Mobile Engineer specializing in Native Android Development (Kotlin, 
Jetpack Compose) and AI-Augmented Software Workflows (Claude Code). Proven track 
record of building and shipping production-grade mobile applications to the 
Google Play Store with 10,000+ total downloads and 600+ Daily Active Users (DAU). 
Deep technical expertise in engineering resilient Android Background Services, 
real-time map telemetry, and Firebase behavioral analytics. Full end-to-end ownership 
spanning product design, mobile architecture, backend integration, and store 
release in rapid 1–3 day sprint cycles.


CORE COMPETENCIES & TECHNICAL SKILLS
--------------------------------------------------------------------------------
- Mobile Engineering: Native Android, Kotlin, Jetpack Compose, Android SDK, 
  Android Lifecycle, Background Services, Foreground Services, WorkManager.
- Core Android Subsystems: MediaProjection, VirtualDisplay, AccessibilityService, 
  Storage Access Framework (SAF), ContentProvider, MediaScanner.
- Real-Time & Networking: RESTful APIs, WebSockets, Real-Time Geolocation & Maps, 
  Local P2P Networking (Wi-Fi Direct, Raw TCP Sockets), Push Notifications (FCM).
- AI & Modern Tooling: Claude Code (Advanced CLI & Agentic Workflows), Prompt 
  Engineering, Automated Code Review, Rapid End-to-End Prototyping.
- Monitoring & Analytics: Firebase (Analytics, Crashlytics, FCM, Remote Config), 
  Custom Event Tracking, User Funnel Analysis, Performance Monitoring.
- Architecture: Clean Architecture, MVVM, StateFlow, Coroutines, Target SDK 35/36.


KEY MOBILE PRODUCTION PROJECTS
--------------------------------------------------------------------------------

1. Care360 — Real-Time Family Telemetry & Interactive 3D Geospatial App
   Tech: Kotlin, Jetpack Compose, MapLibre Native, 3D Vector Maps, WebSockets, Supabase
   • Overview: Real-time device location tracking and safety telemetry mobile app featuring interactive 3D map projection with MapLibre.
   • Architected persistent Android Background Location Services ensuring continuous coordinate ingestion during deep-sleep OS states.
   • Integrated MapLibre Native SDK with CARTO Voyager vector tiles, 52° cinematic tilt angle, 3D buildings, and dynamic camera fly-to interpolation.
   • Built safe-zone geofencing (emerald & cyan neon radius perimeters) with instant boundary crossing alerts via WebSockets & Supabase.
   • Implemented 3-second hold anti-accidental emergency SOS button with haptic feedback and real-time alert dispatch.

2. AeroDrop (AirDrop X) — Gigabit LAN P2P File Transfer & Zero-Install Web Gateway
   Status: Live on Google Play Store (300+ DAU) | Tech: Kotlin, Jetpack Compose, TCP Sockets, Canvas
   • Overview: High-speed local device-to-device file transfer engine with zero application install on the receiver side (PC/Mac/iOS via airdropme.site).
   • Engineered high-throughput LAN file transfer engine using local HTTP streaming and raw TCP sockets with zero internet data consumption.
   • Achieved Zero-Install receiver workflow allowing any PC, Mac, or iPhone on the same Wi-Fi to receive files via vanity URL or QR code.
   • Crafted 60-120 FPS pulsing radar using Jetpack Compose Canvas and trigonometric orbital node placement for nearby devices.
   • Integrated native Android Share Sheet (Intent.ACTION_SEND) launching a translucent bottom sheet with Apple-grade spring physics.
   • Implemented automated MediaScanner service routing received media to Downloads/AirDrop/ for instant gallery indexing.

3. ScrollSnap — Smart Long-Screenshot & Automated Canvas Stitching Engine
   Tech: Kotlin, Android SDK, MediaProjection, AccessibilityService, Bitmap Recycling Pipeline
   • Overview: Intelligent Android scrolling screenshot utility auto-cropping sticky headers and keyboards for seamless stitch captures.
   • Pioneered a hybrid capture architecture combining MediaProjection screen recording and AccessibilityService view hierarchy inspection.
   • Engineered smart boundary detection algorithm that automatically identifies and crops sticky headers, FABs, and keyboards before stitching.
   • Eliminated visual overlap and duplicate content bugs common in competitor apps with 10M+ downloads without requiring target app cooperation.
   • Architected a low-memory bitmap processing and recycling pipeline handling 7,000px+ high-res canvas stitches without OOM crashes.

4. Stick.it (StickerCapture) — Screen Capture to Animated WhatsApp Sticker Studio
   Status: Live on Google Play Store | Tech: Kotlin, Target SDK 35/36, MediaProjection, Adaptive WebP
   • Overview: Content capture studio converting screen videos and reels into compliant static & animated WhatsApp WebP stickers in seconds.
   • Re-architected core capture engine using MediaProjection, VirtualDisplay, and direct-buffer extraction, eliminating ANRs and GC freeze on Android 15/16.
   • Engineered CapCut-style filmstrip timeline trimmer with real-time playhead scrubbing and WhatsApp's strict 3.0-second limit enforcement.
   • Developed Adaptive WebP 512x512 compression engine ensuring zero black-border artifacts and strict compliance under WhatsApp's 500 KB limit.
   • Implemented custom StickerContentProvider and WhatsApp Intent handshake for seamless one-tap sticker pack installation.

5. JSONFlow — High-Performance Mobile JSON Inspector & API Debugging DevTool
   Tech: Kotlin, Jetpack Compose, Virtualized Tree Rendering Engine, Regex Parser
   • Overview: Developer-centric mobile utility designed to inspect, parse, and navigate heavy JSON payloads directly on Android phones with zero lag.
   • Built virtualized collapsible tree rendering engine capable of loading multi-megabyte JSON payloads with 60 FPS smooth scrolling.
   • Implemented real-time parser with precise syntax error highlighting, character coordinates, and line pinpointing.
   • Engineered deep key-value search indexing with regex query support and nested branch auto-expansion.


ENGINEERING VELOCITY & AI-AUGMENTED WORKFLOW
--------------------------------------------------------------------------------
- Pioneered AI-assisted mobile development leveraging Claude Code to scaffold features, 
  refactor legacy components, and automate edge-case unit test coverage.
- Achieved rapid end-to-end delivery cycles, routinely turning product briefs into 
  functional, deployable builds in 1–3 days.
- Strong technical judgment to audit, benchmark, and debug AI-generated code for 
  memory safety, thread concurrency, and Android lifecycle integrity.


EDUCATION & HONORS
--------------------------------------------------------------------------------
Bachelor of Science in Informatics / Computer Science (S1)
UIN Sunan Kalijaga Yogyakarta (2022 – Present / Expected 2026)

Honors & Competitions:
- 2nd Place Winner (Silver Medal) — National Web Design Competition, INTECH FEST 2025
- 3rd Place Winner (Bronze Medal) — National Web Development Competition, I/O FEST 2025
- National Finalist — National Innovation Week 3.0 (Digital Business Transformation)
================================================================================
```

---

## 3. DOSSIER TEKNIS 5 PROYEK MOBILE UNGGULAN

Setiap proyek ini memiliki arsitektur nyata di direktori `C:\Startups`. Gunakan poin-poin berikut saat interview teknis:

### 3.1 Care360
* **Lokasi Folder:** `C:\Startups\Care360`
* **Visi Produk:** Aplikasi pelacak lokasi anak dan keluarga real-time dengan sudut pandang peta 3D interaktif yang memberikan kepastian rasa aman dalam 1 detik (*glanceable safety status*).
* **Arsitektur Teknis:**
  * **Arsitektur:** Single Activity, Multi-Screen Compose State Flow (`ParentDashboardScreen`, `ChildModeScreen`, `PaywallScreen`).
  * **Peta 3D Vektor:** MapLibre SDK Native terintegrasi dengan CARTO Voyager tiles pada sudut kemiringan **52° Cinematic Tilt Angle** dengan gedung-gedung 3D yang bisa di-toggle (2D/3D). Dilengkapi fungsi kamera *fly-to* dinamis ke posisi anak yang dipilih.
  * **Geofencing:** Radius zona aman (misal sekolah 250m, rumah 180m) dengan efek border neon transparan.
  * **Background Service:** Service lokasi Android persisten hemat daya yang tetap mengambil koordinat GPS saat layar mati/deep sleep.
  * **Emergency SOS:** Tombol hold 3 detik dengan haptic feedback dan progress melingkar anti-salah pencet yang langsung menulis alert darurat ke tabel Supabase.
  * **Monetisasi:** Integrasi Google Play Billing dengan paket tahunan Rp 399.000 dan funnel 3-Day Free Trial.

### 3.2 AeroDrop (AirDrop X)
* **Lokasi Folder:** `C:\Startups\aerodrop`
* **Domain Web:** `airdropme.site/<username>`
* **Visi Produk:** Menghadirkan pengalaman magis Apple AirDrop ke ekosistem Android dan Windows/Mac/iOS tanpa mewajibkan pihak penerima menginstal aplikasi apa pun.
* **Arsitektur Teknis:**
  * **Zero-Install Workflow:** Komputer atau iPhone penerima di jaringan Wi-Fi yang sama cukup membuka browser di `airdropme.site/<username>` atau scan QR Code di HP pengirim.
  * **High-Throughput P2P:** Menggunakan HTTP streaming lokal dan raw TCP socket streaming via Ktor, menghasilkan kecepatan transfer LAN Gigabit penuh hingga 48+ MB/s tanpa kuota internet.
  * **Radar 60-120 FPS:** Dibuat dengan Jetpack Compose `Canvas` yang merender 3 cincin konsentris berdenyut (*sin-wave breathing animation*) dan node perangkat mengorbit dengan kalkulasi trigonometri (`sin`/`cos`).
  * **Native ShareSheet:** Terintegrasi dengan sistem Android `Intent.ACTION_SEND` yang memunculkan bottom-sheet setengah layar transparan (*iOS grabber pill*) langsung dari galeri tanpa membuka aplikasi utama.
  * **Auto MediaScanner:** File gambar/video yang diterima otomatis disimpan di `Downloads/AirDrop/` dan langsung dipicu ke `MediaScannerConnection` agar seketika muncul di Google Photos / Galeri HP.

### 3.3 ScrollSnap
* **Lokasi Folder:** `C:\Startups\ScrollSnap`
* **Visi Produk:** Aplikasi penangkap *scrolling screenshot* panjang yang memecahkan cacat fatal aplikasi kompetitor (10M+ download) yang sering menduplikasi header/keyboard atau terpotong berantakan.
* **Arsitektur Teknis:**
  * **Arsitektur Hybrid Inovatif:** Menggabungkan `MediaProjection` (pengambil rekaman layar) + `AccessibilityService` (pembaca struktur *view hierarchy*).
  * **Smart Boundary Detection:** Aplikasi membaca kerangka UI aplikasi target secara real-time, mendeteksi area mana yang bergerak (*scrollable container*) dan area mana yang statis (*sticky header*, *keyboard*, *floating action button*).
  * **Targeted Crop & Auto-Scroll:** Potongan area statis dibuang sebelum penggabungan dimulai, sehingga hasil jahitan kanvas selalu bersih tanpa duplikasi teks chat atau keyboard.
  * **Zero-OOM Bitmap Pipeline:** Pipeline daur ulang memori bitmap yang mampu menjahit kanvas beresolusi raksasa (7.000px+ / 12MB) tanpa menyebabkan crash *OutOfMemoryError*.
  * **Floating Overlay:** Kontrol melayang dengan throttle kecepatan scroll dan tombol jeda/lanjut.

### 3.4 Stick.it (StickerCapture)
* **Lokasi Folder:** `C:\Startups\StickerCapture`
* **Visi Produk:** Mengubah cuplikan video layar (TikTok, Instagram Reels, cuplikan game/chat) menjadi Stiker WhatsApp resmi (Statis maupun Animasi) dalam hitungan detik.
* **Arsitektur Teknis:**
  * **Target SDK 35/36 (Android 15 & 16 Ready):** Menggantikan engine lama yang sinkron dan boros RAM dengan arsitektur `MediaProjection` + `VirtualDisplay` berorientasi *Zero-GC Direct-Buffer Row Extraction*.
  * **Pemberantasan ANR & Freeze:** Menghilangkan masalah layar kedap-kedip dan UI freeze pada HP Redmi/Xiaomi dengan mengalirkan frame langsung ke asynchronous multi-core disk writer.
  * **Filmstrip Timeline Trimmer:** Editor timeline ala CapCut dengan visualisasi filmstrip, scrubbing playhead, dan pembatas presisi 3.0 detik (syarat mutlak WhatsApp).
  * **Adaptive WebP Encoder:** Encoding WebP 512×512 transparan otomatis yang menjamin ukuran file selalu berada di bawah batas ketat 500 KB WhatsApp tanpa garis tepi hitam/artefak padding.
  * **Integrasi WhatsApp Resmi:** Custom `StickerContentProvider` dan intent handshake resmi WhatsApp untuk instalasi pack 1-ketukan ke chat.

### 3.5 JSONFlow
* **Lokasi Folder:** `C:\Startups\.IBNUZAKIAL\asset\[CHAT] 01 - Building A Superior JSON Tool.md`
* **Visi Produk:** Utilitas devtools mobile bagi mobile developer dan QA engineer untuk memeriksa, memvalidasi, dan menavigasi respon API yang berukuran besar langsung di ponsel tanpa lag.
* **Arsitektur Teknis:**
  * **Virtualized Tree Engine:** Render pohon data kolapsibel virtual yang hanya merender node yang tampak di viewport layar, memungkinkan scrolling 60 FPS pada file JSON berukuran megabyte.
  * **Real-Time Syntax Pinpointing:** Menampilkan posisi error baris dan karakter secara presisi jika terjadi payload parsing failure.
  * **Deep Regex Search:** Pencarian key-value cepat dengan auto-expand cabang yang cocok.
  * **Action Tools:** Satu ketukan untuk merapikan (beautify), memadatkan (minify), menyalin path JSON, atau mengekspor file.

---

## 4. STRUKTUR WEB PORTOFOLIO & PANDUAN UPDATE

### A. Lokasi File Kunci
| Bagian Web | File Sumber | Keterangan |
| :--- | :--- | :--- |
| **Data Induk Proyek & Bio** | [`src/data/portfolioData.ts`](file:///c:/Startups/.IBNUZAKIAL/src/data/portfolioData.ts) | Tempat mengubah judul, subtitle, metrik, deskripsi, dan daftar project |
| **Hero & Stat Counters** | [`src/components/Hero.tsx`](file:///c:/Startups/.IBNUZAKIAL/src/components/Hero.tsx) | Headline utama, bio singkat, pill stack, dan counter 10K+ / 600+ |
| **Running Badges (Marquee)** | [`src/components/TechMarqueeSlider.tsx`](file:///c:/Startups/.IBNUZAKIAL/src/components/TechMarqueeSlider.tsx) | Daftar 10 badge berjalan di bawah hero |
| **Filter & Kartu Proyek** | [`src/components/ProjectShowcase.tsx`](file:///c:/Startups/.IBNUZAKIAL/src/components/ProjectShowcase.tsx) | Filter 'All', 'Mobile Apps', 'Fullstack Web' & modal detail |
| **Interactive CV Modal** | [`src/components/CvModal.tsx`](file:///c:/Startups/.IBNUZAKIAL/src/components/CvModal.tsx) | Tampilan CV printable/downloadable di website |
| **Folder Gambar Publik** | [`public/`](file:///c:/Startups/.IBNUZAKIAL/public) | Menyimpan `care360.png`, `airdrop-x.png`, `scrollsnap.png`, `stickercapture.png`, `jsonflow.png` |

### B. Alur Kerja Saat Ingin Mengubah Konten Web
1. Edit data di `src/data/portfolioData.ts` atau komponen terkait.
2. Jika ada screenshot baru, taruh file di folder `public/` dengan nama yang sama.
3. Jalankan build produksi untuk memperbarui bundle `dist/`:
   ```powershell
   node ./node_modules/vite/bin/vite.js build
   ```
4. Simpan ke Git & Push ke GitHub:
   ```powershell
   git commit -am "chore: update portfolio content"
   git push dash-remote mobile-engineer-dash
   ```

---

## 5. INTERVIEW & COLD OUTREACH CHEAT-SHEET
*(Khusus untuk Melamar ke Dash Electric atau Startup Mobilitas/Logistik)*

### A. Kenapa Profil Kamu Sangat Cocok untuk Dash Electric?
* **Problem Dash Electric:** Mengoperasikan ratusan kurir motor listrik (ALVA) yang mengantarkan paket untuk ZALORA/Janji Jiwa.
* **Tantangan Aplikasi Driver:**
  1. GPS dan koneksi tidak boleh mati saat HP driver ditaruh di kantong/stang motor (diselesaikan oleh pengalaman **Background Services di Care360 & AirDrop X**).
  2. Peta rute & dispatching real-time (diselesaikan oleh pengalaman **MapLibre 3D Vector Maps di Care360**).
  3. Kebutuhan rilis fitur baru mingguan (diselesaikan oleh kemampuan **1–3 Day Claude Code Sprint Cycles**).
  4. Monitoring kesehatan app kurir di jalanan (diselesaikan oleh **Firebase Crashlytics & Analytics funnels**).

### B. Template Cold Email / LinkedIn Outreach ke Tim Dash Electric

**Subjek Email:** Application: Mobile Engineer — Ibnu Zaki Alhawari (10K+ Downloads, Production Native Android & Claude Code)

```text
Halo [Nama Recruiter / Mas Aditya / Mas Robert],

Saya melihat pembukaan posisi Mobile Engineer di Dash Electric, dan saya sangat tertarik dengan misi Dash dalam mendigitalisasi armada logistik kendaraan listrik di Indonesia.

Sebagai seorang Mobile Engineer yang berfokus pada Native Android (Kotlin & Jetpack Compose), saya terbiasa membangun dan merilis aplikasi mobile end-to-end dengan kepemilikan penuh. Saat ini, aplikasi-aplikasi yang saya deploy ke Google Play Store telah mencapai 10.000+ total downloads dengan 600+ Daily Active Users (DAU).

Beberapa pengalaman saya yang sangat relevan dengan operasional driver & armada Dash Electric:
1. Real-Time Telemetry & Background Services: Mengembangkan Care360 dengan MapLibre 3D vector maps dan Android Background Location Services yang persisten saat deep-sleep, serta transfer socket P2P di AirDrop X.
2. Low-Level Android Subsystems: Berpengalaman menangani MediaProjection, VirtualDisplay, WorkManager, dan lifecycle Android modern hingga Target SDK 35/36.
3. AI-Augmented Velocity (Claude Code): Menggunakan Claude Code sebagai bagian inti dari workflow harian saya untuk mengakselerasi siklus rilis fitur 0-to-1 dalam sprint 1–3 hari tanpa mengorbankan stabilitas memori dan crash-free rate.

Portofolio lengkap saya dapat dilihat di: https://ibnuzakial.vercel.app
GitHub: https://github.com/zakiibnu723

Saya sangat antusias untuk berdiskusi lebih lanjut mengenai bagaimana saya dapat membantu mengakselerasi pengembangan aplikasi mobile di Dash Electric.

Terima kasih atas waktu dan perhatiannya.

Salam hangat,
Ibnu Zaki Alhawari
+62 858-6217-4003 | zakiibnu723@gmail.com
```

---
*Dokumen ini tersimpan secara aman di repositori portofolio kamu untuk referensi jangka panjang.*

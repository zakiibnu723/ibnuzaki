export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'web' | 'mobile';
  categoryLabel: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  images?: string[];
  icon?: string;
  githubUrl: string;
  liveUrl?: string;
  hideExternalLinks?: boolean;
  featured: boolean;
  highlights: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  icon: string;
  badge?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  awardBadge: string;
  description: string;
  skills: string[];
  images?: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ibnu Zaki Al",
    title: "Mobile Engineer (Android & AI-Augmented Development)",
    subtitle: "Informatics • UIN Sunan Kalijaga Yogyakarta (2022 — 2026 Expected)",
    shortBio: "Product-minded Mobile Engineer specializing in Native Android Development (Kotlin, Jetpack Compose) and AI-Augmented Software Workflows (AI Agents). Proven track record of building and shipping production-grade mobile applications to the Google Play Store with 10,000+ total downloads and 600+ Daily Active Users (DAU). Deep technical expertise in engineering resilient Android Background Services, real-time map telemetry, and Firebase product analytics. Full end-to-end ownership spanning product design, mobile architecture, backend integration, and store release in rapid 1–3 day sprint cycles.",
    location: "Indonesia (Open to On-site, Hybrid & Remote)",
    status: "Available for Hire",
    email: "zakiibnu723@gmail.com",
    whatsapp: "+62 858-6217-4003",
    whatsappRaw: "6285862174003",
    github: "https://github.com/zakiibnu723",
    linkedin: "https://linkedin.com/in/ibnuzakial",
    stats: [
      { label: "Production Apps", value: "5+", target: 5, suffix: "+" },
      { label: "Total App Downloads", value: "10K+", target: 10, suffix: "K+" },
      { label: "Google Play Store DAU", value: "600+", target: 600, suffix: "+" },
    ]
  },

  projects: [
    {
      id: "care360",
      title: "Care360 📍",
      subtitle: "Real-Time Family Telemetry & Interactive 3D Geospatial App",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Geolocation",
      description: "Real-time family location tracking and safety telemetry mobile app featuring interactive 3D vector maps with MapLibre, persistent battery-efficient background location services, child speed telemetry (24 km/h), and instant safe-zone geofencing alerts.",
      longDescription: "Care360 delivers continuous family location intelligence with zero tracking dropouts wrapped in an ultra-clean, high-contrast Light Theme interface. Built with a Single Activity Multi-Screen Compose State Flow architecture, the app renders full-screen 3D vector maps (MapLibre Native + CARTO Voyager) at a 52° cinematic tilt with dynamic fly-to camera interpolation. Engineered persistent Android Background Services with adaptive battery-safe polling, bi-directional WebSocket coordinate ingestion, a 3-second hold emergency SOS with haptic feedback, and automated safe-zone geofence boundary alerts.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "MapLibre Native", "3D Vector Maps", "Background Services", "WebSockets", "Supabase"],
      metrics: [
        { label: "Map Engine", value: "3D MapLibre" },
        { label: "Telemetry", value: "Real-Time GPS & WS" },
        { label: "Lifecycle", value: "Persistent Background" }
      ],
      icon: "/app-icons/care360-logo.png",
      image: "/care360.png",
      images: [
        "/care360.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Architected persistent Android Background Location Services ensuring continuous coordinate ingestion during deep-sleep OS states",
        "Integrated MapLibre Native SDK with CARTO Voyager vector tiles, 52° cinematic tilt angle, 3D buildings, and dynamic camera fly-to interpolation",
        "Built safe-zone geofencing (emerald perimeter radius) with instant boundary crossing alerts via WebSockets & Supabase",
        "Implemented real-time child telemetry tracking with live speed (24 km/h) and battery status in an ultra-clean Light Theme Material 3 UI",
        "Designed 3-second hold anti-accidental emergency SOS button with haptic feedback and real-time alert dispatch"
      ]
    },
    {
      id: "airdrop-x",
      title: "AeroDrop (AirDrop X) ⚡",
      subtitle: "Gigabit LAN P2P File Transfer & Zero-Install Web Gateway (Live on Play Store)",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Networking",
      description: "High-speed local device-to-device file transfer engine with zero application install on the receiver side (PC/Mac/iOS via airdropme.site), Apple HIG-grade pulsing canvas radar, and native Android ShareSheet integration.",
      longDescription: "AeroDrop replicates the seamless Apple AirDrop experience across Android, Windows, Mac, and iOS without requiring app installation on the receiving end. Built with Jetpack Compose Canvas rendering a 3-ring pulsing radar and trigonometric orbiting device nodes. Features full Gigabit LAN throughput via raw TCP socket streaming & WebSockets (up to 48+ MB/s), an iOS-style Spring Bounce handshake modal, native Android Share Sheet (Intent.ACTION_SEND) bottom-sheet transfer, and automatic MediaScanner gallery indexing in Downloads/AirDrop/.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "TCP Sockets & HTTP", "Canvas Radar", "Native ShareSheet", "MediaScanner", "Play Store Live"],
      metrics: [
        { label: "Store Status", value: "Google Play Live" },
        { label: "Receiver Setup", value: "Zero-Install (Web)" },
        { label: "Throughput", value: "Gigabit LAN Speed" }
      ],
      icon: "/app-icons/aerodrop-logo.png",
      image: "/airdrop-x.png",
      images: [
        "/airdrop-x.png",
        "/airdrop-x-2.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Engineered high-throughput LAN file transfer engine using local HTTP streaming and raw TCP sockets with zero internet data consumption",
        "Achieved Zero-Install receiver workflow allowing any PC, Mac, or iPhone on the same Wi-Fi to receive files via vanity URL or QR code",
        "Crafted 60-120 FPS pulsing radar using Jetpack Compose Canvas and trigonometric orbital node placement for nearby devices",
        "Integrated native Android Share Sheet (Intent.ACTION_SEND) launching a translucent bottom sheet with Apple-grade spring physics",
        "Implemented automated MediaScanner service routing received media to Downloads/AirDrop/ for instant gallery indexing"
      ]
    },
    {
      id: "scrollsnap",
      title: "ScrollSnap 📸",
      subtitle: "Smart Long-Screenshot & Automated Canvas Stitching Engine",
      category: "mobile",
      categoryLabel: "Mobile Engineering & DevTools",
      description: "An intelligent Android scrolling screenshot utility combining MediaProjection screen recording with AccessibilityService UI hierarchy analysis to auto-crop sticky headers and keyboards for seamless stitch captures.",
      longDescription: "ScrollSnap solves the fatal overlapping and duplicate element flaws found in competitor screenshot tools with 10M+ downloads. Built with a hybrid architecture combining Android MediaProjection and AccessibilityService: the app reads target view hierarchies in real time to calculate dynamic scrolling bounds, auto-detects and crops sticky headers, floating action buttons, and virtual keyboards, and executes high-speed bitmap canvas stitching with memory recycling pipelines that eliminate OutOfMemory (OOM) crashes.",
      tags: ["Android", "Kotlin", "MediaProjection", "AccessibilityService", "Smart Stitching", "Bitmap Recycling", "Android SDK"],
      metrics: [
        { label: "Architecture", value: "Hybrid Projection" },
        { label: "Stitching", value: "Smart Header Crop" },
        { label: "Stability", value: "Zero-OOM Pipeline" }
      ],
      icon: "/app-icons/scrollsnap-icon.png",
      image: "/scrollsnap.png",
      images: [
        "/scrollsnap.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Pioneered a hybrid capture architecture combining MediaProjection screen recording and AccessibilityService view inspection",
        "Engineered smart boundary detection algorithm that automatically identifies and crops sticky headers, FABs, and keyboards before stitching",
        "Eliminated visual overlap and duplicate content bugs common in competitor apps without requiring target app cooperation",
        "Architected a low-memory bitmap processing and recycling pipeline handling 7,000px+ high-res canvas stitches without OOM crashes",
        "Designed non-intrusive floating control overlay with auto-scroll speed throttling and manual pause/resume controls"
      ]
    },
    {
      id: "stickercapture",
      title: "Stick.it (StickerCapture) 🎨",
      subtitle: "Real-Time Screen Capture to Animated WhatsApp Sticker Studio (Play Store Live)",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Media",
      description: "An on-screen content capture studio and sticker pack manager that converts videos, reels, and screen clips into compliant static & animated WhatsApp WebP stickers in seconds, featuring a collections studio and filmstrip trimmer.",
      longDescription: "Stick.it transforms any on-screen video or social media clip into compliant WhatsApp stickers in seconds. Engineered for Android 15 & 16 (Target SDK 35/36), replacing legacy synchronous capture with a high-performance MediaProjection VirtualDisplay pipeline, direct-buffer row extraction, and parallel disk writers that eliminate screen flickering and GC thrashing. Features a full sticker pack collections studio, floating speed-dial bubble, CapCut-style 3.0s filmstrip video trimmer, an Adaptive WebP 512x512 encoder, and direct pack export via StickerContentProvider.",
      tags: ["Android", "Kotlin", "Target SDK 35/36", "MediaProjection", "Animated WebP", "StickerContentProvider", "WhatsApp API", "Play Store Live"],
      metrics: [
        { label: "Target SDK", value: "Android 15/16 Ready" },
        { label: "Encoding", value: "Adaptive 512px WebP" },
        { label: "Pipeline", value: "Zero-GC Direct Buffer" }
      ],
      icon: "/app-icons/stickit-logo.png",
      image: "/stickercapture.png",
      images: [
        "/stickercapture.png",
        "/stickercapture-2.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Re-architected core capture engine using MediaProjection, VirtualDisplay, and direct-buffer extraction, eliminating ANRs and GC freeze",
        "Engineered CapCut-style filmstrip timeline trimmer with real-time playhead scrubbing and WhatsApp's strict 3.0-second limit enforcement",
        "Developed Adaptive WebP 512x512 compression engine ensuring zero black-border artifacts and strict compliance under the 500 KB limit",
        "Implemented custom StickerContentProvider and WhatsApp Intent handshake for seamless one-tap sticker pack installation",
        "Built floating speed-dial bubble overlay with magnetic screen-edge snapping and background service lifecycle management"
      ]
    },
    {
      id: "jsonflow",
      title: "JSONFlow ⚡",
      subtitle: "High-Performance Mobile JSON Inspector & API Debugging DevTool",
      category: "mobile",
      categoryLabel: "Mobile Engineering & DevTools",
      description: "A developer-centric mobile utility designed to inspect, parse, and navigate heavy JSON payloads and API responses directly on Android phones with virtualized tree rendering and zero lag.",
      longDescription: "JSONFlow empowers mobile developers, QA engineers, and backend teams to debug structured JSON responses on the go. Solves thread freezes when loading heavy payloads through a virtualized collapsible tree rendering engine. Features syntax color-coding, instantaneous deep key-value regex search, real-time syntax validation pinpointing error line coordinates, and one-click JSON beautification, flattening, and clipboard exporting.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Virtualized Tree", "DevTools", "JSON Parser", "Performance Engine"],
      metrics: [
        { label: "Rendering", value: "Virtualized Tree" },
        { label: "Payload Handling", value: "Multi-MB Lag Free" },
        { label: "Validation", value: "Real-Time Pinpoint" }
      ],
      icon: "/app-icons/jsonflow-logo.png",
      image: "/jsonflow.png",
      images: [
        "/jsonflow.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "Built virtualized collapsible tree rendering engine capable of loading multi-megabyte JSON payloads with 60 FPS scrolling",
        "Implemented real-time parser with precise syntax error highlighting, character coordinates, and line pinpointing",
        "Engineered deep key-value search indexing with regex query support and nested branch auto-expansion",
        "Designed intuitive developer UX with one-tap beautification, minification, path copying, and file export",
        "Integrated Android clipboard listener and HTTP response share intents for instant payload debugging from any app"
      ]
    },
    {
      id: "lively-weather",
      title: "Lively Weather ⛅",
      subtitle: "Real-Time Global Weather Forecast & Atmospheric Dashboard",
      category: "web",
      categoryLabel: "Fullstack Web & Data Viz",
      description: "A modern real-time weather platform capable of tracking global climate conditions. Enables users to monitor current weather, dynamic 24-hour hourly trends, and comprehensive 7-day forecasts for any city worldwide with immersive atmospheric visuals.",
      longDescription: "Lively Weather delivers accurate, real-time meteorological forecasts wrapped in an intuitive and visually engaging interface. Designed to give users instant clarity on atmospheric conditions, the app features interactive location searching, animated background environments that adapt to live weather states, synchronized hourly temperature curves, and extended weekly outlooks with offline-resilient caching.",
      tags: ["Next.js 14", "React 18", "TypeScript", "Prisma ORM", "Chart.js", "SQLite", "Glassmorphism", "Visual Crossing API"],
      metrics: [
        { label: "Coverage", value: "Global Forecast" },
        { label: "Frequency", value: "Hourly & 7-Day" },
        { label: "Experience", value: "Adaptive Visuals" }
      ],
      image: "/lively-weather-1.png",
      images: [
        "/lively-weather-1.png",
        "/lively-weather-2.png",
        "/lively-weather-3.png"
      ],
      githubUrl: "https://github.com/zakiibnu723/Lively-Weather",
      liveUrl: "https://lively-weather.vercel.app/",
      featured: true,
      highlights: [
        "Worldwide instant city & coordinate weather lookup with responsive search",
        "Adaptive ambient weather themes dynamically matching live conditions (Rain, Clear, Clouds, Storm)",
        "Synchronized 24-hour hourly trend visualizer for temperature and precipitation curve",
        "7-day daily forecast breakdown with UV index, wind speed, humidity, and atmospheric metrics",
        "Smart fast-caching system ensuring instant page reloads and smooth user flow"
      ]
    },
    {
      id: "solar-energy-map",
      title: "Indonesia Solar Energy Map 🗺️",
      subtitle: "Interactive National Solar Potential & Geospatial Analytics Platform",
      category: "web",
      categoryLabel: "Geospatial & Fullstack Web",
      description: "An interactive geospatial visualization tool mapping renewable solar energy potential across Indonesia. Features hierarchical navigation from national down to district levels, regional irradiation statistics, and clean energy feasibility analysis.",
      longDescription: "Indonesia Solar Energy Map transforms complex solar irradiance datasets into an accessible, interactive geospatial platform. Built to support renewable energy exploration, researchers, and project planners, the tool allows users to seamlessly explore Global Horizontal Irradiance (GHI) benchmarks across 37 provinces and 500+ districts with detailed temporal analytics and estimation metrics.",
      tags: ["Next.js 16+", "Leaflet", "React-Leaflet", "Prisma ORM", "TypeScript", "Chart.js", "GeoJSON", "Open-Meteo API"],
      metrics: [
        { label: "Provinces & Districts", value: "37 & 514" },
        { label: "Analytics", value: "GHI, DHI, DNI" },
        { label: "Scope", value: "National Scale" }
      ],
      image: "/solarmap-1.png",
      images: [
        "/solarmap-1.png",
        "/solarmap-2.png",
        "/solarmap-3.png"
      ],
      githubUrl: "https://github.com/zakiibnu723/solar-energy-map/",
      liveUrl: "https://solar-energy-map.vercel.app/",
      featured: true,
      highlights: [
        "Interactive choropleth map with smooth hierarchical zoom across Indonesia's archipelago",
        "Comprehensive solar irradiance metrics breakdown (GHI, DHI, and DNI metrics)",
        "Temporal energy analytics with daily, monthly, and annual radiation comparison charts",
        "Regional benchmark summary and clean energy feasibility insights per district",
        "Lightweight, fast-loading geospatial delivery optimized for desktop and mobile devices"
      ]
    }
  ] as Project[],

  techStack: [
    // Mobile
    { name: "Kotlin", category: "mobile", icon: "Smartphone", badge: "Android Core" },
    { name: "Jetpack Compose", category: "mobile", icon: "Layers", badge: "Modern UI" },
    { name: "Android SDK & Services", category: "mobile", icon: "Zap", badge: "Background Ops" },
    { name: "MapLibre Native", category: "mobile", icon: "MapPin", badge: "3D Maps" },
    { name: "Firebase (FCM & Analytics)", category: "mobile", icon: "Activity", badge: "Production" },
    { name: "Google Play Console", category: "mobile", icon: "Globe", badge: "Deployment" },
    { name: "Flutter & Dart", category: "mobile", icon: "Code", badge: "Cross-Platform" },

    // Frontend
    { name: "React", category: "frontend", icon: "Code2", badge: "Core" },
    { name: "Next.js", category: "frontend", icon: "Globe", badge: "Framework" },
    { name: "TypeScript", category: "frontend", icon: "FileCode2", badge: "Primary" },
    { name: "Leaflet.js", category: "frontend", icon: "MapPin", badge: "Geospatial" },
    { name: "JavaScript (ES6+)", category: "frontend", icon: "Code", badge: "Core" },
    { name: "Tailwind CSS", category: "frontend", icon: "Palette", badge: "Styling" },
    { name: "HTML5 & CSS3", category: "frontend", icon: "Layout", badge: "Fundamental" },

    // Backend & DB
    { name: "Node.js", category: "backend", icon: "Server", badge: "Runtime" },
    { name: "Python", category: "backend", icon: "Terminal", badge: "Backend" },
    { name: "FastAPI", category: "backend", icon: "Zap", badge: "API Server" },
    { name: "PostgreSQL", category: "backend", icon: "Database", badge: "Database" },
    { name: "SQLite / Room", category: "backend", icon: "Database", badge: "Local Storage" },
    { name: "RESTful APIs", category: "backend", icon: "Network", badge: "Architecture" },

    // Tools & AI
    { name: "AI Agents", category: "tools", icon: "Sparkles", badge: "Agentic Workflows" },
    { name: "Git & GitHub", category: "tools", icon: "GitBranch", badge: "VCS" },
    { name: "Docker", category: "tools", icon: "Box", badge: "Containers" },
    { name: "Firebase Crashlytics", category: "tools", icon: "Activity", badge: "Observability" },
    { name: "VS Code / Android Studio", category: "tools", icon: "Terminal", badge: "Toolchain" },
  ] as TechItem[],

  experiences: [
    {
      period: "September 29, 2025",
      role: "2nd Place Winner (Silver) — Web Design Competition",
      institution: "INTECH FEST 2025",
      location: "Politeknik Negeri Bali (Bali, Indonesia)",
      awardBadge: "2nd Place (Juara 2)",
      description: "Engineered and designed a production-ready interactive web application showcasing Indonesia's prime tourist destinations, local culture, and travel attractions to elevate national tourism engagement.",
      skills: ["Web Design", "UI/UX", "Frontend Engineering", "Tourism Platform"],
      images: [
        "/intech-fest-2025.jpg",
        "/intech-fest-2.jpg"
      ]
    },
    {
      period: "August 8, 2025",
      role: "3rd Place Winner (Bronze) — Web Development Competition",
      institution: "I/O FEST 2025",
      location: "Universitas Tarumanagara (Jakarta, Indonesia)",
      awardBadge: "3rd Place (Juara 3)",
      description: "Developed a ready-to-deploy web application engineered to solve real-world educational challenges in Indonesia, directly supporting UN Sustainable Development Goals (SDG 4: Quality Education).",
      skills: ["Web Development", "SDGs Quality Education", "React", "Fullstack Architecture"],
      images: [
        "/io-fest-2025.jpg",
        "/io-fest-2.jpg"
      ]
    },
    {
      period: "January 12, 2025",
      role: "National Finalist — National Innovation Week 3.0",
      institution: "National Innovation Week Competition 3.0",
      location: "Universitas Darussalam (UNIDA) Gontor",
      awardBadge: "National Finalist",
      description: "Formulated and presented an innovative technological platform centered on 'Inovasi Teknologi dalam Transformasi Bisnis di Era Digital' (Technological Innovation in Business Transformation in the Digital Era), architecting a scalable digital solution to accelerate business modernization and economic efficiency.",
      skills: ["Digital Business Transformation", "Technological Innovation", "Fullstack Architecture", "Digital Economy"],
      images: [
        "/niw-unida-2025.jpg",
        "/niw-unida-2.png"
      ]
    }
  ] as ExperienceItem[],

  cvDetails: {
    summary: "Product-minded Mobile Engineer specializing in Native Android Development (Kotlin, Jetpack Compose) and AI-Augmented Software Workflows (AI Agents). Proven track record of building and shipping production-grade mobile applications to the Google Play Store with 10,000+ total downloads and 600+ Daily Active Users (DAU). Deep technical expertise in engineering resilient Android Background Services, real-time map telemetry, and Firebase behavioral analytics. Full end-to-end ownership spanning product design, mobile architecture, backend integration, and store release in rapid 1–3 day sprint cycles.",
    education: [
      {
        degree: "Bachelor of Science in Informatics / Computer Science (S1)",
        institution: "UIN Sunan Kalijaga Yogyakarta",
        year: "2022 — 2026 (Expected)",
        gpa: "Informatics Engineering"
      }
    ],
    certifications: [
      "Production Mobile Apps Published on Google Play Store (600+ DAU)",
      "2nd Place Winner (Juara 2) — Web Design Competition, INTECH FEST 2025 (Politeknik Negeri Bali)",
      "3rd Place Winner (Juara 3) — Web Development Competition, I/O FEST 2025 (Universitas Tarumanagara Jakarta)",
      "National Finalist — National Innovation Week 3.0 (Universitas Darussalam Gontor)",
      "Android Native Engineering with Kotlin & Jetpack Compose",
      "AI-Augmented Development & Rapid Prototyping with AI Agents",
      "Fullstack Web Engineering with Next.js, React, Node.js & TypeScript"
    ]
  }
};

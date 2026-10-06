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
    shortBio: "Product-minded Mobile Engineer combining Native Android Development (Kotlin, Jetpack Compose), human-centered UI/UX design, and AI-Augmented workflows (Claude Code). National design award winner and creator of 5+ production mobile apps with 10,000+ total downloads and 600+ DAU—blending sharp Product-Market Fit (PMF) instincts, intuitive interfaces, data-driven Firebase analytics, and rapid 1–3 day sprint delivery.",
    location: "Indonesia (Open to On-site, Hybrid & Remote)",
    status: "Available for Hire",
    email: "zakiibnu723@gmail.com",
    whatsapp: "+62 858-6217-4003",
    whatsappRaw: "6285862174003",
    github: "https://github.com/zakiibnu723",
    linkedin: "https://linkedin.com/in/ibnuzakial",
    stats: [
      { label: "Total App Downloads", value: "10K+", target: 10, suffix: "K+" },
      { label: "Google Play Store DAU", value: "600+", target: 600, suffix: "+" },
      { label: "National Tech Awards", value: "3x", target: 3, suffix: "x" },
    ]
  },

  projects: [
    {
      id: "care360",
      title: "Care360 📍",
      subtitle: "Real-Time Telemetry & Interactive 3D Geospatial Mobile App",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Geolocation",
      description: "Active real-time location tracking and telemetry mobile application featuring interactive 3D map rendering, persistent battery-efficient background location services, and instant boundary geofencing alerts.",
      longDescription: "Care360 is built for continuous family and device location intelligence, delivering reliable real-time tracking even under severe Android battery-saver constraints. Features high-framerate 3D map visualization, persistent foreground/background coordinate ingestion, bi-directional WebSockets connectivity, and automated geofence radius trigger notifications for safety telemetry.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "3D Maps", "WebSockets", "Firebase", "Background Services", "Geofencing"],
      metrics: [
        { label: "Telemetry", value: "Real-Time 3D GPS" },
        { label: "Reliability", value: "Persistent Background Sync" },
        { label: "Architecture", value: "Jetpack Compose & WS" }
      ],
      image: "/care360.png",
      images: [
        "/care360.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Architected persistent Android Background Location Services with battery-adaptive polling intervals",
        "Engineered smooth interactive 3D map projection with live movement interpolation and custom telemetry markers",
        "Implemented real-time bidirectional WebSocket synchronization for instant coordinate streaming",
        "Integrated Firebase push notifications (FCM) for low-latency geofence entry and exit triggers",
        "Designed clean MVVM architecture with Kotlin Coroutines and StateFlow for reactive UI state management"
      ]
    },
    {
      id: "airdrop-x",
      title: "AirDrop X ⚡",
      subtitle: "High-Performance P2P File Transfer & Utility Engine (Live on Play Store)",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Networking",
      description: "A high-velocity local peer-to-peer file transfer engine on Google Play Store reaching 300+ DAU. Built with robust Android foreground & background services, Wi-Fi Direct discovery, dynamic progress notifications, and custom Firebase telemetry.",
      longDescription: "AirDrop X provides lightning-fast offline device-to-device data sharing across Android smartphones without consuming mobile data. Solves heavy payload transfer bottlenecks using direct socket streaming over Wi-Fi Direct. Features automated peer radar discovery, resumable chunked file transfers, foreground service notifications with real-time transfer velocity metering (up to 48+ MB/s), and Firebase custom event tracking.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Wi-Fi Direct / P2P", "FCM Push Notif", "Background Services", "Firebase Analytics"],
      metrics: [
        { label: "Live Users", value: "300+ DAU" },
        { label: "Store Status", value: "Google Play Live" },
        { label: "Transfer Speed", value: "Up to 48+ MB/s" }
      ],
      image: "/airdrop-x.png",
      images: [
        "/airdrop-x.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Published and maintained on Google Play Store, organically scaling to 300+ Daily Active Users (DAU)",
        "Engineered high-throughput P2P transmission engine using Wi-Fi Direct and raw TCP socket streaming",
        "Implemented uninterrupted Android Foreground Service with live notification progress bar and speed telemetry",
        "Integrated Firebase Analytics with custom funnel events to measure peer pairing success and transfer completion",
        "Enforced robust Storage Access Framework (SAF) permissions compliant with Android 13/14+ security policies"
      ]
    },
    {
      id: "utility-suite",
      title: "Android Utility Suite 🚀",
      subtitle: "High-Velocity Mobile Utilities & Content Processing Tools (Play Store)",
      category: "mobile",
      categoryLabel: "Mobile Engineering & DevTools",
      description: "A published suite of native utility apps (Long Screenshot, Content Capture) on Google Play Store driving 600+ cumulative DAU. Engineered for rapid 1–3 day delivery cycles using Claude Code with crash-free stability.",
      longDescription: "Demonstrating high-velocity mobile product engineering from discovery to store deployment. This ecosystem of lightweight Android utility apps solves daily mobile productivity needs: seamless long canvas stitching, screen capture overlays, and media extraction. Built with high performance bitmap rendering, memory optimization to prevent OutOfMemory (OOM) errors, and comprehensive Firebase Crashlytics monitoring.",
      tags: ["Android", "Kotlin", "Claude Code", "Play Store Production", "Storage Access Framework", "Firebase Crashlytics"],
      metrics: [
        { label: "Cumulative Reach", value: "600+ DAU" },
        { label: "Delivery Speed", value: "1-3 Day Cycles" },
        { label: "Platform", value: "Google Play Store" }
      ],
      image: "/utility-suite.png",
      images: [
        "/utility-suite.png"
      ],
      githubUrl: "",
      liveUrl: "",
      hideExternalLinks: true,
      featured: true,
      highlights: [
        "Shipped multiple production utility applications to Google Play Store achieving 600+ cumulative DAU",
        "Leveraged Claude Code and AI-assisted workflows to compress 0-to-1 feature delivery cycles down to 1–3 days",
        "Optimized bitmap memory allocations and recycling pipeline to achieve zero-crash canvas stitching",
        "Monitored live production stability and session metrics using Firebase Crashlytics and Remote Config",
        "Executed data-driven store listing and feature iteration to boost user retention and organic discoverability"
      ]
    },
    {
      id: "voiz-ai",
      title: "Voiz.AI 🎙️",
      subtitle: "Smart Mobile Voice Transformation & Neural Audio Studio",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Audio",
      description: "An intuitive mobile audio application enabling users to transform speech and create custom voice clones in seconds. Features dual-input audio capture, live tempo & pitch adjustments, and seamless export to social platforms.",
      longDescription: "Voiz.AI provides a seamless mobile studio experience for voice synthesis and creative audio morphing. Designed with modern aesthetics and fluid controls, users can easily speak into the microphone or import existing audio files to generate realistic character voices. The app features built-in fine-tuning controls to adjust pitch and pacing in real time, alongside a personal voice library for saving, managing, and sharing creations directly with friends and team members.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "FastAPI", "Supabase", "Cloudflare R2", "Hugging Face", "Neural Audio"],
      metrics: [
        { label: "Platform", value: "Native Android" },
        { label: "Audio Capture", value: "Mic & File Upload" },
        { label: "Controls", value: "Real-Time Tuning" }
      ],
      image: "/voiz-ai.png",
      images: [
        "/voiz-ai.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "Instant speech morphing into diverse character and neural voice profiles",
        "Dual-input studio supporting direct microphone recording and multi-format audio uploads",
        "Real-time tuning console to calibrate speech tempo, tone depth, and playback pacing",
        "Personal audio collection to bookmark favorite voices and organize custom creations",
        "One-tap direct export and sharing to WhatsApp, Telegram, and social media platforms"
      ]
    },
    {
      id: "jsonflow",
      title: "JSONFlow ⚡",
      subtitle: "High-Performance Mobile JSON Inspector & API Data Viewer",
      category: "mobile",
      categoryLabel: "Mobile Engineering & DevTools",
      description: "A developer-centric mobile utility designed to inspect, parse, and navigate complex JSON data and API responses directly on your phone. Engineered for smooth handling of large payloads with zero lag.",
      longDescription: "JSONFlow empowers developers, QA engineers, and tech teams to debug, validate, and analyze structured JSON datasets on the go. Built to eliminate lag and crashes when handling heavy API responses, the app features an intuitive collapsible tree view, instant key-value search, automated syntax error detection, and flexible formatting tools to turn raw data into clean, readable structures anywhere.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "JSON Parser", "DevTools", "Performance Engine", "Mobile"],
      metrics: [
        { label: "Platform", value: "Native Android" },
        { label: "File Handling", value: "Heavy Payloads" },
        { label: "Visualization", value: "Collapsible Tree" }
      ],
      image: "/jsonflow.png",
      images: [
        "/jsonflow.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "High-speed data processing engine capable of rendering large files smoothly without lag",
        "Interactive collapsible tree view with syntax color-coding for effortless hierarchy exploration",
        "Instant smart search to quickly locate specific keys, values, or deeply nested objects",
        "Real-time JSON validation with precise error indicators and line pinpointing",
        "One-click formatting, beautification, clipboard copying, and file export for rapid testing"
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
    { name: "Firebase (FCM & Analytics)", category: "mobile", icon: "Activity", badge: "Production" },
    { name: "Google Play Console", category: "mobile", icon: "Globe", badge: "Deployment" },
    { name: "Flutter & Dart", category: "mobile", icon: "Code", badge: "Cross-Platform" },

    // Frontend
    { name: "React", category: "frontend", icon: "Code2", badge: "Core" },
    { name: "Next.js", category: "frontend", icon: "Globe", badge: "Framework" },
    { name: "TypeScript", category: "frontend", icon: "FileCode2", badge: "Primary" },
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
    { name: "Claude Code", category: "tools", icon: "Sparkles", badge: "AI Agentic Core" },
    { name: "Git & GitHub", category: "tools", icon: "GitBranch", badge: "VCS" },
    { name: "Docker", category: "tools", icon: "Box", badge: "Containers" },
    { name: "Geospatial & Maps API", category: "tools", icon: "Globe", badge: "Telemetry" },
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
    summary: "High-velocity, Product-Minded Mobile Engineer combining Native Android Development (Kotlin, Jetpack Compose), human-centered UI/UX design, and AI-Augmented workflows (Claude Code). National design award winner with a proven instinct for Product-Market Fit (PMF) and rapid validation—demonstrated by building and shipping 5+ production mobile applications to the Google Play Store surpassing 10,000+ total downloads and 600+ Daily Active Users (DAU). Adept at leveraging Firebase product analytics and user behavioral data to optimize retention funnels, turning ambiguous problem spaces into polished, high-impact mobile experiences in rapid 1–3 day sprint delivery cycles.",
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
      "AI-Augmented Development & Rapid Prototyping with Claude Code",
      "Fullstack Web Engineering with Next.js, React, Node.js & TypeScript"
    ]
  }
};

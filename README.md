# The UNO Platform - Frontend

> Universal No-Code App Orchestration

A modern, responsive landing page for The UNO Platform - a universal no-code application platform that enables building and deploying web and mobile applications without coding.

![The UNO Platform]

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-Theme Support**: Dark/Light mode with custom themes (Dracula, Nord, Cyberpunk)
- **Modern UI**: Built with Tailwind CSS
- **Video Integration**: Embedded YouTube introduction video
- **SEO Optimized**: Built with Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Kss004/uno-platform.git
cd uno-platform
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Run the development server:**
```bash
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎨 Theme System

The application includes a comprehensive theme system with:

- **Light Mode**: Clean, minimal design
- **Dark Mode**: Eye-friendly dark interface
- **System**: Automatically follows OS preference
- **Custom Themes**:
  - Dracula: Purple-based dark theme
  - Nord: Arctic-inspired color palette
  - Cyberpunk: Neon-bright futuristic theme

Access themes via the theme toggle button in the header.

## 📁 Project Structure

```
uno-platform/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx             # Desktop navigation
│   ├── mobile-nav.tsx           # Mobile navigation
│   ├── mode-toggle.tsx          # Theme switcher
│   └── theme-provider.tsx       # Theme context provider
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection
│   └── use-toast.ts             # Toast notifications
├── lib/                         # Utilities
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
│   ├── retiunologo.svg          # Main logo
│   └── placeholder.*            # Placeholder images
└── styles/                      # Additional styles
    └── globals.css              # Legacy global styles
```

## 🎯 Platform Features Highlighted

- **Out-of-Box Mobile and Web Clients**
- **Browser-based Development Environment**
- **Auto-scaled with Data Redundancy**
- **Hybrid Mode**: Works online and offline
- **Fully Portable**: Plug and play architecture


## 📱 Responsive Design

Mobile-first responsive design featuring:

- **Breakpoints**: Tailored for mobile, tablet, and desktop
- **Navigation**: Collapsible mobile menu
- **Typography**: Responsive text scaling

## 🎥 Video Integration

- **YouTube Embed**: Introduction video with custom styling
- **Responsive Container**: Maintains aspect ratio across devices

## 🔧 Development Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Type checking
pnpm type-check

# Linting
pnpm lint

# Linting with auto-fix
pnpm lint:fix
```

*Last updated: May 26, 2025*

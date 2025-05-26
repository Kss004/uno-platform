# The UNO Platform - Frontend

> Universal No-Code App Orchestration

A modern, responsive landing page for The UNO Platform - a universal no-code application platform that enables building and deploying web and mobile applications without coding.

![The UNO Platform](public/retiunologo.svg)

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-Theme Support**: Dark/Light mode with custom themes (Dracula, Nord, Cyberpunk)
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Video Integration**: Embedded YouTube introduction video
- **SEO Optimized**: Built with Next.js 14 App Router
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant components

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

## 🔗 Navigation Structure

- **Try for Free**: Call-to-action for trial signup
- **View Pricing**: Pricing information
- **Login**: User authentication
- **Theme Toggle**: Multi-theme switcher

## 📱 Responsive Design

Mobile-first responsive design featuring:

- **Breakpoints**: Tailored for mobile, tablet, and desktop
- **Navigation**: Collapsible mobile menu
- **Typography**: Responsive text scaling
- **Images**: Optimized with Next.js Image component
- **Touch Targets**: Minimum 44px for accessibility

## 🎥 Video Integration

- **YouTube Embed**: Introduction video with custom styling
- **Responsive Container**: Maintains aspect ratio across devices
- **Accessibility**: Full keyboard and screen reader support
- **Performance**: Lazy loading with Next.js optimization

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

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎨 Customization

### Adding New Themes

1. Add theme configuration in `tailwind.config.ts`
2. Update theme options in `components/mode-toggle.tsx`
3. Add CSS variables in `app/globals.css`

### Custom Components

All UI components follow the shadcn/ui pattern:
```bash
# Add new shadcn/ui component
npx shadcn-ui@latest add [component-name]
```

## 🔍 SEO Features

- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap.xml
- **Performance**: Optimized Core Web Vitals

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: Meets accessibility standards
- **Focus Management**: Visible focus indicators

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Coverage report
pnpm test:coverage
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: Tree-shaking and code splitting
- **Image Optimization**: Next.js Image component with WebP

## 🔒 Security

- **Content Security Policy**: Configured for XSS protection
- **HTTPS**: Enforced in production
- **Dependencies**: Regular security audits
- **Environment Variables**: Secure configuration management

## 📄 License

This project is proprietary to Retiuno/The UNO Platform.

## 🤝 Contributing

This is a private repository. For contribution guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📞 Support

For questions or support:
- **Email**: support@retiuno.com
- **Documentation**: [Internal Wiki]
- **Issues**: Use GitHub Issues for bug reports

## 🏗️ Built With

- Next.js 14 for the React framework
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for component library
- Lucide React for icons
- next-themes for theme management

---

**Built with ❤️ by the Retiuno Development Team**

*Last updated: May 26, 2025*

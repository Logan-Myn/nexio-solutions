# Nexio Solutions - SaaS & App Development Studio

A modern, professional showcase website for Nexio Solutions, a SaaS and app development studio based in Estonia.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Dark/Light Mode**: Full theme support with system preference detection
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Contact Form**: Functional contact form with validation
- **Performance**: Built with Next.js 14 for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Deployment**: Ready for Vercel

## 📦 Project Structure

```
nexio-solutions/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handler
│   ├── contact/             # Contact page
│   ├── terms/               # Terms of service page
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   └── CTA.tsx
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── ThemeToggle.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
├── lib/                     # Utilities
│   ├── utils.ts
│   └── validations.ts
└── types/                   # TypeScript types
    └── index.ts
```

## 🎨 Pages

### Landing Page (/)
- Hero section with animated background
- Services overview (SaaS, iOS, Custom Software)
- Portfolio showcase featuring Dance Hub
- About section
- Call-to-action

### Contact Page (/contact)
- Contact form with validation
- Project type and budget selection
- Company contact information
- Links to featured projects

### Terms of Service (/terms)
- Comprehensive terms for development services
- SaaS product terms
- Estonian law compliance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory
```bash
cd nexio-solutions
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Configuration

### Contact Form
The contact form currently logs submissions to the console. To integrate with an email service:

1. Edit `app/api/contact/route.ts`
2. Add your preferred email service (SendGrid, Resend, AWS SES, etc.)
3. Configure environment variables

### Theme
Colors are defined in `app/globals.css`:
- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Cyan (#06b6d4)

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 📄 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
# NEXT_PUBLIC_SITE_URL=https://nexio.solutions
```

## 🎯 Customization

### Adding New Services
Edit `components/sections/Services.tsx` and add to the `services` array.

### Adding Portfolio Projects
Edit `components/sections/Portfolio.tsx` and add to the `projects` array.

### Modifying Contact Form Fields
1. Update types in `types/index.ts`
2. Modify form in `app/contact/page.tsx`
3. Update validation in `lib/validations.ts`

## 📱 Features to Add (Optional)

- [ ] Blog section
- [ ] Case studies
- [ ] Client testimonials
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] Email service integration

## 🤝 Contributing

This is a showcase website for Nexio Solutions. For inquiries about development services, visit the contact page.

## 📧 Contact

- **Email**: hello@nexio-solutions.tech
- **Location**: Estonia
- **Website**: [Dance Hub](https://dance-hub.io)

## 📄 License

© 2025 Nexio OÜ. All rights reserved.

---

Built with ❤️ using Next.js 14

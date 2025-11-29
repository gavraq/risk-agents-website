# Risk Agents Website

AI-Powered Risk Intelligence Platform - Built on Skills, Patterns, and 30 Years of CRO Expertise

## 🎯 Project Overview

This is the marketing website for **Risk Agents**, a revolutionary AI-powered risk management platform that combines:

- **100+ Modular Skills** - Focused capabilities across 9 risk domains
- **Fabrix Pattern System** - Composable workflows that learn and evolve
- **GTD Horizons Alignment** - Every action traces to organizational goals
- **30 Years of CRO Expertise** - Built by Gavin Slater (ex-Barclays, Deutsche Bank, ICBC)

## 🚀 Tech Stack

- **Framework**: Next.js 15 (React 19, App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design system)
- **Deployment**: Vercel
- **Version Control**: Git + GitHub
- **Form Handling**: Formspark (email collection)
- **Spam Protection**: Botpoison (anti-bot challenge)

## 🎨 Design System

Aligned with [gavinslater.com](https://www.gavinslater.com) for brand consistency:

### Colors
- **Background**: Slate-900 (#0F172A)
- **Cards**: Slate-800 (#1E293B)
- **Borders**: Slate-700 (#334155)
- **Text**: Slate-50 (#F8FAFC), Slate-300 (#CBD5E1), Slate-500 (#64748B)
- **Accent Blue**: #3B82F6
- **Risk Amber**: #F59E0B
- **Success Green**: #10B981

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: 72px hero, 48px sections, 24px cards, 18px body

### Components
- Circuit pattern backgrounds
- Card lift hover effects (translateY + glow)
- Glass-effect navigation
- LED status indicators
- Badge pills (AI, Risk, Success)
- Gradient text effects

## 🏗️ Project Structure

```
risk-agents-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx         # Site navigation
│   │   └── EarlyAccessForm.tsx    # Email signup form (Formspark + Botpoison)
│   ├── domains/                   # Risk domains pages
│   ├── platform/                  # Platform feature pages
│   ├── about/                     # About pages
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage (hero + features)
│   └── globals.css                # Design system styles
├── public/                        # Static assets
├── .env.local                     # Environment variables (not in git)
├── .env.example                   # Example environment variables
├── DEPLOYMENT.md                  # Deployment instructions
└── README.md                      # This file
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/risk-agents-website.git
cd risk-agents-website

# Install dependencies
npm install

# Create .env.local file from example
cp .env.example .env.local

# Add your environment variables to .env.local
# NEXT_PUBLIC_FORMSPARK_FORM_ID=your_form_id
# NEXT_PUBLIC_BOTPOISON_KEY=your_public_key

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

The following environment variables are required:

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_FORMSPARK_FORM_ID` | Formspark form ID for email submissions | [formspark.io](https://formspark.io) dashboard |
| `NEXT_PUBLIC_BOTPOISON_KEY` | Botpoison public key for spam protection | [botpoison.com](https://botpoison.com) dashboard |

**Important**:
- Use the **public key** (starts with `pk_`) for `NEXT_PUBLIC_BOTPOISON_KEY`, not the secret key
- Add these to both `.env.local` (local dev) and Vercel environment variables (production)

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**

```bash
npm i -g vercel
vercel
```

## 📋 Current Status

- ✅ **Phase 1**: Initial homepage with hero section
- ✅ **Phase 2**: Navigation + Platform pages (Skills, Patterns, GTD)
- ✅ **Phase 3**: Risk domain pages (9 domains)
- ✅ **Phase 4**: Early access email capture (Formspark + Botpoison)
- ⏳ **Phase 5**: Interactive demos (Skill Browser, Pattern Library)
- ⏳ **Phase 6**: Blog + Resources

**Launch**: Coming 2026

### Features Implemented

✅ **Homepage**: Hero section, key features grid, early access form
✅ **Navigation**: Site-wide navigation with active states
✅ **Platform Pages**: Skills, Patterns, Reporting, How It Works
✅ **Domains Page**: 9 risk domains with descriptions
✅ **About Pages**: Philosophy, Team/Background
✅ **Early Access Form**:
  - Email collection via Formspark
  - Spam protection via Botpoison
  - Success/error states
  - Graceful CORS error handling

## 🎯 Roadmap

### Month 1: Core Pages
- Navigation menu
- Platform Overview
- Skills Framework page
- Fabrix Patterns page
- Natural Language Reporting page
- How It Works (3 C's)

### Month 2: Domain Pages
- Credit Risk
- Market Risk
- Operational Risk
- Liquidity Risk
- Model Risk
- Climate Risk
- Regulatory Risk
- Strategic Risk
- Risk Change

### Month 3: Interactive Features
- Skill Browser (searchable)
- Pattern Library (filterable)
- Live Query Interface (demo)
- Pattern Evolution Dashboard

## 📧 Early Access Form Implementation

The early access form collects email addresses for the waitlist using a third-party integration:

### Services Used

1. **Formspark** ([formspark.io](https://formspark.io))
   - Handles form submissions
   - Sends email notifications
   - Free tier: 250 submissions/month
   - Endpoint: `https://submit-form.com/{FORM_ID}`

2. **Botpoison** ([botpoison.com](https://botpoison.com))
   - Provides spam protection
   - Client-side challenge/response system
   - Integrated with Formspark
   - No captcha required

### How It Works

1. User enters email on `/#early-access`
2. Form generates Botpoison challenge solution
3. Submission sent to Formspark with solution
4. Formspark validates Botpoison token
5. Email stored and notification sent
6. Success message shown to user

### Implementation Details

**Component**: [`app/components/EarlyAccessForm.tsx`](app/components/EarlyAccessForm.tsx)

**Dependencies**:
```json
{
  "@botpoison/browser": "^1.0.0"
}
```

**Environment Variables**:
- `NEXT_PUBLIC_FORMSPARK_FORM_ID`: Your Formspark form ID
- `NEXT_PUBLIC_BOTPOISON_KEY`: Your Botpoison public key (pk_...)

**CORS Handling**: The form gracefully handles CORS errors that occur after successful submission. If a "Failed to fetch" error occurs, the form assumes success since the submission has already reached Formspark.

## 📝 Content Strategy

- **Thought Leadership**: Skills + Patterns revolution
- **Technical Deep Dives**: Architecture, context management
- **Industry Insights**: Basel, IFRS, climate risk trends
- **Case Studies**: (once we have clients)
- **How-To Guides**: Getting started with platform

## 📄 License

Copyright © 2025 Risk Agents. All rights reserved.

## 🔗 Links

- **Live Site**: [www.risk-agents.com](https://www.risk-agents.com) (coming soon)
- **Author**: [Gavin Slater](https://www.gavinslater.com)

---

**Built with**: Next.js, TypeScript, Tailwind CSS, and 30 years of banking risk expertise.

# Risk Agents Website - Deployment Guide

## ✅ Completed Setup

1. **Project Created**: Next.js 15 with TypeScript & Tailwind CSS
2. **Design System**: Aligned with gavinslater.com (Slate colors, Inter font, circuit patterns)
3. **Homepage**: Hero section with Skills + Patterns messaging
4. **Git Initialized**: Local commits ready
5. **Dev Server Running**: http://localhost:3004

## 🚀 Next Steps: GitHub & Vercel Deployment

### Step 1: Authenticate with GitHub CLI

```bash
cd /Users/gavinslater/projects/risk-agents-website
gh auth login
```

Follow the prompts to authenticate.

### Step 2: Create GitHub Repository

```bash
gh repo create risk-agents-website \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "AI-Powered Risk Intelligence Platform - Built on Skills, Patterns, and 30 Years of CRO Expertise"
```

This will:
- Create a new public GitHub repository
- Set it as the `origin` remote
- Push your main branch to GitHub

### Step 3: Deploy to Vercel

**Option A: Using Vercel CLI** (Recommended)

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
cd /Users/gavinslater/projects/risk-agents-website
vercel
```

Follow the prompts:
- Link to existing project? **No**
- What's your project's name? **risk-agents-website**
- Which directory is your code located? **./**
- Override settings? **No**

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your `risk-agents-website` GitHub repository
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: **/**
   - Build Command: (leave default)
   - Output Directory: (leave default)
5. Click "Deploy"

### Step 4: Configure Custom Domain

Once deployed to Vercel:

1. Go to Project Settings → Domains
2. Add custom domain: `www.risk-agents.com` or `risk-agents.com`
3. Follow Vercel's DNS configuration instructions:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to Vercel's domain

### Step 5: Environment Variables (If Needed Later)

For future API integrations, add environment variables in Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables for production, preview, development

## 📋 Post-Deployment Checklist

- [ ] Verify site loads at Vercel URL
- [ ] Test all links and buttons
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata in page source
- [ ] Test circuit pattern backgrounds render correctly
- [ ] Verify card hover animations work
- [ ] Check LED indicator animation
- [ ] Configure custom domain DNS
- [ ] Update risk-agents.com domain to point to Vercel
- [ ] Set up SSL certificate (automatic with Vercel)
- [ ] Add Google Analytics (optional)

## 🎨 Design System Alignment

The site uses the same design system as gavinslater.com:

- **Colors**: Slate-900 (#0F172A), Slate-800 (#1E293B), AI Blue (#3B82F6)
- **Typography**: Inter font family
- **Components**: Card lift, glass nav, circuit patterns
- **Animations**: 0.3s cubic-bezier transitions

## 📝 Future Development

Next features to add:
- Navigation menu with sections (Platform, Domains, Resources, etc.)
- Platform overview page explaining Skills + Fabrix + GTD
- Individual risk domain pages (Credit, Market, etc.)
- Blog setup with thought leadership content
- Interactive demos (Skill Browser, Pattern Library)
- Email capture for early access list

## 🔗 Links

- **Local Dev**: http://localhost:3004
- **GitHub**: (will be created after Step 2)
- **Vercel**: (will be available after Step 3)
- **Production**: www.risk-agents.com (after custom domain setup)

---

**Status**: Ready for GitHub + Vercel deployment
**Created**: 2025-10-17
**Next Action**: Run commands in Step 1-3 above

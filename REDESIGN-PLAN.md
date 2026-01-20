# Risk Agents Website Redesign Plan

## Executive Summary

This plan incorporates feedback from **two consultation sessions** with Andy McNally:
- **Session 1** (December 8, 2024): Deep strategic feedback on messaging, hierarchy, and positioning
- **Session 2** (January 7, 2025): Follow-up on branding and commercial model

The core themes across both sessions:
1. **"Human in the Loop" should be THE hero message** - not buried at the bottom
2. **Too much information, not enough layering** - simplify and create hierarchy
3. **Lead with opportunity, not just threat** - "AI Augments. Humans Decide."
4. **Professional branding** - logo with strapline, hero video
5. **Clear audience identification** - make it obvious this is for banks/financial institutions
6. **Commercial clarity** - membership model with clear pricing

---

## Key Feedback from Andy McNally

### Session 1: Strategic Positioning (December 8)

#### 1. **"Human in the Loop" is Your Hero Message**

> "The very top level is human in the loop. And that whole page, that expanding boundary... I think that humans at the center with expanding Horizon can now be much further out because of AI agents. This is the heart of it. This is your opening piece, and then everything builds from that."

> "The beauty is you're accentuating humans here, not getting rid of them. You're not threatening the humans. Then you don't got the chief risk officer going, 'oh, shit.'"

**Current State:**
- "Human in the Loop" is buried as a sub-page under Platform
- Homepage leads with AIMM diagram (complex, technical)

**Critical Insight:**
- This is your **selling proposition** - AI augments, humans decide
- It's **positive positioning** (opportunity) not fear-based (threat)
- Chief Risk Officers won't feel threatened - they're empowered

#### 2. **Information Overload - No Layering**

> "You come onto this and bang, there's all this information. None of it is layered. It's all just there."

> "When someone's telling you everything about themselves and what they do, it's almost like a lack of confidence. Whereas, actually, if you keep a good chunk of that in the background and just offer a little bit, you could be more confident."

**Current State:**
- Homepage has dense content immediately
- All navigation items visible with many sub-items
- No progressive disclosure

**Recommended Approach:**
- Simple hook → Intrigue → Depth on click
- "You'd be amazed... I don't actually say anything. It's just two guys at the top of a mountain."

#### 3. **Hero Video Concept**

> "Do you know what a hero video is? ... you just see a hero video. Sort of implies... It's alluding to something rather than trying to get lots of information across all at the same time."

**Recommendation:**
- Use iStock to find evocative video (search for expanding horizon, seeing further at sea, sun coming over Earth)
- Simple message overlay: one powerful strapline
- Consider AI avatar for 60-second explainer video (Goldman conference company reference)

**Video Ideas from Andy:**
- "Something completely different idea of being able to see further into the distance at sea"
- "There's a sun coming over the Earth and you're seeing more of the earth"
- Imagery that alludes to **expanding boundaries** and **seeing further**

#### 4. **Problem → Solution Structure**

> "You could do it as this sort of consultant problem solving. So you create the problem and then solve the problem. If you look at any consultant's proposal, it always starts with the problem page."

> "What's your Hitler question for Jamie Dimon around risk management systems?"

**Recommended Structure:**
1. Create the problem (angst)
2. Present the solution
3. Everything else layers underneath

#### 5. **Navigation Should Be Simpler**

> "I definitely would say just from what I've seen... The navigation should be sort of Risk Agents, Member Firms, How We Think. Or something like that."

**Current:** Platform (7 items), Skills Sharing (3 items), Risk Domains, Design Philosophy, About

**Proposed:**
- **Risk Agents** (Platform/what it is)
- **Members** (who it's for - banks, asset managers, insurers)
- **How We Think** (philosophy, approach)
- **About**

#### 6. **"Design Philosophy" → "How We Think"**

> "Design philosophy. And then you click on that and it says 'how we think'. And I would say 'how we think' is a much better menu line navigation phrase than design philosophy."

#### 7. **Audience Clarity - Who Is This For?**

> "At no point in here am I seeing... I wonder if your menu should say 'member firms', 'members', 'banks' or something."

> "I'm not told it's for a bank, even currently. I've clicked on a navigation bar and I've got to click on another one. And I still don't know if it's for me as the chief executive of a bank."

> "Maybe the financial institutions thing is also needs to be part of your banner. To make it clear who this is for."

**Recommendations:**
- Replace "Skills Sharing" with "Members" in navigation
- Under Members: Banks, Investment Managers, Insurance Companies
- Add audience identifier to hero banner
- Brief explanation of why it's relevant for each segment

#### 8. **Revenue Model Discussion**

> "What is the revenue model? ... If the [banks] paid 20 grand or 10 grand, you can build yourself a nice income."

**Current State:** Revenue model unclear to visitors

#### 9. **Logo with Strapline**

> "Risk Agents. But then a strapline. That's a gentle... Expanding Boundary Vision. Whatever."

> "On SmashLogo you don't get overwhelmed... you just put in your thing and your strapline. And then you can have an icon if you want. Or you don't."

**Logo Requirements:**
- Risk Agents + strapline (e.g., "Expanding Boundary Vision" or similar)
- Optional icon
- Get full brand pack with transparent versions, color schemes

---

### Session 2: Branding & Polish (January 7)

#### 10. **Logo is Critical First Impression**

> "Before you get onto the stuff that we talked about in the last chat, I really would go and design a logo. Because your Risk Agents at the top actually just makes it look like it's created by AI."

#### 11. **Commercial Model Needs Definition**

> "Whether it's a subscription model, a membership model, or whether you just sell a product."

#### 12. **Professional Polish**

> "It looks like Commodore VIC-20... It just makes it look professionally created, even though it's very simple."

---

## The Core Message (Distilled)

From the transcript, Andy identified the **heart of the proposition**:

> "AI Augments. Humans Decide."

This should be THE hero message because:
1. It's **positive** - opportunity, not threat
2. It **protects jobs** - CROs feel empowered, not replaced
3. It's **simple** - immediately understood
4. It's **differentiating** - not typical AI fear-mongering

**Supporting Concept:** "Expanding Boundary" - humans can now see further, understand more, because AI extends their capabilities.

---

## Comprehensive Redesign Plan

### Phase 1: Brand Identity (Priority: CRITICAL)

#### 1.1 Logo ✅ COMPLETE
- [x] Logo created with strapline: "Expanding the boundaries of your vision"
- [x] Features "RA" monogram with space/earth horizon imagery
- [x] Full-size version available for website use
- [ ] Export additional variants if needed (favicon, Open Graph)

#### 1.2 Logo Integration
- [ ] Add logo files to `/public/images/`
- [ ] Update `Navigation.tsx` - replace text with logo
- [ ] Add logo to footer
- [ ] Update favicon to match brand
- [ ] Update Open Graph image for social sharing

---

### Phase 2: Homepage Restructure (Priority: HIGH)

#### 2.1 Hero Section - THE Critical Change

**Current:** AIMM Diagram (complex, technical, buried lead)

**New Hero Structure:**
```
[Hero Video or Evocative Image Background]

"AI Augments. Humans Decide."
[Subheadline: One sentence on expanding boundaries]

"Risk Intelligence for Banks & Financial Institutions"

[CTA: Request Early Access] [CTA: See How It Works]
```

**Key Principles:**
- Lead with the HUMAN message, not the AI message
- Make audience (banks/FIs) immediately clear
- Allure and intrigue, don't explain everything
- The depth is there when they click

#### 2.2 Promote "Human in the Loop" Content

**Current Location:** `/platform/human-in-the-loop` (buried sub-page)

**New Location:** This becomes the **core of the homepage hero**

Content to elevate:
- "AI Augments. Humans Decide."
- Confidence scoring concept
- Verification workflows
- The "expanding boundary" visual metaphor

#### 2.3 Homepage Content Hierarchy (Layered)

**Layer 1 - Hero (5 seconds):**
- Core message: Human-centered AI for risk
- Audience: Banks & Financial Institutions
- Single CTA

**Layer 2 - The Problem (15 seconds):**
- Simple, scary question (the "Hitler question for Jamie Dimon")
- "Traditional risk management can't keep pace with..."
- Create angst, then resolve

**Layer 3 - The Solution (30 seconds):**
- Three visual cards: Skills, Patterns, Platform
- Minimal text, strong visuals
- Click to explore more

**Layer 4 - Credibility (15 seconds):**
- 30 years experience
- Global banking background
- Member community

**Layer 5 - CTA:**
- Early access form
- Clear next steps

#### 2.4 Move Complex Content to Sub-pages

- [ ] Move AIMM diagram to `/platform/maturity` or remove entirely
- [ ] Move detailed skills breakdown to `/platform/skills`
- [ ] Move GTD/Context Engineering detail to sub-pages
- [ ] Homepage should be <50% of current word count

---

### Phase 3: Navigation Restructure (Priority: HIGH)

#### 3.1 Simplified Navigation

**Current (Too Complex):**
```
Platform (7 sub-items)
Skills Sharing (3 sub-items)
Risk Domains
Design Philosophy
About
```

**Proposed (Andy's Recommendation):**
```
Risk Agents (Platform)
  → Overview
  → Skills Framework
  → How It Works

Members
  → Banks
  → Investment Managers
  → Insurance Companies
  → Founding Members

How We Think (was "Design Philosophy")

About
```

#### 3.2 Rename Key Sections

| Current | Proposed | Reason |
|---------|----------|--------|
| Skills Sharing | Members | Clearer, more commercial |
| Design Philosophy | How We Think | Andy's direct feedback |
| Human in the Loop | (Becomes hero message) | Elevate, don't bury |

#### 3.3 Member Segments

Create distinct pages for each audience:
- [ ] `/members/banks` - Why banks should join
- [ ] `/members/investment-managers` - Relevance for asset managers
- [ ] `/members/insurance` - Insurance company angle
- [ ] `/members/founding` - Founding member benefits

Each page explains:
- Why this is relevant for YOU
- What you get as a member
- How to join

---

### Phase 4: Commercial Model (Priority: HIGH)

#### 4.1 Define Membership Tiers

Based on Andy's comment: "If they paid 20 grand or 10 grand, you can build yourself a nice income."

| Tier | Annual Fee | Target | Features |
|------|------------|--------|----------|
| Founding Member | £10,000 | Early adopters | Full access, shape the platform, priority support |
| Member | £20,000 | Banks, large FIs | Full skills library, unlimited patterns |
| Enterprise | Custom | Large institutions | Custom skills, dedicated support, on-prem option |

#### 4.2 Create Membership/Pricing Page

- [ ] Create `/membership` page
- [ ] Clear tier comparison
- [ ] "What You Get" breakdown
- [ ] Founding Member special offer (limited spots)
- [ ] FAQ section

#### 4.3 Update Early Access Form

- [ ] Add context: "Join our founding member community"
- [ ] Add optional fields:
  - Organization type (Bank, Asset Manager, Insurer, Other)
  - Role (CRO, Risk Manager, Technology, Executive)
- [ ] Set expectations on next steps

---

### Phase 5: Content Refinement (Priority: MEDIUM)

#### 5.1 Develop "The Problem" Statement

Andy's challenge: "What's your Hitler question for Jamie Dimon around risk management?"

Draft options:
- "Can your risk management keep pace with AI-driven markets?"
- "When did you last see something your risk models missed?"
- "What happens when your competitors' AI outthinks your risk team?"

#### 5.2 Reduce Jargon - Lead with Benefits

| Current Term | Plain English Alternative |
|--------------|--------------------------|
| Context Engineering | Knowledge Architecture |
| GTD Alignment | Strategic Goal Tracking |
| Fabrix Patterns | Ready-to-Use Workflows |
| AIMM | AI Maturity Journey |

#### 5.3 "How We Think" Page

Consolidate philosophy content:
- [ ] Rename `/about/philosophy` to `/how-we-think`
- [ ] Or create new streamlined page
- [ ] Focus on principles, not technical details

---

### Phase 6: Visual & UX (Priority: MEDIUM-LOW - FUTURE PHASE)

#### 6.1 Hero Video (Deferred to Phase 2 of build)

**Note:** Hero video enhancement deferred to after initial site launch. For v1, use static hero with logo imagery.

**Future Options:**
- **Option A: Hero Video** - Purchase from iStock (themes: expanding horizon, sunrise over Earth)
- **Option B: AI Avatar Video** - 60-second explainer with professional AI presenter
- **Option C: Enhanced Static** - High-quality evocative image with parallax effects

#### 6.2 Visual Metaphor: "Expanding Boundary"

Create consistent visual language around:
- Circles expanding outward
- Horizon lines extending
- Human figure at center, AI extending reach
- Use in hero, icons, diagrams

#### 6.3 Remove/Reduce Circuit Pattern

Current circuit pattern may contribute to "AI-generated" look. Consider:
- Reducing opacity
- Using only in specific sections
- Replacing with more organic patterns

---

## Implementation Priority Matrix

| Phase | Task | Impact | Effort | Priority |
|-------|------|--------|--------|----------|
| 1.1 | Logo with strapline | Critical | Low | **DO FIRST** |
| 2.1 | Hero section - Human in the Loop message | Critical | Medium | **DO FIRST** |
| 3.1 | Navigation restructure | High | Low | **Week 1** |
| 2.2 | Move HITL content to hero | High | Medium | **Week 1** |
| 3.2 | Rename sections | High | Low | **Week 1** |
| 4.1 | Define membership model | High | Low | **Week 1** |
| 3.3 | Member segment pages | Medium | Medium | **Week 2** |
| 4.2 | Create membership page | Medium | Medium | **Week 2** |
| 5.1 | Develop problem statement | Medium | Low | **Week 2** |
| 6.1 | Hero video (optional) | Medium | Medium | **Week 3** |
| 5.2 | Jargon reduction | Low | Medium | **Ongoing** |

---

## Files to Modify

### Critical (Do First)
- `/public/images/` - Add logo files
- `app/components/Navigation.tsx` - Logo + restructured nav
- `app/page.tsx` - Complete hero redesign

### High Priority (Week 1)
- `app/platform/human-in-the-loop/page.tsx` - Content moves to homepage
- `app/about/philosophy/page.tsx` - Rename to "How We Think"
- `app/skills-sharing/page.tsx` - Rename to "Members"

### Medium Priority (Week 2)
- NEW: `app/members/page.tsx` - Members overview
- NEW: `app/members/banks/page.tsx` - Bank-specific
- NEW: `app/members/investment-managers/page.tsx`
- NEW: `app/members/insurance/page.tsx`
- NEW: `app/membership/page.tsx` - Pricing/tiers

### Lower Priority (Week 3+)
- `app/globals.css` - Reduce circuit pattern
- Various pages - Content simplification

---

## Success Metrics

After redesign:

1. **5-Second Test:** Visitor understands "AI helps humans manage risk better" immediately
2. **Audience Clarity:** Obvious this is for banks/financial institutions
3. **No Threat Perception:** CROs feel empowered, not threatened
4. **Professional Branding:** Logo, cohesive identity, not "AI-generated" look
5. **Clear Commercial Model:** Visitor knows membership tiers and how to join
6. **Layered Information:** Hook → Intrigue → Depth (not everything at once)
7. **Simple Navigation:** 3-4 top-level items maximum

---

## Quick Wins (Today)

1. ~~**Create logo on SmashLogo** with strapline~~ ✅ DONE - Logo ready
2. **Write new hero headline:** "AI Augments. Humans Decide." - 5 min
3. **Draft "the problem" question** - 10 min
4. **Rename "Design Philosophy" to "How We Think"** in nav - 5 min
5. **Add "for Banks & Financial Institutions"** to hero - 5 min

---

## Development Strategy

### Version Control Approach
Build v2 on a separate Git branch to preserve the current site:

```bash
git checkout -b v2-redesign
```

**Benefits:**
- Current `main` branch stays deployable as-is
- Commit freely on `v2-redesign` without affecting production
- Easy to compare changes with `git diff main`
- When ready, merge or replace `main`

**Workflow:**
1. Create `v2-redesign` branch
2. Build entire redesign on this branch
3. Test thoroughly
4. Merge to `main` when approved

---

## Reference Resources

- **SmashLogo:** https://smashlogo.com
- **iStock Videos:** https://istockphoto.com/videos
- **Current Site:** https://risk-agents.com
- **Andy's Reference:** Syndicate Plus (hero video example)
- **Andy's Sapius Site:** https://sapius.co.uk (design aesthetic reference)

---

## Design Aesthetic Reference (from Sapius.co.uk)

Andy McNally's own website exemplifies the "elegance" he values:

### Color Palette
- **Primary:** Dark backgrounds (rgb(22, 22, 22) / near-black)
- **Text:** White/light on dark
- **Accents:** Subtle grays (rgb(94, 94, 94), rgb(164, 164, 164))
- Creates a **premium, sophisticated feel**

### Typography
- **Headlines:** League Spartan (bold, modern sans-serif)
- **Body:** Source Sans Pro (clean, readable sans-serif)
- Both convey modernity and professionalism

### Animation Philosophy
- **Restrained and purposeful** - 0.3s transitions
- Subtle hover effects (color shifts, not dramatic transforms)
- Smooth scrolling
- **No flashy/aggressive animations**

### Layout Principles
- **Generous negative space** - content breathes
- Flexible grid system with responsive breakpoints
- Sticky navigation with subtle transparency changes
- Video hero background for visual engagement

### Key Takeaway
> "Less is more" - understated professionalism that builds trust through restraint

### Application to Risk Agents
- Adopt dark color palette (pairs well with space/horizon logo imagery)
- Use similar typography choices (or equivalents)
- Keep animations minimal and purposeful
- Prioritize negative space over dense content
- Consider video hero with simple overlay text

---

## Key Quotes to Remember

> "The very top level is human in the loop... This is the heart of it."

> "AI Augments. Humans Decide. I mean, all that's great messaging, isn't it? You got something you can sell here."

> "You come onto this and bang, there's all this information. None of it is layered."

> "When someone's telling you everything about themselves... it's almost like a lack of confidence."

> "You want the hook that makes people go, that's intriguing."

---

*Plan created: January 2025*
*Based on feedback from Andy McNally - Sessions 1 (Dec 8) & 2 (Jan 7)*

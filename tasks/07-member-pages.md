# Task 07: Member Segment Pages

## Objective
Create distinct pages for each audience segment so they immediately know "this is for me."

## Pages to Create

### /members (Overview)
- What membership means
- Benefits of joining
- Link to each segment

### /members/banks
- Why banks should join
- Bank-specific use cases
- Relevant risk domains

### /members/investment-managers
- Asset manager relevance
- Portfolio risk use cases
- Investment-specific benefits

### /members/insurance
- Insurance company angle
- Underwriting & claims use cases
- Insurance-specific benefits

### /members/founding
- Founding member benefits
- Limited availability
- Shape the platform

## Tasks

- [x] Create `/members/page.tsx` - overview
- [x] Create `/members/banks/page.tsx`
- [x] Create `/members/investment-managers/page.tsx`
- [x] Create `/members/insurance/page.tsx`
- [x] Create `/members/founding/page.tsx`
- [x] Each page explains: Why relevant, What you get, How to join
- [x] Maintain dark theme consistency
- [x] Add appropriate CTAs to each page

## Implementation Notes (2026-01-13)

All member segment pages have been created with consistent structure:
- **Overview page** (`/members`): Explains membership benefits, links to all segments
- **Banks page** (`/members/banks`): Credit risk, market risk, operational risk, regulatory compliance focus
- **Investment Managers page** (`/members/investment-managers`): Portfolio risk, factor analysis, mandate compliance focus
- **Insurance page** (`/members/insurance`): Underwriting, claims, reserving, Solvency II focus
- **Founding Members page** (`/members/founding`): Steering committee, early access, pricing benefits

Each page includes:
- Hero section with segment-specific badge
- "Why [Segment]?" section with benefits sidebar
- Use cases grid (6 items)
- Relevant risk domains
- "How to Join" process steps
- CTAs: "Request Early Access" + "Contact Us" email
- Cross-navigation between member pages

Navigation updated to use `/members/founding` instead of `/skills-sharing/founding-members`.

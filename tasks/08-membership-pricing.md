# Task 08: Membership & Pricing Page

## Objective
Create clear commercial model visibility with membership tiers.

## Proposed Tiers

| Tier | Annual Fee | Target | Features |
|------|------------|--------|----------|
| Founding Member | £10,000 | Early adopters | Full access, shape the platform, priority support |
| Member | £20,000 | Banks, large FIs | Full skills library, unlimited patterns |
| Enterprise | Custom | Large institutions | Custom skills, dedicated support, on-prem option |

## Tasks

- [x] Create `/membership/page.tsx`
- [x] Design tier comparison layout
- [x] Add "What You Get" breakdown for each tier
- [x] Highlight Founding Member offer (limited spots)
- [x] Add FAQ section
- [x] Include clear CTA for each tier
- [x] Update early access form with:
  - Organization type (Bank, Asset Manager, Insurer, Other)
  - Role (CRO, Risk Manager, Technology, Executive)
- [x] Maintain dark theme consistency

## Implementation Notes

### Files Created/Modified:
- `app/membership/page.tsx` - Main membership & pricing page with:
  - Three-tier pricing cards (Founding Member, Member, Enterprise)
  - "What Every Member Gets" section with 4 feature cards
  - Feature comparison table
  - Founding Member highlight section with stats
  - 6 FAQ questions
  - Registration form section

- `app/components/MembershipForm.tsx` - Enhanced registration form with:
  - Email field (required)
  - Organization type dropdown (Bank, Asset Manager, Insurer, Other)
  - Role dropdown (CRO, Risk Manager, Technology, Executive, Other)
  - Botpoison bot protection
  - Formspark form submission
  - Success/error states

- `app/globals.css` - Added `.badge-warning` class for amber/warning styled badges

### Design Decisions:
- Used amber color scheme for Founding Member tier to match existing founding member pages
- Used blue for standard Member tier
- Used purple for Enterprise tier
- Maintained dark theme consistency with slate-900/slate-950 backgrounds
- Three-column grid for tier comparison on desktop, stacks on mobile
- Feature comparison table with color-coded values per tier

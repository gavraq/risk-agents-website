# Task 04: Navigation Restructure

## Objective
Simplify navigation from complex multi-level to clean 3-4 items.

## Current Navigation (Too Complex)
```
Platform (7 sub-items)
Skills Sharing (3 sub-items)
Risk Domains
Design Philosophy
About
```

## New Navigation Structure
```
Risk Agents (Platform)
  -> Overview
  -> Skills Framework
  -> How It Works

Members
  -> Banks
  -> Investment Managers
  -> Insurance Companies
  -> Founding Members

How We Think (was "Design Philosophy")

About
```

## Tasks

- [x] Update `Navigation.tsx` with new structure
- [x] Rename "Design Philosophy" to "How We Think"
- [x] Rename "Skills Sharing" to "Members"
- [x] Implement clean dropdown styling (subtle, not aggressive)
- [x] Add sticky navigation with transparency on scroll
- [x] Ensure mobile responsive menu works

## Implementation Notes (Completed 2026-01-13)

Navigation restructured from complex multi-level (Platform with 7 sub-items, Skills Sharing with 3 sub-items, Risk Domains, Design Philosophy, About) to clean 4-item structure:

1. **Risk Agents** (dropdown): Overview, Skills Framework, How It Works
2. **Members** (dropdown): Banks, Investment Managers, Insurance Companies, Founding Members
3. **How We Think** (was "Design Philosophy") - direct link
4. **About** - direct link

Features implemented:
- Sticky navigation with scroll-triggered transparency (transparent at top, solid on scroll)
- Subtle dropdown styling with CSS custom classes
- Mobile responsive accordion menu with collapsible sections
- Clean hover effects (color transitions only, no flashy animations)
- Generous negative space following design system guidelines

## Design Notes
- Generous negative space
- Subtle hover effects (color shifts only)
- No flashy animations

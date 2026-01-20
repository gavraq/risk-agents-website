---
type: reference
title: Phase 2 Roadmap - Follow-up Items
created: 2026-01-13
tags:
  - roadmap
  - phase-2
  - follow-up
related:
  - "[[10-final-polish]]"
---

# Phase 2 Roadmap: Follow-up Items

## Overview

This document captures deferred items, stretch goals, and enhancements identified during the v2 website redesign (Phase 1) that are recommended for Phase 2 implementation.

---

## High Priority Items

### 1. Interactive Features (from README.md Phase 5-6)

**Skill Browser & Pattern Library**
- Searchable, filterable skill browser interface
- Pattern library with browse/filter capabilities
- Live query interface demo for prospects
- Pattern Evolution Dashboard

**Estimated Effort:** High | **Impact:** High

### 2. Hero Video Enhancement (from REDESIGN-PLAN.md 6.1)

**Options:**
- Option A: Purchase hero video from iStock (themes: expanding horizon, sunrise over Earth)
- Option B: AI Avatar video - 60-second explainer with professional AI presenter
- Option C: Enhanced static with high-quality evocative images + parallax effects

**Status:** Deferred pending initial site launch
**Estimated Effort:** Medium | **Impact:** High

### 3. Blog & Resources Section (from README.md Phase 6)

**Content Types:**
- Thought leadership articles
- Technical deep dives
- Industry insights
- How-to guides
- Case studies (post-launch)

**Estimated Effort:** High | **Impact:** Medium

### 4. CRM Integration & Form Automation

**Enhancements:**
- Integration with CRM system for automated lead routing
- Lead scoring based on qualification fields
- Follow-up email sequence automation
- Enhanced form analytics

**Estimated Effort:** High | **Impact:** High

---

## Medium Priority Items

### 5. Component Consolidation

**Footer Migration**
- Homepage uses unified `Footer.tsx` component
- Other pages still use inline footer implementations
- Migrate all pages to use unified Footer component

**Estimated Effort:** Low | **Impact:** Low

### 6. Content Refinement

**Jargon Reduction (from REDESIGN-PLAN.md 5.2)**
Consider plain English alternatives:
- Context Engineering → Knowledge Architecture
- GTD Alignment → Strategic Goal Tracking
- Fabrix Patterns → Ready-to-Use Workflows
- AIMM → AI Maturity Journey (or remove if not core)

**Estimated Effort:** Medium | **Impact:** Medium

### 7. Visual Pattern System (from REDESIGN-PLAN.md 6.2)

**"Expanding Boundary" Visual Metaphor**
- Create consistent visual language
- Circles expanding outward motif
- Horizon lines extending
- Human figure at center with AI extending reach
- Apply across hero, icons, diagrams

**Estimated Effort:** Medium | **Impact:** Medium

---

## Lower Priority Items

### 8. Extended SEO & Analytics

**Refinements:**
- Monitor analytics to refine meta descriptions based on visitor behavior
- A/B test title tags for key landing pages
- Schema.org structured data for rich snippets

**Estimated Effort:** Low | **Impact:** Medium

### 9. Accessibility Audit

**WCAG AA Compliance Review:**
- Full accessibility audit beyond current implementation
- Color contrast verification
- Screen reader testing
- Keyboard navigation testing
- Form accessibility improvements

**Current Status:** `prefers-reduced-motion` support and 0.3s animation standards already implemented

**Estimated Effort:** Medium | **Impact:** Medium

### 10. Favicon & Logo Variants

**Enhancements:**
- Create simplified "RA" icon for small contexts
- Export additional logo variants (light backgrounds, etc.)
- Apple touch icon optimization

**Estimated Effort:** Low | **Impact:** Low

### 11. Circuit Pattern Refinement (from REDESIGN-PLAN.md 6.3)

**Options:**
- Reduce opacity in remaining usages
- Replace with organic/human-centric patterns
- Remove entirely in favor of cleaner aesthetic

**Current Status:** Already removed from most pages in v2, retained selectively

**Estimated Effort:** Low | **Impact:** Low

---

## Out of Scope (Platform/Infrastructure)

The following items are mentioned in the site content but relate to platform development, not website work:

- **Phase 2: Report Reduction** - infrastructure work
- **Phase 3: Query-First Approach** - infrastructure work
- Natural Language Reporting transition roadmap

---

## Priority Summary Table

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| High | Skill Browser & Pattern Library | High | High |
| High | Hero video/enhanced graphics | Medium | High |
| High | CRM integration & form automation | High | High |
| Medium | Blog & resources section | High | Medium |
| Medium | Footer component migration | Low | Low |
| Medium | Jargon reduction pass | Medium | Medium |
| Medium | Expanding Boundary visual system | Medium | Medium |
| Low | SEO analytics refinement | Low | Medium |
| Low | WCAG AA full audit | Medium | Medium |
| Low | Favicon/logo variants | Low | Low |
| Low | Circuit pattern refinement | Low | Low |

---

## Notes

- Phase 1 (Tasks 01-10) completed with v2-redesign branch
- PR #1 created: https://github.com/gavraq/risk-agents-website/pull/1
- All success metrics from Task 10 have been verified

# Task 03: Dark Theme & Typography Setup

## Objective
Implement the dark, elegant aesthetic inspired by Sapius.co.uk.

## Design Reference (from Sapius)
- **Primary:** Dark backgrounds (rgb(22, 22, 22) / near-black)
- **Text:** White/light on dark
- **Accents:** Subtle grays (rgb(94, 94, 94), rgb(164, 164, 164))
- **Typography:** League Spartan (headlines), Source Sans Pro (body)
- **Animations:** Restrained, 0.3s transitions

## Tasks

- [x] Update `globals.css` with dark color palette
- [x] Add Google Fonts: League Spartan and Source Sans Pro
- [x] Update Tailwind config with new color variables
- [x] Set default background to near-black
- [x] Update text colors to white/light gray
- [x] Reduce/remove circuit pattern background
- [x] Add subtle transition defaults (0.3s)

## Key Principle
> "Less is more" - understated professionalism through restraint

## Implementation Notes (2026-01-13)

### Changes Made:
1. **globals.css** - Complete rewrite with Sapius-inspired dark theme:
   - Background: `rgb(22, 22, 22)` (near-black)
   - Foreground: `rgb(255, 255, 255)` (white)
   - Subtle gray accents: `rgb(164, 164, 164)` and `rgb(94, 94, 94)`
   - Removed all circuit pattern backgrounds
   - Added 0.3s transition defaults with cubic-bezier easing
   - Minimal card styles with subtle borders
   - Clean button styles (white on dark primary, outline secondary)
   - Understated badge styles

2. **layout.tsx** - Updated font configuration:
   - Added League Spartan (headlines): weights 400-700
   - Added Source Sans 3 (body): weights 300-600
   - Both fonts using CSS variables for proper integration

### Files Modified:
- `app/globals.css`
- `app/layout.tsx`

# IRFC Design Guide

This guide translates the supplied Incinta brand references into the current
IRFC website direction.

## Brand Direction

The site should feel warm, calm, clinically credible, and personal. Use generous
whitespace and clear patient-focused paths. Avoid visual clutter and unsupported
outcome promises.

## Colors

| Token | Color | Value | Use |
| --- | --- | --- | --- |
| `--brand-lavender` | Lavender Purple | `#8a81af` | Primary brand color |
| `--brand-gold` | Vegas Gold | `#c6aa55` | Premium accent |
| `--brand-orange` | Carrot Orange | `#f68c3d` | Warm accent or action |
| `--brand-ivory` | Ivory | `#fffaf1` | Main background |
| `--brand-pink` | Amaranth Pink | `#f499b8` | Supporting highlight |
| `--brand-yellow` | Naples Yellow | `#f5da52` | Supporting highlight |

- Use near-black text on Ivory, Gold, Orange, Pink, and Yellow.
- White body text does not have enough contrast on these brand colors.
- White text on Lavender is only suitable for large text; use a darker purple
  behind normal white text.
- Use Orange, Pink, and Yellow sparingly.

## Typography

- Font: Poppins
- Headings and subheadings: Semibold 600
- Body, navigation, and controls: Regular 400
- Body text: at least 16px with comfortable line spacing
- Do not introduce a serif display font.

## Voice

- Clear, compassionate, specific, and inclusive
- Avoid guarantees and unsupported clinical claims
- Avoid `hope`; prefer `integrity`, `trust`, `clarity`, or `guidance`
- Avoid `miracle`; describe expertise, technology, and personalized care
- Use MLA-style title capitalization for headings
- Use sentence case for paragraphs, helper text, and error messages

## UI Basics

- Primary navigation: About, Fertility, Egg Freezing & Donation, More Services,
  Resources, Contact
- Primary action: Schedule Appointment
- Utility action: Patient Portal
- Use a centered container near 1280px with generous section spacing.
- Use dark purple primary buttons with white text.
- Keep controls at least 44px high and provide visible focus states.
- On mobile, use a clear menu and a logical single-column reading order.
- Use licensed, inclusive, natural photography; current Unsplash images are
  placeholders.

## Shape and Transitions

- Use rounded rectangles for cards, media panels, and grouped content.
- Use approximately 28px card radii and 44px radii for large visual panels.
- Avoid sharp rectangular section changes; prefer soft curves or gradients.
- Keep decorative shapes organic and restrained so content remains clear.
- On mobile, present sibling cards as horizontal scroll-snap carousels with a
  partial preview of the next card instead of long vertical stacks.

## Accessibility

- Meet WCAG 2.2 AA contrast requirements.
- Preserve semantic headings, keyboard access, alt text, and reduced motion.
- Never communicate meaning through color alone.

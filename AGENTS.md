# IRFC Website Guide

Before changing UI or visible copy, read [`DESIGN.md`](./DESIGN.md).

## Rules

- Use the approved IRFC logo without redrawing, stretching, or recoloring it.
- Use the brand colors through CSS variables, not repeated raw hex values.
- Use Poppins: 600 for headings and 400 for body copy.
- Keep the experience warm, clear, credible, and patient-centered.
- Avoid `hope` and `miracle` in original marketing copy.
- Use MLA-style title capitalization for headings and sentence case for body
  copy.
- Do not invent medical claims, success rates, physicians, locations, contact
  details, testimonials, or legal language.
- Keep Schedule Appointment as the primary action and Patient Portal as a
  utility action.
- Make every UI change responsive, keyboard accessible, and WCAG AA compliant.

## Verification

After frontend changes:

1. Run `npm run typecheck`.
2. Check the affected desktop and mobile pages in the in-app browser.
3. Report what was verified.

Do not run `pnpm build`.

# Customer Homepage

## Goal
Make the root homepage a completely customer-focused Birch Aluminum product page. Preserve the current investor homepage at `/investors` and keep all existing research, technology, and investor-opportunity pages available separately.

## Customer page
- Lead with Birch Aluminum as a future U.S. supplier of secondary aluminum.
- Make product availability explicit: **ready for shipping by the end of 2028**.
- Present the product range clearly: **ingot and sow in 356 and 380 alloys**.
- Use existing real product and facility imagery; keep the established black, white, and yellow visual system.
- Organize the page for purchasing and sourcing teams:
  1. Product and availability statement
  2. Product forms and alloys
  3. Supply proposition and planned production process
  4. Clear inquiry section
- Avoid investor metrics, fundraising language, deck links, and broad market-research content on the customer homepage.

## Inquiry experience
- Add a concise form asking for company, contact name, email, alloy, product form, specification/details, monthly consumption, and optional notes.
- The submit action will open a prepared email to the existing Birch Aluminum address with the entered details, so no sign-in is required and no customer data is stored on the website.
- Use the customer-facing call to action: **Send your inquiry with specifications and monthly consumption.**

## Navigation and separation
- Replace the root `/` content with the new customer page.
- Preserve the current homepage unchanged in meaning at `/investors`.
- Give the customer page its own relevant navigation anchors, while retaining links to Technology and Investors.
- Keep existing `/investor-opportunity`, `/aluminum-opportunity`, and `/market-research` pages intact.
- Do not restore any access to the investor deck.

## Search and sharing
- Update homepage title, description, structured text, sitemap, and machine-readable site summary to describe Birch as a future supplier of 356 and 380 aluminum ingot and sow.
- Add the new `/investors` location to the sitemap.

## Quality checks
- Verify desktop and phone layouts, form validation, prepared-email contents, navigation, and all affected routes.
- Confirm the page has no investor-only content or deck access and that the existing investor homepage remains reachable at `/investors`.

## Technical details
- Build focused customer components using the existing React, Tailwind, shared buttons, tokens, header, and footer patterns.
- Keep all inquiry handling client-side through a correctly encoded `mailto:` action.
- Preserve the current investor homepage as a separate page component rather than duplicating its sections.

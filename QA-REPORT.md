# Portfolio QA Report

Date: 4 November 2026

## Scope

Reviewed the seven main pages and four project detail pages through a local static server. The browser checks used the actual rendered pages, direct page loads, keyboard input, theme controls, browser history, and responsive viewport overrides.

## Results

- **Direct page loads:** All 11 pages loaded with a page title, one `h1`, the shared navigation, and exactly one active navigation item. Project detail pages mark Projects as active.
- **Navigation and history:** Main navigation links use direct page URLs. A project page opened through the mobile menu; browser Back and Forward returned to the expected pages. The mobile menu opened by keyboard, Tab moved to the first menu link, Enter followed a page link, and Escape closed the menu and returned focus to the menu button.
- **Themes:** Light and dark themes were toggled on all 11 pages. Both saved themes survived a reload. On a fresh local origin with no saved choice, the initial theme followed the browser’s dark system preference.
- **Responsive layout:** Every page was checked at 320, 390, 768, 1108, and 1440 CSS-pixel widths. No horizontal overflow was found. The mobile menu links have 48-pixel rows; its résumé action and controls meet a 44-pixel minimum target.
- **Contact design:** The contact page was visually reviewed in light and dark mode. The panel, contact rows, links, and action buttons use dedicated theme surfaces and contrast tokens. Calculated contrast ratios for panel text and links range from 6.08:1 to 13.09:1 across both themes.
- **Internal links and assets:** A static HTML check reviewed 151 local link references and confirmed that the stylesheet, script, icon, and résumé paths resolve to files. No missing targets were found.
- **External links:** External links use HTTPS, open in a new tab, and include `noopener noreferrer`. The GitHub profile and the NovaYield, ATS Backend, and Premiere Sparkles repositories opened as public GitHub pages. The LinkedIn URL is copied from the résumé; LinkedIn returned HTTP 403 to an automated HEAD request, while search resolved the same profile slug to Samuel Asante’s public profile. The destination is retained exactly as supplied.
- **Browser console:** No warnings or errors were recorded in the local portfolio tab after navigation and interaction checks.
- **Accessibility and motion:** Semantic landmarks, heading hierarchy, visible focus styling, descriptive controls, active-page state, and the skip link are present. A `prefers-reduced-motion: reduce` stylesheet rule disables transitions and animation. The browser harness did not provide a reduced-motion preference override, so that setting was verified in CSS rather than toggled in the browser.
- **Runtime:** The site runs as static HTML/CSS/JavaScript with no package installation or build step.

## Content review

The Experience page now lists RemoTown IT, WamiAgro Limited, and Really Great Tech with résumé-supported dates, titles, locations, contributions, tools, and documented outcomes. Contact details use the résumé’s email, phone number, and LinkedIn path; GitHub remains the profile already supplied for the portfolio. Education and development entries use the verified degree, honours, ENACTUS role, AIT fellowship, Aspire Leaders cohort, and IBM certification. No CWA or unverified employment entry was added.

Project cards and detail pages retain their known constraints: NovaYield is in development; NeuroScan is functional but not deployed; ATS is presented as a backend API with only its verified stack; Premiere Sparkles is described as a Next.js booking frontend that delegates booking to a third-party API.

## Limitations

- LinkedIn’s automated endpoint check was blocked with HTTP 403. The profile slug matched the public search result, but automated navigation to the LinkedIn page was not verified.
- Reduced-motion behavior was reviewed in CSS but could not be toggled through the available browser controls.
- No contact form is included; contact remains direct by email, phone, and profile links, consistent with the site specification.

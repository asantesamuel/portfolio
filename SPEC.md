# Samuel Boakye Asante --- Portfolio Website Specification

**Document:** `SPEC.md`\
**Project:** Personal Software Engineering Portfolio\
**Owner:** Samuel Boakye Asante\
**Status:** Product and implementation baseline\
**Last updated:** November 4, 2026

------------------------------------------------------------------------

## Approved product decisions

The following decisions were confirmed by Samuel on November 4, 2026. Treat them as approved requirements unless Samuel explicitly changes them.

| Area | Approved decision |
|---|---|
| Visual direction | Editorial Minimalism |
| Theme | Both light and dark themes, with a theme switcher |
| Site structure | Hybrid: homepage plus dedicated project case studies |
| Personal photograph | None |
| Initial featured projects | NovaYield, NeuroScan, ATS Backend, Premiere Sparkles Salon website |
| Incomplete experience details | Exclude until verified; do not publish speculative or draft employment claims |
| Contact | Direct email and social links only; no contact form in the initial release |
| Domain | Decide later; do not block development on domain selection |
| Technical writing | Future enhancement; do not create an empty writing section in the initial release |

### Approved project selection

The initial featured-project list is:

1. NovaYield — `https://github.com/asantesamuel/NovaYield`
2. NeuroScan — repository and demo destination to be confirmed.
3. Application Tracking System (ATS) Backend — `https://github.com/asantesamuel/ATS_Backend`
4. Premiere Sparkles Salon website — `https://github.com/asantesamuel/premiere-sparkles`

The URL Shortener and Snapchat Clone are explicitly excluded from the initial featured-project list. The Task Manager is also not part of the approved four-project selection.

The ATS Backend and Premiere Sparkles repositories must be inspected before writing detailed descriptions. Their functionality, stack, status, and Samuel's contribution must be verified from the repository or by asking Samuel. Do not infer these details from project names.

### Design interpretation

Editorial Minimalism means a typography-led, grid-conscious, restrained design with generous purposeful whitespace, clear hierarchy, and subtle interactions. It should feel distinctive and personal without becoming a generic developer template. Both themes must receive deliberate design treatment.

---

## 1. Purpose

Build a professional personal portfolio website that communicates Samuel
Boakye Asante's identity, engineering capabilities, selected work,
professional experience, leadership, and career direction.

The website must do more than list technologies or display project
screenshots. It should help a visitor quickly understand:

1.  Who Samuel is as an engineer.
2.  What kinds of software problems he works on.
3.  What he has actually built and contributed to.
4.  How he approaches engineering and continuous learning.
5.  How to review his work, contact him, or connect professionally.

The portfolio is a durable professional asset for job applications,
recruiter conversations, introductions to engineering leaders,
mentorship opportunities, collaborations, and future graduate or
research opportunities.

It should present a credible account of an early-career engineer with
practical software development experience and growing depth in backend
engineering, while making his interest in AI/ML visible without allowing
it to obscure his current engineering focus.

### Product principles

-   Truth over hype: do not invent metrics, users, traction,
    responsibilities, deployment status, or outcomes.
-   Evidence over adjectives: demonstrate capability through projects,
    decisions, contributions, and clear explanations.
-   Clarity over density: visitors should understand the story without
    reading every paragraph.
-   Substance over decoration: visual design should support the work,
    not compete with it.
-   Maintainability: use a small, understandable codebase with reusable
    patterns and no unnecessary dependencies.
-   Responsive by default: the experience must work well on phones,
    tablets, laptops, and large screens.

------------------------------------------------------------------------

## 2. Target audience

Design and write for the following audiences, in priority order.

### Primary audiences

**Recruiters and talent acquisition professionals** - Need to identify
Samuel's role, experience, technical stack, and strongest evidence of
capability quickly. - Should be able to find the CV, GitHub, LinkedIn,
and contact details easily. - Should not have to infer whether he is a
backend engineer, frontend engineer, or AI researcher.

**Engineering managers, CTOs, and technical leads** - Want evidence of
engineering judgment, implementation ability, problem-solving,
collaboration, and growth. - Need project explanations that make
Samuel's role and contribution explicit. - Should be able to inspect
source code and understand project status and technical decisions.

**Software engineering teams and potential collaborators** - Want to
understand the technologies Samuel works with, the problems he is
interested in, and how he contributes to a team. - May be interested in
backend systems, APIs, data-driven applications, AI/ML, and socially
useful technology.

### Secondary audiences

**Mentors and senior professionals** - Should get a concise
understanding of Samuel's journey, current direction, and areas where
guidance or collaboration could be valuable.

**Graduate admissions reviewers, researchers, and academic
collaborators** - May be interested in his Computer Science education,
independent technical work, AI/ML projects, and longer-term interest in
research. - The site must not imply that he already has a research
publication record or postgraduate qualification unless that is later
verified.

**Founders, organizations, and community-oriented initiatives** - May be
interested in his ability to build practical products and his interest
in applying technology to real problems, including agriculture and food
systems.

------------------------------------------------------------------------

## 3. Personal positioning

### Core positioning

Samuel Boakye Asante is an early-career Software Engineer and Computer
Science graduate focused on building reliable, useful software, with a
growing specialization in backend engineering and an ongoing interest in
AI/ML.

His professional identity should be presented through the idea of **The
Builder**: someone who enjoys turning ideas and real-world problems into
working software, learning by building, and improving the quality of
what he creates.

### Positioning hierarchy

1.  **Primary professional identity:** Software Engineer.
2.  **Current technical focus:** Backend Engineering.
3.  **Additional technical interest and experience:** AI/ML and
    data-driven applications.
4.  **Longer-term direction:** Deeper AI engineering and research
    capability, while continuing to strengthen software engineering
    fundamentals.
5.  **Personal differentiator:** A builder's mindset, practical
    curiosity, ownership, collaboration, and interest in solving
    meaningful problems.

Do not position Samuel primarily as an AI researcher, AI specialist,
technical founder, or senior engineer. Those are not accurate
descriptions of his current career stage.

### Suggested hero message

Use this as a starting point, not immutable copy:

> I'm Samuel Asante, a Software Engineer who enjoys building thoughtful,
> reliable software. I'm focused on backend engineering and interested
> in the ways AI can help solve real-world problems.

A shorter headline could be:

> I build software that turns ideas into useful products.

The final design may use a stronger or more distinctive headline, but it
must preserve the positioning above.

### Voice and writing style

-   Professional, direct, warm, and thoughtful.
-   Confident without sounding boastful.
-   Technically specific without becoming difficult for non-engineers to
    understand.
-   Personal without becoming an autobiography.
-   Avoid generic claims such as "passionate tech enthusiast", "
    혁olutionizing the world", "ninja", or "rockstar developer".
-   Avoid inflated claims, unsupported statistics, and buzzword-heavy
    copy.
-   Use first person where it makes the portfolio more human.

### Personal story

The About section may briefly communicate that Samuel's path into
technology was shaped by curiosity, persistence, and a desire to build.
He was the first person in his extended family to pursue Computer
Science/technology, and he continued despite discouragement from others
about the field.

This story should be handled with restraint. It is context for his
motivation, not a dramatic hardship narrative or the main selling point
of the website. The portfolio should remain focused on professional
capability and work.

------------------------------------------------------------------------

## 4. Required sections

The website should use a clear, single-page structure with anchored
navigation. Individual project detail pages may be added if they
materially improve the project stories.

### 4.1 Navigation

Include: - Name or simple personal wordmark. - Links to About, Projects,
Experience, and Contact. - A visible CV/resume action. - A mobile
navigation pattern that is accessible and usable.

The navigation should remain simple. Do not add links to sections that
do not exist.

### 4.2 Hero / Introduction

Must communicate within a few seconds: - Samuel's name. - His identity
as a Software Engineer. - His current backend engineering focus. - A
concise supporting statement. - Primary call to action to view
projects. - Secondary action to view/download CV. - Links to GitHub and
LinkedIn.

Do not include a personal photograph or make the layout dependent on a headshot. Use typography, layout, project imagery, and carefully considered graphic details to establish personality.

### 4.3 About

Include: - A concise professional introduction. - BSc Computer Science
from Kwame Nkrumah University of Science and Technology (KNUST),
completed in 2025. - His builder mindset and approach to learning
through practical work. - His current focus on strengthening backend
engineering fundamentals. - His interest in AI/ML and building
technology that addresses practical problems. - A concise personal
motivation paragraph, if it fits naturally.

Do not turn this into a long biography.

### 4.4 Skills / Technical toolkit

Organize skills by meaningful categories rather than presenting one
oversized list.

**Backend and APIs** - JavaScript and TypeScript - Node.js and Express -
Python and FastAPI - C# and .NET - REST API development - Swagger / API
documentation

**Databases and data** - PostgreSQL - MongoDB - TypeORM - Entity
Framework Core - Redis / ValKey

**Frontend** - HTML - CSS - JavaScript - React - Next.js - Redux

**AI/ML and data-oriented work** - Python - Model development and
training - Applied machine learning - Data-driven problem solving

**Tools and engineering practices** - Git and GitHub - AWS (only
describe the level of experience accurately) - Testing - Technical
documentation - Team collaboration and code review

The list is a record of technologies and areas encountered, not a claim
of equal proficiency in all of them. Do not add proficiency percentages
or progress bars. Samuel's strongest positioning should remain backend
engineering.

Technologies such as MediatR, CQRS, EF Core, Mapster, Quartz.NET,
Serilog, and ValKey may be included under experience or project-specific
tooling where relevant. Do not imply deep mastery merely because a
technology appeared in a work environment.

### 4.5 Featured projects

Projects should be the strongest evidence on the site. Each project card
must show: - Project name. - Short description of the problem it
addresses. - Samuel's role and contribution. - Relevant technologies. -
Current status. - Link to source code, live demo, or detailed case study
where available.

Approved initial featured projects (four):

**NovaYield** - NASA Space Apps Challenge 2026 project. - A
decision-support concept for exploring crop rotations under changing
climate and environmental conditions. - Uses NASA Earth observation data
alongside local soil information, crop characteristics, and farmer
priorities. - Samuel's role: backend engineering and team leadership. -
Planned/selected stack includes FastAPI, React with Vite, and MongoDB. -
Status: backend partially implemented; frontend still under development
as of this specification. - Do not describe it as a completed or
deployed product. - GitHub: `https://github.com/asantesamuel/NovaYield`

**NeuroScan** - Functional application involving machine learning. -
Samuel contributed to backend, frontend, and model development. - Samuel
trained both models himself. - Status: functional application, not
deployed. - Do not invent accuracy, clinical validation, users, or
diagnostic claims. If the project relates to health, describe it as an
experimental/educational software project and not a clinically validated
diagnostic tool. - Add repository and demo links only after verifying
the exact destinations.

**URL Shortener** - A web application built during Samuel's internship
at Really Great Tech Company. - Relevant evidence of backend/API and
application development. - Repository:
`https://github.com/asantesamuel/URL-Shortener-Web-App` - Verify the
repository before publishing detailed implementation claims.

**Task Manager** - A web application built during the Really Great Tech
Company internship. - Repository:
`https://github.com/asantesamuel/Web-app-task-manager` - Explain
Samuel's actual contribution after reviewing the code and project
history.

**Snapchat Clone** - A project built during the Really Great Tech
Company internship. - Repository:
`https://github.com/asantesamuel/snapchat-backend` - The repository name
suggests a backend focus; verify implementation and contribution before
describing details.

The initial launch should feature approximately 3--4 strong projects
rather than every project Samuel has ever touched. Prioritize depth and
evidence over quantity.

### 4.6 Professional experience

Show experience in reverse chronological order. Each entry should
contain organization, role, dates, a short context statement, and
verified contributions.

**WamiAgro --- IT Associate Intern** - Agri-fintech environment. -
Worked with a backend-oriented technology environment including C#,
PostgreSQL, MongoDB, Redis/ValKey, MediatR/CQRS, Entity Framework Core,
Mapster, Quartz.NET, and Serilog. - Describe only work Samuel personally
completed or contributed to. Do not convert exposure to the stack into
claims of production ownership or mastery. - Dates and detailed
responsibilities must be confirmed before publication.

**Really Great Tech Company --- Backend Engineering Intern** - December
2025 -- March 2026. - Worked on projects including a URL shortener, task
manager, and Snapchat clone. - Also worked on tests and technical
presentations. - Present this as an internship, not as National
Service. - Use verified contributions rather than generic
job-description bullets.

**Strategic Corporation --- UI/UX Intern** - 2024. - Worked in a
three-person team on a school management application. - Work included
surveys and administrator-dashboard UI. - Do not imply sole ownership of
the product.

**Nerasol --- Internship experience** - Internships in 2023 and 2024. -
Add exact titles, dates, and responsibilities only after confirmation.

If space is limited, use concise entries and prioritize the most
relevant software engineering experience. Do not fabricate dates, job
titles, employment types, or achievements.

### 4.7 Education

**Kwame Nkrumah University of Science and Technology (KNUST)** - BSc
Computer Science. - Completed in 2025. - Second Class Upper Honours. -
CWA: 62.1/100, only if Samuel explicitly wants the score displayed.

Do not make the CWA the visual focus. The degree and classification are
sufficient for most visitors.

### 4.8 Leadership and community

Include a concise section or subsection for leadership and selected
extracurricular achievements.

**Enactus KNUST** - Progressed from member to Vice President, Publicity,
within approximately six months. - Led a five-person publicity team. -
Coordinated approximately four posts per week. - Contributed to audience
growth: reported average follower growth of 200+ and approximately 400
additional Instagram followers. Verify the measurement period and
baseline before displaying these figures. - Supported 10+ SDG 2 / SDG 3
campaigns. - Contributed to collaboration with Standard Chartered. -
Participated in the Ghana delegation to the Enactus 50th Anniversary and
World Cup in Thailand, where the delegation reached the Top 16.

**SankofaTech Achievers in Technology (AIT)** - 2026 Fellow, inaugural
cohort. - A 12-month development program focused on technical growth,
mentorship, leadership, and practical project experience. - Present as a
fellowship and development experience, not employment.

**Aspire Leaders** - Aspire Leaders 2026 Cohort 2 graduate.

Keep this section selective. It should demonstrate leadership, teamwork,
communication, and initiative without overpowering the engineering work.

### 4.9 Interests / Direction

A short section may communicate longer-term interests: - Backend systems
and software architecture. - AI/ML engineering and applied research. -
Computer architecture and hardware. - FPGA design.

These are areas of interest and development, not necessarily current
professional specializations. Keep them distinct from demonstrated
skills.

A brief statement about building technology that can contribute to
meaningful problems in Ghana and beyond is appropriate. Do not make
broad impact claims without evidence.

### 4.10 Contact

Include: - Professional email address (confirm the exact address before
launch). - LinkedIn profile. - GitHub profile:
`https://github.com/asantesamuel` - A clear invitation for professional
conversations, engineering opportunities, mentorship, and
collaborations. - A contact form only if it can genuinely submit
messages through a working service or backend.

Do not display a fake form that only produces a success message without
sending anything.

### 4.11 Footer

Include: - Samuel Boakye Asante. - Copyright year generated dynamically
with JavaScript. - Social links. - Optional short closing line.

------------------------------------------------------------------------

## 5. Content

### Content strategy

The content should tell a coherent professional story:

1.  **Identity:** Software Engineer and builder.
2.  **Focus:** Backend engineering and strong software engineering
    fundamentals.
3.  **Evidence:** Projects, internship contributions, technical skills,
    and education.
4.  **Character:** Ownership, curiosity, persistence, collaboration, and
    leadership.
5.  **Direction:** Continued growth in backend engineering, with AI/ML
    as an important longer-term technical interest.
6.  **Next step:** Make it easy to contact Samuel or inspect his work.

### Content rules

-   Write in first person for the hero and About sections.
-   Use concise, outcome-oriented descriptions.
-   Explain what a project does before listing its stack.
-   State Samuel's role explicitly in team projects.
-   Distinguish personal contributions from team outcomes.
-   Label work as completed, in progress, experimental, or not deployed
    where relevant.
-   Use numbers only when there is a defensible source and clear
    measurement period.
-   Never invent testimonials, clients, endorsements, awards, revenue,
    downloads, users, or project metrics.
-   Do not claim that a project is production-ready, deployed,
    clinically validated, or commercially successful unless verified.
-   Avoid placeholder copy in the final release.
-   Do not publish private employer information, confidential code,
    internal architecture, or sensitive work details.

### Assets and links to collect or verify

Before launch, verify: - Professional email address. - LinkedIn profile
URL. - GitHub profile and each featured repository. - CV PDF and its
download path. - Project screenshots and whether they can be publicly
shared. - Any live demo URLs. - Exact dates and role titles for each
experience. - Permission to use organization logos, partner names, and
project branding where necessary.

------------------------------------------------------------------------

## 6. Functional requirements

### Navigation and interaction

-   Navigation links scroll to the correct page sections.
-   Mobile navigation opens and closes reliably.
-   Mobile navigation closes after a section link is selected.
-   Current navigation state may be indicated when useful, without
    distracting animation.
-   All interactive elements must work with mouse, keyboard, and touch.

### Project cards

-   Project cards link to the correct repository, demo, or case study.
-   External links open appropriately and use safe link attributes.
-   A missing demo or repository must not be represented by a dead link.
-   Project status is visible in text, not communicated by color alone.

### CV

-   A CV action must point to a real, verified PDF.
-   The user should be able to view or download the document.
-   If the CV is not ready, omit the action rather than linking to a
    placeholder.

### Contact

-   Email link uses a valid `mailto:` destination.
-   Social links lead to the correct profiles.
-   If a form is implemented, it must have:
    -   Required-field validation.
    -   Email validation.
    -   Clear loading, success, and error states.
    -   Accessible labels and error messages.
    -   A real submission destination or service.
    -   Basic spam protection appropriate to the chosen service.
-   Do not expose API secrets or private credentials in client-side
    JavaScript.

### Visual behavior

-   Smooth scrolling may be used, while respecting
    `prefers-reduced-motion`.
-   Animations must not block content or make the site difficult to use.
-   Interactive states must be provided for buttons, links, cards, and
    navigation.
-   Avoid unnecessary popups, autoplay media, and intrusive effects.

### Technical implementation

The project must use only: - HTML5 - CSS3 - Vanilla JavaScript

Do not use: - React, Vue, Angular, Svelte, Next.js, or other application
frameworks. - Bootstrap, Tailwind, Bulma, or other CSS frameworks. -
jQuery or JavaScript UI frameworks. - Build tools or bundlers unless
Samuel explicitly approves a later change. - A component library that
introduces a framework dependency.

A lightweight external font or icon resource may be considered only if
it adds clear value and has a graceful fallback. Prefer CSS, inline SVG,
and accessible text for simple icons.

### Suggested project structure

The coding agent may refine this structure, but should keep the project
simple and understandable.

``` text
portfolio/
├── index.html
├── SPEC.md
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
│       └── Samuel-Asante-CV.pdf
├── css/
│   ├── styles.css
│   └── responsive.css
└── js/
    └── script.js
```

If the project remains small, a single CSS file is acceptable. Do not
split files merely for the sake of having more files.

### Code quality

-   Use semantic HTML elements.
-   Use meaningful class names and consistent formatting.
-   Keep CSS organized by section or component.
-   Keep JavaScript modular and readable without introducing a module
    framework.
-   Avoid inline event handlers.
-   Avoid unnecessary global variables.
-   Avoid duplicated markup and styles where a simple reusable pattern
    is appropriate.
-   Add comments for non-obvious logic, not for every line.
-   Ensure there are no console errors.
-   Do not add dependencies without a clear reason and approval.

### SEO and sharing

-   Provide a meaningful page title and meta description.
-   Set the document language.
-   Include a favicon if an appropriate asset is available.
-   Add Open Graph metadata for social sharing.
-   Use descriptive headings and link text.
-   Provide meaningful image alt text.
-   Use a canonical URL only after the final domain is known.

### Performance and accessibility

-   Optimize image sizes and use modern formats where practical.
-   Set image dimensions or aspect ratios to reduce layout shifts.
-   Lazy-load below-the-fold images.
-   Ensure adequate text/background contrast.
-   Provide visible keyboard focus states.
-   Use correct heading order and landmarks.
-   Ensure controls have accessible names.
-   Do not rely on color alone to convey information.
-   Respect reduced-motion preferences.
-   Avoid large libraries and unnecessary network requests.

------------------------------------------------------------------------

## 7. Design / UX

### Overall design direction

Create a modern, editorial, engineering-focused portfolio. It should
feel personal, polished, calm, and intentional.

The visual experience should communicate a thoughtful builder rather
than a generic template, startup landing page, or flashy agency website.

### Visual principles

-   Clean typography and strong hierarchy.
-   Generous but purposeful whitespace.
-   Clear alignment and consistent spacing.
-   Restrained use of color.
-   Strong project presentation.
-   Subtle interactions and motion.
-   Readable line lengths.
-   Consistent visual language across all sections.

### Color direction

Use a restrained neutral foundation: - Warm or cool off-white / light
neutral backgrounds. - Deep charcoal or near-black primary text. - Muted
secondary text. - One distinctive accent color used consistently for
links, actions, and selected highlights.

The coding agent may propose a palette, but it should be cohesive and
accessible. Do not use gradients, glowing effects, or multiple bright
accent colors everywhere.

### Typography

-   Use a strong, readable sans-serif typeface.
-   Establish a clear scale for hero text, section headings, body text,
    labels, and metadata.
-   Keep body copy comfortable to read on small screens.
-   Avoid excessive font weights and decorative typography.
-   Use a system font stack or a lightweight web font with reliable
    fallbacks.

### Layout

-   Use a centered content container with a sensible maximum width.
-   Use a clear grid for project cards and experience entries.
-   Allow the hero to have a distinctive layout without sacrificing
    readability.
-   Avoid overly wide paragraphs.
-   Keep section spacing consistent.
-   Use responsive layouts rather than fixed desktop dimensions.

### Project presentation

Projects should receive strong visual attention.

Each project should have: - A clear title. - A concise problem/solution
description. - A visible role or contribution. - A compact technology
list. - A status label. - A clear repository/demo action where
available.

Use screenshots, diagrams, or interface previews only when genuine
project assets are available. Do not generate fake product screenshots
or use unrelated stock imagery as evidence of work.

### Responsive behavior

Design mobile-first or verify a mobile-first equivalent: - Small
screens: single-column content, readable typography, compact
navigation. - Medium screens: balanced two-column layouts where
useful. - Large screens: wider project grids and more generous
spacing. - Prevent horizontal overflow. - Ensure buttons and navigation
targets are comfortable to tap.

### Motion and interaction

-   Use subtle transitions for hover, focus, and navigation.
-   Avoid excessive scroll-triggered animation.
-   Do not hide essential content until an animation runs.
-   Respect `prefers-reduced-motion`.
-   The site must remain fully usable if animation is disabled.

### UX priorities

1.  Visitors understand Samuel's identity immediately.
2.  Visitors can reach projects within one obvious action.
3.  Project contributions and status are easy to understand.
4.  CV and contact links are easy to find.
5.  The experience is equally usable on mobile and desktop.
6.  No visual element should make the content harder to read.

------------------------------------------------------------------------

## 8. Must-haves

These are release requirements, not optional enhancements.

-   [ ] Built with plain HTML, CSS, and vanilla JavaScript only.
-   [ ] Clear Software Engineer positioning with backend engineering as
    the current focus.
-   [ ] Hero section with concise introduction and clear calls to
    action.
-   [ ] About section with accurate education and professional context.
-   [ ] Skills grouped into meaningful categories.
-   [ ] Featured projects with accurate roles, descriptions,
    technologies, and statuses.
-   [ ] Professional experience section with correct titles and dates.
-   [ ] Education section.
-   [ ] Selected leadership/fellowship achievements.
-   [ ] Contact section with working professional links.
-   [ ] Responsive mobile, tablet, and desktop layouts.
-   [ ] Functional navigation and mobile menu.
-   [ ] Real CV link if a verified CV is supplied.
-   [ ] No fabricated metrics, claims, testimonials, or project
    outcomes.
-   [ ] Semantic HTML and basic accessibility.
-   [ ] Basic SEO and social-sharing metadata.
-   [ ] No broken links or missing assets.
-   [ ] No browser console errors.
-   [ ] Readable, maintainable source code.
-   [ ] `SPEC.md` remains the reference for implementation decisions.

------------------------------------------------------------------------

## 9. Nice-to-haves

Only implement these after the must-haves are complete and stable.

-   [ ] Dark/light theme toggle with saved preference.
-   [ ] Carefully designed project case-study pages.
-   [ ] Project filtering by category (e.g. Backend, Full-stack, AI/ML).
-   [ ] Subtle page-load or section-entry motion.
-   [ ] Copy-email-to-clipboard interaction.
-   [ ] A small now/learning section showing current technical focus.
-   [ ] A downloadable one-page portfolio or project summary.
-   [ ] A custom favicon and small personal wordmark.
-   [ ] A blog or technical writing section, once there are real
    articles to publish.
-   [ ] A working contact form using a reliable service or backend.
-   [ ] Analytics with privacy-conscious configuration, if there is a
    clear need.
-   [ ] A custom domain and deployment pipeline.

Do not implement a feature just because it is common on developer
portfolios. Every addition should improve the visitor's understanding or
make a useful action easier.

------------------------------------------------------------------------

## 10. Definition of Done

The portfolio is considered complete when all applicable criteria below
are satisfied.

### Content accuracy

-   [ ] The site consistently identifies Samuel as a Software Engineer
    focused on backend engineering.
-   [ ] AI/ML is represented as an additional area of experience and a
    longer-term direction, not an inflated current title.
-   [ ] Education, experience, dates, roles, and achievements have been
    checked.
-   [ ] Project descriptions distinguish individual contributions from
    team work.
-   [ ] Project statuses are accurate, especially NovaYield and
    NeuroScan.
-   [ ] All metrics are verified or omitted.
-   [ ] No placeholder text, fake testimonials, invented project
    outcomes, or unsupported claims remain.
-   [ ] All public links and downloadable assets have been verified.

### Functionality

-   [ ] All navigation links work.
-   [ ] Mobile navigation works with keyboard, touch, and mouse.
-   [ ] Project links open the correct destinations.
-   [ ] CV action works if included.
-   [ ] Email and social links work.
-   [ ] Any contact form successfully submits to a real destination and
    provides accurate feedback.
-   [ ] No visible control is decorative while pretending to be
    functional.

### Responsive and visual quality

-   [ ] The site has been checked at common mobile, tablet, and desktop
    widths.
-   [ ] No horizontal overflow or overlapping content exists.
-   [ ] Typography, spacing, and contrast remain readable at all sizes.
-   [ ] Images load correctly and do not cause major layout shifts.
-   [ ] Hover, focus, active, and reduced-motion states are considered.
-   [ ] The final result feels coherent and intentional rather than like
    an unmodified template.

### Engineering quality

-   [ ] The site uses only approved technologies.
-   [ ] HTML is semantic and valid to the extent practical.
-   [ ] CSS is organized and responsive.
-   [ ] JavaScript is readable and avoids unnecessary complexity.
-   [ ] No console errors or avoidable warnings remain.
-   [ ] No secrets or private credentials are committed.
-   [ ] Images and documents are optimized and correctly referenced.
-   [ ] The project can be run locally using a simple static development
    server or browser workflow.
-   [ ] The codebase and file structure are understandable to another
    developer.

### Final review

-   [ ] Review the site as a recruiter: can the person's identity,
    experience, strongest work, and contact information be understood
    quickly?
-   [ ] Review it as an engineering manager: are technical contributions
    and project status credible and clear?
-   [ ] Review it as Samuel: does it accurately represent the person he
    is today and the engineer he is working to become?
-   [ ] Confirm that every must-have is complete before calling the
    project done.

------------------------------------------------------------------------

## Instructions to coding agents

Treat this document as the product specification and source of truth.

Before implementation:

1.  Read this entire `SPEC.md`.
2.  Inspect any existing project files before changing them.
3.  Identify missing content or assets that require Samuel's
    confirmation.
4.  Propose a concise implementation plan and initial file structure.
5.  Do not silently invent missing facts, links, project details, or
    assets.
6.  Ask focused questions only when a missing answer blocks a meaningful
    implementation decision.

During implementation:

1.  Work incrementally and keep the site runnable.
2.  Use only HTML, CSS, and vanilla JavaScript.
3.  Follow the positioning, content, design, and functional requirements
    in this document.
4.  Keep the implementation simple, accessible, responsive, and
    maintainable.
5.  Do not add frameworks, libraries, or dependencies without explicit
    approval.
6.  Do not replace real project evidence with fabricated screenshots or
    placeholder claims.
7.  If a requirement cannot be completed because information or an asset
    is missing, explain the blocker and leave a clearly identified,
    non-public placeholder rather than inventing content.

Before completion:

1.  Test all navigation, buttons, links, and form behavior.
2.  Check mobile, tablet, and desktop layouts.
3.  Check browser console output.
4.  Verify all public claims and links against supplied evidence.
5.  Report what is complete, what remains, and any assumptions made.

**Important:** The goal is not to produce the largest or most animated
portfolio. The goal is to produce a credible, distinctive, technically
sound professional portfolio that makes Samuel's engineering work easy
to understand and evaluate.

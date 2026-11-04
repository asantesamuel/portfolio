# Samuel Boakye Asante — Portfolio

A responsive, multi-page portfolio for Samuel Boakye Asante, a software engineer focused on backend engineering. The site presents selected projects, résumé-supported experience, academic background, skills, leadership, and direct contact details.

## Technologies

- HTML5 for page structure and content
- CSS3 for layout, responsive styling, and light/dark themes
- Vanilla JavaScript for the theme control, mobile navigation, and current year

There is no build step, package installation, or framework dependency.

## Run locally

From the project root, start any static HTTP server. For example, with Python installed:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000/>. The site can also be deployed as static files on a standard static host.

## Folder structure

```text
.
├── README.md                 Local setup and maintenance notes
├── SPEC.md                   Product and design specification
├── QA-REPORT.md              Browser and layout review
├── index.html                 Home
├── about.html                 Background, education, skills, leadership
├── experience.html            Professional experience
├── projects.html              Selected projects
├── contact.html               Contact information
├── projects/                  Individual project detail pages
├── css/styles.css             Shared design tokens and responsive styles
├── js/site.js                 Theme, mobile menu, and year behavior
├── js/theme-init.js           Applies saved/system theme before rendering
├── assets/icons/favicon.svg   Portfolio favicon
└── assets/documents/          Downloadable résumé
```

`SPEC.md` is retained as the product and design reference.

## Update content

### Add a project

1. Add a project card to `projects.html` with its title, concise summary, contribution, verified technologies, status, and repository link if available.
2. Add a home-page preview in `index.html` if it should be featured there.
3. Create a detail page in `projects/` using one of the existing pages as a layout reference. Use `../` for shared CSS, JavaScript, favicon, résumé, and top-level page links.
4. Link to the detail page from the card. Keep the project status and technical claims tied to verified information.

### Edit project descriptions

Project cards and individual case-study pages are static HTML. Update both places when a summary or status changes so the list and detail view stay consistent. Repository links are external anchors with safe new-tab attributes. Do not add deployment, metrics, or capabilities unless verified.

### Update experience, education, skills, and leadership

Edit work entries in `experience.html`. Education, certification, leadership, and skill groups live in the corresponding sections of `about.html`; the in-page links at the top jump to each group. Dates, role titles, organizations, and tool names should match verified source material. The home page intentionally highlights a small selection of work instead of repeating the full experience list.

### Update contact and social links

The primary contact details are in `contact.html`; GitHub and LinkedIn also appear on the home page. Update repeated profile links together. Use `mailto:` for email, an international `tel:` URI for phone, and full HTTPS URLs for external profiles.

### Replace the résumé or other assets

Replace `assets/documents/Samuel-Boakye-Asante-Resume.pdf` with the new PDF and retain that filename, or update the résumé links in every page. Replace `assets/icons/favicon.svg` to change the icon. Keep image dimensions specified in HTML when adding images; lazy-load below-the-fold imagery.

### Change theme colors and typography

Edit the custom properties at the top of `css/styles.css`. `:root` contains light-theme tokens and `html[data-theme="dark"]` contains their dark-theme counterparts. Keep text, surface, link, border, focus, and contact-panel contrast readable in both themes. The system font stack is declared in `--font-sans`.

### Prepare for deployment

Upload the project directory as static files while preserving its relative paths. No production domain is configured, so no canonical URL is emitted. Configure the domain and HTTPS with the selected static host before adding canonical metadata. Recheck the résumé link and all direct page URLs at the deployed base path.

## Quality assurance

The site has five primary pages and four project detail pages. Navigation uses direct HTML page links, so browser history remains native. The actual browser, keyboard, theme, viewport, and link checks are recorded in [QA-REPORT.md](QA-REPORT.md).

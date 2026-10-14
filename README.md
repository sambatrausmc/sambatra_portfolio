# Sam Batra Portfolio Website

## Project Overview

This project is a responsive, multi-page personal portfolio built from scratch with HTML, CSS, and JavaScript. It presents my work, education, professional experience, and transition from the United States Marine Corps into technology.

The website connects three areas of my background:

- Technical support and troubleshooting
- Software development and web application work
- Security operations, leadership, and accountability

The final website includes Home, Projects, Career, and About pages. Shared styling and JavaScript keep the experience consistent across each page.

## Target Audience

The primary audience is employers and recruiters looking for candidates in technical support, software development, and security-focused technology roles. Secondary audiences include professors, classmates, professional peers, and technology community members.

Visitors should quickly understand who I am, which skills I am developing, what I have built, and how to contact me.

## Content Strategy

The content is written to be professional, concise, and easy to scan. The website summarizes the most relevant information instead of reproducing an entire resume.

- The Home page establishes my professional identity and directs visitors to my work.
- The Projects page provides evidence of practical technical experience.
- The Career page presents education, skills, and professional history.
- The About page connects my military background, education, and interest in technology.
- The footer gives visitors direct access to email and LinkedIn.

## Information Organization

The website uses the same navigation and footer on every page. Each page has a clear introduction followed by content arranged in a logical reading order.

1. **Home:** Who am I?
2. **Projects:** What have I built and learned?
3. **Career:** What education, skills, and experience do I have?
4. **About:** What shaped my approach to technology?

This structure allows visitors to scan one topic at a time while moving between pages through predictable navigation.

## Part 1: Content Questions

### 1. What is your full name as you want it displayed professionally?

Sam Batra.

### 2. What is the purpose of your portfolio website?

The purpose is to present my technical abilities, projects, education, and professional background in one accessible location. It also demonstrates what I have learned about front-end development, responsive design, JavaScript, accessibility, and version control.

### 3. Who is the target audience?

The main audience is employers and recruiters in technical support, software development, and security-related technology fields. The site is also useful for professors, classmates, professional peers, and members of technology organizations.

### 4. What skills do you want to highlight?

- HTML, CSS, and JavaScript
- Responsive web design
- React and Next.js
- REST APIs, MongoDB, AWS S3, and SendGrid
- Windows and macOS troubleshooting
- TCP/IP fundamentals and network connectivity
- Documentation, testing, and incident escalation
- Access control, security awareness, and team leadership
- Git, GitHub, branches, commits, and pull requests

### 5. What projects or work will you showcase?

1. **Portfolio Website:** A responsive multi-page site built with HTML, CSS, and JavaScript.
2. **LISUG Invoice and Billing Record System:** Work involving checkout, return, and record-management workflows.
3. **LISUG Speaker and Sponsorship Workflow:** Work involving React, Next.js, validation, uploads, records, and email confirmations.

### 6. How will you describe yourself in a short professional bio?

I am a Computer Programming and Information Systems student, U.S. Marine Corps veteran, and early-career technology professional building practical skills in web development, troubleshooting, and secure systems.

### 7. What pages will your site include?

- Home
- Projects
- Career
- About

Contact options are included in the footer instead of on a separate Contact page.

### 8. What is your career goal or desired role?

My goal is to begin and grow in a technical support, software development, or security-focused technology role where I can combine troubleshooting, communication, programming, and leadership.

### 9. What technologies or tools do you have experience with?

HTML, CSS, JavaScript, React, Next.js, REST APIs, MongoDB, Mongoose, AWS S3, SendGrid, Git, GitHub, Windows, macOS, TCP/IP fundamentals, and AI-assisted development tools.

### 10. What achievements or experiences are worth highlighting?

- Served in the United States Marine Corps from 2017 to 2022.
- Led a 13-Marine squad and supported security operations at a nuclear security facility.
- Instructed more than 600 Marines with a 98 percent qualification rate.
- Developed and supported real web workflows with the Long Island Systems User Group.
- Pursuing a Bachelor of Science in Computer Programming and Information Systems at Farmingdale State College.

### 11. What call-to-action should visitors take?

The primary action is to view my projects. Visitors can also review my career background, read my story, contact me by email, or visit my LinkedIn profile.

### 12. Will you include a resume? In what format?

A resume is not included in the current version. A future version could add a downloadable PDF after confirming that it contains only information appropriate for a public website.

### 13. What social or professional links will you include?

The website includes LinkedIn and a professional email address. The public GitHub repository also demonstrates the project's development history.

## Part 2: Design Questions

### 1. What overall style will best represent you?

A minimalist and professional style best represents my background. The design uses strong typography, restrained colors, simple shapes, and clear spacing instead of decorative elements that could distract from the content.

### 2. What color scheme will you use and why?

The default dark palette uses deep charcoal, dark surfaces, soft white text, muted gray text, warm gold, and muted teal. Charcoal supports a serious professional tone, gold adds confidence and emphasis, and teal provides a secondary technology-focused accent.

The light theme uses off-white and white surfaces, dark text, a darker gold, and teal. Both themes use shared CSS custom properties so every page remains consistent.

### 3. What fonts will you use for headings and body text?

The site uses `Arial, Helvetica, sans-serif` for headings and body text. This system font stack loads quickly, is widely available, and remains readable across devices.

### 4. How will your design reflect your personality or field?

The design reflects discipline, clarity, and practical problem solving. Strong hierarchy and direct language support my military and technical background, while interactive controls demonstrate my growing web development skills.

### 5. What layout will your homepage follow?

The Home page begins with a sticky navigation bar. Its hero uses a two-column desktop layout with professional text on one side and a real event photograph on the other. The sections below summarize my technical focus, featured work, and background. On small screens, all columns stack vertically.

### 6. How will you organize project sections visually?

Projects appear as numbered entries with a title, summary, technology tags, and expandable information. Filter buttons let visitors display projects by category or technology. The repeated layout makes comparison easy.

### 7. Will the site be mobile-friendly? How will you ensure responsiveness?

Yes. CSS Grid and Flexbox create flexible layouts, images remain inside their containers, controls use stable touch-friendly sizes, and a media query changes the site to single-column layouts at 760 pixels. The desktop navigation becomes a JavaScript-controlled mobile menu.

### 8. What visual hierarchy will guide visitors?

Large page headings establish the current topic. Smaller gold eyebrow labels introduce sections, second-level headings divide content, and muted paragraph text supports the main ideas. Gold buttons and links identify important actions.

### 9. How will consistency be maintained across pages?

All pages use one shared stylesheet and one shared JavaScript file. The same header, navigation, footer, colors, typography, spacing, buttons, borders, and interactive states are reused throughout the site.

### 10. How will accessibility be considered?

- Semantic HTML elements provide meaningful page structure.
- Text and controls use high-contrast theme colors.
- Images include alternative text.
- Buttons have accessible names and state attributes.
- Keyboard focus styles remain visible.
- Touch controls meet a minimum height of 44 pixels.
- Reduced-motion settings disable nonessential animation.
- Navigation identifies the current page with `aria-current`.
- Expandable controls use `aria-expanded` and `aria-controls`.

### 11. Will you use icons, images, or illustrations? Why?

The Home page uses a real photograph from a Long Island Systems User Group event to connect the site to actual professional experience. Simple text symbols are used for theme, details, and back-to-top controls so the interface stays lightweight.

### 12. What portfolio websites inspired your design?

No single portfolio was copied. The design was influenced by common professional portfolio conventions: persistent navigation, a direct introduction, scannable project summaries, limited colors, responsive layouts, and clear contact links. Technical implementation guidance came from MDN and GitHub documentation.

## Part 3: Interactivity Questions

### 1. What interactive elements will your site include?

- Responsive mobile navigation
- Dark and light theme toggle
- Project technology filters
- Expandable project details
- Scroll-reveal effects
- Back-to-top button
- Automatically updated footer year
- Navigation, email, and LinkedIn links

### 2. Will your site include a contact form? How will it work?

The current version does not include a contact form or collect visitor information. The Email link uses `mailto:` to open the visitor's email application with my professional address. This approach works on a static GitHub Pages site and does not require a server or database.

### 3. What JavaScript features will you implement?

JavaScript controls the mobile menu, saves the selected theme in `localStorage`, filters project entries, expands project details, observes elements for scroll reveals, shows the back-to-top button after scrolling, and inserts the current year into every footer.

### 4. How will users receive feedback from interactions?

Controls change color, labels, symbols, visibility, and accessible state values. The selected filter has a filled appearance, the menu button changes between Menu and Close, details buttons change between Show details and Hide details, and the theme icon changes with the selected theme.

### 5. How does interactivity improve the user experience?

The interactions help visitors navigate small screens, choose a comfortable color theme, narrow project information, reveal details only when needed, recognize page movement, and return to the top of long pages. Each feature supports a practical visitor task rather than existing only as decoration.

## Visual Design

### Color Palette

| Purpose | Dark theme | Light theme |
| --- | --- | --- |
| Main background | `#181A1F` | `#F4F6F8` |
| Card surface | `#242832` | `#FFFFFF` |
| Secondary surface | `#303642` | `#E7EBEF` |
| Main text | `#F4F1EA` | `#171B20` |
| Muted text | `#B8B3AA` | `#59636D` |
| Gold accent | `#D6A84F` | `#936000` |
| Teal accent | `#4E9A8E` | `#24786D` |
| Borders | `#3A3F4B` | `#CBD2D9` |

### Typography and Spacing

- System sans-serif fonts keep content readable and fast to load.
- Responsive heading sizes maintain hierarchy without overflowing smaller screens.
- Content is limited to a maximum width of 1120 pixels.
- Repeated spacing values create a consistent rhythm between sections.
- Paragraph widths are limited to maintain comfortable line lengths.

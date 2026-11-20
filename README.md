# SKYRoN — Structural Engineering Software

**SKYRoN is a Windows desktop workspace for structural engineers.** It brings focused checks and model workflows together so engineers can spend less time repeating data-entry and transfer tasks and more time reviewing engineering decisions.

This repository contains the **bilingual SKYRoN product website**, not the Windows application. The website is a static HTML/CSS/JavaScript project and can be served directly by GitHub Pages.

## What SKYRoN helps engineers do

SKYRoN is being developed for building, industrial, oil and gas, mining, and power projects. The website groups the product tools by engineering task:

- **Steel Frame:** chevron-braced beam checks, beam fatigue and deflection, story drift, soft-story and weak-story checks, column overstrength, and strong-column/weak-beam checks.
- **Analysis Assistance:** define a seismic system in SAP2000, review seismic scale factors, and compare modal and estimated periods.
- **Ring Wall:** set tank and ring-wall geometry, prepare foundation design inputs, and organize the SAFE workflow for tank foundations.
- **Model Builder:** select SAP2000 load cases, preview support reactions, map cases to SAFE load patterns, then review and approve the transfer.
- **Connections:** a workspace for beam connection-related information.
- **AI Assistant:** an optional assistant for project-context questions; engineers should verify responses before using them.

The active model-transfer route is **SAP2000 → SKYRoN → SAFE**, with an engineer review before transfer. **ETABS integration is in development.** Tool availability can depend on the installed SKYRoN version and activation. The website’s animations and diagrams are illustrative; they are not analysis results or design approval.

## Trial and feedback

- A **14-day trial** is requested through the website. The applicant provides the Machine ID shown in the SKYRoN activation window; access is reviewed and arranged manually.
- Annual subscription pricing will be announced later.
- An idea for a useful tool or workflow improvement that is reviewed and accepted for SKYRoN earns **three months of free subscription**.
- Windows downloads are currently disabled on the website. No installer or application binaries are stored in this repository.

## Run the website locally

No package installation or build step is needed. Open PowerShell or a terminal in this repository and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`. To preview the Persian version directly, open `http://localhost:8000/?lang=fa`; English is the default. Stop the server with `Ctrl+C`.

Opening `index.html` directly may work for static content, but a local web server is recommended for reliable navigation and browser behavior.

## Project structure

```text
.
├── index.html                  Website content and page structure
├── styles.css                  Main layout, themes, and responsive styles
├── app.js                      Language switching, trial form, and interactions
├── site-enhancements.css       Product diagrams, module motion, and enhancements
├── site-enhancements.js        Interactive module and workflow explainers
├── assets/
│   ├── *.svg                   Module diagrams and product graphics
│   ├── *.jpg, *.webp, *.png    Product and sector imagery
│   ├── *.woff2                 Locally hosted fonts
│   └── *-LICENSE.txt           Font license notices
├── .nojekyll                   Serve static files without Jekyll processing
└── README.md                   Product and website guide
```

Keep `index.html`, the CSS/JavaScript files, and `assets/` together at the repository root. Asset paths are relative, so this layout works both locally and on a GitHub Pages project site. Keep the font license files with the font files.

## Publish with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/(root)` folder, then save.
4. Wait for the Pages deployment to finish. GitHub displays the public site address on the Pages settings page.

The site uses local assets and does not require a build tool, package manager, or server runtime. The trial request form depends on its configured external form service; verify the form recipient and complete a real end-to-end test after publishing.

## Language, contact, and content notes

- English is the default. The language switch supports Persian and English; `?lang=fa` and `?lang=en` open a chosen language.
- Persian copy is written for Persian-speaking engineers and uses right-to-left layout. The site includes local Vazirmatn and Space Grotesk fonts.
- The creator contact links are `shahin.ma49@gmail.com` and [Shahin’s LinkedIn profile](https://www.linkedin.com/in/shahin-manouchehri/). The [SKYRoN LinkedIn page](https://www.linkedin.com/company/skyron-software/) is linked in the footer.
- Product diagrams and motion graphics explain workflows only. They are not engineering calculations, code checks, or a substitute for professional review.
- SAP2000, SAFE, and ETABS are product names owned by their respective trademark holders. Their mention does not imply endorsement or affiliation.

---

## راهنمای فارسی

**SKYRoN یک نرم‌افزار ویندوزی برای مهندس‌های طراح سازه است.** ابزارهای پرکاربرد را کنار هم می‌آورد تا مهندس وقت کمتری صرف کارهای تکراری و جابه‌جایی اطلاعات کند و بیشتر روی بررسی و تصمیم‌های مهندسی تمرکز داشته باشد.

این مخزن فایل‌های **وب‌سایت دو‌زبانهٔ SKYRoN** را دارد، نه فایل نصب نرم‌افزار. سایت با HTML، CSS و JavaScript ساخته شده و برای اجرا به نصب کتابخانه یا مرحلهٔ ساخت نیاز ندارد.

### قابلیت‌های نرم‌افزار

- **قاب فولادی:** کنترل تیر شورون، خستگی و خیز تیر، دریفت طبقه، طبقهٔ نرم و ضعیف، تشدید نیروی ستون و کنترل تیر ضعیف ـ ستون قوی.
- **دستیار تحلیل:** افزودن سیستم لرزه‌ای به SAP2000، هم‌پایه‌سازی ضریب مقیاس زلزله و بررسی دورهٔ تناوب واقعی و تخمینی.
- **رینگ‌وال مخزن:** تعریف هندسهٔ مخزن و فونداسیون حلقوی، آماده‌سازی ورودی‌های طراحی و مسیر کاری SAFE.
- **Model Builder:** انتخاب حالت‌های بار SAP2000، دیدن واکنش‌های تکیه‌گاهی، نگاشت بارها به SAFE و تأیید مهندس پیش از انتقال.
- **اتصالات:** محیطی برای کار با اطلاعات مربوط به اتصالات تیر.
- **دستیار هوش مصنوعی:** پاسخ‌گویی به پرسش‌های مرتبط با پروژه؛ پاسخ‌ها باید پیش از استفاده بررسی شوند.

مسیر فعال انتقال اطلاعات **SAP2000 به SAFE** است و انتقال پس از بررسی و تأیید مهندس انجام می‌شود. ارتباط با **ETABS در حال توسعه** است. ابزارهای در دسترس ممکن است با نسخه و شرایط فعال‌سازی فرق کنند. تصویرها و موشن‌های سایت برای توضیح ایدهٔ گردش‌کارند و نتیجهٔ تحلیل یا تأیید طراحی نیستند.

### نسخهٔ آزمایشی و پیشنهادها

- برای درخواست **۱۴ روز استفادهٔ آزمایشی**، فرم سایت را پر کنید و Machine ID پنجرهٔ فعال‌سازی را بنویسید. درخواست بررسی می‌شود و دسترسی فعلاً به‌صورت دستی هماهنگ می‌شود.
- قیمت اشتراک سالانه بعداً اعلام می‌شود.
- اگر پیشنهاد کاربردی برای ابزار یا بهترشدن روند کار پس از بررسی پذیرفته و به SKYRoN اضافه شود، **سه ماه اشتراک رایگان** تعلق می‌گیرد.
- دانلود نسخهٔ ویندوز فعلاً در سایت غیرفعال است و فایل نصب در این مخزن قرار ندارد.

### اجرای سایت در کامپیوتر

در ترمینال همین پوشه اجرا کنید:

```bash
python -m http.server 8000
```

بعد `http://localhost:8000/` را باز کنید. برای دیدن مستقیم نسخهٔ فارسی از `http://localhost:8000/?lang=fa` استفاده کنید. زبان پیش‌فرض انگلیسی است. با `Ctrl+C` سرور محلی متوقف می‌شود.

برای اجرای درست روی GitHub Pages، فایل `index.html`، فایل‌های CSS و JavaScript و پوشهٔ `assets/` باید کنار هم و در ریشهٔ مخزن باشند. برای انتشار، در **Settings → Pages** شاخهٔ `main` و پوشهٔ `/(root)` را انتخاب کنید. فایل‌های فونت را همراه مجوزشان نگه دارید.

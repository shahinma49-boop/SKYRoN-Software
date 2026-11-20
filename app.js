/* SKYRoN landing page. No framework, build step, tracking, or external JS. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fa = {};
  const bindings = [
    ['data-i18n', 'textContent'], ['data-i18n-aria', 'aria-label'],
    ['data-i18n-alt', 'alt'], ['data-i18n-placeholder', 'placeholder']
  ];
  bindings.forEach(([attr, target]) => $$(`[${attr}]`).forEach(el => {
    fa[el.getAttribute(attr)] = target === 'textContent' ? el.textContent : el.getAttribute(target);
  }));
  Object.assign(fa, {
    ...Object.fromEntries(Object.entries({"skip":"برو به محتوای اصلی","navModules":"کاربردها","navWorkflow":"جریان کار","navWorkspace":"محیط نرم‌افزار","navAccess":"درخواست نسخهٔ آزمایشی","navLabel":"منوی اصلی","menuOpen":"باز کردن منو","menuClose":"بستن منو","heroEyebrow":"ابزارهای مهندسی سازه، یک‌جا و بی‌دردسر","heroLine1":"تمرکز روی سازه؛","heroLine2":"نه جابه‌جایی اطلاعات.","heroDescription":"مدل را بررسی کن، واکنش‌ها را ببین و بعد تصمیم بگیر. SKYRoN ابزارهای مهندس سازه را در یک محیط کاری برای ویندوز کنار هم می‌آورد.","heroCta":"۱۴ روز رایگان امتحان کن","heroSecondary":"ببین چه کارهایی می‌شود کرد","heroPlatform":"محیط کاری ویندوز","connectionTitle":"در کنار نرم‌افزارهایی که می‌شناسی","connectionNote":"هر انتقال را خودت بررسی و تأیید می‌کنی.","modulesTitle1":"کدام کار مهندسی؟","modulesTitle2":"برای همان کار ابزار هست.","modulesIntro":"قاب فولادی، تحلیل زلزله، طراحی دیوار حلقوی و انتقال واکنش‌ها؛ قابلیت‌های آماده را ببین.","steelTitle":"قاب فولادی","steelSummary":"ابزارهای اعضای فولادی، گزارش تیر و بررسی خستگی در کنار SAP2000.","analysisTitle":"تحلیل و طراحی لرزه‌ای","analysisSummary":"کاتالوگ سیستم‌های لرزه‌ای ASCE 7-22 و پیش‌نمایش محاسبات قابل‌بررسی.","ringTitle":"دیوار حلقوی مخزن","ringSummary":"طراحی فونداسیون حلقوی مخزن برای کاربردهایی مثل صنعت نفت و گاز.","builderTitle":"انتقال واکنش به SAFE","builderSummary":"بار را از SAP2000 انتخاب کن، واکنش‌ها را ببین و پس از بررسی به SAFE منتقل کن.","connectionsTitle":"ابزار اتصال تیر","connectionsSummary":"رابط و داده‌های اتصالات تیر، در فضای کاری SKYRoN.","aiTitle":"دستیار هوش مصنوعی","aiSummary":"دستیار به تنظیمات و قابلیت‌های فعال خودت وابسته است؛ پاسخ‌ها را هم بررسی کن.","engineeringNote":"SKYRoN به کار مهندس کمک می‌کند؛ بررسی ورودی و نتیجه با خود مهندس است.","workflowTitle":"اول واکنش‌ها را ببین. بعد انتقال بده.","workflowIntro":"مسیر فعال Model Builder: بارهای SAP2000، پیش‌نمایش واکنش‌ها و انتقال بررسی‌شده به SAFE.","mappingLabel":"مسیر فعال","workflowGate":"تأیید نهایی","approvalRequired":"تأیید مهندس","workflowCaption":"نمای مفهومی جریان کار، نه نتیجهٔ واقعی تحلیل.","step1Title":"حالت‌های بار را انتخاب کن.","step1Text":"بارهای SAP2000 را انتخاب کن و اطلاعات را پیش از ادامه ببین.","step2Title":"قبل از انتقال، نتیجه را ببین.","step2Text":"واکنش‌ها و نگاشت بارها به SAFE را مرور کن.","step3Title":"انتقال با تأیید تو.","step3Text":"بعد از بررسی خودت، واکنش‌ها را به SAFE بفرست.","workspaceTitle1":"پروژه‌هایت.","workspaceTitle2":"همه یک‌جا.","workspaceIntro":"پروژه‌ها و ابزارها را از یک داشبورد باز کن و از همان‌جا ادامه بده.","screenshotCaption":"تصویر واقعی SKYRoN · نسخهٔ ۲.۲.۱.","feature1Title":"ادامه از همان‌جا","feature1Text":"پروژه‌های اخیر را از داشبورد باز کن.","feature2Title":"پروژه، همراهت","feature2Text":"اطلاعات را در بستهٔ قابل‌انتقالٔ .skyron نگه دار.","feature3Title":"ابزارها دم دستت","feature3Text":"از داشبورد مستقیم به ماژول‌های کاری برو.","supportTitle":"وضعیت ارتباط نرم‌افزارها","supportNote":"مسیر SAP2000 فعال است · ارتباط ETABS در دست توسعه است","betaBadge":"آزمایش رایگان SKYRoN","accessTitle1":"در پروژهٔ بعدی‌ات","accessTitle2":"خودت امتحانش کن.","accessIntro":"برای گرفتن لایسنس ۱۴روزهٔ رایگان فرم را بفرست؛ بعد از بررسی، لایسنس برایت صادر می‌شود.","trialNumber":"۱۴","trialTitle":"روز استفادهٔ رایگان","trialNote":"دوره از روز صدور لایسنس شروع می‌شود.","pricingNote":"قیمت اشتراک سالانه به‌زودی اعلام می‌شود.","directQuestion":"سؤالی داری؟","requestLegend":"برای کدام ابزار درخواست می‌دهی؟","optionBeta":"آزمایش ۱۴روزه","optionBetaNote":"درخواست لایسنس","optionModules":"ماژول انتخابی","optionModulesNote":"ابزارهای مورد نیازت","selectModules":"ماژول‌ها را انتخاب کن","machineLabel":"شناسهٔ دستگاه (Machine ID)","machinePlaceholder":"شناسه را کپی کن و اینجا بچسبان","machineHelp":"برنامه را باز کن؛ در پنجرهٔ فعال‌سازی روی Copy بزن و شناسه را اینجا بگذار.","nameLabel":"اسم و فامیلت","namePlaceholder":"اسمت را بنویس","emailLabel":"ایمیلت","roleLabel":"حوزهٔ کاری","rolePlaceholder":"انتخاب کن","roleEngineer":"مهندس سازه","roleDesigner":"طراح سازه","roleManager":"مدیر مهندسی","roleStudent":"دانشجو یا پژوهشگر","roleOther":"سایر","messageLabel":"توضیح یا سؤالت","messagePlaceholder":"مختصر بگو چه پروژه‌ای داری یا چه کمکی لازم داری.","messageHelp":"کوتاه بنویس؛ کافی است.","consentText":"قبول دارم برای پاسخ با ایمیل با من تماس گرفته شود.","submit":"ثبت درخواست لایسنس","privacyNote":"بعد از بررسی درخواست، برای هماهنگی صدور لایسنس ایمیل می‌زنم.","successTitle":"درخواستت رسید.","successText":"ممنون! برای هماهنگی نصب و لایسنس با تو تماس می‌گیرم.","sendAnother":"فرم دیگری بفرست","faqTitle":"چند نکته پیش از شروع","faq1Q":"۱۴ روز رایگان چطور کار می‌کند؟","faq1A":"درخواست را بفرست. پس از بررسی، لایسنس دستگاهت را می‌فرستم. ۱۴ روز از روز صدور حساب می‌شود.","faq2Q":"Machine ID را کجا پیدا کنم؟","faq2A":"در پنجرهٔ فعال‌سازی برنامه، روبه‌روی Machine ID روی Copy بزن و شناسه را در فرم بچسبان.","faq3Q":"کدام مسیرها آماده‌اند؟","faq3A":"مسیر فعال انتقال واکنش از SAP2000 به SAFE است؛ ارتباط ETABS در دست توسعه است.","faq4Q":"برای باگ یا ایده اشتراک می‌دهید؟","faq4A":"برای باگی که بشود تکرارش کرد یا ایده‌ای که بعد از بررسی تأیید شود، سه ماه اشتراک رایگان می‌گیری.","feedbackTitle":"باگی پیدا کردی یا ایده‌ای داری؟","feedbackCopy":"گزارش باگ را با مراحل تکرارش بفرست. باگ تکرارپذیر یا ایدهٔ تأییدشده سه ماه اشتراک رایگان دارد.","feedbackCta":"ارسال باگ یا ایده با ایمیل","footerStatement":"ابزارهای مهندسی سازه، یک‌جا.","description":"محیط کاری ویندوزی SKYRoN برای مهندسی سازه، انتقال واکنش SAP2000 به SAFE و درخواست لایسنس رایگان ۱۴روزه.","nameError":"اسم و فامیلت را بنویس.","emailError":"یک آدرس ایمیل درست وارد کن."})),
    title: 'SKYRoN — مهندسی، با جریان روشن‌تر',
    description: $('meta[name="description"]').content,
    nameError: 'نام و نام خانوادگی خود را وارد کنید.',
    emailError: 'یک آدرس ایمیل معتبر وارد کنید.',
    modulesError: 'دست‌کم یک ماژول را انتخاب کنید.',
    consentError: 'برای پاسخ به درخواست، موافقت شما با تماس ایمیلی لازم است.',
    machineError: 'شناسهٔ دستگاه را از پنجرهٔ فعال‌سازی برنامه وارد کن.',
    sending: 'در حال ارسال…',
    submitError: 'ارسال انجام نشد. اطلاعات شما حفظ شده است؛ دوباره تلاش کنید یا به این آدرس ایمیل بزنید:',
    timeoutError: 'پاسخ سرویس دریافت نشد. اتصال اینترنت را بررسی و دوباره تلاش کنید. راه ارتباطی دیگر:',
    dialogRequest: 'درخواست این ماژول',
    detailLabel: 'نگاهی نزدیک‌تر',
    moduleCaveat: 'دسترسی و قابلیت‌های نهایی به نسخه و شرایط فعال‌سازی بستگی دارد. خروجی‌ها نیازمند بررسی مهندس هستند.',
    builderCaveat: 'در نسخهٔ فعلی فقط مسیر SAP2000 به SAFE فعال است. مسیرهای دیگرِ نمایشی، آمادهٔ استفاده نیستند.',
    aiCaveat: 'امکانات دستیار به تنظیمات و ابزارهای فعال نسخه بستگی دارد؛ جایگزین بررسی و قضاوت مهندس نیست.',
    menuClose: 'بستن فهرست'
  });
  const en = {
    title: 'SKYRoN — A clearer flow for structural engineering',
    description: 'Independent structural engineering tools. A connected Windows workspace. Explore SKYRoN and request a 14-day beta or individual modules.',
    skip: 'Skip to main content', navLabel: 'Main navigation', navModules: 'Modules', navWorkflow: 'Workflow',
    navWorkspace: 'Workspace', navAccess: 'Request access', menuOpen: 'Open menu', menuClose: 'Close menu',
    heroEyebrow: 'Independent tools. Connected thinking.', heroLine1: 'Engineering.', heroLine2: 'A clearer flow.',
    heroDescription: 'From your structural model to the next design decision. Bring specialist tools into one considered workspace — and spend more time engineering, less time moving information.',
    heroCta: 'Request 14-day beta', heroSecondary: 'Explore the toolkit', heroPlatform: 'Built for Windows desktop',
    canvasLabel: 'Conceptual 3D steel frame illustration; not an analysis result', modelCaption: 'Concept model · not analysis results',
    explode: 'Separate floors', scrollCue: 'Scroll to see the bigger picture',
    connectionTitle: 'Alongside the tools you know', connectionNote: 'Connected, with engineer review and approval',
    modulesTitle1: 'The right tools.', modulesTitle2: 'Right where you need them.',
    modulesIntro: 'Explore the suite, or choose just what your work calls for. Each SKYRoN module supports a specific part of the engineering process.',
    steelTitle: 'Steel Frame', steelSummary: 'Steel member tools, beam reporting and fatigue checks, alongside your SAP2000 workflow.',
    analysisTitle: 'Analysis Assistance', analysisSummary: 'Reviewable inputs, a seismic systems catalogue and calculation previews in one clear workflow.',
    ringTitle: 'Ring Wall', ringSummary: 'From tank foundation geometry and design inputs to a workflow for exporting to SAFE.',
    builderTitle: 'Model Builder', builderSummary: 'Select load cases, preview reactions and map them to SAFE load patterns. You approve the transfer.',
    connectionsTitle: 'Connections', connectionsSummary: 'A dedicated interface for beam connection tools and their related data, inside your workspace.',
    aiTitle: 'AI Assistant', aiSummary: 'An assistant within your workspace, with capabilities determined by the settings and tools enabled in your version.',
    exploreModule: 'Inside the module',
    engineeringNote: 'A tool supports engineering judgement; it does not replace it. Verify inputs and outputs against your design basis and project conditions.',
    workflowTitle: 'Less distance between steps.', workflowIntro: 'One Model Builder workflow: from selected SAP2000 data to a reviewed transfer into SAFE.',
    mappingLabel: 'ACTIVE ROUTE', workflowGate: 'REVIEW GATE', approvalRequired: 'Engineer approval',
    workflowCaption: 'A schematic of the transfer route, not a software screenshot.',
    step1Title: 'Choose your starting point.', step1Text: 'Select the load cases you need from SAP2000. Review the input data before moving on.',
    step2Title: 'See it before you send it.', step2Text: 'Preview reactions and check how your selected cases map to load patterns in SAFE.',
    step3Title: 'Your approval. Then transfer.', step3Text: 'Transfer only after your review and confirmation. The currently active route is SAP2000 to SAFE.',
    workspaceTitle1: 'Your projects.', workspaceTitle2: 'One place to pick up.',
    workspaceIntro: 'A dashboard that brings projects and modules together. So returning to your work feels like continuing, not starting over.',
    workspaceImageTitle: 'SKYRoN workspace screenshot', expandScreenshot: 'Enlarge the software screenshot', screenshotAlt: 'Actual SKYRoN v2.2.1 workspace showing recent projects and engineering modules',
    viewScreenshot: 'View full screenshot', screenshotCaption: 'Actual software interface · v2.2.1 · The interface in this screenshot is in English.',
    feature1Title: 'Continue where you left off', feature1Text: 'Reach recent projects and work areas from the dashboard.',
    feature2Title: 'Take your project with you', feature2Text: 'Portable .skyron packages help you keep and move project information.',
    feature3Title: 'Make room for focus', feature3Text: 'Specialist tools in one organised workspace, rather than scattered paths.',
    betaBadge: 'BETA ACCESS REQUESTS', accessTitle1: 'Start with', accessTitle2: 'your next project.',
    accessIntro: 'Request a 14-day beta to explore SKYRoN in your own workflow. Need a particular tool? Select the individual modules that matter to you.',
    trialNumber: '14', trialTitle: 'days to get to know the suite', trialNote: 'Access is arranged after your request has been reviewed.',
    directQuestion: 'A question before you start?', requestLegend: 'How would you like to start?',
    optionBeta: '14-day beta', optionBetaNote: 'Explore the suite', optionModules: 'Individual modules', optionModulesNote: 'Only what you need',
    selectModules: 'Select the modules you need', nameLabel: 'Full name', namePlaceholder: 'Your name', emailLabel: 'Email',
    companyLabel: 'Company / organisation', companyPlaceholder: 'Company name', optional: '(optional)',
    roleLabel: 'Your role', rolePlaceholder: 'Select a role', roleEngineer: 'Structural engineer', roleDesigner: 'Structural designer',
    roleManager: 'Engineering manager', roleStudent: 'Student / researcher', roleOther: 'Other',
    messageLabel: 'Tell us what you need', messagePlaceholder: 'What are you working on, and which part of your workflow would you like to simplify?',
    messageHelp: 'A short project description or question', consentText: 'I agree to be contacted by email in response to this request.',
    submit: 'Send request', privacyNote: 'No payment at this stage. This form is a request, not an activation.',
    successTitle: 'Your request is on its way.', successText: 'Thank you for your interest in SKYRoN. We will follow up by email to arrange access and next steps.',
    sendAnother: 'Send another request', faqTitle: 'Before you begin.',
    faq1Q: 'How is beta access activated?', faq1A: 'Complete the request form. After review, we will coordinate installation information, access conditions and the start of your 14-day period by email. Submitting the form does not automatically activate access.',
    faq2Q: 'Can I request just one module?', faq2A: 'Yes. Choose “Individual modules” in the form and select one or more tools. We will follow up about access and conditions for those modules.',
    faq3Q: 'Is this website the software itself?', faq3A: 'No. This page introduces SKYRoN and collects access requests. SKYRoN is a Windows desktop application. SAP2000 or SAFE connectivity requires a compatible installation and workspace setup.',
    faq4Q: 'Do outputs need engineering review?', faq4A: 'Yes. The engineer is responsible for checking assumptions, inputs, applicable provisions and outputs against the project. AI Assistant features also depend on the settings and tools enabled in the version in use.',
    footerStatement: 'Independent tools. A connected workflow.', backTop: 'Back to top', contactUs: 'Get in touch ↗',
    footerDisclaimer: 'SAP2000 and SAFE are trademarks of their respective owners. Mention does not imply endorsement or affiliation.',
    close: 'Close', detailLabel: 'A CLOSER LOOK', dialogRequest: 'Request this module',
    moduleCaveat: 'Final access and features depend on the version and activation conditions. Outputs require engineering review.',
    builderCaveat: 'Only the SAP2000-to-SAFE route is active in the current version. Other displayed routes are not ready for use.',
    aiCaveat: 'Capabilities depend on the settings and tools enabled in your version. The assistant does not replace engineering judgement.',
    nameError: 'Please enter your full name.', emailError: 'Please enter a valid email address.', modulesError: 'Please select at least one module.',
    consentError: 'Please agree to email contact so we can respond to your request.', sending: 'Sending…',
    submitError: 'Your request was not sent. Your entries are still here. Try again, or email us directly:',
    timeoutError: 'The service did not respond. Check your connection and try again, or email us directly:'
  };
  let language = 'en';
  Object.assign(en, {loadCases:'LOAD CASES',reviewSafe:'REVIEW / SAFE', callTank:'STORAGE TANK',callTankSub:'RING-WALL FOUNDATION',callRack:'PIPE RACK',callRackSub:'SUPPORT FRAMES',callBuilding:'PLANT BUILDING',callBuildingSub:'STEEL + CONCRETE',callPower:'POWER CORRIDOR',callPowerSub:'TRANSMISSION TOWERS',plantDiagramLabel:'Oil and gas facility with storage tanks, ring-wall foundations, pipe racks, plant building and transmission towers',plantMapLabel:'INDUSTRIAL STRUCTURE MAP',conceptOnly:'CONCEPT · NOT ANALYSIS DATA',sectorCaption:'OIL & GAS · BUILDINGS · POWER',engineeringFocus:'DESIGNED FOR STRUCTURAL ENGINEERS',heroEyebrow:'Less repetition. More engineering.',heroLine1:'Put your time',heroLine2:'into the structure.',heroDescription:'SKYRoN connects focused structural design tools, so engineers spend less time repeating transfers and more time making sound engineering decisions.',heroCta:'Try the 14-day trial',heroSecondary:'Explore the toolkit',exploreModule:'See how it works'});
  Object.assign(fa, {loadCases:'حالت‌های بار',reviewSafe:'بررسی / SAFE', callTank:'مخزن ذخیره',callTankSub:'فونداسیون رینگ‌وال',callRack:'پایپ‌رک',callRackSub:'قاب‌های نگهدارنده',callBuilding:'ساختمان صنعتی',callBuildingSub:'فولادی و بتنی',callPower:'مسیر انتقال برق',callPowerSub:'دکل‌های انتقال',plantDiagramLabel:'نمای شماتیک مجتمع نفت و گاز شامل مخزن، فونداسیون رینگ‌وال، پایپ‌رک، ساختمان صنعتی و دکل انتقال برق',plantMapLabel:'سازه‌ها در یک نگاه',conceptOnly:'تصویر مفهومی · نه خروجی تحلیل',sectorCaption:'نفت و گاز · ساختمان · برق',engineeringFocus:'برای مهندس طراح سازه',heroEyebrow:'کار تکراری کمتر؛ فرصت بیشتر برای مهندسی',heroLine1:'وقت‌تان را',heroLine2:'صرف طراحی سازه کنید.',heroDescription:'SKYRoN ابزارهای طراحی سازه را به هم وصل می‌کند تا وقت کمتری صرف انتقال‌های تکراری شود و فرصت بیشتری برای بررسی و تصمیم مهندسی داشته باشید.',heroCta:'شروع آزمایشی ۱۴روزه',heroSecondary:'دیدن ابزارها',exploreModule:'ببین چطور کار می‌کند'});

  Object.assign(en, {"existingDownload":"Standalone Windows installer coming soon","updateDownload":"Existing users: download the signed update package","installerUnavailable":"Windows installer distribution is being prepared.","machineLabel":"SKYRoN Machine ID (from the activation window)","machinePlaceholder":"Paste your Machine ID here","machineHelp":"Open SKYRoN. In the activation window, click Copy next to Machine ID, then paste it here.","pricingNote":"Annual subscription price: coming soon.","supportTitle":"Software compatibility","supportNote":"SAP2000 → SAFE transfer active · ETABS integration is in development.","feedbackTitle":"Have an idea to make SKYRoN more useful?","feedbackCopy":"Suggest a practical tool, a new feature, or a way to improve your workflow. If your suggestion is reviewed and added to SKYRoN, you’ll receive three months of free subscription.","feedbackCta":"Share an idea with Shahin","companyLinkedin":"SKYRoN on LinkedIn ↗"});
  Object.assign(fa, {"machineError":"شناسهٔ دستگاه را از پنجرهٔ فعال‌سازی بنویس.","successTitle":"درخواستت رسید.","successText":"ممنون! بعد از بررسی درخواست و شناسهٔ دستگاه، برای هماهنگی لایسنس ایمیل می‌زنم.","feedbackCopy":"اگر ابزار کاربردی، قابلیت تازه یا راهی برای ساده‌ترشدن کار با نرم‌افزار به ذهنت می‌رسد، برایم بنویس. پیشنهادهایی که پس از بررسی به SKYRoN اضافه شوند، سه ماه اشتراک رایگان دارند.","feedbackTitle":"برای بهتر شدن SKYRoN ایده‌ای داری؟","feedbackCta":"فرستادن پیشنهاد برای شاهین","pricingNote":"قیمت اشتراک سالانه به‌زودی اعلام می‌شود.","companyLinkedin":"لینکدین SKYRoN ↗"});
  let activeModule = null;
  let submitting = false;
  let attempted = false;
  const t = key => (language === 'en' ? en[key] : fa[key]) ?? fa[key] ?? key;
  const form = $('#requestForm');
  const modules = {
    steel: { label: 'STEEL FRAME', fa: ['ابزارهای اعضای فولادی در ارتباط با SAP2000', 'دسترسی به گزارش‌گیری تیر', 'گردش‌کار بررسی خستگی'], en: ['Steel member tools alongside SAP2000', 'Access to beam reporting', 'A workflow for fatigue checks'] },
    analysis: { label: 'ANALYSIS ASSISTANCE', fa: ['کاتالوگ سیستم‌های لرزه‌ای ASCE/SEI 7-22', 'پیش‌نمایش محاسبات برای بررسی مهندس', 'پشتیبانی از برخی تخصیص‌ها در SAP2000'], en: ['ASCE/SEI 7-22 seismic systems catalogue', 'Calculation previews for engineering review', 'Support for selected assignments in SAP2000'] },
    ring: { label: 'RING WALL', fa: ['تعریف هندسهٔ فونداسیون حلقوی مخزن', 'ورود و مرور داده‌های طراحی', 'پشتیبانی از گردش‌کار خروجی به SAFE'], en: ['Define tank ring-wall foundation geometry', 'Enter and review design inputs', 'Support for an export workflow to SAFE'] },
    builder: { label: 'MODEL BUILDER', fa: ['انتخاب حالت‌های بار SAP2000', 'پیش‌نمایش واکنش‌ها و نگاشت به الگوهای SAFE', 'انتقال فقط پس از بررسی و تأیید شما'], en: ['Select SAP2000 load cases', 'Preview reactions and map them to SAFE patterns', 'Transfer only after your review and confirmation'] },
    connections: { label: 'CONNECTIONS', fa: ['رابط اختصاصی ابزارهای اتصال تیر', 'دسترسی به داده‌های مرتبط با اتصال', 'قرار گرفتن ابزار در فضای کاری یکپارچه'], en: ['A dedicated interface for beam connection tools', 'Access to connection-related data', 'Tools within the connected workspace'] },
    ai: { label: 'AI ASSISTANT', fa: ['دسترسی به دستیار از فضای کار SKYRoN', 'اتصال به قابلیت‌های تعریف‌شده در نرم‌افزار', 'امکانات وابسته به تنظیمات و ابزارهای فعال'], en: ['Access the assistant from your SKYRoN workspace', 'Connected to capabilities defined in the software', 'Features depend on enabled tools and settings'] }
  };

  function applyLanguage(next) {
    language = next === 'en' ? 'en' : 'fa';
    document.documentElement.lang = language;
    document.querySelector('meta[name=theme-color]').content = document.documentElement.dataset.theme === 'light' ? '#f2f5f2' : '#101714';
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    bindings.forEach(([attr, target]) => $$(`[${attr}]`).forEach(el => {
      const text = t(el.getAttribute(attr));
      if (target === 'textContent') el.textContent = text;
      else el.setAttribute(target, text);
    }));
    document.title = t('title');
    $('meta[name="description"]').content = t('description');
    $('#languageLabel').textContent = language === 'fa' ? 'EN' : 'فا';
    $('#languageSwitch').setAttribute('aria-label', language === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی');
    $('#languageSwitch').setAttribute('lang', language === 'fa' ? 'en' : 'fa');
    $('#formLanguage').value = language;
    $('.menu-toggle').setAttribute('aria-label', t($('.menu-toggle').getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
    if (submitting) $('.submit-label').textContent = t('sending');
    if (attempted) validate(false);
    if (activeModule) renderModule(activeModule);
    if ($('#formStatus').dataset.error) showSubmissionError($('#formStatus').dataset.error);
    try { localStorage.setItem('skyron-language', language); } catch { /* Storage is optional. */ }
    requestAnimationFrame(updateScroll);
  }
  $('#languageSwitch').addEventListener('click', () => applyLanguage(language === 'fa' ? 'en' : 'fa'));
  document.documentElement.dataset.theme=localStorage.getItem('skyron-theme')==='dark'?'dark':'light';
  document.documentElement.classList.toggle('light-theme',document.documentElement.dataset.theme==='light');
  $('#themeSwitch').addEventListener('click',()=>{const light=document.documentElement.dataset.theme!=='light';document.documentElement.dataset.theme=light?'light':'dark';document.documentElement.classList.toggle('light-theme',light);localStorage.setItem('skyron-theme',light?'light':'dark');});

  // Small-screen navigation: normal links, Escape and outside-click support.
  const menuButton = $('.menu-toggle');
  const menu = $('#mobileMenu');
  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', t('menuOpen'));
  }
  menuButton.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
  });
  $$('a', menu).forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', e => { if (!menu.hidden && !$('.site-header').contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); } });
  window.matchMedia('(min-width: 701px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

  // Reveal content only when observers exist; without JS, every section remains readable.
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('enhanced');
    const reveals = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveals.unobserve(entry.target); }
    }), { threshold: .08 });
    $$('.reveal').forEach(el => reveals.observe(el));
  }
  const steps = $$('.workflow-step');
  const graphic = $('#workflowGraphic');
  const progressBar = $('.scroll-progress');
  let scrollScheduled = false;
  function updateScroll() {
    scrollScheduled = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }
  function scheduleScroll() { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScroll); } }
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  steps.forEach(step => {
    step.setAttribute('role', 'button'); step.tabIndex = 0;
    const activate = () => {
      graphic.dataset.stage = step.dataset.step;
      $('#workflowState').textContent = [t('workflowStage1'), t('workflowStage2'), t('workflowStage3')][Number(step.dataset.step)];
      steps.forEach((item, i) => { item.classList.toggle('is-active', item === step); item.setAttribute('aria-pressed', String(item === step)); });
    };
    step.addEventListener('click', activate);
    step.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
  });

  // Native dialogs provide focus containment, Escape and return-to-trigger behaviour.
  const moduleDialog = $('#moduleDialog');
  const screenshotDialog = $('#screenshotDialog');
  const checkIcon = '<svg class="icon" aria-hidden="true"><use href="#check"/></svg>';
  const moduleAssets = { steel: 'module-steel.jpg', analysis: 'module-analysis.jpg', ring: 'module-ring.jpg', builder: 'module-builder.jpg', connections: 'module-connections.jpg', ai: 'module-ai.jpg' };
  const moduleMotionSvg = {
    steel: '<svg viewBox="0 0 960 550" aria-hidden="true"><path class="motion-trace" d="M180 96v332m126-332v332m127-332v332m126-332v332m-379-250h505m-505 124h505m-505 124h505"/><circle class="motion-pulse" cx="306" cy="222" r="12"/><circle class="motion-pulse delay-1" cx="560" cy="346" r="12"/></svg>',
    analysis: '<svg viewBox="0 0 960 550" aria-hidden="true"><path class="motion-trace" d="M164 130q138-68 275 0t275 0m-550 90q138-68 275 0t275 0m-550 90q138-68 275 0t275 0"/><path class="motion-load" d="M276 82v78m-11-14 11 14 11-14m244-64v78m-11-14 11 14 11-14m-133 134v78m-11-14 11 14 11-14"/><circle class="motion-pulse" cx="438" cy="292" r="18"/></svg>',
    ring: '<svg viewBox="0 0 960 550" aria-hidden="true"><ellipse class="motion-ring" cx="480" cy="342" rx="307" ry="120"/><ellipse class="motion-ring inner" cx="480" cy="342" rx="271" ry="99"/><path class="motion-load" d="M210 330v-86m-11 14 11-14 11 14m529 86v-86m-11 14 11-14 11 14m-259 7v-80m-11 14 11-14 11 14"/><circle class="motion-pulse" cx="480" cy="342" r="16"/></svg>',
    builder: '<svg viewBox="0 0 960 550" aria-hidden="true"><path class="motion-trace" d="M183 294c115-147 226-147 339 0s189 76 250-22"/><circle class="motion-pulse" cx="183" cy="294" r="14"/><circle class="motion-pulse delay-1" cx="522" cy="294" r="14"/><circle class="motion-pulse delay-2" cx="772" cy="272" r="14"/></svg>',
    connections: '<svg viewBox="0 0 960 550" aria-hidden="true"><path class="motion-trace" d="M235 90v360m38-360v360m26-360h489m-489 360h489"/><circle class="bolt-pulse" cx="317" cy="190" r="34"/><circle class="bolt-pulse delay-1" cx="317" cy="358" r="34"/><path class="motion-load" d="M450 275h175m-18-18 18 18-18 18"/></svg>',
    ai: '<svg viewBox="0 0 960 550" aria-hidden="true"><rect class="chat-panel" x="665" y="80" width="210" height="290" rx="16"/><path class="chat-line line-a" d="M700 137h124"/><path class="chat-line line-b" d="M700 193h145"/><path class="chat-line line-c" d="M700 249h108"/><path class="chat-line line-d" d="M700 305h132"/><circle class="motion-pulse" cx="700" cy="420" r="12"/></svg>'
  };
  function renderModule(key) {
    const data = modules[key];
    const body = $('#moduleDialogContent');
    body.replaceChildren();
    const visual = document.createElement('div'); visual.className = 'module-motion'; visual.dataset.module = key; visual.setAttribute('role', 'img'); visual.setAttribute('aria-label', t(key + 'Motion'));
    const img = document.createElement('img'); img.className = 'motion-art'; img.src = `assets/${moduleAssets[key]}`; img.alt = ''; img.width = 960; img.height = 549; img.decoding = 'async';
    const overlay = document.createElement('div'); overlay.className = 'motion-overlay'; overlay.innerHTML = moduleMotionSvg[key];
    const motionTag = document.createElement('span'); motionTag.className = 'motion-tag mono'; motionTag.textContent = t('motionTag');
    visual.append(img, overlay, motionTag);
    const content = document.createElement('div'); content.className = 'dialog-content';
    const eyebrow = document.createElement('span'); eyebrow.className = 'mono text-muted'; eyebrow.dir = 'ltr'; eyebrow.textContent = data.label;
    const title = document.createElement('h2'); title.id = 'moduleDialogTitle'; title.textContent = t(`${key}Title`);
    const description = document.createElement('p'); description.textContent = t(`${key}Summary`);
    const motionCaption = document.createElement('p'); motionCaption.className = 'motion-caption'; motionCaption.id = 'moduleMotionDescription'; motionCaption.textContent = t(key + 'Motion');
    const list = document.createElement('ul'); list.className = 'dialog-features';
    data[language].forEach(text => {
      const li = document.createElement('li'); li.innerHTML = checkIcon;
      const span = document.createElement('span'); span.textContent = text; li.append(span); list.append(li);
    });
    const caveat = document.createElement('p'); caveat.className = 'dialog-disclaimer';
    caveat.textContent = t(key === 'builder' ? 'builderCaveat' : key === 'ai' ? 'aiCaveat' : 'moduleCaveat');
    const request = document.createElement('button'); request.type = 'button'; request.className = 'button button-accent'; request.textContent = t('dialogRequest');
    request.addEventListener('click', () => {
      moduleDialog.close();
      $('#access').scrollIntoView({ behavior: motion.matches ? 'instant' : 'smooth' });
      $('#fullName').focus({ preventScroll: true });
    });

    content.append(eyebrow, title, description, motionCaption, list, caveat, request); body.append(visual, content);
    moduleDialog.setAttribute('aria-labelledby', title.id);
    moduleDialog.setAttribute('aria-describedby', motionCaption.id);
  }
  $$('[data-details]').forEach(button => button.addEventListener('click', () => {
    activeModule = button.dataset.details; renderModule(activeModule); moduleDialog.showModal();
  }));
  moduleDialog.addEventListener('close', () => { activeModule = null; });
  $('#expandScreenshot').addEventListener('click', () => screenshotDialog.showModal());
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  $$('dialog').forEach(dialog => {
    let backdropPointer = false;
    dialog.addEventListener('pointerdown', e => { backdropPointer = e.target === dialog; });
    dialog.addEventListener('click', e => {
      const r = dialog.getBoundingClientRect();
      if (backdropPointer && e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => { document.documentElement.classList.remove('dialog-open'); });
    new MutationObserver(() => document.documentElement.classList.toggle('dialog-open', $$('dialog[open]').length > 0))
      .observe(dialog, { attributes: true, attributeFilter: ['open'] });
  });

  // Formspree: send only on an explicit valid submission, never on a preview or page load.
  function syncRequestType() {
    $('#machineId').required = true;
    $('#requestType').value = '14-day trial license request';
    if (attempted) validate(false);
  }
  function setError(input, key, valid) {
    const error = $(`#${key}`);
    error.textContent = valid ? '' : t(key);
    if (input) {
      if (valid) input.removeAttribute('aria-invalid');
      else input.setAttribute('aria-invalid', 'true');
    }
    return valid;
  }
  function validate(focus) {
    const name = $('#fullName'), email = $('#email'), consent = $('#consent');
    const results = [
      [name, setError(name, 'nameError', name.value.trim().length > 0)],
      [email, setError(email, 'emailError', email.value.trim().length > 0 && email.validity.valid)],
      [$('#machineId'), setError($('#machineId'), 'machineError', $('#machineId').required ? $('#machineId').value.trim().length > 0 : true)],
      [consent, setError(consent, 'consentError', consent.checked)]
    ];
    const first = results.find(([, valid]) => !valid);
    if (focus && first) first[0].focus();
    return !first;
  }
  form.addEventListener('input', () => {
    $('#charCount').textContent = String($('#message').value.length);
    if (attempted) validate(false);
  });
  function showSubmissionError(key) {
    const status = $('#formStatus'); status.dataset.error = key;
    const link = document.createElement('a'); link.href = 'mailto:shahin.ma49@gmail.com'; link.dir = 'ltr'; link.textContent = 'shahin.ma49@gmail.com';
    status.replaceChildren(document.createTextNode(`${t(key)} `), link);
  }
  function setSubmitting(busy) {
    submitting = busy;
    $('#submitButton').disabled = busy;
    form.setAttribute('aria-busy', String(busy));
    $('.submit-label').textContent = t(busy ? 'sending' : 'submit');
    $('.spinner').hidden = !busy;
    $('.submit-arrow').hidden = busy;
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitting) return;
    attempted = true;
    if (!validate(true)) return;
    const status = $('#formStatus'); status.replaceChildren(); delete status.dataset.error;
    const controller = new AbortController();
    const data = new FormData(form);
    data.set('name', $('#fullName').value.trim()); data.set('email', $('#email').value.trim());
    data.set('_subject', `SKYRoN — ${$('#requestType').value}`);
    setSubmitting(true);
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok === false || result?.errors) throw new Error('submission');
      form.hidden = true; $('#successState').hidden = false; $('#successState').focus();
    } catch (error) {
      showSubmissionError(error.name === 'AbortError' ? 'timeoutError' : 'submitError');
    } finally { clearTimeout(timeout); setSubmitting(false); }
  });
  $('#resetForm').addEventListener('click', () => {
    form.reset(); attempted = false;
    $$('.field-error', form).forEach(el => { el.textContent = ''; });
    $$('[aria-invalid]', form).forEach(el => el.removeAttribute('aria-invalid'));
    $('#formStatus').replaceChildren(); delete $('#formStatus').dataset.error;
    $('#charCount').textContent = '0'; $('#formLanguage').value = language;
    syncRequestType(); $('#successState').hidden = true; form.hidden = false; $('#fullName').focus();
  });
  syncRequestType();
  let initialLanguage = new URLSearchParams(location.search).get('lang');
  if (!['fa', 'en'].includes(initialLanguage)) {
    try { initialLanguage = localStorage.getItem('skyron-language'); } catch { /* Language preference is optional. */ }
  }
  Object.assign(en, {
    plantDiagramAlt:'Isometric oil and gas complex with storage tanks on ring-wall foundations, process columns, pipe racks, plant buildings and electrical substation',
    plantMapLabel:'OIL & GAS STRUCTURES', conceptOnly:'CONCEPT RENDER · NOT ANALYSIS DATA',
    sectorCaption:'RING-WALL TANKS · PROCESS STEEL · PIPE RACKS · POWER',
    workflowTitle:'From SAP2000 reactions to a foundation model',
    workflowIntro:'Follow the path: choose load cases, review support reactions and mapping, then approve the transfer into SAFE.',
    workflowSceneLabel:'Three-dimensional illustration of a structural frame, mapped support reactions and a SAFE foundation model',
    workflowCaption:'Concept visualization of the active SAP2000 to SAFE workflow. Your review and confirmation come before transfer.',
    workflowStage1:'01 / LOAD CASES',workflowStage2:'02 / REVIEW REACTIONS',workflowStage3:'03 / CONFIRM TRANSFER',
    sceneSource:'FRAME MODEL · SAP2000',sceneReactions:'SUPPORT REACTIONS',sceneTarget:'FOUNDATION · SAFE',sceneApproval:'ENGINEER REVIEW',
    step1Title:'Choose the load cases',step1Text:'Select the completed SAP2000 cases you want to use. Check the inputs before moving on.',
    step2Title:'Review reactions and mapping',step2Text:'Inspect support reactions and map each selected case to a SAFE load pattern.',
    step3Title:'Confirm before transfer',step3Text:'Review the mapping, then approve the transfer of the selected reactions into SAFE.',
    optionBeta:'14-day free trial',optionBetaNote:'Request access to the full suite with your SKYRoN Machine ID.',
    installerNote:'Windows access starts with a 14-day trial request.',installerTrialCta:'Request trial access',dialogRequest:'Request the 14-day trial',
    motionTag:'MOTION EXPLAINER · CONCEPT',
    steelMotion:'Select a steel member, review its section and beam report, then run the fatigue checks you need.',
    analysisMotion:'Choose a seismic system, enter project inputs and inspect a calculation preview before using it.',
    ringMotion:'Set tank geometry, inspect the ring-wall foundation and prepare the next design step.',
    builderMotion:'Select load cases → preview support reactions → map them to SAFE → review and confirm.',
    connectionsMotion:'Inspect the beam-to-column connection and review its related connection data.',
    aiMotion:'Ask with project context, review the assistant response and decide what to use in your design work.'
  });
  Object.assign(fa, {
    plantDiagramAlt:'نمای سه‌بعدی مجتمع نفت و گاز با مخزن‌های روی فونداسیون رینگ‌وال، برج‌های فرایندی، پایپ‌رک، ساختمان صنعتی و پست برق',
    plantMapLabel:'سازه‌های مجتمع نفت و گاز',conceptOnly:'رندر مفهومی · نه خروجی تحلیل',
    sectorCaption:'مخزن رینگ‌وال · سازه فرایندی · پایپ‌رک · برق',
    workflowTitle:'از واکنش‌های SAP2000 تا مدل فونداسیون',
    workflowIntro:'مسیر را ببین: حالت‌های بار را انتخاب کن، واکنش‌ها و نگاشت را مرور کن و بعد انتقال به SAFE را تأیید کن.',
    workflowSceneLabel:'نمای سه‌بعدی قاب سازه، واکنش‌های تکیه‌گاهی و فونداسیون در SAFE',
    workflowCaption:'نمای مفهومی از مسیر فعال SAP2000 به SAFE؛ پیش از انتقال، خودت اطلاعات را مرور و تأیید می‌کنی.',
    workflowStage1:'۰۱ / انتخاب بار',workflowStage2:'۰۲ / بررسی واکنش',workflowStage3:'۰۳ / تأیید انتقال',
    sceneSource:'مدل قاب · SAP2000',sceneReactions:'واکنش‌های تکیه‌گاهی',sceneTarget:'فونداسیون · SAFE',sceneApproval:'بررسی مهندس',
    step1Title:'حالت‌های بار را انتخاب کن',step1Text:'حالت‌های تحلیل کامل‌شدهٔ SAP2000 را انتخاب کن و پیش از ادامه، ورودی‌ها را ببین.',
    step2Title:'واکنش‌ها و نگاشت را ببین',step2Text:'واکنش تکیه‌گاه‌ها را بررسی کن و هر حالت بار را به الگوی متناظر در SAFE وصل کن.',
    step3Title:'پیش از انتقال تأیید کن',step3Text:'نگاشت را مرور کن و بعد انتقال واکنش‌های انتخاب‌شده به SAFE را تأیید کن.',
    optionBeta:'۱۴ روز رایگان امتحان کن',optionBetaNote:'برای دسترسی به مجموعه، شناسهٔ SKYRoN خودت را وارد کن.',
    installerNote:'برای شروع کار با نسخهٔ ویندوز، دسترسی آزمایشی ۱۴روزه بگیر.',installerTrialCta:'درخواست نسخهٔ آزمایشی',dialogRequest:'درخواست نسخهٔ آزمایشی ۱۴روزه',
    motionTag:'نمای متحرک · مفهومی',
    steelMotion:'عضو فولادی را انتخاب کن، مشخصات مقطع و گزارش تیر را ببین و کنترل خستگی را انجام بده.',
    analysisMotion:'سیستم لرزه‌ای را انتخاب کن، ورودی‌های پروژه را بده و پیش‌نمایش محاسبه را بررسی کن.',
    ringMotion:'ابعاد مخزن را وارد کن، فونداسیون رینگ‌وال را ببین و مرحلهٔ بعد طراحی را آماده کن.',
    builderMotion:'حالت‌های بار را انتخاب کن ← واکنش‌ها را ببین ← به SAFE نگاشت کن ← مرور و تأیید کن.',
    connectionsMotion:'اتصال تیر به ستون و اطلاعات مربوط به جزئیات اتصال را بررسی کن.',
    aiMotion:'با توضیح شرایط پروژه سؤال بپرس، جواب دستیار را بخوان و دربارهٔ استفاده از آن تصمیم بگیر.'
  });
  Object.assign(en, {exploreModule:'See how it works',dialogRequest:'Request the 14-day trial'});
  Object.assign(fa, {exploreModule:'ببین چطور کار می‌کند',dialogRequest:'درخواست نسخهٔ آزمایشی ۱۴روزه'});
  Object.assign(en, {trialDays:'14',stepChip1:'SELECT / INPUT',stepChip2:'PREVIEW / MAP',stepChip3:'CONFIRM / TRANSFER'});
  Object.assign(fa, {trialDays:'۱۴',stepChip1:'انتخاب / ورودی',stepChip2:'پیش‌نمایش / نگاشت',stepChip3:'تأیید / انتقال'});
  Object.assign(en, {feedbackTitle:'Have an idea to make SKYRoN more useful?',feedbackCopy:'Suggest a practical tool, a new feature, or a way to improve your workflow. If your suggestion is reviewed and added to SKYRoN, you’ll receive three months of free subscription.',feedbackCta:'Share an idea with Shahin',companyLinkedin:'SKYRoN on LinkedIn ↗'});
  Object.assign(fa, {feedbackTitle:'برای بهتر شدن SKYRoN ایده‌ای داری؟',feedbackCopy:'اگر ابزار کاربردی، قابلیت تازه یا راهی برای ساده‌ترشدن کار با نرم‌افزار به ذهنت می‌رسد، برایم بنویس. پیشنهادهایی که پس از بررسی به SKYRoN اضافه شوند، سه ماه اشتراک رایگان دارند.',feedbackCta:'فرستادن پیشنهاد برای شاهین',companyLinkedin:'لینکدین SKYRoN ↗'});
  applyLanguage(initialLanguage || 'en');
  $('#year').textContent = String(new Date().getFullYear());

})();

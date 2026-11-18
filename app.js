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
    title: 'SKYRoN — مهندسی، با جریان روشن‌تر',
    description: $('meta[name="description"]').content,
    nameError: 'نام و نام خانوادگی خود را وارد کنید.',
    emailError: 'یک آدرس ایمیل معتبر وارد کنید.',
    modulesError: 'دست‌کم یک ماژول را انتخاب کنید.',
    consentError: 'برای پاسخ به درخواست، موافقت شما با تماس ایمیلی لازم است.',
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
  let language = 'fa';
  let activeModule = null;
  let submitting = false;
  let attempted = false;
  const t = key => (language === 'en' ? en[key] : fa[key]) ?? fa[key] ?? key;
  const form = $('#requestForm');
  const moduleOptions = $('#moduleOptions');
  const moduleChecks = $$('input[name="modules"]', form);
  const moduleNames = ['steel', 'analysis', 'ring', 'builder', 'connections', 'ai'];
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
  const progressBar = $('.scroll-progress');
  let scrollScheduled = false;
  function updateScroll() {
    scrollScheduled = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    const graphic = $('#workflowGraphic');
    const mobile = innerWidth <= 700;
    const line = mobile ? Math.min(innerHeight * .82, graphic.getBoundingClientRect().bottom + 125) : innerHeight * .53;
    let nearest = 0, distance = Infinity;
    steps.forEach((step, i) => {
      const r = step.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - line);
      if (d < distance) { distance = d; nearest = i; }
    });
    graphic.dataset.stage = String(nearest);
    $('#workflowState').textContent = ['01 / SELECT', '02 / PREVIEW', '03 / TRANSFER'][nearest];
    steps.forEach((step, i) => step.classList.toggle('is-active', i === nearest));
  }
  function scheduleScroll() { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScroll); } }
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });

  // Native dialogs provide focus containment, Escape and return-to-trigger behaviour.
  const moduleDialog = $('#moduleDialog');
  const screenshotDialog = $('#screenshotDialog');
  const checkIcon = '<svg class="icon" aria-hidden="true"><use href="#check"/></svg>';
  function renderModule(key) {
    const data = modules[key];
    const body = $('#moduleDialogContent');
    body.replaceChildren();
    const img = document.createElement('img');
    img.className = 'dialog-art'; img.src = `assets/${key}.svg`; img.alt = ''; img.width = 400; img.height = 200;
    const content = document.createElement('div'); content.className = 'dialog-content';
    const eyebrow = document.createElement('span'); eyebrow.className = 'mono text-muted'; eyebrow.dir = 'ltr'; eyebrow.textContent = data.label;
    const title = document.createElement('h2'); title.id = 'moduleDialogTitle'; title.textContent = t(`${key}Title`);
    const description = document.createElement('p'); description.textContent = t(`${key}Summary`);
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
      $('input[name="access_choice"][value="modules"]').checked = true;
      moduleChecks[moduleNames.indexOf(key)].checked = true;
      syncRequestType();
      $('#access').scrollIntoView({ behavior: motion.matches ? 'instant' : 'smooth' });
      $('#fullName').focus({ preventScroll: true });
    });
    content.append(eyebrow, title, description, list, caveat, request); body.append(img, content);
    moduleDialog.setAttribute('aria-labelledby', title.id);
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
    const individual = $('input[name="access_choice"]:checked', form).value === 'modules';
    moduleOptions.hidden = !individual;
    moduleChecks.forEach(check => { check.disabled = !individual; });
    $('#requestType').value = individual ? 'Individual modules' : '14-day beta';
    if (attempted) validate(false);
  }
  $$('input[name="access_choice"]', form).forEach(input => input.addEventListener('change', syncRequestType));
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
      [moduleChecks[0], setError(null, 'modulesError', moduleOptions.hidden || moduleChecks.some(check => check.checked))],
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
    try { initialLanguage = localStorage.getItem('skyron-language'); } catch { /* Persian default. */ }
  }
  applyLanguage(initialLanguage);
  $('#year').textContent = String(new Date().getFullYear());
  initStructure();

  // Lightweight orthographic structural illustration. This is deliberately not analysis data.
  function initStructure() {
    const canvas = $('#structureCanvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const host = $('#heroVisual');
    let width = 0, height = 0, ratio = 1, frame = 0;
    let visible = true, exploded = false, separation = 0, yaw = -.58, mouseX = 0, mouseY = 0;
    const xs = [-1.7, 0, 1.7], ys = [-1.15, 1.15], floors = 5;
    const segments = [];
    const add = (a, b, type = 'beam') => segments.push({ a, b, type });
    for (let f = 0; f <= floors; f++) {
      const z = f * .92;
      xs.forEach(x => add([x, ys[0], z], [x, ys[1], z], 'beam'));
      ys.forEach(y => add([xs[0], y, z], [xs[2], y, z], 'beam'));
      if (f < floors) {
        xs.forEach(x => ys.forEach(y => add([x, y, z], [x, y, z + .92], 'column')));
        for (let bay = 0; bay < 2; bay++) {
          add([xs[bay], ys[0], z], [xs[bay + 1], ys[0], z + .92], 'brace');
          add([xs[bay + 1], ys[0], z], [xs[bay], ys[0], z + .92], 'brace');
        }
        add([xs[2], ys[0], z], [xs[2], ys[1], z + .92], 'brace');
      }
    }
    function project(p, expand = true) {
      const [x, y, sourceZ] = p;
      const c = Math.cos(yaw), s = Math.sin(yaw);
      const z = sourceZ + (expand ? sourceZ / .92 * separation * .15 : 0);
      const scale = Math.min(width / 6.7, height / 8.6);
      return [
        width * .53 + (x * c - y * s) * scale,
        height * .52 + ((x * s + y * c) * (.36 + mouseY * .015) - (z - 2.3) * .97) * scale,
        x * s + y * c
      ];
    }
    function line(a, b, colour, thickness = 1, dash = []) {
      ctx.beginPath(); ctx.setLineDash(dash); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
      ctx.strokeStyle = colour; ctx.lineWidth = thickness; ctx.stroke(); ctx.setLineDash([]);
    }
    function polygon(points, fill, stroke) {
      ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath();
      ctx.fillStyle = fill; ctx.fill(); if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = .7; ctx.stroke(); }
    }
    function draw(time = 0) {
      ctx.clearRect(0, 0, width, height);
      const wantedYaw = -.58 + mouseX * .14 + (motion.matches ? 0 : Math.sin(time * .00015) * .045);
      yaw += (wantedYaw - yaw) * .07;
      separation += ((exploded ? 1 : 0) - separation) * (motion.matches ? 1 : .075);
      // Ground grid, pad foundations and delicate construction guides.
      for (let i = -5; i <= 5; i++) {
        line(project([i * .7, -3.5, -.16], false), project([i * .7, 3.5, -.16], false), '#7acbd10c', .7);
        line(project([-3.5, i * .7, -.16], false), project([3.5, i * .7, -.16], false), '#7acbd10c', .7);
      }
      xs.forEach(x => ys.forEach(y => {
        polygon([[x-.23,y-.23,-.08],[x+.23,y-.23,-.08],[x+.23,y+.23,-.08],[x-.23,y+.23,-.08]].map(p => project(p, false)), '#7acbd10a', '#7acbd147');
        line(project([x,y,0]), project([x,y,5.05]), '#7acbd117', .6, [3,5]);
      }));
      for (let f = 1; f <= floors; f++) {
        const z = f * .92;
        polygon([[xs[0],ys[0],z],[xs[2],ys[0],z],[xs[2],ys[1],z],[xs[0],ys[1],z]].map(p => project(p)), f === floors ? '#d0f2930b' : '#7acbd107');
      }
      const sorted = segments.map(edge => ({ ...edge, a2: project(edge.a), b2: project(edge.b) }))
        .sort((a,b) => a.a2[2] + a.b2[2] - b.a2[2] - b.b2[2]);
      sorted.forEach(edge => {
        const front = (edge.a2[2] + edge.b2[2]) / 2 > -.3;
        const brace = edge.type === 'brace', column = edge.type === 'column';
        if (!brace) line(edge.a2, edge.b2, '#183b45', column ? 5.5 : 4.3);
        line(edge.a2, edge.b2, brace ? '#d0f293ab' : front ? '#9fced3db' : '#5a919baf', brace ? 1 : column ? 1.6 : 1.35);
        if (column) line([edge.a2[0]+2,edge.a2[1]], [edge.b2[0]+2,edge.b2[1]], '#7acbd13b', .7);
      });
      for (let f = 0; f <= floors; f++) xs.forEach(x => ys.forEach(y => {
        const p = project([x, y, f * .92]); ctx.beginPath(); ctx.arc(p[0],p[1],1.75,0,Math.PI*2); ctx.fillStyle = '#c6e5dc'; ctx.fill();
      }));
      // Floor reference lines and a dimension mark are conceptual, without fabricated values.
      for (let f = 0; f <= floors; f++) {
        const p = project([-1.7, -1.15, f * .92]);
        line([p[0]-26,p[1]], [p[0]-9,p[1]], '#7acbd158', .7);
        ctx.fillStyle = '#839fa7'; ctx.font = '8px Space, sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(f === 0 ? 'BASE' : `L0${f}`, p[0]-31,p[1]+3);
      }
      const a = project([2.2,1.15,0]), b = project([2.2,1.15,4.6]);
      line(a,b,'#7acbd140',.7); line([a[0]-4,a[1]],[a[0]+4,a[1]],'#7acbd170',.7); line([b[0]-4,b[1]],[b[0]+4,b[1]],'#7acbd170',.7);
    }
    function animate(time) {
      frame = 0; draw(time);
      if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(animate);
    }
    function start() { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(animate); }
    function resize() {
      width = host.clientWidth; height = host.clientHeight; ratio = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio,0,0,ratio,0,0); draw(); start();
    }
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(host);
    else window.addEventListener('resize', resize);
    if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) start(); else { cancelAnimationFrame(frame); frame = 0; }
    }).observe(host);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else start();
    });
    motion.addEventListener('change', () => { cancelAnimationFrame(frame); frame = 0; start(); });
    host.addEventListener('pointermove', e => {
      if (motion.matches || e.pointerType === 'touch') return;
      const r = host.getBoundingClientRect(); mouseX = (e.clientX-r.left)/r.width-.5; mouseY = (e.clientY-r.top)/r.height-.5;
    });
    host.addEventListener('pointerleave', () => { mouseX = 0; mouseY = 0; });
    $('#explodeButton').addEventListener('click', () => {
      exploded = !exploded; $('#explodeButton').setAttribute('aria-pressed', String(exploded));
      if (motion.matches) draw(); else start();
    });
    resize();
  }
})();

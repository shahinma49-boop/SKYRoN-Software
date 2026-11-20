(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const copy = {
    en: {
      creators: 'Creators', creatorsTitle: 'Built by structural engineers', creatorsIntro: 'SKYRoN is shaped around the repetitive work engineers should not have to do by hand.', creatorRole: 'Creator · Structural engineering software',
      disabledDownload: 'Windows download · temporarily unavailable', downloadNote: 'The Windows download is being prepared. Request a 14-day trial to get access.',
      workflowTitle: 'Explore the tools behind the workflow', workflowIntro: 'Choose a module, then explore its individual tools and the steps an engineer takes in SKYRoN.',
      chooseModule: 'MODULE', chooseTool: 'TOOL', stage: ['01 · SELECT INPUTS', '02 · REVIEW', '03 · USE THE OUTPUT'], replay: 'Replay motion', diagram: 'Interactive concept · sample output', engineerReview: 'Engineer review',
      modules: {steel:'Steel Frame',analysis:'Analysis Assistance',ring:'Ring Wall',builder:'Model Builder',connections:'Connections',ai:'AI Assistant'},
      region: {tank:'Storage tanks',rack:'Pipe racks',process:'Process towers',building:'Industrial buildings',power:'Power and substation'},
      regionHelp: 'Explore a structure to see which SKYRoN tools can support its design workflow.', moduleNames: {steel:'Steel Frame',analysis:'Analysis Assistance',ring:'Ring Wall',builder:'Model Builder',connections:'Connections'},
      compatTitle: 'A structural workspace for the whole design task', compatBody: 'SKYRoN brings focused design tools and model data together, helping engineers reach checks, reports and foundation inputs with fewer repetitive steps.', compatState: {sap:'Connected workflow',safe:'Foundation workflow',etabs:'In development'}, compatText:{sap:'Current model tools and structural checks',safe:'Ring Wall and reviewed reaction transfer',etabs:'ETABS connection is in development'},
      tools: {
        steel:[
          ['chevron','Chevron beam control','Select the chevron-braced bay and governing combinations; review the beam check and report.',['Select the braced bay','Review beam and brace inputs','Inspect the check report'],'frame'],
          ['fatigue','Beam fatigue check','Review selected beam cycle states and the resulting fatigue demand.',['Choose cycle states','Review stress samples','Inspect fatigue results'],'chart'],
          ['deflection','Beam deflection','Calculate deflection from SAP2000 force output and review the curve.',['Select beams','Choose combinations','Review the deflection curve'],'chart'],
          ['drift','Story drift control','Select drift points and load cases, then review story drift results.',['Choose drift points','Select load cases','Review story drift'],'frame'],
          ['soft','Soft story control','Compare story stiffness using the selected direction and drift data.',['Choose direction','Review story data','Locate the soft story'],'frame'],
          ['weak','Weak story control','Review relative story strength and identify the governing level.',['Select the frame','Compare story strength','Review the governing level'],'frame'],
          ['overstrength','Column overstrength','Check selected columns against the governing combinations.',['Select columns','Choose combinations','Review overstrength results'],'frame'],
          ['scwb','Strong column · weak beam','Review the column-to-beam capacity relationship at selected joints.',['Select joints','Compare member capacities','Review the SCWB check'],'joint']
        ],
        analysis:[
          ['seismic','Seismic system in SAP2000','Set the seismic system and directional parameters in the connected SAP2000 model.',['Choose the system','Review directional inputs','Inspect the assigned parameters'],'frame'],
          ['scale','Seismic scale factor','Compare response-spectrum base shear with a selected linear-static case, then review scale factors.',['Select load cases','Compare base shears','Review scale factors'],'chart'],
          ['period','Real and estimated period','Compare modal periods and review the real-period or estimated-period result.',['Choose a modal case','Compare periods','Review the selected period'],'frame']
        ],
        ring:[
          ['geometry','Tank and ring-wall geometry','Define tank and ring-wall geometry, then inspect the foundation layout.',['Set tank dimensions','Review the ring geometry','Inspect the foundation plan'],'tank'],
          ['design','Foundation design inputs','Review the project inputs used by the ring-wall foundation design workflow.',['Enter design inputs','Review soil and load data','Inspect the design summary'],'tank'],
          ['safe','SAFE export workflow','Prepare the ring-wall design information for the SAFE workflow.',['Review foundation data','Prepare the export','Inspect the SAFE handoff'],'transfer']
        ],
        builder:[
          ['cases','Select SAP2000 load cases','Choose completed load cases from the connected SAP2000 model.',['Connect to the model','Select completed cases','Review the selection'],'transfer'],
          ['reactions','Preview reactions and mapping','Review support reactions and map selected cases to SAFE load patterns.',['Read support reactions','Map cases to patterns','Review the preview'],'transfer'],
          ['approve','Confirm the SAFE transfer','Transfer only after the engineer reviews and approves the mapping.',['Review the mapping','Confirm the destination','Approve the transfer'],'transfer']
        ],
        connections:[['beam','Beam connection workspace','Open connection tools and review the connection-related data in the SKYRoN workspace.',['Choose a connection','Review member details','Inspect connection data'],'joint']],
        ai:[['assistant','AI assistant in your workspace','Ask a question, review the response and decide whether it applies to your engineering work.',['Ask with project context','Review the response','Check before using it'],'assistant']]
      },
      faTools: {
        steel:[
          'کنترل تیر شورون','کنترل خستگی تیر','کنترل خیز تیر','کنترل دریفت طبقه','کنترل طبقه نرم','کنترل طبقه ضعیف','کنترل ستون با نیروهای تشدیدی','کنترل ستون قوی–تیر ضعیف'
        ],
        analysis:['افزودن سیستم لرزه‌ای به SAP2000','همپایه‌سازی طیفی','کنترل دوره تناوب'],
        ring:['تعریف هندسه مخزن و رینگ‌وال','ورودی‌های طراحی فونداسیون','آماده‌سازی خروجی برای SAFE'],
        builder:['انتخاب حالت‌های بار SAP2000','پیش‌نمایش واکنش و نگاشت به SAFE','تأیید و انتقال به SAFE'],
        connections:['ابزارها و داده‌های اتصال تیر'],
        ai:['دستیار هوش مصنوعی در محیط کار']
      }
    },
    fa: {
      creators:'سازندگان', creatorsTitle:'ساخته‌شده برای کار مهندسی', creatorsIntro:'SKYRoN را طوری پیش می‌بریم که زمان مهندس به‌جای کارهای تکراری، صرف بررسی و تصمیم‌گیری شود.', creatorRole:'سازنده · توسعهٔ نرم‌افزار مهندسی سازه',
      disabledDownload:'دریافت نسخهٔ ویندوز · موقتاً غیرفعال', downloadNote:'دریافت نسخهٔ ویندوز در حال آماده‌سازی است. برای دسترسی، درخواست آزمایشی ۱۴روزه بفرستید.',
      workflowTitle:'ابزارهای هر مرحله را ببینید', workflowIntro:'ماژول را انتخاب کنید، بعد ریزابزارها و کاری را که در SKYRoN انجام می‌دهند ببینید.',
      chooseModule:'ماژول', chooseTool:'ابزار', stage:['۰۱ · انتخاب ورودی','۰۲ · بررسی','۰۳ · دیدن خروجی'], replay:'پخش دوبارهٔ موشن', diagram:'نمای مفهومی · خروجی نمونه', engineerReview:'بررسی مهندس',
      modules:{steel:'قاب فولادی',analysis:'دستیار تحلیل',ring:'رینگ‌وال',builder:'مدل‌ساز',connections:'اتصالات',ai:'دستیار هوش مصنوعی'},
      region:{tank:'مخزن ذخیره',rack:'پایپ‌رک',process:'برج‌های فرایندی',building:'ساختمان صنعتی',power:'برق و پست'},
      regionHelp:'بخش‌های مجتمع را انتخاب کنید تا ابزارهای مرتبط با طراحی آن‌ها را ببینید.',moduleNames:{steel:'قاب فولادی',analysis:'دستیار تحلیل',ring:'رینگ‌وال',builder:'مدل‌ساز',connections:'اتصالات'},
      compatTitle:'از مدل تا خروجی طراحی، در یک محیط کار',compatBody:'SKYRoN ابزارهای طراحی و داده‌های مدل را کنار هم می‌آورد تا مهندس با کار تکراری کمتر به کنترل‌ها، گزارش‌ها و ورودی فونداسیون برسد.',compatState:{sap:'ارتباط فعال',safe:'گردش‌کار فونداسیون',etabs:'در دست توسعه'},compatText:{sap:'ابزارهای مدل و کنترل سازه',safe:'رینگ‌وال و انتقال واکنش پس از بررسی',etabs:'ارتباط با ETABS در دست توسعه'},
      tools:{
        steel:[
          ['chevron','کنترل تیر شورون','دهانهٔ مهاربندی و ترکیب‌بارهای حاکم را انتخاب کنید؛ بعد کنترل تیر و گزارش را ببینید.',['انتخاب دهانهٔ مهاربندی','مرور ورودی تیر و مهاربند','دیدن گزارش کنترل'],'frame'],
          ['fatigue','کنترل خستگی تیر','وضعیت چرخه‌های انتخاب‌شده و نتیجهٔ بررسی تقاضای خستگی تیر را مرور کنید.',['انتخاب چرخه‌ها','مرور نمونه‌های تنش','دیدن نتیجهٔ خستگی'],'chart'],
          ['deflection','کنترل خیز تیر','خیز را از خروجی نیروهای SAP2000 محاسبه و نمودار تغییرشکل را بررسی کنید.',['انتخاب تیرها','انتخاب ترکیب‌بار','بررسی نمودار خیز'],'chart'],
          ['drift','کنترل دریفت طبقه','نقاط دریفت و حالت‌های بار را انتخاب کنید و نتیجهٔ طبقه‌به‌طبقه را ببینید.',['انتخاب نقاط دریفت','انتخاب حالت بار','بررسی دریفت طبقات'],'frame'],
          ['soft','کنترل طبقه نرم','سختی طبقات را با توجه به جهت و داده‌های دریفت انتخاب‌شده مقایسه کنید.',['انتخاب جهت','مرور دادهٔ طبقات','مشخص‌شدن طبقهٔ نرم'],'frame'],
          ['weak','کنترل طبقه ضعیف','مقاومت نسبی طبقات را مرور کنید و تراز حاکم را پیدا کنید.',['انتخاب قاب','مقایسهٔ مقاومت طبقات','بررسی تراز حاکم'],'frame'],
          ['overstrength','کنترل ستون با نیروهای تشدیدی','ستون‌های انتخاب‌شده را با ترکیب‌بارهای حاکم کنترل کنید.',['انتخاب ستون‌ها','انتخاب ترکیب‌بار','بررسی کنترل تشدید'],'frame'],
          ['scwb','ستون قوی–تیر ضعیف','رابطهٔ ظرفیت ستون و تیر را در گره‌های انتخاب‌شده مرور کنید.',['انتخاب گره‌ها','مقایسهٔ ظرفیت اعضا','بررسی کنترل ستون قوی–تیر ضعیف'],'joint']
        ],
        analysis:[
          ['seismic','افزودن سیستم لرزه‌ای به SAP2000','سیستم لرزه‌ای و پارامترهای جهتی را در مدل متصل SAP2000 تنظیم کنید.',['انتخاب سیستم','مرور ورودی‌های جهتی','بررسی پارامترهای تخصیص‌یافته'],'frame'],
          ['scale','همپایه‌سازی طیفی','برش پایهٔ طیفی را با حالت استاتیکی انتخاب‌شده مقایسه و ضریب‌های مقیاس را مرور کنید.',['انتخاب حالت‌های بار','مقایسهٔ برش پایه','بررسی ضریب‌های مقیاس'],'chart'],
          ['period','دورهٔ تناوب واقعی و تخمینی','دوره‌های مودال را مقایسه و نتیجهٔ دورهٔ واقعی یا تخمینی را مرور کنید.',['انتخاب حالت مودال','مقایسهٔ دوره‌ها','بررسی دورهٔ انتخاب‌شده'],'frame']
        ],
        ring:[
          ['geometry','هندسهٔ مخزن و رینگ‌وال','هندسهٔ مخزن و فونداسیون حلقوی را تعریف و نقشهٔ آن را مرور کنید.',['تعریف ابعاد مخزن','مرور هندسهٔ رینگ‌وال','دیدن پلان فونداسیون'],'tank'],
          ['design','ورودی‌های طراحی فونداسیون','داده‌های پروژه را که در مسیر طراحی رینگ‌وال استفاده می‌شوند مرور کنید.',['ثبت ورودی‌ها','مرور خاک و بار','دیدن خلاصهٔ طراحی'],'tank'],
          ['safe','خروجی به SAFE','اطلاعات طراحی رینگ‌وال را برای گردش‌کار SAFE آماده کنید.',['مرور دادهٔ فونداسیون','آماده‌سازی خروجی','بررسی مسیر انتقال'],'transfer']
        ],
        builder:[
          ['cases','انتخاب حالت‌های بار SAP2000','حالت‌های تحلیل کامل‌شده را از مدل متصل SAP2000 انتخاب کنید.',['اتصال به مدل','انتخاب حالت‌های کامل‌شده','مرور انتخاب‌ها'],'transfer'],
          ['reactions','پیش‌نمایش واکنش و نگاشت','واکنش تکیه‌گاه‌ها را ببینید و حالت‌های انتخابی را به الگوهای بار SAFE وصل کنید.',['خواندن واکنش‌ها','نگاشت حالت‌ها به الگوها','مرور پیش‌نمایش'],'transfer'],
          ['approve','تأیید انتقال به SAFE','انتقال فقط پس از مرور و تأیید مهندس انجام می‌شود.',['مرور نگاشت','تأیید مقصد','تأیید انتقال'],'transfer']
        ],
        connections:[['beam','ابزارهای اتصال تیر','ابزار اتصال و داده‌های مربوط به آن را در محیط کاری SKYRoN مرور کنید.',['انتخاب اتصال','مرور مشخصات اعضا','دیدن داده‌های اتصال'],'joint']],
        ai:[['assistant','دستیار هوش مصنوعی در محیط کار','سؤال بپرسید، پاسخ را مرور کنید و دربارهٔ کاربرد آن در کار مهندسی تصمیم بگیرید.',['پرسش با زمینهٔ پروژه','مرور پاسخ','بررسی پیش از استفاده'],'assistant']]
      }
    }
  };
  let lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
  let selectedModule = 'steel', selectedTool = 0, selectedStage = 0;
  const tr = key => copy[lang][key];
  const activeData = (key = selectedModule) => copy[lang].tools[key];
  const labelsFor = key => lang === 'fa' ? copy.en.faTools[key] : copy.en.tools[key].map(x => x[1]);
  const moduleIds = Object.keys(copy.en.modules);
  function svgFor(kind, stage) {
    const frame = '<path class="scene-member" d="M170 90v305m145-305v305m145-305v305m145-305v305m145-305v305M170 160h580M170 245h580M170 330h580"/><path class="scene-highlight" d="M170 245 315 160l145 85 145-85 145 85"/><circle class="scene-node" cx="315" cy="160" r="9"/><circle class="scene-node node-late" cx="605" cy="160" r="9"/><rect class="scene-callout" x="640" y="105" width="210" height="64" rx="8"/><path class="scene-member thin" d="M660 128h150m-150 18h110"/>';
    const chart = '<path class="scene-axis" d="M140 390V105M140 390h690"/><path class="scene-chart" d="M175 345c75-5 96-45 154-60s86 31 145-18 67-17 123-76 107 4 182-67"/><path class="scene-reference" d="M140 218h690"/><circle class="scene-node" cx="597" cy="191" r="11"/><rect class="scene-callout" x="610" y="275" width="215" height="84" rx="8"/><path class="scene-member thin" d="M634 302h165m-165 20h122m-122 20h143"/>';
    const tank = '<ellipse class="scene-tank" cx="470" cy="220" rx="205" ry="70"/><path class="scene-tank" d="M265 220v115c0 38 92 70 205 70s205-32 205-70V220"/><ellipse class="scene-ring" cx="470" cy="335" rx="232" ry="83"/><ellipse class="scene-ring inner" cx="470" cy="335" rx="203" ry="68"/><path class="scene-highlight" d="M260 336a212 75 0 0 0 420 0"/><circle class="scene-node" cx="679" cy="337" r="10"/>';
    const joint = '<path class="scene-member" d="M360 80v370m-95-275h430m-430 190h430"/><path class="scene-plate" d="M336 230h48v65h-48zM545 177h90v24h-90zM545 354h90v24h-90z"/><circle class="scene-node" cx="360" cy="245" r="12"/><circle class="scene-node node-late" cx="360" cy="270" r="8"/><path class="scene-highlight" d="M360 245h150"/><rect class="scene-callout" x="580" y="95" width="220" height="65" rx="8"/><path class="scene-member thin" d="M600 119h170m-170 20h125"/>';
    const transfer = '<g class="transfer-source"><path class="scene-member" d="M125 155v230m70-230v230m70-230v230m-140-175h140m-140 80h140m-140 80h140"/><rect class="scene-callout" x="112" y="410" width="175" height="47" rx="7"/></g><path class="scene-route" d="M335 280h250m-38-28 38 28-38 28"/><g class="transfer-target"><path class="scene-tank" d="m655 220 100-58 100 58v142l-100 58-100-58zM655 220l100 57 100-57m-100 57v143m-100-78 100 62 100-62"/><rect class="scene-callout" x="662" y="410" width="185" height="47" rx="7"/></g><circle class="scene-node" cx="462" cy="280" r="11"/>';
    const assistant = '<rect class="scene-panel" x="235" y="70" width="490" height="370" rx="16"/><rect class="scene-callout" x="275" y="108" width="260" height="75" rx="10"/><path class="scene-member thin" d="M300 133h190m-190 23h145"/><rect class="scene-callout second" x="445" y="210" width="235" height="126" rx="10"/><path class="scene-chat" d="M470 244h175m-175 28h145m-145 28h158"/><circle class="scene-node" cx="294" cy="390" r="10"/>';
    const graphic = {frame,chart,tank,joint,transfer,assistant}[kind] || frame;
    return '<svg class="explainer-svg" viewBox="0 0 960 520" aria-hidden="true" data-stage="' + stage + '">' + graphic + '</svg>';
  }
  function makeScene(data, module, tool, stage) {
    const section = document.createElement('div'); section.className = 'explainer-scene'; section.dataset.kind = data[4]; section.dataset.stage = String(stage);
    const img = document.createElement('img'); img.src = 'assets/' + ({steel:'module-steel.jpg',analysis:'module-analysis.jpg',ring:'module-ring.jpg',builder:'module-builder.jpg',connections:'module-connections.jpg',ai:'module-ai.jpg'}[module]); img.alt = ''; img.loading = 'lazy';
    const veil = document.createElement('div'); veil.className = 'scene-veil';
    const art = document.createElement('div'); art.className = 'scene-vector'; art.innerHTML = svgFor(data[4], stage);
    const badge = document.createElement('span'); badge.className = 'scene-badge'; badge.textContent = tr('diagram');
    section.append(img, veil, art, badge); return section;
  }
  function makeButton(text, selected, click, cls) { const b=document.createElement('button'); b.type='button'; b.className=cls+(selected?' is-selected':''); b.textContent=text; b.setAttribute('aria-pressed',String(selected)); b.addEventListener('click',click); return b; }
  function buildExplorer(container, module, toolIndex, stage, modal) {
    const rows=activeData(module), data=rows[toolIndex]; if (!data) return;
    container.replaceChildren(); container.dataset.module=module;
    if (!modal) {
      const moduleBar=document.createElement('div'); moduleBar.className='explorer-modulebar';
      const moduleLabel=document.createElement('span'); moduleLabel.className='explorer-label'; moduleLabel.textContent=tr('chooseModule');
      const modules=document.createElement('div'); modules.className='explorer-modules';
      moduleIds.forEach(id=>modules.append(makeButton(tr('modules')[id],id===module,()=>{selectedModule=id;selectedTool=0;selectedStage=0;renderWorkflow()},'explorer-tab')));
      moduleBar.append(moduleLabel,modules); container.append(moduleBar);
    }
    const toolLabel=document.createElement('span'); toolLabel.className='explorer-label'; toolLabel.textContent=tr('chooseTool');
    const toolList=document.createElement('div'); toolList.className='explorer-tools';
    rows.forEach((row,i)=>toolList.append(makeButton(labelsFor(module)[i],i===toolIndex,()=>{if(modal){buildExplorer(container,module,i,0,true)}else{selectedTool=i;selectedStage=0;renderWorkflow()}},'explorer-tool')));
    const visual=makeScene(data,module,toolIndex,stage);
    const content=document.createElement('div'); content.className='explorer-content';
    const text=document.createElement('div'); text.className='explorer-copy';
    const title=document.createElement('h3'); title.textContent=data[1];
    const desc=document.createElement('p'); desc.textContent=data[2];
    const steps=document.createElement('div'); steps.className='explorer-stages';
    data[3].forEach((label,i)=>steps.append(makeButton((i+1).toString().padStart(2,'0')+'  '+label,i===stage,()=>{if(modal)buildExplorer(container,module,toolIndex,i,true);else{selectedStage=i;renderWorkflow()}},'stage-button')));
    const foot=document.createElement('div'); foot.className='explorer-foot';
    const badge=document.createElement('span'); badge.textContent=tr('engineerReview');
    const replay=makeButton(tr('replay'),false,()=>{visual.classList.remove('is-replaying');void visual.offsetWidth;visual.classList.add('is-replaying');},'replay-button');
    foot.append(badge,replay); text.append(title,desc,steps,foot); content.append(visual,text);
    container.append(toolLabel,toolList,content);
  }
  function renderWorkflow() { const host=$('#workflowExplorer'); if(host) buildExplorer(host,selectedModule,selectedTool,selectedStage,false); }
  function installWorkflow() {
    const old=$('.workflow-layout'); if(old) old.hidden=true;
    const heading=$('#workflow .section-heading'); if(!heading)return;
    let host=$('#workflowExplorer'); if(!host){host=document.createElement('div');host.id='workflowExplorer';host.className='workflow-explorer';heading.insertAdjacentElement('afterend',host)}
    renderWorkflow();
  }
  function installPlant() {
    const visual=$('#heroVisual'); if(!visual)return;
    $$('.plant-hotspots,.plant-sector-panel',visual).forEach(x=>x.remove());
    const note=$('.model-note',visual); if(note) note.remove();
    const layer=document.createElement('div'); layer.className='plant-hotspots'; layer.setAttribute('aria-label',tr('regionHelp'));
    const targets=[['tank','tank',['ring']],['rack','rack',['steel','connections']],['process','process',['steel','analysis']],['building','building',['steel','analysis','builder']],['power','power',['steel','analysis']]];
    const coords={tank:[23,61],rack:[47,55],process:[57,34],building:[68,66],power:[88,55]};
    targets.forEach(([id,label,modules])=>{const b=document.createElement('button');b.type='button';b.className='plant-hotspot';b.dataset.region=id;b.style.left=coords[id][0]+'%';b.style.top=coords[id][1]+'%';b.setAttribute('aria-label',tr('region')[label]);const dot=document.createElement('i');const tip=document.createElement('span');tip.textContent=tr('region')[label];b.append(dot,tip);b.addEventListener('pointerenter',()=>showSector(id,modules));b.addEventListener('focus',()=>showSector(id,modules));b.addEventListener('click',()=>showSector(id,modules));layer.append(b)});
    const panel=document.createElement('div');panel.className='plant-sector-panel';panel.id='plantSectorPanel';
    const message=document.createElement('p');message.textContent=tr('regionHelp');panel.append(message);
    visual.append(layer,panel);
    function showSector(id,modules){const p=$('#plantSectorPanel');p.replaceChildren();const title=document.createElement('strong');title.textContent=tr('region')[id];const links=document.createElement('div');links.className='plant-module-links';modules.forEach(module=>links.append(makeButton(tr('moduleNames')[module],false,()=>{selectedModule=module;selectedTool=0;selectedStage=0;$('#workflow').scrollIntoView({behavior:'smooth'});renderWorkflow()},'plant-explore')));p.append(title,links);$$('.plant-hotspot',visual).forEach(x=>x.classList.toggle('is-active',x.dataset.region===id));}
  }
  function installCompatibility() {
    $('.compatibility-strip')?.remove();
    const first=$('.connection-strip:not(.compatibility-strip):not(.installer-strip)'); if(!first)return;
    first.classList.add('compatibility-reframed');
    const inner=$('.connection-inner',first); if(!inner)return;
    const brand=$('.connection-tools',inner); const title=$('[data-i18n="connectionTitle"]',inner); const note=$('.connection-footnote',inner);
    inner.replaceChildren();
    const copybox=document.createElement('div');copybox.className='compatibility-copy';const h=document.createElement('h2');h.textContent=tr('compatTitle');const p=document.createElement('p');p.textContent=tr('compatBody');copybox.append(h,p);
    const grid=document.createElement('div');grid.className='compatibility-grid';
    [['SAP2000','sap'],['SAFE','safe'],['ETABS','etabs']].forEach(([name,key])=>{const card=document.createElement('div');card.className='compatibility-card';const logo=document.createElement('strong');logo.textContent=name;const state=document.createElement('span');state.className='compatibility-state';state.textContent=tr('compatState')[key];const desc=document.createElement('small');desc.textContent=tr('compatText')[key];card.append(logo,state,desc);grid.append(card)});
    inner.append(copybox,grid);
  }
  function installCreators() {
    const footer=$('.site-footer');if(!footer)return;
    $('#creators')?.remove(); $$('.creator-nav').forEach(x=>x.remove());
    const footerMark=$('.footer-top .brand-mark',footer);
    if(footerMark?.tagName.toLowerCase()==='svg'){const img=document.createElement('img');img.className='brand-mark';img.src='assets/skyron-app-icon.png';img.width=40;img.height=40;img.alt='';img.loading='lazy';footerMark.replaceWith(img)}
    const section=document.createElement('section');section.id='creators';section.className='creators-section';
    const wrap=document.createElement('div');wrap.className='container creators-inner';
    const heading=document.createElement('div');heading.className='creators-heading';const eyebrow=document.createElement('span');eyebrow.className='section-number mono';eyebrow.textContent=tr('creators');const h=document.createElement('h2');h.textContent=tr('creatorsTitle');const p=document.createElement('p');p.textContent=tr('creatorsIntro');heading.append(eyebrow,h,p);
    const people=document.createElement('div');people.className='creator-grid';[['Shahin Manouchehri','SM'],['Farideh Ferdowsi','FF']].forEach(([name,initials],index)=>{const card=document.createElement('article');card.className='creator-card';const mark=document.createElement('span');mark.className='creator-monogram';mark.textContent=initials;mark.setAttribute('aria-hidden','true');const n=document.createElement('strong');n.textContent=name;const role=document.createElement('small');role.textContent=tr('creatorRole');card.append(mark,n,role);if(index===0){const contacts=document.createElement('div');contacts.className='creator-contacts';const email=document.createElement('a');email.href='mailto:shahin.ma49@gmail.com';email.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7"/></svg><span>shahin.ma49@gmail.com</span>';const linkedin=document.createElement('a');linkedin.href='https://www.linkedin.com/in/shahin-manouchehri/';linkedin.target='_blank';linkedin.rel='noopener noreferrer';linkedin.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5A1.5 1.5 0 1 1 5 6.5a1.5 1.5 0 0 1 0-3ZM3.8 8.5h2.4V20H3.8zm5 0h2.3v1.6h.1a2.6 2.6 0 0 1 2.4-1.8c2.6 0 3.1 1.7 3.1 4V20h-2.4v-6.8c0-1.6-.1-2.8-1.7-2.8s-1.9 1.3-1.9 2.7V20H8.8z"/></svg><span>LinkedIn</span>';contacts.append(email,linkedin);card.append(contacts)}people.append(card)});
    wrap.append(heading,people);section.append(wrap);footer.before(section);
    $$('.desktop-nav,.mobile-menu').forEach(nav=>{const a=document.createElement('a');a.href='#creators';a.className='creator-nav';a.textContent=tr('creators');nav.append(a)});
  }
  function installDownloadState(){const p=$('.hero-platform');if(!p)return;p.classList.add('download-disabled-row');p.replaceChildren();const icon=document.createElement('span');icon.className='download-disabled-icon';icon.textContent='▦';const b=document.createElement('button');b.type='button';b.className='download-disabled';b.disabled=true;b.textContent=tr('disabledDownload');const version=document.createElement('span');version.className='disabled-version mono';version.textContent='v2.2.1';const note=document.createElement('small');note.textContent=tr('downloadNote');p.append(icon,b,version,note);}
  function enhanceDialog(event){const trigger=event.target.closest('[data-details]');if(!trigger)return;event.preventDefault();event.stopImmediatePropagation();selectedModule=trigger.dataset.details;selectedTool=0;selectedStage=0;const dialog=$('#moduleDialog'),body=$('#moduleDialogContent');body.replaceChildren();const wrap=document.createElement('div');wrap.className='module-explorer-modal';const close=$('[data-close-dialog]',dialog);if(close)close.setAttribute('aria-label',lang==='fa'?'بستن':'Close');const heading=document.createElement('div');heading.className='modal-module-heading';const title=document.createElement('h2');title.textContent=tr('modules')[selectedModule];heading.append(title);wrap.append(heading);const host=document.createElement('div');host.className='modal-explorer';wrap.append(host);body.append(wrap);buildExplorer(host,selectedModule,selectedTool,selectedStage,true);dialog.showModal();}
  function updateLanguage(){lang=document.documentElement.lang==='fa'?'fa':'en';const w=$('#workflow');if(w){const h=$('[data-i18n="workflowTitle"]',w),p=$('[data-i18n="workflowIntro"]',w);if(h)h.textContent=tr('workflowTitle');if(p)p.textContent=tr('workflowIntro');}installDownloadState();installPlant();installCompatibility();installCreators();installWorkflow();}
  document.addEventListener('click',enhanceDialog,true);
  new MutationObserver(updateLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  updateLanguage();
})();

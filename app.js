const courses = [
  {
    "title": "11210NAT Diploma of Entrepreneurship and Innovation",
    "url": "https://laneway.edu.au/diploma-of-entrepreneurship-and-innovation-ver-2/",
    "category": "Business"
  },
  {
    "title": "BSB50620 Diploma of Marketing and Communication",
    "url": "https://laneway.edu.au/diploma-of-marketing-and-communication/",
    "category": "Business"
  },
  {
    "title": "ICT50220 Diploma of Information Technology Coding",
    "url": "https://laneway.edu.au/diploma-of-information-technology-coding-ict50120/",
    "category": "Technology"
  },
  {
    "title": "BSB50420 Diploma of Leadership and Management",
    "url": "https://laneway.edu.au/diploma-of-leadership-and-management/",
    "category": "Business"
  },
  {
    "title": "ICT50220 Diploma of Information Technology Cyber",
    "url": "https://laneway.edu.au/diploma-of-information-technology-cyber-ict50120/",
    "category": "Technology"
  },
  {
    "title": "CPC30220 Certificate III in Carpentry",
    "url": "https://laneway.edu.au/cpc30220-certificate-iii-in-carpentry/",
    "category": "Trade"
  },
  {
    "title": "Certificate III in Glass and Glazing",
    "url": "https://laneway.edu.au/certificate-iii-in-glass-and-glazing/",
    "category": "Trade"
  },
  {
    "title": "Certificate IV in Glass and Glazing",
    "url": "https://laneway.edu.au/certificate-iv-in-glass-and-glazing/",
    "category": "Trade"
  },
  {
    "title": "MSF30322 Certificate III in Cabinet Making and Timber Technology",
    "url": "https://laneway.edu.au/msf30322-certificate-iii-in-cabinet-making-and-timber-technology/",
    "category": "Trade"
  },
  {
    "title": "CPC30620 Certificate III in Painting and Decorating",
    "url": "https://laneway.edu.au/cpc30620-certificate-iii-in-painting-and-decorating/",
    "category": "Trade"
  },
  {
    "title": "CPC50220 Diploma of Building and Construction (Building)",
    "url": "https://laneway.edu.au/cpc50220-diploma-of-building-and-construction-building/",
    "category": "Trade"
  },
  {
    "title": "RII60520 Advanced Diploma of Civil Construction Design",
    "url": "https://laneway.edu.au/rii60520-advanced-diploma-of-civil-construction-design/",
    "category": "Trade"
  },
  {
    "title": "Certificate III in Wall and Floor Tiling",
    "url": "https://laneway.edu.au/certificate-iii-in-wall-and-floor-tiling/",
    "category": "Trade"
  },
  {
    "title": "Certificate III in Bricklaying and Blocklaying",
    "url": "https://laneway.edu.au/certificate-iii-in-bricklaying-and-blocklaying/",
    "category": "Trade"
  },
  {
    "title": "BSB40120 Certificate IV in Business",
    "url": "https://laneway.edu.au/certificate-iv-in-business/",
    "category": "Business"
  },
  {
    "title": "BSB40820 Certificate IV in Marketing and Communication",
    "url": "https://laneway.edu.au/bsb40820-certificate-iv-in-marketing-and-communication/",
    "category": "Business"
  },
  {
    "title": "BSB60520 Advanced Diploma of Marketing and Communication",
    "url": "https://laneway.edu.au/advanced-diploma-of-marketing-and-communication/",
    "category": "Business"
  },
  {
    "title": "BSB60420 Advanced Diploma of Leadership and Management",
    "url": "https://laneway.edu.au/advanced-diploma-of-leadership-and-management/",
    "category": "Business"
  },
  {
    "title": "BSB80120 Graduate Diploma of Management (Learning)",
    "url": "https://laneway.edu.au/bsb80120-graduate-diploma-of-management-learning/",
    "category": "Business"
  },
  {
    "title": "BSB80320 Graduate Diploma of Strategic Leadership",
    "url": "https://laneway.edu.au/bsb80320-graduate-diploma-of-strategic-leadership/",
    "category": "Business"
  },
  {
    "title": "BSB50820 Diploma of Project Management",
    "url": "https://laneway.edu.au/diploma-of-project-management-bsb51415-2/",
    "category": "Business"
  },
  {
    "title": "ICT60220 Advanced Diploma of Information Technology",
    "url": "https://laneway.edu.au/ict60220-advanced-diploma-of-information-technology/",
    "category": "Technology"
  }
];
const grid=document.querySelector('#course-grid');
const status=document.querySelector('#course-status');
const more=document.querySelector('#show-all');
const search=document.querySelector('#course-search');
let filter='All', expanded=false;
const dialog=document.querySelector('#course-dialog');
function renderCourses(){
 const matching=courses.filter(c=>(filter==='All'||c.category===filter)&&c.title.toLowerCase().includes(search.value.trim().toLowerCase()));
 const visible=expanded||filter!=='All'||search.value?matching:matching.slice(0,6);
 grid.replaceChildren();
 visible.forEach(c=>{
  const card=document.createElement('button');card.className='course-card';card.dataset.category=c.category.toLowerCase();
  const match=c.title.match(/\b(?:[A-Z]{3}\d{5}|\d{5}NAT)\b/);
  const title=c.title.replace(/\b(?:[A-Z]{3}\d{5}|\d{5}NAT)\b/g,'').trim();
  const category=document.createElement('span');category.className='category';category.textContent=c.category==='Business'?'Business & leadership':c.category==='Trade'?'Trades & construction':'Digital & technology';
  const heading=document.createElement('h3');heading.textContent=title;
  const code=document.createElement('span');code.className='code';code.textContent=match?match[0]:'Explore qualification';
  const arrow=document.createElement('span');arrow.className='arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
  card.append(category,heading,code,arrow);card.addEventListener('click',()=>{document.querySelector('#dialog-category').textContent=category.textContent;document.querySelector('#dialog-title').textContent=c.title;document.querySelector('#dialog-link').href=c.url;dialog.showModal();});grid.append(card);
 });
 status.textContent=matching.length?`Showing ${visible.length} of ${matching.length} qualifications`:'No courses found. Try another keyword or category.';
 more.hidden=filter!=='All'||!!search.value||matching.length<=6;
 more.style.display=more.hidden?'none':'flex';more.innerHTML=expanded?'Show featured qualifications <span>↑</span>':'View all qualifications <span>↗</span>';
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderCourses();}));
search.addEventListener('input',renderCourses);more.addEventListener('click',()=>{expanded=!expanded;renderCourses();if(!expanded)document.querySelector('#courses').scrollIntoView();});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
document.querySelector('#year').textContent=new Date().getFullYear();renderCourses();

// Hero carousel: reduced-motion users start with automatic playback off.
const heroSlides=[...document.querySelectorAll('.hero-slide')];
const slideDots=[...document.querySelectorAll('.slide-dots button')];
const pauseSlide=document.querySelector('#slide-pause');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide=0, slideshowPaused=motionPreference.matches, slideshowTimer;
const slideNames=['Your own path','Collaboration','Learning together','Sydney'];
function showSlide(index,announce=false){
 currentSlide=(index+heroSlides.length)%heroSlides.length;
 heroSlides.forEach((slide,i)=>slide.classList.toggle('is-active',i===currentSlide));
 slideDots.forEach((dot,i)=>{dot.classList.toggle('is-active',i===currentSlide);dot.setAttribute('aria-pressed',String(i===currentSlide));});
 document.querySelector('.slide-count').textContent=`0${currentSlide+1} / 0${heroSlides.length}`;
 if(announce)document.querySelector('#slide-announcement').textContent=`Image ${currentSlide+1} of ${heroSlides.length}: ${slideNames[currentSlide]}`;
}
function scheduleSlides(){clearInterval(slideshowTimer);if(!slideshowPaused&&!document.hidden)slideshowTimer=setInterval(()=>showSlide(currentSlide+1),6500);}
function syncPlayback(){pauseSlide.textContent=slideshowPaused?'▷':'Ⅱ';pauseSlide.setAttribute('aria-label',slideshowPaused?'Play slideshow':'Pause slideshow');scheduleSlides();}
function manualSlide(index){showSlide(index,true);slideshowPaused=true;syncPlayback();}
document.querySelector('#slide-prev').addEventListener('click',()=>manualSlide(currentSlide-1));
document.querySelector('#slide-next').addEventListener('click',()=>manualSlide(currentSlide+1));
slideDots.forEach((dot,i)=>dot.addEventListener('click',()=>manualSlide(i)));
pauseSlide.addEventListener('click',()=>{slideshowPaused=!slideshowPaused;syncPlayback();});
document.addEventListener('visibilitychange',scheduleSlides);
motionPreference.addEventListener('change',()=>{if(motionPreference.matches){slideshowPaused=true;syncPlayback();}});
syncPlayback();

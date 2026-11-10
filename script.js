document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');let f=b.dataset.filter;document.querySelectorAll('.card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.type!==f));}));document.querySelector('.burger').addEventListener('click',()=>{let n=document.querySelector('nav');n.style.display=n.style.display==='flex'?'none':'flex';n.style.position='absolute';n.style.top='65px';n.style.left='0';n.style.right='0';n.style.padding='22px';n.style.background='#111313';n.style.flexDirection='column';n.style.alignItems='center'});
// Lightbox: images open over the current page, not in a new tab
(()=>{
 const box=document.querySelector('#lightbox'), pic=box.querySelector('.lightbox-img'), cap=box.querySelector('.lightbox-caption');
 const links=[...document.querySelectorAll('a[data-lightbox]')]; let idx=0;
 function show(i){idx=(i+links.length)%links.length;const a=links[idx];pic.src=a.href;pic.alt=a.querySelector('img')?.alt||'';cap.textContent=a.closest('.card')?.querySelector('h3')?.textContent||'';box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.classList.add('lightbox-open')}
 function close(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.classList.remove('lightbox-open');pic.src=''}
 links.forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();show(i)}));
 box.querySelector('.lightbox-close').addEventListener('click',close);
 box.querySelector('.lightbox-prev').addEventListener('click',()=>show(idx-1));
 box.querySelector('.lightbox-next').addEventListener('click',()=>show(idx+1));
 box.addEventListener('click',e=>{if(e.target===box)close()});
 document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});
})();

// Mobile navigation toggle
(()=>{
 const burger=document.querySelector('.burger'), nav=document.querySelector('header nav');
 if(!burger||!nav)return;
 burger.addEventListener('click',()=>{
   const opened=nav.classList.toggle('mobile-open');
   burger.setAttribute('aria-expanded',String(opened));
   burger.textContent=opened?'×':'☰';
 });
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
   nav.classList.remove('mobile-open');burger.setAttribute('aria-expanded','false');burger.textContent='☰';
 }));
})();

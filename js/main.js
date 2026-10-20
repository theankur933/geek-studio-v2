// navbar shadow on scroll
const nav=document.querySelector('.navbar');
const onScroll=()=>nav.classList.toggle('scrolled',scrollY>30);
addEventListener('scroll',onScroll);onScroll();

// close mobile menu after click
document.querySelectorAll('.navbar .nav-link').forEach(l=>l.addEventListener('click',()=>{
  const c=document.getElementById('menu');
  if(c.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(c).hide();
}));

// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});

// count-up stats
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;co.unobserve(e.target);
  const n=e.target,end=+n.dataset.to,suf=n.dataset.suf||'',t0=performance.now();
  const tick=t=>{const p=Math.min((t-t0)/1500,1);n.textContent=Math.floor(end*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(tick);else n.textContent=end+suf};
  requestAnimationFrame(tick);
}),{threshold:.6});
document.querySelectorAll('[data-to]').forEach(n=>co.observe(n));

// demo form
document.getElementById('lead').addEventListener('submit',e=>{
  e.preventDefault();
  const b=e.target.querySelector('button');
  b.innerHTML='<i class="bi bi-check-circle-fill me-2"></i>Thanks! We\'ll be in touch';
  b.disabled=true;
});

(()=>{
const stages=[
'Understand the objective, audience, environment and constraints before deciding what the event needs to become.',
'Turn the brief into a practical programme, production plan, supplier structure and timeline.',
'Bring creative, venue, technical, entertainment and operational elements together before doors open.',
'Coordinate people and timing so every department knows what happens next and when.',
'Deliver the experience with the complexity kept behind the scenes.'
];
const tabs=[...document.querySelectorAll('.sequence-tab')],stageText=document.getElementById('stageText'),stageCounter=document.getElementById('stageCounter');
tabs.forEach((tab,i)=>tab.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));tab.classList.add('active');stageText.textContent=stages[i];stageCounter.textContent=`0${i+1} / 05`}));

const track=document.getElementById('workTrack'),prev=document.getElementById('workPrev'),next=document.getElementById('workNext'),progress=document.getElementById('workProgress');
if(track){const step=()=>{const card=track.querySelector('.project');return card?card.getBoundingClientRect().width+16:700};const move=d=>track.scrollBy({left:step()*d,behavior:'smooth'});prev?.addEventListener('click',()=>move(-1));next?.addEventListener('click',()=>move(1));track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}});const update=()=>{const max=Math.max(1,track.scrollWidth-track.clientWidth);progress.style.width=`${25+(track.scrollLeft/max)*75}%`};track.addEventListener('scroll',update,{passive:true});update();let down=false,startX=0,startScroll=0;track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){down=true;startX=e.clientX;startScroll=track.scrollLeft;track.setPointerCapture(e.pointerId)}});track.addEventListener('pointermove',e=>{if(down)track.scrollLeft=startScroll-(e.clientX-startX)});track.addEventListener('pointerup',()=>down=false);track.addEventListener('pointercancel',()=>down=false)}

const caps=[...document.querySelectorAll('.cap')],capImage=document.getElementById('capImage');caps.forEach(btn=>{const activate=()=>{caps.forEach(x=>x.classList.remove('active'));btn.classList.add('active');if(!capImage||!btn.dataset.img)return;capImage.style.opacity='.25';setTimeout(()=>{capImage.src=btn.dataset.img;capImage.style.opacity='1'},120)};btn.addEventListener('mouseenter',activate);btn.addEventListener('focus',activate);btn.addEventListener('click',activate)});

const cueRows=[...document.querySelectorAll('.cue-row')],cue=document.getElementById('cueSheet');if(cue&&'IntersectionObserver'in window){let timer;const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){let i=0;clearInterval(timer);cueRows.forEach(x=>x.classList.remove('live'));cueRows[0]?.classList.add('live');timer=setInterval(()=>{cueRows.forEach(x=>x.classList.remove('live'));i=(i+1)%cueRows.length;cueRows[i].classList.add('live')},1800)}else{clearInterval(timer)}})},{threshold:.45});observer.observe(cue)}
})();

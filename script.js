(()=>{
const work=[
{img:'https://www.2cool.com.my/wp-content/gallery/final/LowRes_IMG_0301.jpg',caption:'Corporate ceremony / 01',alt:'2COOL corporate event production'},
{img:'https://www.2cool.com.my/wp-content/gallery/final/10854289_732862153459192_1084739008257308036_o.jpg',caption:'Brand experience / 02',alt:'2COOL branded event production'},
{img:'https://www.2cool.com.my/wp-content/gallery/final/LowRes_IMG_6431.jpg',caption:'Live production / 03',alt:'2COOL live event stage production'},
{img:'https://www.2cool.com.my/wp-content/gallery/final/10847973_735654553179952_259177800306968861_n.jpg',caption:'Event environment / 04',alt:'2COOL event environment'}
];
const items=[...document.querySelectorAll('.work-item')],image=document.getElementById('workImage'),caption=document.getElementById('workCaption');
items.forEach((item,i)=>{const activate=()=>{if(item.classList.contains('active'))return;items.forEach(x=>x.classList.remove('active'));item.classList.add('active');const next=work[i];if(!image)return;image.style.opacity='.18';setTimeout(()=>{image.src=next.img;image.alt=next.alt;if(caption)caption.textContent=next.caption;image.style.opacity='1'},140)};item.addEventListener('mouseenter',activate);item.addEventListener('focus',activate);item.addEventListener('click',activate)});
})();

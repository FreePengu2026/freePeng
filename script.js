const canvas=document.getElementById('snow');
const ctx=canvas.getContext('2d');
let flakes=[];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;flakes=Array.from({length:90},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+0.8,s:Math.random()*0.7+0.25,w:Math.random()*0.6-0.3}));}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(224,242,254,.8)';flakes.forEach(f=>{ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill();f.y+=f.s;f.x+=f.w;if(f.y>canvas.height){f.y=-5;f.x=Math.random()*canvas.width;}});requestAnimationFrame(draw)}
addEventListener('resize',resize);resize();draw();
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

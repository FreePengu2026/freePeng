const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');
let flakes = [];
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
function reset(){ flakes = Array.from({length: 90}, () => ({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+1,s:Math.random()*0.8+0.3})); }
function draw(){ ctx.clearRect(0,0,canvas.width,canvas.height); ctx.globalAlpha=.75; ctx.fillStyle='white'; flakes.forEach(f=>{ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,Math.PI*2);ctx.fill();f.y+=f.s;f.x+=Math.sin(f.y/40)*0.25;if(f.y>innerHeight){f.y=-5;f.x=Math.random()*innerWidth}}); requestAnimationFrame(draw); }
addEventListener('resize',()=>{resize();reset();}); resize(); reset(); draw();

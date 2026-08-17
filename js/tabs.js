const tabs=document.querySelectorAll('.tab');
const panels={
  vraag:document.getElementById('p-vraag'),
  hoe:document.getElementById('p-hoe'),
  nazorg:document.getElementById('p-nazorg'),
  herkenning:document.getElementById('p-herkenning'),
  plan:document.getElementById('p-plan'),
  eerlijk:document.getElementById('p-eerlijk')
};
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  Object.values(panels).forEach(p=>p.classList.remove('active'));
  panels[t.dataset.t].classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(t.dataset.t==='nazorg') playChat();
}));

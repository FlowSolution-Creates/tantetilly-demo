const s1=document.getElementById('s1'),s2=document.getElementById('s2'),s3=document.getElementById('s3');
function calc(){
  const g=+s1.value, b=+s2.value, st=+s3.value;
  document.getElementById('v1').textContent=g;
  document.getElementById('v2').textContent='€'+b;
  document.getElementById('v3').textContent='+'+st+'%';
  const extraGasten=(g*52)*(st/100);
  const bezoeken=Math.round(extraGasten*2);
  const omzet=Math.round(bezoeken*b);
  document.getElementById('out').textContent='€'+omzet.toLocaleString('nl-NL');
  document.getElementById('outsub').textContent=bezoeken.toLocaleString('nl-NL')+' extra bezoeken per jaar';
  document.getElementById('outweek').textContent=Math.max(1,Math.round(bezoeken/52));
}
[s1,s2,s3].forEach(s=>s.addEventListener('input',calc));
calc();

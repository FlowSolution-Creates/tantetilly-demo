let played=false;
function playChat(){
  if(played) return; played=true;
  document.querySelectorAll('#chat .bub, #chat .chip[data-d]').forEach(el=>{
    setTimeout(()=>el.classList.add('show'), parseInt(el.getAttribute('data-d')||0));
  });
}
window.addEventListener('load',()=>setTimeout(playChat,400));

const toggle=document.getElementById('theme-toggle');
if(toggle){ toggle.onclick=()=>document.body.classList.toggle('dark'); }

const menuBtn=document.getElementById('menu-toggle');
const nav=document.getElementById('nav');
if(menuBtn){ menuBtn.onclick=()=>nav.classList.toggle('active'); }

// Contact form backend connection
const form=document.getElementById('contact-form');
if(form){
form.addEventListener('submit', async(e)=>{
 e.preventDefault();
 const data=Object.fromEntries(new FormData(form));
 const res=await fetch('http://localhost:3000/contact',{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify(data)
 });
 document.getElementById('status').innerText='Message sent!';
 form.reset();
});}

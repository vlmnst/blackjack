const miModulo=(()=>{"use strict";let e=[],t=[],l=["C","D","H","S"],r=["A","J","Q","K"],a=(e=2)=>{d(),t=[];for(let l=0;l<e;l++)t.push(0);u.forEach(e=>e.innerText=0),$.forEach(e=>e.innerHTML=""),c.disabled=!1,i.disabled=!1},d=()=>{e=[];for(let t=2;t<=10;t++)for(let a of l)e.push(t+a);for(let d of l)for(let n of r)e.push(n+d);return e=_.shuffle(e)},n=()=>e.pop(),o=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},s=document.querySelector("#btnNuevoJuego"),i=document.querySelector("#btnDetener"),c=document.querySelector("#btnPedir"),u=document.querySelectorAll("small"),$=document.querySelectorAll(".divCartas"),b=(e,l)=>(t[l]+=o(e),u[l].innerText=t[l],t[l]),f=(e,t)=>{let l=document.createElement("img");l.src=`cartas/${e}.png`,l.classList.add("carta"),$[t].append(l)},g=()=>{let[e,l]=t;setTimeout(()=>l===e?alert("Nadie gana"):e>21?alert("Ha ganado el computador"):l>21?alert("Has ganado!"):void alert("Computadora gana"),100)},h=e=>{let l=0;do{let r=n();l=b(r,t.length-1),f(r,t.length-1)}while(l<e&&e<=21);g()};return c.addEventListener("click",()=>{let e=n(),t=b(e,0);f(e,0),t>21?(c.disabled=!0,i.disabled=!0,h(t)):21===t&&(c.disabled=!0,i.disabled=!0,h(t))}),i.addEventListener("click",()=>{h(t[0]),c.disabled=!0,i.disabled=!0}),s.addEventListener("click",()=>{a()}),{nuevoJuego:a}})();
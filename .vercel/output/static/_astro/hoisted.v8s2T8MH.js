import"./categoria.astro_astro_type_script_index_0_lang.f7mQuCtM.js";const p=document.getElementById("contenitore");let u=p.innerText.trim();p.innerHTML=u;const n=document.getElementById("namegenere");let e=window.location.href,i=window.location.origin,o=window.location.pathname,s=n.innerText;if(n.innerText.includes("?page=")||n.innerText.includes("/")){let t=s.replaceAll("?page=","");n.innerText=t.replaceAll("/","")}const g=document.getElementById("pagina");if(e.includes("?page=")){let t=e.replaceAll(i+o+"?page=","");g.innerText="Pagina Numero: "+t}else g.innerText="Pagina Numero: 1";const w=document.getElementById("successivo"),f=document.getElementById("precendente");w.addEventListener("click",t=>{if(e.includes("?page=")){let a=+e.replaceAll(i+o+"?page=","")+1;window.location.href="/categoria/"+s+"?page="+a}else window.location.href=i+o+"?page=2"});f.addEventListener("click",t=>{if(e==i+o+"?page=2")window.location.href="/categoria/"+n.innerText.replaceAll("?page=","");else{let a=+e.replaceAll(i+o+"?page=","")-1;window.location.href="/categoria/"+n.innerText+"/?page="+a}});const y=document.getElementById("successivo2"),h=document.getElementById("precendente2");y.addEventListener("click",t=>{if(e.includes("?page=")){let a=+e.replaceAll(i+o+"?page=","")+1;window.location.href="/categoria/"+s+"?page="+a}else window.location.href=i+o+"?page=2"});h.addEventListener("click",t=>{if(e==i+o+"?page=2")window.location.href="/categoria/"+n.innerText.replaceAll("?page=","");else{let a=+e.replaceAll(i+o+"?page=","")-1;window.location.href="/categoria/"+n.innerText+"/?page="+a}});e.includes("NaN")&&(window.location.href="/categoria/"+n.innerText.replaceAll("NaN",""));const l=document.getElementById("categoria"),x=document.getElementById("ultimiep"),c=document.getElementById("bottoni"),d=document.getElementById("barra");l.removeAttribute("style");d.removeAttribute("style");d.addEventListener("click",t=>{window.innerWidth<840&&(x.style.color="transparent",c.style.width="3.4rem",c.style.height="0",l.style.transform="scaleY(1)",l.style.display="flex",l.style.position="absolute",l.style.top="0",l.style.left="0")});let m=window.innerWidth;m>840&&(l.removeAttribute("style"),d.removeAttribute("style"));m<840&&(c.style.display="none");window.addEventListener("resize",t=>{let r=window.innerWidth;r>840&&(l.removeAttribute("style"),d.removeAttribute("style")),r<840&&(c.style.display="none")});

import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead } from '../astro_YPnsezSN.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                            */
import 'clsx';
import axios from 'axios';
import jsdom from 'jsdom';

const $$Astro$3 = createAstro();
const $$Generi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Generi;
  return renderTemplate`${maybeRenderHead()}<div id="all" class="contenitoregenerimain"> <div class="btncontenitore btngen"> <button id="button3">Generi</button> </div> <div class="filler"></div> <div id="generi" class="contenitore-generi"> <div> <p id="home2">Home</p> <p>Arti Marziali</p> <p>Action</p> <p>Demoni</p> <p>Fantasy</p> <p>Hentai</p> <p>Magic</p> <p>Mistery</p> <p>Police</p> <p>Samurai</p> <p>Seinen</p> <p>Shoujo Ai</p> </div> <div> <p>Slice of Life</p> <p>Sports</p> <p>Thriller</p> <p>Yaoi</p> <p>Avanguardia</p> <p>Bambini</p> <p>Drama</p> <p>Game</p> <p>Horror</p> <p>Mecha</p> <p>Music</p> </div> <div> <p>Psychological</p> <p>Sci-fi</p> <p>Sentimental</p> <p>Shounen</p> <p>Space</p> <p>Historical</p> <p>Vampire</p> <p>Yuri</p> <p>Adventure</p> <p>Commedia</p> <p>Ecchi</p> </div> <div> <p>Harem</p> <p>Josei</p> <p>Military</p> <p>Parody</p> <p>Romance</p> <p>School</p> <p>Shoujo</p> <p>Shounen Ai</p> <p>Supernatural</p> <p>Super Power</p> <p>Veicoli</p> </div> </div> </div> `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/generi.astro", void 0);

const $$Astro$2 = createAstro();
const $$Categoria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Categoria;
  return renderTemplate`${maybeRenderHead()}<div id="all2" class="contenitorecategoriamain"> <div class="btncontenitore"> <button id="button2">Categoria</button> </div> <div class="filler"></div> <div id="categoria" class="contenitore-categoria"> <div> <p id="home1">Home</p> <p>Animes</p> <p>Movies</p> <p>OVA</p> <p>ONA</p> <p>Specials</p> <p>Music</p> </div> </div>  </div>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/categoria.astro", void 0);

const logo = new Proxy({"src":"/_astro/AnimeCrack.I1gAl3wg.png","width":1040,"height":118,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/img/AnimeCrack.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Barratop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Barratop;
  return renderTemplate`${maybeRenderHead()}<div class="navbar"> <div class="contenitorebarra"> <div class="barra-1"> <div class="topcontainer"> <a href="/"> <img${addAttribute(logo.src, "src")} class="logo"> </a> </div> <div class="input"> <input class="input2" id="cerca1" placeholder="Cerca..."> <button class="svgbtn" id="cerca2"> <svg class="svg-in" type="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg> </button> </div> <div class="topcontainer2"> <a href="https://www.youtube.com/@Simone2611/videos"> <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="yt"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path></svg> </a> <a id="barra"> <svg class="svg-in2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg> </a> </div> </div> <div id="bottoni" class="bottonitop"> <button id="home" class="homebtn">Home</button> ${renderComponent($$result, "Generi", $$Generi, {})} <button id="nuoveAgg">Nuove aggiunte</button> <button id="ultimiep">Ultimi episodi</button> <button id="incorso">Anime in corso</button> ${renderComponent($$result, "Categoria", $$Categoria, {})} <button id="random">Random</button> <button id="upcoming">Upcoming</button> </div> <div class="search" id="search"></div> </div> </div> `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/barratop.astro", void 0);

const img = new Proxy({"src":"/_astro/wallpaper.LnUUBWN-.webp","width":1920,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/img/wallpaper.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$categoria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categoria;
  const { JSDOM } = jsdom;
  let arr = [];
  let categoria = Astro2.request.url;
  let categoriafix = categoria.replaceAll(Astro2.url.origin + "/categoria/", "");
  let categoriafix2 = categoriafix.replaceAll(/\d+/g, "");
  let nome = categoriafix2.replaceAll("?page=", "");
  await axios.get("https://www.animeworld.so/" + categoriafix).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll(
      ".film-list > .item > .inner"
    );
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      if (fixed.includes('<div class="dub">DUB</div>')) {
        fixed = fixed.replace('<div class="dub">DUB</div>', "");
      }
      if (fixed.includes('<div class="ova">OVA</div>')) {
        fixed = fixed.replace('<div class="ova">OVA</div>', "");
      }
      if (fixed.includes('<div class="ona">ONA</div>')) {
        fixed = fixed.replace('<div class="ona">ONA</div>', "");
      }
      if (fixed.includes('<div class="movie">Movie</div>')) {
        fixed = fixed.replace('<div class="movie">Movie</div>', "");
      }
      if (fixed.includes('<div class="special">Special</div>')) {
        fixed = fixed.replace('<div class="special">Special</div>', "");
      }
      arr.push(fixed);
    });
  });
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> <img class="bgimg"${addAttribute(img.src, "src")}> ${renderComponent($$result, "Barratop", $$Barratop, {})} <div class="cont-anime"> <div class="genere"> <div> <p><a href="/">Home</a></p> <p>|</p> <p id="namegenere">${nome}</p> </div> <div class="pagbtn"> <button class="btn-2" id="precendente">&lt</button> <button class="btn-2" id="successivo">&gt</button> </div> </div> <div class="contenitore-anime" id="contenitore"> ${arr} </div> <p class="pagN" id="pagina"></p> <div class="contenitore-pagine"> <div class="pagbtn"> <button id="precendente2">Precedente</button> <button id="successivo2">Successiva</button> </div> </div> </div>  </body> </html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/categoria/[categoria].astro", void 0);

const $$file = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/categoria/[categoria].astro";
const $$url = "/categoria/[categoria]";

const _categoria_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Barratop as $, _categoria_ as _, img as i, logo as l };

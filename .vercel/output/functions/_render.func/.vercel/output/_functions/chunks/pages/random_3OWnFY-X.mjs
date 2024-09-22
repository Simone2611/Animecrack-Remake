import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, g as renderHead, f as renderComponent } from '../astro_YPnsezSN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as img, $ as $$Barratop } from './_categoria__0431R01q.mjs';
/* empty css                            */
import axios from 'axios';
import jsdom from 'jsdom';

const $$Astro = createAstro();
const $$Random = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Random;
  const { JSDOM } = jsdom;
  let genere = Astro2.request.url;
  let generefix = genere.replaceAll(Astro2.url.origin + "/random", "");
  let generefix2 = generefix.replaceAll(/\d+/g, "");
  generefix2.replaceAll("?page=", "");
  let arr = [];
  await axios.get("https://www.animeworld.so/random" + generefix).then(({ data }) => {
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
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> <img class="bgimg"${addAttribute(img.src, "src")}> ${renderComponent($$result, "Barratop", $$Barratop, {})} <div class="cont-anime"> <div class="genere"> <div> <p><a href="/">Home</a></p> <p>|</p> <p id="namegenere">Random</p> </div> <div class="pagbtn"> <button class="btn-2" id="precendente">&lt</button> <button class="btn-2" id="successivo">&gt</button> </div> </div> <div class="contenitore-anime" id="contenitore"> ${arr} </div> <p class="pagN" id="pagina"></p> <div class="contenitore-pagine"> <div class="pagbtn"> <button id="precendente2">Precedente</button> <button id="successivo2">Successiva</button> </div> </div> </div>  </body> </html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/random.astro", void 0);

const $$file = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/random.astro";
const $$url = "/random";

export { $$Random as default, $$file as file, $$url as url };

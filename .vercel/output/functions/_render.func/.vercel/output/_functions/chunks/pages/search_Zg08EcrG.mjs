import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, g as renderHead, f as renderComponent } from '../astro_YPnsezSN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as img, $ as $$Barratop } from './_categoria__0431R01q.mjs';
/* empty css                            */
import axios from 'axios';
import jsdom from 'jsdom';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const { JSDOM } = jsdom;
  let arr = [];
  let fixed2 = [];
  let URL = Astro2.request.url;
  const SEARCH_REGEX = /href\=\"([\w|\/|\.|\d|\-]+)\"/g;
  const URLsearch = URL.split("/");
  let filtro = URL.replaceAll(Astro2.url.origin + "/", "");
  let filtrofinale = filtro.replaceAll("/search", "");
  let filtrofinale2 = '"' + decodeURI(filtrofinale) + '"';
  await axios.get("https://www.animeworld.so/search?keyword=" + URLsearch.at(-2)).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll(
      ".film-list > .item > .inner"
    );
    matches.forEach(async (element) => {
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
      fixed2.push(fixed);
    });
  }).then(() => {
    return Promise.all(
      fixed2.map((fixed) => {
        const search = [...fixed.matchAll(SEARCH_REGEX)];
        const searchUrl = search[0][1];
        return axios.get("https://www.animeworld.so" + searchUrl);
      })
    );
  }).then((responses) => {
    fixed2.forEach((fixed, i) => {
      const finalUrl = responses[i].request.res.responseUrl;
      fixed = fixed.replace(SEARCH_REGEX, `href="` + finalUrl + `"`);
      fixed = fixed.replace("https://www.animeworld.so", "");
      arr.push(fixed);
    });
  });
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> <img class="bgimg"${addAttribute(img.src, "src")}> ${renderComponent($$result, "Barratop", $$Barratop, {})} <div class="cont-anime"> <div class="genere"> <div> <p><a href="/">Home</a></p> <p>|</p> <p id="namegenere">${filtrofinale2}</p> </div> <div class="pagbtn"></div> </div> <div class="contenitore-anime" id="contenitore"> ${arr} </div> </div>  </body> </html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/[search]/search.astro", void 0);

const $$file = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/[search]/search.astro";
const $$url = "/[search]/search";

export { $$Search as default, $$file as file, $$url as url };

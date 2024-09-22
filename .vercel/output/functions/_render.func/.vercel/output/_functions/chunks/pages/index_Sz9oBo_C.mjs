import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute, g as renderHead } from '../astro_YPnsezSN.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                            */
import { i as img, $ as $$Barratop } from './_categoria__0431R01q.mjs';
import 'clsx';
import axios from 'axios';
import jsdom from 'jsdom';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Contenitore = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contenitore;
  const { JSDOM } = jsdom;
  let arr = [];
  await axios.get("https://www.animeworld.so/").then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll(".film-list");
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
      if (fixed.includes('<div class="owl-carousel owl-theme">')) {
        fixed = fixed.replace('<div class="owl-carousel owl-theme">', "");
      }
      arr.push(fixed);
    });
  });
  return renderTemplate`${maybeRenderHead()}<div class="cont-anime"> <div class="recentiC"> <div class="pagbtn-l"> <p class="Recenti">Recenti</p> <p class="bar">|</p> <p class="pageN" id="Npage">Page 1 /</p> </div> <div class="pagbtn-r"> <button class="btn-2" id="prec">&lt</button> <button class="btn-2" id="succ">&gt</button> </div> </div> <div class="contenitore-anime2" id="contenitore"> ${arr} </div> </div> `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/contenitore.astro", void 0);

const $$Astro$3 = createAstro();
const $$Slide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Slide;
  const { JSDOM } = jsdom;
  let arr2 = "";
  await axios.get("https://www.animeworld.so/").then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll(
      "#body .widget.slider .swiper-wrapper"
    );
    matches.forEach((element) => {
      let fixed = element.innerHTML;
      arr2 = fixed;
    });
  });
  return renderTemplate`${maybeRenderHead()}<div class="swiper"> <div class="swiper-wrapper" id="contenitore2"> ${arr2} </div> </div> `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/slide.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro();
const $$Cronologia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cronologia;
  const { JSDOM } = jsdom;
  let arr = [];
  let links = [];
  let arrfinale = [];
  let arrfinale2 = [];
  let arrayy = [];
  if (Astro2.cookies.get("crono")) {
    const cookie = [Astro2.cookies.get("crono").value];
    links = [Astro2.cookies.get("crono").value];
    let array = JSON.parse(cookie);
    await Promise.all(
      array.map(async (element, index) => {
        let fix2 = element.replaceAll(Astro2.url.origin, "");
        await axios.get("https://www.animeworld.so" + fix2).then(({ data }) => {
          const dom = new JSDOM(data);
          let matches = dom.window.document.querySelectorAll(
            ".head > .d-md-none > img"
          );
          matches.forEach((element2) => {
            let fixed = element2.outerHTML;
            arr.push({ fixed, index });
          });
        });
        await axios.get("https://www.animeworld.so" + fix2).then(({ data }) => {
          const dom = new JSDOM(data);
          let matches = dom.window.document.querySelectorAll(
            ".episode > .active "
          );
          matches.forEach((element2) => {
            let fixed = element2.outerHTML;
            arrayy.push({ fixed, index });
          });
        });
      })
    );
    arr = arr.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
    arrayy = arrayy.sort((a, b) => {
      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < arr.length; i++) {
      arrfinale.push(arr[i].fixed);
    }
    for (let i = 0; i < arrayy.length; i++) {
      arrfinale2.push(arrayy[i].fixed);
    }
  }
  return renderTemplate`${maybeRenderHead()}<div id="allcrono" class="cont-anime"> <div class="recentiC"> <div class="pagbtn-l"> <p class="Recenti">Cronologia</p> <p class="bar">|</p> <button id="showCrono">Mostra</button> </div> </div> <div id="containercrono" class="contenitore-anime-new"> <div class="contenitore" id="crono"> ${arrfinale} </div> </div> </div> <div class="hidden" id="links">${links}</div> <div class="hidden" id="ep">${arrfinale2}</div> `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/cronologia.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> <img class="bgimg"${addAttribute(img.src, "src")}> ${renderComponent($$result, "Barratop", $$Barratop, {})} ${renderComponent($$result, "Slider", $$Slide, {})} ${renderComponent($$result, "Cronologia", $$Cronologia, {})} ${renderComponent($$result, "Contenitore", $$Contenitore, {})} <!-- <Homenew /> --> ${renderComponent($$result, "SpeedInsights", $$Index$1, {})} </body></html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/index.astro", void 0);

const $$file = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

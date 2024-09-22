import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_YPnsezSN.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import axios from 'axios';
import jsdom from 'jsdom';

const $$Astro = createAstro();
const $$input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$input;
  const { JSDOM } = jsdom;
  let URL = Astro2.url.pathname.replaceAll("/input/", "");
  let i = 0;
  let arr = [];
  await axios.get("https://www.animeworld.so/search?keyword=" + decodeURI(URL)).then(({ data }) => {
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
      if (i < 4) {
        arr.push(fixed);
        i++;
      }
    });
  });
  return renderTemplate`${maybeRenderHead()}<div id="inputsearch">${arr}</div> `;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/input/[input].astro", void 0);

const $$file = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/input/[input].astro";
const $$url = "/input/[input]";

export { $$input as default, $$file as file, $$url as url };

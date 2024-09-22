import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, g as renderHead, f as renderComponent } from '../astro_YPnsezSN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Barratop, i as img, l as logo } from './_categoria__0431R01q.mjs';
/* empty css                            */
import axios from 'axios';
import jsdom from 'jsdom';

const $$Astro$2 = createAstro();
const $$Playvideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Playvideo;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> ${renderComponent($$result, "Barratop", $$Barratop, {})} </body></html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/componenti/playvideo.astro", void 0);

const svg = new Proxy({"src":"/_astro/loading.tQwerKet.svg","width":200,"height":200,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/img/loading.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$video$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$video$1;
  const { JSDOM } = jsdom;
  let URL = Astro2.request.url;
  URL.split("/");
  let link = URL.replaceAll(Astro2.url.origin, "");
  let link2 = "https://www.animeworld.so" + link;
  let arr = [];
  let messaggio1 = "";
  let messaggio2 = "";
  await axios.get(link2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("div > .server.active");
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      arr.push(fixed);
    });
  });
  await axios.get(link2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("div video source");
    matches.forEach((element) => {
      let fixed = element.src;
      link = fixed;
    });
  });
  await axios.get(link2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("#unavailable");
    matches.forEach((element) => {
      messaggio1 = "Questo anime non \xE8 ancora disponibile";
      messaggio2 = "Clicca il logo per tornare nella home";
    });
  });
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> <img class="bgimg"${addAttribute(img.src, "src")}> <div class="container-load"> <div class="loading"> <img${addAttribute(logo.src, "src")} id="home"> <img${addAttribute(svg.src, "src")} id="carica"> </div> <p id="messaggio">${messaggio1}</p> <p>${messaggio2}</p> </div> <div class="no"> <img class="bgimg" src="/src/img/wallpaper.jpg"> ${renderComponent($$result, "Playvideo", $$Playvideo, {})} <div class="videocontainer"> <p id="nomeEp">${link}</p> <video controls autoplay> <source${addAttribute(link, "src")} type="video/mp4"> </video> </div> <div class="contenitorebtn"> <button class="nodispl btn" id="previous"></button> <button class="nodispl btn" id="next"></button> </div> <div> <p>Descrizione:</p> <p id="desc"></p> <p>Tag:</p> <p id="tag"></p> </div> <p class="text">Tutti gli episodi</p> <div class="ep" id="contenitore">${arr}</div> </div>  </body> </html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/play/[video].astro", void 0);

const $$file$1 = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/play/[video].astro";
const $$url$1 = "/play/[video]";

const _video_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$video$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const play = new Proxy({"src":"/_astro/play.Pl-wVN20.svg","width":384,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/img/play.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$video;
  const { JSDOM } = jsdom;
  let URL = Astro2.request.url;
  let linkredirect = "";
  const URLplay = URL.split("/");
  let fixato = "";
  let link2 = "https://www.animeworld.so/api/episode/serverPlayerAnimeWorld?id=" + URLplay.at(-1);
  let nome1 = URLplay.at(-2).split(".");
  let nome2 = nome1.at(-2);
  let nome3 = nome2.replaceAll("-", " ");
  let nomefinale = nome3.toUpperCase();
  let link = "";
  await axios.get(link2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("div video source");
    matches.forEach((element) => {
      let fixed = element.src;
      link = fixed;
    });
  });
  await axios.get(link2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("script");
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      let fixed1 = fixed.indexOf('urlVideo = youtube_parser("');
      let fixed3 = fixed.replaceAll(fixed.substr(0, fixed1), "");
      let fixed4 = fixed3.replaceAll(fixed3.substr(0, fixed3.indexOf('"')));
      let fixed5 = fixed4.replaceAll("undefined", "");
      let fixed6 = fixed5.indexOf('");');
      let fixed7 = fixed5.substr(0, fixed6).replaceAll('"');
      let finalfix = fixed7.replaceAll("undefined", "");
      fixato = finalfix;
    });
  });
  let arr = [];
  let URL2 = URL.replace(Astro2.url.origin, "");
  let n = 0;
  await axios.get("https://www.animeworld.so" + URL2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("div > .server.hidden");
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      let fixed2 = fixed.indexOf('data-name="4');
      let fixed3 = fixed.replaceAll(fixed.substr(0, fixed2), "");
      let fixed4 = fixed3.indexOf("href=");
      let fixed5 = fixed3.substr(fixed4, 3e3).replaceAll('"');
      let fixed6 = fixed5.replaceAll("undefined", "");
      let fixed7 = fixed6.indexOf(">");
      let fixed8 = fixed6.substr(0, fixed7);
      if (n == 0) {
        let url = Astro2.url.pathname.lastIndexOf("/") + 2;
        let url2 = JSON.stringify(Astro2.url.pathname).substring(0, url);
        let fixed9 = fixed8.replaceAll(url2, "");
        linkredirect = fixed9.replaceAll("href=", "");
        n++;
      }
    });
  });
  await axios.get("https://www.animeworld.so" + URL2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("div > .server.active");
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      arr.push(fixed);
    });
  });
  let desc = "";
  await axios.get("https://www.animeworld.so" + URL2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll(".desc");
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      let fixed2 = fixed.replaceAll(`<div class="desc">`, ``);
      desc = fixed2.replaceAll(`</div>`, ``);
    });
  });
  await axios.get("https://www.animeworld.so" + URL2).then(({ data }) => {
    const dom = new JSDOM(data);
    let matches = dom.window.document.querySelectorAll("#tagsReload");
    matches.forEach((element) => {
      let fixed = element.outerHTML;
      let fixed2 = fixed.replaceAll(
        `<p id="tagsReload" style="max-height: 100px; overflow-y: auto; font-size: 10px; font-family: 'Nunito Sans', sans-serif;">`,
        ``
      );
      let fixed3 = fixed2.replaceAll(`</p>`, ``);
      let fixed4 = fixed3.replaceAll(`<span>`, "");
      let fixed5 = fixed4.replaceAll(`<span class="episode-num-keywords">`, "");
      decodeURI(fixed5.replaceAll("</span>", ""));
    });
  });
  let name = nomefinale.split(" ")[0];
  if (name.length < 3) {
    name = name + "+" + nomefinale.split(" ")[1];
  }
  let arr2 = [];
  await axios.get("https://www.animeworld.so/search?keyword=" + name.toLowerCase()).then(({ data }) => {
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
      arr2.push(fixed);
    });
  });
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Animecrack</title>${renderHead()}</head> <body> <img class="bgimg"${addAttribute(img.src, "src")}> ${renderComponent($$result, "Playvideo", $$Playvideo, {})} <div class="videocontainer2"> <div class="contsinistra"> <div class="videocontainer"> <video id="videoc" controls autoplay> <source id="video"${addAttribute(link, "src")} type="video/mp4"> </video> <iframe width="100%" height="500"${addAttribute(fixato, "src")} id="ytvid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <div class="contenitorebtn"> <p class="nomeanime" id="nomeEp">${nomefinale}</p> <button class="nodispl btn" id="previous"></button> <button class="nodispl btn" id="next"></button> </div> <p id="desc">${desc}</p> </div> <div class="contenitoreep"> <div class="contenitorebtn"> <p id="numeropagina">Episodi pagina:</p> <button class="btn" id="eppag-pre">&lt</button> <button class="btn" id="eppag-next">&gt</button> </div> <div class="ep" id="contenitore">${arr}</div> </div> </div> <!-- <p id="asd">{play.src}</p> --> <div class="contenitore-desc"> <div class="tagcontainer"> <h2>Consigliati</h2> </div> <div id="contenitore2" class="consigliati">${arr2}</div> <!-- <div class="tagcontainer">
          <h2>Tag</h2>
          <button class="showbtn" id="show">Show all</button>
        </div>

        <p id="tag">{tag}</p> --> </div> </div> <img class="hidden" id="play"${addAttribute(play.src, "src")}> <p id="check" class="hidden">${fixato}</p> <p id="check2" class="hidden">${linkredirect}</p> <p id="check3" class="hidden">${link}</p>  </body> </html>`;
}, "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/play/[video]/[video].astro", void 0);

const $$file = "C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/play/[video]/[video].astro";
const $$url = "/play/[video]/[video]";

const _video_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$video,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _video_$1 as _, _video_ as a };

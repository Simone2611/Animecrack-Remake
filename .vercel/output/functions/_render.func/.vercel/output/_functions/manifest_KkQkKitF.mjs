import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_YPnsezSN.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.location.href=\"/\";\n"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.v8s2T8MH.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/categoria/[categoria]","isIndex":false,"type":"page","pattern":"^\\/categoria\\/([^/]+?)\\/?$","segments":[[{"content":"categoria","dynamic":false,"spread":false}],[{"content":"categoria","dynamic":true,"spread":false}]],"params":["categoria"],"component":"src/pages/categoria/[categoria].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.-vPlsLUX.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/generi/[genere]","isIndex":false,"type":"page","pattern":"^\\/generi\\/([^/]+?)\\/?$","segments":[[{"content":"generi","dynamic":false,"spread":false}],[{"content":"genere","dynamic":true,"spread":false}]],"params":["genere"],"component":"src/pages/generi/[genere].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.location.href=\"/\";\n"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/input/[input]","isIndex":false,"type":"page","pattern":"^\\/input\\/([^/]+?)\\/?$","segments":[[{"content":"input","dynamic":false,"spread":false}],[{"content":"input","dynamic":true,"spread":false}]],"params":["input"],"component":"src/pages/input/[input].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.JEjc0vEH.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/play/[video]","isIndex":false,"type":"page","pattern":"^\\/play\\/([^/]+?)\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}],[{"content":"video","dynamic":true,"spread":false}]],"params":["video"],"component":"src/pages/play/[video].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oo3RPdxx.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/play/[video]/[video]","isIndex":false,"type":"page","pattern":"^\\/play\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}],[{"content":"video","dynamic":true,"spread":false}],[{"content":"video","dynamic":true,"spread":false}]],"params":["video","video"],"component":"src/pages/play/[video]/[video].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.HOqiDkM4.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"},{"type":"external","src":"/_astro/index.0IC2KAeW.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.location.href=\"/\";\n"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/music","isIndex":false,"type":"page","pattern":"^\\/music\\/?$","segments":[[{"content":"music","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/music.astro","pathname":"/music","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.cCY4wTcx.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/newest","isIndex":false,"type":"page","pattern":"^\\/newest\\/?$","segments":[[{"content":"newest","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/newest.astro","pathname":"/newest","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3x74FfHB.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/ongoing","isIndex":false,"type":"page","pattern":"^\\/ongoing\\/?$","segments":[[{"content":"ongoing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ongoing.astro","pathname":"/ongoing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.yQalH5U6.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/random","isIndex":false,"type":"page","pattern":"^\\/random\\/?$","segments":[[{"content":"random","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/random.astro","pathname":"/random","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.na5gWi4h.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/upcoming","isIndex":false,"type":"page","pattern":"^\\/upcoming\\/?$","segments":[[{"content":"upcoming","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/upcoming.astro","pathname":"/upcoming","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4Z7I6fgm.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/updated","isIndex":false,"type":"page","pattern":"^\\/updated\\/?$","segments":[[{"content":"updated","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/updated.astro","pathname":"/updated","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Ipa2oIyQ.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/_video_.EP7Z7F3G.css"}],"routeData":{"route":"/[search]/search","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/search\\/?$","segments":[[{"content":"search","dynamic":true,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":["search"],"component":"src/pages/[search]/search.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/categoria/[categoria].astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/generi/[genere].astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/play/[video].astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/play/[video]/[video].astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/newest.astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/ongoing.astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/random.astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/[search]/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/upcoming.astro",{"propagation":"none","containsHead":true}],["C:/Users/simon/Desktop/AnimeCrack/Animecrack-Remake/src/pages/updated.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/404.astro":"chunks/pages/404_TSeePH9M.mjs","/src/pages/generi/[genere].astro":"chunks/pages/_genere__Ntc-GhCe.mjs","/src/pages/input/[input].astro":"chunks/pages/_input__c_UOUI_X.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_wtQ99HxE.mjs","/src/pages/index.astro":"chunks/pages/index_Sz9oBo_C.mjs","/src/pages/music.astro":"chunks/pages/music_272XEPBw.mjs","/src/pages/newest.astro":"chunks/pages/newest_DtSsxozN.mjs","/src/pages/ongoing.astro":"chunks/pages/ongoing_gZFJrEhg.mjs","/src/pages/random.astro":"chunks/pages/random_3OWnFY-X.mjs","/src/pages/[search]/search.astro":"chunks/pages/search_Zg08EcrG.mjs","/src/pages/upcoming.astro":"chunks/pages/upcoming_9nZ4_ytN.mjs","/src/pages/updated.astro":"chunks/pages/updated_zF5SfWxG.mjs","\u0000@astrojs-manifest":"manifest_KkQkKitF.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_SrS9jNSJ.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_iIqZOPhz.mjs","\u0000@astro-page:src/pages/categoria/[categoria]@_@astro":"chunks/_categoria__mtDO6Rps.mjs","\u0000@astro-page:src/pages/generi/[genere]@_@astro":"chunks/_genere__udqcJcDZ.mjs","\u0000@astro-page:src/pages/input/[input]@_@astro":"chunks/_input__7fUnBdqu.mjs","\u0000@astro-page:src/pages/play/[video]@_@astro":"chunks/_video__jg8ZOQY9.mjs","\u0000@astro-page:src/pages/play/[video]/[video]@_@astro":"chunks/_video__UKteEtis.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_-KftL_d6.mjs","\u0000@astro-page:src/pages/music@_@astro":"chunks/music_Z_8MxD_O.mjs","\u0000@astro-page:src/pages/newest@_@astro":"chunks/newest_G3FKcNVP.mjs","\u0000@astro-page:src/pages/ongoing@_@astro":"chunks/ongoing_1xEoK3mh.mjs","\u0000@astro-page:src/pages/random@_@astro":"chunks/random_b1deQnU4.mjs","\u0000@astro-page:src/pages/upcoming@_@astro":"chunks/upcoming_NH3DLwjR.mjs","\u0000@astro-page:src/pages/updated@_@astro":"chunks/updated_R_1MI5va.mjs","\u0000@astro-page:src/pages/[search]/search@_@astro":"chunks/search_ScVfXLfY.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.v8s2T8MH.js","/astro/hoisted.js?q=3":"_astro/hoisted.gUk2SObu.js","/astro/hoisted.js?q=7":"_astro/hoisted._gyT-knp.js","/astro/hoisted.js?q=5":"_astro/hoisted.JEjc0vEH.js","/astro/hoisted.js?q=2":"_astro/hoisted.dXFbd-5D.js","/astro/hoisted.js?q=11":"_astro/hoisted.4Z7I6fgm.js","/astro/hoisted.js?q=8":"_astro/hoisted.cCY4wTcx.js","/astro/hoisted.js?q=9":"_astro/hoisted.Ipa2oIyQ.js","/astro/hoisted.js?q=4":"_astro/hoisted.3x74FfHB.js","/astro/hoisted.js?q=10":"_astro/hoisted.Oo3RPdxx.js","/astro/hoisted.js?q=12":"_astro/hoisted.na5gWi4h.js","/astro/hoisted.js?q=6":"_astro/hoisted.yQalH5U6.js","/astro/hoisted.js?q=1":"_astro/hoisted.-vPlsLUX.js","/astro/hoisted.js?q=13":"_astro/hoisted.HOqiDkM4.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/wallpaper.LnUUBWN-.webp","/_astro/loading.tQwerKet.svg","/_astro/AnimeCrack.I1gAl3wg.png","/_astro/play.Pl-wVN20.svg","/_astro/_video_.EP7Z7F3G.css","/_astro/index.0IC2KAeW.css","/asd.svg","/favicon.svg","/_astro/categoria.astro_astro_type_script_index_0_lang.f7mQuCtM.js","/_astro/hoisted.-vPlsLUX.js","/_astro/hoisted.3x74FfHB.js","/_astro/hoisted.4Z7I6fgm.js","/_astro/hoisted.cCY4wTcx.js","/_astro/hoisted.HOqiDkM4.js","/_astro/hoisted.Ipa2oIyQ.js","/_astro/hoisted.JEjc0vEH.js","/_astro/hoisted.na5gWi4h.js","/_astro/hoisted.Oo3RPdxx.js","/_astro/hoisted.v8s2T8MH.js","/_astro/hoisted.yQalH5U6.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };

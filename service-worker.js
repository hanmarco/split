if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let o={};const r=s=>i(s,t),f={module:{uri:t},exports:o,require:r};e[t]=Promise.all(n.map((s=>f[s]||r(s)))).then((s=>(l(...s),o)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"split"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/split/css/app.484cb63d.css",revision:null},{url:"/split/css/chunk-vendors.03142aba.css",revision:null},{url:"/split/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/split/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/split/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/split/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/split/index.html",revision:"9a857d523226f191747c1576907264ed"},{url:"/split/js/app.a34309c3.js",revision:null},{url:"/split/js/chunk-vendors.f27eaf8f.js",revision:null},{url:"/split/js/webfontloader.c79242d5.js",revision:null},{url:"/split/manifest.json",revision:"3899cbe97158748dcc3a2f945bd88aa8"},{url:"/split/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

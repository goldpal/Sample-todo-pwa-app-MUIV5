if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),l={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.a2e45593.js",revision:null},{url:"index.html",revision:"0ed702d063471642f76021d0d6a5af83"},{url:"icon-192x192.png",revision:"e4405166ad10b0856ab0628cd15e1c66"},{url:"icon-512x512.png",revision:"ac2e32a0edcbd95f342a2aea6f5991b6"},{url:"icon-512x512-mask.png",revision:"b5f8c209940838b6bcd4689adf0b1442"},{url:"manifest.webmanifest",revision:"504bb79ee5153001346adf4e28d0270f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
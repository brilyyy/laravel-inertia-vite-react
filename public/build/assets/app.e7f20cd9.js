var f=Object.defineProperty;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))p.call(e,t)&&o(r,t,e[t]);if(i)for(var t of i(e))h.call(e,t)&&o(r,t,e[t]);return r};import{_ as w,a as x,c as _,r as v,R as E}from"./vendor.7e44d81f.js";const R="modulepreload",l={},b="/build/",g=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${b}${s}`,s in l)return;l[s]=!0;const a=s.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":R,a||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),a)return new Promise((u,m)=>{n.addEventListener("load",u),n.addEventListener("error",m)})})).then(()=>e())};window._=w;window.axios=x;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";_({resolve:async r=>(await{"../views/react/Index.jsx":()=>g(()=>import("./Index.b0edaebf.js"),["assets/Index.b0edaebf.js","assets/vendor.7e44d81f.js"])}[`../views/react/${r}.jsx`]()).default,setup({el:r,App:e,props:t,plugin:s}){v.exports.render(E.createElement(e,c({},t)),r)}});

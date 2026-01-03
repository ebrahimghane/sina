(function(h,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],d):(h=typeof globalThis<"u"?globalThis:h||self,d(h.SinaWidget={},h.React,h.ReactDOM))})(this,function(h,d,L){"use strict";var I;var b={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=d,R=Symbol.for("react.element"),E=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,z=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function S(r,t,n){var e,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(e in t)N.call(t,e)&&!T.hasOwnProperty(e)&&(o[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)o[e]===void 0&&(o[e]=t[e]);return{$$typeof:R,type:r,key:a,ref:s,props:o,_owner:z.current}}f.Fragment=E,f.jsx=S,f.jsxs=S,b.exports=f;var l=b.exports,v,k=L;v=k.createRoot,k.hydrateRoot;const P="https://apigw.paziresh24.com/v1/searchia-api/v2/qs/index/slim_clinic_query_su";async function A(r,t){if(!r||r.trim().length===0)return null;try{const n=new URL(P);n.searchParams.set("query",r.trim());const e=await fetch(n.toString(),{method:"GET",headers:{apikey:t}});if(!e.ok)return console.warn(`Searchia API error: ${e.status} ${e.statusText}`),null;const o=await e.json();return o&&o.entity&&Array.isArray(o.entity.topQuerySuggestions)?o:(console.warn("Invalid API response structure:",o),null)}catch(n){return console.warn("Failed to fetch suggestions:",n),null}}function M(r,t){let n=null;return function(...o){n!==null&&clearTimeout(n),n=setTimeout(()=>{r(...o)},t)}}function w(r){const t="https://www.paziresh24.com/s/",n=new URLSearchParams({text:r,ref:"search_suggestion_box_qs_sina",semantic_search:"true"});return`${t}?${n.toString()}`}const W=({value:r,onChange:t,onFocus:n,onBlur:e,onEnter:o,placeholder:a="جستجو...",className:s=""})=>{const g=d.useRef(null);d.useEffect(()=>{const i=g.current;if(i){i.style.height="auto";const c=i.scrollHeight,u=parseInt(getComputedStyle(i).lineHeight)||24,p=u+24,m=u*3+24,K=Math.min(Math.max(c,p),m);i.style.height=`${K}px`,i.style.overflowY=c>m?"auto":"hidden"}},[r]);const y=i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),o&&o())};return l.jsx("textarea",{ref:g,value:r,onChange:i=>t(i.target.value),onKeyDown:y,onFocus:n,onBlur:e,placeholder:a,className:s?`sina-search-input ${s}`:"sina-search-input",autoComplete:"off","aria-label":"جستجو",rows:1})},D=({text:r,onClick:t,className:n="",highlight:e})=>{const o=()=>e?r.split(new RegExp(`(${e})`,"gi")).map((s,g)=>s.toLowerCase()===e.toLowerCase()?l.jsx("mark",{className:"sina-highlight",children:s},g):s):r;return l.jsx("li",{className:n?`sina-suggestion-item ${n}`:"sina-suggestion-item",onClick:t,role:"option",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),t())},children:o()})},F=({value:r,onChange:t,onFocus:n,onBlur:e,onEnter:o,placeholder:a})=>l.jsx("div",{className:"sina-search-box",children:l.jsxs("div",{className:"sina-search-input-wrapper",children:[l.jsx(W,{value:r,onChange:t,onFocus:n,onBlur:e,onEnter:o,placeholder:a}),l.jsx("svg",{className:"sina-search-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),B=({suggestions:r,query:t,isVisible:n,onSelect:e})=>{if(!n||r.length===0)return null;const o=s=>{const g=w(s);window.location.href=g,e(s)},a=()=>l.jsx("svg",{className:"sina-suggestion-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});return l.jsx("div",{className:"sina-suggestions-container",children:l.jsx("ul",{className:"sina-suggestions-list",role:"listbox",children:r.map((s,g)=>l.jsxs("li",{className:"sina-suggestion-item-wrapper",onClick:()=>o(s),children:[l.jsx(a,{}),l.jsx(D,{text:s,onClick:()=>o(s),highlight:t})]},`${s}-${g}`))})})},H=`/* SINA Widget Styles - Mobile First */\r
\r
.sina-widget {\r
  position: relative;\r
  width: 100%;\r
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\r
  font-size: 14px;\r
  line-height: 1.5;\r
  color: #333;\r
  box-sizing: border-box;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
/* Search Box */\r
.sina-search-box {\r
  width: 100%;\r
  position: relative;\r
}\r
\r
.sina-search-input-wrapper {\r
  position: relative;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.sina-search-icon {\r
  position: absolute;\r
  left: 16px;\r
  color: #999;\r
  pointer-events: none;\r
  z-index: 1;\r
}\r
\r
.sina-search-input {\r
  width: 100%;\r
  padding: 12px 16px 12px 48px;\r
  font-size: 16px;\r
  line-height: 1.5;\r
  border: 2px solid #e0e0e0;\r
  border-radius: 8px;\r
  outline: none;\r
  transition: border-color 0.2s ease;\r
  box-sizing: border-box;\r
  background-color: #fff;\r
  direction: rtl;\r
  text-align: right;\r
  resize: none;\r
  overflow: hidden;\r
  min-height: 48px;\r
  max-height: 120px;\r
  font-family: inherit;\r
}\r
\r
.sina-search-input:focus {\r
  border-color: #4a90e2;\r
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);\r
}\r
\r
.sina-search-input::placeholder {\r
  color: #999;\r
}\r
\r
/* Suggestions Container */\r
.sina-suggestions-container {\r
  position: absolute;\r
  top: 100%;\r
  left: 0;\r
  right: 0;\r
  margin-top: 4px;\r
  background-color: #fff;\r
  border: 1px solid #e0e0e0;\r
  border-radius: 8px;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  z-index: 999999;\r
  max-height: 400px;\r
  overflow-y: auto;\r
  direction: rtl;\r
}\r
\r
.sina-suggestions-list {\r
  list-style: none;\r
  margin: 0;\r
  padding: 8px 0;\r
}\r
\r
/* Suggestion Item */\r
.sina-suggestion-item-wrapper {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 0;\r
  cursor: pointer;\r
  transition: background-color 0.2s ease;\r
}\r
\r
.sina-suggestion-item-wrapper:hover {\r
  background-color: #f5f5f5;\r
}\r
\r
.sina-suggestion-item-wrapper:active {\r
  background-color: #e8e8e8;\r
}\r
\r
.sina-suggestion-icon {\r
  color: #999;\r
  flex-shrink: 0;\r
  margin-right: 8px;\r
  margin-left: 16px;\r
}\r
\r
.sina-suggestion-item {\r
  padding: 12px 16px 12px 0;\r
  cursor: pointer;\r
  transition: background-color 0.2s ease;\r
  border: none;\r
  background: none;\r
  flex: 1;\r
  text-align: right;\r
  font-size: 14px;\r
  color: #333;\r
}\r
\r
\r
.sina-highlight {\r
  background-color: #fff3cd;\r
  font-weight: 600;\r
  padding: 0 2px;\r
}\r
\r
/* Mobile Responsive */\r
@media (max-width: 768px) {\r
  .sina-widget {\r
    font-size: 16px; /* Prevent zoom on iOS */\r
  }\r
\r
  .sina-search-input {\r
    font-size: 16px; /* Prevent zoom on iOS */\r
    padding: 14px 16px 14px 48px;\r
    min-height: 52px;\r
    max-height: 156px;\r
  }\r
\r
  .sina-suggestions-container {\r
    max-height: 60vh;\r
    border-radius: 0;\r
    border-left: none;\r
    border-right: none;\r
  }\r
\r
  .sina-suggestion-item {\r
    padding: 14px 16px;\r
    font-size: 16px;\r
  }\r
}\r
\r
/* Loading State (if needed in future) */\r
.sina-loading {\r
  opacity: 0.6;\r
  pointer-events: none;\r
}\r
\r
`,U=({config:r})=>{const[t,n]=d.useState({query:"",suggestions:[],isLoading:!1,isOpen:!1,error:null}),e=d.useRef(null);d.useEffect(()=>{e.current=M(async i=>{if(!i||i.trim().length===0){n(u=>({...u,suggestions:[],isLoading:!1}));return}n(u=>({...u,isLoading:!0}));const c=await A(i,r.apiKey);if(c&&c.entity&&c.entity.topQuerySuggestions){const u=c.entity.topQuerySuggestions;n(p=>({...p,suggestions:u,isLoading:!1,error:null}))}else{const u=i&&i.trim().length>0?[i.trim()]:[];n(p=>({...p,suggestions:u,isLoading:!1,error:null}))}},300)},[r.apiKey]);const o=d.useCallback(i=>{n(c=>({...c,query:i,isOpen:!0})),e.current&&e.current(i)},[]),a=d.useCallback(()=>{n(i=>{const c=i.query||"";return e.current&&e.current(c),{...i,isOpen:i.suggestions.length>0}})},[]),s=d.useCallback(()=>{setTimeout(()=>{n(i=>({...i,isOpen:!1}))},200)},[]),g=d.useCallback(i=>{n(c=>({...c,query:i,isOpen:!1}))},[]),y=d.useCallback(()=>{n(i=>{const{query:c,suggestions:u}=i;if(u.length>0){const p=u[0],m=w(p);return window.location.href=m,{...i,query:p,isOpen:!1}}else if(c&&c.trim().length>0){const p=w(c.trim());return window.location.href=p,{...i,isOpen:!1}}return i})},[]);return l.jsxs("div",{className:"sina-widget",children:[l.jsx(F,{value:t.query,onChange:o,onFocus:a,onBlur:s,onEnter:y,placeholder:r.placeholder}),l.jsx(B,{suggestions:t.suggestions,query:t.query,isVisible:t.isOpen,onSelect:g})]})};function C(r,t){let n=r.shadowRoot;n?n.innerHTML="":n=r.attachShadow({mode:"open"});const e=document.createElement("style");e.textContent=H,n.appendChild(e);const o=document.createElement("div");o.id="sina-widget-root",n.appendChild(o),v(o).render(l.jsx(U,{config:t}))}const j={containerId:"sina-search-root",placeholder:"از پذیرش24 بپرسید..."};function x(r){const t=r.containerId||j.containerId,n=document.getElementById(t);if(!n){console.error(`SINA Widget: Container element with id "${t}" not found`);return}const e={...j,...r};if(!e.apiKey){console.error("SINA Widget: apiKey is required");return}const o=n.getAttribute("data-city"),a=n.getAttribute("data-specialty"),s=n.getAttribute("data-placeholder");o&&(e.city=o),a&&(e.specialty=a),s&&(e.placeholder=s),C(n,e)}function _(r,...t){if(r==="init"){const n=t[0];n&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>x(n)):x(n))}}if(typeof window<"u"){const r=((I=window.SinaWidget)==null?void 0:I.q)||[],t=_;t.q=r,r.length>0&&(r.forEach(([n,...e])=>{_(n,...e)}),r.length=0),window.SinaWidget=t,window.SinaWidget.init=x}h.init=x,h.renderWidget=C,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=sina-sdk.js.map

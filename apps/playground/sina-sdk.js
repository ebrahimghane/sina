(function(f,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],g):(f=typeof globalThis<"u"?globalThis:f||self,g(f.SinaWidget={},f.React,f.ReactDOM))})(this,function(f,g,R){"use strict";var L;var S={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=g,N=Symbol.for("react.element"),z=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,F=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function v(e,r,n){var t,i={},s=null,a=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)T.call(r,t)&&!P.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)i[t]===void 0&&(i[t]=r[t]);return{$$typeof:N,type:e,key:s,ref:a,props:i,_owner:F.current}}m.Fragment=z,m.jsx=v,m.jsxs=v,S.exports=m;var l=S.exports,C,k=R;C=k.createRoot,k.hydrateRoot;const A="https://apigw.paziresh24.com/v1/searchia-api/v2/qs/index/slim_clinic_query_su";async function j(e,r){const n=e?e.trim():"";try{const t=new URL(A);t.searchParams.set("query",n);const i=await fetch(t.toString(),{method:"GET",headers:{apikey:r}});if(!i.ok)return console.warn(`Searchia API error: ${i.status} ${i.statusText}`),null;const s=await i.json();return s&&s.entity&&Array.isArray(s.entity.topQuerySuggestions)?s:(console.warn("Invalid API response structure:",s),null)}catch(t){return console.warn("Failed to fetch suggestions:",t),null}}function M(e,r){let n=null;return function(...i){n!==null&&clearTimeout(n),n=setTimeout(()=>{e(...i)},r)}}function w(e){const r="https://www.paziresh24.com/s/",n=new URLSearchParams({text:e,ref:"search_suggestion_box_qs_sina",semantic_search:"true"});return`${r}?${n.toString()}`}const W=({value:e,onChange:r,onFocus:n,onBlur:t,onEnter:i,placeholder:s="جستجو...",className:a=""})=>{const h=g.useRef(null);g.useEffect(()=>{const o=h.current;if(o){o.style.height="auto";const c=o.scrollHeight,p=parseInt(getComputedStyle(o).lineHeight)||24,d=p+24,u=p*3+24,x=Math.min(Math.max(c,d),u);o.style.height=`${x}px`,o.style.overflowY=c>u?"auto":"hidden"}},[e]);const b=o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),i&&i())};return l.jsx("textarea",{ref:h,value:e,onChange:o=>r(o.target.value),onKeyDown:b,onFocus:n,onBlur:t,placeholder:s,className:a?`sina-search-input ${a}`:"sina-search-input",autoComplete:"off","aria-label":"جستجو",rows:1})},D=({text:e,onClick:r,className:n="",highlight:t})=>{const i=()=>t?e.split(new RegExp(`(${t})`,"gi")).map((a,h)=>a.toLowerCase()===t.toLowerCase()?l.jsx("mark",{className:"sina-highlight",children:a},h):a):e;return l.jsx("li",{className:n?`sina-suggestion-item ${n}`:"sina-suggestion-item",onClick:r,role:"option",tabIndex:0,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),r())},children:i()})},Q=({value:e,onChange:r,onFocus:n,onBlur:t,onEnter:i,placeholder:s})=>l.jsx("div",{className:"sina-search-box",children:l.jsxs("div",{className:"sina-search-input-wrapper",children:[l.jsx(W,{value:e,onChange:r,onFocus:n,onBlur:t,onEnter:i,placeholder:s}),l.jsx("svg",{className:"sina-search-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),K=({suggestions:e,query:r,isVisible:n,onSelect:t})=>{if(!n||e.length===0)return null;const i=a=>{const h=w(a);window.location.href=h,t(a)},s=()=>l.jsx("svg",{className:"sina-suggestion-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});return l.jsx("div",{className:"sina-suggestions-container",children:l.jsx("ul",{className:"sina-suggestions-list",role:"listbox",children:e.map((a,h)=>l.jsxs("li",{className:"sina-suggestion-item-wrapper",onClick:()=>i(a),children:[l.jsx(s,{}),l.jsx(D,{text:a,onClick:()=>i(a),highlight:r})]},`${a}-${h}`))})})},B=`/* SINA Widget Styles - Mobile First */\r
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
  padding: 12px 12px 12px 48px;\r
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
  margin-left: 12px;\r
}\r
\r
.sina-suggestion-item {\r
  padding: 12px 12px 12px 0;\r
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
    padding: 14px 12px 14px 48px;\r
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
    padding: 14px 12px;\r
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
`,H=({config:e})=>{const[r,n]=g.useState({query:"",suggestions:[],isLoading:!1,isOpen:!1,error:null}),t=g.useRef(null);g.useEffect(()=>{t.current=M(async o=>{const c=o?o.trim():"";if(!c||c.length===0){n(u=>({...u,suggestions:[],isLoading:!1}));return}n(u=>({...u,isLoading:!0}));const p=await j(c,e.apiKey);let d=[];p&&p.entity&&p.entity.topQuerySuggestions&&(d=p.entity.topQuerySuggestions),d.includes(c)||(d=[c,...d]),n(u=>({...u,suggestions:d,isLoading:!1,error:null}))},300)},[e.apiKey]);const i=g.useCallback(o=>{n(c=>({...c,query:o,isOpen:!0})),t.current&&t.current(o)},[]),s=g.useCallback(()=>{n(o=>{const c=o.query||"";return(async()=>{n(x=>({...x,isLoading:!0}));const d=await j(c,e.apiKey);let u=[];if(d&&d.entity&&d.entity.topQuerySuggestions&&(u=d.entity.topQuerySuggestions),c&&c.trim().length>0){const x=c.trim();u.includes(x)||(u=[x,...u])}n(x=>({...x,suggestions:u,isLoading:!1,error:null,isOpen:u.length>0}))})(),{...o,isOpen:!0}})},[e.apiKey]),a=g.useCallback(()=>{setTimeout(()=>{n(o=>({...o,isOpen:!1}))},200)},[]),h=g.useCallback(o=>{n(c=>({...c,query:o,isOpen:!1}))},[]),b=g.useCallback(()=>{n(o=>{const{query:c,suggestions:p}=o;if(p.length>0){const d=p[0],u=w(d);return window.location.href=u,{...o,query:d,isOpen:!1}}else if(c&&c.trim().length>0){const d=w(c.trim());return window.location.href=d,{...o,isOpen:!1}}return o})},[]);return l.jsxs("div",{className:"sina-widget",children:[l.jsx(Q,{value:r.query,onChange:i,onFocus:s,onBlur:a,onEnter:b,placeholder:e.placeholder}),l.jsx(K,{suggestions:r.suggestions,query:r.query,isVisible:r.isOpen,onSelect:h})]})};function _(e,r){let n=e.shadowRoot;n?n.innerHTML="":n=e.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=B,n.appendChild(t);const i=document.createElement("div");i.id="sina-widget-root",n.appendChild(i),C(i).render(l.jsx(H,{config:r}))}const O={containerId:"sina-search-root",placeholder:"از پذیرش24 بپرسید..."};function y(e){const r=e.containerId||O.containerId,n=document.getElementById(r);if(!n){console.error(`SINA Widget: Container element with id "${r}" not found`);return}const t={...O,...e};if(!t.apiKey){console.error("SINA Widget: apiKey is required");return}const i=n.getAttribute("data-city"),s=n.getAttribute("data-specialty"),a=n.getAttribute("data-placeholder");i&&(t.city=i),s&&(t.specialty=s),a&&(t.placeholder=a),_(n,t)}function I(e,...r){if(e==="init"){const n=r[0];n&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>y(n)):y(n))}}if(typeof window<"u"){const e=((L=window.SinaWidget)==null?void 0:L.q)||[],r=I;r.q=e,e.length>0&&(e.forEach(([n,...t])=>{I(n,...t)}),e.length=0),window.SinaWidget=r,window.SinaWidget.init=y}f.init=y,f.renderWidget=_,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=sina-sdk.js.map

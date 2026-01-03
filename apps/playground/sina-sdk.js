(function(j,R){typeof exports=="object"&&typeof module<"u"?R(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],R):(j=typeof globalThis<"u"?globalThis:j||self,R(j.SinaWidget={},j.React,j.ReactDOM))})(this,function(j,R,We){"use strict";var fe;var J={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Ne(){if(ae)return W;ae=1;var o=R,u=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function h(w,E,a){var d,v={},_=null,k=null;a!==void 0&&(_=""+a),E.key!==void 0&&(_=""+E.key),E.ref!==void 0&&(k=E.ref);for(d in E)s.call(E,d)&&!m.hasOwnProperty(d)&&(v[d]=E[d]);if(w&&w.defaultProps)for(d in E=w.defaultProps,E)v[d]===void 0&&(v[d]=E[d]);return{$$typeof:u,type:w,key:_,ref:k,props:v,_owner:f.current}}return W.Fragment=t,W.jsx=h,W.jsxs=h,W}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Me(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){var o=R,u=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),V=Symbol.iterator,Ge="@@iterator";function qe(e){if(e===null||typeof e!="object")return null;var r=V&&e[V]||e[Ge];return typeof r=="function"?r:null}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];Qe("error",e,n)}}function Qe(e,r,n){{var i=A.ReactDebugCurrentFrame,p=i.getStackAddendum();p!==""&&(r+="%s",n=n.concat([p]));var g=n.map(function(c){return String(c)});g.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,g)}}var Xe=!1,Ze=!1,er=!1,rr=!1,nr=!1,de;de=Symbol.for("react.module.reference");function tr(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===m||nr||e===f||e===a||e===d||rr||e===k||Xe||Ze||er||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===v||e.$$typeof===h||e.$$typeof===w||e.$$typeof===E||e.$$typeof===de||e.getModuleId!==void 0))}function ir(e,r,n){var i=e.displayName;if(i)return i;var p=r.displayName||r.name||"";return p!==""?n+"("+p+")":n}function pe(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case t:return"Portal";case m:return"Profiler";case f:return"StrictMode";case a:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w:var r=e;return pe(r)+".Consumer";case h:var n=e;return pe(n._context)+".Provider";case E:return ir(e,e.render,"ForwardRef");case v:var i=e.displayName||null;return i!==null?i:P(e.type)||"Memo";case _:{var p=e,g=p._payload,c=p._init;try{return P(c(g))}catch{return null}}}return null}var I=Object.assign,M=0,ge,he,ve,me,ye,be,xe;function Ee(){}Ee.__reactDisabledLog=!0;function ar(){{if(M===0){ge=console.log,he=console.info,ve=console.warn,me=console.error,ye=console.group,be=console.groupCollapsed,xe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ee,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function or(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:ge}),info:I({},e,{value:he}),warn:I({},e,{value:ve}),error:I({},e,{value:me}),group:I({},e,{value:ye}),groupCollapsed:I({},e,{value:be}),groupEnd:I({},e,{value:xe})})}M<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Q=A.ReactCurrentDispatcher,X;function B(e,r,n){{if(X===void 0)try{throw Error()}catch(p){var i=p.stack.trim().match(/\n( *(at )?)/);X=i&&i[1]||""}return`
`+X+e}}var Z=!1,K;{var sr=typeof WeakMap=="function"?WeakMap:Map;K=new sr}function we(e,r){if(!e||Z)return"";{var n=K.get(e);if(n!==void 0)return n}var i;Z=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=Q.current,Q.current=null,ar();try{if(r){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(O){i=O}Reflect.construct(e,[],c)}else{try{c.call()}catch(O){i=O}e.call(c.prototype)}}else{try{throw Error()}catch(O){i=O}e()}}catch(O){if(O&&i&&typeof O.stack=="string"){for(var l=O.stack.split(`
`),C=i.stack.split(`
`),y=l.length-1,b=C.length-1;y>=1&&b>=0&&l[y]!==C[b];)b--;for(;y>=1&&b>=0;y--,b--)if(l[y]!==C[b]){if(y!==1||b!==1)do if(y--,b--,b<0||l[y]!==C[b]){var T=`
`+l[y].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,T),T}while(y>=1&&b>=0);break}}}finally{Z=!1,Q.current=g,or(),Error.prepareStackTrace=p}var L=e?e.displayName||e.name:"",D=L?B(L):"";return typeof e=="function"&&K.set(e,D),D}function ur(e,r,n){return we(e,!1)}function lr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function H(e,r,n){if(e==null)return"";if(typeof e=="function")return we(e,lr(e));if(typeof e=="string")return B(e);switch(e){case a:return B("Suspense");case d:return B("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case E:return ur(e.render);case v:return H(e.type,r,n);case _:{var i=e,p=i._payload,g=i._init;try{return H(g(p),r,n)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,_e={},Re=A.ReactDebugCurrentFrame;function $(e){if(e){var r=e._owner,n=H(e.type,e._source,r?r.type:null);Re.setExtraStackFrame(n)}else Re.setExtraStackFrame(null)}function cr(e,r,n,i,p){{var g=Function.call.bind(U);for(var c in e)if(g(e,c)){var l=void 0;try{if(typeof e[c]!="function"){var C=Error((i||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}l=e[c](r,c,i,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){l=y}l&&!(l instanceof Error)&&($(p),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",n,c,typeof l),$(null)),l instanceof Error&&!(l.message in _e)&&(_e[l.message]=!0,$(p),S("Failed %s type: %s",n,l.message),$(null))}}}var fr=Array.isArray;function ee(e){return fr(e)}function dr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function pr(e){try{return Se(e),!1}catch{return!0}}function Se(e){return""+e}function Ce(e){if(pr(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",dr(e)),Se(e)}var Oe=A.ReactCurrentOwner,gr={key:!0,ref:!0,__self:!0,__source:!0},Te,je;function hr(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function vr(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function mr(e,r){typeof e.ref=="string"&&Oe.current}function yr(e,r){{var n=function(){Te||(Te=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function br(e,r){{var n=function(){je||(je=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var xr=function(e,r,n,i,p,g,c){var l={$$typeof:u,type:e,key:r,ref:n,props:c,_owner:g};return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function Er(e,r,n,i,p){{var g,c={},l=null,C=null;n!==void 0&&(Ce(n),l=""+n),vr(r)&&(Ce(r.key),l=""+r.key),hr(r)&&(C=r.ref,mr(r,p));for(g in r)U.call(r,g)&&!gr.hasOwnProperty(g)&&(c[g]=r[g]);if(e&&e.defaultProps){var y=e.defaultProps;for(g in y)c[g]===void 0&&(c[g]=y[g])}if(l||C){var b=typeof e=="function"?e.displayName||e.name||"Unknown":e;l&&yr(c,b),C&&br(c,b)}return xr(e,l,C,p,i,Oe.current,c)}}var re=A.ReactCurrentOwner,ke=A.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,n=H(e.type,e._source,r?r.type:null);ke.setExtraStackFrame(n)}else ke.setExtraStackFrame(null)}var ne;ne=!1;function te(e){return typeof e=="object"&&e!==null&&e.$$typeof===u}function Pe(){{if(re.current){var e=P(re.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function wr(e){return""}var Ie={};function _r(e){{var r=Pe();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function De(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=_r(r);if(Ie[n])return;Ie[n]=!0;var i="";e&&e._owner&&e._owner!==re.current&&(i=" It was passed a child from "+P(e._owner.type)+"."),F(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,i),F(null)}}function Ae(e,r){{if(typeof e!="object")return;if(ee(e))for(var n=0;n<e.length;n++){var i=e[n];te(i)&&De(i,r)}else if(te(e))e._store&&(e._store.validated=!0);else if(e){var p=qe(e);if(typeof p=="function"&&p!==e.entries)for(var g=p.call(e),c;!(c=g.next()).done;)te(c.value)&&De(c.value,r)}}}function Rr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===E||r.$$typeof===v))n=r.propTypes;else return;if(n){var i=P(r);cr(n,e.props,"prop",i,e)}else if(r.PropTypes!==void 0&&!ne){ne=!0;var p=P(r);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",p||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Sr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var i=r[n];if(i!=="children"&&i!=="key"){F(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),F(null);break}}e.ref!==null&&(F(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}var Fe={};function Le(e,r,n,i,p,g){{var c=tr(e);if(!c){var l="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var C=wr();C?l+=C:l+=Pe();var y;e===null?y="null":ee(e)?y="array":e!==void 0&&e.$$typeof===u?(y="<"+(P(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,l)}var b=Er(e,r,n,p,g);if(b==null)return b;if(c){var T=r.children;if(T!==void 0)if(i)if(ee(T)){for(var L=0;L<T.length;L++)Ae(T[L],e);Object.freeze&&Object.freeze(T)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ae(T,e)}if(U.call(r,"key")){var D=P(e),O=Object.keys(r).filter(function(Pr){return Pr!=="key"}),ie=O.length>0?"{key: someKey, "+O.join(": ..., ")+": ...}":"{key: someKey}";if(!Fe[D+ie]){var kr=O.length>0?"{"+O.join(": ..., ")+": ...}":"{}";S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ie,D,kr,D),Fe[D+ie]=!0}}return e===s?Sr(b):Rr(b),b}}function Cr(e,r,n){return Le(e,r,n,!0)}function Or(e,r,n){return Le(e,r,n,!1)}var Tr=Or,jr=Cr;N.Fragment=s,N.jsx=Tr,N.jsxs=jr}()),N}process.env.NODE_ENV==="production"?J.exports=Ne():J.exports=Me();var x=J.exports,G,Y=We;if(process.env.NODE_ENV==="production")G=Y.createRoot,Y.hydrateRoot;else{var se=Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;G=function(o,u){se.usingClientEntryPoint=!0;try{return Y.createRoot(o,u)}finally{se.usingClientEntryPoint=!1}}}const Ue="https://apigw.paziresh24.com/v1/searchia-api/v2/qs/index/slim_clinic_query_su";async function Ye(o,u){if(!o||o.trim().length===0)return null;try{const t=new URL(Ue);t.searchParams.set("query",o.trim());const s=await fetch(t.toString(),{method:"GET",headers:{apikey:u}});if(!s.ok)return console.warn(`Searchia API error: ${s.status} ${s.statusText}`),null;const f=await s.json();return f&&f.entity&&Array.isArray(f.entity.topQuerySuggestions)?f:(console.warn("Invalid API response structure:",f),null)}catch(t){return console.warn("Failed to fetch suggestions:",t),null}}function ze(o,u){let t=null;return function(...f){t!==null&&clearTimeout(t),t=setTimeout(()=>{o(...f)},u)}}function q(o){const u="https://www.paziresh24.com/s/",t=new URLSearchParams({text:o,ref:"search_suggestion_box_qs_sina",semantic_search:"true"});return`${u}?${t.toString()}`}const Ve=({value:o,onChange:u,onFocus:t,onBlur:s,onEnter:f,placeholder:m="جستجو...",className:h=""})=>{const w=R.useRef(null);R.useEffect(()=>{const a=w.current;if(a){a.style.height="auto";const d=a.scrollHeight,v=parseInt(getComputedStyle(a).lineHeight)||24,_=v+24,k=v*3+24,V=Math.min(Math.max(d,_),k);a.style.height=`${V}px`,a.style.overflowY=d>k?"auto":"hidden"}},[o]);const E=a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),f&&f())};return x.jsx("textarea",{ref:w,value:o,onChange:a=>u(a.target.value),onKeyDown:E,onFocus:t,onBlur:s,placeholder:m,className:h?`sina-search-input ${h}`:"sina-search-input",autoComplete:"off","aria-label":"جستجو",rows:1})},Be=({text:o,onClick:u,className:t="",highlight:s})=>{const f=()=>s?o.split(new RegExp(`(${s})`,"gi")).map((h,w)=>h.toLowerCase()===s.toLowerCase()?x.jsx("mark",{className:"sina-highlight",children:h},w):h):o;return x.jsx("li",{className:t?`sina-suggestion-item ${t}`:"sina-suggestion-item",onClick:u,role:"option",tabIndex:0,onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),u())},children:f()})},Ke=({value:o,onChange:u,onFocus:t,onBlur:s,onEnter:f,placeholder:m})=>x.jsx("div",{className:"sina-search-box",children:x.jsxs("div",{className:"sina-search-input-wrapper",children:[x.jsx(Ve,{value:o,onChange:u,onFocus:t,onBlur:s,onEnter:f,placeholder:m}),x.jsx("svg",{className:"sina-search-icon",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),He=({suggestions:o,query:u,isVisible:t,onSelect:s})=>{if(!t||o.length===0)return null;const f=h=>{const w=q(h);window.location.href=w,s(h)},m=()=>x.jsx("svg",{className:"sina-suggestion-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:x.jsx("path",{d:"M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});return x.jsx("div",{className:"sina-suggestions-container",children:x.jsx("ul",{className:"sina-suggestions-list",role:"listbox",children:o.map((h,w)=>x.jsxs("li",{className:"sina-suggestion-item-wrapper",onClick:()=>f(h),children:[x.jsx(m,{}),x.jsx(Be,{text:h,onClick:()=>f(h),highlight:u})]},`${h}-${w}`))})})},$e=`/* SINA Widget Styles - Mobile First */\r
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
`,Je=({config:o})=>{const[u,t]=R.useState({query:"",suggestions:[],isLoading:!1,isOpen:!1,error:null}),s=R.useRef(null);R.useEffect(()=>{s.current=ze(async a=>{if(!a||a.trim().length===0){t(v=>({...v,suggestions:[],isLoading:!1}));return}t(v=>({...v,isLoading:!0}));const d=await Ye(a,o.apiKey);if(d&&d.entity&&d.entity.topQuerySuggestions){const v=d.entity.topQuerySuggestions;t(_=>({..._,suggestions:v,isLoading:!1,error:null}))}else{const v=a&&a.trim().length>0?[a.trim()]:[];t(_=>({..._,suggestions:v,isLoading:!1,error:null}))}},300)},[o.apiKey]);const f=R.useCallback(a=>{t(d=>({...d,query:a,isOpen:!0})),s.current&&s.current(a)},[]),m=R.useCallback(()=>{t(a=>{const d=a.query||"";return s.current&&s.current(d),{...a,isOpen:a.suggestions.length>0}})},[]),h=R.useCallback(()=>{setTimeout(()=>{t(a=>({...a,isOpen:!1}))},200)},[]),w=R.useCallback(a=>{t(d=>({...d,query:a,isOpen:!1}))},[]),E=R.useCallback(()=>{t(a=>{const{query:d,suggestions:v}=a;if(v.length>0){const _=v[0],k=q(_);return window.location.href=k,{...a,query:_,isOpen:!1}}else if(d&&d.trim().length>0){const _=q(d.trim());return window.location.href=_,{...a,isOpen:!1}}return a})},[]);return x.jsxs("div",{className:"sina-widget",children:[x.jsx(Ke,{value:u.query,onChange:f,onFocus:m,onBlur:h,onEnter:E,placeholder:o.placeholder}),x.jsx(He,{suggestions:u.suggestions,query:u.query,isVisible:u.isOpen,onSelect:w})]})};function ue(o,u){let t=o.shadowRoot;t?t.innerHTML="":t=o.attachShadow({mode:"open"});const s=document.createElement("style");s.textContent=$e,t.appendChild(s);const f=document.createElement("div");f.id="sina-widget-root",t.appendChild(f),G(f).render(x.jsx(Je,{config:u}))}const le={containerId:"sina-search-root",placeholder:"از پذیرش24 بپرسید..."};function z(o){const u=o.containerId||le.containerId,t=document.getElementById(u);if(!t){console.error(`SINA Widget: Container element with id "${u}" not found`);return}const s={...le,...o};if(!s.apiKey){console.error("SINA Widget: apiKey is required");return}const f=t.getAttribute("data-city"),m=t.getAttribute("data-specialty"),h=t.getAttribute("data-placeholder");f&&(s.city=f),m&&(s.specialty=m),h&&(s.placeholder=h),ue(t,s)}function ce(o,...u){if(o==="init"){const t=u[0];t&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>z(t)):z(t))}}if(typeof window<"u"){const o=((fe=window.SinaWidget)==null?void 0:fe.q)||[],u=ce;u.q=o,o.length>0&&(o.forEach(([t,...s])=>{ce(t,...s)}),o.length=0),window.SinaWidget=u,window.SinaWidget.init=z}j.init=z,j.renderWidget=ue,Object.defineProperty(j,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=sina-sdk.js.map

var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="teststencil";var a;var i;var s;var o=false;var l=false;var f=false;var u=false;var $=false;var c=typeof window!=="undefined"?window:{};var v=c.CSS;var d=c.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return(d.head.attachShadow+"").indexOf("[native")>-1}();var p=function(e){return Promise.resolve(e)};var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y="{visibility:hidden}.hydrated{visibility:inherit}";var b=function(e,r){if(r===void 0){r=""}{return function(){return}}};var w=function(e,r){{return function(){return}}};var R=new WeakMap;var N=function(e,r,t){var n=Ee.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Ee.set(e,n)};var S=function(e,r,t,n){var a=x(r);var i=Ee.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=R.get(e);var o=void 0;if(!s){R.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var _=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=b("attachStyles",r.$tagName$);var i=S(m&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var x=function(e,r){return"sc-"+e.$tagName$};var C={};var T=function(e){return e!=null};var j=function(e){e=typeof e;return e==="object"||e==="function"};var E=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var A=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!j(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?M(null,a):a)}o=s}}};f(t);if(r){if(r.name){i=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var $=M(e,null);$.$attrs$=r;if(l.length>0){$.$children$=l}{$.$name$=i}return $}));var M=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var L={};var k=function(e){return e&&e.$tag$===L};var O=function(e,r,t,n,a,i){if(t!==n){var s=xe(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=P(t);var u=P(n);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(xe(c,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var $=j(n);if((s||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!$){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var U=/\s/;var P=function(e){return!e?[]:e.split(U)};var B=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||C;var s=r.$attrs$||C;{for(n in i){if(!(n in s)){O(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){O(a,n,i[n],s[n],t,r.$flags$)}};var I=function(e,r,t,n){var l=r.$children$[t];var $=0;var c;var v;var h;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=d.createTextNode("")}else{c=l.$elm$=d.createElement(l.$flags$&2?"slot-fb":l.$tag$);{B(null,l,u)}if(T(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for($=0;$<l.$children$.length;++$){v=I(e,l,$,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===l.$tag$&&e.$elm$){H(e.$elm$,false)}}}return c};var H=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){G(a).insertBefore(a,F(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){H(a,r)}}h.$flags$&=~1};var z=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=I(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,F(r))}}}};var q=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{H(a,true)}}a.remove()}}};var V=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var u=n[0];var $=n[f];var c;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++i]}else if($==null){$=n[--f]}else if(W(o,u)){D(o,u);o=r[++a];u=n[++i]}else if(W(l,$)){D(l,$);l=r[--s];$=n[--f]}else if(W(o,$)){if(o.$tag$==="slot"||$.$tag$==="slot"){H(o.$elm$.parentNode,false)}D(o,$);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];$=n[--f]}else if(W(l,u)){if(o.$tag$==="slot"||$.$tag$==="slot"){H(l.$elm$.parentNode,false)}D(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=n[++i]}else{{c=I(r&&r[i],t,i,e);u=n[++i]}if(c){{G(o.$elm$).insertBefore(c,F(o.$elm$))}}}}if(a>s){z(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){q(r,a,s)}};var W=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var F=function(e){return e&&e["s-ol"]||e};var G=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var D=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{B(e,r,u)}}if(n!==null&&a!==null){V(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}z(t,null,r,a,0,a.length-1)}else if(n!==null){q(n,0,n.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var J=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}J(t)}}};var K=[];var Q=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var u=f.length;for(;o<u;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(X(t,a)){i=K.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{K.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){K.map((function(e){if(X(e.$nodeToRelocate$,t["s-sn"])){i=K.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!K.some((function(e){return e.$nodeToRelocate$===t}))){K.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){Q(r)}}};var X=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var Y=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var u=e.$vnode$||M(null,null);var $=k(r)?r:A(null,null,r);s=t.tagName;$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=u.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=m&&(n.$flags$&1)!==0;l=false}D(u,$);{h.$flags$|=1;if(f){Q($.$elm$);var c=void 0;var v=void 0;var p=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<K.length;w++){c=K[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){p=d.createTextNode("");p["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=p,v)}}for(w=0;w<K.length;w++){c=K[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;p=v["s-ol"];while(p=p.previousSibling){b=p["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){J($.$elm$)}h.$flags$&=~1;K.length=0}};var Z=function(e){return Ne(e).$hostElement$};var ee=e("c",(function(e,r,t){var n=Z(e);return{emit:function(e){return re(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var re=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var te=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ne=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}te(e,e.$ancestorComponent$);var t=function(){return ae(e,r)};return Pe(t)};var ae=function(e,r){var t=b("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{a=ue(n,"componentWillLoad")}}t();return $e(a,(function(){return ie(e,n,r)}))};var ie=function(e,r,t){var n=e.$hostElement$;var a=b("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){_(e)}var s=b("render",e.$cmpMeta$.$tagName$);{{Y(e,se(e,r))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return oe(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var se=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){Ce(t)}return r};var oe=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=b("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ce(t)}n();{e.$onReadyResolve$(t);if(!a){fe()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ue((function(){return ne(e,false)}))}e.$flags$&=~(4|512)}};var le=function(e){{var r=Ne(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){ne(r,false)}return t}};var fe=function(e){{ce(d.documentElement)}Ue((function(){return re(c,"appload",{detail:{namespace:n}})}))};var ue=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Ce(n)}}return undefined};var $e=function(e,r){return e&&e.then?e.then(r):r()};var ce=function(e){return e.classList.add("hydrated")};var ve=function(e,r){if(e!=null&&!j(e)){if(r&1){return String(e)}return e}return e};var de=function(e,r){return Ne(e).$instanceValues$.get(r)};var he=function(e,r,t,n){var a=Ne(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=ve(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){Ce(n)}}))}}if((s&(2|16))===2){ne(a,false)}}}};var me=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return de(this,n)},set:function(e){he(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var pe=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,u;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=je(a);if(!s.then)return[3,2];e=w();return[4,s];case 1:s=$.sent();e();$.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}me(s,a,2);s.isProxied=true}t=b("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Ce(c)}{n.$flags$&=~8}{n.$flags$|=128}t();i=x(a);if(!(!Ee.has(i)&&s.style))return[3,5];o=b("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-cb0bfb69.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=$.sent();$.label=4;case 4:N(i,l,!!(a.$flags$&1));o();$.label=5;case 5:f=n.$ancestorComponent$;u=function(){return ne(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var ge=function(e){if((h.$flags$&1)===0){var r=Ne(e);var t=r.$cmpMeta$;var n=b("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){ye(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){te(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ue((function(){return pe(e,r,t)}))}}n()}};var ye=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var be=function(e){if((h.$flags$&1)===0){var r=Ne(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var we=e("b",(function(e,r){if(r===void 0){r={}}var t=b();var n=[];var a=r.exclude||[];var i=c.customElements;var s=d.head;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var u;var $=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;_e(r,t);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if($){f.push(this)}else{h.jmp((function(){return ge(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return be(e)}))};r.prototype.forceUpdate=function(){le(this)};r.prototype.componentOnReady=function(){return Ne(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,me(o,t,1))}}))}));{l.innerHTML=n+y;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}$=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return u=setTimeout(fe,30)}))}}t()}));var Re=new WeakMap;var Ne=function(e){return Re.get(e)};var Se=e("r",(function(e,r){return Re.set(r.$lazyInstance$=e,r)}));var _e=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Re.set(e,t)};var xe=function(e,r){return r in e};var Ce=function(e){return console.error(e)};var Te=new Map;var je=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=Te.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Te.set(i,e)}return e[a]}),Ce)};var Ee=new Map;var Ae=[];var Me=[];var Le=function(e,r){return function(t){e.push(t);if(!$){$=true;if(r&&h.$flags$&4){Ue(Oe)}else{h.raf(Oe)}}}};var ke=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Ce(t)}}e.length=0};var Oe=function(){ke(Ae);{ke(Me);if($=Ae.length>0){h.raf(Oe)}}};var Ue=function(e){return p().then(e)};var Pe=Le(Me,true);var Be=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-b2525e42.system.js").then((function(){if(h.$cssShim$=c.__cssshim){return h.$cssShim$.i()}else{return 0}}))}return p()}));var Ie=e("p",(function(){{h.$cssShim$=c.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href;{He(t.resourcesUrl,e)}if(!c.customElements){return r.import("./p-67940bdc.system.js").then((function(){return t}))}}return p(t)}));var He=function(e,r){var t=E(n);try{c[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;c[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=d.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(c[t].m);o.remove()}}));a.set(i,s);d.head.appendChild(o)}return s}}}}}}));
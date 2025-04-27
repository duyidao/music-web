(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ln(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Q={},Tt=[],We=()=>{},xo=()=>!1,v0=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),an=e=>e.startsWith("onUpdate:"),ie=Object.assign,un=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},To=Object.prototype.hasOwnProperty,N=(e,t)=>To.call(e,t),j=Array.isArray,St=e=>w0(e)==="[object Map]",cs=e=>w0(e)==="[object Set]",O=e=>typeof e=="function",te=e=>typeof e=="string",it=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",fs=e=>(Z(e)||O(e))&&O(e.then)&&O(e.catch),hs=Object.prototype.toString,w0=e=>hs.call(e),So=e=>w0(e).slice(8,-1),ds=e=>w0(e)==="[object Object]",cn=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nt=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A0=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mo=/-(\w)/g,Ke=A0(e=>e.replace(Mo,(t,n)=>n?n.toUpperCase():"")),Eo=/\B([A-Z])/g,rt=A0(e=>e.replace(Eo,"-$1").toLowerCase()),gs=A0(e=>e.charAt(0).toUpperCase()+e.slice(1)),O0=A0(e=>e?`on${gs(e)}`:""),pe=(e,t)=>!Object.is(e,t),R0=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ps=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},ko=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Rn;const _0=()=>Rn||(Rn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yt(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=te(s)?Co(s):yt(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(te(e)||Z(e))return e}const Bo=/;(?![^(]*\))/g,Do=/:([^]+)/,jo=/\/\*[^]*?\*\//g;function Co(e){const t={};return e.replace(jo,"").split(Bo).forEach(n=>{if(n){const s=n.split(Do);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ye(e){let t="";if(te(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=Ye(e[n]);s&&(t+=s+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Oo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ro=ln(Oo);function ms(e){return!!e||e===""}const ys=e=>!!(e&&e.__v_isRef===!0),pt=e=>te(e)?e:e==null?"":j(e)||Z(e)&&(e.toString===hs||!O(e.toString))?ys(e)?pt(e.value):JSON.stringify(e,bs,2):String(e),bs=(e,t)=>ys(t)?bs(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[P0(s,r)+" =>"]=o,n),{})}:cs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>P0(n))}:it(t)?P0(t):Z(t)&&!j(t)&&!ds(t)?String(t):t,P0=(e,t="")=>{var n;return it(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ve;class Po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ve,!t&&ve&&(this.index=(ve.scopes||(ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ve;try{return ve=this,t()}finally{ve=n}}}on(){ve=this}off(){ve=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Lo(){return ve}let G;const L0=new WeakSet;class vs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&ve.active&&ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,L0.has(this)&&(L0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||As(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pn(this),_s(this);const t=G,n=ke;G=this,ke=!0;try{return this.fn()}finally{Is(this),G=t,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)dn(t);this.deps=this.depsTail=void 0,Pn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?L0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){z0(this)&&this.run()}get dirty(){return z0(this)}}let ws=0,Qt,Ut;function As(e,t=!1){if(e.flags|=8,t){e.next=Ut,Ut=e;return}e.next=Qt,Qt=e}function fn(){ws++}function hn(){if(--ws>0)return;if(Ut){let t=Ut;for(Ut=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Qt;){let t=Qt;for(Qt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function _s(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Is(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),dn(s),Ho(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function z0(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(xs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function xs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yt))return;e.globalVersion=Yt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!z0(e)){e.flags&=-3;return}const n=G,s=ke;G=e,ke=!0;try{_s(e);const o=e.fn(e._value);(t.version===0||pe(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{G=n,ke=s,Is(e),e.flags&=-3}}function dn(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)dn(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ho(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ke=!0;const Ts=[];function lt(){Ts.push(ke),ke=!1}function at(){const e=Ts.pop();ke=e===void 0?!0:e}function Pn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=G;G=void 0;try{t()}finally{G=n}}}let Yt=0;class Wo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class I0{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!G||!ke||G===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==G)n=this.activeLink=new Wo(G,this),G.deps?(n.prevDep=G.depsTail,G.depsTail.nextDep=n,G.depsTail=n):G.deps=G.depsTail=n,Ss(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=G.depsTail,n.nextDep=void 0,G.depsTail.nextDep=n,G.depsTail=n,G.deps===n&&(G.deps=s)}return n}trigger(t){this.version++,Yt++,this.notify(t)}notify(t){fn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hn()}}}function Ss(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ss(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const K0=new WeakMap,mt=Symbol(""),Y0=Symbol(""),qt=Symbol("");function re(e,t,n){if(ke&&G){let s=K0.get(e);s||K0.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new I0),o.map=s,o.key=n),o.track()}}function ze(e,t,n,s,o,r){const l=K0.get(e);if(!l){Yt++;return}const a=u=>{u&&u.trigger()};if(fn(),t==="clear")l.forEach(a);else{const u=j(e),h=u&&cn(n);if(u&&n==="length"){const c=Number(s);l.forEach((g,p)=>{(p==="length"||p===qt||!it(p)&&p>=c)&&a(g)})}else switch((n!==void 0||l.has(void 0))&&a(l.get(n)),h&&a(l.get(qt)),t){case"add":u?h&&a(l.get("length")):(a(l.get(mt)),St(e)&&a(l.get(Y0)));break;case"delete":u||(a(l.get(mt)),St(e)&&a(l.get(Y0)));break;case"set":St(e)&&a(l.get(mt));break}}hn()}function At(e){const t=F(e);return t===e?t:(re(t,"iterate",qt),Ie(e)?t:t.map(le))}function x0(e){return re(e=F(e),"iterate",qt),e}const Fo={__proto__:null,[Symbol.iterator](){return H0(this,Symbol.iterator,le)},concat(...e){return At(this).concat(...e.map(t=>j(t)?At(t):t))},entries(){return H0(this,"entries",e=>(e[1]=le(e[1]),e))},every(e,t){return Ue(this,"every",e,t,void 0,arguments)},filter(e,t){return Ue(this,"filter",e,t,n=>n.map(le),arguments)},find(e,t){return Ue(this,"find",e,t,le,arguments)},findIndex(e,t){return Ue(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ue(this,"findLast",e,t,le,arguments)},findLastIndex(e,t){return Ue(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ue(this,"forEach",e,t,void 0,arguments)},includes(...e){return W0(this,"includes",e)},indexOf(...e){return W0(this,"indexOf",e)},join(e){return At(this).join(e)},lastIndexOf(...e){return W0(this,"lastIndexOf",e)},map(e,t){return Ue(this,"map",e,t,void 0,arguments)},pop(){return Rt(this,"pop")},push(...e){return Rt(this,"push",e)},reduce(e,...t){return Ln(this,"reduce",e,t)},reduceRight(e,...t){return Ln(this,"reduceRight",e,t)},shift(){return Rt(this,"shift")},some(e,t){return Ue(this,"some",e,t,void 0,arguments)},splice(...e){return Rt(this,"splice",e)},toReversed(){return At(this).toReversed()},toSorted(e){return At(this).toSorted(e)},toSpliced(...e){return At(this).toSpliced(...e)},unshift(...e){return Rt(this,"unshift",e)},values(){return H0(this,"values",le)}};function H0(e,t,n){const s=x0(e),o=s[t]();return s!==e&&!Ie(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const No=Array.prototype;function Ue(e,t,n,s,o,r){const l=x0(e),a=l!==e&&!Ie(e),u=l[t];if(u!==No[t]){const g=u.apply(e,r);return a?le(g):g}let h=n;l!==e&&(a?h=function(g,p){return n.call(this,le(g),p,e)}:n.length>2&&(h=function(g,p){return n.call(this,g,p,e)}));const c=u.call(l,h,s);return a&&o?o(c):c}function Ln(e,t,n,s){const o=x0(e);let r=n;return o!==e&&(Ie(e)?n.length>3&&(r=function(l,a,u){return n.call(this,l,a,u,e)}):r=function(l,a,u){return n.call(this,l,le(a),u,e)}),o[t](r,...s)}function W0(e,t,n){const s=F(e);re(s,"iterate",qt);const o=s[t](...n);return(o===-1||o===!1)&&yn(n[0])?(n[0]=F(n[0]),s[t](...n)):o}function Rt(e,t,n=[]){lt(),fn();const s=F(e)[t].apply(e,n);return hn(),at(),s}const Qo=ln("__proto__,__v_isRef,__isVue"),Ms=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(it));function Uo(e){it(e)||(e=String(e));const t=F(this);return re(t,"has",e),t.hasOwnProperty(e)}class Es{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?$o:js:r?Ds:Bs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=j(t);if(!o){let u;if(l&&(u=Fo[n]))return u;if(n==="hasOwnProperty")return Uo}const a=Reflect.get(t,n,ne(t)?t:s);return(it(n)?Ms.has(n):Qo(n))||(o||re(t,"get",n),r)?a:ne(a)?l&&cn(n)?a:a.value:Z(a)?o?Cs(a):pn(a):a}}class ks extends Es{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const u=bt(r);if(!Ie(s)&&!bt(s)&&(r=F(r),s=F(s)),!j(t)&&ne(r)&&!ne(s))return u?!1:(r.value=s,!0)}const l=j(t)&&cn(n)?Number(n)<t.length:N(t,n),a=Reflect.set(t,n,s,ne(t)?t:o);return t===F(o)&&(l?pe(s,r)&&ze(t,"set",n,s):ze(t,"add",n,s)),a}deleteProperty(t,n){const s=N(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&ze(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!it(n)||!Ms.has(n))&&re(t,"has",n),s}ownKeys(t){return re(t,"iterate",j(t)?"length":mt),Reflect.ownKeys(t)}}class Vo extends Es{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zo=new ks,Ko=new Vo,Yo=new ks(!0);const q0=e=>e,s0=e=>Reflect.getPrototypeOf(e);function qo(e,t,n){return function(...s){const o=this.__v_raw,r=F(o),l=St(r),a=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,h=o[e](...s),c=n?q0:t?G0:le;return!t&&re(r,"iterate",u?Y0:mt),{next(){const{value:g,done:p}=h.next();return p?{value:g,done:p}:{value:a?[c(g[0]),c(g[1])]:c(g),done:p}},[Symbol.iterator](){return this}}}}function o0(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Go(e,t){const n={get(o){const r=this.__v_raw,l=F(r),a=F(o);e||(pe(o,a)&&re(l,"get",o),re(l,"get",a));const{has:u}=s0(l),h=t?q0:e?G0:le;if(u.call(l,o))return h(r.get(o));if(u.call(l,a))return h(r.get(a));r!==l&&r.get(o)},get size(){const o=this.__v_raw;return!e&&re(F(o),"iterate",mt),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,l=F(r),a=F(o);return e||(pe(o,a)&&re(l,"has",o),re(l,"has",a)),o===a?r.has(o):r.has(o)||r.has(a)},forEach(o,r){const l=this,a=l.__v_raw,u=F(a),h=t?q0:e?G0:le;return!e&&re(u,"iterate",mt),a.forEach((c,g)=>o.call(r,h(c),h(g),l))}};return ie(n,e?{add:o0("add"),set:o0("set"),delete:o0("delete"),clear:o0("clear")}:{add(o){!t&&!Ie(o)&&!bt(o)&&(o=F(o));const r=F(this);return s0(r).has.call(r,o)||(r.add(o),ze(r,"add",o,o)),this},set(o,r){!t&&!Ie(r)&&!bt(r)&&(r=F(r));const l=F(this),{has:a,get:u}=s0(l);let h=a.call(l,o);h||(o=F(o),h=a.call(l,o));const c=u.call(l,o);return l.set(o,r),h?pe(r,c)&&ze(l,"set",o,r):ze(l,"add",o,r),this},delete(o){const r=F(this),{has:l,get:a}=s0(r);let u=l.call(r,o);u||(o=F(o),u=l.call(r,o)),a&&a.call(r,o);const h=r.delete(o);return u&&ze(r,"delete",o,void 0),h},clear(){const o=F(this),r=o.size!==0,l=o.clear();return r&&ze(o,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=qo(o,e,t)}),n}function gn(e,t){const n=Go(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(N(n,o)&&o in s?n:s,o,r)}const Jo={get:gn(!1,!1)},Xo={get:gn(!1,!0)},Zo={get:gn(!0,!1)};const Bs=new WeakMap,Ds=new WeakMap,js=new WeakMap,$o=new WeakMap;function ei(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ti(e){return e.__v_skip||!Object.isExtensible(e)?0:ei(So(e))}function pn(e){return bt(e)?e:mn(e,!1,zo,Jo,Bs)}function ni(e){return mn(e,!1,Yo,Xo,Ds)}function Cs(e){return mn(e,!0,Ko,Zo,js)}function mn(e,t,n,s,o){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const l=ti(e);if(l===0)return e;const a=new Proxy(e,l===2?s:n);return o.set(e,a),a}function Mt(e){return bt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function bt(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function yn(e){return e?!!e.__v_raw:!1}function F(e){const t=e&&e.__v_raw;return t?F(t):e}function si(e){return!N(e,"__v_skip")&&Object.isExtensible(e)&&ps(e,"__v_skip",!0),e}const le=e=>Z(e)?pn(e):e,G0=e=>Z(e)?Cs(e):e;function ne(e){return e?e.__v_isRef===!0:!1}function z(e){return oi(e,!1)}function oi(e,t){return ne(e)?e:new ii(e,t)}class ii{constructor(t,n){this.dep=new I0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:F(t),this._value=n?t:le(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ie(t)||bt(t);t=s?t:F(t),pe(t,n)&&(this._rawValue=t,this._value=s?t:le(t),this.dep.trigger())}}function V(e){return ne(e)?e.value:e}const ri={get:(e,t,n)=>t==="__v_raw"?e:V(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return ne(o)&&!ne(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Os(e){return Mt(e)?e:new Proxy(e,ri)}class li{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new I0,{get:s,set:o}=t(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=o}get value(){return this._value=this._get()}set value(t){this._set(t)}}function ai(e){return new li(e)}class ui{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new I0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return As(this,!0),!0}get value(){const t=this.dep.track();return xs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ci(e,t,n=!1){let s,o;return O(e)?s=e:(s=e.get,o=e.set),new ui(s,o,n)}const i0={},c0=new WeakMap;let dt;function fi(e,t=!1,n=dt){if(n){let s=c0.get(n);s||c0.set(n,s=[]),s.push(e)}}function hi(e,t,n=Q){const{immediate:s,deep:o,once:r,scheduler:l,augmentJob:a,call:u}=n,h=E=>o?E:Ie(E)||o===!1||o===0?tt(E,1):tt(E);let c,g,p,y,S=!1,M=!1;if(ne(e)?(g=()=>e.value,S=Ie(e)):Mt(e)?(g=()=>h(e),S=!0):j(e)?(M=!0,S=e.some(E=>Mt(E)||Ie(E)),g=()=>e.map(E=>{if(ne(E))return E.value;if(Mt(E))return h(E);if(O(E))return u?u(E,2):E()})):O(e)?t?g=u?()=>u(e,2):e:g=()=>{if(p){lt();try{p()}finally{at()}}const E=dt;dt=c;try{return u?u(e,3,[y]):e(y)}finally{dt=E}}:g=We,t&&o){const E=g,L=o===!0?1/0:o;g=()=>tt(E(),L)}const K=Lo(),R=()=>{c.stop(),K&&K.active&&un(K.effects,c)};if(r&&t){const E=t;t=(...L)=>{E(...L),R()}}let C=M?new Array(e.length).fill(i0):i0;const P=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const L=c.run();if(o||S||(M?L.some((J,$)=>pe(J,C[$])):pe(L,C))){p&&p();const J=dt;dt=c;try{const $=[L,C===i0?void 0:M&&C[0]===i0?[]:C,y];u?u(t,3,$):t(...$),C=L}finally{dt=J}}}else c.run()};return a&&a(P),c=new vs(g),c.scheduler=l?()=>l(P,!1):P,y=E=>fi(E,!1,c),p=c.onStop=()=>{const E=c0.get(c);if(E){if(u)u(E,4);else for(const L of E)L();c0.delete(c)}},t?s?P(!0):C=c.run():l?l(P.bind(null,!0),!0):c.run(),R.pause=c.pause.bind(c),R.resume=c.resume.bind(c),R.stop=R,R}function tt(e,t=1/0,n){if(t<=0||!Z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ne(e))tt(e.value,t,n);else if(j(e))for(let s=0;s<e.length;s++)tt(e[s],t,n);else if(cs(e)||St(e))e.forEach(s=>{tt(s,t,n)});else if(ds(e)){for(const s in e)tt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&tt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $t(e,t,n,s){try{return s?e(...s):e()}catch(o){T0(o,t,n)}}function Ne(e,t,n,s){if(O(e)){const o=$t(e,t,n,s);return o&&fs(o)&&o.catch(r=>{T0(r,t,n)}),o}if(j(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Ne(e[r],t,n,s));return o}}function T0(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Q;if(t){let a=t.parent;const u=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,u,h)===!1)return}a=a.parent}if(r){lt(),$t(r,null,10,[e,u,h]),at();return}}di(e,n,o,s,l)}function di(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const de=[];let Pe=-1;const Et=[];let $e=null,_t=0;const Rs=Promise.resolve();let f0=null;function Ps(e){const t=f0||Rs;return e?t.then(this?e.bind(this):e):t}function gi(e){let t=Pe+1,n=de.length;for(;t<n;){const s=t+n>>>1,o=de[s],r=Gt(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function bn(e){if(!(e.flags&1)){const t=Gt(e),n=de[de.length-1];!n||!(e.flags&2)&&t>=Gt(n)?de.push(e):de.splice(gi(t),0,e),e.flags|=1,Ls()}}function Ls(){f0||(f0=Rs.then(Ws))}function pi(e){j(e)?Et.push(...e):$e&&e.id===-1?$e.splice(_t+1,0,e):e.flags&1||(Et.push(e),e.flags|=1),Ls()}function Hn(e,t,n=Pe+1){for(;n<de.length;n++){const s=de[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;de.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Hs(e){if(Et.length){const t=[...new Set(Et)].sort((n,s)=>Gt(n)-Gt(s));if(Et.length=0,$e){$e.push(...t);return}for($e=t,_t=0;_t<$e.length;_t++){const n=$e[_t];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$e=null,_t=0}}const Gt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ws(e){try{for(Pe=0;Pe<de.length;Pe++){const t=de[Pe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),$t(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pe<de.length;Pe++){const t=de[Pe];t&&(t.flags&=-2)}Pe=-1,de.length=0,Hs(),f0=null,(de.length||Et.length)&&Ws()}}let Ee=null,Fs=null;function h0(e){const t=Ee;return Ee=e,Fs=e&&e.type.__scopeId||null,t}function mi(e,t=Ee,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Kn(-1);const r=h0(t);let l;try{l=e(...o)}finally{h0(r),s._d&&Kn(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function ft(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let l=0;l<o.length;l++){const a=o[l];r&&(a.oldValue=r[l].value);let u=a.dir[s];u&&(lt(),Ne(u,n,8,[e.el,a,e,t]),at())}}const yi=Symbol("_vte"),bi=e=>e.__isTeleport;function vn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,vn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function qe(e,t){return O(e)?ie({name:e.name},t,{setup:e}):e}function Ns(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function d0(e,t,n,s,o=!1){if(j(e)){e.forEach((S,M)=>d0(S,t&&(j(t)?t[M]:t),n,s,o));return}if(Vt(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&d0(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?Sn(s.component):s.el,l=o?null:r,{i:a,r:u}=e,h=t&&t.r,c=a.refs===Q?a.refs={}:a.refs,g=a.setupState,p=F(g),y=g===Q?()=>!1:S=>N(p,S);if(h!=null&&h!==u&&(te(h)?(c[h]=null,y(h)&&(g[h]=null)):ne(h)&&(h.value=null)),O(u))$t(u,a,12,[l,c]);else{const S=te(u),M=ne(u);if(S||M){const K=()=>{if(e.f){const R=S?y(u)?g[u]:c[u]:u.value;o?j(R)&&un(R,r):j(R)?R.includes(r)||R.push(r):S?(c[u]=[r],y(u)&&(g[u]=c[u])):(u.value=[r],e.k&&(c[e.k]=u.value))}else S?(c[u]=l,y(u)&&(g[u]=l)):M&&(u.value=l,e.k&&(c[e.k]=l))};l?(K.id=-1,be(K,n)):K()}}}_0().requestIdleCallback;_0().cancelIdleCallback;const Vt=e=>!!e.type.__asyncLoader,Qs=e=>e.type.__isKeepAlive;function vi(e,t){Us(e,"a",t)}function wi(e,t){Us(e,"da",t)}function Us(e,t,n=ue){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(S0(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Qs(o.parent.vnode)&&Ai(s,t,n,o),o=o.parent}}function Ai(e,t,n,s){const o=S0(t,e,s,!0);An(()=>{un(s[t],o)},n)}function S0(e,t,n=ue,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...l)=>{lt();const a=e0(n),u=Ne(t,n,e,l);return a(),at(),u});return s?o.unshift(r):o.push(r),r}}const Ge=e=>(t,n=ue)=>{(!Zt||e==="sp")&&S0(e,(...s)=>t(...s),n)},_i=Ge("bm"),wn=Ge("m"),Ii=Ge("bu"),xi=Ge("u"),Ti=Ge("bum"),An=Ge("um"),Si=Ge("sp"),Mi=Ge("rtg"),Ei=Ge("rtc");function ki(e,t=ue){S0("ec",e,t)}const Bi=Symbol.for("v-ndc");function _n(e,t,n,s){let o;const r=n,l=j(e);if(l||te(e)){const a=l&&Mt(e);let u=!1;a&&(u=!Ie(e),e=x0(e)),o=new Array(e.length);for(let h=0,c=e.length;h<c;h++)o[h]=t(u?le(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,r)}else if(Z(e))if(e[Symbol.iterator])o=Array.from(e,(a,u)=>t(a,u,void 0,r));else{const a=Object.keys(e);o=new Array(a.length);for(let u=0,h=a.length;u<h;u++){const c=a[u];o[u]=t(e[c],c,u,r)}}else o=[];return o}const J0=e=>e?co(e)?Sn(e):J0(e.parent):null,zt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>J0(e.parent),$root:e=>J0(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zs(e),$forceUpdate:e=>e.f||(e.f=()=>{bn(e.update)}),$nextTick:e=>e.n||(e.n=Ps.bind(e.proxy)),$watch:e=>er.bind(e)}),F0=(e,t)=>e!==Q&&!e.__isScriptSetup&&N(e,t),Di={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:l,type:a,appContext:u}=e;let h;if(t[0]!=="$"){const y=l[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(F0(s,t))return l[t]=1,s[t];if(o!==Q&&N(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&N(h,t))return l[t]=3,r[t];if(n!==Q&&N(n,t))return l[t]=4,n[t];X0&&(l[t]=0)}}const c=zt[t];let g,p;if(c)return t==="$attrs"&&re(e.attrs,"get",""),c(e);if((g=a.__cssModules)&&(g=g[t]))return g;if(n!==Q&&N(n,t))return l[t]=4,n[t];if(p=u.config.globalProperties,N(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return F0(o,t)?(o[t]=n,!0):s!==Q&&N(s,t)?(s[t]=n,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},l){let a;return!!n[l]||e!==Q&&N(e,l)||F0(t,l)||(a=r[0])&&N(a,l)||N(s,l)||N(zt,l)||N(o.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:N(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function g0(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function ji(e,t){return!e||!t?e||t:j(e)&&j(t)?e.concat(t):ie({},g0(e),g0(t))}let X0=!0;function Ci(e){const t=zs(e),n=e.proxy,s=e.ctx;X0=!1,t.beforeCreate&&Wn(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:l,watch:a,provide:u,inject:h,created:c,beforeMount:g,mounted:p,beforeUpdate:y,updated:S,activated:M,deactivated:K,beforeDestroy:R,beforeUnmount:C,destroyed:P,unmounted:E,render:L,renderTracked:J,renderTriggered:$,errorCaptured:ee,serverPrefetch:ce,expose:Se,inheritAttrs:Qe,components:Xe,directives:Ze,filters:j0}=t;if(h&&Oi(h,s,null),l)for(const X in l){const Y=l[X];O(Y)&&(s[X]=Y.bind(n))}if(o){const X=o.call(n,n);Z(X)&&(e.data=pn(X))}if(X0=!0,r)for(const X in r){const Y=r[X],ut=O(Y)?Y.bind(n,n):O(Y.get)?Y.get.bind(n,n):We,t0=!O(Y)&&O(Y.set)?Y.set.bind(n):We,ct=st({get:ut,set:t0});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>ct.value,set:De=>ct.value=De})}if(a)for(const X in a)Vs(a[X],s,n,X);if(u){const X=O(u)?u.call(n):u;Reflect.ownKeys(X).forEach(Y=>{Fi(Y,X[Y])})}c&&Wn(c,e,"c");function fe(X,Y){j(Y)?Y.forEach(ut=>X(ut.bind(n))):Y&&X(Y.bind(n))}if(fe(_i,g),fe(wn,p),fe(Ii,y),fe(xi,S),fe(vi,M),fe(wi,K),fe(ki,ee),fe(Ei,J),fe(Mi,$),fe(Ti,C),fe(An,E),fe(Si,ce),j(Se))if(Se.length){const X=e.exposed||(e.exposed={});Se.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>n[Y],set:ut=>n[Y]=ut})})}else e.exposed||(e.exposed={});L&&e.render===We&&(e.render=L),Qe!=null&&(e.inheritAttrs=Qe),Xe&&(e.components=Xe),Ze&&(e.directives=Ze),ce&&Ns(e)}function Oi(e,t,n=We){j(e)&&(e=Z0(e));for(const s in e){const o=e[s];let r;Z(o)?"default"in o?r=l0(o.from||s,o.default,!0):r=l0(o.from||s):r=l0(o),ne(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[s]=r}}function Wn(e,t,n){Ne(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vs(e,t,n,s){let o=s.includes(".")?oo(n,s):()=>n[s];if(te(e)){const r=t[e];O(r)&&nt(o,r)}else if(O(e))nt(o,e.bind(n));else if(Z(e))if(j(e))e.forEach(r=>Vs(r,t,n,s));else{const r=O(e.handler)?e.handler.bind(n):t[e.handler];O(r)&&nt(o,r,e)}}function zs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,a=r.get(t);let u;return a?u=a:!o.length&&!n&&!s?u=t:(u={},o.length&&o.forEach(h=>p0(u,h,l,!0)),p0(u,t,l)),Z(t)&&r.set(t,u),u}function p0(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&p0(e,r,n,!0),o&&o.forEach(l=>p0(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const a=Ri[l]||n&&n[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const Ri={data:Fn,props:Nn,emits:Nn,methods:Ht,computed:Ht,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Ht,directives:Ht,watch:Li,provide:Fn,inject:Pi};function Fn(e,t){return t?e?function(){return ie(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Pi(e,t){return Ht(Z0(e),Z0(t))}function Z0(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Ht(e,t){return e?ie(Object.create(null),e,t):t}function Nn(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:ie(Object.create(null),g0(e),g0(t??{})):t}function Li(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const s in t)n[s]=he(e[s],t[s]);return n}function Ks(){return{app:null,config:{isNativeTag:xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hi=0;function Wi(e,t){return function(s,o=null){O(s)||(s=ie({},s)),o!=null&&!Z(o)&&(o=null);const r=Ks(),l=new WeakSet,a=[];let u=!1;const h=r.app={_uid:Hi++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:_r,get config(){return r.config},set config(c){},use(c,...g){return l.has(c)||(c&&O(c.install)?(l.add(c),c.install(h,...g)):O(c)&&(l.add(c),c(h,...g))),h},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),h},component(c,g){return g?(r.components[c]=g,h):r.components[c]},directive(c,g){return g?(r.directives[c]=g,h):r.directives[c]},mount(c,g,p){if(!u){const y=h._ceVNode||ae(s,o);return y.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(y,c,p),u=!0,h._container=c,c.__vue_app__=h,Sn(y.component)}},onUnmount(c){a.push(c)},unmount(){u&&(Ne(a,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(c,g){return r.provides[c]=g,h},runWithContext(c){const g=kt;kt=h;try{return c()}finally{kt=g}}};return h}}let kt=null;function Fi(e,t){if(ue){let n=ue.provides;const s=ue.parent&&ue.parent.provides;s===n&&(n=ue.provides=Object.create(s)),n[e]=t}}function l0(e,t,n=!1){const s=ue||Ee;if(s||kt){const o=kt?kt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}const Ys={},qs=()=>Object.create(Ys),Gs=e=>Object.getPrototypeOf(e)===Ys;function Ni(e,t,n,s=!1){const o={},r=qs();e.propsDefaults=Object.create(null),Js(e,t,o,r);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=s?o:ni(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Qi(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:l}}=e,a=F(o),[u]=e.propsOptions;let h=!1;if((s||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let g=0;g<c.length;g++){let p=c[g];if(M0(e.emitsOptions,p))continue;const y=t[p];if(u)if(N(r,p))y!==r[p]&&(r[p]=y,h=!0);else{const S=Ke(p);o[S]=$0(u,a,S,y,e,!1)}else y!==r[p]&&(r[p]=y,h=!0)}}}else{Js(e,t,o,r)&&(h=!0);let c;for(const g in a)(!t||!N(t,g)&&((c=rt(g))===g||!N(t,c)))&&(u?n&&(n[g]!==void 0||n[c]!==void 0)&&(o[g]=$0(u,a,g,void 0,e,!0)):delete o[g]);if(r!==a)for(const g in r)(!t||!N(t,g))&&(delete r[g],h=!0)}h&&ze(e.attrs,"set","")}function Js(e,t,n,s){const[o,r]=e.propsOptions;let l=!1,a;if(t)for(let u in t){if(Nt(u))continue;const h=t[u];let c;o&&N(o,c=Ke(u))?!r||!r.includes(c)?n[c]=h:(a||(a={}))[c]=h:M0(e.emitsOptions,u)||(!(u in s)||h!==s[u])&&(s[u]=h,l=!0)}if(r){const u=F(n),h=a||Q;for(let c=0;c<r.length;c++){const g=r[c];n[g]=$0(o,u,g,h[g],e,!N(h,g))}}return l}function $0(e,t,n,s,o,r){const l=e[n];if(l!=null){const a=N(l,"default");if(a&&s===void 0){const u=l.default;if(l.type!==Function&&!l.skipFactory&&O(u)){const{propsDefaults:h}=o;if(n in h)s=h[n];else{const c=e0(o);s=h[n]=u.call(null,t),c()}}else s=u;o.ce&&o.ce._setProp(n,s)}l[0]&&(r&&!a?s=!1:l[1]&&(s===""||s===rt(n))&&(s=!0))}return s}const Ui=new WeakMap;function Xs(e,t,n=!1){const s=n?Ui:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,l={},a=[];let u=!1;if(!O(e)){const c=g=>{u=!0;const[p,y]=Xs(g,t,!0);ie(l,p),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!u)return Z(e)&&s.set(e,Tt),Tt;if(j(r))for(let c=0;c<r.length;c++){const g=Ke(r[c]);Qn(g)&&(l[g]=Q)}else if(r)for(const c in r){const g=Ke(c);if(Qn(g)){const p=r[c],y=l[g]=j(p)||O(p)?{type:p}:ie({},p),S=y.type;let M=!1,K=!0;if(j(S))for(let R=0;R<S.length;++R){const C=S[R],P=O(C)&&C.name;if(P==="Boolean"){M=!0;break}else P==="String"&&(K=!1)}else M=O(S)&&S.name==="Boolean";y[0]=M,y[1]=K,(M||N(y,"default"))&&a.push(g)}}const h=[l,a];return Z(e)&&s.set(e,h),h}function Qn(e){return e[0]!=="$"&&!Nt(e)}const Zs=e=>e[0]==="_"||e==="$stable",In=e=>j(e)?e.map(Le):[Le(e)],Vi=(e,t,n)=>{if(t._n)return t;const s=mi((...o)=>In(t(...o)),n);return s._c=!1,s},$s=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Zs(o))continue;const r=e[o];if(O(r))t[o]=Vi(o,r,s);else if(r!=null){const l=In(r);t[o]=()=>l}}},eo=(e,t)=>{const n=In(t);e.slots.default=()=>n},to=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},zi=(e,t,n)=>{const s=e.slots=qs();if(e.vnode.shapeFlag&32){const o=t._;o?(to(s,t,n),n&&ps(s,"_",o,!0)):$s(t,s)}else t&&eo(e,t)},Ki=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,l=Q;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:to(o,t,n):(r=!t.$stable,$s(t,o)),l=t}else t&&(eo(e,t),l={default:1});if(r)for(const a in o)!Zs(a)&&l[a]==null&&delete o[a]},be=lr;function Yi(e){return qi(e)}function qi(e,t){const n=_0();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:l,createText:a,createComment:u,setText:h,setElementText:c,parentNode:g,nextSibling:p,setScopeId:y=We,insertStaticContent:S}=e,M=(f,d,m,w=null,b=null,v=null,x=void 0,I=null,_=!!d.dynamicChildren)=>{if(f===d)return;f&&!Pt(f,d)&&(w=n0(f),De(f,b,v,!0),f=null),d.patchFlag===-2&&(_=!1,d.dynamicChildren=null);const{type:A,ref:B,shapeFlag:T}=d;switch(A){case E0:K(f,d,m,w);break;case Jt:R(f,d,m,w);break;case Q0:f==null&&C(d,m,w,x);break;case _e:Xe(f,d,m,w,b,v,x,I,_);break;default:T&1?L(f,d,m,w,b,v,x,I,_):T&6?Ze(f,d,m,w,b,v,x,I,_):(T&64||T&128)&&A.process(f,d,m,w,b,v,x,I,_,Ct)}B!=null&&b&&d0(B,f&&f.ref,v,d||f,!d)},K=(f,d,m,w)=>{if(f==null)s(d.el=a(d.children),m,w);else{const b=d.el=f.el;d.children!==f.children&&h(b,d.children)}},R=(f,d,m,w)=>{f==null?s(d.el=u(d.children||""),m,w):d.el=f.el},C=(f,d,m,w)=>{[f.el,f.anchor]=S(f.children,d,m,w,f.el,f.anchor)},P=({el:f,anchor:d},m,w)=>{let b;for(;f&&f!==d;)b=p(f),s(f,m,w),f=b;s(d,m,w)},E=({el:f,anchor:d})=>{let m;for(;f&&f!==d;)m=p(f),o(f),f=m;o(d)},L=(f,d,m,w,b,v,x,I,_)=>{d.type==="svg"?x="svg":d.type==="math"&&(x="mathml"),f==null?J(d,m,w,b,v,x,I,_):ce(f,d,b,v,x,I,_)},J=(f,d,m,w,b,v,x,I)=>{let _,A;const{props:B,shapeFlag:T,transition:k,dirs:D}=f;if(_=f.el=l(f.type,v,B&&B.is,B),T&8?c(_,f.children):T&16&&ee(f.children,_,null,w,b,N0(f,v),x,I),D&&ft(f,null,w,"created"),$(_,f,f.scopeId,x,w),B){for(const q in B)q!=="value"&&!Nt(q)&&r(_,q,null,B[q],v,w);"value"in B&&r(_,"value",null,B.value,v),(A=B.onVnodeBeforeMount)&&Re(A,w,f)}D&&ft(f,null,w,"beforeMount");const H=Gi(b,k);H&&k.beforeEnter(_),s(_,d,m),((A=B&&B.onVnodeMounted)||H||D)&&be(()=>{A&&Re(A,w,f),H&&k.enter(_),D&&ft(f,null,w,"mounted")},b)},$=(f,d,m,w,b)=>{if(m&&y(f,m),w)for(let v=0;v<w.length;v++)y(f,w[v]);if(b){let v=b.subTree;if(d===v||lo(v.type)&&(v.ssContent===d||v.ssFallback===d)){const x=b.vnode;$(f,x,x.scopeId,x.slotScopeIds,b.parent)}}},ee=(f,d,m,w,b,v,x,I,_=0)=>{for(let A=_;A<f.length;A++){const B=f[A]=I?et(f[A]):Le(f[A]);M(null,B,d,m,w,b,v,x,I)}},ce=(f,d,m,w,b,v,x)=>{const I=d.el=f.el;let{patchFlag:_,dynamicChildren:A,dirs:B}=d;_|=f.patchFlag&16;const T=f.props||Q,k=d.props||Q;let D;if(m&&ht(m,!1),(D=k.onVnodeBeforeUpdate)&&Re(D,m,d,f),B&&ft(d,f,m,"beforeUpdate"),m&&ht(m,!0),(T.innerHTML&&k.innerHTML==null||T.textContent&&k.textContent==null)&&c(I,""),A?Se(f.dynamicChildren,A,I,m,w,N0(d,b),v):x||Y(f,d,I,null,m,w,N0(d,b),v,!1),_>0){if(_&16)Qe(I,T,k,m,b);else if(_&2&&T.class!==k.class&&r(I,"class",null,k.class,b),_&4&&r(I,"style",T.style,k.style,b),_&8){const H=d.dynamicProps;for(let q=0;q<H.length;q++){const U=H[q],me=T[U],ge=k[U];(ge!==me||U==="value")&&r(I,U,me,ge,b,m)}}_&1&&f.children!==d.children&&c(I,d.children)}else!x&&A==null&&Qe(I,T,k,m,b);((D=k.onVnodeUpdated)||B)&&be(()=>{D&&Re(D,m,d,f),B&&ft(d,f,m,"updated")},w)},Se=(f,d,m,w,b,v,x)=>{for(let I=0;I<d.length;I++){const _=f[I],A=d[I],B=_.el&&(_.type===_e||!Pt(_,A)||_.shapeFlag&70)?g(_.el):m;M(_,A,B,null,w,b,v,x,!0)}},Qe=(f,d,m,w,b)=>{if(d!==m){if(d!==Q)for(const v in d)!Nt(v)&&!(v in m)&&r(f,v,d[v],null,b,w);for(const v in m){if(Nt(v))continue;const x=m[v],I=d[v];x!==I&&v!=="value"&&r(f,v,I,x,b,w)}"value"in m&&r(f,"value",d.value,m.value,b)}},Xe=(f,d,m,w,b,v,x,I,_)=>{const A=d.el=f?f.el:a(""),B=d.anchor=f?f.anchor:a("");let{patchFlag:T,dynamicChildren:k,slotScopeIds:D}=d;D&&(I=I?I.concat(D):D),f==null?(s(A,m,w),s(B,m,w),ee(d.children||[],m,B,b,v,x,I,_)):T>0&&T&64&&k&&f.dynamicChildren?(Se(f.dynamicChildren,k,m,b,v,x,I),(d.key!=null||b&&d===b.subTree)&&no(f,d,!0)):Y(f,d,m,B,b,v,x,I,_)},Ze=(f,d,m,w,b,v,x,I,_)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?b.ctx.activate(d,m,w,x,_):j0(d,m,w,b,v,x,_):Bn(f,d,_)},j0=(f,d,m,w,b,v,x)=>{const I=f.component=pr(f,w,b);if(Qs(f)&&(I.ctx.renderer=Ct),yr(I,!1,x),I.asyncDep){if(b&&b.registerDep(I,fe,x),!f.el){const _=I.subTree=ae(Jt);R(null,_,d,m)}}else fe(I,f,d,m,b,v,x)},Bn=(f,d,m)=>{const w=d.component=f.component;if(ir(f,d,m))if(w.asyncDep&&!w.asyncResolved){X(w,d,m);return}else w.next=d,w.update();else d.el=f.el,w.vnode=d},fe=(f,d,m,w,b,v,x)=>{const I=()=>{if(f.isMounted){let{next:T,bu:k,u:D,parent:H,vnode:q}=f;{const Ce=so(f);if(Ce){T&&(T.el=q.el,X(f,T,x)),Ce.asyncDep.then(()=>{f.isUnmounted||I()});return}}let U=T,me;ht(f,!1),T?(T.el=q.el,X(f,T,x)):T=q,k&&R0(k),(me=T.props&&T.props.onVnodeBeforeUpdate)&&Re(me,H,T,q),ht(f,!0);const ge=Vn(f),je=f.subTree;f.subTree=ge,M(je,ge,g(je.el),n0(je),f,b,v),T.el=ge.el,U===null&&rr(f,ge.el),D&&be(D,b),(me=T.props&&T.props.onVnodeUpdated)&&be(()=>Re(me,H,T,q),b)}else{let T;const{el:k,props:D}=d,{bm:H,m:q,parent:U,root:me,type:ge}=f,je=Vt(d);ht(f,!1),H&&R0(H),!je&&(T=D&&D.onVnodeBeforeMount)&&Re(T,U,d),ht(f,!0);{me.ce&&me.ce._injectChildStyle(ge);const Ce=f.subTree=Vn(f);M(null,Ce,m,w,f,b,v),d.el=Ce.el}if(q&&be(q,b),!je&&(T=D&&D.onVnodeMounted)){const Ce=d;be(()=>Re(T,U,Ce),b)}(d.shapeFlag&256||U&&Vt(U.vnode)&&U.vnode.shapeFlag&256)&&f.a&&be(f.a,b),f.isMounted=!0,d=m=w=null}};f.scope.on();const _=f.effect=new vs(I);f.scope.off();const A=f.update=_.run.bind(_),B=f.job=_.runIfDirty.bind(_);B.i=f,B.id=f.uid,_.scheduler=()=>bn(B),ht(f,!0),A()},X=(f,d,m)=>{d.component=f;const w=f.vnode.props;f.vnode=d,f.next=null,Qi(f,d.props,w,m),Ki(f,d.children,m),lt(),Hn(f),at()},Y=(f,d,m,w,b,v,x,I,_=!1)=>{const A=f&&f.children,B=f?f.shapeFlag:0,T=d.children,{patchFlag:k,shapeFlag:D}=d;if(k>0){if(k&128){t0(A,T,m,w,b,v,x,I,_);return}else if(k&256){ut(A,T,m,w,b,v,x,I,_);return}}D&8?(B&16&&jt(A,b,v),T!==A&&c(m,T)):B&16?D&16?t0(A,T,m,w,b,v,x,I,_):jt(A,b,v,!0):(B&8&&c(m,""),D&16&&ee(T,m,w,b,v,x,I,_))},ut=(f,d,m,w,b,v,x,I,_)=>{f=f||Tt,d=d||Tt;const A=f.length,B=d.length,T=Math.min(A,B);let k;for(k=0;k<T;k++){const D=d[k]=_?et(d[k]):Le(d[k]);M(f[k],D,m,null,b,v,x,I,_)}A>B?jt(f,b,v,!0,!1,T):ee(d,m,w,b,v,x,I,_,T)},t0=(f,d,m,w,b,v,x,I,_)=>{let A=0;const B=d.length;let T=f.length-1,k=B-1;for(;A<=T&&A<=k;){const D=f[A],H=d[A]=_?et(d[A]):Le(d[A]);if(Pt(D,H))M(D,H,m,null,b,v,x,I,_);else break;A++}for(;A<=T&&A<=k;){const D=f[T],H=d[k]=_?et(d[k]):Le(d[k]);if(Pt(D,H))M(D,H,m,null,b,v,x,I,_);else break;T--,k--}if(A>T){if(A<=k){const D=k+1,H=D<B?d[D].el:w;for(;A<=k;)M(null,d[A]=_?et(d[A]):Le(d[A]),m,H,b,v,x,I,_),A++}}else if(A>k)for(;A<=T;)De(f[A],b,v,!0),A++;else{const D=A,H=A,q=new Map;for(A=H;A<=k;A++){const ye=d[A]=_?et(d[A]):Le(d[A]);ye.key!=null&&q.set(ye.key,A)}let U,me=0;const ge=k-H+1;let je=!1,Ce=0;const Ot=new Array(ge);for(A=0;A<ge;A++)Ot[A]=0;for(A=D;A<=T;A++){const ye=f[A];if(me>=ge){De(ye,b,v,!0);continue}let Oe;if(ye.key!=null)Oe=q.get(ye.key);else for(U=H;U<=k;U++)if(Ot[U-H]===0&&Pt(ye,d[U])){Oe=U;break}Oe===void 0?De(ye,b,v,!0):(Ot[Oe-H]=A+1,Oe>=Ce?Ce=Oe:je=!0,M(ye,d[Oe],m,null,b,v,x,I,_),me++)}const Cn=je?Ji(Ot):Tt;for(U=Cn.length-1,A=ge-1;A>=0;A--){const ye=H+A,Oe=d[ye],On=ye+1<B?d[ye+1].el:w;Ot[A]===0?M(null,Oe,m,On,b,v,x,I,_):je&&(U<0||A!==Cn[U]?ct(Oe,m,On,2):U--)}}},ct=(f,d,m,w,b=null)=>{const{el:v,type:x,transition:I,children:_,shapeFlag:A}=f;if(A&6){ct(f.component.subTree,d,m,w);return}if(A&128){f.suspense.move(d,m,w);return}if(A&64){x.move(f,d,m,Ct);return}if(x===_e){s(v,d,m);for(let T=0;T<_.length;T++)ct(_[T],d,m,w);s(f.anchor,d,m);return}if(x===Q0){P(f,d,m);return}if(w!==2&&A&1&&I)if(w===0)I.beforeEnter(v),s(v,d,m),be(()=>I.enter(v),b);else{const{leave:T,delayLeave:k,afterLeave:D}=I,H=()=>s(v,d,m),q=()=>{T(v,()=>{H(),D&&D()})};k?k(v,H,q):q()}else s(v,d,m)},De=(f,d,m,w=!1,b=!1)=>{const{type:v,props:x,ref:I,children:_,dynamicChildren:A,shapeFlag:B,patchFlag:T,dirs:k,cacheIndex:D}=f;if(T===-2&&(b=!1),I!=null&&d0(I,null,m,f,!0),D!=null&&(d.renderCache[D]=void 0),B&256){d.ctx.deactivate(f);return}const H=B&1&&k,q=!Vt(f);let U;if(q&&(U=x&&x.onVnodeBeforeUnmount)&&Re(U,d,f),B&6)Io(f.component,m,w);else{if(B&128){f.suspense.unmount(m,w);return}H&&ft(f,null,d,"beforeUnmount"),B&64?f.type.remove(f,d,m,Ct,w):A&&!A.hasOnce&&(v!==_e||T>0&&T&64)?jt(A,d,m,!1,!0):(v===_e&&T&384||!b&&B&16)&&jt(_,d,m),w&&Dn(f)}(q&&(U=x&&x.onVnodeUnmounted)||H)&&be(()=>{U&&Re(U,d,f),H&&ft(f,null,d,"unmounted")},m)},Dn=f=>{const{type:d,el:m,anchor:w,transition:b}=f;if(d===_e){_o(m,w);return}if(d===Q0){E(f);return}const v=()=>{o(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:I}=b,_=()=>x(m,v);I?I(f.el,v,_):_()}else v()},_o=(f,d)=>{let m;for(;f!==d;)m=p(f),o(f),f=m;o(d)},Io=(f,d,m)=>{const{bum:w,scope:b,job:v,subTree:x,um:I,m:_,a:A}=f;Un(_),Un(A),w&&R0(w),b.stop(),v&&(v.flags|=8,De(x,f,d,m)),I&&be(I,d),be(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},jt=(f,d,m,w=!1,b=!1,v=0)=>{for(let x=v;x<f.length;x++)De(f[x],d,m,w,b)},n0=f=>{if(f.shapeFlag&6)return n0(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=p(f.anchor||f.el),m=d&&d[yi];return m?p(m):d};let C0=!1;const jn=(f,d,m)=>{f==null?d._vnode&&De(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,m),d._vnode=f,C0||(C0=!0,Hn(),Hs(),C0=!1)},Ct={p:M,um:De,m:ct,r:Dn,mt:j0,mc:ee,pc:Y,pbc:Se,n:n0,o:e};return{render:jn,hydrate:void 0,createApp:Wi(jn)}}function N0({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Gi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function no(e,t,n=!1){const s=e.children,o=t.children;if(j(s)&&j(o))for(let r=0;r<s.length;r++){const l=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=et(o[r]),a.el=l.el),!n&&a.patchFlag!==-2&&no(l,a)),a.type===E0&&(a.el=l.el)}}function Ji(e){const t=e.slice(),n=[0];let s,o,r,l,a;const u=e.length;for(s=0;s<u;s++){const h=e[s];if(h!==0){if(o=n[n.length-1],e[o]<h){t[s]=o,n.push(s);continue}for(r=0,l=n.length-1;r<l;)a=r+l>>1,e[n[a]]<h?r=a+1:l=a;h<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,l=n[r-1];r-- >0;)n[r]=l,l=t[l];return n}function so(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:so(t)}function Un(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Xi=Symbol.for("v-scx"),Zi=()=>l0(Xi);function $i(e,t){return xn(e,null,{flush:"sync"})}function nt(e,t,n){return xn(e,t,n)}function xn(e,t,n=Q){const{immediate:s,deep:o,flush:r,once:l}=n,a=ie({},n),u=t&&s||!t&&r!=="post";let h;if(Zt){if(r==="sync"){const y=Zi();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!u){const y=()=>{};return y.stop=We,y.resume=We,y.pause=We,y}}const c=ue;a.call=(y,S,M)=>Ne(y,c,S,M);let g=!1;r==="post"?a.scheduler=y=>{be(y,c&&c.suspense)}:r!=="sync"&&(g=!0,a.scheduler=(y,S)=>{S?y():bn(y)}),a.augmentJob=y=>{t&&(y.flags|=4),g&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const p=hi(e,t,a);return Zt&&(h?h.push(p):u&&p()),p}function er(e,t,n){const s=this.proxy,o=te(e)?e.includes(".")?oo(s,e):()=>s[e]:e.bind(s,s);let r;O(t)?r=t:(r=t.handler,n=t);const l=e0(this),a=xn(o,r.bind(s),n);return l(),a}function oo(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function tr(e,t,n=Q){const s=mr(),o=Ke(t),r=rt(t),l=io(e,o),a=ai((u,h)=>{let c,g=Q,p;return $i(()=>{const y=e[o];pe(c,y)&&(c=y,h())}),{get(){return u(),n.get?n.get(c):c},set(y){const S=n.set?n.set(y):y;if(!pe(S,c)&&!(g!==Q&&pe(y,g)))return;const M=s.vnode.props;M&&(t in M||o in M||r in M)&&(`onUpdate:${t}`in M||`onUpdate:${o}`in M||`onUpdate:${r}`in M)||(c=y,h()),s.emit(`update:${t}`,S),pe(y,S)&&pe(y,g)&&!pe(S,p)&&h(),g=y,p=S}}});return a[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?l||Q:a,done:!1}:{done:!0}}}},a}const io=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${rt(t)}Modifiers`];function nr(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Q;let o=n;const r=t.startsWith("update:"),l=r&&io(s,t.slice(7));l&&(l.trim&&(o=n.map(c=>te(c)?c.trim():c)),l.number&&(o=n.map(ko)));let a,u=s[a=O0(t)]||s[a=O0(Ke(t))];!u&&r&&(u=s[a=O0(rt(t))]),u&&Ne(u,e,6,o);const h=s[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ne(h,e,6,o)}}function ro(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let l={},a=!1;if(!O(e)){const u=h=>{const c=ro(h,t,!0);c&&(a=!0,ie(l,c))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!a?(Z(e)&&s.set(e,null),null):(j(r)?r.forEach(u=>l[u]=null):ie(l,r),Z(e)&&s.set(e,l),l)}function M0(e,t){return!e||!v0(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,rt(t))||N(e,t))}function Vn(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:l,attrs:a,emit:u,render:h,renderCache:c,props:g,data:p,setupState:y,ctx:S,inheritAttrs:M}=e,K=h0(e);let R,C;try{if(n.shapeFlag&4){const E=o||s,L=E;R=Le(h.call(L,E,c,g,y,p,S)),C=a}else{const E=t;R=Le(E.length>1?E(g,{attrs:a,slots:l,emit:u}):E(g,null)),C=t.props?a:sr(a)}}catch(E){Kt.length=0,T0(E,e,1),R=ae(Jt)}let P=R;if(C&&M!==!1){const E=Object.keys(C),{shapeFlag:L}=P;E.length&&L&7&&(r&&E.some(an)&&(C=or(C,r)),P=Bt(P,C,!1,!0))}return n.dirs&&(P=Bt(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&vn(P,n.transition),R=P,h0(K),R}const sr=e=>{let t;for(const n in e)(n==="class"||n==="style"||v0(n))&&((t||(t={}))[n]=e[n]);return t},or=(e,t)=>{const n={};for(const s in e)(!an(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ir(e,t,n){const{props:s,children:o,component:r}=e,{props:l,children:a,patchFlag:u}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?zn(s,l,h):!!l;if(u&8){const c=t.dynamicProps;for(let g=0;g<c.length;g++){const p=c[g];if(l[p]!==s[p]&&!M0(h,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===l?!1:s?l?zn(s,l,h):!0:!!l;return!1}function zn(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!M0(n,r))return!0}return!1}function rr({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const lo=e=>e.__isSuspense;function lr(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):pi(e)}const _e=Symbol.for("v-fgt"),E0=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Q0=Symbol.for("v-stc"),Kt=[];let we=null;function se(e=!1){Kt.push(we=e?null:[])}function ar(){Kt.pop(),we=Kt[Kt.length-1]||null}let Xt=1;function Kn(e,t=!1){Xt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function ur(e){return e.dynamicChildren=Xt>0?we||Tt:null,ar(),Xt>0&&we&&we.push(e),e}function oe(e,t,n,s,o,r){return ur(W(e,t,n,s,o,r,!0))}function ao(e){return e?e.__v_isVNode===!0:!1}function Pt(e,t){return e.type===t.type&&e.key===t.key}const uo=({key:e})=>e??null,a0=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||ne(e)||O(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function W(e,t=null,n=null,s=0,o=null,r=e===_e?0:1,l=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&uo(t),ref:t&&a0(t),scopeId:Fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Tn(u,n),r&128&&e.normalize(u)):n&&(u.shapeFlag|=te(n)?8:16),Xt>0&&!l&&we&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&we.push(u),u}const ae=cr;function cr(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Bi)&&(e=Jt),ao(e)){const a=Bt(e,t,!0);return n&&Tn(a,n),Xt>0&&!r&&we&&(a.shapeFlag&6?we[we.indexOf(e)]=a:we.push(a)),a.patchFlag=-2,a}if(Ar(e)&&(e=e.__vccOpts),t){t=fr(t);let{class:a,style:u}=t;a&&!te(a)&&(t.class=Ye(a)),Z(u)&&(yn(u)&&!j(u)&&(u=ie({},u)),t.style=yt(u))}const l=te(e)?1:lo(e)?128:bi(e)?64:Z(e)?4:O(e)?2:0;return W(e,t,n,s,o,l,r,!0)}function fr(e){return e?yn(e)||Gs(e)?ie({},e):e:null}function Bt(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:l,children:a,transition:u}=e,h=t?hr(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&uo(h),ref:t&&t.ref?n&&r?j(r)?r.concat(a0(t)):[r,a0(t)]:a0(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&vn(c,u.clone(c)),c}function en(e=" ",t=0){return ae(E0,null,e,t)}function Le(e){return e==null||typeof e=="boolean"?ae(Jt):j(e)?ae(_e,null,e.slice()):ao(e)?et(e):ae(E0,null,String(e))}function et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Tn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Tn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Gs(t)?t._ctx=Ee:o===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),s&64?(n=16,t=[en(t)]):n=8);e.children=t,e.shapeFlag|=n}function hr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ye([t.class,s.class]));else if(o==="style")t.style=yt([t.style,s.style]);else if(v0(o)){const r=t[o],l=s[o];l&&r!==l&&!(j(r)&&r.includes(l))&&(t[o]=r?[].concat(r,l):l)}else o!==""&&(t[o]=s[o])}return t}function Re(e,t,n,s=null){Ne(e,t,7,[n,s])}const dr=Ks();let gr=0;function pr(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||dr,r={uid:gr++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xs(s,o),emitsOptions:ro(s,o),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=nr.bind(null,r),e.ce&&e.ce(r),r}let ue=null;const mr=()=>ue||Ee;let m0,tn;{const e=_0(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(l=>l(r)):o[0](r)}};m0=t("__VUE_INSTANCE_SETTERS__",n=>ue=n),tn=t("__VUE_SSR_SETTERS__",n=>Zt=n)}const e0=e=>{const t=ue;return m0(e),e.scope.on(),()=>{e.scope.off(),m0(t)}},Yn=()=>{ue&&ue.scope.off(),m0(null)};function co(e){return e.vnode.shapeFlag&4}let Zt=!1;function yr(e,t=!1,n=!1){t&&tn(t);const{props:s,children:o}=e.vnode,r=co(e);Ni(e,s,r,t),zi(e,o,n);const l=r?br(e,t):void 0;return t&&tn(!1),l}function br(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Di);const{setup:s}=n;if(s){lt();const o=e.setupContext=s.length>1?wr(e):null,r=e0(e),l=$t(s,e,0,[e.props,o]),a=fs(l);if(at(),r(),(a||e.sp)&&!Vt(e)&&Ns(e),a){if(l.then(Yn,Yn),t)return l.then(u=>{qn(e,u)}).catch(u=>{T0(u,e,0)});e.asyncDep=l}else qn(e,l)}else fo(e)}function qn(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Os(t)),fo(e)}function fo(e,t,n){const s=e.type;e.render||(e.render=s.render||We);{const o=e0(e);lt();try{Ci(e)}finally{at(),o()}}}const vr={get(e,t){return re(e,"get",""),e[t]}};function wr(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vr),slots:e.slots,emit:e.emit,expose:t}}function Sn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Os(si(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zt)return zt[n](e)},has(t,n){return n in t||n in zt}})):e.proxy}function Ar(e){return O(e)&&"__vccOpts"in e}const st=(e,t)=>ci(e,t,Zt),_r="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;const Gn=typeof window<"u"&&window.trustedTypes;if(Gn)try{nn=Gn.createPolicy("vue",{createHTML:e=>e})}catch{}const ho=nn?e=>nn.createHTML(e):e=>e,Ir="http://www.w3.org/2000/svg",xr="http://www.w3.org/1998/Math/MathML",Ve=typeof document<"u"?document:null,Jn=Ve&&Ve.createElement("template"),Tr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Ve.createElementNS(Ir,e):t==="mathml"?Ve.createElementNS(xr,e):n?Ve.createElement(e,{is:n}):Ve.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Ve.createTextNode(e),createComment:e=>Ve.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ve.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const l=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Jn.innerHTML=ho(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Jn.content;if(s==="svg"||s==="mathml"){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}t.insertBefore(a,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sr=Symbol("_vtc");function Mr(e,t,n){const s=e[Sr];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xn=Symbol("_vod"),Er=Symbol("_vsh"),kr=Symbol(""),Br=/(^|;)\s*display\s*:/;function Dr(e,t,n){const s=e.style,o=te(n);let r=!1;if(n&&!o){if(t)if(te(t))for(const l of t.split(";")){const a=l.slice(0,l.indexOf(":")).trim();n[a]==null&&u0(s,a,"")}else for(const l in t)n[l]==null&&u0(s,l,"");for(const l in n)l==="display"&&(r=!0),u0(s,l,n[l])}else if(o){if(t!==n){const l=s[kr];l&&(n+=";"+l),s.cssText=n,r=Br.test(n)}}else t&&e.removeAttribute("style");Xn in e&&(e[Xn]=r?s.display:"",e[Er]&&(s.display="none"))}const Zn=/\s*!important$/;function u0(e,t,n){if(j(n))n.forEach(s=>u0(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=jr(e,t);Zn.test(n)?e.setProperty(rt(s),n.replace(Zn,""),"important"):e[s]=n}}const $n=["Webkit","Moz","ms"],U0={};function jr(e,t){const n=U0[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return U0[t]=s;s=gs(s);for(let o=0;o<$n.length;o++){const r=$n[o]+s;if(r in e)return U0[t]=r}return t}const es="http://www.w3.org/1999/xlink";function ts(e,t,n,s,o,r=Ro(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(es,t.slice(6,t.length)):e.setAttributeNS(es,t,n):n==null||r&&!ms(n)?e.removeAttribute(t):e.setAttribute(t,r?"":it(n)?String(n):n)}function ns(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ho(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(a!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ms(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(o||t)}function Cr(e,t,n,s){e.addEventListener(t,n,s)}function Or(e,t,n,s){e.removeEventListener(t,n,s)}const ss=Symbol("_vei");function Rr(e,t,n,s,o=null){const r=e[ss]||(e[ss]={}),l=r[t];if(s&&l)l.value=s;else{const[a,u]=Pr(t);if(s){const h=r[t]=Wr(s,o);Cr(e,a,h,u)}else l&&(Or(e,a,l,u),r[t]=void 0)}}const os=/(?:Once|Passive|Capture)$/;function Pr(e){let t;if(os.test(e)){t={};let s;for(;s=e.match(os);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),t]}let V0=0;const Lr=Promise.resolve(),Hr=()=>V0||(Lr.then(()=>V0=0),V0=Date.now());function Wr(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ne(Fr(s,n.value),t,5,[s])};return n.value=e,n.attached=Hr(),n}function Fr(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const is=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nr=(e,t,n,s,o,r)=>{const l=o==="svg";t==="class"?Mr(e,s,l):t==="style"?Dr(e,n,s):v0(t)?an(t)||Rr(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qr(e,t,s,l))?(ns(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ts(e,t,s,l,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!te(s))?ns(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ts(e,t,s,l))};function Qr(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&is(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return is(t)&&te(n)?!1:t in e}const Ur=["ctrl","shift","alt","meta"],Vr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ur.some(n=>e[`${n}Key`]&&!t.includes(n))},y0=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(o,...r)=>{for(let l=0;l<t.length;l++){const a=Vr[t[l]];if(a&&a(o,t))return}return e(o,...r)})},zr=ie({patchProp:Nr},Tr);let rs;function Kr(){return rs||(rs=Yi(zr))}const Yr=(...e)=>{const t=Kr().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Gr(s);if(!o)return;const r=t._component;!O(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const l=n(o,!1,qr(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t};function qr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gr(e){return te(e)?document.querySelector(e):e}const Jr="/music-web/assets/Bones-DZVk_zUT.mp3",Xr="/music-web/assets/Demons-fzTvVVlw.mp3",Zr="/music-web/assets/It's%20time-CyjBifx4.mp3",$r="/music-web/assets/Natural-CWJ1uabs.mp3",el="/music-web/assets/Radioactive-BTNPSVYP.mp3",tl="/music-web/assets/Season%20in%20the%20Sun-DVkLFWH3.mp3",nl="/music-web/assets/Sharks-BCEIjMHK.mp3",sl="/music-web/assets/Thunder-S07EJM4a.mp3",ol="/music-web/assets/Wake%20Up-CasNVWqE.mp3",il="/music-web/assets/Whatever%20It%20Takes-BpnlT3sp.mp3",rl="/music-web/assets/peter-BVhB60oM.mp3",ll="/music-web/assets/so%20far%20away-CPeEg5z6.mp3",al="/music-web/assets/something-CLtHNr96.mp3",ul=`[00:00.00]Bones - Imagine Dragons
[00:06.00]Gimme gimme gimme some time to think
[00:06.00]给我一些思考的时间
[00:08.00]I'm in the bathroom looking at me
[00:08.00]在浴室里看着镜中的自己
[00:12.00]Face in the mirror is all I need
[00:12.00]我需要的也就只有自省
[00:14.00]Wait until the reaper takes my life
[00:14.00]直到死神前来取走我的性命
[00:17.00]Never gonna get me out alive
[00:17.00]直到我再无可能从他手中逃离
[00:21.00]I will live a thousand million lives
[00:21.00]我将历经人生百态
[00:23.00]My patience is waning
[00:23.00]我的耐心慢慢消耗殆尽
[00:25.00]Is this entertaining
[00:25.00]这有什么乐趣可言
[00:27.00]Our patience is waning
[00:27.00]我的耐心慢慢消耗殆尽
[00:29.00]Is this entertaining
[00:29.00]这有什么乐趣可言
[00:33.00]I got this feeling yeah you know
[00:33.00]我陷入了迷茫 是的 你懂的
[00:35.00]Where I'm losing all control
[00:35.00]是从何时起 我再也无法控制自己
[00:38.00]Cause there's magic in my bones
[00:38.00]因为我的身体里有种魔力
[00:41.00]I got this feeling in my soul
[00:41.00]我的灵魂有所感知
[00:43.00]Go ahead and throw your stones
[00:43.00]来吧 无需吝啬你指责的话语
[00:46.00]Cause there's magic in my bones
[00:46.00]因为我的身体里有种魔力
[00:48.00]Playing with a stick of dynamite
[00:48.00]行走在刀尖之上
[00:50.00]There was never gray in black and white
[00:50.00]非黑即白的世界从不存在灰色地带
[00:54.00]There was never wrong till there was right
[00:54.00]对与错亦是相互对立又相互依存的存在
[00:57.00]Feeling like a boulder hurtling
[00:57.00]就像在翻越高山
[00:59.00]Seeing all the vultures circling
[00:59.00]看着头顶数只伺机而动的秃鹰在盘旋
[01:01.00]Burning in the flames I'm working in
[01:01.00]我引火自燃
[01:03.00]Turning in a bed that's darkening
[01:03.00]夜色渐晚 在床上辗转难眠
[01:05.00]My patience is waning
[01:05.00]我的耐心慢慢消耗殆尽
[01:07.00]Is this entertaining
[01:07.00]这有什么乐趣可言
[01:09.00]Our patience is waning
[01:09.00]我的耐心慢慢消耗殆尽
[01:11.00]Is this entertaining
[01:11.00]这有什么乐趣可言
[01:15.00]I got this feeling yeah you know
[01:15.00]我陷入了迷茫 是的 你懂的
[01:17.00]Where I'm losing all control
[01:17.00]是从何时起 我再也无法控制自己
[01:20.00]Cause there's magic in my bones
[01:20.00]因为我的身体里有种魔力
[01:23.00]I got this feeling in my soul
[01:23.00]我的灵魂有所感知
[01:25.00]Go ahead and throw your stones
[01:25.00]来吧 无需吝啬你指责的话语
[01:34.00]Cause there's magic in my bones
[01:34.00]因为我的身体里有种魔力
[01:36.00]Cause there's magic in my bones
[01:36.00]因为我的身体里有种魔力
[01:38.00]Look in the mirror of my mind
[01:38.00]反躬自省
[01:40.00]Turning the pages of my life
[01:40.00]翻阅我人生的篇章
[01:44.00]Walking the path so many paced a million times
[01:44.00]回顾我是如何一步步走到现在
[01:47.00]Drown out the voices in the air
[01:47.00]空气吞没了我的声声呐喊
[01:49.00]Leaving the ones that never cared
[01:49.00]远离那些对我漠不关心的人们
[01:53.00]Picking the pieces up and building to the sky
[01:53.00]重新拼凑碎片 将梦中楼阁向着天空搭建
[01:55.00]My patience is waning
[01:55.00]我的耐心慢慢消耗殆尽
[01:57.00]Is this entertaining
[01:57.00]这有什么乐趣可言
[01:59.00]My patience is waning
[01:59.00]我的耐心慢慢消耗殆尽
[02:02.00]Is this entertaining
[02:02.00]这有什么乐趣可言
[02:05.00]I got this feeling yeah you know
[02:05.00]我陷入了迷茫 是的 你懂的
[02:08.00]Where I'm losing all control
[02:08.00]是从何时起 我再也无法控制自己
[02:10.00]Cause there's magic in my bones
[02:10.00]因为我的身体里有种魔力
[02:14.00]I got this feeling in my soul
[02:14.00]我的灵魂有所感知
[02:16.00]Go ahead and throw your stones
[02:16.00]来吧 无需吝啬你指责的话语
[02:18.00]Cause there's magic in my bones
[02:18.00]因为我的身体里有种魔力
[02:22.00]There goes my mind don't mind
[02:22.00]我的思绪纷飞 不要在意
[02:26.00]There goes my mind
[02:26.00]我的思绪纷飞
[02:30.00]There goes my mind don't mind
[02:30.00]我的思绪纷飞 不要在意
[02:33.00]There goes my mind
[02:33.00]我的思绪纷飞
[02:38.00]Cause there's magic in my bones
[02:38.00]因为我的身体里有种魔力`,cl=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"})),fl=`[00:00.00]Demons - Imagine Dragons (梦龙)
[00:03.00]When the days are cold
[00:03.00]当冰冷降临世间
[00:05.00]And the cards all fold
[00:05.00]当希望灭绝人间
[00:08.00]And the saints we see
[00:08.00]我们能寄予希望的圣人
[00:11.00]Are all made of gold
[00:11.00]都不过是一个个无力的金铸雕像
[00:13.00]When your dreams all fail
[00:13.00]当你的美梦沦落
[00:16.00]And the ones we hail
[00:16.00]当我们只得以崇拜强权
[00:19.00]Are the worst of all
[00:19.00]前所未有的噩梦底下
[00:23.00]And the blood's run stale
[00:23.00]连血液都渐趋陈腐
[00:25.00]I wanna hide the truth
[00:25.00]我想要隐藏内心的真相
[00:28.00]I wanna shelter you
[00:28.00]好构筑庇护你的天国
[00:31.00]But with the beast inside
[00:31.00]只是我内心的野兽凶猛强横
[00:33.00]There's nowhere we can hide
[00:33.00]令到我们无处可藏
[00:36.00]No matter what we breed
[00:36.00]不管各自以何为食
[00:39.00]We still are made of greed
[00:39.00]我们同是被贪婪堆砌的动物
[00:41.00]This is my kingdom come
[00:41.00]由我主宰的欲望王国平地而起
[00:44.00]This is my kingdom come
[00:44.00]君临天下 唯我独尊
[00:47.00]When you feel my heat
[00:47.00]当你感受到我的炙热
[00:49.00]Look into my eyes
[00:49.00]请凝视我的双眸
[00:52.00]It's where my demons hide
[00:52.00]我内心的恶魔就在那
[00:55.00]It's where my demons hide
[00:55.00]它以我的心灵为居所
[00:57.00]Don't get too close
[00:57.00]不要轻易靠近
[01:00.00]It's dark inside
[01:00.00]里面暗无天日
[01:02.00]It's where my demons hide
[01:02.00]我内心的恶魔就在那
[01:06.00]It's where my demons hide
[01:06.00]我内心的恶魔就在那
[01:07.00]At the curtain's call
[01:07.00]当帘幕降下
[01:09.00]It's the last of all
[01:09.00]一切都将宣告终结
[01:12.00]When the lights fade out
[01:12.00]光明渐淡
[01:15.00]All the sinners crawl
[01:15.00]所有罪恶都蠢蠢欲动
[01:17.00]So they dug your grave
[01:17.00]他们翻挖你的坟墓
[01:20.00]And the masquerade
[01:20.00]撕下你的伪装
[01:23.00]Will come calling out
[01:23.00]我撕心裂肺地嘶吼
[01:27.00]At the mess you made
[01:27.00]在因你而起的这片狼藉中
[01:29.00]Don't wanna let you down
[01:29.00]我不愿让你悲伤
[01:32.00]But I am hell-bound
[01:32.00]但我身不由己
[01:35.00]Though this is all for you
[01:35.00]尽管我为你做下了一切
[01:37.00]Don't wanna hide the truth
[01:37.00]但我决心不再隐瞒真相
[01:40.00]No matter what we breed
[01:40.00]无论你我以何为生
[01:42.00]We still are made of greed
[01:42.00]我们都是被贪婪堆砌的动物
[01:45.00]This is my kingdom come
[01:45.00]由我构筑起的欲望王国
[01:48.00]This is my kingdom come
[01:48.00]它已然矗立大地 埋下一片阴影
[01:51.00]When you feel my heat
[01:51.00]当你感受到我的炙热
[01:53.00]Look into my eyes
[01:53.00]请凝视我的双眸
[01:56.00]It's where my demons hide
[01:56.00]我内心的恶魔就在那
[01:59.00]It's where my demons hide
[01:59.00]我内心的恶魔就在那
[02:01.00]Don't get too close
[02:01.00]不要轻易涉足
[02:04.00]It's dark inside
[02:04.00]里面暗无天日
[02:06.00]It's where my demons hide
[02:06.00]我内心的恶魔就在那
[02:09.00]It's where my demons hide
[02:09.00]我内心的恶魔就在那
[02:12.00]They say it's what you make
[02:12.00]人们讥讽我咎由自取
[02:15.00]I say it's up to fate
[02:15.00]我笑答这是命中注定
[02:17.00]It's woven in my soul
[02:17.00]尽管灵魂深处依旧纠结
[02:20.00]I need to let you go
[02:20.00]但我还是选择将你放下
[02:23.00]Your eyes they shine so bright
[02:23.00]你的双瞳明亮如皓日当空
[02:25.00]I wanna save that light
[02:25.00]我希望能将其占为己有
[02:28.00]I can't escape this now
[02:28.00]但我已经无从挣脱桎梏
[02:31.00]Unless you show me how
[02:31.00]除非你能引领我走出黑暗
[02:33.00]When you feel my heat
[02:33.00]当你被我的炙热明惑时
[02:36.00]Look into my eyes
[02:36.00]请凝视我的双眸
[02:38.00]It's where my demons hide
[02:38.00]我内心的恶魔就在那
[02:41.00]It's where my demons hide
[02:41.00]我内心的恶魔就在那
[02:44.00]Don't get too close
[02:44.00]不要轻易涉足
[02:47.00]It's dark inside
[02:47.00]里面暗无天日
[02:49.00]It's where my demons hide
[02:49.00]我内心的恶魔就在那
[02:54.00]It's where my demons hide
[02:54.00]我内心的恶魔就在那
`,hl=Object.freeze(Object.defineProperty({__proto__:null,default:fl},Symbol.toStringTag,{value:"Module"})),dl=`[00:00.0]It's Time - Imagine Dragons (梦龙)
[00:20.35]So this is what you meant
[00:20.35]所以这就是你想表达的意思
[00:23.22]When you said that you were spent
[00:23.22]当你说你的那些付出
[00:26.63]And now it's time to build from the bottom of the pit
[00:26.63]现在是时候一步步自下而上迈进
[00:28.94]Right to the top
[00:28.94]胜利的顶峰了
[00:32.55]Don't hold back
[00:32.55]不要犹豫
[00:39.37]Packing my bags and giving the academy a rain check
[00:39.37]背上我的包，上大学的事改天再说
[00:43.79]I don't ever wanna let you down
[00:43.79]我从不想让你伤心
[00:49.62]I don't ever wanna leave this town
[00:49.62]我从不想离开这座小镇
[00:52.44]'Cause after all
[00:52.44]因为毕竟
[00:54.75]This city never sleeps at night
[00:54.75]这是一座不夜城
[00:57.47]It's time to begin isn't it
[00:57.47]现在该开始了，难道不是吗
[01:02.06]I get a little bit bigger but then I'll admit
[01:02.06]我强大了一点，但是我承认
[01:06.66]I'm just the same as I was
[01:06.66]其实我还是和以前一样
[01:10.62]Now don't you understand
[01:10.62]现在难道你不理解
[01:31.3]That I'm never changing who I am
[01:31.3]我从不会改变自己
[01:33.69]So this is where you fell
[01:33.69]所以这就是你跌倒的地方
[01:36.42]And I am left to sell
[01:36.42]也是我出卖自己的开始
[01:39.86]The path to heaven runs through miles of clouded hell
[01:39.86]这条穿过阴霾地狱，通往天堂的路
[01:42.020004]Right to the top
[01:42.020004]胜利的顶峰了
[01:45.8]Don't look back
[01:45.8]不要回头
[01:52.520004]Turning the rags and giving the commodities a rain check
[01:52.520004]试着解决那些破烂 先别管那些有价值的东西
[01:56.95]I don't ever wanna let you down
[01:56.95]我从不想让你伤心
[02:02.68]I don't ever wanna leave this town
[02:02.68]我从不想离开这座小镇
[02:05.64]'Cause after all
[02:05.64]因为毕竟
[02:07.97]This city never sleeps at night
[02:07.97]这是一座不夜城
[02:10.63]It's time to begin isn't it
[02:10.63]现在该开始了，难道不是吗
[02:15.22]I get a little bit bigger but then I'll admit
[02:15.22]我强大了一点，但是我承认
[02:19.85]I'm just the same as I was
[02:19.85]其实我还是和以前一样
[02:23.78]Now don't you understand
[02:23.78]现在难道你不理解
[02:26.42]That I'm never changing who I am
[02:26.42]我从不会改变自己
[02:28.94]It's time to begin isn't it
[02:28.94]现在该开始了，难道不是吗
[02:33.53]I get a little bit bigger but then I'll admit
[02:33.53]我强大了一点，但是我承认
[02:38.12]I'm just the same as I was
[02:38.12]其实我还是和以前一样
[02:42.13]Now don't you understand
[02:42.13]现在难道你不理解
[02:46.76]That I'm never changing who I am
[02:46.76]我从不会改变自己
[02:51.18]This road never looked so lonely
[02:51.18]这条路看起来从不会孤寂
[02:55.59]This house doesn't burn down slowly
[02:55.59]这座房子不会慢慢地烧毁
[03:02.83]To ashes to ashes
[03:02.83]变成灰烬  灰烬
[03:05.59]It's time to begin isn't it
[03:05.59]现在该开始了，难道不是吗
[03:10.1]I get a little bit bigger but then I'll admit
[03:10.1]我强大了一点，但是我承认
[03:14.61]I'm just the same as I was
[03:14.61]其实我还是和以前一样
[03:18.62]Now don't you understand
[03:18.62]现在难道你不理解
[03:21.22]That I'm never changing who I am
[03:21.22]我从不会改变自己
[03:23.76]It's time to begin isn't it
[03:23.76]现在该开始了，难道不是吗
[03:28.3]I get a little bit bigger but then I'll admit
[03:28.3]我强大了一点，但是我承认
[03:33.04001]I'm just the same as I was
[03:33.04001]其实我还是和以前一样
[03:36.92]Now don't you understand
[03:36.92]现在难道你不理解
[03:41.092]That I'm never changing who I am
[03:41.092]我从不会改变自己
`,gl=Object.freeze(Object.defineProperty({__proto__:null,default:dl},Symbol.toStringTag,{value:"Module"})),pl=`[00:00.0]Natural - Imagine Dragons
[00:12.01]Will you hold the line
[00:12.01]你是否会坚持底线
[00:14.09]When every one of them has given up and given in
[00:14.09]当他们每个人都放弃或屈服之后
[00:14.7]Tell me
[00:14.7]告诉我吧
[00:16.75]In this house of mine
[00:16.75]在我领域
[00:19.54]Nothing ever comes without a consequence or cost tell me
[00:19.54]任何事情都有后果或代价 告诉我
[00:21.56]Will the stars align
[00:21.56]星星会连成线吗
[00:22.63]Will Heaven step in
[00:22.63]天堂是否存在
[00:23.8]Will it save us from our sin
[00:23.8]它会从罪恶中救赎我们吗
[00:24.13]Will it
[00:24.13]会吗
[00:27.82]'Cause this house of mine stands strong
[00:27.82]因为我的王国坚固地耸立着
[00:31.4]That's the price you pay
[00:31.4]那就是你要付出的代价
[00:35.88]Leave behind your heart and cast away
[00:35.88]放下心痛 彻底丢掉
[00:40.97]Just another product of today
[00:40.97]不过是今日的另一个战利品
[00:45.39]Rather be the hunter than the prey
[00:45.39]宁愿做个猎人 不要做个猎物
[00:47.97]And you're standing on the edge face up 'cause you're a
[00:47.97]你正站在边缘 抬起头来 因为你
[00:49.61]Natural
[00:49.61]生来如此
[00:51.94]A beating heart of stone
[00:51.94]磐石跳动的心脏
[00:54.47]You gotta be so cold
[00:54.47]你必须冷酷
[00:56.78]To make it in this world
[00:56.78]才能在这世界生存
[00:59.23]Yeah you're a natural
[00:59.23]你生来如此
[01:01.62]Living your life cutthroat
[01:01.62]无情地生活
[01:04.0]You gotta be so cold
[01:04.0]你必须冷酷
[01:07.6]Yeah you're a natural
[01:07.6]你生来如此
[01:09.63]Will somebody
[01:09.63]有没有人
[01:12.53]Let me see the light within the dark trees shadowing
[01:12.53]让我看看黑暗树影中的光
[01:14.53]What's happenin'
[01:14.53]发生了什么
[01:17.05]Lookin' through the glass find the wrong within the past knowin'
[01:17.05]看着镜子 发现了过去犯的错
[01:19.28]Oh we are the youth
[01:19.28]我们还年轻
[01:21.86]Cut until it bleeds inside a world without the peace facing
[01:21.86]一直受伤 直到心碎 一个没有和平的世界
[01:25.29]A bit of the truth the truth
[01:25.29]现实 现实
[01:28.94]That's the price you pay
[01:28.94]那就是你要付出的代价
[01:33.66]Leave behind your heart and cast away
[01:33.66]放下心痛 彻底丢掉
[01:38.35]Just another product of today
[01:38.35]不过是今日的另一个战利品
[01:43.04]Rather be the hunter than the prey
[01:43.04]宁愿做个猎人 不要做个猎物
[01:45.6]And you're standing on the edge face up 'cause you're a
[01:45.6]你正站在边缘 抬起头来 因为你
[01:47.2]Natural
[01:47.2]生来如此
[01:49.54]A beating heart of stone
[01:49.54]磐石跳动的心脏
[01:52.0]You gotta be so cold
[01:52.0]你必须冷酷
[01:54.41]To make it in this world
[01:54.41]才能在这世界生存
[01:56.86]Yeah you're a natural
[01:56.86]你生来如此
[01:59.22]Living your life cutthroat
[01:59.22]无情地生活
[02:01.58]You gotta be so cold
[02:01.58]你必须冷酷
[02:05.36]Yeah you're a natural
[02:05.36]你生来如此
[02:10.25]Deep inside me I'm fading to black I'm fading
[02:10.25]在我内心深处 我在渐渐隐没在黑暗里 我在隐没
[02:15.08]Took an oath by the blood of my hand won't break it
[02:15.08]我啮血发誓 绝不会违背
[02:19.87]I can taste it the end is upon us I swear
[02:19.87]我能感受到 末日即将到来 我发誓
[02:21.97]I'm gonna make it
[02:21.97]我会成功的
[02:26.75]I'm gonna make it
[02:26.75]我会成功的
[02:28.03]Natural
[02:28.03]生来如此
[02:30.36]A beating heart of stone
[02:30.36]磐石跳动的心脏
[02:32.8]You gotta be so cold
[02:32.8]你必须冷酷
[02:35.2]To make it in this world
[02:35.2]才能在这世界生存
[02:37.6]Yeah you're a natural
[02:37.6]你生来如此
[02:40.0]Living your life cutthroat
[02:40.0]无情地生活
[02:42.36]You gotta be so cold
[02:42.36]你必须冷酷
[02:52.8]Yeah you're a natural
[02:52.8]你生来如此
[03:01.66]Natural
[03:01.66]生来如此
[03:06.066]Yeah you're a natural
[03:06.066]你生来如此
`,ml=Object.freeze(Object.defineProperty({__proto__:null,default:pl},Symbol.toStringTag,{value:"Module"})),yl=`[00:00.0]Radioactive - Imagine Dragons
[00:07.25]Whoah-oh
[00:07.25]   
[00:14.37]Whoah-oh
[00:14.37]   
[00:21.39]Whoah-oh
[00:21.39]   
[00:29.11]Whoah
[00:29.11]   
[00:32.53]I'm waking up to ash and dust
[00:32.53]在烟尘弥漫中醒来
[00:36.0]I wipe my brow and I sweat my rust
[00:36.0]我揉着眉心 汗水趟过生锈的躯体
[00:43.07]I'm breathing in the chemicals
[00:43.07]我呼吸着充满化学品气味的空气
[00:46.62]I'm breaking in shaping up
[00:46.62]我逐渐适应 准备就绪
[00:50.31]Then checking out on the prison bus
[00:50.31]逃出囚车
[00:54.33]This is it the apocalypse
[00:54.33]就是这样 这就是天启
[00:55.44]Whoa
[00:55.44]   
[00:59.98]I'm waking up I feel it in my bones
[00:59.98]我感到我的身体里躁动的力量
[01:03.45]Enough to make my system blow
[01:03.45]它足以使我的躯体焕然一新
[01:07.18]Welcome to the new age to the new age
[01:07.18]欢迎来到新纪元 来到新纪元
[01:10.74]Welcome to the new age to the new age
[01:10.74]欢迎来到新纪元 来到新纪元
[01:13.49]Whoa-oh whoa
[01:13.49]   
[01:17.79]I'm radioactive radioactive
[01:17.79]我散发着能量 散发着能量
[01:20.5]Whoa-oh whoa
[01:20.5]   
[01:25.3]I'm radioactive radioactive
[01:25.3]我散发着能量 散发着能量
[01:29.0]I raise my flags dye my clothes
[01:29.0]我举起战旗 身披战甲
[01:32.4]It's a revolution I suppose
[01:32.4]我想一场革命即将开始
[01:36.57]We're painted red to fit right in
[01:36.57]我们涂上代表危险的红色参与其中
[01:39.31]Whoa
[01:39.31]   
[01:42.85]I'm breaking in shaping up
[01:42.85]我逐渐适应 准备就绪
[01:46.490005]Then checking out on the prison bus
[01:46.490005]逃出囚车
[01:50.32]This is it the apocalypse
[01:50.32]就是这样 这就是天启
[01:51.46]Whoa
[01:51.46]   
[01:56.130005]I'm waking up I feel it in my bones
[01:56.130005]我感到我的身体里躁动的力量
[01:59.61]Enough to make my system blow
[01:59.61]它足以使我的躯体焕然一新
[02:03.35]Welcome to the new age to the new age
[02:03.35]欢迎来到新纪元 来到新纪元
[02:07.02]Welcome to the new age to the new age
[02:07.02]欢迎来到新纪元 来到新纪元
[02:09.71]Whoa-oh whoa
[02:09.71]   
[02:14.0]I'm radioactive radioactive
[02:14.0]我散发着能量 散发着能量
[02:16.73]Whoa-oh whoa
[02:16.73]   
[02:21.11]I'm radioactive radioactive
[02:21.11]我散发着能量 散发着能量
[02:27.9]All systems go the sun hasn't died
[02:27.9]一切安好 骄阳未落
[02:33.75]Deep in my bones straight from inside
[02:33.75]这信念深入骨髓 由内而外
[02:38.26]I'm waking up I feel it in my bones
[02:38.26]我感到我的身体里躁动的力量
[02:41.74]Enough to make my system blow
[02:41.74]它足以使我的躯体焕然一新
[02:45.45999]Welcome to the new age to the new age
[02:45.45999]欢迎来到新纪元 来到新纪元
[02:49.24]Welcome to the new age to the new age
[02:49.24]欢迎来到新纪元 来到新纪元
[02:51.85]Whoa-oh whoa
[02:51.85]   
[02:56.15]I'm radioactive radioactive
[02:56.15]我散发着能量 散发着能量
[02:58.91]Whoa-oh whoa
[02:58.91]   
[03:03.091]I'm radioactive radioactive
[03:03.091]我散发着能量 散发着能量
`,bl=Object.freeze(Object.defineProperty({__proto__:null,default:yl},Symbol.toStringTag,{value:"Module"})),vl=`[00:00.00]Seasons in the Sun - Westlife (西城男孩)
[00:18.00]Goodbye to you my trusted friend
[00:18.00]至交老友 向你道声离别
[00:23.00]We've known each other since we were nine or ten
[00:23.00]我们相识于天真烂漫的童年
[00:29.00]Together we've climbed hills and trees
[00:29.00]青山流水间留下我们的足迹
[00:32.00]Learned of love and ABC's
[00:32.00]共同经历着青涩无忧的爱
[00:34.00]Skinned our hearts and skinned our knees
[00:34.00]这段青春为盟的年少轻狂
[00:40.00]Goodbye my friend it's hard to die
[00:40.00]再见了 老友 这声珍重实难开口
[00:45.00]When all the birds are singing in the sky
[00:45.00]当群鸟在天际欢呼高唱
[00:51.00]Now that spring is in the air
[00:51.00]空气中弥漫着春日的气息
[00:56.00]Pretty girls are everywhere
[00:56.00]随处可见漂亮的女孩
[00:59.00]Think of me and I'll be there
[00:59.00]想起我 我便与你同在
[01:05.00]We had joy we had fun we had seasons in the sun
[01:05.00]我们曾肆意欢笑 也曾纵情享乐
[01:12.00]But the hills that we climbed were just seasons out of time
[01:12.00]我们曾共享过无虑的阳光季节
[01:18.00]Goodbye Papa please pray for me
[01:18.00]再见了 老爸 请为我祈祷
[01:23.00]I was the black sheep of the family
[01:23.00]我曾是家里的害群之马
[01:29.00]You tried to teach me right from wrong
[01:29.00]你费尽心思教我辨别是非对错
[01:32.00]Too much wine and too much song
[01:32.00]我却沉溺于歌酒狂欢
[01:34.00]Wonder how I got along
[01:34.00]真不知道我是如何度过那些时光
[01:40.00]Goodbye Papa it's hard to die
[01:40.00]再见了 老爸 告别真的很难启齿
[01:45.00]When all the birds are singing in the sky
[01:45.00]当群鸟在天际欢呼高唱
[01:51.00]Now that the spring is in the air
[01:51.00]空气中弥漫着春日的气息
[01:56.00]Little children everywhere
[01:56.00]到处都是天真的稚嫩孩童
[01:59.00]When you see them I'll be there
[01:59.00]当你看到这一切 我便与你同在
[02:05.00]We had joy we had fun we had seasons in the sun
[02:05.00]我们曾肆意欢笑 也曾纵情享乐
[02:10.00]But the wine and the song like the seasons have all gone
[02:10.00]便如这更迭的四季悄然逝去
[02:16.00]We had joy we had fun we had seasons in the sun
[02:16.00]我们曾肆意欢笑 也曾纵情享乐
[02:22.00]But the wine and the song like the seasons have all gone
[02:22.00]便如这更迭的四季悄然逝去
[02:26.00]Yeah yeah
[02:26.00]
[02:32.00]Goodbye Michelle my little one
[02:32.00]再见了 米歇尔 我的小情人
[02:37.00]You gave me love and helped me find the sun
[02:37.00]你给了我爱 助我寻到希望之光
[02:43.00]And every time that I was down
[02:43.00]每当我意志消沉 灰心丧气之时
[02:45.00]You would always come around
[02:45.00]你总会出现在我身边
[02:48.00]And get my feet back on the ground
[02:48.00]让我重拾信心 再次振作
[02:53.00]Goodbye Michelle it's hard to die
[02:53.00]再见了 米歇尔 我本不想离去
[02:59.00]When all the birds are singing in the sky
[02:59.00]当群鸟在天际欢呼高唱
[03:05.00]Now that the spring is in the air
[03:05.00]空气中弥漫着春日的气息
[03:10.00]With the flowers everywhere
[03:10.00]姹紫嫣红 芳香四溢
[03:13.00]I wish that we could both be there
[03:13.00]真希望我们能在那里欢聚
[03:18.00]We had joy we had fun we had seasons in the sun
[03:18.00]我们曾肆意欢笑 也曾纵情享乐
[03:24.00]But the hills that we climbed were just seasons out of time
[03:24.00]我们曾共享过无虑的阳光季节
[03:29.00]We had joy we had fun we had seasons in the sun
[03:29.00]我们曾肆意欢笑 也曾纵情享乐
[03:35.00]But the wine and the song like the seasons have all gone
[03:35.00]便如这更迭的四季悄然逝去
[03:40.00]We had joy we had fun we had seasons in the sun
[03:40.00]我们曾肆意欢笑 也曾纵情享乐
[03:46.00]But the wine and the song like the seasons have all gone
[03:46.00]便如这更迭的四季悄然逝去
[03:51.00]We had joy we had fun we had seasons in the sun
[03:51.00]我们曾肆意欢笑 也曾纵情享乐
[03:56.00]But the wine and the song like the seasons have all gone
[03:56.00]便如这更迭的四季悄然逝去
[04:01.00]We had joy we had fun we had seasons in the sun
[04:01.00]我们曾肆意欢笑 也曾纵情享乐
`,wl=Object.freeze(Object.defineProperty({__proto__:null,default:vl},Symbol.toStringTag,{value:"Module"})),Al=`[00:00.00]Sharks - Imagine Dragons
[00:06.00]Ha ha ha ha ha
[00:06.00]
[00:08.00]Trouble
[00:08.00]大祸临头
[00:11.00]Blood is in the rocky waters
[00:11.00]鲜血漂浮在礁石密布的水域里
[00:12.00]Hide away your sons and daughters
[00:12.00]将你的儿女好好藏起来
[00:14.00]Eat you alive
[00:14.00]将你生吞活剥
[00:15.00]Eat you alive
[00:15.00]将你生吞活剥
[00:16.00]Levels
[00:16.00]情势危急
[00:16.00]Levels
[00:16.00]情势危急
[00:18.00]Better put your head on swivels
[00:18.00]你必须保持清醒的头脑
[00:18.00]Swivels
[00:18.00]提高警惕
[00:20.00]Dancing with the very devil
[00:20.00]与冷酷无情的恶魔共舞
[00:20.00]Devil
[00:20.00]恶魔
[00:21.00]Butter to knife
[00:21.00]刀子上抹好黄油
[00:22.00]Butter to knife
[00:22.00]刀子上抹好黄油
[00:24.00]You think you're better than them
[00:24.00]你觉得自己所向披靡
[00:26.00]Better than them
[00:26.00]所向披靡
[00:28.00]You think they're really your friends
[00:28.00]你觉得他们是你的至交好友
[00:30.00]Really your friends
[00:30.00]至交好友
[00:32.00]But when it comes to the end
[00:32.00]但是到了最后的时刻
[00:34.00]To the end
[00:34.00]直到最后
[00:36.00]You're just the same as them
[00:36.00]你与他们沆瀣一气
[00:37.00]Same as them
[00:37.00]沆瀣一气
[00:38.00]Ha ha ha ha ha
[00:38.00]
[00:40.00]So let it go let it go
[00:40.00]所以放任自流吧
[00:42.00]That's the way that it goes
[00:42.00]结局早已注定
[00:44.00]First you're in then you're out
[00:44.00]首先你进进出出 捉摸不透
[00:46.00]Everybody knows
[00:46.00]众人皆知
[00:48.00]You're hot then you're cold
[00:48.00]你时而热情时而冷淡
[00:50.00]You're a light in the dark
[00:50.00]你是黑暗中闪烁的一束微光
[00:52.00]Just you wait and you'll see
[00:52.00]拭目以待吧
[00:55.00]That you're swimming with sharks
[00:55.00]你与鲨鱼一起遨游
[00:56.00]He's coming to get you
[00:56.00]他来势汹汹 对你展开攻势
[00:59.00]Chicka-woo-woo
[00:59.00]
[01:00.00]He's coming to get you get
[01:00.00]他来势汹汹 对你展开攻势
[01:02.00]Chicka-woo
[01:02.00]
[01:03.00]Bubbles
[01:03.00]不断冒着气泡
[01:05.00]Drowning you seeing doubles
[01:05.00]将你淹没 你的视线变得模糊不清
[01:07.00]Don't you let them see your struggles
[01:07.00]别让他们看到你拼命挣扎的样子
[01:10.00]Hiding your tears
[01:10.00]掩饰着满眼泪水
[01:11.00]Crisis
[01:11.00]危机重重
[01:12.00]Take advantage of your niceness
[01:12.00]利用你释放的善意
[01:14.00]Cut you up in even slices
[01:14.00]聚精会神 将你切成薄片
[01:17.00]Prey on your fears
[01:17.00]利用你心中的恐惧
[01:19.00]You think you're better than them
[01:19.00]你觉得自己所向披靡
[01:20.00]Better than them
[01:20.00]所向披靡
[01:21.00]You think you're better
[01:21.00]你觉得自己更胜一筹
[01:22.00]You think they're really your friends
[01:22.00]你觉得他们是你的至交好友
[01:24.00]Really your friends
[01:24.00]至交好友
[01:26.00]But when it comes to the end
[01:26.00]但是到了最后的时刻
[01:27.00]To the end
[01:27.00]直到最后
[01:28.00]Oh no
[01:28.00]
[01:30.00]You're just the same as them
[01:30.00]你与他们沆瀣一气
[01:31.00]Same as them
[01:31.00]沆瀣一气
[01:32.00]Ha ha ha ha ha
[01:32.00]
[01:34.00]So let it go let it go
[01:34.00]所以放任自流吧
[01:36.00]That's the way that it goes
[01:36.00]结局早已注定
[01:38.00]First you're in then you're out
[01:38.00]首先你进进出出 捉摸不透
[01:40.00]Everybody knows
[01:40.00]众人皆知
[01:42.00]You're hot then you're cold
[01:42.00]你时而热情时而冷淡
[01:44.00]You're a light in the dark
[01:44.00]你是黑暗中闪烁的一束微光
[01:46.00]Just you wait and you'll see
[01:46.00]拭目以待吧
[01:48.00]That you're swimming with sharks
[01:48.00]你与鲨鱼一起遨游
[01:49.00]My blood is pumping
[01:49.00]我热血沸腾
[01:50.00]He's coming to get you
[01:50.00]他来势汹汹 对你展开攻势
[01:51.00]Don't take it from me
[01:51.00]千万不要相信我
[01:52.00]Woo-woo
[01:52.00]
[01:53.00]My blood is pumping
[01:53.00]我热血沸腾
[01:54.00]He's coming to get you get
[01:54.00]他来势汹汹 对你展开攻势
[01:56.00]Don't take it from me
[01:56.00]千万不要相信我
[01:57.00]My blood is pumping
[01:57.00]我热血沸腾
[01:58.00]He's coming to get you
[01:58.00]他来势汹汹 对你展开攻势
[01:59.00]Don't take it from me
[01:59.00]千万不要相信我
[03:00.00]Woo-woo
[02:00.00]
[02:02.00]My blood is pumping
[02:01.00]我热血沸腾
[02:03.00]He's coming to get you get
[02:02.00]他来势汹汹 对你展开攻势
[02:04.00]Don't take it from me
[02:04.00]千万不要相信我
[02:06.00]Every time my heart is beating
[02:06.00]每当我的心不停跳动
[02:08.00]I can feel the recipe
[02:08.00]我已想好烹饪猎物的绝佳食谱
[02:11.00]I wonder if my day is gonna blame it on the entropy
[02:11.00]我不禁好奇我的日子是否该归咎于熵的定律
[02:15.00]My blood is pumping I can see the end is right in front of me
[02:15.00]我热血沸腾 我能看到结局就在我的眼前
[02:18.00]Don't take it from me I could be everything
[02:18.00]千万不要相信我 我可以肆意妄为
[02:22.00]Everything
[02:22.00]肆意妄为
[02:25.00]Sharks
[02:25.00]鲨鱼悄然而至
[02:27.00]Don't take it from me
[02:27.00]千万不要相信我
[02:30.00]My blood is pumping my blood is pumping
[02:30.00]我热血沸腾 我热血沸腾
[02:31.00]Sharks
[02:31.00]鲨鱼悄然而至
[02:34.00]Don't take it from me I could be everything
[02:34.00]千万不要相信我 我可以肆意妄为
[02:34.00]Everything
[02:34.00]肆意妄为
[02:36.00]So let it go let it go
[02:36.00]所以放任自流吧
[02:38.00]That's the way that it goes
[02:38.00]结局早已注定
[02:40.00]First you're in then you're out
[02:40.00]首先你进进出出 捉摸不透
[02:42.00]Everybody knows
[02:42.00]众人皆知
[02:44.00]You're hot then you're cold
[02:44.00]你时而热情时而冷淡
[02:46.00]You're a light in the dark
[02:46.00]你是黑暗中闪烁的一束微光
[02:48.00]Just you wait and you'll see
[02:48.00]拭目以待吧
[02:50.00]That you're swimming with sharks
[02:50.00]你与鲨鱼一起遨游
[02:51.00]My blood is pumping
[02:51.00]我热血沸腾
[02:52.00]He's coming to get you
[02:52.00]他来势汹汹 对你展开攻势
[02:53.00]Don't take it from me
[02:53.00]千万不要相信我
[02:54.00]Woo-woo
[02:54.00]
[02:55.00]My blood is pumping
[02:55.00]我热血沸腾
[02:56.00]He's coming to get you get
[02:56.00]他来势汹汹 对你展开攻势
[02:58.00]Don't take it from me
[02:58.00]千万不要相信我
[02:59.00]My blood is pumping
[02:59.00]我热血沸腾
[03:00.00]He's coming to get you
[03:00.00]他来势汹汹 对你展开攻势
[03:02.00]Don't take it from me
[03:02.00]千万不要相信我
[03:03.00]My blood is pumping
[03:03.00]我热血沸腾
[03:04.00]He's coming to get you get
[03:04.00]他来势汹汹 对你展开攻势
[03:09.00]Don't take it from me
[03:09.00]千万不要相信我
`,_l=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"})),Il=`[00:00.00]Thunder - Imagine Dragons (梦龙)
[00:03.00]Just a young gun with a quick fuse
[00:03.00]像是一把容易走火的枪 我年轻气盛
[00:06.00]I was uptight wanna let loose
[00:06.00]焦躁不安 我需要给自己松绑
[00:08.00]I was dreaming of bigger things
[00:08.00]我曾有很多大大的梦想
[00:11.00]Wanna leave my own life behind
[00:11.00]想要放下过去的生活
[00:14.00]Not a yes sir not a follower
[00:14.00]不愿做一个唯唯诺诺的应声虫
[00:16.00]Fit the box fit the mold
[00:16.00]不愿改变自己 适应一切
[00:19.00]Have a seat in the foyer take a number
[00:19.00]也不愿拿着号码 在大厅排队等待
[00:22.00]I was lightning before the thunder
[00:22.00]我曾是耀眼绚烂的闪电 如今我摒弃过往成为震撼世界的滚滚惊雷
[00:24.00]Thunder thunder
[00:24.00]滚滚惊雷
[00:26.00]Thunder thun thunder
[00:26.00]滚滚惊雷
[00:29.00]Thun thun thunder thunder thunder
[00:29.00]滚滚惊雷
[00:32.00]Thunder thun thunder
[00:32.00]滚滚惊雷
[00:34.00]Thun thun thunder thunder
[00:34.00]滚滚惊雷
[00:37.00]Thunder feel the thunder
[00:37.00]滚滚惊雷 感受这雷声轰鸣
[00:40.00]Lightning then the thunder
[00:40.00]电闪雷鸣
[00:43.00]Thunder feel the thunder
[00:43.00]滚滚惊雷 感受这雷声轰鸣
[00:45.00]Lightning then the thunder
[00:45.00]电闪雷鸣
[00:48.00]Thunder thunder
[00:48.00]滚滚惊雷
[00:51.00]Thunder
[00:51.00]滚滚惊雷
[00:54.00]Kids were laughing in my classes
[00:54.00]当我的追求是那么与众不同时
[00:57.00]While I was scheming for the masses
[00:57.00]全班的同学都嘲笑我
[01:00.00]Who do you think you are
[01:00.00]你以为你是谁啊
[01:03.00]Dreaming 'bout being a big star
[01:03.00]还想成为超级巨星
[01:05.00]They say you're basic they say you're easy
[01:05.00]你得承认你是个普通人 你的想法太幼稚
[01:08.00]You're always riding in the backseat
[01:08.00]你就是那种只能坐在教室最后一排的傻瓜
[01:11.00]Now I'm smiling from the stage while
[01:11.00]如今 我在舞台上对你微笑
[01:14.00]You were clapping in the nosebleeds
[01:14.00]而你们在台下仰望着我 为我喝彩
[01:15.00]Thunder
[01:15.00]像是那滚滚的雷声
[01:18.00]Thunder thun thunder
[01:18.00]滚滚惊雷
[01:21.00]Thun thun thunder thunder thunder
[01:21.00]滚滚惊雷
[01:24.00]Thunder thun thunder
[01:24.00]滚滚惊雷
[01:25.00]Thun thun thunder thunder
[01:25.00]滚滚惊雷
[01:29.00]Thunder feel the thunder
[01:29.00]滚滚惊雷 感受这雷声轰鸣
[01:31.00]Lightning then the thunder
[01:31.00]电闪雷鸣
[01:34.00]Thunder feel the thunder
[01:34.00]滚滚惊雷 感受这雷声轰鸣
[01:36.00]Lightning then the thunder
[01:36.00]电闪雷鸣
[02:00.00]Thunder
[02:00.00]电闪雷鸣
[02:03.00]Thunder feel the thunder
[02:03.00]滚滚惊雷 感受这雷声轰鸣
[02:05.00]Lightning then the thunder thunder
[02:05.00]电闪雷鸣
[02:09.00]Thunder feel the thunder
[02:09.00]滚滚惊雷 感受这雷声轰鸣
[02:11.00]Lightning then the thunder thunder
[02:11.00]电闪雷鸣
[02:14.00]Thunder feel the thunder
[02:14.00]滚滚惊雷 感受这雷声轰鸣
[02:17.00]Lightning then the thunder thunder
[02:17.00]电闪雷鸣
[02:20.00]Thunder feel the thunder
[02:20.00]滚滚惊雷 感受这雷声轰鸣
[02:23.00]Lightning then the thunder thunder
[02:23.00]电闪雷鸣
[02:26.00]Thunder feel the thunder feel the
[02:26.00]滚滚惊雷 感受这雷声轰鸣 感受这
[02:28.00]Lightning then the thunder thunder
[02:28.00]电闪雷鸣
[02:32.00]Thunder thunder thunder
[02:32.00]滚滚惊雷
[02:34.00]Thun thun thunder thunder
[02:34.00]滚滚惊雷
[02:38.00]Thunder thunder thunder
[02:38.00]滚滚惊雷
[02:39.00]Thun thun thunder thunder
[02:39.00]滚滚惊雷
[02:44.00]Thunder thunder thunder
[02:44.00]滚滚惊雷
[02:45.00]Thun thun thunder thunder
[02:45.00]滚滚惊雷
[02:49.00]Thunder thunder thunder
[02:49.00]滚滚惊雷
[02:54.00]Thun thun thunder thunder
[02:54.00]滚滚惊雷
`,xl=Object.freeze(Object.defineProperty({__proto__:null,default:Il},Symbol.toStringTag,{value:"Module"})),Tl=`[00:00.00]Wake Up - Imagine Dragons
[00:12.00]Wheels up when I'm off the ground
[00:12.00]轮子收起 飞机起飞 我飞离地面
[00:14.00]I'm nowhere but I'm all around
[00:14.00]我无处可去 却又无处不在
[00:17.00]I'm spinnin' watch me now
[00:17.00]我盘旋高空 看看此刻的我吧
[00:19.00]I'm spinnin' spinnin'
[00:19.00]身体不由自主地旋转 旋转不停
[00:22.00]Big man when a wall's between us
[00:22.00]强大如我 即便我们之间矗立着阻隔的高墙
[00:24.00]Big man gonna break to pieces
[00:24.00]强大如我 终会荡平一切阻碍
[00:26.00]Spinnin' can't believe it
[00:26.00]旋转不停 难以置信
[00:28.00]Spinnin' spinnin'
[00:28.00]身体不由自主地旋转 旋转不停
[00:32.00]Uh turn around turn it up talk a bit
[00:32.00]转身吧 调高音量 说点什么
[00:36.00]Zip it up lock you in and close it up
[00:36.00]别说话 将你牢牢禁锢 向你靠近
[00:37.00]Yup
[00:37.00]
[00:41.00]Everybody's coming for you wake up
[00:41.00]你成了众人竞相追逐的目标 醒醒吧
[00:46.00]Everybody's coming wake up
[00:46.00]所有人都蓄势待发 快清醒点
[00:50.00]Bodies dropping everywhere I'm waist up
[00:50.00]随处可见人影闪动 我举手投降
[00:55.00]Everybody's coming wake up
[00:55.00]所有人都蓄势待发 快清醒点
[00:57.00]Some days I'm a ch-chameleon
[00:57.00]有时候 我像是只变色龙般将自己隐藏
[00:59.00]Switch it up when I crawl the ceilin'
[00:59.00]而我爬向的天花板则是开启我热情的开关
[01:01.00]Flip it upside down I'm wheelin'
[01:01.00]世界刹那间天翻地转 我加速不停
[01:03.00]Dealin'
[01:03.00]应对自如
[01:05.00]Every single one of you is coming to my mind
[01:05.00]你们每一个人的身影都在我脑海里一一浮现
[01:08.00]Bring them all together can you stack them in a line
[01:08.00]你能否将他们重新组合 排成一列
[01:10.00]Jealousy is gonna be your failure not mine
[01:10.00]你注定的败局只会以嫉妒收场 可不是我的结局
[01:12.00]Winnin'
[01:12.00]我胜券在握
[01:16.00]Uh turn around turn it up talk a bit
[01:16.00]转身吧 调高音量 说点什么
[01:21.00]Zip it up lock you in and close it up
[01:21.00]别说话 将你牢牢禁锢 向你靠近
[01:25.00]Everybody's coming for you wake up
[01:25.00]你成了众人竞相追逐的目标 醒醒吧
[01:30.00]Everybody's coming wake up
[01:30.00]所有人都蓄势待发 快清醒点
[01:34.00]Bodies dropping everywhere I'm waist up
[01:34.00]随处可见人影闪动 我举手投降
[01:43.00]Everybody's coming wake up
[01:43.00]所有人都蓄势待发 快清醒点
[01:48.00]Everybody's coming wake up
[01:48.00]所有人都蓄势待发 快清醒点
[01:50.00]Got a case of the take or leave it
[01:50.00]要么势在必得 要么弃如敝履
[01:52.00]Give an inch and I'm bound to seize it
[01:52.00]旁人退让的每一步 我绝对分毫必争
[01:56.00]Take a chainsaw out and feed it
[01:56.00]亮出电锯 铲除一切障碍
[01:58.00]Come alive when you don't believe it
[01:58.00]愈是质疑声不断 我愈是神采奕奕
[02:01.00]Write me off and I'd love to read it
[02:01.00]对我不屑一顾 我倒想看看谁笑到最后
[02:03.00]Spit your words and I'll watch you eat it
[02:03.00]随你口诛笔伐 我可要好好看你自食恶果
[02:07.00]Diggin'
[02:07.00]
[02:11.00]Everybody's coming for you wake up
[02:11.00]你成了众人竞相追逐的目标 醒醒吧
[02:16.00]Everybody's coming wake up
[02:16.00]所有人都蓄势待发 快清醒点
[02:20.00]Bodies dropping everywhere I'm waist up
[02:20.00]随处可见人影闪动 我举手投降
[02:29.00]Everybody's coming wake up
[02:29.00]所有人都蓄势待发 快清醒点
[02:33.00]Everybody's coming wake up
[02:33.00]所有人都蓄势待发 快清醒点
[02:36.00]What are you to do
[02:36.00]当你成了众人竞相追逐的目标
[02:38.00]When they come for you
[02:38.00]你会如何应对
[02:43.00]Winners hate to lose
[02:43.00]胜者可不愿尝试失败滋味
`,Sl=Object.freeze(Object.defineProperty({__proto__:null,default:Tl},Symbol.toStringTag,{value:"Module"})),Ml=`[00:00.00]Whatever It Takes - Imagine Dragons (梦龙)
[00:16.00]Falling too fast to prepare for this
[00:16.00]未及准备却已沦陷其中
[00:18.00]Tripping in the world could be dangerous
[00:18.00]陷入这危险重重的世界
[00:20.00]Everybody circling is vulturous
[00:20.00]周遭的人群如虎视眈眈的兀鹰
[00:21.00]Negative nepotist
[00:21.00]不容乐观 偏袒自我
[00:23.00]Everybody waiting for the fall of man
[00:23.00]人人都期盼着人类的毁灭
[00:25.00]Everybody praying for the end of times
[00:25.00]人人都祈祷着末日的降临
[00:26.00]Everybody hoping they could be the one
[00:26.00]人人都希望他们会是唯一的英雄
[00:28.00]I was born to run I was born for this
[00:28.00]我生而为此 此生为此碌碌
[00:29.00]Whip whip
[00:29.00]策马扬鞭 策马扬鞭
[00:31.00]Run me like a race horse
[00:31.00]如赛马般我勇往直前
[00:33.00]Pull me like a rip cord
[00:33.00]如跳伞的绳索将我守护
[00:34.00]Break me down and build me up
[00:34.00]将我击溃 又重新振作
[00:36.00]I wanna be the slip slip
[00:36.00]我只想摆脱禁锢 自由逃离
[00:38.00]Word upon your lip lip
[00:38.00]你话到嘴边 欲语还休
[00:40.00]Letter that you rip rip
[00:40.00]如你撕碎的信件默默尘封
[00:42.00]Break me down and build me up
[00:42.00]将我击溃 又重新振作
[00:45.00]Whatever it takes
[00:45.00]无论代价为何
[00:48.00]Cause I love the adrenaline in my veins
[00:48.00]因我爱那血液里蠢蠢欲动的肾上腺素
[00:52.00]I do whatever it takes
[00:52.00]我将不计代价 全力以赴
[00:56.00]Cause I love how it feels when I break the chains
[00:56.00]因我热爱挣脱束缚的那一刻自由
[01:00.00]Whatever it takes
[01:00.00]无论代价为何
[01:03.00]Ya take me to the top I'm ready for
[01:03.00]带我至那顶峰 我已准备就绪
[01:06.00]Whatever it takes
[01:06.00]无论代价为何
[01:10.00]Cause I love the adrenaline in my veins
[01:10.00]因我爱那血液里蠢蠢欲动的肾上腺素
[01:11.00]I do what it takes
[01:11.00]不计代价 我将全力以赴
[01:13.00]Always had a fear of being typical
[01:13.00]总是害怕去成为典例
[01:14.00]Looking at my body feeling miserable
[01:14.00]看着那遍体鳞伤 悲伤不觉袭来
[01:16.00]Always hanging on to the visual
[01:16.00]总是固执于双眼所见
[01:18.00]I wanna be invisible
[01:18.00]我渴望消失于无形
[01:20.00]Looking at my years like a martyrdom
[01:20.00]审视我那如殉道般的岁月
[01:22.00]Everybody needs to be a part of 'em
[01:22.00]人人都需要有那么一段难忘岁月
[01:23.00]Never be enough I'm the prodigal son
[01:23.00]不曾满足的我不过是个多情的浪子
[01:25.00]I was born to run I was born for this
[01:25.00]我生而为此 此生为此碌碌
[01:26.00]Whip whip
[01:26.00]策马扬鞭 策马扬鞭
[01:28.00]Run me like a race horse
[01:28.00]如赛马般我勇往直前
[01:30.00]Pull me like a rip cord
[01:30.00]如跳伞的绳索将我守护
[01:31.00]Break me down and build me up
[01:31.00]将我击溃 又重新振作
[01:33.00]I wanna be the slip slip
[01:33.00]我只想摆脱禁锢 自由逃离
[01:35.00]Word upon your lip lip
[01:35.00]你话到嘴边 欲语还休
[01:37.00]Letter that you rip rip
[01:37.00]如你撕碎的信件默默尘封
[01:38.00]Break me down and build me up
[01:38.00]将我击溃 又重新振作
[01:42.00]Whatever it takes
[01:42.00]无论代价为何
[01:45.00]Cause I love the adrenaline in my veins
[01:45.00]因我爱那血液里蠢蠢欲动的肾上腺素
[01:49.00]I do whatever it takes
[01:49.00]我将不计代价 全力以赴
[01:53.00]Cause I love how it feels when I break the chains
[01:53.00]因我热爱挣脱束缚的那一刻自由
[01:57.00]Whatever it takes
[01:57.00]无论代价为何
[02:00.00]Ya take me to the top I'm ready for
[02:00.00]带我至那顶峰 我已准备就绪
[02:03.00]Whatever it takes
[02:03.00]无论代价为何
[02:07.00]Cause I love the adrenaline in my veins
[02:07.00]因我爱那血液里蠢蠢欲动的肾上腺素
[02:08.00]I do what it takes
[02:08.00]不计代价 我将全力以赴
[02:11.00]Hypocritical egotistical
[02:11.00]伪善矫情 自负自我
[02:13.00]Don't wanna be the parenthetical
[02:13.00]不愿成为那其中的一个
[02:17.00]Hypothetical working onto something that I'm proud of
[02:17.00]假想我忙碌于自豪的事业
[02:22.00]Out of the box an epoxy to the world and the vision we've lost
[02:22.00]如环氧树脂将我们失去了的世界和风景都拼贴重现
[02:27.00]I'm an apostrophe I'm just a symbol to remind you that there's more to see
[02:27.00]我就是省略号 为提醒你要放宽视野看得更远而存在的符号
[02:30.00]I'm just a product of the system a catastrophe
[02:30.00]我不过是社会体系的产物 是这场灾难的其中环节
[02:34.00]And yet a masterpiece and yet I'm half diseased
[02:34.00]还未成杰作 却已是病入膏肓
[02:36.00]And when I am deceased
[02:36.00]就在我行将就木时
[02:39.00]At least I'll go down to the grave and die happily
[02:39.00]至少我埋入黄土会开心此生不负
[02:44.00]Leave the body of my soul to be a part of me
[02:44.00]离开那灵魂依附的躯体去成为另一个我
[02:46.00]I do what it takes
[02:46.00]不计代价 我将全力以赴
[02:49.00]Whatever it takes
[02:49.00]无论代价为何
[02:53.00]Cause I love the adrenaline in my veins
[02:53.00]因我爱那血液里蠢蠢欲动的肾上腺素
[02:57.00]I do whatever it takes
[02:57.00]我将不计代价 全力以赴
[03:00.00]Cause I love how it feels when I break the chains
[03:00.00]因我热爱挣脱束缚的那一刻自由
[03:05.00]Whatever it takes
[03:05.00]无论代价为何
[03:08.00]Ya take me to the top I'm ready for
[03:08.00]带我至那顶峰 我已准备就绪
[03:11.00]Whatever it takes
[03:11.00]无论代价为何
[03:15.00]Cause I love the adrenaline in my veins
[03:15.00]因我爱那血液里蠢蠢欲动的肾上腺素
[03:20.00]I do what it takes
[03:20.00]不计代价 我将全力以赴
`,El=Object.freeze(Object.defineProperty({__proto__:null,default:Ml},Symbol.toStringTag,{value:"Module"})),kl=`[00:00.00]So Far Away - Martin Garrix/David Guetta/Jamie Scott/Romy Dya
[00:06.61]Written by：Martijn Garritsen/David Guetta/Jamie Scott/Giorgio Tuinfort/Jason Boyd
[00:13.23]Light 'em up light 'em up
[00:15.21]Tell me where you are tell me where you are
[00:19.54]The summer nights the bright lights
[00:21.65]And the shooting stars they break my heart
[00:25.15]I'm calling you now but you're not picking up
[00:28.31]Your shadows so close if you are still in love
[00:32.47]Then light a match light a match
[00:34.55]Baby in the dark show me where you are
[00:37.87]Where you are
[00:39.69]Oh love
[00:41.30]How I miss you every single day
[00:43.29]When I see you on those streets
[00:46.11]Oh love
[00:47.69]Tell me there's a river I can swim
[00:49.70]That will bring you back to me
[00:52.33]'Cause I don't know how to love someone else
[00:55.61]I don't know how to forget your face
[00:59.02]Oh love
[01:00.59]God I miss you every single day
[01:02.47]And now you're so far away
[01:10.08]So far away
[01:17.43]It's breaking me I'm losing you
[01:19.66]We were far from perfect but we were worth it
[01:23.91]Too many fights and we cried
[01:25.92]But never said we're sorry
[01:27.79]Stop saying you love me
[01:29.56]You're calling me now but I can't pick up
[01:32.74]Your shadow's too close and I'm still in love
[01:36.42]The summer's over now but somehow
[01:38.60]It still breaks my heart
[01:40.45]We could have had the stars oh
[01:44.22]Oh love
[01:45.66]How I miss you every single day
[01:47.59]When I see you on those streets
[01:50.57]Oh love
[01:52.12]Tell me there's a river
[01:53.28]I can swim that will bring you back to me
[01:56.78]'Cause I don't know how to love someone else
[02:00.12]I don't know how to forget your face
[02:03.46]Oh love
[02:04.99]God I miss you every single day
[02:07.00]And now you're so far away
[02:14.47]So far away
[02:20.97]So far away
[02:25.04]Oh so far away
[02:33.69]So far away
[02:35.70]Oh love
[02:37.22]How I miss you every single day
[02:39.25]When I see you on those streets
[02:42.09]Oh love
[02:43.68]Tell me there's a river
[02:44.86]I can swim that will bring you back to me
[02:48.18]'Cause I don't know how to love someone else
[02:51.59]I don't know how to forget your face
[02:54.94]Oh love
[02:56.60]God I miss you every single day
[02:58.53]When you're so far away`,Bl=Object.freeze(Object.defineProperty({__proto__:null,default:kl},Symbol.toStringTag,{value:"Module"})),Dl=`[ml:1.0]
[ti:Something Just Like This]
[ar:The Chainsmokers/Coldplay]
[al:Something Just Like This]
[by:]
[offset:0]
[00:00.00]Something Just Like This - The Chainsmokers/Coldplay
[00:02.63]   
[00:02.63]Lyrics by：Andrew Taggart/Christopher Martin/Guy Berryman/Jonny Buckland/Will Champion
[00:05.27]   
[00:05.27]Composed by：Andrew Taggart/Christopher Martin/Guy Berryman/Jonny Buckland/Will Champion
[00:07.91]   
[00:07.91]I've been reading books of old
[00:10.44]我曾饱读古书
[00:10.44]The legends and the myths
[00:12.79]还有传说与神话
[00:12.79]Achilles and his gold
[00:15.10]阿喀琉斯和他的战利品
[00:15.10]Hercules and his gifts
[00:17.60]大力神赫拉克勒斯与他的天赋
[00:17.60]Spiderman's control
[00:19.88]蜘蛛侠的掌控力
[00:19.88]And Batman with his fists
[00:22.82]蝙蝠侠的铁拳
[00:22.82]And clearly I don't see myself upon that list
[00:26.30]显而易见我未能名列其中
[00:26.30]But she said where'd you wanna go
[00:28.98]但她问你想去往何方
[00:28.98]How much you wanna risk
[00:31.25]你甘愿冒多大的风险？
[00:31.25]I'm not looking for somebody
[00:33.41]我并不渴望
[00:33.41]With some Superhuman gifts
[00:36.08]超人般的天赋异禀
[00:36.08]Some Superhero
[00:38.39]那种超级英雄
[00:38.39]Some fairytale bliss
[00:40.83]那些童话里的天赐神力
[00:40.83]Just something I can turn to
[00:43.05]我只希望能有些依靠
[00:43.05]Somebody I can kiss
[00:45.12]吻到我爱的人就好
[00:45.12]I want something just like this
[00:47.69]我想要的不过是这些
[00:47.69]Doo doo doo doo doo doo
[00:50.00]   
[00:50.00]Doo doo doo doo doo
[00:52.40]   
[00:52.40]Doo doo doo doo doo doo
[00:54.25]   
[00:54.25]Oh I want something just like this
[00:56.99]我想要的不过是这些
[00:56.99]Doo doo doo doo doo doo
[00:59.49]   
[00:59.49]Doo doo doo doo doo
[01:01.69]   
[01:01.69]Doo doo doo doo doo doo
[01:03.60]   
[01:03.60]Oh I want something just like this
[01:13.20]我想要的不过是这些
[01:13.20]I want something just like this
[01:22.85]我想要的不过是这些
[01:22.85]I've been reading books of old
[01:25.03]我曾饱读古书
[01:25.03]The legends and the myths
[01:27.34]还有传说与神话
[01:27.34]The testaments they told
[01:29.69]他们口中的圣约
[01:29.69]The moon and its eclipse
[01:32.04]月儿的阴晴圆缺
[01:32.04]And Superman unrolls
[01:34.38]还有超人的出现
[01:34.38]A suit before he lifts
[01:37.69]他飞天前的装束
[01:37.69]But I'm not the kind of person that it fits
[01:40.92]而我不是这样的英雄
[01:40.92]She said where'd you wanna go
[01:43.75]她问你想去往何方
[01:43.75]How much you wanna risk
[01:45.79]你甘愿冒多大的风险？
[01:45.79]I'm not looking for somebody
[01:48.04]我并不渴望
[01:48.04]With some Superhuman gifts
[01:50.57]超人般的天赋异禀
[01:50.57]Some Superhero
[01:52.93]那种超级英雄
[01:52.93]Some fairytale bliss
[01:55.29]那些童话里的天赐神力
[01:55.29]Just something I can turn to
[01:57.61]我只希望能有些依靠
[01:57.61]Somebody I can miss
[01:59.70]有个我思念的人便好
[01:59.70]I want something just like this
[02:09.11]我想要的不过是这些
[02:09.11]I want something just like this
[02:18.16]我想要的不过是这些
[02:18.16]Oh I want something just like this
[02:21.18]我想要的不过是这些
[02:21.18]Doo doo doo doo doo doo
[02:23.28]   
[02:23.28]Doo doo doo doo doo
[02:25.53]   
[02:25.53]Doo doo doo doo doo doo
[02:27.63]   
[02:27.63]Oh I want something just like this
[02:30.23]我想要的不过是这些
[02:30.23]Doo doo doo doo doo doo
[02:32.70]   
[02:32.70]Doo doo doo doo doo
[02:34.87]   
[02:34.87]Doo doo doo doo doo doo
[02:37.69]   
[02:37.69]Where'd you wanna go
[02:39.62]你想去往何方
[02:39.62]How much you wanna risk
[02:41.59]你甘愿冒多大的风险？
[02:41.59]I'm not looking for somebody
[02:44.00]我并不渴望
[02:44.00]With some Superhuman gifts
[02:46.59]超人般的天赋异禀
[02:46.59]Some Superhero
[02:48.68]那种超级英雄
[02:48.68]Some fairytale bliss
[02:51.24]那些童话里的天赐神力
[02:51.24]Just something I can turn to
[02:53.51]我只希望能有些依靠
[02:53.51]Somebody I can kiss
[02:55.59]吻到我爱的人就好
[02:55.59]I want something just like this
[03:14.04]我想要的不过是这些
[03:14.04]Oh I want something just like this
[03:32.78]我想要的不过是这些
[03:32.78]Oh I want something just like this
[03:51.44]我想要的不过是这些
[03:51.44]Oh I want something just like this
[03:56.044]我想要的不过是这些
[03:56.044]`,jl=Object.freeze(Object.defineProperty({__proto__:null,default:Dl},Symbol.toStringTag,{value:"Module"})),Cl="data:image/webp;base64,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",Ol=Object.freeze(Object.defineProperty({__proto__:null,default:Cl},Symbol.toStringTag,{value:"Module"})),Rl="/music-web/assets/Brids-CgI_uYZM.webp",Pl=Object.freeze(Object.defineProperty({__proto__:null,default:Rl},Symbol.toStringTag,{value:"Module"})),Ll="data:image/webp;base64,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",Hl=Object.freeze(Object.defineProperty({__proto__:null,default:Ll},Symbol.toStringTag,{value:"Module"})),Wl="/music-web/assets/It's%20time-rkNuDT1A.webp",Fl=Object.freeze(Object.defineProperty({__proto__:null,default:Wl},Symbol.toStringTag,{value:"Module"})),Nl="/music-web/assets/Natural-BjAlP-yv.webp",Ql=Object.freeze(Object.defineProperty({__proto__:null,default:Nl},Symbol.toStringTag,{value:"Module"})),Ul="/music-web/assets/Radioactive-DWHcxKLc.webp",Vl=Object.freeze(Object.defineProperty({__proto__:null,default:Ul},Symbol.toStringTag,{value:"Module"})),zl="data:image/webp;base64,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",Kl=Object.freeze(Object.defineProperty({__proto__:null,default:zl},Symbol.toStringTag,{value:"Module"})),Yl="/music-web/assets/Thunder-BFI2gm7s.webp",ql=Object.freeze(Object.defineProperty({__proto__:null,default:Yl},Symbol.toStringTag,{value:"Module"})),Gl="data:image/webp;base64,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",Jl=Object.freeze(Object.defineProperty({__proto__:null,default:Gl},Symbol.toStringTag,{value:"Module"})),Xl="/music-web/assets/Whatever%20It%20Takes-BQcRQVsM.webp",Zl=Object.freeze(Object.defineProperty({__proto__:null,default:Xl},Symbol.toStringTag,{value:"Module"})),$l="/music-web/assets/peter-Djj-KHRh.webp",ea=Object.freeze(Object.defineProperty({__proto__:null,default:$l},Symbol.toStringTag,{value:"Module"})),ta="/music-web/assets/shape-eqqK86Ed.webp",na=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"})),sa="/music-web/assets/so%20far%20away-Dl1oEphr.webp",oa=Object.freeze(Object.defineProperty({__proto__:null,default:sa},Symbol.toStringTag,{value:"Module"})),ia="/music-web/assets/something-f5Ei2QHr.webp",ra=Object.freeze(Object.defineProperty({__proto__:null,default:ia},Symbol.toStringTag,{value:"Module"})),Ae=z(null),vt=z(null),Wt=z(null),go=()=>{Ae.value||(Ae.value=new window.AudioContext,vt.value=Ae.value.createGain(),vt.value.connect(Ae.value.destination),xt(Me.value))},b0=z(null),ot=z(!1),He=z(null),k0=z(0),Mn=z(0),Dt=async(e=wt.value[xe.value])=>{var t;if(!(e.audioUrl===((t=Fe.value)==null?void 0:t.audioUrl)&&!(Math.abs(Be.value-Te.value)<=1))){Fe.value=e,Wt.value&&Wt.value!==null&&(Wt.value.destroy(),Wt.value=null),go();try{const s=await(await fetch(e.audioUrl)).arrayBuffer();return b0.value=await Ae.value.decodeAudioData(s),Be.value=b0.value.duration,B0(),!0}catch(n){return console.error("音频加载失败:",n),!1}}};function B0(){if(!b0.value){Dt();return}Wt.value={play:B0,pause:En,stop:D0,destroy:mo,setVolume:xt,seek:po,onProgress:aa},He.value=Ae.value.createBufferSource(),He.value.buffer=b0.value,He.value.connect(vt.value);const e=k0.value;return He.value.start(0,e),Mn.value=Ae.value.currentTime-e,ot.value=!0,He.value.onended=()=>{Math.abs(Be.value-Te.value)<=1&&fa[Ft.value]()},la(),!0}const En=()=>ot.value?(He.value.stop(),k0.value=Ae.value.currentTime-Mn.value,ot.value=!1,cancelAnimationFrame(kn.value),!0):!1,D0=()=>{ot.value&&(ot.value=!1,He.value.stop(),He.value.disconnect()),k0.value=0,cancelAnimationFrame(kn.value)};function xt(e){const t=Math.max(0,Math.min(1,e));vt.value&&Ae.value&&(vt.value.gain.value=t)}const po=e=>{if(e>=0&&e<=Be.value){const t=ot.value;return En(),k0.value=e,t&&B0(),!0}return!1},sn=z(null),kn=z();function la(){const e=()=>{ot.value&&(Te.value=Ae.value.currentTime-Mn.value,Be.value!==0&&Te.value>=Be.value&&D0(),sn.value&&sn.value({currentTime:Te.value,duration:Be.value,progress:yo.value*100}),kn.value=requestAnimationFrame(e))};e()}function aa(e){sn.value=e}function mo(){var e,t,n;D0(),Ae.value&&((e=Ae.value)==null||e.close(),(t=He.value)==null||t.disconnect(),(n=vt.value)==null||n.disconnect(),Ae.value=null,vt.value=null,He.value=null)}var gt=(e=>(e.Sequence="SEQUENCE",e.Random="RANDOM",e.Single="SINGLE",e))(gt||{});function ls(e){if(isNaN(e))return"00:00";const t=Math.abs(Math.floor(e)),n=Math.floor(t/3600),s=Math.floor(t%3600/60),o=t%60,r=[];return n>0&&r.push(n.toString().padStart(2,"0")),r.push(s.toString().padStart(2,"0")),r.push(o.toString().padStart(2,"0")),r.join(":")}const ua=(e=1,t)=>Math.floor(Math.random()*e),on=z(window.innerWidth/750),rn=z(0),as=()=>{on.value=window.innerWidth/750,rn.value=window.innerWidth},Me=z(.5),xe=z(0),Te=z(0),Be=z(0),Ft=z(gt.Sequence),yo=st(()=>Be.value!==0?Te.value/Be.value:0),ca=()=>{xe.value===0?xe.value=wt.value.length-1:xe.value--,Dt()},bo=()=>{xe.value===wt.value.length-1?xe.value=0:xe.value++,Dt()},fa={SEQUENCE:()=>bo(),RANDOM:()=>{xe.value=ua(wt.value.length-1,xe.value),Dt()},SINGLE:()=>{Dt()}},wt=z([]),Fe=z(null),ha=async()=>{try{const e=Object.assign({"/src/assets/music/Bones.mp3":Jr,"/src/assets/music/Demons.mp3":Xr,"/src/assets/music/It's time.mp3":Zr,"/src/assets/music/Natural.mp3":$r,"/src/assets/music/Radioactive.mp3":el,"/src/assets/music/Season in the Sun.mp3":tl,"/src/assets/music/Sharks.mp3":nl,"/src/assets/music/Thunder.mp3":sl,"/src/assets/music/Wake Up.mp3":ol,"/src/assets/music/Whatever It Takes.mp3":il,"/src/assets/music/peter.mp3":rl,"/src/assets/music/so far away.mp3":ll,"/src/assets/music/something.mp3":al}),t=Object.assign({"/src/assets/music/Bones.js":cl,"/src/assets/music/Demons.js":hl,"/src/assets/music/It's time.js":gl,"/src/assets/music/Natural.js":ml,"/src/assets/music/Radioactive.js":bl,"/src/assets/music/Season in the Sun.js":wl,"/src/assets/music/Sharks.js":_l,"/src/assets/music/Thunder.js":xl,"/src/assets/music/Wake Up.js":Sl,"/src/assets/music/Whatever It Takes.js":El,"/src/assets/music/so far away.js":Bl,"/src/assets/music/something.js":jl}),n=Object.assign({"/src/assets/images/music/Bones.webp":Ol,"/src/assets/images/music/Brids.webp":Pl,"/src/assets/images/music/Demons.webp":Hl,"/src/assets/images/music/It's time.webp":Fl,"/src/assets/images/music/Natural.webp":Ql,"/src/assets/images/music/Radioactive.webp":Vl,"/src/assets/images/music/Sharks.webp":Kl,"/src/assets/images/music/Thunder.webp":ql,"/src/assets/images/music/Wake Up.webp":Jl,"/src/assets/images/music/Whatever It Takes.webp":Zl,"/src/assets/images/music/peter.webp":ea,"/src/assets/images/music/shape.webp":na,"/src/assets/images/music/so far away.webp":oa,"/src/assets/images/music/something.webp":ra});wt.value=await Promise.all(Object.entries(e).map(async([s,o])=>{const r=s.replace(/^.*music\//,"").replace(/\.mp3$/,""),l=`/src/assets/music/${r}.js`,a=`/src/assets/images/music/${r}.webp`,u=t[l]||{default:""},h=n[a]||{default:""};return{id:r,title:da(r),audioUrl:o,lyric:u.default,logo:h.default}})),Fe.value=wt.value[xe.value]}catch(e){console.error("加载音乐数据失败:",e)}};function da(e){return e.replace(/^\d+_/,"").replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}const Lt=st(()=>{var e;return((e=Fe.value)==null?void 0:e.lyric.split(`
`).map(t=>{var r,l,a;if(!t)return{};const n=(r=t==null?void 0:t.split("]")[0])==null?void 0:r.replace("[",""),s=Number((l=n==null?void 0:n.split(":"))==null?void 0:l[0])||0,o=Number((a=n==null?void 0:n.split(":"))==null?void 0:a[1])||0;return{time:s*60+o,text:t.split("]")[1]}}))||["暂无歌词"]}),ga={class:"progress"},pa=qe({__name:"progress",props:{callback:{type:Function},progress:{}},setup(e){const t=e,n=z(!1),s=h=>{h.preventDefault(),n.value=!0,window.addEventListener("mousemove",o),window.addEventListener("touchmove",o),window.addEventListener("mouseup",r),window.addEventListener("touchend",r)};function o(h){n.value&&a(h)}function r(){n.value=!1,window.removeEventListener("mousemove",o),window.removeEventListener("touchmove",o)}const l=z(null);function a(h){var S,M;const g=l.value.getBoundingClientRect();let y=((h.clientX??((M=(S=h.touches)==null?void 0:S[0])==null?void 0:M.clientX))-g.left)/g.width;y=Math.max(0,Math.min(1,y)),t.callback(Number(y.toFixed(2)))}function u(h){a(h)}return(h,c)=>(se(),oe("div",ga,[W("div",{class:"custom-slider",ref_key:"sliderRef",ref:l},[W("div",{class:"track",onClick:u},[W("div",{class:"fill",style:yt({width:h.progress*100+"%"})},null,4)]),W("div",{class:"thumb",style:yt({left:h.progress*100+"%"}),onMousedown:s,onTouchstart:s},null,36)],512)]))}}),Je=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},vo=Je(pa,[["__scopeId","data-v-f7ff3b0b"]]),wo="/music-web/assets/music-C0v9vemk.jpg",ma={class:"progress-bar"},ya={class:"progress-bar__logo"},ba=["src"],va={class:"progress-bar__info"},wa={class:"name"},Aa={class:"progress-bar__info__progress"},_a={class:"time"},Ia=qe({__name:"progressBar",setup(e){const t=o=>{Te.value=o*Be.value,po(Te.value)},n=st(()=>ls(Te.value)),s=st(()=>ls(Be.value));return(o,r)=>{var l,a;return se(),oe("div",ma,[W("div",ya,[W("img",{src:((l=V(Fe))==null?void 0:l.logo)||V(wo),alt:"音乐logo"},null,8,ba)]),W("div",va,[W("p",wa,pt(((a=V(Fe))==null?void 0:a.title)||"暂无音乐"),1),W("div",Aa,[ae(vo,{progress:V(yo),callback:t},null,8,["progress"]),W("p",_a,[W("span",null,pt(V(n)),1),r[0]||(r[0]=en()),r[1]||(r[1]=W("i",null,"/",-1)),r[2]||(r[2]=en()),W("span",null,pt(V(s)),1)])])])])}}}),xa=Je(Ia,[["__scopeId","data-v-f27a4094"]]),Ta={class:"volume-percent"},Sa=qe({__name:"volume",setup(e){const t=st(()=>Me.value===0),n=z(.5);xt(Me.value);const s=u=>{Me.value=u,xt(u)},o=()=>{t.value?Me.value=n.value:(n.value=Me.value,Me.value=0),xt(Me.value)};nt(()=>Me.value,u=>{xt(u)});const r=z(!1),l=()=>{r.value=!0},a=()=>{r.value=!1};return(u,h)=>(se(),oe("div",{class:"contoel-volume",onMouseenter:l,onMouseleave:a},[W("span",{class:Ye(["iconfont",{"icon-jingyin":V(t),"icon-yinliang":!V(t)}]),onClick:y0(o,["stop"])},null,2),W("div",{class:Ye(["contoel-volume__model",{active:V(r)}])},[ae(vo,{progress:V(Me),callback:s},null,8,["progress"]),W("span",Ta,pt((V(Me)*100).toFixed(0))+"% ",1)],2)],32))}}),Ma=Je(Sa,[["__scopeId","data-v-0020b177"]]),Ea={class:"control-btn"},ka=qe({__name:"playBtn",setup(e){return(t,n)=>(se(),oe("div",Ea,[W("span",{class:"iconfont icon-prev",onClick:n[0]||(n[0]=s=>V(ca)()),title:"上一首"}),V(ot)?(se(),oe("span",{key:1,class:"iconfont icon-zanting",onClick:n[2]||(n[2]=s=>V(En)()),title:"暂停"})):(se(),oe("span",{key:0,class:"iconfont icon-bofang",onClick:n[1]||(n[1]=s=>V(B0)()),title:"播放"})),W("span",{class:"iconfont icon-tingzhi",onClick:n[3]||(n[3]=s=>V(D0)()),title:"停止"}),W("span",{class:"iconfont icon-next",onClick:n[4]||(n[4]=s=>V(bo)()),title:"下一首"})]))}}),Ba=Je(ka,[["__scopeId","data-v-25589bc6"]]),Da={class:"btn-list"},ja=["title","onClick"],Ca=qe({__name:"controlBtn",emits:["update:showBorad"],setup(e,{emit:t}){const n={SEQUENCE:"icon-shunxubofang",RANDOM:"icon-suijibofang",SINGLE:"icon-danquxunhuan"},s=t,o=st(()=>[{title:"播放列表",icon:"icon-play_list",click:()=>{s("update:showBorad",!0)}},{title:"顺序切换",icon:n[Ft.value],click:()=>{Ft.value=Ft.value===gt.Sequence?gt.Random:Ft.value===gt.Random?gt.Single:gt.Sequence}}]);return(r,l)=>(se(),oe("div",Da,[(se(!0),oe(_e,null,_n(V(o),a=>(se(),oe("span",{class:Ye(["iconfont",a.icon]),key:a.icon,title:a.title,onClick:y0(a.click,["stop"])},null,10,ja))),128))]))}}),Oa=Je(Ca,[["__scopeId","data-v-6d8a6325"]]),Ra={style:{width:"100%",height:"100%",overflow:"auto"}},Pa=["onClick"],La={class:"music-list-down"},Ha=qe({__name:"musicListBoard",props:{show:{},showModifiers:{}},emits:ji(["update:show"],["update:show"]),setup(e,{emit:t}){const n=(l,a)=>{xe.value=a,Dt(l),r()},s=tr(e,"show"),o=t,r=()=>{o("update:show",!1)};return(l,a)=>(se(),oe("div",{class:Ye(["music-list-board",{active:s.value}])},[W("div",Ra,[(se(!0),oe(_e,null,_n(V(wt),(u,h)=>(se(),oe("div",{key:u.id,class:Ye(["music-item",{active:h===V(xe)}]),onClick:y0(c=>n(u,h),["stop"])},[W("span",null,pt(u.title),1),a[0]||(a[0]=W("span",null,"梦龙乐队",-1))],10,Pa))),128))]),W("div",La,[W("span",{class:"iconfont icon-xia",onClick:y0(r,["stop"])})])],2))}}),Wa=Je(Ha,[["__scopeId","data-v-57959d85"]]),Fa={class:"control-module"},Na={class:"controls-row"},Qa=qe({__name:"index",setup(e){const t=z(!1),n=z(null);return nt(()=>Fe.value,s=>{s!=null&&s.logo&&Ps(()=>n.value.style.background=`url(${s.logo}) no-repeat 100% / cover`)}),(s,o)=>(se(),oe("div",Fa,[W("div",{ref_key:"controlModuleRef",ref:n,class:"bg-image"},null,512),ae(xa),W("div",Na,[ae(Ba),ae(Oa,{showBorad:V(t),"onUpdate:showBorad":o[0]||(o[0]=r=>ne(t)?t.value=r:null)},null,8,["showBorad"]),ae(Ma)]),ae(Wa,{show:V(t),"onUpdate:show":o[1]||(o[1]=r=>ne(t)?t.value=r:null)},null,8,["show"])]))}}),Ua=Je(Qa,[["__scopeId","data-v-d8ea7668"]]);var r0=function(e,t){return e<t?-1:e>t?1:0},us=function(e){return e.reduce(function(t,n){return t+n},0)},Va=function(){function e(n){this.colors=n}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(n){return n},e}(),za=function(){function e(r,l,a){return(r<<10)+(l<<5)+a}function t(r){var l=[],a=!1;function u(){l.sort(r),a=!0}return{push:function(h){l.push(h),a=!1},peek:function(h){return a||u(),h===void 0&&(h=l.length-1),l[h]},pop:function(){return a||u(),l.pop()},size:function(){return l.length},map:function(h){return l.map(h)},debug:function(){return a||u(),l}}}function n(r,l,a,u,h,c,g){var p=this;p.r1=r,p.r2=l,p.g1=a,p.g2=u,p.b1=h,p.b2=c,p.histo=g}function s(){this.vboxes=new t(function(r,l){return r0(r.vbox.count()*r.vbox.volume(),l.vbox.count()*l.vbox.volume())})}function o(r,l){if(l.count()){var a=l.r2-l.r1+1,u=l.g2-l.g1+1,h=Math.max.apply(null,[a,u,l.b2-l.b1+1]);if(l.count()==1)return[l.copy()];var c,g,p,y,S=0,M=[],K=[];if(h==a)for(c=l.r1;c<=l.r2;c++){for(y=0,g=l.g1;g<=l.g2;g++)for(p=l.b1;p<=l.b2;p++)y+=r[e(c,g,p)]||0;M[c]=S+=y}else if(h==u)for(c=l.g1;c<=l.g2;c++){for(y=0,g=l.r1;g<=l.r2;g++)for(p=l.b1;p<=l.b2;p++)y+=r[e(g,c,p)]||0;M[c]=S+=y}else for(c=l.b1;c<=l.b2;c++){for(y=0,g=l.r1;g<=l.r2;g++)for(p=l.g1;p<=l.g2;p++)y+=r[e(g,p,c)]||0;M[c]=S+=y}return M.forEach(function(R,C){K[C]=S-R}),function(R){var C,P,E,L,J,$=R+"1",ee=R+"2",ce=0;for(c=l[$];c<=l[ee];c++)if(M[c]>S/2){for(E=l.copy(),L=l.copy(),J=(C=c-l[$])<=(P=l[ee]-c)?Math.min(l[ee]-1,~~(c+P/2)):Math.max(l[$],~~(c-1-C/2));!M[J];)J++;for(ce=K[J];!ce&&M[J-1];)ce=K[--J];return E[ee]=J,L[$]=E[ee]+1,[E,L]}}(h==a?"r":h==u?"g":"b")}}return n.prototype={volume:function(r){var l=this;return l._volume&&!r||(l._volume=(l.r2-l.r1+1)*(l.g2-l.g1+1)*(l.b2-l.b1+1)),l._volume},count:function(r){var l=this,a=l.histo;if(!l._count_set||r){var u,h,c,g=0;for(u=l.r1;u<=l.r2;u++)for(h=l.g1;h<=l.g2;h++)for(c=l.b1;c<=l.b2;c++)g+=a[e(u,h,c)]||0;l._count=g,l._count_set=!0}return l._count},copy:function(){var r=this;return new n(r.r1,r.r2,r.g1,r.g2,r.b1,r.b2,r.histo)},avg:function(r){var l=this,a=l.histo;if(!l._avg||r){var u,h,c,g,p=0,y=0,S=0,M=0;if(l.r1===l.r2&&l.g1===l.g2&&l.b1===l.b2)l._avg=[l.r1<<3,l.g1<<3,l.b1<<3];else{for(h=l.r1;h<=l.r2;h++)for(c=l.g1;c<=l.g2;c++)for(g=l.b1;g<=l.b2;g++)p+=u=a[e(h,c,g)]||0,y+=u*(h+.5)*8,S+=u*(c+.5)*8,M+=u*(g+.5)*8;l._avg=p?[~~(y/p),~~(S/p),~~(M/p)]:[~~(8*(l.r1+l.r2+1)/2),~~(8*(l.g1+l.g2+1)/2),~~(8*(l.b1+l.b2+1)/2)]}}return l._avg},contains:function(r){var l=this,a=r[0]>>3;return gval=r[1]>>3,bval=r[2]>>3,a>=l.r1&&a<=l.r2&&gval>=l.g1&&gval<=l.g2&&bval>=l.b1&&bval<=l.b2}},s.prototype={push:function(r){this.vboxes.push({vbox:r,color:r.avg()})},palette:function(){return this.vboxes.map(function(r){return r.color})},size:function(){return this.vboxes.size()},map:function(r){for(var l=this.vboxes,a=0;a<l.size();a++)if(l.peek(a).vbox.contains(r))return l.peek(a).color;return this.nearest(r)},nearest:function(r){for(var l,a,u,h=this.vboxes,c=0;c<h.size();c++)((a=Math.sqrt(Math.pow(r[0]-h.peek(c).color[0],2)+Math.pow(r[1]-h.peek(c).color[1],2)+Math.pow(r[2]-h.peek(c).color[2],2)))<l||l===void 0)&&(l=a,u=h.peek(c).color);return u},forcebw:function(){var r=this.vboxes;r.sort(function(h,c){return r0(us(h.color),us(c.color))});var l=r[0].color;l[0]<5&&l[1]<5&&l[2]<5&&(r[0].color=[0,0,0]);var a=r.length-1,u=r[a].color;u[0]>251&&u[1]>251&&u[2]>251&&(r[a].color=[255,255,255])}},{quantize:function(r,l){if(!Number.isInteger(l)||l<1||l>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!r.length||l<2||l>256||!r.length||l<2||l>256)return!1;for(var a=[],u=new Set,h=0;h<r.length;h++){var c=r[h],g=c.join(",");u.has(g)||(u.add(g),a.push(c))}if(a.length<=l)return new Va(a);var p=function(C){var P,E=new Array(32768);return C.forEach(function(L){P=e(L[0]>>3,L[1]>>3,L[2]>>3),E[P]=(E[P]||0)+1}),E}(r);p.forEach(function(){});var y=function(C,P){var E,L,J,$=1e6,ee=0,ce=1e6,Se=0,Qe=1e6,Xe=0;return C.forEach(function(Ze){(E=Ze[0]>>3)<$?$=E:E>ee&&(ee=E),(L=Ze[1]>>3)<ce?ce=L:L>Se&&(Se=L),(J=Ze[2]>>3)<Qe?Qe=J:J>Xe&&(Xe=J)}),new n($,ee,ce,Se,Qe,Xe,P)}(r,p),S=new t(function(C,P){return r0(C.count(),P.count())});function M(C,P){for(var E,L=C.size(),J=0;J<1e3;){if(L>=P||J++>1e3)return;if((E=C.pop()).count()){var $=o(p,E),ee=$[0],ce=$[1];if(!ee)return;C.push(ee),ce&&(C.push(ce),L++)}else C.push(E),J++}}S.push(y),M(S,.75*l);for(var K=new t(function(C,P){return r0(C.count()*C.volume(),P.count()*P.volume())});S.size();)K.push(S.pop());M(K,l);for(var R=new s;K.size();)R.push(K.pop());return R}}}().quantize,Ao=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};Ao.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var It=function(){};It.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},It.prototype.getPalette=function(e,t,n){var s=function(a){var u=a.colorCount,h=a.quality;if(u!==void 0&&Number.isInteger(u)){if(u===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");u=Math.max(u,2),u=Math.min(u,20)}else u=10;return(h===void 0||!Number.isInteger(h)||h<1)&&(h=10),{colorCount:u,quality:h}}({colorCount:t,quality:n}),o=new Ao(e),r=function(a,u,h){for(var c,g,p,y,S,M=a,K=[],R=0;R<u;R+=h)g=M[0+(c=4*R)],p=M[c+1],y=M[c+2],((S=M[c+3])===void 0||S>=125)&&(g>250&&p>250&&y>250||K.push([g,p,y]));return K}(o.getImageData().data,o.width*o.height,s.quality),l=za(r,s.colorCount);return l?l.palette():null},It.prototype.getColorFromUrl=function(e,t,n){var s=this,o=document.createElement("img");o.addEventListener("load",function(){var r=s.getPalette(o,5,n);t(r[0],e)}),o.src=e},It.prototype.getImageData=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){if(this.status==200){var s=new Uint8Array(this.response);i=s.length;for(var o=new Array(i),r=0;r<s.length;r++)o[r]=String.fromCharCode(s[r]);var l=o.join(""),a=window.btoa(l);t("data:image/png;base64,"+a)}},n.send()},It.prototype.getColorAsync=function(e,t,n){var s=this;this.getImageData(e,function(o){var r=document.createElement("img");r.addEventListener("load",function(){var l=s.getPalette(r,5,n);t(l[0],this)}),r.src=o})};const Ka={class:"music-logo"},Ya=["src"],qa=qe({__name:"Music",setup(e){const t=new It,n=z("transparent"),s=async()=>{var c;if((c=Fe.value)!=null&&c.logo)try{const g=new Image;g.crossOrigin="Anonymous",g.src=Fe.value.logo,await new Promise((y,S)=>{g.onload=y,g.onerror=S});const p=await t.getColor(g,5);n.value=`rgba(${p[0]}, ${p[1]}, ${p[2]}, .7)`}catch(g){console.error("获取背景色失败:",g),n.value="transparent"}};wn(()=>{go()});const o=st(()=>Lt.value.find(c=>c.time>=Te.value)),r=z(),l=z();let a=0,u=z(rn.value<768?40*on.value:40),h=0;return nt(()=>Lt.value,()=>{a=r.value.clientHeight,h=(Lt.value.length-1)*u.value-a+u.value/2,s()}),nt(()=>rn.value,c=>{u.value=c<768?40*on.value:40}),nt(()=>Te.value,()=>{let g=Lt.value.findIndex(p=>p.time>=Te.value)*u.value+u.value/2-a/2;g<0&&(g=0),g>h&&(g=h),l.value.style.transform=`translateY(-${g}px)`}),(c,g)=>{var p;return se(),oe("div",{class:"music",style:yt({"--bg":V(n)})},[W("div",Ka,[W("img",{src:((p=V(Fe))==null?void 0:p.logo)||V(wo),alt:"音乐logo"},null,8,Ya)]),W("div",{class:"music-lrc",ref_key:"musicLrc",ref:r},[W("ul",{class:"music-lrc-content",ref_key:"musicLrcContent",ref:l},[(se(!0),oe(_e,null,_n(V(Lt),y=>{var S;return se(),oe("li",{class:Ye({active:(y==null?void 0:y.time)===((S=V(o))==null?void 0:S.time)}),style:yt({height:`${V(u)}px`})},pt(y==null?void 0:y.text),7)}),256))],512)],512)],4)}}}),Ga=Je(qa,[["__scopeId","data-v-1b7c73c7"]]),Ja={class:"container"},Xa=qe({__name:"App",setup(e){return wn(()=>{ha(),window.addEventListener("resize",as)}),An(()=>{mo(),window.removeEventListener("resize",as)}),(t,n)=>(se(),oe("div",Ja,[ae(Ga),ae(Ua)]))}}),Za=Je(Xa,[["__scopeId","data-v-6e5bab47"]]);window._iconfont_svg_string_4902328='<svg><symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024"><path d="M955.73333333 474.45333333c-20.48 0-34.13333333 13.65333333-34.13333333 34.13333334v92.16c0 116.05333333-92.16 211.62666667-211.62666667 211.62666666H180.90666667l44.37333333-40.96c6.82666667-6.82666667 13.65333333-17.06666667 13.65333333-27.30666666 0-20.48-17.06666667-37.54666667-37.54666666-37.54666667-10.24 0-23.89333333 3.41333333-30.72 10.24l-116.05333334 105.81333333c-17.06666667 13.65333333-13.65333333 37.54666667 0 51.2l116.05333334 102.4c6.82666667 6.82666667 20.48 13.65333333 30.72 13.65333334 20.48 0 37.54666667-13.65333333 40.96-34.13333334 0-13.65333333-6.82666667-23.89333333-17.06666667-30.72l-51.2-47.78666666h532.48c157.01333333 0 283.30666667-126.29333333 283.30666667-276.48v-92.16c0-20.48-13.65333333-34.13333333-34.13333334-34.13333334zM68.26666667 559.78666667c20.48 0 34.13333333-13.65333333 34.13333333-34.13333334v-95.57333333c0-119.46666667 95.57333333-215.04 211.62666667-218.45333333h529.06666666l-44.37333333 40.96c-6.82666667 6.82666667-13.65333333 17.06666667-13.65333333 27.30666666 0 20.48 17.06666667 37.54666667 37.54666666 37.54666667 10.24 0 23.89333333-3.41333333 30.72-10.24l112.64-105.81333333c17.06666667-13.65333333 13.65333333-37.54666667 0-51.2l-116.05333333-102.4c-6.82666667-6.82666667-20.48-13.65333333-30.72-13.65333334-20.48 0-37.54666667 13.65333333-40.96 34.13333334 0 13.65333333 6.82666667 23.89333333 17.06666667 30.72l51.2 47.78666666H317.44C160.42666667 146.77333333 34.13333333 273.06666667 34.13333333 433.49333333v92.16c0 20.48 13.65333333 34.13333333 34.13333334 34.13333334z"  ></path><path d="M546.13333333 682.66666667V341.33333333h-51.2L409.6 402.77333333l17.06666667 44.37333334 64.85333333-44.37333334V682.66666667z"  ></path></symbol><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M325.456471 862.280661"  ></path><path d="M882.057788 862.280661"  ></path><path d="M236.028491 877.160382"  ></path><path d="M960.132455 877.160382"  ></path><path d="M63.683483 788.736998"  ></path><path d="M958.469023 788.736998"  ></path><path d="M64.77753 858.792098"  ></path><path d="M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875z"  ></path><path d="M959.523505 858.792098"  ></path></symbol><symbol id="icon-yinliang" viewBox="0 0 1024 1024"><path d="M468.992 169.6c29.312-22.528 64.128-40.832 101.312-25.088 36.864 15.552 48.64 53.12 53.76 89.984 5.248 37.824 5.248 89.92 5.248 154.688V634.88c0 64.768 0 116.864-5.184 154.688-5.12 36.928-16.96 74.432-53.76 89.984-37.248 15.744-72.064-2.56-101.376-25.024-30.016-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.616-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.416 0-71.68-1.984-20.288-2.112-39.104-6.72-56.064-18.24-32.192-22.016-44.544-54.208-49.28-83.84C52.864 570.24 53.248 545.92 53.568 526.464a907.84 907.84 0 0 0 0-28.928C53.184 478.08 52.864 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.128 55.936-18.176a750.72 750.72 0 0 1 71.68-2.048h1.728c32.96 0 51.84-2.688 67.392-9.152 15.488-6.4 30.72-17.728 53.76-41.216l1.984-2.048c44.8-45.76 80.896-82.56 110.912-105.6z m38.976 50.752c-25.92 19.84-58.88 53.44-106.112 101.632-25.152 25.6-47.616 44.288-75.072 55.68-27.328 11.264-56.32 13.952-91.84 13.952-30.656 0-51.2 0-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.184-22.144 40.96-2.56 16-2.24 32.512-1.92 51.136l0.128 19.2c0 6.592-0.064 12.992-0.192 19.136-0.256 18.56-0.512 35.072 1.984 51.136 3.136 19.712 9.728 32.512 22.144 40.96 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.096 1.664 66.752 1.664 35.456 0 64.512 2.688 91.84 14.016 27.456 11.328 49.92 29.952 75.072 55.616 47.232 48.192 80.192 81.728 106.112 101.696 27.008 20.736 35.136 17.856 37.44 16.832 2.624-1.088 10.56-5.44 15.296-39.808 4.544-32.896 4.608-80.512 4.608-148.672V391.936c0-68.096 0-115.712-4.608-148.608-4.736-34.368-12.672-38.784-15.36-39.872-2.24-0.96-10.368-3.84-37.376 16.896zM705.92 358.592a32 32 0 0 1 44.864 6.016c30.912 40.448 49.28 91.776 49.28 147.392s-18.368 106.88-49.28 147.392a32 32 0 1 1-50.88-38.784A178.56 178.56 0 0 0 736 512a178.56 178.56 0 0 0-36.096-108.608 32 32 0 0 1 6.016-44.8zM876.928 277.056a32 32 0 0 0-47.168 43.2c48.448 52.992 76.928 119.68 76.928 191.744s-28.48 138.752-76.928 191.68a32 32 0 0 0 47.168 43.264c58.24-63.616 93.76-145.408 93.76-234.944 0-89.6-35.52-171.328-93.76-234.944z"  ></path></symbol><symbol id="icon-jingyin" viewBox="0 0 1024 1024"><path d="M62.72 62.72a32 32 0 0 1 45.248 0l252.032 252.032c1.472 1.216 2.816 2.56 4.096 4.096l597.184 597.184a32 32 0 1 1-45.248 45.248l-286.72-286.72c-0.192 46.592-1.088 85.184-5.184 114.944-5.12 36.928-16.96 74.432-53.76 89.984-37.184 15.744-72.064-2.56-101.376-25.024-29.952-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.552-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.352 0-71.68-1.984-20.288-2.112-39.04-6.72-56-18.24-32.256-22.016-44.608-54.208-49.28-83.84C52.8 570.24 53.248 545.984 53.568 526.464a908.032 908.032 0 0 0 0-28.928C53.248 478.08 52.8 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.064 56-18.176 19.328-2.048 43.136-2.048 71.68-2.048h1.664c6.208 0 11.84 0.128 17.152 0.192 11.136 0.192 20.544 0.32 30.016-0.448L62.72 107.968a32 32 0 0 1 0-45.248z m230.528 327.872a369.088 369.088 0 0 1-45.824 1.216l-12.48-0.192c-30.592 0-51.136 0.064-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.248-22.08 40.96-2.56 16-2.304 32.512-2.048 51.136a1252.864 1252.864 0 0 1 0 38.336c-0.256 18.56-0.512 35.072 2.048 51.2 3.072 19.648 9.664 32.448 22.08 40.896 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.16 1.664 66.752 1.664 35.52 0 64.576 2.752 91.904 14.016 27.392 11.328 49.92 30.016 75.008 55.68 47.232 48.128 80.192 81.728 106.112 101.632 27.008 20.736 35.136 17.856 37.44 16.896 2.624-1.152 10.56-5.504 15.36-39.872 4.48-32.896 4.608-80.512 4.608-148.672V610.56L334.464 379.776a136.128 136.128 0 0 1-41.216 10.816zM449.28 278.4c30.72-30.592 53.632-52.288 72.064-65.088a66.56 66.56 0 0 1 19.328-10.112c3.2-0.896 4.288-0.384 4.672-0.256 2.688 1.152 10.624 5.568 15.36 40 4.544 32.96 4.608 80.704 4.608 148.992v13.44a32 32 0 1 0 64 0V389.12c0-64.896 0-117.12-5.184-155.008-5.12-36.928-16.96-74.56-53.76-90.112-31.808-13.504-62.144 0.512-85.376 16.64-24.064 16.576-51.008 42.624-80.896 72.32a32 32 0 0 0 45.12 45.44zM705.024 401.92a32 32 0 0 1 45.056 4.48c31.104 37.888 49.92 84.992 49.92 136.32 0 22.4-3.584 44.032-10.24 64.512a32 32 0 0 1-60.864-19.84c4.608-14.208 7.104-29.184 7.104-44.672 0-35.2-12.8-68.224-35.392-95.744a32 32 0 0 1 4.48-45.056zM875.776 318.528a32 32 0 0 0-44.864 45.632c48.192 47.36 75.776 106.304 75.776 169.216 0 52.288-19.072 101.76-53.12 144.128a32 32 0 0 0 49.92 40.064c42.112-52.48 67.2-115.712 67.2-184.192 0-82.624-36.416-157.312-94.912-214.848z"  ></path></symbol><symbol id="icon-suijibofang" viewBox="0 0 1024 1024"><path d="M786.84698283 313.42482205c-52.18952533 0-182.34024846 129.53597497-277.37816064 221.35344696C365.37915961 674.00117817 229.27190357 809.28411307 120.33696541 809.28411307l-67.00634454 0c-27.38421987 0-49.58616235-22.21707833-49.58616234-49.58616235s22.20194247-49.58616235 49.58616234-49.58616235l67.00634454 0c68.84010894 0 208.21670571-138.44632462 320.20791864-246.65241372 136.30169315-131.69108423 254.01425123-249.2068773 346.30326272-249.2068773l63.95356274 0-67.85860836-65.79547818c-19.38085547-19.33428395-19.41112718-48.81306965-0.06520035-68.18461128 19.34476174-19.37736249 50.74114219-19.41578411 70.12316274-0.07451534l152.69846016 152.31889977c9.32134571 9.29805995 14.55718059 21.88874752 14.55718059 35.04760946 0 13.15769799-5.23583488 25.71927779-14.55718059 35.01733774L852.99989959 454.79934862c-9.67762034 9.65549853-22.35330105 14.24747861-35.02898062 14.24747861-12.70478734 0-25.41073977-5.32082802-35.09418098-15.01824227-19.34592683-19.37154162-19.31449117-51.69237219 0.06520036-71.02665501l67.85860835-69.5771079L786.84698283 313.42482205zM852.99989959 568.50323911c-19.38201941-19.3412699-50.77839986-19.31099819-70.12316274 0.0663643-19.34592683 19.37037653-19.31449117 52.6307931 0.06520036 71.96507705l67.85860836 69.57594397-63.95356274 0c-40.72471211 0-108.76029383-60.24179029-176.21489209-123.3046676-19.99793152-18.69974301-51.38383303-18.593792-70.08124815 1.39598962-18.71022194 19.98861767-17.66235591 52.78564466 2.3367407 71.47956566 102.76650325 96.09509205 172.08513763 149.60027079 243.95939954 149.60027079l63.95356274 0-67.85860836 65.79198521c-19.38085547 19.33428395-19.41112718 49.76197063-0.06520036 69.13351111 9.68460629 9.69741312 22.38939363 14.07399822 35.09418098 14.07399822 12.67568071 0 25.35136029-5.06701255 35.02898062-14.72251107L1005.69835975 791.10946702c9.32134571-9.29922503 14.55718059-21.97723363 14.55718059-35.13609557 0-13.15769799-5.23583488-25.80776391-14.55718059-35.10698894L852.99989959 568.50323911zM53.32945693 313.42482205l67.00634453 0c52.2605477 0 130.16352995 66.50919026 192.18785621 122.81449926 9.502976 8.62044046 21.42768583 13.8131968 33.32794596 13.8131968 13.48602994 0 26.93480221-4.99948317 36.71720846-15.76688412 18.41216171-20.26106197 16.90672811-53.27464903-3.36597675-71.67866084-96.99276345-88.04282709-178.13248569-148.35331072-258.86703388-148.35331072l-67.00634453 0c-27.38421987 0-49.58616235 22.21707833-49.58616235 49.58616235S25.94640213 313.42482205 53.32945693 313.42482205z"  ></path></symbol><symbol id="icon-shunxubofang" viewBox="0 0 1280 1024"><path d="M1121.80831062 243.68144937A373.40506031 373.40506031 0 0 1 1231.88943875 509.4737225c0 34.21394156-4.59385594 68.15362312-13.71300187 100.79056875a42.40746 42.40746 0 0 1-81.66093094-22.62645469 291.88125938 291.88125938 0 0 0 10.62757687-78.16411406c0-160.510695-130.61634937-291.12704437-291.12704437-291.12704531H461.52723687v75.07868906c0 24.13488469-16.79842781 33.45972656-37.26508406 20.77519969L243.52477906 202.23389938c-20.46665625-12.68452781-20.67235125-33.76826906-0.41139-46.86418594L424.70782531 38.08925844c20.22667875-13.06163531 36.81941156-4.04533594 36.81941156 20.05526625v75.42151406h394.48880157c100.37917875 0 194.79320156 39.11634 265.79227218 110.11541063z m-70.00487812 573.06637782c20.50093875 12.68452781 20.70663375 33.76826906 0.4456725 46.82990344l-181.59443625 117.280455c-20.22667875 13.09591781-36.81941156 4.07961844-36.81941156-20.02098375V885.38140531H407.875115c-100.37917875 0-194.79320156-39.0820575-265.79227219-110.11541062A373.43934281 373.43934281 0 0 1 32.00171469 509.4737225c0-72.61034906 20.74091625-143.09518219 59.99438625-203.84378344a42.3731775 42.3731775 0 1 1 71.20476562 46.04140594 290.03000438 290.03000438 0 0 0-46.41851343 157.8023775c0 160.5449775 130.58206688 291.12704437 291.09276187 291.12704437H833.86953969v-75.07868906c0-24.10060219 16.76414531-33.45972656 37.23080156-20.74091625l180.73737375 111.96666563z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M349.5936 338.5344a30.3104 30.3104 0 0 1 17.6128 5.9392l200.0896 143.36a30.72 30.72 0 0 1 0 49.9712l-200.0896 143.36a30.3104 30.3104 0 0 1-17.6128 5.9392A30.72 30.72 0 0 1 318.6688 655.36V368.64a30.72 30.72 0 0 1 30.9248-30.9248m0-51.2a81.92 81.92 0 0 0-81.92 81.92V655.36a81.92 81.92 0 0 0 81.92 81.92 81.92 81.92 0 0 0 47.3088-15.36l200.0896-143.36a81.92 81.92 0 0 0 0-133.5296l-200.0896-143.36a81.92 81.92 0 0 0-47.3088-14.9504zM715.5712 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 0 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M674.4064 338.5344A30.72 30.72 0 0 1 705.3312 368.64v286.72a30.72 30.72 0 0 1-30.9248 30.9248 30.3104 30.3104 0 0 1-17.6128-5.9392l-200.0896-143.36a30.72 30.72 0 0 1 0-49.9712l200.0896-143.36a30.3104 30.3104 0 0 1 17.6128-5.9392m0-51.2a81.92 81.92 0 0 0-47.3088 15.36l-200.0896 143.36a81.92 81.92 0 0 0 0 133.5296l200.0896 143.36a81.92 81.92 0 0 0 47.3088 15.36 81.92 81.92 0 0 0 81.92-81.92V368.64a81.92 81.92 0 0 0-81.92-81.92zM308.4288 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 1 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-play_list" viewBox="0 0 1024 1024"><path d="M42.666667 490.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h896a21.333333 21.333333 0 0 1 0 42.666667H64a21.333333 21.333333 0 0 1-21.333333-21.333333z m490.666666 362.666666H64a21.333333 21.333333 0 0 0 0 42.666667h469.333333a21.333333 21.333333 0 0 0 0-42.666667zM64 128h896a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m916.42 612.493333c-6.666667-22.053333-16.44-40.773333-29.04-55.626666a107.46 107.46 0 0 0-20.493333-18.78c-8.813333-8.806667-16.526667-20.666667-22.36-34.42-9.033333-21.333333-11.813333-42.666667-12.553334-56.78a21.333333 21.333333 0 0 0-42.666666 1.113333v251.56c-18.333333-10.946667-40.666667-16.893333-64-16.893333-27.38 0-53.333333 8.173333-73.14 23.013333-21.333333 16-33.526667 38.666667-33.526667 62.32s12.22 46.34 33.526667 62.32C736 973.16 761.953333 981.333333 789.333333 981.333333s53.333333-8.173333 73.14-23.013333c21.333333-16 33.526667-38.666667 33.526667-62.32v-204.733333q3.213333 3.58 6.586667 6.813333a21.473333 21.473333 0 0 0 2.953333 2.366667 64.24 64.24 0 0 1 13.333333 12c8.666667 10.22 15.84 24.18 20.733334 40.373333a21.333333 21.333333 0 0 0 40.84-12.346667z"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path><path d="M415.8 679.9c5.9 0 11.5-1.6 16.2-4.5l231.1-134.6c10.9-5.2 18.5-16.3 18.5-29.2 0-11.9-6.4-22.3-16-27.8L439.7 352.2c-5.8-6.7-14.4-10.9-23.9-10.9-17.6 0-31.8 14.4-31.8 32.1 0 0.6 0 1.2 0.1 1.8l-0.4 0.2 0.5 269c-0.1 1.1-0.2 2.2-0.2 3.4 0 17.7 14.3 32.1 31.8 32.1z"  ></path><path d="M909.8 306.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S128.8 723.8 128.8 512.2 300.4 129.1 512 129.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.6 81.9 584.9 64.5 512 64.5 264.7 64.5 64.3 265 64.3 512.2S264.7 959.9 512 959.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M910.8 303.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S129.8 720.8 129.8 509.2 301.4 126.1 513 126.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C654.6 78.9 585.9 61.5 513 61.5 265.7 61.5 65.3 262 65.3 509.2S265.7 956.9 513 956.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path><path d="M385.4 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.6 0 32-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9zM578.9 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.5 0 31.9-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9z"  ></path><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path></symbol><symbol id="icon-tingzhi" viewBox="0 0 1024 1024"><path d="M772.9 217.3c0 11.5 6.1 22.1 16.1 27.8 10 5.7 22.3 5.7 32.2 0 10-5.7 16.1-16.3 16.1-27.8s-6.1-22.1-16.1-27.8c-10-5.7-22.3-5.7-32.2 0-10 5.7-16.1 16.3-16.1 27.8z"  ></path><path d="M910.1 306.3c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.9 42.1 174.8 0 211.7-171.7 383.5-383.5 383.5-211.7 0-383.6-171.7-383.6-383.5S300.3 128.6 512 128.6c62.5 0 121.6 15 173.7 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.7 81.4 584.9 64 512 64 264.5 64 64 264.6 64 512s200.5 448 448 448 448-200.5 448-448c0-74.2-18-144.1-49.9-205.7z"  ></path><path d="M417.9 354.5h188.2c34.6 0 62.7 28.2 62.7 63v189c0 34.8-28.1 63-62.7 63H417.9c-34.6 0-62.7-28.2-62.7-63v-189c0-34.8 28.1-63 62.7-63z"  ></path></symbol></svg>',(e=>{var t=(n=(n=document.getElementsByTagName("script"))[n.length-1]).getAttribute("data-injectcss"),n=n.getAttribute("data-disable-injectsvg");if(!n){var s,o,r,l,a,u=function(g,p){p.parentNode.insertBefore(g,p)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(g){console&&console.log(g)}}s=function(){var g,p=document.createElement("div");p.innerHTML=e._iconfont_svg_string_4902328,(p=p.getElementsByTagName("svg")[0])&&(p.setAttribute("aria-hidden","true"),p.style.position="absolute",p.style.width=0,p.style.height=0,p.style.overflow="hidden",p=p,(g=document.body).firstChild?u(p,g.firstChild):g.appendChild(p))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(s,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),s()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(r=s,l=e.document,a=!1,c(),l.onreadystatechange=function(){l.readyState=="complete"&&(l.onreadystatechange=null,h())})}function h(){a||(a=!0,r())}function c(){try{l.documentElement.doScroll("left")}catch{return void setTimeout(c,50)}h()}})(window);Yr(Za).mount("#app");

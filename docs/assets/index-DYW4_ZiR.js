(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function To(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}const U={},D0=[],Ge=()=>{},Zs=()=>!1,Wt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),So=e=>e.startsWith("onUpdate:"),le=Object.assign,xo=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},$s=Object.prototype.hasOwnProperty,Y=(e,t)=>$s.call(e,t),P=Array.isArray,W0=e=>Rt(e)==="[object Map]",Bn=e=>Rt(e)==="[object Set]",R=e=>typeof e=="function",se=e=>typeof e=="string",m0=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Cn=e=>(ee(e)||R(e))&&R(e.then)&&R(e.catch),Pn=Object.prototype.toString,Rt=e=>Pn.call(e),Xs=e=>Rt(e).slice(8,-1),En=e=>Rt(e)==="[object Object]",Mo=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$0=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lt=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},ei=/-(\w)/g,We=Lt(e=>e.replace(ei,(t,o)=>o?o.toUpperCase():"")),ti=/\B([A-Z])/g,p0=Lt(e=>e.replace(ti,"-$1").toLowerCase()),Oo=Lt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zt=Lt(e=>e?`on${Oo(e)}`:""),pe=(e,t)=>!Object.is(e,t),wt=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},Dn=(e,t,o,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:o})},lo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zo;const Ft=()=>Zo||(Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function n0(e){if(P(e)){const t={};for(let o=0;o<e.length;o++){const n=e[o],s=se(n)?ii(n):n0(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(se(e)||ee(e))return e}const oi=/;(?![^(]*\))/g,ni=/:([^]+)/,si=/\/\*[^]*?\*\//g;function ii(e){const t={};return e.replace(si,"").split(oi).forEach(o=>{if(o){const n=o.split(ni);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ve(e){let t="";if(se(e))t=e;else if(P(e))for(let o=0;o<e.length;o++){const n=ve(e[o]);n&&(t+=n+" ")}else if(ee(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const ri="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ai=To(ri);function Wn(e){return!!e||e===""}const Rn=e=>!!(e&&e.__v_isRef===!0),Ke=e=>se(e)?e:e==null?"":P(e)||ee(e)&&(e.toString===Pn||!R(e.toString))?Rn(e)?Ke(e.value):JSON.stringify(e,Ln,2):String(e),Ln=(e,t)=>Rn(t)?Ln(e,t.value):W0(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[n,s],r)=>(o[$t(n,r)+" =>"]=s,o),{})}:Bn(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>$t(o))}:m0(t)?$t(t):ee(t)&&!P(t)&&!En(t)?String(t):t,$t=(e,t="")=>{var o;return m0(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class li{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].pause();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].resume();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].resume()}}run(t){if(this._active){const o=ke;try{return ke=this,t()}finally{ke=o}}}on(){ke=this}off(){ke=this.parent}stop(t){if(this._active){this._active=!1;let o,n;for(o=0,n=this.effects.length;o<n;o++)this.effects[o].stop();for(this.effects.length=0,o=0,n=this.cleanups.length;o<n;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){for(o=0,n=this.scopes.length;o<n;o++)this.scopes[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ui(){return ke}let K;const Xt=new WeakSet;class Fn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xt.has(this)&&(Xt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$o(this),Nn(this);const t=K,o=De;K=this,De=!0;try{return this.fn()}finally{Un(this),K=t,De=o,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Co(t);this.deps=this.depsTail=void 0,$o(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uo(this)&&this.run()}get dirty(){return uo(this)}}let zn=0,X0,et;function Hn(e,t=!1){if(e.flags|=8,t){e.next=et,et=e;return}e.next=X0,X0=e}function jo(){zn++}function Bo(){if(--zn>0)return;if(et){let t=et;for(et=void 0;t;){const o=t.next;t.next=void 0,t.flags&=-9,t=o}}let e;for(;X0;){let t=X0;for(X0=void 0;t;){const o=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=o}}if(e)throw e}function Nn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Un(e){let t,o=e.depsTail,n=o;for(;n;){const s=n.prevDep;n.version===-1?(n===o&&(o=s),Co(n),ci(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=o}function uo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===st))return;e.globalVersion=st;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!uo(e)){e.flags&=-3;return}const o=K,n=De;K=e,De=!0;try{Nn(e);const s=e.fn(e._value);(t.version===0||pe(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{K=o,De=n,Un(e),e.flags&=-3}}function Co(e,t=!1){const{dep:o,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),o.subs===e&&(o.subs=n,!n&&o.computed)){o.computed.flags&=-5;for(let r=o.computed.deps;r;r=r.nextDep)Co(r,!0)}!t&&!--o.sc&&o.map&&o.map.delete(o.key)}function ci(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}let De=!0;const Yn=[];function y0(){Yn.push(De),De=!1}function v0(){const e=Yn.pop();De=e===void 0?!0:e}function $o(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=K;K=void 0;try{t()}finally{K=o}}}let st=0;class hi{constructor(t,o){this.sub=t,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zt{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!K||!De||K===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==K)o=this.activeLink=new hi(K,this),K.deps?(o.prevDep=K.depsTail,K.depsTail.nextDep=o,K.depsTail=o):K.deps=K.depsTail=o,Qn(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const n=o.nextDep;n.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=n),o.prevDep=K.depsTail,o.nextDep=void 0,K.depsTail.nextDep=o,K.depsTail=o,K.deps===o&&(K.deps=n)}return o}trigger(t){this.version++,st++,this.notify(t)}notify(t){jo();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Bo()}}}function Qn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Qn(n)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const co=new WeakMap,S0=Symbol(""),ho=Symbol(""),it=Symbol("");function ue(e,t,o){if(De&&K){let n=co.get(e);n||co.set(e,n=new Map);let s=n.get(o);s||(n.set(o,s=new zt),s.map=n,s.key=o),s.track()}}function t0(e,t,o,n,s,r){const a=co.get(e);if(!a){st++;return}const l=u=>{u&&u.trigger()};if(jo(),t==="clear")a.forEach(l);else{const u=P(e),d=u&&Mo(o);if(u&&o==="length"){const c=Number(n);a.forEach((g,m)=>{(m==="length"||m===it||!m0(m)&&m>=c)&&l(g)})}else switch((o!==void 0||a.has(void 0))&&l(a.get(o)),d&&l(a.get(it)),t){case"add":u?d&&l(a.get("length")):(l(a.get(S0)),W0(e)&&l(a.get(ho)));break;case"delete":u||(l(a.get(S0)),W0(e)&&l(a.get(ho)));break;case"set":W0(e)&&l(a.get(S0));break}}Bo()}function j0(e){const t=V(e);return t===e?t:(ue(t,"iterate",it),Oe(e)?t:t.map(ce))}function Ht(e){return ue(e=V(e),"iterate",it),e}const di={__proto__:null,[Symbol.iterator](){return eo(this,Symbol.iterator,ce)},concat(...e){return j0(this).concat(...e.map(t=>P(t)?j0(t):t))},entries(){return eo(this,"entries",e=>(e[1]=ce(e[1]),e))},every(e,t){return Xe(this,"every",e,t,void 0,arguments)},filter(e,t){return Xe(this,"filter",e,t,o=>o.map(ce),arguments)},find(e,t){return Xe(this,"find",e,t,ce,arguments)},findIndex(e,t){return Xe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xe(this,"findLast",e,t,ce,arguments)},findLastIndex(e,t){return Xe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xe(this,"forEach",e,t,void 0,arguments)},includes(...e){return to(this,"includes",e)},indexOf(...e){return to(this,"indexOf",e)},join(e){return j0(this).join(e)},lastIndexOf(...e){return to(this,"lastIndexOf",e)},map(e,t){return Xe(this,"map",e,t,void 0,arguments)},pop(){return q0(this,"pop")},push(...e){return q0(this,"push",e)},reduce(e,...t){return Xo(this,"reduce",e,t)},reduceRight(e,...t){return Xo(this,"reduceRight",e,t)},shift(){return q0(this,"shift")},some(e,t){return Xe(this,"some",e,t,void 0,arguments)},splice(...e){return q0(this,"splice",e)},toReversed(){return j0(this).toReversed()},toSorted(e){return j0(this).toSorted(e)},toSpliced(...e){return j0(this).toSpliced(...e)},unshift(...e){return q0(this,"unshift",e)},values(){return eo(this,"values",ce)}};function eo(e,t,o){const n=Ht(e),s=n[t]();return n!==e&&!Oe(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=o(r.value)),r}),s}const fi=Array.prototype;function Xe(e,t,o,n,s,r){const a=Ht(e),l=a!==e&&!Oe(e),u=a[t];if(u!==fi[t]){const g=u.apply(e,r);return l?ce(g):g}let d=o;a!==e&&(l?d=function(g,m){return o.call(this,ce(g),m,e)}:o.length>2&&(d=function(g,m){return o.call(this,g,m,e)}));const c=u.call(a,d,n);return l&&s?s(c):c}function Xo(e,t,o,n){const s=Ht(e);let r=o;return s!==e&&(Oe(e)?o.length>3&&(r=function(a,l,u){return o.call(this,a,l,u,e)}):r=function(a,l,u){return o.call(this,a,ce(l),u,e)}),s[t](r,...n)}function to(e,t,o){const n=V(e);ue(n,"iterate",it);const s=n[t](...o);return(s===-1||s===!1)&&Wo(o[0])?(o[0]=V(o[0]),n[t](...o)):s}function q0(e,t,o=[]){y0(),jo();const n=V(e)[t].apply(e,o);return Bo(),v0(),n}const gi=To("__proto__,__v_isRef,__isVue"),qn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(m0));function mi(e){m0(e)||(e=String(e));const t=V(this);return ue(t,"has",e),t.hasOwnProperty(e)}class Gn{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,n){if(o==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return r;if(o==="__v_raw")return n===(s?r?Ti:$n:r?Zn:Jn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=P(t);if(!s){let u;if(a&&(u=di[o]))return u;if(o==="hasOwnProperty")return mi}const l=Reflect.get(t,o,re(t)?t:n);return(m0(o)?qn.has(o):gi(o))||(s||ue(t,"get",o),r)?l:re(l)?a&&Mo(o)?l:l.value:ee(l)?s?Xn(l):Eo(l):l}}class Kn extends Gn{constructor(t=!1){super(!1,t)}set(t,o,n,s){let r=t[o];if(!this._isShallow){const u=M0(r);if(!Oe(n)&&!M0(n)&&(r=V(r),n=V(n)),!P(t)&&re(r)&&!re(n))return u?!1:(r.value=n,!0)}const a=P(t)&&Mo(o)?Number(o)<t.length:Y(t,o),l=Reflect.set(t,o,n,re(t)?t:s);return t===V(s)&&(a?pe(n,r)&&t0(t,"set",o,n):t0(t,"add",o,n)),l}deleteProperty(t,o){const n=Y(t,o);t[o];const s=Reflect.deleteProperty(t,o);return s&&n&&t0(t,"delete",o,void 0),s}has(t,o){const n=Reflect.has(t,o);return(!m0(o)||!qn.has(o))&&ue(t,"has",o),n}ownKeys(t){return ue(t,"iterate",P(t)?"length":S0),Reflect.ownKeys(t)}}class pi extends Gn{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const yi=new Kn,vi=new pi,bi=new Kn(!0);const fo=e=>e,pt=e=>Reflect.getPrototypeOf(e);function wi(e,t,o){return function(...n){const s=this.__v_raw,r=V(s),a=W0(r),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,d=s[e](...n),c=o?fo:t?go:ce;return!t&&ue(r,"iterate",u?ho:S0),{next(){const{value:g,done:m}=d.next();return m?{value:g,done:m}:{value:l?[c(g[0]),c(g[1])]:c(g),done:m}},[Symbol.iterator](){return this}}}}function yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function _i(e,t){const o={get(s){const r=this.__v_raw,a=V(r),l=V(s);e||(pe(s,l)&&ue(a,"get",s),ue(a,"get",l));const{has:u}=pt(a),d=t?fo:e?go:ce;if(u.call(a,s))return d(r.get(s));if(u.call(a,l))return d(r.get(l));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&ue(V(s),"iterate",S0),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,a=V(r),l=V(s);return e||(pe(s,l)&&ue(a,"has",s),ue(a,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const a=this,l=a.__v_raw,u=V(l),d=t?fo:e?go:ce;return!e&&ue(u,"iterate",S0),l.forEach((c,g)=>s.call(r,d(c),d(g),a))}};return le(o,e?{add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear")}:{add(s){!t&&!Oe(s)&&!M0(s)&&(s=V(s));const r=V(this);return pt(r).has.call(r,s)||(r.add(s),t0(r,"add",s,s)),this},set(s,r){!t&&!Oe(r)&&!M0(r)&&(r=V(r));const a=V(this),{has:l,get:u}=pt(a);let d=l.call(a,s);d||(s=V(s),d=l.call(a,s));const c=u.call(a,s);return a.set(s,r),d?pe(r,c)&&t0(a,"set",s,r):t0(a,"add",s,r),this},delete(s){const r=V(this),{has:a,get:l}=pt(r);let u=a.call(r,s);u||(s=V(s),u=a.call(r,s)),l&&l.call(r,s);const d=r.delete(s);return u&&t0(r,"delete",s,void 0),d},clear(){const s=V(this),r=s.size!==0,a=s.clear();return r&&t0(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{o[s]=wi(s,e,t)}),o}function Po(e,t){const o=_i(e,t);return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(Y(o,s)&&s in n?o:n,s,r)}const Ii={get:Po(!1,!1)},Ai={get:Po(!1,!0)},ki={get:Po(!0,!1)};const Jn=new WeakMap,Zn=new WeakMap,$n=new WeakMap,Ti=new WeakMap;function Si(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xi(e){return e.__v_skip||!Object.isExtensible(e)?0:Si(Xs(e))}function Eo(e){return M0(e)?e:Do(e,!1,yi,Ii,Jn)}function Mi(e){return Do(e,!1,bi,Ai,Zn)}function Xn(e){return Do(e,!0,vi,ki,$n)}function Do(e,t,o,n,s){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const a=xi(e);if(a===0)return e;const l=new Proxy(e,a===2?n:o);return s.set(e,l),l}function R0(e){return M0(e)?R0(e.__v_raw):!!(e&&e.__v_isReactive)}function M0(e){return!!(e&&e.__v_isReadonly)}function Oe(e){return!!(e&&e.__v_isShallow)}function Wo(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Oi(e){return!Y(e,"__v_skip")&&Object.isExtensible(e)&&Dn(e,"__v_skip",!0),e}const ce=e=>ee(e)?Eo(e):e,go=e=>ee(e)?Xn(e):e;function re(e){return e?e.__v_isRef===!0:!1}function D(e){return ji(e,!1)}function ji(e,t){return re(e)?e:new Bi(e,t)}class Bi{constructor(t,o){this.dep=new zt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?t:V(t),this._value=o?t:ce(t),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(t){const o=this._rawValue,n=this.__v_isShallow||Oe(t)||M0(t);t=n?t:V(t),pe(t,o)&&(this._rawValue=t,this._value=n?t:ce(t),this.dep.trigger())}}function L(e){return re(e)?e.value:e}const Ci={get:(e,t,o)=>t==="__v_raw"?e:L(Reflect.get(e,t,o)),set:(e,t,o,n)=>{const s=e[t];return re(s)&&!re(o)?(s.value=o,!0):Reflect.set(e,t,o,n)}};function es(e){return R0(e)?e:new Proxy(e,Ci)}class Pi{constructor(t){this.__v_isRef=!0,this._value=void 0;const o=this.dep=new zt,{get:n,set:s}=t(o.track.bind(o),o.trigger.bind(o));this._get=n,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Ei(e){return new Pi(e)}class Di{constructor(t,o,n){this.fn=t,this.setter=o,this._value=void 0,this.dep=new zt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=st-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return Hn(this,!0),!0}get value(){const t=this.dep.track();return Vn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Wi(e,t,o=!1){let n,s;return R(e)?n=e:(n=e.get,s=e.set),new Di(n,s,o)}const vt={},kt=new WeakMap;let A0;function Ri(e,t=!1,o=A0){if(o){let n=kt.get(o);n||kt.set(o,n=[]),n.push(e)}}function Li(e,t,o=U){const{immediate:n,deep:s,once:r,scheduler:a,augmentJob:l,call:u}=o,d=M=>s?M:Oe(M)||s===!1||s===0?o0(M,1):o0(M);let c,g,m,v,T=!1,I=!1;if(re(e)?(g=()=>e.value,T=Oe(e)):R0(e)?(g=()=>d(e),T=!0):P(e)?(I=!0,T=e.some(M=>R0(M)||Oe(M)),g=()=>e.map(M=>{if(re(M))return M.value;if(R0(M))return d(M);if(R(M))return u?u(M,2):M()})):R(e)?t?g=u?()=>u(e,2):e:g=()=>{if(m){y0();try{m()}finally{v0()}}const M=A0;A0=c;try{return u?u(e,3,[v]):e(v)}finally{A0=M}}:g=Ge,t&&s){const M=g,H=s===!0?1/0:s;g=()=>o0(M(),H)}const z=ui(),W=()=>{c.stop(),z&&z.active&&xo(z.effects,c)};if(r&&t){const M=t;t=(...H)=>{M(...H),W()}}let C=I?new Array(e.length).fill(vt):vt;const j=M=>{if(!(!(c.flags&1)||!c.dirty&&!M))if(t){const H=c.run();if(s||T||(I?H.some((J,te)=>pe(J,C[te])):pe(H,C))){m&&m();const J=A0;A0=c;try{const te=[H,C===vt?void 0:I&&C[0]===vt?[]:C,v];u?u(t,3,te):t(...te),C=H}finally{A0=J}}}else c.run()};return l&&l(j),c=new Fn(g),c.scheduler=a?()=>a(j,!1):j,v=M=>Ri(M,!1,c),m=c.onStop=()=>{const M=kt.get(c);if(M){if(u)u(M,4);else for(const H of M)H();kt.delete(c)}},t?n?j(!0):C=c.run():a?a(j.bind(null,!0),!0):c.run(),W.pause=c.pause.bind(c),W.resume=c.resume.bind(c),W.stop=W,W}function o0(e,t=1/0,o){if(t<=0||!ee(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,re(e))o0(e.value,t,o);else if(P(e))for(let n=0;n<e.length;n++)o0(e[n],t,o);else if(Bn(e)||W0(e))e.forEach(n=>{o0(n,t,o)});else if(En(e)){for(const n in e)o0(e[n],t,o);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&o0(e[n],t,o)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ct(e,t,o,n){try{return n?e(...n):e()}catch(s){Nt(s,t,o)}}function Je(e,t,o,n){if(R(e)){const s=ct(e,t,o,n);return s&&Cn(s)&&s.catch(r=>{Nt(r,t,o)}),s}if(P(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Je(e[r],t,o,n));return s}}function Nt(e,t,o,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||U;if(t){let l=t.parent;const u=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const c=l.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,u,d)===!1)return}l=l.parent}if(r){y0(),ct(r,null,10,[e,u,d]),v0();return}}Fi(e,o,s,n,a)}function Fi(e,t,o,n=!0,s=!1){if(s)throw e;console.error(e)}const ge=[];let Ye=-1;const L0=[];let a0=null,B0=0;const ts=Promise.resolve();let Tt=null;function Ut(e){const t=Tt||ts;return e?t.then(this?e.bind(this):e):t}function zi(e){let t=Ye+1,o=ge.length;for(;t<o;){const n=t+o>>>1,s=ge[n],r=rt(s);r<e||r===e&&s.flags&2?t=n+1:o=n}return t}function Ro(e){if(!(e.flags&1)){const t=rt(e),o=ge[ge.length-1];!o||!(e.flags&2)&&t>=rt(o)?ge.push(e):ge.splice(zi(t),0,e),e.flags|=1,os()}}function os(){Tt||(Tt=ts.then(ss))}function Hi(e){P(e)?L0.push(...e):a0&&e.id===-1?a0.splice(B0+1,0,e):e.flags&1||(L0.push(e),e.flags|=1),os()}function en(e,t,o=Ye+1){for(;o<ge.length;o++){const n=ge[o];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ge.splice(o,1),o--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ns(e){if(L0.length){const t=[...new Set(L0)].sort((o,n)=>rt(o)-rt(n));if(L0.length=0,a0){a0.push(...t);return}for(a0=t,B0=0;B0<a0.length;B0++){const o=a0[B0];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}a0=null,B0=0}}const rt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ss(e){try{for(Ye=0;Ye<ge.length;Ye++){const t=ge[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ct(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<ge.length;Ye++){const t=ge[Ye];t&&(t.flags&=-2)}Ye=-1,ge.length=0,ns(),Tt=null,(ge.length||L0.length)&&ss()}}let be=null,is=null;function St(e){const t=be;return be=e,is=e&&e.type.__scopeId||null,t}function Ni(e,t=be,o){if(!t||e._n)return e;const n=(...s)=>{n._d&&cn(-1);const r=St(t);let a;try{a=e(...s)}finally{St(r),n._d&&cn(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function mo(e,t){if(be===null)return e;const o=qt(be),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,l,u=U]=t[s];r&&(R(r)&&(r={mounted:r,updated:r}),r.deep&&o0(a),n.push({dir:r,instance:o,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function _0(e,t,o,n){const s=e.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];r&&(l.oldValue=r[a].value);let u=l.dir[n];u&&(y0(),Je(u,o,8,[e.el,l,e,t]),v0())}}const Ui=Symbol("_vte"),Vi=e=>e.__isTeleport;function Lo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Lo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Le(e,t){return R(e)?le({name:e.name},t,{setup:e}):e}function rs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function xt(e,t,o,n,s=!1){if(P(e)){e.forEach((T,I)=>xt(T,t&&(P(t)?t[I]:t),o,n,s));return}if(tt(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&xt(e,t,o,n.component.subTree);return}const r=n.shapeFlag&4?qt(n.component):n.el,a=s?null:r,{i:l,r:u}=e,d=t&&t.r,c=l.refs===U?l.refs={}:l.refs,g=l.setupState,m=V(g),v=g===U?()=>!1:T=>Y(m,T);if(d!=null&&d!==u&&(se(d)?(c[d]=null,v(d)&&(g[d]=null)):re(d)&&(d.value=null)),R(u))ct(u,l,12,[a,c]);else{const T=se(u),I=re(u);if(T||I){const z=()=>{if(e.f){const W=T?v(u)?g[u]:c[u]:u.value;s?P(W)&&xo(W,r):P(W)?W.includes(r)||W.push(r):T?(c[u]=[r],v(u)&&(g[u]=c[u])):(u.value=[r],e.k&&(c[e.k]=u.value))}else T?(c[u]=a,v(u)&&(g[u]=a)):I&&(u.value=a,e.k&&(c[e.k]=a))};a?(z.id=-1,Ae(z,o)):z()}}}Ft().requestIdleCallback;Ft().cancelIdleCallback;const tt=e=>!!e.type.__asyncLoader,as=e=>e.type.__isKeepAlive;function Yi(e,t){ls(e,"a",t)}function Qi(e,t){ls(e,"da",t)}function ls(e,t,o=ae){const n=e.__wdc||(e.__wdc=()=>{let s=o;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Vt(t,n,o),o){let s=o.parent;for(;s&&s.parent;)as(s.parent.vnode)&&qi(n,t,o,s),s=s.parent}}function qi(e,t,o,n){const s=Vt(t,e,n,!0);zo(()=>{xo(n[t],s)},o)}function Vt(e,t,o=ae,n=!1){if(o){const s=o[e]||(o[e]=[]),r=t.__weh||(t.__weh=(...a)=>{y0();const l=ht(o),u=Je(t,o,e,a);return l(),v0(),u});return n?s.unshift(r):s.push(r),r}}const s0=e=>(t,o=ae)=>{(!ut||e==="sp")&&Vt(e,(...n)=>t(...n),o)},Gi=s0("bm"),Fo=s0("m"),Ki=s0("bu"),Ji=s0("u"),Zi=s0("bum"),zo=s0("um"),$i=s0("sp"),Xi=s0("rtg"),er=s0("rtc");function tr(e,t=ae){Vt("ec",e,t)}const or="directives",nr=Symbol.for("v-ndc");function us(e){return sr(or,e)}function sr(e,t,o=!0,n=!1){const s=be||ae;if(s){const r=s.type,a=tn(s[e]||r[e],t)||tn(s.appContext[e],t);return!a&&n?r:a}}function tn(e,t){return e&&(e[t]||e[We(t)]||e[Oo(We(t))])}function at(e,t,o,n){let s;const r=o,a=P(e);if(a||se(e)){const l=a&&R0(e);let u=!1;l&&(u=!Oe(e),e=Ht(e)),s=new Array(e.length);for(let d=0,c=e.length;d<c;d++)s[d]=t(u?ce(e[d]):e[d],d,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,r)}else if(ee(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,d=l.length;u<d;u++){const c=l[u];s[u]=t(e[c],c,u,r)}}else s=[];return s}const po=e=>e?Cs(e)?qt(e):po(e.parent):null,ot=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>po(e.parent),$root:e=>po(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>{Ro(e.update)}),$nextTick:e=>e.n||(e.n=Ut.bind(e.proxy)),$watch:e=>Mr.bind(e)}),oo=(e,t)=>e!==U&&!e.__isScriptSetup&&Y(e,t),ir={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:n,data:s,props:r,accessCache:a,type:l,appContext:u}=e;let d;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return n[t];case 2:return s[t];case 4:return o[t];case 3:return r[t]}else{if(oo(n,t))return a[t]=1,n[t];if(s!==U&&Y(s,t))return a[t]=2,s[t];if((d=e.propsOptions[0])&&Y(d,t))return a[t]=3,r[t];if(o!==U&&Y(o,t))return a[t]=4,o[t];yo&&(a[t]=0)}}const c=ot[t];let g,m;if(c)return t==="$attrs"&&ue(e.attrs,"get",""),c(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(o!==U&&Y(o,t))return a[t]=4,o[t];if(m=u.config.globalProperties,Y(m,t))return m[t]},set({_:e},t,o){const{data:n,setupState:s,ctx:r}=e;return oo(s,t)?(s[t]=o,!0):n!==U&&Y(n,t)?(n[t]=o,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:n,appContext:s,propsOptions:r}},a){let l;return!!o[a]||e!==U&&Y(e,a)||oo(t,a)||(l=r[0])&&Y(l,a)||Y(n,a)||Y(ot,a)||Y(s.config.globalProperties,a)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:Y(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function Mt(e){return P(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}function rr(e,t){return!e||!t?e||t:P(e)&&P(t)?e.concat(t):le({},Mt(e),Mt(t))}let yo=!0;function ar(e){const t=hs(e),o=e.proxy,n=e.ctx;yo=!1,t.beforeCreate&&on(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:l,provide:u,inject:d,created:c,beforeMount:g,mounted:m,beforeUpdate:v,updated:T,activated:I,deactivated:z,beforeDestroy:W,beforeUnmount:C,destroyed:j,unmounted:M,render:H,renderTracked:J,renderTriggered:te,errorCaptured:oe,serverPrefetch:he,expose:Pe,inheritAttrs:$e,components:i0,directives:r0,filters:Kt}=t;if(d&&lr(d,n,null),a)for(const X in a){const q=a[X];R(q)&&(n[X]=q.bind(o))}if(s){const X=s.call(o,o);ee(X)&&(e.data=Eo(X))}if(yo=!0,r)for(const X in r){const q=r[X],b0=R(q)?q.bind(o,o):R(q.get)?q.get.bind(o,o):Ge,gt=!R(q)&&R(q.set)?q.set.bind(o):Ge,w0=Ze({get:b0,set:gt});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>w0.value,set:ze=>w0.value=ze})}if(l)for(const X in l)cs(l[X],n,o,X);if(u){const X=R(u)?u.call(o):u;Reflect.ownKeys(X).forEach(q=>{gr(q,X[q])})}c&&on(c,e,"c");function de(X,q){P(q)?q.forEach(b0=>X(b0.bind(o))):q&&X(q.bind(o))}if(de(Gi,g),de(Fo,m),de(Ki,v),de(Ji,T),de(Yi,I),de(Qi,z),de(tr,oe),de(er,J),de(Xi,te),de(Zi,C),de(zo,M),de($i,he),P(Pe))if(Pe.length){const X=e.exposed||(e.exposed={});Pe.forEach(q=>{Object.defineProperty(X,q,{get:()=>o[q],set:b0=>o[q]=b0})})}else e.exposed||(e.exposed={});H&&e.render===Ge&&(e.render=H),$e!=null&&(e.inheritAttrs=$e),i0&&(e.components=i0),r0&&(e.directives=r0),he&&rs(e)}function lr(e,t,o=Ge){P(e)&&(e=vo(e));for(const n in e){const s=e[n];let r;ee(s)?"default"in s?r=_t(s.from||n,s.default,!0):r=_t(s.from||n):r=_t(s),re(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[n]=r}}function on(e,t,o){Je(P(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,o)}function cs(e,t,o,n){let s=n.includes(".")?ks(o,n):()=>o[n];if(se(e)){const r=t[e];R(r)&&je(s,r)}else if(R(e))je(s,e.bind(o));else if(ee(e))if(P(e))e.forEach(r=>cs(r,t,o,n));else{const r=R(e.handler)?e.handler.bind(o):t[e.handler];R(r)&&je(s,r,e)}}function hs(e){const t=e.type,{mixins:o,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let u;return l?u=l:!s.length&&!o&&!n?u=t:(u={},s.length&&s.forEach(d=>Ot(u,d,a,!0)),Ot(u,t,a)),ee(t)&&r.set(t,u),u}function Ot(e,t,o,n=!1){const{mixins:s,extends:r}=t;r&&Ot(e,r,o,!0),s&&s.forEach(a=>Ot(e,a,o,!0));for(const a in t)if(!(n&&a==="expose")){const l=ur[a]||o&&o[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const ur={data:nn,props:sn,emits:sn,methods:J0,computed:J0,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:J0,directives:J0,watch:hr,provide:nn,inject:cr};function nn(e,t){return t?e?function(){return le(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function cr(e,t){return J0(vo(e),vo(t))}function vo(e){if(P(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function J0(e,t){return e?le(Object.create(null),e,t):t}function sn(e,t){return e?P(e)&&P(t)?[...new Set([...e,...t])]:le(Object.create(null),Mt(e),Mt(t??{})):t}function hr(e,t){if(!e)return t;if(!t)return e;const o=le(Object.create(null),e);for(const n in t)o[n]=fe(e[n],t[n]);return o}function ds(){return{app:null,config:{isNativeTag:Zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dr=0;function fr(e,t){return function(n,s=null){R(n)||(n=le({},n)),s!=null&&!ee(s)&&(s=null);const r=ds(),a=new WeakSet,l=[];let u=!1;const d=r.app={_uid:dr++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Jr,get config(){return r.config},set config(c){},use(c,...g){return a.has(c)||(c&&R(c.install)?(a.add(c),c.install(d,...g)):R(c)&&(a.add(c),c(d,...g))),d},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),d},component(c,g){return g?(r.components[c]=g,d):r.components[c]},directive(c,g){return g?(r.directives[c]=g,d):r.directives[c]},mount(c,g,m){if(!u){const v=d._ceVNode||ne(n,s);return v.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(v,c,m),u=!0,d._container=c,c.__vue_app__=d,qt(v.component)}},onUnmount(c){l.push(c)},unmount(){u&&(Je(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,g){return r.provides[c]=g,d},runWithContext(c){const g=F0;F0=d;try{return c()}finally{F0=g}}};return d}}let F0=null;function gr(e,t){if(ae){let o=ae.provides;const n=ae.parent&&ae.parent.provides;n===o&&(o=ae.provides=Object.create(n)),o[e]=t}}function _t(e,t,o=!1){const n=ae||be;if(n||F0){const s=F0?F0._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return o&&R(t)?t.call(n&&n.proxy):t}}const fs={},gs=()=>Object.create(fs),ms=e=>Object.getPrototypeOf(e)===fs;function mr(e,t,o,n=!1){const s={},r=gs();e.propsDefaults=Object.create(null),ps(e,t,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);o?e.props=n?s:Mi(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function pr(e,t,o,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,l=V(s),[u]=e.propsOptions;let d=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let g=0;g<c.length;g++){let m=c[g];if(Yt(e.emitsOptions,m))continue;const v=t[m];if(u)if(Y(r,m))v!==r[m]&&(r[m]=v,d=!0);else{const T=We(m);s[T]=bo(u,l,T,v,e,!1)}else v!==r[m]&&(r[m]=v,d=!0)}}}else{ps(e,t,s,r)&&(d=!0);let c;for(const g in l)(!t||!Y(t,g)&&((c=p0(g))===g||!Y(t,c)))&&(u?o&&(o[g]!==void 0||o[c]!==void 0)&&(s[g]=bo(u,l,g,void 0,e,!0)):delete s[g]);if(r!==l)for(const g in r)(!t||!Y(t,g))&&(delete r[g],d=!0)}d&&t0(e.attrs,"set","")}function ps(e,t,o,n){const[s,r]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if($0(u))continue;const d=t[u];let c;s&&Y(s,c=We(u))?!r||!r.includes(c)?o[c]=d:(l||(l={}))[c]=d:Yt(e.emitsOptions,u)||(!(u in n)||d!==n[u])&&(n[u]=d,a=!0)}if(r){const u=V(o),d=l||U;for(let c=0;c<r.length;c++){const g=r[c];o[g]=bo(s,u,g,d[g],e,!Y(d,g))}}return a}function bo(e,t,o,n,s,r){const a=e[o];if(a!=null){const l=Y(a,"default");if(l&&n===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&R(u)){const{propsDefaults:d}=s;if(o in d)n=d[o];else{const c=ht(s);n=d[o]=u.call(null,t),c()}}else n=u;s.ce&&s.ce._setProp(o,n)}a[0]&&(r&&!l?n=!1:a[1]&&(n===""||n===p0(o))&&(n=!0))}return n}const yr=new WeakMap;function ys(e,t,o=!1){const n=o?yr:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,a={},l=[];let u=!1;if(!R(e)){const c=g=>{u=!0;const[m,v]=ys(g,t,!0);le(a,m),v&&l.push(...v)};!o&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!u)return ee(e)&&n.set(e,D0),D0;if(P(r))for(let c=0;c<r.length;c++){const g=We(r[c]);rn(g)&&(a[g]=U)}else if(r)for(const c in r){const g=We(c);if(rn(g)){const m=r[c],v=a[g]=P(m)||R(m)?{type:m}:le({},m),T=v.type;let I=!1,z=!0;if(P(T))for(let W=0;W<T.length;++W){const C=T[W],j=R(C)&&C.name;if(j==="Boolean"){I=!0;break}else j==="String"&&(z=!1)}else I=R(T)&&T.name==="Boolean";v[0]=I,v[1]=z,(I||Y(v,"default"))&&l.push(g)}}const d=[a,l];return ee(e)&&n.set(e,d),d}function rn(e){return e[0]!=="$"&&!$0(e)}const vs=e=>e[0]==="_"||e==="$stable",Ho=e=>P(e)?e.map(Qe):[Qe(e)],vr=(e,t,o)=>{if(t._n)return t;const n=Ni((...s)=>Ho(t(...s)),o);return n._c=!1,n},bs=(e,t,o)=>{const n=e._ctx;for(const s in e){if(vs(s))continue;const r=e[s];if(R(r))t[s]=vr(s,r,n);else if(r!=null){const a=Ho(r);t[s]=()=>a}}},ws=(e,t)=>{const o=Ho(t);e.slots.default=()=>o},_s=(e,t,o)=>{for(const n in t)(o||n!=="_")&&(e[n]=t[n])},br=(e,t,o)=>{const n=e.slots=gs();if(e.vnode.shapeFlag&32){const s=t._;s?(_s(n,t,o),o&&Dn(n,"_",s,!0)):bs(t,n)}else t&&ws(e,t)},wr=(e,t,o)=>{const{vnode:n,slots:s}=e;let r=!0,a=U;if(n.shapeFlag&32){const l=t._;l?o&&l===1?r=!1:_s(s,t,o):(r=!t.$stable,bs(t,s)),a=t}else t&&(ws(e,t),a={default:1});if(r)for(const l in s)!vs(l)&&a[l]==null&&delete s[l]},Ae=Dr;function _r(e){return Ir(e)}function Ir(e,t){const o=Ft();o.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:l,createComment:u,setText:d,setElementText:c,parentNode:g,nextSibling:m,setScopeId:v=Ge,insertStaticContent:T}=e,I=(h,f,p,w=null,y=null,b=null,S=void 0,k=null,A=!!f.dynamicChildren)=>{if(h===f)return;h&&!G0(h,f)&&(w=mt(h),ze(h,y,b,!0),h=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:_,ref:B,shapeFlag:x}=f;switch(_){case Qt:z(h,f,p,w);break;case O0:W(h,f,p,w);break;case so:h==null&&C(f,p,w,S);break;case ye:i0(h,f,p,w,y,b,S,k,A);break;default:x&1?H(h,f,p,w,y,b,S,k,A):x&6?r0(h,f,p,w,y,b,S,k,A):(x&64||x&128)&&_.process(h,f,p,w,y,b,S,k,A,Y0)}B!=null&&y&&xt(B,h&&h.ref,b,f||h,!f)},z=(h,f,p,w)=>{if(h==null)n(f.el=l(f.children),p,w);else{const y=f.el=h.el;f.children!==h.children&&d(y,f.children)}},W=(h,f,p,w)=>{h==null?n(f.el=u(f.children||""),p,w):f.el=h.el},C=(h,f,p,w)=>{[h.el,h.anchor]=T(h.children,f,p,w,h.el,h.anchor)},j=({el:h,anchor:f},p,w)=>{let y;for(;h&&h!==f;)y=m(h),n(h,p,w),h=y;n(f,p,w)},M=({el:h,anchor:f})=>{let p;for(;h&&h!==f;)p=m(h),s(h),h=p;s(f)},H=(h,f,p,w,y,b,S,k,A)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),h==null?J(f,p,w,y,b,S,k,A):he(h,f,y,b,S,k,A)},J=(h,f,p,w,y,b,S,k)=>{let A,_;const{props:B,shapeFlag:x,transition:O,dirs:E}=h;if(A=h.el=a(h.type,b,B&&B.is,B),x&8?c(A,h.children):x&16&&oe(h.children,A,null,w,y,no(h,b),S,k),E&&_0(h,null,w,"created"),te(A,h,h.scopeId,S,w),B){for(const G in B)G!=="value"&&!$0(G)&&r(A,G,null,B[G],b,w);"value"in B&&r(A,"value",null,B.value,b),(_=B.onVnodeBeforeMount)&&Ve(_,w,h)}E&&_0(h,null,w,"beforeMount");const N=Ar(y,O);N&&O.beforeEnter(A),n(A,f,p),((_=B&&B.onVnodeMounted)||N||E)&&Ae(()=>{_&&Ve(_,w,h),N&&O.enter(A),E&&_0(h,null,w,"mounted")},y)},te=(h,f,p,w,y)=>{if(p&&v(h,p),w)for(let b=0;b<w.length;b++)v(h,w[b]);if(y){let b=y.subTree;if(f===b||xs(b.type)&&(b.ssContent===f||b.ssFallback===f)){const S=y.vnode;te(h,S,S.scopeId,S.slotScopeIds,y.parent)}}},oe=(h,f,p,w,y,b,S,k,A=0)=>{for(let _=A;_<h.length;_++){const B=h[_]=k?l0(h[_]):Qe(h[_]);I(null,B,f,p,w,y,b,S,k)}},he=(h,f,p,w,y,b,S)=>{const k=f.el=h.el;let{patchFlag:A,dynamicChildren:_,dirs:B}=f;A|=h.patchFlag&16;const x=h.props||U,O=f.props||U;let E;if(p&&I0(p,!1),(E=O.onVnodeBeforeUpdate)&&Ve(E,p,f,h),B&&_0(f,h,p,"beforeUpdate"),p&&I0(p,!0),(x.innerHTML&&O.innerHTML==null||x.textContent&&O.textContent==null)&&c(k,""),_?Pe(h.dynamicChildren,_,k,p,w,no(f,y),b):S||q(h,f,k,null,p,w,no(f,y),b,!1),A>0){if(A&16)$e(k,x,O,p,y);else if(A&2&&x.class!==O.class&&r(k,"class",null,O.class,y),A&4&&r(k,"style",x.style,O.style,y),A&8){const N=f.dynamicProps;for(let G=0;G<N.length;G++){const Q=N[G],_e=x[Q],me=O[Q];(me!==_e||Q==="value")&&r(k,Q,_e,me,y,p)}}A&1&&h.children!==f.children&&c(k,f.children)}else!S&&_==null&&$e(k,x,O,p,y);((E=O.onVnodeUpdated)||B)&&Ae(()=>{E&&Ve(E,p,f,h),B&&_0(f,h,p,"updated")},w)},Pe=(h,f,p,w,y,b,S)=>{for(let k=0;k<f.length;k++){const A=h[k],_=f[k],B=A.el&&(A.type===ye||!G0(A,_)||A.shapeFlag&70)?g(A.el):p;I(A,_,B,null,w,y,b,S,!0)}},$e=(h,f,p,w,y)=>{if(f!==p){if(f!==U)for(const b in f)!$0(b)&&!(b in p)&&r(h,b,f[b],null,y,w);for(const b in p){if($0(b))continue;const S=p[b],k=f[b];S!==k&&b!=="value"&&r(h,b,k,S,y,w)}"value"in p&&r(h,"value",f.value,p.value,y)}},i0=(h,f,p,w,y,b,S,k,A)=>{const _=f.el=h?h.el:l(""),B=f.anchor=h?h.anchor:l("");let{patchFlag:x,dynamicChildren:O,slotScopeIds:E}=f;E&&(k=k?k.concat(E):E),h==null?(n(_,p,w),n(B,p,w),oe(f.children||[],p,B,y,b,S,k,A)):x>0&&x&64&&O&&h.dynamicChildren?(Pe(h.dynamicChildren,O,p,y,b,S,k),(f.key!=null||y&&f===y.subTree)&&Is(h,f,!0)):q(h,f,p,B,y,b,S,k,A)},r0=(h,f,p,w,y,b,S,k,A)=>{f.slotScopeIds=k,h==null?f.shapeFlag&512?y.ctx.activate(f,p,w,S,A):Kt(f,p,w,y,b,S,A):Qo(h,f,A)},Kt=(h,f,p,w,y,b,S)=>{const k=h.component=Ur(h,w,y);if(as(h)&&(k.ctx.renderer=Y0),Yr(k,!1,S),k.asyncDep){if(y&&y.registerDep(k,de,S),!h.el){const A=k.subTree=ne(O0);W(null,A,f,p)}}else de(k,h,f,p,y,b,S)},Qo=(h,f,p)=>{const w=f.component=h.component;if(Pr(h,f,p))if(w.asyncDep&&!w.asyncResolved){X(w,f,p);return}else w.next=f,w.update();else f.el=h.el,w.vnode=f},de=(h,f,p,w,y,b,S)=>{const k=()=>{if(h.isMounted){let{next:x,bu:O,u:E,parent:N,vnode:G}=h;{const Ne=As(h);if(Ne){x&&(x.el=G.el,X(h,x,S)),Ne.asyncDep.then(()=>{h.isUnmounted||k()});return}}let Q=x,_e;I0(h,!1),x?(x.el=G.el,X(h,x,S)):x=G,O&&wt(O),(_e=x.props&&x.props.onVnodeBeforeUpdate)&&Ve(_e,N,x,G),I0(h,!0);const me=ln(h),He=h.subTree;h.subTree=me,I(He,me,g(He.el),mt(He),h,y,b),x.el=me.el,Q===null&&Er(h,me.el),E&&Ae(E,y),(_e=x.props&&x.props.onVnodeUpdated)&&Ae(()=>Ve(_e,N,x,G),y)}else{let x;const{el:O,props:E}=f,{bm:N,m:G,parent:Q,root:_e,type:me}=h,He=tt(f);I0(h,!1),N&&wt(N),!He&&(x=E&&E.onVnodeBeforeMount)&&Ve(x,Q,f),I0(h,!0);{_e.ce&&_e.ce._injectChildStyle(me);const Ne=h.subTree=ln(h);I(null,Ne,p,w,h,y,b),f.el=Ne.el}if(G&&Ae(G,y),!He&&(x=E&&E.onVnodeMounted)){const Ne=f;Ae(()=>Ve(x,Q,Ne),y)}(f.shapeFlag&256||Q&&tt(Q.vnode)&&Q.vnode.shapeFlag&256)&&h.a&&Ae(h.a,y),h.isMounted=!0,f=p=w=null}};h.scope.on();const A=h.effect=new Fn(k);h.scope.off();const _=h.update=A.run.bind(A),B=h.job=A.runIfDirty.bind(A);B.i=h,B.id=h.uid,A.scheduler=()=>Ro(B),I0(h,!0),_()},X=(h,f,p)=>{f.component=h;const w=h.vnode.props;h.vnode=f,h.next=null,pr(h,f.props,w,p),wr(h,f.children,p),y0(),en(h),v0()},q=(h,f,p,w,y,b,S,k,A=!1)=>{const _=h&&h.children,B=h?h.shapeFlag:0,x=f.children,{patchFlag:O,shapeFlag:E}=f;if(O>0){if(O&128){gt(_,x,p,w,y,b,S,k,A);return}else if(O&256){b0(_,x,p,w,y,b,S,k,A);return}}E&8?(B&16&&V0(_,y,b),x!==_&&c(p,x)):B&16?E&16?gt(_,x,p,w,y,b,S,k,A):V0(_,y,b,!0):(B&8&&c(p,""),E&16&&oe(x,p,w,y,b,S,k,A))},b0=(h,f,p,w,y,b,S,k,A)=>{h=h||D0,f=f||D0;const _=h.length,B=f.length,x=Math.min(_,B);let O;for(O=0;O<x;O++){const E=f[O]=A?l0(f[O]):Qe(f[O]);I(h[O],E,p,null,y,b,S,k,A)}_>B?V0(h,y,b,!0,!1,x):oe(f,p,w,y,b,S,k,A,x)},gt=(h,f,p,w,y,b,S,k,A)=>{let _=0;const B=f.length;let x=h.length-1,O=B-1;for(;_<=x&&_<=O;){const E=h[_],N=f[_]=A?l0(f[_]):Qe(f[_]);if(G0(E,N))I(E,N,p,null,y,b,S,k,A);else break;_++}for(;_<=x&&_<=O;){const E=h[x],N=f[O]=A?l0(f[O]):Qe(f[O]);if(G0(E,N))I(E,N,p,null,y,b,S,k,A);else break;x--,O--}if(_>x){if(_<=O){const E=O+1,N=E<B?f[E].el:w;for(;_<=O;)I(null,f[_]=A?l0(f[_]):Qe(f[_]),p,N,y,b,S,k,A),_++}}else if(_>O)for(;_<=x;)ze(h[_],y,b,!0),_++;else{const E=_,N=_,G=new Map;for(_=N;_<=O;_++){const Ie=f[_]=A?l0(f[_]):Qe(f[_]);Ie.key!=null&&G.set(Ie.key,_)}let Q,_e=0;const me=O-N+1;let He=!1,Ne=0;const Q0=new Array(me);for(_=0;_<me;_++)Q0[_]=0;for(_=E;_<=x;_++){const Ie=h[_];if(_e>=me){ze(Ie,y,b,!0);continue}let Ue;if(Ie.key!=null)Ue=G.get(Ie.key);else for(Q=N;Q<=O;Q++)if(Q0[Q-N]===0&&G0(Ie,f[Q])){Ue=Q;break}Ue===void 0?ze(Ie,y,b,!0):(Q0[Ue-N]=_+1,Ue>=Ne?Ne=Ue:He=!0,I(Ie,f[Ue],p,null,y,b,S,k,A),_e++)}const Ko=He?kr(Q0):D0;for(Q=Ko.length-1,_=me-1;_>=0;_--){const Ie=N+_,Ue=f[Ie],Jo=Ie+1<B?f[Ie+1].el:w;Q0[_]===0?I(null,Ue,p,Jo,y,b,S,k,A):He&&(Q<0||_!==Ko[Q]?w0(Ue,p,Jo,2):Q--)}}},w0=(h,f,p,w,y=null)=>{const{el:b,type:S,transition:k,children:A,shapeFlag:_}=h;if(_&6){w0(h.component.subTree,f,p,w);return}if(_&128){h.suspense.move(f,p,w);return}if(_&64){S.move(h,f,p,Y0);return}if(S===ye){n(b,f,p);for(let x=0;x<A.length;x++)w0(A[x],f,p,w);n(h.anchor,f,p);return}if(S===so){j(h,f,p);return}if(w!==2&&_&1&&k)if(w===0)k.beforeEnter(b),n(b,f,p),Ae(()=>k.enter(b),y);else{const{leave:x,delayLeave:O,afterLeave:E}=k,N=()=>n(b,f,p),G=()=>{x(b,()=>{N(),E&&E()})};O?O(b,N,G):G()}else n(b,f,p)},ze=(h,f,p,w=!1,y=!1)=>{const{type:b,props:S,ref:k,children:A,dynamicChildren:_,shapeFlag:B,patchFlag:x,dirs:O,cacheIndex:E}=h;if(x===-2&&(y=!1),k!=null&&xt(k,null,p,h,!0),E!=null&&(f.renderCache[E]=void 0),B&256){f.ctx.deactivate(h);return}const N=B&1&&O,G=!tt(h);let Q;if(G&&(Q=S&&S.onVnodeBeforeUnmount)&&Ve(Q,f,h),B&6)Js(h.component,p,w);else{if(B&128){h.suspense.unmount(p,w);return}N&&_0(h,null,f,"beforeUnmount"),B&64?h.type.remove(h,f,p,Y0,w):_&&!_.hasOnce&&(b!==ye||x>0&&x&64)?V0(_,f,p,!1,!0):(b===ye&&x&384||!y&&B&16)&&V0(A,f,p),w&&qo(h)}(G&&(Q=S&&S.onVnodeUnmounted)||N)&&Ae(()=>{Q&&Ve(Q,f,h),N&&_0(h,null,f,"unmounted")},p)},qo=h=>{const{type:f,el:p,anchor:w,transition:y}=h;if(f===ye){Ks(p,w);return}if(f===so){M(h);return}const b=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:k}=y,A=()=>S(p,b);k?k(h.el,b,A):A()}else b()},Ks=(h,f)=>{let p;for(;h!==f;)p=m(h),s(h),h=p;s(f)},Js=(h,f,p)=>{const{bum:w,scope:y,job:b,subTree:S,um:k,m:A,a:_}=h;an(A),an(_),w&&wt(w),y.stop(),b&&(b.flags|=8,ze(S,h,f,p)),k&&Ae(k,f),Ae(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},V0=(h,f,p,w=!1,y=!1,b=0)=>{for(let S=b;S<h.length;S++)ze(h[S],f,p,w,y)},mt=h=>{if(h.shapeFlag&6)return mt(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const f=m(h.anchor||h.el),p=f&&f[Ui];return p?m(p):f};let Jt=!1;const Go=(h,f,p)=>{h==null?f._vnode&&ze(f._vnode,null,null,!0):I(f._vnode||null,h,f,null,null,null,p),f._vnode=h,Jt||(Jt=!0,en(),ns(),Jt=!1)},Y0={p:I,um:ze,m:w0,r:qo,mt:Kt,mc:oe,pc:q,pbc:Pe,n:mt,o:e};return{render:Go,hydrate:void 0,createApp:fr(Go)}}function no({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function I0({effect:e,job:t},o){o?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ar(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Is(e,t,o=!1){const n=e.children,s=t.children;if(P(n)&&P(s))for(let r=0;r<n.length;r++){const a=n[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=l0(s[r]),l.el=a.el),!o&&l.patchFlag!==-2&&Is(a,l)),l.type===Qt&&(l.el=a.el)}}function kr(e){const t=e.slice(),o=[0];let n,s,r,a,l;const u=e.length;for(n=0;n<u;n++){const d=e[n];if(d!==0){if(s=o[o.length-1],e[s]<d){t[n]=s,o.push(n);continue}for(r=0,a=o.length-1;r<a;)l=r+a>>1,e[o[l]]<d?r=l+1:a=l;d<e[o[r]]&&(r>0&&(t[n]=o[r-1]),o[r]=n)}}for(r=o.length,a=o[r-1];r-- >0;)o[r]=a,a=t[a];return o}function As(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:As(t)}function an(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Tr=Symbol.for("v-scx"),Sr=()=>_t(Tr);function xr(e,t){return No(e,null,{flush:"sync"})}function je(e,t,o){return No(e,t,o)}function No(e,t,o=U){const{immediate:n,deep:s,flush:r,once:a}=o,l=le({},o),u=t&&n||!t&&r!=="post";let d;if(ut){if(r==="sync"){const v=Sr();d=v.__watcherHandles||(v.__watcherHandles=[])}else if(!u){const v=()=>{};return v.stop=Ge,v.resume=Ge,v.pause=Ge,v}}const c=ae;l.call=(v,T,I)=>Je(v,c,T,I);let g=!1;r==="post"?l.scheduler=v=>{Ae(v,c&&c.suspense)}:r!=="sync"&&(g=!0,l.scheduler=(v,T)=>{T?v():Ro(v)}),l.augmentJob=v=>{t&&(v.flags|=4),g&&(v.flags|=2,c&&(v.id=c.uid,v.i=c))};const m=Li(e,t,l);return ut&&(d?d.push(m):u&&m()),m}function Mr(e,t,o){const n=this.proxy,s=se(e)?e.includes(".")?ks(n,e):()=>n[e]:e.bind(n,n);let r;R(t)?r=t:(r=t.handler,o=t);const a=ht(this),l=No(s,r.bind(n),o);return a(),l}function ks(e,t){const o=t.split(".");return()=>{let n=e;for(let s=0;s<o.length&&n;s++)n=n[o[s]];return n}}function Or(e,t,o=U){const n=Vr(),s=We(t),r=p0(t),a=Ts(e,s),l=Ei((u,d)=>{let c,g=U,m;return xr(()=>{const v=e[s];pe(c,v)&&(c=v,d())}),{get(){return u(),o.get?o.get(c):c},set(v){const T=o.set?o.set(v):v;if(!pe(T,c)&&!(g!==U&&pe(v,g)))return;const I=n.vnode.props;I&&(t in I||s in I||r in I)&&(`onUpdate:${t}`in I||`onUpdate:${s}`in I||`onUpdate:${r}`in I)||(c=v,d()),n.emit(`update:${t}`,T),pe(v,T)&&pe(v,g)&&!pe(T,m)&&d(),g=v,m=T}}});return l[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?a||U:l,done:!1}:{done:!0}}}},l}const Ts=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${p0(t)}Modifiers`];function jr(e,t,...o){if(e.isUnmounted)return;const n=e.vnode.props||U;let s=o;const r=t.startsWith("update:"),a=r&&Ts(n,t.slice(7));a&&(a.trim&&(s=o.map(c=>se(c)?c.trim():c)),a.number&&(s=o.map(lo)));let l,u=n[l=Zt(t)]||n[l=Zt(We(t))];!u&&r&&(u=n[l=Zt(p0(t))]),u&&Je(u,e,6,s);const d=n[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Je(d,e,6,s)}}function Ss(e,t,o=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let a={},l=!1;if(!R(e)){const u=d=>{const c=Ss(d,t,!0);c&&(l=!0,le(a,c))};!o&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!l?(ee(e)&&n.set(e,null),null):(P(r)?r.forEach(u=>a[u]=null):le(a,r),ee(e)&&n.set(e,a),a)}function Yt(e,t){return!e||!Wt(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,p0(t))||Y(e,t))}function ln(e){const{type:t,vnode:o,proxy:n,withProxy:s,propsOptions:[r],slots:a,attrs:l,emit:u,render:d,renderCache:c,props:g,data:m,setupState:v,ctx:T,inheritAttrs:I}=e,z=St(e);let W,C;try{if(o.shapeFlag&4){const M=s||n,H=M;W=Qe(d.call(H,M,c,g,v,m,T)),C=l}else{const M=t;W=Qe(M.length>1?M(g,{attrs:l,slots:a,emit:u}):M(g,null)),C=t.props?l:Br(l)}}catch(M){nt.length=0,Nt(M,e,1),W=ne(O0)}let j=W;if(C&&I!==!1){const M=Object.keys(C),{shapeFlag:H}=j;M.length&&H&7&&(r&&M.some(So)&&(C=Cr(C,r)),j=z0(j,C,!1,!0))}return o.dirs&&(j=z0(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(o.dirs):o.dirs),o.transition&&Lo(j,o.transition),W=j,St(z),W}const Br=e=>{let t;for(const o in e)(o==="class"||o==="style"||Wt(o))&&((t||(t={}))[o]=e[o]);return t},Cr=(e,t)=>{const o={};for(const n in e)(!So(n)||!(n.slice(9)in t))&&(o[n]=e[n]);return o};function Pr(e,t,o){const{props:n,children:s,component:r}=e,{props:a,children:l,patchFlag:u}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return n?un(n,a,d):!!a;if(u&8){const c=t.dynamicProps;for(let g=0;g<c.length;g++){const m=c[g];if(a[m]!==n[m]&&!Yt(d,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:n===a?!1:n?a?un(n,a,d):!0:!!a;return!1}function un(e,t,o){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==e[r]&&!Yt(o,r))return!0}return!1}function Er({vnode:e,parent:t},o){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=o,t=t.parent;else break}}const xs=e=>e.__isSuspense;function Dr(e,t){t&&t.pendingBranch?P(e)?t.effects.push(...e):t.effects.push(e):Hi(e)}const ye=Symbol.for("v-fgt"),Qt=Symbol.for("v-txt"),O0=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),nt=[];let Se=null;function Z(e=!1){nt.push(Se=e?null:[])}function Wr(){nt.pop(),Se=nt[nt.length-1]||null}let lt=1;function cn(e,t=!1){lt+=e,e<0&&Se&&t&&(Se.hasOnce=!0)}function Ms(e){return e.dynamicChildren=lt>0?Se||D0:null,Wr(),lt>0&&Se&&Se.push(e),e}function $(e,t,o,n,s,r){return Ms(F(e,t,o,n,s,r,!0))}function Rr(e,t,o,n,s){return Ms(ne(e,t,o,n,s,!0))}function Os(e){return e?e.__v_isVNode===!0:!1}function G0(e,t){return e.type===t.type&&e.key===t.key}const js=({key:e})=>e??null,It=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||re(e)||R(e)?{i:be,r:e,k:t,f:!!o}:e:null);function F(e,t=null,o=null,n=0,s=null,r=e===ye?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&js(t),ref:t&&It(t),scopeId:is,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return l?(Uo(u,o),r&128&&e.normalize(u)):o&&(u.shapeFlag|=se(o)?8:16),lt>0&&!a&&Se&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&Se.push(u),u}const ne=Lr;function Lr(e,t=null,o=null,n=0,s=null,r=!1){if((!e||e===nr)&&(e=O0),Os(e)){const l=z0(e,t,!0);return o&&Uo(l,o),lt>0&&!r&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(Kr(e)&&(e=e.__vccOpts),t){t=Fr(t);let{class:l,style:u}=t;l&&!se(l)&&(t.class=ve(l)),ee(u)&&(Wo(u)&&!P(u)&&(u=le({},u)),t.style=n0(u))}const a=se(e)?1:xs(e)?128:Vi(e)?64:ee(e)?4:R(e)?2:0;return F(e,t,o,n,s,a,r,!0)}function Fr(e){return e?Wo(e)||ms(e)?le({},e):e:null}function z0(e,t,o=!1,n=!1){const{props:s,ref:r,patchFlag:a,children:l,transition:u}=e,d=t?zr(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&js(d),ref:t&&t.ref?o&&r?P(r)?r.concat(It(t)):[r,It(t)]:It(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&z0(e.ssContent),ssFallback:e.ssFallback&&z0(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&n&&Lo(c,u.clone(c)),c}function wo(e=" ",t=0){return ne(Qt,null,e,t)}function Bs(e="",t=!1){return t?(Z(),Rr(O0,null,e)):ne(O0,null,e)}function Qe(e){return e==null||typeof e=="boolean"?ne(O0):P(e)?ne(ye,null,e.slice()):Os(e)?l0(e):ne(Qt,null,String(e))}function l0(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:z0(e)}function Uo(e,t){let o=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(P(t))o=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Uo(e,s()),s._c&&(s._d=!0));return}else{o=32;const s=t._;!s&&!ms(t)?t._ctx=be:s===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:be},o=32):(t=String(t),n&64?(o=16,t=[wo(t)]):o=8);e.children=t,e.shapeFlag|=o}function zr(...e){const t={};for(let o=0;o<e.length;o++){const n=e[o];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=ve([t.class,n.class]));else if(s==="style")t.style=n0([t.style,n.style]);else if(Wt(s)){const r=t[s],a=n[s];a&&r!==a&&!(P(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=n[s])}return t}function Ve(e,t,o,n=null){Je(e,t,7,[o,n])}const Hr=ds();let Nr=0;function Ur(e,t,o){const n=e.type,s=(t?t.appContext:e.appContext)||Hr,r={uid:Nr++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new li(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ys(n,s),emitsOptions:Ss(n,s),emit:null,emitted:null,propsDefaults:U,inheritAttrs:n.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=jr.bind(null,r),e.ce&&e.ce(r),r}let ae=null;const Vr=()=>ae||be;let jt,_o;{const e=Ft(),t=(o,n)=>{let s;return(s=e[o])||(s=e[o]=[]),s.push(n),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};jt=t("__VUE_INSTANCE_SETTERS__",o=>ae=o),_o=t("__VUE_SSR_SETTERS__",o=>ut=o)}const ht=e=>{const t=ae;return jt(e),e.scope.on(),()=>{e.scope.off(),jt(t)}},hn=()=>{ae&&ae.scope.off(),jt(null)};function Cs(e){return e.vnode.shapeFlag&4}let ut=!1;function Yr(e,t=!1,o=!1){t&&_o(t);const{props:n,children:s}=e.vnode,r=Cs(e);mr(e,n,r,t),br(e,s,o);const a=r?Qr(e,t):void 0;return t&&_o(!1),a}function Qr(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ir);const{setup:n}=o;if(n){y0();const s=e.setupContext=n.length>1?Gr(e):null,r=ht(e),a=ct(n,e,0,[e.props,s]),l=Cn(a);if(v0(),r(),(l||e.sp)&&!tt(e)&&rs(e),l){if(a.then(hn,hn),t)return a.then(u=>{dn(e,u)}).catch(u=>{Nt(u,e,0)});e.asyncDep=a}else dn(e,a)}else Ps(e)}function dn(e,t,o){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=es(t)),Ps(e)}function Ps(e,t,o){const n=e.type;e.render||(e.render=n.render||Ge);{const s=ht(e);y0();try{ar(e)}finally{v0(),s()}}}const qr={get(e,t){return ue(e,"get",""),e[t]}};function Gr(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,qr),slots:e.slots,emit:e.emit,expose:t}}function qt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(es(Oi(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in ot)return ot[o](e)},has(t,o){return o in t||o in ot}})):e.proxy}function Kr(e){return R(e)&&"__vccOpts"in e}const Ze=(e,t)=>Wi(e,t,ut),Jr="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Io;const fn=typeof window<"u"&&window.trustedTypes;if(fn)try{Io=fn.createPolicy("vue",{createHTML:e=>e})}catch{}const Es=Io?e=>Io.createHTML(e):e=>e,Zr="http://www.w3.org/2000/svg",$r="http://www.w3.org/1998/Math/MathML",e0=typeof document<"u"?document:null,gn=e0&&e0.createElement("template"),Xr={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,n)=>{const s=t==="svg"?e0.createElementNS(Zr,e):t==="mathml"?e0.createElementNS($r,e):o?e0.createElement(e,{is:o}):e0.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>e0.createTextNode(e),createComment:e=>e0.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>e0.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,n,s,r){const a=o?o.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),o),!(s===r||!(s=s.nextSibling)););else{gn.innerHTML=Es(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=gn.content;if(n==="svg"||n==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,o)}return[a?a.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},ea=Symbol("_vtc");function ta(e,t,o){const n=e[ea];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const mn=Symbol("_vod"),oa=Symbol("_vsh"),na=Symbol(""),sa=/(^|;)\s*display\s*:/;function ia(e,t,o){const n=e.style,s=se(o);let r=!1;if(o&&!s){if(t)if(se(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();o[l]==null&&At(n,l,"")}else for(const a in t)o[a]==null&&At(n,a,"");for(const a in o)a==="display"&&(r=!0),At(n,a,o[a])}else if(s){if(t!==o){const a=n[na];a&&(o+=";"+a),n.cssText=o,r=sa.test(o)}}else t&&e.removeAttribute("style");mn in e&&(e[mn]=r?n.display:"",e[oa]&&(n.display="none"))}const pn=/\s*!important$/;function At(e,t,o){if(P(o))o.forEach(n=>At(e,t,n));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const n=ra(e,t);pn.test(o)?e.setProperty(p0(n),o.replace(pn,""),"important"):e[n]=o}}const yn=["Webkit","Moz","ms"],io={};function ra(e,t){const o=io[t];if(o)return o;let n=We(t);if(n!=="filter"&&n in e)return io[t]=n;n=Oo(n);for(let s=0;s<yn.length;s++){const r=yn[s]+n;if(r in e)return io[t]=r}return t}const vn="http://www.w3.org/1999/xlink";function bn(e,t,o,n,s,r=ai(t)){n&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(vn,t.slice(6,t.length)):e.setAttributeNS(vn,t,o):o==null||r&&!Wn(o)?e.removeAttribute(t):e.setAttribute(t,r?"":m0(o)?String(o):o)}function wn(e,t,o,n,s){if(t==="innerHTML"||t==="textContent"){o!=null&&(e[t]=t==="innerHTML"?Es(o):o);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,u=o==null?e.type==="checkbox"?"on":"":String(o);(l!==u||!("_value"in e))&&(e.value=u),o==null&&e.removeAttribute(t),e._value=o;return}let a=!1;if(o===""||o==null){const l=typeof e[t];l==="boolean"?o=Wn(o):o==null&&l==="string"?(o="",a=!0):l==="number"&&(o=0,a=!0)}try{e[t]=o}catch{}a&&e.removeAttribute(s||t)}function C0(e,t,o,n){e.addEventListener(t,o,n)}function aa(e,t,o,n){e.removeEventListener(t,o,n)}const _n=Symbol("_vei");function la(e,t,o,n,s=null){const r=e[_n]||(e[_n]={}),a=r[t];if(n&&a)a.value=n;else{const[l,u]=ua(t);if(n){const d=r[t]=da(n,s);C0(e,l,d,u)}else a&&(aa(e,l,a,u),r[t]=void 0)}}const In=/(?:Once|Passive|Capture)$/;function ua(e){let t;if(In.test(e)){t={};let n;for(;n=e.match(In);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):p0(e.slice(2)),t]}let ro=0;const ca=Promise.resolve(),ha=()=>ro||(ca.then(()=>ro=0),ro=Date.now());function da(e,t){const o=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=o.attached)return;Je(fa(n,o.value),t,5,[n])};return o.value=e,o.attached=ha(),o}function fa(e,t){if(P(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const An=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ga=(e,t,o,n,s,r)=>{const a=s==="svg";t==="class"?ta(e,n,a):t==="style"?ia(e,o,n):Wt(t)?So(t)||la(e,t,o,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ma(e,t,n,a))?(wn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bn(e,t,n,a,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!se(n))?wn(e,We(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),bn(e,t,n,a))};function ma(e,t,o,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&An(t)&&R(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return An(t)&&se(o)?!1:t in e}const kn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return P(t)?o=>wt(t,o):t};function pa(e){e.target.composing=!0}function Tn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ao=Symbol("_assign"),ya={created(e,{modifiers:{lazy:t,trim:o,number:n}},s){e[ao]=kn(s);const r=n||s.props&&s.props.type==="number";C0(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;o&&(l=l.trim()),r&&(l=lo(l)),e[ao](l)}),o&&C0(e,"change",()=>{e.value=e.value.trim()}),t||(C0(e,"compositionstart",pa),C0(e,"compositionend",Tn),C0(e,"change",Tn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:o,modifiers:{lazy:n,trim:s,number:r}},a){if(e[ao]=kn(a),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?lo(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(n&&t===o||s&&e.value.trim()===u)||(e.value=u))}},va=["ctrl","shift","alt","meta"],ba={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>va.some(o=>e[`${o}Key`]&&!t.includes(o))},x0=(e,t)=>{const o=e._withMods||(e._withMods={}),n=t.join(".");return o[n]||(o[n]=(s,...r)=>{for(let a=0;a<t.length;a++){const l=ba[t[a]];if(l&&l(s,t))return}return e(s,...r)})},wa=le({patchProp:ga},Xr);let Sn;function _a(){return Sn||(Sn=_r(wa))}const Ia=(...e)=>{const t=_a().createApp(...e),{mount:o}=t;return t.mount=n=>{const s=ka(n);if(!s)return;const r=t._component;!R(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=o(s,!1,Aa(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Aa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ka(e){return se(e)?document.querySelector(e):e}const Ta="/music-web/assets/Bad%20Liar-aEabo1pD.mp3",Sa="/music-web/assets/Bones-DZVk_zUT.mp3",xa="/music-web/assets/Born%20To%20Be%20Yours-DNnfyoZY.mp3",Ma="/music-web/assets/Brids-Dc07VaqV.mp3",Oa="/music-web/assets/Demons-fzTvVVlw.mp3",ja="/music-web/assets/Destination-BLeaV__W.mp3",Ba="/music-web/assets/Easy%20Come%20Easy%20Go-DkVMYczZ.mp3",Ca="/music-web/assets/Eyes%20Closed-CqVTNZrK.mp3",Pa="/music-web/assets/It's%20time-CyjBifx4.mp3",Ea="/music-web/assets/Monday-DAQPb7Pa.mp3",Da="/music-web/assets/Natural-CWJ1uabs.mp3",Wa="/music-web/assets/On%20Top%20Of%20The%20World-Daoj7ESU.mp3",Ra="/music-web/assets/One%20Day-B01I0WXB.mp3",La="/music-web/assets/Radioactive-BTNPSVYP.mp3",Fa="/music-web/assets/Season%20in%20the%20Sun-DVkLFWH3.mp3",za="/music-web/assets/Sharks-BCEIjMHK.mp3",Ha="/music-web/assets/Shots-BbavNVPu.mp3",Na="/music-web/assets/Take%20Me%20to%20the%20Beach-LHZ6W4ES.mp3",Ua="/music-web/assets/Thunder-S07EJM4a.mp3",Va="/music-web/assets/Wake%20Up-CasNVWqE.mp3",Ya="/music-web/assets/Warriors-DxTJCe_W.mp3",Qa="/music-web/assets/Whatever%20It%20Takes-BpnlT3sp.mp3",qa=`[00:00.0]Bad Liar - Imagine Dragons (梦龙)
[00:21.87]Oh hush my dear it's been a difficult year
[00:21.87]噢 嘘别说话亲爱的 真是难熬的一年啊
[00:27.72]And terrors don't prey on innocent victims
[00:27.72]恐怖分子不会袭击无辜的平民
[00:37.22]Trust me darlin' trust me darlin'
[00:37.22]相信我吧 相信我吧 亲爱的
[00:40.08]It's been a loveless year
[00:40.08]真是令人心惊胆寒的一年
[00:43.43]I'm a man of three fears
[00:43.43]我最担心害怕的不过是
[00:49.24]Integrity faith and crocodile tears
[00:49.24]所谓的诚实和信念还有那伪善的泪水
[00:57.98]Trust me darlin' trust me darlin'
[00:57.98]相信我吧 相信我吧 亲爱的
[01:03.8]So look me in the eyes tell me what you see
[01:03.8]就请直视我的双眼 勇敢告诉我你眼中的一切
[01:08.95]Perfect paradise tearin' at the seams
[01:08.95]憧憬的美好天堂坍塌瓦解 沦为断壁残垣
[01:14.57]I wish I could escape it I don't wanna fake it
[01:14.57]多希望我能逃避这残酷现实 但我不愿再自欺欺人了
[01:18.91]Wish I could erase it make your heart believe
[01:18.91]多希望我能拭去这支离破碎的一切 让你们能重新相信
[01:25.45]But I'm a bad liar bad liar
[01:25.45]而我并不擅长说谎 不过是个蹩脚骗子
[01:30.13]Now you know now you know
[01:30.13]如今你终于明白 终于知道
[01:36.22]I'm a bad liar bad liar
[01:36.22]我并不擅长说谎 不过是个蹩脚骗子
[01:40.6]Now you know you're free to go
[01:40.6]如今你已清楚 来去自由随你吧
[01:48.19]Did all my dreams never mean one thing
[01:48.19]是否我的梦想没有任何意义？
[01:53.47]Does happiness lie in a diamond ring
[01:53.47]是否幸福就藏身于钻戒之中？
[01:55.979996]Oh I've been askin' for
[01:55.979996]噢 我一直苦苦寻觅
[02:04.17]Oh I've been askin' for problems problems problems
[02:04.17]噢 我一直苦苦追寻最终的答案
[02:09.58]I wage my war on the world inside
[02:09.58]我向我的内心世界宣战
[02:15.0]I take my gun to the enemy's side
[02:15.0]举枪瞄准心底的敌人
[02:16.57]Oh I've been askin' for
[02:16.57]噢 我一直苦苦寻觅
[02:17.88]Trust me darlin'
[02:17.88]相信我吧 亲爱的
[02:19.7]Oh I've been askin' for
[02:19.7]噢 我一直苦苦寻觅
[02:20.2]Trust me darlin'
[02:20.2]相信我吧 亲爱的
[02:23.62]Problems problems problems
[02:23.62]苦苦追寻最终的答案
[02:24.28]Dan Reynolds
[02:24.28]Dan Reynolds
[02:29.99]So look me in the eyes tell me what you see
[02:29.99]就请直视我的双眼 勇敢告诉我你眼中的一切
[02:35.20999]Perfect paradise tearin' at the seams
[02:35.20999]憧憬的美好天堂坍塌瓦解 沦为断壁残垣
[02:40.92]I wish I could escape it I don't wanna fake it
[02:40.92]多希望我能逃避这残酷现实 但我不愿再自欺欺人了
[02:45.17]Wish I could erase it make your heart believe
[02:45.17]多希望我能拭去这支离破碎的一切 让你们能重新相信
[02:51.64]But I'm a bad liar bad liar
[02:51.64]而我并不擅长说谎 不过是个蹩脚骗子
[02:56.37]Now you know now you know
[02:56.37]如今你终于明白 终于知道
[03:02.45]I'm a bad liar bad liar
[03:02.45]我并不擅长说谎 不过是个蹩脚骗子
[03:08.77]Now you know you're free to go
[03:08.77]如今你已清楚 来去自由随你吧
[03:14.24]I can't breathe I can't be
[03:14.24]我已快要窒息 快要窒息
[03:20.74]I can't be what you want me to be
[03:20.74]我不愿变成你期待的样子
[03:24.69]Believe me this one time
[03:24.69]这一次 就请信我吧
[03:28.72]Believe me
[03:28.72]相信我吧
[03:34.69]I'm a bad liar bad liar
[03:34.69]我并不擅长说谎 不过是个蹩脚骗子
[03:39.45]Now you know now you know
[03:39.45]如今你终于明白 终于知道
[03:45.59]I'm a bad liar bad liar
[03:45.59]我并不擅长说谎 不过是个蹩脚骗子
[03:52.4]Now you know you're free to go
[03:52.4]如今你已清楚 来去自由随你吧
[04:04.95]Oh oh oh oh oh
[04:04.95]Oh oh oh oh oh
[04:07.57]Please believe me
[04:07.57]请相信我吧
[04:12.057]Please believe me
[04:12.057]请相信我吧
`,Ga=Object.freeze(Object.defineProperty({__proto__:null,default:qa},Symbol.toStringTag,{value:"Module"})),Ka=`[00:00.00]Bones - Imagine Dragons
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
[02:38.00]因为我的身体里有种魔力`,Ja=Object.freeze(Object.defineProperty({__proto__:null,default:Ka},Symbol.toStringTag,{value:"Module"})),Za=`[00:01.36]Born To Be Yours - Kygo/Imagine Dragons
[00:01.36] 🎵🎵
[00:08.2]I know I've given up
[00:08.2]我知道 我已经放弃过
[00:12.26]A hundred times before
[00:12.26]无数次
[00:16.47]But I know a miracle
[00:16.47]但我知道 奇迹
[00:20.63]Is not something to ignore
[00:20.63]不容忽视
[00:24.88]You take me for a fool
[00:24.88]你把我当成一个傻瓜
[00:33.29]You take me for a fool
[00:33.29]你把我当成一个傻瓜
[00:37.44]I never knew anybody 'til I knew you
[00:37.44]我从未了解任何人 直到我认识了你
[00:41.69]I never knew anybody 'til I knew you
[00:41.69]我从未了解任何人 直到我认识了你
[00:45.96]And I know when it rains oh it pours
[00:45.96]我知道 大雨磅礴时
[00:50.14]And I know I was born to be yours
[00:50.14]我知道 我就是为你而生
[00:54.2]I never knew anybody 'til I knew you
[00:54.2]我从未了解任何人 直到我认识了你
[00:58.5]I never knew anybody 'til I knew you
[00:58.5]我从未了解任何人 直到我认识了你
[01:02.75]And I know when it rains oh it pours
[01:02.75]我知道 大雨磅礴时
[01:26.2]And I know I was born to be yours
[01:26.2]我知道 我就是为你而生
[01:30.38]Are you the only one
[01:30.38]你是否是那
[01:34.36]Lost in the millions
[01:34.36]弱水三千中我独取的一瓢
[01:38.6]Or are you my grain of sand
[01:38.6]亦或只是我茫茫人生路上的一粒细沙
[01:42.759995]That's blowing in the wind
[01:42.759995]随风而逝
[01:46.79]I never knew anybody 'til I knew you
[01:46.79]我从未了解任何人 直到我认识了你
[01:51.09]I never knew anybody 'til I knew you
[01:51.09]我从未了解任何人 直到我认识了你
[01:55.36]And I know when it rains oh it pours
[01:55.36]我知道 大雨磅礴时
[01:59.59]And I know I was born to be yours
[01:59.59]我知道 我就是为你而生
[02:03.53I never knew anybody 'til I knew you
[02:03.53]我从未了解任何人 直到我认识了你
[02:07.97]I never knew anybody 'til I knew you
[02:07.97]我从未了解任何人 直到我认识了你
[02:12.22]And I know when it rains oh it pours
[02:12.22]我知道 大雨磅礴时
[02:16.87]And I know I was born to be yours
[02:16.87]我知道 我就是为你而生
[02:19.13]I was born to be yours
[02:19.13]我生来便属于你
[02:21.23]I was born born born born
[02:21.23]命中注定
[02:23.22]I was born to be yours
[02:23.22]我生来便属于你
[02:25.36]I was born born born
[02:25.36]命中注定
[02:27.26]I was born to be yours
[02:27.26]我生来便属于你
[02:29.59]I was born born born born
[02:29.59]命中注定
[02:32.37]I was born to be yours
[02:32.37]我生来便属于你
[02:49.28]Oh woah
[02:49.28] 🎵🎵
[02:50.84]Oh woah hey
[02:50.84] 🎵🎵
[02:52.85]Born to be yours
[02:52.85]命中注定属于你
[02:54.89]I was born born born born
[02:54.89]命中注定
[02:56.89]I was born to be yours
[02:56.89]我生来便属于你
[02:59.0]I was born born born
[02:59.0]命中注定
[03:00.92]I was born to be yours
[03:00.92]我生来便属于你
[03:03.27]I was born born born born
[03:03.27]命中注定
[03:08.02701]I was born to be yours oh woah
[03:08.02701]我生来便属于你
`,$a=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"})),Xa=`[00:00.0]Birds - Imagine Dragons
[00:20.88]Two hearts one valve
[00:20.88]两颗心 一组瓣膜
[00:22.86]Pumpin' the blood we were the flood
[00:22.86]血液汹涌澎湃 如滚滚洪流
[00:24.93]We were the body and
[00:24.93]我们形成了完整躯体
[00:28.81]Two lives one life
[00:28.81]两个人 倾此一生
[00:30.84]Stickin' it out lettin' you down
[00:30.84]坚持到底 令你失望
[00:32.4]Makin' it right
[00:32.4]回归正轨
[00:34.56]Seasons they will change
[00:34.56]四季交替更迭
[00:36.38]Life will make you grow
[00:36.38]生活会教你成长
[00:40.32]Dreams will make you cry cry cry
[00:40.32]梦想会让你黯然泪流
[00:42.28]Everything is temporary
[00:42.28]万物瞬息即逝
[00:44.31]Everything will slide
[00:44.31]时间稍纵即逝
[00:47.71]Love will never die die die
[00:47.71]爱却永无止息
[00:48.27]I know that
[00:48.27]我知道
[00:52.85]Ooh ooh ooh ooh
[00:52.85]Ooh ooh ooh ooh
[00:56.38]Birds fly in different directions
[00:56.38]鸟儿飞向四面八方
[01:00.74]Ooh ooh ooh ooh
[01:00.74]Ooh ooh ooh ooh
[01:04.82]I hope to see you again
[01:04.82]我希望再见你一面
[01:08.9]Sunsets sunrises
[01:08.9]日落复日出
[01:10.86]Livin' the dream watchin' the leaves
[01:10.86]追寻梦想 淡看枝黄叶落
[01:12.87]Changin' the seasons
[01:12.87]春去冬来
[01:16.79]Some nights I think of you
[01:16.79]夜深人静时 总会想起你
[01:19.0]Relivin' the past wishin' it'd last
[01:19.0]重温过往 希望前缘能再续
[01:20.270004]Wishin' and dreamin'
[01:20.270004]就这样期待着 幻想着
[01:22.43]Seasons they will change
[01:22.43]四季交替更迭
[01:24.33]Life will make you grow
[01:24.33]生活会教你成长
[01:28.35]Death can make you hard hard hard
[01:28.35]死亡教会你坚强
[01:30.34]Everything is temporary
[01:30.34]万物瞬息即逝
[01:32.44]Everything will slide
[01:32.44]时间稍纵即逝
[01:35.759995]Love will never die die die
[01:35.759995]爱却永无止息
[01:36.3]I know that
[01:36.3]我知道
[01:40.86]Ooh ooh ooh ooh
[01:40.86]Ooh ooh ooh ooh
[01:44.380005]Birds fly in different directions
[01:44.380005]鸟儿飞向四面八方
[01:48.8]Ooh ooh ooh ooh
[01:48.8]Ooh ooh ooh ooh
[01:52.4]I hope to see you again
[01:52.4]我希望再见你一面
[01:56.95]Ooh ooh ooh ooh
[01:56.95]Ooh ooh ooh ooh
[02:00.36]Birds fly in different directions
[02:00.36]鸟儿飞向四面八方
[02:04.64]Ooh ooh ooh ooh
[02:04.64]Ooh ooh ooh ooh
[02:09.85]So fly high so fly high
[02:09.85]就飞吧 展翅高飞吧
[02:17.87]When the moon is lookin' down
[02:17.87]月光黯淡时
[02:25.7]Shinin' light upon your ground
[02:25.7]我会为你照亮前路
[02:34.09]I'm flyin' up to let you see
[02:34.09]我展翅高飞只为让你看见
[02:45.62]That the shadow cast is me
[02:45.62]那投下的黑影其实是我
[02:46.25]I know that
[02:46.25]我知道
[02:51.03]Ooh ooh ooh ooh
[02:51.03]Ooh ooh ooh ooh
[02:54.42]Birds fly in different directions
[02:54.42]鸟儿飞向四面八方
[02:58.8]Ooh ooh ooh ooh
[02:58.8]Ooh ooh ooh ooh
[03:02.29]I hope to see you again
[03:02.29]我希望再见你一面
[03:06.88]Ooh ooh ooh ooh
[03:06.88]Ooh ooh ooh ooh
[03:10.47]Birds fly in different directions
[03:10.47]鸟儿飞向四面八方
[03:14.66]Ooh ooh ooh ooh
[03:14.66]Ooh ooh ooh ooh
[03:18.57]So fly high so fly high
[03:18.57]就飞吧 展翅高飞吧
[03:22.66]Ooh ooh ooh ooh
[03:22.66]Ooh ooh ooh ooh
[03:26.45]So fly high so fly high
[03:26.45]就飞吧 展翅高飞吧
[03:30.67]Ooh ooh ooh ooh
[03:30.67]Ooh ooh ooh ooh
[03:35.067]So fly high so fly high
[03:35.067]就飞吧 展翅高飞吧
`,el=Object.freeze(Object.defineProperty({__proto__:null,default:Xa},Symbol.toStringTag,{value:"Module"})),tl=`[00:00.00]Demons - Imagine Dragons (梦龙)
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
`,ol=Object.freeze(Object.defineProperty({__proto__:null,default:tl},Symbol.toStringTag,{value:"Module"})),nl=`[00:01.36]Destination - Imagine Dragons
[00:01.36] 🎵🎵
[00:16.64]I see the colors of the world are rearranging
[00:16.64]我窥见这世界的缤纷色彩重新排列组合
[00:26.69]The center sentinels are cunningly estranging oh
[00:26.69]那衷心守卫的哨兵悄无声息的离开
[00:29.27]I think a little about a lot and reach a verdict
[00:29.27]对于许多事我不曾深究就下定决心
[00:32.33]You think a lot about a little never heard it
[00:32.33]而对于闻所未闻的一点点小事你就纠结不已

[00:38.41]All of our energy
[00:38.41]所有的能量
[00:45.41]I bring these words to life
[00:45.41]如至理名言般践行于生活之中

[00:48.49]We stay up late and draw the lines
[00:48.49]我们彻夜不眠 只为描绘
[00:51.60]To every constellation
[00:51.60]每颗繁星的轮廓
[00:54.68]We live with all our sorrows tied
[00:54.68]反正随着年岁增长以及苦涩的分离
[00:57.78]To age and separation
[00:57.78]未来的生活总会有悲伤相伴
[01:00.92]These are the days of love and life
[01:00.92]只是这充满爱和活力的日子
[01:04.01]These are our expectations
[01:04.01]不就是我们热忱的期待吗？
[01:07.13]We stay up late to live tonight
[01:07.13]今夜我们彻夜不眠 好好感受
[01:10.23]This is our destination
[01:10.23]这就是我们的目的地

[01:18.41]I take me back to '91
[01:18.41]将我带回1991年吧
[01:21.52]I had the love life there a loaded gun alright
[01:21.52]那时候我拥有美好的生活 如今我像是把上膛的枪

[01:31.53]I see the colors of the world are rearranging
[01:31.53]我窥见这世界的缤纷色彩重新排列组合
[01:34.38]The center sentinels are leaving but I'm changing
[01:34.38]衷心守卫的哨兵已退出我的世界 而我也已长大

[01:40.47]All of our energy
[01:40.47]所有的能量
[01:47.28]I bring these words to life
[01:47.28]如至理名言般践行于生活之中

[01:50.43]We stay up late and draw the lines
[01:50.43]我们彻夜不眠 只为描绘
[01:53.54]To every constellation
[01:53.54]每颗繁星的轮廓
[01:56.59]We live with all our sorrows tied
[01:56.59]反正随着年岁增长以及苦涩的分离
[01:59.75]To age and separation
[01:59.75]未来的生活总会有悲伤相伴
[02:02.83]These are the days of love and life
[02:02.83]只是这充满爱和活力的日子
[02:05.91]These are our expectations
[02:05.91]不就是我们热忱的期待吗？
[02:09.01]We stay up late to live tonight
[02:09.01]今夜我们彻夜不眠 好好感受
[02:12.11]This is our destination
[02:12.11]这就是我们的目的地

[02:36.84]Ooh ooh ooh ooh ooh ooh
[02:49.72]我们彻夜不眠 只为描绘
[02:52.86]To every constellation
[02:52.86]每颗繁星的轮廓
[02:55.99]We live with all our sorrows tied
[02:55.99]反正随着年岁增长以及苦涩的分离
[02:59.03]To age and separation
[02:59.03]未来的生活总会有悲伤相伴
[03:02.22]These are the days of love and life
[03:02.22]只是这充满爱和活力的日子
[03:05.27]These are our expectations
[03:05.27]不就是我们热忱的期待吗？
[03:08.39]We stay up late to live tonight
[03:08.39]今夜我们彻夜不眠 好好感受
[03:11.43]This is our destination
[03:11.43]这就是我们的目的地

[03:27.98]Ohh ohh oh ohh ohh oh
`,sl=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"})),il=`[00:00.000] 作词 : Jayson DeZuzio/Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman
[00:01.000] 作曲 : Jayson DeZuzio/Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman
[00:14.583] All my friends are gone, I don't blame them
[00:14.583] 我所有的朋友都离我而去 我不怪他们
[00:17.931] I guess I'll move on, do the same thing
[00:17.931] 我想我会继续前进 一如既往
[00:21.199] So I wrote a song to be my lullaby
[00:21.199] 所以我写了一首歌 作摇篮曲
[00:24.649] Sing me to sleep at night, open my third eye
[00:24.649] 夜里伴我睡觉 睁开第三只眼
[00:27.261]
[00:27.261]
[00:27.556] I'm not gonna lie to you, I miss you so much
[00:27.556] 我不会骗你 我非常想你
[00:31.031] Tell me what I did wrong to lose touch?
[00:31.031] 告诉我为何要失去联系 我做错了什么
[00:34.392] I'm not gonna lie to you, this has been a hard year
[00:34.392] 不骗你 这是艰难的一年
[00:37.797] Oh, I wish that you were here
[00:37.797] 我希望你在这里
[00:40.426]
[00:40.426]
[00:41.204] I just need to let it go, waiting on a miracle
[00:41.204] 我只需要放手 等待奇迹
[00:44.654] Guess that's just the way it goes, easy come, easy go
[00:44.654] 猜猜这就是生活 来得容易去得快
[00:48.121] I just need to let it go, turn it down and lay low
[00:48.121] 我只需要放手 放缓速度 放低姿态
[00:51.946] It's just the way it goes, easy come, easy go
[00:51.946] 就是这样 来得容易去也快
[00:54.056]
[00:54.056]
[00:55.657] Sometimes I drive a little too fast
[00:55.657] 有时我操之过急
[00:58.975] Think I'm running from demons of my past
[00:58.975] 思虑着我正在逃避我过去的心魔
[01:02.528] So I wrote a song to help me slow down
[01:02.528] 所以我写了一首歌来帮我慢下来
[01:05.832] Keep my mind straight but it's a bit late
[01:05.832] 保持头脑清醒 但有些晚了
[01:07.871]
[01:07.871]
[01:08.627] I'm not gonna lie to you, I miss you so much
[01:08.627] 我不会骗你 我很想你
[01:12.057] Tell me what I did wrong to lose touch?
[01:12.057] 告诉我为何失去联系 我做错了什么
[01:15.398] I'm not gonna lie to you, this has been a hard year
[01:15.398] 不骗你 今年是艰难的一年
[01:18.950] Oh, I wish that you were here
[01:18.950] 我希望你在这里
[01:21.416]
[01:21.416]
[01:22.324] I just need to let it go, waiting on a miracle
[01:22.324] 我只需要放手 等待奇迹
[01:25.821] Guess that's just the way it goes, easy come, easy go
[01:25.821] 猜猜这就是生活 来得容易去得容易
[01:29.208] I just need to let it go, turn it down and lay low
[01:29.208] 我只需要放手 放缓下来
[01:32.804] It's just the way it goes, easy come, easy go
[01:32.804] 就是这样 来得容易去也快
[01:36.075] I just need to let it go (I just need to let it go), waiting on a miracle (Waiting on a miracle)
[01:36.075] 我只需要放手 等待奇迹
[01:39.493] Guess that's just the way it goes (Guess that's just the way it goes), easy come, easy go
[01:39.493] 猜猜这就是生活 来得容易去得快
[01:42.891] I just need to let it go (I just need to let it go), turn it down, and lay low (Low)
[01:42.891] 我只需要放手 放缓速度 放低姿态
[01:46.550] It's just the way it goes (It's just the way it goes), easy come, easy go
[01:46.550] 就是这样 来得容易去得容易
[01:48.550]
[01:48.550]
[01:49.743] Remember when you got sick, cancer of the bone
[01:49.743] 记住当你患了骨癌
[01:53.427] Everyone at school while you sitting at home
[01:53.427] 大家都在上学 而你只得坐在家里
[01:56.222] In your wheelchair of grief, find no relief
[01:56.222] 在你满载悲伤的轮椅上 毫无解脱可言
[01:59.783] We were there for the ups and downs and there for the constant rounds of chemo
[01:59.783] 我们在那里经历了起起落落 与不断的化疗
[02:04.289] Yeah, you know that you are our hero
[02:04.289] 你清楚你是我们的英雄
[02:06.013] You were there when I was a zero
[02:06.013] 我还默默无闻 你早已现世
[02:07.583] And I swear I'll make things right before the long night
[02:07.583] 我发誓我会在漫漫长夜之前 让一切安好如初
[02:10.880] Swear I'll make things right, tomorrow
[02:10.880] 发誓明天我就会
[02:15.137] But as for tonight
[02:15.137] 但至于今晚
[02:16.768]
[02:16.768]
[02:17.255] I just need to let it go (I just need to let it go), waiting on a miracle (Waiting on a miracle)
[02:17.255] 我只需要放手 等待奇迹
[02:20.604] Guess that's just the way it goes (Guess that's just the way it goes), easy come, easy go
[02:20.604] 猜猜这就是生活 来得容易去得快
[02:23.953] I just need to let it go (I just need to let it go), turn it down, and lay low (Low)
[02:23.953] 我只需要放手 放缓速度 放低姿态
[02:27.684] It's just the way it goes (It's just the way it goes), easy come, easy go
[02:27.684] 这就是它的方式 来得容易去得快
[02:30.849] I just need to let it go (I just need to let it go), waiting on a miracle (Waiting on a miracle)
[02:30.849] 我只需要放手 等待奇迹
[02:34.393] Guess that's just the way it goes (Guess that's just the way it goes), easy come, easy go
[02:34.393] 猜猜这就是生活 来得容易去得容易
[02:37.778] I just need to let it go (I just need to let it go), turn it down, and lay low (Low)
[02:37.778] 我只需要放手 放缓速度 放低姿态
[02:41.251] It's just the way it goes (It's just the way it goes), easy come, easy go
[02:41.251] 这就是生活 来得容易去得容易
[02:43.984]
[02:43.984]
[02:44.610] I just need to let it go (I just need to let it go), waiting on a miracle (Waiting on a miracle)
[02:44.610]我只需要放手 等待奇迹
[02:48.106] Guess that's just the way it goes (Guess that's just the way it goes), easy come, easy go
[02:48.106] 猜猜这就是生活 来得容易去得快
[02:51.416] I just need to let it go (I just need to let it go), turn it down, and lay low (Low)
[02:51.416]我只需要放手 放缓速度 放低姿态
[02:55.187] It's just the way it goes, easy come, easy go
[02:55.187] 就是这样 来得容易去得容易
`,rl=Object.freeze(Object.defineProperty({__proto__:null,default:il},Symbol.toStringTag,{value:"Module"})),al=`[00:00.000] 作词 : Dan Reynolds/Wayne Sermon/Ben McKee/Robin Lennart Fredriksson/Mattias Larsson
[00:00.024] 作曲 : Dan Reynolds/Wayne Sermon/Ben McKee/Robin Lennart Fredriksson/Mattias Larsson
[00:00.049] I could do this with my eyes closed
[00:00.049]即便闭上双眼 我也能随心而动
[00:09.125]
[00:09.125]
[00:12.420] I'm back from the dead
[00:12.420]亡者归来
[00:13.699] From the back of my head
[00:13.699]梦魇盘桓在我脑海深处
[00:15.047] Been gone and facing horrors
[00:15.047]历经炼狱般的恐怖
[00:16.374] That should never be said
[00:16.374]不为人知的折磨
[00:17.855] The wrath and the grit
[00:17.855]盛怒与坚毅交织
[00:19.248] From the pit of despair
[00:19.248]自绝望的深坑挣扎向上
[00:20.559] Been taking every whip and word
[00:20.559]每一记鞭笞 每一句恶语受在我身
[00:22.136] I've never been 
[00:22.136]却从未得到过宽恕
[00:23.094]
[00:23.094]
[00:23.794] They say tomorrow's never promised, honest
[00:23.794]他们说 明日不可捉摸 无常才是真理
[00:29.336] They say the angels are among us
[00:29.336]他们说 天使就在我们之中
[00:32.686]
[00:32.686]
[00:33.500] Lock me up in a maze
[00:33.500]将我囚于迷宫
[00:36.304] Turn out, turn out the lights
[00:36.304]关上灯 熄灭光明
[00:39.029] I was born, I was raised for this
[00:39.029]我为此而生 为这一时刻而存在
[00:41.812] Turn out, turn out the lights
[00:41.812]熄灭光明 拥抱黑暗
[00:43.699] Turn out the lights
[00:43.699]熄灭光明吧
[00:44.364]
[00:44.364]
[00:44.636] Lock me up inside a cage
[00:44.636]将我锁进牢笼
[00:47.354] Just throw away the key
[00:47.354]丢掉钥匙
[00:48.748] Don't worry 'bout me
[00:48.748]无需为我担忧
[00:50.490] I was driving in my car, throwing up my hands
[00:50.490]我驱车驰骋 高举双手
[00:53.238] Put it in coast
[00:53.238]顺势而行 放任自流
[00:54.489]
[00:54.489]
[00:55.291] I could do this with my eyes closed
[00:55.291]即便闭上双眼 我也能随心而动
[00:58.397] Turn out, turn out the lights
[00:58.397]熄灭光明 拥抱黑暗
[01:00.919] I could do this with my eyes closed
[01:00.919]即便闭上双眼 我也能随心而动
[01:03.907] Turn out, turn out the lights
[01:03.907]熄灭光明 拥抱黑暗
[01:06.461] I could do this with my eyes—
[01:06.461]即便闭上双眼 我也能随心而动
[01:07.519]
[01:07.519]
[01:07.953] Less medications, less manifestations
[01:07.953]褪去药物的依附 抛开虚妄的表象
[01:13.317] Mantras, meditation, throw it all away
[01:13.317]默念真言 静心冥想 一切统统摒弃
[01:17.665]
[01:17.665]
[01:18.653] All the places I've been
[01:18.653]曾去过的旧地
[01:19.982] All the blood that I've bled
[01:19.982]流过的鲜血 都已成为往事
[01:21.309] I've been broken down and beat up
[01:21.309]我曾支离破碎 遍体鳞伤
[01:22.457] But I still get ahead
[01:22.457]却依然能出人头地
[01:24.065] All the faceless embraces
[01:24.065]那些平庸刻板的拥抱
[01:25.442] And the tasteless two faces
[01:25.442]索然无味的虚伪双面
[01:26.853] Killed and resurrected
[01:26.853]一次次濒临死亡 却又一次次浴火重生
[01:28.023] 'Cause I'll never be dead
[01:28.023]因为死亡永远无法将我禁锢
[01:28.976]
[01:28.976]
[01:30.185] They say tomorrow's never promised, honest
[01:30.185]他们说 明日不可捉摸 无常才是真理
[01:35.482] They say that piranhas are among us
[01:35.482]他们说 嗜血食人鱼就在我们之中
[01:38.882]
[01:38.882]
[01:39.764] Lock me up in a maze
[01:39.764]将我囚于迷宫
[01:42.518] Turn out, turn out the lights
[01:42.518]关上灯 熄灭光明
[01:45.194] I was born, I was raised for this
[01:45.194]我为此而生 为这一时刻而存在
[01:48.078] Turn out, turn out the lights
[01:48.078]熄灭光明 拥抱黑暗
[01:49.770] Turn out the lights
[01:49.770]熄灭光明吧
[01:50.380]
[01:50.380]
[01:50.753] Lock me up inside a cage
[01:50.753]将我锁进牢笼
[01:53.572] Just throw away the key
[01:53.572]丢掉钥匙
[01:54.944] Don't worry 'bout me
[01:54.944]无需为我担忧
[01:56.615] I was driving in my car, throwing up my hands
[01:56.615]我驱车驰骋 高举双手
[01:59.425] Put it in coast
[01:59.425]顺势而行 放任自流
[02:00.134]
[02:00.134]
[02:01.592] I could do this with my eyes closed
[02:01.592]即便闭上双眼 我也能随心而动
[02:04.507] Turn out, turn out the lights
[02:04.507]熄灭光明 拥抱黑暗
[02:06.966] I could do this with my eyes closed
[02:06.966]即便闭上双眼 我也能随心而动
[02:10.121] Turn out, turn out the lights
[02:10.121]熄灭光明 拥抱黑暗
[02:12.404] I could do this with my eyes—
[02:12.404]即便闭上双眼 我也能随心而动
[02:13.499]
[02:13.499]
[02:14.716] And when the day broke, buried in violence
[02:14.716]当黎明撕破夜幕 被暴力掩埋
[02:17.960] Something made my mind up
[02:17.960]一股信念在我心头升起
[02:20.578] I will spend these days as an island
[02:20.578]我选择远离喧嚣 化作孤岛
[02:23.366] Alone and far away
[02:23.366]孑然一身 驻守天涯
[02:24.312]
[02:24.312]
[02:25.301] Lock me up in a maze
[02:25.301]将我囚于迷宫
[02:28.020] Turn out, turn out the lights
[02:28.020]关上灯 熄灭光明
[02:30.637] I was born, I was raised for this
[02:30.637]我为此而生 为这一时刻而存在
[02:33.469] Turn out, turn out the lights
[02:33.469]熄灭光明 拥抱黑暗
[02:34.986]
[02:34.986]
[02:36.198] Lock me up inside a cage
[02:36.198]将我锁进牢笼
[02:38.981] Just throw away the key
[02:38.981]丢掉钥匙
[02:40.479] Don't worry 'bout me
[02:40.479]无需为我担忧
[02:42.210] I was driving in my car throwing up my hands
[02:42.210]我驱车驰骋 高举双手
[02:44.927] Put it in coast
[02:44.927]顺势而行 放任自流
[02:45.751]
[02:45.751]
[02:46.895] I could do this with my eyes closed
[02:46.895]即便闭上双眼 我也能随心而动
[02:50.027] Turn out, turn out the lights
[02:50.027]熄灭光明 拥抱黑暗
[02:52.629] I could do this with my eyes closed
[02:52.629]即便闭上双眼 我也能随心而动
[02:55.606] Turn out, turn out the lights
[02:55.606]熄灭光明 拥抱黑暗
[02:58.005] I could do this with my eyes closed
[02:58.005]即便闭上双眼 我也能随心而动
[03:01.131] Turn out, turn out the lights
[03:01.131]熄灭光明 拥抱黑暗
[03:03.638] I could do this with my eyes closed
[03:03.638]即便闭上双眼 我也能随心而动
[03:06.578] Turn out, turn out the lights
[03:06.578]熄灭光明 拥抱黑暗
[03:08.775] I could do this with my eyes closed
[03:08.775]即便闭上双眼 我也能随心而动
`,ll=Object.freeze(Object.defineProperty({__proto__:null,default:al},Symbol.toStringTag,{value:"Module"})),ul=`[00:00.0]It's Time - Imagine Dragons (梦龙)
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
`,cl=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"})),hl=`[00:00.49]Monday - Imagine Dragons
[00:15.89]When you're down on your luck
[00:15.89]在你诸事不顺的时候
[00:18.57]I take them hands and I turn it up
[00:18.57]我帮你稳住情况 带给你快乐能量
[00:21.25]When you're face to the floor
[00:21.25]在你垂头丧气的时候
[00:25.27]I turn the dial turn it up more
[00:25.27]我帮你调换频道 让快乐的声音更加响亮
[00:31.56]I'm here for you will ya be there for me too
[00:31.56]我在你身边为你守候 你是否也会守护着我
[00:34.89]Ooh
[00:34.89]Ooh
[00:35.27]I believe
[00:35.27]我相信
[00:35.92]I believe
[00:35.92]我相信
[00:36.6]In the cause
[00:36.6]这样
[00:37.32]In the cause
[00:37.32]这样
[00:40.14]I'm pound-for-pound baby turn it on
[00:40.14]我的付出能获得对等的回报 宝贝 兴奋起来吧
[00:43.45]A million calls will never do I'll never get enough of you
[00:43.45]多少个电话都不够 我永远不会对你厌倦
[00:48.73]I'll never get enough of you
[00:48.73]我永远不会对你厌倦
[00:54.03]You are my Monday you're the best day of the week
[00:54.03]你是我的星期一 你是一周中最美好的那天
[00:59.28]So underrated and a brand new start
[00:59.28]完全被低估 崭新的开端
[01:02.14]Don't care what all the kids say
[01:02.14]这些孩子们说什么我不在乎
[01:09.17]You've got the key to my heart ooh
[01:09.17]你得到了我心门的钥匙
[01:09.93]When you call
[01:09.93]当你打来电话
[01:10.63]When you call
[01:10.63]当你打来电话
[01:11.270004]On the phone
[01:11.270004]通过电话
[01:12.0]On the phone
[01:12.0]通过电话
[01:14.25]I never let you hear the dial tone
[01:14.25]我绝不会让你听见电话忙音
[01:14.770004]Beep
[01:14.770004]哔哔
[01:15.25]I believe
[01:15.25]我相信
[01:15.9]I believe
[01:15.9]我相信
[01:16.58]In your touch
[01:16.58]有了你的触碰
[01:17.32]In your touch
[01:17.32]有了你的触碰
[01:21.25]I know I can be a little much
[01:21.25]我知道我可能会忘乎所以
[01:27.71]I'm there for you will ya be there for me too
[01:27.71]我在你身边为你守候 你是否也会守护着我
[01:31.38]Ooh
[01:31.38]Ooh
[01:32.5]You are my Monday
[01:32.5]你是我的星期一
[01:33.229996]You are my Monday
[01:33.229996]你是我的星期一
[01:35.59]You're the best day of the week
[01:35.59]你是一周中最美好的那天
[01:36.68]Best day of the week
[01:36.68]一周中最美好的那天
[01:38.25]So underrated
[01:38.25]完全被低估
[01:38.619995]So underrated
[01:38.619995]完全被低估
[01:40.869995]And a brand new start
[01:40.869995]崭新的开端
[01:41.990005]Brand new start
[01:41.990005]崭新的开端
[01:44.17]Don't care what all the kids say
[01:44.17]这些孩子们说什么我不在乎
[01:44.75]Never care
[01:44.75]从不在乎
[02:13.71]You've got the key to my heart ooh
[02:13.71]你得到了我心门的钥匙
[02:16.09]You could be the one that I've been waiting all my life for
[02:16.09]你可能就是我等待一生的那个人
[02:19.27]You could be the key to lead me up into the highest floor
[02:19.27]你可能就是带我走上至高天堂的引路者
[02:22.08]Give me loving keep me going 'til the midnight hour
[02:22.08]给予我满满的爱 让我继续前进 直到午夜来临
[02:28.86]Bring me up lift me up to your rainbow tower
[02:28.86]让我振作 带我走出低谷 登上你的彩虹塔
[02:33.98]Your rainbow tower
[02:33.98]你的彩虹塔
[02:36.78]My Monday doo-oo-doo
[02:36.78]我的星期一
[02:38.61]Doo-oo-doo doo-oo-doo
[02:38.61]Doo-oo-doo doo-oo-doo
[02:44.68]Monday my my Monday
[02:44.68]星期一 我的 我的星期一
[02:50.14]My Monday
[02:50.14]我的星期一
[02:52.76]My Monday doo-oo-doo
[02:52.76]我的星期一
[02:57.076]Doo-oo-doo doo-oo-doo
[02:57.076]Doo-oo-doo doo-oo-doo
`,dl=Object.freeze(Object.defineProperty({__proto__:null,default:hl},Symbol.toStringTag,{value:"Module"})),fl=`[00:00.0]Natural - Imagine Dragons
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
`,gl=Object.freeze(Object.defineProperty({__proto__:null,default:fl},Symbol.toStringTag,{value:"Module"})),ml=`[00:15.00]On Top Of The World - Imagine Dragons (梦龙)
[00:15.00] 🎵🎵
[00:17.00]If you love somebody
[00:17.00]如果你爱上了某个人
[00:19.00]Better tell them while they're here 'cause
[00:19.00]最好在适合的时机点赶紧说出
[00:24.00]They just may run away from you
[00:24.00]因为你不知这最佳时机点会何时错过
[00:26.00]You'll never know quite when well
[00:26.00]你永远都不会清楚知道
[00:29.00]Then again it just depends on
[00:29.00]要如何取决某些事
[00:33.00]How long of time is left for you
[00:33.00]而自己又还有多少时间可以陪伴他们

[00:36.00]I've had the highest mountains
[00:36.00]我曾拥有至高的山峰
[00:38.00]I've had the deepest rivers
[00:38.00]我曾拥有深不见底的河流
[00:43.00]You can have it all but life keeps moving
[00:43.00]你也可以拥有这一切 但是生命是瞬息万变的

[00:46.00]Now take it in but don't look down
[00:46.00]我接受了 但是却不敢低估
[00:49.00]'Cause I'm on top of the world hey
[00:49.00]因为我站在世界的巅峰
[00:51.00]I'm on top of the world hey
[00:51.00]我站在世界之巅
[00:54.00]Waiting on this for a while now
[00:54.00]为了这一刻我已经等待了许久
[00:56.00]Paying my dues to the dirt
[00:56.00]向大地付出我应尽的责任
[00:58.00]I've been waiting to smile hey
[00:58.00]我会为了一抹微笑而继续等待
[01:01.00]Been holding it in for a while hey
[01:01.00]暂时去控制这一切
[01:03.00]Take you with me if I can
[01:03.00]如果我可以我要带你与我一起走
[01:06.00]Been dreaming of this since a child
[01:06.00]像个小孩子一样一直做着这场梦
[01:09.00]I'm on top of the world
[01:09.00]我站在世界之巅

[01:12.00]I've tried to cut these corners
[01:12.00]我懒得再去挥别那些不堪
[01:14.00]Try to take the easy way out
[01:14.00]试着找条容易点的出路
[01:19.00]I kept on falling short of something
[01:19.00]我一直在某些事情上相当不擅长
[01:21.00]I could've gave up then but
[01:21.00]我本可以放弃的 但是
[01:24.00]Then again I couldn't have 'cause
[01:24.00]我却因此而无法再次拥有了 因为
[01:29.00]I've traveled all this way for something
[01:29.00]我曾为了一些事而重蹈覆辙

[01:32.00]Now take it in but don't look down
[01:32.00]我接受了 但是却不敢低估
[01:34.00]'Cause I'm on top of the world hey
[01:34.00]因为我站在世界的巅峰
[01:37.00]I'm on top of the world hey
[01:37.00]我站在世界之巅
[01:39.00]Waiting on this for a while now
[01:39.00]为了这一刻我已经等待了许久
[01:42.00]Paying my dues to the dirt
[01:42.00]向大地付出我应尽的责任
[01:44.00]I've been waiting to smile hey
[01:44.00]我会为了一抹微笑而继续等待
[01:46.00]Been holding it in for a while hey
[01:46.00]暂时去控制这一切
[01:49.00]Take you with me if I can
[01:49.00]如果我可以我要带你与我一起走
[01:51.00]Been dreaming of this since a child
[01:51.00]像个小孩子一样一直做着这场梦
[01:53.00]I'm on top of the world
[01:53.00]我站在世界之巅

[01:58.00]Oh woah oh oh oh oh
[02:01.00]Oh woah oh oh
[02:03.00]'Cause I'm on top of the world hey
[02:03.00]因为我站在世界的巅峰
[02:06.00]I'm on top of the world hey
[02:06.00]我站在世界之巅
[02:08.00]Waiting on this for a while now
[02:08.00]为了这一刻我已经等待了许久
[02:10.00]Paying my dues to the dirt
[02:10.00]向大地付出我应尽的责任
[02:13.00]I've been waiting to smile hey
[02:13.00]我会为了一抹微笑而继续等待
[02:15.00]Been holding it in for a while hey
[02:15.00]暂时去控制这一切
[02:17.00]Take you with me if I can
[02:17.00]如果我可以我要带你与我一起走
[02:21.00]Been dreaming of this since a child
[02:21.00]像个小孩子一样一直做着这场梦

[02:23.00]And I know it's hard when you're falling down
[02:23.00]我知道这很难 特别是当你跌倒后
[02:26.00]And it's a long way up when you hit the ground but
[02:26.00]而当你跌倒后 这段路依旧漫长
[02:30.00]Get up now get up get up now
[02:30.00]现在 起来吧
[02:33.00]And I know it's hard when you're falling down
[02:33.00]我知道这很难 特别是当你跌倒后
[02:35.00]And it's a long way up when you hit the ground but
[02:35.00]而当你跌倒后 这段路依旧漫长
[02:39.00]Get up now get up get up now
[02:39.00]现在 起来吧

[02:41.00]'Cause I'm on top of the world hey
[02:41.00]因为我站在世界的巅峰
[02:43.00]I'm on top of the world hey
[02:43.00]我站在世界之巅
[02:46.00]Waiting on this for a while now
[02:46.00]为了这一刻我已经等待了许久
[02:48.00]Paying my dues to the dirt
[02:48.00]向大地付出我应尽的责任
[02:50.00]I've been waiting to smile hey
[02:50.00]我会为了一抹微笑而继续等待
[02:53.00]Been holding it in for a while hey
[02:53.00]暂时去控制这一切
[02:55.00]Take you with me if I can
[02:55.00]如果我可以我要带你与我一起走
[02:57.00]Been dreaming of this since a child
[02:57.00]像个小孩子一样一直做着这场梦
[02:59.00]I'm on top of the world
[02:59.00]我站在世界之巅

[03:04.00]Oh woah oh oh oh oh
[03:04.00]我站在世界之巅
`,pl=Object.freeze(Object.defineProperty({__proto__:null,default:ml},Symbol.toStringTag,{value:"Module"})),yl=`[00:00.22]One Day - Imagine Dragons (梦龙)
[00:00.22] 🎵🎵
[00:05.04]I know that one day I'll be that one
[00:05.04]我知道总有一天我
[00:07.69]Thing that makes you happy
[00:07.69]可以令你欢欣
[00:10.35]I know I keep you laughin'
[00:10.35]我知道我让你时刻笑容满面
[00:12.92]Your sun on a cloudy day
[00:12.92]我会成为你的太阳为你驱散阴云
[00:15.66]The feel of a perfect wave
[00:15.66]感觉像是完美的浪涛
[00:19.05]Is crashin' upon your face
[00:19.05]向你扑面而来
[00:22.49]Yeah I know that one day one day
[00:22.49]我知道总有一天 总有一天
[00:27.04]Birds outside will sing me a song tonight
[00:27.04]窗外的鸟儿 今夜会为我歌唱
[00:31.96]I know that it's right on time time
[00:31.96]我知道就是现在 现在
[00:33.38]Twee-da-da-da
[00:33.38]   
[00:37.57]Life flies by the moon and the midnight sky
[00:37.57]生命转瞬即逝 月亮和午夜天空
[00:42.97]Is guiding me to your side side
[00:42.97]指引我去到你的身边 身边
[00:47.77]I know that one day I'll be that one
[00:47.77]我知道总有一天我
[00:50.32]Thing that makes you happy
[00:50.32]可以令你欢欣
[00:53.04]I know I keep you laughin'
[00:53.04]我知道我让你时刻笑容满面
[00:55.62]Your sun on a cloudy day
[00:55.62]我会成为你的太阳为你驱散阴云
[00:58.27]The feel of a perfect wave
[00:58.27]感觉像是完美的浪涛
[01:01.53]Is crashin' upon your face
[01:01.53]向你扑面而来
[01:05.24]Yeah I know that one day one day
[01:05.24]我知道总有一天 总有一天
[01:08.43]Can we run away to a place
[01:08.43]我们能否逃去某个地方
[01:12.81]That children play in the grassy fields
[01:12.81]那里孩子们在草地上嬉戏玩闹
[01:14.58]Fields
[01:14.58]草地
[01:15.82]Twee-da-da-da
[01:15.82]   
[01:21.16]I know they tellin' you things that you put in your head head
[01:21.16]我知道他们对你说的话 你都记在了心里
[01:25.74]Promise you that are better off without them
[01:25.74]我保证离开了他们 你会更加幸福
[01:30.31]I know that one day I'll be that one
[01:30.31]我知道总有一天我
[01:32.94]Thing that makes you happy
[01:32.94]可以令你欢欣
[01:35.61]I know I keep you laughin'
[01:35.61]我知道我让你时刻笑容满面
[01:38.16]Your sun on a cloudy day
[01:38.16]我会成为你的太阳为你驱散阴云
[01:40.91]The feel of a perfect wave
[01:40.91]感觉像是完美的浪涛
[01:44.119995]Is crashin' upon your face
[01:44.119995]向你扑面而来
[01:47.619995]Yeah I know that one day one day
[01:47.619995]我知道总有一天 总有一天
[01:48.16]One
[01:48.16]一天
[01:49.18]One one one
[01:49.18]一天 一天 一天
[01:51.19]Day I'll be that one
[01:51.19]我可以
[01:51.630005]One
[01:51.630005]可以
[01:54.36]Thing that makes you happy
[01:54.36]可以令你欢欣
[01:56.979996]I know I'll keep you laughin'
[01:56.979996]我知道我让你时刻笑容满面
[01:58.84]Your sun on a cloudy day
[01:58.84]我会成为你的太阳为你驱散阴云
[01:59.72]One one
[01:59.72]一天 一天
[02:02.2]The feel of a perfect wave
[02:02.2]感觉像是完美的浪涛
[02:05.48]Is crashin' upon your face
[02:05.48]向你扑面而来
[02:09.16]Yeah I know that one day one day
[02:09.16]我知道总有一天 总有一天
[02:13.26]Ooh ooh-ooh-ooh-ooh
[02:13.26]   
[02:15.82]Ooh ooh-ooh-ooh-ooh
[02:15.82]   
[02:17.12]Ooh ooh-ooh-ooh-ooh
[02:17.12]   
[02:19.82]One day
[02:19.82]总有一天
[02:23.77]Ooh ooh-ooh-ooh-ooh
[02:23.77]   
[02:26.47]Ooh ooh-ooh-ooh-ooh
[02:26.47]   
[02:27.8]Ooh ooh-ooh-ooh-ooh
[02:27.8]   
[02:32.08]One day
[02:32.08]总有一天
`,vl=Object.freeze(Object.defineProperty({__proto__:null,default:yl},Symbol.toStringTag,{value:"Module"})),bl=`[00:00.0]Radioactive - Imagine Dragons
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
`,wl=Object.freeze(Object.defineProperty({__proto__:null,default:bl},Symbol.toStringTag,{value:"Module"})),_l=`[00:00.00]Seasons in the Sun - Westlife (西城男孩)
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
`,Il=Object.freeze(Object.defineProperty({__proto__:null,default:_l},Symbol.toStringTag,{value:"Module"})),Al=`[00:00.00]Sharks - Imagine Dragons
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
`,kl=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"})),Tl=`[00:00.0]Shots - Imagine Dragons
[00:28.09]]I'm sorry for everything oh everything I've done
[00:28.09]我很抱歉，为我所做的一切
[00:30.34]Am I out of touch
[00:30.34]我是否已经触不可及
[00:32.84]Am I out of my place
[00:32.84]是否待在一个错误之地
[00:37.05]When I keep sayin' that I'm lookin' for an empty space
[00:37.05]我一直说 我在寻找某个空旷之地
[00:39.41]Oh I'm wishin' you're here
[00:39.41]就是希望你在我身边
[00:42.05]But I'm wishin' you're gone
[00:42.05]但我有希望你离我而去
[00:46.4]I can't have you and I'm only gonna do you wrong
[00:46.4]我无法拥有你，只会不停地伤害你
[00:48.49]Oh I'm gonna mess this up
[00:48.49]我会搞砸的
[00:50.81]Oh this is just my luck
[00:50.81]这就是我的命数
[00:55.5]Over and over and over again
[00:55.5]周而复始
[00:59.4]I'm sorry for everything oh everything I've done
[00:59.4]我很抱歉，为我所做的一切
[01:01.2]From the second that I was born
[01:01.2]从我出生的那一刻起
[01:03.61]It seems I had a loaded gun
[01:03.61]就仿佛上了膛的枪
[01:05.3]And then I shot shot
[01:05.3]我不停的射击
[01:08.520004]Shot a hole through everything I loved
[01:08.520004]我的心爱之物
[01:09.87]Oh I shot shot
[01:09.87]射击 射击
[01:23.05]Shot a hole through every single thing that I loved
[01:23.05]在每一件心爱之物上击出一个洞
[01:25.229996]Am I out of luck
[01:25.229996]我的运气是否已去
[01:27.6]Am I waiting to break
[01:27.6]我是否在等待爆发
[01:32.06]When I keep sayin' that I'm lookin' for a way to escape
[01:32.06]我一直说我在寻找一种方式逃离
[01:34.270004]Oh I'm wishin' I had
[01:34.270004]真希望我找到了
[01:36.81]What I'm takin' for granted
[01:36.81]那些理所应当的事物
[01:41.15]I can't have you and I'm only gonna do you wrong
[01:41.15]我无法拥有你，只会不停地伤害你
[01:43.39]Oh I'm gonna mess this up
[01:43.39]我会搞砸的
[01:45.67]Oh this is just my luck
[01:45.67]这就是我的命数
[01:50.35]Over and over and over again
[01:50.35]周而复始
[01:54.31]I'm sorry for everything oh everything I've done
[01:54.31]我很抱歉，为我所做的一切
[01:55.92]From the second that I was born
[01:55.92]从我出生的那一刻起
[01:58.270004]It seems I had a loaded gun
[01:58.270004]就仿佛上了膛的枪
[02:00.17]And then I shot shot
[02:00.17]我不停的射击
[02:03.34]Shot a hole through everything I loved
[02:03.34]我的心爱之物
[02:04.69]Oh I shot shot
[02:04.69]射击 射击
[02:12.37]Shot a hole through every single thing that I loved
[02:12.37]在每一件心爱之物上击出一个洞
[02:14.82]In the meantime we let it go
[02:14.82]与此同时，我们顺其自然
[02:17.04001]At the road side we used to know
[02:17.04001]在我们曾熟悉的路标旁
[02:19.4]We can let this drift away
[02:19.4]我们让一切事物渐渐远去
[02:21.77]Oh we let this drift away
[02:21.77]喔，我们让一切事物渐渐远去
[02:23.98]At the bay side we used to show
[02:23.98]在我们曾经靠岸的海湾边
[02:26.26]In the moonlight we let it go
[02:26.26]月光皎洁，我们顺其自然
[02:28.53]We can let this drift away
[02:28.53]我们让一切事物渐渐远去
[02:30.8]Oh we let this drift away
[02:30.8]喔，我们让一切事物渐渐远去
[02:33.19]And there's always time to change your mind
[02:33.19]你总会改变想法
[02:35.43]And there's always time to change your mind
[02:35.43]你总会改变想法
[02:38.39]Oh love can you hear me
[02:38.39]喔，亲爱的，能听见我吗？
[02:40.69]Oh let it drift away
[02:40.69]让一切事物渐渐远去吧
[02:44.67]I'm sorry for everything oh everything I've done
[02:44.67]我很抱歉，为我所做的一切
[02:46.25]From the second that I was born
[02:46.25]从我出生的那一刻起
[02:48.66]It seems I had a loaded gun
[02:48.66]就仿佛上了膛的枪
[02:50.42]And then I shot shot
[02:50.42]我不停的射击
[02:53.69]Shot a hole through everything I loved
[02:53.69]我的心爱之物
[02:55.06]Oh I shot shot
[02:55.06]射击 射击
[02:58.35]Shot a hole through every single thing that I loved
[02:58.35]在每一件心爱之物上击出一个洞
[03:00.55]In the meantime we let it go
[03:00.55]与此同时，我们顺其自然
[03:02.82]At the road side we used to know
[03:02.82]在我们曾熟悉的路标旁
[03:05.07]We can let this drift away
[03:05.07]我们让一切事物渐渐远去
[03:07.49]Oh we let this drift away
[03:07.49]喔，我们让一切事物渐渐远去
[03:09.7]At the bay side we used to show
[03:09.7]在我们曾经靠岸的海湾边
[03:11.93]In the moonlight we let it go
[03:11.93]月光皎洁，我们顺其自然
[03:14.23]We can let this drift away
[03:14.23]我们让一切事物渐渐远去
[03:16.66]Oh we let this drift away
[03:16.66]喔，我们让一切事物渐渐远去
[03:18.88]'Cause you've always got to change your mind
[03:18.88]你总会改变想法
[03:21.03]'Cause you've always got to change your mind
[03:21.03]你总会改变想法
[03:24.1]Oh love can you hear me
[03:24.1]喔，亲爱的，能听见我吗？
[03:29.01]Oh let it drift away
[03:29.01]让一切事物渐渐远去吧
`,Sl=Object.freeze(Object.defineProperty({__proto__:null,default:Tl},Symbol.toStringTag,{value:"Module"})),xl=`[00:00.0]Take Me to the Beach - Imagine Dragons
[00:09.56]  🎵🎵  
[00:11.44]People pleasing planet
[00:11.44]一个由好媚俗者充斥的世界
[00:13.81]Got a million people saying how to plan it
[00:13.81]芸芸众生嘴里说着人生布局 宏伟蓝图
[00:15.94]I can no longer stand it
[00:15.94]我再也无法忍受了
[00:18.53]Gonna spend my days telling them to can it
[00:18.53]我要告诉这些人 把这些妙计
[00:20.51]Each and to their own
[00:20.51]好好自己留着
[00:23.07]Got a salesman ringing my phone
[00:23.07]有个销售给我打来电话
[00:25.13]Tell me where to go
[00:25.13]跟我说去哪里哪里才能怎样怎样
[00:27.17]No I don't wanna hear the down low
[00:27.17]够了 这些东西我听太多了
[00:29.96]I owe
[00:29.96]我问心无愧
[00:32.32]Nothing not a penny never wanna hear you preach
[00:32.32]不欠谁一个子儿 我才不要听你啰里吧嗦说教
[00:35.74]No
[00:35.74]不
[00:38.25]Take me to the beach
[00:38.25]任我走向海滩
[00:40.54]You could have the mountains
[00:40.54]你尽可登上高山
[00:42.85]You take the snow
[00:42.85]赏一赏山巅之上的白雪
[00:44.54]It's way too cold
[00:44.54]只是那太冷了
[00:47.36]My heart is cold enough
[00:47.36]我的心已经冰冷得不行
[00:49.65]Push comes to shove
[00:49.65]不妨在这关键时刻做出抉择
[00:51.96]You could have the mountains
[00:51.96]你尽可登上高山
[00:54.95]I'll take the beach
[00:54.95]我要去海滩
[00:57.05]If you want it come and get it
[00:57.05]心中若已有渴望 那便竭尽全力去争取
[00:59.37]Got a million people telling me they're with it
[00:59.37]数不清的人自称是我的支持者
[01:01.67]And they got me at my limit
[01:01.67]却逼迫我直至枯竭
[01:03.93]And I'm telling you I never spare a minute
[01:03.93]我告诉你 我从没浪费过一分钟
[01:06.21]If you wanna keep on living
[01:06.21]要是你想为
[01:08.5]For the sucker that is telling you your limit
[01:08.5]那个抓着你缺陷不放的人而活
[01:10.8]Gotta find out it's a gimmick
[01:10.8]你一定会发现 那不过是一场骗局
[01:12.81]Can't nobody tell you how to live it
[01:12.81]因为任何人都无权指教你的生活
[01:15.68]I owe
[01:15.68]我问心无愧
[01:17.979996]Nothing not a penny never walking on a leash
[01:17.979996]不欠谁一个子儿 我才不要被人牵着鼻子走
[01:21.41]No
[01:21.41]不
[01:23.91]Take me to the beach
[01:23.91]任我走向海滩
[01:26.25]You could have the mountains
[01:26.25]你尽可登上高山
[01:28.49]You take the snow
[01:28.49]赏一赏山巅之上的白雪
[01:30.21]It's way too cold
[01:30.21]只是那太冷了
[01:33.09]My heart is cold enough
[01:33.09]我的心已经冰冷得不行
[01:35.34]Push comes to shove
[01:35.34]不妨在这关键时刻做出抉择
[01:37.64]You could have the mountains
[01:37.64]你尽可登上高山
[01:40.020004]I'll take the beach
[01:40.020004]我要去海滩
[01:42.240005]I'm better off alone
[01:42.240005]我自己一个人自在多了
[01:44.520004]Like a rolling stone
[01:44.520004]如一块滚石 无拘无束
[01:46.86]Turning off my phone
[01:46.86]手机关机
[01:51.39]No one bringing me down down down down
[01:51.39]不让任何人破坏我的好心情
[01:53.7]Just give me some space
[01:53.7]给我点空间吧
[01:55.9]That sun in my face
[01:55.9]想让阳光照耀在我的脸上
[01:59.119995]And the days go on and on and on and on
[01:59.119995]平静地随着日子一天天流逝
[02:00.23]T-A-K-E
[02:00.23]   
[02:02.73]Take me to the beach
[02:02.73]任我走向海滩
[02:05.11]You could have the mountains
[02:05.11]你尽可登上高山
[02:07.4]You take the snow
[02:07.4]赏一赏山巅之上的白雪
[02:08.49]It's way too cold
[02:08.49]只是那太冷了
[02:09.53]It's way too cold
[02:09.53]只是那太冷了
[02:12.03]My heart is cold enough
[02:12.03]我的心已经冰冷得不行
[02:14.18]Push comes to shove
[02:14.18]不妨在这关键时刻做出抉择
[02:16.57]You could have the mountains
[02:16.57]你尽可登上高山
[02:17.68]I'll take the beach
[02:17.68]我要去海滩
[02:18.99]I'll take the I'll take the
[02:18.99]我要去 我要去
[02:19.7]Take me to the
[02:19.7]任我走向
[02:21.41]I don't have no friends
[02:21.41]我没有朋友
[02:24.27]Ask anyone
[02:24.27]尽管去问
[02:26.0]Got me till the end
[02:26.0]陪我坚持到最后吧
[02:27.73]My favorite one
[02:27.73]我最爱的人
[02:28.94]Take me to the beach
[02:28.94]带我去海滩
[02:30.82]I don't have no friends
[02:30.82]我没有朋友
[02:32.11]Ask anyone
[02:32.11]尽管去问
[02:33.38]Ask anyone
[02:33.38]尽管去问
[02:35.33]Got me till the end
[02:35.33]陪我坚持到最后吧
[02:36.85]My favorite one
[02:36.85]我最爱的人
[02:41.08499]Take me to the beach
[02:41.08499]带我去海滩
`,Ml=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"})),Ol=`[00:00.00]Thunder - Imagine Dragons (梦龙)
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
`,jl=Object.freeze(Object.defineProperty({__proto__:null,default:Ol},Symbol.toStringTag,{value:"Module"})),Bl=`[00:00.00]Wake Up - Imagine Dragons
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
`,Cl=Object.freeze(Object.defineProperty({__proto__:null,default:Bl},Symbol.toStringTag,{value:"Module"})),Pl=`[00:06.27]Warriors - Imagine Dragons
[00:06.27] 🎵🎵
[00:12.45]As a child you would wait and watch from far away
[00:12.45]当你还是懵懂小孩 常在远处观看比赛
[00:15.64]But you always knew that you'd be the one
[00:15.64]但你早已心怀期待
[00:18.68]That work while they all play
[00:18.68]立志登上舞台
[00:24.82]In youth you'd lay awake at night and scheme
[00:24.82]当你年少独自入睡 总在半夜突然醒来
[00:27.93]Of all the things that you would change
[00:27.93]决心尽力改变一切
[00:31.41]But it was just a dream
[00:31.41]但那只是虚梦
[00:36.44]Here we are don't turn away now
[00:36.44]我们现在就在这里 不要走开
[00:37.61]Don't turn away
[00:37.61]不要逃避
[00:42.65]We are the warriors that built this town
[00:42.65]我们就是所向披靡的勇士 建造了这座城
[00:43.72]This town
[00:43.72]这座城池
[00:48.78]Here we are don't turn away now
[00:48.78]我们现在就在这里 不要走开
[00:49.87]Don't turn away
[00:49.87]不要逃避
[00:54.96]We are the warriors that built this town
[00:54.96]我们就是所向披靡的勇士 建造了这座城
[00:55.67]This town
[00:55.67]这座城池
[00:57.23]From dust
[00:57.23]从无到有
[01:01.84]Will come when you'll have to rise
[01:01.84]当你已有实力问鼎 你的时代就会到来
[01:04.89]Above the best and prove yourself
[01:04.89]击败最强证明自己
[01:08.020004]Your spirit never dies
[01:08.020004]你的斗志永盛不衰
[01:14.0]Farewell I've gone to take my throne above
[01:14.0]对着大众挥手作别 我已让出我的华盖
[01:17.04]But don't weep for me 'cause this will be
[01:17.04]不要为我落寞徘徊
[01:20.76]The labor of my love
[01:20.76]因我内心依旧澎湃
[01:25.63]Here we are don't turn away now
[01:25.63]我们现在就在这里 不要走开
[01:26.8]Don't turn away
[01:26.8]不要逃避
[01:32.18]We are the warriors that built this town
[01:32.18]我们就是所向披靡的勇士 建造了这座城
[01:32.86]This town
[01:32.86]这座城池
[01:37.94]Here we are don't turn away now
[01:37.94]我们现在就在这里 不要走开
[01:39.06]Don't turn away
[01:39.06]不要逃避
[01:44.56]We are the warriors that built this town
[01:44.56]我们就是所向披靡的勇士 建造了这座城
[01:45.2]This town
[01:45.2]这座城池
[02:09.79]From dust
[02:09.79]从无到有
[02:15.0]Here we are don't turn away now
[02:15.0]我们现在就在这里 不要走开
[02:16.01]Don't turn away
[02:16.01]不要逃避
[02:21.02]We are the warriors that built this town
[02:21.02]我们就是所向披靡的勇士 建造了这座城
[02:22.11]This town
[02:22.11]这座城池
[02:27.11]Here we are don't turn away now
[02:27.11]我们现在就在这里 不要走开
[02:28.29001]Don't turn away
[02:28.29001]不要逃避
[02:33.49]We are the warriors that built this town
[02:33.49]我们就是所向披靡的勇士 建造了这座城
[02:34.15]This town
[02:34.15]这座城池
[02:39.015]From dust
[02:39.015]从无到有
`,El=Object.freeze(Object.defineProperty({__proto__:null,default:Pl},Symbol.toStringTag,{value:"Module"})),Dl=`[00:00.00]Whatever It Takes - Imagine Dragons (梦龙)
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
`,Wl=Object.freeze(Object.defineProperty({__proto__:null,default:Dl},Symbol.toStringTag,{value:"Module"})),Rl="/music-web/assets/Natural-BjAlP-yv.webp",Ll=Object.freeze(Object.defineProperty({__proto__:null,default:Rl},Symbol.toStringTag,{value:"Module"})),Fl="/music-web/assets/Bones-COyeLGIJ.webp",zl=Object.freeze(Object.defineProperty({__proto__:null,default:Fl},Symbol.toStringTag,{value:"Module"})),Hl="data:image/webp;base64,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",Nl=Object.freeze(Object.defineProperty({__proto__:null,default:Hl},Symbol.toStringTag,{value:"Module"})),Ul="/music-web/assets/Brids-CgI_uYZM.webp",Vl=Object.freeze(Object.defineProperty({__proto__:null,default:Ul},Symbol.toStringTag,{value:"Module"})),Yl="/music-web/assets/Demons-CzXWi7nk.webp",Ql=Object.freeze(Object.defineProperty({__proto__:null,default:Yl},Symbol.toStringTag,{value:"Module"})),ql="/music-web/assets/Destination-DdvQwCds.webp",Gl=Object.freeze(Object.defineProperty({__proto__:null,default:ql},Symbol.toStringTag,{value:"Module"})),Kl="/music-web/assets/Easy%20Come%20Easy%20Go-BPVAjHFH.webp",Jl=Object.freeze(Object.defineProperty({__proto__:null,default:Kl},Symbol.toStringTag,{value:"Module"})),Zl="/music-web/assets/Eyes%20Closed-k4eJnblC.webp",$l=Object.freeze(Object.defineProperty({__proto__:null,default:Zl},Symbol.toStringTag,{value:"Module"})),Xl="/music-web/assets/It's%20time-rkNuDT1A.webp",e1=Object.freeze(Object.defineProperty({__proto__:null,default:Xl},Symbol.toStringTag,{value:"Module"})),t1="/music-web/assets/Monday-BVEfZX2q.webp",o1=Object.freeze(Object.defineProperty({__proto__:null,default:t1},Symbol.toStringTag,{value:"Module"})),n1="/music-web/assets/Natural-BjAlP-yv.webp",s1=Object.freeze(Object.defineProperty({__proto__:null,default:n1},Symbol.toStringTag,{value:"Module"})),i1="/music-web/assets/On%20Top%20Of%20The%20World-pSn4QKHy.webp",r1=Object.freeze(Object.defineProperty({__proto__:null,default:i1},Symbol.toStringTag,{value:"Module"})),a1="/music-web/assets/One%20Day-BKk6QRqR.webp",l1=Object.freeze(Object.defineProperty({__proto__:null,default:a1},Symbol.toStringTag,{value:"Module"})),u1="/music-web/assets/Radioactive-DWHcxKLc.webp",c1=Object.freeze(Object.defineProperty({__proto__:null,default:u1},Symbol.toStringTag,{value:"Module"})),h1="/music-web/assets/Season%20in%20the%20Sun-XuxHJwhD.webp",d1=Object.freeze(Object.defineProperty({__proto__:null,default:h1},Symbol.toStringTag,{value:"Module"})),f1="/music-web/assets/Sharks-CDXkkhOZ.webp",g1=Object.freeze(Object.defineProperty({__proto__:null,default:f1},Symbol.toStringTag,{value:"Module"})),m1="/music-web/assets/Shots-BQ5roRIA.webp",p1=Object.freeze(Object.defineProperty({__proto__:null,default:m1},Symbol.toStringTag,{value:"Module"})),y1="/music-web/assets/Take%20Me%20to%20the%20Beach-AYZOMJTI.webp",v1=Object.freeze(Object.defineProperty({__proto__:null,default:y1},Symbol.toStringTag,{value:"Module"})),b1="/music-web/assets/Thunder-BFI2gm7s.webp",w1=Object.freeze(Object.defineProperty({__proto__:null,default:b1},Symbol.toStringTag,{value:"Module"})),_1="data:image/webp;base64,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",I1=Object.freeze(Object.defineProperty({__proto__:null,default:_1},Symbol.toStringTag,{value:"Module"})),A1="/music-web/assets/Warriors-BFQx_208.webp",k1=Object.freeze(Object.defineProperty({__proto__:null,default:A1},Symbol.toStringTag,{value:"Module"})),T1="/music-web/assets/Whatever%20It%20Takes-BQcRQVsM.webp",S1=Object.freeze(Object.defineProperty({__proto__:null,default:T1},Symbol.toStringTag,{value:"Module"})),x1="/music-web/assets/shape-eqqK86Ed.webp",M1=Object.freeze(Object.defineProperty({__proto__:null,default:x1},Symbol.toStringTag,{value:"Module"})),Bt=D({Bones:360,Demons:15,Brids:7800,"Bad Liar":20,"Season in the Sun":0,Shots:0}),Ct=D(""),Ds=(e="#4fa273")=>{Ct.value=e,document.documentElement.style.setProperty("--base-color",Ct.value)};Ds();const O1=(e,t)=>{e in Bt.value&&(Bt.value[e]+=t);const o=Re.value.find(n=>n.id===e);o&&(o.time+=t)},Pt=D(null),Ws=(e,t="load")=>t==="load"&&e.audioUrl===d0.value.audioUrl&&!(Math.abs(Ce.value-we.value)<=1)?!1:(e==null?void 0:e.type)===1&&(e==null?void 0:e.time)<=0?(setTimeout(()=>{Me.value.unshift("当前歌曲试听已结束。"),U0(),Me.value.unshift("即将播放下一首歌。"),Pt.value=setTimeout(()=>{Dt[c0.value]()},3e3)},1e4),!0):e.hasOwnProperty("time")&&((e==null?void 0:e.time)??0)<=0?(Me.value.unshift("当前歌曲可听部分已结束，请重新购买或选择其他音频。"),Me.value.unshift("即将播放下一首歌。"),Pt.value=setTimeout(()=>{Dt[c0.value]()},3e3),!1):!0,ie=D(null),h0=D(null),Z0=D(null),H0=D(null),Rs=()=>{ie.value||(ie.value=new window.AudioContext,H0.value=ie.value.createAnalyser(),H0.value.fftSize=256,h0.value=ie.value.createGain(),h0.value=ie.value.createGain(),h0.value.connect(ie.value.destination),E0(Ee.value))},Et=D(null),Be=D(!1),T0=D(null),dt=D(0),ft=D(0),d0=D({}),N0=async(e=Re.value[xe.value])=>{if(!Ws(e))return;const o=Re.value.findIndex(n=>n.audioUrl===e.audioUrl);xe.value=o,we.value=0,Z0.value&&Z0.value!==null&&(Z0.value.destroy(),Z0.value=null),Rs();try{Me.value.unshift(`正在加载音频：${e.id}`);const s=await(await fetch(e.audioUrl)).arrayBuffer();return Et.value=await ie.value.decodeAudioData(s),Ce.value=Et.value.duration,d0.value=e,Gt(!1),!0}catch(n){return console.error("音频加载失败:",n),!1}},Ls=D(0),Vo=D(0);function Gt(e=!0){if(!Et.value){N0();return}if(e&&!Ws(d0.value.id?d0.value:Te.value,"play"))return;Z0.value={play:Gt,pause:Yo,stop:U0,destroy:Us,setVolume:E0,seek:zs},T0.value=ie.value.createBufferSource(),T0.value.buffer=Et.value,T0.value.connect(H0.value),H0.value.connect(h0.value);const t=dt.value;T0.value.start(0,t),ft.value=ie.value.currentTime-t,Be.value=!0,Ls.value=Date.now(),Ns()}const Fs=()=>{if(d0.value.hasOwnProperty("time")&&d0.value.type!==1){const e=Re.value.findIndex(t=>t.audioUrl===d0.value.audioUrl);Re.value[e].time-=Number(((Vo.value-Ls.value)/1e3).toFixed(0))}},Yo=()=>{Be.value&&(T0.value.stop(),dt.value=ie.value.currentTime-ft.value,Be.value=!1,Vo.value=Date.now(),Fs()),Hs()},U0=()=>{Be.value&&(Be.value=!1,T0.value.stop(),T0.value.disconnect(),Vo.value=Date.now(),Fs(),d0.value={}),Hs(),dt.value=0};function E0(e){const t=Math.max(0,Math.min(1,e));h0.value&&ie.value&&(h0.value.gain.value=t)}const zs=e=>{if(e>=0&&e<=Ce.value){const t=Be.value;return Yo(),dt.value=e,t&&Gt(),!0}return!1},xn=D(null),f0=D(),g0=D(null);function Hs(){f0.value&&(cancelAnimationFrame(f0.value),f0.value=0),g0.value&&(clearInterval(g0.value),g0.value=null)}function Ns(){const e=()=>{Be.value&&(we.value=ie.value.currentTime-ft.value,Ce.value!==0&&we.value>=Ce.value&&(U0(),Dt[c0.value]()),xn.value&&xn.value({currentTime:we.value,duration:Ce.value,progress:Vs.value*100}),f0.value=requestAnimationFrame(e))};e()}function j1(){const e=()=>{Be.value&&(we.value=ie.value.currentTime-ft.value,Ce.value!==0&&we.value>=Ce.value&&(U0(),Dt[c0.value]()))};g0.value=setInterval(e,1e3)}function Us(){var e,t;U0(),ie.value&&((e=ie.value)==null||e.close(),(t=h0.value)==null||t.disconnect(),ie.value=null,h0.value=null)}const B1=()=>{g0.value&&(clearInterval(g0.value),g0.value=null),f0.value||Ns()},C1=()=>{f0.value&&(cancelAnimationFrame(f0.value),f0.value=0),g0.value||j1()},P1=async()=>{var e;((e=ie.value)==null?void 0:e.state)==="suspended"&&(await ie.value.resume(),ft.value=ie.value.currentTime-dt.value)};document.addEventListener("visibilitychange",()=>{document.hidden?C1():(B1(),P1())});var k0=(e=>(e.Sequence="SEQUENCE",e.Random="RANDOM",e.Single="SINGLE",e))(k0||{});function Mn(e){if(isNaN(e))return"00:00";const t=Math.abs(Math.floor(e)),o=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,r=[];return o>0&&r.push(o.toString().padStart(2,"0")),r.push(n.toString().padStart(2,"0")),r.push(s.toString().padStart(2,"0")),r.join(":")}const E1=(e=1,t)=>Math.floor(Math.random()*e),u0=D(window.innerWidth/750),qe=D(window.innerWidth),Ao=()=>{u0.value=window.innerWidth/750,qe.value=window.innerWidth};Ao();const Ee=D(.5),xe=D(0),we=D(0),Ce=D(0),c0=D(k0.Sequence),ko=D(!1),Vs=Ze(()=>Ce.value!==0?we.value/Ce.value:0),D1=()=>{xe.value===0?xe.value=Re.value.length-1:xe.value--,N0()},Ys=()=>{xe.value===Re.value.length-1?xe.value=0:xe.value++,N0()},Dt={SEQUENCE:()=>Ys(),RANDOM:()=>{xe.value=E1(Re.value.length-1,xe.value),N0()},SINGLE:()=>{N0()}},Re=D([]),Te=Ze(()=>Re.value[xe.value]),W1=["Season in the Sun","Shots"],R1=async()=>{try{const e=Object.assign({"/src/assets/music/Bad Liar.mp3":Ta,"/src/assets/music/Bones.mp3":Sa,"/src/assets/music/Born To Be Yours.mp3":xa,"/src/assets/music/Brids.mp3":Ma,"/src/assets/music/Demons.mp3":Oa,"/src/assets/music/Destination.mp3":ja,"/src/assets/music/Easy Come Easy Go.mp3":Ba,"/src/assets/music/Eyes Closed.mp3":Ca,"/src/assets/music/It's time.mp3":Pa,"/src/assets/music/Monday.mp3":Ea,"/src/assets/music/Natural.mp3":Da,"/src/assets/music/On Top Of The World.mp3":Wa,"/src/assets/music/One Day.mp3":Ra,"/src/assets/music/Radioactive.mp3":La,"/src/assets/music/Season in the Sun.mp3":Fa,"/src/assets/music/Sharks.mp3":za,"/src/assets/music/Shots.mp3":Ha,"/src/assets/music/Take Me to the Beach.mp3":Na,"/src/assets/music/Thunder.mp3":Ua,"/src/assets/music/Wake Up.mp3":Va,"/src/assets/music/Warriors.mp3":Ya,"/src/assets/music/Whatever It Takes.mp3":Qa}),t=Object.assign({"/src/assets/music/Bad Liar.js":Ga,"/src/assets/music/Bones.js":Ja,"/src/assets/music/Born To Be Yours.js":$a,"/src/assets/music/Brids.js":el,"/src/assets/music/Demons.js":ol,"/src/assets/music/Destination.js":sl,"/src/assets/music/Easy Come Easy Go.js":rl,"/src/assets/music/Eyes Closed.js":ll,"/src/assets/music/It's time.js":cl,"/src/assets/music/Monday.js":dl,"/src/assets/music/Natural.js":gl,"/src/assets/music/On Top Of The World.js":pl,"/src/assets/music/One Day.js":vl,"/src/assets/music/Radioactive.js":wl,"/src/assets/music/Season in the Sun.js":Il,"/src/assets/music/Sharks.js":kl,"/src/assets/music/Shots.js":Sl,"/src/assets/music/Take Me to the Beach.js":Ml,"/src/assets/music/Thunder.js":jl,"/src/assets/music/Wake Up.js":Cl,"/src/assets/music/Warriors.js":El,"/src/assets/music/Whatever It Takes.js":Wl}),o=Object.assign({"/src/assets/images/music/Bad Liar.webp":Ll,"/src/assets/images/music/Bones.webp":zl,"/src/assets/images/music/Born To Be Yours.webp":Nl,"/src/assets/images/music/Brids.webp":Vl,"/src/assets/images/music/Demons.webp":Ql,"/src/assets/images/music/Destination.webp":Gl,"/src/assets/images/music/Easy Come Easy Go.webp":Jl,"/src/assets/images/music/Eyes Closed.webp":$l,"/src/assets/images/music/It's time.webp":e1,"/src/assets/images/music/Monday.webp":o1,"/src/assets/images/music/Natural.webp":s1,"/src/assets/images/music/On Top Of The World.webp":r1,"/src/assets/images/music/One Day.webp":l1,"/src/assets/images/music/Radioactive.webp":c1,"/src/assets/images/music/Season in the Sun.webp":d1,"/src/assets/images/music/Sharks.webp":g1,"/src/assets/images/music/Shots.webp":p1,"/src/assets/images/music/Take Me to the Beach.webp":v1,"/src/assets/images/music/Thunder.webp":w1,"/src/assets/images/music/Wake Up.webp":I1,"/src/assets/images/music/Warriors.webp":k1,"/src/assets/images/music/Whatever It Takes.webp":S1,"/src/assets/images/music/shape.webp":M1});Re.value=await Promise.all(Object.entries(e).map(async([n,s])=>{const r=n.replace(/^.*music\//,"").replace(/\.mp3$/,""),a=`/src/assets/music/${r}.js`,l=`/src/assets/images/music/${r}.webp`,u=t[a]||{default:""},d=o[l]||{default:""};let c={id:r,title:L1(r),audioUrl:s,lyric:u.default,logo:d.default,type:W1.includes(r)?1:0};return Bt.value.hasOwnProperty(r)&&(c.time=Bt.value[r]),c}))}catch(e){console.error("加载音乐数据失败:",e)}};function L1(e){return e.replace(/^\d+_/,"").replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}const K0=Ze(()=>{var e;return((e=Te.value)==null?void 0:e.lyric.split(`
`).map(t=>{var r,a,l;if(!t)return{};const o=(r=t==null?void 0:t.split("]")[0])==null?void 0:r.replace("[",""),n=Number((a=o==null?void 0:o.split(":"))==null?void 0:a[0])||0,s=Number((l=o==null?void 0:o.split(":"))==null?void 0:l[1])||0;return{time:n*60+s,text:t.split("]")[1]}}))||["暂无歌词"]}),Me=D([]),F1={class:"progress"},z1=Le({__name:"progress",props:{callback:{type:Function},progress:{}},setup(e){const t=e,o=D(!1),n=d=>{d.preventDefault(),o.value=!0,window.addEventListener("mousemove",s),window.addEventListener("touchmove",s),window.addEventListener("mouseup",r),window.addEventListener("touchend",r)};function s(d){o.value&&l(d)}function r(){o.value=!1,window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",s)}const a=D(null);function l(d){var T,I;const g=a.value.getBoundingClientRect();let v=((d.clientX??((I=(T=d.touches)==null?void 0:T[0])==null?void 0:I.clientX))-g.left)/g.width;v=Math.max(0,Math.min(1,v)),t.callback(Number(v.toFixed(2)))}function u(d){l(d)}return(d,c)=>(Z(),$("div",F1,[F("div",{class:"custom-slider",ref_key:"sliderRef",ref:a},[F("div",{class:"track",onClick:u},[F("div",{class:"fill",style:n0({width:d.progress*100+"%"})},null,4)]),F("div",{class:"thumb",style:n0({left:d.progress*100+"%"}),onMousedown:n,onTouchstart:n},null,36)],512)]))}}),Fe=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},Qs=Fe(z1,[["__scopeId","data-v-f86261f1"]]),H1="/music-web/assets/music-C0v9vemk.jpg",N1={class:"progress-bar"},U1={class:"progress-bar__logo"},V1=["src"],Y1={class:"progress-bar__info"},Q1={class:"name"},q1={class:"progress-bar__info__progress"},G1={class:"time"},K1=Le({__name:"progressBar",setup(e){const t=s=>{we.value=s*Ce.value,zs(we.value)},o=Ze(()=>Mn(we.value)),n=Ze(()=>Mn(Ce.value));return(s,r)=>{var a,l;return Z(),$("div",N1,[F("div",U1,[F("img",{src:((a=L(Te))==null?void 0:a.logo)||L(H1),alt:"音乐logo"},null,8,V1)]),F("div",Y1,[F("p",Q1,Ke(((l=L(Te))==null?void 0:l.title)||"暂无音乐"),1),F("div",q1,[ne(Qs,{progress:L(Vs),callback:t},null,8,["progress"]),F("p",G1,[F("span",null,Ke(L(o)),1),r[0]||(r[0]=wo()),r[1]||(r[1]=F("i",null,"/",-1)),r[2]||(r[2]=wo()),F("span",null,Ke(L(n)),1)])])])])}}}),J1=Fe(K1,[["__scopeId","data-v-f27a4094"]]),Z1={class:"volume-percent"},$1=Le({__name:"volume",setup(e){const t=Ze(()=>Ee.value===0),o=D(.5);E0(Ee.value);const n=u=>{Ee.value=u,E0(u)},s=()=>{t.value?Ee.value=o.value:(o.value=Ee.value,Ee.value=0),E0(Ee.value)};je(()=>Ee.value,u=>{E0(u)});const r=D(!1),a=()=>{r.value=!0},l=()=>{r.value=!1};return(u,d)=>(Z(),$("div",{class:"contoel-volume",onMouseenter:a,onMouseleave:l},[F("span",{class:ve(["iconfont",{"icon-jingyin":L(t),"icon-yinliang":!L(t)}]),onClick:x0(s,["stop"])},null,2),F("div",{class:ve(["contoel-volume__model",{active:L(r)}])},[ne(Qs,{progress:L(Ee),callback:n},null,8,["progress"]),F("span",Z1,Ke((L(Ee)*100).toFixed(0))+"% ",1)],2)],32))}}),X1=Fe($1,[["__scopeId","data-v-0020b177"]]),eu={class:"control-btn"},tu=Le({__name:"playBtn",setup(e){return(t,o)=>(Z(),$("div",eu,[F("span",{class:"iconfont icon-prev",onClick:o[0]||(o[0]=n=>L(D1)()),title:"上一首"}),L(Be)?(Z(),$("span",{key:1,class:"iconfont icon-zanting",onClick:o[2]||(o[2]=n=>L(Yo)()),title:"暂停"})):(Z(),$("span",{key:0,class:"iconfont icon-bofang",onClick:o[1]||(o[1]=n=>L(Gt)()),title:"播放"})),F("span",{class:"iconfont icon-tingzhi",onClick:o[3]||(o[3]=n=>L(U0)()),title:"停止"}),F("span",{class:"iconfont icon-next",onClick:o[4]||(o[4]=n=>L(Ys)()),title:"下一首"})]))}}),ou=Fe(tu,[["__scopeId","data-v-25589bc6"]]),nu={class:"btn-list"},su=["title","onClick"],iu=["onClick"],ru=Le({__name:"controlBtn",emits:["update:showBorad"],setup(e,{emit:t}){const o={SEQUENCE:"icon-shunxubofang",RANDOM:"icon-suijibofang",SINGLE:"icon-danquxunhuan"},n=t,s=Ze(()=>[{title:"播放列表",icon:"icon-play_list",click:()=>{n("update:showBorad",!0)}},{title:"顺序切换",icon:o[c0.value],click:()=>{c0.value=c0.value===k0.Sequence?k0.Random:c0.value===k0.Random?k0.Single:k0.Sequence}}]),r=["#4fa273","#9a8c53","#a95737","#6576b0","#e6b360","#4c4e53","#8f6aa8","#e9de64"],a=D(!1);return(l,u)=>(Z(),$("div",nu,[(Z(!0),$(ye,null,at(L(s),d=>(Z(),$("span",{class:ve(["iconfont",d.icon]),key:d.icon,title:d.title,onClick:x0(d.click,["stop"])},null,10,su))),128)),F("div",{class:"color-change",onMouseenter:u[0]||(u[0]=d=>a.value=!0),onMouseleave:u[1]||(u[1]=d=>a.value=!1)},[F("div",{class:ve(["color-chose-list",{active:L(a)}])},[(Z(),$(ye,null,at(r,d=>F("span",{key:d,class:ve({active:d===L(Ct)}),style:n0({"--bg":d}),onClick:c=>L(Ds)(d)},null,14,iu)),64))],2)],32)]))}}),au=Fe(ru,[["__scopeId","data-v-7797d37f"]]),lu={style:{width:"100%",height:"100%",overflow:"auto"}},uu=["onClick"],cu=Le({__name:"musicListBoard",props:{show:{},showModifiers:{}},emits:rr(["update:show"],["update:show"]),setup(e,{emit:t}){const o=(u,d)=>{xe.value=d,N0(u),r()},n=Or(e,"show"),s=t,r=()=>{s("update:show",!1)},a=D(null);je(()=>Te.value,u=>{u!=null&&u.logo&&Ut(()=>{a.value.style.background=`url(${u.logo}) no-repeat 100% / cover`})});const l=u=>u.time||u.time===0?"付费音乐":u.type===1?"允许试听":"免费音乐";return(u,d)=>(Z(),$("div",{class:ve(["music-list-board",{active:n.value}]),ref_key:"boardRef",ref:a},[d[1]||(d[1]=F("div",{class:"bg-image"},null,-1)),F("div",lu,[(Z(!0),$(ye,null,at(L(Re),(c,g)=>(Z(),$("div",{key:c.id,class:ve(["music-item",{active:g===L(xe)}]),onClick:x0(m=>o(c,g),["stop"])},[F("span",null,Ke(c.title),1),F("span",null,Ke(l(c)),1)],10,uu))),128))]),F("div",{class:"music-list-down",onClick:x0(r,["stop"])},d[0]||(d[0]=[F("span",{class:"iconfont icon-xia"},null,-1)]))],2))}}),hu=Fe(cu,[["__scopeId","data-v-41565717"]]),du={class:"control-module"},fu={class:"controls-row"},gu=Le({__name:"index",setup(e){const t=D(!1),o=D(null);return je(()=>Te.value,n=>{n!=null&&n.logo&&Ut(()=>o.value.style.background=`url(${n.logo}) no-repeat 100% / cover`)}),(n,s)=>(Z(),$("div",du,[F("div",{ref_key:"controlModuleRef",ref:o,class:"bg-image"},null,512),ne(J1),F("div",fu,[ne(ou),ne(au,{showBorad:L(t),"onUpdate:showBorad":s[0]||(s[0]=r=>re(t)?t.value=r:null)},null,8,["showBorad"]),ne(X1)]),ne(hu,{show:L(t),"onUpdate:show":s[1]||(s[1]=r=>re(t)?t.value=r:null)},null,8,["show"])]))}}),mu=Fe(gu,[["__scopeId","data-v-605206e8"]]),pu=["width","height"],yu=Le({__name:"index",setup(e){const t=Ze(()=>qe.value<768?qe.value-100*u0.value:400),o={centerRadius:100*(qe.value<768?u0.value:1),bars:86,maxBarLength:100*(qe.value<768?u0.value:1),rotateSpeed:.05,barWidth:6*(qe.value<768?u0.value:1)};let n=0;const s=new Image,r=D(null),a=D(null),l=D();let u,d,c;const g=()=>{if(Be.value&&(l.value=requestAnimationFrame(g)),H0.value.getByteFrequencyData(r.value),u.clearRect(0,0,a.value.width,a.value.height),u.fillStyle="transparent",u.fillRect(0,0,a.value.width,a.value.height),u.save(),u.beginPath(),console.log("centerX, centerY",d,c),u.arc(d,c,o.centerRadius,0,Math.PI*2),u.clip(),u.drawImage(s,d-o.centerRadius,c-o.centerRadius,o.centerRadius*2,o.centerRadius*2),u.restore(),u.save(),!Be.value)return;u.translate(d,c),n+=o.rotateSpeed,u.rotate(n*Math.PI/180);const m=Math.PI*2/o.bars;let v=0;for(let T=0;T<o.bars;T++){const z=r.value[T]/255*o.maxBarLength;u.fillStyle=Ct.value,u.save(),u.rotate(v),u.beginPath(),u.roundRect(-o.barWidth/2,-o.centerRadius-z,o.barWidth,z,o.barWidth/2),u.fill(),u.restore(),v+=m}u.restore()};return je(()=>Te.value,m=>{s.src=m.logo,r.value=new Uint8Array(H0.value.frequencyBinCount),s.onload=()=>{Ut(()=>{d=a.value.width/2,c=a.value.height/2,u=a.value.getContext("2d"),g()})}},{deep:!0}),je([Be,qe],()=>{d=a.value.width/2,c=a.value.height/2,l.value&&cancelAnimationFrame(l.value),g()}),(m,v)=>(Z(),$("canvas",{ref_key:"canvasRef",ref:a,width:L(t),height:L(t)},null,8,pu))}}),vu=Fe(yu,[["__scopeId","data-v-3ceec3fa"]]);var bt=function(e,t){return e<t?-1:e>t?1:0},On=function(e){return e.reduce(function(t,o){return t+o},0)},bu=function(){function e(o){this.colors=o}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(o){return o},e}(),wu=function(){function e(r,a,l){return(r<<10)+(a<<5)+l}function t(r){var a=[],l=!1;function u(){a.sort(r),l=!0}return{push:function(d){a.push(d),l=!1},peek:function(d){return l||u(),d===void 0&&(d=a.length-1),a[d]},pop:function(){return l||u(),a.pop()},size:function(){return a.length},map:function(d){return a.map(d)},debug:function(){return l||u(),a}}}function o(r,a,l,u,d,c,g){var m=this;m.r1=r,m.r2=a,m.g1=l,m.g2=u,m.b1=d,m.b2=c,m.histo=g}function n(){this.vboxes=new t(function(r,a){return bt(r.vbox.count()*r.vbox.volume(),a.vbox.count()*a.vbox.volume())})}function s(r,a){if(a.count()){var l=a.r2-a.r1+1,u=a.g2-a.g1+1,d=Math.max.apply(null,[l,u,a.b2-a.b1+1]);if(a.count()==1)return[a.copy()];var c,g,m,v,T=0,I=[],z=[];if(d==l)for(c=a.r1;c<=a.r2;c++){for(v=0,g=a.g1;g<=a.g2;g++)for(m=a.b1;m<=a.b2;m++)v+=r[e(c,g,m)]||0;I[c]=T+=v}else if(d==u)for(c=a.g1;c<=a.g2;c++){for(v=0,g=a.r1;g<=a.r2;g++)for(m=a.b1;m<=a.b2;m++)v+=r[e(g,c,m)]||0;I[c]=T+=v}else for(c=a.b1;c<=a.b2;c++){for(v=0,g=a.r1;g<=a.r2;g++)for(m=a.g1;m<=a.g2;m++)v+=r[e(g,m,c)]||0;I[c]=T+=v}return I.forEach(function(W,C){z[C]=T-W}),function(W){var C,j,M,H,J,te=W+"1",oe=W+"2",he=0;for(c=a[te];c<=a[oe];c++)if(I[c]>T/2){for(M=a.copy(),H=a.copy(),J=(C=c-a[te])<=(j=a[oe]-c)?Math.min(a[oe]-1,~~(c+j/2)):Math.max(a[te],~~(c-1-C/2));!I[J];)J++;for(he=z[J];!he&&I[J-1];)he=z[--J];return M[oe]=J,H[te]=M[oe]+1,[M,H]}}(d==l?"r":d==u?"g":"b")}}return o.prototype={volume:function(r){var a=this;return a._volume&&!r||(a._volume=(a.r2-a.r1+1)*(a.g2-a.g1+1)*(a.b2-a.b1+1)),a._volume},count:function(r){var a=this,l=a.histo;if(!a._count_set||r){var u,d,c,g=0;for(u=a.r1;u<=a.r2;u++)for(d=a.g1;d<=a.g2;d++)for(c=a.b1;c<=a.b2;c++)g+=l[e(u,d,c)]||0;a._count=g,a._count_set=!0}return a._count},copy:function(){var r=this;return new o(r.r1,r.r2,r.g1,r.g2,r.b1,r.b2,r.histo)},avg:function(r){var a=this,l=a.histo;if(!a._avg||r){var u,d,c,g,m=0,v=0,T=0,I=0;if(a.r1===a.r2&&a.g1===a.g2&&a.b1===a.b2)a._avg=[a.r1<<3,a.g1<<3,a.b1<<3];else{for(d=a.r1;d<=a.r2;d++)for(c=a.g1;c<=a.g2;c++)for(g=a.b1;g<=a.b2;g++)m+=u=l[e(d,c,g)]||0,v+=u*(d+.5)*8,T+=u*(c+.5)*8,I+=u*(g+.5)*8;a._avg=m?[~~(v/m),~~(T/m),~~(I/m)]:[~~(8*(a.r1+a.r2+1)/2),~~(8*(a.g1+a.g2+1)/2),~~(8*(a.b1+a.b2+1)/2)]}}return a._avg},contains:function(r){var a=this,l=r[0]>>3;return gval=r[1]>>3,bval=r[2]>>3,l>=a.r1&&l<=a.r2&&gval>=a.g1&&gval<=a.g2&&bval>=a.b1&&bval<=a.b2}},n.prototype={push:function(r){this.vboxes.push({vbox:r,color:r.avg()})},palette:function(){return this.vboxes.map(function(r){return r.color})},size:function(){return this.vboxes.size()},map:function(r){for(var a=this.vboxes,l=0;l<a.size();l++)if(a.peek(l).vbox.contains(r))return a.peek(l).color;return this.nearest(r)},nearest:function(r){for(var a,l,u,d=this.vboxes,c=0;c<d.size();c++)((l=Math.sqrt(Math.pow(r[0]-d.peek(c).color[0],2)+Math.pow(r[1]-d.peek(c).color[1],2)+Math.pow(r[2]-d.peek(c).color[2],2)))<a||a===void 0)&&(a=l,u=d.peek(c).color);return u},forcebw:function(){var r=this.vboxes;r.sort(function(d,c){return bt(On(d.color),On(c.color))});var a=r[0].color;a[0]<5&&a[1]<5&&a[2]<5&&(r[0].color=[0,0,0]);var l=r.length-1,u=r[l].color;u[0]>251&&u[1]>251&&u[2]>251&&(r[l].color=[255,255,255])}},{quantize:function(r,a){if(!Number.isInteger(a)||a<1||a>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!r.length||a<2||a>256||!r.length||a<2||a>256)return!1;for(var l=[],u=new Set,d=0;d<r.length;d++){var c=r[d],g=c.join(",");u.has(g)||(u.add(g),l.push(c))}if(l.length<=a)return new bu(l);var m=function(C){var j,M=new Array(32768);return C.forEach(function(H){j=e(H[0]>>3,H[1]>>3,H[2]>>3),M[j]=(M[j]||0)+1}),M}(r);m.forEach(function(){});var v=function(C,j){var M,H,J,te=1e6,oe=0,he=1e6,Pe=0,$e=1e6,i0=0;return C.forEach(function(r0){(M=r0[0]>>3)<te?te=M:M>oe&&(oe=M),(H=r0[1]>>3)<he?he=H:H>Pe&&(Pe=H),(J=r0[2]>>3)<$e?$e=J:J>i0&&(i0=J)}),new o(te,oe,he,Pe,$e,i0,j)}(r,m),T=new t(function(C,j){return bt(C.count(),j.count())});function I(C,j){for(var M,H=C.size(),J=0;J<1e3;){if(H>=j||J++>1e3)return;if((M=C.pop()).count()){var te=s(m,M),oe=te[0],he=te[1];if(!oe)return;C.push(oe),he&&(C.push(he),H++)}else C.push(M),J++}}T.push(v),I(T,.75*a);for(var z=new t(function(C,j){return bt(C.count()*C.volume(),j.count()*j.volume())});T.size();)z.push(T.pop());I(z,a);for(var W=new n;z.size();)W.push(z.pop());return W}}}().quantize,qs=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};qs.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var P0=function(){};P0.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},P0.prototype.getPalette=function(e,t,o){var n=function(l){var u=l.colorCount,d=l.quality;if(u!==void 0&&Number.isInteger(u)){if(u===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");u=Math.max(u,2),u=Math.min(u,20)}else u=10;return(d===void 0||!Number.isInteger(d)||d<1)&&(d=10),{colorCount:u,quality:d}}({colorCount:t,quality:o}),s=new qs(e),r=function(l,u,d){for(var c,g,m,v,T,I=l,z=[],W=0;W<u;W+=d)g=I[0+(c=4*W)],m=I[c+1],v=I[c+2],((T=I[c+3])===void 0||T>=125)&&(g>250&&m>250&&v>250||z.push([g,m,v]));return z}(s.getImageData().data,s.width*s.height,n.quality),a=wu(r,n.colorCount);return a?a.palette():null},P0.prototype.getColorFromUrl=function(e,t,o){var n=this,s=document.createElement("img");s.addEventListener("load",function(){var r=n.getPalette(s,5,o);t(r[0],e)}),s.src=e},P0.prototype.getImageData=function(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.onload=function(){if(this.status==200){var n=new Uint8Array(this.response);i=n.length;for(var s=new Array(i),r=0;r<n.length;r++)s[r]=String.fromCharCode(n[r]);var a=s.join(""),l=window.btoa(a);t("data:image/png;base64,"+l)}},o.send()},P0.prototype.getColorAsync=function(e,t,o){var n=this;this.getImageData(e,function(s){var r=document.createElement("img");r.addEventListener("load",function(){var a=n.getPalette(r,5,o);t(a[0],this)}),r.src=s})};const _u={class:"music-show-more",title:"购买音频"},Iu={key:0},Au=Le({__name:"Music",setup(e){const t=new P0,o=D("transparent"),n=async()=>{var T;if((T=Te.value)!=null&&T.logo)try{const I=new Image;I.crossOrigin="Anonymous",I.src=Te.value.logo,await new Promise((W,C)=>{I.onload=W,I.onerror=C});const z=await t.getColor(I,5);o.value=`rgba(${z[0]}, ${z[1]}, ${z[2]}, .35)`}catch(I){console.error("获取背景色失败:",I),o.value="transparent"}};Fo(()=>{Rs()});const s=Ze(()=>K0.value.find(T=>T.time>=we.value)),r=D(),a=D();let l=0,u=D(qe.value<768?40*u0.value:40),d=0;je(()=>K0.value,()=>{l=r.value.clientHeight,d=(K0.value.length-1)*u.value-l+u.value/2,n()}),je(()=>qe.value,T=>{u.value=T<768?40*u0.value:40}),je(()=>we.value,()=>{let I=K0.value.findIndex(z=>z.time>=we.value)*u.value+u.value/2-l/2;I<0&&(I=0),I>d&&(I=d),a.value.style.transform=`translateY(-${I*(qe.value<768?u0.value:1)}px)`});const c=D(0),g=()=>{if(isNaN(c.value)||c.value<=0){Me.value.unshift("购买时长必须大于0");return}O1(Te.value.id,c.value),clearTimeout(Pt.value),Pt.value=null,c.value=0,Me.value.unshift("购买成功，请继续享受音乐吧"),ko.value=!1},m=D("image"),v=T=>{m.value=T};return(T,I)=>{var W,C;const z=us("close");return Z(),$("div",{class:"music",style:n0({"--bg":L(o)})},[F("div",{class:ve(["music-logo",{active:L(m)==="image"}]),onClick:I[0]||(I[0]=x0(j=>v("lrc"),["stop"]))},[ne(vu)],2),F("div",{class:ve(["music-lrc",{active:L(m)==="lrc"}]),ref_key:"musicLrc",ref:r,onClick:I[1]||(I[1]=x0(j=>v("image"),["stop"]))},[F("ul",{class:"music-lrc-content",ref_key:"musicLrcContent",ref:a},[(Z(!0),$(ye,null,at(L(K0),j=>{var M;return Z(),$("li",{class:ve({active:(j==null?void 0:j.time)===((M=L(s))==null?void 0:M.time)}),style:n0({height:`${L(u)}px`})},Ke(j==null?void 0:j.text),7)}),256))],512)],2),mo((Z(),$("div",_u,[I[3]||(I[3]=F("span",{class:"iconfont icon-gengduo"},null,-1)),F("div",{class:ve(["music-more-content",{active:L(ko)}])},[F("p",null,"当前可听时长："+Ke((W=L(Te))!=null&&W.hasOwnProperty("time")?L(Te).time+" 秒":"无需购买"),1),(C=L(Te))!=null&&C.hasOwnProperty("time")?(Z(),$("div",Iu,[mo(F("input",{"onUpdate:modelValue":I[2]||(I[2]=j=>re(c)?c.value=j:null),type:"number",placeholder:"请输入购买时长"},null,512),[[ya,L(c)]]),F("button",{onClick:x0(g,["stop"])},"购买")])):Bs("",!0)],2)])),[[z,!0]])],4)}}}),ku=Fe(Au,[["__scopeId","data-v-c5bfa53b"]]),Tu={key:0,class:"model-list"},Su=Le({__name:"model",setup(e){let t=null;return je(()=>Me.value,o=>{if(o.length<=0){clearInterval(t),t=null;return}o.length>3&&Me.value.splice(3,o.length-1),!t&&(t=setInterval(()=>{Me.value.pop()},3e3))},{immediate:!0,deep:!0}),(o,n)=>L(Me).length?(Z(),$("div",Tu,[(Z(!0),$(ye,null,at(L(Me),(s,r)=>(Z(),$("div",{class:"model-item active",style:n0({"--mt":r*150+"%"}),key:s+r},Ke(s),5))),128))])):Bs("",!0)}}),xu=Fe(Su,[["__scopeId","data-v-2f988715"]]),Mu={class:"container"},Ou=Le({__name:"App",setup(e){return Fo(()=>{R1(),window.addEventListener("resize",Ao)}),zo(()=>{Us(),window.removeEventListener("resize",Ao)}),(t,o)=>{const n=us("close");return mo((Z(),$("div",Mu,[ne(ku),ne(mu),ne(xu)])),[[n,!1]])}}}),ju=Fe(Ou,[["__scopeId","data-v-4ef91500"]]);window._iconfont_svg_string_4902328='<svg><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M512 269.254656a97.10978845 97.10978845 0 1 0 0-194.16132267 97.10978845 97.10978845 0 0 0 0 194.16132267z"  ></path><path d="M512 512m-97.10978845 0a97.10978845 97.10978845 0 1 0 194.2195769 0 97.10978845 97.10978845 0 1 0-194.2195769 0Z"  ></path><path d="M512 948.90666667a97.10978845 97.10978845 0 1 0 0-194.21957689 97.10978845 97.10978845 0 0 0 0 194.21957689z"  ></path></symbol><symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024"><path d="M955.73333333 474.45333333c-20.48 0-34.13333333 13.65333333-34.13333333 34.13333334v92.16c0 116.05333333-92.16 211.62666667-211.62666667 211.62666666H180.90666667l44.37333333-40.96c6.82666667-6.82666667 13.65333333-17.06666667 13.65333333-27.30666666 0-20.48-17.06666667-37.54666667-37.54666666-37.54666667-10.24 0-23.89333333 3.41333333-30.72 10.24l-116.05333334 105.81333333c-17.06666667 13.65333333-13.65333333 37.54666667 0 51.2l116.05333334 102.4c6.82666667 6.82666667 20.48 13.65333333 30.72 13.65333334 20.48 0 37.54666667-13.65333333 40.96-34.13333334 0-13.65333333-6.82666667-23.89333333-17.06666667-30.72l-51.2-47.78666666h532.48c157.01333333 0 283.30666667-126.29333333 283.30666667-276.48v-92.16c0-20.48-13.65333333-34.13333333-34.13333334-34.13333334zM68.26666667 559.78666667c20.48 0 34.13333333-13.65333333 34.13333333-34.13333334v-95.57333333c0-119.46666667 95.57333333-215.04 211.62666667-218.45333333h529.06666666l-44.37333333 40.96c-6.82666667 6.82666667-13.65333333 17.06666667-13.65333333 27.30666666 0 20.48 17.06666667 37.54666667 37.54666666 37.54666667 10.24 0 23.89333333-3.41333333 30.72-10.24l112.64-105.81333333c17.06666667-13.65333333 13.65333333-37.54666667 0-51.2l-116.05333333-102.4c-6.82666667-6.82666667-20.48-13.65333333-30.72-13.65333334-20.48 0-37.54666667 13.65333333-40.96 34.13333334 0 13.65333333 6.82666667 23.89333333 17.06666667 30.72l51.2 47.78666666H317.44C160.42666667 146.77333333 34.13333333 273.06666667 34.13333333 433.49333333v92.16c0 20.48 13.65333333 34.13333333 34.13333334 34.13333334z"  ></path><path d="M546.13333333 682.66666667V341.33333333h-51.2L409.6 402.77333333l17.06666667 44.37333334 64.85333333-44.37333334V682.66666667z"  ></path></symbol><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M325.456471 862.280661"  ></path><path d="M882.057788 862.280661"  ></path><path d="M236.028491 877.160382"  ></path><path d="M960.132455 877.160382"  ></path><path d="M63.683483 788.736998"  ></path><path d="M958.469023 788.736998"  ></path><path d="M64.77753 858.792098"  ></path><path d="M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875z"  ></path><path d="M959.523505 858.792098"  ></path></symbol><symbol id="icon-yinliang" viewBox="0 0 1024 1024"><path d="M468.992 169.6c29.312-22.528 64.128-40.832 101.312-25.088 36.864 15.552 48.64 53.12 53.76 89.984 5.248 37.824 5.248 89.92 5.248 154.688V634.88c0 64.768 0 116.864-5.184 154.688-5.12 36.928-16.96 74.432-53.76 89.984-37.248 15.744-72.064-2.56-101.376-25.024-30.016-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.616-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.416 0-71.68-1.984-20.288-2.112-39.104-6.72-56.064-18.24-32.192-22.016-44.544-54.208-49.28-83.84C52.864 570.24 53.248 545.92 53.568 526.464a907.84 907.84 0 0 0 0-28.928C53.184 478.08 52.864 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.128 55.936-18.176a750.72 750.72 0 0 1 71.68-2.048h1.728c32.96 0 51.84-2.688 67.392-9.152 15.488-6.4 30.72-17.728 53.76-41.216l1.984-2.048c44.8-45.76 80.896-82.56 110.912-105.6z m38.976 50.752c-25.92 19.84-58.88 53.44-106.112 101.632-25.152 25.6-47.616 44.288-75.072 55.68-27.328 11.264-56.32 13.952-91.84 13.952-30.656 0-51.2 0-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.184-22.144 40.96-2.56 16-2.24 32.512-1.92 51.136l0.128 19.2c0 6.592-0.064 12.992-0.192 19.136-0.256 18.56-0.512 35.072 1.984 51.136 3.136 19.712 9.728 32.512 22.144 40.96 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.096 1.664 66.752 1.664 35.456 0 64.512 2.688 91.84 14.016 27.456 11.328 49.92 29.952 75.072 55.616 47.232 48.192 80.192 81.728 106.112 101.696 27.008 20.736 35.136 17.856 37.44 16.832 2.624-1.088 10.56-5.44 15.296-39.808 4.544-32.896 4.608-80.512 4.608-148.672V391.936c0-68.096 0-115.712-4.608-148.608-4.736-34.368-12.672-38.784-15.36-39.872-2.24-0.96-10.368-3.84-37.376 16.896zM705.92 358.592a32 32 0 0 1 44.864 6.016c30.912 40.448 49.28 91.776 49.28 147.392s-18.368 106.88-49.28 147.392a32 32 0 1 1-50.88-38.784A178.56 178.56 0 0 0 736 512a178.56 178.56 0 0 0-36.096-108.608 32 32 0 0 1 6.016-44.8zM876.928 277.056a32 32 0 0 0-47.168 43.2c48.448 52.992 76.928 119.68 76.928 191.744s-28.48 138.752-76.928 191.68a32 32 0 0 0 47.168 43.264c58.24-63.616 93.76-145.408 93.76-234.944 0-89.6-35.52-171.328-93.76-234.944z"  ></path></symbol><symbol id="icon-jingyin" viewBox="0 0 1024 1024"><path d="M62.72 62.72a32 32 0 0 1 45.248 0l252.032 252.032c1.472 1.216 2.816 2.56 4.096 4.096l597.184 597.184a32 32 0 1 1-45.248 45.248l-286.72-286.72c-0.192 46.592-1.088 85.184-5.184 114.944-5.12 36.928-16.96 74.432-53.76 89.984-37.184 15.744-72.064-2.56-101.376-25.024-29.952-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.552-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.352 0-71.68-1.984-20.288-2.112-39.04-6.72-56-18.24-32.256-22.016-44.608-54.208-49.28-83.84C52.8 570.24 53.248 545.984 53.568 526.464a908.032 908.032 0 0 0 0-28.928C53.248 478.08 52.8 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.064 56-18.176 19.328-2.048 43.136-2.048 71.68-2.048h1.664c6.208 0 11.84 0.128 17.152 0.192 11.136 0.192 20.544 0.32 30.016-0.448L62.72 107.968a32 32 0 0 1 0-45.248z m230.528 327.872a369.088 369.088 0 0 1-45.824 1.216l-12.48-0.192c-30.592 0-51.136 0.064-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.248-22.08 40.96-2.56 16-2.304 32.512-2.048 51.136a1252.864 1252.864 0 0 1 0 38.336c-0.256 18.56-0.512 35.072 2.048 51.2 3.072 19.648 9.664 32.448 22.08 40.896 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.16 1.664 66.752 1.664 35.52 0 64.576 2.752 91.904 14.016 27.392 11.328 49.92 30.016 75.008 55.68 47.232 48.128 80.192 81.728 106.112 101.632 27.008 20.736 35.136 17.856 37.44 16.896 2.624-1.152 10.56-5.504 15.36-39.872 4.48-32.896 4.608-80.512 4.608-148.672V610.56L334.464 379.776a136.128 136.128 0 0 1-41.216 10.816zM449.28 278.4c30.72-30.592 53.632-52.288 72.064-65.088a66.56 66.56 0 0 1 19.328-10.112c3.2-0.896 4.288-0.384 4.672-0.256 2.688 1.152 10.624 5.568 15.36 40 4.544 32.96 4.608 80.704 4.608 148.992v13.44a32 32 0 1 0 64 0V389.12c0-64.896 0-117.12-5.184-155.008-5.12-36.928-16.96-74.56-53.76-90.112-31.808-13.504-62.144 0.512-85.376 16.64-24.064 16.576-51.008 42.624-80.896 72.32a32 32 0 0 0 45.12 45.44zM705.024 401.92a32 32 0 0 1 45.056 4.48c31.104 37.888 49.92 84.992 49.92 136.32 0 22.4-3.584 44.032-10.24 64.512a32 32 0 0 1-60.864-19.84c4.608-14.208 7.104-29.184 7.104-44.672 0-35.2-12.8-68.224-35.392-95.744a32 32 0 0 1 4.48-45.056zM875.776 318.528a32 32 0 0 0-44.864 45.632c48.192 47.36 75.776 106.304 75.776 169.216 0 52.288-19.072 101.76-53.12 144.128a32 32 0 0 0 49.92 40.064c42.112-52.48 67.2-115.712 67.2-184.192 0-82.624-36.416-157.312-94.912-214.848z"  ></path></symbol><symbol id="icon-suijibofang" viewBox="0 0 1024 1024"><path d="M786.84698283 313.42482205c-52.18952533 0-182.34024846 129.53597497-277.37816064 221.35344696C365.37915961 674.00117817 229.27190357 809.28411307 120.33696541 809.28411307l-67.00634454 0c-27.38421987 0-49.58616235-22.21707833-49.58616234-49.58616235s22.20194247-49.58616235 49.58616234-49.58616235l67.00634454 0c68.84010894 0 208.21670571-138.44632462 320.20791864-246.65241372 136.30169315-131.69108423 254.01425123-249.2068773 346.30326272-249.2068773l63.95356274 0-67.85860836-65.79547818c-19.38085547-19.33428395-19.41112718-48.81306965-0.06520035-68.18461128 19.34476174-19.37736249 50.74114219-19.41578411 70.12316274-0.07451534l152.69846016 152.31889977c9.32134571 9.29805995 14.55718059 21.88874752 14.55718059 35.04760946 0 13.15769799-5.23583488 25.71927779-14.55718059 35.01733774L852.99989959 454.79934862c-9.67762034 9.65549853-22.35330105 14.24747861-35.02898062 14.24747861-12.70478734 0-25.41073977-5.32082802-35.09418098-15.01824227-19.34592683-19.37154162-19.31449117-51.69237219 0.06520036-71.02665501l67.85860835-69.5771079L786.84698283 313.42482205zM852.99989959 568.50323911c-19.38201941-19.3412699-50.77839986-19.31099819-70.12316274 0.0663643-19.34592683 19.37037653-19.31449117 52.6307931 0.06520036 71.96507705l67.85860836 69.57594397-63.95356274 0c-40.72471211 0-108.76029383-60.24179029-176.21489209-123.3046676-19.99793152-18.69974301-51.38383303-18.593792-70.08124815 1.39598962-18.71022194 19.98861767-17.66235591 52.78564466 2.3367407 71.47956566 102.76650325 96.09509205 172.08513763 149.60027079 243.95939954 149.60027079l63.95356274 0-67.85860836 65.79198521c-19.38085547 19.33428395-19.41112718 49.76197063-0.06520036 69.13351111 9.68460629 9.69741312 22.38939363 14.07399822 35.09418098 14.07399822 12.67568071 0 25.35136029-5.06701255 35.02898062-14.72251107L1005.69835975 791.10946702c9.32134571-9.29922503 14.55718059-21.97723363 14.55718059-35.13609557 0-13.15769799-5.23583488-25.80776391-14.55718059-35.10698894L852.99989959 568.50323911zM53.32945693 313.42482205l67.00634453 0c52.2605477 0 130.16352995 66.50919026 192.18785621 122.81449926 9.502976 8.62044046 21.42768583 13.8131968 33.32794596 13.8131968 13.48602994 0 26.93480221-4.99948317 36.71720846-15.76688412 18.41216171-20.26106197 16.90672811-53.27464903-3.36597675-71.67866084-96.99276345-88.04282709-178.13248569-148.35331072-258.86703388-148.35331072l-67.00634453 0c-27.38421987 0-49.58616235 22.21707833-49.58616235 49.58616235S25.94640213 313.42482205 53.32945693 313.42482205z"  ></path></symbol><symbol id="icon-shunxubofang" viewBox="0 0 1280 1024"><path d="M1121.80831062 243.68144937A373.40506031 373.40506031 0 0 1 1231.88943875 509.4737225c0 34.21394156-4.59385594 68.15362312-13.71300187 100.79056875a42.40746 42.40746 0 0 1-81.66093094-22.62645469 291.88125938 291.88125938 0 0 0 10.62757687-78.16411406c0-160.510695-130.61634937-291.12704437-291.12704437-291.12704531H461.52723687v75.07868906c0 24.13488469-16.79842781 33.45972656-37.26508406 20.77519969L243.52477906 202.23389938c-20.46665625-12.68452781-20.67235125-33.76826906-0.41139-46.86418594L424.70782531 38.08925844c20.22667875-13.06163531 36.81941156-4.04533594 36.81941156 20.05526625v75.42151406h394.48880157c100.37917875 0 194.79320156 39.11634 265.79227218 110.11541063z m-70.00487812 573.06637782c20.50093875 12.68452781 20.70663375 33.76826906 0.4456725 46.82990344l-181.59443625 117.280455c-20.22667875 13.09591781-36.81941156 4.07961844-36.81941156-20.02098375V885.38140531H407.875115c-100.37917875 0-194.79320156-39.0820575-265.79227219-110.11541062A373.43934281 373.43934281 0 0 1 32.00171469 509.4737225c0-72.61034906 20.74091625-143.09518219 59.99438625-203.84378344a42.3731775 42.3731775 0 1 1 71.20476562 46.04140594 290.03000438 290.03000438 0 0 0-46.41851343 157.8023775c0 160.5449775 130.58206688 291.12704437 291.09276187 291.12704437H833.86953969v-75.07868906c0-24.10060219 16.76414531-33.45972656 37.23080156-20.74091625l180.73737375 111.96666563z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M349.5936 338.5344a30.3104 30.3104 0 0 1 17.6128 5.9392l200.0896 143.36a30.72 30.72 0 0 1 0 49.9712l-200.0896 143.36a30.3104 30.3104 0 0 1-17.6128 5.9392A30.72 30.72 0 0 1 318.6688 655.36V368.64a30.72 30.72 0 0 1 30.9248-30.9248m0-51.2a81.92 81.92 0 0 0-81.92 81.92V655.36a81.92 81.92 0 0 0 81.92 81.92 81.92 81.92 0 0 0 47.3088-15.36l200.0896-143.36a81.92 81.92 0 0 0 0-133.5296l-200.0896-143.36a81.92 81.92 0 0 0-47.3088-14.9504zM715.5712 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 0 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M674.4064 338.5344A30.72 30.72 0 0 1 705.3312 368.64v286.72a30.72 30.72 0 0 1-30.9248 30.9248 30.3104 30.3104 0 0 1-17.6128-5.9392l-200.0896-143.36a30.72 30.72 0 0 1 0-49.9712l200.0896-143.36a30.3104 30.3104 0 0 1 17.6128-5.9392m0-51.2a81.92 81.92 0 0 0-47.3088 15.36l-200.0896 143.36a81.92 81.92 0 0 0 0 133.5296l200.0896 143.36a81.92 81.92 0 0 0 47.3088 15.36 81.92 81.92 0 0 0 81.92-81.92V368.64a81.92 81.92 0 0 0-81.92-81.92zM308.4288 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 1 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-play_list" viewBox="0 0 1024 1024"><path d="M42.666667 490.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h896a21.333333 21.333333 0 0 1 0 42.666667H64a21.333333 21.333333 0 0 1-21.333333-21.333333z m490.666666 362.666666H64a21.333333 21.333333 0 0 0 0 42.666667h469.333333a21.333333 21.333333 0 0 0 0-42.666667zM64 128h896a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m916.42 612.493333c-6.666667-22.053333-16.44-40.773333-29.04-55.626666a107.46 107.46 0 0 0-20.493333-18.78c-8.813333-8.806667-16.526667-20.666667-22.36-34.42-9.033333-21.333333-11.813333-42.666667-12.553334-56.78a21.333333 21.333333 0 0 0-42.666666 1.113333v251.56c-18.333333-10.946667-40.666667-16.893333-64-16.893333-27.38 0-53.333333 8.173333-73.14 23.013333-21.333333 16-33.526667 38.666667-33.526667 62.32s12.22 46.34 33.526667 62.32C736 973.16 761.953333 981.333333 789.333333 981.333333s53.333333-8.173333 73.14-23.013333c21.333333-16 33.526667-38.666667 33.526667-62.32v-204.733333q3.213333 3.58 6.586667 6.813333a21.473333 21.473333 0 0 0 2.953333 2.366667 64.24 64.24 0 0 1 13.333333 12c8.666667 10.22 15.84 24.18 20.733334 40.373333a21.333333 21.333333 0 0 0 40.84-12.346667z"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path><path d="M415.8 679.9c5.9 0 11.5-1.6 16.2-4.5l231.1-134.6c10.9-5.2 18.5-16.3 18.5-29.2 0-11.9-6.4-22.3-16-27.8L439.7 352.2c-5.8-6.7-14.4-10.9-23.9-10.9-17.6 0-31.8 14.4-31.8 32.1 0 0.6 0 1.2 0.1 1.8l-0.4 0.2 0.5 269c-0.1 1.1-0.2 2.2-0.2 3.4 0 17.7 14.3 32.1 31.8 32.1z"  ></path><path d="M909.8 306.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S128.8 723.8 128.8 512.2 300.4 129.1 512 129.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.6 81.9 584.9 64.5 512 64.5 264.7 64.5 64.3 265 64.3 512.2S264.7 959.9 512 959.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M910.8 303.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S129.8 720.8 129.8 509.2 301.4 126.1 513 126.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C654.6 78.9 585.9 61.5 513 61.5 265.7 61.5 65.3 262 65.3 509.2S265.7 956.9 513 956.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path><path d="M385.4 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.6 0 32-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9zM578.9 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.5 0 31.9-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9z"  ></path><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path></symbol><symbol id="icon-tingzhi" viewBox="0 0 1024 1024"><path d="M772.9 217.3c0 11.5 6.1 22.1 16.1 27.8 10 5.7 22.3 5.7 32.2 0 10-5.7 16.1-16.3 16.1-27.8s-6.1-22.1-16.1-27.8c-10-5.7-22.3-5.7-32.2 0-10 5.7-16.1 16.3-16.1 27.8z"  ></path><path d="M910.1 306.3c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.9 42.1 174.8 0 211.7-171.7 383.5-383.5 383.5-211.7 0-383.6-171.7-383.6-383.5S300.3 128.6 512 128.6c62.5 0 121.6 15 173.7 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.7 81.4 584.9 64 512 64 264.5 64 64 264.6 64 512s200.5 448 448 448 448-200.5 448-448c0-74.2-18-144.1-49.9-205.7z"  ></path><path d="M417.9 354.5h188.2c34.6 0 62.7 28.2 62.7 63v189c0 34.8-28.1 63-62.7 63H417.9c-34.6 0-62.7-28.2-62.7-63v-189c0-34.8 28.1-63 62.7-63z"  ></path></symbol></svg>',(e=>{var t=(o=(o=document.getElementsByTagName("script"))[o.length-1]).getAttribute("data-injectcss"),o=o.getAttribute("data-disable-injectsvg");if(!o){var n,s,r,a,l,u=function(g,m){m.parentNode.insertBefore(g,m)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(g){console&&console.log(g)}}n=function(){var g,m=document.createElement("div");m.innerHTML=e._iconfont_svg_string_4902328,(m=m.getElementsByTagName("svg")[0])&&(m.setAttribute("aria-hidden","true"),m.style.position="absolute",m.style.width=0,m.style.height=0,m.style.overflow="hidden",m=m,(g=document.body).firstChild?u(m,g.firstChild):g.appendChild(m))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(s=function(){document.removeEventListener("DOMContentLoaded",s,!1),n()},document.addEventListener("DOMContentLoaded",s,!1)):document.attachEvent&&(r=n,a=e.document,l=!1,c(),a.onreadystatechange=function(){a.readyState=="complete"&&(a.onreadystatechange=null,d())})}function d(){l||(l=!0,r())}function c(){try{a.documentElement.doScroll("left")}catch{return void setTimeout(c,50)}d()}})(window);const Bu=(e,t)=>{e.addEventListener("click",o=>{o.stopPropagation(),ko.value=t})},Cu={mounted(e,t){const{value:o}=t;Bu(e,o)}},jn={close:Cu},Pu={install(e){Object.keys(jn).forEach(t=>{e.directive(t,jn[t])})}},Gs=Ia(ju);Gs.use(Pu);Gs.mount("#app");

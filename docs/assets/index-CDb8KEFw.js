(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Io(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}const U={},jt=[],Ke=()=>{},$s=()=>!1,O0=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),So=e=>e.startsWith("onUpdate:"),ae=Object.assign,To=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Ks=Object.prototype.hasOwnProperty,Y=(e,t)=>Ks.call(e,t),P=Array.isArray,Pt=e=>C0(e)==="[object Map]",Cn=e=>C0(e)==="[object Set]",L=e=>typeof e=="function",se=e=>typeof e=="string",dt=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",En=e=>(ee(e)||L(e))&&L(e.then)&&L(e.catch),jn=Object.prototype.toString,C0=e=>jn.call(e),qs=e=>C0(e).slice(8,-1),Pn=e=>C0(e)==="[object Object]",xo=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=Io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),E0=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Qs=/-(\w)/g,Be=E0(e=>e.replace(Qs,(t,o)=>o?o.toUpperCase():"")),Gs=/\B([A-Z])/g,gt=E0(e=>e.replace(Gs,"-$1").toLowerCase()),Ao=E0(e=>e.charAt(0).toUpperCase()+e.slice(1)),$0=E0(e=>e?`on${Ao(e)}`:""),pe=(e,t)=>!Object.is(e,t),m0=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},Bn=(e,t,o,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:o})},no=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Jo;const j0=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(e){if(P(e)){const t={};for(let o=0;o<e.length;o++){const n=e[o],s=se(n)?ei(n):nt(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(se(e)||ee(e))return e}const Js=/;(?![^(]*\))/g,Zs=/:([^]+)/,Xs=/\/\*[^]*?\*\//g;function ei(e){const t={};return e.replace(Xs,"").split(Js).forEach(o=>{if(o){const n=o.split(Zs);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ve(e){let t="";if(se(e))t=e;else if(P(e))for(let o=0;o<e.length;o++){const n=ve(e[o]);n&&(t+=n+" ")}else if(ee(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const ti="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oi=Io(ti);function Dn(e){return!!e||e===""}const Rn=e=>!!(e&&e.__v_isRef===!0),qe=e=>se(e)?e:e==null?"":P(e)||ee(e)&&(e.toString===jn||!L(e.toString))?Rn(e)?qe(e.value):JSON.stringify(e,Ln,2):String(e),Ln=(e,t)=>Rn(t)?Ln(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[n,s],r)=>(o[K0(n,r)+" =>"]=s,o),{})}:Cn(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>K0(o))}:dt(t)?K0(t):ee(t)&&!P(t)&&!Pn(t)?String(t):t,K0=(e,t="")=>{var o;return dt(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class ni{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].pause();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].resume();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].resume()}}run(t){if(this._active){const o=Se;try{return Se=this,t()}finally{Se=o}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){this._active=!1;let o,n;for(o=0,n=this.effects.length;o<n;o++)this.effects[o].stop();for(this.effects.length=0,o=0,n=this.cleanups.length;o<n;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){for(o=0,n=this.scopes.length;o<n;o++)this.scopes[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function si(){return Se}let Q;const q0=new WeakSet;class Wn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,q0.has(this)&&(q0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zo(this),Nn(this);const t=Q,o=Ee;Q=this,Ee=!0;try{return this.fn()}finally{zn(this),Q=t,Ee=o,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Oo(t);this.deps=this.depsTail=void 0,Zo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?q0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){so(this)&&this.run()}get dirty(){return so(this)}}let Fn=0,Gt,Jt;function Hn(e,t=!1){if(e.flags|=8,t){e.next=Jt,Jt=e;return}e.next=Gt,Gt=e}function ko(){Fn++}function Mo(){if(--Fn>0)return;if(Jt){let t=Jt;for(Jt=void 0;t;){const o=t.next;t.next=void 0,t.flags&=-9,t=o}}let e;for(;Gt;){let t=Gt;for(Gt=void 0;t;){const o=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=o}}if(e)throw e}function Nn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zn(e){let t,o=e.depsTail,n=o;for(;n;){const s=n.prevDep;n.version===-1?(n===o&&(o=s),Oo(n),ii(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=o}function so(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Un(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Un(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===t0))return;e.globalVersion=t0;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!so(e)){e.flags&=-3;return}const o=Q,n=Ee;Q=e,Ee=!0;try{Nn(e);const s=e.fn(e._value);(t.version===0||pe(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Q=o,Ee=n,zn(e),e.flags&=-3}}function Oo(e,t=!1){const{dep:o,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),o.subs===e&&(o.subs=n,!n&&o.computed)){o.computed.flags&=-5;for(let r=o.computed.deps;r;r=r.nextDep)Oo(r,!0)}!t&&!--o.sc&&o.map&&o.map.delete(o.key)}function ii(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}let Ee=!0;const Vn=[];function mt(){Vn.push(Ee),Ee=!1}function pt(){const e=Vn.pop();Ee=e===void 0?!0:e}function Zo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=Q;Q=void 0;try{t()}finally{Q=o}}}let t0=0;class ri{constructor(t,o){this.sub=t,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class P0{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Q||!Ee||Q===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Q)o=this.activeLink=new ri(Q,this),Q.deps?(o.prevDep=Q.depsTail,Q.depsTail.nextDep=o,Q.depsTail=o):Q.deps=Q.depsTail=o,Yn(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const n=o.nextDep;n.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=n),o.prevDep=Q.depsTail,o.nextDep=void 0,Q.depsTail.nextDep=o,Q.depsTail=o,Q.deps===o&&(Q.deps=n)}return o}trigger(t){this.version++,t0++,this.notify(t)}notify(t){ko();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Mo()}}}function Yn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Yn(n)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const io=new WeakMap,St=Symbol(""),ro=Symbol(""),o0=Symbol("");function le(e,t,o){if(Ee&&Q){let n=io.get(e);n||io.set(e,n=new Map);let s=n.get(o);s||(n.set(o,s=new P0),s.map=n,s.key=o),s.track()}}function et(e,t,o,n,s,r){const a=io.get(e);if(!a){t0++;return}const l=u=>{u&&u.trigger()};if(ko(),t==="clear")a.forEach(l);else{const u=P(e),f=u&&xo(o);if(u&&o==="length"){const c=Number(n);a.forEach((g,m)=>{(m==="length"||m===o0||!dt(m)&&m>=c)&&l(g)})}else switch((o!==void 0||a.has(void 0))&&l(a.get(o)),f&&l(a.get(o0)),t){case"add":u?f&&l(a.get("length")):(l(a.get(St)),Pt(e)&&l(a.get(ro)));break;case"delete":u||(l(a.get(St)),Pt(e)&&l(a.get(ro)));break;case"set":Pt(e)&&l(a.get(St));break}}Mo()}function kt(e){const t=V(e);return t===e?t:(le(t,"iterate",o0),Me(e)?t:t.map(ue))}function B0(e){return le(e=V(e),"iterate",o0),e}const ai={__proto__:null,[Symbol.iterator](){return Q0(this,Symbol.iterator,ue)},concat(...e){return kt(this).concat(...e.map(t=>P(t)?kt(t):t))},entries(){return Q0(this,"entries",e=>(e[1]=ue(e[1]),e))},every(e,t){return Ze(this,"every",e,t,void 0,arguments)},filter(e,t){return Ze(this,"filter",e,t,o=>o.map(ue),arguments)},find(e,t){return Ze(this,"find",e,t,ue,arguments)},findIndex(e,t){return Ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ze(this,"findLast",e,t,ue,arguments)},findLastIndex(e,t){return Ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return G0(this,"includes",e)},indexOf(...e){return G0(this,"indexOf",e)},join(e){return kt(this).join(e)},lastIndexOf(...e){return G0(this,"lastIndexOf",e)},map(e,t){return Ze(this,"map",e,t,void 0,arguments)},pop(){return Ut(this,"pop")},push(...e){return Ut(this,"push",e)},reduce(e,...t){return Xo(this,"reduce",e,t)},reduceRight(e,...t){return Xo(this,"reduceRight",e,t)},shift(){return Ut(this,"shift")},some(e,t){return Ze(this,"some",e,t,void 0,arguments)},splice(...e){return Ut(this,"splice",e)},toReversed(){return kt(this).toReversed()},toSorted(e){return kt(this).toSorted(e)},toSpliced(...e){return kt(this).toSpliced(...e)},unshift(...e){return Ut(this,"unshift",e)},values(){return Q0(this,"values",ue)}};function Q0(e,t,o){const n=B0(e),s=n[t]();return n!==e&&!Me(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=o(r.value)),r}),s}const li=Array.prototype;function Ze(e,t,o,n,s,r){const a=B0(e),l=a!==e&&!Me(e),u=a[t];if(u!==li[t]){const g=u.apply(e,r);return l?ue(g):g}let f=o;a!==e&&(l?f=function(g,m){return o.call(this,ue(g),m,e)}:o.length>2&&(f=function(g,m){return o.call(this,g,m,e)}));const c=u.call(a,f,n);return l&&s?s(c):c}function Xo(e,t,o,n){const s=B0(e);let r=o;return s!==e&&(Me(e)?o.length>3&&(r=function(a,l,u){return o.call(this,a,l,u,e)}):r=function(a,l,u){return o.call(this,a,ue(l),u,e)}),s[t](r,...n)}function G0(e,t,o){const n=V(e);le(n,"iterate",o0);const s=n[t](...o);return(s===-1||s===!1)&&Po(o[0])?(o[0]=V(o[0]),n[t](...o)):s}function Ut(e,t,o=[]){mt(),ko();const n=V(e)[t].apply(e,o);return Mo(),pt(),n}const ui=Io("__proto__,__v_isRef,__isVue"),$n=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dt));function ci(e){dt(e)||(e=String(e));const t=V(this);return le(t,"has",e),t.hasOwnProperty(e)}class Kn{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,n){if(o==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return r;if(o==="__v_raw")return n===(s?r?wi:Jn:r?Gn:Qn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=P(t);if(!s){let u;if(a&&(u=ai[o]))return u;if(o==="hasOwnProperty")return ci}const l=Reflect.get(t,o,ie(t)?t:n);return(dt(o)?$n.has(o):ui(o))||(s||le(t,"get",o),r)?l:ie(l)?a&&xo(o)?l:l.value:ee(l)?s?Zn(l):Eo(l):l}}class qn extends Kn{constructor(t=!1){super(!1,t)}set(t,o,n,s){let r=t[o];if(!this._isShallow){const u=xt(r);if(!Me(n)&&!xt(n)&&(r=V(r),n=V(n)),!P(t)&&ie(r)&&!ie(n))return u?!1:(r.value=n,!0)}const a=P(t)&&xo(o)?Number(o)<t.length:Y(t,o),l=Reflect.set(t,o,n,ie(t)?t:s);return t===V(s)&&(a?pe(n,r)&&et(t,"set",o,n):et(t,"add",o,n)),l}deleteProperty(t,o){const n=Y(t,o);t[o];const s=Reflect.deleteProperty(t,o);return s&&n&&et(t,"delete",o,void 0),s}has(t,o){const n=Reflect.has(t,o);return(!dt(o)||!$n.has(o))&&le(t,"has",o),n}ownKeys(t){return le(t,"iterate",P(t)?"length":St),Reflect.ownKeys(t)}}class hi extends Kn{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const fi=new qn,di=new hi,gi=new qn(!0);const ao=e=>e,h0=e=>Reflect.getPrototypeOf(e);function mi(e,t,o){return function(...n){const s=this.__v_raw,r=V(s),a=Pt(r),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...n),c=o?ao:t?lo:ue;return!t&&le(r,"iterate",u?ro:St),{next(){const{value:g,done:m}=f.next();return m?{value:g,done:m}:{value:l?[c(g[0]),c(g[1])]:c(g),done:m}},[Symbol.iterator](){return this}}}}function f0(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function pi(e,t){const o={get(s){const r=this.__v_raw,a=V(r),l=V(s);e||(pe(s,l)&&le(a,"get",s),le(a,"get",l));const{has:u}=h0(a),f=t?ao:e?lo:ue;if(u.call(a,s))return f(r.get(s));if(u.call(a,l))return f(r.get(l));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&le(V(s),"iterate",St),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,a=V(r),l=V(s);return e||(pe(s,l)&&le(a,"has",s),le(a,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const a=this,l=a.__v_raw,u=V(l),f=t?ao:e?lo:ue;return!e&&le(u,"iterate",St),l.forEach((c,g)=>s.call(r,f(c),f(g),a))}};return ae(o,e?{add:f0("add"),set:f0("set"),delete:f0("delete"),clear:f0("clear")}:{add(s){!t&&!Me(s)&&!xt(s)&&(s=V(s));const r=V(this);return h0(r).has.call(r,s)||(r.add(s),et(r,"add",s,s)),this},set(s,r){!t&&!Me(r)&&!xt(r)&&(r=V(r));const a=V(this),{has:l,get:u}=h0(a);let f=l.call(a,s);f||(s=V(s),f=l.call(a,s));const c=u.call(a,s);return a.set(s,r),f?pe(r,c)&&et(a,"set",s,r):et(a,"add",s,r),this},delete(s){const r=V(this),{has:a,get:l}=h0(r);let u=a.call(r,s);u||(s=V(s),u=a.call(r,s)),l&&l.call(r,s);const f=r.delete(s);return u&&et(r,"delete",s,void 0),f},clear(){const s=V(this),r=s.size!==0,a=s.clear();return r&&et(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{o[s]=mi(s,e,t)}),o}function Co(e,t){const o=pi(e,t);return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(Y(o,s)&&s in n?o:n,s,r)}const yi={get:Co(!1,!1)},vi={get:Co(!1,!0)},bi={get:Co(!0,!1)};const Qn=new WeakMap,Gn=new WeakMap,Jn=new WeakMap,wi=new WeakMap;function _i(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ii(e){return e.__v_skip||!Object.isExtensible(e)?0:_i(qs(e))}function Eo(e){return xt(e)?e:jo(e,!1,fi,yi,Qn)}function Si(e){return jo(e,!1,gi,vi,Gn)}function Zn(e){return jo(e,!0,di,bi,Jn)}function jo(e,t,o,n,s){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const a=Ii(e);if(a===0)return e;const l=new Proxy(e,a===2?n:o);return s.set(e,l),l}function Bt(e){return xt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function xt(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function Po(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Ti(e){return!Y(e,"__v_skip")&&Object.isExtensible(e)&&Bn(e,"__v_skip",!0),e}const ue=e=>ee(e)?Eo(e):e,lo=e=>ee(e)?Zn(e):e;function ie(e){return e?e.__v_isRef===!0:!1}function R(e){return xi(e,!1)}function xi(e,t){return ie(e)?e:new Ai(e,t)}class Ai{constructor(t,o){this.dep=new P0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?t:V(t),this._value=o?t:ue(t),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(t){const o=this._rawValue,n=this.__v_isShallow||Me(t)||xt(t);t=n?t:V(t),pe(t,o)&&(this._rawValue=t,this._value=n?t:ue(t),this.dep.trigger())}}function W(e){return ie(e)?e.value:e}const ki={get:(e,t,o)=>t==="__v_raw"?e:W(Reflect.get(e,t,o)),set:(e,t,o,n)=>{const s=e[t];return ie(s)&&!ie(o)?(s.value=o,!0):Reflect.set(e,t,o,n)}};function Xn(e){return Bt(e)?e:new Proxy(e,ki)}class Mi{constructor(t){this.__v_isRef=!0,this._value=void 0;const o=this.dep=new P0,{get:n,set:s}=t(o.track.bind(o),o.trigger.bind(o));this._get=n,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Oi(e){return new Mi(e)}class Ci{constructor(t,o,n){this.fn=t,this.setter=o,this._value=void 0,this.dep=new P0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=t0-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Q!==this)return Hn(this,!0),!0}get value(){const t=this.dep.track();return Un(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ei(e,t,o=!1){let n,s;return L(e)?n=e:(n=e.get,s=e.set),new Ci(n,s,o)}const d0={},b0=new WeakMap;let _t;function ji(e,t=!1,o=_t){if(o){let n=b0.get(o);n||b0.set(o,n=[]),n.push(e)}}function Pi(e,t,o=U){const{immediate:n,deep:s,once:r,scheduler:a,augmentJob:l,call:u}=o,f=M=>s?M:Me(M)||s===!1||s===0?tt(M,1):tt(M);let c,g,m,v,x=!1,I=!1;if(ie(e)?(g=()=>e.value,x=Me(e)):Bt(e)?(g=()=>f(e),x=!0):P(e)?(I=!0,x=e.some(M=>Bt(M)||Me(M)),g=()=>e.map(M=>{if(ie(M))return M.value;if(Bt(M))return f(M);if(L(M))return u?u(M,2):M()})):L(e)?t?g=u?()=>u(e,2):e:g=()=>{if(m){mt();try{m()}finally{pt()}}const M=_t;_t=c;try{return u?u(e,3,[v]):e(v)}finally{_t=M}}:g=Ke,t&&s){const M=g,N=s===!0?1/0:s;g=()=>tt(M(),N)}const H=si(),D=()=>{c.stop(),H&&H.active&&To(H.effects,c)};if(r&&t){const M=t;t=(...N)=>{M(...N),D()}}let j=I?new Array(e.length).fill(d0):d0;const C=M=>{if(!(!(c.flags&1)||!c.dirty&&!M))if(t){const N=c.run();if(s||x||(I?N.some((G,te)=>pe(G,j[te])):pe(N,j))){m&&m();const G=_t;_t=c;try{const te=[N,j===d0?void 0:I&&j[0]===d0?[]:j,v];u?u(t,3,te):t(...te),j=N}finally{_t=G}}}else c.run()};return l&&l(C),c=new Wn(g),c.scheduler=a?()=>a(C,!1):C,v=M=>ji(M,!1,c),m=c.onStop=()=>{const M=b0.get(c);if(M){if(u)u(M,4);else for(const N of M)N();b0.delete(c)}},t?n?C(!0):j=c.run():a?a(C.bind(null,!0),!0):c.run(),D.pause=c.pause.bind(c),D.resume=c.resume.bind(c),D.stop=D,D}function tt(e,t=1/0,o){if(t<=0||!ee(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,ie(e))tt(e.value,t,o);else if(P(e))for(let n=0;n<e.length;n++)tt(e[n],t,o);else if(Cn(e)||Pt(e))e.forEach(n=>{tt(n,t,o)});else if(Pn(e)){for(const n in e)tt(e[n],t,o);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&tt(e[n],t,o)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function a0(e,t,o,n){try{return n?e(...n):e()}catch(s){D0(s,t,o)}}function Qe(e,t,o,n){if(L(e)){const s=a0(e,t,o,n);return s&&En(s)&&s.catch(r=>{D0(r,t,o)}),s}if(P(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Qe(e[r],t,o,n));return s}}function D0(e,t,o,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||U;if(t){let l=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${o}`;for(;l;){const c=l.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](e,u,f)===!1)return}l=l.parent}if(r){mt(),a0(r,null,10,[e,u,f]),pt();return}}Bi(e,o,s,n,a)}function Bi(e,t,o,n=!0,s=!1){if(s)throw e;console.error(e)}const de=[];let Ue=-1;const Dt=[];let lt=null,Mt=0;const es=Promise.resolve();let w0=null;function R0(e){const t=w0||es;return e?t.then(this?e.bind(this):e):t}function Di(e){let t=Ue+1,o=de.length;for(;t<o;){const n=t+o>>>1,s=de[n],r=n0(s);r<e||r===e&&s.flags&2?t=n+1:o=n}return t}function Bo(e){if(!(e.flags&1)){const t=n0(e),o=de[de.length-1];!o||!(e.flags&2)&&t>=n0(o)?de.push(e):de.splice(Di(t),0,e),e.flags|=1,ts()}}function ts(){w0||(w0=es.then(ns))}function Ri(e){P(e)?Dt.push(...e):lt&&e.id===-1?lt.splice(Mt+1,0,e):e.flags&1||(Dt.push(e),e.flags|=1),ts()}function en(e,t,o=Ue+1){for(;o<de.length;o++){const n=de[o];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;de.splice(o,1),o--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function os(e){if(Dt.length){const t=[...new Set(Dt)].sort((o,n)=>n0(o)-n0(n));if(Dt.length=0,lt){lt.push(...t);return}for(lt=t,Mt=0;Mt<lt.length;Mt++){const o=lt[Mt];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}lt=null,Mt=0}}const n0=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ns(e){try{for(Ue=0;Ue<de.length;Ue++){const t=de[Ue];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),a0(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ue<de.length;Ue++){const t=de[Ue];t&&(t.flags&=-2)}Ue=-1,de.length=0,os(),w0=null,(de.length||Dt.length)&&ns()}}let be=null,ss=null;function _0(e){const t=be;return be=e,ss=e&&e.type.__scopeId||null,t}function Li(e,t=be,o){if(!t||e._n)return e;const n=(...s)=>{n._d&&cn(-1);const r=_0(t);let a;try{a=e(...s)}finally{_0(r),n._d&&cn(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function uo(e,t){if(be===null)return e;const o=H0(be),n=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,l,u=U]=t[s];r&&(L(r)&&(r={mounted:r,updated:r}),r.deep&&tt(a),n.push({dir:r,instance:o,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function bt(e,t,o,n){const s=e.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];r&&(l.oldValue=r[a].value);let u=l.dir[n];u&&(mt(),Qe(u,o,8,[e.el,l,e,t]),pt())}}const Wi=Symbol("_vte"),Fi=e=>e.__isTeleport;function Do(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Do(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Re(e,t){return L(e)?ae({name:e.name},t,{setup:e}):e}function is(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function I0(e,t,o,n,s=!1){if(P(e)){e.forEach((x,I)=>I0(x,t&&(P(t)?t[I]:t),o,n,s));return}if(Zt(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&I0(e,t,o,n.component.subTree);return}const r=n.shapeFlag&4?H0(n.component):n.el,a=s?null:r,{i:l,r:u}=e,f=t&&t.r,c=l.refs===U?l.refs={}:l.refs,g=l.setupState,m=V(g),v=g===U?()=>!1:x=>Y(m,x);if(f!=null&&f!==u&&(se(f)?(c[f]=null,v(f)&&(g[f]=null)):ie(f)&&(f.value=null)),L(u))a0(u,l,12,[a,c]);else{const x=se(u),I=ie(u);if(x||I){const H=()=>{if(e.f){const D=x?v(u)?g[u]:c[u]:u.value;s?P(D)&&To(D,r):P(D)?D.includes(r)||D.push(r):x?(c[u]=[r],v(u)&&(g[u]=c[u])):(u.value=[r],e.k&&(c[e.k]=u.value))}else x?(c[u]=a,v(u)&&(g[u]=a)):I&&(u.value=a,e.k&&(c[e.k]=a))};a?(H.id=-1,Ie(H,o)):H()}}}j0().requestIdleCallback;j0().cancelIdleCallback;const Zt=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function Hi(e,t){as(e,"a",t)}function Ni(e,t){as(e,"da",t)}function as(e,t,o=re){const n=e.__wdc||(e.__wdc=()=>{let s=o;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(L0(t,n,o),o){let s=o.parent;for(;s&&s.parent;)rs(s.parent.vnode)&&zi(n,t,o,s),s=s.parent}}function zi(e,t,o,n){const s=L0(t,e,n,!0);Lo(()=>{To(n[t],s)},o)}function L0(e,t,o=re,n=!1){if(o){const s=o[e]||(o[e]=[]),r=t.__weh||(t.__weh=(...a)=>{mt();const l=l0(o),u=Qe(t,o,e,a);return l(),pt(),u});return n?s.unshift(r):s.push(r),r}}const it=e=>(t,o=re)=>{(!r0||e==="sp")&&L0(e,(...n)=>t(...n),o)},Ui=it("bm"),Ro=it("m"),Vi=it("bu"),Yi=it("u"),$i=it("bum"),Lo=it("um"),Ki=it("sp"),qi=it("rtg"),Qi=it("rtc");function Gi(e,t=re){L0("ec",e,t)}const Ji="directives",Zi=Symbol.for("v-ndc");function ls(e){return Xi(Ji,e)}function Xi(e,t,o=!0,n=!1){const s=be||re;if(s){const r=s.type,a=tn(s[e]||r[e],t)||tn(s.appContext[e],t);return!a&&n?r:a}}function tn(e,t){return e&&(e[t]||e[Be(t)]||e[Ao(Be(t))])}function s0(e,t,o,n){let s;const r=o,a=P(e);if(a||se(e)){const l=a&&Bt(e);let u=!1;l&&(u=!Me(e),e=B0(e)),s=new Array(e.length);for(let f=0,c=e.length;f<c;f++)s[f]=t(u?ue(e[f]):e[f],f,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,r)}else if(ee(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>t(l,u,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,f=l.length;u<f;u++){const c=l[u];s[u]=t(e[c],c,u,r)}}else s=[];return s}const co=e=>e?Es(e)?H0(e):co(e.parent):null,Xt=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>co(e.parent),$root:e=>co(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>cs(e),$forceUpdate:e=>e.f||(e.f=()=>{Bo(e.update)}),$nextTick:e=>e.n||(e.n=R0.bind(e.proxy)),$watch:e=>Sr.bind(e)}),J0=(e,t)=>e!==U&&!e.__isScriptSetup&&Y(e,t),er={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:n,data:s,props:r,accessCache:a,type:l,appContext:u}=e;let f;if(t[0]!=="$"){const v=a[t];if(v!==void 0)switch(v){case 1:return n[t];case 2:return s[t];case 4:return o[t];case 3:return r[t]}else{if(J0(n,t))return a[t]=1,n[t];if(s!==U&&Y(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&Y(f,t))return a[t]=3,r[t];if(o!==U&&Y(o,t))return a[t]=4,o[t];ho&&(a[t]=0)}}const c=Xt[t];let g,m;if(c)return t==="$attrs"&&le(e.attrs,"get",""),c(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(o!==U&&Y(o,t))return a[t]=4,o[t];if(m=u.config.globalProperties,Y(m,t))return m[t]},set({_:e},t,o){const{data:n,setupState:s,ctx:r}=e;return J0(s,t)?(s[t]=o,!0):n!==U&&Y(n,t)?(n[t]=o,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:n,appContext:s,propsOptions:r}},a){let l;return!!o[a]||e!==U&&Y(e,a)||J0(t,a)||(l=r[0])&&Y(l,a)||Y(n,a)||Y(Xt,a)||Y(s.config.globalProperties,a)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:Y(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function S0(e){return P(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}function tr(e,t){return!e||!t?e||t:P(e)&&P(t)?e.concat(t):ae({},S0(e),S0(t))}let ho=!0;function or(e){const t=cs(e),o=e.proxy,n=e.ctx;ho=!1,t.beforeCreate&&on(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:l,provide:u,inject:f,created:c,beforeMount:g,mounted:m,beforeUpdate:v,updated:x,activated:I,deactivated:H,beforeDestroy:D,beforeUnmount:j,destroyed:C,unmounted:M,render:N,renderTracked:G,renderTriggered:te,errorCaptured:oe,serverPrefetch:ce,expose:Oe,inheritAttrs:Je,components:rt,directives:at,filters:V0}=t;if(f&&nr(f,n,null),a)for(const X in a){const K=a[X];L(K)&&(n[X]=K.bind(o))}if(s){const X=s.call(o,o);ee(X)&&(e.data=Eo(X))}if(ho=!0,r)for(const X in r){const K=r[X],yt=L(K)?K.bind(o,o):L(K.get)?K.get.bind(o,o):Ke,u0=!L(K)&&L(K.set)?K.set.bind(o):Ke,vt=Ge({get:yt,set:u0});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>vt.value,set:We=>vt.value=We})}if(l)for(const X in l)us(l[X],n,o,X);if(u){const X=L(u)?u.call(o):u;Reflect.ownKeys(X).forEach(K=>{ur(K,X[K])})}c&&on(c,e,"c");function he(X,K){P(K)?K.forEach(yt=>X(yt.bind(o))):K&&X(K.bind(o))}if(he(Ui,g),he(Ro,m),he(Vi,v),he(Yi,x),he(Hi,I),he(Ni,H),he(Gi,oe),he(Qi,G),he(qi,te),he($i,j),he(Lo,M),he(Ki,ce),P(Oe))if(Oe.length){const X=e.exposed||(e.exposed={});Oe.forEach(K=>{Object.defineProperty(X,K,{get:()=>o[K],set:yt=>o[K]=yt})})}else e.exposed||(e.exposed={});N&&e.render===Ke&&(e.render=N),Je!=null&&(e.inheritAttrs=Je),rt&&(e.components=rt),at&&(e.directives=at),ce&&is(e)}function nr(e,t,o=Ke){P(e)&&(e=fo(e));for(const n in e){const s=e[n];let r;ee(s)?"default"in s?r=p0(s.from||n,s.default,!0):r=p0(s.from||n):r=p0(s),ie(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[n]=r}}function on(e,t,o){Qe(P(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,o)}function us(e,t,o,n){let s=n.includes(".")?Ss(o,n):()=>o[n];if(se(e)){const r=t[e];L(r)&&je(s,r)}else if(L(e))je(s,e.bind(o));else if(ee(e))if(P(e))e.forEach(r=>us(r,t,o,n));else{const r=L(e.handler)?e.handler.bind(o):t[e.handler];L(r)&&je(s,r,e)}}function cs(e){const t=e.type,{mixins:o,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let u;return l?u=l:!s.length&&!o&&!n?u=t:(u={},s.length&&s.forEach(f=>T0(u,f,a,!0)),T0(u,t,a)),ee(t)&&r.set(t,u),u}function T0(e,t,o,n=!1){const{mixins:s,extends:r}=t;r&&T0(e,r,o,!0),s&&s.forEach(a=>T0(e,a,o,!0));for(const a in t)if(!(n&&a==="expose")){const l=sr[a]||o&&o[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const sr={data:nn,props:sn,emits:sn,methods:$t,computed:$t,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:$t,directives:$t,watch:rr,provide:nn,inject:ir};function nn(e,t){return t?e?function(){return ae(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function ir(e,t){return $t(fo(e),fo(t))}function fo(e){if(P(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?ae(Object.create(null),e,t):t}function sn(e,t){return e?P(e)&&P(t)?[...new Set([...e,...t])]:ae(Object.create(null),S0(e),S0(t??{})):t}function rr(e,t){if(!e)return t;if(!t)return e;const o=ae(Object.create(null),e);for(const n in t)o[n]=fe(e[n],t[n]);return o}function hs(){return{app:null,config:{isNativeTag:$s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ar=0;function lr(e,t){return function(n,s=null){L(n)||(n=ae({},n)),s!=null&&!ee(s)&&(s=null);const r=hs(),a=new WeakSet,l=[];let u=!1;const f=r.app={_uid:ar++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Yr,get config(){return r.config},set config(c){},use(c,...g){return a.has(c)||(c&&L(c.install)?(a.add(c),c.install(f,...g)):L(c)&&(a.add(c),c(f,...g))),f},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),f},component(c,g){return g?(r.components[c]=g,f):r.components[c]},directive(c,g){return g?(r.directives[c]=g,f):r.directives[c]},mount(c,g,m){if(!u){const v=f._ceVNode||ne(n,s);return v.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(v,c,m),u=!0,f._container=c,c.__vue_app__=f,H0(v.component)}},onUnmount(c){l.push(c)},unmount(){u&&(Qe(l,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,g){return r.provides[c]=g,f},runWithContext(c){const g=Rt;Rt=f;try{return c()}finally{Rt=g}}};return f}}let Rt=null;function ur(e,t){if(re){let o=re.provides;const n=re.parent&&re.parent.provides;n===o&&(o=re.provides=Object.create(n)),o[e]=t}}function p0(e,t,o=!1){const n=re||be;if(n||Rt){const s=Rt?Rt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return o&&L(t)?t.call(n&&n.proxy):t}}const fs={},ds=()=>Object.create(fs),gs=e=>Object.getPrototypeOf(e)===fs;function cr(e,t,o,n=!1){const s={},r=ds();e.propsDefaults=Object.create(null),ms(e,t,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);o?e.props=n?s:Si(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function hr(e,t,o,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,l=V(s),[u]=e.propsOptions;let f=!1;if((n||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let g=0;g<c.length;g++){let m=c[g];if(W0(e.emitsOptions,m))continue;const v=t[m];if(u)if(Y(r,m))v!==r[m]&&(r[m]=v,f=!0);else{const x=Be(m);s[x]=go(u,l,x,v,e,!1)}else v!==r[m]&&(r[m]=v,f=!0)}}}else{ms(e,t,s,r)&&(f=!0);let c;for(const g in l)(!t||!Y(t,g)&&((c=gt(g))===g||!Y(t,c)))&&(u?o&&(o[g]!==void 0||o[c]!==void 0)&&(s[g]=go(u,l,g,void 0,e,!0)):delete s[g]);if(r!==l)for(const g in r)(!t||!Y(t,g))&&(delete r[g],f=!0)}f&&et(e.attrs,"set","")}function ms(e,t,o,n){const[s,r]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(Qt(u))continue;const f=t[u];let c;s&&Y(s,c=Be(u))?!r||!r.includes(c)?o[c]=f:(l||(l={}))[c]=f:W0(e.emitsOptions,u)||(!(u in n)||f!==n[u])&&(n[u]=f,a=!0)}if(r){const u=V(o),f=l||U;for(let c=0;c<r.length;c++){const g=r[c];o[g]=go(s,u,g,f[g],e,!Y(f,g))}}return a}function go(e,t,o,n,s,r){const a=e[o];if(a!=null){const l=Y(a,"default");if(l&&n===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&L(u)){const{propsDefaults:f}=s;if(o in f)n=f[o];else{const c=l0(s);n=f[o]=u.call(null,t),c()}}else n=u;s.ce&&s.ce._setProp(o,n)}a[0]&&(r&&!l?n=!1:a[1]&&(n===""||n===gt(o))&&(n=!0))}return n}const fr=new WeakMap;function ps(e,t,o=!1){const n=o?fr:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,a={},l=[];let u=!1;if(!L(e)){const c=g=>{u=!0;const[m,v]=ps(g,t,!0);ae(a,m),v&&l.push(...v)};!o&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!u)return ee(e)&&n.set(e,jt),jt;if(P(r))for(let c=0;c<r.length;c++){const g=Be(r[c]);rn(g)&&(a[g]=U)}else if(r)for(const c in r){const g=Be(c);if(rn(g)){const m=r[c],v=a[g]=P(m)||L(m)?{type:m}:ae({},m),x=v.type;let I=!1,H=!0;if(P(x))for(let D=0;D<x.length;++D){const j=x[D],C=L(j)&&j.name;if(C==="Boolean"){I=!0;break}else C==="String"&&(H=!1)}else I=L(x)&&x.name==="Boolean";v[0]=I,v[1]=H,(I||Y(v,"default"))&&l.push(g)}}const f=[a,l];return ee(e)&&n.set(e,f),f}function rn(e){return e[0]!=="$"&&!Qt(e)}const ys=e=>e[0]==="_"||e==="$stable",Wo=e=>P(e)?e.map(Ve):[Ve(e)],dr=(e,t,o)=>{if(t._n)return t;const n=Li((...s)=>Wo(t(...s)),o);return n._c=!1,n},vs=(e,t,o)=>{const n=e._ctx;for(const s in e){if(ys(s))continue;const r=e[s];if(L(r))t[s]=dr(s,r,n);else if(r!=null){const a=Wo(r);t[s]=()=>a}}},bs=(e,t)=>{const o=Wo(t);e.slots.default=()=>o},ws=(e,t,o)=>{for(const n in t)(o||n!=="_")&&(e[n]=t[n])},gr=(e,t,o)=>{const n=e.slots=ds();if(e.vnode.shapeFlag&32){const s=t._;s?(ws(n,t,o),o&&Bn(n,"_",s,!0)):vs(t,n)}else t&&bs(e,t)},mr=(e,t,o)=>{const{vnode:n,slots:s}=e;let r=!0,a=U;if(n.shapeFlag&32){const l=t._;l?o&&l===1?r=!1:ws(s,t,o):(r=!t.$stable,vs(t,s)),a=t}else t&&(bs(e,t),a={default:1});if(r)for(const l in s)!ys(l)&&a[l]==null&&delete s[l]},Ie=Cr;function pr(e){return yr(e)}function yr(e,t){const o=j0();o.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:l,createComment:u,setText:f,setElementText:c,parentNode:g,nextSibling:m,setScopeId:v=Ke,insertStaticContent:x}=e,I=(h,d,p,w=null,y=null,b=null,A=void 0,T=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!Vt(h,d)&&(w=c0(h),We(h,y,b,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:_,ref:E,shapeFlag:k}=d;switch(_){case F0:H(h,d,p,w);break;case At:D(h,d,p,w);break;case X0:h==null&&j(d,p,w,A);break;case ye:rt(h,d,p,w,y,b,A,T,S);break;default:k&1?N(h,d,p,w,y,b,A,T,S):k&6?at(h,d,p,w,y,b,A,T,S):(k&64||k&128)&&_.process(h,d,p,w,y,b,A,T,S,Nt)}E!=null&&y&&I0(E,h&&h.ref,b,d||h,!d)},H=(h,d,p,w)=>{if(h==null)n(d.el=l(d.children),p,w);else{const y=d.el=h.el;d.children!==h.children&&f(y,d.children)}},D=(h,d,p,w)=>{h==null?n(d.el=u(d.children||""),p,w):d.el=h.el},j=(h,d,p,w)=>{[h.el,h.anchor]=x(h.children,d,p,w,h.el,h.anchor)},C=({el:h,anchor:d},p,w)=>{let y;for(;h&&h!==d;)y=m(h),n(h,p,w),h=y;n(d,p,w)},M=({el:h,anchor:d})=>{let p;for(;h&&h!==d;)p=m(h),s(h),h=p;s(d)},N=(h,d,p,w,y,b,A,T,S)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),h==null?G(d,p,w,y,b,A,T,S):ce(h,d,y,b,A,T,S)},G=(h,d,p,w,y,b,A,T)=>{let S,_;const{props:E,shapeFlag:k,transition:O,dirs:B}=h;if(S=h.el=a(h.type,b,E&&E.is,E),k&8?c(S,h.children):k&16&&oe(h.children,S,null,w,y,Z0(h,b),A,T),B&&bt(h,null,w,"created"),te(S,h,h.scopeId,A,w),E){for(const q in E)q!=="value"&&!Qt(q)&&r(S,q,null,E[q],b,w);"value"in E&&r(S,"value",null,E.value,b),(_=E.onVnodeBeforeMount)&&ze(_,w,h)}B&&bt(h,null,w,"beforeMount");const z=vr(y,O);z&&O.beforeEnter(S),n(S,d,p),((_=E&&E.onVnodeMounted)||z||B)&&Ie(()=>{_&&ze(_,w,h),z&&O.enter(S),B&&bt(h,null,w,"mounted")},y)},te=(h,d,p,w,y)=>{if(p&&v(h,p),w)for(let b=0;b<w.length;b++)v(h,w[b]);if(y){let b=y.subTree;if(d===b||As(b.type)&&(b.ssContent===d||b.ssFallback===d)){const A=y.vnode;te(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},oe=(h,d,p,w,y,b,A,T,S=0)=>{for(let _=S;_<h.length;_++){const E=h[_]=T?ut(h[_]):Ve(h[_]);I(null,E,d,p,w,y,b,A,T)}},ce=(h,d,p,w,y,b,A)=>{const T=d.el=h.el;let{patchFlag:S,dynamicChildren:_,dirs:E}=d;S|=h.patchFlag&16;const k=h.props||U,O=d.props||U;let B;if(p&&wt(p,!1),(B=O.onVnodeBeforeUpdate)&&ze(B,p,d,h),E&&bt(d,h,p,"beforeUpdate"),p&&wt(p,!0),(k.innerHTML&&O.innerHTML==null||k.textContent&&O.textContent==null)&&c(T,""),_?Oe(h.dynamicChildren,_,T,p,w,Z0(d,y),b):A||K(h,d,T,null,p,w,Z0(d,y),b,!1),S>0){if(S&16)Je(T,k,O,p,y);else if(S&2&&k.class!==O.class&&r(T,"class",null,O.class,y),S&4&&r(T,"style",k.style,O.style,y),S&8){const z=d.dynamicProps;for(let q=0;q<z.length;q++){const $=z[q],we=k[$],me=O[$];(me!==we||$==="value")&&r(T,$,we,me,y,p)}}S&1&&h.children!==d.children&&c(T,d.children)}else!A&&_==null&&Je(T,k,O,p,y);((B=O.onVnodeUpdated)||E)&&Ie(()=>{B&&ze(B,p,d,h),E&&bt(d,h,p,"updated")},w)},Oe=(h,d,p,w,y,b,A)=>{for(let T=0;T<d.length;T++){const S=h[T],_=d[T],E=S.el&&(S.type===ye||!Vt(S,_)||S.shapeFlag&70)?g(S.el):p;I(S,_,E,null,w,y,b,A,!0)}},Je=(h,d,p,w,y)=>{if(d!==p){if(d!==U)for(const b in d)!Qt(b)&&!(b in p)&&r(h,b,d[b],null,y,w);for(const b in p){if(Qt(b))continue;const A=p[b],T=d[b];A!==T&&b!=="value"&&r(h,b,T,A,y,w)}"value"in p&&r(h,"value",d.value,p.value,y)}},rt=(h,d,p,w,y,b,A,T,S)=>{const _=d.el=h?h.el:l(""),E=d.anchor=h?h.anchor:l("");let{patchFlag:k,dynamicChildren:O,slotScopeIds:B}=d;B&&(T=T?T.concat(B):B),h==null?(n(_,p,w),n(E,p,w),oe(d.children||[],p,E,y,b,A,T,S)):k>0&&k&64&&O&&h.dynamicChildren?(Oe(h.dynamicChildren,O,p,y,b,A,T),(d.key!=null||y&&d===y.subTree)&&_s(h,d,!0)):K(h,d,p,E,y,b,A,T,S)},at=(h,d,p,w,y,b,A,T,S)=>{d.slotScopeIds=T,h==null?d.shapeFlag&512?y.ctx.activate(d,p,w,A,S):V0(d,p,w,y,b,A,S):$o(h,d,S)},V0=(h,d,p,w,y,b,A)=>{const T=h.component=Wr(h,w,y);if(rs(h)&&(T.ctx.renderer=Nt),Hr(T,!1,A),T.asyncDep){if(y&&y.registerDep(T,he,A),!h.el){const S=T.subTree=ne(At);D(null,S,d,p)}}else he(T,h,d,p,y,b,A)},$o=(h,d,p)=>{const w=d.component=h.component;if(Mr(h,d,p))if(w.asyncDep&&!w.asyncResolved){X(w,d,p);return}else w.next=d,w.update();else d.el=h.el,w.vnode=d},he=(h,d,p,w,y,b,A)=>{const T=()=>{if(h.isMounted){let{next:k,bu:O,u:B,parent:z,vnode:q}=h;{const He=Is(h);if(He){k&&(k.el=q.el,X(h,k,A)),He.asyncDep.then(()=>{h.isUnmounted||T()});return}}let $=k,we;wt(h,!1),k?(k.el=q.el,X(h,k,A)):k=q,O&&m0(O),(we=k.props&&k.props.onVnodeBeforeUpdate)&&ze(we,z,k,q),wt(h,!0);const me=ln(h),Fe=h.subTree;h.subTree=me,I(Fe,me,g(Fe.el),c0(Fe),h,y,b),k.el=me.el,$===null&&Or(h,me.el),B&&Ie(B,y),(we=k.props&&k.props.onVnodeUpdated)&&Ie(()=>ze(we,z,k,q),y)}else{let k;const{el:O,props:B}=d,{bm:z,m:q,parent:$,root:we,type:me}=h,Fe=Zt(d);wt(h,!1),z&&m0(z),!Fe&&(k=B&&B.onVnodeBeforeMount)&&ze(k,$,d),wt(h,!0);{we.ce&&we.ce._injectChildStyle(me);const He=h.subTree=ln(h);I(null,He,p,w,h,y,b),d.el=He.el}if(q&&Ie(q,y),!Fe&&(k=B&&B.onVnodeMounted)){const He=d;Ie(()=>ze(k,$,He),y)}(d.shapeFlag&256||$&&Zt($.vnode)&&$.vnode.shapeFlag&256)&&h.a&&Ie(h.a,y),h.isMounted=!0,d=p=w=null}};h.scope.on();const S=h.effect=new Wn(T);h.scope.off();const _=h.update=S.run.bind(S),E=h.job=S.runIfDirty.bind(S);E.i=h,E.id=h.uid,S.scheduler=()=>Bo(E),wt(h,!0),_()},X=(h,d,p)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,hr(h,d.props,w,p),mr(h,d.children,p),mt(),en(h),pt()},K=(h,d,p,w,y,b,A,T,S=!1)=>{const _=h&&h.children,E=h?h.shapeFlag:0,k=d.children,{patchFlag:O,shapeFlag:B}=d;if(O>0){if(O&128){u0(_,k,p,w,y,b,A,T,S);return}else if(O&256){yt(_,k,p,w,y,b,A,T,S);return}}B&8?(E&16&&Ht(_,y,b),k!==_&&c(p,k)):E&16?B&16?u0(_,k,p,w,y,b,A,T,S):Ht(_,y,b,!0):(E&8&&c(p,""),B&16&&oe(k,p,w,y,b,A,T,S))},yt=(h,d,p,w,y,b,A,T,S)=>{h=h||jt,d=d||jt;const _=h.length,E=d.length,k=Math.min(_,E);let O;for(O=0;O<k;O++){const B=d[O]=S?ut(d[O]):Ve(d[O]);I(h[O],B,p,null,y,b,A,T,S)}_>E?Ht(h,y,b,!0,!1,k):oe(d,p,w,y,b,A,T,S,k)},u0=(h,d,p,w,y,b,A,T,S)=>{let _=0;const E=d.length;let k=h.length-1,O=E-1;for(;_<=k&&_<=O;){const B=h[_],z=d[_]=S?ut(d[_]):Ve(d[_]);if(Vt(B,z))I(B,z,p,null,y,b,A,T,S);else break;_++}for(;_<=k&&_<=O;){const B=h[k],z=d[O]=S?ut(d[O]):Ve(d[O]);if(Vt(B,z))I(B,z,p,null,y,b,A,T,S);else break;k--,O--}if(_>k){if(_<=O){const B=O+1,z=B<E?d[B].el:w;for(;_<=O;)I(null,d[_]=S?ut(d[_]):Ve(d[_]),p,z,y,b,A,T,S),_++}}else if(_>O)for(;_<=k;)We(h[_],y,b,!0),_++;else{const B=_,z=_,q=new Map;for(_=z;_<=O;_++){const _e=d[_]=S?ut(d[_]):Ve(d[_]);_e.key!=null&&q.set(_e.key,_)}let $,we=0;const me=O-z+1;let Fe=!1,He=0;const zt=new Array(me);for(_=0;_<me;_++)zt[_]=0;for(_=B;_<=k;_++){const _e=h[_];if(we>=me){We(_e,y,b,!0);continue}let Ne;if(_e.key!=null)Ne=q.get(_e.key);else for($=z;$<=O;$++)if(zt[$-z]===0&&Vt(_e,d[$])){Ne=$;break}Ne===void 0?We(_e,y,b,!0):(zt[Ne-z]=_+1,Ne>=He?He=Ne:Fe=!0,I(_e,d[Ne],p,null,y,b,A,T,S),we++)}const Qo=Fe?br(zt):jt;for($=Qo.length-1,_=me-1;_>=0;_--){const _e=z+_,Ne=d[_e],Go=_e+1<E?d[_e+1].el:w;zt[_]===0?I(null,Ne,p,Go,y,b,A,T,S):Fe&&($<0||_!==Qo[$]?vt(Ne,p,Go,2):$--)}}},vt=(h,d,p,w,y=null)=>{const{el:b,type:A,transition:T,children:S,shapeFlag:_}=h;if(_&6){vt(h.component.subTree,d,p,w);return}if(_&128){h.suspense.move(d,p,w);return}if(_&64){A.move(h,d,p,Nt);return}if(A===ye){n(b,d,p);for(let k=0;k<S.length;k++)vt(S[k],d,p,w);n(h.anchor,d,p);return}if(A===X0){C(h,d,p);return}if(w!==2&&_&1&&T)if(w===0)T.beforeEnter(b),n(b,d,p),Ie(()=>T.enter(b),y);else{const{leave:k,delayLeave:O,afterLeave:B}=T,z=()=>n(b,d,p),q=()=>{k(b,()=>{z(),B&&B()})};O?O(b,z,q):q()}else n(b,d,p)},We=(h,d,p,w=!1,y=!1)=>{const{type:b,props:A,ref:T,children:S,dynamicChildren:_,shapeFlag:E,patchFlag:k,dirs:O,cacheIndex:B}=h;if(k===-2&&(y=!1),T!=null&&I0(T,null,p,h,!0),B!=null&&(d.renderCache[B]=void 0),E&256){d.ctx.deactivate(h);return}const z=E&1&&O,q=!Zt(h);let $;if(q&&($=A&&A.onVnodeBeforeUnmount)&&ze($,d,h),E&6)Ys(h.component,p,w);else{if(E&128){h.suspense.unmount(p,w);return}z&&bt(h,null,d,"beforeUnmount"),E&64?h.type.remove(h,d,p,Nt,w):_&&!_.hasOnce&&(b!==ye||k>0&&k&64)?Ht(_,d,p,!1,!0):(b===ye&&k&384||!y&&E&16)&&Ht(S,d,p),w&&Ko(h)}(q&&($=A&&A.onVnodeUnmounted)||z)&&Ie(()=>{$&&ze($,d,h),z&&bt(h,null,d,"unmounted")},p)},Ko=h=>{const{type:d,el:p,anchor:w,transition:y}=h;if(d===ye){Vs(p,w);return}if(d===X0){M(h);return}const b=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:T}=y,S=()=>A(p,b);T?T(h.el,b,S):S()}else b()},Vs=(h,d)=>{let p;for(;h!==d;)p=m(h),s(h),h=p;s(d)},Ys=(h,d,p)=>{const{bum:w,scope:y,job:b,subTree:A,um:T,m:S,a:_}=h;an(S),an(_),w&&m0(w),y.stop(),b&&(b.flags|=8,We(A,h,d,p)),T&&Ie(T,d),Ie(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ht=(h,d,p,w=!1,y=!1,b=0)=>{for(let A=b;A<h.length;A++)We(h[A],d,p,w,y)},c0=h=>{if(h.shapeFlag&6)return c0(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const d=m(h.anchor||h.el),p=d&&d[Wi];return p?m(p):d};let Y0=!1;const qo=(h,d,p)=>{h==null?d._vnode&&We(d._vnode,null,null,!0):I(d._vnode||null,h,d,null,null,null,p),d._vnode=h,Y0||(Y0=!0,en(),os(),Y0=!1)},Nt={p:I,um:We,m:vt,r:Ko,mt:V0,mc:oe,pc:K,pbc:Oe,n:c0,o:e};return{render:qo,hydrate:void 0,createApp:lr(qo)}}function Z0({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function wt({effect:e,job:t},o){o?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _s(e,t,o=!1){const n=e.children,s=t.children;if(P(n)&&P(s))for(let r=0;r<n.length;r++){const a=n[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=ut(s[r]),l.el=a.el),!o&&l.patchFlag!==-2&&_s(a,l)),l.type===F0&&(l.el=a.el)}}function br(e){const t=e.slice(),o=[0];let n,s,r,a,l;const u=e.length;for(n=0;n<u;n++){const f=e[n];if(f!==0){if(s=o[o.length-1],e[s]<f){t[n]=s,o.push(n);continue}for(r=0,a=o.length-1;r<a;)l=r+a>>1,e[o[l]]<f?r=l+1:a=l;f<e[o[r]]&&(r>0&&(t[n]=o[r-1]),o[r]=n)}}for(r=o.length,a=o[r-1];r-- >0;)o[r]=a,a=t[a];return o}function Is(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Is(t)}function an(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const wr=Symbol.for("v-scx"),_r=()=>p0(wr);function Ir(e,t){return Fo(e,null,{flush:"sync"})}function je(e,t,o){return Fo(e,t,o)}function Fo(e,t,o=U){const{immediate:n,deep:s,flush:r,once:a}=o,l=ae({},o),u=t&&n||!t&&r!=="post";let f;if(r0){if(r==="sync"){const v=_r();f=v.__watcherHandles||(v.__watcherHandles=[])}else if(!u){const v=()=>{};return v.stop=Ke,v.resume=Ke,v.pause=Ke,v}}const c=re;l.call=(v,x,I)=>Qe(v,c,x,I);let g=!1;r==="post"?l.scheduler=v=>{Ie(v,c&&c.suspense)}:r!=="sync"&&(g=!0,l.scheduler=(v,x)=>{x?v():Bo(v)}),l.augmentJob=v=>{t&&(v.flags|=4),g&&(v.flags|=2,c&&(v.id=c.uid,v.i=c))};const m=Pi(e,t,l);return r0&&(f?f.push(m):u&&m()),m}function Sr(e,t,o){const n=this.proxy,s=se(e)?e.includes(".")?Ss(n,e):()=>n[e]:e.bind(n,n);let r;L(t)?r=t:(r=t.handler,o=t);const a=l0(this),l=Fo(s,r.bind(n),o);return a(),l}function Ss(e,t){const o=t.split(".");return()=>{let n=e;for(let s=0;s<o.length&&n;s++)n=n[o[s]];return n}}function Tr(e,t,o=U){const n=Fr(),s=Be(t),r=gt(t),a=Ts(e,s),l=Oi((u,f)=>{let c,g=U,m;return Ir(()=>{const v=e[s];pe(c,v)&&(c=v,f())}),{get(){return u(),o.get?o.get(c):c},set(v){const x=o.set?o.set(v):v;if(!pe(x,c)&&!(g!==U&&pe(v,g)))return;const I=n.vnode.props;I&&(t in I||s in I||r in I)&&(`onUpdate:${t}`in I||`onUpdate:${s}`in I||`onUpdate:${r}`in I)||(c=v,f()),n.emit(`update:${t}`,x),pe(v,x)&&pe(v,g)&&!pe(x,m)&&f(),g=v,m=x}}});return l[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?a||U:l,done:!1}:{done:!0}}}},l}const Ts=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${gt(t)}Modifiers`];function xr(e,t,...o){if(e.isUnmounted)return;const n=e.vnode.props||U;let s=o;const r=t.startsWith("update:"),a=r&&Ts(n,t.slice(7));a&&(a.trim&&(s=o.map(c=>se(c)?c.trim():c)),a.number&&(s=o.map(no)));let l,u=n[l=$0(t)]||n[l=$0(Be(t))];!u&&r&&(u=n[l=$0(gt(t))]),u&&Qe(u,e,6,s);const f=n[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Qe(f,e,6,s)}}function xs(e,t,o=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let a={},l=!1;if(!L(e)){const u=f=>{const c=xs(f,t,!0);c&&(l=!0,ae(a,c))};!o&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!l?(ee(e)&&n.set(e,null),null):(P(r)?r.forEach(u=>a[u]=null):ae(a,r),ee(e)&&n.set(e,a),a)}function W0(e,t){return!e||!O0(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,gt(t))||Y(e,t))}function ln(e){const{type:t,vnode:o,proxy:n,withProxy:s,propsOptions:[r],slots:a,attrs:l,emit:u,render:f,renderCache:c,props:g,data:m,setupState:v,ctx:x,inheritAttrs:I}=e,H=_0(e);let D,j;try{if(o.shapeFlag&4){const M=s||n,N=M;D=Ve(f.call(N,M,c,g,v,m,x)),j=l}else{const M=t;D=Ve(M.length>1?M(g,{attrs:l,slots:a,emit:u}):M(g,null)),j=t.props?l:Ar(l)}}catch(M){e0.length=0,D0(M,e,1),D=ne(At)}let C=D;if(j&&I!==!1){const M=Object.keys(j),{shapeFlag:N}=C;M.length&&N&7&&(r&&M.some(So)&&(j=kr(j,r)),C=Lt(C,j,!1,!0))}return o.dirs&&(C=Lt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(o.dirs):o.dirs),o.transition&&Do(C,o.transition),D=C,_0(H),D}const Ar=e=>{let t;for(const o in e)(o==="class"||o==="style"||O0(o))&&((t||(t={}))[o]=e[o]);return t},kr=(e,t)=>{const o={};for(const n in e)(!So(n)||!(n.slice(9)in t))&&(o[n]=e[n]);return o};function Mr(e,t,o){const{props:n,children:s,component:r}=e,{props:a,children:l,patchFlag:u}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return n?un(n,a,f):!!a;if(u&8){const c=t.dynamicProps;for(let g=0;g<c.length;g++){const m=c[g];if(a[m]!==n[m]&&!W0(f,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:n===a?!1:n?a?un(n,a,f):!0:!!a;return!1}function un(e,t,o){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==e[r]&&!W0(o,r))return!0}return!1}function Or({vnode:e,parent:t},o){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=o,t=t.parent;else break}}const As=e=>e.__isSuspense;function Cr(e,t){t&&t.pendingBranch?P(e)?t.effects.push(...e):t.effects.push(e):Ri(e)}const ye=Symbol.for("v-fgt"),F0=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),X0=Symbol.for("v-stc"),e0=[];let Te=null;function J(e=!1){e0.push(Te=e?null:[])}function Er(){e0.pop(),Te=e0[e0.length-1]||null}let i0=1;function cn(e,t=!1){i0+=e,e<0&&Te&&t&&(Te.hasOnce=!0)}function ks(e){return e.dynamicChildren=i0>0?Te||jt:null,Er(),i0>0&&Te&&Te.push(e),e}function Z(e,t,o,n,s,r){return ks(F(e,t,o,n,s,r,!0))}function jr(e,t,o,n,s){return ks(ne(e,t,o,n,s,!0))}function Ms(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const Os=({key:e})=>e??null,y0=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||ie(e)||L(e)?{i:be,r:e,k:t,f:!!o}:e:null);function F(e,t=null,o=null,n=0,s=null,r=e===ye?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Os(t),ref:t&&y0(t),scopeId:ss,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return l?(Ho(u,o),r&128&&e.normalize(u)):o&&(u.shapeFlag|=se(o)?8:16),i0>0&&!a&&Te&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&Te.push(u),u}const ne=Pr;function Pr(e,t=null,o=null,n=0,s=null,r=!1){if((!e||e===Zi)&&(e=At),Ms(e)){const l=Lt(e,t,!0);return o&&Ho(l,o),i0>0&&!r&&Te&&(l.shapeFlag&6?Te[Te.indexOf(e)]=l:Te.push(l)),l.patchFlag=-2,l}if(Vr(e)&&(e=e.__vccOpts),t){t=Br(t);let{class:l,style:u}=t;l&&!se(l)&&(t.class=ve(l)),ee(u)&&(Po(u)&&!P(u)&&(u=ae({},u)),t.style=nt(u))}const a=se(e)?1:As(e)?128:Fi(e)?64:ee(e)?4:L(e)?2:0;return F(e,t,o,n,s,a,r,!0)}function Br(e){return e?Po(e)||gs(e)?ae({},e):e:null}function Lt(e,t,o=!1,n=!1){const{props:s,ref:r,patchFlag:a,children:l,transition:u}=e,f=t?Dr(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Os(f),ref:t&&t.ref?o&&r?P(r)?r.concat(y0(t)):[r,y0(t)]:y0(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&n&&Do(c,u.clone(c)),c}function mo(e=" ",t=0){return ne(F0,null,e,t)}function Cs(e="",t=!1){return t?(J(),jr(At,null,e)):ne(At,null,e)}function Ve(e){return e==null||typeof e=="boolean"?ne(At):P(e)?ne(ye,null,e.slice()):Ms(e)?ut(e):ne(F0,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function Ho(e,t){let o=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(P(t))o=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Ho(e,s()),s._c&&(s._d=!0));return}else{o=32;const s=t._;!s&&!gs(t)?t._ctx=be:s===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:be},o=32):(t=String(t),n&64?(o=16,t=[mo(t)]):o=8);e.children=t,e.shapeFlag|=o}function Dr(...e){const t={};for(let o=0;o<e.length;o++){const n=e[o];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=ve([t.class,n.class]));else if(s==="style")t.style=nt([t.style,n.style]);else if(O0(s)){const r=t[s],a=n[s];a&&r!==a&&!(P(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=n[s])}return t}function ze(e,t,o,n=null){Qe(e,t,7,[o,n])}const Rr=hs();let Lr=0;function Wr(e,t,o){const n=e.type,s=(t?t.appContext:e.appContext)||Rr,r={uid:Lr++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ni(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(n,s),emitsOptions:xs(n,s),emit:null,emitted:null,propsDefaults:U,inheritAttrs:n.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=xr.bind(null,r),e.ce&&e.ce(r),r}let re=null;const Fr=()=>re||be;let x0,po;{const e=j0(),t=(o,n)=>{let s;return(s=e[o])||(s=e[o]=[]),s.push(n),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};x0=t("__VUE_INSTANCE_SETTERS__",o=>re=o),po=t("__VUE_SSR_SETTERS__",o=>r0=o)}const l0=e=>{const t=re;return x0(e),e.scope.on(),()=>{e.scope.off(),x0(t)}},hn=()=>{re&&re.scope.off(),x0(null)};function Es(e){return e.vnode.shapeFlag&4}let r0=!1;function Hr(e,t=!1,o=!1){t&&po(t);const{props:n,children:s}=e.vnode,r=Es(e);cr(e,n,r,t),gr(e,s,o);const a=r?Nr(e,t):void 0;return t&&po(!1),a}function Nr(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,er);const{setup:n}=o;if(n){mt();const s=e.setupContext=n.length>1?Ur(e):null,r=l0(e),a=a0(n,e,0,[e.props,s]),l=En(a);if(pt(),r(),(l||e.sp)&&!Zt(e)&&is(e),l){if(a.then(hn,hn),t)return a.then(u=>{fn(e,u)}).catch(u=>{D0(u,e,0)});e.asyncDep=a}else fn(e,a)}else js(e)}function fn(e,t,o){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=Xn(t)),js(e)}function js(e,t,o){const n=e.type;e.render||(e.render=n.render||Ke);{const s=l0(e);mt();try{or(e)}finally{pt(),s()}}}const zr={get(e,t){return le(e,"get",""),e[t]}};function Ur(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,zr),slots:e.slots,emit:e.emit,expose:t}}function H0(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xn(Ti(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in Xt)return Xt[o](e)},has(t,o){return o in t||o in Xt}})):e.proxy}function Vr(e){return L(e)&&"__vccOpts"in e}const Ge=(e,t)=>Ei(e,t,r0),Yr="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yo;const dn=typeof window<"u"&&window.trustedTypes;if(dn)try{yo=dn.createPolicy("vue",{createHTML:e=>e})}catch{}const Ps=yo?e=>yo.createHTML(e):e=>e,$r="http://www.w3.org/2000/svg",Kr="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,gn=Xe&&Xe.createElement("template"),qr={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,n)=>{const s=t==="svg"?Xe.createElementNS($r,e):t==="mathml"?Xe.createElementNS(Kr,e):o?Xe.createElement(e,{is:o}):Xe.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,n,s,r){const a=o?o.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),o),!(s===r||!(s=s.nextSibling)););else{gn.innerHTML=Ps(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=gn.content;if(n==="svg"||n==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,o)}return[a?a.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},Qr=Symbol("_vtc");function Gr(e,t,o){const n=e[Qr];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const mn=Symbol("_vod"),Jr=Symbol("_vsh"),Zr=Symbol(""),Xr=/(^|;)\s*display\s*:/;function ea(e,t,o){const n=e.style,s=se(o);let r=!1;if(o&&!s){if(t)if(se(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();o[l]==null&&v0(n,l,"")}else for(const a in t)o[a]==null&&v0(n,a,"");for(const a in o)a==="display"&&(r=!0),v0(n,a,o[a])}else if(s){if(t!==o){const a=n[Zr];a&&(o+=";"+a),n.cssText=o,r=Xr.test(o)}}else t&&e.removeAttribute("style");mn in e&&(e[mn]=r?n.display:"",e[Jr]&&(n.display="none"))}const pn=/\s*!important$/;function v0(e,t,o){if(P(o))o.forEach(n=>v0(e,t,n));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const n=ta(e,t);pn.test(o)?e.setProperty(gt(n),o.replace(pn,""),"important"):e[n]=o}}const yn=["Webkit","Moz","ms"],eo={};function ta(e,t){const o=eo[t];if(o)return o;let n=Be(t);if(n!=="filter"&&n in e)return eo[t]=n;n=Ao(n);for(let s=0;s<yn.length;s++){const r=yn[s]+n;if(r in e)return eo[t]=r}return t}const vn="http://www.w3.org/1999/xlink";function bn(e,t,o,n,s,r=oi(t)){n&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(vn,t.slice(6,t.length)):e.setAttributeNS(vn,t,o):o==null||r&&!Dn(o)?e.removeAttribute(t):e.setAttribute(t,r?"":dt(o)?String(o):o)}function wn(e,t,o,n,s){if(t==="innerHTML"||t==="textContent"){o!=null&&(e[t]=t==="innerHTML"?Ps(o):o);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,u=o==null?e.type==="checkbox"?"on":"":String(o);(l!==u||!("_value"in e))&&(e.value=u),o==null&&e.removeAttribute(t),e._value=o;return}let a=!1;if(o===""||o==null){const l=typeof e[t];l==="boolean"?o=Dn(o):o==null&&l==="string"?(o="",a=!0):l==="number"&&(o=0,a=!0)}try{e[t]=o}catch{}a&&e.removeAttribute(s||t)}function Ot(e,t,o,n){e.addEventListener(t,o,n)}function oa(e,t,o,n){e.removeEventListener(t,o,n)}const _n=Symbol("_vei");function na(e,t,o,n,s=null){const r=e[_n]||(e[_n]={}),a=r[t];if(n&&a)a.value=n;else{const[l,u]=sa(t);if(n){const f=r[t]=aa(n,s);Ot(e,l,f,u)}else a&&(oa(e,l,a,u),r[t]=void 0)}}const In=/(?:Once|Passive|Capture)$/;function sa(e){let t;if(In.test(e)){t={};let n;for(;n=e.match(In);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let to=0;const ia=Promise.resolve(),ra=()=>to||(ia.then(()=>to=0),to=Date.now());function aa(e,t){const o=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=o.attached)return;Qe(la(n,o.value),t,5,[n])};return o.value=e,o.attached=ra(),o}function la(e,t){if(P(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const Sn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ua=(e,t,o,n,s,r)=>{const a=s==="svg";t==="class"?Gr(e,n,a):t==="style"?ea(e,o,n):O0(t)?So(t)||na(e,t,o,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ca(e,t,n,a))?(wn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&bn(e,t,n,a,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!se(n))?wn(e,Be(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),bn(e,t,n,a))};function ca(e,t,o,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Sn(t)&&L(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sn(t)&&se(o)?!1:t in e}const Tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return P(t)?o=>m0(t,o):t};function ha(e){e.target.composing=!0}function xn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const oo=Symbol("_assign"),fa={created(e,{modifiers:{lazy:t,trim:o,number:n}},s){e[oo]=Tn(s);const r=n||s.props&&s.props.type==="number";Ot(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;o&&(l=l.trim()),r&&(l=no(l)),e[oo](l)}),o&&Ot(e,"change",()=>{e.value=e.value.trim()}),t||(Ot(e,"compositionstart",ha),Ot(e,"compositionend",xn),Ot(e,"change",xn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:o,modifiers:{lazy:n,trim:s,number:r}},a){if(e[oo]=Tn(a),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?no(e.value):e.value,u=t??"";l!==u&&(document.activeElement===e&&e.type!=="range"&&(n&&t===o||s&&e.value.trim()===u)||(e.value=u))}},da=["ctrl","shift","alt","meta"],ga={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>da.some(o=>e[`${o}Key`]&&!t.includes(o))},Tt=(e,t)=>{const o=e._withMods||(e._withMods={}),n=t.join(".");return o[n]||(o[n]=(s,...r)=>{for(let a=0;a<t.length;a++){const l=ga[t[a]];if(l&&l(s,t))return}return e(s,...r)})},ma=ae({patchProp:ua},qr);let An;function pa(){return An||(An=pr(ma))}const ya=(...e)=>{const t=pa().createApp(...e),{mount:o}=t;return t.mount=n=>{const s=ba(n);if(!s)return;const r=t._component;!L(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=o(s,!1,va(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function va(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ba(e){return se(e)?document.querySelector(e):e}const wa="/music-web/assets/Bad%20Liar-aEabo1pD.mp3",_a="/music-web/assets/Bones-DZVk_zUT.mp3",Ia="/music-web/assets/Brids-Dc07VaqV.mp3",Sa="/music-web/assets/Demons-fzTvVVlw.mp3",Ta="/music-web/assets/Easy%20Come%20Easy%20Go-DkVMYczZ.mp3",xa="/music-web/assets/Eyes%20Closed-CqVTNZrK.mp3",Aa="/music-web/assets/It's%20time-CyjBifx4.mp3",ka="/music-web/assets/Monday-DAQPb7Pa.mp3",Ma="/music-web/assets/Natural-CWJ1uabs.mp3",Oa="/music-web/assets/Radioactive-BTNPSVYP.mp3",Ca="/music-web/assets/Season%20in%20the%20Sun-DVkLFWH3.mp3",Ea="/music-web/assets/Sharks-BCEIjMHK.mp3",ja="/music-web/assets/Shots-BbavNVPu.mp3",Pa="/music-web/assets/Thunder-S07EJM4a.mp3",Ba="/music-web/assets/Wake%20Up-CasNVWqE.mp3",Da="/music-web/assets/Whatever%20It%20Takes-BpnlT3sp.mp3",Ra=`[00:00.0]Bad Liar - Imagine Dragons (梦龙)
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
`,La=Object.freeze(Object.defineProperty({__proto__:null,default:Ra},Symbol.toStringTag,{value:"Module"})),Wa=`[00:00.00]Bones - Imagine Dragons
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
[02:38.00]因为我的身体里有种魔力`,Fa=Object.freeze(Object.defineProperty({__proto__:null,default:Wa},Symbol.toStringTag,{value:"Module"})),Ha=`[00:00.0]Birds - Imagine Dragons
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
`,Na=Object.freeze(Object.defineProperty({__proto__:null,default:Ha},Symbol.toStringTag,{value:"Module"})),za=`[00:00.00]Demons - Imagine Dragons (梦龙)
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
`,Ua=Object.freeze(Object.defineProperty({__proto__:null,default:za},Symbol.toStringTag,{value:"Module"})),Va=`[00:00.000] 作词 : Jayson DeZuzio/Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman
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
`,Ya=Object.freeze(Object.defineProperty({__proto__:null,default:Va},Symbol.toStringTag,{value:"Module"})),$a=`[00:00.000] 作词 : Dan Reynolds/Wayne Sermon/Ben McKee/Robin Lennart Fredriksson/Mattias Larsson
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
`,Ka=Object.freeze(Object.defineProperty({__proto__:null,default:$a},Symbol.toStringTag,{value:"Module"})),qa=`[00:00.0]It's Time - Imagine Dragons (梦龙)
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
`,Qa=Object.freeze(Object.defineProperty({__proto__:null,default:qa},Symbol.toStringTag,{value:"Module"})),Ga=`[00:00.49]Monday - Imagine Dragons
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
`,Ja=Object.freeze(Object.defineProperty({__proto__:null,default:Ga},Symbol.toStringTag,{value:"Module"})),Za=`[00:00.0]Natural - Imagine Dragons
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
`,Xa=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"})),el=`[00:00.0]Radioactive - Imagine Dragons
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
`,tl=Object.freeze(Object.defineProperty({__proto__:null,default:el},Symbol.toStringTag,{value:"Module"})),ol=`[00:00.00]Seasons in the Sun - Westlife (西城男孩)
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
`,nl=Object.freeze(Object.defineProperty({__proto__:null,default:ol},Symbol.toStringTag,{value:"Module"})),sl=`[00:00.00]Sharks - Imagine Dragons
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
`,il=Object.freeze(Object.defineProperty({__proto__:null,default:sl},Symbol.toStringTag,{value:"Module"})),rl=`[00:00.0]Shots - Imagine Dragons
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
`,al=Object.freeze(Object.defineProperty({__proto__:null,default:rl},Symbol.toStringTag,{value:"Module"})),ll=`[00:00.00]Thunder - Imagine Dragons (梦龙)
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
`,ul=Object.freeze(Object.defineProperty({__proto__:null,default:ll},Symbol.toStringTag,{value:"Module"})),cl=`[00:00.00]Wake Up - Imagine Dragons
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
`,hl=Object.freeze(Object.defineProperty({__proto__:null,default:cl},Symbol.toStringTag,{value:"Module"})),fl=`[00:00.00]Whatever It Takes - Imagine Dragons (梦龙)
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
`,dl=Object.freeze(Object.defineProperty({__proto__:null,default:fl},Symbol.toStringTag,{value:"Module"})),gl="/music-web/assets/Natural-BjAlP-yv.webp",ml=Object.freeze(Object.defineProperty({__proto__:null,default:gl},Symbol.toStringTag,{value:"Module"})),pl="/music-web/assets/Bones-COyeLGIJ.webp",yl=Object.freeze(Object.defineProperty({__proto__:null,default:pl},Symbol.toStringTag,{value:"Module"})),vl="/music-web/assets/Brids-CgI_uYZM.webp",bl=Object.freeze(Object.defineProperty({__proto__:null,default:vl},Symbol.toStringTag,{value:"Module"})),wl="/music-web/assets/Demons-CzXWi7nk.webp",_l=Object.freeze(Object.defineProperty({__proto__:null,default:wl},Symbol.toStringTag,{value:"Module"})),Il="/music-web/assets/Easy%20Come%20Easy%20Go-BPVAjHFH.webp",Sl=Object.freeze(Object.defineProperty({__proto__:null,default:Il},Symbol.toStringTag,{value:"Module"})),Tl="/music-web/assets/Eyes%20Closed-k4eJnblC.webp",xl=Object.freeze(Object.defineProperty({__proto__:null,default:Tl},Symbol.toStringTag,{value:"Module"})),Al="/music-web/assets/It's%20time-rkNuDT1A.webp",kl=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"})),Ml="/music-web/assets/Monday-BVEfZX2q.webp",Ol=Object.freeze(Object.defineProperty({__proto__:null,default:Ml},Symbol.toStringTag,{value:"Module"})),Cl="/music-web/assets/Natural-BjAlP-yv.webp",El=Object.freeze(Object.defineProperty({__proto__:null,default:Cl},Symbol.toStringTag,{value:"Module"})),jl="/music-web/assets/Radioactive-DWHcxKLc.webp",Pl=Object.freeze(Object.defineProperty({__proto__:null,default:jl},Symbol.toStringTag,{value:"Module"})),Bl="/music-web/assets/Season%20in%20the%20Sun-XuxHJwhD.webp",Dl=Object.freeze(Object.defineProperty({__proto__:null,default:Bl},Symbol.toStringTag,{value:"Module"})),Rl="/music-web/assets/Sharks-CDXkkhOZ.webp",Ll=Object.freeze(Object.defineProperty({__proto__:null,default:Rl},Symbol.toStringTag,{value:"Module"})),Wl="/music-web/assets/Shots-BQ5roRIA.webp",Fl=Object.freeze(Object.defineProperty({__proto__:null,default:Wl},Symbol.toStringTag,{value:"Module"})),Hl="/music-web/assets/Thunder-BFI2gm7s.webp",Nl=Object.freeze(Object.defineProperty({__proto__:null,default:Hl},Symbol.toStringTag,{value:"Module"})),zl="data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAB4AHgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABQADBAYHAgEI/8QAOxAAAgEDAwIDBQUGBQUAAAAAAQIDAAQRBRIhBjETQVEUImFxgTJCkaGxBxUjctHhFjNDksEkUmKC8f/EABsBAAIDAQEBAAAAAAAAAAAAAAMFBAYHAgEI/8QAMREAAgEDAwEDCwUBAAAAAAAAAQIAAwQRBRIhMRNBUQYUFSJhcYGRodHwIzKxweFC/9oADAMBAAIRAxEAPwAzGHTk+VSBcnj4UwJcDkcU083PGKTFjiaKlr2jZKwrHPxnIzXa3Ikzk4oL7WB54ruO4z27UAkxnTsQOYXF2E90Gu9wc9+9BVny9T7Nt7gGiJx1kW8tAqllHMIxWhmPu81YNO6bkn0TUZNpO1of1apHS+kNfSKqoX+QzW99M/s8iTpueORffuFBPHpTDzimi4zzMnubKrVrHd05+vE+Y7jRnVTwePKhc9gVPIrZOqOlH0m5kRkPB744qhahpw8Q10btOoPESDTnJC49aUuezKrnFRNuDirPeWZIICn0oVPYiHLP5c1GW+UtxHnoKo1L1u6C3hyO1NPb5HapkML3MpPl6VMNkcYpmlfH7jKlcWmGwggIWhY48qVF2t9hpV01Zj0gUoKB6wjDKcZzUVpRyDRIRE4xTUmnF2OBmkbYE+k7O5R+Hg7wVY+Yp6JSjfCnfZJA2AKlRWTHuPIVGqPtHJlhp1UYcSPa2kt1OkcSl5G7AVdtG6bt7HbJdMJ5v+z7q/1obYGLS0IXHit9pv8AinzrAz9qs01PW7i4c0rY7U8R1P2H57JONp2o4E0rQtVS0ZAmFUdgK2PROtYTochY4eJQB9a+VbbqtbW5VHbCt2PofjVvtOrmTTblA/cp+poFrd1LUZ8YjvtCZ8EiXjqLqMS3BZmBVmx9az/V72zdmkbAJJwV86G3+v8AtEToz9xxz51W31UvsiZgDu+0fKowuKgqdpTYgyXT0Sk9L9QQ1ctFLEWBw3pVduka5cCQ7Ez60b8eMxDPJ+FPx2MV1biSOMEnv6g1a9K1Rbgndww/Myp6vpxs6W1M7G7/AA9kg2GjLsDoOK4uLMqTxVhiTwIQm3FQrmPcDxVnpXLs2T0mZXNvSVcZ5lbmt+aVEprelTYVZXDT5g+G2GfjUtLIGoUeoxnByKJfvW09hgAyLkO/iccFTjbzny54x51XmummppaV8zkacuaY1HZYomMbmyfpTy6rBn7zfIZqu9S6sj3gChgqoBhhj40nva9SrSNNe+XXQLCvVu1FToOfz4z2e/JP2qY9rJ+9VfudQdmOM1NXVbEaL4XgOdRP+oR2O/O4Nu7bPd27e/Oarg098TYRZlAMDrCEpE64zyOxqfY6vI1pIknDhgDj4Zqrw6i2eeaf/eAAPlQmoPjaRCvZsy7WEsEuok5GaD3l3J4wZTwPP0qFLqJxxk0/Z6lp40+6W6gaW6bd4bYyMFMLg7htIfk8HI44otvbOrZg/Mwq+suRDUOr/wAJRvyQO9WTo/V/Emkt3bO8ZHzH9s/hWYRTsvnirP0fPjWbQk4BkUH5E4/5runbG2ftBFGsaWtazq08dQfmOR9ZqLANUZ4g2eKJC3hjzgg0/p8+nWzub23NypKbVVyuAG97t8PL8x3qw0L0NgAz5vudP6nErcsHwpVLk2tnnilTAXqjviX0c56CYquqMD3qRHqj8cmqLH1BM/aDPyBoXZ9RX7dbTxMmIzbALHzgAYbd9STTDzF2B46DM2kahpyFBnO4gdDxnPP0msW+pHd3qNrcpkuVbyZB+XFVyLWJwR7iZ+tSbnWJp0QSRopXOCDzilxtnVs4l1064s6dYGmcn3GPcYrjtUb28gcrXseo7Xy0asPjmuHpMoziXNbylnH9SfaRGaYKPOrfF0cJNN9o8vjVY0vXLWGYF4VHxH/2tQsNVsLrou+uxdpE8DoiwNjc4OeQPhiqZqFa4VgKakcyDf3z09uwHqBMq1C3NrOUByKiZ59KJ6nrFpLIcKpOfNP70FlvFaQlCoB8sU8sy9VcFYyW7QKN/ElqeBR3p6UQXsD5xtcH8Dmqc0l03+XLgfT+lSrT96HAjnIbyxtzTN7YsuCQIpvb6kabKM/Ka3J1aFJ5qJJ1iuDzWXXUWupljNO38gUj8hVL6x1fWNMSzxPdo73AI3ZAbHOP7US20ZahAVx85j2pXljboWZGOPZN+frJccGlWJyatqiqd0lxgeqdqVThow8RELalZg4CH6QhbrbqAVl3D1aQn9TUFZY/8USiMxSP7IvuhwG+165pm20jThgzamkmPIKB+tcaXoNo3XEkySytAsA/hJG497AHLAYxxmngoqNxJ7pWn1WqdoHGDLNaxyTSbcLEwHYtu/ECmdYU29yqk7hsBztxR0Wtmdn/AE4Xb2900L1uxhjAlhjdc+6+SxHwxmlVcFBuAlw8m9TFW+SnUbrnvx3QMLr3e9ctdcdzXLQjJ7/ga4ECK7PhizcHg1BNYMOk3JGVeA38SZazIzDMm35ite6csbR/2b6nOzM770UEDAX6bSayXTREbhCwbbnnaOavx1AwaBPbL4zW0mMB9odf1yPwNV29UsQFEWajvq7UVscg9RKNqmI5W2yn/aaF+1befEJP8lEL5NzttLY9CaGSQ5OCeaaWvqgZjFmKpw2T8PtHRftjv+VF9Aupbi/gQbDlwMNn1+BoKsHuHgD/AMjxRXp2eKwv0nnOY48sduDyBxTFgXGEiHUL6hStqjVRjAJHTn+/pNMW1jwAQPpVU/aBaafFp9m8xt45fbrfY8q8n+IMgefapEXVtm7o+WZlzht0RIz/AO3FVnr5Lbq2ytl8Se19nmEwlj2MPQ8bwM+ho1rYMlVSxwJhF5rL1KbIBLrJFpk5beYT8yKVZ9P1Whk8KDVLuH2cBZZrq1i2n4h1Ugk/AYpVK9HY/wCyPn9pDXV7h+doPwgbTuj7UKrXsslxJ3KqdqZ+nJ+tWu3kWBVRHKxgYCcBR9AKqcHtisA8zOPPcdp/KiSzEqBuf5E1YDTLdZWWJP7ofTUQGxuFSDcRzRsjnKtwaqhyx4dx9alQXBhHBJ+JOaHUt1dcGGt6tSg4qU+oOZIuLcwZKnevoO+PhUdTvHmv8ykVMivTINrDIqfawJIR5/Kqfd2r2rZIyvj959FaB5QJqdEAsFqDqp/leeR7O73dQ8NuZZAFbIzgkA8VfLTTo7np2VGlkeWMpgIvHJPnT2i6THI6kcmtZ0XoV5enrl2QZkClQfPGf61CZRVUYXp+eEZ3d61NgXcY93+z511CzaFipOG9DQWZNp5BPyUmtX6k0MxyvCEGc4PFUi80RrdGwQvOcMamUkVSPHwgbzUmFLDMAvj4QUIGktdqoV47v3H09aLaYi2sGD4RZuTuHIPzofIRbHcN2fMA8fhUJr9txVuTnIwMU5s7Nl5f5TMfKLXher2VE5HefH3eyGLvp3TL+RpZIAHYYPhsVHz4ocvTPsjk2d/LbjOdrKHH51Ptb3fAPsg48zTUl5355+FOUBBxMuqu/JDSu6tol80pPslneA/60S+DJ9QCBSow92T25pVI2kyKt06cCNnTm9K9Fkw8s0a8NcYFei3HzoJq4l4SwXPIgRbHHrzz3pxbAkd2oy1rwAF3Me3pXUdkxHvN/tGKCahjSlZU+sERWfhjAzgURswsbAlwv1p06eN3K7vnzT4tDEO236YrksW4jFLalTIbEsXT+rLFKAsUkhXnIAx+orfem+rrafp0SuFQQpyCc18zWt9Jp0wbB7djRyz6xlXR9QQnaWMWABjzNC83QDIWR7qs9UhA5Hs/2FeuuoY769ma3ZokLdkbGfr3rL9SdHmZyWck/fdm/U05q+vO8jFuMn0xQCe8dicq3l5Hz7fjTinbUlUFFAmfXd3cNUYVKhbn4STLKASdoB9QKh3MmcMh5FMTXJCjOQD6io3jk9zXYokHInC3C7CrSZb37gkE097SSSc0K37WznivTd4HepHZg8xU7d0Ivccd6VC2u+DzSrzZA4mgpImeT58iu2nTcFRgPU+lKlScqNs0x6zdqBJMdwgUDOR8669pReM0qVcbRiSqdRi2J6l0h5JolJ1bf7UBuNyp4m0MikDeCH4x57j+NKlXm0Yh0cvUKtB83Vd/bzLNFOI5UUAMqLyNpXnjngkc1WLzqC4KyStJmRPBVTgcBOF/AAUqVSKY4i+74IIgnUOu9VuJXaS5DlhMp3RL2l/zB2+9j+lRx1xqgkLi5CuXSQssaglkxtPbvkA/HFKlTZANolIr/vMial1JdasytdSiQqXYe6FwWbc3YepJx5eVDzeA+dKlRAMSG3SeG7B86Ylu/jSpV7BYkdrs+RJpUqVck4h1QEZn/9k=",Ul=Object.freeze(Object.defineProperty({__proto__:null,default:zl},Symbol.toStringTag,{value:"Module"})),Vl="/music-web/assets/Whatever%20It%20Takes-BQcRQVsM.webp",Yl=Object.freeze(Object.defineProperty({__proto__:null,default:Vl},Symbol.toStringTag,{value:"Module"})),$l="/music-web/assets/shape-eqqK86Ed.webp",Kl=Object.freeze(Object.defineProperty({__proto__:null,default:$l},Symbol.toStringTag,{value:"Module"})),ge=R(null),ht=R(null),Kt=R(null),Wt=R(null),Bs=()=>{ge.value||(ge.value=new window.AudioContext,Wt.value=ge.value.createAnalyser(),Wt.value.fftSize=256,ht.value=ge.value.createGain(),ht.value=ge.value.createGain(),ht.value.connect(ge.value.destination),Et(Ce.value))},A0=R(null),st=R(!1),Ye=R(null),N0=R(0),No=R(0),ql=R(!0),ft=R({}),Ft=async(e=De.value[xe.value])=>{if(ft.value.audioUrl&&e.audioUrl===ft.value.audioUrl&&!(Math.abs(Pe.value-Ae.value)<=1))return;const t=De.value.findIndex(o=>o.audioUrl===e.audioUrl);xe.value=t,Kt.value&&Kt.value!==null&&(Kt.value.destroy(),Kt.value=null),Bs();try{$e.value.unshift(`正在加载音频：${e.id}`);const n=await(await fetch(e.audioUrl)).arrayBuffer();return A0.value=await ge.value.decodeAudioData(n),Pe.value=A0.value.duration,ft.value=e,z0(),!0}catch(o){return console.error("音频加载失败:",o),!1}},Ds=R(0),zo=R(0),vo=R(null);function z0(){var t;if(ql.value&&ft.value.hasOwnProperty("time")&&(((t=ft.value)==null?void 0:t.time)??0)<=0){$e.value.unshift("当前歌曲可听部分已结束，请重新购买或选择其他音频。"),Ae.value=0,$e.value.unshift("即将播放下一首歌。"),vo.value=setTimeout(()=>{Yo()},3e3);return}if(!A0.value){Ft();return}Kt.value={play:z0,pause:Uo,stop:U0,destroy:Ws,setVolume:Et,seek:Ls,onProgress:Gl},Ye.value=ge.value.createBufferSource(),Ye.value.buffer=A0.value,Ye.value.connect(Wt.value),Wt.value.connect(ht.value);const e=N0.value;return Ye.value.start(0,e),No.value=ge.value.currentTime-e,st.value=!0,Ds.value=Date.now(),Ye.value.onended=()=>{Math.abs(Pe.value-Ae.value)<=1&&Xl[qt.value]()},Ql(),!0}const Rs=()=>{if(ft.value.hasOwnProperty("time")){const e=De.value.findIndex(t=>t.audioUrl===ft.value.audioUrl);De.value[e].time-=Number(((zo.value-Ds.value)/1e3).toFixed(0))}},Uo=()=>st.value?(Ye.value.stop(),N0.value=ge.value.currentTime-No.value,st.value=!1,cancelAnimationFrame(Vo.value),zo.value=Date.now(),Rs(),!0):!1,U0=()=>{st.value&&(st.value=!1,Ye.value.stop(),Ye.value.disconnect(),zo.value=Date.now(),Rs(),ft.value={}),N0.value=0,cancelAnimationFrame(Vo.value)};function Et(e){const t=Math.max(0,Math.min(1,e));ht.value&&ge.value&&(ht.value.gain.value=t)}const Ls=e=>{if(e>=0&&e<=Pe.value){const t=st.value;return Uo(),N0.value=e,t&&z0(),!0}return!1},bo=R(null),Vo=R();function Ql(){const e=()=>{st.value&&(Ae.value=ge.value.currentTime-No.value,Pe.value!==0&&Ae.value>=Pe.value&&U0(),bo.value&&bo.value({currentTime:Ae.value,duration:Pe.value,progress:Fs.value*100}),Vo.value=requestAnimationFrame(e))};e()}function Gl(e){bo.value=e}function Ws(){var e,t,o;U0(),ge.value&&((e=ge.value)==null||e.close(),(t=Ye.value)==null||t.disconnect(),(o=ht.value)==null||o.disconnect(),ge.value=null,ht.value=null,Ye.value=null)}var It=(e=>(e.Sequence="SEQUENCE",e.Random="RANDOM",e.Single="SINGLE",e))(It||{});function kn(e){if(isNaN(e))return"00:00";const t=Math.abs(Math.floor(e)),o=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,r=[];return o>0&&r.push(o.toString().padStart(2,"0")),r.push(n.toString().padStart(2,"0")),r.push(s.toString().padStart(2,"0")),r.join(":")}const Jl=(e=1,t)=>Math.floor(Math.random()*e),ct=R(window.innerWidth/750),ot=R(window.innerWidth),wo=()=>{ct.value=window.innerWidth/750,ot.value=window.innerWidth};wo();const Ce=R(.5),xe=R(0),Ae=R(0),Pe=R(0),qt=R(It.Sequence),_o=R(!1),Fs=Ge(()=>Pe.value!==0?Ae.value/Pe.value:0),Zl=()=>{xe.value===0?xe.value=De.value.length-1:xe.value--,Ft()},Yo=()=>{xe.value===De.value.length-1?xe.value=0:xe.value++,Ft()},Xl={SEQUENCE:()=>Yo(),RANDOM:()=>{xe.value=Jl(De.value.length-1,xe.value),Ft()},SINGLE:()=>{Ft()}},k0=R({Bones:0,Demons:15,Brids:7800,"Bad Liar":360}),M0=R(""),Hs=(e="#4fa273")=>{M0.value=e,document.documentElement.style.setProperty("--base-color",M0.value)};Hs();const eu=(e,t)=>{e in k0.value&&(k0.value[e]+=t);const o=De.value.find(n=>n.id===e);o&&(o.time+=t)},De=R([]),ke=Ge(()=>De.value[xe.value]),tu=["Season in the Sun","Shots"],ou=async()=>{try{const e=Object.assign({"/src/assets/music/Bad Liar.mp3":wa,"/src/assets/music/Bones.mp3":_a,"/src/assets/music/Brids.mp3":Ia,"/src/assets/music/Demons.mp3":Sa,"/src/assets/music/Easy Come Easy Go.mp3":Ta,"/src/assets/music/Eyes Closed.mp3":xa,"/src/assets/music/It's time.mp3":Aa,"/src/assets/music/Monday.mp3":ka,"/src/assets/music/Natural.mp3":Ma,"/src/assets/music/Radioactive.mp3":Oa,"/src/assets/music/Season in the Sun.mp3":Ca,"/src/assets/music/Sharks.mp3":Ea,"/src/assets/music/Shots.mp3":ja,"/src/assets/music/Thunder.mp3":Pa,"/src/assets/music/Wake Up.mp3":Ba,"/src/assets/music/Whatever It Takes.mp3":Da}),t=Object.assign({"/src/assets/music/Bad Liar.js":La,"/src/assets/music/Bones.js":Fa,"/src/assets/music/Brids.js":Na,"/src/assets/music/Demons.js":Ua,"/src/assets/music/Easy Come Easy Go.js":Ya,"/src/assets/music/Eyes Closed.js":Ka,"/src/assets/music/It's time.js":Qa,"/src/assets/music/Monday.js":Ja,"/src/assets/music/Natural.js":Xa,"/src/assets/music/Radioactive.js":tl,"/src/assets/music/Season in the Sun.js":nl,"/src/assets/music/Sharks.js":il,"/src/assets/music/Shots.js":al,"/src/assets/music/Thunder.js":ul,"/src/assets/music/Wake Up.js":hl,"/src/assets/music/Whatever It Takes.js":dl}),o=Object.assign({"/src/assets/images/music/Bad Liar.webp":ml,"/src/assets/images/music/Bones.webp":yl,"/src/assets/images/music/Brids.webp":bl,"/src/assets/images/music/Demons.webp":_l,"/src/assets/images/music/Easy Come Easy Go.webp":Sl,"/src/assets/images/music/Eyes Closed.webp":xl,"/src/assets/images/music/It's time.webp":kl,"/src/assets/images/music/Monday.webp":Ol,"/src/assets/images/music/Natural.webp":El,"/src/assets/images/music/Radioactive.webp":Pl,"/src/assets/images/music/Season in the Sun.webp":Dl,"/src/assets/images/music/Sharks.webp":Ll,"/src/assets/images/music/Shots.webp":Fl,"/src/assets/images/music/Thunder.webp":Nl,"/src/assets/images/music/Wake Up.webp":Ul,"/src/assets/images/music/Whatever It Takes.webp":Yl,"/src/assets/images/music/shape.webp":Kl});De.value=await Promise.all(Object.entries(e).map(async([n,s])=>{const r=n.replace(/^.*music\//,"").replace(/\.mp3$/,""),a=`/src/assets/music/${r}.js`,l=`/src/assets/images/music/${r}.webp`,u=t[a]||{default:""},f=o[l]||{default:""};let c={id:r,title:nu(r),audioUrl:s,lyric:u.default,logo:f.default,type:tu.includes(r)?1:0};return k0.value.hasOwnProperty(r)&&(c.time=k0.value[r]),c}))}catch(e){console.error("加载音乐数据失败:",e)}};function nu(e){return e.replace(/^\d+_/,"").replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}const Yt=Ge(()=>{var e;return((e=ke.value)==null?void 0:e.lyric.split(`
`).map(t=>{var r,a,l;if(!t)return{};const o=(r=t==null?void 0:t.split("]")[0])==null?void 0:r.replace("[",""),n=Number((a=o==null?void 0:o.split(":"))==null?void 0:a[0])||0,s=Number((l=o==null?void 0:o.split(":"))==null?void 0:l[1])||0;return{time:n*60+s,text:t.split("]")[1]}}))||["暂无歌词"]}),$e=R([]),su={class:"progress"},iu=Re({__name:"progress",props:{callback:{type:Function},progress:{}},setup(e){const t=e,o=R(!1),n=f=>{f.preventDefault(),o.value=!0,window.addEventListener("mousemove",s),window.addEventListener("touchmove",s),window.addEventListener("mouseup",r),window.addEventListener("touchend",r)};function s(f){o.value&&l(f)}function r(){o.value=!1,window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",s)}const a=R(null);function l(f){var x,I;const g=a.value.getBoundingClientRect();let v=((f.clientX??((I=(x=f.touches)==null?void 0:x[0])==null?void 0:I.clientX))-g.left)/g.width;v=Math.max(0,Math.min(1,v)),t.callback(Number(v.toFixed(2)))}function u(f){l(f)}return(f,c)=>(J(),Z("div",su,[F("div",{class:"custom-slider",ref_key:"sliderRef",ref:a},[F("div",{class:"track",onClick:u},[F("div",{class:"fill",style:nt({width:f.progress*100+"%"})},null,4)]),F("div",{class:"thumb",style:nt({left:f.progress*100+"%"}),onMousedown:n,onTouchstart:n},null,36)],512)]))}}),Le=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},Ns=Le(iu,[["__scopeId","data-v-f86261f1"]]),ru="/music-web/assets/music-C0v9vemk.jpg",au={class:"progress-bar"},lu={class:"progress-bar__logo"},uu=["src"],cu={class:"progress-bar__info"},hu={class:"name"},fu={class:"progress-bar__info__progress"},du={class:"time"},gu=Re({__name:"progressBar",setup(e){const t=s=>{Ae.value=s*Pe.value,Ls(Ae.value)},o=Ge(()=>kn(Ae.value)),n=Ge(()=>kn(Pe.value));return(s,r)=>{var a,l;return J(),Z("div",au,[F("div",lu,[F("img",{src:((a=W(ke))==null?void 0:a.logo)||W(ru),alt:"音乐logo"},null,8,uu)]),F("div",cu,[F("p",hu,qe(((l=W(ke))==null?void 0:l.title)||"暂无音乐"),1),F("div",fu,[ne(Ns,{progress:W(Fs),callback:t},null,8,["progress"]),F("p",du,[F("span",null,qe(W(o)),1),r[0]||(r[0]=mo()),r[1]||(r[1]=F("i",null,"/",-1)),r[2]||(r[2]=mo()),F("span",null,qe(W(n)),1)])])])])}}}),mu=Le(gu,[["__scopeId","data-v-f27a4094"]]),pu={class:"volume-percent"},yu=Re({__name:"volume",setup(e){const t=Ge(()=>Ce.value===0),o=R(.5);Et(Ce.value);const n=u=>{Ce.value=u,Et(u)},s=()=>{t.value?Ce.value=o.value:(o.value=Ce.value,Ce.value=0),Et(Ce.value)};je(()=>Ce.value,u=>{Et(u)});const r=R(!1),a=()=>{r.value=!0},l=()=>{r.value=!1};return(u,f)=>(J(),Z("div",{class:"contoel-volume",onMouseenter:a,onMouseleave:l},[F("span",{class:ve(["iconfont",{"icon-jingyin":W(t),"icon-yinliang":!W(t)}]),onClick:Tt(s,["stop"])},null,2),F("div",{class:ve(["contoel-volume__model",{active:W(r)}])},[ne(Ns,{progress:W(Ce),callback:n},null,8,["progress"]),F("span",pu,qe((W(Ce)*100).toFixed(0))+"% ",1)],2)],32))}}),vu=Le(yu,[["__scopeId","data-v-0020b177"]]),bu={class:"control-btn"},wu=Re({__name:"playBtn",setup(e){return(t,o)=>(J(),Z("div",bu,[F("span",{class:"iconfont icon-prev",onClick:o[0]||(o[0]=n=>W(Zl)()),title:"上一首"}),W(st)?(J(),Z("span",{key:1,class:"iconfont icon-zanting",onClick:o[2]||(o[2]=n=>W(Uo)()),title:"暂停"})):(J(),Z("span",{key:0,class:"iconfont icon-bofang",onClick:o[1]||(o[1]=n=>W(z0)()),title:"播放"})),F("span",{class:"iconfont icon-tingzhi",onClick:o[3]||(o[3]=n=>W(U0)()),title:"停止"}),F("span",{class:"iconfont icon-next",onClick:o[4]||(o[4]=n=>W(Yo)()),title:"下一首"})]))}}),_u=Le(wu,[["__scopeId","data-v-25589bc6"]]),Iu={class:"btn-list"},Su=["title","onClick"],Tu=["onClick"],xu=Re({__name:"controlBtn",emits:["update:showBorad"],setup(e,{emit:t}){const o={SEQUENCE:"icon-shunxubofang",RANDOM:"icon-suijibofang",SINGLE:"icon-danquxunhuan"},n=t,s=Ge(()=>[{title:"播放列表",icon:"icon-play_list",click:()=>{n("update:showBorad",!0)}},{title:"顺序切换",icon:o[qt.value],click:()=>{qt.value=qt.value===It.Sequence?It.Random:qt.value===It.Random?It.Single:It.Sequence}}]),r=["#4fa273","#9a8c53","#a95737","#6576b0","#e6b360","#4c4e53","#8f6aa8","#e9de64"],a=R(!1);return(l,u)=>(J(),Z("div",Iu,[(J(!0),Z(ye,null,s0(W(s),f=>(J(),Z("span",{class:ve(["iconfont",f.icon]),key:f.icon,title:f.title,onClick:Tt(f.click,["stop"])},null,10,Su))),128)),F("div",{class:"color-change",onMouseenter:u[0]||(u[0]=f=>a.value=!0),onMouseleave:u[1]||(u[1]=f=>a.value=!1)},[F("div",{class:ve(["color-chose-list",{active:W(a)}])},[(J(),Z(ye,null,s0(r,f=>F("span",{key:f,class:ve({active:f===W(M0)}),style:nt({"--bg":f}),onClick:c=>W(Hs)(f)},null,14,Tu)),64))],2)],32)]))}}),Au=Le(xu,[["__scopeId","data-v-2816a963"]]),ku={style:{width:"100%",height:"100%",overflow:"auto"}},Mu=["onClick"],Ou=Re({__name:"musicListBoard",props:{show:{},showModifiers:{}},emits:tr(["update:show"],["update:show"]),setup(e,{emit:t}){const o=(u,f)=>{xe.value=f,Ft(u),r()},n=Tr(e,"show"),s=t,r=()=>{s("update:show",!1)},a=R(null);je(()=>ke.value,u=>{u!=null&&u.logo&&R0(()=>{a.value.style.background=`url(${u.logo}) no-repeat 100% / cover`})});const l=u=>u.time||u.time===0?"付费音乐":u.type===1?"允许试听":"免费音乐";return(u,f)=>(J(),Z("div",{class:ve(["music-list-board",{active:n.value}]),ref_key:"boardRef",ref:a},[f[1]||(f[1]=F("div",{class:"bg-image"},null,-1)),F("div",ku,[(J(!0),Z(ye,null,s0(W(De),(c,g)=>(J(),Z("div",{key:c.id,class:ve(["music-item",{active:g===W(xe)}]),onClick:Tt(m=>o(c,g),["stop"])},[F("span",null,qe(c.title),1),F("span",null,qe(l(c)),1)],10,Mu))),128))]),F("div",{class:"music-list-down",onClick:Tt(r,["stop"])},f[0]||(f[0]=[F("span",{class:"iconfont icon-xia"},null,-1)]))],2))}}),Cu=Le(Ou,[["__scopeId","data-v-1fa861c3"]]),Eu={class:"control-module"},ju={class:"controls-row"},Pu=Re({__name:"index",setup(e){const t=R(!1),o=R(null);return je(()=>ke.value,n=>{n!=null&&n.logo&&R0(()=>o.value.style.background=`url(${n.logo}) no-repeat 100% / cover`)}),(n,s)=>(J(),Z("div",Eu,[F("div",{ref_key:"controlModuleRef",ref:o,class:"bg-image"},null,512),ne(mu),F("div",ju,[ne(_u),ne(Au,{showBorad:W(t),"onUpdate:showBorad":s[0]||(s[0]=r=>ie(t)?t.value=r:null)},null,8,["showBorad"]),ne(vu)]),ne(Cu,{show:W(t),"onUpdate:show":s[1]||(s[1]=r=>ie(t)?t.value=r:null)},null,8,["show"])]))}}),Bu=Le(Pu,[["__scopeId","data-v-d8ea7668"]]),Du=["width","height"],Ru=Re({__name:"index",setup(e){const t=Ge(()=>ot.value<768?ot.value-100*ct.value:400),o={centerRadius:100*(ot.value<768?ct.value:1),bars:86,maxBarLength:100*(ot.value<768?ct.value:1),rotateSpeed:.05,barWidth:6*(ot.value<768?ct.value:1),smoothFactor:.85};let n=0,s=new Array(o.bars).fill(0);const r=new Image,a=R(null),l=R(null);let u,f,c;const g=()=>{if(requestAnimationFrame(g),Wt.value.getByteFrequencyData(a.value),u.clearRect(0,0,l.value.width,l.value.height),u.fillStyle="transparent",u.fillRect(0,0,l.value.width,l.value.height),f=l.value.width/2,c=l.value.height/2,u.save(),u.beginPath(),u.arc(f,c,o.centerRadius,0,Math.PI*2),u.clip(),u.drawImage(r,f-o.centerRadius,c-o.centerRadius,o.centerRadius*2,o.centerRadius*2),u.restore(),u.save(),!st.value)return;u.translate(f,c),n+=o.rotateSpeed,u.rotate(n*Math.PI/180);const m=Math.PI*2/o.bars;let v=0;for(let x=0;x<o.bars;x++){const I=a.value[x]/255;s[x]=I>s[x]?I:s[x]*o.smoothFactor;const H=s[x]*o.maxBarLength;u.fillStyle=M0.value,u.save(),u.rotate(v),u.beginPath(),u.roundRect(-o.barWidth/2,-o.centerRadius-H,o.barWidth,H,o.barWidth/2),u.fill(),u.restore(),v+=m}u.restore()};return je(()=>ke.value,m=>{r.src=m.logo,a.value=new Uint8Array(Wt.value.frequencyBinCount),r.onload=()=>{R0(()=>{u=l.value.getContext("2d"),g()})}},{deep:!0}),(m,v)=>(J(),Z("canvas",{ref_key:"canvasRef",ref:l,width:W(t),height:W(t)},null,8,Du))}}),Lu=Le(Ru,[["__scopeId","data-v-8ab6b584"]]);var g0=function(e,t){return e<t?-1:e>t?1:0},Mn=function(e){return e.reduce(function(t,o){return t+o},0)},Wu=function(){function e(o){this.colors=o}var t=e.prototype;return t.palette=function(){return this.colors},t.map=function(o){return o},e}(),Fu=function(){function e(r,a,l){return(r<<10)+(a<<5)+l}function t(r){var a=[],l=!1;function u(){a.sort(r),l=!0}return{push:function(f){a.push(f),l=!1},peek:function(f){return l||u(),f===void 0&&(f=a.length-1),a[f]},pop:function(){return l||u(),a.pop()},size:function(){return a.length},map:function(f){return a.map(f)},debug:function(){return l||u(),a}}}function o(r,a,l,u,f,c,g){var m=this;m.r1=r,m.r2=a,m.g1=l,m.g2=u,m.b1=f,m.b2=c,m.histo=g}function n(){this.vboxes=new t(function(r,a){return g0(r.vbox.count()*r.vbox.volume(),a.vbox.count()*a.vbox.volume())})}function s(r,a){if(a.count()){var l=a.r2-a.r1+1,u=a.g2-a.g1+1,f=Math.max.apply(null,[l,u,a.b2-a.b1+1]);if(a.count()==1)return[a.copy()];var c,g,m,v,x=0,I=[],H=[];if(f==l)for(c=a.r1;c<=a.r2;c++){for(v=0,g=a.g1;g<=a.g2;g++)for(m=a.b1;m<=a.b2;m++)v+=r[e(c,g,m)]||0;I[c]=x+=v}else if(f==u)for(c=a.g1;c<=a.g2;c++){for(v=0,g=a.r1;g<=a.r2;g++)for(m=a.b1;m<=a.b2;m++)v+=r[e(g,c,m)]||0;I[c]=x+=v}else for(c=a.b1;c<=a.b2;c++){for(v=0,g=a.r1;g<=a.r2;g++)for(m=a.g1;m<=a.g2;m++)v+=r[e(g,m,c)]||0;I[c]=x+=v}return I.forEach(function(D,j){H[j]=x-D}),function(D){var j,C,M,N,G,te=D+"1",oe=D+"2",ce=0;for(c=a[te];c<=a[oe];c++)if(I[c]>x/2){for(M=a.copy(),N=a.copy(),G=(j=c-a[te])<=(C=a[oe]-c)?Math.min(a[oe]-1,~~(c+C/2)):Math.max(a[te],~~(c-1-j/2));!I[G];)G++;for(ce=H[G];!ce&&I[G-1];)ce=H[--G];return M[oe]=G,N[te]=M[oe]+1,[M,N]}}(f==l?"r":f==u?"g":"b")}}return o.prototype={volume:function(r){var a=this;return a._volume&&!r||(a._volume=(a.r2-a.r1+1)*(a.g2-a.g1+1)*(a.b2-a.b1+1)),a._volume},count:function(r){var a=this,l=a.histo;if(!a._count_set||r){var u,f,c,g=0;for(u=a.r1;u<=a.r2;u++)for(f=a.g1;f<=a.g2;f++)for(c=a.b1;c<=a.b2;c++)g+=l[e(u,f,c)]||0;a._count=g,a._count_set=!0}return a._count},copy:function(){var r=this;return new o(r.r1,r.r2,r.g1,r.g2,r.b1,r.b2,r.histo)},avg:function(r){var a=this,l=a.histo;if(!a._avg||r){var u,f,c,g,m=0,v=0,x=0,I=0;if(a.r1===a.r2&&a.g1===a.g2&&a.b1===a.b2)a._avg=[a.r1<<3,a.g1<<3,a.b1<<3];else{for(f=a.r1;f<=a.r2;f++)for(c=a.g1;c<=a.g2;c++)for(g=a.b1;g<=a.b2;g++)m+=u=l[e(f,c,g)]||0,v+=u*(f+.5)*8,x+=u*(c+.5)*8,I+=u*(g+.5)*8;a._avg=m?[~~(v/m),~~(x/m),~~(I/m)]:[~~(8*(a.r1+a.r2+1)/2),~~(8*(a.g1+a.g2+1)/2),~~(8*(a.b1+a.b2+1)/2)]}}return a._avg},contains:function(r){var a=this,l=r[0]>>3;return gval=r[1]>>3,bval=r[2]>>3,l>=a.r1&&l<=a.r2&&gval>=a.g1&&gval<=a.g2&&bval>=a.b1&&bval<=a.b2}},n.prototype={push:function(r){this.vboxes.push({vbox:r,color:r.avg()})},palette:function(){return this.vboxes.map(function(r){return r.color})},size:function(){return this.vboxes.size()},map:function(r){for(var a=this.vboxes,l=0;l<a.size();l++)if(a.peek(l).vbox.contains(r))return a.peek(l).color;return this.nearest(r)},nearest:function(r){for(var a,l,u,f=this.vboxes,c=0;c<f.size();c++)((l=Math.sqrt(Math.pow(r[0]-f.peek(c).color[0],2)+Math.pow(r[1]-f.peek(c).color[1],2)+Math.pow(r[2]-f.peek(c).color[2],2)))<a||a===void 0)&&(a=l,u=f.peek(c).color);return u},forcebw:function(){var r=this.vboxes;r.sort(function(f,c){return g0(Mn(f.color),Mn(c.color))});var a=r[0].color;a[0]<5&&a[1]<5&&a[2]<5&&(r[0].color=[0,0,0]);var l=r.length-1,u=r[l].color;u[0]>251&&u[1]>251&&u[2]>251&&(r[l].color=[255,255,255])}},{quantize:function(r,a){if(!Number.isInteger(a)||a<1||a>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!r.length||a<2||a>256||!r.length||a<2||a>256)return!1;for(var l=[],u=new Set,f=0;f<r.length;f++){var c=r[f],g=c.join(",");u.has(g)||(u.add(g),l.push(c))}if(l.length<=a)return new Wu(l);var m=function(j){var C,M=new Array(32768);return j.forEach(function(N){C=e(N[0]>>3,N[1]>>3,N[2]>>3),M[C]=(M[C]||0)+1}),M}(r);m.forEach(function(){});var v=function(j,C){var M,N,G,te=1e6,oe=0,ce=1e6,Oe=0,Je=1e6,rt=0;return j.forEach(function(at){(M=at[0]>>3)<te?te=M:M>oe&&(oe=M),(N=at[1]>>3)<ce?ce=N:N>Oe&&(Oe=N),(G=at[2]>>3)<Je?Je=G:G>rt&&(rt=G)}),new o(te,oe,ce,Oe,Je,rt,C)}(r,m),x=new t(function(j,C){return g0(j.count(),C.count())});function I(j,C){for(var M,N=j.size(),G=0;G<1e3;){if(N>=C||G++>1e3)return;if((M=j.pop()).count()){var te=s(m,M),oe=te[0],ce=te[1];if(!oe)return;j.push(oe),ce&&(j.push(ce),N++)}else j.push(M),G++}}x.push(v),I(x,.75*a);for(var H=new t(function(j,C){return g0(j.count()*j.volume(),C.count()*C.volume())});x.size();)H.push(x.pop());I(H,a);for(var D=new n;H.size();)D.push(H.pop());return D}}}().quantize,zs=function(e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=e.naturalWidth,this.height=this.canvas.height=e.naturalHeight,this.context.drawImage(e,0,0,this.width,this.height)};zs.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var Ct=function(){};Ct.prototype.getColor=function(e,t){return t===void 0&&(t=10),this.getPalette(e,5,t)[0]},Ct.prototype.getPalette=function(e,t,o){var n=function(l){var u=l.colorCount,f=l.quality;if(u!==void 0&&Number.isInteger(u)){if(u===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");u=Math.max(u,2),u=Math.min(u,20)}else u=10;return(f===void 0||!Number.isInteger(f)||f<1)&&(f=10),{colorCount:u,quality:f}}({colorCount:t,quality:o}),s=new zs(e),r=function(l,u,f){for(var c,g,m,v,x,I=l,H=[],D=0;D<u;D+=f)g=I[0+(c=4*D)],m=I[c+1],v=I[c+2],((x=I[c+3])===void 0||x>=125)&&(g>250&&m>250&&v>250||H.push([g,m,v]));return H}(s.getImageData().data,s.width*s.height,n.quality),a=Fu(r,n.colorCount);return a?a.palette():null},Ct.prototype.getColorFromUrl=function(e,t,o){var n=this,s=document.createElement("img");s.addEventListener("load",function(){var r=n.getPalette(s,5,o);t(r[0],e)}),s.src=e},Ct.prototype.getImageData=function(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="arraybuffer",o.onload=function(){if(this.status==200){var n=new Uint8Array(this.response);i=n.length;for(var s=new Array(i),r=0;r<n.length;r++)s[r]=String.fromCharCode(n[r]);var a=s.join(""),l=window.btoa(a);t("data:image/png;base64,"+l)}},o.send()},Ct.prototype.getColorAsync=function(e,t,o){var n=this;this.getImageData(e,function(s){var r=document.createElement("img");r.addEventListener("load",function(){var a=n.getPalette(r,5,o);t(a[0],this)}),r.src=s})};const Hu={class:"music-show-more",title:"购买音频"},Nu={key:0},zu=Re({__name:"Music",setup(e){const t=new Ct,o=R("transparent"),n=async()=>{var x;if((x=ke.value)!=null&&x.logo)try{const I=new Image;I.crossOrigin="Anonymous",I.src=ke.value.logo,await new Promise((D,j)=>{I.onload=D,I.onerror=j});const H=await t.getColor(I,5);o.value=`rgba(${H[0]}, ${H[1]}, ${H[2]}, .7)`}catch(I){console.error("获取背景色失败:",I),o.value="transparent"}};Ro(()=>{Bs()});const s=Ge(()=>Yt.value.find(x=>x.time>=Ae.value)),r=R(),a=R();let l=0,u=R(ot.value<768?40*ct.value:40),f=0;je(()=>Yt.value,()=>{l=r.value.clientHeight,f=(Yt.value.length-1)*u.value-l+u.value/2,n()}),je(()=>ot.value,x=>{u.value=x<768?40*ct.value:40}),je(()=>Ae.value,()=>{let I=Yt.value.findIndex(H=>H.time>=Ae.value)*u.value+u.value/2-l/2;I<0&&(I=0),I>f&&(I=f),a.value.style.transform=`translateY(-${I*(ot.value<768?ct.value:1)}px)`});const c=R(0),g=()=>{if(console.log("buy.value",c.value),isNaN(c.value)||c.value<=0){$e.value.unshift("购买时长必须大于0");return}eu(ke.value.id,c.value),clearTimeout(vo.value),vo.value=null,c.value=0,$e.value.unshift("购买成功，请继续享受音乐吧"),_o.value=!1},m=R("image"),v=x=>{m.value=x};return(x,I)=>{var D,j;const H=ls("close");return J(),Z("div",{class:"music",style:nt({"--bg":W(o)})},[F("div",{class:ve(["music-logo",{active:W(m)==="image"}]),onClick:I[0]||(I[0]=Tt(C=>v("lrc"),["stop"]))},[ne(Lu)],2),F("div",{class:ve(["music-lrc",{active:W(m)==="lrc"}]),ref_key:"musicLrc",ref:r,onClick:I[1]||(I[1]=Tt(C=>v("image"),["stop"]))},[F("ul",{class:"music-lrc-content",ref_key:"musicLrcContent",ref:a},[(J(!0),Z(ye,null,s0(W(Yt),C=>{var M;return J(),Z("li",{class:ve({active:(C==null?void 0:C.time)===((M=W(s))==null?void 0:M.time)}),style:nt({height:`${W(u)}px`})},qe(C==null?void 0:C.text),7)}),256))],512)],2),uo((J(),Z("div",Hu,[I[3]||(I[3]=F("span",{class:"iconfont icon-gengduo"},null,-1)),F("div",{class:ve(["music-more-content",{active:W(_o)}])},[F("p",null,"当前可听时长："+qe((D=W(ke))!=null&&D.hasOwnProperty("time")?W(ke).time+" 秒":"无需购买"),1),(j=W(ke))!=null&&j.hasOwnProperty("time")?(J(),Z("div",Nu,[uo(F("input",{"onUpdate:modelValue":I[2]||(I[2]=C=>ie(c)?c.value=C:null),type:"number",placeholder:"请输入购买时长"},null,512),[[fa,W(c)]]),F("button",{onClick:Tt(g,["stop"])},"购买")])):Cs("",!0)],2)])),[[H,!0]])],4)}}}),Uu=Le(zu,[["__scopeId","data-v-5c87cd4d"]]),Vu={key:0,class:"model-list"},Yu=Re({__name:"model",setup(e){let t=null;return je(()=>$e.value,o=>{if(o.length<=0){clearInterval(t),t=null;return}o.length>3&&$e.value.splice(3,o.length-1),!t&&(t=setInterval(()=>{$e.value.pop()},3e3))},{immediate:!0,deep:!0}),(o,n)=>W($e).length?(J(),Z("div",Vu,[(J(!0),Z(ye,null,s0(W($e),(s,r)=>(J(),Z("div",{class:"model-item active",style:nt({"--mt":r*150+"%"}),key:s+r},qe(s),5))),128))])):Cs("",!0)}}),$u=Le(Yu,[["__scopeId","data-v-2f988715"]]),Ku={class:"container"},qu=Re({__name:"App",setup(e){return Ro(()=>{ou(),window.addEventListener("resize",wo)}),Lo(()=>{Ws(),window.removeEventListener("resize",wo)}),(t,o)=>{const n=ls("close");return uo((J(),Z("div",Ku,[ne(Uu),ne(Bu),ne($u)])),[[n,!1]])}}}),Qu=Le(qu,[["__scopeId","data-v-4ef91500"]]);window._iconfont_svg_string_4902328='<svg><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M512 269.254656a97.10978845 97.10978845 0 1 0 0-194.16132267 97.10978845 97.10978845 0 0 0 0 194.16132267z"  ></path><path d="M512 512m-97.10978845 0a97.10978845 97.10978845 0 1 0 194.2195769 0 97.10978845 97.10978845 0 1 0-194.2195769 0Z"  ></path><path d="M512 948.90666667a97.10978845 97.10978845 0 1 0 0-194.21957689 97.10978845 97.10978845 0 0 0 0 194.21957689z"  ></path></symbol><symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024"><path d="M955.73333333 474.45333333c-20.48 0-34.13333333 13.65333333-34.13333333 34.13333334v92.16c0 116.05333333-92.16 211.62666667-211.62666667 211.62666666H180.90666667l44.37333333-40.96c6.82666667-6.82666667 13.65333333-17.06666667 13.65333333-27.30666666 0-20.48-17.06666667-37.54666667-37.54666666-37.54666667-10.24 0-23.89333333 3.41333333-30.72 10.24l-116.05333334 105.81333333c-17.06666667 13.65333333-13.65333333 37.54666667 0 51.2l116.05333334 102.4c6.82666667 6.82666667 20.48 13.65333333 30.72 13.65333334 20.48 0 37.54666667-13.65333333 40.96-34.13333334 0-13.65333333-6.82666667-23.89333333-17.06666667-30.72l-51.2-47.78666666h532.48c157.01333333 0 283.30666667-126.29333333 283.30666667-276.48v-92.16c0-20.48-13.65333333-34.13333333-34.13333334-34.13333334zM68.26666667 559.78666667c20.48 0 34.13333333-13.65333333 34.13333333-34.13333334v-95.57333333c0-119.46666667 95.57333333-215.04 211.62666667-218.45333333h529.06666666l-44.37333333 40.96c-6.82666667 6.82666667-13.65333333 17.06666667-13.65333333 27.30666666 0 20.48 17.06666667 37.54666667 37.54666666 37.54666667 10.24 0 23.89333333-3.41333333 30.72-10.24l112.64-105.81333333c17.06666667-13.65333333 13.65333333-37.54666667 0-51.2l-116.05333333-102.4c-6.82666667-6.82666667-20.48-13.65333333-30.72-13.65333334-20.48 0-37.54666667 13.65333333-40.96 34.13333334 0 13.65333333 6.82666667 23.89333333 17.06666667 30.72l51.2 47.78666666H317.44C160.42666667 146.77333333 34.13333333 273.06666667 34.13333333 433.49333333v92.16c0 20.48 13.65333333 34.13333333 34.13333334 34.13333334z"  ></path><path d="M546.13333333 682.66666667V341.33333333h-51.2L409.6 402.77333333l17.06666667 44.37333334 64.85333333-44.37333334V682.66666667z"  ></path></symbol><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M325.456471 862.280661"  ></path><path d="M882.057788 862.280661"  ></path><path d="M236.028491 877.160382"  ></path><path d="M960.132455 877.160382"  ></path><path d="M63.683483 788.736998"  ></path><path d="M958.469023 788.736998"  ></path><path d="M64.77753 858.792098"  ></path><path d="M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875z"  ></path><path d="M959.523505 858.792098"  ></path></symbol><symbol id="icon-yinliang" viewBox="0 0 1024 1024"><path d="M468.992 169.6c29.312-22.528 64.128-40.832 101.312-25.088 36.864 15.552 48.64 53.12 53.76 89.984 5.248 37.824 5.248 89.92 5.248 154.688V634.88c0 64.768 0 116.864-5.184 154.688-5.12 36.928-16.96 74.432-53.76 89.984-37.248 15.744-72.064-2.56-101.376-25.024-30.016-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.616-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.416 0-71.68-1.984-20.288-2.112-39.104-6.72-56.064-18.24-32.192-22.016-44.544-54.208-49.28-83.84C52.864 570.24 53.248 545.92 53.568 526.464a907.84 907.84 0 0 0 0-28.928C53.184 478.08 52.864 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.128 55.936-18.176a750.72 750.72 0 0 1 71.68-2.048h1.728c32.96 0 51.84-2.688 67.392-9.152 15.488-6.4 30.72-17.728 53.76-41.216l1.984-2.048c44.8-45.76 80.896-82.56 110.912-105.6z m38.976 50.752c-25.92 19.84-58.88 53.44-106.112 101.632-25.152 25.6-47.616 44.288-75.072 55.68-27.328 11.264-56.32 13.952-91.84 13.952-30.656 0-51.2 0-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.184-22.144 40.96-2.56 16-2.24 32.512-1.92 51.136l0.128 19.2c0 6.592-0.064 12.992-0.192 19.136-0.256 18.56-0.512 35.072 1.984 51.136 3.136 19.712 9.728 32.512 22.144 40.96 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.096 1.664 66.752 1.664 35.456 0 64.512 2.688 91.84 14.016 27.456 11.328 49.92 29.952 75.072 55.616 47.232 48.192 80.192 81.728 106.112 101.696 27.008 20.736 35.136 17.856 37.44 16.832 2.624-1.088 10.56-5.44 15.296-39.808 4.544-32.896 4.608-80.512 4.608-148.672V391.936c0-68.096 0-115.712-4.608-148.608-4.736-34.368-12.672-38.784-15.36-39.872-2.24-0.96-10.368-3.84-37.376 16.896zM705.92 358.592a32 32 0 0 1 44.864 6.016c30.912 40.448 49.28 91.776 49.28 147.392s-18.368 106.88-49.28 147.392a32 32 0 1 1-50.88-38.784A178.56 178.56 0 0 0 736 512a178.56 178.56 0 0 0-36.096-108.608 32 32 0 0 1 6.016-44.8zM876.928 277.056a32 32 0 0 0-47.168 43.2c48.448 52.992 76.928 119.68 76.928 191.744s-28.48 138.752-76.928 191.68a32 32 0 0 0 47.168 43.264c58.24-63.616 93.76-145.408 93.76-234.944 0-89.6-35.52-171.328-93.76-234.944z"  ></path></symbol><symbol id="icon-jingyin" viewBox="0 0 1024 1024"><path d="M62.72 62.72a32 32 0 0 1 45.248 0l252.032 252.032c1.472 1.216 2.816 2.56 4.096 4.096l597.184 597.184a32 32 0 1 1-45.248 45.248l-286.72-286.72c-0.192 46.592-1.088 85.184-5.184 114.944-5.12 36.928-16.96 74.432-53.76 89.984-37.184 15.744-72.064-2.56-101.376-25.024-29.952-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.552-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.352 0-71.68-1.984-20.288-2.112-39.04-6.72-56-18.24-32.256-22.016-44.608-54.208-49.28-83.84C52.8 570.24 53.248 545.984 53.568 526.464a908.032 908.032 0 0 0 0-28.928C53.248 478.08 52.8 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.064 56-18.176 19.328-2.048 43.136-2.048 71.68-2.048h1.664c6.208 0 11.84 0.128 17.152 0.192 11.136 0.192 20.544 0.32 30.016-0.448L62.72 107.968a32 32 0 0 1 0-45.248z m230.528 327.872a369.088 369.088 0 0 1-45.824 1.216l-12.48-0.192c-30.592 0-51.136 0.064-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.248-22.08 40.96-2.56 16-2.304 32.512-2.048 51.136a1252.864 1252.864 0 0 1 0 38.336c-0.256 18.56-0.512 35.072 2.048 51.2 3.072 19.648 9.664 32.448 22.08 40.896 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.16 1.664 66.752 1.664 35.52 0 64.576 2.752 91.904 14.016 27.392 11.328 49.92 30.016 75.008 55.68 47.232 48.128 80.192 81.728 106.112 101.632 27.008 20.736 35.136 17.856 37.44 16.896 2.624-1.152 10.56-5.504 15.36-39.872 4.48-32.896 4.608-80.512 4.608-148.672V610.56L334.464 379.776a136.128 136.128 0 0 1-41.216 10.816zM449.28 278.4c30.72-30.592 53.632-52.288 72.064-65.088a66.56 66.56 0 0 1 19.328-10.112c3.2-0.896 4.288-0.384 4.672-0.256 2.688 1.152 10.624 5.568 15.36 40 4.544 32.96 4.608 80.704 4.608 148.992v13.44a32 32 0 1 0 64 0V389.12c0-64.896 0-117.12-5.184-155.008-5.12-36.928-16.96-74.56-53.76-90.112-31.808-13.504-62.144 0.512-85.376 16.64-24.064 16.576-51.008 42.624-80.896 72.32a32 32 0 0 0 45.12 45.44zM705.024 401.92a32 32 0 0 1 45.056 4.48c31.104 37.888 49.92 84.992 49.92 136.32 0 22.4-3.584 44.032-10.24 64.512a32 32 0 0 1-60.864-19.84c4.608-14.208 7.104-29.184 7.104-44.672 0-35.2-12.8-68.224-35.392-95.744a32 32 0 0 1 4.48-45.056zM875.776 318.528a32 32 0 0 0-44.864 45.632c48.192 47.36 75.776 106.304 75.776 169.216 0 52.288-19.072 101.76-53.12 144.128a32 32 0 0 0 49.92 40.064c42.112-52.48 67.2-115.712 67.2-184.192 0-82.624-36.416-157.312-94.912-214.848z"  ></path></symbol><symbol id="icon-suijibofang" viewBox="0 0 1024 1024"><path d="M786.84698283 313.42482205c-52.18952533 0-182.34024846 129.53597497-277.37816064 221.35344696C365.37915961 674.00117817 229.27190357 809.28411307 120.33696541 809.28411307l-67.00634454 0c-27.38421987 0-49.58616235-22.21707833-49.58616234-49.58616235s22.20194247-49.58616235 49.58616234-49.58616235l67.00634454 0c68.84010894 0 208.21670571-138.44632462 320.20791864-246.65241372 136.30169315-131.69108423 254.01425123-249.2068773 346.30326272-249.2068773l63.95356274 0-67.85860836-65.79547818c-19.38085547-19.33428395-19.41112718-48.81306965-0.06520035-68.18461128 19.34476174-19.37736249 50.74114219-19.41578411 70.12316274-0.07451534l152.69846016 152.31889977c9.32134571 9.29805995 14.55718059 21.88874752 14.55718059 35.04760946 0 13.15769799-5.23583488 25.71927779-14.55718059 35.01733774L852.99989959 454.79934862c-9.67762034 9.65549853-22.35330105 14.24747861-35.02898062 14.24747861-12.70478734 0-25.41073977-5.32082802-35.09418098-15.01824227-19.34592683-19.37154162-19.31449117-51.69237219 0.06520036-71.02665501l67.85860835-69.5771079L786.84698283 313.42482205zM852.99989959 568.50323911c-19.38201941-19.3412699-50.77839986-19.31099819-70.12316274 0.0663643-19.34592683 19.37037653-19.31449117 52.6307931 0.06520036 71.96507705l67.85860836 69.57594397-63.95356274 0c-40.72471211 0-108.76029383-60.24179029-176.21489209-123.3046676-19.99793152-18.69974301-51.38383303-18.593792-70.08124815 1.39598962-18.71022194 19.98861767-17.66235591 52.78564466 2.3367407 71.47956566 102.76650325 96.09509205 172.08513763 149.60027079 243.95939954 149.60027079l63.95356274 0-67.85860836 65.79198521c-19.38085547 19.33428395-19.41112718 49.76197063-0.06520036 69.13351111 9.68460629 9.69741312 22.38939363 14.07399822 35.09418098 14.07399822 12.67568071 0 25.35136029-5.06701255 35.02898062-14.72251107L1005.69835975 791.10946702c9.32134571-9.29922503 14.55718059-21.97723363 14.55718059-35.13609557 0-13.15769799-5.23583488-25.80776391-14.55718059-35.10698894L852.99989959 568.50323911zM53.32945693 313.42482205l67.00634453 0c52.2605477 0 130.16352995 66.50919026 192.18785621 122.81449926 9.502976 8.62044046 21.42768583 13.8131968 33.32794596 13.8131968 13.48602994 0 26.93480221-4.99948317 36.71720846-15.76688412 18.41216171-20.26106197 16.90672811-53.27464903-3.36597675-71.67866084-96.99276345-88.04282709-178.13248569-148.35331072-258.86703388-148.35331072l-67.00634453 0c-27.38421987 0-49.58616235 22.21707833-49.58616235 49.58616235S25.94640213 313.42482205 53.32945693 313.42482205z"  ></path></symbol><symbol id="icon-shunxubofang" viewBox="0 0 1280 1024"><path d="M1121.80831062 243.68144937A373.40506031 373.40506031 0 0 1 1231.88943875 509.4737225c0 34.21394156-4.59385594 68.15362312-13.71300187 100.79056875a42.40746 42.40746 0 0 1-81.66093094-22.62645469 291.88125938 291.88125938 0 0 0 10.62757687-78.16411406c0-160.510695-130.61634937-291.12704437-291.12704437-291.12704531H461.52723687v75.07868906c0 24.13488469-16.79842781 33.45972656-37.26508406 20.77519969L243.52477906 202.23389938c-20.46665625-12.68452781-20.67235125-33.76826906-0.41139-46.86418594L424.70782531 38.08925844c20.22667875-13.06163531 36.81941156-4.04533594 36.81941156 20.05526625v75.42151406h394.48880157c100.37917875 0 194.79320156 39.11634 265.79227218 110.11541063z m-70.00487812 573.06637782c20.50093875 12.68452781 20.70663375 33.76826906 0.4456725 46.82990344l-181.59443625 117.280455c-20.22667875 13.09591781-36.81941156 4.07961844-36.81941156-20.02098375V885.38140531H407.875115c-100.37917875 0-194.79320156-39.0820575-265.79227219-110.11541062A373.43934281 373.43934281 0 0 1 32.00171469 509.4737225c0-72.61034906 20.74091625-143.09518219 59.99438625-203.84378344a42.3731775 42.3731775 0 1 1 71.20476562 46.04140594 290.03000438 290.03000438 0 0 0-46.41851343 157.8023775c0 160.5449775 130.58206688 291.12704437 291.09276187 291.12704437H833.86953969v-75.07868906c0-24.10060219 16.76414531-33.45972656 37.23080156-20.74091625l180.73737375 111.96666563z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M349.5936 338.5344a30.3104 30.3104 0 0 1 17.6128 5.9392l200.0896 143.36a30.72 30.72 0 0 1 0 49.9712l-200.0896 143.36a30.3104 30.3104 0 0 1-17.6128 5.9392A30.72 30.72 0 0 1 318.6688 655.36V368.64a30.72 30.72 0 0 1 30.9248-30.9248m0-51.2a81.92 81.92 0 0 0-81.92 81.92V655.36a81.92 81.92 0 0 0 81.92 81.92 81.92 81.92 0 0 0 47.3088-15.36l200.0896-143.36a81.92 81.92 0 0 0 0-133.5296l-200.0896-143.36a81.92 81.92 0 0 0-47.3088-14.9504zM715.5712 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 0 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M674.4064 338.5344A30.72 30.72 0 0 1 705.3312 368.64v286.72a30.72 30.72 0 0 1-30.9248 30.9248 30.3104 30.3104 0 0 1-17.6128-5.9392l-200.0896-143.36a30.72 30.72 0 0 1 0-49.9712l200.0896-143.36a30.3104 30.3104 0 0 1 17.6128-5.9392m0-51.2a81.92 81.92 0 0 0-47.3088 15.36l-200.0896 143.36a81.92 81.92 0 0 0 0 133.5296l200.0896 143.36a81.92 81.92 0 0 0 47.3088 15.36 81.92 81.92 0 0 0 81.92-81.92V368.64a81.92 81.92 0 0 0-81.92-81.92zM308.4288 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 1 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-play_list" viewBox="0 0 1024 1024"><path d="M42.666667 490.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h896a21.333333 21.333333 0 0 1 0 42.666667H64a21.333333 21.333333 0 0 1-21.333333-21.333333z m490.666666 362.666666H64a21.333333 21.333333 0 0 0 0 42.666667h469.333333a21.333333 21.333333 0 0 0 0-42.666667zM64 128h896a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m916.42 612.493333c-6.666667-22.053333-16.44-40.773333-29.04-55.626666a107.46 107.46 0 0 0-20.493333-18.78c-8.813333-8.806667-16.526667-20.666667-22.36-34.42-9.033333-21.333333-11.813333-42.666667-12.553334-56.78a21.333333 21.333333 0 0 0-42.666666 1.113333v251.56c-18.333333-10.946667-40.666667-16.893333-64-16.893333-27.38 0-53.333333 8.173333-73.14 23.013333-21.333333 16-33.526667 38.666667-33.526667 62.32s12.22 46.34 33.526667 62.32C736 973.16 761.953333 981.333333 789.333333 981.333333s53.333333-8.173333 73.14-23.013333c21.333333-16 33.526667-38.666667 33.526667-62.32v-204.733333q3.213333 3.58 6.586667 6.813333a21.473333 21.473333 0 0 0 2.953333 2.366667 64.24 64.24 0 0 1 13.333333 12c8.666667 10.22 15.84 24.18 20.733334 40.373333a21.333333 21.333333 0 0 0 40.84-12.346667z"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path><path d="M415.8 679.9c5.9 0 11.5-1.6 16.2-4.5l231.1-134.6c10.9-5.2 18.5-16.3 18.5-29.2 0-11.9-6.4-22.3-16-27.8L439.7 352.2c-5.8-6.7-14.4-10.9-23.9-10.9-17.6 0-31.8 14.4-31.8 32.1 0 0.6 0 1.2 0.1 1.8l-0.4 0.2 0.5 269c-0.1 1.1-0.2 2.2-0.2 3.4 0 17.7 14.3 32.1 31.8 32.1z"  ></path><path d="M909.8 306.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S128.8 723.8 128.8 512.2 300.4 129.1 512 129.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.6 81.9 584.9 64.5 512 64.5 264.7 64.5 64.3 265 64.3 512.2S264.7 959.9 512 959.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M910.8 303.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S129.8 720.8 129.8 509.2 301.4 126.1 513 126.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C654.6 78.9 585.9 61.5 513 61.5 265.7 61.5 65.3 262 65.3 509.2S265.7 956.9 513 956.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path><path d="M385.4 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.6 0 32-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9zM578.9 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.5 0 31.9-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9z"  ></path><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path></symbol><symbol id="icon-tingzhi" viewBox="0 0 1024 1024"><path d="M772.9 217.3c0 11.5 6.1 22.1 16.1 27.8 10 5.7 22.3 5.7 32.2 0 10-5.7 16.1-16.3 16.1-27.8s-6.1-22.1-16.1-27.8c-10-5.7-22.3-5.7-32.2 0-10 5.7-16.1 16.3-16.1 27.8z"  ></path><path d="M910.1 306.3c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.9 42.1 174.8 0 211.7-171.7 383.5-383.5 383.5-211.7 0-383.6-171.7-383.6-383.5S300.3 128.6 512 128.6c62.5 0 121.6 15 173.7 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.7 81.4 584.9 64 512 64 264.5 64 64 264.6 64 512s200.5 448 448 448 448-200.5 448-448c0-74.2-18-144.1-49.9-205.7z"  ></path><path d="M417.9 354.5h188.2c34.6 0 62.7 28.2 62.7 63v189c0 34.8-28.1 63-62.7 63H417.9c-34.6 0-62.7-28.2-62.7-63v-189c0-34.8 28.1-63 62.7-63z"  ></path></symbol></svg>',(e=>{var t=(o=(o=document.getElementsByTagName("script"))[o.length-1]).getAttribute("data-injectcss"),o=o.getAttribute("data-disable-injectsvg");if(!o){var n,s,r,a,l,u=function(g,m){m.parentNode.insertBefore(g,m)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(g){console&&console.log(g)}}n=function(){var g,m=document.createElement("div");m.innerHTML=e._iconfont_svg_string_4902328,(m=m.getElementsByTagName("svg")[0])&&(m.setAttribute("aria-hidden","true"),m.style.position="absolute",m.style.width=0,m.style.height=0,m.style.overflow="hidden",m=m,(g=document.body).firstChild?u(m,g.firstChild):g.appendChild(m))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(s=function(){document.removeEventListener("DOMContentLoaded",s,!1),n()},document.addEventListener("DOMContentLoaded",s,!1)):document.attachEvent&&(r=n,a=e.document,l=!1,c(),a.onreadystatechange=function(){a.readyState=="complete"&&(a.onreadystatechange=null,f())})}function f(){l||(l=!0,r())}function c(){try{a.documentElement.doScroll("left")}catch{return void setTimeout(c,50)}f()}})(window);const Gu=(e,t)=>{e.addEventListener("click",o=>{o.stopPropagation(),_o.value=t})},Ju={mounted(e,t){const{value:o}=t;Gu(e,o)}},On={close:Ju},Zu={install(e){Object.keys(On).forEach(t=>{e.directive(t,On[t])})}},Us=ya(Qu);Us.use(Zu);Us.mount("#app");

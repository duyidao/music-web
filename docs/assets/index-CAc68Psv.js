(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $0(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const P={},pt=[],De=()=>{},fo=()=>!1,d0=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),es=e=>e.startsWith("onUpdate:"),Z=Object.assign,ts=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},ho=Object.prototype.hasOwnProperty,L=(e,t)=>ho.call(e,t),E=Array.isArray,gt=e=>p0(e)==="[object Map]",$s=e=>p0(e)==="[object Set]",j=e=>typeof e=="function",Y=e=>typeof e=="string",qe=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",en=e=>(K(e)||j(e))&&j(e.then)&&j(e.catch),tn=Object.prototype.toString,p0=e=>tn.call(e),po=e=>p0(e).slice(8,-1),sn=e=>p0(e)==="[object Object]",ss=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kt=$0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),g0=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},go=/-(\w)/g,Fe=g0(e=>e.replace(go,(t,s)=>s?s.toUpperCase():"")),mo=/\B([A-Z])/g,Ye=g0(e=>e.replace(mo,"-$1").toLowerCase()),nn=g0(e=>e.charAt(0).toUpperCase()+e.slice(1)),E0=g0(e=>e?`on${nn(e)}`:""),ae=(e,t)=>!Object.is(e,t),D0=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},on=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},yo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ms;const m0=()=>Ms||(Ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pt(e){if(E(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],o=Y(n)?wo(n):Pt(n);if(o)for(const i in o)t[i]=o[i]}return t}else if(Y(e)||K(e))return e}const bo=/;(?![^(]*\))/g,Ao=/:([^]+)/,vo=/\/\*[^]*?\*\//g;function wo(e){const t={};return e.replace(vo,"").split(bo).forEach(s=>{if(s){const n=s.split(Ao);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ze(e){let t="";if(Y(e))t=e;else if(E(e))for(let s=0;s<e.length;s++){const n=ze(e[s]);n&&(t+=n+" ")}else if(K(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const _o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Io=$0(_o);function rn(e){return!!e||e===""}const ln=e=>!!(e&&e.__v_isRef===!0),rt=e=>Y(e)?e:e==null?"":E(e)||K(e)&&(e.toString===tn||!j(e.toString))?ln(e)?rt(e.value):JSON.stringify(e,an,2):String(e),an=(e,t)=>ln(t)?an(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,o],i)=>(s[k0(n,i)+" =>"]=o,s),{})}:$s(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>k0(s))}:qe(t)?k0(t):K(t)&&!E(t)&&!sn(t)?String(t):t,k0=(e,t="")=>{var s;return qe(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class xo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=pe;try{return pe=this,t()}finally{pe=s}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function To(){return pe}let Q;const j0=new WeakSet;class cn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&pe.active&&pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,j0.has(this)&&(j0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ss(this),hn(this);const t=Q,s=we;Q=this,we=!0;try{return this.fn()}finally{dn(this),Q=t,we=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)is(t);this.deps=this.depsTail=void 0,Ss(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?j0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){W0(this)&&this.run()}get dirty(){return W0(this)}}let un=0,jt,Ot;function fn(e,t=!1){if(e.flags|=8,t){e.next=Ot,Ot=e;return}e.next=jt,jt=e}function ns(){un++}function os(){if(--un>0)return;if(Ot){let t=Ot;for(Ot=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;jt;){let t=jt;for(jt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function hn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dn(e){let t,s=e.depsTail,n=s;for(;n;){const o=n.prevDep;n.version===-1?(n===s&&(s=o),is(n),Mo(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=o}e.deps=t,e.depsTail=s}function W0(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ht))return;e.globalVersion=Ht;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!W0(e)){e.flags&=-3;return}const s=Q,n=we;Q=e,we=!0;try{hn(e);const o=e.fn(e._value);(t.version===0||ae(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Q=s,we=n,dn(e),e.flags&=-3}}function is(e,t=!1){const{dep:s,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let i=s.computed.deps;i;i=i.nextDep)is(i,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Mo(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let we=!0;const gn=[];function Je(){gn.push(we),we=!1}function Xe(){const e=gn.pop();we=e===void 0?!0:e}function Ss(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=Q;Q=void 0;try{t()}finally{Q=s}}}let Ht=0;class So{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class y0{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Q||!we||Q===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Q)s=this.activeLink=new So(Q,this),Q.deps?(s.prevDep=Q.depsTail,Q.depsTail.nextDep=s,Q.depsTail=s):Q.deps=Q.depsTail=s,mn(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=Q.depsTail,s.nextDep=void 0,Q.depsTail.nextDep=s,Q.depsTail=s,Q.deps===s&&(Q.deps=n)}return s}trigger(t){this.version++,Ht++,this.notify(t)}notify(t){ns();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{os()}}}function mn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)mn(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const N0=new WeakMap,lt=Symbol(""),Q0=Symbol(""),Ft=Symbol("");function ee(e,t,s){if(we&&Q){let n=N0.get(e);n||N0.set(e,n=new Map);let o=n.get(s);o||(n.set(s,o=new y0),o.map=n,o.key=s),o.track()}}function Re(e,t,s,n,o,i){const r=N0.get(e);if(!r){Ht++;return}const l=c=>{c&&c.trigger()};if(ns(),t==="clear")r.forEach(l);else{const c=E(e),h=c&&ss(s);if(c&&s==="length"){const f=Number(n);r.forEach((p,A)=>{(A==="length"||A===Ft||!qe(A)&&A>=f)&&l(p)})}else switch((s!==void 0||r.has(void 0))&&l(r.get(s)),h&&l(r.get(Ft)),t){case"add":c?h&&l(r.get("length")):(l(r.get(lt)),gt(e)&&l(r.get(Q0)));break;case"delete":c||(l(r.get(lt)),gt(e)&&l(r.get(Q0)));break;case"set":gt(e)&&l(r.get(lt));break}}os()}function ft(e){const t=R(e);return t===e?t:(ee(t,"iterate",Ft),ye(e)?t:t.map(te))}function b0(e){return ee(e=R(e),"iterate",Ft),e}const Bo={__proto__:null,[Symbol.iterator](){return O0(this,Symbol.iterator,te)},concat(...e){return ft(this).concat(...e.map(t=>E(t)?ft(t):t))},entries(){return O0(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,t){return Oe(this,"every",e,t,void 0,arguments)},filter(e,t){return Oe(this,"filter",e,t,s=>s.map(te),arguments)},find(e,t){return Oe(this,"find",e,t,te,arguments)},findIndex(e,t){return Oe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Oe(this,"findLast",e,t,te,arguments)},findLastIndex(e,t){return Oe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Oe(this,"forEach",e,t,void 0,arguments)},includes(...e){return C0(this,"includes",e)},indexOf(...e){return C0(this,"indexOf",e)},join(e){return ft(this).join(e)},lastIndexOf(...e){return C0(this,"lastIndexOf",e)},map(e,t){return Oe(this,"map",e,t,void 0,arguments)},pop(){return Mt(this,"pop")},push(...e){return Mt(this,"push",e)},reduce(e,...t){return Bs(this,"reduce",e,t)},reduceRight(e,...t){return Bs(this,"reduceRight",e,t)},shift(){return Mt(this,"shift")},some(e,t){return Oe(this,"some",e,t,void 0,arguments)},splice(...e){return Mt(this,"splice",e)},toReversed(){return ft(this).toReversed()},toSorted(e){return ft(this).toSorted(e)},toSpliced(...e){return ft(this).toSpliced(...e)},unshift(...e){return Mt(this,"unshift",e)},values(){return O0(this,"values",te)}};function O0(e,t,s){const n=b0(e),o=n[t]();return n!==e&&!ye(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=s(i.value)),i}),o}const Eo=Array.prototype;function Oe(e,t,s,n,o,i){const r=b0(e),l=r!==e&&!ye(e),c=r[t];if(c!==Eo[t]){const p=c.apply(e,i);return l?te(p):p}let h=s;r!==e&&(l?h=function(p,A){return s.call(this,te(p),A,e)}:s.length>2&&(h=function(p,A){return s.call(this,p,A,e)}));const f=c.call(r,h,n);return l&&o?o(f):f}function Bs(e,t,s,n){const o=b0(e);let i=s;return o!==e&&(ye(e)?s.length>3&&(i=function(r,l,c){return s.call(this,r,l,c,e)}):i=function(r,l,c){return s.call(this,r,te(l),c,e)}),o[t](i,...n)}function C0(e,t,s){const n=R(e);ee(n,"iterate",Ft);const o=n[t](...s);return(o===-1||o===!1)&&cs(s[0])?(s[0]=R(s[0]),n[t](...s)):o}function Mt(e,t,s=[]){Je(),ns();const n=R(e)[t].apply(e,s);return os(),Xe(),n}const Do=$0("__proto__,__v_isRef,__isVue"),yn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qe));function ko(e){qe(e)||(e=String(e));const t=R(this);return ee(t,"has",e),t.hasOwnProperty(e)}class bn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(s==="__v_isReactive")return!o;if(s==="__v_isReadonly")return o;if(s==="__v_isShallow")return i;if(s==="__v_raw")return n===(o?i?No:_n:i?wn:vn).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=E(t);if(!o){let c;if(r&&(c=Bo[s]))return c;if(s==="hasOwnProperty")return ko}const l=Reflect.get(t,s,X(t)?t:n);return(qe(s)?yn.has(s):Do(s))||(o||ee(t,"get",s),i)?l:X(l)?r&&ss(s)?l:l.value:K(l)?o?In(l):ls(l):l}}class An extends bn{constructor(t=!1){super(!1,t)}set(t,s,n,o){let i=t[s];if(!this._isShallow){const c=at(i);if(!ye(n)&&!at(n)&&(i=R(i),n=R(n)),!E(t)&&X(i)&&!X(n))return c?!1:(i.value=n,!0)}const r=E(t)&&ss(s)?Number(s)<t.length:L(t,s),l=Reflect.set(t,s,n,X(t)?t:o);return t===R(o)&&(r?ae(n,i)&&Re(t,"set",s,n):Re(t,"add",s,n)),l}deleteProperty(t,s){const n=L(t,s);t[s];const o=Reflect.deleteProperty(t,s);return o&&n&&Re(t,"delete",s,void 0),o}has(t,s){const n=Reflect.has(t,s);return(!qe(s)||!yn.has(s))&&ee(t,"has",s),n}ownKeys(t){return ee(t,"iterate",E(t)?"length":lt),Reflect.ownKeys(t)}}class jo extends bn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Oo=new An,Co=new jo,Ro=new An(!0);const U0=e=>e,Zt=e=>Reflect.getPrototypeOf(e);function Lo(e,t,s){return function(...n){const o=this.__v_raw,i=R(o),r=gt(i),l=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,h=o[e](...n),f=s?U0:t?V0:te;return!t&&ee(i,"iterate",c?Q0:lt),{next(){const{value:p,done:A}=h.next();return A?{value:p,done:A}:{value:l?[f(p[0]),f(p[1])]:f(p),done:A}},[Symbol.iterator](){return this}}}}function $t(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Po(e,t){const s={get(o){const i=this.__v_raw,r=R(i),l=R(o);e||(ae(o,l)&&ee(r,"get",o),ee(r,"get",l));const{has:c}=Zt(r),h=t?U0:e?V0:te;if(c.call(r,o))return h(i.get(o));if(c.call(r,l))return h(i.get(l));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!e&&ee(R(o),"iterate",lt),Reflect.get(o,"size",o)},has(o){const i=this.__v_raw,r=R(i),l=R(o);return e||(ae(o,l)&&ee(r,"has",o),ee(r,"has",l)),o===l?i.has(o):i.has(o)||i.has(l)},forEach(o,i){const r=this,l=r.__v_raw,c=R(l),h=t?U0:e?V0:te;return!e&&ee(c,"iterate",lt),l.forEach((f,p)=>o.call(i,h(f),h(p),r))}};return Z(s,e?{add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear")}:{add(o){!t&&!ye(o)&&!at(o)&&(o=R(o));const i=R(this);return Zt(i).has.call(i,o)||(i.add(o),Re(i,"add",o,o)),this},set(o,i){!t&&!ye(i)&&!at(i)&&(i=R(i));const r=R(this),{has:l,get:c}=Zt(r);let h=l.call(r,o);h||(o=R(o),h=l.call(r,o));const f=c.call(r,o);return r.set(o,i),h?ae(i,f)&&Re(r,"set",o,i):Re(r,"add",o,i),this},delete(o){const i=R(this),{has:r,get:l}=Zt(i);let c=r.call(i,o);c||(o=R(o),c=r.call(i,o)),l&&l.call(i,o);const h=i.delete(o);return c&&Re(i,"delete",o,void 0),h},clear(){const o=R(this),i=o.size!==0,r=o.clear();return i&&Re(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{s[o]=Lo(o,e,t)}),s}function rs(e,t){const s=Po(e,t);return(n,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(L(s,o)&&o in n?s:n,o,i)}const Ho={get:rs(!1,!1)},Fo={get:rs(!1,!0)},Wo={get:rs(!0,!1)};const vn=new WeakMap,wn=new WeakMap,_n=new WeakMap,No=new WeakMap;function Qo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uo(e){return e.__v_skip||!Object.isExtensible(e)?0:Qo(po(e))}function ls(e){return at(e)?e:as(e,!1,Oo,Ho,vn)}function Vo(e){return as(e,!1,Ro,Fo,wn)}function In(e){return as(e,!0,Co,Wo,_n)}function as(e,t,s,n,o){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const r=Uo(e);if(r===0)return e;const l=new Proxy(e,r===2?n:s);return o.set(e,l),l}function mt(e){return at(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function at(e){return!!(e&&e.__v_isReadonly)}function ye(e){return!!(e&&e.__v_isShallow)}function cs(e){return e?!!e.__v_raw:!1}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function Ko(e){return!L(e,"__v_skip")&&Object.isExtensible(e)&&on(e,"__v_skip",!0),e}const te=e=>K(e)?ls(e):e,V0=e=>K(e)?In(e):e;function X(e){return e?e.__v_isRef===!0:!1}function z(e){return zo(e,!1)}function zo(e,t){return X(e)?e:new Go(e,t)}class Go{constructor(t,s){this.dep=new y0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:R(t),this._value=s?t:te(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||ye(t)||at(t);t=n?t:R(t),ae(t,s)&&(this._rawValue=t,this._value=n?t:te(t),this.dep.trigger())}}function U(e){return X(e)?e.value:e}const qo={get:(e,t,s)=>t==="__v_raw"?e:U(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const o=e[t];return X(o)&&!X(s)?(o.value=s,!0):Reflect.set(e,t,s,n)}};function xn(e){return mt(e)?e:new Proxy(e,qo)}class Yo{constructor(t){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new y0,{get:n,set:o}=t(s.track.bind(s),s.trigger.bind(s));this._get=n,this._set=o}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Jo(e){return new Yo(e)}class Xo{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new y0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ht-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Q!==this)return fn(this,!0),!0}get value(){const t=this.dep.track();return pn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Zo(e,t,s=!1){let n,o;return j(e)?n=e:(n=e.get,o=e.set),new Xo(n,o,s)}const e0={},o0=new WeakMap;let it;function $o(e,t=!1,s=it){if(s){let n=o0.get(s);n||o0.set(s,n=[]),n.push(e)}}function ei(e,t,s=P){const{immediate:n,deep:o,once:i,scheduler:r,augmentJob:l,call:c}=s,h=S=>o?S:ye(S)||o===!1||o===0?Ke(S,1):Ke(S);let f,p,A,I,k=!1,D=!1;if(X(e)?(p=()=>e.value,k=ye(e)):mt(e)?(p=()=>h(e),k=!0):E(e)?(D=!0,k=e.some(S=>mt(S)||ye(S)),p=()=>e.map(S=>{if(X(S))return S.value;if(mt(S))return h(S);if(j(S))return c?c(S,2):S()})):j(e)?t?p=c?()=>c(e,2):e:p=()=>{if(A){Je();try{A()}finally{Xe()}}const S=it;it=f;try{return c?c(e,3,[I]):e(I)}finally{it=S}}:p=De,t&&o){const S=p,J=o===!0?1/0:o;p=()=>Ke(S(),J)}const $=To(),F=()=>{f.stop(),$&&$.active&&ts($.effects,f)};if(i&&t){const S=t;t=(...J)=>{S(...J),F()}}let G=D?new Array(e.length).fill(e0):e0;const q=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(t){const J=f.run();if(o||k||(D?J.some((Ne,_e)=>ae(Ne,G[_e])):ae(J,G))){A&&A();const Ne=it;it=f;try{const _e=[J,G===e0?void 0:D&&G[0]===e0?[]:G,I];c?c(t,3,_e):t(..._e),G=J}finally{it=Ne}}}else f.run()};return l&&l(q),f=new cn(p),f.scheduler=r?()=>r(q,!1):q,I=S=>$o(S,!1,f),A=f.onStop=()=>{const S=o0.get(f);if(S){if(c)c(S,4);else for(const J of S)J();o0.delete(f)}},t?n?q(!0):G=f.run():r?r(q.bind(null,!0),!0):f.run(),F.pause=f.pause.bind(f),F.resume=f.resume.bind(f),F.stop=F,F}function Ke(e,t=1/0,s){if(t<=0||!K(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,X(e))Ke(e.value,t,s);else if(E(e))for(let n=0;n<e.length;n++)Ke(e[n],t,s);else if($s(e)||gt(e))e.forEach(n=>{Ke(n,t,s)});else if(sn(e)){for(const n in e)Ke(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ke(e[n],t,s)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vt(e,t,s,n){try{return n?e(...n):e()}catch(o){A0(o,t,s)}}function je(e,t,s,n){if(j(e)){const o=Vt(e,t,s,n);return o&&en(o)&&o.catch(i=>{A0(i,t,s)}),o}if(E(e)){const o=[];for(let i=0;i<e.length;i++)o.push(je(e[i],t,s,n));return o}}function A0(e,t,s,n=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||P;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,h)===!1)return}l=l.parent}if(i){Je(),Vt(i,null,10,[e,c,h]),Xe();return}}ti(e,s,o,n,r)}function ti(e,t,s,n=!0,o=!1){if(o)throw e;console.error(e)}const ie=[];let Be=-1;const yt=[];let Ue=null,ht=0;const Tn=Promise.resolve();let i0=null;function si(e){const t=i0||Tn;return e?t.then(this?e.bind(this):e):t}function ni(e){let t=Be+1,s=ie.length;for(;t<s;){const n=t+s>>>1,o=ie[n],i=Wt(o);i<e||i===e&&o.flags&2?t=n+1:s=n}return t}function us(e){if(!(e.flags&1)){const t=Wt(e),s=ie[ie.length-1];!s||!(e.flags&2)&&t>=Wt(s)?ie.push(e):ie.splice(ni(t),0,e),e.flags|=1,Mn()}}function Mn(){i0||(i0=Tn.then(Bn))}function oi(e){E(e)?yt.push(...e):Ue&&e.id===-1?Ue.splice(ht+1,0,e):e.flags&1||(yt.push(e),e.flags|=1),Mn()}function Es(e,t,s=Be+1){for(;s<ie.length;s++){const n=ie[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ie.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Sn(e){if(yt.length){const t=[...new Set(yt)].sort((s,n)=>Wt(s)-Wt(n));if(yt.length=0,Ue){Ue.push(...t);return}for(Ue=t,ht=0;ht<Ue.length;ht++){const s=Ue[ht];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Ue=null,ht=0}}const Wt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Bn(e){try{for(Be=0;Be<ie.length;Be++){const t=ie[Be];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Be<ie.length;Be++){const t=ie[Be];t&&(t.flags&=-2)}Be=-1,ie.length=0,Sn(),i0=null,(ie.length||yt.length)&&Bn()}}let ve=null,En=null;function r0(e){const t=ve;return ve=e,En=e&&e.type.__scopeId||null,t}function ii(e,t=ve,s){if(!t||e._n)return e;const n=(...o)=>{n._d&&Ps(-1);const i=r0(t);let r;try{r=e(...o)}finally{r0(i),n._d&&Ps(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function nt(e,t,s,n){const o=e.dirs,i=t&&t.dirs;for(let r=0;r<o.length;r++){const l=o[r];i&&(l.oldValue=i[r].value);let c=l.dir[n];c&&(Je(),je(c,s,8,[e.el,l,e,t]),Xe())}}const ri=Symbol("_vte"),li=e=>e.__isTeleport;function fs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,fs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ze(e,t){return j(e)?Z({name:e.name},t,{setup:e}):e}function Dn(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function l0(e,t,s,n,o=!1){if(E(e)){e.forEach((k,D)=>l0(k,t&&(E(t)?t[D]:t),s,n,o));return}if(Ct(n)&&!o){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&l0(e,t,s,n.component.subTree);return}const i=n.shapeFlag&4?ys(n.component):n.el,r=o?null:i,{i:l,r:c}=e,h=t&&t.r,f=l.refs===P?l.refs={}:l.refs,p=l.setupState,A=R(p),I=p===P?()=>!1:k=>L(A,k);if(h!=null&&h!==c&&(Y(h)?(f[h]=null,I(h)&&(p[h]=null)):X(h)&&(h.value=null)),j(c))Vt(c,l,12,[r,f]);else{const k=Y(c),D=X(c);if(k||D){const $=()=>{if(e.f){const F=k?I(c)?p[c]:f[c]:c.value;o?E(F)&&ts(F,i):E(F)?F.includes(i)||F.push(i):k?(f[c]=[i],I(c)&&(p[c]=f[c])):(c.value=[i],e.k&&(f[e.k]=c.value))}else k?(f[c]=r,I(c)&&(p[c]=r)):D&&(c.value=r,e.k&&(f[e.k]=r))};r?($.id=-1,de($,s)):$()}}}m0().requestIdleCallback;m0().cancelIdleCallback;const Ct=e=>!!e.type.__asyncLoader,kn=e=>e.type.__isKeepAlive;function ai(e,t){jn(e,"a",t)}function ci(e,t){jn(e,"da",t)}function jn(e,t,s=se){const n=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(v0(t,n,s),s){let o=s.parent;for(;o&&o.parent;)kn(o.parent.vnode)&&ui(n,t,s,o),o=o.parent}}function ui(e,t,s,n){const o=v0(t,e,n,!0);ds(()=>{ts(n[t],o)},s)}function v0(e,t,s=se,n=!1){if(s){const o=s[e]||(s[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Je();const l=Kt(s),c=je(t,s,e,r);return l(),Xe(),c});return n?o.unshift(i):o.push(i),i}}const We=e=>(t,s=se)=>{(!Ut||e==="sp")&&v0(e,(...n)=>t(...n),s)},fi=We("bm"),hs=We("m"),hi=We("bu"),di=We("u"),pi=We("bum"),ds=We("um"),gi=We("sp"),mi=We("rtg"),yi=We("rtc");function bi(e,t=se){v0("ec",e,t)}const Ai=Symbol.for("v-ndc");function On(e,t,s,n){let o;const i=s,r=E(e);if(r||Y(e)){const l=r&&mt(e);let c=!1;l&&(c=!ye(e),e=b0(e)),o=new Array(e.length);for(let h=0,f=e.length;h<f;h++)o[h]=t(c?te(e[h]):e[h],h,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i)}else if(K(e))if(e[Symbol.iterator])o=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);o=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];o[c]=t(e[f],f,c,i)}}else o=[];return o}const K0=e=>e?eo(e)?ys(e):K0(e.parent):null,Rt=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>K0(e.parent),$root:e=>K0(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Rn(e),$forceUpdate:e=>e.f||(e.f=()=>{us(e.update)}),$nextTick:e=>e.n||(e.n=si.bind(e.proxy)),$watch:e=>Ui.bind(e)}),R0=(e,t)=>e!==P&&!e.__isScriptSetup&&L(e,t),vi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:o,props:i,accessCache:r,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const I=r[t];if(I!==void 0)switch(I){case 1:return n[t];case 2:return o[t];case 4:return s[t];case 3:return i[t]}else{if(R0(n,t))return r[t]=1,n[t];if(o!==P&&L(o,t))return r[t]=2,o[t];if((h=e.propsOptions[0])&&L(h,t))return r[t]=3,i[t];if(s!==P&&L(s,t))return r[t]=4,s[t];z0&&(r[t]=0)}}const f=Rt[t];let p,A;if(f)return t==="$attrs"&&ee(e.attrs,"get",""),f(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(s!==P&&L(s,t))return r[t]=4,s[t];if(A=c.config.globalProperties,L(A,t))return A[t]},set({_:e},t,s){const{data:n,setupState:o,ctx:i}=e;return R0(o,t)?(o[t]=s,!0):n!==P&&L(n,t)?(n[t]=s,!0):L(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:o,propsOptions:i}},r){let l;return!!s[r]||e!==P&&L(e,r)||R0(t,r)||(l=i[0])&&L(l,r)||L(n,r)||L(Rt,r)||L(o.config.globalProperties,r)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:L(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function a0(e){return E(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}function wi(e,t){return!e||!t?e||t:E(e)&&E(t)?e.concat(t):Z({},a0(e),a0(t))}let z0=!0;function _i(e){const t=Rn(e),s=e.proxy,n=e.ctx;z0=!1,t.beforeCreate&&Ds(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:r,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:A,beforeUpdate:I,updated:k,activated:D,deactivated:$,beforeDestroy:F,beforeUnmount:G,destroyed:q,unmounted:S,render:J,renderTracked:Ne,renderTriggered:_e,errorCaptured:Qe,serverPrefetch:Gt,expose:et,inheritAttrs:_t,components:qt,directives:Yt,filters:S0}=t;if(h&&Ii(h,n,null),r)for(const V in r){const W=r[V];j(W)&&(n[V]=W.bind(s))}if(o){const V=o.call(s,s);K(V)&&(e.data=ls(V))}if(z0=!0,i)for(const V in i){const W=i[V],tt=j(W)?W.bind(s,s):j(W.get)?W.get.bind(s,s):De,Jt=!j(W)&&j(W.set)?W.set.bind(s):De,st=ct({get:tt,set:Jt});Object.defineProperty(n,V,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ie=>st.value=Ie})}if(l)for(const V in l)Cn(l[V],n,s,V);if(c){const V=j(c)?c.call(s):c;Reflect.ownKeys(V).forEach(W=>{Ei(W,V[W])})}f&&Ds(f,e,"c");function ne(V,W){E(W)?W.forEach(tt=>V(tt.bind(s))):W&&V(W.bind(s))}if(ne(fi,p),ne(hs,A),ne(hi,I),ne(di,k),ne(ai,D),ne(ci,$),ne(bi,Qe),ne(yi,Ne),ne(mi,_e),ne(pi,G),ne(ds,S),ne(gi,Gt),E(et))if(et.length){const V=e.exposed||(e.exposed={});et.forEach(W=>{Object.defineProperty(V,W,{get:()=>s[W],set:tt=>s[W]=tt})})}else e.exposed||(e.exposed={});J&&e.render===De&&(e.render=J),_t!=null&&(e.inheritAttrs=_t),qt&&(e.components=qt),Yt&&(e.directives=Yt),Gt&&Dn(e)}function Ii(e,t,s=De){E(e)&&(e=G0(e));for(const n in e){const o=e[n];let i;K(o)?"default"in o?i=t0(o.from||n,o.default,!0):i=t0(o.from||n):i=t0(o),X(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[n]=i}}function Ds(e,t,s){je(E(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Cn(e,t,s,n){let o=n.includes(".")?qn(s,n):()=>s[n];if(Y(e)){const i=t[e];j(i)&&At(o,i)}else if(j(e))At(o,e.bind(s));else if(K(e))if(E(e))e.forEach(i=>Cn(i,t,s,n));else{const i=j(e.handler)?e.handler.bind(s):t[e.handler];j(i)&&At(o,i,e)}}function Rn(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,l=i.get(t);let c;return l?c=l:!o.length&&!s&&!n?c=t:(c={},o.length&&o.forEach(h=>c0(c,h,r,!0)),c0(c,t,r)),K(t)&&i.set(t,c),c}function c0(e,t,s,n=!1){const{mixins:o,extends:i}=t;i&&c0(e,i,s,!0),o&&o.forEach(r=>c0(e,r,s,!0));for(const r in t)if(!(n&&r==="expose")){const l=xi[r]||s&&s[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const xi={data:ks,props:js,emits:js,methods:Et,computed:Et,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:Et,directives:Et,watch:Mi,provide:ks,inject:Ti};function ks(e,t){return t?e?function(){return Z(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Ti(e,t){return Et(G0(e),G0(t))}function G0(e){if(E(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Et(e,t){return e?Z(Object.create(null),e,t):t}function js(e,t){return e?E(e)&&E(t)?[...new Set([...e,...t])]:Z(Object.create(null),a0(e),a0(t??{})):t}function Mi(e,t){if(!e)return t;if(!t)return e;const s=Z(Object.create(null),e);for(const n in t)s[n]=oe(e[n],t[n]);return s}function Ln(){return{app:null,config:{isNativeTag:fo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Si=0;function Bi(e,t){return function(n,o=null){j(n)||(n=Z({},n)),o!=null&&!K(o)&&(o=null);const i=Ln(),r=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Si++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:fr,get config(){return i.config},set config(f){},use(f,...p){return r.has(f)||(f&&j(f.install)?(r.add(f),f.install(h,...p)):j(f)&&(r.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,A){if(!c){const I=h._ceVNode||re(n,o);return I.appContext=i,A===!0?A="svg":A===!1&&(A=void 0),e(I,f,A),c=!0,h._container=f,f.__vue_app__=h,ys(I.component)}},onUnmount(f){l.push(f)},unmount(){c&&(je(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=bt;bt=h;try{return f()}finally{bt=p}}};return h}}let bt=null;function Ei(e,t){if(se){let s=se.provides;const n=se.parent&&se.parent.provides;n===s&&(s=se.provides=Object.create(n)),s[e]=t}}function t0(e,t,s=!1){const n=se||ve;if(n||bt){const o=bt?bt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return s&&j(t)?t.call(n&&n.proxy):t}}const Pn={},Hn=()=>Object.create(Pn),Fn=e=>Object.getPrototypeOf(e)===Pn;function Di(e,t,s,n=!1){const o={},i=Hn();e.propsDefaults=Object.create(null),Wn(e,t,o,i);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);s?e.props=n?o:Vo(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function ki(e,t,s,n){const{props:o,attrs:i,vnode:{patchFlag:r}}=e,l=R(o),[c]=e.propsOptions;let h=!1;if((n||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let A=f[p];if(w0(e.emitsOptions,A))continue;const I=t[A];if(c)if(L(i,A))I!==i[A]&&(i[A]=I,h=!0);else{const k=Fe(A);o[k]=q0(c,l,k,I,e,!1)}else I!==i[A]&&(i[A]=I,h=!0)}}}else{Wn(e,t,o,i)&&(h=!0);let f;for(const p in l)(!t||!L(t,p)&&((f=Ye(p))===p||!L(t,f)))&&(c?s&&(s[p]!==void 0||s[f]!==void 0)&&(o[p]=q0(c,l,p,void 0,e,!0)):delete o[p]);if(i!==l)for(const p in i)(!t||!L(t,p))&&(delete i[p],h=!0)}h&&Re(e.attrs,"set","")}function Wn(e,t,s,n){const[o,i]=e.propsOptions;let r=!1,l;if(t)for(let c in t){if(kt(c))continue;const h=t[c];let f;o&&L(o,f=Fe(c))?!i||!i.includes(f)?s[f]=h:(l||(l={}))[f]=h:w0(e.emitsOptions,c)||(!(c in n)||h!==n[c])&&(n[c]=h,r=!0)}if(i){const c=R(s),h=l||P;for(let f=0;f<i.length;f++){const p=i[f];s[p]=q0(o,c,p,h[p],e,!L(h,p))}}return r}function q0(e,t,s,n,o,i){const r=e[s];if(r!=null){const l=L(r,"default");if(l&&n===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&j(c)){const{propsDefaults:h}=o;if(s in h)n=h[s];else{const f=Kt(o);n=h[s]=c.call(null,t),f()}}else n=c;o.ce&&o.ce._setProp(s,n)}r[0]&&(i&&!l?n=!1:r[1]&&(n===""||n===Ye(s))&&(n=!0))}return n}const ji=new WeakMap;function Nn(e,t,s=!1){const n=s?ji:t.propsCache,o=n.get(e);if(o)return o;const i=e.props,r={},l=[];let c=!1;if(!j(e)){const f=p=>{c=!0;const[A,I]=Nn(p,t,!0);Z(r,A),I&&l.push(...I)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!c)return K(e)&&n.set(e,pt),pt;if(E(i))for(let f=0;f<i.length;f++){const p=Fe(i[f]);Os(p)&&(r[p]=P)}else if(i)for(const f in i){const p=Fe(f);if(Os(p)){const A=i[f],I=r[p]=E(A)||j(A)?{type:A}:Z({},A),k=I.type;let D=!1,$=!0;if(E(k))for(let F=0;F<k.length;++F){const G=k[F],q=j(G)&&G.name;if(q==="Boolean"){D=!0;break}else q==="String"&&($=!1)}else D=j(k)&&k.name==="Boolean";I[0]=D,I[1]=$,(D||L(I,"default"))&&l.push(p)}}const h=[r,l];return K(e)&&n.set(e,h),h}function Os(e){return e[0]!=="$"&&!kt(e)}const Qn=e=>e[0]==="_"||e==="$stable",ps=e=>E(e)?e.map(Ee):[Ee(e)],Oi=(e,t,s)=>{if(t._n)return t;const n=ii((...o)=>ps(t(...o)),s);return n._c=!1,n},Un=(e,t,s)=>{const n=e._ctx;for(const o in e){if(Qn(o))continue;const i=e[o];if(j(i))t[o]=Oi(o,i,n);else if(i!=null){const r=ps(i);t[o]=()=>r}}},Vn=(e,t)=>{const s=ps(t);e.slots.default=()=>s},Kn=(e,t,s)=>{for(const n in t)(s||n!=="_")&&(e[n]=t[n])},Ci=(e,t,s)=>{const n=e.slots=Hn();if(e.vnode.shapeFlag&32){const o=t._;o?(Kn(n,t,s),s&&on(n,"_",o,!0)):Un(t,n)}else t&&Vn(e,t)},Ri=(e,t,s)=>{const{vnode:n,slots:o}=e;let i=!0,r=P;if(n.shapeFlag&32){const l=t._;l?s&&l===1?i=!1:Kn(o,t,s):(i=!t.$stable,Un(t,o)),r=t}else t&&(Vn(e,t),r={default:1});if(i)for(const l in o)!Qn(l)&&r[l]==null&&delete o[l]},de=Ji;function Li(e){return Pi(e)}function Pi(e,t){const s=m0();s.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:r,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:A,setScopeId:I=De,insertStaticContent:k}=e,D=(a,u,d,y=null,g=null,m=null,_=void 0,w=null,v=!!u.dynamicChildren)=>{if(a===u)return;a&&!St(a,u)&&(y=Xt(a),Ie(a,g,m,!0),a=null),u.patchFlag===-2&&(v=!1,u.dynamicChildren=null);const{type:b,ref:M,shapeFlag:x}=u;switch(b){case _0:$(a,u,d,y);break;case Nt:F(a,u,d,y);break;case P0:a==null&&G(u,d,y,_);break;case Ae:qt(a,u,d,y,g,m,_,w,v);break;default:x&1?J(a,u,d,y,g,m,_,w,v):x&6?Yt(a,u,d,y,g,m,_,w,v):(x&64||x&128)&&b.process(a,u,d,y,g,m,_,w,v,xt)}M!=null&&g&&l0(M,a&&a.ref,m,u||a,!u)},$=(a,u,d,y)=>{if(a==null)n(u.el=l(u.children),d,y);else{const g=u.el=a.el;u.children!==a.children&&h(g,u.children)}},F=(a,u,d,y)=>{a==null?n(u.el=c(u.children||""),d,y):u.el=a.el},G=(a,u,d,y)=>{[a.el,a.anchor]=k(a.children,u,d,y,a.el,a.anchor)},q=({el:a,anchor:u},d,y)=>{let g;for(;a&&a!==u;)g=A(a),n(a,d,y),a=g;n(u,d,y)},S=({el:a,anchor:u})=>{let d;for(;a&&a!==u;)d=A(a),o(a),a=d;o(u)},J=(a,u,d,y,g,m,_,w,v)=>{u.type==="svg"?_="svg":u.type==="math"&&(_="mathml"),a==null?Ne(u,d,y,g,m,_,w,v):Gt(a,u,g,m,_,w,v)},Ne=(a,u,d,y,g,m,_,w)=>{let v,b;const{props:M,shapeFlag:x,transition:T,dirs:B}=a;if(v=a.el=r(a.type,m,M&&M.is,M),x&8?f(v,a.children):x&16&&Qe(a.children,v,null,y,g,L0(a,m),_,w),B&&nt(a,null,y,"created"),_e(v,a,a.scopeId,_,y),M){for(const N in M)N!=="value"&&!kt(N)&&i(v,N,null,M[N],m,y);"value"in M&&i(v,"value",null,M.value,m),(b=M.onVnodeBeforeMount)&&Se(b,y,a)}B&&nt(a,null,y,"beforeMount");const O=Hi(g,T);O&&T.beforeEnter(v),n(v,u,d),((b=M&&M.onVnodeMounted)||O||B)&&de(()=>{b&&Se(b,y,a),O&&T.enter(v),B&&nt(a,null,y,"mounted")},g)},_e=(a,u,d,y,g)=>{if(d&&I(a,d),y)for(let m=0;m<y.length;m++)I(a,y[m]);if(g){let m=g.subTree;if(u===m||Xn(m.type)&&(m.ssContent===u||m.ssFallback===u)){const _=g.vnode;_e(a,_,_.scopeId,_.slotScopeIds,g.parent)}}},Qe=(a,u,d,y,g,m,_,w,v=0)=>{for(let b=v;b<a.length;b++){const M=a[b]=w?Ve(a[b]):Ee(a[b]);D(null,M,u,d,y,g,m,_,w)}},Gt=(a,u,d,y,g,m,_)=>{const w=u.el=a.el;let{patchFlag:v,dynamicChildren:b,dirs:M}=u;v|=a.patchFlag&16;const x=a.props||P,T=u.props||P;let B;if(d&&ot(d,!1),(B=T.onVnodeBeforeUpdate)&&Se(B,d,u,a),M&&nt(u,a,d,"beforeUpdate"),d&&ot(d,!0),(x.innerHTML&&T.innerHTML==null||x.textContent&&T.textContent==null)&&f(w,""),b?et(a.dynamicChildren,b,w,d,y,L0(u,g),m):_||W(a,u,w,null,d,y,L0(u,g),m,!1),v>0){if(v&16)_t(w,x,T,d,g);else if(v&2&&x.class!==T.class&&i(w,"class",null,T.class,g),v&4&&i(w,"style",x.style,T.style,g),v&8){const O=u.dynamicProps;for(let N=0;N<O.length;N++){const H=O[N],fe=x[H],le=T[H];(le!==fe||H==="value")&&i(w,H,fe,le,g,d)}}v&1&&a.children!==u.children&&f(w,u.children)}else!_&&b==null&&_t(w,x,T,d,g);((B=T.onVnodeUpdated)||M)&&de(()=>{B&&Se(B,d,u,a),M&&nt(u,a,d,"updated")},y)},et=(a,u,d,y,g,m,_)=>{for(let w=0;w<u.length;w++){const v=a[w],b=u[w],M=v.el&&(v.type===Ae||!St(v,b)||v.shapeFlag&70)?p(v.el):d;D(v,b,M,null,y,g,m,_,!0)}},_t=(a,u,d,y,g)=>{if(u!==d){if(u!==P)for(const m in u)!kt(m)&&!(m in d)&&i(a,m,u[m],null,g,y);for(const m in d){if(kt(m))continue;const _=d[m],w=u[m];_!==w&&m!=="value"&&i(a,m,w,_,g,y)}"value"in d&&i(a,"value",u.value,d.value,g)}},qt=(a,u,d,y,g,m,_,w,v)=>{const b=u.el=a?a.el:l(""),M=u.anchor=a?a.anchor:l("");let{patchFlag:x,dynamicChildren:T,slotScopeIds:B}=u;B&&(w=w?w.concat(B):B),a==null?(n(b,d,y),n(M,d,y),Qe(u.children||[],d,M,g,m,_,w,v)):x>0&&x&64&&T&&a.dynamicChildren?(et(a.dynamicChildren,T,d,g,m,_,w),(u.key!=null||g&&u===g.subTree)&&zn(a,u,!0)):W(a,u,d,M,g,m,_,w,v)},Yt=(a,u,d,y,g,m,_,w,v)=>{u.slotScopeIds=w,a==null?u.shapeFlag&512?g.ctx.activate(u,d,y,_,v):S0(u,d,y,g,m,_,v):ws(a,u,v)},S0=(a,u,d,y,g,m,_)=>{const w=a.component=or(a,y,g);if(kn(a)&&(w.ctx.renderer=xt),rr(w,!1,_),w.asyncDep){if(g&&g.registerDep(w,ne,_),!a.el){const v=w.subTree=re(Nt);F(null,v,u,d)}}else ne(w,a,u,d,g,m,_)},ws=(a,u,d)=>{const y=u.component=a.component;if(qi(a,u,d))if(y.asyncDep&&!y.asyncResolved){V(y,u,d);return}else y.next=u,y.update();else u.el=a.el,y.vnode=u},ne=(a,u,d,y,g,m,_)=>{const w=()=>{if(a.isMounted){let{next:x,bu:T,u:B,parent:O,vnode:N}=a;{const Te=Gn(a);if(Te){x&&(x.el=N.el,V(a,x,_)),Te.asyncDep.then(()=>{a.isUnmounted||w()});return}}let H=x,fe;ot(a,!1),x?(x.el=N.el,V(a,x,_)):x=N,T&&D0(T),(fe=x.props&&x.props.onVnodeBeforeUpdate)&&Se(fe,O,x,N),ot(a,!0);const le=Rs(a),xe=a.subTree;a.subTree=le,D(xe,le,p(xe.el),Xt(xe),a,g,m),x.el=le.el,H===null&&Yi(a,le.el),B&&de(B,g),(fe=x.props&&x.props.onVnodeUpdated)&&de(()=>Se(fe,O,x,N),g)}else{let x;const{el:T,props:B}=u,{bm:O,m:N,parent:H,root:fe,type:le}=a,xe=Ct(u);ot(a,!1),O&&D0(O),!xe&&(x=B&&B.onVnodeBeforeMount)&&Se(x,H,u),ot(a,!0);{fe.ce&&fe.ce._injectChildStyle(le);const Te=a.subTree=Rs(a);D(null,Te,d,y,a,g,m),u.el=Te.el}if(N&&de(N,g),!xe&&(x=B&&B.onVnodeMounted)){const Te=u;de(()=>Se(x,H,Te),g)}(u.shapeFlag&256||H&&Ct(H.vnode)&&H.vnode.shapeFlag&256)&&a.a&&de(a.a,g),a.isMounted=!0,u=d=y=null}};a.scope.on();const v=a.effect=new cn(w);a.scope.off();const b=a.update=v.run.bind(v),M=a.job=v.runIfDirty.bind(v);M.i=a,M.id=a.uid,v.scheduler=()=>us(M),ot(a,!0),b()},V=(a,u,d)=>{u.component=a;const y=a.vnode.props;a.vnode=u,a.next=null,ki(a,u.props,y,d),Ri(a,u.children,d),Je(),Es(a),Xe()},W=(a,u,d,y,g,m,_,w,v=!1)=>{const b=a&&a.children,M=a?a.shapeFlag:0,x=u.children,{patchFlag:T,shapeFlag:B}=u;if(T>0){if(T&128){Jt(b,x,d,y,g,m,_,w,v);return}else if(T&256){tt(b,x,d,y,g,m,_,w,v);return}}B&8?(M&16&&It(b,g,m),x!==b&&f(d,x)):M&16?B&16?Jt(b,x,d,y,g,m,_,w,v):It(b,g,m,!0):(M&8&&f(d,""),B&16&&Qe(x,d,y,g,m,_,w,v))},tt=(a,u,d,y,g,m,_,w,v)=>{a=a||pt,u=u||pt;const b=a.length,M=u.length,x=Math.min(b,M);let T;for(T=0;T<x;T++){const B=u[T]=v?Ve(u[T]):Ee(u[T]);D(a[T],B,d,null,g,m,_,w,v)}b>M?It(a,g,m,!0,!1,x):Qe(u,d,y,g,m,_,w,v,x)},Jt=(a,u,d,y,g,m,_,w,v)=>{let b=0;const M=u.length;let x=a.length-1,T=M-1;for(;b<=x&&b<=T;){const B=a[b],O=u[b]=v?Ve(u[b]):Ee(u[b]);if(St(B,O))D(B,O,d,null,g,m,_,w,v);else break;b++}for(;b<=x&&b<=T;){const B=a[x],O=u[T]=v?Ve(u[T]):Ee(u[T]);if(St(B,O))D(B,O,d,null,g,m,_,w,v);else break;x--,T--}if(b>x){if(b<=T){const B=T+1,O=B<M?u[B].el:y;for(;b<=T;)D(null,u[b]=v?Ve(u[b]):Ee(u[b]),d,O,g,m,_,w,v),b++}}else if(b>T)for(;b<=x;)Ie(a[b],g,m,!0),b++;else{const B=b,O=b,N=new Map;for(b=O;b<=T;b++){const he=u[b]=v?Ve(u[b]):Ee(u[b]);he.key!=null&&N.set(he.key,b)}let H,fe=0;const le=T-O+1;let xe=!1,Te=0;const Tt=new Array(le);for(b=0;b<le;b++)Tt[b]=0;for(b=B;b<=x;b++){const he=a[b];if(fe>=le){Ie(he,g,m,!0);continue}let Me;if(he.key!=null)Me=N.get(he.key);else for(H=O;H<=T;H++)if(Tt[H-O]===0&&St(he,u[H])){Me=H;break}Me===void 0?Ie(he,g,m,!0):(Tt[Me-O]=b+1,Me>=Te?Te=Me:xe=!0,D(he,u[Me],d,null,g,m,_,w,v),fe++)}const xs=xe?Fi(Tt):pt;for(H=xs.length-1,b=le-1;b>=0;b--){const he=O+b,Me=u[he],Ts=he+1<M?u[he+1].el:y;Tt[b]===0?D(null,Me,d,Ts,g,m,_,w,v):xe&&(H<0||b!==xs[H]?st(Me,d,Ts,2):H--)}}},st=(a,u,d,y,g=null)=>{const{el:m,type:_,transition:w,children:v,shapeFlag:b}=a;if(b&6){st(a.component.subTree,u,d,y);return}if(b&128){a.suspense.move(u,d,y);return}if(b&64){_.move(a,u,d,xt);return}if(_===Ae){n(m,u,d);for(let x=0;x<v.length;x++)st(v[x],u,d,y);n(a.anchor,u,d);return}if(_===P0){q(a,u,d);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(m),n(m,u,d),de(()=>w.enter(m),g);else{const{leave:x,delayLeave:T,afterLeave:B}=w,O=()=>n(m,u,d),N=()=>{x(m,()=>{O(),B&&B()})};T?T(m,O,N):N()}else n(m,u,d)},Ie=(a,u,d,y=!1,g=!1)=>{const{type:m,props:_,ref:w,children:v,dynamicChildren:b,shapeFlag:M,patchFlag:x,dirs:T,cacheIndex:B}=a;if(x===-2&&(g=!1),w!=null&&l0(w,null,d,a,!0),B!=null&&(u.renderCache[B]=void 0),M&256){u.ctx.deactivate(a);return}const O=M&1&&T,N=!Ct(a);let H;if(N&&(H=_&&_.onVnodeBeforeUnmount)&&Se(H,u,a),M&6)uo(a.component,d,y);else{if(M&128){a.suspense.unmount(d,y);return}O&&nt(a,null,u,"beforeUnmount"),M&64?a.type.remove(a,u,d,xt,y):b&&!b.hasOnce&&(m!==Ae||x>0&&x&64)?It(b,u,d,!1,!0):(m===Ae&&x&384||!g&&M&16)&&It(v,u,d),y&&_s(a)}(N&&(H=_&&_.onVnodeUnmounted)||O)&&de(()=>{H&&Se(H,u,a),O&&nt(a,null,u,"unmounted")},d)},_s=a=>{const{type:u,el:d,anchor:y,transition:g}=a;if(u===Ae){co(d,y);return}if(u===P0){S(a);return}const m=()=>{o(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:_,delayLeave:w}=g,v=()=>_(d,m);w?w(a.el,m,v):v()}else m()},co=(a,u)=>{let d;for(;a!==u;)d=A(a),o(a),a=d;o(u)},uo=(a,u,d)=>{const{bum:y,scope:g,job:m,subTree:_,um:w,m:v,a:b}=a;Cs(v),Cs(b),y&&D0(y),g.stop(),m&&(m.flags|=8,Ie(_,a,u,d)),w&&de(w,u),de(()=>{a.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},It=(a,u,d,y=!1,g=!1,m=0)=>{for(let _=m;_<a.length;_++)Ie(a[_],u,d,y,g)},Xt=a=>{if(a.shapeFlag&6)return Xt(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const u=A(a.anchor||a.el),d=u&&u[ri];return d?A(d):u};let B0=!1;const Is=(a,u,d)=>{a==null?u._vnode&&Ie(u._vnode,null,null,!0):D(u._vnode||null,a,u,null,null,null,d),u._vnode=a,B0||(B0=!0,Es(),Sn(),B0=!1)},xt={p:D,um:Ie,m:st,r:_s,mt:S0,mc:Qe,pc:W,pbc:et,n:Xt,o:e};return{render:Is,hydrate:void 0,createApp:Bi(Is)}}function L0({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ot({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function zn(e,t,s=!1){const n=e.children,o=t.children;if(E(n)&&E(o))for(let i=0;i<n.length;i++){const r=n[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=Ve(o[i]),l.el=r.el),!s&&l.patchFlag!==-2&&zn(r,l)),l.type===_0&&(l.el=r.el)}}function Fi(e){const t=e.slice(),s=[0];let n,o,i,r,l;const c=e.length;for(n=0;n<c;n++){const h=e[n];if(h!==0){if(o=s[s.length-1],e[o]<h){t[n]=o,s.push(n);continue}for(i=0,r=s.length-1;i<r;)l=i+r>>1,e[s[l]]<h?i=l+1:r=l;h<e[s[i]]&&(i>0&&(t[n]=s[i-1]),s[i]=n)}}for(i=s.length,r=s[i-1];i-- >0;)s[i]=r,r=t[r];return s}function Gn(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Gn(t)}function Cs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Wi=Symbol.for("v-scx"),Ni=()=>t0(Wi);function Qi(e,t){return gs(e,null,{flush:"sync"})}function At(e,t,s){return gs(e,t,s)}function gs(e,t,s=P){const{immediate:n,deep:o,flush:i,once:r}=s,l=Z({},s),c=t&&n||!t&&i!=="post";let h;if(Ut){if(i==="sync"){const I=Ni();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=De,I.resume=De,I.pause=De,I}}const f=se;l.call=(I,k,D)=>je(I,f,k,D);let p=!1;i==="post"?l.scheduler=I=>{de(I,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,k)=>{k?I():us(I)}),l.augmentJob=I=>{t&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const A=ei(e,t,l);return Ut&&(h?h.push(A):c&&A()),A}function Ui(e,t,s){const n=this.proxy,o=Y(e)?e.includes(".")?qn(n,e):()=>n[e]:e.bind(n,n);let i;j(t)?i=t:(i=t.handler,s=t);const r=Kt(this),l=gs(o,i.bind(n),s);return r(),l}function qn(e,t){const s=t.split(".");return()=>{let n=e;for(let o=0;o<s.length&&n;o++)n=n[s[o]];return n}}function Vi(e,t,s=P){const n=ir(),o=Fe(t),i=Ye(t),r=Yn(e,o),l=Jo((c,h)=>{let f,p=P,A;return Qi(()=>{const I=e[o];ae(f,I)&&(f=I,h())}),{get(){return c(),s.get?s.get(f):f},set(I){const k=s.set?s.set(I):I;if(!ae(k,f)&&!(p!==P&&ae(I,p)))return;const D=n.vnode.props;D&&(t in D||o in D||i in D)&&(`onUpdate:${t}`in D||`onUpdate:${o}`in D||`onUpdate:${i}`in D)||(f=I,h()),n.emit(`update:${t}`,k),ae(I,k)&&ae(I,p)&&!ae(k,A)&&h(),p=I,A=k}}});return l[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?r||P:l,done:!1}:{done:!0}}}},l}const Yn=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${Ye(t)}Modifiers`];function Ki(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||P;let o=s;const i=t.startsWith("update:"),r=i&&Yn(n,t.slice(7));r&&(r.trim&&(o=s.map(f=>Y(f)?f.trim():f)),r.number&&(o=s.map(yo)));let l,c=n[l=E0(t)]||n[l=E0(Fe(t))];!c&&i&&(c=n[l=E0(Ye(t))]),c&&je(c,e,6,o);const h=n[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,je(h,e,6,o)}}function Jn(e,t,s=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const i=e.emits;let r={},l=!1;if(!j(e)){const c=h=>{const f=Jn(h,t,!0);f&&(l=!0,Z(r,f))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(K(e)&&n.set(e,null),null):(E(i)?i.forEach(c=>r[c]=null):Z(r,i),K(e)&&n.set(e,r),r)}function w0(e,t){return!e||!d0(t)?!1:(t=t.slice(2).replace(/Once$/,""),L(e,t[0].toLowerCase()+t.slice(1))||L(e,Ye(t))||L(e,t))}function Rs(e){const{type:t,vnode:s,proxy:n,withProxy:o,propsOptions:[i],slots:r,attrs:l,emit:c,render:h,renderCache:f,props:p,data:A,setupState:I,ctx:k,inheritAttrs:D}=e,$=r0(e);let F,G;try{if(s.shapeFlag&4){const S=o||n,J=S;F=Ee(h.call(J,S,f,p,I,A,k)),G=l}else{const S=t;F=Ee(S.length>1?S(p,{attrs:l,slots:r,emit:c}):S(p,null)),G=t.props?l:zi(l)}}catch(S){Lt.length=0,A0(S,e,1),F=re(Nt)}let q=F;if(G&&D!==!1){const S=Object.keys(G),{shapeFlag:J}=q;S.length&&J&7&&(i&&S.some(es)&&(G=Gi(G,i)),q=vt(q,G,!1,!0))}return s.dirs&&(q=vt(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(s.dirs):s.dirs),s.transition&&fs(q,s.transition),F=q,r0($),F}const zi=e=>{let t;for(const s in e)(s==="class"||s==="style"||d0(s))&&((t||(t={}))[s]=e[s]);return t},Gi=(e,t)=>{const s={};for(const n in e)(!es(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function qi(e,t,s){const{props:n,children:o,component:i}=e,{props:r,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return n?Ls(n,r,h):!!r;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const A=f[p];if(r[A]!==n[A]&&!w0(h,A))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:n===r?!1:n?r?Ls(n,r,h):!0:!!r;return!1}function Ls(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(t[i]!==e[i]&&!w0(s,i))return!0}return!1}function Yi({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const Xn=e=>e.__isSuspense;function Ji(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):oi(e)}const Ae=Symbol.for("v-fgt"),_0=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),P0=Symbol.for("v-stc"),Lt=[];let ge=null;function ce(e=!1){Lt.push(ge=e?null:[])}function Xi(){Lt.pop(),ge=Lt[Lt.length-1]||null}let Qt=1;function Ps(e,t=!1){Qt+=e,e<0&&ge&&t&&(ge.hasOnce=!0)}function Zi(e){return e.dynamicChildren=Qt>0?ge||pt:null,Xi(),Qt>0&&ge&&ge.push(e),e}function ue(e,t,s,n,o,i){return Zi(C(e,t,s,n,o,i,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const $n=({key:e})=>e??null,s0=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||X(e)||j(e)?{i:ve,r:e,k:t,f:!!s}:e:null);function C(e,t=null,s=null,n=0,o=null,i=e===Ae?0:1,r=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$n(t),ref:t&&s0(t),scopeId:En,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ve};return l?(ms(c,s),i&128&&e.normalize(c)):s&&(c.shapeFlag|=Y(s)?8:16),Qt>0&&!r&&ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ge.push(c),c}const re=$i;function $i(e,t=null,s=null,n=0,o=null,i=!1){if((!e||e===Ai)&&(e=Nt),Zn(e)){const l=vt(e,t,!0);return s&&ms(l,s),Qt>0&&!i&&ge&&(l.shapeFlag&6?ge[ge.indexOf(e)]=l:ge.push(l)),l.patchFlag=-2,l}if(ur(e)&&(e=e.__vccOpts),t){t=er(t);let{class:l,style:c}=t;l&&!Y(l)&&(t.class=ze(l)),K(c)&&(cs(c)&&!E(c)&&(c=Z({},c)),t.style=Pt(c))}const r=Y(e)?1:Xn(e)?128:li(e)?64:K(e)?4:j(e)?2:0;return C(e,t,s,n,o,r,i,!0)}function er(e){return e?cs(e)||Fn(e)?Z({},e):e:null}function vt(e,t,s=!1,n=!1){const{props:o,ref:i,patchFlag:r,children:l,transition:c}=e,h=t?tr(o||{},t):o,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&$n(h),ref:t&&t.ref?s&&i?E(i)?i.concat(s0(t)):[i,s0(t)]:s0(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&fs(f,c.clone(f)),f}function Y0(e=" ",t=0){return re(_0,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?re(Nt):E(e)?re(Ae,null,e.slice()):Zn(e)?Ve(e):re(_0,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vt(e)}function ms(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(E(t))s=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),ms(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=t._;!o&&!Fn(t)?t._ctx=ve:o===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ve},s=32):(t=String(t),n&64?(s=16,t=[Y0(t)]):s=8);e.children=t,e.shapeFlag|=s}function tr(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=ze([t.class,n.class]));else if(o==="style")t.style=Pt([t.style,n.style]);else if(d0(o)){const i=t[o],r=n[o];r&&i!==r&&!(E(i)&&i.includes(r))&&(t[o]=i?[].concat(i,r):r)}else o!==""&&(t[o]=n[o])}return t}function Se(e,t,s,n=null){je(e,t,7,[s,n])}const sr=Ln();let nr=0;function or(e,t,s){const n=e.type,o=(t?t.appContext:e.appContext)||sr,i={uid:nr++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nn(n,o),emitsOptions:Jn(n,o),emit:null,emitted:null,propsDefaults:P,inheritAttrs:n.inheritAttrs,ctx:P,data:P,props:P,attrs:P,slots:P,refs:P,setupState:P,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ki.bind(null,i),e.ce&&e.ce(i),i}let se=null;const ir=()=>se||ve;let u0,J0;{const e=m0(),t=(s,n)=>{let o;return(o=e[s])||(o=e[s]=[]),o.push(n),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};u0=t("__VUE_INSTANCE_SETTERS__",s=>se=s),J0=t("__VUE_SSR_SETTERS__",s=>Ut=s)}const Kt=e=>{const t=se;return u0(e),e.scope.on(),()=>{e.scope.off(),u0(t)}},Hs=()=>{se&&se.scope.off(),u0(null)};function eo(e){return e.vnode.shapeFlag&4}let Ut=!1;function rr(e,t=!1,s=!1){t&&J0(t);const{props:n,children:o}=e.vnode,i=eo(e);Di(e,n,i,t),Ci(e,o,s);const r=i?lr(e,t):void 0;return t&&J0(!1),r}function lr(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vi);const{setup:n}=s;if(n){Je();const o=e.setupContext=n.length>1?cr(e):null,i=Kt(e),r=Vt(n,e,0,[e.props,o]),l=en(r);if(Xe(),i(),(l||e.sp)&&!Ct(e)&&Dn(e),l){if(r.then(Hs,Hs),t)return r.then(c=>{Fs(e,c)}).catch(c=>{A0(c,e,0)});e.asyncDep=r}else Fs(e,r)}else to(e)}function Fs(e,t,s){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=xn(t)),to(e)}function to(e,t,s){const n=e.type;e.render||(e.render=n.render||De);{const o=Kt(e);Je();try{_i(e)}finally{Xe(),o()}}}const ar={get(e,t){return ee(e,"get",""),e[t]}};function cr(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,ar),slots:e.slots,emit:e.emit,expose:t}}function ys(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xn(Ko(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Rt)return Rt[s](e)},has(t,s){return s in t||s in Rt}})):e.proxy}function ur(e){return j(e)&&"__vccOpts"in e}const ct=(e,t)=>Zo(e,t,Ut),fr="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let X0;const Ws=typeof window<"u"&&window.trustedTypes;if(Ws)try{X0=Ws.createPolicy("vue",{createHTML:e=>e})}catch{}const so=X0?e=>X0.createHTML(e):e=>e,hr="http://www.w3.org/2000/svg",dr="http://www.w3.org/1998/Math/MathML",Ce=typeof document<"u"?document:null,Ns=Ce&&Ce.createElement("template"),pr={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const o=t==="svg"?Ce.createElementNS(hr,e):t==="mathml"?Ce.createElementNS(dr,e):s?Ce.createElement(e,{is:s}):Ce.createElement(e);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Ce.createTextNode(e),createComment:e=>Ce.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ce.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,o,i){const r=s?s.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),s),!(o===i||!(o=o.nextSibling)););else{Ns.innerHTML=so(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=Ns.content;if(n==="svg"||n==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},gr=Symbol("_vtc");function mr(e,t,s){const n=e[gr];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Qs=Symbol("_vod"),yr=Symbol("_vsh"),br=Symbol(""),Ar=/(^|;)\s*display\s*:/;function vr(e,t,s){const n=e.style,o=Y(s);let i=!1;if(s&&!o){if(t)if(Y(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();s[l]==null&&n0(n,l,"")}else for(const r in t)s[r]==null&&n0(n,r,"");for(const r in s)r==="display"&&(i=!0),n0(n,r,s[r])}else if(o){if(t!==s){const r=n[br];r&&(s+=";"+r),n.cssText=s,i=Ar.test(s)}}else t&&e.removeAttribute("style");Qs in e&&(e[Qs]=i?n.display:"",e[yr]&&(n.display="none"))}const Us=/\s*!important$/;function n0(e,t,s){if(E(s))s.forEach(n=>n0(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=wr(e,t);Us.test(s)?e.setProperty(Ye(n),s.replace(Us,""),"important"):e[n]=s}}const Vs=["Webkit","Moz","ms"],H0={};function wr(e,t){const s=H0[t];if(s)return s;let n=Fe(t);if(n!=="filter"&&n in e)return H0[t]=n;n=nn(n);for(let o=0;o<Vs.length;o++){const i=Vs[o]+n;if(i in e)return H0[t]=i}return t}const Ks="http://www.w3.org/1999/xlink";function zs(e,t,s,n,o,i=Io(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Ks,t.slice(6,t.length)):e.setAttributeNS(Ks,t,s):s==null||i&&!rn(s)?e.removeAttribute(t):e.setAttribute(t,i?"":qe(s)?String(s):s)}function Gs(e,t,s,n,o){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?so(s):s);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(l!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let r=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=rn(s):s==null&&l==="string"?(s="",r=!0):l==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(o||t)}function _r(e,t,s,n){e.addEventListener(t,s,n)}function Ir(e,t,s,n){e.removeEventListener(t,s,n)}const qs=Symbol("_vei");function xr(e,t,s,n,o=null){const i=e[qs]||(e[qs]={}),r=i[t];if(n&&r)r.value=n;else{const[l,c]=Tr(t);if(n){const h=i[t]=Br(n,o);_r(e,l,h,c)}else r&&(Ir(e,l,r,c),i[t]=void 0)}}const Ys=/(?:Once|Passive|Capture)$/;function Tr(e){let t;if(Ys.test(e)){t={};let n;for(;n=e.match(Ys);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ye(e.slice(2)),t]}let F0=0;const Mr=Promise.resolve(),Sr=()=>F0||(Mr.then(()=>F0=0),F0=Date.now());function Br(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;je(Er(n,s.value),t,5,[n])};return s.value=e,s.attached=Sr(),s}function Er(e,t){if(E(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Js=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dr=(e,t,s,n,o,i)=>{const r=o==="svg";t==="class"?mr(e,n,r):t==="style"?vr(e,s,n):d0(t)?es(t)||xr(e,t,s,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kr(e,t,n,r))?(Gs(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&zs(e,t,n,r,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Y(n))?Gs(e,Fe(t),n,i,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),zs(e,t,n,r))};function kr(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Js(t)&&j(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Js(t)&&Y(s)?!1:t in e}const jr=["ctrl","shift","alt","meta"],Or={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jr.some(s=>e[`${s}Key`]&&!t.includes(s))},f0=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=(o,...i)=>{for(let r=0;r<t.length;r++){const l=Or[t[r]];if(l&&l(o,t))return}return e(o,...i)})},Cr=Z({patchProp:Dr},pr);let Xs;function Rr(){return Xs||(Xs=Li(Cr))}const Lr=(...e)=>{const t=Rr().createApp(...e),{mount:s}=t;return t.mount=n=>{const o=Hr(n);if(!o)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=s(o,!1,Pr(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Pr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Hr(e){return Y(e)?document.querySelector(e):e}const Fr={class:"progress"},Wr=Ze({__name:"progress",props:{callback:{type:Function},progress:{}},setup(e){const t=e,s=z(!1),n=h=>{h.preventDefault(),s.value=!0,window.addEventListener("mousemove",o),window.addEventListener("touchmove",o),window.addEventListener("mouseup",i),window.addEventListener("touchend",i)};function o(h){s.value&&l(h)}function i(){s.value=!1,window.removeEventListener("mousemove",o),window.removeEventListener("touchmove",o)}const r=z(null);function l(h){var k,D;console.log(h);const p=r.value.getBoundingClientRect();let I=((h.clientX??((D=(k=h.touches)==null?void 0:k[0])==null?void 0:D.clientX))-p.left)/p.width;I=Math.max(0,Math.min(1,I)),t.callback(Number(I.toFixed(2)))}function c(h){l(h)}return(h,f)=>(ce(),ue("div",Fr,[C("div",{class:"custom-slider",ref_key:"sliderRef",ref:r},[C("div",{class:"track",onClick:c},[C("div",{class:"fill",style:Pt({width:h.progress*100+"%"})},null,4)]),C("div",{class:"thumb",style:Pt({left:h.progress*100+"%"}),onMousedown:n,onTouchstart:n},null,36)],512)]))}}),$e=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s},no=$e(Wr,[["__scopeId","data-v-9c0ddf90"]]),Nr="/assets/Bones-DZVk_zUT.mp3",Qr="/assets/Demons-fzTvVVlw.mp3",Ur="/assets/Season%20in%20the%20Sun-DVkLFWH3.mp3",Vr="/assets/Sharks-BCEIjMHK.mp3",Kr="/assets/Thunder-S07EJM4a.mp3",zr="/assets/Wake%20Up-CasNVWqE.mp3",Gr="/assets/Whatever%20It%20Takes-BpnlT3sp.mp3",qr="/assets/peter-BVhB60oM.mp3",Yr="/assets/so%20far%20away-CPeEg5z6.mp3",Jr="/assets/something-CLtHNr96.mp3",Xr=`[00:00.00]Bones - Imagine Dragons
[00:00.00]
[00:00.00]Lyrics by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Robin Fredriksson/Mattias Larsson
[00:02.00]
[00:02.00]Composed by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Robin Fredriksson/Mattias Larsson
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
[02:38.00]因为我的身体里有种魔力`,Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Xr},Symbol.toStringTag,{value:"Module"})),$r=`[00:00.00]Demons - Imagine Dragons (梦龙)
[00:00.00]
[00:00.00]Lyrics by：Dan Reynolds/Wayne Sermon/Ben McKee/Alex Da Kid/Josh Mosser
[00:00.00]
[00:00.00]Composed by：Josh Mosser/Alex Da Kid/Dan Reynolds/Wayne Sermon/Ben McKee
[00:00.00]
[00:00.00]Arranged by：Alex da Kid
[00:00.00]
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
`,el=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),tl=`[00:00.00]Seasons in the Sun - Westlife (西城男孩)
[00:06.00]
[00:06.00]Written by：Terry Jacks/Jacques Brel
[00:12.00]
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
`,sl=Object.freeze(Object.defineProperty({__proto__:null,default:tl},Symbol.toStringTag,{value:"Module"})),nl=`[00:00.00]Sharks - Imagine Dragons
[00:00.00]
[00:02.00]Lyrics by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Mattias Larsson/Robin Fredriksson
[00:04.00]
[00:04.00]Composed by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Mattias Larsson/Robin Fredriksson
[00:06.00]
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
`,ol=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"})),il=`[00:00.00]Thunder - Imagine Dragons (梦龙)
[00:00.00]
[00:00.00]Lyrics by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Jayson DeZuzio/A. Grant
[00:00.00]
[00:00.00]Composed by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Jayson DeZuzio/A. Grant
[00:00.00]
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
`,rl=Object.freeze(Object.defineProperty({__proto__:null,default:il},Symbol.toStringTag,{value:"Module"})),ll=`[00:00.00]Wake Up - Imagine Dragons
[00:01.00]TME享有本翻译作品的著作权
[00:03.00]Lyrics by：Dan Reynolds/Wayne Sermon/Ben McKee/Robin Lennart Fredriksson/Mattias Larsson
[00:03.00]
[00:06.00]Composed by：Dan Reynolds/Wayne Sermon/Ben McKee/Robin Lennart Fredriksson/Mattias Larsson
[00:06.00]
[00:11.00]Produced by：Mattman & Robin
[00:11.00]
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
`,al=Object.freeze(Object.defineProperty({__proto__:null,default:ll},Symbol.toStringTag,{value:"Module"})),cl=`[00:00.00]Whatever It Takes - Imagine Dragons (梦龙)
[00:03.00]
[00:07.00]Lyrics by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Joel Little
[00:07.00]
[00:11.00]Composed by：Dan Reynolds/Wayne Sermon/Ben McKee/Daniel Platzman/Joel Little
[00:11.00]
[00:14.00]Produced by：Joel Little
[00:14.00]
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
`,ul=Object.freeze(Object.defineProperty({__proto__:null,default:cl},Symbol.toStringTag,{value:"Module"})),fl=`[00:00.00]So Far Away - Martin Garrix/David Guetta/Jamie Scott/Romy Dya
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
[02:58.53]When you're so far away`,hl=Object.freeze(Object.defineProperty({__proto__:null,default:fl},Symbol.toStringTag,{value:"Module"})),dl=`[ml:1.0]
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
[03:56.044]`,pl=Object.freeze(Object.defineProperty({__proto__:null,default:dl},Symbol.toStringTag,{value:"Module"})),gl="data:image/webp;base64,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",ml=Object.freeze(Object.defineProperty({__proto__:null,default:gl},Symbol.toStringTag,{value:"Module"})),yl="data:image/webp;base64,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",bl=Object.freeze(Object.defineProperty({__proto__:null,default:yl},Symbol.toStringTag,{value:"Module"})),Al="data:image/webp;base64,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",vl=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"})),wl="/assets/Thunder-BFI2gm7s.webp",_l=Object.freeze(Object.defineProperty({__proto__:null,default:wl},Symbol.toStringTag,{value:"Module"})),Il="data:image/webp;base64,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",xl=Object.freeze(Object.defineProperty({__proto__:null,default:Il},Symbol.toStringTag,{value:"Module"})),Tl="/assets/Whatever%20It%20Takes-BQcRQVsM.webp",Ml=Object.freeze(Object.defineProperty({__proto__:null,default:Tl},Symbol.toStringTag,{value:"Module"})),Sl="/assets/peter-Djj-KHRh.webp",Bl=Object.freeze(Object.defineProperty({__proto__:null,default:Sl},Symbol.toStringTag,{value:"Module"})),El="/assets/shape-eqqK86Ed.webp",Dl=Object.freeze(Object.defineProperty({__proto__:null,default:El},Symbol.toStringTag,{value:"Module"})),kl="/assets/so%20far%20away-Dl1oEphr.webp",jl=Object.freeze(Object.defineProperty({__proto__:null,default:kl},Symbol.toStringTag,{value:"Module"})),Ol="/assets/something-f5Ei2QHr.webp",Cl=Object.freeze(Object.defineProperty({__proto__:null,default:Ol},Symbol.toStringTag,{value:"Module"})),zt=z([]),wt=z(null),Rl=async()=>{try{const e=Object.assign({"/src/assets/music/Bones.mp3":Nr,"/src/assets/music/Demons.mp3":Qr,"/src/assets/music/Season in the Sun.mp3":Ur,"/src/assets/music/Sharks.mp3":Vr,"/src/assets/music/Thunder.mp3":Kr,"/src/assets/music/Wake Up.mp3":zr,"/src/assets/music/Whatever It Takes.mp3":Gr,"/src/assets/music/peter.mp3":qr,"/src/assets/music/so far away.mp3":Yr,"/src/assets/music/something.mp3":Jr}),t=Object.assign({"/src/assets/music/Bones.js":Zr,"/src/assets/music/Demons.js":el,"/src/assets/music/Season in the Sun.js":sl,"/src/assets/music/Sharks.js":ol,"/src/assets/music/Thunder.js":rl,"/src/assets/music/Wake Up.js":al,"/src/assets/music/Whatever It Takes.js":ul,"/src/assets/music/so far away.js":hl,"/src/assets/music/something.js":pl}),s=Object.assign({"/src/assets/images/music/Bones.webp":ml,"/src/assets/images/music/Demons.webp":bl,"/src/assets/images/music/Sharks.webp":vl,"/src/assets/images/music/Thunder.webp":_l,"/src/assets/images/music/Wake Up.webp":xl,"/src/assets/images/music/Whatever It Takes.webp":Ml,"/src/assets/images/music/peter.webp":Bl,"/src/assets/images/music/shape.webp":Dl,"/src/assets/images/music/so far away.webp":jl,"/src/assets/images/music/something.webp":Cl});zt.value=await Promise.all(Object.entries(e).map(async([n,o])=>{const i=n.replace(/^.*music\//,"").replace(/\.mp3$/,""),r=`/src/assets/music/${i}.js`,l=`/src/assets/images/music/${i}.webp`,c=t[r]||{default:""},h=s[l]||{default:""};return{id:i,title:Ll(i),audioUrl:o,lyric:c.default,logo:h.default}}))}catch(e){console.error("加载音乐数据失败:",e)}};function Ll(e){return e.replace(/^\d+_/,"").replace(/_/g," ").replace(/\b\w/g,t=>t.toUpperCase())}const Bt=ct(()=>{var e;return((e=wt.value)==null?void 0:e.lyric.split(`
`).map(t=>{var i,r,l;if(!t)return{};const s=(i=t==null?void 0:t.split("]")[0])==null?void 0:i.replace("[",""),n=Number((r=s==null?void 0:s.split(":"))==null?void 0:r[0])||0,o=Number((l=s==null?void 0:s.split(":"))==null?void 0:l[1])||0;return{time:n*60+o,text:t.split("]")[1]}}))||["暂无歌词"]}),me=z(null),ut=z(null),Dt=z(null),oo=()=>{me.value||(me.value=new window.AudioContext,ut.value=me.value.createGain(),ut.value.connect(me.value.destination),dt(be.value))},h0=z(null),Ge=z(!1),Le=z(null),I0=z(0),bs=z(0),x0=async(e=zt.value[Pe.value])=>{var t;if(e.audioUrl!==((t=wt.value)==null?void 0:t.audioUrl)){wt.value=e,Dt.value&&Dt.value!==null&&(Dt.value.destroy(),Dt.value=null),oo();try{const n=await(await fetch(e.audioUrl)).arrayBuffer();return h0.value=await me.value.decodeAudioData(n),He.value=h0.value.duration,T0(),!0}catch(s){return console.error("音频加载失败:",s),!1}}};function T0(){if(!h0.value){x0();return}Dt.value={play:T0,pause:As,stop:M0,destroy:ro,setVolume:dt,seek:io,onProgress:Hl},Le.value=me.value.createBufferSource(),Le.value.buffer=h0.value,Le.value.connect(ut.value);const e=I0.value;return Le.value.start(0,e),bs.value=me.value.currentTime-e,Ge.value=!0,Pl(),!0}const As=()=>Ge.value?(Le.value.stop(),I0.value=me.value.currentTime-bs.value,Ge.value=!1,cancelAnimationFrame(vs.value),!0):!1,M0=()=>{Ge.value&&(Ge.value=!1,Le.value.stop(),Le.value.disconnect()),I0.value=0,cancelAnimationFrame(vs.value)};function dt(e){const t=Math.max(0,Math.min(1,e));ut.value&&me.value&&(ut.value.gain.value=t)}const io=e=>{if(e>=0&&e<=He.value){const t=Ge.value;return As(),I0.value=e,t&&T0(),!0}return!1},Z0=z(null),vs=z();function Pl(){const e=()=>{Ge.value&&(ke.value=me.value.currentTime-bs.value,He.value!==0&&ke.value>=He.value&&M0(),Z0.value&&Z0.value({currentTime:ke.value,duration:He.value,progress:lo.value*100}),vs.value=requestAnimationFrame(e))};e()}function Hl(e){Z0.value=e}function ro(){var e,t,s;M0(),me.value&&((e=me.value)==null||e.close(),(t=Le.value)==null||t.disconnect(),(s=ut.value)==null||s.disconnect(),me.value=null,ut.value=null,Le.value=null)}const be=z(.5),Pe=z(0),ke=z(0),He=z(0),lo=ct(()=>He.value!==0?ke.value/He.value:0),Fl=()=>{Pe.value===0?Pe.value=zt.value.length-1:Pe.value--,x0()},Wl=()=>{Pe.value===zt.value.length-1?Pe.value=0:Pe.value++,x0()};function Zs(e){if(isNaN(e))return"00:00";const t=Math.abs(Math.floor(e)),s=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60,i=[];return s>0&&i.push(s.toString().padStart(2,"0")),i.push(n.toString().padStart(2,"0")),i.push(o.toString().padStart(2,"0")),i.join(":")}const ao="/assets/music-C0v9vemk.jpg",Nl={class:"progress-bar"},Ql={class:"progress-bar__logo"},Ul=["src"],Vl={class:"progress-bar__info"},Kl={class:"name"},zl={class:"progress-bar__info__progress"},Gl={class:"time"},ql=Ze({__name:"progressBar",setup(e){const t=o=>{ke.value=o*He.value,io(ke.value)},s=ct(()=>Zs(ke.value)),n=ct(()=>Zs(He.value));return(o,i)=>{var r,l;return ce(),ue("div",Nl,[C("div",Ql,[C("img",{src:((r=U(wt))==null?void 0:r.logo)||U(ao),alt:"音乐logo"},null,8,Ul)]),C("div",Vl,[C("p",Kl,rt(((l=U(wt))==null?void 0:l.title)||"暂无音乐"),1),C("div",zl,[re(no,{progress:U(lo),callback:t},null,8,["progress"]),C("p",Gl,[C("span",null,rt(U(s)),1),i[0]||(i[0]=Y0()),i[1]||(i[1]=C("i",null,"/",-1)),i[2]||(i[2]=Y0()),C("span",null,rt(U(n)),1)])])])])}}}),Yl=$e(ql,[["__scopeId","data-v-8b2ff5cb"]]),Jl={class:"volume-percent"},Xl=Ze({__name:"volume",setup(e){const t=ct(()=>be.value===0),s=z(.5);dt(be.value);const n=c=>{be.value=c,dt(c)},o=()=>{t.value?be.value=s.value:(s.value=be.value,be.value=0),dt(be.value)};At(()=>be.value,c=>{dt(c)});const i=z(!1),r=()=>{i.value=!0},l=()=>{i.value=!1};return(c,h)=>(ce(),ue("div",{class:"contoel-volume",onMouseenter:r,onMouseleave:l},[C("span",{class:ze(["iconfont",{"icon-jingyin":U(t),"icon-yinliang":!U(t)}]),onClick:f0(o,["stop"])},null,2),C("div",{class:ze(["contoel-volume__model",{active:U(i)}])},[re(no,{progress:U(be),callback:n},null,8,["progress"]),C("span",Jl,rt((U(be)*100).toFixed(0))+"% ",1)],2)],32))}}),Zl=$e(Xl,[["__scopeId","data-v-0020b177"]]),$l={class:"control-btn"},ea=Ze({__name:"btn",setup(e){return(t,s)=>(ce(),ue("div",$l,[C("span",{class:"iconfont icon-prev",onClick:s[0]||(s[0]=n=>U(Fl)()),title:"上一首"}),U(Ge)?(ce(),ue("span",{key:1,class:"iconfont icon-zanting",onClick:s[2]||(s[2]=n=>U(As)()),title:"暂停"})):(ce(),ue("span",{key:0,class:"iconfont icon-bofang",onClick:s[1]||(s[1]=n=>U(T0)()),title:"播放"})),C("span",{class:"iconfont icon-tingzhi",onClick:s[3]||(s[3]=n=>U(M0)()),title:"停止"}),C("span",{class:"iconfont icon-next",onClick:s[4]||(s[4]=n=>U(Wl)()),title:"下一首"})]))}}),ta=$e(ea,[["__scopeId","data-v-92a33b29"]]),sa={style:{width:"100%",height:"100%",overflow:"auto"}},na=["onClick"],oa={class:"music-list-down"},ia=Ze({__name:"musicListBoard",props:{show:{},showModifiers:{}},emits:wi(["update:show"],["update:show"]),setup(e,{emit:t}){const s=(r,l)=>{Pe.value=l,x0(r),i()},n=Vi(e,"show"),o=t,i=()=>{o("update:show",!1)};return(r,l)=>(ce(),ue("div",{class:ze(["music-list-board",{active:n.value}])},[C("div",sa,[(ce(!0),ue(Ae,null,On(U(zt),(c,h)=>(ce(),ue("div",{key:c.id,class:ze(["music-item",{active:h===U(Pe)}]),onClick:f0(f=>s(c,h),["stop"])},[C("span",null,rt(c.title),1),l[0]||(l[0]=C("span",null,"梦龙乐队",-1))],10,na))),128))]),C("div",oa,[C("span",{class:"iconfont icon-xia",onClick:f0(i,["stop"])})])],2))}}),ra=$e(ia,[["__scopeId","data-v-669522aa"]]),la={class:"control-module"},aa={class:"controls-row"},ca=Ze({__name:"index",setup(e){const t=z(!1),s=()=>{t.value=!0};return(n,o)=>(ce(),ue("div",la,[re(Yl),C("div",aa,[re(ta),C("span",{class:"iconfont icon-play_list",title:"播放列表",onClick:f0(s,["stop"])}),re(Zl)]),re(ra,{show:U(t),"onUpdate:show":o[0]||(o[0]=i=>X(t)?t.value=i:null)},null,8,["show"])]))}}),ua=$e(ca,[["__scopeId","data-v-16f1cdb7"]]),fa={class:"music"},ha={class:"music-logo"},da=["src"],pa=Ze({__name:"Music",setup(e){hs(()=>{oo()});const t=ct(()=>Bt.value.find(l=>l.time>=ke.value)),s=z(),n=z();let o=0,i=40,r=0;return At(()=>Bt.value,()=>{o=s.value.clientHeight,r=(Bt.value.length-1)*i-o+i/2}),At(()=>ke.value,()=>{let c=Bt.value.findIndex(h=>h.time>=ke.value)*i+i/2-o/2;c<0&&(c=0),c>r&&(c=r),n.value.style.transform=`translateY(-${c}px)`}),(l,c)=>{var h;return ce(),ue("div",fa,[C("div",ha,[C("img",{src:((h=U(wt))==null?void 0:h.logo)||U(ao),alt:"音乐logo"},null,8,da)]),C("div",{class:"music-lrc",ref_key:"musicLrc",ref:s},[C("ul",{class:"music-lrc-content",ref_key:"musicLrcContent",ref:n},[(ce(!0),ue(Ae,null,On(U(Bt),f=>{var p;return ce(),ue("li",{class:ze({active:(f==null?void 0:f.time)===((p=U(t))==null?void 0:p.time)})},rt(f==null?void 0:f.text),3)}),256))],512)],512)])}}}),ga=$e(pa,[["__scopeId","data-v-f19c336d"]]),ma={class:"container"},ya=Ze({__name:"App",setup(e){return hs(()=>{Rl()}),ds(()=>{ro()}),(t,s)=>(ce(),ue("div",ma,[re(ga),re(ua)]))}}),ba=$e(ya,[["__scopeId","data-v-49aa59a1"]]);window._iconfont_svg_string_4902328='<svg><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M325.456471 862.280661"  ></path><path d="M882.057788 862.280661"  ></path><path d="M236.028491 877.160382"  ></path><path d="M960.132455 877.160382"  ></path><path d="M63.683483 788.736998"  ></path><path d="M958.469023 788.736998"  ></path><path d="M64.77753 858.792098"  ></path><path d="M163.396533 289.168875c-40.577772 0-66.525252 54.184545-35.441258 85.258218L477.217578 723.704878c20.031716 20.031716 49.823841 20.031716 69.853837 0l349.274345-349.277785c30.304744-30.294423 6.677812-85.258218-34.928639-85.258218L163.396533 289.168875 163.396533 289.168875z"  ></path><path d="M959.523505 858.792098"  ></path></symbol><symbol id="icon-yinliang" viewBox="0 0 1024 1024"><path d="M468.992 169.6c29.312-22.528 64.128-40.832 101.312-25.088 36.864 15.552 48.64 53.12 53.76 89.984 5.248 37.824 5.248 89.92 5.248 154.688V634.88c0 64.768 0 116.864-5.184 154.688-5.12 36.928-16.96 74.432-53.76 89.984-37.248 15.744-72.064-2.56-101.376-25.024-30.016-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.616-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.416 0-71.68-1.984-20.288-2.112-39.104-6.72-56.064-18.24-32.192-22.016-44.544-54.208-49.28-83.84C52.864 570.24 53.248 545.92 53.568 526.464a907.84 907.84 0 0 0 0-28.928C53.184 478.08 52.864 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.128 55.936-18.176a750.72 750.72 0 0 1 71.68-2.048h1.728c32.96 0 51.84-2.688 67.392-9.152 15.488-6.4 30.72-17.728 53.76-41.216l1.984-2.048c44.8-45.76 80.896-82.56 110.912-105.6z m38.976 50.752c-25.92 19.84-58.88 53.44-106.112 101.632-25.152 25.6-47.616 44.288-75.072 55.68-27.328 11.264-56.32 13.952-91.84 13.952-30.656 0-51.2 0-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.184-22.144 40.96-2.56 16-2.24 32.512-1.92 51.136l0.128 19.2c0 6.592-0.064 12.992-0.192 19.136-0.256 18.56-0.512 35.072 1.984 51.136 3.136 19.712 9.728 32.512 22.144 40.96 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.096 1.664 66.752 1.664 35.456 0 64.512 2.688 91.84 14.016 27.456 11.328 49.92 29.952 75.072 55.616 47.232 48.192 80.192 81.728 106.112 101.696 27.008 20.736 35.136 17.856 37.44 16.832 2.624-1.088 10.56-5.44 15.296-39.808 4.544-32.896 4.608-80.512 4.608-148.672V391.936c0-68.096 0-115.712-4.608-148.608-4.736-34.368-12.672-38.784-15.36-39.872-2.24-0.96-10.368-3.84-37.376 16.896zM705.92 358.592a32 32 0 0 1 44.864 6.016c30.912 40.448 49.28 91.776 49.28 147.392s-18.368 106.88-49.28 147.392a32 32 0 1 1-50.88-38.784A178.56 178.56 0 0 0 736 512a178.56 178.56 0 0 0-36.096-108.608 32 32 0 0 1 6.016-44.8zM876.928 277.056a32 32 0 0 0-47.168 43.2c48.448 52.992 76.928 119.68 76.928 191.744s-28.48 138.752-76.928 191.68a32 32 0 0 0 47.168 43.264c58.24-63.616 93.76-145.408 93.76-234.944 0-89.6-35.52-171.328-93.76-234.944z"  ></path></symbol><symbol id="icon-jingyin" viewBox="0 0 1024 1024"><path d="M62.72 62.72a32 32 0 0 1 45.248 0l252.032 252.032c1.472 1.216 2.816 2.56 4.096 4.096l597.184 597.184a32 32 0 1 1-45.248 45.248l-286.72-286.72c-0.192 46.592-1.088 85.184-5.184 114.944-5.12 36.928-16.96 74.432-53.76 89.984-37.184 15.744-72.064-2.56-101.376-25.024-29.952-23.04-66.112-59.904-110.912-105.6l-1.92-2.048c-23.04-23.488-38.336-34.88-53.76-41.28-15.552-6.4-34.496-9.152-67.456-9.152h-1.664c-28.544 0-52.352 0-71.68-1.984-20.288-2.112-39.04-6.72-56-18.24-32.256-22.016-44.608-54.208-49.28-83.84C52.8 570.24 53.248 545.984 53.568 526.464a908.032 908.032 0 0 0 0-28.928C53.248 478.08 52.8 453.76 56.32 431.68c4.672-29.568 17.024-61.824 49.28-83.84 16.896-11.52 35.712-16.064 56-18.176 19.328-2.048 43.136-2.048 71.68-2.048h1.664c6.208 0 11.84 0.128 17.152 0.192 11.136 0.192 20.544 0.32 30.016-0.448L62.72 107.968a32 32 0 0 1 0-45.248z m230.528 327.872a369.088 369.088 0 0 1-45.824 1.216l-12.48-0.192c-30.592 0-51.136 0.064-66.752 1.664-15.04 1.6-21.952 4.352-26.56 7.488-12.416 8.448-19.008 21.248-22.08 40.96-2.56 16-2.304 32.512-2.048 51.136a1252.864 1252.864 0 0 1 0 38.336c-0.256 18.56-0.512 35.072 2.048 51.2 3.072 19.648 9.664 32.448 22.08 40.896 4.608 3.136 11.52 5.888 26.56 7.424 15.616 1.6 36.16 1.664 66.752 1.664 35.52 0 64.576 2.752 91.904 14.016 27.392 11.328 49.92 30.016 75.008 55.68 47.232 48.128 80.192 81.728 106.112 101.632 27.008 20.736 35.136 17.856 37.44 16.896 2.624-1.152 10.56-5.504 15.36-39.872 4.48-32.896 4.608-80.512 4.608-148.672V610.56L334.464 379.776a136.128 136.128 0 0 1-41.216 10.816zM449.28 278.4c30.72-30.592 53.632-52.288 72.064-65.088a66.56 66.56 0 0 1 19.328-10.112c3.2-0.896 4.288-0.384 4.672-0.256 2.688 1.152 10.624 5.568 15.36 40 4.544 32.96 4.608 80.704 4.608 148.992v13.44a32 32 0 1 0 64 0V389.12c0-64.896 0-117.12-5.184-155.008-5.12-36.928-16.96-74.56-53.76-90.112-31.808-13.504-62.144 0.512-85.376 16.64-24.064 16.576-51.008 42.624-80.896 72.32a32 32 0 0 0 45.12 45.44zM705.024 401.92a32 32 0 0 1 45.056 4.48c31.104 37.888 49.92 84.992 49.92 136.32 0 22.4-3.584 44.032-10.24 64.512a32 32 0 0 1-60.864-19.84c4.608-14.208 7.104-29.184 7.104-44.672 0-35.2-12.8-68.224-35.392-95.744a32 32 0 0 1 4.48-45.056zM875.776 318.528a32 32 0 0 0-44.864 45.632c48.192 47.36 75.776 106.304 75.776 169.216 0 52.288-19.072 101.76-53.12 144.128a32 32 0 0 0 49.92 40.064c42.112-52.48 67.2-115.712 67.2-184.192 0-82.624-36.416-157.312-94.912-214.848z"  ></path></symbol><symbol id="icon-suijibofang" viewBox="0 0 1024 1024"><path d="M753.564731 337.471035c-45.8697 0-160.259984 113.849978-243.789399 194.548928C383.134027 654.383848 263.508509 773.284865 167.764911 773.284865l-58.892295 0c-24.068162 0-43.581588-19.526729-43.581588-43.581588s19.513426-43.581588 43.581588-43.581588l58.892295 0c60.504002 0 183.002964-121.68134 281.432741-216.784348 119.79641-115.744117 223.254713-219.029482 304.368102-219.029482l56.209186 0-59.641355-57.828057c-17.033955-16.993023-17.060561-42.902112-0.057305-59.927881 17.002232-17.030885 44.596707-17.064654 61.631686-0.065492l134.207631 133.874033c8.192589 8.172123 12.794397 19.238157 12.794397 30.803563 0 11.564383-4.601808 22.604834-12.794397 30.776957L811.706943 461.72599c-8.505721 8.486278-19.646456 12.522198-30.78719 12.522198-11.166317 0-22.333658-4.676509-30.844495-13.199627-17.003256-17.025769-16.975627-45.432749 0.057305-62.425771l59.641355-61.151755L753.564731 337.471035zM811.706943 561.66105c-17.034978-16.999163-44.629453-16.972557-61.631686 0.058328-17.003256 17.024745-16.975627 46.257533 0.057305 63.250556l59.641355 61.150732-56.209186 0c-35.793204 0-95.590102-52.946886-154.87637-108.373243-17.576307-16.435321-45.161572-16.3422-61.594847 1.226944-16.444531 17.568121-15.523555 46.393633 2.053776 62.823837 90.322122 84.458577 151.246703 131.484613 214.417441 131.484613l56.209186 0-59.641355 57.824987c-17.033955 16.993023-17.060561 43.736107-0.057305 60.761875 8.511861 8.523117 19.678178 12.369725 30.844495 12.369725 11.140735 0 22.281469-4.453429 30.78719-12.939707L945.914574 757.311055c8.192589-8.173147 12.794397-19.315928 12.794397-30.881334 0-11.564383-4.601808-22.682605-12.794397-30.855752L811.706943 561.66105zM108.871593 337.471035l58.892295 0c45.932122 0 114.40154 58.455343 168.915108 107.942431 8.352225 7.576559 18.832927 12.140505 29.29214 12.140505 11.852956 0 23.673166-4.394077 32.270984-13.857613 16.182564-17.807574 14.859429-46.823422-2.958378-62.998823-85.247546-77.381391-156.561755-130.388652-227.519854-130.388652l-58.892295 0c-24.068162 0-43.581588 19.526729-43.581588 43.581588S84.804455 337.471035 108.871593 337.471035z"  ></path></symbol><symbol id="icon-shunxubofang" viewBox="0 0 1280 1024"><path d="M1121.80831062 243.68144937A373.40506031 373.40506031 0 0 1 1231.88943875 509.4737225c0 34.21394156-4.59385594 68.15362312-13.71300187 100.79056875a42.40746 42.40746 0 0 1-81.66093094-22.62645469 291.88125938 291.88125938 0 0 0 10.62757687-78.16411406c0-160.510695-130.61634937-291.12704437-291.12704437-291.12704531H461.52723687v75.07868906c0 24.13488469-16.79842781 33.45972656-37.26508406 20.77519969L243.52477906 202.23389938c-20.46665625-12.68452781-20.67235125-33.76826906-0.41139-46.86418594L424.70782531 38.08925844c20.22667875-13.06163531 36.81941156-4.04533594 36.81941156 20.05526625v75.42151406h394.48880157c100.37917875 0 194.79320156 39.11634 265.79227218 110.11541063z m-70.00487812 573.06637782c20.50093875 12.68452781 20.70663375 33.76826906 0.4456725 46.82990344l-181.59443625 117.280455c-20.22667875 13.09591781-36.81941156 4.07961844-36.81941156-20.02098375V885.38140531H407.875115c-100.37917875 0-194.79320156-39.0820575-265.79227219-110.11541062A373.43934281 373.43934281 0 0 1 32.00171469 509.4737225c0-72.61034906 20.74091625-143.09518219 59.99438625-203.84378344a42.3731775 42.3731775 0 1 1 71.20476562 46.04140594 290.03000438 290.03000438 0 0 0-46.41851343 157.8023775c0 160.5449775 130.58206688 291.12704437 291.09276187 291.12704437H833.86953969v-75.07868906c0-24.10060219 16.76414531-33.45972656 37.23080156-20.74091625l180.73737375 111.96666563z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M349.5936 338.5344a30.3104 30.3104 0 0 1 17.6128 5.9392l200.0896 143.36a30.72 30.72 0 0 1 0 49.9712l-200.0896 143.36a30.3104 30.3104 0 0 1-17.6128 5.9392A30.72 30.72 0 0 1 318.6688 655.36V368.64a30.72 30.72 0 0 1 30.9248-30.9248m0-51.2a81.92 81.92 0 0 0-81.92 81.92V655.36a81.92 81.92 0 0 0 81.92 81.92 81.92 81.92 0 0 0 47.3088-15.36l200.0896-143.36a81.92 81.92 0 0 0 0-133.5296l-200.0896-143.36a81.92 81.92 0 0 0-47.3088-14.9504zM715.5712 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 0 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M860.16 92.16A71.68 71.68 0 0 1 931.84 163.84v696.32a71.68 71.68 0 0 1-71.68 71.68H163.84A71.68 71.68 0 0 1 92.16 860.16V163.84A71.68 71.68 0 0 1 163.84 92.16h696.32M860.16 40.96H163.84a122.88 122.88 0 0 0-122.88 122.88v696.32a122.88 122.88 0 0 0 122.88 122.88h696.32a122.88 122.88 0 0 0 122.88-122.88V163.84a122.88 122.88 0 0 0-122.88-122.88z"  ></path><path d="M674.4064 338.5344A30.72 30.72 0 0 1 705.3312 368.64v286.72a30.72 30.72 0 0 1-30.9248 30.9248 30.3104 30.3104 0 0 1-17.6128-5.9392l-200.0896-143.36a30.72 30.72 0 0 1 0-49.9712l200.0896-143.36a30.3104 30.3104 0 0 1 17.6128-5.9392m0-51.2a81.92 81.92 0 0 0-47.3088 15.36l-200.0896 143.36a81.92 81.92 0 0 0 0 133.5296l200.0896 143.36a81.92 81.92 0 0 0 47.3088 15.36 81.92 81.92 0 0 0 81.92-81.92V368.64a81.92 81.92 0 0 0-81.92-81.92zM308.4288 714.9568a25.6 25.6 0 0 1-25.6-25.6V334.6432a25.6 25.6 0 1 1 51.2 0v354.7136a25.6 25.6 0 0 1-25.6 25.6z"  ></path></symbol><symbol id="icon-play_list" viewBox="0 0 1024 1024"><path d="M42.666667 490.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h896a21.333333 21.333333 0 0 1 0 42.666667H64a21.333333 21.333333 0 0 1-21.333333-21.333333z m490.666666 362.666666H64a21.333333 21.333333 0 0 0 0 42.666667h469.333333a21.333333 21.333333 0 0 0 0-42.666667zM64 128h896a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m916.42 612.493333c-6.666667-22.053333-16.44-40.773333-29.04-55.626666a107.46 107.46 0 0 0-20.493333-18.78c-8.813333-8.806667-16.526667-20.666667-22.36-34.42-9.033333-21.333333-11.813333-42.666667-12.553334-56.78a21.333333 21.333333 0 0 0-42.666666 1.113333v251.56c-18.333333-10.946667-40.666667-16.893333-64-16.893333-27.38 0-53.333333 8.173333-73.14 23.013333-21.333333 16-33.526667 38.666667-33.526667 62.32s12.22 46.34 33.526667 62.32C736 973.16 761.953333 981.333333 789.333333 981.333333s53.333333-8.173333 73.14-23.013333c21.333333-16 33.526667-38.666667 33.526667-62.32v-204.733333q3.213333 3.58 6.586667 6.813333a21.473333 21.473333 0 0 0 2.953333 2.366667 64.24 64.24 0 0 1 13.333333 12c8.666667 10.22 15.84 24.18 20.733334 40.373333a21.333333 21.333333 0 0 0 40.84-12.346667z"  ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path><path d="M415.8 679.9c5.9 0 11.5-1.6 16.2-4.5l231.1-134.6c10.9-5.2 18.5-16.3 18.5-29.2 0-11.9-6.4-22.3-16-27.8L439.7 352.2c-5.8-6.7-14.4-10.9-23.9-10.9-17.6 0-31.8 14.4-31.8 32.1 0 0.6 0 1.2 0.1 1.8l-0.4 0.2 0.5 269c-0.1 1.1-0.2 2.2-0.2 3.4 0 17.7 14.3 32.1 31.8 32.1z"  ></path><path d="M909.8 306.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S128.8 723.8 128.8 512.2 300.4 129.1 512 129.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.6 81.9 584.9 64.5 512 64.5 264.7 64.5 64.3 265 64.3 512.2S264.7 959.9 512 959.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M910.8 303.6c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.8 42.1 174.7 0 211.6-171.6 383.2-383.2 383.2S129.8 720.8 129.8 509.2 301.4 126.1 513 126.1c62.5 0 121.5 15 173.6 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C654.6 78.9 585.9 61.5 513 61.5 265.7 61.5 65.3 262 65.3 509.2S265.7 956.9 513 956.9s447.7-200.4 447.7-447.7c0-74.1-18-144-49.9-205.6z"  ></path><path d="M385.4 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.6 0 32-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9zM578.9 352.2V672c0 17.5 14.3 31.9 31.9 31.9 17.5 0 31.9-14.4 31.9-31.9V352.2c0-17.5-14.3-31.9-31.9-31.9-17.5 0-31.9 14.3-31.9 31.9z"  ></path><path d="M772.7 217.7a32.2 32.1 0 1 0 64.4 0 32.2 32.1 0 1 0-64.4 0Z"  ></path></symbol><symbol id="icon-tingzhi" viewBox="0 0 1024 1024"><path d="M772.9 217.3c0 11.5 6.1 22.1 16.1 27.8 10 5.7 22.3 5.7 32.2 0 10-5.7 16.1-16.3 16.1-27.8s-6.1-22.1-16.1-27.8c-10-5.7-22.3-5.7-32.2 0-10 5.7-16.1 16.3-16.1 27.8z"  ></path><path d="M910.1 306.3c-5.4-10.5-16.3-17.8-28.9-17.8-17.8 0-32.2 14.4-32.2 32.1 0 6 1.7 11.7 4.6 16.5l-0.1 0.1c26.9 52.4 42.1 111.9 42.1 174.8 0 211.7-171.7 383.5-383.5 383.5-211.7 0-383.6-171.7-383.6-383.5S300.3 128.6 512 128.6c62.5 0 121.6 15 173.7 41.5l0.2-0.4c4.6 2.6 10 4.1 15.7 4.1 17.8 0 32.2-14.4 32.2-32.1 0-13.1-7.9-24.4-19.3-29.4C653.7 81.4 584.9 64 512 64 264.5 64 64 264.6 64 512s200.5 448 448 448 448-200.5 448-448c0-74.2-18-144.1-49.9-205.7z"  ></path><path d="M417.9 354.5h188.2c34.6 0 62.7 28.2 62.7 63v189c0 34.8-28.1 63-62.7 63H417.9c-34.6 0-62.7-28.2-62.7-63v-189c0-34.8 28.1-63 62.7-63z"  ></path></symbol></svg>',(e=>{var t=(s=(s=document.getElementsByTagName("script"))[s.length-1]).getAttribute("data-injectcss"),s=s.getAttribute("data-disable-injectsvg");if(!s){var n,o,i,r,l,c=function(p,A){A.parentNode.insertBefore(p,A)};if(t&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(p){console&&console.log(p)}}n=function(){var p,A=document.createElement("div");A.innerHTML=e._iconfont_svg_string_4902328,(A=A.getElementsByTagName("svg")[0])&&(A.setAttribute("aria-hidden","true"),A.style.position="absolute",A.style.width=0,A.style.height=0,A.style.overflow="hidden",A=A,(p=document.body).firstChild?c(A,p.firstChild):p.appendChild(A))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),n()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(i=n,r=e.document,l=!1,f(),r.onreadystatechange=function(){r.readyState=="complete"&&(r.onreadystatechange=null,h())})}function h(){l||(l=!0,i())}function f(){try{r.documentElement.doScroll("left")}catch{return void setTimeout(f,50)}h()}})(window);Lr(ba).mount("#app");

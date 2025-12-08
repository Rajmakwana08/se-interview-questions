(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))p(U);new MutationObserver(U=>{for(const K of U)if(K.type==="childList")for(const he of K.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&p(he)}).observe(document,{childList:!0,subtree:!0});function F(U){const K={};return U.integrity&&(K.integrity=U.integrity),U.referrerPolicy&&(K.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?K.credentials="include":U.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function p(U){if(U.ep)return;U.ep=!0;const K=F(U);fetch(U.href,K)}})();var lu={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Ih(){if(mf)return bl;mf=1;var x=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function F(p,U,K){var he=null;if(K!==void 0&&(he=""+K),U.key!==void 0&&(he=""+U.key),"key"in U){K={};for(var Ue in U)Ue!=="key"&&(K[Ue]=U[Ue])}else K=U;return U=K.ref,{$$typeof:x,type:p,key:he,ref:U!==void 0?U:null,props:K}}return bl.Fragment=de,bl.jsx=F,bl.jsxs=F,bl}var hf;function Kh(){return hf||(hf=1,lu.exports=Ih()),lu.exports}var He=Kh(),iu={exports:{}},_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function Wh(){if(pf)return _;pf=1;var x=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),re=Symbol.iterator;function Ke(c){return c===null||typeof c!="object"?null:(c=re&&c[re]||c["@@iterator"],typeof c=="function"?c:null)}var Ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,Ct={};function We(c,w,A){this.props=c,this.context=w,this.refs=Ct,this.updater=A||Ne}We.prototype.isReactComponent={},We.prototype.setState=function(c,w){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,w,"setState")},We.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Kt(){}Kt.prototype=We.prototype;function Re(c,w,A){this.props=c,this.context=w,this.refs=Ct,this.updater=A||Ne}var st=Re.prototype=new Kt;st.constructor=Re,ze(st,We.prototype),st.isPureReactComponent=!0;var wt=Array.isArray;function je(){}var X={H:null,A:null,T:null,S:null},Be=Object.prototype.hasOwnProperty;function Et(c,w,A){var M=A.ref;return{$$typeof:x,type:c,key:w,ref:M!==void 0?M:null,props:A}}function La(c,w){return Et(c.type,w,c.props)}function Dt(c){return typeof c=="object"&&c!==null&&c.$$typeof===x}function Le(c){var w={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(A){return w[A]})}var Sa=/\/+/g;function kt(c,w){return typeof c=="object"&&c!==null&&c.key!=null?Le(""+c.key):w.toString(36)}function yt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(je,je):(c.status="pending",c.then(function(w){c.status==="pending"&&(c.status="fulfilled",c.value=w)},function(w){c.status==="pending"&&(c.status="rejected",c.reason=w)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function v(c,w,A,M,H){var B=typeof c;(B==="undefined"||B==="boolean")&&(c=null);var P=!1;if(c===null)P=!0;else switch(B){case"bigint":case"string":case"number":P=!0;break;case"object":switch(c.$$typeof){case x:case de:P=!0;break;case J:return P=c._init,v(P(c._payload),w,A,M,H)}}if(P)return H=H(c),P=M===""?"."+kt(c,0):M,wt(H)?(A="",P!=null&&(A=P.replace(Sa,"$&/")+"/"),v(H,w,A,"",function(xn){return xn})):H!=null&&(Dt(H)&&(H=La(H,A+(H.key==null||c&&c.key===H.key?"":(""+H.key).replace(Sa,"$&/")+"/")+P)),w.push(H)),1;P=0;var Oe=M===""?".":M+":";if(wt(c))for(var pe=0;pe<c.length;pe++)M=c[pe],B=Oe+kt(M,pe),P+=v(M,w,A,B,H);else if(pe=Ke(c),typeof pe=="function")for(c=pe.call(c),pe=0;!(M=c.next()).done;)M=M.value,B=Oe+kt(M,pe++),P+=v(M,w,A,B,H);else if(B==="object"){if(typeof c.then=="function")return v(yt(c),w,A,M,H);throw w=String(c),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return P}function D(c,w,A){if(c==null)return c;var M=[],H=0;return v(c,M,"","",function(B){return w.call(A,B,H++)}),M}function O(c){if(c._status===-1){var w=c._result;w=w(),w.then(function(A){(c._status===0||c._status===-1)&&(c._status=1,c._result=A)},function(A){(c._status===0||c._status===-1)&&(c._status=2,c._result=A)}),c._status===-1&&(c._status=0,c._result=w)}if(c._status===1)return c._result.default;throw c._result}var te=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},ie={map:D,forEach:function(c,w,A){D(c,function(){w.apply(this,arguments)},A)},count:function(c){var w=0;return D(c,function(){w++}),w},toArray:function(c){return D(c,function(w){return w})||[]},only:function(c){if(!Dt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return _.Activity=z,_.Children=ie,_.Component=We,_.Fragment=F,_.Profiler=U,_.PureComponent=Re,_.StrictMode=p,_.Suspense=R,_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,_.__COMPILER_RUNTIME={__proto__:null,c:function(c){return X.H.useMemoCache(c)}},_.cache=function(c){return function(){return c.apply(null,arguments)}},_.cacheSignal=function(){return null},_.cloneElement=function(c,w,A){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var M=ze({},c.props),H=c.key;if(w!=null)for(B in w.key!==void 0&&(H=""+w.key),w)!Be.call(w,B)||B==="key"||B==="__self"||B==="__source"||B==="ref"&&w.ref===void 0||(M[B]=w[B]);var B=arguments.length-2;if(B===1)M.children=A;else if(1<B){for(var P=Array(B),Oe=0;Oe<B;Oe++)P[Oe]=arguments[Oe+2];M.children=P}return Et(c.type,H,M)},_.createContext=function(c){return c={$$typeof:he,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:K,_context:c},c},_.createElement=function(c,w,A){var M,H={},B=null;if(w!=null)for(M in w.key!==void 0&&(B=""+w.key),w)Be.call(w,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(H[M]=w[M]);var P=arguments.length-2;if(P===1)H.children=A;else if(1<P){for(var Oe=Array(P),pe=0;pe<P;pe++)Oe[pe]=arguments[pe+2];H.children=Oe}if(c&&c.defaultProps)for(M in P=c.defaultProps,P)H[M]===void 0&&(H[M]=P[M]);return Et(c,B,H)},_.createRef=function(){return{current:null}},_.forwardRef=function(c){return{$$typeof:Ue,render:c}},_.isValidElement=Dt,_.lazy=function(c){return{$$typeof:J,_payload:{_status:-1,_result:c},_init:O}},_.memo=function(c,w){return{$$typeof:E,type:c,compare:w===void 0?null:w}},_.startTransition=function(c){var w=X.T,A={};X.T=A;try{var M=c(),H=X.S;H!==null&&H(A,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(je,te)}catch(B){te(B)}finally{w!==null&&A.types!==null&&(w.types=A.types),X.T=w}},_.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},_.use=function(c){return X.H.use(c)},_.useActionState=function(c,w,A){return X.H.useActionState(c,w,A)},_.useCallback=function(c,w){return X.H.useCallback(c,w)},_.useContext=function(c){return X.H.useContext(c)},_.useDebugValue=function(){},_.useDeferredValue=function(c,w){return X.H.useDeferredValue(c,w)},_.useEffect=function(c,w){return X.H.useEffect(c,w)},_.useEffectEvent=function(c){return X.H.useEffectEvent(c)},_.useId=function(){return X.H.useId()},_.useImperativeHandle=function(c,w,A){return X.H.useImperativeHandle(c,w,A)},_.useInsertionEffect=function(c,w){return X.H.useInsertionEffect(c,w)},_.useLayoutEffect=function(c,w){return X.H.useLayoutEffect(c,w)},_.useMemo=function(c,w){return X.H.useMemo(c,w)},_.useOptimistic=function(c,w){return X.H.useOptimistic(c,w)},_.useReducer=function(c,w,A){return X.H.useReducer(c,w,A)},_.useRef=function(c){return X.H.useRef(c)},_.useState=function(c){return X.H.useState(c)},_.useSyncExternalStore=function(c,w,A){return X.H.useSyncExternalStore(c,w,A)},_.useTransition=function(){return X.H.useTransition()},_.version="19.2.0",_}var gf;function cu(){return gf||(gf=1,iu.exports=Wh()),iu.exports}var Df=cu(),su={exports:{}},Sl={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Fh(){return yf||(yf=1,(function(x){function de(v,D){var O=v.length;v.push(D);e:for(;0<O;){var te=O-1>>>1,ie=v[te];if(0<U(ie,D))v[te]=D,v[O]=ie,O=te;else break e}}function F(v){return v.length===0?null:v[0]}function p(v){if(v.length===0)return null;var D=v[0],O=v.pop();if(O!==D){v[0]=O;e:for(var te=0,ie=v.length,c=ie>>>1;te<c;){var w=2*(te+1)-1,A=v[w],M=w+1,H=v[M];if(0>U(A,O))M<ie&&0>U(H,A)?(v[te]=H,v[M]=O,te=M):(v[te]=A,v[w]=O,te=w);else if(M<ie&&0>U(H,O))v[te]=H,v[M]=O,te=M;else break e}}return D}function U(v,D){var O=v.sortIndex-D.sortIndex;return O!==0?O:v.id-D.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;x.unstable_now=function(){return K.now()}}else{var he=Date,Ue=he.now();x.unstable_now=function(){return he.now()-Ue}}var R=[],E=[],J=1,z=null,re=3,Ke=!1,Ne=!1,ze=!1,Ct=!1,We=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function st(v){for(var D=F(E);D!==null;){if(D.callback===null)p(E);else if(D.startTime<=v)p(E),D.sortIndex=D.expirationTime,de(R,D);else break;D=F(E)}}function wt(v){if(ze=!1,st(v),!Ne)if(F(R)!==null)Ne=!0,je||(je=!0,Le());else{var D=F(E);D!==null&&yt(wt,D.startTime-v)}}var je=!1,X=-1,Be=5,Et=-1;function La(){return Ct?!0:!(x.unstable_now()-Et<Be)}function Dt(){if(Ct=!1,je){var v=x.unstable_now();Et=v;var D=!0;try{e:{Ne=!1,ze&&(ze=!1,Kt(X),X=-1),Ke=!0;var O=re;try{t:{for(st(v),z=F(R);z!==null&&!(z.expirationTime>v&&La());){var te=z.callback;if(typeof te=="function"){z.callback=null,re=z.priorityLevel;var ie=te(z.expirationTime<=v);if(v=x.unstable_now(),typeof ie=="function"){z.callback=ie,st(v),D=!0;break t}z===F(R)&&p(R),st(v)}else p(R);z=F(R)}if(z!==null)D=!0;else{var c=F(E);c!==null&&yt(wt,c.startTime-v),D=!1}}break e}finally{z=null,re=O,Ke=!1}D=void 0}}finally{D?Le():je=!1}}}var Le;if(typeof Re=="function")Le=function(){Re(Dt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,kt=Sa.port2;Sa.port1.onmessage=Dt,Le=function(){kt.postMessage(null)}}else Le=function(){We(Dt,0)};function yt(v,D){X=We(function(){v(x.unstable_now())},D)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(v){v.callback=null},x.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<v?Math.floor(1e3/v):5},x.unstable_getCurrentPriorityLevel=function(){return re},x.unstable_next=function(v){switch(re){case 1:case 2:case 3:var D=3;break;default:D=re}var O=re;re=D;try{return v()}finally{re=O}},x.unstable_requestPaint=function(){Ct=!0},x.unstable_runWithPriority=function(v,D){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var O=re;re=v;try{return D()}finally{re=O}},x.unstable_scheduleCallback=function(v,D,O){var te=x.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?te+O:te):O=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=O+ie,v={id:J++,callback:D,priorityLevel:v,startTime:O,expirationTime:ie,sortIndex:-1},O>te?(v.sortIndex=O,de(E,v),F(R)===null&&v===F(E)&&(ze?(Kt(X),X=-1):ze=!0,yt(wt,O-te))):(v.sortIndex=ie,de(R,v),Ne||Ke||(Ne=!0,je||(je=!0,Le()))),v},x.unstable_shouldYield=La,x.unstable_wrapCallback=function(v){var D=re;return function(){var O=re;re=D;try{return v.apply(this,arguments)}finally{re=O}}}})(uu)),uu}var vf;function Jh(){return vf||(vf=1,ou.exports=Fh()),ou.exports}var ru={exports:{}},qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function Ph(){if(bf)return qe;bf=1;var x=cu();function de(R){var E="https://react.dev/errors/"+R;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var J=2;J<arguments.length;J++)E+="&args[]="+encodeURIComponent(arguments[J])}return"Minified React error #"+R+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var p={d:{f:F,r:function(){throw Error(de(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},U=Symbol.for("react.portal");function K(R,E,J){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:z==null?null:""+z,children:R,containerInfo:E,implementation:J}}var he=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ue(R,E){if(R==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,qe.createPortal=function(R,E){var J=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(de(299));return K(R,E,null,J)},qe.flushSync=function(R){var E=he.T,J=p.p;try{if(he.T=null,p.p=2,R)return R()}finally{he.T=E,p.p=J,p.d.f()}},qe.preconnect=function(R,E){typeof R=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,p.d.C(R,E))},qe.prefetchDNS=function(R){typeof R=="string"&&p.d.D(R)},qe.preinit=function(R,E){if(typeof R=="string"&&E&&typeof E.as=="string"){var J=E.as,z=Ue(J,E.crossOrigin),re=typeof E.integrity=="string"?E.integrity:void 0,Ke=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;J==="style"?p.d.S(R,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:z,integrity:re,fetchPriority:Ke}):J==="script"&&p.d.X(R,{crossOrigin:z,integrity:re,fetchPriority:Ke,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},qe.preinitModule=function(R,E){if(typeof R=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var J=Ue(E.as,E.crossOrigin);p.d.M(R,{crossOrigin:J,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&p.d.M(R)},qe.preload=function(R,E){if(typeof R=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var J=E.as,z=Ue(J,E.crossOrigin);p.d.L(R,J,{crossOrigin:z,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},qe.preloadModule=function(R,E){if(typeof R=="string")if(E){var J=Ue(E.as,E.crossOrigin);p.d.m(R,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:J,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else p.d.m(R)},qe.requestFormReset=function(R){p.d.r(R)},qe.unstable_batchedUpdates=function(R,E){return R(E)},qe.useFormState=function(R,E,J){return he.H.useFormState(R,E,J)},qe.useFormStatus=function(){return he.H.useHostTransitionStatus()},qe.version="19.2.0",qe}var Sf;function $h(){if(Sf)return ru.exports;Sf=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(de){console.error(de)}}return x(),ru.exports=Ph(),ru.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function ep(){if(wf)return Sl;wf=1;var x=Jh(),de=cu(),F=$h();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(K(e)!==e)throw Error(p(188))}function E(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(p(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return R(l),e;if(i===n)return R(l),t;i=i.sibling}throw Error(p(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,o=l.child;o;){if(o===a){s=!0,a=l,n=i;break}if(o===n){s=!0,n=l,a=i;break}o=o.sibling}if(!s){for(o=i.child;o;){if(o===a){s=!0,a=i,n=l;break}if(o===n){s=!0,n=i,a=l;break}o=o.sibling}if(!s)throw Error(p(189))}}if(a.alternate!==n)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?e:t}function J(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=J(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,re=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),Ne=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),wt=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),La=Symbol.for("react.memo_cache_sentinel"),Dt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Dt&&e[Dt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case We:return"Profiler";case Ct:return"StrictMode";case wt:return"Suspense";case je:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ne:return"Portal";case Re:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:kt(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return kt(e(t))}catch{}}return null}var yt=Array.isArray,v=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function c(e){return{current:e}}function w(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function A(e,t){ie++,te[ie]=e.current,e.current=t}var M=c(null),H=c(null),B=c(null),P=c(null);function Oe(e,t){switch(A(B,t),A(H,e),A(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_d(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_d(t),e=Hd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(M),A(M,e)}function pe(){w(M),w(H),w(B)}function xn(e){e.memoizedState!==null&&A(P,e);var t=M.current,a=Hd(t,e.type);t!==a&&(A(H,e),A(M,a))}function wl(e){H.current===e&&(w(M),w(H)),P.current===e&&(w(P),pl._currentValue=O)}var Bi,du;function wa(e){if(Bi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Bi=t&&t[1]||"",du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bi+e+du}var Li=!1;function Gi(e,t){if(!e||Li)return"";Li=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var h=g}Reflect.construct(e,[],S)}else{try{S.call()}catch(g){h=g}e.call(S.prototype)}}else{try{throw Error()}catch(g){h=g}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],o=i[1];if(s&&o){var u=s.split(`
`),m=o.split(`
`);for(l=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(n===u.length||l===m.length)for(n=u.length-1,l=m.length-1;1<=n&&0<=l&&u[n]!==m[l];)l--;for(;1<=n&&0<=l;n--,l--)if(u[n]!==m[l]){if(n!==1||l!==1)do if(n--,l--,0>l||u[n]!==m[l]){var y=`
`+u[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=l);break}}}finally{Li=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function Af(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return Gi(e.type,!1);case 11:return Gi(e.type.render,!1);case 1:return Gi(e.type,!0);case 31:return wa("Activity");default:return""}}function fu(e){try{var t="",a=null;do t+=Af(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Yi=Object.prototype.hasOwnProperty,Qi=x.unstable_scheduleCallback,Xi=x.unstable_cancelCallback,Tf=x.unstable_shouldYield,xf=x.unstable_requestPaint,Fe=x.unstable_now,Mf=x.unstable_getCurrentPriorityLevel,mu=x.unstable_ImmediatePriority,hu=x.unstable_UserBlockingPriority,El=x.unstable_NormalPriority,Cf=x.unstable_LowPriority,pu=x.unstable_IdlePriority,kf=x.log,Rf=x.unstable_setDisableYieldValue,Mn=null,Je=null;function Wt(e){if(typeof kf=="function"&&Rf(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Mn,e)}catch{}}var Pe=Math.clz32?Math.clz32:zf,qf=Math.log,Uf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(qf(e)/Uf|0)|0}var Dl=256,Al=262144,Tl=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~i,n!==0?l=Ea(n):(s&=o,s!==0?l=Ea(s):a||(a=o&~e,a!==0&&(l=Ea(a))))):(o=n&~i,o!==0?l=Ea(o):s!==0?l=Ea(s):a||(a=n&~e,a!==0&&(l=Ea(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Of(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(){var e=Tl;return Tl<<=1,(Tl&62914560)===0&&(Tl=4194304),e}function Vi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function kn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _f(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-Pe(a),S=1<<y;o[y]=0,u[y]=-1;var h=m[y];if(h!==null)for(m[y]=null,y=0;y<h.length;y++){var g=h[y];g!==null&&(g.lane&=-536870913)}a&=~S}n!==0&&yu(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function yu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Pe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function vu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Pe(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function bu(e,t){var a=t&-t;return a=(a&42)!==0?1:Zi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ii(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Su(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:sf(e.type))}function wu(e,t){var a=D.p;try{return D.p=e,t()}finally{D.p=a}}var Ft=Math.random().toString(36).slice(2),Te="__reactFiber$"+Ft,Ge="__reactProps$"+Ft,Ga="__reactContainer$"+Ft,Ki="__reactEvents$"+Ft,Hf="__reactListeners$"+Ft,Nf="__reactHandles$"+Ft,Eu="__reactResources$"+Ft,Rn="__reactMarker$"+Ft;function Wi(e){delete e[Te],delete e[Ge],delete e[Ki],delete e[Hf],delete e[Nf]}function Ya(e){var t=e[Te];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[Te]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qd(e);e!==null;){if(a=e[Te])return a;e=Qd(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Te]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Xa(e){var t=e[Eu];return t||(t=e[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function De(e){e[Rn]=!0}var Du=new Set,Au={};function Da(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Au[e]=t,e=0;e<t.length;e++)Du.add(t[e])}var jf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tu={},xu={};function Bf(e){return Yi.call(xu,e)?!0:Yi.call(Tu,e)?!1:jf.test(e)?xu[e]=!0:(Tu[e]=!0,!1)}function Ml(e,t,a){if(Bf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Cl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Rt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fi(e){if(!e._valueTracker){var t=Mu(e)?"checked":"value";e._valueTracker=Lf(e,t,""+e[t])}}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Mu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gf=/[\n"\\]/g;function ut(e){return e.replace(Gf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ji(e,t,a,n,l,i,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Pi(e,s,ot(t)):a!=null?Pi(e,s,ot(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function ku(e,t,a,n,l,i,s,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Fi(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Fi(e)}function Pi(e,t,a){t==="number"&&kl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ru(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function qu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(p(92));if(yt(n)){if(1<n.length)throw Error(p(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Fi(e)}function Ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Yf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zu(e,t,a){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Uu(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Uu(e,i,t[i])}function $i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return Xf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Wa=null;function Ou(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ji(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Ge]||null;if(!l)throw Error(p(90));Ji(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Cu(n)}break e;case"textarea":Ru(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var as=!1;function _u(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Ka!==null||Wa!==null)&&(yi(),Ka&&(t=Ka,e=Wa,Wa=Ka=null,Ou(t),e)))for(t=0;t<e.length;t++)Ou(e[t])}}function Un(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ge]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Ut)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){ns=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{ns=!1}var Jt=null,ls=null,ql=null;function Hu(){if(ql)return ql;var e,t=ls,a=t.length,n,l="value"in Jt?Jt.value:Jt.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return ql=l.slice(e,1<n?1-n:void 0)}function Ul(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function Nu(){return!1}function Ye(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zl:Nu,this.isPropagationStopped=Nu,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Ye(Aa),On=z({},Aa,{view:0,detail:0}),Vf=Ye(On),is,ss,_n,_l=z({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(is=e.screenX-_n.screenX,ss=e.screenY-_n.screenY):ss=is=0,_n=e),is)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),ju=Ye(_l),Zf=z({},_l,{dataTransfer:0}),If=Ye(Zf),Kf=z({},On,{relatedTarget:0}),os=Ye(Kf),Wf=z({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=Ye(Wf),Jf=z({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Ye(Jf),$f=z({},Aa,{data:0}),Bu=Ye($f),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function us(){return nm}var lm=z({},On,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Ye(lm),sm=z({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Ye(sm),om=z({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),um=Ye(om),rm=z({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=Ye(rm),dm=z({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=Ye(dm),mm=z({},Aa,{newState:0,oldState:0}),hm=Ye(mm),pm=[9,13,27,32],rs=Ut&&"CompositionEvent"in window,Hn=null;Ut&&"documentMode"in document&&(Hn=document.documentMode);var gm=Ut&&"TextEvent"in window&&!Hn,Gu=Ut&&(!rs||Hn&&8<Hn&&11>=Hn),Yu=" ",Qu=!1;function Xu(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function ym(e,t){switch(e){case"compositionend":return Vu(t);case"keypress":return t.which!==32?null:(Qu=!0,Yu);case"textInput":return e=t.data,e===Yu&&Qu?null:e;default:return null}}function vm(e,t){if(Fa)return e==="compositionend"||!rs&&Xu(e,t)?(e=Hu(),ql=ls=Jt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function Iu(e,t,a,n){Ka?Wa?Wa.push(n):Wa=[n]:Ka=n,t=Ai(t,"onChange"),0<t.length&&(a=new Ol("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Nn=null,jn=null;function Sm(e){kd(e,0)}function Hl(e){var t=qn(e);if(Cu(t))return e}function Ku(e,t){if(e==="change")return t}var Wu=!1;if(Ut){var cs;if(Ut){var ds="oninput"in document;if(!ds){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),ds=typeof Fu.oninput=="function"}cs=ds}else cs=!1;Wu=cs&&(!document.documentMode||9<document.documentMode)}function Ju(){Nn&&(Nn.detachEvent("onpropertychange",Pu),jn=Nn=null)}function Pu(e){if(e.propertyName==="value"&&Hl(jn)){var t=[];Iu(t,jn,e,ts(e)),_u(Sm,t)}}function wm(e,t,a){e==="focusin"?(Ju(),Nn=t,jn=a,Nn.attachEvent("onpropertychange",Pu)):e==="focusout"&&Ju()}function Em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(jn)}function Dm(e,t){if(e==="click")return Hl(t)}function Am(e,t){if(e==="input"||e==="change")return Hl(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Tm;function Bn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Yi.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function er(e,t){var a=$u(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$u(a)}}function tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=kl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=kl(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xm=Ut&&"documentMode"in document&&11>=document.documentMode,Ja=null,ms=null,Ln=null,hs=!1;function nr(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||Ja==null||Ja!==kl(n)||(n=Ja,"selectionStart"in n&&fs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&Bn(Ln,n)||(Ln=n,n=Ai(ms,"onSelect"),0<n.length&&(t=new Ol("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ja)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},ps={},lr={};Ut&&(lr=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function xa(e){if(ps[e])return ps[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lr)return ps[e]=t[a];return e}var ir=xa("animationend"),sr=xa("animationiteration"),or=xa("animationstart"),Mm=xa("transitionrun"),Cm=xa("transitionstart"),km=xa("transitioncancel"),ur=xa("transitionend"),rr=new Map,gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gs.push("scrollEnd");function vt(e,t){rr.set(e,t),Da(t,[e])}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rt=[],$a=0,ys=0;function jl(){for(var e=$a,t=ys=$a=0;t<e;){var a=rt[t];rt[t++]=null;var n=rt[t];rt[t++]=null;var l=rt[t];rt[t++]=null;var i=rt[t];if(rt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&cr(a,l,i)}}function Bl(e,t,a,n){rt[$a++]=e,rt[$a++]=t,rt[$a++]=a,rt[$a++]=n,ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function vs(e,t,a,n){return Bl(e,t,a,n),Ll(e)}function Ma(e,t){return Bl(e,null,null,t),Ll(e)}function cr(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Pe(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Ll(e){if(50<ul)throw ul=0,Co=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function Rm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new Rm(e,t,a,n)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gl(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")bs(e)&&(s=1);else if(typeof e=="string")s=_h(e,a,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,l),e.elementType=Et,e.lanes=i,e;case ze:return Ca(a.children,l,i,t);case Ct:s=8,l|=24;break;case We:return e=et(12,a,t,l|2),e.elementType=We,e.lanes=i,e;case wt:return e=et(13,a,t,l),e.elementType=wt,e.lanes=i,e;case je:return e=et(19,a,t,l),e.elementType=je,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:s=10;break e;case Kt:s=9;break e;case st:s=11;break e;case X:s=14;break e;case Be:s=16,n=null;break e}s=29,a=Error(p(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ca(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function Ss(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fr(e){var t=et(18,null,null,0);return t.stateNode=e,t}function ws(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mr=new WeakMap;function ct(e,t){if(typeof e=="object"&&e!==null){var a=mr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fu(t)},mr.set(e,t),t)}return{value:e,source:t,stack:fu(t)}}var tn=[],an=0,Yl=null,Gn=0,dt=[],ft=0,Pt=null,At=1,Tt="";function Ot(e,t){tn[an++]=Gn,tn[an++]=Yl,Yl=e,Gn=t}function hr(e,t,a){dt[ft++]=At,dt[ft++]=Tt,dt[ft++]=Pt,Pt=e;var n=At;e=Tt;var l=32-Pe(n)-1;n&=~(1<<l),a+=1;var i=32-Pe(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,At=1<<32-Pe(t)+l|a<<l|n,Tt=i+e}else At=1<<i|a<<l|n,Tt=e}function Es(e){e.return!==null&&(Ot(e,1),hr(e,1,0))}function Ds(e){for(;e===Yl;)Yl=tn[--an],tn[an]=null,Gn=tn[--an],tn[an]=null;for(;e===Pt;)Pt=dt[--ft],dt[ft]=null,Tt=dt[--ft],dt[ft]=null,At=dt[--ft],dt[ft]=null}function pr(e,t){dt[ft++]=At,dt[ft++]=Tt,dt[ft++]=Pt,At=t.id,Tt=t.overflow,Pt=e}var xe=null,oe=null,V=!1,$t=null,mt=!1,As=Error(p(519));function ea(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yn(ct(t,e)),As}function gr(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Te]=e,t[Ge]=n,a){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(a=0;a<cl.length;a++)G(cl[a],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),ku(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),qu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||zd(t.textContent,a)?(n.popover!=null&&(G("beforetoggle",t),G("toggle",t)),n.onScroll!=null&&G("scroll",t),n.onScrollEnd!=null&&G("scrollend",t),n.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ea(e,!0)}function yr(e){for(xe=e.return;xe;)switch(xe.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:xe=xe.return}}function nn(e){if(e!==xe)return!1;if(!V)return yr(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qo(e.type,e.memoizedProps)),a=!a),a&&oe&&ea(e),yr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));oe=Yd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));oe=Yd(e)}else t===27?(t=oe,ha(e.type)?(e=Ko,Ko=null,oe=e):oe=t):oe=xe?pt(e.stateNode.nextSibling):null;return!0}function ka(){oe=xe=null,V=!1}function Ts(){var e=$t;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),$t=null),e}function Yn(e){$t===null?$t=[e]:$t.push(e)}var xs=c(null),Ra=null,_t=null;function ta(e,t,a){A(xs,t._currentValue),t._currentValue=a}function Ht(e){e._currentValue=xs.current,w(xs)}function Ms(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Cs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=l;for(var u=0;u<t.length;u++)if(o.context===t[u]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),Ms(i.return,a,e),n||(s=null);break e}i=o.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(p(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Ms(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ln(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(p(387));if(s=s.memoizedProps,s!==null){var o=l.type;$e(l.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(l===P.current){if(s=l.alternate,s===null)throw Error(p(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(pl):e=[pl])}l=l.return}e!==null&&Cs(t,e,a,n),t.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ra=e,_t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return vr(Ra,e)}function Xl(e,t){return Ra===null&&qa(e),vr(e,t)}function vr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},_t===null){if(e===null)throw Error(p(308));_t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _t=_t.next=t;return a}var qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Um=x.unstable_scheduleCallback,zm=x.unstable_NormalPriority,ve={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ks(){return{controller:new qm,data:new Map,refCount:0}}function Qn(e){e.refCount--,e.refCount===0&&Um(zm,function(){e.controller.abort()})}var Xn=null,Rs=0,sn=0,on=null;function Om(e,t){if(Xn===null){var a=Xn=[];Rs=0,sn=Oo(),on={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Rs++,t.then(br,br),t}function br(){if(--Rs===0&&Xn!==null){on!==null&&(on.status="fulfilled");var e=Xn;Xn=null,sn=0,on=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _m(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Sr=v.S;v.S=function(e,t){nd=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Om(e,t),Sr!==null&&Sr(e,t)};var Ua=c(null);function qs(){var e=Ua.current;return e!==null?e:se.pooledCache}function Vl(e,t){t===null?A(Ua,Ua.current):A(Ua,t.pool)}function wr(){var e=qs();return e===null?null:{parent:ve._currentValue,pool:e}}var un=Error(p(460)),Us=Error(p(474)),Zl=Error(p(542)),Il={then:function(){}};function Er(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tr(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tr(e),e}throw Oa=t,un}}function za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Oa=a,un):a}}var Oa=null;function Ar(){if(Oa===null)throw Error(p(459));var e=Oa;return Oa=null,e}function Tr(e){if(e===un||e===Zl)throw Error(p(483))}var rn=null,Vn=0;function Kl(e){var t=Vn;return Vn+=1,rn===null&&(rn=[]),Dr(rn,e,t)}function Zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wl(e,t){throw t.$$typeof===re?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xr(e){function t(d,r){if(e){var f=d.deletions;f===null?(d.deletions=[r],d.flags|=16):f.push(r)}}function a(d,r){if(!e)return null;for(;r!==null;)t(d,r),r=r.sibling;return null}function n(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function l(d,r){return d=zt(d,r),d.index=0,d.sibling=null,d}function i(d,r,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<r?(d.flags|=67108866,r):f):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,r,f,b){return r===null||r.tag!==6?(r=Ss(f,d.mode,b),r.return=d,r):(r=l(r,f),r.return=d,r)}function u(d,r,f,b){var k=f.type;return k===ze?y(d,r,f.props.children,b,f.key):r!==null&&(r.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Be&&za(k)===r.type)?(r=l(r,f.props),Zn(r,f),r.return=d,r):(r=Gl(f.type,f.key,f.props,null,d.mode,b),Zn(r,f),r.return=d,r)}function m(d,r,f,b){return r===null||r.tag!==4||r.stateNode.containerInfo!==f.containerInfo||r.stateNode.implementation!==f.implementation?(r=ws(f,d.mode,b),r.return=d,r):(r=l(r,f.children||[]),r.return=d,r)}function y(d,r,f,b,k){return r===null||r.tag!==7?(r=Ca(f,d.mode,b,k),r.return=d,r):(r=l(r,f),r.return=d,r)}function S(d,r,f){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ss(""+r,d.mode,f),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ke:return f=Gl(r.type,r.key,r.props,null,d.mode,f),Zn(f,r),f.return=d,f;case Ne:return r=ws(r,d.mode,f),r.return=d,r;case Be:return r=za(r),S(d,r,f)}if(yt(r)||Le(r))return r=Ca(r,d.mode,f,null),r.return=d,r;if(typeof r.then=="function")return S(d,Kl(r),f);if(r.$$typeof===Re)return S(d,Xl(d,r),f);Wl(d,r)}return null}function h(d,r,f,b){var k=r!==null?r.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return k!==null?null:o(d,r,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ke:return f.key===k?u(d,r,f,b):null;case Ne:return f.key===k?m(d,r,f,b):null;case Be:return f=za(f),h(d,r,f,b)}if(yt(f)||Le(f))return k!==null?null:y(d,r,f,b,null);if(typeof f.then=="function")return h(d,r,Kl(f),b);if(f.$$typeof===Re)return h(d,r,Xl(d,f),b);Wl(d,f)}return null}function g(d,r,f,b,k){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(f)||null,o(r,d,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ke:return d=d.get(b.key===null?f:b.key)||null,u(r,d,b,k);case Ne:return d=d.get(b.key===null?f:b.key)||null,m(r,d,b,k);case Be:return b=za(b),g(d,r,f,b,k)}if(yt(b)||Le(b))return d=d.get(f)||null,y(r,d,b,k,null);if(typeof b.then=="function")return g(d,r,f,Kl(b),k);if(b.$$typeof===Re)return g(d,r,f,Xl(r,b),k);Wl(r,b)}return null}function T(d,r,f,b){for(var k=null,Z=null,C=r,j=r=0,Q=null;C!==null&&j<f.length;j++){C.index>j?(Q=C,C=null):Q=C.sibling;var I=h(d,C,f[j],b);if(I===null){C===null&&(C=Q);break}e&&C&&I.alternate===null&&t(d,C),r=i(I,r,j),Z===null?k=I:Z.sibling=I,Z=I,C=Q}if(j===f.length)return a(d,C),V&&Ot(d,j),k;if(C===null){for(;j<f.length;j++)C=S(d,f[j],b),C!==null&&(r=i(C,r,j),Z===null?k=C:Z.sibling=C,Z=C);return V&&Ot(d,j),k}for(C=n(C);j<f.length;j++)Q=g(C,d,j,f[j],b),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?j:Q.key),r=i(Q,r,j),Z===null?k=Q:Z.sibling=Q,Z=Q);return e&&C.forEach(function(ba){return t(d,ba)}),V&&Ot(d,j),k}function q(d,r,f,b){if(f==null)throw Error(p(151));for(var k=null,Z=null,C=r,j=r=0,Q=null,I=f.next();C!==null&&!I.done;j++,I=f.next()){C.index>j?(Q=C,C=null):Q=C.sibling;var ba=h(d,C,I.value,b);if(ba===null){C===null&&(C=Q);break}e&&C&&ba.alternate===null&&t(d,C),r=i(ba,r,j),Z===null?k=ba:Z.sibling=ba,Z=ba,C=Q}if(I.done)return a(d,C),V&&Ot(d,j),k;if(C===null){for(;!I.done;j++,I=f.next())I=S(d,I.value,b),I!==null&&(r=i(I,r,j),Z===null?k=I:Z.sibling=I,Z=I);return V&&Ot(d,j),k}for(C=n(C);!I.done;j++,I=f.next())I=g(C,d,j,I.value,b),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?j:I.key),r=i(I,r,j),Z===null?k=I:Z.sibling=I,Z=I);return e&&C.forEach(function(Zh){return t(d,Zh)}),V&&Ot(d,j),k}function le(d,r,f,b){if(typeof f=="object"&&f!==null&&f.type===ze&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ke:e:{for(var k=f.key;r!==null;){if(r.key===k){if(k=f.type,k===ze){if(r.tag===7){a(d,r.sibling),b=l(r,f.props.children),b.return=d,d=b;break e}}else if(r.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Be&&za(k)===r.type){a(d,r.sibling),b=l(r,f.props),Zn(b,f),b.return=d,d=b;break e}a(d,r);break}else t(d,r);r=r.sibling}f.type===ze?(b=Ca(f.props.children,d.mode,b,f.key),b.return=d,d=b):(b=Gl(f.type,f.key,f.props,null,d.mode,b),Zn(b,f),b.return=d,d=b)}return s(d);case Ne:e:{for(k=f.key;r!==null;){if(r.key===k)if(r.tag===4&&r.stateNode.containerInfo===f.containerInfo&&r.stateNode.implementation===f.implementation){a(d,r.sibling),b=l(r,f.children||[]),b.return=d,d=b;break e}else{a(d,r);break}else t(d,r);r=r.sibling}b=ws(f,d.mode,b),b.return=d,d=b}return s(d);case Be:return f=za(f),le(d,r,f,b)}if(yt(f))return T(d,r,f,b);if(Le(f)){if(k=Le(f),typeof k!="function")throw Error(p(150));return f=k.call(f),q(d,r,f,b)}if(typeof f.then=="function")return le(d,r,Kl(f),b);if(f.$$typeof===Re)return le(d,r,Xl(d,f),b);Wl(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,r!==null&&r.tag===6?(a(d,r.sibling),b=l(r,f),b.return=d,d=b):(a(d,r),b=Ss(f,d.mode,b),b.return=d,d=b),s(d)):a(d,r)}return function(d,r,f,b){try{Vn=0;var k=le(d,r,f,b);return rn=null,k}catch(C){if(C===un||C===Zl)throw C;var Z=et(29,C,null,d.mode);return Z.lanes=b,Z.return=d,Z}finally{}}}var _a=xr(!0),Mr=xr(!1),aa=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(W&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Ll(e),cr(e,null,a),t}return Bl(e,n,t,a),Ll(e)}function In(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,vu(e,a)}}function _s(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Hs=!1;function Kn(){if(Hs){var e=on;if(e!==null)throw e}}function Wn(e,t,a,n){Hs=!1;var l=e.updateQueue;aa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,m=u.next;u.next=null,s===null?i=m:s.next=m,s=u;var y=e.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==s&&(o===null?y.firstBaseUpdate=m:o.next=m,y.lastBaseUpdate=u))}if(i!==null){var S=l.baseState;s=0,y=m=u=null,o=i;do{var h=o.lane&-536870913,g=h!==o.lane;if(g?(Y&h)===h:(n&h)===h){h!==0&&h===sn&&(Hs=!0),y!==null&&(y=y.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var T=e,q=o;h=t;var le=a;switch(q.tag){case 1:if(T=q.payload,typeof T=="function"){S=T.call(le,S,h);break e}S=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=q.payload,h=typeof T=="function"?T.call(le,S,h):T,h==null)break e;S=z({},S,h);break e;case 2:aa=!0}}h=o.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=l.callbacks,g===null?l.callbacks=[h]:g.push(h))}else g={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(m=y=g,u=S):y=y.next=g,s|=h;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);y===null&&(u=S),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=y,i===null&&(l.shared.lanes=0),ra|=s,e.lanes=s,e.memoizedState=S}}function Cr(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function kr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cr(a[e],t)}var cn=c(null),Fl=c(0);function Rr(e,t){e=Vt,A(Fl,e),A(cn,t),Vt=e|t.baseLanes}function Ns(){A(Fl,Vt),A(cn,cn.current)}function js(){Vt=Fl.current,w(cn),w(Fl)}var tt=c(null),ht=null;function ia(e){var t=e.alternate;A(ge,ge.current&1),A(tt,e),ht===null&&(t===null||cn.current!==null||t.memoizedState!==null)&&(ht=e)}function Bs(e){A(ge,ge.current),A(tt,e),ht===null&&(ht=e)}function qr(e){e.tag===22?(A(ge,ge.current),A(tt,e),ht===null&&(ht=e)):sa()}function sa(){A(ge,ge.current),A(tt,tt.current)}function at(e){w(tt),ht===e&&(ht=null),w(ge)}var ge=c(0);function Jl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zo(a)||Io(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nt=0,N=null,ae=null,be=null,Pl=!1,dn=!1,Ha=!1,$l=0,Fn=0,fn=null,Hm=0;function fe(){throw Error(p(321))}function Ls(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Gs(e,t,a,n,l,i){return Nt=i,N=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?hc:ao,Ha=!1,i=a(n,l),Ha=!1,dn&&(i=zr(t,a,n,l)),Ur(e),i}function Ur(e){v.H=$n;var t=ae!==null&&ae.next!==null;if(Nt=0,be=ae=N=null,Pl=!1,Fn=0,fn=null,t)throw Error(p(300));e===null||Se||(e=e.dependencies,e!==null&&Ql(e)&&(Se=!0))}function zr(e,t,a,n){N=e;var l=0;do{if(dn&&(fn=null),Fn=0,dn=!1,25<=l)throw Error(p(301));if(l+=1,be=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=pc,i=t(a,n)}while(dn);return i}function Nm(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Jn(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(N.flags|=1024),t}function Ys(){var e=$l!==0;return $l=0,e}function Qs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xs(e){if(Pl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pl=!1}Nt=0,be=ae=N=null,dn=!1,Fn=$l=0,fn=null}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?N.memoizedState=be=e:be=be.next=e,be}function ye(){if(ae===null){var e=N.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=be===null?N.memoizedState:be.next;if(t!==null)be=t,ae=e;else{if(e===null)throw N.alternate===null?Error(p(467)):Error(p(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},be===null?N.memoizedState=be=e:be=be.next=e}return be}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(e){var t=Fn;return Fn+=1,fn===null&&(fn=[]),e=Dr(fn,e,t),t=N,(be===null?t.memoizedState:be.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?hc:ao),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jn(e);if(e.$$typeof===Re)return Me(e)}throw Error(p(438,String(e)))}function Vs(e){var t=null,a=N.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=N.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),N.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=La;return t.index++,a}function jt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=ye();return Zs(t,ae,e)}function Zs(e,t,a){var n=e.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var o=s=null,u=null,m=t,y=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(Y&S)===S:(Nt&S)===S){var h=m.revertLane;if(h===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===sn&&(y=!0);else if((Nt&h)===h){m=m.next,h===sn&&(y=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(o=u=S,s=i):u=u.next=S,N.lanes|=h,ra|=h;S=m.action,Ha&&a(i,S),i=m.hasEagerState?m.eagerState:a(i,S)}else h={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(o=u=h,s=i):u=u.next=h,N.lanes|=S,ra|=S;m=m.next}while(m!==null&&m!==t);if(u===null?s=i:u.next=o,!$e(i,e.memoizedState)&&(Se=!0,y&&(a=on,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=u,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Is(e){var t=ye(),a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);$e(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Or(e,t,a){var n=N,l=ye(),i=V;if(i){if(a===void 0)throw Error(p(407));a=a()}else a=t();var s=!$e((ae||l).memoizedState,a);if(s&&(l.memoizedState=a,Se=!0),l=l.queue,Fs(Nr.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},Hr.bind(null,n,l,a,t),null),se===null)throw Error(p(349));i||(Nt&127)!==0||_r(n,t,a)}return a}function _r(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=N.updateQueue,t===null?(t=ei(),N.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Hr(e,t,a,n){t.value=a,t.getSnapshot=n,jr(t)&&Br(e)}function Nr(e,t,a){return a(function(){jr(t)&&Br(e)})}function jr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Br(e){var t=Ma(e,2);t!==null&&Ie(t,e,2)}function Ks(e){var t=_e();if(typeof e=="function"){var a=e;if(e=a(),Ha){Wt(!0);try{a()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},t}function Lr(e,t,a,n){return e.baseState=a,Zs(e,ae,typeof n=="function"?n:jt)}function jm(e,t,a,n,l){if(ii(e))throw Error(p(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};v.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Gr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Gr(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=v.T,s={};v.T=s;try{var o=a(l,n),u=v.S;u!==null&&u(s,o),Yr(e,t,o)}catch(m){Ws(e,t,m)}finally{i!==null&&s.types!==null&&(i.types=s.types),v.T=i}}else try{i=a(l,n),Yr(e,t,i)}catch(m){Ws(e,t,m)}}function Yr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Qr(e,t,n)},function(n){return Ws(e,t,n)}):Qr(e,t,a)}function Qr(e,t,a){t.status="fulfilled",t.value=a,Xr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Gr(e,a)))}function Ws(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xr(t),t=t.next;while(t!==n)}e.action=null}function Xr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vr(e,t){return t}function Zr(e,t){if(V){var a=se.formState;if(a!==null){e:{var n=N;if(V){if(oe){t:{for(var l=oe,i=mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=pt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){oe=pt(l.nextSibling),n=l.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=_e(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:t},a.queue=n,a=dc.bind(null,N,n),n.dispatch=a,n=Ks(!1),i=to.bind(null,N,!1,n.queue),n=_e(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=jm.bind(null,N,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ir(e){var t=ye();return Kr(t,ae,e)}function Kr(e,t,a){if(t=Zs(e,t,Vr)[0],e=ai(jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Jn(t)}catch(s){throw s===un?Zl:s}else n=t;t=ye();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(N.flags|=2048,mn(9,{destroy:void 0},Bm.bind(null,l,a),null)),[n,i,e]}function Bm(e,t){e.action=t}function Wr(e){var t=ye(),a=ae;if(a!==null)return Kr(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=N.updateQueue,t===null&&(t=ei(),N.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Fr(){return ye().memoizedState}function ni(e,t,a,n){var l=_e();N.flags|=e,l.memoizedState=mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function li(e,t,a,n){var l=ye();n=n===void 0?null:n;var i=l.memoizedState.inst;ae!==null&&n!==null&&Ls(n,ae.memoizedState.deps)?l.memoizedState=mn(t,i,a,n):(N.flags|=e,l.memoizedState=mn(1|t,i,a,n))}function Jr(e,t){ni(8390656,8,e,t)}function Fs(e,t){li(2048,8,e,t)}function Lm(e){N.flags|=4;var t=N.updateQueue;if(t===null)t=ei(),N.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Pr(e){var t=ye().memoizedState;return Lm({ref:t,nextImpl:e}),function(){if((W&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function $r(e,t){return li(4,2,e,t)}function ec(e,t){return li(4,4,e,t)}function tc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,tc.bind(null,t,e),a)}function Js(){}function nc(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ls(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function lc(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ls(t,n[1]))return n[0];if(n=e(),Ha){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n}function Ps(e,t,a){return a===void 0||(Nt&1073741824)!==0&&(Y&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=id(),N.lanes|=e,ra|=e,a)}function ic(e,t,a,n){return $e(a,t)?a:cn.current!==null?(e=Ps(e,a,n),$e(e,t)||(Se=!0),e):(Nt&42)===0||(Nt&1073741824)!==0&&(Y&261930)===0?(Se=!0,e.memoizedState=a):(e=id(),N.lanes|=e,ra|=e,t)}function sc(e,t,a,n,l){var i=D.p;D.p=i!==0&&8>i?i:8;var s=v.T,o={};v.T=o,to(e,!1,t,a);try{var u=l(),m=v.S;if(m!==null&&m(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=_m(u,n);Pn(e,t,y,it(e))}else Pn(e,t,n,it(e))}catch(S){Pn(e,t,{then:function(){},status:"rejected",reason:S},it())}finally{D.p=i,s!==null&&o.types!==null&&(s.types=o.types),v.T=s}}function Gm(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(p(476));var l=oc(e).queue;sc(e,l,t,O,a===null?Gm:function(){return uc(e),a(n)})}function oc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:O},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=oc(e);t.next===null&&(t=e.alternate.memoizedState),Pn(e,t.next.queue,{},it())}function eo(){return Me(pl)}function rc(){return ye().memoizedState}function cc(){return ye().memoizedState}function Ym(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var n=la(t,e,a);n!==null&&(Ie(n,t,a),In(n,t,a)),t={cache:ks()},e.payload=t;return}t=t.return}}function Qm(e,t,a){var n=it();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?fc(t,a):(a=vs(e,t,a,n),a!==null&&(Ie(a,e,n),mc(a,t,n)))}function dc(e,t,a){var n=it();Pn(e,t,a,n)}function Pn(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))fc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,o=i(s,a);if(l.hasEagerState=!0,l.eagerState=o,$e(o,s))return Bl(e,t,l,0),se===null&&jl(),!1}catch{}finally{}if(a=vs(e,t,l,n),a!==null)return Ie(a,e,n),mc(a,t,n),!0}return!1}function to(e,t,a,n){if(n={lane:2,revertLane:Oo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(p(479))}else t=vs(e,a,n,2),t!==null&&Ie(t,e,2)}function ii(e){var t=e.alternate;return e===N||t!==null&&t===N}function fc(e,t){dn=Pl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,vu(e,a)}}var $n={readContext:Me,use:ti,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe};$n.useEffectEvent=fe;var hc={readContext:Me,use:ti,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Jr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ni(4194308,4,tc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var a=_e();t=t===void 0?null:t;var n=e();if(Ha){Wt(!0);try{e()}finally{Wt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=_e();if(a!==void 0){var l=a(t);if(Ha){Wt(!0);try{a(t)}finally{Wt(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Qm.bind(null,N,e),[n.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:function(e){e=Ks(e);var t=e.queue,a=dc.bind(null,N,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Js,useDeferredValue:function(e,t){var a=_e();return Ps(a,e,t)},useTransition:function(){var e=Ks(!1);return e=sc.bind(null,N,e.queue,!0,!1),_e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=N,l=_e();if(V){if(a===void 0)throw Error(p(407));a=a()}else{if(a=t(),se===null)throw Error(p(349));(Y&127)!==0||_r(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Jr(Nr.bind(null,n,i,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},Hr.bind(null,n,i,a,t),null),a},useId:function(){var e=_e(),t=se.identifierPrefix;if(V){var a=Tt,n=At;a=(n&~(1<<32-Pe(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$l++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Hm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Zr,useActionState:Zr,useOptimistic:function(e){var t=_e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,N,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return _e().memoizedState=Ym.bind(null,N)},useEffectEvent:function(e){var t=_e(),a={impl:e};return t.memoizedState=a,function(){if((W&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}},ao={readContext:Me,use:ti,useCallback:nc,useContext:Me,useEffect:Fs,useImperativeHandle:ac,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:lc,useReducer:ai,useRef:Fr,useState:function(){return ai(jt)},useDebugValue:Js,useDeferredValue:function(e,t){var a=ye();return ic(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(jt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Jn(e),t]},useSyncExternalStore:Or,useId:rc,useHostTransitionStatus:eo,useFormState:Ir,useActionState:Ir,useOptimistic:function(e,t){var a=ye();return Lr(a,ae,e,t)},useMemoCache:Vs,useCacheRefresh:cc};ao.useEffectEvent=Pr;var pc={readContext:Me,use:ti,useCallback:nc,useContext:Me,useEffect:Fs,useImperativeHandle:ac,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:lc,useReducer:Is,useRef:Fr,useState:function(){return Is(jt)},useDebugValue:Js,useDeferredValue:function(e,t){var a=ye();return ae===null?Ps(a,e,t):ic(a,ae.memoizedState,e,t)},useTransition:function(){var e=Is(jt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Jn(e),t]},useSyncExternalStore:Or,useId:rc,useHostTransitionStatus:eo,useFormState:Wr,useActionState:Wr,useOptimistic:function(e,t){var a=ye();return ae!==null?Lr(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:cc};pc.useEffectEvent=Pr;function no(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Ie(t,e,n),In(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Ie(t,e,n),In(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(Ie(t,e,a),In(t,e,a))}};function gc(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Bn(a,n)||!Bn(l,i):!0}function yc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function Na(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=z({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function vc(e){Nl(e)}function bc(e){console.error(e)}function Sc(e){Nl(e)}function si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function wc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function io(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){si(e,t)},a}function Ec(e){return e=na(e),e.tag=3,e}function Dc(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){wc(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){wc(t,a,n),typeof l!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Xm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,l,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?vi():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Il?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),qo(e,n,l)),!1;case 22:return a.flags|=65536,n===Il?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),qo(e,n,l)),!1}throw Error(p(435,a.tag))}return qo(e,n,l),vi(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==As&&(e=Error(p(422),{cause:n}),Yn(ct(e,a)))):(n!==As&&(t=Error(p(423),{cause:n}),Yn(ct(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ct(n,a),l=io(e.stateNode,n,l),_s(e,l),me!==4&&(me=2)),!1;var i=Error(p(520),{cause:n});if(i=ct(i,a),ol===null?ol=[i]:ol.push(i),me!==4&&(me=2),t===null)return!0;n=ct(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=io(a.stateNode,n,e),_s(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ca===null||!ca.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Ec(l),Dc(l,e,a,n),_s(a,l),!1}a=a.return}while(a!==null);return!1}var so=Error(p(461)),Se=!1;function Ce(e,t,a,n){t.child=e===null?Mr(t,null,a,n):_a(t,e.child,a,n)}function Ac(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}else s=n;return qa(t),n=Gs(e,t,a,s,i,l),o=Ys(),e!==null&&!Se?(Qs(e,t,l),Bt(e,t,l)):(V&&o&&Es(t),t.flags|=1,Ce(e,t,n,l),t.child)}function Tc(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!bs(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,xc(e,t,i,n,l)):(e=Gl(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!po(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Bn,a(s,n)&&e.ref===t.ref)return Bt(e,t,l)}return t.flags|=1,e=zt(i,n),e.ref=t.ref,e.return=t,t.child=e}function xc(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Bn(i,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=i,po(e,l))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,Bt(e,t,l)}return oo(e,t,a,n,l)}function Mc(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Cc(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(t,i!==null?i.cachePool:null),i!==null?Rr(t,i):Ns(),qr(t);else return n=t.lanes=536870912,Cc(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(Vl(t,i.cachePool),Rr(t,i),sa(),t.memoizedState=null):(e!==null&&Vl(t,null),Ns(),sa());return Ce(e,t,l,a),t.child}function el(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cc(e,t,a,n,l){var i=qs();return i=i===null?null:{parent:ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Vl(t,null),Ns(),qr(t),e!==null&&ln(e,t,n,!0),t.childLanes=l,null}function oi(e,t){return t=ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kc(e,t,a){return _a(t,e.child,null,a),e=oi(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(n.mode==="hidden")return e=oi(t,n),t.lanes=536870912,el(null,e);if(Bs(t),(e=oe)?(e=Gd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=fr(e),a.return=t,t.child=a,xe=t,oe=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return oi(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(Bs(t),l)if(t.flags&256)t.flags&=-257,t=kc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(Se||ln(e,t,a,!1),l=(a&e.childLanes)!==0,Se||l){if(n=se,n!==null&&(s=bu(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,Ma(e,s),Ie(n,e,s),so;vi(),t=kc(e,t,a)}else e=i.treeContext,oe=pt(s.nextSibling),xe=t,V=!0,$t=null,mt=!1,e!==null&&pr(t,e),t=oi(t,n),t.flags|=4096;return t}return e=zt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ui(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(p(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,n,l){return qa(t),a=Gs(e,t,a,n,void 0,l),n=Ys(),e!==null&&!Se?(Qs(e,t,l),Bt(e,t,l)):(V&&n&&Es(t),t.flags|=1,Ce(e,t,a,l),t.child)}function Rc(e,t,a,n,l,i){return qa(t),t.updateQueue=null,a=zr(t,n,a,l),Ur(e),n=Ys(),e!==null&&!Se?(Qs(e,t,i),Bt(e,t,i)):(V&&n&&Es(t),t.flags|=1,Ce(e,t,a,i),t.child)}function qc(e,t,a,n,l){if(qa(t),t.stateNode===null){var i=en,s=a.contextType;typeof s=="object"&&s!==null&&(i=Me(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},zs(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Me(s):en,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(no(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&lo.enqueueReplaceState(i,i.state,null),Wn(t,n,i,l),Kn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,u=Na(a,o);i.props=u;var m=i.context,y=a.contextType;s=en,typeof y=="object"&&y!==null&&(s=Me(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||m!==s)&&yc(t,i,n,s),aa=!1;var h=t.memoizedState;i.state=h,Wn(t,n,i,l),Kn(),m=t.memoizedState,o||h!==m||aa?(typeof S=="function"&&(no(t,a,S,n),m=t.memoizedState),(u=aa||gc(t,a,u,n,h,m,s))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),i.props=n,i.state=m,i.context=s,n=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Os(e,t),s=t.memoizedProps,y=Na(a,s),i.props=y,S=t.pendingProps,h=i.context,m=a.contextType,u=en,typeof m=="object"&&m!==null&&(u=Me(m)),o=a.getDerivedStateFromProps,(m=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==S||h!==u)&&yc(t,i,n,u),aa=!1,h=t.memoizedState,i.state=h,Wn(t,n,i,l),Kn();var g=t.memoizedState;s!==S||h!==g||aa||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof o=="function"&&(no(t,a,o,n),g=t.memoizedState),(y=aa||gc(t,a,y,n,h,g,u)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,g,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,g,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),i.props=n,i.state=g,i.context=u,n=y):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,ui(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=_a(t,e.child,null,l),t.child=_a(t,null,a,l)):Ce(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Bt(e,t,l),e}function Uc(e,t,a,n){return ka(),t.flags|=256,Ce(e,t,a,n),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ro(e){return{baseLanes:e,cachePool:wr()}}function co(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=lt),e}function zc(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(l?ia(t):sa(),(e=oe)?(e=Gd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:At,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=fr(e),a.return=t,t.child=a,xe=t,oe=null)):e=null,e===null)throw ea(t);return Io(e)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,l?(sa(),l=t.mode,o=ri({mode:"hidden",children:o},l),n=Ca(n,l,a,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=ro(a),n.childLanes=co(e,s,a),t.memoizedState=uo,el(null,n)):(ia(t),fo(t,o))}var u=e.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=mo(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),o=n.fallback,l=t.mode,n=ri({mode:"visible",children:n.children},l),o=Ca(o,l,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,_a(t,e.child,null,a),n=t.child,n.memoizedState=ro(a),n.childLanes=co(e,s,a),t.memoizedState=uo,t=el(null,n));else if(ia(t),Io(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var m=s.dgst;s=m,n=Error(p(419)),n.stack="",n.digest=s,Yn({value:n,source:null,stack:null}),t=mo(e,t,a)}else if(Se||ln(e,t,a,!1),s=(a&e.childLanes)!==0,Se||s){if(s=se,s!==null&&(n=bu(s,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,Ma(e,n),Ie(s,e,n),so;Zo(o)||vi(),t=mo(e,t,a)}else Zo(o)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,oe=pt(o.nextSibling),xe=t,V=!0,$t=null,mt=!1,e!==null&&pr(t,e),t=fo(t,n.children),t.flags|=4096);return t}return l?(sa(),o=n.fallback,l=t.mode,u=e.child,m=u.sibling,n=zt(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,m!==null?o=zt(m,o):(o=Ca(o,l,a,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,el(null,n),n=t.child,o=e.child.memoizedState,o===null?o=ro(a):(l=o.cachePool,l!==null?(u=ve._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=wr(),o={baseLanes:o.baseLanes|a,cachePool:l}),n.memoizedState=o,n.childLanes=co(e,s,a),t.memoizedState=uo,el(e.child,n)):(ia(t),a=e.child,e=a.sibling,a=zt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fo(e,t){return t=ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ri(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,a){return _a(t,e.child,null,a),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ms(e.return,t,a)}function ho(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function _c(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=ge.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,A(ge,s),Ce(e,t,n,a),n=V?Gn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,a,t);else if(e.tag===19)Oc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Jl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ho(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}ho(t,!0,a,null,i,n);break;case"together":ho(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Bt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ra|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,a=zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function po(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function Zm(e,t,a){switch(t.tag){case 3:Oe(t,t.stateNode.containerInfo),ta(t,ve,e.memoizedState.cache),ka();break;case 27:case 5:xn(t);break;case 4:Oe(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?zc(e,t,a):(ia(t),e=Bt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return _c(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(ge,ge.current),n)break;return null;case 22:return t.lanes=0,Mc(e,t,a,t.pendingProps);case 24:ta(t,ve,e.memoizedState.cache)}return Bt(e,t,a)}function Hc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!po(e,a)&&(t.flags&128)===0)return Se=!1,Zm(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,V&&(t.flags&1048576)!==0&&hr(t,Gn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")bs(e)?(n=Na(e,n),t.tag=1,t=qc(null,t,e,n,a)):(t.tag=0,t=oo(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===st){t.tag=11,t=Ac(null,t,e,n,a);break e}else if(l===X){t.tag=14,t=Tc(null,t,e,n,a);break e}}throw t=kt(e)||e,Error(p(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Na(n,t.pendingProps),qc(e,t,n,l,a);case 3:e:{if(Oe(t,t.stateNode.containerInfo),e===null)throw Error(p(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,Os(e,t),Wn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,ve,n),n!==i.cache&&Cs(t,[ve],a,!0),Kn(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Uc(e,t,n,a);break e}else if(n!==l){l=ct(Error(p(424)),t),Yn(l),t=Uc(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=pt(e.firstChild),xe=t,V=!0,$t=null,mt=!0,a=Mr(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ka(),n===l){t=Bt(e,t,a);break e}Ce(e,t,n,a)}t=t.child}return t;case 26:return ui(e,t),e===null?(a=Id(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,n=Ti(B.current).createElement(a),n[Te]=t,n[Ge]=e,ke(n,a,e),De(n),t.stateNode=n):t.memoizedState=Id(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xn(t),e===null&&V&&(n=t.stateNode=Xd(t.type,t.pendingProps,B.current),xe=t,mt=!0,l=oe,ha(t.type)?(Ko=l,oe=pt(n.firstChild)):oe=l),Ce(e,t,t.pendingProps.children,a),ui(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((l=n=oe)&&(n=Eh(n,t.type,t.pendingProps,mt),n!==null?(t.stateNode=n,xe=t,oe=pt(n.firstChild),mt=!1,l=!0):l=!1),l||ea(t)),xn(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,Qo(l,i)?n=null:s!==null&&Qo(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Gs(e,t,Nm,null,null,a),pl._currentValue=l),ui(e,t),Ce(e,t,n,a),t.child;case 6:return e===null&&V&&((e=a=oe)&&(a=Dh(a,t.pendingProps,mt),a!==null?(t.stateNode=a,xe=t,oe=null,e=!0):e=!1),e||ea(t)),null;case 13:return zc(e,t,a);case 4:return Oe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=_a(t,null,n,a):Ce(e,t,n,a),t.child;case 11:return Ac(e,t,t.type,t.pendingProps,a);case 7:return Ce(e,t,t.pendingProps,a),t.child;case 8:return Ce(e,t,t.pendingProps.children,a),t.child;case 12:return Ce(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Ce(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,qa(t),l=Me(l),n=n(l),t.flags|=1,Ce(e,t,n,a),t.child;case 14:return Tc(e,t,t.type,t.pendingProps,a);case 15:return xc(e,t,t.type,t.pendingProps,a);case 19:return _c(e,t,a);case 31:return Vm(e,t,a);case 22:return Mc(e,t,a,t.pendingProps);case 24:return qa(t),n=Me(ve),e===null?(l=qs(),l===null&&(l=se,i=ks(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},zs(t),ta(t,ve,l)):((e.lanes&a)!==0&&(Os(e,t),Wn(t,null,null,a),Kn()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,ve,n)):(n=i.cache,ta(t,ve,n),n!==l.cache&&Cs(t,[ve],a,!0))),Ce(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Lt(e){e.flags|=4}function go(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rd())e.flags|=8192;else throw Oa=Il,Us}else e.flags&=-16777217}function Nc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pd(t))if(rd())e.flags|=8192;else throw Oa=Il,Us}function ci(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gu():536870912,e.lanes|=t,yn|=t)}function tl(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Im(e,t,a){var n=t.pendingProps;switch(Ds(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ht(ve),pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?Lt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ts())),ue(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Lt(t),i!==null?(ue(t),Nc(t,i)):(ue(t),go(t,l,null,n,a))):i?i!==e.memoizedState?(Lt(t),ue(t),Nc(t,i)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Lt(t),ue(t),go(t,l,e,n,a)),null;case 27:if(wl(t),a=B.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Lt(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ue(t),null}e=M.current,nn(t)?gr(t):(e=Xd(l,n,a),t.stateNode=e,Lt(t))}return ue(t),null;case 5:if(wl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Lt(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ue(t),null}if(i=M.current,nn(t))gr(t);else{var s=Ti(B.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[Te]=t,i[Ge]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(ke(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Lt(t)}}return ue(t),go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Lt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(p(166));if(e=B.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=xe,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Te]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||zd(e.nodeValue,a)),e||ea(t,!0)}else e=Ti(e).createTextNode(n),e[Te]=t,t.stateNode=e}return ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Te]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else a=Ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(p(558))}return ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(p(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));l[Te]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),l=!1}else l=Ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ci(t,t.updateQueue),ue(t),null);case 4:return pe(),e===null&&jo(t.stateNode.containerInfo),ue(t),null;case 10:return Ht(t.type),ue(t),null;case 19:if(w(ge),n=t.memoizedState,n===null)return ue(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)tl(n,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Jl(e),i!==null){for(t.flags|=128,tl(n,!1),e=i.updateQueue,t.updateQueue=e,ci(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dr(a,e),a=a.sibling;return A(ge,ge.current&1|2),V&&Ot(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Fe()>pi&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Jl(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ci(t,e),tl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!V)return ue(t),null}else 2*Fe()-n.renderingStartTime>pi&&a!==536870912&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Fe(),e.sibling=null,a=ge.current,A(ge,l?a&1|2:a&1),V&&Ot(t,n.treeForkCount),e):(ue(t),null);case 22:case 23:return at(t),js(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),a=t.updateQueue,a!==null&&ci(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&w(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ht(ve),ue(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function Km(e,t){switch(Ds(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ht(ve),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wl(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(p(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(ge),null;case 4:return pe(),null;case 10:return Ht(t.type),null;case 22:case 23:return at(t),js(),e!==null&&w(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ht(ve),null;case 25:return null;default:return null}}function jc(e,t){switch(Ds(t),t.tag){case 3:Ht(ve),pe();break;case 26:case 27:case 5:wl(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:w(ge);break;case 10:Ht(t.type);break;case 22:case 23:at(t),js(),e!==null&&w(Ua);break;case 24:Ht(ve)}}function al(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(o){ee(t,t.return,o)}}function oa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,l=t;var u=a,m=o;try{m()}catch(y){ee(l,u,y)}}}n=n.next}while(n!==i)}}catch(y){ee(t,t.return,y)}}function Bc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{kr(t,a)}catch(n){ee(e,e.return,n)}}}function Lc(e,t,a){a.props=Na(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function nl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ee(e,t,l)}}function xt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ee(e,t,l)}else a.current=null}function Gc(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ee(e,e.return,l)}}function yo(e,t,a){try{var n=e.stateNode;gh(n,e.type,a,t),n[Ge]=t}catch(l){ee(e,e.return,l)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function vo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,a),e=e.sibling;e!==null;)bo(e,t,a),e=e.sibling}function di(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(di(e,t,a),e=e.sibling;e!==null;)di(e,t,a),e=e.sibling}function Qc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ke(t,n,a),t[Te]=e,t[Ge]=a}catch(i){ee(e,e.return,i)}}var Gt=!1,we=!1,So=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Wm(e,t){if(e=e.containerInfo,Go=Ui,e=ar(e),fs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,o=-1,u=-1,m=0,y=0,S=e,h=null;t:for(;;){for(var g;S!==a||l!==0&&S.nodeType!==3||(o=s+l),S!==i||n!==0&&S.nodeType!==3||(u=s+n),S.nodeType===3&&(s+=S.nodeValue.length),(g=S.firstChild)!==null;)h=S,S=g;for(;;){if(S===e)break t;if(h===a&&++m===l&&(o=s),h===i&&++y===n&&(u=s),(g=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=g}a=o===-1||u===-1?null:{start:o,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yo={focusedElem:e,selectionRange:a},Ui=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var T=Na(a.type,l);e=n.getSnapshotBeforeUpdate(T,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(q){ee(a,a.return,q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function Vc(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Qt(e,a),n&4&&al(5,a);break;case 1:if(Qt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var l=Na(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&Bc(a),n&512&&nl(a,a.return);break;case 3:if(Qt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{kr(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Qc(a);case 26:case 5:Qt(e,a),t===null&&n&4&&Gc(a),n&512&&nl(a,a.return);break;case 12:Qt(e,a);break;case 31:Qt(e,a),n&4&&Kc(e,a);break;case 13:Qt(e,a),n&4&&Wc(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lh.bind(null,a),Ah(e,a))));break;case 22:if(n=a.memoizedState!==null||Gt,!n){t=t!==null&&t.memoizedState!==null||we,l=Gt;var i=we;Gt=n,(we=t)&&!i?Xt(e,a,(a.subtreeFlags&8772)!==0):Qt(e,a),Gt=l,we=i}break;case 30:break;default:Qt(e,a)}}function Zc(e){var t=e.alternate;t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Qe=!1;function Yt(e,t,a){for(a=a.child;a!==null;)Ic(e,t,a),a=a.sibling}function Ic(e,t,a){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Mn,a)}catch{}switch(a.tag){case 26:we||xt(a,t),Yt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:we||xt(a,t);var n=ce,l=Qe;ha(a.type)&&(ce=a.stateNode,Qe=!1),Yt(e,t,a),fl(a.stateNode),ce=n,Qe=l;break;case 5:we||xt(a,t);case 6:if(n=ce,l=Qe,ce=null,Yt(e,t,a),ce=n,Qe=l,ce!==null)if(Qe)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{ce.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:ce!==null&&(Qe?(e=ce,Bd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):Bd(ce,a.stateNode));break;case 4:n=ce,l=Qe,ce=a.stateNode.containerInfo,Qe=!0,Yt(e,t,a),ce=n,Qe=l;break;case 0:case 11:case 14:case 15:oa(2,a,t),we||oa(4,a,t),Yt(e,t,a);break;case 1:we||(xt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Lc(a,t,n)),Yt(e,t,a);break;case 21:Yt(e,t,a);break;case 22:we=(n=we)||a.memoizedState!==null,Yt(e,t,a),we=n;break;default:Yt(e,t,a)}}function Kc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tn(e)}catch(a){ee(t,t.return,a)}}}function Wc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){ee(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xc),t;default:throw Error(p(435,e.tag))}}function fi(e,t){var a=Fm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=ih.bind(null,e,n);n.then(l,l)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(ha(o.type)){ce=o.stateNode,Qe=!1;break e}break;case 5:ce=o.stateNode,Qe=!1;break e;case 3:case 4:ce=o.stateNode.containerInfo,Qe=!0;break e}o=o.return}if(ce===null)throw Error(p(160));Ic(i,s,l),ce=null,Qe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}var bt=null;function Fc(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ve(e),n&4&&(oa(3,e,e.return),al(3,e),oa(5,e,e.return));break;case 1:Xe(t,e),Ve(e),n&512&&(we||a===null||xt(a,a.return)),n&64&&Gt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=bt;if(Xe(t,e),Ve(e),n&512&&(we||a===null||xt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Rn]||i[Te]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),ke(i,n,a),i[Te]=e,De(i),n=i;break e;case"link":var s=Fd("link","href",l).get(n+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(i=s[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}i=l.createElement(n),ke(i,n,a),l.head.appendChild(i);break;case"meta":if(s=Fd("meta","content",l).get(n+(a.content||""))){for(o=0;o<s.length;o++)if(i=s[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}i=l.createElement(n),ke(i,n,a),l.head.appendChild(i);break;default:throw Error(p(468,n))}i[Te]=e,De(i),n=i}e.stateNode=n}else Jd(l,e.type,e.stateNode);else e.stateNode=Wd(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Jd(l,e.type,e.stateNode):Wd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ve(e),n&512&&(we||a===null||xt(a,a.return)),a!==null&&n&4&&yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ve(e),n&512&&(we||a===null||xt(a,a.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(T){ee(e,e.return,T)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,yo(e,l,a!==null?a.memoizedProps:l)),n&1024&&(So=!0);break;case 6:if(Xe(t,e),Ve(e),n&4){if(e.stateNode===null)throw Error(p(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(T){ee(e,e.return,T)}}break;case 3:if(Ci=null,l=bt,bt=xi(t.containerInfo),Xe(t,e),bt=l,Ve(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(T){ee(e,e.return,T)}So&&(So=!1,Jc(e));break;case 4:n=bt,bt=xi(e.stateNode.containerInfo),Xe(t,e),Ve(e),bt=n;break;case 12:Xe(t,e),Ve(e);break;case 31:Xe(t,e),Ve(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 13:Xe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hi=Fe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 22:l=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,m=Gt,y=we;if(Gt=m||l,we=y||u,Xe(t,e),we=y,Gt=m,Ve(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||u||Gt||we||ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(i=u.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=u.stateNode;var S=u.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(T){ee(u,u.return,T)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(T){ee(u,u.return,T)}}}else if(t.tag===18){if(a===null){u=t;try{var g=u.stateNode;l?Ld(g,!0):Ld(u.stateNode,!1)}catch(T){ee(u,u.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,fi(e,a))));break;case 19:Xe(t,e),Ve(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fi(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Yc(n)){a=n;break}n=n.return}if(a==null)throw Error(p(160));switch(a.tag){case 27:var l=a.stateNode,i=vo(e);di(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ia(s,""),a.flags&=-33);var o=vo(e);di(e,o,s);break;case 3:case 4:var u=a.stateNode.containerInfo,m=vo(e);bo(e,m,u);break;default:throw Error(p(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vc(e,t.alternate,t),t=t.sibling}function ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),ja(t);break;case 1:xt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Lc(t,t.return,a),ja(t);break;case 27:fl(t.stateNode);case 26:case 5:xt(t,t.return),ja(t);break;case 22:t.memoizedState===null&&ja(t);break;case 30:ja(t);break;default:ja(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Xt(l,i,a),al(4,i);break;case 1:if(Xt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){ee(n,n.return,m)}if(n=i,l=n.updateQueue,l!==null){var o=n.stateNode;try{var u=l.shared.hiddenCallbacks;if(u!==null)for(l.shared.hiddenCallbacks=null,l=0;l<u.length;l++)Cr(u[l],o)}catch(m){ee(n,n.return,m)}}a&&s&64&&Bc(i),nl(i,i.return);break;case 27:Qc(i);case 26:case 5:Xt(l,i,a),a&&n===null&&s&4&&Gc(i),nl(i,i.return);break;case 12:Xt(l,i,a);break;case 31:Xt(l,i,a),a&&s&4&&Kc(l,i);break;case 13:Xt(l,i,a),a&&s&4&&Wc(l,i);break;case 22:i.memoizedState===null&&Xt(l,i,a),nl(i,i.return);break;case 30:break;default:Xt(l,i,a)}t=t.sibling}}function wo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qn(a))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pc(e,t,a,n),t=t.sibling}function Pc(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),l&2048&&al(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e)));break;case 12:if(l&2048){St(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,o=i.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ee(t,t.return,u)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,n):ll(e,t):i._visibility&2?St(e,t,a,n):(i._visibility|=2,hn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&wo(s,t);break;case 24:St(e,t,a,n),l&2048&&Eo(t.alternate,t);break;default:St(e,t,a,n)}}function hn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,o=a,u=n,m=s.flags;switch(s.tag){case 0:case 11:case 15:hn(i,s,o,u,l),al(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?hn(i,s,o,u,l):ll(i,s):(y._visibility|=2,hn(i,s,o,u,l)),l&&m&2048&&wo(s.alternate,s);break;case 24:hn(i,s,o,u,l),l&&m&2048&&Eo(s.alternate,s);break;default:hn(i,s,o,u,l)}t=t.sibling}}function ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ll(a,n),l&2048&&wo(n.alternate,n);break;case 24:ll(a,n),l&2048&&Eo(n.alternate,n);break;default:ll(a,n)}t=t.sibling}}var il=8192;function pn(e,t,a){if(e.subtreeFlags&il)for(e=e.child;e!==null;)$c(e,t,a),e=e.sibling}function $c(e,t,a){switch(e.tag){case 26:pn(e,t,a),e.flags&il&&e.memoizedState!==null&&Hh(a,bt,e.memoizedState,e.memoizedProps);break;case 5:pn(e,t,a);break;case 3:case 4:var n=bt;bt=xi(e.stateNode.containerInfo),pn(e,t,a),bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,pn(e,t,a),il=n):pn(e,t,a));break;default:pn(e,t,a)}}function ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ae=n,ad(n,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&oa(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mi(e)):sl(e);break;default:sl(e)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ae=n,ad(n,e)}ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mi(t));break;default:mi(t)}e=e.sibling}}function ad(e,t){for(;Ae!==null;){var a=Ae;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ae=n;else e:for(a=e;Ae!==null;){n=Ae;var l=n.sibling,i=n.return;if(Zc(n),n===a){Ae=null;break e}if(l!==null){l.return=i,Ae=l;break e}Ae=i}}}var Jm={getCacheForType:function(e){var t=Me(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Me(ve).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,W=0,se=null,L=null,Y=0,$=0,nt=null,ua=!1,gn=!1,Do=!1,Vt=0,me=0,ra=0,Ba=0,Ao=0,lt=0,yn=0,ol=null,Ze=null,To=!1,hi=0,nd=0,pi=1/0,gi=null,ca=null,Ee=0,da=null,vn=null,Zt=0,xo=0,Mo=null,ld=null,ul=0,Co=null;function it(){return(W&2)!==0&&Y!==0?Y&-Y:v.T!==null?Oo():Su()}function id(){if(lt===0)if((Y&536870912)===0||V){var e=Al;Al<<=1,(Al&3932160)===0&&(Al=262144),lt=e}else lt=536870912;return e=tt.current,e!==null&&(e.flags|=32),lt}function Ie(e,t,a){(e===se&&($===2||$===9)||e.cancelPendingCommit!==null)&&(bn(e,0),fa(e,Y,lt,!1)),kn(e,a),((W&2)===0||e!==se)&&(e===se&&((W&2)===0&&(Ba|=a),me===4&&fa(e,Y,lt,!1)),Mt(e))}function sd(e,t,a){if((W&6)!==0)throw Error(p(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Cn(e,t),l=n?th(e,t):Ro(e,t,!0),i=n;do{if(l===0){gn&&!n&&fa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!$m(a)){l=Ro(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;l=ol;var u=o.current.memoizedState.isDehydrated;if(u&&(bn(o,s).flags|=256),s=Ro(o,s,!1),s!==2){if(Do&&!u){o.errorRecoveryDisabledLanes|=i,Ba|=i,l=4;break e}i=Ze,Ze=l,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){bn(e,0),fa(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:fa(n,t,lt,!ua);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(l=hi+300-Fe(),10<l)){if(fa(n,t,lt,!ua),xl(n,0,!0)!==0)break e;Zt=t,n.timeoutHandle=Nd(od.bind(null,n,a,Ze,gi,To,t,lt,Ba,yn,ua,i,"Throttled",-0,0),l);break e}od(n,a,Ze,gi,To,t,lt,Ba,yn,ua,i,null,-0,0)}}break}while(!0);Mt(e)}function od(e,t,a,n,l,i,s,o,u,m,y,S,h,g){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},$c(t,i,S);var T=(i&62914560)===i?hi-Fe():(i&4194048)===i?nd-Fe():0;if(T=Nh(S,T),T!==null){Zt=i,e.cancelPendingCommit=T(pd.bind(null,e,t,i,a,n,l,s,o,u,y,S,null,h,g)),fa(e,i,s,!m);return}}pd(e,t,i,a,n,l,s,o,u)}function $m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!$e(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,a,n){t&=~Ao,t&=~Ba,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-Pe(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&yu(e,a,t)}function yi(){return(W&6)===0?(rl(0),!1):!0}function ko(){if(L!==null){if($===0)var e=L.return;else e=L,_t=Ra=null,Xs(e),rn=null,Vn=0,e=L;for(;e!==null;)jc(e.alternate,e),e=e.return;L=null}}function bn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,bh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,ko(),se=e,L=a=zt(e.current,null),Y=t,$=0,nt=null,ua=!1,gn=Cn(e,t),Do=!1,yn=lt=Ao=Ba=ra=me=0,Ze=ol=null,To=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Pe(n),i=1<<l;t|=e[l],n&=~i}return Vt=t,jl(),a}function ud(e,t){N=null,v.H=$n,t===un||t===Zl?(t=Ar(),$=3):t===Us?(t=Ar(),$=4):$=t===so?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,L===null&&(me=1,si(e,ct(t,e.current)))}function rd(){var e=tt.current;return e===null?!0:(Y&4194048)===Y?ht===null:(Y&62914560)===Y||(Y&536870912)!==0?e===ht:!1}function cd(){var e=v.H;return v.H=$n,e===null?$n:e}function dd(){var e=v.A;return v.A=Jm,e}function vi(){me=4,ua||(Y&4194048)!==Y&&tt.current!==null||(gn=!0),(ra&134217727)===0&&(Ba&134217727)===0||se===null||fa(se,Y,lt,!1)}function Ro(e,t,a){var n=W;W|=2;var l=cd(),i=dd();(se!==e||Y!==t)&&(gi=null,bn(e,t)),t=!1;var s=me;e:do try{if($!==0&&L!==null){var o=L,u=nt;switch($){case 8:ko(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=$;if($=0,nt=null,Sn(e,o,u,m),a&&gn){s=0;break e}break;default:m=$,$=0,nt=null,Sn(e,o,u,m)}}eh(),s=me;break}catch(y){ud(e,y)}while(!0);return t&&e.shellSuspendCounter++,_t=Ra=null,W=n,v.H=l,v.A=i,L===null&&(se=null,Y=0,jl()),s}function eh(){for(;L!==null;)fd(L)}function th(e,t){var a=W;W|=2;var n=cd(),l=dd();se!==e||Y!==t?(gi=null,pi=Fe()+500,bn(e,t)):gn=Cn(e,t);e:do try{if($!==0&&L!==null){t=L;var i=nt;t:switch($){case 1:$=0,nt=null,Sn(e,t,i,1);break;case 2:case 9:if(Er(i)){$=0,nt=null,md(t);break}t=function(){$!==2&&$!==9||se!==e||($=7),Mt(e)},i.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Er(i)?($=0,nt=null,md(t)):($=0,nt=null,Sn(e,t,i,7));break;case 5:var s=null;switch(L.tag){case 26:s=L.memoizedState;case 5:case 27:var o=L;if(s?Pd(s):o.stateNode.complete){$=0,nt=null;var u=o.sibling;if(u!==null)L=u;else{var m=o.return;m!==null?(L=m,bi(m)):L=null}break t}}$=0,nt=null,Sn(e,t,i,5);break;case 6:$=0,nt=null,Sn(e,t,i,6);break;case 8:ko(),me=6;break e;default:throw Error(p(462))}}ah();break}catch(y){ud(e,y)}while(!0);return _t=Ra=null,v.H=n,v.A=l,W=a,L!==null?0:(se=null,Y=0,jl(),me)}function ah(){for(;L!==null&&!Tf();)fd(L)}function fd(e){var t=Hc(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?bi(e):L=t}function md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rc(a,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Rc(a,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Xs(t);default:jc(a,t),t=L=dr(t,Vt),t=Hc(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?bi(e):L=t}function Sn(e,t,a,n){_t=Ra=null,Xs(t),rn=null,Vn=0;var l=t.return;try{if(Xm(e,l,t,a,Y)){me=1,si(e,ct(a,e.current)),L=null;return}}catch(i){if(l!==null)throw L=l,i;me=1,si(e,ct(a,e.current)),L=null;return}t.flags&32768?(V||n===1?e=!0:gn||(Y&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),hd(t,e)):bi(t)}function bi(e){var t=e;do{if((t.flags&32768)!==0){hd(t,ua);return}e=t.return;var a=Im(t.alternate,t,Vt);if(a!==null){L=a;return}if(t=t.sibling,t!==null){L=t;return}L=t=e}while(t!==null);me===0&&(me=5)}function hd(e,t){do{var a=Km(e.alternate,e);if(a!==null){a.flags&=32767,L=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){L=e;return}L=e=a}while(e!==null);me=6,L=null}function pd(e,t,a,n,l,i,s,o,u){e.cancelPendingCommit=null;do Si();while(Ee!==0);if((W&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(i=t.lanes|t.childLanes,i|=ys,_f(e,a,i,s,o,u),e===se&&(L=se=null,Y=0),vn=t,da=e,Zt=a,xo=i,Mo=l,ld=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sh(El,function(){return Sd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,l=D.p,D.p=2,s=W,W|=4;try{Wm(e,t,a)}finally{W=s,D.p=l,v.T=n}}Ee=1,gd(),yd(),vd()}}function gd(){if(Ee===1){Ee=0;var e=da,t=vn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=D.p;D.p=2;var l=W;W|=4;try{Fc(t,e);var i=Yo,s=ar(e.containerInfo),o=i.focusedElem,u=i.selectionRange;if(s!==o&&o&&o.ownerDocument&&tr(o.ownerDocument.documentElement,o)){if(u!==null&&fs(o)){var m=u.start,y=u.end;if(y===void 0&&(y=m),"selectionStart"in o)o.selectionStart=m,o.selectionEnd=Math.min(y,o.value.length);else{var S=o.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var g=h.getSelection(),T=o.textContent.length,q=Math.min(u.start,T),le=u.end===void 0?q:Math.min(u.end,T);!g.extend&&q>le&&(s=le,le=q,q=s);var d=er(o,q),r=er(o,le);if(d&&r&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==r.node||g.focusOffset!==r.offset)){var f=S.createRange();f.setStart(d.node,d.offset),g.removeAllRanges(),q>le?(g.addRange(f),g.extend(r.node,r.offset)):(f.setEnd(r.node,r.offset),g.addRange(f))}}}}for(S=[],g=o;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var b=S[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Ui=!!Go,Yo=Go=null}finally{W=l,D.p=n,v.T=a}}e.current=t,Ee=2}}function yd(){if(Ee===2){Ee=0;var e=da,t=vn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=D.p;D.p=2;var l=W;W|=4;try{Vc(e,t.alternate,t)}finally{W=l,D.p=n,v.T=a}}Ee=3}}function vd(){if(Ee===4||Ee===3){Ee=0,xf();var e=da,t=vn,a=Zt,n=ld;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,vn=da=null,bd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ca=null),Ii(a),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Mn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,l=D.p,D.p=2,v.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var o=n[s];i(o.value,{componentStack:o.stack})}}finally{v.T=t,D.p=l}}(Zt&3)!==0&&Si(),Mt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Co?ul++:(ul=0,Co=e):ul=0,rl(0)}}function bd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qn(t)))}function Si(){return gd(),yd(),vd(),Sd()}function Sd(){if(Ee!==5)return!1;var e=da,t=xo;xo=0;var a=Ii(Zt),n=v.T,l=D.p;try{D.p=32>a?32:a,v.T=null,a=Mo,Mo=null;var i=da,s=Zt;if(Ee=0,vn=da=null,Zt=0,(W&6)!==0)throw Error(p(331));var o=W;if(W|=4,td(i.current),Pc(i,i.current,s,a),W=o,rl(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Mn,i)}catch{}return!0}finally{D.p=l,v.T=n,bd(e,t)}}function wd(e,t,a){t=ct(a,t),t=io(e.stateNode,t,2),e=la(e,t,2),e!==null&&(kn(e,2),Mt(e))}function ee(e,t,a){if(e.tag===3)wd(e,e,a);else for(;t!==null;){if(t.tag===3){wd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ca===null||!ca.has(n))){e=ct(a,e),a=Ec(2),n=la(t,a,2),n!==null&&(Dc(a,n,t,e),kn(n,2),Mt(n));break}}t=t.return}}function qo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Pm;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Do=!0,l.add(a),e=nh.bind(null,e,t,a),t.then(e,e))}function nh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(Y&a)===a&&(me===4||me===3&&(Y&62914560)===Y&&300>Fe()-hi?(W&2)===0&&bn(e,0):Ao|=a,yn===Y&&(yn=0)),Mt(e)}function Ed(e,t){t===0&&(t=gu()),e=Ma(e,t),e!==null&&(kn(e,t),Mt(e))}function lh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ed(e,a)}function ih(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(t),Ed(e,a)}function sh(e,t){return Qi(e,t)}var wi=null,wn=null,Uo=!1,Ei=!1,zo=!1,ma=0;function Mt(e){e!==wn&&e.next===null&&(wn===null?wi=wn=e:wn=wn.next=e),Ei=!0,Uo||(Uo=!0,uh())}function rl(e,t){if(!zo&&Ei){zo=!0;do for(var a=!1,n=wi;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,o=n.pingedLanes;i=(1<<31-Pe(42|e)+1)-1,i&=l&~(s&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,xd(n,i))}else i=Y,i=xl(n,n===se?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Cn(n,i)||(a=!0,xd(n,i));n=n.next}while(a);zo=!1}}function oh(){Dd()}function Dd(){Ei=Uo=!1;var e=0;ma!==0&&vh()&&(e=ma);for(var t=Fe(),a=null,n=wi;n!==null;){var l=n.next,i=Ad(n,t);i===0?(n.next=null,a===null?wi=l:a.next=l,l===null&&(wn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ei=!0)),n=l}Ee!==0&&Ee!==5||rl(e),ma!==0&&(ma=0)}function Ad(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-Pe(i),o=1<<s,u=l[s];u===-1?((o&a)===0||(o&n)!==0)&&(l[s]=Of(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}if(t=se,a=Y,a=xl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xi(n),Ii(a)){case 2:case 8:a=hu;break;case 32:a=El;break;case 268435456:a=pu;break;default:a=El}return n=Td.bind(null,e),a=Qi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xi(n),e.callbackPriority=2,e.callbackNode=null,2}function Td(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Si()&&e.callbackNode!==a)return null;var n=Y;return n=xl(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(sd(e,n,t),Ad(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Td.bind(null,e):null)}function xd(e,t){if(Si())return null;sd(e,t,!0)}function uh(){Sh(function(){(W&6)!==0?Qi(mu,oh):Dd()})}function Oo(){if(ma===0){var e=sn;e===0&&(e=Dl,Dl<<=1,(Dl&261888)===0&&(Dl=256)),ma=e}return ma}function Md(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function Cd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function rh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Md((l[Ge]||null).action),s=n.submitter;s&&(t=(t=s[Ge]||null)?Md(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var o=new Ol("action","action",null,n,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ma!==0){var u=s?Cd(l,s):new FormData(l);$s(a,{pending:!0,data:u,method:l.method,action:i},null,u)}}else typeof i=="function"&&(o.preventDefault(),u=s?Cd(l,s):new FormData(l),$s(a,{pending:!0,data:u,method:l.method,action:i},i,u))},currentTarget:l}]})}}for(var _o=0;_o<gs.length;_o++){var Ho=gs[_o],ch=Ho.toLowerCase(),dh=Ho[0].toUpperCase()+Ho.slice(1);vt(ch,"on"+dh)}vt(ir,"onAnimationEnd"),vt(sr,"onAnimationIteration"),vt(or,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Mm,"onTransitionRun"),vt(Cm,"onTransitionStart"),vt(km,"onTransitionCancel"),vt(ur,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,m=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;i=o,l.currentTarget=m;try{i(l)}catch(y){Nl(y)}l.currentTarget=null,i=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,m=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;i=o,l.currentTarget=m;try{i(l)}catch(y){Nl(y)}l.currentTarget=null,i=u}}}}function G(e,t){var a=t[Ki];a===void 0&&(a=t[Ki]=new Set);var n=e+"__bubble";a.has(n)||(Rd(t,e,2,!1),a.add(n))}function No(e,t,a){var n=0;t&&(n|=4),Rd(a,e,n,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[Di]){e[Di]=!0,Du.forEach(function(a){a!=="selectionchange"&&(fh.has(a)||No(a,!1,e),No(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,No("selectionchange",!1,t))}}function Rd(e,t,a,n){switch(sf(t)){case 2:var l=Lh;break;case 8:l=Gh;break;default:l=$o}a=l.bind(null,t,a,e),l=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Bo(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===l)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;o!==null;){if(s=Ya(o),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){n=i=s;continue e}o=o.parentNode}}n=n.return}_u(function(){var m=i,y=ts(a),S=[];e:{var h=rr.get(e);if(h!==void 0){var g=Ol,T=e;switch(e){case"keypress":if(Ul(a)===0)break e;case"keydown":case"keyup":g=im;break;case"focusin":T="focus",g=os;break;case"focusout":T="blur",g=os;break;case"beforeblur":case"afterblur":g=os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=um;break;case ir:case sr:case or:g=Ff;break;case ur:g=cm;break;case"scroll":case"scrollend":g=Vf;break;case"wheel":g=fm;break;case"copy":case"cut":case"paste":g=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lu;break;case"toggle":case"beforetoggle":g=hm}var q=(t&4)!==0,le=!q&&(e==="scroll"||e==="scrollend"),d=q?h!==null?h+"Capture":null:h;q=[];for(var r=m,f;r!==null;){var b=r;if(f=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||f===null||d===null||(b=Un(r,d),b!=null&&q.push(dl(r,b,f))),le)break;r=r.return}0<q.length&&(h=new g(h,T,null,a,y),S.push({event:h,listeners:q}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&a!==es&&(T=a.relatedTarget||a.fromElement)&&(Ya(T)||T[Ga]))break e;if((g||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,g?(T=a.relatedTarget||a.toElement,g=m,T=T?Ya(T):null,T!==null&&(le=K(T),q=T.tag,T!==le||q!==5&&q!==27&&q!==6)&&(T=null)):(g=null,T=m),g!==T)){if(q=ju,b="onMouseLeave",d="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(q=Lu,b="onPointerLeave",d="onPointerEnter",r="pointer"),le=g==null?h:qn(g),f=T==null?h:qn(T),h=new q(b,r+"leave",g,a,y),h.target=le,h.relatedTarget=f,b=null,Ya(y)===m&&(q=new q(d,r+"enter",T,a,y),q.target=f,q.relatedTarget=le,b=q),le=b,g&&T)t:{for(q=mh,d=g,r=T,f=0,b=d;b;b=q(b))f++;b=0;for(var k=r;k;k=q(k))b++;for(;0<f-b;)d=q(d),f--;for(;0<b-f;)r=q(r),b--;for(;f--;){if(d===r||r!==null&&d===r.alternate){q=d;break t}d=q(d),r=q(r)}q=null}else q=null;g!==null&&qd(S,h,g,q,!1),T!==null&&le!==null&&qd(S,le,T,q,!0)}}e:{if(h=m?qn(m):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var Z=Ku;else if(Zu(h))if(Wu)Z=Am;else{Z=Em;var C=wm}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&$i(m.elementType)&&(Z=Ku):Z=Dm;if(Z&&(Z=Z(e,m))){Iu(S,Z,a,y);break e}C&&C(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Pi(h,"number",h.value)}switch(C=m?qn(m):window,e){case"focusin":(Zu(C)||C.contentEditable==="true")&&(Ja=C,ms=m,Ln=null);break;case"focusout":Ln=ms=Ja=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,nr(S,a,y);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":nr(S,a,y)}var j;if(rs)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Fa?Xu(e,a)&&(Q="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Q="onCompositionStart");Q&&(Gu&&a.locale!=="ko"&&(Fa||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Fa&&(j=Hu()):(Jt=y,ls="value"in Jt?Jt.value:Jt.textContent,Fa=!0)),C=Ai(m,Q),0<C.length&&(Q=new Bu(Q,e,null,a,y),S.push({event:Q,listeners:C}),j?Q.data=j:(j=Vu(a),j!==null&&(Q.data=j)))),(j=gm?ym(e,a):vm(e,a))&&(Q=Ai(m,"onBeforeInput"),0<Q.length&&(C=new Bu("onBeforeInput","beforeinput",null,a,y),S.push({event:C,listeners:Q}),C.data=j)),rh(S,e,m,a,y)}kd(S,t)})}function dl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ai(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Un(e,a),l!=null&&n.unshift(dl(e,l,i)),l=Un(e,t),l!=null&&n.push(dl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qd(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var o=a,u=o.alternate,m=o.stateNode;if(o=o.tag,u!==null&&u===n)break;o!==5&&o!==26&&o!==27||m===null||(u=m,l?(m=Un(a,i),m!=null&&s.unshift(dl(a,m,u))):l||(m=Un(a,i),m!=null&&s.push(dl(a,m,u)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var hh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(ph,"")}function zd(e,t){return t=Ud(t),Ud(e)===t}function ne(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ia(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ia(e,""+n);break;case"className":Cl(e,"class",n);break;case"tabIndex":Cl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(e,a,n);break;case"style":zu(e,n,i);break;case"data":if(t!=="object"){Cl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Rl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",l.name,l,null),ne(e,t,"formEncType",l.formEncType,l,null),ne(e,t,"formMethod",l.formMethod,l,null),ne(e,t,"formTarget",l.formTarget,l,null)):(ne(e,t,"encType",l.encType,l,null),ne(e,t,"method",l.method,l,null),ne(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Rl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=qt);break;case"onScroll":n!=null&&G("scroll",e);break;case"onScrollEnd":n!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Rl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":G("beforetoggle",e),G("toggle",e),Ml(e,"popover",n);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ml(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qf.get(a)||a,Ml(e,a,n))}}function Lo(e,t,a,n,l,i){switch(a){case"style":zu(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ia(e,n):(typeof n=="number"||typeof n=="bigint")&&Ia(e,""+n);break;case"onScroll":n!=null&&G("scroll",e);break;case"onScrollEnd":n!=null&&G("scrollend",e);break;case"onClick":n!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Au.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Ge]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ml(e,a,n)}}}function ke(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ne(e,t,i,s,a,null)}}l&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":G("invalid",e);var o=i=s=l=null,u=null,m=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":l=y;break;case"type":s=y;break;case"checked":u=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:ne(e,t,n,y,a,null)}}ku(e,i,o,u,m,s,l,!1);return;case"select":G("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":s=o;break;case"multiple":n=o;default:ne(e,t,l,o,a,null)}t=i,a=s,e.multiple=!!n,t!=null?Za(e,!!n,t,!1):a!=null&&Za(e,!!n,a,!0);return;case"textarea":G("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":n=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:ne(e,t,s,o,a,null)}qu(e,n,l,i);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,u,n,a,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(n=0;n<cl.length;n++)G(cl[n],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ne(e,t,m,n,a,null)}return;default:if($i(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Lo(e,t,y,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&ne(e,t,o,n,a,null))}function gh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,o=null,u=null,m=null,y=null;for(g in a){var S=a[g];if(a.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":u=S;default:n.hasOwnProperty(g)||ne(e,t,g,null,n,S)}}for(var h in n){var g=n[h];if(S=a[h],n.hasOwnProperty(h)&&(g!=null||S!=null))switch(h){case"type":i=g;break;case"name":l=g;break;case"checked":m=g;break;case"defaultChecked":y=g;break;case"value":s=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,t));break;default:g!==S&&ne(e,t,h,g,n,S)}}Ji(e,s,o,u,m,y,i,l);return;case"select":g=s=o=h=null;for(i in a)if(u=a[i],a.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":g=u;default:n.hasOwnProperty(i)||ne(e,t,i,null,n,u)}for(l in n)if(i=n[l],u=a[l],n.hasOwnProperty(l)&&(i!=null||u!=null))switch(l){case"value":h=i;break;case"defaultValue":o=i;break;case"multiple":s=i;default:i!==u&&ne(e,t,l,i,n,u)}t=o,a=s,n=g,h!=null?Za(e,!!a,h,!1):!!n!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":g=h=null;for(o in a)if(l=a[o],a.hasOwnProperty(o)&&l!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ne(e,t,o,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":h=l;break;case"defaultValue":g=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(p(91));break;default:l!==i&&ne(e,t,s,l,n,i)}Ru(e,h,g);return;case"option":for(var T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!n.hasOwnProperty(T))switch(T){case"selected":e.selected=!1;break;default:ne(e,t,T,null,n,h)}for(u in n)if(h=n[u],g=a[u],n.hasOwnProperty(u)&&h!==g&&(h!=null||g!=null))switch(u){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ne(e,t,u,h,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in a)h=a[q],a.hasOwnProperty(q)&&h!=null&&!n.hasOwnProperty(q)&&ne(e,t,q,null,n,h);for(m in n)if(h=n[m],g=a[m],n.hasOwnProperty(m)&&h!==g&&(h!=null||g!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,t));break;default:ne(e,t,m,h,n,g)}return;default:if($i(t)){for(var le in a)h=a[le],a.hasOwnProperty(le)&&h!==void 0&&!n.hasOwnProperty(le)&&Lo(e,t,le,void 0,n,h);for(y in n)h=n[y],g=a[y],!n.hasOwnProperty(y)||h===g||h===void 0&&g===void 0||Lo(e,t,y,h,n,g);return}}for(var d in a)h=a[d],a.hasOwnProperty(d)&&h!=null&&!n.hasOwnProperty(d)&&ne(e,t,d,null,n,h);for(S in n)h=n[S],g=a[S],!n.hasOwnProperty(S)||h===g||h==null&&g==null||ne(e,t,S,h,n,g)}function Od(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,o=l.duration;if(i&&o&&Od(s)){for(s=0,o=l.responseEnd,n+=1;n<a.length;n++){var u=a[n],m=u.startTime;if(m>o)break;var y=u.transferSize,S=u.initiatorType;y&&Od(S)&&(u=u.responseEnd,s+=y*(u<o?1:(o-m)/(u-m)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Go=null,Yo=null;function Ti(e){return e.nodeType===9?e:e.ownerDocument}function _d(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=null;function vh(){var e=window.event;return e&&e.type==="popstate"?e===Xo?!1:(Xo=e,!0):(Xo=null,!1)}var Nd=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(wh)}:Nd;function wh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Bd(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Tn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")fl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,fl(a);for(var i=a.firstChild;i;){var s=i.nextSibling,o=i.nodeName;i[Rn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&fl(e.ownerDocument.body);a=l}while(a);Tn(t)}function Ld(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vo(a),Wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function Dh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pt(e.nextSibling),e===null))return null;return e}function Gd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Zo(e){return e.data==="$?"||e.data==="$~"}function Io(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ah(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ko=null;function Yd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xd(e,t,a){switch(t=Ti(a),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function fl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wi(e)}var gt=new Map,Vd=new Set;function xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=D.d;D.d={f:Th,r:xh,D:Mh,C:Ch,L:kh,m:Rh,X:Uh,S:qh,M:zh};function Th(){var e=It.f(),t=yi();return e||t}function xh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?uc(t):It.r(e)}var En=typeof document>"u"?null:document;function Zd(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var l=ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Vd.has(l)||(Vd.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ke(t,"link",e),De(t),n.head.appendChild(t)))}}function Mh(e){It.D(e),Zd("dns-prefetch",e,null)}function Ch(e,t){It.C(e,t),Zd("preconnect",e,t)}function kh(e,t,a){It.L(e,t,a);var n=En;if(n&&e&&t){var l='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ut(a.imageSizes)+'"]')):l+='[href="'+ut(e)+'"]';var i=l;switch(t){case"style":i=Dn(e);break;case"script":i=An(e)}gt.has(i)||(e=z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),gt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(ml(i))||t==="script"&&n.querySelector(hl(i))||(t=n.createElement("link"),ke(t,"link",e),De(t),n.head.appendChild(t)))}}function Rh(e,t){It.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=An(e)}if(!gt.has(i)&&(e=z({rel:"modulepreload",href:e},t),gt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(i)))return}n=a.createElement("link"),ke(n,"link",e),De(n),a.head.appendChild(n)}}}function qh(e,t,a){It.S(e,t,a);var n=En;if(n&&e){var l=Xa(n).hoistableStyles,i=Dn(e);t=t||"default";var s=l.get(i);if(!s){var o={loading:0,preload:null};if(s=n.querySelector(ml(i)))o.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=gt.get(i))&&Wo(e,a);var u=s=n.createElement("link");De(u),ke(u,"link",e),u._p=new Promise(function(m,y){u.onload=m,u.onerror=y}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Mi(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:o},l.set(i,s)}}}function Uh(e,t){It.X(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,l=An(e),i=n.get(l);i||(i=a.querySelector(hl(l)),i||(e=z({src:e,async:!0},t),(t=gt.get(l))&&Fo(e,t),i=a.createElement("script"),De(i),ke(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function zh(e,t){It.M(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,l=An(e),i=n.get(l);i||(i=a.querySelector(hl(l)),i||(e=z({src:e,async:!0,type:"module"},t),(t=gt.get(l))&&Fo(e,t),i=a.createElement("script"),De(i),ke(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Id(e,t,a,n){var l=(l=B.current)?xi(l):null;if(!l)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Dn(a.href),a=Xa(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dn(a.href);var i=Xa(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(ml(e)))&&!i._p&&(s.instance=i,s.state.loading=5),gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gt.set(e,a),i||Oh(l,e,a,s.state))),t&&n===null)throw Error(p(528,""));return s}if(t&&n!==null)throw Error(p(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=An(a),a=Xa(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Dn(e){return'href="'+ut(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function Kd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Oh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ke(t,"link",a),De(t),e.head.appendChild(t))}function An(e){return'[src="'+ut(e)+'"]'}function hl(e){return"script[async]"+e}function Wd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,De(n),n;var l=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),De(n),ke(n,"style",l),Mi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Dn(a.href);var i=e.querySelector(ml(l));if(i)return t.state.loading|=4,t.instance=i,De(i),i;n=Kd(a),(l=gt.get(l))&&Wo(n,l),i=(e.ownerDocument||e).createElement("link"),De(i);var s=i;return s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),ke(i,"link",n),t.state.loading|=4,Mi(i,a.precedence,e),t.instance=i;case"script":return i=An(a.src),(l=e.querySelector(hl(i)))?(t.instance=l,De(l),l):(n=a,(l=gt.get(i))&&(n=z({},a),Fo(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),De(l),ke(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Mi(n,a.precedence,e));return t.instance}function Mi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var o=n[s];if(o.dataset.precedence===t)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ci=null;function Fd(e,t,a){if(Ci===null){var n=new Map,l=Ci=new Map;l.set(a,n)}else l=Ci,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Rn]||i[Te]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var o=n.get(s);o?o.push(i):n.set(s,[i])}}return n}function Jd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function _h(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Dn(n.href),i=t.querySelector(ml(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,De(i);return}i=t.ownerDocument||t,n=Kd(n),(l=gt.get(l))&&Wo(n,l),i=i.createElement("link"),De(i);var s=i;s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),ke(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Jo=0;function Nh(e,t){return e.stylesheets&&e.count===0&&qi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&qi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Jo===0&&(Jo=62500*yh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Jo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function qi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(jh,e),Ri=null,ki.call(e))}function jh(e,t){if(!(t.state.loading&4)){var a=Ri.get(e);if(a)var n=a.get(null);else{a=new Map,Ri.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=ki.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var pl={$$typeof:Re,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Bh(e,t,a,n,l,i,s,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function $d(e,t,a,n,l,i,s,o,u,m,y,S){return e=new Bh(e,t,a,s,u,m,y,S,o),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=ks(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},zs(i),e}function ef(e){return e?(e=en,e):en}function tf(e,t,a,n,l,i){l=ef(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=la(e,n,t),a!==null&&(Ie(a,e,t),In(a,e,t))}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Po(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function nf(e){if(e.tag===13||e.tag===31){var t=Ma(e,67108864);t!==null&&Ie(t,e,67108864),Po(e,67108864)}}function lf(e){if(e.tag===13||e.tag===31){var t=it();t=Zi(t);var a=Ma(e,t);a!==null&&Ie(a,e,t),Po(e,t)}}var Ui=!0;function Lh(e,t,a,n){var l=v.T;v.T=null;var i=D.p;try{D.p=2,$o(e,t,a,n)}finally{D.p=i,v.T=l}}function Gh(e,t,a,n){var l=v.T;v.T=null;var i=D.p;try{D.p=8,$o(e,t,a,n)}finally{D.p=i,v.T=l}}function $o(e,t,a,n){if(Ui){var l=eu(n);if(l===null)Bo(e,t,n,zi,a),of(e,n);else if(Qh(l,e,t,a,n))n.stopPropagation();else if(of(e,n),t&4&&-1<Yh.indexOf(e)){for(;l!==null;){var i=Qa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ea(i.pendingLanes);if(s!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var u=1<<31-Pe(s);o.entanglements[1]|=u,s&=~u}Mt(i),(W&6)===0&&(pi=Fe()+500,rl(0))}}break;case 31:case 13:o=Ma(i,2),o!==null&&Ie(o,i,2),yi(),Po(i,2)}if(i=eu(n),i===null&&Bo(e,t,n,zi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Bo(e,t,n,null,a)}}function eu(e){return e=ts(e),tu(e)}var zi=null;function tu(e){if(zi=null,e=Ya(e),e!==null){var t=K(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=Ue(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zi=e,null}function sf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mf()){case mu:return 2;case hu:return 8;case El:case Cf:return 32;case pu:return 268435456;default:return 32}default:return 32}}var au=!1,pa=null,ga=null,ya=null,gl=new Map,yl=new Map,va=[],Yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function of(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function vl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&nf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Qh(e,t,a,n,l){switch(t){case"focusin":return pa=vl(pa,e,t,a,n,l),!0;case"dragenter":return ga=vl(ga,e,t,a,n,l),!0;case"mouseover":return ya=vl(ya,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return gl.set(i,vl(gl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,yl.set(i,vl(yl.get(i)||null,e,t,a,n,l)),!0}return!1}function uf(e){var t=Ya(e.target);if(t!==null){var a=K(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,wu(e.priority,function(){lf(a)});return}}else if(t===31){if(t=Ue(a),t!==null){e.blockedOn=t,wu(e.priority,function(){lf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Qa(a),t!==null&&nf(t),e.blockedOn=a,!1;t.shift()}return!0}function rf(e,t,a){Oi(e)&&a.delete(t)}function Xh(){au=!1,pa!==null&&Oi(pa)&&(pa=null),ga!==null&&Oi(ga)&&(ga=null),ya!==null&&Oi(ya)&&(ya=null),gl.forEach(rf),yl.forEach(rf)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,Xh)))}var Hi=null;function cf(e){Hi!==e&&(Hi=e,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Hi===e&&(Hi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(tu(n||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,$s(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Tn(e){function t(u){return _i(u,e)}pa!==null&&_i(pa,e),ga!==null&&_i(ga,e),ya!==null&&_i(ya,e),gl.forEach(t),yl.forEach(t);for(var a=0;a<va.length;a++){var n=va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[Ge]||null;if(typeof i=="function")s||cf(a);else if(s){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Ge]||null)o=s.formAction;else if(tu(l)!==null)continue}else o=s.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),cf(a)}}}function df(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function nu(e){this._internalRoot=e}Ni.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var a=t.current,n=it();tf(a,n,e,t,null,null)},Ni.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tf(e.current,2,null,e,null,null),yi(),t[Ga]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&uf(e)}};var ff=de.version;if(ff!=="19.2.0")throw Error(p(527,ff,"19.2.0"));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=E(t),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var Vh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{Mn=ji.inject(Vh),Je=ji}catch{}}return Sl.createRoot=function(e,t){if(!U(e))throw Error(p(299));var a=!1,n="",l=vc,i=bc,s=Sc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=$d(e,1,!1,null,null,a,n,null,l,i,s,df),e[Ga]=t.current,jo(e),new nu(t)},Sl.hydrateRoot=function(e,t,a){if(!U(e))throw Error(p(299));var n=!1,l="",i=vc,s=bc,o=Sc,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=$d(e,1,!0,t,a??null,n,l,u,i,s,o,df),t.context=ef(null),a=t.current,n=it(),n=Zi(n),l=na(n),l.callback=null,la(a,l,n),a=n,t.current.lanes=a,kn(t,a),Mt(t),e[Ga]=t.current,jo(e),new Ni(t)},Sl.version="19.2.0",Sl}var Ef;function tp(){if(Ef)return su.exports;Ef=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(de){console.error(de)}}return x(),su.exports=ep(),su.exports}var ap=tp();function np(){const[x,de]=Df.useState(null),F=[{id:1,question:"1. Define System and list its characteristics.",answer:"",codeExample:`
💻 Q: Define System and List its Characteristics
🧠 Definition:

A system is a set of components (parts) that work together to achieve a common goal or purpose.
Each part of the system interacts with others to perform specific tasks.


✅ Example:
A computer system includes hardware, software, and users — all working together to process data and produce output.


⚙️ Characteristics of a System:

1️⃣ Organization –
  All parts of a system are arranged in a specific order and work in coordination.


2️⃣ Interaction –
  Each part of the system communicates and depends on other parts.


3️⃣ Interdependence –
  If one part fails, it can affect the whole system.


4️⃣ Integration –
  All subsystems are combined to work as one complete unit.


5️⃣ Central Objective –
  Every system works to achieve a common goal or purpose.


6️⃣ Boundary –
  A system has defined limits that separate it from its environment.


7️⃣ Input and Output –
  A system takes input, processes it, and produces output.


8️⃣ Feedback –
  The system uses feedback to make improvements or corrections.



✅ Example:

    In a Library Management System:
    Input: Book details, member details
    Process: Check-in / check-out
    Output: Updated records, reports
    Goal: Manage library operations efficiently

      `},{id:2,question:"2. Explain the DIKW Pyramid with neat diagram.",answer:"",codeExample:`
🧠 Q: Explain the DIKW Pyramid with Neat Diagram

📘 Definition:

The DIKW Pyramid represents the hierarchy of Data, Information, Knowledge, and Wisdom.
It shows how raw data is transformed step-by-step into useful wisdom for decision-making.

🔺 DIKW Pyramid Diagram (Text Representation)

        WISDOM
          ▲
          |
       KNOWLEDGE
          ▲
          |
      INFORMATION
          ▲
          |
         DATA

📊 1️⃣ Data:

Raw facts and figures without context or meaning.
It is the lowest level of the pyramid.

✅ Example:
100, 200, 300 (Just numbers – no meaning yet)


💡 2️⃣ Information:

When data is processed and given meaning, it becomes information.
It answers “What?”

✅ Example:
Sales for January, February, March are 100, 200, 300.


🧩 3️⃣ Knowledge:

Information that is analyzed and understood to find patterns or relationships.
It answers “How?”

✅ Example:
Sales are increasing every month — by 100 units.


🌟 4️⃣ Wisdom:

The highest level, where knowledge is used for good decision-making.
It answers “Why?” and “What should be done?”

✅ Example:
Increase production next month because sales are growing steadily.



✅ Summary Table:

| Level       | Meaning                     | Example                  |
| ----------- | --------------------------- | ------------------------ |
| Data        | Raw facts                   | 100, 200, 300            |
| Information | Processed data              | Sales in Jan–Mar         |
| Knowledge   | Analysis of information     | Sales increasing monthly |
| Wisdom      | Decision based on knowledge | Increase production      |


🌍 In Short:

Data → Information → Knowledge → Wisdom
Each step adds more meaning, value, and understanding to the previous one.


      `},{id:3,question:"3. Explain categories of Information System with examples.",answer:"",codeExample:`
📘 Definition:

An Information System (IS) is a system that collects, processes, stores, and distributes information to support decision-making and control in an organization.
Different types of information systems are used at different management levels.

🏢 Categories of Information Systems

1️⃣ Transaction Processing System (TPS)

Purpose: Handles and records daily routine transactions of an organization.
Used by: Operational-level employees.
Example: Billing system, payroll system, order processing system.

✅ Example:
When a cashier enters a sale in a supermarket, the TPS records the transaction.



2️⃣ Management Information System (MIS)

Purpose: Provides reports and summaries from TPS data for middle management.
Used by: Managers for planning and monitoring.
Example: Monthly sales reports, inventory reports.

✅ Example:
An MIS report showing total sales of each branch for the last month.



3️⃣ Decision Support System (DSS)

Purpose: Helps managers make non-routine and complex decisions using analytical tools.
Used by: Middle and upper management.
Example: Profit forecasting, “what-if” analysis.

✅ Example:
A DSS predicting future sales based on past data and trends.



4️⃣ Executive Information System (EIS)

Purpose: Provides top executives with summary and visualization of key business performance indicators.
Used by: Senior/top-level management.
Example: Dashboards showing company performance, revenue, or market trends.

✅ Example:
A CEO checking a dashboard that shows company profits by region.



5️⃣ Expert System (ES)

Purpose: Uses Artificial Intelligence (AI) to mimic human expert decision-making.
Used by: Specialists and analysts.
Example: Medical diagnosis system, credit approval system.

✅ Example:
A medical expert system suggesting treatments based on symptoms.



🧾 Summary Table:

| Type | Purpose                   | Example                  |
| ---- | ------------------------- | ------------------------ |
| TPS  | Record daily transactions | Payroll, billing system  |
| MIS  | Give summarized reports   | Sales summary report     |
| DSS  | Help in decision-making   | Forecasting sales        |
| EIS  | Support executives        | Performance dashboard    |
| ES   | Work like human experts   | Medical diagnosis system |



🌟 In Short:

Each type of information system supports different levels of management:

Executives → EIS
Managers → MIS, DSS
Employees → TPS
Experts → ES
      
      `},{id:4,question:"4. Write short note on System Analyst and its roles.",answer:"",codeExample:`
🧠 Q: Write Short Note on System Analyst and Its Roles
📘 Definition:

A System Analyst is a person who studies, designs, and implements information systems to solve business problems effectively.
They act as a bridge between the users (clients) and the technical team (developers).


👨‍💼 Main Roles of a System Analyst:

1. Problem Identification:

Understands the existing system and finds problems or areas for improvement.
Example: Identifying delay in generating reports in a company.


2. Requirement Analysis:

Collects and defines user requirements through interviews, surveys, etc.
Example: Asking users what features they need in the new system.


3. System Design:

Prepares the structure and layout of the new system (input, output, database).
Example: Designing data flow diagrams and screen layouts.


4. Coordination:

Acts as a link between users, management, and developers.
Example: Explaining user needs to programmers in technical terms.


5. Testing and Implementation:

Helps in system testing, debugging, and installing the system.
Example: Checking if the new payroll system works correctly before launch.


6. Maintenance and Support:

Monitors the system after implementation and fixes any issues.
Example: Updating the software to add new features.




🧾 In Short:

A System Analyst ensures that the developed system meets user needs, works efficiently, and improves productivity.


✅ Example:

In a hospital, a System Analyst designs a patient management system that helps doctors access reports, manage appointments, and reduce paperwork.

      `},{id:5,question:"5. Define Software and explain its components.",answer:"",codeExample:`
🧠 Q: Define Software and Explain Its Components
📘 Definition:

Software is a set of programs, data, and instructions that tell a computer how to perform specific tasks.
It is the intangible part of a computer system (you can’t touch it like hardware).

✅ Example: MS Word, Chrome, Calculator, Operating System.



⚙️ Components of Software

Software mainly has two major components:

System Software
Application Software

Let’s understand both 👇


1️⃣ System Software

It controls and manages the hardware and system operations of the computer.
It helps other software to run smoothly.
Acts as a bridge between user and hardware.

✅ Examples:

Operating System (Windows, Linux)
Utility Programs (Antivirus, Disk Cleanup)
Device Drivers (Printer driver)


2️⃣ Application Software

It performs specific tasks for the user.
Designed for end users to solve real-world problems.

✅ Examples:

MS Word – for typing documents
MS Excel – for calculations
VLC Media Player – for playing videos



💡 Additional Components (Optional but Important):


3️⃣ Programming Software

Used by developers to create other software.
Includes tools like compilers, editors, and debuggers.

✅ Example: Java, Python IDEs.


4️⃣ Middleware

Connects different applications or systems so they can share data.

✅ Example: Database connectivity software (like MySQL connector).



🧾 Summary:

| Component            | Purpose                    | Example            |
| -------------------- | -------------------------- | ------------------ |
| System Software      | Runs and controls hardware | Windows, Linux     |
| Application Software | Solves user problems       | Word, Excel        |
| Programming Software | Helps develop programs     | Java, C++          |
| Middleware           | Connects systems           | Database connector |



🧠 In Short:

Software = Programs + Data + Instructions
It tells the computer what to do and how to do it.

      `},{id:6,question:"6. Explain Software Engineering definitions by Fritz Bauer and IEEE.",answer:"",codeExample:`
🧠 Q: Explain Software Engineering Definitions by Fritz Bauer and IEEE

📘 1️⃣ Definition by Fritz Bauer (1972):

“Software engineering is the establishment and use of sound engineering principles in order 
to obtain economically software that is reliable and works efficiently on real machines.”


✅ Simple Meaning:

Software engineering means applying engineering methods to develop software.
The software should be:
    Reliable → works correctly,
    Efficient → uses less time and memory,
    Economical → cost-effective.

💡 Example:
Like civil engineers use principles to design strong buildings, 
software engineers use principles to build strong and reliable software systems.



📘 2️⃣ Definition by IEEE (Institute of Electrical and Electronics Engineers):

“Software engineering is the application of a systematic, disciplined, 
and quantifiable approach to the development, operation, and maintenance of software.”


✅ Simple Meaning:

Software engineering uses a step-by-step (systematic) process.
It ensures the software is:
    Well-planned and tested,
    Easy to maintain,
    Measurable in quality and performance.

💡 Example:
When developing a banking system, engineers follow stages like requirement analysis → design → coding → testing → maintenance.



🧾 In Short:

| Definition      | Key Points                                                                       | Focus                |
| --------------- | -------------------------------------------------------------------------------- | -------------------- |
| Fritz Bauer     | Uses engineering principles to make reliable, efficient, and economical software | Quality & Efficiency |
| IEEE            | Follows systematic and measurable approach to develop and maintain software      | Process & Discipline |


✅ Summary:

Fritz Bauer focuses on quality and efficiency,
IEEE focuses on systematic and disciplined process of software development.


      `},{id:7,question:"7. Explain Software Engineering Layers with diagram.",answer:"",codeExample:`
🧠 Q: Explain Software Engineering Layers with Diagram
📘 Definition:

Software Engineering is built on four key layers — each layer supports the others to ensure the development of high-quality software.
These layers represent the foundation and structure of software engineering.

🏗️ 🔹 Four Layers of Software Engineering

1️⃣ Quality Focus (Core Layer)

The center of all software engineering activities.
It means maintaining high quality in every step — from planning to maintenance.
Ensures the software is reliable, maintainable, and efficient.

✅ Example: Testing every module before release.


2️⃣ Process Layer

Defines the framework or set of activities used to build software.
Includes stages like planning, designing, coding, testing, and maintenance.
Provides a systematic approach to achieve quality.

✅ Example: Following the Waterfall Model or Agile Process.


3️⃣ Methods Layer

Provides technical methods and techniques to build software.

Includes:

Requirement analysis
Design techniques
Coding methods
Testing methods

✅ Example: Using UML diagrams, DFDs, or test cases.


4️⃣ Tools Layer

Provides software tools and automated support for methods and process.
Helps in designing, coding, debugging, testing, and managing projects.

✅ Example:

Eclipse (for coding),
JIRA (for project tracking),
Selenium (for testing).


🧾 Diagram: Software Engineering Layers

     +-----------------------+
     |     Tools Layer       |  ← (Provides automation)
     +-----------------------+
     |    Methods Layer      |  ← (Techniques for development)
     +-----------------------+
     |    Process Layer      |  ← (Framework for work)
     +-----------------------+
     |   Quality Focus (Core) |  ← (Ensures software excellence)
     +-----------------------+



     ✅ In Short:

| Layer         | Purpose                        | Example          |
| ------------- | ------------------------------ | ---------------- |
| Quality Focus | Maintain quality at all stages | Testing, reviews |
| Process       | Framework for development      | Waterfall, Agile |
| Methods       | Technical techniques           | DFD, UML, coding |
| Tools         | Support automation             | Eclipse, JIRA    |


🌟 Summary:

Software Engineering Layers ensure that software is developed systematically, maintains quality, and is supported by proper tools and methods.
      
      
      `},{id:8,question:"8. Explain Generic View of Software Engineering.",answer:"",codeExample:`
🧠 Q: Explain the Generic View of Software Engineering
📘 Definition:

The Generic View of Software Engineering describes the basic framework and main activities that are 
common to all types of software projects — regardless of the size or type 
(web app, mobile app, or system software).

It explains how software is developed systematically — step by step.


⚙️ 🔹 Main Activities in the Generic View

There are five main framework activities in software engineering:


1️⃣ Communication

The first and most important step.
Developers communicate with clients to understand requirements.
Focuses on collecting clear and complete information about what the software should do.

✅ Example:
Interviewing the client to understand features for an online shopping website.



2️⃣ Planning

Defines what needs to be done, when, and by whom.
Includes:
  Scheduling tasks
  Resource allocation
  Estimating cost and time

✅ Example:
Creating a timeline showing development, testing, and release dates.



3️⃣ Modeling

Converts requirements into a design or model of the system.
Focuses on how the system will work — including data flow, structure, and functions.
Uses DFDs, UML diagrams, or ER diagrams.

✅ Example:
Drawing a Data Flow Diagram for a library management system.



4️⃣ Construction

Actual coding and testing phase.
Programmers write code based on the model.
Testing ensures the software works correctly and is error-free.

✅ Example:
Writing Java code for user login and testing it using test cases.



5️⃣ Deployment

The software is delivered to the user for real use.
Includes:
  Installation
  User training
  Maintenance and updates

✅ Example:
Installing the hospital management system on client computers and providing user manuals.



🧾 Diagram: Generic View of Software Engineering

+--------------------------------------------------+
|  Communication → Planning → Modeling →           |
|  Construction → Deployment                       |
+--------------------------------------------------+
         ↑                                   ↓
   Continuous Feedback & Improvement Loop



✅ In Short:

| Activity      | Purpose              | Example                    |
| ------------- | -------------------- | -------------------------- |
| Communication | Gather user needs    | Meeting with client        |
| Planning      | Create project plan  | Schedule & cost estimation |
| Modeling      | Design system        | UML, DFD diagrams          |
| Construction  | Code & test software | Java, Python               |
| Deployment    | Deliver to user      | Installation, training     |


🌟 Summary:

The Generic View of Software Engineering provides a universal process framework that ensures 
all software is developed systematically, efficiently, and with continuous feedback.

      `},{id:9,question:"9. Define Software Process and explain Framework Activities.",answer:"",codeExample:`
🧠 Q: Define Software Process and Explain Framework Activities

📘 Definition of Software Process:

A Software Process is a set of activities and steps used to develop and maintain software.
It describes how software is planned, designed, built, tested, and delivered in a systematic way.

✅ In simple words:

A software process is the “step-by-step method” used to produce high-quality software.


⚙️ 🔹 Framework Activities of Software Process

Every software process model (like Waterfall, Agile, Spiral) follows five main framework activities.

1️⃣ Communication

The first step in any software project.
Developers and clients communicate to understand the requirements of the system.
Helps to identify what the user actually wants.

✅ Example:
Meeting with a client to gather requirements for a school management system.



2️⃣ Planning

Defines what to do, when, and who will do it.
Involves:
  Project scheduling
  Cost and time estimation
  Resource planning

✅ Example:
Creating a Gantt chart to schedule development and testing phases.



3️⃣ Modeling

Focuses on designing the system before writing code.
Converts user requirements into a blueprint (models or diagrams).

Includes:
  Data design (ER diagrams)
  Process design (DFDs, UML diagrams)

✅ Example:
Drawing a UML class diagram for an e-commerce application.



4️⃣ Construction

The actual coding and testing phase.
Developers write code based on the design and test it to ensure correctness and quality.

✅ Example:
Writing and testing Java code for login and payment modules.



5️⃣ Deployment

The final stage where the software is delivered to the user.
Includes:
  Installation
  User training
  Getting feedback
  Maintenance and updates

✅ Example:
Installing the software at the client site and fixing any user issues.


🧾 Diagram: Framework Activities in Software Process

+-----------------------------------------------------+
|  Communication → Planning → Modeling →              |
|  Construction → Deployment                          |
+-----------------------------------------------------+
         ↑                                      ↓
   Continuous Feedback & Maintenance



✅ In Short:

| Activity      | Purpose              | Example           |
| ------------- | -------------------- | ----------------- |
| Communication | Gather requirements  | Client meeting    |
| Planning      | Plan schedule & cost | Gantt chart       |
| Modeling      | Design the system    | UML, DFD          |
| Construction  | Coding and testing   | Writing Java code |
| Deployment    | Deliver and maintain | Installation      |


🌟 Summary:

A Software Process provides a structured approach for software development.
The framework activities ensure that the software is well-planned, correctly built, and properly delivered.
      
      `},{id:10,question:"10. Write and explain SDLC Phases.",answer:"",codeExample:`
🧠 Q: Write and Explain SDLC Phases
📘 Definition:

SDLC (Software Development Life Cycle) is the step-by-step process used to develop software in a structured and efficient way.
It defines how software is planned, developed, tested, and maintained.


✅ In simple words:

SDLC is the life journey of software — from idea to delivery and maintenance.


⚙️ 🔹 Phases of SDLC

There are six main phases in the Software Development Life Cycle:


1️⃣ Requirement Analysis

This is the first and most important phase.
The development team and client discuss and gather requirements.
The goal is to understand what the software should do.

✅ Activities:

Meetings with clients
Requirement documentation
Feasibility study

✅ Output: Software Requirement Specification (SRS)

✅ Example:
Understanding that a school management system must handle students, teachers, and fee management.



2️⃣ System Design

In this phase, the system’s architecture and design are prepared based on the SRS.
It helps developers know how the system will work.

✅ Activities:

Designing database, user interface, and data flow.
Creating ER diagrams, DFDs, UML diagrams.

✅ Output: Design Document

✅ Example:
Creating a database design for student records and attendance.



3️⃣ Implementation (Coding)

The actual coding is done in this phase.
Developers write code using the chosen programming language.
The goal is to convert the design into a working program.

✅ Activities:

Writing and compiling code
Code review

✅ Output: Source Code

✅ Example:
Writing PHP or Java code to create login and dashboard modules.



4️⃣ Testing

After coding, software is tested to find and fix errors (bugs).
Ensures that the software meets user requirements and works properly.

✅ Types of Testing:

  Unit Testing
  Integration Testing
  System Testing
  User Acceptance Testing

✅ Output: Tested Software

✅ Example:
Testing if the login page accepts only correct username and password.



5️⃣ Deployment

The software is installed and delivered to the user or client.
It may be deployed in phases or all at once.

✅ Activities:

Installing software on client systems
Providing training to users

✅ Output: Operational Software

✅ Example:
Installing the school management system on the school’s computers.



6️⃣ Maintenance

After deployment, the software needs updates and bug fixes.
Handles user feedback, new features, and performance improvements.

✅ Activities:

Corrective maintenance (fixing bugs)
Adaptive maintenance (updating for new environment)

✅ Output: Improved and stable software

✅ Example:
Adding a new feature to generate monthly attendance reports.



🧾 Diagram: SDLC Phases

+-----------------------------------------------------------+
| Requirement Analysis → Design → Coding → Testing →        |
| Deployment → Maintenance                                  |
+-----------------------------------------------------------+


✅ In Short:

| Phase                | Purpose               | Example        |
| -------------------- | --------------------- | -------------- |
| Requirement Analysis | Gather user needs     | Client meeting |
| Design               | Plan system structure | DFD, UML       |
| Implementation       | Write program code    | PHP, Java      |
| Testing              | Detect and fix errors | Unit testing   |
| Deployment           | Deliver to user       | Installation   |
| Maintenance          | Update & improve      | Bug fixing     |


🌟 Summary:

The SDLC ensures that software is developed in a systematic way,
reducing errors and improving quality, efficiency, and user satisfaction.
      
      `},{id:11,question:"11. Define Requirement Determination and explain its major activities.",answer:"",codeExample:`
🧠 What is Requirement Determination?

It means finding out what the user wants in a new system or software.

👉 In simple words:

Requirement Determination is the process of understanding user needs before making software.


🏫 Example:

Suppose your college wants new software for student attendance.
Before making it, you must first find out:

  What should the system do?
  Who will use it?
  What problems are there in the old system?

This process of asking and understanding all this = Requirement Determination.

⚙️ Main Activities (Steps)

There are 5 simple steps in requirement determination 👇


1️⃣ Fact Finding

You collect information from users.

🧩 How you collect:

Ask questions (interview)
Give forms (questionnaires)
Watch how they work (observation)

💡 Example:
Ask teachers: “How do you take attendance now?”



2️⃣ Analysis

You study (analyze) the collected information and find:
What problems exist in the current system
What new things users want

💡 Example:
You find teachers want the system to mark attendance automatically.



3️⃣ Documentation

You write down all user requirements clearly in a document called SRS (Software Requirement Specification).

💡 Example:
Write: “The system should allow the teacher to take attendance by subject.”



4️⃣ Feasibility Study

You check if it is possible to make the system.

💡 Example:
Check if your college computers can handle this software and if it’s within the budget.



5️⃣ Validation

You show the requirements to the user again to confirm that everything is correct.

💡 Example:
Ask teachers: “Is this what you wanted?”
If they say yes → move to design phase.



🪜 Simple Flow

Fact Finding → Analysis → Documentation → Feasibility Study → Validation



✅ In Short

| Step                 | Meaning                  | Example           |
| -------------------- | ------------------------ | ----------------- |
| 1. Fact Finding      | Collect user information | Ask teachers      |
| 2. Analysis          | Study the data           | Find problems     |
| 3. Documentation     | Write requirements       | Make SRS file     |
| 4. Feasibility Study | Check possibility        | Budget, computers |
| 5. Validation        | Confirm with users       | Ask if correct    |


💬 Easy Summary:

Requirement Determination = Asking users → Understanding needs → Writing it down clearly → Checking if possible → Getting user approval ✅
      
      
      `},{id:12,question:"12. What is SRS? Explain its purpose and contents.",answer:"",codeExample:`
🧠 What is SRS (Software Requirement Specification)?

SRS stands for Software Requirement Specification.
It is a document that clearly describes what the software will do and how it should perform.

👉 In simple words:

SRS is like a blueprint that explains what the user wants and what the developer will build.


🏆 Purpose of SRS

The main purpose of SRS is to make sure everyone understands the same thing — the client, developer, and tester.

✅ Main purposes:

1. To clearly define user requirements.
2. To avoid misunderstandings between client and developer.
3. To guide designers and programmers.
4. To help in testing (checking if all requirements are met).
5. To control future changes in the system.


🧩 Example:

If you are building a student attendance system, the SRS will describe:

  How attendance will be marked
  Who can log in (teacher, admin)
  How reports are generated
  What should happen if the internet fails



📄 Contents of SRS Document

SRS usually contains 8 main parts:


1️⃣ Introduction

Purpose of the software
Scope (what it will and won’t do)
Definitions and references


2️⃣ Overall Description

Background and objectives
User needs and expectations
System environment (hardware/software)


3️⃣ Functional Requirements

Detailed functions the system must perform

Example: “The system should allow users to log in with a password.”


4️⃣ Non-Functional Requirements

System performance, speed, security, reliability, usability

Example: “The system should load within 3 seconds.”


5️⃣ User Interface Requirements

Layout of screens, buttons, menus

Example: “Login screen should have username and password fields.”


6️⃣ System Features

Each main feature is described in detail.

Example: “Generate monthly attendance reports.”


7️⃣ Constraints

Any limitations like budget, hardware, or time.

Example: “Must run on Windows 10 and above.”


8️⃣ Appendices

Extra information, references, or diagrams.



🧱 Simple Structure of SRS Document
1. Introduction  
2. Overall Description  
3. Functional Requirements  
4. Non-Functional Requirements  
5. User Interface Requirements  
6. System Features  
7. Constraints  
8. Appendices

💬 In Short

SRS is a detailed written agreement between user and developer.
It tells what to build, how it should behave, and the conditions it must meet.      
`},{id:13,question:"13. Explain Fact-Finding Techniques in requirement analysis.",answer:"",codeExample:`
🧠 What is Fact-Finding?

Fact-Finding means collecting information about the current system and user requirements to understand what the new system should do.


👉 In simple words:

Fact-finding = gathering facts from users, documents, and observations to design a better system.


🎯 Purpose of Fact-Finding

To understand user needs clearly.
To find problems in the existing system.
To collect correct and complete data.
To help design an effective new system.

🔍 Fact-Finding Techniques

Here are the 6 main techniques used in requirement analysis 👇


1️⃣ Interview

Direct face-to-face talk with users or stakeholders.
Helps get detailed and personal opinions.

💡 Example:
Asking a teacher: “What problems do you face in taking attendance?”

Advantages: Gets clear and detailed answers.
Disadvantages: Time-consuming if many users.


2️⃣ Questionnaire

A written list of questions given to users to fill in.
Useful when many users are involved.

💡 Example:
Sending a Google form to students about what features they want in the app.

Advantages: Covers many users quickly.
Disadvantages: Answers may be short or unclear.


3️⃣ Observation

Watching how users currently work in real situations.

💡 Example:
Observing how the teacher marks attendance in the register.

Advantages: Gives real and accurate data.
Disadvantages: User behavior may change when being watched.


4️⃣ Document Review

Studying existing documents like reports, forms, policies, or manuals.

💡 Example:
Checking old attendance records or student databases.

Advantages: Provides background details.
Disadvantages: May contain outdated information.


5️⃣ Joint Application Development (JAD)

A group meeting between users, developers, and analysts to discuss requirements together.

💡 Example:
Team meeting between teachers, admin, and developers to decide new system features.

Advantages: Quick agreement and better understanding.
Disadvantages: Needs coordination between many people.


6️⃣ Brainstorming

A creative group discussion where everyone suggests ideas freely.

💡 Example:
Team meeting to suggest ideas for improving attendance tracking.

Advantages: Generates many ideas quickly.
Disadvantages: Can become unorganized without control.

🧾 In Short Summary

| Technique       | Meaning                         | Example                    |
| --------------- | ------------------------------- | -------------------------- |
| Interview       | Ask questions directly to users | Ask teacher about problems |
| Questionnaire   | Collect written answers         | Google form survey         |
| Observation     | Watch how users work            | Observe attendance process |
| Document Review | Study old files and records     | Read student reports       |
| JAD             | Group discussion of all users   | Meeting with staff & admin |
| Brainstorming   | Collect creative ideas          | Discussion to add features |


💬 Simple Reminder:

Fact-finding helps analysts understand the user’s world before starting to design the system.
It’s the first and most important step in requirement analysis. ✅
      
      
      `},{id:14,question:"14. Explain Waterfall Model with diagram, advantages, and disadvantages.",answer:"",codeExample:`
💧 Waterfall Model in Software Engineering
🧠 Definition:

The Waterfall Model is the oldest and simplest model of the Software Development Life Cycle (SDLC).
It works in a step-by-step (sequential) order — once one phase is finished, then only the next phase starts.

👉 In simple words:

The Waterfall Model is like a waterfall — once water flows down, it can’t go back up.
Similarly, once you finish one step, you can’t go back to the previous one easily.

🪜 Phases of the Waterfall Model

There are 6 main phases, shown below 👇

   Requirement Analysis
            ↓
       System Design
            ↓
     Implementation (Coding)
            ↓
        Testing
            ↓
       Deployment
            ↓
      Maintenance


1️⃣ Requirement Analysis

Collect user needs and document them clearly.
Output: SRS (Software Requirement Specification).

🧩 Example: Understanding what users need in a student attendance system.


2️⃣ System Design

Create the blueprint of the system — data flow, database, and interface design.

🧩 Example: Designing database tables and screen layouts.


3️⃣ Implementation (Coding)

Developers write the actual code according to the design.

🧩 Example: Writing PHP or Java code for login and attendance modules.


4️⃣ Testing

Test the system for errors and verify it meets requirements.

🧩 Example: Checking if attendance gets saved properly.


5️⃣ Deployment

Install the system at the user’s place and make it ready to use.

🧩 Example: Installing the attendance system in school computers.


6️⃣ Maintenance

Fix problems, update software, and improve performance after use.

🧩 Example: Adding new reports later if teachers request them.


🏆 Advantages of Waterfall Model

✅ Easy to understand and use.
✅ Step-by-step process (well-organized).
✅ Works well for small and simple projects.
✅ Phases are clearly defined.
✅ Good documentation at every step.


⚠️ Disadvantages of Waterfall Model

❌ Hard to go back to a previous phase.
❌ Not suitable for large or complex projects.
❌ No working software until late in the project.
❌ Changes in requirements are difficult to handle.
❌ More testing comes at the end, so errors found late.



💬 In Short Summary:

| Phase          | Meaning             |
| -------------- | ------------------- |
| Requirement    | What to build       |
| Design         | How to build        |
| Implementation | Coding the design   |
| Testing        | Find and fix errors |
| Deployment     | Deliver software    |
| Maintenance    | Update and improve  |


🧩 Simple Example:

1. Building a Library Management System using Waterfall:
2. First, understand what the library needs (Requirement).
3. Then design the database and screens (Design).
4. Write code for book issuing and return (Implementation).
5. Test it (Testing).
6. Install it in the library (Deployment).
7. Fix or update later (Maintenance).
      
      `},{id:15,question:"15. Explain Incremental Model with example.",answer:"",codeExample:`
🧩 Incremental Model in Software Engineering
🧠 Definition:

The Incremental Model is a software development model where the system is built and delivered in small parts (increments) 
instead of building the whole software at once.


👉 In simple words:

The software is developed step by step, adding new features in each step until the full system is complete.


💡 Key Idea:

You divide the project into smaller modules, build each module (increment), test it, and then move to the next one.

🪜 Phases of Incremental Model

Each increment (or part) follows these steps 👇

   Requirement Analysis → Design → Coding → Testing → Delivery


Each next increment adds new functionality to the previous version.



⚙️ How It Works (Step-by-Step)


1️⃣ Requirement Analysis

Collect requirements and divide them into small parts (increments).

Example: For a shopping app → Login, Add to Cart, Payment, and Order Tracking.


2️⃣ Design

Design the system for the first increment (e.g., Login).


3️⃣ Implementation

Develop and code the first increment.


4️⃣ Testing

Test and deliver the first increment to the user.


5️⃣ Repeat for next increments

Add new features (like Cart, Payment, etc.) step by step.

🧱 Diagram (Text Form)

Increment 1 → Requirement → Design → Code → Test → Deliver
                    ↓
Increment 2 → Requirement → Design → Code → Test → Deliver
                    ↓
Increment 3 → Requirement → Design → Code → Test → Deliver


➡️ Final system = sum of all increments.

🧩 Example

Example: Online Shopping System

| Increment     | Feature Developed            |
| ------------- | ---------------------------- |
| Increment 1   | User Login & Registration    |
| Increment 2   | Product Search & Add to Cart |
| Increment 3   | Payment & Order Confirmation |
| Increment 4   | Order Tracking & Feedback    |

So, users can use basic features (like login) early, while other features are added later.


✅ Advantages

✔ Software is ready in small usable parts.
✔ Users get early working versions.
✔ Easier to test and fix errors.
✔ Changes can be added easily in next increments.
✔ Better customer feedback at each stage.

⚠️ Disadvantages

❌ Needs good planning and design.
❌ Not suitable if requirements are unclear.
❌ Integration of increments can be complex.
❌ More management effort needed.


🧠 In Short

Incremental Model = Software built step by step, each step adds a new feature until the system is complete.


🧾 Simple Example Summary:

Project: Library Management System

  Increment 1: Student registration
  Increment 2: Book issue and return
  Increment 3: Fine calculation
  Increment 4: Reports generation

Each increment adds a working part → final full system.
      
      `},{id:16,question:"16. Write short notes on Evolutionary Models.",answer:"",codeExample:`
🧠 Evolutionary Models in Software Engineering
Definition:

Evolutionary Models are software development models where the system is developed in small steps (evolves gradually) with continuous feedback from the user.


👉 In simple words:

    The software is built, improved, and updated again and again until the final version is ready.

These models focus on developing a simple version first and then improving it through several versions based on user feedback.

💡 Main Idea:

“Build something quickly → Get user feedback → Improve it → Repeat.”


🧱 Types of Evolutionary Models

There are mainly two types 👇

1️⃣ Prototyping Model

A prototype (rough working model) of the software is made first.
Users test it and give feedback.
Then it is improved until the final system is ready.

💬 Example:
Creating a basic demo of an online shopping site → showing to client → improving it based on their suggestions.

✅ Use when: Requirements are not clearly known at the beginning.


2️⃣ Spiral Model

Combines prototyping and Waterfall concepts.

The project moves through four phases in a spiral shape:

1. Planning
2. Risk Analysis
3. Engineering (Development & Testing)
4. Evaluation (Customer Review)

💬 Example:
Banking software developed in multiple rounds, checking risks and feedback each time.

✅ Use when: The project is large and risky.



🪜 General Process of Evolutionary Model
  
  Initial Version → Get Feedback → Refine & Improve → Deliver Next Version → Repeat

Each version is better and more complete than the last.


🏆 Advantages

✔ Users get an early working system.
✔ Easier to make changes as project evolves.
✔ Continuous user feedback improves quality.
✔ Risks are found and solved early.

⚠️ Disadvantages

❌ Requires more communication with users.
❌ Hard to manage if many versions.
❌ Final system may take longer to complete.
❌ Documentation may be less detailed.


💬 In Short:

Evolutionary Models develop software in multiple versions, improving it step by step using user feedback.
It includes Prototyping Model and Spiral Model.


🧩 Simple Example:

Building a mobile app:

1. First version → basic login & home page.
2. Next → add messages & notifications.
3. Next → add profile and settings.
4. Final → add themes & improvements.

Each version evolves → better product!
      
      `},{id:17,question:"17. Explain Prototyping Model and its steps.",answer:"",codeExample:`
🧩 Prototyping Model in Software Engineering
🧠 Definition:

The Prototyping Model is a software development model where a prototype (a working model) 
of the system is built first to understand the requirements better.

👉 In simple words:

  A prototype is a rough version of the final software that helps users see how the system will look and work.

It allows users to interact with the model, give feedback, and help developers refine the final system.


🎯 Purpose of Prototyping:

To understand user requirements clearly.
To reduce misunderstandings between users and developers.
To identify missing or wrong requirements early.
To get quick feedback and improve design.


⚙️ Steps in the Prototyping Model

There are 5 main steps 👇


1️⃣ Requirement Gathering and Analysis

The developer discusses with users to understand what they want.
Only basic and important requirements are collected.

💬 Example:
A client says: “I need an online ticket booking system.”


2️⃣ Quick Design

A simple design (layout or structure) of the system is made.
Focuses only on user interfaces — not the full system.

💬 Example:
Design login page, ticket booking page, and confirmation page.


3️⃣ Build Prototype

Based on the quick design, a prototype (working model) is developed.
It shows how the software will look and function.

💬 Example:
A clickable web demo of the ticket booking process.


4️⃣ User Evaluation (Feedback)

The prototype is shown to the user.
User tests it and gives feedback — what to add, remove, or change.

💬 Example:
User says, “Add seat selection option” or “Change color theme.”


5️⃣ Refinement and Final Product

Developer improves the prototype based on feedback.
Steps 2–4 repeat until the user is satisfied.
Then the final full system is developed and tested.

💬 Example:
After multiple improvements, the final ticket booking system is delivered.


🪜 Flow of Steps:
Requirement Gathering → Quick Design → Build Prototype → Get User Feedback → Refine Prototype → Final System


🏆 Advantages:

✔ Better understanding of user needs.
✔ User involvement increases satisfaction.
✔ Errors detected early.
✔ Reduces risk of failure.
✔ Saves time in final development.

⚠️ Disadvantages:

❌ Can be time-consuming if too many changes.
❌ Users may expect the prototype as the final product.
❌ Poor documentation.
❌ Difficult to manage if requirements keep changing.


💬 Simple Example:

A restaurant app prototype may include:

    Menu display
    Add to cart button
    Order summary


After user feedback, developer adds:

    Table booking option
    Payment feature
    Then final app is built.


🧭 Diagram:

User Requirements
        ↓
   Quick Design
        ↓
  Build Prototype
        ↓
  User Evaluation
        ↓
 Refinement & Final Product



✅ In short:

The Prototyping Model builds a simple working model first, gathers user feedback, and refines it until the final software is ready.
      
      `},{id:18,question:"18. Explain Spiral Model with phases and applications.",answer:"",codeExample:`
🌀 Spiral Model in Software Engineering
🧠 Definition:

The Spiral Model is a risk-driven software development model that combines features of the Waterfall Model and Prototyping Model.

👉 It develops software in loops or spirals, where each spiral represents one phase of the software development process.
Each spiral includes:

    Planning
    Risk Analysis
    Engineering
    Evaluation



⚙️ Concept:

The project is divided into small parts, and each part is developed through several iterations (spirals).
After every spiral, the software is improved and refined.

So —

  Each spiral = one complete development cycle.



🧭 Phases of Spiral Model

There are 4 main phases repeated in each spiral 🔄


1️⃣ Planning Phase

Objectives and requirements are identified.
Alternatives and constraints are discussed.
A plan for the next phase is prepared.

💬 Example:
Collecting user needs for an online shopping system.



2️⃣ Risk Analysis Phase

Possible risks (technical, cost, schedule, etc.) are identified and analyzed.
A prototype may be built to reduce risk.
Solutions are found for potential problems.

💬 Example:
Risk: Payment gateway may fail.
Solution: Use a backup payment method.



3️⃣ Engineering (Development) Phase

Actual design, coding, and testing are done.
Software is developed in parts (modules).

💬 Example:
Develop the login module, product listing module, etc.



4️⃣ Evaluation Phase

Customer evaluates the developed part.
Feedback is collected to improve the next spiral.
If approved, the next spiral starts with new features.

💬 Example:
User tests product listing and suggests changes before moving ahead.



🪜 Diagram of Spiral Model
                 +----------------------+
                 |     Evaluation       |
                 +----------------------+
                          ↑
       +------------------------------------------+
       |                                          |
       |                                          |
       ↓                                          |
+----------------------+                 +----------------------+
|      Planning        |  →  →  →  →  →  |    Risk Analysis     |
+----------------------+                 +----------------------+
                          ↓
                 +----------------------+
                 |     Engineering      |
                 +----------------------+
                 

    link to show diagram propar: https://chatgpt.com/s/m_6901cbaa4f088191b9e21bf8b2b63c1a

Each round (spiral) represents one iteration — adding more features and reducing risks.


🎯 Key Features:

Combines design and prototyping in stages.
Focuses on risk management.
Involves continuous customer feedback.
Software evolves through repeated refinement.


🏆 Advantages:

✔ Risk analysis at every stage.
✔ Good for large and complex projects.
✔ Continuous customer involvement.
✔ Early detection of errors and design issues.
✔ Flexibility to change requirements.

⚠️ Disadvantages:

❌ Costly due to repeated analysis and prototyping.
❌ Needs expert knowledge for risk evaluation.
❌ Time-consuming process.
❌ Not suitable for small projects.


💡 Applications (Where It Is Used):

The Spiral Model is used in:

  Large, high-budget, high-risk projects.
  Systems that need frequent changes.
  Aerospace, defense, banking, and enterprise software.
  Example: NASA and large government software projects.



🧩 Simple Example:

For an Online Banking System:

1. First spiral → Gather requirements, analyze risk of security.
2. Second spiral → Develop login and account view modules.
3. Third spiral → Add fund transfer and bill payment modules.
4. Fourth spiral → Final testing and deployment.



✅ In short:

The Spiral Model develops software in multiple iterations (spirals), combining planning, risk analysis, development, 
and user feedback to deliver a reliable and high-quality product.


      `},{id:19,question:"19. Explain Concurrent Development Model.",answer:"",codeExample:`
⚙️ Concurrent Development Model
🧠 Definition:

The Concurrent Development Model is a software development model in which different activities (like 
design, coding, and testing) are performed simultaneously rather than one after another.

👉 In simple words:

It allows multiple phases of the software development life cycle (SDLC) to happen at the same time.



🧩 Example to understand easily:

Imagine a team developing a chat application 💬

  One team designs the database
  Another team writes the chat message code
  Another team tests the login feature

All these things happen together, not one after another — that’s Concurrent Development ✅


🪜 How it works:

Each activity (like analysis, design, coding, or testing) has states:

  Waiting
  Under development
  Under review
  Completed

When one activity changes state (e.g., design is completed), it triggers the next one (e.g., coding starts).
So, several activities are going on in parallel.



🧭 Phases in Concurrent Development Model:

1. Communication – Collecting and understanding user requirements.
2. Planning – Scheduling work and resources.
3. Modeling – Designing the system.
4. Construction – Coding and testing.
5. Deployment – Delivering and maintaining the system.

These can overlap.
For example: while construction is going on, the next module’s design can start.



🌀 Diagram (Text Form):

 +------------------+      +------------------+      +------------------+
 |  Communication   | <--> |     Planning     | <--> |     Modeling     |
 +------------------+      +------------------+      +------------------+
          ↑                          ↑                        ↑
          |                          |                        |
          ↓                          ↓                        ↓
     Construction  <------------------------------>   Deployment

  show diagram live : https://chatgpt.com/s/m_6901d2b8d3548191a7b3495f47b9ed3d


Each phase can be active at the same time, depending on the progress of others.

🏆 Advantages:

✔ Faster development since tasks overlap.
✔ Better teamwork — different teams can work together.
✔ Easier to manage changes during development.
✔ Suitable for large and complex projects.
✔ Encourages continuous integration and testing.

⚠️ Disadvantages:

❌ Hard to manage if teams are not well-coordinated.
❌ Complex project planning.
❌ Needs good communication among teams.
❌ Difficult to track progress of all phases.



🎯 Best Used For:

Large systems developed by multiple teams
Real-time or parallel projects
Continuous delivery or Agile environments
Example: Operating systems, big web apps, or enterprise software.


✅ In short:

The Concurrent Development Model allows all SDLC phases to run in parallel, helping large teams build software faster and handle changes easily.
      
      
      `},{id:20,question:"20. Explain Feasibility Study and its types.",answer:"",codeExample:`
  💡 Feasibility Study
🧠 Definition:

A Feasibility Study is the first step before starting any software project.
It helps to check whether the project is possible or not — practically, technically, and financially.

👉 In simple words:

Feasibility study means checking if the project can be done successfully with the available time, money, and technology.


🎯 Purpose of Feasibility Study:

To decide whether to start or drop the project.
To find possible problems before starting.
To ensure the project is profitable, useful, and realistic.



🧩 Types of Feasibility:

1. Technical Feasibility

Checks if the technology and tools needed for the project are available and capable.

🧱 Example:
Can we build a mobile app using our current programming skills and software tools?

✔ Checks:

Hardware & software availability
Technical skills of the team
Compatibility with existing systems



2. Economic Feasibility

Checks if the project is cost-effective — that is, whether the benefits are greater than the cost.

💰 Example:
If building an app costs ₹5 lakh but brings ₹10 lakh in return — it’s economically feasible.

✔ Checks:

Development cost
Expected profit or savings
Cost–benefit analysis


3. Operational Feasibility

Checks if the project will actually work in the real environment and if users will accept it.

⚙️ Example:
Will restaurant staff easily use the new order management app?

✔ Checks:

User friendliness
Acceptance by users
Smooth working in daily use


4. Schedule Feasibility

Checks if the project can be completed on time.

⏰ Example:
Can we launch the app in 3 months as planned?

✔ Checks:

Project deadlines
Resource availability
Time estimation


5. Legal Feasibility

Checks if the project follows all laws and regulations.

⚖️ Example:
An app collecting user data must follow data privacy laws.

✔ Checks:

Copyrights, patents
Data protection policies
Industry rules


🧾 Example Scenario:

Let’s say a company wants to build an online food delivery system 🍔

Before starting, they do:

  Technical check: Do we have developers and tools to make it?
  Economic check: Will profit cover the cost?
  Operational check: Will restaurants and customers use it?
  Schedule check: Can we launch before the festival season?

Legal check: Are we following FSSAI and data laws?

If all answers are “Yes” → Project is feasible ✅



🏁 In Short:

Feasibility Study helps in deciding if a project is worth doing by checking its technical, economic, operational, schedule, and legal aspects before starting development.
  
      `},{id:21,question:"21. Explain Requirement Engineering Tasks.",answer:"",codeExample:`
🧠 Requirement Engineering (RE)
Definition:

Requirement Engineering is the process of finding out, analyzing, documenting, and managing what the user needs from a software system.

👉 In simple words:

Requirement Engineering means understanding what the customer wants and making sure the software is built according to those needs.


🎯 Purpose of Requirement Engineering

To clearly understand what to build before starting development.
To avoid confusion between user needs and developer understanding.
To ensure the software meets all user requirements.


🧩 Requirement Engineering Tasks


There are five main tasks involved 👇


1️⃣ Requirement Elicitation (Gathering)

This is the first step — collecting information from the client or user.

🧱 Activities include:

Conducting interviews
Sending questionnaires
Observing existing systems
Brainstorming sessions

💬 Example:
Asking a restaurant owner:
“What features do you want in your table and order management app?”



2️⃣ Requirement Analysis

In this step, all collected requirements are examined, grouped, and analyzed to understand them properly.

🧱 Activities include:

Finding conflicts or unclear points
Identifying functional and non-functional requirements
Checking feasibility

💬 Example:
Functional → “App should print bills.”
Non-functional → “Bill should print within 2 seconds.”



3️⃣ Requirement Specification

Here, the analyzed requirements are written clearly in a proper document called SRS (Software Requirement Specification).

🧱 Activities include:

Writing detailed requirements
Including diagrams and models (like DFD, ERD)
Making the document clear for both developers and clients

💬 Example:
The SRS explains exactly how the app will handle orders, tables, and payments.



4️⃣ Requirement Validation

This step checks whether the written requirements are correct, complete, and agreed by users.

🧱 Activities include:

Reviewing the SRS document with the client
Checking for errors, missing points, or misunderstandings

💬 Example:
Client verifies if all menu management features are properly listed.



5️⃣ Requirement Management

Requirements may change over time — so this step manages those changes in a controlled way.

🧱 Activities include:

Tracking changes in requirements
Updating documentation
Maintaining version control

💬 Example:
If the restaurant owner later wants an “online order” feature, it’s added through proper change management.

⚙️ Summary Table (for quick revision)

| Task                      | Meaning                         | Example                                |
| ------------------------- | ------------------------------- | -------------------------------------- |
| Requirement Elicitation   | Collect user needs              | Ask client what features they want     |
| Requirement Analysis      | Study and organize requirements | Separate functional and non-functional |
| Requirement Specification | Write in SRS document           | Create clear report of all features    |
| Requirement Validation    | Verify correctness              | Client checks and approves             |
| Requirement Management    | Handle changes                  | Add new feature if needed              |


🏁 In Short:

Requirement Engineering ensures that the right software is built correctly by collecting, analyzing, documenting, validating, and managing user needs.

      `},{id:22,question:"22. What is Requirement Validation and why is it important?",answer:"",codeExample:`
🧠 Requirement Validation
Definition:

Requirement Validation is the process of checking whether the collected and documented requirements
  are correct, complete, and as per the customer’s needs.


👉 In simple words:

It means making sure we understood the user’s needs correctly before starting to build the software.


🎯 Purpose of Requirement Validation:

To ensure the final software matches user expectations and to find errors early before development begins.


🧩 Activities in Requirement Validation:

1. Review the SRS document (Software Requirement Specification).
2. Check for missing or wrong requirements.
3. Confirm with clients that requirements are correct.
4. Identify conflicts between requirements.
5. Validate test cases for each requirement.


🔍 Techniques used for Validation:

Reviews and inspections – checking documents manually.
Prototyping – showing a small working model to the client.
Walkthroughs – team discussions to verify correctness.
Requirement testing – checking if each requirement can be tested.




💬 Example:

Suppose a client says:

  “The billing system should print bills automatically.”


During validation, the development team confirms:

  What format should the bill have?
  When should it print — after payment or after order?
  Should it print both soft copy and hard copy?

This ensures clear understanding before development.


🧾 Importance of Requirement Validation:

✅ Ensures the software meets real user needs.
✅ Prevents costly errors during later stages.
✅ Improves software quality and reliability.
✅ Saves time and cost by detecting problems early.
✅ Builds trust between client and developer.



🏁 In Short:

Requirement Validation means checking that requirements are right and complete so that the software built later fully satisfies the customer’s needs.
It is important because it helps to avoid misunderstandings and rework later.
      
      `},{id:23,question:"23. Define Structured System Analysis and explain its characteristics.",answer:"",codeExample:`
🧠 Structured System Analysis (SSA) — Simple Meaning

👉 It means studying a system in an organized (structured) way to understand how data moves and how work is done in that system.

In easy words:

  Structured System Analysis is a step-by-step method used by system analysts to study, understand, and 
  design a computer system clearly before building it.



💬 Example:

Imagine you are building a Library Management System 📚


Before writing any code, you first:

1. Find out what the system should do (like issue books, return books, add new books).

2. Draw simple diagrams showing how data moves — for example:
  “Student gives Book_ID → System checks availability → Book issued.”

3. Break the whole system into small parts (modules) like:
  Student Module
  Book Module
  Staff Module

That’s Structured System Analysis — understanding everything properly before starting coding.


🧩 Characteristics (in easy words)

1️⃣ Step-by-step process
You study the system one step at a time — first understand, then design, then improve.
👉 Helps you avoid confusion.


2️⃣ Uses diagrams
You draw simple pictures (like DFD and ER diagrams) to show how data moves and how things work.
👉 Makes understanding easy.


3️⃣ Focus on data and process
You study what data the system uses (like book info, student info)
and what processes happen (like issue, return).
👉 Helps to make system correct and clear.


4️⃣ Top-down approach
You start with the main system and break it into small parts.
👉 Easier to manage and test.


5️⃣ Better communication
The diagrams and simple steps help developers and users talk easily and understand the system.


6️⃣ Easy to update or maintain
Because everything is structured and clear, future updates become simple.


🏁 In Short:

Structured System Analysis means studying the system in a planned, step-by-step, and clear way using 
diagrams like DFD and ERD so that everyone understands how it works before coding starts.
      
      
      `},{id:24,question:"24. Explain SSADM and list its phases.",answer:"",codeExample:`
🧠 SSADM (Structured Systems Analysis and Design Method)
Definition:

SSADM stands for Structured Systems Analysis and Design Method.
It is a step-by-step method used to analyze, design, and build information systems in a systematic and well-organized way.

👉 In simple words:

SSADM is a method to study (analyze) and plan (design) a system before writing the code, using diagrams, models, and documentation.



🎯 Purpose of SSADM

To make sure the system meets user needs correctly.
To reduce confusion by breaking large systems into smaller parts.
To ensure a clear, structured, and error-free design before development.
To improve communication between users and developers.


🧩 Phases of SSADM

SSADM mainly has six phases, followed step-by-step 👇


1️⃣ Feasibility Study

This phase checks whether the new system is possible and worth developing.

✔ Activities:

Check technical, economic, and operational feasibility.
Prepare a Feasibility Report.

💬 Example:
Can we build an online fee management system within our budget and time?


2️⃣ Requirements Analysis

This phase collects all user requirements and understands what the system should do.

✔ Activities:

Gather information using interviews, questionnaires, etc.
Identify functional and non-functional requirements.
Create a Requirements Specification Document (SRS).

💬 Example:
User wants “Add Student,” “Generate Report,” and “View Attendance.”


3️⃣ Requirements Specification

This phase documents all requirements clearly and creates data models and process models.

✔ Activities:

Create Data Flow Diagrams (DFD)
Create Data Dictionary
Define all data and processes clearly.

💬 Example:
DFD shows how “Student Data” flows between “Student Form” and “Database.”


4️⃣ Logical System Specification

This phase defines how the system will work logically (without worrying about hardware or software yet).

✔ Activities:

Design logical data models
Define input, output, and process logic

💬 Example:
System should automatically check student details before saving new data.


5️⃣ Physical Design

This phase converts the logical design into a real working system design.

✔ Activities:

Decide programming language, database, and hardware.
Design screens, reports, and database structure.

💬 Example:
Use MySQL for the database and PHP for the front end.


6️⃣ Implementation and Maintenance

This is the final phase where the system is developed, tested, and installed.

✔ Activities:

Coding and testing
User training
System maintenance and updates



💬 Example:
Install the fee management software in the school and train staff to use it.

⚙️ Diagram Summary (Step by Step):

    1. Feasibility Study
          ↓
    2. Requirements Analysis
          ↓
    3. Requirements Specification
          ↓
    4. Logical System Specification
          ↓
    5. Physical Design
          ↓
    6. Implementation & Maintenance

🏁 In Short:

SSADM is a structured, step-by-step method for analyzing and designing computer systems.
It ensures the system is clear, complete, and correct before actual coding begins.

✅ Quick Summary:

| Phase                        | Purpose (Easy Words)              |
| ---------------------------- | --------------------------------- |
| Feasibility Study            | Check if project is possible      |
| Requirement Analysis         | Collect user needs                |
| Requirement Specification    | Write needs clearly with diagrams |
| Logical System Specification | Plan how the system will work     |
| Physical Design              | Decide how to build it            |
| Implementation               | Build, test, and maintain system  |

      

  `},{id:25,question:"25. Compare SDLC and SSADM.",answer:"",codeExample:`
🧠 1. What is SDLC?

SDLC (Software Development Life Cycle)
is the overall process of developing software — from planning to maintenance.
It gives a general step-by-step structure for creating any software project.

💬 Example: Waterfall Model, Agile Model, Spiral Model, etc.



💡 2. What is SSADM?

SSADM (Structured Systems Analysis and Design Method)
is a specific method used inside SDLC, mainly in the analysis and design phases, to create structured documentation, diagrams, and models.

💬 Example: Creating DFDs, Data Dictionaries, and Entity-Relationship Diagrams.


⚖️ 3. Difference Between SDLC and SSADM

| Point              | SDLC                                                                                 | SSADM                                                             |
| -------------------| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------|
| 1. Meaning         | A general framework for software development.                                        | A specific method for analyzing and designing systems.            |
| 2. Focus           | Focuses on entire software process — from planning to maintenance.                   | Focuses mainly on system analysis and design stages.              |
| 3. Scope           | Covers all phases: Planning, Analysis, Design, Implementation, Testing, Maintenance. | Used within the Analysis and Design phases of SDLC.               |
| 4. Approach        | Can be structured or unstructured, depending on the model used.                      | Structured and systematic approach using models and diagrams.     |
| 5. Output          | Working software product.                                                            | Detailed system design documents and models.                      |
| 6. Techniques Used | Uses general methods like flowcharts, coding, and testing.                           | Uses DFDs, ER diagrams, data dictionary, etc.                     |
| 7. Purpose         | To develop and deliver the final software system.                                    | To understand, analyze, and design the system before development. |
| 8. Example Models  | Waterfall, Agile, Spiral, Incremental.                                               | SSADM itself is a model used inside SDLC.                             |


🧩 4. In Simple Words:

SDLC is the whole process of software development.
SSADM is a part of SDLC — it helps in analyzing and designing the system in a structured way.


🏁 5. Example to Remember:

Think of it like this 👇

  SDLC = Building a complete house (plan, design, build, decorate, maintain).
  SSADM = The blueprint design step inside that process.


✅ Short Summary:

SDLC = Overall development process
SSADM = Structured method used in SDLC’s analysis and design stages.
      
      `},{id:26,question:"26. Explain Decision Tree with components and example.",answer:"",codeExample:`
🌳 What is a Decision Tree?

A Decision Tree is a graphical representation used to make decisions or predictions based on certain conditions.
It looks like a tree structure — starting from a root node and branching into different possible outcomes.

💬 In short:

A Decision Tree helps in choosing the best option by following a series of if–then conditions.



🧩 Components of Decision Tree

Root Node

  The topmost node of the tree.
  Represents the main question or condition that needs to be tested.
  🟢 Example: “Is the customer’s age > 18?”



Decision Nodes

  These are intermediate nodes that show more conditions or choices based on previous answers.
  🟡 Example: “Is the income high or low?”



Branches

  The lines connecting nodes.
  Each branch represents a possible answer or outcome of a condition.
  🟠 Example: Yes / No, High / Low.



Leaf (Terminal) Nodes

  The final nodes that give a result or decision.
  No further branching occurs from here.
  🔵 Example: “Approve Loan” or “Reject Loan”.


🧠 Working of Decision Tree

  Start from the root node.
  Apply a condition on an attribute (e.g., age, income).
  Follow the branch according to the condition result (e.g., Yes/No).
  Continue until you reach a leaf node — this gives the final decision or prediction.

📘 Example: Loan Approval Decision Tree



Let’s say a bank wants to decide whether to approve or reject a loan.

                [Is Age > 18?]   ← Root Node
                 /                      Yes          No
              /                 [Is Income > ₹40,000?]     Reject Loan
        /               Yes          No
     /               Approve Loan       Reject Loan


✅ Explanation:

If age is less than 18, → Reject Loan
If age is greater than 18 and income is greater than ₹40,000, → Approve Loan
Otherwise, → Reject Loan



🏆 Advantages of Decision Tree

Simple to understand and visualize.
Can handle categorical and numerical data.
Does not need much data preprocessing.


⚠️ Disadvantages of Decision Tree

Can become complex if too many branches.
Small changes in data can change the entire tree.
Might overfit (work well on training data but poorly on new data).



🧩 In Short:

A Decision Tree is a flowchart-like model used for making decisions.
It starts from a root condition, branches into choices, and ends with final results.
      
      
      `},{id:27,question:"27. Explain Decision Table and its uses.",answer:"",codeExample:`
📘 What is a Decision Table?

A Decision Table is a tabular method used to show different conditions and the actions (results) based on those conditions.

💬 In simple words:

A Decision Table helps you decide what action to take when there are multiple conditions to check.
It’s a structured way to represent IF–THEN rules in a table format.



🧩 Structure of a Decision Table

A Decision Table has four main parts:

| Part                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| 1. Condition Stub        | Lists all the conditions that affect the decision.              |
| 2. Condition Entries     | Shows True (T) or False (F) values for each condition.          |
| 3. Action Stub           | Lists all possible actions that can be taken.                   |
| 4. Action Entries        | Shows which action to perform under each condition combination. |


📊 Example: Student Result Decision Table

Let’s create a decision table for deciding Pass or Fail of a student.
| Conditions / Rules | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
| ------------------ | ------ | ------ | ------ | ------ |
| Marks ≥ 50?        | T      | T      | F      | F      |
| Attendance ≥ 75%?  | T      | F      | T      | F      |
| Actions:           |        |        |        |        |
| Declare Pass       | ✔️    | ❌     | ❌     | ❌    |
| Declare Fail       | ❌    | ✔️     | ✔️     | ✔️    |


✅ Explanation:

Rule 1: Marks ≥ 50 and Attendance ≥ 75 → Pass
Rule 2: Marks ≥ 50 but Attendance < 75 → Fail
Rule 3: Marks < 50 but Attendance ≥ 75 → Fail
Rule 4: Marks < 50 and Attendance < 75 → Fail



🧠 Uses of Decision Table

Helps in making logical and clear decisions.
Useful for testing and debugging complex systems.
Converts requirements or rules into a structured form.
Commonly used in software design, business rules, and database systems.
Helps avoid missing conditions in decision-making.



🏆 Advantages

Simple and easy to understand.
Helps to find all possible combinations of conditions.
Reduces ambiguity and errors in system design.
Good for documentation of decision logic.


⚠️ Disadvantages

Becomes large and complex if many conditions exist.
Not suitable for sequential or time-based decisions.


💡 In Short:

A Decision Table is a table that shows all possible conditions and their corresponding actions.
It helps in clear, systematic decision-making — just like a rule book.
      
      `},{id:28,question:"28. Explain Structured English.",answer:"",codeExample:`
📘 What is Structured English?

Structured English is a way of writing logic (steps of a process) using simple English words combined with programming control structures like
👉 IF...THEN...ELSE, DO WHILE, REPEAT...UNTIL, etc.

💬 In simple words:

Structured English is used to describe the logic of a program or process in easy-to-read English — without writing actual code.
It is mainly used during system analysis and design to show how a process works before writing code.



🧩 Features of Structured English

Uses simple English words.
Based on programming logic (sequence, selection, looping).
Easy to understand for both programmers and non-programmers.
Helps to convert logic into actual program code later.
Each step is written clearly and indented properly.



⚙️ Basic Structure of Structured English

Structured English uses three control structures:


Sequence – Steps are executed in order.

Step 1
Step 2
Step 3


Selection (Decision) – Based on a condition.

IF condition THEN
    action1
ELSE
    action2
ENDIF


Iteration (Looping) – Repeats a process.

WHILE condition
    action
ENDWHILE


🧠 Example 1: Calculate Student Grade

IF marks >= 90 THEN
    grade = "A"
ELSE IF marks >= 75 THEN
    grade = "B"
ELSE IF marks >= 50 THEN
    grade = "C"
ELSE
    grade = "Fail"
ENDIF
PRINT grade


✅ Explanation:
This Structured English checks marks and decides which grade to give.



🧮 Example 2: Calculate Total and Average Marks

SET total = 0
FOR each subject in subjects
    READ marks
    total = total + marks
ENDFOR
average = total / number_of_subjects
PRINT total, average


✅ Explanation:
It shows logic for finding total and average marks — simple, step-by-step, and easy to follow.



🏆 Advantages of Structured English

Easy to understand and communicate.
Bridges the gap between requirements and programming code.
Helps in designing algorithms clearly.
Reduces chances of misunderstanding between analyst and developer.


⚠️ Disadvantages

Not as precise as actual code.
Not suitable for very large or complex systems.
Cannot be executed or tested directly.


💡 In short:

Structured English is a simple way to describe program logic using plain English with control structures like IF, THEN, ELSE, and WHILE.
It helps analysts and programmers understand and communicate the logic clearly before coding.
      
      `},{id:29,question:"29. Explain Data Flow Diagram (DFD) and its components.",answer:"",codeExample:`
📘 What is a Data Flow Diagram (DFD)?

A Data Flow Diagram (DFD) is a graphical representation that shows how data moves through a system —
from input to output, and how it is processed and stored.

💬 In simple words:

DFD shows how data enters, what happens to it (process), and where it goes (output) in a system.
It helps understand the flow of information without writing actual code.

🧩 Components of DFD

There are four main components in a DFD:


1️⃣ Process

Shows what happens to data (the work or operation performed).
It takes input data, processes it, and produces output data.
Symbol: Circle or Rounded Rectangle
Example: “Calculate Salary”, “Generate Bill”

🧠 Example:

Process: Calculate Salary
Input: Basic Pay, Allowances
Output: Total Salary


2️⃣ Data Flow

Shows movement of data between processes, data stores, and entities.
Represented by arrows (→).
Labelled with the data name like “Customer Details” or “Payment Info”.

🧠 Example:

Customer → Order Details → Process Order


3️⃣ Data Store

Represents where data is stored inside the system.
It can be a database, file, or repository.
Symbol: Two parallel lines (like an open rectangle)
Example: “Student Database”, “Inventory File”

🧠 Example:

Data Store: Student_Record


4️⃣ External Entity (Source/Sink)

Represents outside people or systems that send or receive data from the system.
Symbol: Rectangle or Square
Example: “Customer”, “Bank”, “Admin”

🧠 Example:

Customer → System → Invoice


📊 DFD Symbols Summary

| Component           | Symbol                 | Meaning                              |
| ------------------- | ---------------------- | ------------------------------------ |
| Process             | ○ or Rounded rectangle | Action or function performed on data |
| Data Flow           | →                      | Shows direction of data movement     |
| Data Store          | ║ (two parallel lines) | Storage of data                      |
| External Entity     | □                      | Source or destination of data        |


🧠 Example: DFD for Online Order System

Level 0 (Context Diagram)
Customer → (1) Place Order → System → Send Confirmation


Explanation:

Customer is the external entity.
“Place Order” is the process.
System stores and returns confirmation.


Level 1 (Detailed DFD)
Customer → (1.0) Submit Order → Order Data → [Order Database]
[Order Database] → (2.0) Generate Invoice → Invoice → Customer


Explanation:

There are two processes: Submit Order and Generate Invoice.
Order data is stored in the Order Database.
Invoice is sent back to the customer.


🏆 Advantages of DFD

Easy to understand the system flow.
Helps in system analysis and design.
Shows how data is processed step by step.
Useful for communication between users and developers.


⚠️ Disadvantages of DFD

Does not show timing or control flow (only data flow).
Can become complex for large systems.
Processes may look similar — need careful naming.


💡 In Short:

A Data Flow Diagram (DFD) shows how data moves inside a system using
processes, data stores, data flows, and external entities.
It helps in understanding and designing information systems easily.


      `},{id:30,question:"30. Explain ER Diagram and its components.",answer:"",codeExample:`
📘 What is an ER Diagram?

An ER Diagram (Entity–Relationship Diagram) is a visual representation of the data and relationships in a database.

💬 In simple words:

  ER Diagram shows what data is stored (entities), what information they have (attributes), and how they 
  are connected (relationships).

It helps database designers plan and organize data before creating actual tables.

🧩 Components of ER Diagram

There are 3 main components:


1️⃣ Entity

An object or thing in the real world that has data stored about it.
Can be a person, place, thing, or event.

Symbol: Rectangle

Example: Student, Teacher, Course

🧠 Types of Entities:

Strong Entity: Exists independently (e.g., Student)
Weak Entity: Depends on another entity (e.g., Fee depends on Student)



2️⃣ Attributes

Describe details or properties of an entity.

Symbol: Oval connected to entity

Example:
Entity → Student
Attributes → Student_ID, Name, Age, Course


🔸 Types of Attributes:

| Type            | Description         | Example                         |
| --------------- | ------------------- | ------------------------------- |
| Simple          | Cannot be divided   | Name, Age                       |
| Composite       | Can be divided      | FullName = FirstName + LastName |
| Derived         | Can be calculated   | Age (from DOB)                  |
| Multivalued     | Has multiple values | Phone Numbers                   |


3️⃣ Relationship

Shows how entities are related to each other.
Symbol: Diamond (♦)

Example:
Student ♦──Enrolls in──♦ Course


🧠 Types of Relationships:

| Type               | Description                          | Example                 |
| -------------------| ------------------------------------ | ----------------------- |
| One-to-One (1:1)   | One entity related to one other      | A person → One passport |
| One-to-Many (1:N)  | One entity related to many others    | Teacher → Many Students |
| Many-to-Many (M:N) | Many entities related to many others | Students → Many Courses |


📊 ER Diagram Symbols Summary

| Component             | Symbol               | Example      |
| ----------------------| -------------------- | ------------ |
| Entity                | Rectangle            | Student      |
| Attribute             | Oval                 | Name, RollNo |
| Relationship          | Diamond              | Enrolls      |
| Primary Key           | Underlined Attribute | Student_ID   |
| Multivalued Attribute | Double Oval          | Phone_Number |
| Weak Entity           | Double Rectangle     | Payment      |

🧠 Example: ER Diagram for Student–Course System
 
  [STUDENT] ───< ENROLLS >─── [COURSE]
     |                          |
   (RollNo)                 (CourseID)
   (Name)                   (CourseName)
   (Age)                    (Duration)


   perfect example diagram :https://chatgpt.com/s/m_69024ad6316881919833ae456d914a03

✅ Explanation:

Entities: STUDENT, COURSE

Relationship: ENROLLS

Attributes: Student → RollNo, Name, Age
  Course → CourseID, CourseName, Duration

Relationship type: Many-to-Many (a student can enroll in many courses)


🏆 Advantages of ER Diagram

Simple and easy to understand.
Helps in database design and normalization.
Shows clear relationships between entities.
Reduces data redundancy (duplicate data).


⚠️ Disadvantages

Not suitable for very large or complex systems.
Doesn’t show data flow or process.
Hard to represent derived data or constraints.


💡 In Short:

An ER Diagram is a graphical tool used to design a database by showing
entities (tables), attributes (fields), and relationships (links) between them.
It helps to build a well-structured and clear database model.
      
      `},{id:31,question:"31. Explain Data Dictionary and its importance.",answer:"",codeExample:`
📘 What is a Data Dictionary?

A Data Dictionary is a collection of information (a reference or catalog) that contains details about all data 
used in a database or information system.

💬 In simple words:

  A Data Dictionary is like a “dictionary about data” —
  it stores what data items exist, their meanings, types, and where they are used.

It helps developers, designers, and users understand and manage data properly.


🧩 Contents / Components of a Data Dictionary

A Data Dictionary usually includes the following details for each data element:

| Component              | Description / Example                                       |
| -----------------------| ----------------------------------------------------------- |
| Data Name              | Name of the data item (e.g., Student_ID)                    |
| Data Type              | Type of data (e.g., Integer, Varchar, Date)                 |
| Size / Length          | Maximum number of characters (e.g., 10)                     |
| Description            | What the data represents (e.g., Unique ID for each student) |
| Default Value          | Initial value if none is given                              |
| Source                 | Where the data comes from                                   |
| Allowed Values / Range | Example: 0–100 for marks                                    |
| Relationships          | Links with other data items or tables                       |
| Constraints            | Rules like *NOT NULL*, *UNIQUE*, *PRIMARY KEY*              |



🧠 Example of a Simple Data Dictionary

| Data Element     | Type     | Size     | Description                |
| ---------------- | -------- | -------- | -------------------------- |
| Student_ID       | Integer  | 6        | Unique ID for each student |
| Name             | Varchar  | 50       | Student’s full name        |
| DOB              | Date     | —        | Student’s date of birth    |
| Marks            | Integer  | 3        | Total marks obtained       |
| Grade            | Char     | 1        | Grade of student (A–F)     |



🏗️ Types of Data Dictionary

| Type                    | Description                                                         |
| ------------------------| ------------------------------------------------------------------- |
| Active Data Dictionary  | Automatically updated by the DBMS whenever data definitions change. |
| Passive Data Dictionary | Manually updated by the user or administrator.                      |


🎯 Importance / Advantages of Data Dictionary

1. ✅ Improves understanding – Helps everyone know what each data item means.

2. 🔍 Avoids duplication – Ensures same data isn’t defined multiple times.

3. 🛠️ Supports database design – Guides developers in table creation and relationships.

4. 🔐 Ensures data consistency – Defines standard names, types, and formats.

5. 📊 Useful for documentation – Acts as a reference guide for future updates.

6. 🧠 Helps analysts and users – Simplifies communication between developers and users.



⚠️ Disadvantages

Needs regular updating if data definitions change.
Time-consuming to create for very large databases.


💡 In Short:

A Data Dictionary is a detailed reference that describes every data element in a database —
its name, type, size, meaning, and relationships —
helping ensure clarity, consistency, and standardization in data management.


      `},{id:32,question:"32. Explain System Design Concepts.",answer:"",codeExample:`
🧠 What is System Design?

👉 System Design means planning how the system will work before you actually build it.

It’s like making a blueprint of a house before you start construction.
In a system, we plan:

  What parts it will have
  How those parts will work together
  How users will use it


💬 Example:
If you are creating a Library System, you must plan:

  How books are added
  How users borrow books
  How the system stores this information



⚙️ Why System Design is Important?

Because it helps to:

 1. Build the system correctly.
 2. Make the system easy to understand.
 3. Find problems before development.
 4. Make changes easily in the future.


🧩 Types of System Design

1. Logical Design

👉 It shows what the system will do.
It does not talk about hardware or software.
Example: A DFD (Data Flow Diagram) showing how book data moves in a library system.


2. Physical Design

👉 It shows how the system will actually work.
It includes database tables, software, hardware, etc.
Example: Which database (MySQL), which device, and how users will log in.


🔑 Important Concepts in System Design


Let’s understand them one by one in easy words 👇


1. Modularity

Means dividing the system into small parts (modules).
Each part does one specific job.

🧩 Example:
In a school system:

Student Module
Teacher Module
Fee Module
Each module works separately.


2. Abstraction

Means showing only important things and hiding details.

💡 Example:
When you withdraw money from an ATM, you just press buttons — you don’t see how the computer processes your request.


3. Cohesion

Means how closely the tasks in a module are related.

💡 Example:
A “Student Module” should handle only student-related work.
That means it has high cohesion (good design).


4. Coupling

Means how much one module depends on another.

💡 Example:
If Student Module depends too much on Fee Module → high coupling (bad).
If they work independently → low coupling (good).


5. Top-Down Design

We start from the main system and break it into small parts.

💡 Example:
Library System → Book Management → Borrow → Return.


6. Bottom-Up Design

We first make small modules and then join them to make a full system.



📘 Example: Library Management System

| Concept     | Example                                            |
| ----------- | -------------------------------------------------- |
| Modularity  | Book, Student, and Issue modules                   |
| Cohesion    | Each module handles only one task                  |
| Coupling    | Modules work independently                         |
| Abstraction | User sees “Borrow Book” button, not database steps |
| Top-down    | Start from full system → divide into modules       |


🌟 Summary

| Concept         | Meaning                        |
| --------------- | ------------------------------ |
| System Design   | Plan of how system will work   |
| Logical Design  | What system will do            |
| Physical Design | How system will work           |
| Modularity      | Divide into parts              |
| Abstraction     | Hide details                   |
| Cohesion        | Focus on one purpose           |
| Coupling        | Low dependency between modules |

      
      `},{id:33,question:"33. Explain Procedural and Object-Oriented Design.",answer:"",codeExample:`
🧩 What is Software Design?

Before we start, remember —
Design means planning how to build the software.

There are two main ways to design a program:
👉 Procedural Design
👉 Object-Oriented Design (OOD)


⚙️ 1. Procedural Design
📘 Meaning:

Procedural design focuses on functions (procedures) —
it tells what the program will do step by step.

It follows a top-down approach, meaning:
  Start from the main task
  Break it into small steps or functions

💡 Example:
Let’s design a simple program to calculate the total marks of students.

Procedural way:

function inputMarks() { ... }
function calculateTotal() { ... }
function displayResult() { ... }

inputMarks();
calculateTotal();
displayResult();


Here, everything is based on functions (procedures) — not on real-world objects.


✅ Advantages:

Simple and easy to understand.
Good for small programs.
Fast to develop.


❌ Disadvantages:

Hard to modify as the project grows.
Data and functions are separate → less secure.
Reusability is low.



🧱 2. Object-Oriented Design (OOD)
📘 Meaning:

Object-Oriented Design focuses on objects instead of functions.
An object = data + functions that work on that data.

It follows bottom-up approach, meaning:
  Start by identifying real-world objects (like Student, Book, Car)
  Define their properties (data) and behaviors (methods)

💡 Example:
Let’s design the same “Student Marks” program in OOD.

Object-Oriented way:

class Student {
    public $marks1, $marks2;

    function calculateTotal() {
        return $this->marks1 + $this->marks2;
    }
}

$stud = new Student();
$stud->marks1 = 40;
$stud->marks2 = 50;
echo $stud->calculateTotal();


Here, we use a class (Student) that has data (marks) and function (calculateTotal) together.



✅ Advantages:

Data and functions are grouped together → secure.
Code reusability using classes and objects.
Easier to maintain and extend.
Models real-world systems.

❌ Disadvantages:

More complex to design at first.
Needs more memory.


🧾 Summary Table (for quick revision)

| Aspect        | Procedural Design               | Object-Oriented Design             |
| ------------- | ------------------------------- | ---------------------------------- |
| Focus         | Functions or procedures         | Objects (data + methods)           |
| Approach      | Top-down                        | Bottom-up                          |
| Data Handling | Data and functions are separate | Data and functions are combined    |
| Reusability   | Low                             | High                               |
| Example       | function add()                  | class Student { function add() }   |
| Security      | Less secure                     | More secure                        |
| Best for      | Small programs                  | Large complex systems              |


✅ Simple way to remember:

Procedural = “How to do it” (step by step)
Object-Oriented = “Who does it” (objects doing actions)
      
      `},{id:34,question:"34. Define Agile Model and explain its characteristics.",answer:"",codeExample:`
🚀 Definition of Agile Model

The Agile Model is a software development approach where the project is divided into small parts (called iterations or sprints).
Each part is developed, tested, and reviewed before moving to the next one.

✅ Main idea:
Instead of making the whole project at once (like the Waterfall Model), Agile builds it step by step — allowing changes anytime.


🔁 How It Works (Simple Steps)

Project is divided into small modules (iterations).
Each iteration includes — planning, coding, testing, and reviewing.
After each iteration, feedback is taken from the client.
Changes or improvements are added in the next iteration.


💡 Example:
Suppose you’re developing a food delivery app.

Iteration 1: Build login and signup.
Iteration 2: Add restaurant list and menu.
Iteration 3: Add order and payment system.
Iteration 4: Improve design and speed.


🌟 Characteristics of Agile Model


Iterative and Incremental:
  Project is completed in small steps (iterations).
  Each iteration adds new features.


Customer Involvement:
  The client gives feedback after every stage.
  Helps to make changes quickly.


Flexibility:
  Changes in requirements are easily accepted — even at later stages.


Team Collaboration:
  Developers, testers, and customers work together closely.


Continuous Testing and Integration:
  Testing happens in every iteration, ensuring fewer errors.


Working Software Delivery:
  A working product is available after each iteration (not only at the end).


Time-Boxed Development:
  Each iteration (sprint) has a fixed time — usually 2 to 4 weeks.


Focus on Quality:
  Regular reviews and tests maintain software quality.



🧩 Diagram (Text Form)

+-----------+      +-----------+      +-----------+
| Iteration | ---> | Iteration | ---> | Iteration |
|   1       |      |   2       |      |   3       |
| (Plan→Code→Test→Review)     | ... and so on


Each iteration delivers a working part of the software.

      see diagram live: https://chatgpt.com/s/m_6902d55f836481918cf00147cc179404


✅ Advantages

Flexible and easy to change requirements.
Early delivery of working software.
Regular feedback from client.
Better communication and teamwork.
Higher customer satisfaction.


❌ Disadvantages

Needs skilled and experienced team.
Hard to predict total time and cost.
Frequent changes may cause confusion.
Not ideal for very small or very large teams.

💡 In short:

The Agile Model is a flexible, iterative development process focused on continuous delivery, customer feedback, and quick adaptation to change.
      
      `},{id:35,question:"35. Explain steps of Agile Model with diagram.",answer:"",codeExample:`
🚀 Agile Model – Steps with Diagram

The Agile Model follows a cyclic (repeating) process where software is developed in small parts (iterations).
Each iteration delivers a working part of the software that can be reviewed and improved.

⚙️ Steps of Agile Model

1. Requirement Gathering

👉 The client and team discuss what needs to be built.
👉 Requirements are written in simple user stories (short descriptions).

Example:
“User should be able to log in using email and password.”


2. Planning

👉 The team decides what features will be developed in the next iteration (sprint).
👉 Time and resources are planned — usually 2–4 weeks.


3. Design

👉 A simple and flexible design is created for that iteration.
👉 Focus is on quick, working design — not long documentation.


4. Development (Coding)

👉 Developers write code for the planned features.
👉 The code is tested continuously as it is written.


5. Testing

👉 Each iteration includes full testing.
👉 Bugs and errors are fixed immediately.


6. Review / Feedback

👉 The client checks the working software and gives feedback.
👉 Suggestions or changes are noted for the next iteration.


7. Deployment

👉 The working part of the software is delivered or deployed to the user.
👉 The next iteration starts again with new requirements.


🔁 Cycle Repeats

After deployment, the next iteration starts, improving or adding more features until the final system is complete.


🧩 Diagram (Text Version)

         +---------------------------+
         |     1. Requirement        |
         +------------+--------------+
                      ↓
         +------------+--------------+
         |     2. Planning           |
         +------------+--------------+
                      ↓
         +------------+--------------+
         |     3. Design             |
         +------------+--------------+
                      ↓
         +------------+--------------+
         |     4. Development         |
         +------------+--------------+
                      ↓
         +------------+--------------+
         |     5. Testing            |
         +------------+--------------+
                      ↓
         +------------+--------------+
         |     6. Review & Feedback  |
         +------------+--------------+
                      ↓
         +------------+--------------+
         |     7. Deployment         |
         +------------+--------------+
                      ↓
                (Next Iteration)



✅ In short:

Agile Model works in iterations — each iteration goes through Requirement → Planning → Design → 
Development → Testing → Review → Deployment, producing a working product every time.      
      
`},{id:36,question:"36. Write and explain the 12 Agile Principles.",answer:"",codeExample:`
🧠 12 Agile Principles (with Easy Explanation)

1️⃣ Customer satisfaction through early and continuous delivery

👉 Deliver working software frequently, not at the end.
👉 The goal is to keep customers happy by showing progress early.

Example: Show the client a login module before completing the whole project.


2️⃣ Welcome changing requirements, even late in development

👉 Changes are accepted anytime if they make the software better.
👉 Agile is flexible to adapt new ideas.

Example: Adding a new payment method even after design is ready.


3️⃣ Deliver working software frequently

👉 Deliver small, working parts of the project regularly (every few weeks).
👉 This keeps progress visible and reduces risk.


4️⃣ Business people and developers must work together daily

👉 Continuous communication between developers and clients ensures the software meets real needs.

Example: Daily or weekly meetings with the client.


5️⃣ Build projects around motivated individuals

👉 Give the team the environment and trust to do their best work.
👉 Motivation leads to better quality.


6️⃣ Face-to-face communication is best

👉 The most effective way to share ideas is through direct, clear discussion (in person or video call), not long emails.


7️⃣ Working software is the main measure of progress

👉 Instead of counting documents or hours, Agile checks how much real, working software is done.


8️⃣ Maintain a constant pace

👉 Work should be planned so that the team can continue at a steady, stress-free speed.
👉 Avoid overwork and burnout.


9️⃣ Continuous attention to technical excellence

👉 Keep improving the code and design quality for easy maintenance and fewer bugs.

Example: Regularly refactor or clean up the code.


🔟 Simplicity — maximize the amount of work not done

👉 Focus only on what’s important.
👉 Don’t add extra features nobody needs.


11. Self-organizing teams produce the best designs

👉 Teams should manage themselves, share ideas, and take decisions together.
👉 Leads to creative and effective solutions.


12. Regular reflection and improvement

👉 After each iteration, the team reviews what went well and what didn’t.
👉 Use that learning to improve the next iteration.

🧩 Summary Table (for quick revision)

| No. | Agile Principle       | Simple Meaning                 |
| --- | --------------------- | ------------------------------ |
| 1   | Customer satisfaction | Deliver working software early |
| 2   | Welcome change        | Accept new ideas anytime       |
| 3   | Frequent delivery     | Give updates regularly         |
| 4   | Team collaboration    | Work with client closely       |
| 5   | Motivated people      | Trust and support your team    |
| 6   | Communication         | Talk directly and clearly      |
| 7   | Working software      | Main proof of progress         |
| 8   | Sustainable pace      | Avoid overwork                 |
| 9   | Technical excellence  | Keep improving code quality    |
| 10  | Simplicity            | Do only what’s necessary       |
| 11  | Self-organizing team  | Team works independently       |
| 12  | Reflect and improve   | Learn from each iteration      |



✅ In short:

The 12 Agile Principles help teams focus on customer satisfaction, flexibility, teamwork, quality, and continuous improvement through short, regular deliveries.
      
      
      `},{id:37,question:"37. Explain Advantages and Disadvantages of Agile.",answer:"",codeExample:`
🚀 Agile Model – Overview

The Agile Model is a flexible and fast software development approach where the project is built in small parts (called iterations or sprints).
After each part, feedback is taken and improvements are made.


✅ Advantages of Agile Model

1️⃣ Flexibility and Adaptability

👉 Agile easily accepts changes in requirements — even in the middle of development.
Example: If the client wants a new feature, it can be added in the next iteration.


2️⃣ Customer Satisfaction

👉 Customers see working software early and give feedback regularly.
👉 This ensures the final product meets their needs perfectly.


3️⃣ Early and Continuous Delivery

👉 Software is developed and delivered in small parts (modules).
👉 So the client doesn’t have to wait till the end to see progress.


4️⃣ Better Communication and Teamwork

👉 Daily meetings and regular updates improve communication between developers, testers, and clients.


5️⃣ High Product Quality

👉 Continuous testing and regular feedback help find and fix errors quickly.
👉 This keeps the software more stable and reliable.


6️⃣ Risk Management

👉 Since the project is built step-by-step, any issue is found early — reducing big project failures.


7️⃣ Transparency

👉 The client is involved throughout development, so they always know what’s happening.


8️⃣ Quick Delivery to Market

👉 Small releases mean new features can reach users faster.



❌ Disadvantages of Agile Model

1️⃣ Hard to Predict Time and Cost

👉 Since requirements can change anytime, it’s difficult to fix budget and timeline in advance.


2️⃣ Needs Experienced Team

👉 Developers must be skilled and able to handle changes quickly.
👉 A weak or inexperienced team may struggle.


3️⃣ Requires Active Customer Involvement

👉 The client must be available regularly for feedback.
👉 If the client is busy, the project may slow down.


4️⃣ Documentation is Less

👉 Agile focuses more on working software than writing long documents.
👉 This can create problems if new developers join later.


5️⃣ Difficult for Large Projects

👉 Managing very large or complex projects with many teams can be hard under Agile.


6️⃣ Risk of Miscommunication

👉 Since requirements change often, if communication is poor, some features may be misunderstood or missed.



🧩 Summary Table

| Advantages             | Disadvantages                     |
| ---------------------- | --------------------------------- |
| Accepts changes easily | Hard to predict cost/time         |
| Customer satisfaction  | Needs skilled team                |
| Early working software | Requires constant client feedback |
| Better communication   | Less documentation                |
| High quality software  | Hard to manage large projects     |
| Reduces project risk   | Miscommunication possible         |


💡 In short:

The Agile Model is great for flexibility, teamwork, and fast delivery,
but it needs experienced teams and active client involvement to succeed.
      
      `},{id:38,question:"38. Explain Extreme Programming (XP) and its key values.",answer:"",codeExample:`
🚀 What is Extreme Programming (XP)?

Extreme Programming (XP) is an Agile software development model that focuses on:

    Writing high-quality code,
    Working closely with the customer, and
    Responding quickly to changing requirements.

👉 XP is mostly used when the project’s requirements change frequently or are not clearly defined from the start.


💡 Simple Definition:

Extreme Programming (XP) is an Agile method that improves software quality and flexibility by using short development cycles, continuous testing, and constant customer feedback.


🧩 Main Goal of XP

To develop software efficiently, with high quality, and with continuous customer satisfaction — even when requirements change often.


⚙️ Key Features of XP

1. Short development cycles (iterations) — usually 1 to 2 weeks.
2. Cotinuous customer involvement.
3. Frequent releases of working software.
4. Pair programming — two developers work together at one computer.
5. Continuous testing and integration.
6. Simple and clean code design.

🌟 The 5 Key Values of Extreme Programming


XP is built on five important values that guide the development process 👇


1️⃣ Communication

👉 Team members and customers must talk regularly.
👉 Helps avoid confusion and mistakes.

Example: Daily stand-up meetings or pair programming.


2️⃣ Simplicity

👉 Keep the design and code as simple as possible.
👉 Don’t add extra features unless needed.

Example: Write code only for current requirements — not for future guesses.


3️⃣ Feedback

👉 Get quick feedback from customers and teammates after each iteration.
👉 Improves quality and ensures the software meets user needs.

Example: Customer reviews each new version every 1–2 weeks.


4️⃣ Courage

👉 Developers should have the courage to:

Change old code if needed,
Delete unnecessary features,
Admit mistakes and fix them.

Example: Refactoring code without fear of breaking it.


5️⃣ Respect

👉 Everyone in the team — developers, testers, and customers — should respect each other’s ideas and efforts.
👉 This builds teamwork and trust.



🔁 XP Process (Simple Steps)

1. Planning:
Discuss user stories (requirements) with the client.

2. Designing:
Create a simple, clear design.

3. Coding:
Use pair programming and continuous integration.

4. Testing:
Test after every small change.

5. Feedback and Release:
Deliver the working version to the client and take feedback.



🧠 Example:

Suppose you’re developing a shopping website:

Week 1 → Login and signup

Week 2 → Add products

Week 3 → Payment system
After each week, the client reviews and suggests improvements.


✅ Advantages of XP

Produces high-quality software.
Adapts easily to changes.
Encourages teamwork and learning.
Continuous testing reduces bugs.


❌ Disadvantages of XP

Requires continuous customer involvement.
Difficult for large teams.
Frequent changes can cause rework.


🧩 In short:

Extreme Programming (XP) is an Agile method focused on communication, simplicity, feedback, 
courage, and respect, aiming to deliver high-quality, working software quickly and continuously.
      
      `},{id:39,question:"39. Write short note on Scrum Methodology.",answer:"",codeExample:`
🌀 Scrum Methodology (in Simple Words)
💡 What is Scrum?

Scrum is an Agile framework

Scrum is a way to build software step-by-step instead of doing everything at once.
It helps the team work together, plan small parts, and show results quickly.



👉 Think of it like this:

You want to build a mobile app.
Instead of making the whole app at once, you build it part by part — login page first, then profile, then chat.
Each part is made in a short time (called a Sprint).


🧑‍🤝‍🧑 Main People in Scrum:

Product Owner – Tells what needs to be made (like a boss or customer).
Scrum Master – Helps the team follow Scrum rules and removes problems.
Team Members – People who actually make the software.



🧾 Main Things in Scrum:

Product Backlog – A big list of all things to build.
Sprint Backlog – A small list of what to do this week or month.
Increment – The working part of the software made in one Sprint.



⏱️ Main Steps (Process):

Sprint Planning – Team decides what to do in this Sprint.

Daily Scrum (Meeting) – A short 15-min talk every day about work.

Sprint Review – At the end, team shows what they built.

Sprint Retrospective – Team talks about what went well and what to improve.



✅ Advantages (Good Points):

Work gets done faster.
Easy to change plans if needed.
Team works together and communicates better.
Customer sees progress often.


❌ Disadvantages (Bad Points):

Needs experienced team members.
Requires daily meetings.
Hard to use in big projects.




📘 Simple Example:

Let’s say you are building a shopping website:

Sprint 1: Make the login page
Sprint 2: Add product list
Sprint 3: Add payment system

After each Sprint, you have a working part of the website.



🔁 In Short:

Scrum means building software in small steps (Sprints) with teamwork, daily meetings, and quick feedback.
      
      `},{id:40,question:"40. Explain Crystal Method and its variants.",answer:"",codeExample:`
💎 Crystal Method in Software Engineering

💡 What is Crystal Method?

The Crystal Method is an Agile software development approach.
It focuses on people, communication, and teamwork rather than on strict processes or tools.

  🗣️ In short: “People first, process second.”

It believes that every project is unique, so the method should change based on project size and importance.



⚙️ Main Idea

Each project has different needs — small projects need less paperwork, large ones need more rules.
The Crystal Method gives different versions (variants) for different team sizes and project types.
The main focus is on communication, frequent delivery, and simplicity.


👩‍💻 Key Principles

1. Frequent delivery of working software.
2. Close communication within the team.
3. Simplicity in process and documentation.
4. Regular reflection to improve the process.
5. Focus on people’s skills and cooperation.


💠 Crystal Method Variants (Colors represent project size):

| Variant                  | Team Size       | Project Type / Criticality      | Description                                                        |
| ------------------------ | --------------- | ------------------------------- | ------------------------------------------------------------------ |
| Crystal Clear            | 1–6 members     | Small projects                  | Simple and lightweight. Used for small teams in the same location. |
| Crystal Yellow           | 7–20 members    | Medium projects                 | Adds a bit more documentation and management.                      |
| Crystal Orange           | 20–50 members   | Large projects                  | More structured — includes roles, standards, and more testing.     |
| Crystal Red / Maroon     | 50–200+ members | Very large or critical projects | Highly formal, more communication layers, and safety checks.       |


🔸 The darker the color → the bigger and more complex the project.



✅ Advantages

Easy to understand and flexible.
Focuses on people and communication.
Works well for small and medium projects.
Less documentation → faster development.


❌ Disadvantages

Not suitable for very large teams (can become confusing).
Depends heavily on team communication.
Lacks formal structure for critical systems.


📘 Simple Example

Suppose a company is making:

  A small mobile app → use Crystal Clear.
  A medium office management system → use Crystal Yellow.
  A large banking system → use Crystal Orange or Red.

🌀 In Short

The Crystal Method is a family of Agile methods that changes based on project size and importance — 
focusing on people, communication, and simplicity.
      
      
      `},{id:41,question:"41. Compare Agile Model and Waterfall Model.",answer:"",codeExample:`
| Agile Model                                       | Waterfall Model                                 |
| --------------------------------------------------| ------------------------------------------------|
| Development is done in small parts (iterations).  | Development is done step by step (phases).      |
| Flexible – changes can be made anytime.           | Not flexible – changes are hard after starting. |
| Testing is done after every small part.           | Testing is done only after full development.    |
| Customer gives feedback after each iteration.     | Customer gives feedback at the end.             |
| Working software is delivered quickly and often.  | Final software is delivered at the end only.    |
| Best for changing requirements.                   | Best for fixed requirements.                    |
| Team communication is continuous.                 | Communication happens mainly at phase end.      |
| Difficult to use for large or long-term projects. | Suitable for long, well-planned projects.       |

      
      
      `},{id:42,question:"42. Explain Testing in Agile.",answer:"",codeExample:`
esting in Agile

Definition:
Testing in Agile means checking the software continuously during every iteration to make sure it works properly and meets customer needs.
Unlike traditional models where testing happens after development, in Agile, testing and development go together.

Key Points:

1. Continuous Testing:
Testing happens in every sprint (small development cycle).


2. Early Detection of Bugs:
Errors are found and fixed early, saving time and cost.


3. Customer Involvement:
Customers give feedback during testing to ensure the product meets their needs.


4. Automation:
Automated testing tools are often used for faster results.


5. Collaboration:
Developers and testers work closely together instead of separate teams.


Types of Testing in Agile:

1. Unit Testing: Checking small pieces of code.
2. Integration Testing: Checking if modules work together.
3. System Testing: Checking the whole system.
4. Acceptance Testing: Customer checks if the product meets requirements.


Example:

In a food delivery app project,

  During each sprint, new features like “Add to Cart” or “Payment” are tested immediately after they are developed.
  Bugs are fixed right away before moving to the next sprint.
      
      `},{id:43,question:"43. Explain Agile Modeling and its unique principles.",answer:"",codeExample:`
Agile Modeling (AM)

Definition:

Agile Modeling is a practice of creating simple and flexible models in software development that help in 
  understanding and designing systems quickly.

  It focuses on communication, simplicity, and teamwork rather than making detailed and complex diagrams.


Purpose of Agile Modeling:

  To help developers think, plan, and communicate ideas easily.
  To create just enough design before and during coding.
  To make the software adaptable to changes.



Unique Principles of Agile Modeling:


Model with a Purpose:
Create a model only when it helps in solving a problem or understanding something.
🟢 Example: Make a simple flowchart to explain how users log in.


Keep It Simple:
Don’t make the model too detailed — show only what’s important.


Travel Light:
Use fewer documents; focus more on working software.


Multiple Models:
Use different models like DFD, UML, or ER diagrams if needed — not just one type.


Content over Form:
The idea in the model matters more than how it looks.


Collaborate:
Work together — developers, testers, and customers should share ideas.


Feedback is Key:
Show your models early, get feedback, and improve.



Example:

In a shopping app project, the team creates a simple use-case diagram to show “User adds item to cart.”
They don’t make big documents — just a small model that everyone can understand and discuss quickly.
      
      `},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:88888,question:"Mid sem Questions & Ans",answer:"",codeExample:`
✅ Q1 – Short Questions (1 mark each)
(a) 3 Short Questions


1) Define a system.

A system is a group of parts that work together to achieve a common goal.
Example: Hospital system, Banking system, Computer system.



2) What is meant by software engineering?

Software Engineering is the systematic, disciplined way of developing software using methods, tools and 
processes so the software becomes reliable and efficient.



3) List any two characteristics of good software.

  Correctness (gives correct output)
  Reliability (works properly for long time)
  Efficiency (uses less memory & time)
  Usability (easy to use)
      
  

---------------------------


(b) Objective / MCQ / True-False / Fill in the Blanks (7 questions)
1) The SDLC phase concerned with determining user needs is called:
👉 Requirement Analysis


2) "The Waterfall model allows overlapping between stages." True or False?
👉 False
(Each stage is completed before the next begins.)


3) ______ diagram is used to show data flow between processes and data stores.
👉 DFD (Data Flow Diagram)


4) In ER modeling, the relationship between entities is represented by:
👉 Diamond shape


5) Which of the following is an Agile methodology?
(a) Spiral
(b) Waterfall
(c) Scrum
(d) Incremental

👉 Correct: Scrum



6) The process of verifying requirements correctness is called:
👉 Requirements Validation

7) The component responsible for defining data storage structure during system design is called:
👉 Database Schema / Data Design Component
     


-----------------------------------------------------------------------------------



✅ Q2 – 2 marks & 3 marks questions

(a) 2-MARK QUESTIONS

1) Explain the need for information system development.

We need information systems because:

  To process data faster than manual work.
  To reduce human errors.
  To save time and cost.
  To improve decision making with accurate information.
  To automate repetitive tasks.

TPS
MIS
DSS
EIS
ES




2) Differentiate between software process and software product.

| Software Process                                            | Software Product                                      |
| ----------------------------------------------------------- | ----------------------------------------------------- |
| Step-by-step method used to develop software.               | The final output created after following the process. |
| Includes activities like analysis, design, coding, testing. | Includes apps, websites, software tools etc.          |
| Invisible to users.                                         | Visible to users.                                     |


---------------------------

(b) 3-MARK QUESTIONS

1) Compare the Waterfall model and Spiral model.

| Waterfall Model                     | Spiral Model                         |
| ----------------------------------- | ------------------------------------ |
| Linear and sequential.              | Cyclic and iterative.                |
| No feedback loops.                  | Feedback in every cycle.             |
| Better for simple & small projects. | Better for large, risky projects.    |
| Customer involvement only at start. | Customer involvement in every phase. |


Example:

Payroll system → Waterfall
Banking / complex software → Spiral




2) Explain the role of data dictionary in structured system analysis.

Data Dictionary is a repository that stores details about data used in the system.

It helps in:

  Maintaining definitions of data elements.
  Removing confusion between developers.
  Ensuring consistency in DFD, ERD, and process models.
  Reducing errors due to misunderstanding of data.


-----------------------------------------------------------------------------------


✅ Q3 (Attempt Any TWO)

Q3.1 Draw & explain DFD of Library Management System
(I will give Level 0 DFD)


                 +-----------------------+
User  ---------->|   Issue/Return Book   |
                 +-----------+-----------+
                             |
                             v
                      +--------------+
                      |   Database   |
                      | (Books Info) |
                      +--------------+
                             ^
                 +-----------+-----------+
Librarian ------>|   Manage Books Data  |
                 +----------------------+


Explanation (easy)

Processes:

1. Issue/Return Book: handles issuing or returning a book.
2. Manage Books Data: librarian adds/removes/updates books.

Data Store:
  Books Database → stores book records.


Q3.2 Advantages and limitations of Spiral Model

✔ Advantages

  Risk handling is very strong.
  Customer feedback in every cycle.
  Flexible — can change requirements.
  Suitable for large & complex systems.

✔ Limitations

  Expensive due to repeated cycles.
  Requires experienced risk managers.
  Not suitable for small projects.


Q3.3 Evaluate key differences between Traditional SDLC and Agile

| Traditional SDLC                  | Agile                             |
| --------------------------------- | --------------------------------- |
| Linear, fixed phases.             | Iterative, incremental.           |
| Very little customer involvement. | Continuous customer involvement.  |
| Changes are difficult.            | Changes are welcomed anytime.     |
| Slow delivery (one big release).  | Fast delivery (small iterations). |
| More documentation-focused.       | More working-software-focused.    |


-----------------------------------------------------------------------------------
  
✅ Q4 – 5 Marks

Q4(a)
Scenario: University wants to automate admission process
Functional Requirements:

1. Student Registration

  Students enter personal details.


2. Form Submission

  Upload documents, fill application.


3. Fee Payment

  Online payment gateway.


4. Application Status Check

  Students track their status.


5. Admin Panel

  Approve/reject applications
  Generate merit list


Which SDLC model is most suitable? Why?

👉 Recommended model: Spiral Model or Agile


Reason:

  Admission system has frequent changes.
  Needs continuous updates.
  Involves high risk (fees, data security).
  Spiral/Agile allows feedback at each phase.



Q4(b) Design Use Case Diagram for Online Shopping System

Actors:

  Customer
  Admin
  Payment Gateway


Use Cases (5 minimum):

  Browse Products
  Add to Cart
  Place Order
  Make Payment
  Manage Products (Admin)

ASCII diagram:

              (Customer)
                   |
   +----------------+----------------+
   |                |                |
(Browse)       (Add to Cart)     (Place Order)
                   |
               (Make Payment)----(Payment Gateway)

                    (Admin)
                       |
                 (Manage Products)




OR (Option for Q4b)
Comparison between Scrum and Extreme Programming (XP)

| Scrum                                          | Extreme Programming (XP)               |
| ---------------------------------------------- | -------------------------------------- |
| Focus on project management.                   | Focus on technical practices.          |
| Uses roles: Product Owner, Scrum Master, Team. | Uses practices: Pair Programming, TDD. |
| Work done in sprints (2–4 weeks).              | Work done in very small releases.      |
| Daily standup meetings.                        | Continuous integration.                |
| Less engineering guidance.                     | More engineering discipline.           |




| Scrum                              | Extreme Programming (XP)                        |
| ---------------------------------- | ----------------------------------------------- |
| More focus on management & process | More focus on coding practices                  |
| Works in sprints (1–4 weeks)       | Works in very small releases (daily/weekly)     |
| No strict coding standards         | Strong coding standards (TDD, Pair programming) |
| Roles: PO, SM, Dev Team            | Roles: Developers + Coach                       |
| Flexible but less technical        | Highly technical                                |



`},{id:1,question:"",answer:"",codeExample:""},{id:51,question:"51. Explain Interface Design Model with neat diagram.",answer:"",codeExample:`
⭐ Interface Design Model (Software Engineering)

The Interface Design Model describes how a user interacts with a software system.
It focuses on screens, buttons, inputs, navigation, layout, and the overall user experience.

It ensures the system is easy to use, clear, and user-friendly.

⭐ Explanation (Easy & Simple)

The Interface Design Model answers questions like:

✅ How will the screen look?
✅ Where will buttons, text fields, menus be placed?
✅ What steps will the user follow?
✅ How will the user give input and receive output?


It mainly deals with:


1. User Interface (UI) Layout

Screen design
Forms, labels, text boxes
Buttons, menus, icons


2. Interaction Mechanism

How user clicks
Keyboard inputs
Navigation flow


3. User Experience (UX)

Simplicity
Clarity
Easy navigation


4. Error Messages & Help

Proper warnings
Help messages
Input validation


⭐ Neat Diagram (ASCII Diagram)

             -----------------------------
            |     Interface Design Model   |
             -----------------------------
                        |
        ------------------------------------------------
        |                   |                          |
   Screen Layout       UI Components            Interaction Flow
 (Forms, menus,      (Buttons, textboxes,      (How user moves
  windows)            dropdowns, labels)         in screens)
        |                   |                          |
        ------------------------------------------------
                        |
                    User Experience
                (Simplicity, clarity,
                   easy to use)


Explanation of Each Part

1. Screen Layout

Shows the arrangement of items on each screen.
Example: Login screen with username box, password box, and login button.


2. UI Components

The elements the user interacts with.
Example: Buttons, text fields, checkboxes, menus, icons.


3. Interaction Flow

Shows how the user moves from one screen to another.
Example:
Login Screen → Home Screen → Settings Screen.




⭐ Why Interface Design is Important?

✔ Makes system easy to use
✔ Reduces user mistakes
✔ Improves speed of work
✔ Creates good user experience
✔ Increases software quality
      
      `},{id:52,question:"52. Interface Design Model",answer:"",codeExample:`
✅ Interface Design Model (IDM) – Explanation with Cycle Diagram

You wrote this diagram:

 User Analysis → Task Analysis → UI Design → UI Evaluation
          ↑__________________________________________↓
                (repeat until design becomes good)


Yes — THIS is the real Interface Design Model (IDM) lifecycle.
Below is the easy explanation of each phase.

✅ IDM Phases Explained (Simple & Easy Language)

1️⃣ User Analysis

👉 Understand who will use the system.

You find:

Who are the users?
What are their needs?
What problems do they face?
What is their experience level?

Example:
If you are designing a banking app:
Users → common people
Need → check balance, send money easily
They need simple buttons, clean UI.


2️⃣ Task Analysis

👉 Understand what tasks users will perform.

You find:

What steps users follow?
Which tasks are frequent?
Which tasks are difficult?

Example:
Banking App Tasks:

Login
Check balance
Transfer money
View history
You analyse each task step-by-step.


3️⃣ UI Design

👉 You design the actual interface.

Includes:

Layouts
Buttons
Forms
Navigation
Colors
Fonts
Interaction flow

Example:
Design transfer money screen:

Input amount textbox
Beneficiary dropdown
Send button
Confirmation page



4️⃣ UI Evaluation

👉 Test the UI with users → find problems → improve.

Checking:

Is UI easy?
Is it fast?
Any confusion?
Are buttons placed correctly?

Types of evaluation:

User testing
Expert review
Feedback forms



🔄 Cycle Explanation

 User Analysis → Task Analysis → UI Design → UI Evaluation
          ↑__________________________________________↓
             Repeat until design becomes perfect


This means:

1. First understand user
2. Then understand tasks
3. Then design UI
4. Then test UI

If problems found → again start from beginning

This is a loop / cycle.
Design improves step-by-step.


Purpose:
✔ Make UI simple
✔ Remove confusion
✔ Make user-friendly interface


⭐ SUMMARY (Very Short)

| Phase         | Meaning                            |
| --------------| ---------------------------------- |
| User Analysis | Know your user                     |
| Task Analysis | Know what user must do             |
| UI Design     | Create interface (screens/buttons) |
| UI Evaluation | Test UI and fix problems           |

This cycle repeats until UI becomes good.
      
      `},{id:53,question:"53. Internal vs External Design",answer:"",codeExample:`
Internal vs External Design (Software Engineering)

| Internal Design                                                   | External Design                                         |
| ----------------------------------------------------------------- | ------------------------------------------------------- |
| Describes how the system works inside                             | Describes how the system looks to the user              |
| Focus on system architecture, algorithms, data structures         | Focus on UI, reports, inputs/outputs                    |
| Done by developers/technical team                                 | Done with client + designers                            |
| Technical details not visible to users                            | Everything visible to end users                         |
| Includes class diagrams, ER diagrams, database design             | Includes mockups, screen designs, forms                 |
| Goal: Make system work correctly                                  | Goal: Make system easy to use                           |
| Examples: • How login data is checked • How database is connected | Examples: • Login page layout • Buttons, fields in form |

      

Simple Explanation

1. External Design (User Side)

This is what the user sees.

✔ Screens
✔ Buttons
✔ Forms
✔ Navigation
✔ Menus
✔ Error messages


Example:
Login screen with

“Username” box
“Password” box
“Login” button

User does not know what happens inside.



2. Internal Design (Developer Side)

This is what the developer builds inside the system.

✔ Database tables
✔ Classes & methods
✔ Algorithms
✔ Validation & business logic
✔ How form data is processed


Example (Login internal design):

Check username in database
Hash password
Compare stored hash
Start session

User cannot see this.


One-Line Difference

External Design: How system looks
Internal Design: How system works
      `},{id:54,question:"54. Explain UI Evaluation process.",answer:"",codeExample:`
  ✅ UI Evaluation Process (User Interface Evaluation)

UI Evaluation means checking whether the interface is good, easy to use, and works as expected for the
users.

It is done to find problems before finalizing the design.


⭐ Steps in UI Evaluation

1. Planning Evaluation

Decide what to test (usability, speed, errors).
Decide who will test (users or experts).
Decide how to test (observation, questionnaires, testing tasks).


2. Creating Test Scenarios

Prepare small tasks for users.

Example tasks:
  “Login to the system.”
  “Search for a product.”
  “Submit a form.”


3. Conducting the Evaluation

Users perform the tasks.

Designers observe:

  Are users confused?
  Are buttons clear?
  Is navigation easy?

This reveals usability problems.


4. Collecting Feedback

Ask users:
  What was easy?
  What was difficult?
  What should be improved?


Tools:
  Questionnaires
  Interviews
  Rating scale (1–5)


5. Analyzing Results

List all problems found (usability issues).

Example:
  “Button too small.”
  “Form has too many fields.”
  “Navigation is confusing.”


6. Improving the Design

Fix all the problems found:

  Simplify screens
  Increase readability
  Improve navigation
  Reduce errors


7. Re-Evaluation (Iterative Improvement)

Test again after changes.
Repeat until the UI becomes:
  Clear
  Easy
  Fast
  User-friendly


🎯 Simple Diagram (Text Form)
Planning → Create Tasks → Test with Users → Collect Feedback
        → Analyze → Improve Design → Re-Evaluate (Repeat)


✨ Summary (Very Short for Exam)

UI Evaluation is the process of testing the interface with users to check usability, find problems, and 
improve design. It includes planning, testing, observing users, collecting feedback, analyzing results, 
improving design, and retesting until the UI becomes perfect.
      
      `},{id:55,question:"55. Explain Information Display Design principles.",answer:"",codeExample:`
Information Display Design Principles (Easy & Simple)

These principles guide how information should be shown on screens so that the user understands easily and 
makes fewer mistakes.


1. Clarity

Information must be easy to read and understand.
Use simple language, readable fonts, and clear labels.

Example:
✔ “Enter Email” is clear
✘ “Provide electronic mail identification” is confusing


2. Consistency

Same style, same color, same button type across all screens.
Helps users learn the interface faster.

Example:
✔ All submit buttons look the same
✔ All headings use same font size


3. Minimizing User Memory Load

User should not remember things from one screen to another.
Show necessary info on the screen.

Example:
✔ Auto-fill user details
✔ Show password requirements near password box


4. Simplicity

Show only useful information.
Avoid cluttered screens.

Example:
✔ One form per screen
✔ Hide advanced options under “More Settings”


5. Grouping & Alignment

Related items should appear together.
Align textboxes and labels properly.

Example:
✔ Name, Email, Phone grouped under “Personal Details”
✔ Payment details grouped separately


6. Feedback

System should respond to user actions.

Example:
✔ “Form submitted successfully”
✔ “Incorrect password” error message


7. Use of Visual Hierarchy

Important items must look bigger or highlighted.
Helps the user focus.

Example:
✔ Main title → Large
✔ Button → Highlighted
✔ Description → Small


8. Appropriate Use of Colors

Use colors to guide attention, not confuse users.
Too many colors cause distraction.

Example:
✔ Red for errors
✔ Green for success
✔ Blue/gray for normal information


9. Readability

Text must be readable on all devices.
Use proper contrast.

Example:
✔ Black text on white background (good)
✘ Yellow text on white background (bad)


10. Use of Icons & Symbols

Icons help users understand quickly.
But icons must be simple and meaningful.

Example:
✔ Trash icon = Delete
✔ Magnifying glass = Search


11. Accessibility

Design should be usable by everyone, including disabled users.

Example:
✔ Provide text alternatives for images
✔ Enable keyboard navigation (Tab, Enter)


Short Summary (Exam Friendly)

Information Display Design means showing information in a way that is clear, simple, consistent, readable, 
grouped properly, uses visual hierarchy, gives feedback, and is accessible.

It reduces user confusion and increases usability.
      
      `},{id:56,question:"56. Concepts of UI",answer:"",codeExample:`
✅ Concepts of UI (User Interface)

UI refers to how a user interacts with a computer system, including screens, buttons, menus, forms, and 
overall layout.
Below are the main concepts of UI:


1. User-Centered Design (UCD)

UI is designed by keeping user needs first.
Focus on users’ goals, skills, expectations.


2. Consistency

Same colors, fonts, button styles, messages across all screens.
Helps users learn the system quickly.


3. Feedback

System should respond to user actions.
Examples:

“Loading…” message
Button highlight
Error message


4. Simplicity

UI should be simple, clean, and easy to understand.
Avoid unnecessary content or buttons.


5. Visibility

Important items must be visible.
Example:

Login button should be easy to find
Labels near input fields


6. Navigation

User should easily move from one screen to another.
Clear menus, next/back buttons, breadcrumbs.


7. Error Handling

Messages must be clear and helpful.
Example:

“Password must be 8 characters” instead of “Error”.


8. Affordance

UI elements should show what they can do.
Example:

Button looks clickable
Text box looks writable


9. Accessibility

UI must support all users including disabled users.

Example:
High contrast colors
Screen reader support
Keyboard navigation


10. Aesthetics (Look & Feel)

Good use of colors, spacing, fonts.
Visually pleasing and professional design.


11. Structure

Information must be organized logically.

Example:
Group related fields together (name, email, password)


12. Control

User should feel in control, not the system.

Examples:
Cancel button
Undo option
Editable fields


13. Responsiveness

UI should work on different screen sizes (mobile, tablet, desktop).


14. Learnability

UI should be easy to learn even for new users.
Familiar icons (home, search, settings).


15. Flexibility

Users should have multiple ways to perform a task.

Example:
Keyboard shortcuts + mouse actions



✅ Short Exam-Friendly Answer

UI concepts include:
User-centered design, consistency, feedback, simplicity, visibility, navigation, error handling, affordance, 
accessibility, aesthetics, structure, user control, responsiveness, learnability, and flexibility.
      
      `},{id:57,question:"57. What is Interaction Design?",answer:"",codeExample:`
⭐ What is Interaction Design? (IxD)

Interaction Design is the process of designing how a user interacts with a system (website, app, software, device).

It focuses on:

What actions users can perform
How the system responds
How smooth and easy the interaction feels

👉 Goal: Make the product easy, fast, and enjoyable to use.


⭐ Key Points of Interaction Design

✔ 1. User Actions

What users do:

Click
Type
Swipe
Drag
Select
Speak (voice commands)


✔ 2. System Response

How the system reacts:

Shows results
Displays errors
Loads new screen
Gives a notification


✔ 3. Feedback

System tells user something happened:

Button changes color
Progress bar moving
Message pops up (“Saved successfully”)


✔ 4. Usability

Interaction must be:

Simple
Clear
Fast
Error-free


✔ 5. Consistency

Same action → same response everywhere.
(Example: All buttons behave the same)


⭐ Example (Simple)
Example: Login Form Interaction

1️⃣ User enters username
2️⃣ User enters password
3️⃣ User clicks Login
4️⃣ System checks data
5️⃣ If correct → open dashboard
6️⃣ If wrong → show error message

(“Incorrect Password”)

👉 All these steps are Interaction Design.


⭐ Another Example (Mobile App)

  User swipes left → open menu
  User taps button → camera opens
  User pinches screen → image zooms

All are part of designing interactions.


⭐ Why Interaction Design is Important?

Makes app/website easier to use
Reduces user errors
Saves time
Increases user satisfaction
Improves experience (UX)
      
      `},{id:58,question:"58. What are the Golden Rules of User Interface Design?",answer:"",codeExample:`
✅ Golden Rules of User Interface Design

These rules were given by Ben Shneiderman to create easy, simple, user-friendly interfaces.


1️⃣ Strive for Consistency

Keep the same design everywhere
(same buttons, colors, fonts, layouts).

Users should not get confused.

Example: “Save” button always looks the same.


2️⃣ Allow Frequent Users to Use Shortcuts

Experienced users want to work faster.

Provide:
✓ Keyboard shortcuts (Ctrl + S)
✓ Auto-complete
✓ Command buttons


3️⃣ Offer Informative Feedback

System must always respond to user actions.

Example:
  “Loading…”
  “Form submitted successfully”
  Progress bars


4️⃣ Design Dialogs to Yield Closure

Every task should have a clear beginning and end.
Show confirmation messages.
Example: “Order Placed Successfully”.


5️⃣ Prevent Errors

Avoid mistakes before they happen.

Example:

Disable “Submit” until all fields are filled.
Show password strength indicators.


6️⃣ Permit Easy Undo & Redo

Users should be able to go back easily.
Prevents fear of making mistakes.
Example: Undo typing, undo delete.


7️⃣ Support Internal Locus of Control

User should feel in control, not the system.
Interface should be responsive.
No unexpected behaviors.


8️⃣ Reduce Short-Term Memory Load

Do not force users to remember too much.
Show information clearly.

Use:
✓ Menus
✓ Labels
✓ Hints
✓ Auto suggestions



⭐ Short Table for Exam

| Golden Rule          | Meaning                          |
| -------------------- | -------------------------------- |
| Consistency          | Same look & behavior everywhere  |
| Shortcuts            | Speed up frequent tasks          |
| Informative Feedback | System always responds           |
| Dialog Closure       | Clear end of every task          |
| Error Prevention     | Stop mistakes before they happen |
| Undo/Redo            | Easy recovery                    |
| User Control         | User feels in charge             |
| Reduce Memory Load   | Less remembering, more seeing    |

      
      `},{id:61,question:"61. Management Spectrum (People, Product, Process, Project)",answer:"",codeExample:`
Management Spectrum (People, Product, Process, Project)

This concept is used in Software Engineering to understand how a software project is managed.

It has 4 parts:


1️⃣ People

People are the team members who build the software.

Includes:

Project manager
Developers
Testers
Designers
Customers
Stakeholders

Why important?

Because good people = good software.



2️⃣ Product

Product means what you are building.

Includes:
  Requirements
  Features
  Goals
  Constraints (time, budget, technology)

What is done here?

Understand what the customer wants
Define scope
Prepare SRS (Software Requirement Specification)



3️⃣ Process

Process means steps or methods used to develop the product.

Examples of process models:
  Waterfall
  Agile / Scrum
  Spiral
  V-Model

Why needed?
A process gives:
  Proper planning
  Quality
  Reduced risk



4️⃣ Project

Project means actual execution of the product using the chosen process.

Includes:

Scheduling (timeline)
Cost estimation
Resource allocation
Risk management
Monitoring progress
Delivering final product


Simple Diagram

       --------------------------
       |   Management Spectrum  |
       --------------------------
        /         |            People      Product      Process
                                       Project


Simple Meaning

| Part    | Meaning                              |
| ------- | ------------------------------------ |
| People  | Who works on the software            |
| Product | What software is being built         |
| Process | How the software is built            |
| Project | Actual work to complete the software |


      `},{id:62,question:"62. W5HH Model",answer:"",codeExample:`
W5HH Model (Barry Boehm)

It is a project management framework that helps managers plan and control a software project.

It answers 7 questions:

5 W’s → What, Why, When, Who, Wher
2 H’s → How much, How


✅ W5HH Questions (Simple Explanation)

| Question                        | Meaning (Simple)                                                              |
| --------------------------------| ----------------------------------------------------------------------------- |
| 1. What needs to be done?       | What is the project goal? What features must be built? (Project requirements) |
| 2. Why is it being done?        | Why this project is needed? What problem will it solve?                       |
| 3. When will it be done?        | Timeline, schedule, deadlines.                                                |
| 4. Who will do it?              | Team members, roles, responsibilities.                                        |
| 5. Where will the work be done? | Development location, tools, platforms.                                       |
| 6. How much will it cost?       | Budget, resources, estimated cost.                                            |
| 7. How will the work be done?   | Methodology (Agile/Waterfall), technologies, tools, process.                  |



✅ Simple Example

Suppose you are building a Food Delivery App:

| Question  | Example Answer                                    |
| --------- | ------------------------------------------------- |
| What?     | Build a mobile app for ordering food.             |
| Why?      | To allow customers to order food online easily.   |
| When?     | Complete in 3 months.                             |
| Who?      | 2 developers, 1 designer, 1 tester.               |
| Where?    | Work from office using Android Studio & Firebase. |
| How much? | ₹2,50,000 budget.                                 |
| How?      | Use Agile method, weekly sprints.                 |


✅ Why W5HH is used?

Helps in clear planning
Avoids confusion in project
Ensures everyone knows what to do
Helps estimate time, cost & roles clearly
      
      `},{id:63,question:"63. Risk Management (Identification + Assessment + Control)",answer:"",codeExample:`
⭐ Risk Management (Identification + Assessment + Control)

Risk Management means finding problems before they occur, analyzing how dangerous they are, and 
taking steps to reduce or avoid them.

It has three main steps:

✅ 1. Risk Identification (Find the risks)

This step finds all possible risks that may affect the project.

Examples of risks

  Programmer may leave the job
  Requirements may change
  Project may delay
  Hardware failure
  Budget may increase
  Client may not cooperate
  Technology may be new/difficult

Goal:
👉 Make a list of all possible risks.



✅ 2. Risk Assessment (Check seriousness of each risk)

After identifying risks, we check:

Two things:

1. Probability → How likely the risk will happen (Low / Medium / High)
2. Impact → If it happens, how much damage it will cause

Example Table

| Risk                | Probability | Impact | Priority  |
| ------------------- | ----------- | ------ | --------- |
| Developer leaves    | High        | High   | Very High |
| Requirement changes | Medium      | High   | High      |
| Hardware failure    | Low         | Medium | Medium    |
| Budget overrun      | Medium      | High   | High      |

Goal:
👉 Decide which risks are most dangerous.



✅ 3. Risk Control (Reduce or avoid risks)

After assessment, we create a plan to deal with each risk.

Three methods:

1. Risk Avoidance

Stop the situation completely.
✔ Use stable technology instead of new experimental tech.


2. Risk Mitigation (Reduce impact)

Take actions to reduce damage.
✔ Backup data
✔ Hire extra staff
✔ Prepare alternate suppliers


3. Risk Monitoring

Regularly check if the risk has changed or increased.

Example Table

| Risk               | Strategy Type  | Control Plan                               |
| ------------------ | -------------- | ------------------------------------------ |
| Developer leaves   | Mitigation     | Keep backup developer, documentation       |
| Requirement change | Avoid/Mitigate | Freeze requirements early, client meetings |
| Hardware failure   | Mitigation     | Maintain backup hardware                   |
| Budget problem     | Monitoring     | Weekly cost review                         |

Goal:
  👉 Make sure the risk does not stop the project.



⭐ Summary (Very Short for Exams)

Risk Identification: Find all possible risks.
Risk Assessment: Measure probability + impact.
Risk Control: Take actions to avoid, reduce, or monitor risks.

      `},{id:64,question:"64. Effort Estimation (Top-down vs Bottom-up)",answer:"",codeExample:`
Effort Estimation

Effort estimation means predicting how much time, cost, and manpower are needed to complete a 
software project.

Two common estimation methods:

✅ 1. Top-Down Estimation
Meaning:

Estimate the entire project first, then divide it into small tasks.

How it works (in steps):

1. Start with total project size (overall view).
2. Set estimated time/cost for the whole system.
3. Divide it into modules and assign effort to each part.

When useful:

  Early stages
  Requirements not fully clear
  Manager-level estimation

Example:

Manager estimates the whole project needs 6 months, then splits:

| Module       | Estimated Time |
| ------------ | -------------- |
| Login Module | 1 month        |
| Dashboard    | 2 months       |
| Reports      | 2 months       |
| Testing      | 1 month        |



✅ 2. Bottom-Up Estimation

Meaning:
Estimate each small task first, then combine them to get the total effort.

How it works (in steps):

1. Break project into detailed tasks.
2. Estimate effort for each task.
3. Add all task efforts = total estimate.

When useful:

  Requirements are clear
  Detailed planning stage
  Developer-level estimation

Example:

Login Module tasks:

| Task           | Time   |
| -------------- | ------ |
| UI Design      | 3 days |
| Backend coding | 4 days |
| Validation     | 2 days |
| Testing        | 1 day  |

Total = 10 days for Login module
Similarly estimate all modules → Sum → Final project effort.



Top-Down vs Bottom-Up – Difference Table

| Top-Down                         | Bottom-Up                            |
| -------------------------------- | ------------------------------------ |
| Estimate whole project first     | Estimate small tasks first           |
| Less detailed                    | Very detailed                        |
| Quick rough estimate             | Accurate estimate                    |
| Useful when requirements unclear | Useful when project fully understood |
| Done by managers                 | Done by developers                   |
| May lack accuracy                | More accurate                        |

      `},{id:65,question:"65. Software Scope & Feasibility",answer:"",codeExample:`
⭐ Software Scope & Feasibility
1️⃣ What is Software Scope?

Software Scope means what the system will do and what it will NOT do.
It defines the boundaries of the project.

Software Scope includes:
  ✔ Objectives (Why system is needed?)
  ✔ Functions (What system will do?)
  ✔ Features (Modules, reports, UI screens)
  ✔ Inputs/Outputs (What data comes in? What goes out?)
  ✔ Users (Who will use the system?)
  ✔ Constraints (Time, budget, technology limits)

Example (Easy):
Project: Online Food Ordering System


Scope includes:

User login
Show restaurants
Add to cart
Payment

Scope excludes:

Delivery tracking
Restaurant management

➡️ Scope protects project from extra unnecessary work.



⭐ 2️⃣ What is Feasibility?

Feasibility means checking can we really build this project successfully or not?

It tells whether the project is:

  Possible
  Affordable
  Useful
  Technically doable


Types of Feasibility:

✔ 1. Technical Feasibility

Checks:
  Do we have the required technology, hardware, software, skills?

Example:
If a mobile app requires AI but team doesn’t know AI → Not feasible.


✔ 2. Economic Feasibility (Cost–Benefit Analysis)

Checks:
  Is project worth the money?
  Will benefits > cost?

Example:
Project cost = ₹5 lakh
Expected yearly benefit = ₹10 lakh → Economically feasible


✔ 3. Operational Feasibility

Checks:
  Will users accept the system?
  Will it improve the current process?

Example:
If employees find new software too complex → Not operationally feasible.


✔ 4. Time Feasibility

Checks:
  Can the project be completed within deadline?

Example:
Client needs app in 1 month but development needs 3 months → Not feasible.


✔ 5. Legal Feasibility

Checks:
  Does the system follow laws & rules?

Example:
Storing customer data must follow privacy laws.


✔ 6. Resource Feasibility

Checks:
  Do we have enough people?
  Enough machines?
  Enough tools?

⭐ Relationship: Scope + Feasibility

| Step              | Meaning                                |
| ------------------| -------------------------------------- |
| Define Scope      | What the system must do                |
| Check Feasibility | Can we build that scope within limits? |

➡️ Scope says WHAT to build, Feasibility checks CAN we build it.



Short Exam Answer (If teacher wants 4–6 marks)

Software Scope:
Software scope defines the boundaries of a software project. It specifies the goals, features, functions, users, 
inputs, outputs and constraints of the system. It tells what the system will do and what it will not do. A clear 
scope prevents misunderstandings and scope creep.

Feasibility:
Feasibility checks whether the project is practical and possible. It examines technical, economic, operational, 
time, legal and resource factors. If the project is feasible, development can start. If not, scope must be 
reduced or project dropped.
      
      `},{id:66,question:"66. Schedule & Staffing",answer:"",codeExample:`
✅ Schedule & Staffing (Simple Explanation)

When we build software, we must decide:

1. How long the project will take → Schedule
2. How many people are needed and their skills → Staffing


🕒 1. Schedule (Project Timeline)

Schedule means when each task will start and finish.

✔ What schedule includes?

Breaking the project into small tasks
Estimating time for each task
Arranging tasks on a timeline
Finding which tasks depend on others
Creating Gantt chart / timeline


✔ Why schedule is important?

Helps finish project on time
Helps track delays
Helps manage cost
Helps assign work properly


✔ Example:

Requirement Gathering – 1 week
Design               – 2 weeks
Coding               – 4 weeks
Testing              – 2 weeks
Deployment           – 1 week




👥 2. Staffing (People Needed for the Project)

Staffing means deciding how many developers, testers, designers, etc., are required.

✔ What staffing includes?

Identify required skills
(Java, PHP, UX design, DB admin…)

Decide number of team members
Assign correct person to correct task
Monitor workload
Balance work among team


✔ Typical software team:

1 Project Manager
1 System Analyst
2–5 Developers
1–2 Testers
1 UI/UX Designer


📌 Relationship Between Schedule & Staffing

More staff → Project finishes faster (sometimes)
Less staff → Project takes longer
Too many people → Confusion (Brooks' Law)
Right staffing = balanced schedule



📝 Short Example

If coding needs 4 weeks:
  1 developer → 4 weeks
  2 developers → maybe 2.5–3 weeks
  5 developers → not fast, because too many people cause coordination issues


⭐ Final Summary

| Topic    | Meaning                                            |
| ---------| -------------------------------------------------- |
| Schedule | Time required to complete project tasks            |
| Staffing | People and skills required to complete the project |
| Goal     | Finish project on time with correct team size      |
      
      `},{id:67,question:"67. Risk Exposure",answer:"",codeExample:`
Risk Exposure (RE)

Risk Exposure means how much loss (damage) a project may face because of a risk.
It shows how serious a risk is.

Formula
  Risk Exposure (RE) = Probability of Risk × Impact (Loss)


Meaning of Formula
  Probability = chance that the risk will happen
  Impact = how big the loss will be if the risk occurs
  Multiply both to know total danger level of that risk.


Simple Example

Example Risk:

“Developer may leave the company.”
  Probability = 0.3 (30% chance)
  Impact = ₹50,000 (cost of hiring + training new employee)

Calculate:
  𝑅𝐸 = 0.3 × 50000 = 15000

So, Risk Exposure = ₹15,000
→ This means the project might lose ₹15,000 because of this risk.


Why Risk Exposure is Useful?
  Helps to compare many risks
  Helps decide which risk should be handled first
  High RE = dangerous risk
  Low RE = not serious

One More Simple Example Table

| Risk                               | Probability | Impact (₹) | RE (₹) | Priority |
| ---------------------------------- | ----------- | ---------- | ------ | -------- |
| Server failure                     | 0.2         | 100,000    | 20,000 | High     |
| Developer absence                  | 0.4         | 20,000     | 8,000  | Medium   |
| Delay in delivery from client side | 0.1         | 50,000     | 5,000  | Low      |


Short Definition (exam-ready)

Risk Exposure is the expected loss due to a risk, calculated as Probability × Impact. It helps prioritize risks 
and understand which risks are most harmful to the project.
      
      `},{id:71,question:"71. Definition + Need of CASE",answer:"",codeExample:`
  ✅ CASE – Definition

CASE = Computer-Aided Software Engineering

It means software tools that help in:

  Developing software
  Designing diagrams
  Writing code
  Testing
  Maintaining projects

Example CASE tools:
StarUML, Visual Paradigm, Git, Eclipse, VS Code, Postman, Jenkins, Jira, Selenium, etc.


✅ Need of CASE (Why we use CASE tools?) 


| Reason / Need             | Explanation (Easy)                                                            |
| --------------------------| ----------------------------------------------------------------------------- |
| 1. Reduce manual work     | CASE tools automatically create diagrams, documents, and code.                |
| 2. Improve quality        | Fewer human errors → better software.                                         |
| 3. Increase speed         | Development becomes faster using automation.                                  |
| 4. Better documentation   | Tools generate reports, diagrams, database schemas.                           |
| 5. Easy maintenance       | Changes in design automatically update documentation.                         |
| 6. Team collaboration     | Helps many developers work together smoothly.                                 |
| 7. Better project control | Helps in project tracking, version control, requirements management.          |
| 8. Standardization        | Ensures that all designs follow proper rules and standards.                   |
| 9. Cost saving            | Less effort + fewer errors → cheaper development.                             |
| 10. Supports full SDLC    | CASE tools help in all phases: analysis, design, coding, testing, deployment. |



✅ Simple Example

You use StarUML to draw use-case diagrams, class diagrams, etc.
→ You don’t draw manually → Tool supports you → This is CASE.

You use Selenium for automated testing → This is also a CASE tool.
      
      
      `},{id:72,question:"72. Building Blocks of CASE (with diagram)",answer:"",codeExample:`
✅ Building Blocks of CASE

CASE tools help automate software engineering tasks like designing, coding, testing, documentation, etc.

CASE environment is built using three main building blocks:


1️⃣ CASE Tools

These are the actual software tools used by developers.

Examples:

  Upper CASE tools → requirement analysis, DFD, ER diagrams
  Lower CASE tools → coding, debugging, testing tools
  Integrated CASE tools → both upper + lower

These tools automate tasks and improve quality.


2️⃣ CASE Repository (Project Database)

  Central storage/warehouse for all project information
  Stores: requirements, diagrams, code, test cases, documentation
  Helps in version control, consistency, and team collaboration

Think of it like a shared Google Drive for the software project.


3️⃣ CASE Methodology

Step-by-step process/model used in the project

Examples:

  Waterfall
  Agile
  Spiral
  RUP

Provides rules, guidelines, standards for using CASE tools.


🟦 Diagram: Building Blocks of CASE

                  ---------------------------
                  |        CASE System      |
                  ---------------------------
                             |
     ----------------------------------------------------
     |                       |                         |
------------------   ----------------------   -------------------------
|   CASE Tools    |   |   CASE Repository   |   |   CASE Methodology  |
------------------   ----------------------   -------------------------
(DFD tool, ER tool,  (Central database for      (Processes, rules,
 design tools,        diagrams, code, docs)      standards, models)
 testing tools...)



📝 Short Explanation

CASE Tools = What you use
CASE Repository = Where you store project information
CASE Methodology = How you use the tools (process/model)

Together, they create a complete CASE environment that supports automation, efficiency, and quality in 
software engineering.
      
      `},{id:73,question:"73. Integrated CASE Environment (with layers)",answer:"",codeExample:`
✅ Integrated CASE Environment (I-CASE)

It is a complete software development environment that combines many CASE tools into one unified 
system so that all tools work together smoothly.

It supports entire SDLC → Analysis → Design → Coding → Testing → Maintenance.


✅ Why Integrated CASE?

Because separate tools don't share data.
I-CASE allows:

  Shared common database (repository)
  No need to re-enter same information
  Tools communicate with each other
  Better consistency & faster development


✅ Layers of Integrated CASE Environment (Diagram + Explanation)
Diagram (simple)

          ------------------------------
          |     Presentation Layer     |
          | (UI: menus, forms, screens)|
          ------------------------------
                       |
          ------------------------------
          |     Control / Process      |
          | (Manage tools & workflows) |
          ------------------------------
                       |
          ------------------------------
          |     Repository Layer       |
          | (Data storage for diagrams,|
          |  code, documents, models)  |
          ------------------------------
                       |
          ------------------------------
          |   System Infrastructure    |
          | (OS, hardware, DB engine)  |
          ------------------------------


✅ Explanation of Each Layer

1️⃣ Presentation Layer (Top Layer)

What the user sees.
Interfaces like GUI, menus, toolbar, dialogs.
Helps users interact with CASE tools.

Example:
– A window where you draw a DFD or ER diagram.


2️⃣ Control / Process Layer (Middle Layer)

Controls how tools work together.
Manages tasks, communication, workflows.

Example:
– When you update an ER diagram,
the system automatically updates the relational schema.


3️⃣ Repository Layer (Core Layer)

A central database storing:

Diagrams

  Requirements
  Source code
  Test cases
  Documentation

Repository = Heart of I-CASE

All tools read/write from the same place → maintains consistency.


4️⃣ System Infrastructure Layer (Bottom Layer)

  Hardware
  Operating system
  Database engine
  Network

Supports all upper layers.

Example:
– Windows/Linux OS
– Oracle/MySQL database for repository



✅ Simple Summary

| Layer                | Purpose                         |
| ---------------------| ------------------------------- |
| Presentation Layer   | User interface (screens, menus) |
| Process Layer        | Manages tools & workflows       |
| Repository Layer     | Stores all project information  |
| Infrastructure Layer | OS, hardware, DB support        |

      
      `},{id:74,question:"74. Types of CASE Tools (any 6)",answer:"",codeExample:`
✅ Types of CASE Tools (any 6)

CASE = Computer-Aided Software Engineering tools
These tools help in different phases of software development.


1️⃣ Requirement Analysis Tools

Used to collect and model requirements.

Examples:
– Rational RequisitePro
– JIRA
– Trello

Use:
Helps create SRS, diagrams, requirement lists.


2️⃣ Design Tools

Used to draw system design diagrams.

Examples:
– StarUML
– MS Visio
– Lucidchart

Use:
Helps create DFD, ERD, UML diagrams.


3️⃣ Code Generation Tools

Automatically generate source code from design.

Examples:
– Visual Studio Designer
– Android Studio UI code generator

Use:
Creates boilerplate code (forms, classes, UI).


4️⃣ Testing Tools

Used to test software for bugs.

Examples:
– Selenium
– JUnit
– LoadRunner

Use:
Automated testing, performance testing.


5️⃣ Debugging Tools

Used to find and fix errors.

Examples:
– Visual Studio Debugger
– Eclipse Debugger

Use:
Step-by-step execution, watch variables, breakpoints.


6️⃣ Project Management Tools

Used to plan and track software projects.

Examples:
– MS Project
– JIRA
– Asana

Use:
Scheduling, tracking progress, assigning tasks.


7️⃣ Documentation Tools

Used to prepare software documentation.

Examples:
– MS Word templates
– Doxygen
– Sphinx

Use:
Generates user manuals, reports, API docs.


8️⃣ Configuration Management Tools

Used to manage versions of code.

Examples:
– Git
– GitHub
– SVN

Use:
Version control, teamwork, rollback.




⭐ Write any 6 in exam

You can choose:

Requirement Analysis Tools
Design Tools
Code Generation Tools
Testing Tools
Debugging Tools
Project Management Tools

This is enough for full marks.
      
      `},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""},{id:57,question:"57. ",answer:"",codeExample:""}],p=U=>{de(x===U?null:U)};return He.jsxs("div",{className:"app-container",children:[He.jsx("h1",{children:"SE Interview Questions"}),He.jsx("div",{className:"questions-container",children:F.map(U=>He.jsxs("div",{className:"question-item",children:[He.jsx("button",{className:`question-button ${x===U.id?"active":""}`,onClick:()=>p(U.id),children:U.question}),x===U.id&&He.jsxs("div",{className:"answer-container",children:[He.jsxs("div",{className:"answer",children:[He.jsx("h3",{children:"Answer:"}),He.jsx("p",{children:U.answer})]}),U.codeExample&&He.jsxs("div",{className:"code-example",children:[He.jsx("h3",{children:"Code Example:"}),He.jsx("pre",{children:He.jsx("code",{children:U.codeExample})})]})]})]},U.id))})]})}ap.createRoot(document.getElementById("root")).render(He.jsx(Df.StrictMode,{children:He.jsx(np,{})}));

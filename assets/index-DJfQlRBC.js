(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))g(O);new MutationObserver(O=>{for(const J of O)if(J.type==="childList")for(const he of J.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&g(he)}).observe(document,{childList:!0,subtree:!0});function W(O){const J={};return O.integrity&&(J.integrity=O.integrity),O.referrerPolicy&&(J.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?J.credentials="include":O.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function g(O){if(O.ep)return;O.ep=!0;const J=W(O);fetch(O.href,J)}})();var no={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md;function Kh(){if(md)return Sl;md=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function W(g,O,J){var he=null;if(J!==void 0&&(he=""+J),O.key!==void 0&&(he=""+O.key),"key"in O){J={};for(var Oe in O)Oe!=="key"&&(J[Oe]=O[Oe])}else J=O;return O=J.ref,{$$typeof:M,type:g,key:he,ref:O!==void 0?O:null,props:J}}return Sl.Fragment=fe,Sl.jsx=W,Sl.jsxs=W,Sl}var hd;function Jh(){return hd||(hd=1,no.exports=Kh()),no.exports}var Ne=Jh(),lo={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function Fh(){if(gd)return k;gd=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ce=Symbol.iterator;function Je(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ue=Object.assign,Ct={};function Fe(r,E,A){this.props=r,this.context=E,this.refs=Ct,this.updater=A||He}Fe.prototype.isReactComponent={},Fe.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Fe.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Jt(){}Jt.prototype=Fe.prototype;function qe(r,E,A){this.props=r,this.context=E,this.refs=Ct,this.updater=A||He}var st=qe.prototype=new Jt;st.constructor=qe,Ue(st,Fe.prototype),st.isPureReactComponent=!0;var Et=Array.isArray;function Be(){}var X={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function wt(r,E,A){var x=A.ref;return{$$typeof:M,type:r,key:E,ref:x!==void 0?x:null,props:A}}function La(r,E){return wt(r.type,E,r.props)}function Dt(r){return typeof r=="object"&&r!==null&&r.$$typeof===M}function Le(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(A){return E[A]})}var ba=/\/+/g;function zt(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Le(""+r.key):E.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Be,Be):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,E,A,x,N){var j=typeof r;(j==="undefined"||j==="boolean")&&(r=null);var $=!1;if(r===null)$=!0;else switch(j){case"bigint":case"string":case"number":$=!0;break;case"object":switch(r.$$typeof){case M:case fe:$=!0;break;case I:return $=r._init,v($(r._payload),E,A,x,N)}}if($)return N=N(r),$=x===""?"."+zt(r,0):x,Et(N)?(A="",$!=null&&(A=$.replace(ba,"$&/")+"/"),v(N,E,A,"",function(Mn){return Mn})):N!=null&&(Dt(N)&&(N=La(N,A+(N.key==null||r&&r.key===N.key?"":(""+N.key).replace(ba,"$&/")+"/")+$)),E.push(N)),1;$=0;var _e=x===""?".":x+":";if(Et(r))for(var ge=0;ge<r.length;ge++)x=r[ge],j=_e+zt(x,ge),$+=v(x,E,A,j,N);else if(ge=Je(r),typeof ge=="function")for(r=ge.call(r),ge=0;!(x=r.next()).done;)x=x.value,j=_e+zt(x,ge++),$+=v(x,E,A,j,N);else if(j==="object"){if(typeof r.then=="function")return v(yt(r),E,A,x,N);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return $}function D(r,E,A){if(r==null)return r;var x=[],N=0;return v(r,x,"","",function(j){return E.call(A,j,N++)}),x}function _(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(A){(r._status===0||r._status===-1)&&(r._status=1,r._result=A)},function(A){(r._status===0||r._status===-1)&&(r._status=2,r._result=A)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ie={map:D,forEach:function(r,E,A){D(r,function(){E.apply(this,arguments)},A)},count:function(r){var E=0;return D(r,function(){E++}),E},toArray:function(r){return D(r,function(E){return E})||[]},only:function(r){if(!Dt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return k.Activity=U,k.Children=ie,k.Component=Fe,k.Fragment=W,k.Profiler=O,k.PureComponent=qe,k.StrictMode=g,k.Suspense=q,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,k.__COMPILER_RUNTIME={__proto__:null,c:function(r){return X.H.useMemoCache(r)}},k.cache=function(r){return function(){return r.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(r,E,A){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var x=Ue({},r.props),N=r.key;if(E!=null)for(j in E.key!==void 0&&(N=""+E.key),E)!je.call(E,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&E.ref===void 0||(x[j]=E[j]);var j=arguments.length-2;if(j===1)x.children=A;else if(1<j){for(var $=Array(j),_e=0;_e<j;_e++)$[_e]=arguments[_e+2];x.children=$}return wt(r.type,N,x)},k.createContext=function(r){return r={$$typeof:he,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:J,_context:r},r},k.createElement=function(r,E,A){var x,N={},j=null;if(E!=null)for(x in E.key!==void 0&&(j=""+E.key),E)je.call(E,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(N[x]=E[x]);var $=arguments.length-2;if($===1)N.children=A;else if(1<$){for(var _e=Array($),ge=0;ge<$;ge++)_e[ge]=arguments[ge+2];N.children=_e}if(r&&r.defaultProps)for(x in $=r.defaultProps,$)N[x]===void 0&&(N[x]=$[x]);return wt(r,j,N)},k.createRef=function(){return{current:null}},k.forwardRef=function(r){return{$$typeof:Oe,render:r}},k.isValidElement=Dt,k.lazy=function(r){return{$$typeof:I,_payload:{_status:-1,_result:r},_init:_}},k.memo=function(r,E){return{$$typeof:w,type:r,compare:E===void 0?null:E}},k.startTransition=function(r){var E=X.T,A={};X.T=A;try{var x=r(),N=X.S;N!==null&&N(A,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(Be,te)}catch(j){te(j)}finally{E!==null&&A.types!==null&&(E.types=A.types),X.T=E}},k.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},k.use=function(r){return X.H.use(r)},k.useActionState=function(r,E,A){return X.H.useActionState(r,E,A)},k.useCallback=function(r,E){return X.H.useCallback(r,E)},k.useContext=function(r){return X.H.useContext(r)},k.useDebugValue=function(){},k.useDeferredValue=function(r,E){return X.H.useDeferredValue(r,E)},k.useEffect=function(r,E){return X.H.useEffect(r,E)},k.useEffectEvent=function(r){return X.H.useEffectEvent(r)},k.useId=function(){return X.H.useId()},k.useImperativeHandle=function(r,E,A){return X.H.useImperativeHandle(r,E,A)},k.useInsertionEffect=function(r,E){return X.H.useInsertionEffect(r,E)},k.useLayoutEffect=function(r,E){return X.H.useLayoutEffect(r,E)},k.useMemo=function(r,E){return X.H.useMemo(r,E)},k.useOptimistic=function(r,E){return X.H.useOptimistic(r,E)},k.useReducer=function(r,E,A){return X.H.useReducer(r,E,A)},k.useRef=function(r){return X.H.useRef(r)},k.useState=function(r){return X.H.useState(r)},k.useSyncExternalStore=function(r,E,A){return X.H.useSyncExternalStore(r,E,A)},k.useTransition=function(){return X.H.useTransition()},k.version="19.2.0",k}var pd;function co(){return pd||(pd=1,lo.exports=Fh()),lo.exports}var Dd=co(),io={exports:{}},bl={},so={exports:{}},uo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;function Wh(){return yd||(yd=1,(function(M){function fe(v,D){var _=v.length;v.push(D);e:for(;0<_;){var te=_-1>>>1,ie=v[te];if(0<O(ie,D))v[te]=D,v[_]=ie,_=te;else break e}}function W(v){return v.length===0?null:v[0]}function g(v){if(v.length===0)return null;var D=v[0],_=v.pop();if(_!==D){v[0]=_;e:for(var te=0,ie=v.length,r=ie>>>1;te<r;){var E=2*(te+1)-1,A=v[E],x=E+1,N=v[x];if(0>O(A,_))x<ie&&0>O(N,A)?(v[te]=N,v[x]=_,te=x):(v[te]=A,v[E]=_,te=E);else if(x<ie&&0>O(N,_))v[te]=N,v[x]=_,te=x;else break e}}return D}function O(v,D){var _=v.sortIndex-D.sortIndex;return _!==0?_:v.id-D.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;M.unstable_now=function(){return J.now()}}else{var he=Date,Oe=he.now();M.unstable_now=function(){return he.now()-Oe}}var q=[],w=[],I=1,U=null,ce=3,Je=!1,He=!1,Ue=!1,Ct=!1,Fe=typeof setTimeout=="function"?setTimeout:null,Jt=typeof clearTimeout=="function"?clearTimeout:null,qe=typeof setImmediate<"u"?setImmediate:null;function st(v){for(var D=W(w);D!==null;){if(D.callback===null)g(w);else if(D.startTime<=v)g(w),D.sortIndex=D.expirationTime,fe(q,D);else break;D=W(w)}}function Et(v){if(Ue=!1,st(v),!He)if(W(q)!==null)He=!0,Be||(Be=!0,Le());else{var D=W(w);D!==null&&yt(Et,D.startTime-v)}}var Be=!1,X=-1,je=5,wt=-1;function La(){return Ct?!0:!(M.unstable_now()-wt<je)}function Dt(){if(Ct=!1,Be){var v=M.unstable_now();wt=v;var D=!0;try{e:{He=!1,Ue&&(Ue=!1,Jt(X),X=-1),Je=!0;var _=ce;try{t:{for(st(v),U=W(q);U!==null&&!(U.expirationTime>v&&La());){var te=U.callback;if(typeof te=="function"){U.callback=null,ce=U.priorityLevel;var ie=te(U.expirationTime<=v);if(v=M.unstable_now(),typeof ie=="function"){U.callback=ie,st(v),D=!0;break t}U===W(q)&&g(q),st(v)}else g(q);U=W(q)}if(U!==null)D=!0;else{var r=W(w);r!==null&&yt(Et,r.startTime-v),D=!1}}break e}finally{U=null,ce=_,Je=!1}D=void 0}}finally{D?Le():Be=!1}}}var Le;if(typeof qe=="function")Le=function(){qe(Dt)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,zt=ba.port2;ba.port1.onmessage=Dt,Le=function(){zt.postMessage(null)}}else Le=function(){Fe(Dt,0)};function yt(v,D){X=Fe(function(){v(M.unstable_now())},D)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(v){v.callback=null},M.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<v?Math.floor(1e3/v):5},M.unstable_getCurrentPriorityLevel=function(){return ce},M.unstable_next=function(v){switch(ce){case 1:case 2:case 3:var D=3;break;default:D=ce}var _=ce;ce=D;try{return v()}finally{ce=_}},M.unstable_requestPaint=function(){Ct=!0},M.unstable_runWithPriority=function(v,D){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var _=ce;ce=v;try{return D()}finally{ce=_}},M.unstable_scheduleCallback=function(v,D,_){var te=M.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?te+_:te):_=te,v){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=_+ie,v={id:I++,callback:D,priorityLevel:v,startTime:_,expirationTime:ie,sortIndex:-1},_>te?(v.sortIndex=_,fe(w,v),W(q)===null&&v===W(w)&&(Ue?(Jt(X),X=-1):Ue=!0,yt(Et,_-te))):(v.sortIndex=ie,fe(q,v),He||Je||(He=!0,Be||(Be=!0,Le()))),v},M.unstable_shouldYield=La,M.unstable_wrapCallback=function(v){var D=ce;return function(){var _=ce;ce=D;try{return v.apply(this,arguments)}finally{ce=_}}}})(uo)),uo}var vd;function Ih(){return vd||(vd=1,so.exports=Wh()),so.exports}var oo={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function $h(){if(Sd)return Re;Sd=1;var M=co();function fe(q){var w="https://react.dev/errors/"+q;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)w+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+q+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var g={d:{f:W,r:function(){throw Error(fe(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},O=Symbol.for("react.portal");function J(q,w,I){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:U==null?null:""+U,children:q,containerInfo:w,implementation:I}}var he=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Oe(q,w){if(q==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Re.createPortal=function(q,w){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(fe(299));return J(q,w,null,I)},Re.flushSync=function(q){var w=he.T,I=g.p;try{if(he.T=null,g.p=2,q)return q()}finally{he.T=w,g.p=I,g.d.f()}},Re.preconnect=function(q,w){typeof q=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,g.d.C(q,w))},Re.prefetchDNS=function(q){typeof q=="string"&&g.d.D(q)},Re.preinit=function(q,w){if(typeof q=="string"&&w&&typeof w.as=="string"){var I=w.as,U=Oe(I,w.crossOrigin),ce=typeof w.integrity=="string"?w.integrity:void 0,Je=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;I==="style"?g.d.S(q,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:U,integrity:ce,fetchPriority:Je}):I==="script"&&g.d.X(q,{crossOrigin:U,integrity:ce,fetchPriority:Je,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Re.preinitModule=function(q,w){if(typeof q=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var I=Oe(w.as,w.crossOrigin);g.d.M(q,{crossOrigin:I,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&g.d.M(q)},Re.preload=function(q,w){if(typeof q=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var I=w.as,U=Oe(I,w.crossOrigin);g.d.L(q,I,{crossOrigin:U,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Re.preloadModule=function(q,w){if(typeof q=="string")if(w){var I=Oe(w.as,w.crossOrigin);g.d.m(q,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:I,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else g.d.m(q)},Re.requestFormReset=function(q){g.d.r(q)},Re.unstable_batchedUpdates=function(q,w){return q(w)},Re.useFormState=function(q,w,I){return he.H.useFormState(q,w,I)},Re.useFormStatus=function(){return he.H.useHostTransitionStatus()},Re.version="19.2.0",Re}var bd;function Ph(){if(bd)return oo.exports;bd=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),oo.exports=$h(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function eg(){if(Ed)return bl;Ed=1;var M=Ih(),fe=co(),W=Ph();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(J(e)!==e)throw Error(g(188))}function w(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return q(l),e;if(i===n)return q(l),t;i=i.sibling}throw Error(g(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,u=l.child;u;){if(u===a){s=!0,a=l,n=i;break}if(u===n){s=!0,n=l,a=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===a){s=!0,a=i,n=l;break}if(u===n){s=!0,n=i,a=l;break}u=u.sibling}if(!s)throw Error(g(189))}}if(a.alternate!==n)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function I(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=I(e),t!==null)return t;e=e.sibling}return null}var U=Object.assign,ce=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Jt=Symbol.for("react.consumer"),qe=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),Et=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),La=Symbol.for("react.memo_cache_sentinel"),Dt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Dt&&e[Dt]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function zt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ue:return"Fragment";case Fe:return"Profiler";case Ct:return"StrictMode";case Et:return"Suspense";case Be:return"SuspenseList";case wt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case qe:return e.displayName||"Context";case Jt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:zt(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return zt(e(t))}catch{}}return null}var yt=Array.isArray,v=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function r(e){return{current:e}}function E(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function A(e,t){ie++,te[ie]=e.current,e.current=t}var x=r(null),N=r(null),j=r(null),$=r(null);function _e(e,t){switch(A(j,t),A(N,e),A(x,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nf(t),e=Hf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(x),A(x,e)}function ge(){E(x),E(N),E(j)}function Mn(e){e.memoizedState!==null&&A($,e);var t=x.current,a=Hf(t,e.type);t!==a&&(A(N,e),A(x,a))}function El(e){N.current===e&&(E(x),E(N)),$.current===e&&(E($),gl._currentValue=_)}var ji,ro;function Ea(e){if(ji===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||"",ro=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ji+e+ro}var Li=!1;function Yi(e,t){if(!e||Li)return"";Li=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(p){var h=p}Reflect.construct(e,[],b)}else{try{b.call()}catch(p){h=p}e.call(b.prototype)}}else{try{throw Error()}catch(p){h=p}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var o=s.split(`
`),m=u.split(`
`);for(l=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;if(n===o.length||l===m.length)for(n=o.length-1,l=m.length-1;1<=n&&0<=l&&o[n]!==m[l];)l--;for(;1<=n&&0<=l;n--,l--)if(o[n]!==m[l]){if(n!==1||l!==1)do if(n--,l--,0>l||o[n]!==m[l]){var y=`
`+o[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=l);break}}}finally{Li=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ea(a):""}function Ad(e,t){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return e.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Yi(e.type,!1);case 11:return Yi(e.type.render,!1);case 1:return Yi(e.type,!0);case 31:return Ea("Activity");default:return""}}function fo(e){try{var t="",a=null;do t+=Ad(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Gi=Object.prototype.hasOwnProperty,Qi=M.unstable_scheduleCallback,Xi=M.unstable_cancelCallback,Td=M.unstable_shouldYield,Md=M.unstable_requestPaint,We=M.unstable_now,xd=M.unstable_getCurrentPriorityLevel,mo=M.unstable_ImmediatePriority,ho=M.unstable_UserBlockingPriority,wl=M.unstable_NormalPriority,Cd=M.unstable_LowPriority,go=M.unstable_IdlePriority,zd=M.log,qd=M.unstable_setDisableYieldValue,xn=null,Ie=null;function Ft(e){if(typeof zd=="function"&&qd(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(xn,e)}catch{}}var $e=Math.clz32?Math.clz32:Ud,Rd=Math.log,Od=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Rd(e)/Od|0)|0}var Dl=256,Al=262144,Tl=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ml(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~i,n!==0?l=wa(n):(s&=u,s!==0?l=wa(s):a||(a=u&~e,a!==0&&(l=wa(a))))):(u=n&~i,u!==0?l=wa(u):s!==0?l=wa(s):a||(a=n&~e,a!==0&&(l=wa(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _d(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var e=Tl;return Tl<<=1,(Tl&62914560)===0&&(Tl=4194304),e}function Vi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function zn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kd(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,m=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-$e(a),b=1<<y;u[y]=0,o[y]=-1;var h=m[y];if(h!==null)for(m[y]=null,y=0;y<h.length;y++){var p=h[y];p!==null&&(p.lane&=-536870913)}a&=~b}n!==0&&yo(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function yo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-$e(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function vo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-$e(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function So(e,t){var a=t&-t;return a=(a&42)!==0?1:Zi(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bo(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:sd(e.type))}function Eo(e,t){var a=D.p;try{return D.p=e,t()}finally{D.p=a}}var Wt=Math.random().toString(36).slice(2),Te="__reactFiber$"+Wt,Ye="__reactProps$"+Wt,Ya="__reactContainer$"+Wt,Ji="__reactEvents$"+Wt,Nd="__reactListeners$"+Wt,Hd="__reactHandles$"+Wt,wo="__reactResources$"+Wt,qn="__reactMarker$"+Wt;function Fi(e){delete e[Te],delete e[Ye],delete e[Ji],delete e[Nd],delete e[Hd]}function Ga(e){var t=e[Te];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[Te]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[Te])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Te]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function Xa(e){var t=e[wo];return t||(t=e[wo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function De(e){e[qn]=!0}var Do=new Set,Ao={};function Da(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Ao[e]=t,e=0;e<t.length;e++)Do.add(t[e])}var Bd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),To={},Mo={};function jd(e){return Gi.call(Mo,e)?!0:Gi.call(To,e)?!1:Bd.test(e)?Mo[e]=!0:(To[e]=!0,!1)}function xl(e,t,a){if(jd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Cl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ld(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wi(e){if(!e._valueTracker){var t=xo(e)?"checked":"value";e._valueTracker=Ld(e,t,""+e[t])}}function Co(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=xo(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yd=/[\n"\\]/g;function ot(e){return e.replace(Yd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ii(e,t,a,n,l,i,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?$i(e,s,ut(t)):a!=null?$i(e,s,ut(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ut(u):e.removeAttribute("name")}function zo(e,t,a,n,l,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Wi(e);return}a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Wi(e)}function $i(e,t,a){t==="number"&&zl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qo(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function Ro(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(g(92));if(yt(n)){if(1<n.length)throw Error(g(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Wi(e)}function Ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Gd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oo(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Gd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Uo(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Oo(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Oo(e,i,t[i])}function Pi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return Xd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Fa=null;function _o(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Ye]||null;if(!l)throw Error(g(90));Ii(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Co(n)}break e;case"textarea":qo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var as=!1;function ko(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Ja!==null||Fa!==null)&&(yi(),Ja&&(t=Ja,e=Fa,Fa=Ja=null,_o(t),e)))for(t=0;t<e.length;t++)_o(e[t])}}function On(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ye]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Ot)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{ns=!1}var It=null,ls=null,Rl=null;function No(){if(Rl)return Rl;var e,t=ls,a=t.length,n,l="value"in It?It.value:It.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return Rl=l.slice(e,1<n?1-n:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ul(){return!0}function Ho(){return!1}function Ge(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ul:Ho,this.isPropagationStopped=Ho,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Ge(Aa),_n=U({},Aa,{view:0,detail:0}),Vd=Ge(_n),is,ss,kn,kl=U({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(is=e.screenX-kn.screenX,ss=e.screenY-kn.screenY):ss=is=0,kn=e),is)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Bo=Ge(kl),Zd=U({},kl,{dataTransfer:0}),Kd=Ge(Zd),Jd=U({},_n,{relatedTarget:0}),us=Ge(Jd),Fd=U({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=Ge(Fd),Id=U({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Ge(Id),Pd=U({},Aa,{data:0}),jo=Ge(Pd),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function os(){return nm}var lm=U({},_n,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=Ge(lm),sm=U({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Ge(sm),um=U({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),om=Ge(um),cm=U({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Ge(cm),fm=U({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dm=Ge(fm),mm=U({},Aa,{newState:0,oldState:0}),hm=Ge(mm),gm=[9,13,27,32],cs=Ot&&"CompositionEvent"in window,Nn=null;Ot&&"documentMode"in document&&(Nn=document.documentMode);var pm=Ot&&"TextEvent"in window&&!Nn,Yo=Ot&&(!cs||Nn&&8<Nn&&11>=Nn),Go=" ",Qo=!1;function Xo(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function ym(e,t){switch(e){case"compositionend":return Vo(t);case"keypress":return t.which!==32?null:(Qo=!0,Go);case"textInput":return e=t.data,e===Go&&Qo?null:e;default:return null}}function vm(e,t){if(Wa)return e==="compositionend"||!cs&&Xo(e,t)?(e=No(),Rl=ls=It=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function Ko(e,t,a,n){Ja?Fa?Fa.push(n):Fa=[n]:Ja=n,t=Ai(t,"onChange"),0<t.length&&(a=new _l("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Hn=null,Bn=null;function bm(e){qf(e,0)}function Nl(e){var t=Rn(e);if(Co(t))return e}function Jo(e,t){if(e==="change")return t}var Fo=!1;if(Ot){var rs;if(Ot){var fs="oninput"in document;if(!fs){var Wo=document.createElement("div");Wo.setAttribute("oninput","return;"),fs=typeof Wo.oninput=="function"}rs=fs}else rs=!1;Fo=rs&&(!document.documentMode||9<document.documentMode)}function Io(){Hn&&(Hn.detachEvent("onpropertychange",$o),Bn=Hn=null)}function $o(e){if(e.propertyName==="value"&&Nl(Bn)){var t=[];Ko(t,Bn,e,ts(e)),ko(bm,t)}}function Em(e,t,a){e==="focusin"?(Io(),Hn=t,Bn=a,Hn.attachEvent("onpropertychange",$o)):e==="focusout"&&Io()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Bn)}function Dm(e,t){if(e==="click")return Nl(t)}function Am(e,t){if(e==="input"||e==="change")return Nl(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Tm;function jn(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Gi.call(t,l)||!Pe(e[l],t[l]))return!1}return!0}function Po(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=Po(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Po(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=zl(e.document)}return t}function ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mm=Ot&&"documentMode"in document&&11>=document.documentMode,Ia=null,ms=null,Ln=null,hs=!1;function nc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||Ia==null||Ia!==zl(n)||(n=Ia,"selectionStart"in n&&ds(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&jn(Ln,n)||(Ln=n,n=Ai(ms,"onSelect"),0<n.length&&(t=new _l("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ia)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},gs={},lc={};Ot&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Ma(e){if(gs[e])return gs[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lc)return gs[e]=t[a];return e}var ic=Ma("animationend"),sc=Ma("animationiteration"),uc=Ma("animationstart"),xm=Ma("transitionrun"),Cm=Ma("transitionstart"),zm=Ma("transitioncancel"),oc=Ma("transitionend"),cc=new Map,ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ps.push("scrollEnd");function vt(e,t){cc.set(e,t),Da(t,[e])}var Hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],Pa=0,ys=0;function Bl(){for(var e=Pa,t=ys=Pa=0;t<e;){var a=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var l=ct[t];ct[t++]=null;var i=ct[t];if(ct[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&rc(a,l,i)}}function jl(e,t,a,n){ct[Pa++]=e,ct[Pa++]=t,ct[Pa++]=a,ct[Pa++]=n,ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function vs(e,t,a,n){return jl(e,t,a,n),Ll(e)}function xa(e,t){return jl(e,null,null,t),Ll(e)}function rc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-$e(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Ll(e){if(50<ol)throw ol=0,xu=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function qm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new qm(e,t,a,n)}function Ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yl(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")Ss(e)&&(s=1);else if(typeof e=="string")s=kh(e,a,x.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case wt:return e=et(31,a,t,l),e.elementType=wt,e.lanes=i,e;case Ue:return Ca(a.children,l,i,t);case Ct:s=8,l|=24;break;case Fe:return e=et(12,a,t,l|2),e.elementType=Fe,e.lanes=i,e;case Et:return e=et(13,a,t,l),e.elementType=Et,e.lanes=i,e;case Be:return e=et(19,a,t,l),e.elementType=Be,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:s=10;break e;case Jt:s=9;break e;case st:s=11;break e;case X:s=14;break e;case je:s=16,n=null;break e}s=29,a=Error(g(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Ca(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function bs(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function dc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Es(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=mc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fo(t)},mc.set(e,t),t)}return{value:e,source:t,stack:fo(t)}}var tn=[],an=0,Gl=null,Yn=0,ft=[],dt=0,$t=null,At=1,Tt="";function _t(e,t){tn[an++]=Yn,tn[an++]=Gl,Gl=e,Yn=t}function hc(e,t,a){ft[dt++]=At,ft[dt++]=Tt,ft[dt++]=$t,$t=e;var n=At;e=Tt;var l=32-$e(n)-1;n&=~(1<<l),a+=1;var i=32-$e(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,At=1<<32-$e(t)+l|a<<l|n,Tt=i+e}else At=1<<i|a<<l|n,Tt=e}function ws(e){e.return!==null&&(_t(e,1),hc(e,1,0))}function Ds(e){for(;e===Gl;)Gl=tn[--an],tn[an]=null,Yn=tn[--an],tn[an]=null;for(;e===$t;)$t=ft[--dt],ft[dt]=null,Tt=ft[--dt],ft[dt]=null,At=ft[--dt],ft[dt]=null}function gc(e,t){ft[dt++]=At,ft[dt++]=Tt,ft[dt++]=$t,At=t.id,Tt=t.overflow,$t=e}var Me=null,ue=null,V=!1,Pt=null,mt=!1,As=Error(g(519));function ea(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gn(rt(t,e)),As}function pc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Te]=e,t[Ye]=n,a){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(a=0;a<rl.length;a++)Y(rl[a],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),zo(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),Ro(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||_f(t.textContent,a)?(n.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),n.onScroll!=null&&Y("scroll",t),n.onScrollEnd!=null&&Y("scrollend",t),n.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||ea(e,!0)}function yc(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Me=Me.return}}function nn(e){if(e!==Me)return!1;if(!V)return yc(e),V=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gu(e.type,e.memoizedProps)),a=!a),a&&ue&&ea(e),yc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ue=Qf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ue=Qf(e)}else t===27?(t=ue,ha(e.type)?(e=Ku,Ku=null,ue=e):ue=t):ue=Me?gt(e.stateNode.nextSibling):null;return!0}function za(){ue=Me=null,V=!1}function Ts(){var e=Pt;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),Pt=null),e}function Gn(e){Pt===null?Pt=[e]:Pt.push(e)}var Ms=r(null),qa=null,kt=null;function ta(e,t,a){A(Ms,t._currentValue),t._currentValue=a}function Nt(e){e._currentValue=Ms.current,E(Ms)}function xs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Cs(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=l;for(var o=0;o<t.length;o++)if(u.context===t[o]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),xs(i.return,a,e),n||(s=null);break e}i=u.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(g(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),xs(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ln(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(g(387));if(s=s.memoizedProps,s!==null){var u=l.type;Pe(l.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(l===$.current){if(s=l.alternate,s===null)throw Error(g(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}l=l.return}e!==null&&Cs(t,e,a,n),t.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){qa=e,kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xe(e){return vc(qa,e)}function Xl(e,t){return qa===null&&Ra(e),vc(e,t)}function vc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},kt===null){if(e===null)throw Error(g(308));kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kt=kt.next=t;return a}var Rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Om=M.unstable_scheduleCallback,Um=M.unstable_NormalPriority,ve={$$typeof:qe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zs(){return{controller:new Rm,data:new Map,refCount:0}}function Qn(e){e.refCount--,e.refCount===0&&Om(Um,function(){e.controller.abort()})}var Xn=null,qs=0,sn=0,un=null;function _m(e,t){if(Xn===null){var a=Xn=[];qs=0,sn=Uu(),un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return qs++,t.then(Sc,Sc),t}function Sc(){if(--qs===0&&Xn!==null){un!==null&&(un.status="fulfilled");var e=Xn;Xn=null,sn=0,un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function km(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var bc=v.S;v.S=function(e,t){nf=We(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_m(e,t),bc!==null&&bc(e,t)};var Oa=r(null);function Rs(){var e=Oa.current;return e!==null?e:se.pooledCache}function Vl(e,t){t===null?A(Oa,Oa.current):A(Oa,t.pool)}function Ec(){var e=Rs();return e===null?null:{parent:ve._currentValue,pool:e}}var on=Error(g(460)),Os=Error(g(474)),Zl=Error(g(542)),Kl={then:function(){}};function wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tc(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Tc(e),e}throw _a=t,on}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,on):a}}var _a=null;function Ac(){if(_a===null)throw Error(g(459));var e=_a;return _a=null,e}function Tc(e){if(e===on||e===Zl)throw Error(g(483))}var cn=null,Vn=0;function Jl(e){var t=Vn;return Vn+=1,cn===null&&(cn=[]),Dc(cn,e,t)}function Zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fl(e,t){throw t.$$typeof===ce?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mc(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function l(f,c){return f=Ut(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=67108866,c):d):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,c,d,S){return c===null||c.tag!==6?(c=bs(d,f.mode,S),c.return=f,c):(c=l(c,d),c.return=f,c)}function o(f,c,d,S){var z=d.type;return z===Ue?y(f,c,d.props.children,S,d.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===je&&Ua(z)===c.type)?(c=l(c,d.props),Zn(c,d),c.return=f,c):(c=Yl(d.type,d.key,d.props,null,f.mode,S),Zn(c,d),c.return=f,c)}function m(f,c,d,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Es(d,f.mode,S),c.return=f,c):(c=l(c,d.children||[]),c.return=f,c)}function y(f,c,d,S,z){return c===null||c.tag!==7?(c=Ca(d,f.mode,S,z),c.return=f,c):(c=l(c,d),c.return=f,c)}function b(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=bs(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Je:return d=Yl(c.type,c.key,c.props,null,f.mode,d),Zn(d,c),d.return=f,d;case He:return c=Es(c,f.mode,d),c.return=f,c;case je:return c=Ua(c),b(f,c,d)}if(yt(c)||Le(c))return c=Ca(c,f.mode,d,null),c.return=f,c;if(typeof c.then=="function")return b(f,Jl(c),d);if(c.$$typeof===qe)return b(f,Xl(f,c),d);Fl(f,c)}return null}function h(f,c,d,S){var z=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:u(f,c,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:return d.key===z?o(f,c,d,S):null;case He:return d.key===z?m(f,c,d,S):null;case je:return d=Ua(d),h(f,c,d,S)}if(yt(d)||Le(d))return z!==null?null:y(f,c,d,S,null);if(typeof d.then=="function")return h(f,c,Jl(d),S);if(d.$$typeof===qe)return h(f,c,Xl(f,d),S);Fl(f,d)}return null}function p(f,c,d,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(d)||null,u(c,f,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Je:return f=f.get(S.key===null?d:S.key)||null,o(c,f,S,z);case He:return f=f.get(S.key===null?d:S.key)||null,m(c,f,S,z);case je:return S=Ua(S),p(f,c,d,S,z)}if(yt(S)||Le(S))return f=f.get(d)||null,y(c,f,S,z,null);if(typeof S.then=="function")return p(f,c,d,Jl(S),z);if(S.$$typeof===qe)return p(f,c,d,Xl(c,S),z);Fl(c,S)}return null}function T(f,c,d,S){for(var z=null,Z=null,C=c,B=c=0,Q=null;C!==null&&B<d.length;B++){C.index>B?(Q=C,C=null):Q=C.sibling;var K=h(f,C,d[B],S);if(K===null){C===null&&(C=Q);break}e&&C&&K.alternate===null&&t(f,C),c=i(K,c,B),Z===null?z=K:Z.sibling=K,Z=K,C=Q}if(B===d.length)return a(f,C),V&&_t(f,B),z;if(C===null){for(;B<d.length;B++)C=b(f,d[B],S),C!==null&&(c=i(C,c,B),Z===null?z=C:Z.sibling=C,Z=C);return V&&_t(f,B),z}for(C=n(C);B<d.length;B++)Q=p(C,f,B,d[B],S),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?B:Q.key),c=i(Q,c,B),Z===null?z=Q:Z.sibling=Q,Z=Q);return e&&C.forEach(function(Sa){return t(f,Sa)}),V&&_t(f,B),z}function R(f,c,d,S){if(d==null)throw Error(g(151));for(var z=null,Z=null,C=c,B=c=0,Q=null,K=d.next();C!==null&&!K.done;B++,K=d.next()){C.index>B?(Q=C,C=null):Q=C.sibling;var Sa=h(f,C,K.value,S);if(Sa===null){C===null&&(C=Q);break}e&&C&&Sa.alternate===null&&t(f,C),c=i(Sa,c,B),Z===null?z=Sa:Z.sibling=Sa,Z=Sa,C=Q}if(K.done)return a(f,C),V&&_t(f,B),z;if(C===null){for(;!K.done;B++,K=d.next())K=b(f,K.value,S),K!==null&&(c=i(K,c,B),Z===null?z=K:Z.sibling=K,Z=K);return V&&_t(f,B),z}for(C=n(C);!K.done;B++,K=d.next())K=p(C,f,B,K.value,S),K!==null&&(e&&K.alternate!==null&&C.delete(K.key===null?B:K.key),c=i(K,c,B),Z===null?z=K:Z.sibling=K,Z=K);return e&&C.forEach(function(Zh){return t(f,Zh)}),V&&_t(f,B),z}function le(f,c,d,S){if(typeof d=="object"&&d!==null&&d.type===Ue&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Je:e:{for(var z=d.key;c!==null;){if(c.key===z){if(z=d.type,z===Ue){if(c.tag===7){a(f,c.sibling),S=l(c,d.props.children),S.return=f,f=S;break e}}else if(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===je&&Ua(z)===c.type){a(f,c.sibling),S=l(c,d.props),Zn(S,d),S.return=f,f=S;break e}a(f,c);break}else t(f,c);c=c.sibling}d.type===Ue?(S=Ca(d.props.children,f.mode,S,d.key),S.return=f,f=S):(S=Yl(d.type,d.key,d.props,null,f.mode,S),Zn(S,d),S.return=f,f=S)}return s(f);case He:e:{for(z=d.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){a(f,c.sibling),S=l(c,d.children||[]),S.return=f,f=S;break e}else{a(f,c);break}else t(f,c);c=c.sibling}S=Es(d,f.mode,S),S.return=f,f=S}return s(f);case je:return d=Ua(d),le(f,c,d,S)}if(yt(d))return T(f,c,d,S);if(Le(d)){if(z=Le(d),typeof z!="function")throw Error(g(150));return d=z.call(d),R(f,c,d,S)}if(typeof d.then=="function")return le(f,c,Jl(d),S);if(d.$$typeof===qe)return le(f,c,Xl(f,d),S);Fl(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,c!==null&&c.tag===6?(a(f,c.sibling),S=l(c,d),S.return=f,f=S):(a(f,c),S=bs(d,f.mode,S),S.return=f,f=S),s(f)):a(f,c)}return function(f,c,d,S){try{Vn=0;var z=le(f,c,d,S);return cn=null,z}catch(C){if(C===on||C===Zl)throw C;var Z=et(29,C,null,f.mode);return Z.lanes=S,Z.return=f,Z}finally{}}}var ka=Mc(!0),xc=Mc(!1),aa=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _s(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(F&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Ll(e),rc(e,null,a),t}return jl(e,n,t,a),Ll(e)}function Kn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,vo(e,a)}}function ks(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ns=!1;function Jn(){if(Ns){var e=un;if(e!==null)throw e}}function Fn(e,t,a,n){Ns=!1;var l=e.updateQueue;aa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,m=o.next;o.next=null,s===null?i=m:s.next=m,s=o;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==s&&(u===null?y.firstBaseUpdate=m:u.next=m,y.lastBaseUpdate=o))}if(i!==null){var b=l.baseState;s=0,y=m=o=null,u=i;do{var h=u.lane&-536870913,p=h!==u.lane;if(p?(G&h)===h:(n&h)===h){h!==0&&h===sn&&(Ns=!0),y!==null&&(y=y.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var T=e,R=u;h=t;var le=a;switch(R.tag){case 1:if(T=R.payload,typeof T=="function"){b=T.call(le,b,h);break e}b=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,h=typeof T=="function"?T.call(le,b,h):T,h==null)break e;b=U({},b,h);break e;case 2:aa=!0}}h=u.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=l.callbacks,p===null?l.callbacks=[h]:p.push(h))}else p={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(m=y=p,o=b):y=y.next=p,s|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);y===null&&(o=b),l.baseState=o,l.firstBaseUpdate=m,l.lastBaseUpdate=y,i===null&&(l.shared.lanes=0),ca|=s,e.lanes=s,e.memoizedState=b}}function Cc(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function zc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cc(a[e],t)}var rn=r(null),Wl=r(0);function qc(e,t){e=Vt,A(Wl,e),A(rn,t),Vt=e|t.baseLanes}function Hs(){A(Wl,Vt),A(rn,rn.current)}function Bs(){Vt=Wl.current,E(rn),E(Wl)}var tt=r(null),ht=null;function ia(e){var t=e.alternate;A(pe,pe.current&1),A(tt,e),ht===null&&(t===null||rn.current!==null||t.memoizedState!==null)&&(ht=e)}function js(e){A(pe,pe.current),A(tt,e),ht===null&&(ht=e)}function Rc(e){e.tag===22?(A(pe,pe.current),A(tt,e),ht===null&&(ht=e)):sa()}function sa(){A(pe,pe.current),A(tt,tt.current)}function at(e){E(tt),ht===e&&(ht=null),E(pe)}var pe=r(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vu(a)||Zu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,H=null,ae=null,Se=null,$l=!1,fn=!1,Na=!1,Pl=0,Wn=0,dn=null,Nm=0;function de(){throw Error(g(321))}function Ls(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Pe(e[a],t[a]))return!1;return!0}function Ys(e,t,a,n,l,i){return Ht=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?hr:au,Na=!1,i=a(n,l),Na=!1,fn&&(i=Uc(t,a,n,l)),Oc(e),i}function Oc(e){v.H=Pn;var t=ae!==null&&ae.next!==null;if(Ht=0,Se=ae=H=null,$l=!1,Wn=0,dn=null,t)throw Error(g(300));e===null||be||(e=e.dependencies,e!==null&&Ql(e)&&(be=!0))}function Uc(e,t,a,n){H=e;var l=0;do{if(fn&&(dn=null),Wn=0,fn=!1,25<=l)throw Error(g(301));if(l+=1,Se=ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=gr,i=t(a,n)}while(fn);return i}function Hm(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?In(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(H.flags|=1024),t}function Gs(){var e=Pl!==0;return Pl=0,e}function Qs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xs(e){if($l){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}$l=!1}Ht=0,Se=ae=H=null,fn=!1,Wn=Pl=0,dn=null}function ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?H.memoizedState=Se=e:Se=Se.next=e,Se}function ye(){if(ae===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Se===null?H.memoizedState:Se.next;if(t!==null)Se=t,ae=e;else{if(e===null)throw H.alternate===null?Error(g(467)):Error(g(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Se===null?H.memoizedState=Se=e:Se=Se.next=e}return Se}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function In(e){var t=Wn;return Wn+=1,dn===null&&(dn=[]),e=Dc(dn,e,t),t=H,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?hr:au),e}function ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return In(e);if(e.$$typeof===qe)return xe(e)}throw Error(g(438,String(e)))}function Vs(e){var t=null,a=H.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=H.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),H.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=La;return t.index++,a}function Bt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=ye();return Zs(t,ae,e)}function Zs(e,t,a){var n=e.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var u=s=null,o=null,m=t,y=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(G&b)===b:(Ht&b)===b){var h=m.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===sn&&(y=!0);else if((Ht&h)===h){m=m.next,h===sn&&(y=!0);continue}else b={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(u=o=b,s=i):o=o.next=b,H.lanes|=h,ca|=h;b=m.action,Na&&a(i,b),i=m.hasEagerState?m.eagerState:a(i,b)}else h={lane:b,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(u=o=h,s=i):o=o.next=h,H.lanes|=b,ca|=b;m=m.next}while(m!==null&&m!==t);if(o===null?s=i:o.next=u,!Pe(i,e.memoizedState)&&(be=!0,y&&(a=un,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=o,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ks(e){var t=ye(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Pe(i,t.memoizedState)||(be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function _c(e,t,a){var n=H,l=ye(),i=V;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=t();var s=!Pe((ae||l).memoizedState,a);if(s&&(l.memoizedState=a,be=!0),l=l.queue,Ws(Hc.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},Nc.bind(null,n,l,a,t),null),se===null)throw Error(g(349));i||(Ht&127)!==0||kc(n,t,a)}return a}function kc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=H.updateQueue,t===null?(t=ei(),H.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Nc(e,t,a,n){t.value=a,t.getSnapshot=n,Bc(t)&&jc(e)}function Hc(e,t,a){return a(function(){Bc(t)&&jc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Pe(e,a)}catch{return!0}}function jc(e){var t=xa(e,2);t!==null&&Ke(t,e,2)}function Js(e){var t=ke();if(typeof e=="function"){var a=e;if(e=a(),Na){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:e},t}function Lc(e,t,a,n){return e.baseState=a,Zs(e,ae,typeof n=="function"?n:Bt)}function Bm(e,t,a,n,l){if(ii(e))throw Error(g(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};v.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Yc(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Yc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=v.T,s={};v.T=s;try{var u=a(l,n),o=v.S;o!==null&&o(s,u),Gc(e,t,u)}catch(m){Fs(e,t,m)}finally{i!==null&&s.types!==null&&(i.types=s.types),v.T=i}}else try{i=a(l,n),Gc(e,t,i)}catch(m){Fs(e,t,m)}}function Gc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Qc(e,t,n)},function(n){return Fs(e,t,n)}):Qc(e,t,a)}function Qc(e,t,a){t.status="fulfilled",t.value=a,Xc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yc(e,a)))}function Fs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xc(t),t=t.next;while(t!==n)}e.action=null}function Xc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vc(e,t){return t}function Zc(e,t){if(V){var a=se.formState;if(a!==null){e:{var n=H;if(V){if(ue){t:{for(var l=ue,i=mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=gt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ue=gt(l.nextSibling),n=l.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=ke(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vc,lastRenderedState:t},a.queue=n,a=fr.bind(null,H,n),n.dispatch=a,n=Js(!1),i=tu.bind(null,H,!1,n.queue),n=ke(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Bm.bind(null,H,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Kc(e){var t=ye();return Jc(t,ae,e)}function Jc(e,t,a){if(t=Zs(e,t,Vc)[0],e=ai(Bt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=In(t)}catch(s){throw s===on?Zl:s}else n=t;t=ye();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(H.flags|=2048,mn(9,{destroy:void 0},jm.bind(null,l,a),null)),[n,i,e]}function jm(e,t){e.action=t}function Fc(e){var t=ye(),a=ae;if(a!==null)return Jc(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=H.updateQueue,t===null&&(t=ei(),H.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Wc(){return ye().memoizedState}function ni(e,t,a,n){var l=ke();H.flags|=e,l.memoizedState=mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function li(e,t,a,n){var l=ye();n=n===void 0?null:n;var i=l.memoizedState.inst;ae!==null&&n!==null&&Ls(n,ae.memoizedState.deps)?l.memoizedState=mn(t,i,a,n):(H.flags|=e,l.memoizedState=mn(1|t,i,a,n))}function Ic(e,t){ni(8390656,8,e,t)}function Ws(e,t){li(2048,8,e,t)}function Lm(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=ei(),H.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function $c(e){var t=ye().memoizedState;return Lm({ref:t,nextImpl:e}),function(){if((F&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function Pc(e,t){return li(4,2,e,t)}function er(e,t){return li(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,li(4,4,tr.bind(null,t,e),a)}function Is(){}function nr(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ls(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function lr(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ls(t,n[1]))return n[0];if(n=e(),Na){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n}function $s(e,t,a){return a===void 0||(Ht&1073741824)!==0&&(G&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sf(),H.lanes|=e,ca|=e,a)}function ir(e,t,a,n){return Pe(a,t)?a:rn.current!==null?(e=$s(e,a,n),Pe(e,t)||(be=!0),e):(Ht&42)===0||(Ht&1073741824)!==0&&(G&261930)===0?(be=!0,e.memoizedState=a):(e=sf(),H.lanes|=e,ca|=e,t)}function sr(e,t,a,n,l){var i=D.p;D.p=i!==0&&8>i?i:8;var s=v.T,u={};v.T=u,tu(e,!1,t,a);try{var o=l(),m=v.S;if(m!==null&&m(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var y=km(o,n);$n(e,t,y,it(e))}else $n(e,t,n,it(e))}catch(b){$n(e,t,{then:function(){},status:"rejected",reason:b},it())}finally{D.p=i,s!==null&&u.types!==null&&(s.types=u.types),v.T=s}}function Ym(){}function Ps(e,t,a,n){if(e.tag!==5)throw Error(g(476));var l=ur(e).queue;sr(e,l,t,_,a===null?Ym:function(){return or(e),a(n)})}function ur(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:_},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function or(e){var t=ur(e);t.next===null&&(t=e.alternate.memoizedState),$n(e,t.next.queue,{},it())}function eu(){return xe(gl)}function cr(){return ye().memoizedState}function rr(){return ye().memoizedState}function Gm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=it();e=na(a);var n=la(t,e,a);n!==null&&(Ke(n,t,a),Kn(n,t,a)),t={cache:zs()},e.payload=t;return}t=t.return}}function Qm(e,t,a){var n=it();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ii(e)?dr(t,a):(a=vs(e,t,a,n),a!==null&&(Ke(a,e,n),mr(a,t,n)))}function fr(e,t,a){var n=it();$n(e,t,a,n)}function $n(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ii(e))dr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,a);if(l.hasEagerState=!0,l.eagerState=u,Pe(u,s))return jl(e,t,l,0),se===null&&Bl(),!1}catch{}finally{}if(a=vs(e,t,l,n),a!==null)return Ke(a,e,n),mr(a,t,n),!0}return!1}function tu(e,t,a,n){if(n={lane:2,revertLane:Uu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ii(e)){if(t)throw Error(g(479))}else t=vs(e,a,n,2),t!==null&&Ke(t,e,2)}function ii(e){var t=e.alternate;return e===H||t!==null&&t===H}function dr(e,t){fn=$l=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,vo(e,a)}}var Pn={readContext:xe,use:ti,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de};Pn.useEffectEvent=de;var hr={readContext:xe,use:ti,useCallback:function(e,t){return ke().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Ic,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ni(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var a=ke();t=t===void 0?null:t;var n=e();if(Na){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ke();if(a!==void 0){var l=a(t);if(Na){Ft(!0);try{a(t)}finally{Ft(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Qm.bind(null,H,e),[n.memoizedState,e]},useRef:function(e){var t=ke();return e={current:e},t.memoizedState=e},useState:function(e){e=Js(e);var t=e.queue,a=fr.bind(null,H,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Is,useDeferredValue:function(e,t){var a=ke();return $s(a,e,t)},useTransition:function(){var e=Js(!1);return e=sr.bind(null,H,e.queue,!0,!1),ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=H,l=ke();if(V){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),se===null)throw Error(g(349));(G&127)!==0||kc(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,Ic(Hc.bind(null,n,i,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},Nc.bind(null,n,i,a,t),null),a},useId:function(){var e=ke(),t=se.identifierPrefix;if(V){var a=Tt,n=At;a=(n&~(1<<32-$e(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Pl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eu,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var t=ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tu.bind(null,H,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return ke().memoizedState=Gm.bind(null,H)},useEffectEvent:function(e){var t=ke(),a={impl:e};return t.memoizedState=a,function(){if((F&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},au={readContext:xe,use:ti,useCallback:nr,useContext:xe,useEffect:Ws,useImperativeHandle:ar,useInsertionEffect:Pc,useLayoutEffect:er,useMemo:lr,useReducer:ai,useRef:Wc,useState:function(){return ai(Bt)},useDebugValue:Is,useDeferredValue:function(e,t){var a=ye();return ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=ai(Bt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:In(e),t]},useSyncExternalStore:_c,useId:cr,useHostTransitionStatus:eu,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var a=ye();return Lc(a,ae,e,t)},useMemoCache:Vs,useCacheRefresh:rr};au.useEffectEvent=$c;var gr={readContext:xe,use:ti,useCallback:nr,useContext:xe,useEffect:Ws,useImperativeHandle:ar,useInsertionEffect:Pc,useLayoutEffect:er,useMemo:lr,useReducer:Ks,useRef:Wc,useState:function(){return Ks(Bt)},useDebugValue:Is,useDeferredValue:function(e,t){var a=ye();return ae===null?$s(a,e,t):ir(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ks(Bt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:In(e),t]},useSyncExternalStore:_c,useId:cr,useHostTransitionStatus:eu,useFormState:Fc,useActionState:Fc,useOptimistic:function(e,t){var a=ye();return ae!==null?Lc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:rr};gr.useEffectEvent=$c;function nu(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:U({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lu={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Ke(t,e,n),Kn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=it(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Ke(t,e,n),Kn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=it(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(Ke(t,e,a),Kn(t,e,a))}};function pr(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!jn(a,n)||!jn(l,i):!0}function yr(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&lu.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=U({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function vr(e){Hl(e)}function Sr(e){console.error(e)}function br(e){Hl(e)}function si(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Er(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function iu(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){si(e,t)},a}function wr(e){return e=na(e),e.tag=3,e}function Dr(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){Er(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Er(t,a,n),typeof l!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Xm(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,l,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?vi():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Kl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),qu(e,n,l)),!1;case 22:return a.flags|=65536,n===Kl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),qu(e,n,l)),!1}throw Error(g(435,a.tag))}return qu(e,n,l),vi(),!1}if(V)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==As&&(e=Error(g(422),{cause:n}),Gn(rt(e,a)))):(n!==As&&(t=Error(g(423),{cause:n}),Gn(rt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=rt(n,a),l=iu(e.stateNode,n,l),ks(e,l),me!==4&&(me=2)),!1;var i=Error(g(520),{cause:n});if(i=rt(i,a),ul===null?ul=[i]:ul.push(i),me!==4&&(me=2),t===null)return!0;n=rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=iu(a.stateNode,n,e),ks(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=wr(l),Dr(l,e,a,n),ks(a,l),!1}a=a.return}while(a!==null);return!1}var su=Error(g(461)),be=!1;function Ce(e,t,a,n){t.child=e===null?xc(t,null,a,n):ka(t,e.child,a,n)}function Ar(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var u in n)u!=="ref"&&(s[u]=n[u])}else s=n;return Ra(t),n=Ys(e,t,a,s,i,l),u=Gs(),e!==null&&!be?(Qs(e,t,l),jt(e,t,l)):(V&&u&&ws(t),t.flags|=1,Ce(e,t,n,l),t.child)}function Tr(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Ss(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Mr(e,t,i,n,l)):(e=Yl(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!hu(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:jn,a(s,n)&&e.ref===t.ref)return jt(e,t,l)}return t.flags|=1,e=Ut(i,n),e.ref=t.ref,e.return=t,t.child=e}function Mr(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(jn(i,n)&&e.ref===t.ref)if(be=!1,t.pendingProps=n=i,hu(e,l))(e.flags&131072)!==0&&(be=!0);else return t.lanes=e.lanes,jt(e,t,l)}return uu(e,t,a,n,l)}function xr(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return Cr(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(t,i!==null?i.cachePool:null),i!==null?qc(t,i):Hs(),Rc(t);else return n=t.lanes=536870912,Cr(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(Vl(t,i.cachePool),qc(t,i),sa(),t.memoizedState=null):(e!==null&&Vl(t,null),Hs(),sa());return Ce(e,t,l,a),t.child}function el(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cr(e,t,a,n,l){var i=Rs();return i=i===null?null:{parent:ve._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Vl(t,null),Hs(),Rc(t),e!==null&&ln(e,t,n,!0),t.childLanes=l,null}function ui(e,t){return t=ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zr(e,t,a){return ka(t,e.child,null,a),e=ui(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Vm(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(n.mode==="hidden")return e=ui(t,n),t.lanes=536870912,el(null,e);if(js(t),(e=ue)?(e=Gf(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:At,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=dc(e),a.return=t,t.child=a,Me=t,ue=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ui(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(js(t),l)if(t.flags&256)t.flags&=-257,t=zr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(be||ln(e,t,a,!1),l=(a&e.childLanes)!==0,be||l){if(n=se,n!==null&&(s=So(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,xa(e,s),Ke(n,e,s),su;vi(),t=zr(e,t,a)}else e=i.treeContext,ue=gt(s.nextSibling),Me=t,V=!0,Pt=null,mt=!1,e!==null&&gc(t,e),t=ui(t,n),t.flags|=4096;return t}return e=Ut(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function uu(e,t,a,n,l){return Ra(t),a=Ys(e,t,a,n,void 0,l),n=Gs(),e!==null&&!be?(Qs(e,t,l),jt(e,t,l)):(V&&n&&ws(t),t.flags|=1,Ce(e,t,a,l),t.child)}function qr(e,t,a,n,l,i){return Ra(t),t.updateQueue=null,a=Uc(t,n,a,l),Oc(e),n=Gs(),e!==null&&!be?(Qs(e,t,i),jt(e,t,i)):(V&&n&&ws(t),t.flags|=1,Ce(e,t,a,i),t.child)}function Rr(e,t,a,n,l){if(Ra(t),t.stateNode===null){var i=en,s=a.contextType;typeof s=="object"&&s!==null&&(i=xe(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},Us(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?xe(s):en,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(nu(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&lu.enqueueReplaceState(i,i.state,null),Fn(t,n,i,l),Jn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,o=Ha(a,u);i.props=o;var m=i.context,y=a.contextType;s=en,typeof y=="object"&&y!==null&&(s=xe(y));var b=a.getDerivedStateFromProps;y=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||m!==s)&&yr(t,i,n,s),aa=!1;var h=t.memoizedState;i.state=h,Fn(t,n,i,l),Jn(),m=t.memoizedState,u||h!==m||aa?(typeof b=="function"&&(nu(t,a,b,n),m=t.memoizedState),(o=aa||pr(t,a,o,n,h,m,s))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),i.props=n,i.state=m,i.context=s,n=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,_s(e,t),s=t.memoizedProps,y=Ha(a,s),i.props=y,b=t.pendingProps,h=i.context,m=a.contextType,o=en,typeof m=="object"&&m!==null&&(o=xe(m)),u=a.getDerivedStateFromProps,(m=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==b||h!==o)&&yr(t,i,n,o),aa=!1,h=t.memoizedState,i.state=h,Fn(t,n,i,l),Jn();var p=t.memoizedState;s!==b||h!==p||aa||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof u=="function"&&(nu(t,a,u,n),p=t.memoizedState),(y=aa||pr(t,a,y,n,h,p,o)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,p,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,p,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),i.props=n,i.state=p,i.context=o,n=y):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,oi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=ka(t,e.child,null,l),t.child=ka(t,null,a,l)):Ce(e,t,a,l),t.memoizedState=i.state,e=t.child):e=jt(e,t,l),e}function Or(e,t,a,n){return za(),t.flags|=256,Ce(e,t,a,n),t.child}var ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:Ec()}}function ru(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=lt),e}function Ur(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(l?ia(t):sa(),(e=ue)?(e=Gf(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:At,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=dc(e),a.return=t,t.child=a,Me=t,ue=null)):e=null,e===null)throw ea(t);return Zu(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,l?(sa(),l=t.mode,u=ci({mode:"hidden",children:u},l),n=Ca(n,l,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=cu(a),n.childLanes=ru(e,s,a),t.memoizedState=ou,el(null,n)):(ia(t),fu(t,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=du(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),u=n.fallback,l=t.mode,n=ci({mode:"visible",children:n.children},l),u=Ca(u,l,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,ka(t,e.child,null,a),n=t.child,n.memoizedState=cu(a),n.childLanes=ru(e,s,a),t.memoizedState=ou,t=el(null,n));else if(ia(t),Zu(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var m=s.dgst;s=m,n=Error(g(419)),n.stack="",n.digest=s,Gn({value:n,source:null,stack:null}),t=du(e,t,a)}else if(be||ln(e,t,a,!1),s=(a&e.childLanes)!==0,be||s){if(s=se,s!==null&&(n=So(s,a),n!==0&&n!==o.retryLane))throw o.retryLane=n,xa(e,n),Ke(s,e,n),su;Vu(u)||vi(),t=du(e,t,a)}else Vu(u)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ue=gt(u.nextSibling),Me=t,V=!0,Pt=null,mt=!1,e!==null&&gc(t,e),t=fu(t,n.children),t.flags|=4096);return t}return l?(sa(),u=n.fallback,l=t.mode,o=e.child,m=o.sibling,n=Ut(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,m!==null?u=Ut(m,u):(u=Ca(u,l,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,el(null,n),n=t.child,u=e.child.memoizedState,u===null?u=cu(a):(l=u.cachePool,l!==null?(o=ve._currentValue,l=l.parent!==o?{parent:o,pool:o}:l):l=Ec(),u={baseLanes:u.baseLanes|a,cachePool:l}),n.memoizedState=u,n.childLanes=ru(e,s,a),t.memoizedState=ou,el(e.child,n)):(ia(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fu(e,t){return t=ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ci(e,t){return e=et(22,e,null,t),e.lanes=0,e}function du(e,t,a){return ka(t,e.child,null,a),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _r(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),xs(e.return,t,a)}function mu(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function kr(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=pe.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,A(pe,s),Ce(e,t,n,a),n=V?Yn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_r(e,a,t);else if(e.tag===19)_r(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),mu(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Il(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}mu(t,!0,a,null,i,n);break;case"together":mu(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function Zm(e,t,a){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,ve,e.memoizedState.cache),za();break;case 27:case 5:Mn(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,js(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ur(e,t,a):(ia(t),e=jt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return kr(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(pe,pe.current),n)break;return null;case 22:return t.lanes=0,xr(e,t,a,t.pendingProps);case 24:ta(t,ve,e.memoizedState.cache)}return jt(e,t,a)}function Nr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!hu(e,a)&&(t.flags&128)===0)return be=!1,Zm(e,t,a);be=(e.flags&131072)!==0}else be=!1,V&&(t.flags&1048576)!==0&&hc(t,Yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")Ss(e)?(n=Ha(e,n),t.tag=1,t=Rr(null,t,e,n,a)):(t.tag=0,t=uu(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===st){t.tag=11,t=Ar(null,t,e,n,a);break e}else if(l===X){t.tag=14,t=Tr(null,t,e,n,a);break e}}throw t=zt(e)||e,Error(g(306,t,""))}}return t;case 0:return uu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Ha(n,t.pendingProps),Rr(e,t,n,l,a);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(g(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,_s(e,t),Fn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,ve,n),n!==i.cache&&Cs(t,[ve],a,!0),Jn(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Or(e,t,n,a);break e}else if(n!==l){l=rt(Error(g(424)),t),Gn(l),t=Or(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ue=gt(e.firstChild),Me=t,V=!0,Pt=null,mt=!0,a=xc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(za(),n===l){t=jt(e,t,a);break e}Ce(e,t,n,a)}t=t.child}return t;case 26:return oi(e,t),e===null?(a=Jf(t.type,null,t.pendingProps,null))?t.memoizedState=a:V||(a=t.type,e=t.pendingProps,n=Ti(j.current).createElement(a),n[Te]=t,n[Ye]=e,ze(n,a,e),De(n),t.stateNode=n):t.memoizedState=Jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mn(t),e===null&&V&&(n=t.stateNode=Vf(t.type,t.pendingProps,j.current),Me=t,mt=!0,l=ue,ha(t.type)?(Ku=l,ue=gt(n.firstChild)):ue=l),Ce(e,t,t.pendingProps.children,a),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((l=n=ue)&&(n=wh(n,t.type,t.pendingProps,mt),n!==null?(t.stateNode=n,Me=t,ue=gt(n.firstChild),mt=!1,l=!0):l=!1),l||ea(t)),Mn(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,Gu(l,i)?n=null:s!==null&&Gu(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Ys(e,t,Hm,null,null,a),gl._currentValue=l),oi(e,t),Ce(e,t,n,a),t.child;case 6:return e===null&&V&&((e=a=ue)&&(a=Dh(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Me=t,ue=null,e=!0):e=!1),e||ea(t)),null;case 13:return Ur(e,t,a);case 4:return _e(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ka(t,null,n,a):Ce(e,t,n,a),t.child;case 11:return Ar(e,t,t.type,t.pendingProps,a);case 7:return Ce(e,t,t.pendingProps,a),t.child;case 8:return Ce(e,t,t.pendingProps.children,a),t.child;case 12:return Ce(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Ce(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ra(t),l=xe(l),n=n(l),t.flags|=1,Ce(e,t,n,a),t.child;case 14:return Tr(e,t,t.type,t.pendingProps,a);case 15:return Mr(e,t,t.type,t.pendingProps,a);case 19:return kr(e,t,a);case 31:return Vm(e,t,a);case 22:return xr(e,t,a,t.pendingProps);case 24:return Ra(t),n=xe(ve),e===null?(l=Rs(),l===null&&(l=se,i=zs(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},Us(t),ta(t,ve,l)):((e.lanes&a)!==0&&(_s(e,t),Fn(t,null,null,a),Jn()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,ve,n)):(n=i.cache,ta(t,ve,n),n!==l.cache&&Cs(t,[ve],a,!0))),Ce(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Lt(e){e.flags|=4}function gu(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw _a=Kl,Os}else e.flags&=-16777217}function Hr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pf(t))if(rf())e.flags|=8192;else throw _a=Kl,Os}function ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?po():536870912,e.lanes|=t,yn|=t)}function tl(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Km(e,t,a){var n=t.pendingProps;switch(Ds(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return oe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Nt(ve),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?Lt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ts())),oe(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Lt(t),i!==null?(oe(t),Hr(t,i)):(oe(t),gu(t,l,null,n,a))):i?i!==e.memoizedState?(Lt(t),oe(t),Hr(t,i)):(oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Lt(t),oe(t),gu(t,l,e,n,a)),null;case 27:if(El(t),a=j.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Lt(t);else{if(!n){if(t.stateNode===null)throw Error(g(166));return oe(t),null}e=x.current,nn(t)?pc(t):(e=Vf(l,n,a),t.stateNode=e,Lt(t))}return oe(t),null;case 5:if(El(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Lt(t);else{if(!n){if(t.stateNode===null)throw Error(g(166));return oe(t),null}if(i=x.current,nn(t))pc(t);else{var s=Ti(j.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[Te]=t,i[Ye]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(ze(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Lt(t)}}return oe(t),gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Lt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(g(166));if(e=j.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Me,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Te]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||_f(e.nodeValue,a)),e||ea(t,!0)}else e=Ti(e).createTextNode(n),e[Te]=t,t.stateNode=e}return oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[Te]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),e=!1}else a=Ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(g(558))}return oe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[Te]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else l=Ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ri(t,t.updateQueue),oe(t),null);case 4:return ge(),e===null&&Hu(t.stateNode.containerInfo),oe(t),null;case 10:return Nt(t.type),oe(t),null;case 19:if(E(pe),n=t.memoizedState,n===null)return oe(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)tl(n,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Il(e),i!==null){for(t.flags|=128,tl(n,!1),e=i.updateQueue,t.updateQueue=e,ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fc(a,e),a=a.sibling;return A(pe,pe.current&1|2),V&&_t(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&We()>gi&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304)}else{if(!l)if(e=Il(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ri(t,e),tl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!V)return oe(t),null}else 2*We()-n.renderingStartTime>gi&&a!==536870912&&(t.flags|=128,l=!0,tl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=We(),e.sibling=null,a=pe.current,A(pe,l?a&1|2:a&1),V&&_t(t,n.treeForkCount),e):(oe(t),null);case 22:case 23:return at(t),Bs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),a=t.updateQueue,a!==null&&ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&E(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Nt(ve),oe(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function Jm(e,t){switch(Ds(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nt(ve),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return El(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(g(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(pe),null;case 4:return ge(),null;case 10:return Nt(t.type),null;case 22:case 23:return at(t),Bs(),e!==null&&E(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Nt(ve),null;case 25:return null;default:return null}}function Br(e,t){switch(Ds(t),t.tag){case 3:Nt(ve),ge();break;case 26:case 27:case 5:El(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(pe);break;case 10:Nt(t.type);break;case 22:case 23:at(t),Bs(),e!==null&&E(Oa);break;case 24:Nt(ve)}}function al(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(u){ee(t,t.return,u)}}function ua(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,l=t;var o=a,m=u;try{m()}catch(y){ee(l,o,y)}}}n=n.next}while(n!==i)}}catch(y){ee(t,t.return,y)}}function jr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{zc(t,a)}catch(n){ee(e,e.return,n)}}}function Lr(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function nl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ee(e,t,l)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ee(e,t,l)}else a.current=null}function Yr(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ee(e,e.return,l)}}function pu(e,t,a){try{var n=e.stateNode;ph(n,e.type,a,t),n[Ye]=t}catch(l){ee(e,e.return,l)}}function Gr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vu(e,t,a),e=e.sibling;e!==null;)vu(e,t,a),e=e.sibling}function fi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fi(e,t,a),e=e.sibling;e!==null;)fi(e,t,a),e=e.sibling}function Qr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ze(t,n,a),t[Te]=e,t[Ye]=a}catch(i){ee(e,e.return,i)}}var Yt=!1,Ee=!1,Su=!1,Xr=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Fm(e,t){if(e=e.containerInfo,Lu=Oi,e=ac(e),ds(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,u=-1,o=-1,m=0,y=0,b=e,h=null;t:for(;;){for(var p;b!==a||l!==0&&b.nodeType!==3||(u=s+l),b!==i||n!==0&&b.nodeType!==3||(o=s+n),b.nodeType===3&&(s+=b.nodeValue.length),(p=b.firstChild)!==null;)h=b,b=p;for(;;){if(b===e)break t;if(h===a&&++m===l&&(u=s),h===i&&++y===n&&(o=s),(p=b.nextSibling)!==null)break;b=h,h=b.parentNode}b=p}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yu={focusedElem:e,selectionRange:a},Oi=!1,Ae=t;Ae!==null;)if(t=Ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ae=e;else for(;Ae!==null;){switch(t=Ae,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var T=Ha(a.type,l);e=n.getSnapshotBeforeUpdate(T,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(R){ee(a,a.return,R)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Ae=e;break}Ae=t.return}}function Vr(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Qt(e,a),n&4&&al(5,a);break;case 1:if(Qt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var l=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&jr(a),n&512&&nl(a,a.return);break;case 3:if(Qt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{zc(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Qr(a);case 26:case 5:Qt(e,a),t===null&&n&4&&Yr(a),n&512&&nl(a,a.return);break;case 12:Qt(e,a);break;case 31:Qt(e,a),n&4&&Jr(e,a);break;case 13:Qt(e,a),n&4&&Fr(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lh.bind(null,a),Ah(e,a))));break;case 22:if(n=a.memoizedState!==null||Yt,!n){t=t!==null&&t.memoizedState!==null||Ee,l=Yt;var i=Ee;Yt=n,(Ee=t)&&!i?Xt(e,a,(a.subtreeFlags&8772)!==0):Qt(e,a),Yt=l,Ee=i}break;case 30:break;default:Qt(e,a)}}function Zr(e){var t=e.alternate;t!==null&&(e.alternate=null,Zr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Qe=!1;function Gt(e,t,a){for(a=a.child;a!==null;)Kr(e,t,a),a=a.sibling}function Kr(e,t,a){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(xn,a)}catch{}switch(a.tag){case 26:Ee||Mt(a,t),Gt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ee||Mt(a,t);var n=re,l=Qe;ha(a.type)&&(re=a.stateNode,Qe=!1),Gt(e,t,a),dl(a.stateNode),re=n,Qe=l;break;case 5:Ee||Mt(a,t);case 6:if(n=re,l=Qe,re=null,Gt(e,t,a),re=n,Qe=l,re!==null)if(Qe)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(i){ee(a,t,i)}else try{re.removeChild(a.stateNode)}catch(i){ee(a,t,i)}break;case 18:re!==null&&(Qe?(e=re,Lf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):Lf(re,a.stateNode));break;case 4:n=re,l=Qe,re=a.stateNode.containerInfo,Qe=!0,Gt(e,t,a),re=n,Qe=l;break;case 0:case 11:case 14:case 15:ua(2,a,t),Ee||ua(4,a,t),Gt(e,t,a);break;case 1:Ee||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Lr(a,t,n)),Gt(e,t,a);break;case 21:Gt(e,t,a);break;case 22:Ee=(n=Ee)||a.memoizedState!==null,Gt(e,t,a),Ee=n;break;default:Gt(e,t,a)}}function Jr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tn(e)}catch(a){ee(t,t.return,a)}}}function Fr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){ee(t,t.return,a)}}function Wm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xr),t;default:throw Error(g(435,e.tag))}}function di(e,t){var a=Wm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=ih.bind(null,e,n);n.then(l,l)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(ha(u.type)){re=u.stateNode,Qe=!1;break e}break;case 5:re=u.stateNode,Qe=!1;break e;case 3:case 4:re=u.stateNode.containerInfo,Qe=!0;break e}u=u.return}if(re===null)throw Error(g(160));Kr(i,s,l),re=null,Qe=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wr(t,e),t=t.sibling}var St=null;function Wr(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ve(e),n&4&&(ua(3,e,e.return),al(3,e),ua(5,e,e.return));break;case 1:Xe(t,e),Ve(e),n&512&&(Ee||a===null||Mt(a,a.return)),n&64&&Yt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=St;if(Xe(t,e),Ve(e),n&512&&(Ee||a===null||Mt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[qn]||i[Te]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),ze(i,n,a),i[Te]=e,De(i),n=i;break e;case"link":var s=If("link","href",l).get(n+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}i=l.createElement(n),ze(i,n,a),l.head.appendChild(i);break;case"meta":if(s=If("meta","content",l).get(n+(a.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}i=l.createElement(n),ze(i,n,a),l.head.appendChild(i);break;default:throw Error(g(468,n))}i[Te]=e,De(i),n=i}e.stateNode=n}else $f(l,e.type,e.stateNode);else e.stateNode=Wf(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?$f(l,e.type,e.stateNode):Wf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ve(e),n&512&&(Ee||a===null||Mt(a,a.return)),a!==null&&n&4&&pu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ve(e),n&512&&(Ee||a===null||Mt(a,a.return)),e.flags&32){l=e.stateNode;try{Ka(l,"")}catch(T){ee(e,e.return,T)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,pu(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Su=!0);break;case 6:if(Xe(t,e),Ve(e),n&4){if(e.stateNode===null)throw Error(g(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(T){ee(e,e.return,T)}}break;case 3:if(Ci=null,l=St,St=Mi(t.containerInfo),Xe(t,e),St=l,Ve(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(T){ee(e,e.return,T)}Su&&(Su=!1,Ir(e));break;case 4:n=St,St=Mi(e.stateNode.containerInfo),Xe(t,e),Ve(e),St=n;break;case 12:Xe(t,e),Ve(e);break;case 31:Xe(t,e),Ve(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,di(e,n)));break;case 13:Xe(t,e),Ve(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hi=We()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,di(e,n)));break;case 22:l=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,m=Yt,y=Ee;if(Yt=m||l,Ee=y||o,Xe(t,e),Ee=y,Yt=m,Ve(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||o||Yt||Ee||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(i=o.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var b=o.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null;u.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(T){ee(o,o.return,T)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=l?"":o.memoizedProps}catch(T){ee(o,o.return,T)}}}else if(t.tag===18){if(a===null){o=t;try{var p=o.stateNode;l?Yf(p,!0):Yf(o.stateNode,!1)}catch(T){ee(o,o.return,T)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,di(e,a))));break;case 19:Xe(t,e),Ve(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,di(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Gr(n)){a=n;break}n=n.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var l=a.stateNode,i=yu(e);fi(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(Ka(s,""),a.flags&=-33);var u=yu(e);fi(e,u,s);break;case 3:case 4:var o=a.stateNode.containerInfo,m=yu(e);vu(e,m,o);break;default:throw Error(g(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ir(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ir(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vr(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),Ba(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Lr(t,t.return,a),Ba(t);break;case 27:dl(t.stateNode);case 26:case 5:Mt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Xt(l,i,a),al(4,i);break;case 1:if(Xt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(m){ee(n,n.return,m)}if(n=i,l=n.updateQueue,l!==null){var u=n.stateNode;try{var o=l.shared.hiddenCallbacks;if(o!==null)for(l.shared.hiddenCallbacks=null,l=0;l<o.length;l++)Cc(o[l],u)}catch(m){ee(n,n.return,m)}}a&&s&64&&jr(i),nl(i,i.return);break;case 27:Qr(i);case 26:case 5:Xt(l,i,a),a&&n===null&&s&4&&Yr(i),nl(i,i.return);break;case 12:Xt(l,i,a);break;case 31:Xt(l,i,a),a&&s&4&&Jr(l,i);break;case 13:Xt(l,i,a),a&&s&4&&Fr(l,i);break;case 22:i.memoizedState===null&&Xt(l,i,a),nl(i,i.return);break;case 30:break;default:Xt(l,i,a)}t=t.sibling}}function bu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qn(a))}function Eu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e))}function bt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$r(e,t,a,n),t=t.sibling}function $r(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:bt(e,t,a,n),l&2048&&al(9,t);break;case 1:bt(e,t,a,n);break;case 3:bt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e)));break;case 12:if(l&2048){bt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(t,t.return,o)}}else bt(e,t,a,n);break;case 31:bt(e,t,a,n);break;case 13:bt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?bt(e,t,a,n):ll(e,t):i._visibility&2?bt(e,t,a,n):(i._visibility|=2,hn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&bu(s,t);break;case 24:bt(e,t,a,n),l&2048&&Eu(t.alternate,t);break;default:bt(e,t,a,n)}}function hn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,u=a,o=n,m=s.flags;switch(s.tag){case 0:case 11:case 15:hn(i,s,u,o,l),al(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?hn(i,s,u,o,l):ll(i,s):(y._visibility|=2,hn(i,s,u,o,l)),l&&m&2048&&bu(s.alternate,s);break;case 24:hn(i,s,u,o,l),l&&m&2048&&Eu(s.alternate,s);break;default:hn(i,s,u,o,l)}t=t.sibling}}function ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:ll(a,n),l&2048&&bu(n.alternate,n);break;case 24:ll(a,n),l&2048&&Eu(n.alternate,n);break;default:ll(a,n)}t=t.sibling}}var il=8192;function gn(e,t,a){if(e.subtreeFlags&il)for(e=e.child;e!==null;)Pr(e,t,a),e=e.sibling}function Pr(e,t,a){switch(e.tag){case 26:gn(e,t,a),e.flags&il&&e.memoizedState!==null&&Nh(a,St,e.memoizedState,e.memoizedProps);break;case 5:gn(e,t,a);break;case 3:case 4:var n=St;St=Mi(e.stateNode.containerInfo),gn(e,t,a),St=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=il,il=16777216,gn(e,t,a),il=n):gn(e,t,a));break;default:gn(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ae=n,af(n,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&ua(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mi(e)):sl(e);break;default:sl(e)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ae=n,af(n,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mi(t));break;default:mi(t)}e=e.sibling}}function af(e,t){for(;Ae!==null;){var a=Ae;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Qn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ae=n;else e:for(a=e;Ae!==null;){n=Ae;var l=n.sibling,i=n.return;if(Zr(n),n===a){Ae=null;break e}if(l!==null){l.return=i,Ae=l;break e}Ae=i}}}var Im={getCacheForType:function(e){var t=xe(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return xe(ve).controller.signal}},$m=typeof WeakMap=="function"?WeakMap:Map,F=0,se=null,L=null,G=0,P=0,nt=null,oa=!1,pn=!1,wu=!1,Vt=0,me=0,ca=0,ja=0,Du=0,lt=0,yn=0,ul=null,Ze=null,Au=!1,hi=0,nf=0,gi=1/0,pi=null,ra=null,we=0,fa=null,vn=null,Zt=0,Tu=0,Mu=null,lf=null,ol=0,xu=null;function it(){return(F&2)!==0&&G!==0?G&-G:v.T!==null?Uu():bo()}function sf(){if(lt===0)if((G&536870912)===0||V){var e=Al;Al<<=1,(Al&3932160)===0&&(Al=262144),lt=e}else lt=536870912;return e=tt.current,e!==null&&(e.flags|=32),lt}function Ke(e,t,a){(e===se&&(P===2||P===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),da(e,G,lt,!1)),zn(e,a),((F&2)===0||e!==se)&&(e===se&&((F&2)===0&&(ja|=a),me===4&&da(e,G,lt,!1)),xt(e))}function uf(e,t,a){if((F&6)!==0)throw Error(g(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Cn(e,t),l=n?th(e,t):zu(e,t,!0),i=n;do{if(l===0){pn&&!n&&da(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Pm(a)){l=zu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;l=ul;var o=u.current.memoizedState.isDehydrated;if(o&&(Sn(u,s).flags|=256),s=zu(u,s,!1),s!==2){if(wu&&!o){u.errorRecoveryDisabledLanes|=i,ja|=i,l=4;break e}i=Ze,Ze=l,i!==null&&(Ze===null?Ze=i:Ze.push.apply(Ze,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Sn(e,0),da(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:da(n,t,lt,!oa);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(l=hi+300-We(),10<l)){if(da(n,t,lt,!oa),Ml(n,0,!0)!==0)break e;Zt=t,n.timeoutHandle=Bf(of.bind(null,n,a,Ze,pi,Au,t,lt,ja,yn,oa,i,"Throttled",-0,0),l);break e}of(n,a,Ze,pi,Au,t,lt,ja,yn,oa,i,null,-0,0)}}break}while(!0);xt(e)}function of(e,t,a,n,l,i,s,u,o,m,y,b,h,p){if(e.timeoutHandle=-1,b=t.subtreeFlags,b&8192||(b&16785408)===16785408){b={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},Pr(t,i,b);var T=(i&62914560)===i?hi-We():(i&4194048)===i?nf-We():0;if(T=Hh(b,T),T!==null){Zt=i,e.cancelPendingCommit=T(pf.bind(null,e,t,i,a,n,l,s,u,o,y,b,null,h,p)),da(e,i,s,!m);return}}pf(e,t,i,a,n,l,s,u,o)}function Pm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!Pe(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,n){t&=~Du,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-$e(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&yo(e,a,t)}function yi(){return(F&6)===0?(cl(0),!1):!0}function Cu(){if(L!==null){if(P===0)var e=L.return;else e=L,kt=qa=null,Xs(e),cn=null,Vn=0,e=L;for(;e!==null;)Br(e.alternate,e),e=e.return;L=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Sh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,Cu(),se=e,L=a=Ut(e.current,null),G=t,P=0,nt=null,oa=!1,pn=Cn(e,t),wu=!1,yn=lt=Du=ja=ca=me=0,Ze=ul=null,Au=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-$e(n),i=1<<l;t|=e[l],n&=~i}return Vt=t,Bl(),a}function cf(e,t){H=null,v.H=Pn,t===on||t===Zl?(t=Ac(),P=3):t===Os?(t=Ac(),P=4):P=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,L===null&&(me=1,si(e,rt(t,e.current)))}function rf(){var e=tt.current;return e===null?!0:(G&4194048)===G?ht===null:(G&62914560)===G||(G&536870912)!==0?e===ht:!1}function ff(){var e=v.H;return v.H=Pn,e===null?Pn:e}function df(){var e=v.A;return v.A=Im,e}function vi(){me=4,oa||(G&4194048)!==G&&tt.current!==null||(pn=!0),(ca&134217727)===0&&(ja&134217727)===0||se===null||da(se,G,lt,!1)}function zu(e,t,a){var n=F;F|=2;var l=ff(),i=df();(se!==e||G!==t)&&(pi=null,Sn(e,t)),t=!1;var s=me;e:do try{if(P!==0&&L!==null){var u=L,o=nt;switch(P){case 8:Cu(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=P;if(P=0,nt=null,bn(e,u,o,m),a&&pn){s=0;break e}break;default:m=P,P=0,nt=null,bn(e,u,o,m)}}eh(),s=me;break}catch(y){cf(e,y)}while(!0);return t&&e.shellSuspendCounter++,kt=qa=null,F=n,v.H=l,v.A=i,L===null&&(se=null,G=0,Bl()),s}function eh(){for(;L!==null;)mf(L)}function th(e,t){var a=F;F|=2;var n=ff(),l=df();se!==e||G!==t?(pi=null,gi=We()+500,Sn(e,t)):pn=Cn(e,t);e:do try{if(P!==0&&L!==null){t=L;var i=nt;t:switch(P){case 1:P=0,nt=null,bn(e,t,i,1);break;case 2:case 9:if(wc(i)){P=0,nt=null,hf(t);break}t=function(){P!==2&&P!==9||se!==e||(P=7),xt(e)},i.then(t,t);break e;case 3:P=7;break e;case 4:P=5;break e;case 7:wc(i)?(P=0,nt=null,hf(t)):(P=0,nt=null,bn(e,t,i,7));break;case 5:var s=null;switch(L.tag){case 26:s=L.memoizedState;case 5:case 27:var u=L;if(s?Pf(s):u.stateNode.complete){P=0,nt=null;var o=u.sibling;if(o!==null)L=o;else{var m=u.return;m!==null?(L=m,Si(m)):L=null}break t}}P=0,nt=null,bn(e,t,i,5);break;case 6:P=0,nt=null,bn(e,t,i,6);break;case 8:Cu(),me=6;break e;default:throw Error(g(462))}}ah();break}catch(y){cf(e,y)}while(!0);return kt=qa=null,v.H=n,v.A=l,F=a,L!==null?0:(se=null,G=0,Bl(),me)}function ah(){for(;L!==null&&!Td();)mf(L)}function mf(e){var t=Nr(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Si(e):L=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=qr(a,t,t.pendingProps,t.type,void 0,G);break;case 11:t=qr(a,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Xs(t);default:Br(a,t),t=L=fc(t,Vt),t=Nr(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?Si(e):L=t}function bn(e,t,a,n){kt=qa=null,Xs(t),cn=null,Vn=0;var l=t.return;try{if(Xm(e,l,t,a,G)){me=1,si(e,rt(a,e.current)),L=null;return}}catch(i){if(l!==null)throw L=l,i;me=1,si(e,rt(a,e.current)),L=null;return}t.flags&32768?(V||n===1?e=!0:pn||(G&536870912)!==0?e=!1:(oa=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),gf(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){gf(t,oa);return}e=t.return;var a=Km(t.alternate,t,Vt);if(a!==null){L=a;return}if(t=t.sibling,t!==null){L=t;return}L=t=e}while(t!==null);me===0&&(me=5)}function gf(e,t){do{var a=Jm(e.alternate,e);if(a!==null){a.flags&=32767,L=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){L=e;return}L=e=a}while(e!==null);me=6,L=null}function pf(e,t,a,n,l,i,s,u,o){e.cancelPendingCommit=null;do bi();while(we!==0);if((F&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(i=t.lanes|t.childLanes,i|=ys,kd(e,a,i,s,u,o),e===se&&(L=se=null,G=0),vn=t,fa=e,Zt=a,Tu=i,Mu=l,lf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sh(wl,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,l=D.p,D.p=2,s=F,F|=4;try{Fm(e,t,a)}finally{F=s,D.p=l,v.T=n}}we=1,yf(),vf(),Sf()}}function yf(){if(we===1){we=0;var e=fa,t=vn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=D.p;D.p=2;var l=F;F|=4;try{Wr(t,e);var i=Yu,s=ac(e.containerInfo),u=i.focusedElem,o=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&tc(u.ownerDocument.documentElement,u)){if(o!==null&&ds(u)){var m=o.start,y=o.end;if(y===void 0&&(y=m),"selectionStart"in u)u.selectionStart=m,u.selectionEnd=Math.min(y,u.value.length);else{var b=u.ownerDocument||document,h=b&&b.defaultView||window;if(h.getSelection){var p=h.getSelection(),T=u.textContent.length,R=Math.min(o.start,T),le=o.end===void 0?R:Math.min(o.end,T);!p.extend&&R>le&&(s=le,le=R,R=s);var f=ec(u,R),c=ec(u,le);if(f&&c&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==c.node||p.focusOffset!==c.offset)){var d=b.createRange();d.setStart(f.node,f.offset),p.removeAllRanges(),R>le?(p.addRange(d),p.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),p.addRange(d))}}}}for(b=[],p=u;p=p.parentNode;)p.nodeType===1&&b.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<b.length;u++){var S=b[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Oi=!!Lu,Yu=Lu=null}finally{F=l,D.p=n,v.T=a}}e.current=t,we=2}}function vf(){if(we===2){we=0;var e=fa,t=vn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=D.p;D.p=2;var l=F;F|=4;try{Vr(e,t.alternate,t)}finally{F=l,D.p=n,v.T=a}}we=3}}function Sf(){if(we===4||we===3){we=0,Md();var e=fa,t=vn,a=Zt,n=lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?we=5:(we=0,vn=fa=null,bf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ra=null),Ki(a),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(xn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,l=D.p,D.p=2,v.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var u=n[s];i(u.value,{componentStack:u.stack})}}finally{v.T=t,D.p=l}}(Zt&3)!==0&&bi(),xt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===xu?ol++:(ol=0,xu=e):ol=0,cl(0)}}function bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qn(t)))}function bi(){return yf(),vf(),Sf(),Ef()}function Ef(){if(we!==5)return!1;var e=fa,t=Tu;Tu=0;var a=Ki(Zt),n=v.T,l=D.p;try{D.p=32>a?32:a,v.T=null,a=Mu,Mu=null;var i=fa,s=Zt;if(we=0,vn=fa=null,Zt=0,(F&6)!==0)throw Error(g(331));var u=F;if(F|=4,tf(i.current),$r(i,i.current,s,a),F=u,cl(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(xn,i)}catch{}return!0}finally{D.p=l,v.T=n,bf(e,t)}}function wf(e,t,a){t=rt(a,t),t=iu(e.stateNode,t,2),e=la(e,t,2),e!==null&&(zn(e,2),xt(e))}function ee(e,t,a){if(e.tag===3)wf(e,e,a);else for(;t!==null;){if(t.tag===3){wf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ra===null||!ra.has(n))){e=rt(a,e),a=wr(2),n=la(t,a,2),n!==null&&(Dr(a,n,t,e),zn(n,2),xt(n));break}}t=t.return}}function qu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new $m;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(wu=!0,l.add(a),e=nh.bind(null,e,t,a),t.then(e,e))}function nh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(G&a)===a&&(me===4||me===3&&(G&62914560)===G&&300>We()-hi?(F&2)===0&&Sn(e,0):Du|=a,yn===G&&(yn=0)),xt(e)}function Df(e,t){t===0&&(t=po()),e=xa(e,t),e!==null&&(zn(e,t),xt(e))}function lh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Df(e,a)}function ih(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(g(314))}n!==null&&n.delete(t),Df(e,a)}function sh(e,t){return Qi(e,t)}var Ei=null,En=null,Ru=!1,wi=!1,Ou=!1,ma=0;function xt(e){e!==En&&e.next===null&&(En===null?Ei=En=e:En=En.next=e),wi=!0,Ru||(Ru=!0,oh())}function cl(e,t){if(!Ou&&wi){Ou=!0;do for(var a=!1,n=Ei;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,u=n.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=l&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,xf(n,i))}else i=G,i=Ml(n,n===se?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Cn(n,i)||(a=!0,xf(n,i));n=n.next}while(a);Ou=!1}}function uh(){Af()}function Af(){wi=Ru=!1;var e=0;ma!==0&&vh()&&(e=ma);for(var t=We(),a=null,n=Ei;n!==null;){var l=n.next,i=Tf(n,t);i===0?(n.next=null,a===null?Ei=l:a.next=l,l===null&&(En=a)):(a=n,(e!==0||(i&3)!==0)&&(wi=!0)),n=l}we!==0&&we!==5||cl(e),ma!==0&&(ma=0)}function Tf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-$e(i),u=1<<s,o=l[s];o===-1?((u&a)===0||(u&n)!==0)&&(l[s]=_d(u,t)):o<=t&&(e.expiredLanes|=u),i&=~u}if(t=se,a=G,a=Ml(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(P===2||P===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xi(n),Ki(a)){case 2:case 8:a=ho;break;case 32:a=wl;break;case 268435456:a=go;break;default:a=wl}return n=Mf.bind(null,e),a=Qi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xi(n),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(we!==0&&we!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var n=G;return n=Ml(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(uf(e,n,t),Tf(e,We()),e.callbackNode!=null&&e.callbackNode===a?Mf.bind(null,e):null)}function xf(e,t){if(bi())return null;uf(e,t,!0)}function oh(){bh(function(){(F&6)!==0?Qi(mo,uh):Af()})}function Uu(){if(ma===0){var e=sn;e===0&&(e=Dl,Dl<<=1,(Dl&261888)===0&&(Dl=256)),ma=e}return ma}function Cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(""+e)}function zf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ch(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=Cf((l[Ye]||null).action),s=n.submitter;s&&(t=(t=s[Ye]||null)?Cf(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var u=new _l("action","action",null,n,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ma!==0){var o=s?zf(l,s):new FormData(l);Ps(a,{pending:!0,data:o,method:l.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=s?zf(l,s):new FormData(l),Ps(a,{pending:!0,data:o,method:l.method,action:i},i,o))},currentTarget:l}]})}}for(var _u=0;_u<ps.length;_u++){var ku=ps[_u],rh=ku.toLowerCase(),fh=ku[0].toUpperCase()+ku.slice(1);vt(rh,"on"+fh)}vt(ic,"onAnimationEnd"),vt(sc,"onAnimationIteration"),vt(uc,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(xm,"onTransitionRun"),vt(Cm,"onTransitionStart"),vt(zm,"onTransitionCancel"),vt(oc,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function qf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var u=n[s],o=u.instance,m=u.currentTarget;if(u=u.listener,o!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=m;try{i(l)}catch(y){Hl(y)}l.currentTarget=null,i=o}else for(s=0;s<n.length;s++){if(u=n[s],o=u.instance,m=u.currentTarget,u=u.listener,o!==i&&l.isPropagationStopped())break e;i=u,l.currentTarget=m;try{i(l)}catch(y){Hl(y)}l.currentTarget=null,i=o}}}}function Y(e,t){var a=t[Ji];a===void 0&&(a=t[Ji]=new Set);var n=e+"__bubble";a.has(n)||(Rf(t,e,2,!1),a.add(n))}function Nu(e,t,a){var n=0;t&&(n|=4),Rf(a,e,n,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Hu(e){if(!e[Di]){e[Di]=!0,Do.forEach(function(a){a!=="selectionchange"&&(dh.has(a)||Nu(a,!1,e),Nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,Nu("selectionchange",!1,t))}}function Rf(e,t,a,n){switch(sd(t)){case 2:var l=Lh;break;case 8:l=Yh;break;default:l=$u}a=l.bind(null,t,a,e),l=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Bu(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var u=n.stateNode.containerInfo;if(u===l)break;if(s===4)for(s=n.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;u!==null;){if(s=Ga(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){n=i=s;continue e}u=u.parentNode}}n=n.return}ko(function(){var m=i,y=ts(a),b=[];e:{var h=cc.get(e);if(h!==void 0){var p=_l,T=e;switch(e){case"keypress":if(Ol(a)===0)break e;case"keydown":case"keyup":p=im;break;case"focusin":T="focus",p=us;break;case"focusout":T="blur",p=us;break;case"beforeblur":case"afterblur":p=us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=om;break;case ic:case sc:case uc:p=Wd;break;case oc:p=rm;break;case"scroll":case"scrollend":p=Vd;break;case"wheel":p=dm;break;case"copy":case"cut":case"paste":p=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lo;break;case"toggle":case"beforetoggle":p=hm}var R=(t&4)!==0,le=!R&&(e==="scroll"||e==="scrollend"),f=R?h!==null?h+"Capture":null:h;R=[];for(var c=m,d;c!==null;){var S=c;if(d=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||d===null||f===null||(S=On(c,f),S!=null&&R.push(fl(c,S,d))),le)break;c=c.return}0<R.length&&(h=new p(h,T,null,a,y),b.push({event:h,listeners:R}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&a!==es&&(T=a.relatedTarget||a.fromElement)&&(Ga(T)||T[Ya]))break e;if((p||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,p?(T=a.relatedTarget||a.toElement,p=m,T=T?Ga(T):null,T!==null&&(le=J(T),R=T.tag,T!==le||R!==5&&R!==27&&R!==6)&&(T=null)):(p=null,T=m),p!==T)){if(R=Bo,S="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(R=Lo,S="onPointerLeave",f="onPointerEnter",c="pointer"),le=p==null?h:Rn(p),d=T==null?h:Rn(T),h=new R(S,c+"leave",p,a,y),h.target=le,h.relatedTarget=d,S=null,Ga(y)===m&&(R=new R(f,c+"enter",T,a,y),R.target=d,R.relatedTarget=le,S=R),le=S,p&&T)t:{for(R=mh,f=p,c=T,d=0,S=f;S;S=R(S))d++;S=0;for(var z=c;z;z=R(z))S++;for(;0<d-S;)f=R(f),d--;for(;0<S-d;)c=R(c),S--;for(;d--;){if(f===c||c!==null&&f===c.alternate){R=f;break t}f=R(f),c=R(c)}R=null}else R=null;p!==null&&Of(b,h,p,R,!1),T!==null&&le!==null&&Of(b,le,T,R,!0)}}e:{if(h=m?Rn(m):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var Z=Jo;else if(Zo(h))if(Fo)Z=Am;else{Z=wm;var C=Em}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Pi(m.elementType)&&(Z=Jo):Z=Dm;if(Z&&(Z=Z(e,m))){Ko(b,Z,a,y);break e}C&&C(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&$i(h,"number",h.value)}switch(C=m?Rn(m):window,e){case"focusin":(Zo(C)||C.contentEditable==="true")&&(Ia=C,ms=m,Ln=null);break;case"focusout":Ln=ms=Ia=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,nc(b,a,y);break;case"selectionchange":if(Mm)break;case"keydown":case"keyup":nc(b,a,y)}var B;if(cs)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Wa?Xo(e,a)&&(Q="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Q="onCompositionStart");Q&&(Yo&&a.locale!=="ko"&&(Wa||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Wa&&(B=No()):(It=y,ls="value"in It?It.value:It.textContent,Wa=!0)),C=Ai(m,Q),0<C.length&&(Q=new jo(Q,e,null,a,y),b.push({event:Q,listeners:C}),B?Q.data=B:(B=Vo(a),B!==null&&(Q.data=B)))),(B=pm?ym(e,a):vm(e,a))&&(Q=Ai(m,"onBeforeInput"),0<Q.length&&(C=new jo("onBeforeInput","beforeinput",null,a,y),b.push({event:C,listeners:Q}),C.data=B)),ch(b,e,m,a,y)}qf(b,t)})}function fl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ai(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=On(e,a),l!=null&&n.unshift(fl(e,l,i)),l=On(e,t),l!=null&&n.push(fl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Of(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var u=a,o=u.alternate,m=u.stateNode;if(u=u.tag,o!==null&&o===n)break;u!==5&&u!==26&&u!==27||m===null||(o=m,l?(m=On(a,i),m!=null&&s.unshift(fl(a,m,o))):l||(m=On(a,i),m!=null&&s.push(fl(a,m,o)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var hh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(gh,"")}function _f(e,t){return t=Uf(t),Uf(e)===t}function ne(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ka(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ka(e,""+n);break;case"className":Cl(e,"class",n);break;case"tabIndex":Cl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(e,a,n);break;case"style":Uo(e,n,i);break;case"data":if(t!=="object"){Cl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ql(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",l.name,l,null),ne(e,t,"formEncType",l.formEncType,l,null),ne(e,t,"formMethod",l.formMethod,l,null),ne(e,t,"formTarget",l.formTarget,l,null)):(ne(e,t,"encType",l.encType,l,null),ne(e,t,"method",l.method,l,null),ne(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ql(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Rt);break;case"onScroll":n!=null&&Y("scroll",e);break;case"onScrollEnd":n!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(g(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ql(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Y("beforetoggle",e),Y("toggle",e),xl(e,"popover",n);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":xl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qd.get(a)||a,xl(e,a,n))}}function ju(e,t,a,n,l,i){switch(a){case"style":Uo(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(g(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ka(e,n):(typeof n=="number"||typeof n=="bigint")&&Ka(e,""+n);break;case"onScroll":n!=null&&Y("scroll",e);break;case"onScrollEnd":n!=null&&Y("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Ye]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):xl(e,a,n)}}}function ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:ne(e,t,i,s,a,null)}}l&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":Y("invalid",e);var u=i=s=l=null,o=null,m=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":l=y;break;case"type":s=y;break;case"checked":o=y;break;case"defaultChecked":m=y;break;case"value":i=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:ne(e,t,n,y,a,null)}}zo(e,i,u,o,m,s,l,!1);return;case"select":Y("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":n=u;default:ne(e,t,l,u,a,null)}t=i,a=s,e.multiple=!!n,t!=null?Za(e,!!n,t,!1):a!=null&&Za(e,!!n,a,!0);return;case"textarea":Y("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(g(91));break;default:ne(e,t,s,u,a,null)}Ro(e,n,l,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(n=a[o],n!=null))switch(o){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,o,n,a,null)}return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(n=0;n<rl.length;n++)Y(rl[n],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:ne(e,t,m,n,a,null)}return;default:if(Pi(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&ju(e,t,y,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&ne(e,t,u,n,a,null))}function ph(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,u=null,o=null,m=null,y=null;for(p in a){var b=a[p];if(a.hasOwnProperty(p)&&b!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=b;default:n.hasOwnProperty(p)||ne(e,t,p,null,n,b)}}for(var h in n){var p=n[h];if(b=a[h],n.hasOwnProperty(h)&&(p!=null||b!=null))switch(h){case"type":i=p;break;case"name":l=p;break;case"checked":m=p;break;case"defaultChecked":y=p;break;case"value":s=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:p!==b&&ne(e,t,h,p,n,b)}}Ii(e,s,u,o,m,y,i,l);return;case"select":p=s=u=h=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":p=o;default:n.hasOwnProperty(i)||ne(e,t,i,null,n,o)}for(l in n)if(i=n[l],o=a[l],n.hasOwnProperty(l)&&(i!=null||o!=null))switch(l){case"value":h=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==o&&ne(e,t,l,i,n,o)}t=u,a=s,n=p,h!=null?Za(e,!!a,h,!1):!!n!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":p=h=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ne(e,t,u,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":h=l;break;case"defaultValue":p=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(g(91));break;default:l!==i&&ne(e,t,s,l,n,i)}qo(e,h,p);return;case"option":for(var T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!n.hasOwnProperty(T))switch(T){case"selected":e.selected=!1;break;default:ne(e,t,T,null,n,h)}for(o in n)if(h=n[o],p=a[o],n.hasOwnProperty(o)&&h!==p&&(h!=null||p!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ne(e,t,o,h,n,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in a)h=a[R],a.hasOwnProperty(R)&&h!=null&&!n.hasOwnProperty(R)&&ne(e,t,R,null,n,h);for(m in n)if(h=n[m],p=a[m],n.hasOwnProperty(m)&&h!==p&&(h!=null||p!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,t));break;default:ne(e,t,m,h,n,p)}return;default:if(Pi(t)){for(var le in a)h=a[le],a.hasOwnProperty(le)&&h!==void 0&&!n.hasOwnProperty(le)&&ju(e,t,le,void 0,n,h);for(y in n)h=n[y],p=a[y],!n.hasOwnProperty(y)||h===p||h===void 0&&p===void 0||ju(e,t,y,h,n,p);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&ne(e,t,f,null,n,h);for(b in n)h=n[b],p=a[b],!n.hasOwnProperty(b)||h===p||h==null&&p==null||ne(e,t,b,h,n,p)}function kf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,u=l.duration;if(i&&u&&kf(s)){for(s=0,u=l.responseEnd,n+=1;n<a.length;n++){var o=a[n],m=o.startTime;if(m>u)break;var y=o.transferSize,b=o.initiatorType;y&&kf(b)&&(o=o.responseEnd,s+=y*(o<u?1:(u-m)/(o-m)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lu=null,Yu=null;function Ti(e){return e.nodeType===9?e:e.ownerDocument}function Nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qu=null;function vh(){var e=window.event;return e&&e.type==="popstate"?e===Qu?!1:(Qu=e,!0):(Qu=null,!1)}var Bf=typeof setTimeout=="function"?setTimeout:void 0,Sh=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,bh=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Eh)}:Bf;function Eh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Lf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Tn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")dl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dl(a);for(var i=a.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[qn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&dl(e.ownerDocument.body);a=l}while(a);Tn(t)}function Yf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Xu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xu(a),Fi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function Dh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gt(e.nextSibling),e===null))return null;return e}function Gf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Vu(e){return e.data==="$?"||e.data==="$~"}function Zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ah(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ku=null;function Qf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=Ti(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function dl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fi(e)}var pt=new Map,Zf=new Set;function Mi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=D.d;D.d={f:Th,r:Mh,D:xh,C:Ch,L:zh,m:qh,X:Oh,S:Rh,M:Uh};function Th(){var e=Kt.f(),t=yi();return e||t}function Mh(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?or(t):Kt.r(e)}var wn=typeof document>"u"?null:document;function Kf(e,t,a){var n=wn;if(n&&typeof t=="string"&&t){var l=ot(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Zf.has(l)||(Zf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ze(t,"link",e),De(t),n.head.appendChild(t)))}}function xh(e){Kt.D(e),Kf("dns-prefetch",e,null)}function Ch(e,t){Kt.C(e,t),Kf("preconnect",e,t)}function zh(e,t,a){Kt.L(e,t,a);var n=wn;if(n&&e&&t){var l='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ot(a.imageSizes)+'"]')):l+='[href="'+ot(e)+'"]';var i=l;switch(t){case"style":i=Dn(e);break;case"script":i=An(e)}pt.has(i)||(e=U({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),pt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(ml(i))||t==="script"&&n.querySelector(hl(i))||(t=n.createElement("link"),ze(t,"link",e),De(t),n.head.appendChild(t)))}}function qh(e,t){Kt.m(e,t);var a=wn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ot(n)+'"][href="'+ot(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=An(e)}if(!pt.has(i)&&(e=U({rel:"modulepreload",href:e},t),pt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(i)))return}n=a.createElement("link"),ze(n,"link",e),De(n),a.head.appendChild(n)}}}function Rh(e,t,a){Kt.S(e,t,a);var n=wn;if(n&&e){var l=Xa(n).hoistableStyles,i=Dn(e);t=t||"default";var s=l.get(i);if(!s){var u={loading:0,preload:null};if(s=n.querySelector(ml(i)))u.loading=5;else{e=U({rel:"stylesheet",href:e,"data-precedence":t},a),(a=pt.get(i))&&Ju(e,a);var o=s=n.createElement("link");De(o),ze(o,"link",e),o._p=new Promise(function(m,y){o.onload=m,o.onerror=y}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,xi(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:u},l.set(i,s)}}}function Oh(e,t){Kt.X(e,t);var a=wn;if(a&&e){var n=Xa(a).hoistableScripts,l=An(e),i=n.get(l);i||(i=a.querySelector(hl(l)),i||(e=U({src:e,async:!0},t),(t=pt.get(l))&&Fu(e,t),i=a.createElement("script"),De(i),ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Uh(e,t){Kt.M(e,t);var a=wn;if(a&&e){var n=Xa(a).hoistableScripts,l=An(e),i=n.get(l);i||(i=a.querySelector(hl(l)),i||(e=U({src:e,async:!0,type:"module"},t),(t=pt.get(l))&&Fu(e,t),i=a.createElement("script"),De(i),ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Jf(e,t,a,n){var l=(l=j.current)?Mi(l):null;if(!l)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Dn(a.href),a=Xa(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dn(a.href);var i=Xa(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(ml(e)))&&!i._p&&(s.instance=i,s.state.loading=5),pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pt.set(e,a),i||_h(l,e,a,s.state))),t&&n===null)throw Error(g(528,""));return s}if(t&&n!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=An(a),a=Xa(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function Dn(e){return'href="'+ot(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function Ff(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function _h(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ze(t,"link",a),De(t),e.head.appendChild(t))}function An(e){return'[src="'+ot(e)+'"]'}function hl(e){return"script[async]"+e}function Wf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(n)return t.instance=n,De(n),n;var l=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),De(n),ze(n,"style",l),xi(n,a.precedence,e),t.instance=n;case"stylesheet":l=Dn(a.href);var i=e.querySelector(ml(l));if(i)return t.state.loading|=4,t.instance=i,De(i),i;n=Ff(a),(l=pt.get(l))&&Ju(n,l),i=(e.ownerDocument||e).createElement("link"),De(i);var s=i;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),ze(i,"link",n),t.state.loading|=4,xi(i,a.precedence,e),t.instance=i;case"script":return i=An(a.src),(l=e.querySelector(hl(i)))?(t.instance=l,De(l),l):(n=a,(l=pt.get(i))&&(n=U({},a),Fu(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),De(l),ze(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,xi(n,a.precedence,e));return t.instance}function xi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var u=n[s];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ci=null;function If(e,t,a){if(Ci===null){var n=new Map,l=Ci=new Map;l.set(a,n)}else l=Ci,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[qn]||i[Te]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var u=n.get(s);u?u.push(i):n.set(s,[i])}}return n}function $f(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function kh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Dn(n.href),i=t.querySelector(ml(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=zi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,De(i);return}i=t.ownerDocument||t,n=Ff(n),(l=pt.get(l))&&Ju(n,l),i=i.createElement("link"),De(i);var s=i;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),ze(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wu=0;function Hh(e,t){return e.stylesheets&&e.count===0&&Ri(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ri(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Wu===0&&(Wu=62500*yh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ri(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Wu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function zi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ri(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function Ri(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach(Bh,e),qi=null,zi.call(e))}function Bh(e,t){if(!(t.state.loading&4)){var a=qi.get(e);if(a)var n=a.get(null);else{a=new Map,qi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=zi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var gl={$$typeof:qe,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function jh(e,t,a,n,l,i,s,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ed(e,t,a,n,l,i,s,u,o,m,y,b){return e=new jh(e,t,a,s,o,m,y,b,u),t=1,i===!0&&(t|=24),i=et(3,null,null,t),e.current=i,i.stateNode=e,t=zs(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},Us(i),e}function td(e){return e?(e=en,e):en}function ad(e,t,a,n,l,i){l=td(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=la(e,n,t),a!==null&&(Ke(a,e,t),Kn(a,e,t))}function nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Iu(e,t){nd(e,t),(e=e.alternate)&&nd(e,t)}function ld(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Ke(t,e,67108864),Iu(e,67108864)}}function id(e){if(e.tag===13||e.tag===31){var t=it();t=Zi(t);var a=xa(e,t);a!==null&&Ke(a,e,t),Iu(e,t)}}var Oi=!0;function Lh(e,t,a,n){var l=v.T;v.T=null;var i=D.p;try{D.p=2,$u(e,t,a,n)}finally{D.p=i,v.T=l}}function Yh(e,t,a,n){var l=v.T;v.T=null;var i=D.p;try{D.p=8,$u(e,t,a,n)}finally{D.p=i,v.T=l}}function $u(e,t,a,n){if(Oi){var l=Pu(n);if(l===null)Bu(e,t,n,Ui,a),ud(e,n);else if(Qh(l,e,t,a,n))n.stopPropagation();else if(ud(e,n),t&4&&-1<Gh.indexOf(e)){for(;l!==null;){var i=Qa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=wa(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-$e(s);u.entanglements[1]|=o,s&=~o}xt(i),(F&6)===0&&(gi=We()+500,cl(0))}}break;case 31:case 13:u=xa(i,2),u!==null&&Ke(u,i,2),yi(),Iu(i,2)}if(i=Pu(n),i===null&&Bu(e,t,n,Ui,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else Bu(e,t,n,null,a)}}function Pu(e){return e=ts(e),eo(e)}var Ui=null;function eo(e){if(Ui=null,e=Ga(e),e!==null){var t=J(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=Oe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ui=e,null}function sd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xd()){case mo:return 2;case ho:return 8;case wl:case Cd:return 32;case go:return 268435456;default:return 32}default:return 32}}var to=!1,ga=null,pa=null,ya=null,pl=new Map,yl=new Map,va=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ud(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function vl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&ld(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Qh(e,t,a,n,l){switch(t){case"focusin":return ga=vl(ga,e,t,a,n,l),!0;case"dragenter":return pa=vl(pa,e,t,a,n,l),!0;case"mouseover":return ya=vl(ya,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return pl.set(i,vl(pl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,yl.set(i,vl(yl.get(i)||null,e,t,a,n,l)),!0}return!1}function od(e){var t=Ga(e.target);if(t!==null){var a=J(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,Eo(e.priority,function(){id(a)});return}}else if(t===31){if(t=Oe(a),t!==null){e.blockedOn=t,Eo(e.priority,function(){id(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Qa(a),t!==null&&ld(t),e.blockedOn=a,!1;t.shift()}return!0}function cd(e,t,a){_i(e)&&a.delete(t)}function Xh(){to=!1,ga!==null&&_i(ga)&&(ga=null),pa!==null&&_i(pa)&&(pa=null),ya!==null&&_i(ya)&&(ya=null),pl.forEach(cd),yl.forEach(cd)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Xh)))}var Ni=null;function rd(e){Ni!==e&&(Ni=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Ni===e&&(Ni=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(eo(n||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,Ps(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Tn(e){function t(o){return ki(o,e)}ga!==null&&ki(ga,e),pa!==null&&ki(pa,e),ya!==null&&ki(ya,e),pl.forEach(t),yl.forEach(t);for(var a=0;a<va.length;a++){var n=va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)od(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[Ye]||null;if(typeof i=="function")s||rd(a);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Ye]||null)u=s.formAction;else if(eo(l)!==null)continue}else u=s.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),rd(a)}}}function fd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ao(e){this._internalRoot=e}Hi.prototype.render=ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,n=it();ad(a,n,e,t,null,null)},Hi.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ad(e.current,2,null,e,null,null),yi(),t[Ya]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=bo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&od(e)}};var dd=fe.version;if(dd!=="19.2.0")throw Error(g(527,dd,"19.2.0"));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=w(t),e=e!==null?I(e):null,e=e===null?null:e.stateNode,e};var Vh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{xn=Bi.inject(Vh),Ie=Bi}catch{}}return bl.createRoot=function(e,t){if(!O(e))throw Error(g(299));var a=!1,n="",l=vr,i=Sr,s=br;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ed(e,1,!1,null,null,a,n,null,l,i,s,fd),e[Ya]=t.current,Hu(e),new ao(t)},bl.hydrateRoot=function(e,t,a){if(!O(e))throw Error(g(299));var n=!1,l="",i=vr,s=Sr,u=br,o=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=ed(e,1,!0,t,a??null,n,l,o,i,s,u,fd),t.context=td(null),a=t.current,n=it(),n=Zi(n),l=na(n),l.callback=null,la(a,l,n),a=n,t.current.lanes=a,zn(t,a),xt(t),e[Ya]=t.current,Hu(e),new Hi(t)},bl.version="19.2.0",bl}var wd;function tg(){if(wd)return io.exports;wd=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),io.exports=eg(),io.exports}var ag=tg();function ng(){const[M,fe]=Dd.useState(null),W=[{id:1,question:"1. Define System and list its characteristics.",answer:"",codeExample:`
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



`},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""},{id:1,question:"",answer:"",codeExample:""}],g=O=>{fe(M===O?null:O)};return Ne.jsxs("div",{className:"app-container",children:[Ne.jsx("h1",{children:"SE Interview Questions"}),Ne.jsx("div",{className:"questions-container",children:W.map(O=>Ne.jsxs("div",{className:"question-item",children:[Ne.jsx("button",{className:`question-button ${M===O.id?"active":""}`,onClick:()=>g(O.id),children:O.question}),M===O.id&&Ne.jsxs("div",{className:"answer-container",children:[Ne.jsxs("div",{className:"answer",children:[Ne.jsx("h3",{children:"Answer:"}),Ne.jsx("p",{children:O.answer})]}),O.codeExample&&Ne.jsxs("div",{className:"code-example",children:[Ne.jsx("h3",{children:"Code Example:"}),Ne.jsx("pre",{children:Ne.jsx("code",{children:O.codeExample})})]})]})]},O.id))})]})}ag.createRoot(document.getElementById("root")).render(Ne.jsx(Dd.StrictMode,{children:Ne.jsx(ng,{})}));

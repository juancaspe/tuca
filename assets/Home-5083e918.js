import{p as Y,I as W,r as N,c as P,x as R,y as ue,g as fe,i as Oe,z as ee,A as Ie,B as Ce,S as De,C as B,D as ve,E as Me,G as Ve,d as L,H as me,s as G,J as He,o as Ne,a as Pe,b as We,K as je,L as ze,t as qe,n as $e,M as Ue,u as Ge,v as Ye,N as Ke,k as x,O as U,P as te,T as Qe,Q as Je,R as Xe,U as Ze,F as _e,V as et,e as tt,h as nt,w as M,W as Ae,l as Q}from"./index-cc42b969.js";import{p as ye,f as ne,d as oe,e as ge,g as he,m as ot,h as at,i as rt,j as lt,k as it,l as st,c as ct,M as ut,n as ft,a as vt,o as dt,V as be}from"./VImg-5c0d8191.js";import{B as ae,g as we,n as mt,m as yt,u as gt,a as ht,s as bt}from"./lazy-f36546f8.js";import{b as wt,V as Et,a as re}from"./VRow-50cb1804.js";function Te(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function xt(e){for(;e;){if(de(e))return e;e=e.parentElement}return document.scrollingElement}function X(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(de(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function de(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function St(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const kt="/assets/tuca_logo-2f5c3187.png";const pt=Y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Ot(e,t){const n={},o=r=>()=>{if(!W)return Promise.resolve(!0);const i=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const l=parseInt(e[r]??0,10);n[r]=window.setTimeout(()=>{t==null||t(i),s(i)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Ct=Symbol.for("vuetify:v-menu"),Pt=Y({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...pt()},"v-overlay-activator");function _t(e,t){let{isActive:n,isTop:o}=t;const r=N();let i=!1,s=!1,l=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:c,runCloseDelay:y}=Ot(e,a=>{a===(e.openOnHover&&i||u.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==a&&(l=!0),n.value=a)}),h={click:a=>{a.stopPropagation(),r.value=a.currentTarget||a.target,n.value=!n.value},mouseenter:a=>{var _;(_=a.sourceCapabilities)!=null&&_.firesTouchEvents||(i=!0,r.value=a.currentTarget||a.target,c())},mouseleave:a=>{i=!1,y()},focus:a=>{De&&!a.target.matches(":focus-visible")||(s=!0,a.stopPropagation(),r.value=a.currentTarget||a.target,c())},blur:a=>{s=!1,a.stopPropagation(),y()}},C=P(()=>{const a={};return f.value&&(a.click=h.click),e.openOnHover&&(a.mouseenter=h.mouseenter,a.mouseleave=h.mouseleave),u.value&&(a.focus=h.focus,a.blur=h.blur),a}),d=P(()=>{const a={};if(e.openOnHover&&(a.mouseenter=()=>{i=!0,c()},a.mouseleave=()=>{i=!1,y()}),e.closeOnContentClick){const _=Oe(Ct,null);a.click=()=>{n.value=!1,_==null||_.closeParents()}}return a}),v=P(()=>{const a={};return e.openOnHover&&(a.mouseenter=()=>{l&&(i=!0,l=!1,c())},a.mouseleave=()=>{i=!1,y()}),a});R(o,a=>{a&&(e.openOnHover&&!i&&(!u.value||!s)||u.value&&!s&&(!e.openOnHover||!i))&&(n.value=!1)});const O=N();ue(()=>{O.value&&ee(()=>{const a=O.value;r.value=Ie(a)?a.$el:a})});const p=fe("useActivator");let w;return R(()=>!!e.activator,a=>{a&&W?(w=Ce(),w.run(()=>{At(e,p,{activatorEl:r,activatorEvents:C})})):w&&w.stop()},{flush:"post",immediate:!0}),B(()=>{w==null||w.stop()}),{activatorEl:r,activatorRef:O,activatorEvents:C,contentEvents:d,scrimEvents:v}}function At(e,t,n){let{activatorEl:o,activatorEvents:r}=n;R(()=>e.activator,(u,f)=>{if(f&&u!==f){const c=l(f);c&&s(c)}u&&ee(()=>i())},{immediate:!0}),R(()=>e.activatorProps,()=>{i()}),B(()=>{s()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.addEventListener(y,h)}),Object.keys(f).forEach(c=>{f[c]==null?u.removeAttribute(c):u.setAttribute(c,f[c])}))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.removeEventListener(y,h)}),Object.keys(f).forEach(c=>{u.removeAttribute(c)}))}function l(){var c,y;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(u)if(u==="parent"){let h=(y=(c=t==null?void 0:t.proxy)==null?void 0:c.$el)==null?void 0:y.parentNode;for(;h.hasAttribute("data-no-activator");)h=h.parentNode;f=h}else typeof u=="string"?f=document.querySelector(u):"$el"in u?f=u.$el:f=u;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}function le(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Tt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ee(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,r=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,i=n==="top"?0:n==="bottom"?t.height:n;return le({x:r,y:i},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,r=n==="left"?0:n==="right"?t.width:n,i=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return le({x:r,y:i},t)}return le({x:t.width/2,y:t.height/2},t)}const Le={static:Bt,connected:It},Lt=Y({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Le},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function Rt(e,t){const n=N({}),o=N();W&&(ve(()=>!!(t.isActive.value&&e.locationStrategy),i=>{var s,l;R(()=>e.locationStrategy,i),B(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:o.value=(l=Le[e.locationStrategy](t,e,n))==null?void 0:l.updateLocation}),window.addEventListener("resize",r,{passive:!0}),B(()=>{window.removeEventListener("resize",r),o.value=void 0}));function r(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:n,updateLocation:o}}function Bt(){}function Ft(e,t){const n=mt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function It(e,t,n){St(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:i}=Me(()=>{const d=ye(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?ne(d):ye(t.origin,e.isRtl.value);return d.side===v.side&&d.align===oe(v).align?{preferredAnchor:ge(d),preferredOrigin:ge(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,l,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),c=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&C()});R([e.activatorEl,e.contentEl],(d,v)=>{let[O,p]=d,[w,a]=v;w&&h.unobserve(w),O&&h.observe(O),a&&h.unobserve(a),p&&h.observe(p)},{immediate:!0}),B(()=>{h.disconnect()});function C(){if(y=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>y=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=Ft(e.contentEl.value,e.isRtl.value),O=X(e.contentEl.value),p=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=O.reduce((S,E)=>{const m=E.getBoundingClientRect(),b=new ae({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new ae({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);w.x+=p,w.y+=p,w.width-=p*2,w.height-=p*2;let a={anchor:r.value,origin:i.value};function _(S){const E=new ae(v),m=Ee(S.anchor,d),b=Ee(S.origin,E);let{x:A,y:T}=Tt(m,b);switch(S.anchor.side){case"top":T-=c.value[0];break;case"bottom":T+=c.value[0];break;case"left":A-=c.value[0];break;case"right":A+=c.value[0];break}switch(S.anchor.align){case"top":T-=c.value[1];break;case"bottom":T+=c.value[1];break;case"left":A-=c.value[1];break;case"right":A+=c.value[1];break}return E.x+=A,E.y+=T,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,f.value),{overflows:we(E,w),x:A,y:T}}let I=0,V=0;const H={x:0,y:0},z={x:!1,y:!1};let q=-1;for(;;){if(q++>10){Ve("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:E,overflows:m}=_(a);I+=S,V+=E,v.x+=S,v.y+=E;{const b=he(a.anchor),A=m.x.before||m.x.after,T=m.y.before||m.y.after;let j=!1;if(["x","y"].forEach(k=>{if(k==="x"&&A&&!z.x||k==="y"&&T&&!z.y){const g={anchor:{...a.anchor},origin:{...a.origin}},F=k==="x"?b==="y"?oe:ne:b==="y"?ne:oe;g.anchor=F(g.anchor),g.origin=F(g.origin);const{overflows:K}=_(g);(K[k].before<=m[k].before&&K[k].after<=m[k].after||K[k].before+K[k].after<(m[k].before+m[k].after)/2)&&(a=g,j=z[k]=!0)}}),j)continue}m.x.before&&(I+=m.x.before,v.x+=m.x.before),m.x.after&&(I-=m.x.after,v.x-=m.x.after),m.y.before&&(V+=m.y.before,v.y+=m.y.before),m.y.after&&(V-=m.y.after,v.y-=m.y.after);{const b=we(v,w);H.x=w.width-b.x.before-b.x.after,H.y=w.height-b.y.before-b.y.after,I+=b.x.before,v.x+=b.x.before,V+=b.y.before,v.y+=b.y.before}break}const D=he(a.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${a.anchor.side} ${a.anchor.align}`,transformOrigin:`${a.origin.side} ${a.origin.align}`,top:L(ie(V)),left:e.isRtl.value?void 0:L(ie(I)),right:e.isRtl.value?L(ie(-I)):void 0,minWidth:L(D==="y"?Math.min(s.value,d.width):s.value),maxWidth:L(xe(me(H.x,s.value===1/0?0:s.value,u.value))),maxHeight:L(xe(me(H.y,l.value===1/0?0:l.value,f.value)))}),{available:H,contentBox:v}}return R(()=>[r.value,i.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>C()),ee(()=>{const d=C();if(!d)return;const{available:v,contentBox:O}=d;O.height>v.y&&requestAnimationFrame(()=>{C(),requestAnimationFrame(()=>{C()})})}),{updateLocation:C}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let se=!0;const Z=[];function Dt(e){!se||Z.length?(Z.push(e),ce()):(se=!1,e(),ce())}let Se=-1;function ce(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=Z.shift();e&&e(),Z.length?ce():se=!0})}const J={none:null,close:Ht,block:Nt,reposition:Wt},Mt=Y({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"v-overlay-scroll-strategies");function Vt(e,t){if(!W)return;let n;ue(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Ce(),await ee(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=J[e.scrollStrategy])==null||o.call(J,t,e,n)}))}),B(()=>{n==null||n.stop()})}function Ht(e){function t(n){e.isActive.value=!1}Re(e.activatorEl.value??e.contentEl.value,t)}function Nt(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...X(e.activatorEl.value,t.contained?n:void 0),...X(e.contentEl.value,t.contained?n:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,i=(l=>de(l)&&l)(n||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,u)=>{l.style.setProperty("--v-body-scroll-x",L(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",L(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",L(r)),l.classList.add("v-overlay-scroll-blocked")}),B(()=>{o.forEach((l,u)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-c}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Wt(e,t,n){let o=!1,r=-1,i=-1;function s(l){Dt(()=>{var c,y;const u=performance.now();(y=(c=e.updateLocation).value)==null||y.call(c,l),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{n.run(()=>{Re(e.activatorEl.value??e.contentEl.value,l=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{s(l)})})):s(l)})})}),B(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(r)})}function Re(e,t){const n=[document,...X(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),B(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function jt(){if(!W)return G(!1);const{ssr:e}=He();if(e){const t=G(!1);return Ne(()=>{t.value=!0}),t}else return G(!0)}function zt(){const t=fe("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const ke=Symbol.for("vuetify:stack"),$=Pe([]);function qt(e,t,n){const o=fe("useStack"),r=!n,i=Oe(ke,void 0),s=Pe({activeChildren:new Set});We(ke,s);const l=G(+t.value);ve(e,()=>{var y;const c=(y=$.at(-1))==null?void 0:y[1];l.value=c?c+10:+t.value,r&&$.push([o.uid,l.value]),i==null||i.activeChildren.add(o.uid),B(()=>{if(r){const h=ze($).findIndex(C=>C[0]===o.uid);$.splice(h,1)}i==null||i.activeChildren.delete(o.uid)})});const u=G(!0);r&&ue(()=>{var y;const c=((y=$.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=c)});const f=P(()=>!s.activeChildren.size);return{globalTop:je(u),localTop:f,stackStyles:P(()=>({zIndex:l.value}))}}function $t(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!W)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Ut(){return!0}function Be(e,t,n){if(!e||Fe(e,n)===!1)return!1;const o=Te(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(t),!r.some(i=>i==null?void 0:i.contains(e.target))}function Fe(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ut)(e)}function Gt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Be(e,t,n)&&setTimeout(()=>{Fe(e,n)&&o&&o(e)},0)}function pe(e,t){const n=Te(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Yt={mounted(e,t){const n=r=>Gt(r,e,t),o=r=>{e._clickOutside.lastMousedownWasOutside=Be(r,e,t)};pe(e,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(pe(e,n=>{var i;if(!n||!((i=e._clickOutside)!=null&&i[t.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Kt(e){const{modelValue:t,color:n,...o}=e;return x(et,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&x("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Qt=Y({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Pt(),...ot(),...at(),...yt(),...Lt(),...Mt(),...qe(),...rt()},"v-overlay"),Jt=$e()({name:"VOverlay",directives:{ClickOutside:Yt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Qt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:r}=t;const i=Ue(e,"modelValue"),s=P({get:()=>i.value,set:g=>{g&&e.disabled||(i.value=g)}}),{teleportTarget:l}=$t(P(()=>e.attach||e.contained)),{themeClasses:u}=Ge(e),{rtlClasses:f,isRtl:c}=Ye(),{hasContent:y,onAfterLeave:h}=gt(e,s),C=lt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:O}=qt(s,Ke(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:w,activatorEvents:a,contentEvents:_,scrimEvents:I}=_t(e,{isActive:s,isTop:v}),{dimensionStyles:V}=it(e),H=jt(),{scopeId:z}=zt();R(()=>e.disabled,g=>{g&&(s.value=!1)});const q=N(),D=N(),{contentStyles:S,updateLocation:E}=Rt(e,{isRtl:c,contentEl:D,activatorEl:p,isActive:s});Vt(e,{root:q,contentEl:D,activatorEl:p,isActive:s,updateLocation:E});function m(g){r("click:outside",g),e.persistent?k():s.value=!1}function b(){return s.value&&d.value}W&&R(s,g=>{g?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0});function A(g){g.key==="Escape"&&d.value&&(e.persistent?k():s.value=!1)}const T=st();ve(()=>e.closeOnBack,()=>{ft(T,g=>{d.value&&s.value?(g(!1),e.persistent?k():s.value=!1):g()})});const j=N();R(()=>s.value&&(e.absolute||e.contained)&&l.value==null,g=>{if(g){const F=xt(q.value);F&&F!==document.scrollingElement&&(j.value=F.scrollTop)}});function k(){e.noClickAnimation||D.value&&ht(D.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:bt})}return ct(()=>{var g;return x(_e,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:s.value,props:U({ref:w},te(a.value),e.activatorProps)}),H.value&&x(Qe,{disabled:!l.value,to:l.value},{default:()=>[y.value&&x("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[O.value,{top:L(j.value)},e.style],ref:q},z,o),[x(Kt,U({color:C,modelValue:s.value&&!!e.scrim},te(I.value)),null),x(ut,{appear:!0,persisted:!0,transition:e.transition,target:p.value,onAfterLeave:()=>{h(),r("afterLeave")}},{default:()=>{var F;return[Je(x("div",U({ref:D,class:["v-overlay__content",e.contentClass],style:[V.value,S.value]},te(_.value),e.contentProps),[(F=n.default)==null?void 0:F.call(n,{isActive:s})]),[[Xe,s.value],[Ze("click-outside"),{handler:m,closeConditional:b,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,animateClick:k,contentEl:D,globalTop:d,localTop:v,updateLocation:E}}}),Xt={class:"text-center"},Zt=Ae("br",null,null,-1),en={data:()=>({overlay:!0}),mounted(){setTimeout(()=>{this.overlay=!1},1500)}},rn=Object.assign(en,{__name:"Home",setup(e){return(t,n)=>(tt(),nt(_e,null,[x(Jt,{"model-value":t.overlay,class:"align-center justify-center preloader"},{default:M(()=>[x(vt,{src:kt,width:"200",class:"logo-loader"}),Ae("div",Xt,[x(dt,{color:"primary",indeterminate:"",size:"64"})])]),_:1},8,["model-value"]),x(wt,null,{default:M(()=>[x(Et,{justify:"center",class:"padding-container"},{default:M(()=>[x(re,{class:"text-center",cols:"12"},{default:M(()=>[Q(" Bienvenido a Tuca restobar,"),Zt,Q(" selecciona una carta: ")]),_:1}),x(re,{class:"text-center",cols:"12"},{default:M(()=>[x(be,{to:"/cocteles",size:"x-large"},{default:M(()=>[Q("COCTELES")]),_:1})]),_:1}),x(re,{class:"text-center",cols:"12"},{default:M(()=>[x(be,{to:"/piqueos",size:"x-large"},{default:M(()=>[Q("PIQUEOS")]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{rn as default};

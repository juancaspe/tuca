import{p as $,i as X,c as u,r as Y,a as D,g as re,s as V,o as Q,b as ue,d as C,f as Ae,e as Pe,h as $e,j as Ce,k as ce,l as L,T as Le,m as de,n as ve,q as ke,t as c,u as fe,v as J,w as me,x as ye,y as Re,z as Ee,A as z,B as ze,C as He,D as Ne,E as Me,F as ge,G as ee,H as te,I as F,J as Oe,K as De}from"./index-d470ae98.js";import{u as qe,m as j,a as ae,b as H,c as Fe,d as Ue,e as je,f as Ke,g as Ge,h as We,i as Ze,V as Je,j as Z,k as Xe}from"./VIcon-06c2ee93.js";const U=Symbol.for("vuetify:layout"),he=Symbol.for("vuetify:layout-item"),se=1e3,Ye=$({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Qe=$({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function et(){const e=X(U);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function tt(e){const i=X(U);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Pe()}`,o=re("useLayoutItem");ue(he,{id:t});const s=V(!1);$e(()=>s.value=!0),Ce(()=>s.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:a}=i.register(o,{...e,active:u(()=>s.value?!1:e.active.value),id:t});return ce(()=>i.unregister(t)),{layoutItemStyles:l,layoutRect:i.layoutRect,layoutItemScrimStyles:a}}const at=(e,i,t,o)=>{let s={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...s}}];for(const a of e){const n=i.get(a),d=t.get(a),g=o.get(a);if(!n||!d||!g)continue;const r={...s,[n.value]:parseInt(s[n.value],10)+(g.value?parseInt(d.value,10):0)};l.push({id:a,layer:r}),s=r}return l};function nt(e){const i=X(U,null),t=u(()=>i?i.rootZIndex.value-100:se),o=Y([]),s=D(new Map),l=D(new Map),a=D(new Map),n=D(new Map),d=D(new Map),{resizeRef:g,contentRect:r}=qe(),x=u(()=>{const m=new Map,w=e.overlaps??[];for(const f of w.filter(b=>b.includes(":"))){const[b,p]=f.split(":");if(!o.value.includes(b)||!o.value.includes(p))continue;const P=s.get(b),E=s.get(p),N=l.get(b),M=l.get(p);!P||!E||!N||!M||(m.set(p,{position:P.value,amount:parseInt(N.value,10)}),m.set(b,{position:E.value,amount:-parseInt(M.value,10)}))}return m}),h=u(()=>{const m=[...new Set([...a.values()].map(f=>f.value))].sort((f,b)=>f-b),w=[];for(const f of m){const b=o.value.filter(p=>{var P;return((P=a.get(p))==null?void 0:P.value)===f});w.push(...b)}return at(w,s,l,n)}),y=u(()=>!Array.from(d.values()).some(m=>m.value)),S=u(()=>h.value[h.value.length-1].layer),A=u(()=>({"--v-layout-left":C(S.value.left),"--v-layout-right":C(S.value.right),"--v-layout-top":C(S.value.top),"--v-layout-bottom":C(S.value.bottom),...y.value?void 0:{transition:"none"}})),I=u(()=>h.value.slice(1).map((m,w)=>{let{id:f}=m;const{layer:b}=h.value[w],p=l.get(f),P=s.get(f);return{id:f,...b,size:Number(p.value),position:P.value}})),k=m=>I.value.find(w=>w.id===m),v=re("createLayout"),B=V(!1);Q(()=>{B.value=!0}),ue(U,{register:(m,w)=>{let{id:f,order:b,position:p,layoutSize:P,elementSize:E,active:N,disableTransitions:M,absolute:Ie}=w;a.set(f,b),s.set(f,p),l.set(f,P),n.set(f,N),M&&d.set(f,M);const ne=Ae(he,v==null?void 0:v.vnode).indexOf(m);ne>-1?o.value.splice(ne,0,f):o.value.push(f);const oe=u(()=>I.value.findIndex(O=>O.id===f)),K=u(()=>t.value+h.value.length*2-oe.value*2),Be=u(()=>{const O=p.value==="left"||p.value==="right",G=p.value==="right",Ve=p.value==="bottom",le={[p.value]:0,zIndex:K.value,transform:`translate${O?"X":"Y"}(${(N.value?0:-110)*(G||Ve?-1:1)}%)`,position:Ie.value||t.value!==se?"absolute":"fixed",...y.value?void 0:{transition:"none"}};if(!B.value)return le;const T=I.value[oe.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${f}"`);const W=x.value.get(f);return W&&(T[W.position]+=W.amount),{...le,height:O?`calc(100% - ${T.top}px - ${T.bottom}px)`:E.value?`${E.value}px`:void 0,left:G?void 0:`${T.left}px`,right:G?`${T.right}px`:void 0,top:p.value!=="bottom"?`${T.top}px`:void 0,bottom:p.value!=="top"?`${T.bottom}px`:void 0,width:O?E.value?`${E.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),Te=u(()=>({zIndex:K.value-1}));return{layoutItemStyles:Be,layoutItemScrimStyles:Te,zIndex:K}},unregister:m=>{a.delete(m),s.delete(m),l.delete(m),n.delete(m),d.delete(m),o.value=o.value.filter(w=>w!==m)},mainRect:S,mainStyles:A,getLayoutItem:k,items:I,layoutRect:r,rootZIndex:t});const R=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),q=u(()=>({zIndex:t.value,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:R,layoutStyles:q,getLayoutItem:k,items:I,layoutRect:r,layoutRef:g}}const ot=$({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function _(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",t=arguments.length>2?arguments[2]:void 0;return L()({name:e,props:ot({mode:t,origin:i}),setup(o,s){let{slots:l}=s;const a={onBeforeEnter(n){n.style.transformOrigin=o.origin},onLeave(n){if(o.leaveAbsolute){const{offsetTop:d,offsetLeft:g,offsetWidth:r,offsetHeight:x}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${g}px`,n.style.width=`${r}px`,n.style.height=`${x}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:g,left:r,width:x,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=g||"",n.style.left=r||"",n.style.width=x||"",n.style.height=h||""}}};return()=>{const n=o.group?Le:de;return ve(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},l.default)}}})}function pe(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,s){let{slots:l}=s;return()=>ve(de,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:i},l.default)}})}function be(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=ke(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const d=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=d})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}_("fab-transition","center center","out-in");_("dialog-bottom-transition");_("dialog-top-transition");_("fade-transition");_("scale-transition");_("scroll-x-transition");_("scroll-x-reverse-transition");_("scroll-y-transition");_("scroll-y-reverse-transition");_("slide-x-transition");_("slide-x-reverse-transition");_("slide-y-transition");_("slide-y-reverse-transition");const lt=pe("expand-transition",be());pe("expand-x-transition",be("",!0));const xe=$({text:String,...j(),...ae()},"v-toolbar-title"),Se=L()({name:"VToolbarTitle",props:xe(),setup(e,i){let{slots:t}=i;return H(()=>{const o=!!(t.default||t.text||e.text);return c(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[o&&c("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),st=[null,"prominent","default","comfortable","compact"],_e=$({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>st.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Fe(),...j(),...Ue(),...je(),...ae({tag:"header"}),...fe()},"v-toolbar"),ie=L()({name:"VToolbar",props:_e(),setup(e,i){var y;let{slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:s}=Ke(J(e,"color")),{borderClasses:l}=Ge(e),{elevationClasses:a}=We(e),{roundedClasses:n}=Ze(e),{themeClasses:d}=me(e),{rtlClasses:g}=ye(),r=V(!!(e.extended||(y=t.extension)!=null&&y.call(t))),x=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=u(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Re({VBtn:{variant:"text"}}),H(()=>{var k;const S=!!(e.title||t.title),A=!!(t.image||e.image),I=(k=t.extension)==null?void 0:k.call(t);return r.value=!!(e.extended||I),c(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,l.value,a.value,n.value,d.value,g.value,e.class],style:[s.value,e.style]},{default:()=>[A&&c("div",{key:"image",class:"v-toolbar__image"},[t.image?c(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):c(Je,{key:"image-img",cover:!0,src:e.image},null)]),c(Z,{defaults:{VTabs:{height:C(x.value)}}},{default:()=>{var v,B,R;return[c("div",{class:"v-toolbar__content",style:{height:C(x.value)}},[t.prepend&&c("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),S&&c(Se,{key:"title",text:e.title},{text:t.title}),(B=t.default)==null?void 0:B.call(t),t.append&&c("div",{class:"v-toolbar__append"},[(R=t.append)==null?void 0:R.call(t)])])]}}),c(Z,{defaults:{VTabs:{height:C(h.value)}}},{default:()=>[c(lt,null,{default:()=>[r.value&&c("div",{class:"v-toolbar__extension",style:{height:C(h.value)}},[I])]})]})]})}),{contentHeight:x,extensionHeight:h}}}),it=$({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function rt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let o=0;const s=Y(null),l=V(0),a=V(0),n=V(0),d=V(!1),g=V(!1),r=u(()=>Number(e.scrollThreshold)),x=u(()=>Ee((r.value-l.value)/r.value||0)),h=()=>{const y=s.value;!y||t&&!t.value||(o=l.value,l.value="window"in y?y.pageYOffset:y.scrollTop,g.value=l.value<o,n.value=Math.abs(l.value-r.value))};return z(g,()=>{a.value=a.value||l.value}),z(d,()=>{a.value=0}),Q(()=>{z(()=>e.scrollTarget,y=>{var A;const S=y?document.querySelector(y):window;if(!S){ze(`Unable to locate element with identifier ${y}`,He());return}S!==s.value&&((A=s.value)==null||A.removeEventListener("scroll",h),s.value=S,s.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),ce(()=>{var y;(y=s.value)==null||y.removeEventListener("scroll",h)}),t&&z(t,h,{immediate:!0}),{scrollThreshold:r,currentScroll:l,currentThreshold:n,isScrollActive:d,scrollRatio:x,isScrollingUp:g,savedScroll:a}}function we(){const e=V(!1);return Q(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ne(e)}}const ut=$({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._e(),...Qe(),...it(),height:{type:[Number,String],default:64}},"v-app-bar"),ct=L()({name:"VAppBar",props:ut(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const o=Y(),s=Me(e,"modelValue"),l=u(()=>{var B;const v=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:v.has("hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),a=u(()=>{const v=l.value;return v.hide||v.inverted||v.collapse||v.elevate||v.fadeImage||!s.value}),{currentScroll:n,scrollThreshold:d,isScrollingUp:g,scrollRatio:r}=rt(e,{canScroll:a}),x=u(()=>e.collapse||l.value.collapse&&(l.value.inverted?r.value>0:r.value===0)),h=u(()=>e.flat||l.value.elevate&&(l.value.inverted?n.value>0:n.value===0)),y=u(()=>l.value.fadeImage?l.value.inverted?1-r.value:r.value:void 0),S=u(()=>{var R,q;if(l.value.hide&&l.value.inverted)return 0;const v=((R=o.value)==null?void 0:R.contentHeight)??0,B=((q=o.value)==null?void 0:q.extensionHeight)??0;return v+B});function A(){l.value.hide?l.value.inverted?s.value=n.value>d.value:s.value=g.value||n.value<d.value:s.value=!0}z(n,A,{immediate:!0}),z(l,A);const{ssrBootStyles:I}=we(),{layoutItemStyles:k}=tt({id:e.name,order:u(()=>parseInt(e.order,10)),position:J(e,"location"),layoutSize:S,elementSize:V(void 0),active:s,absolute:J(e,"absolute")});return H(()=>{const[v]=ie.filterProps(e);return c(ie,ge({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...k.value,"--v-toolbar-image-opacity":y.value,height:void 0,...I.value},e.style]},v,{collapse:x.value,flat:h.value}),t)}),{}}}),dt=L()({name:"VAppBarTitle",props:xe(),setup(e,i){let{slots:t}=i;return H(()=>c(Se,ge(e,{class:"v-app-bar-title"}),t)),{}}}),vt={__name:"AppBar",setup(e){return(i,t)=>(ee(),te(ct,{flat:""},{default:F(()=>[c(dt,null,{default:F(()=>[c(Xe,{icon:"mdi-circle-slice-4"}),Oe(" Base Preset ")]),_:1})]),_:1}))}};const ft=$({scrollable:Boolean,...j(),...ae({tag:"main"})},"v-main"),mt=L()({name:"VMain",props:ft(),setup(e,i){let{slots:t}=i;const{mainStyles:o}=et(),{ssrBootStyles:s}=we();return H(()=>c(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,s.value,e.style]},{default:()=>{var l,a;return[e.scrollable?c("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(a=t.default)==null?void 0:a.call(t)]}})),{}}}),yt={__name:"View",setup(e){return(i,t)=>{const o=De("router-view");return ee(),te(mt,null,{default:F(()=>[c(o)]),_:1})}}};const gt=$({...j(),...Ye({fullHeight:!0}),...fe()},"v-app"),ht=L()({name:"VApp",props:gt(),setup(e,i){let{slots:t}=i;const o=me(e),{layoutClasses:s,layoutStyles:l,getLayoutItem:a,items:n,layoutRef:d}=nt(e),{rtlClasses:g}=ye();return H(()=>{var r;return c("div",{ref:d,class:["v-application",o.themeClasses.value,s.value,g.value,e.class],style:[l.value,e.style]},[c("div",{class:"v-application__wrap"},[(r=t.default)==null?void 0:r.call(t)])])}),{getLayoutItem:a,items:n,theme:o}}}),St={__name:"Default",setup(e){return(i,t)=>(ee(),te(ht,null,{default:F(()=>[c(vt),c(yt)]),_:1}))}};export{St as default};

import{_ as K,a as d,b as i,c as u,d as t}from"./ssrBoot-5c49269a.js";import{V as Y,a as Z,b,c as I,d as w}from"./VWindowItem-e745b3a7.js";import{c as Q,e as X,a as C}from"./VImg-df6e61ed.js";import{n as J,k as a,B as O,T,p as H,C as aa,r as la,I as ea,D as L,c as ta,E as ua,G as na,e as da,h as oa,w as l,F as ia,l as e}from"./index-71827fbb.js";import{m as sa,u as ra,V as B}from"./VOverlay-fd46f5fe.js";import{a as P,d as fa,s as k,b as ca,n as ma}from"./lazy-a1775d10.js";const N="/assets/smoke-jack-bcf5e01a.jpg",j="/assets/tuca-punch-4f2675ea.jpg",D="/assets/diavolo-70adeba4.jpg",U="/assets/tuca-zombie-375b0dbf.jpg",$="/assets/tuca-lentito-febe5fc8.jpg",G="/assets/mama-pacha-5ea1296d.jpg",z="/assets/pisco-sour-9d32b5d0.jpg";const pa=H({target:Object},"v-dialog-transition"),_a=J()({name:"VDialogTransition",props:pa(),setup(o,n){let{slots:f}=n;const _={onBeforeEnter(c){c.style.pointerEvents="none",c.style.visibility="hidden"},async onEnter(c,r){var v;await new Promise(S=>requestAnimationFrame(S)),await new Promise(S=>requestAnimationFrame(S)),c.style.visibility="";const{x:s,y:h,sx:m,sy:p,speed:g}=M(o.target,c),y=P(c,[{transform:`translate(${s}px, ${h}px) scale(${m}, ${p})`,opacity:0},{}],{duration:225*g,easing:fa});(v=F(c))==null||v.forEach(S=>{P(S,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*g,easing:k})}),y.finished.then(()=>r())},onAfterEnter(c){c.style.removeProperty("pointer-events")},onBeforeLeave(c){c.style.pointerEvents="none"},async onLeave(c,r){var v;await new Promise(S=>requestAnimationFrame(S));const{x:s,y:h,sx:m,sy:p,speed:g}=M(o.target,c);P(c,[{},{transform:`translate(${s}px, ${h}px) scale(${m}, ${p})`,opacity:0}],{duration:125*g,easing:ca}).finished.then(()=>r()),(v=F(c))==null||v.forEach(S=>{P(S,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*g,easing:k})})},onAfterLeave(c){c.style.removeProperty("pointer-events")}};return()=>o.target?a(T,O({name:"dialog-transition"},_,{css:!1}),f):a(T,{name:"dialog-transition"},f)}});function F(o){var f;const n=(f=o.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:f.children;return n&&[...n]}function M(o,n){const f=o.getBoundingClientRect(),_=ma(n),[c,r]=getComputedStyle(n).transformOrigin.split(" ").map(W=>parseFloat(W)),[s,h]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let m=f.left+f.width/2;s==="left"||h==="left"?m-=f.width/2:(s==="right"||h==="right")&&(m+=f.width/2);let p=f.top+f.height/2;s==="top"||h==="top"?p-=f.height/2:(s==="bottom"||h==="bottom")&&(p+=f.height/2);const g=f.width/_.width,y=f.height/_.height,v=Math.max(1,g,y),S=g/v||0,A=y/v||0,R=_.width*_.height/(window.innerWidth*window.innerHeight),q=R>.12?Math.min(1.5,(R-.12)*10+1):1;return{x:m-(c+_.left),y:p-(r+_.top),sx:S,sy:A,speed:q}}const V=Symbol("Forwarded refs");function E(o,n){let f=o;for(;f;){const _=Reflect.getOwnPropertyDescriptor(f,n);if(_)return _;f=Object.getPrototypeOf(f)}}function ga(o){for(var n=arguments.length,f=new Array(n>1?n-1:0),_=1;_<n;_++)f[_-1]=arguments[_];return o[V]=f,new Proxy(o,{get(c,r){if(Reflect.has(c,r))return Reflect.get(c,r);if(!(typeof r=="symbol"||r.startsWith("__"))){for(const s of f)if(s.value&&Reflect.has(s.value,r)){const h=Reflect.get(s.value,r);return typeof h=="function"?h.bind(s.value):h}}},has(c,r){if(Reflect.has(c,r))return!0;if(typeof r=="symbol"||r.startsWith("__"))return!1;for(const s of f)if(s.value&&Reflect.has(s.value,r))return!0;return!1},getOwnPropertyDescriptor(c,r){var h;const s=Reflect.getOwnPropertyDescriptor(c,r);if(s)return s;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const m of f){if(!m.value)continue;const p=E(m.value,r)??("_"in m.value?E((h=m.value._)==null?void 0:h.setupState,r):void 0);if(p)return p}for(const m of f){const p=m.value&&m.value[V];if(!p)continue;const g=p.slice();for(;g.length;){const y=g.shift(),v=E(y.value,r);if(v)return v;const S=y.value&&y.value[V];S&&g.push(...S)}}}}})}const Sa=H({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...sa({origin:"center center",scrollStrategy:"block",transition:{component:_a},zIndex:2400})},"v-dialog"),x=J()({name:"VDialog",props:Sa(),emits:{"update:modelValue":o=>!0},setup(o,n){let{slots:f}=n;const _=aa(o,"modelValue"),{scopeId:c}=ra(),r=la();function s(m){var y,v;const p=m.relatedTarget,g=m.target;if(p!==g&&((y=r.value)!=null&&y.contentEl)&&((v=r.value)!=null&&v.globalTop)&&![document,r.value.contentEl].includes(g)&&!r.value.contentEl.contains(g)){const S=na(r.value.contentEl);if(!S.length)return;const A=S[0],R=S[S.length-1];p===A?R.focus():A.focus()}}ea&&L(()=>_.value&&o.retainFocus,m=>{m?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)},{immediate:!0}),L(_,async m=>{var p,g;await ua(),m?(p=r.value.contentEl)==null||p.focus({preventScroll:!0}):(g=r.value.activatorEl)==null||g.focus({preventScroll:!0})});const h=ta(()=>O({"aria-haspopup":"dialog","aria-expanded":String(_.value)},o.activatorProps));return Q(()=>{const[m]=B.filterProps(o);return a(B,O({ref:r,class:["v-dialog",{"v-dialog--fullscreen":o.fullscreen,"v-dialog--scrollable":o.scrollable},o.class],style:o.style},m,{modelValue:_.value,"onUpdate:modelValue":p=>_.value=p,"aria-modal":"true",activatorProps:h.value,role:"dialog"},c),{activator:f.activator,default:function(){for(var p=arguments.length,g=new Array(p),y=0;y<p;y++)g[y]=arguments[y];return a(X,{root:!0},{default:()=>{var v;return[(v=f.default)==null?void 0:v.call(f,...g)]}})}})}),ga({},r)}}),ha={data:()=>({tab:null,dialog:!1,dialog2:!1,dialog3:!1,dialog4:!1,dialog5:!1,dialog6:!1,dialog7:!1}),computed:{},methods:{}};function ya(o,n,f,_,c,r){return da(),oa(ia,null,[a(Y,{class:"tabs-principal",modelValue:o.tab,"onUpdate:modelValue":n[0]||(n[0]=s=>o.tab=s)},{default:l(()=>[a(b,{value:"one",class:"text-primary"},{default:l(()=>[e("Experiencias")]),_:1}),a(b,{value:"creativa",class:"text-primary"},{default:l(()=>[e("Coctelería Creativa")]),_:1}),a(b,{value:"clasica",class:"text-primary"},{default:l(()=>[e("Coctelería Clásica")]),_:1}),a(b,{value:"five",class:"text-primary"},{default:l(()=>[e("Para compartir")]),_:1}),a(b,{value:"shots",class:"text-primary"},{default:l(()=>[e("SHOTS")]),_:1}),a(b,{value:"botellas",class:"text-primary"},{default:l(()=>[e("BOTELLAS")]),_:1}),a(b,{value:"six",class:"text-primary"},{default:l(()=>[e("CERVEZAS")]),_:1}),a(b,{value:"seven",class:"text-primary"},{default:l(()=>[e("SIN ALCOHOL")]),_:1}),a(b,{value:"eight",class:"text-primary"},{default:l(()=>[e("OTROS")]),_:1})]),_:1},8,["modelValue"]),a(Z,{modelValue:o.tab,"onUpdate:modelValue":n[22]||(n[22]=s=>o.tab=s)},{default:l(()=>[a(I,{value:"one"},{default:l(()=>[a(d,{width:"100%",class:"card-coctel"},{default:l(()=>[a(C,{src:N,height:"200px",class:"",onClick:n[1]||(n[1]=s=>o.dialog=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("SMOKE JACK")]),_:1}),a(u,null,{default:l(()=>[e("Jack Daniel’s N°7, Jolly Roger, licor de menta, sirope de flor de jamaica, cranberry juice, limón ")]),_:1}),a(t,null,{default:l(()=>[e("S/28")]),_:1}),a(x,{modelValue:o.dialog,"onUpdate:modelValue":n[3]||(n[3]=s=>o.dialog=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:N,"min-width":"350px",class:"",onClick:n[2]||(n[2]=s=>o.dialog=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{width:"100%",class:"card-coctel"},{default:l(()=>[a(C,{src:j,height:"200px",class:"",onClick:n[4]||(n[4]=s=>o.dialog2=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("TUCA PUNCH"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-star",color:"red"},{default:l(()=>[e("Recomendado")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e(" Jack Daniel’s N°7, fatwash chocolate blanco, licor de cassis, shurb de fresa, limón, piña, sirope de kiwi")]),_:1}),a(t,null,{default:l(()=>[e("S/28")]),_:1}),a(x,{modelValue:o.dialog2,"onUpdate:modelValue":n[6]||(n[6]=s=>o.dialog2=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:j,"min-width":"350px",class:"",onClick:n[5]||(n[5]=s=>o.dialog2=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{width:"100%",class:"card-coctel"},{default:l(()=>[a(C,{src:D,height:"200px",class:"",onClick:n[7]||(n[7]=s=>o.dialog3=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("DIÁVOLO")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa, licor de cassis, vainilla, camu camu juice, maracuyá, sirope de flor de jamaica")]),_:1}),a(t,null,{default:l(()=>[e("S/28")]),_:1}),a(x,{modelValue:o.dialog3,"onUpdate:modelValue":n[9]||(n[9]=s=>o.dialog3=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:D,width:"600",class:"",onClick:n[8]||(n[8]=s=>o.dialog3=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),a(I,{value:"creativa"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(C,{src:U,height:"200px",class:"",onClick:n[10]||(n[10]=s=>o.dialog4=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("TUCA ZOMBIE"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-star",color:"red"},{default:l(()=>[e("Recomendado")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Ron rubio, Pisco Italia Cepa Inka, Caña Altamirano, puré de fresa, maracuyá, limón, piña, cranberry.")]),_:1}),a(t,null,{default:l(()=>[e("S/24")]),_:1}),a(x,{modelValue:o.dialog4,"onUpdate:modelValue":n[12]||(n[12]=s=>o.dialog4=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:U,width:"600",class:"",onClick:n[11]||(n[11]=s=>o.dialog4=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("PASIÓN")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, triple sec, café pasado, puré de fresa, shrubs de fresa, lima, maracuyá")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("AMBROSÍA"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-star",color:"red"},{default:l(()=>[e("Recomendado")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e(" Vodka Absolut, blue curacao, Amaretto, sirope de toffee, piña, limón ")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("BESO FRANCÉS")]),_:1}),a(u,null,{default:l(()=>[e("Vodka GreyGoose, Beefeater Pink Gin, licor de sandía, lima, sirope de granada, leche de coco, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/28")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("BICENTENARIO")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, chicha de jora, sirope simple, vainilla, piña, limón ")]),_:1}),a(t,null,{default:l(()=>[e("S/22")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(C,{src:$,height:"200px",class:"",onClick:n[13]||(n[13]=s=>o.dialog6=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("TUCA-LENTITO"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-fire",color:"red"},{default:l(()=>[e("Caliente")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Té, canela, limón, caña altamirano, pisco, jarabe de goma.")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(x,{modelValue:o.dialog6,"onUpdate:modelValue":n[15]||(n[15]=s=>o.dialog6=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:$,width:"600",class:"",onClick:n[14]||(n[14]=s=>o.dialog6=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("LA FER")]),_:1}),a(u,null,{default:l(()=>[e("Ron Rubio Kingston, Aperol, puré de banana Finest Call, lima, limón, piña")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("BERRY NICE")]),_:1}),a(u,null,{default:l(()=>[e("Gin New Berry, Tanqueray N° Ten, sirope de flor de jamaica, licor de menta, maracuyá, clara de huevo")]),_:1}),a(t,null,{default:l(()=>[e("S/24")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("APU")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, Gin Beefeater, Jolly Roger, sirope de flor de jamaica, piña, maracuyá ")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("TU TEN")]),_:1}),a(u,null,{default:l(()=>[e("Tanqueray N° Ten, licor de banana, shurbs de fresa, solución cítrica, sirope simple, lima, clara de huevo")]),_:1}),a(t,null,{default:l(()=>[e("S/28")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(C,{src:G,height:"200px",class:"",onClick:n[16]||(n[16]=s=>o.dialog7=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("MAMA PACHA"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-star",color:"red"},{default:l(()=>[e("Recomendado")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, chicha de Jora, Vainilla, crema de coco, piña, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1}),a(x,{modelValue:o.dialog7,"onUpdate:modelValue":n[18]||(n[18]=s=>o.dialog7=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:G,width:"600",class:"",onClick:n[17]||(n[17]=s=>o.dialog7=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("MY LADY")]),_:1}),a(u,null,{default:l(()=>[e("Ron Kingston, licor de banana, infusión de menta, infusión de jamaica, crema de coco, clara de huevo, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/24")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("TUCA TAI")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, mix rones, triple sec, horchata de almendras, sirope simple, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("PINK DREAM"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-star",color:"red"},{default:l(()=>[e("Recomendado")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Gin Beefeater Pink, Gin Beefeater, sirope de granada, piña, apple sour")]),_:1}),a(t,null,{default:l(()=>[e("S/25")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("NUBELUX")]),_:1}),a(u,null,{default:l(()=>[e("Vodka Absolut, licor de banana, blue curacao, leche de coco, piña, lima. ")]),_:1}),a(t,null,{default:l(()=>[e("S/28")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("SILVESTRE")]),_:1}),a(u,null,{default:l(()=>[e("Gin Reina Mora, piña, aperol, licor de menta, maracuyá")]),_:1}),a(t,null,{default:l(()=>[e("S/24")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("TUCA SOUR")]),_:1}),a(u,null,{default:l(()=>[e("Pisco macerado en coca, jarabe de especias, limón, clara de huevo")]),_:1}),a(t,null,{default:l(()=>[e("S/22")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("PASIÓN MORENA")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, café pasado, sirope especial, limón, piña, vainilla, clara de huevo")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("TINTO DE VERANO TUCA")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia Cepa Inka, vino Cabernet Sauvignon, naranja, lima, limón, sirope simple")]),_:1}),a(t,null,{default:l(()=>[e("S/24")]),_:1})]),_:1})]),_:1}),a(I,{value:"clasica"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(C,{src:z,height:"200px",class:"",onClick:n[19]||(n[19]=s=>o.dialog5=!0)}),a(i,{class:"text-primary"},{default:l(()=>[e("PISCO SOUR CLÁSICO")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, sirope especiado, limón, clara de huevo")]),_:1}),a(t,null,{default:l(()=>[e("S/18")]),_:1}),a(x,{modelValue:o.dialog5,"onUpdate:modelValue":n[21]||(n[21]=s=>o.dialog5=s),width:"auto"},{default:l(()=>[a(d,null,{default:l(()=>[a(C,{src:z,width:"600",class:"",onClick:n[20]||(n[20]=s=>o.dialog5=!1)})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("PISCO SOUR DE SABORES")]),_:1}),a(t,null,{default:l(()=>[e("(mango, maracuyá, fresa, durazno, aguaymanto)")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, sirope especiado, limón, clara de huevo, puré de frutas")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("CAFÉ MENTADO"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-fire",color:"red"},{default:l(()=>[e(" Caliente")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Café, licor de menta verde, licor de café, jarabe de goma.")]),_:1}),a(t,null,{default:l(()=>[e("S/18")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("CHILCANO CLÁSICO")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, orange bitters, ginger ale, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("CHILCANO DE SABORES")]),_:1}),a(t,null,{default:l(()=>[e("(mango, maracuyá, fresa, durazno, aguaymanto)")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, orange bitters, ginger ale, limón, puré de frutas")]),_:1}),a(t,null,{default:l(()=>[e("S/17")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("PIÑA COLADA")]),_:1}),a(u,null,{default:l(()=>[e("Ron rubio, crema de coco, piña golden.")]),_:1}),a(t,null,{default:l(()=>[e("S/16")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("COCTEL DE ALGARROBINA")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, leche evaporada, algarrobina, esencia de vainilla")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("MOJITO CLÁSICO")]),_:1}),a(u,null,{default:l(()=>[e("Ron rubio, azucar, limón, hierba buena, agua con gas")]),_:1}),a(t,null,{default:l(()=>[e("S/16")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("MOJITO DE SABORES")]),_:1}),a(t,null,{default:l(()=>[e("(mango, maracuyá, fresa, durazno, aguaymanto)")]),_:1}),a(u,null,{default:l(()=>[e("Ron rubio, azucar, limón, hierba buena, agua con gas, puré de frutas")]),_:1}),a(t,null,{default:l(()=>[e("S/18")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("DAIQUIRI CLÁSICO")]),_:1}),a(t),a(u,null,{default:l(()=>[e("Ron rubio, limón, azúcar")]),_:1}),a(t,null,{default:l(()=>[e("S/17")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("DAIQUIRI DE SABORES")]),_:1}),a(t,null,{default:l(()=>[e("(mango, maracuyá, fresa, durazno, aguaymanto)")]),_:1}),a(u,null,{default:l(()=>[e("Ron rubio, limón, azúcar, puré de frutas ")]),_:1}),a(t,null,{default:l(()=>[e("S/19")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("LAGUNA AZUL")]),_:1}),a(u,null,{default:l(()=>[e("Vodka, blue curacao, jarabe de goma, limón, agua con gas")]),_:1}),a(t,null,{default:l(()=>[e("S/18")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("HURRICANNE"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-bomb",color:"red"},{default:l(()=>[e("Fuerte")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Ron rubio, caña, jugo de maracuyá, limón, jarabe de goma")]),_:1}),a(t,null,{default:l(()=>[e("S/26")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("LONG ISLAND ICED TEA"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-bomb",color:"red"},{default:l(()=>[e("Fuerte")]),_:1})]),_:1}),a(u,null,{default:l(()=>[e("Ron, Vodka, Gin, Tequila, Triple sec, Coca cola, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/26")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("GIN TONIC")]),_:1}),a(u,null,{default:l(()=>[e("Gin, agua tónica, botánicos")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("TROPICAL GIN")]),_:1}),a(u,null,{default:l(()=>[e("Gin, naranja, Red Bull tropical, limón")]),_:1}),a(t,null,{default:l(()=>[e("S/25")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("RED TONIC")]),_:1}),a(u,null,{default:l(()=>[e("Gin de frutos rojos, agua tónica, sirope de jamaica, limón.")]),_:1}),a(t,null,{default:l(()=>[e("S/23")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("PISCO TONIC")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, agua tónica, botánicos")]),_:1}),a(t,null,{default:l(()=>[e("S/19")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("CAPITÁN")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka, Vermouth, angostura")]),_:1}),a(t,null,{default:l(()=>[e("S/19")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("ZAMBONI")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Cepa Inka Uvina, Vermouth, Aperol, orange Bitters")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1})]),_:1})]),_:1}),a(I,{value:"shots"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("TEQUILA")]),_:1}),a(u,null,{default:l(()=>[e("Jose Cuervo Especial")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(u,null,{default:l(()=>[e("1800 Reposado")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1}),a(u,null,{default:l(()=>[e("Gran Malo"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-lightning-bolt",color:"red"},{default:l(()=>[e("Exótico")]),_:1})]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1}),a(u,null,{default:l(()=>[e("Amarás (mezcal)"),a(w,{class:"ma-2",size:"x-small","prepend-icon":"mdi-lightning-bolt",color:"red"},{default:l(()=>[e("Exótico")]),_:1})]),_:1}),a(t,null,{default:l(()=>[e("S/30")]),_:1}),a(i,{class:"text-primary"},{default:l(()=>[e("PISCO")]),_:1}),a(u,null,{default:l(()=>[e("Cepa Inka")]),_:1}),a(t,null,{default:l(()=>[e("S/10")]),_:1}),a(u,null,{default:l(()=>[e("Sarcay")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(u,null,{default:l(()=>[e("Portón")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1}),a(u,null,{default:l(()=>[e("Gran Demonio")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1}),a(i,{class:"text-primary"},{default:l(()=>[e("WHISKY")]),_:1}),a(u,null,{default:l(()=>[e("Red Label (Puro o en las rocas)")]),_:1}),a(t,null,{default:l(()=>[e("S/20")]),_:1}),a(u,null,{default:l(()=>[e("Black Label (Puro o en las rocas) ")]),_:1}),a(t,null,{default:l(()=>[e("S/25")]),_:1}),a(u,null,{default:l(()=>[e("Gold Label (Puro o en las rocas)")]),_:1}),a(t,null,{default:l(()=>[e("S/35")]),_:1}),a(u,null,{default:l(()=>[e("Gold Label (18años) (Puro o en las rocas)")]),_:1}),a(t,null,{default:l(()=>[e("S/40")]),_:1}),a(u,null,{default:l(()=>[e("Green Label (Puro o en las rocas)")]),_:1}),a(t,null,{default:l(()=>[e("S/40")]),_:1}),a(u,null,{default:l(()=>[e("Blue Label (Puro o en las rocas)")]),_:1}),a(t,null,{default:l(()=>[e("S/50")]),_:1})]),_:1})]),_:1}),a(I,{value:"five"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Sopa Tuca (Blue)")]),_:1}),a(u,null,{default:l(()=>[e("Vodka, jugo de piña, blue curacao, jarabe de goma, limón.")]),_:1}),a(t,null,{default:l(()=>[e("S/74")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Sopa Tuca (Red)")]),_:1}),a(u,null,{default:l(()=>[e("Ron blanco, maracuyá, jugo de naranja, jarabe de granadina, jugo de piña, limón.")]),_:1}),a(t,null,{default:l(()=>[e("S/74")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Sopa Tuca (Punch)")]),_:1}),a(u,null,{default:l(()=>[e("Pisco Italia, licor de fresa, Jagermeister, jugo de piña, jarabe de goma, limon.")]),_:1}),a(t,null,{default:l(()=>[e("S/74")]),_:1})]),_:1})]),_:1}),a(I,{value:"botellas"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Pisco Italia Cepa Inka")]),_:1}),a(u,null,{default:l(()=>[e("Insumos: ginger ale, limón y hielo")]),_:1}),a(t,null,{default:l(()=>[e("S/120")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Tequila José Cuervo")]),_:1}),a(u,null,{default:l(()=>[e("Insumos: sal y limón")]),_:1}),a(t,null,{default:l(()=>[e("S/140")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Ron Flor de Caña 4 años")]),_:1}),a(u,null,{default:l(()=>[e("Insumos: Coca cola, limón y hielo")]),_:1}),a(t,null,{default:l(()=>[e("S/140")]),_:1})]),_:1}),a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("Whisky JW Black Label")]),_:1}),a(u,null,{default:l(()=>[e("Insumos: ginger ale y hielo")]),_:1}),a(t,null,{default:l(()=>[e("S/200")]),_:1})]),_:1})]),_:1}),a(I,{value:"six"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("ARTESANALES")]),_:1}),a(u,null,{default:l(()=>[e("Bardock Red Ale (Cusco)")]),_:1}),a(t,null,{default:l(()=>[e("S/19")]),_:1}),a(u,null,{default:l(()=>[e("Bardock IPA (Cusco)")]),_:1}),a(t,null,{default:l(()=>[e("S/18")]),_:1}),a(u,null,{default:l(()=>[e("Bardock Pale Ale (Cusco)")]),_:1}),a(t,null,{default:l(()=>[e("S/18")]),_:1}),a(u,null,{default:l(()=>[e("Bardock Belgian Golden Strong Ale (Cusco)")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(u,null,{default:l(()=>[e("Barbarian Red Ale")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(u,null,{default:l(()=>[e("Barbarian Lima Ape Ale")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(u,null,{default:l(()=>[e("Barbarian La Nena")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(u,null,{default:l(()=>[e("Candelaria La Moche Loche")]),_:1}),a(t,null,{default:l(()=>[e("S/15")]),_:1}),a(i,{class:"text-primary"},{default:l(()=>[e("CLÁSICAS")]),_:1}),a(u,null,{default:l(()=>[e("Corona")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Corona Bucket (6un)")]),_:1}),a(t,null,{default:l(()=>[e("S/60")]),_:1}),a(u,null,{default:l(()=>[e("Heineken")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Stella Artois")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Cusqueña (Dorada, Roja, Trigo, Negra)")]),_:1}),a(t,null,{default:l(()=>[e("S/11")]),_:1}),a(u,null,{default:l(()=>[e("Pilsen")]),_:1}),a(t,null,{default:l(()=>[e("S/10")]),_:1}),a(u,null,{default:l(()=>[e("Pilsen Promo (3un)")]),_:1}),a(t,null,{default:l(()=>[e("S/25")]),_:1})]),_:1})]),_:1}),a(I,{value:"seven"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(i,{class:"text-primary"},{default:l(()=>[e("COCTELES SIN ALCOHOL")]),_:1}),a(u,null,{default:l(()=>[e("Piña colada Virgen")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Shirley Temple")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Limonada frozen")]),_:1}),a(t,null,{default:l(()=>[e("S/10")]),_:1})]),_:1})]),_:1}),a(I,{value:"eight"},{default:l(()=>[a(d,{width:"100%"},{default:l(()=>[a(u,null,{default:l(()=>[e("Evervess 1.5L")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Red Bull (Clásico, Tropical)")]),_:1}),a(t,null,{default:l(()=>[e("S/12")]),_:1}),a(u,null,{default:l(()=>[e("Coca Cola")]),_:1}),a(t,null,{default:l(()=>[e("S/8")]),_:1}),a(u,null,{default:l(()=>[e("Agua")]),_:1}),a(t,null,{default:l(()=>[e("S/4")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Aa=K(ha,[["render",ya]]);export{Aa as default};

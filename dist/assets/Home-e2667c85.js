import{m as _,e as h,a as U,J as K,V as M,H as d,k as g}from"./VBtn-8fbbf02f.js";import{p as v,g as b,v as F,m as l,P as f,c as C,b as p,h as x,G as L,O as P,J as o,K as m,Q as V}from"./index-c4ec8002.js";const H="/assets/logo-3f834fa8.svg";const J=v({fluid:{type:Boolean,default:!1},..._(),...h()},"v-container"),W=b()({name:"VContainer",props:J(),setup(e,n){let{slots:t}=n;const{rtlClasses:s}=F();return U(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),$=(()=>f.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),E=(()=>f.reduce((e,n)=>{const t="offset"+C(n);return e[t]={type:[String,Number],default:null},e},{}))(),A=(()=>f.reduce((e,n)=>{const t="order"+C(n);return e[t]={type:[String,Number],default:null},e},{}))(),w={col:Object.keys($),offset:Object.keys(E),order:Object.keys(A)};function Q(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const Y=["auto","start","end","center","baseline","stretch"],q=v({cols:{type:[Boolean,String,Number],default:!1},...$,offset:{type:[String,Number],default:null},...E,order:{type:[String,Number],default:null},...A,alignSelf:{type:String,default:null,validator:e=>Y.includes(e)},..._(),...h()},"v-col"),y=b()({name:"VCol",props:q(),setup(e,n){let{slots:t}=n;const s=p(()=>{const a=[];let r;for(r in w)w[r].forEach(i=>{const u=e[i],j=Q(r,i,u);j&&a.push(j)});const c=a.some(i=>i.startsWith("v-col-"));return a.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return x(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),k=["start","end","center"],B=["space-between","space-around","space-evenly"];function S(e,n){return f.reduce((t,s)=>{const a=e+C(s);return t[a]=n(),t},{})}const D=[...k,"baseline","stretch"],G=e=>D.includes(e),O=S("align",()=>({type:String,default:null,validator:G})),X=[...k,...B],I=e=>X.includes(e),R=S("justify",()=>({type:String,default:null,validator:I})),Z=[...k,...B,"stretch"],T=e=>Z.includes(e),z=S("alignContent",()=>({type:String,default:null,validator:T})),N={align:Object.keys(O),justify:Object.keys(R),alignContent:Object.keys(z)},ee={align:"align",justify:"justify",alignContent:"align-content"};function te(e,n,t){let s=ee[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const ne=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G},...O,justify:{type:String,default:null,validator:I},...R,alignContent:{type:String,default:null,validator:T},...z,..._(),...h()},"v-row"),ae=b()({name:"VRow",props:ne(),setup(e,n){let{slots:t}=n;const s=p(()=>{const a=[];let r;for(r in N)N[r].forEach(c=>{const i=e[c],u=te(r,c,i);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return x(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),se=V("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),le=V("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1),oe=V("div",{class:"py-14"},null,-1),re={__name:"HelloWorld",setup(e){return(n,t)=>(L(),P(W,{class:"fill-height"},{default:o(()=>[l(K,{class:"d-flex align-center text-center fill-height"},{default:o(()=>[l(M,{height:"300",src:H}),se,le,oe,l(ae,{class:"d-flex align-center justify-center"},{default:o(()=>[l(y,{cols:"auto"},{default:o(()=>[l(d,{href:"https://vuetifyjs.com/components/all/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(g,{icon:"mdi-view-dashboard",size:"large",start:""}),m(" Components ")]),_:1})]),_:1}),l(y,{cols:"auto"},{default:o(()=>[l(d,{color:"primary",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","min-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat"},{default:o(()=>[l(g,{icon:"mdi-speedometer",size:"large",start:""}),m(" Get Started ")]),_:1})]),_:1}),l(y,{cols:"auto"},{default:o(()=>[l(d,{href:"https://community.vuetifyjs.com/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:o(()=>[l(g,{icon:"mdi-account-group",size:"large",start:""}),m(" Community ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ue={__name:"Home",setup(e){return(n,t)=>(L(),P(re))}};export{ue as default};

import{d as n,m as d,o as l,a as C,r as v,n as z,u as s,b as w,e as m,w as u,f as h,g as p,h as i}from"./vue.esm-bundler-b2c2942f.js";const o={small:"16px",medium:"24px",large:"32px",xlarge:"48px"},b={small:{width:o.small,height:o.small},medium:{width:o.medium,height:o.medium},large:{width:o.large,height:o.large},xlarge:{width:o.xlarge,height:o.xlarge}};function x(e){return typeof e=="number"}function I(e){return f(e)?!Number.isNaN(Number(e)):!1}function f(e){return typeof e=="string"}function c(e,r="px"){return e?x(e)||I(e)?`${e}${r}`:f(e)?e:"":""}function _(e){return{sizeVars:B(e)}}function B(e){return w(()=>{const r=T(e);return r?{"--t-comp-icon-size-width":c(r.width),"--t-comp-icon-size-height":c(r.height)}:{}})}function T({width:e,height:r,size:t}){if(e&&r)return{width:e,height:r};if(t)return b[t]}function g(){return e=>e}const N=g()({primaryColor:"currentColor",secondaryColor:"var(--t-sys-elevation-surface)"}),k=["role","aria-label","aria-hidden","data-testid"],y=n({name:"TIcon",__name:"TIcon",props:d({width:{},height:{},label:{},testId:{},size:{},primaryColor:{},secondaryColor:{}},N),setup(e){const r=e,{sizeVars:t}=_(r);return(a,H)=>(l(),C("span",{class:"t-icon",role:a.label?"img":void 0,"aria-label":a.label,"aria-hidden":a.label?void 0:!0,"data-testid":a.testId,style:z({...s(t),"--t-comp-icon-primary-color":a.primaryColor,"--t-comp-icon-secondary-color":a.secondaryColor})},[v(a.$slots,"default")],12,k))}}),L=g()({size:"medium",primaryColor:"currentColor",secondaryColor:"var(--t-sys-elevation-surface)"});d({label:{},testId:{},size:{},primaryColor:{},secondaryColor:{}},L);const V=i("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[i("path",{fill:"currentColor","fill-rule":"evenodd",d:"M4 12v7a.971.971 0 0 0 .278.704.99.99 0 0 0 .701.296H6v-9H4.98a.99.99 0 0 0-.701.296A.971.971 0 0 0 4 12zm15.281-.96a3.046 3.046 0 0 0-2.321-1.061h-2.634c.04-.181.08-.36.11-.532.515-2.934 0-4-.504-4.594A2.432 2.432 0 0 0 12.075 4a3.078 3.078 0 0 0-2.968 2.751c-.393 1.839-.454 2-.968 2.725l-.768 1.089a2.011 2.011 0 0 0-.363 1.141v6.273c.001.532.216 1.041.596 1.416s.896.585 1.433.584h7.247a3.014 3.014 0 0 0 2.997-2.507l.677-4a2.963 2.963 0 0 0-.677-2.432zm-1.998 6.1a1.007 1.007 0 0 1-1 .835H9.038v-6.269l.767-1.089a7.577 7.577 0 0 0 1.302-3.509c.036-.543.255-1.209.969-1.108.714.1.575 1.916.363 3.1a19.712 19.712 0 0 1-.868 2.882l5.39-.008c.297-.001.58.128.773.352a.993.993 0 0 1 .226.813l-.676 4.001z"})],-1),A=n({name:"TIconLike",__name:"TIconLike",props:{label:{},testId:{},size:{},primaryColor:{},secondaryColor:{}},setup(e){const r=e;return(t,a)=>(l(),m(s(y),h(p(r)),{default:u(()=>[V]),_:1},16))}}),$=i("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[i("g",{"fill-rule":"evenodd"},[i("path",{fill:"currentColor",d:"M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z"}),i("path",{fill:"inherit",d:"M12 15a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2"})])],-1),E=n({name:"TIconWarning",__name:"TIconWarning",props:{label:{},testId:{},size:{},primaryColor:{},secondaryColor:{}},setup(e){const r=e;return(t,a)=>(l(),m(s(y),h(p(r)),{default:u(()=>[$]),_:1},16))}});export{y as B,A as _,E as a};
//# sourceMappingURL=TIconWarning-0c772438.js.map

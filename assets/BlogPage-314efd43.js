import{u as r,c as m,f as u,o as s,a,b as t,F as d,d as g,t as c,e as p,w as h,g as b,h as x}from"./index-5132261c.js";const B={class:"main"},f={class:"blog"},k={class:"container"},v=t("h1",{class:"blog_title"},"Blog",-1),N={class:"blog_items"},P=["src"],S={class:"blog_item-title"},V={class:"blog_item-txt"},q={__name:"Blog",setup(n){const o=r();o.getProducts();const i=m(()=>o.products);return(w,y)=>{const l=u("router-link");return s(),a("main",B,[t("section",f,[t("div",k,[v,t("div",N,[(s(!0),a(d,null,g(i.value,(e,_)=>(s(),a("div",{class:"blog_item",key:_},[t("img",{src:e.thumbnail,alt:"",class:"blog_item-img"},null,8,P),t("h3",S,c(e.title),1),t("p",V,c(e.description)+" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi labore aut est hic nisi minus sunt aliquam, veniam in. ",1),p(l,{to:/shop/+e.id,class:"blog_item-btn"},{default:h(()=>[b("Read More")]),_:2},1032,["to"])]))),128))])])])])}}},F={__name:"BlogPage",setup(n){return(o,i)=>(s(),x(q))}};export{F as default};

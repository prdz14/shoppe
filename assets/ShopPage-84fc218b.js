import{u,c as d,r as g,o as e,a as o,b as s,F as _,d as l,t as a,e as k}from"./index-5132261c.js";const f={class:"shop"},v={class:"container"},y=s("h1",{class:"shop_title"},"Shop The Latest",-1),S={class:"shop_filters"},b={class:"shop_grid"},P=["src"],$={class:"shop_item-title"},B={class:"shop_item-price"},N={__name:"Shop",setup(p){const c=u();c.getProducts();const i=d(()=>c.products),h=g([{name:"Name A-Z",type:"title"},{name:"Stock",type:"stock"},{name:"Price(low-high)",type:"price"}]);return(m,r)=>(e(),o("section",f,[s("div",v,[y,s("div",S,[(e(!0),o(_,null,l(h.value,(t,n)=>(e(),o("button",{class:"shop_filters-btn",key:n,onClick:r[0]||(r[0]=F=>m.sort())},a(t.name),1))),128))]),s("div",b,[(e(!0),o(_,null,l(i.value,(t,n)=>(e(),o("div",{class:"shop_item",key:n},[s("img",{src:t.thumbnail,alt:"",class:"shop_item-img"},null,8,P),s("h3",$,a(t.title),1),s("span",B,"$ "+a(t.price)+", stock: "+a(t.stock),1)]))),128))])])]))}},x={class:"main"},V={__name:"ShopPage",setup(p){return(c,i)=>(e(),o("main",x,[k(N)]))}};export{V as default};

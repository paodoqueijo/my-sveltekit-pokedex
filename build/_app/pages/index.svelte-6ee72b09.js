import{S as e,i as t,s,e as a,k as r,t as n,c as o,a as l,n as c,g as i,d as h,b as m,f as u,D as f,h as p,H as d,I as g,J as $,C as x,K as v,L as k,E as w,M as y,N as E,j as I,m as P,o as S,v as b,r as C,w as j,O as K,u as N,P as A,B as D}from"../chunks/vendor-0615e011.js";const G=([e,...t])=>`${e.toUpperCase()}${t.join("")}`;function O(e){let t,s,x,v,k,w,y,E,I,P,S,b,C,j,K=e[0].id+"",N=G(e[0].name)+"";return{c(){t=a("a"),s=a("figure"),x=a("img"),y=r(),E=a("figcaption"),I=n(K),P=n(". "),S=n(N),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var a=l(t);s=o(a,"FIGURE",{});var r=l(s);x=o(r,"IMG",{class:!0,src:!0,alt:!0}),y=c(r),E=o(r,"FIGCAPTION",{class:!0});var n=l(E);I=i(n,K),P=i(n,". "),S=i(n,N),n.forEach(h),r.forEach(h),a.forEach(h),this.h()},h(){m(x,"class","h-40 w-40 "),x.src!==(v=e[0].image)&&m(x,"src",v),m(x,"alt",k=e[0].name),m(E,"class","text-2xl"),m(t,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md  shadow-sm hover:shadow-md flex flex-col items-center"),m(t,"href",b=`/pokemon/${e[0].id}`)},m(e,a){u(e,t,a),f(t,s),f(s,x),f(s,y),f(s,E),f(E,I),f(E,P),f(E,S),j=!0},p(e,[s]){(!j||1&s&&x.src!==(v=e[0].image))&&m(x,"src",v),(!j||1&s&&k!==(k=e[0].name))&&m(x,"alt",k),(!j||1&s)&&K!==(K=e[0].id+"")&&p(I,K),(!j||1&s)&&N!==(N=G(e[0].name)+"")&&p(S,N),(!j||1&s&&b!==(b=`/pokemon/${e[0].id}`))&&m(t,"href",b)},i(e){j||(d((()=>{w||(w=g(x,$,{},!0)),w.run(1)})),d((()=>{C||(C=g(t,$,{},!0)),C.run(1)})),j=!0)},o(e){w||(w=g(x,$,{},!1)),w.run(0),C||(C=g(t,$,{},!1)),C.run(0),j=!1},d(e){e&&h(t),e&&w&&w.end(),e&&C&&C.end()}}}function T(e,t,s){let{poke:a}=t;return e.$$set=e=>{"poke"in e&&s(0,a=e.poke)},[a]}class U extends e{constructor(e){super(),t(this,e,T,O,s,{poke:0})}}const B=x([]),F=x([]);function H(e){let t,s,r;return{c(){t=a("input"),this.h()},l(e){t=o(e,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){m(t,"class","w-full rounded-md text-lg p-4 my-6 border-2 border-gray-200"),m(t,"type","text"),m(t,"placeholder","Search")},m(a,n){u(a,t,n),v(t,e[0]),s||(r=k(t,"input",e[2]),s=!0)},p(e,[s]){1&s&&t.value!==e[0]&&v(t,e[0])},i:w,o:w,d(e){e&&h(t),s=!1,r()}}}function L(e,t,s){let a;y(e,F,(e=>s(1,a=e)));let r="";return e.$$.update=()=>{3&e.$$.dirty&&(r?B.set(a.filter((e=>e.name.includes(r.toLowerCase())))):B.set([...a]))},[r,a,function(){r=this.value,s(0,r)}]}(async()=>{const e=await fetch("https://pokeapi.co/api/v2/pokemon?limit=150"),t=(await e.json()).results.map(((e,t)=>({name:e.name,id:t+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t+1}.png`})));F.set(t)})();class M extends e{constructor(e){super(),t(this,e,L,H,s,{})}}function W(e,t,s){const a=e.slice();return a[1]=t[s],a}function J(e){let t,s;return t=new U({props:{poke:e[1]}}),{c(){I(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,a){S(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.poke=e[1]),t.$set(a)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){C(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function R(e){let t,s,p,d,g,$,x,v;g=new M({});let k=e[0],w=[];for(let a=0;a<k.length;a+=1)w[a]=J(W(e,k,a));const y=e=>C(w[e],1,1,(()=>{w[e]=null}));return{c(){t=r(),s=a("h1"),p=n("Welcome to SvelteKit PokéDex"),d=r(),I(g.$$.fragment),$=r(),x=a("section");for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){K('[data-svelte="svelte-6dmvil"]',document.head).forEach(h),t=c(e),s=o(e,"H1",{class:!0});var a=l(s);p=i(a,"Welcome to SvelteKit PokéDex"),a.forEach(h),d=c(e),P(g.$$.fragment,e),$=c(e),x=o(e,"SECTION",{class:!0});var r=l(x);for(let t=0;t<w.length;t+=1)w[t].l(r);r.forEach(h),this.h()},h(){document.title="SvelteKit Poxedex",m(s,"class","text-4xl text-center my-8 uppercase"),m(x,"class","grid gap-4 md:grid-cols-2 grid-cols-1")},m(e,a){u(e,t,a),u(e,s,a),f(s,p),u(e,d,a),S(g,e,a),u(e,$,a),u(e,x,a);for(let t=0;t<w.length;t+=1)w[t].m(x,null);v=!0},p(e,[t]){if(1&t){let s;for(k=e[0],s=0;s<k.length;s+=1){const a=W(e,k,s);w[s]?(w[s].p(a,t),b(w[s],1)):(w[s]=J(a),w[s].c(),b(w[s],1),w[s].m(x,null))}for(D(),s=k.length;s<w.length;s+=1)y(s);N()}},i(e){if(!v){b(g.$$.fragment,e);for(let e=0;e<k.length;e+=1)b(w[e]);v=!0}},o(e){C(g.$$.fragment,e),w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)C(w[t]);v=!1},d(e){e&&h(t),e&&h(s),e&&h(d),j(g,e),e&&h($),e&&h(x),A(w,e)}}}function q(e,t,s){let a;return y(e,B,(e=>s(0,a=e))),[a]}export default class extends e{constructor(e){super(),t(this,e,q,R,E,{})}}
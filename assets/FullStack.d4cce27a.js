import{S as I,i as L,s as M,e as z,t as q,a as C,b as g,d as r,I as k,E as U,f as E,g as u,U as V,v as W,G as b,l as G,o as j}from"./index.70e5f663.js";function w(s,e,a){const n=s.slice();return n[11]=e[a],n[13]=a,n}function S(s){let e,a,n;return{c(){e=z("div"),a=q(s[13]),n=C(),g(e,"class","card svelte-rlzkso"),r(e,"--position",s[13]),r(e,"--left-value",s[4](s[13])),r(e,"--shadow",s[5]),k(e,"colapsed",s[3])},m(i,d){E(i,e,d),u(e,a),u(e,n)},p(i,d){d&8&&k(e,"colapsed",i[3])},d(i){i&&G(e)}}}function A(s){let e,a,n,i,d,_,h,v,m,f={length:s[1]},c=[];for(let t=0;t<f.length;t+=1)c[t]=S(w(s,f,t));return{c(){e=z("div"),a=z("div"),n=z("div"),i=z("div"),d=q("cover"),_=C();for(let t=0;t<c.length;t+=1)c[t].c();g(i,"class","cover svelte-rlzkso"),r(i,"--position",s[1]),r(i,"--left-value",s[4](s[1]-1)+s[2]),k(i,"colapsed",s[3]),g(n,"class","list svelte-rlzkso"),r(n,"--card-size",s[2]+"px"),g(a,"class","crop svelte-rlzkso"),U(()=>s[8].call(a)),g(e,"class","wrapper"),r(e,"width",s[0]+F+"px")},m(t,o){E(t,e,o),u(e,a),u(a,n),u(n,i),u(i,d),u(n,_);for(let l=0;l<c.length;l+=1)c[l].m(n,null);h=V(a,s[8].bind(a)),v||(m=W(i,"click",s[7]),v=!0)},p(t,[o]){if(o&2&&r(i,"--position",t[1]),o&6&&r(i,"--left-value",t[4](t[1]-1)+t[2]),o&8&&k(i,"colapsed",t[3]),o&58){f={length:t[1]};let l;for(l=0;l<f.length;l+=1){const p=w(t,f,l);c[l]?c[l].p(p,o):(c[l]=S(p),c[l].c(),c[l].m(n,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=f.length}o&4&&r(n,"--card-size",t[2]+"px"),o&1&&r(e,"width",t[0]+F+"px")},i:b,o:b,d(t){t&&G(e),j(c,t),h(),v=!1,m()}}}let F=20;function B(s,e,a){let{n_cards:n=7}=e,{card_size:i=150}=e,{intersection:d=.7}=e,{max_size:_=400}=e,h=!0,v=i*(1-d),m=(n-1)*v;m=Math.max(1,m/(_-2*i));function f(l){return l*v/m}let c=i;const t=()=>a(3,h=!h);function o(){_=this.clientWidth,a(0,_)}return s.$$set=l=>{"n_cards"in l&&a(1,n=l.n_cards),"card_size"in l&&a(2,i=l.card_size),"intersection"in l&&a(6,d=l.intersection),"max_size"in l&&a(0,_=l.max_size)},[_,n,i,h,f,c,d,t,o]}class H extends I{constructor(e){super(),L(this,e,B,A,M,{n_cards:1,card_size:2,intersection:6,max_size:0})}}export{H as default};

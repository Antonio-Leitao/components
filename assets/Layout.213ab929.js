import{S as y,i as v,s as $,E as H,z as C,e as p,b,I as h,f as _,v as L,B as E,C as O,D as S,j as z,k as T,l as d,c as j,a as q,u as B,m as D,n as G,o as I,G as k,t as g,g as w}from"./index.0c0366de.js";function X(o){let e=!1,s=()=>{e=!1},a,r,i,c,t;H(o[8]);const u=o[7].default,l=C(u,o,o[6],null);return{c(){r=p("div"),l&&l.c(),b(r,"class","slotHeader svelte-o2f2pn"),h(r,"hide",o[1]>o[0]&&o[2])},m(n,f){_(n,r,f),l&&l.m(r,null),i=!0,c||(t=L(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(s,100),o[8]()}),c=!0)},p(n,[f]){f&2&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,n[1]),a=setTimeout(s,100)),l&&l.p&&(!i||f&64)&&E(l,u,n,n[6],i?S(u,n[6],f,null):O(n[6]),null),(!i||f&7)&&h(r,"hide",n[1]>n[0]&&n[2])},i(n){i||(z(l,n),i=!0)},o(n){T(l,n),i=!1},d(n){n&&d(r),l&&l.d(n),c=!1,t()}}}function Y(o,e,s){let{$$slots:a={},$$scope:r}=e;const i=15;let{header_size:c=60}=e,t,u,l,n=!0;function f(){s(1,u=window.pageYOffset)}return o.$$set=m=>{"header_size"in m&&s(0,c=m.header_size),"$$scope"in m&&s(6,r=m.$$scope)},o.$$.update=()=>{o.$$.dirty&50&&(s(5,l=u-t),l>i?s(2,n=!0):l<-i&&s(2,n=!1),s(4,t=u))},[c,u,n,i,t,l,r,a,f]}class A extends y{constructor(e){super(),v(this,e,Y,X,$,{threshold:3,header_size:0})}get threshold(){return this.$$.ctx[3]}}function F(o,e,s){const a=o.slice();return a[0]=e[s],a[2]=s,a}function J(o){let e;return{c(){e=p("div"),e.textContent="Example Header",b(e,"class","header svelte-mx19hu")},m(s,a){_(s,e,a)},p:k,d(s){s&&d(e)}}}function K(o){let e,s,a;return{c(){e=p("p"),s=g("Line "),a=g(o[2])},m(r,i){_(r,e,i),w(e,s),w(e,a)},p:k,d(r){r&&d(e)}}}function M(o){let e,s,a,r;e=new A({props:{$$slots:{default:[J]},$$scope:{ctx:o}}});let i={length:100},c=[];for(let t=0;t<i.length;t+=1)c[t]=K(F(o,i,t));return{c(){j(e.$$.fragment),s=q();for(let t=0;t<c.length;t+=1)c[t].c();a=B()},m(t,u){D(e,t,u),_(t,s,u);for(let l=0;l<c.length;l+=1)c[l].m(t,u);_(t,a,u),r=!0},p(t,[u]){const l={};u&8&&(l.$$scope={dirty:u,ctx:t}),e.$set(l)},i(t){r||(z(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){G(e,t),t&&d(s),I(c,t),t&&d(a)}}}class P extends y{constructor(e){super(),v(this,e,null,M,$,{})}}export{P as default};

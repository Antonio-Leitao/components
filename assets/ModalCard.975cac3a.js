import{S as F,i as G,s as H,u as I,f as v,j as D,w as J,k as L,x as K,l as k,z as Q,e as b,a as y,b as g,g as w,v as A,B as R,C as V,D as W,E as S,M as j,N as X,c as Y,m as Z,n as $,p as ee,t as T,h as x,o as te}from"./index.0c0366de.js";import{c as le,s as se,a as B}from"./index.030f4f20.js";function O(n){let e,l,t,s,a,_,r,f,d,C;const M=n[3].default,o=Q(M,n,n[2],null);return{c(){e=b("div"),l=b("div"),t=b("button"),t.textContent="\u274C",s=y(),o&&o.c(),g(t,"class","x svelte-1brks7q"),g(l,"class","modal svelte-1brks7q"),g(e,"class","backdrop svelte-1brks7q")},m(m,z){v(m,e,z),w(e,l),w(l,t),w(l,s),o&&o.m(l,null),f=!0,d||(C=A(t,"click",n[4]),d=!0)},p(m,z){n=m,o&&o.p&&(!f||z&4)&&R(o,M,n,n[2],f?W(M,n[2],z,null):V(n[2]),null)},i(m){f||(D(o,m),a||S(()=>{a=j(l,se,{start:.5,duration:200,easing:le}),a.start()}),S(()=>{r&&r.end(1),_=j(e,B,{duration:100}),_.start()}),f=!0)},o(m){L(o,m),_&&_.invalidate(),r=X(e,B,{duration:100}),f=!1},d(m){m&&k(e),o&&o.d(m),m&&r&&r.end(),d=!1,C()}}}function ie(n){let e,l,t=n[0]&&O(n);return{c(){t&&t.c(),e=I()},m(s,a){t&&t.m(s,a),v(s,e,a),l=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&D(t,1)):(t=O(s),t.c(),D(t,1),t.m(e.parentNode,e)):t&&(J(),L(t,1,1,()=>{t=null}),K())},i(s){l||(D(t),l=!0)},o(s){L(t),l=!1},d(s){t&&t.d(s),s&&k(e)}}}function ne(n,e,l){let{$$slots:t={},$$scope:s}=e,{shown:a=!1}=e;function _(){l(0,a=!a)}const r=()=>_();return n.$$set=f=>{"shown"in f&&l(0,a=f.shown),"$$scope"in f&&l(2,s=f.$$scope)},[a,_,s,t,r]}class ae extends F{constructor(e){super(),G(this,e,ne,ie,H,{shown:0,toggle:1})}get toggle(){return this.$$.ctx[1]}}function P(n,e,l){const t=n.slice();return t[9]=e[l],t}function oe(n){let e,l=n[0].slice(0,65)+"...",t;return{c(){e=b("div"),t=T(l),g(e,"class","card-title svelte-kxzfpc")},m(s,a){v(s,e,a),w(e,t)},p(s,a){a&1&&l!==(l=s[0].slice(0,65)+"...")&&x(t,l)},d(s){s&&k(e)}}}function ce(n){let e,l;return{c(){e=b("div"),l=T(n[0]),g(e,"class","card-title svelte-kxzfpc")},m(t,s){v(t,e,s),w(e,l)},p(t,s){s&1&&x(l,t[0])},d(t){t&&k(e)}}}function U(n){let e,l=n[9]+"",t;return{c(){e=b("div"),t=T(l),g(e,"class","tag solo svelte-kxzfpc")},m(s,a){v(s,e,a),w(e,t)},p(s,a){a&8&&l!==(l=s[9]+"")&&x(t,l)},d(s){s&&k(e)}}}function fe(n){let e,l,t,s,a,_,r,f,d,C,M,o,m,z,q,E,c=n[3],u=[];for(let i=0;i<c.length;i+=1)u[i]=U(P(n,c,i));return{c(){e=b("div"),l=T(n[0]),t=y(),s=b("div"),a=T(n[1]),_=y(),r=b("div"),f=y(),d=b("div"),C=T(n[2]),M=y(),o=b("div"),o.textContent="Tags",m=y(),z=b("div");for(let i=0;i<u.length;i+=1)u[i].c();g(e,"class","modal-title svelte-kxzfpc"),g(s,"class","modal-authors svelte-kxzfpc"),g(r,"class","modal-break svelte-kxzfpc"),g(d,"class","modal-abstract svelte-kxzfpc"),g(o,"class","framework svelte-kxzfpc"),g(z,"class","built-with svelte-kxzfpc")},m(i,p){v(i,e,p),w(e,l),v(i,t,p),v(i,s,p),w(s,a),v(i,_,p),v(i,r,p),v(i,f,p),v(i,d,p),w(d,C),v(i,M,p),v(i,o,p),v(i,m,p),v(i,z,p);for(let h=0;h<u.length;h+=1)u[h].m(z,null);q||(E=A(e,"click",n[7]),q=!0)},p(i,p){if(p&1&&x(l,i[0]),p&2&&x(a,i[1]),p&4&&x(C,i[2]),p&8){c=i[3];let h;for(h=0;h<c.length;h+=1){const N=P(i,c,h);u[h]?u[h].p(N,p):(u[h]=U(N),u[h].c(),u[h].m(z,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=c.length}},d(i){i&&k(e),i&&k(t),i&&k(s),i&&k(_),i&&k(r),i&&k(f),i&&k(d),i&&k(M),i&&k(o),i&&k(m),i&&k(z),te(u,i),q=!1,E()}}}function ue(n){let e,l,t,s,a,_,r,f,d,C,M,o;function m(c,u){return c[0].length<65?ce:oe}let z=m(n),q=z(n),E={$$slots:{default:[fe]},$$scope:{ctx:n}};return d=new ae({props:E}),n[8](d),{c(){e=b("div"),l=b("div"),t=y(),s=b("div"),a=b("div"),q.c(),_=y(),r=b("p"),r.textContent="Publication",f=y(),Y(d.$$.fragment),g(l,"class","overlay svelte-kxzfpc"),g(r,"class","svelte-kxzfpc"),g(a,"class","card-content svelte-kxzfpc"),g(s,"class","card svelte-kxzfpc"),g(e,"class","container svelte-kxzfpc")},m(c,u){v(c,e,u),w(e,l),w(e,t),w(e,s),w(s,a),q.m(a,null),w(a,_),w(a,r),v(c,f,u),Z(d,c,u),C=!0,M||(o=A(l,"click",n[6]),M=!0)},p(c,[u]){z===(z=m(c))&&q?q.p(c,u):(q.d(1),q=z(c),q&&(q.c(),q.m(a,_)));const i={};u&4127&&(i.$$scope={dirty:u,ctx:c}),d.$set(i)},i(c){C||(D(d.$$.fragment,c),C=!0)},o(c){L(d.$$.fragment,c),C=!1},d(c){c&&k(e),q.d(),c&&k(f),n[8](null),$(d,c),M=!1,o()}}}function re(n,e,l){let{title:t="This is an Example Title"}=e,{authors:s="Ant\xF3nio Leit\xE3o, et all."}=e,{abstract:a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}=e,{tags:_=["Machine Learning","TDA"]}=e,{link:r}=e,f;const d=()=>f.toggle(),C=()=>window.open(r,"_blank");function M(o){ee[o?"unshift":"push"](()=>{f=o,l(5,f)})}return n.$$set=o=>{"title"in o&&l(0,t=o.title),"authors"in o&&l(1,s=o.authors),"abstract"in o&&l(2,a=o.abstract),"tags"in o&&l(3,_=o.tags),"link"in o&&l(4,r=o.link)},[t,s,a,_,r,f,d,C,M]}class me extends F{constructor(e){super(),G(this,e,re,ue,H,{title:0,authors:1,abstract:2,tags:3,link:4})}}export{me as default};

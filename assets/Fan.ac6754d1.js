import{S as p,i as v,s as x,e as h,b as g,d as c,f as u,G as r,l as m,o as b,t as y,g as F}from"./index.70e5f663.js";function d(s,t,a){const e=s.slice();return e[0]=t[a],e[2]=a,e}function _(s){let t,a;return{c(){t=h("div"),a=y(`cover
    `),g(t,"class","card svelte-70e5o3"),c(t,"--position",s[2]),c(t,"--random",q(-.5,.5))},m(e,l){u(e,t,l),F(t,a)},p:r,d(e){e&&m(t)}}}function k(s){let t,a={length:f},e=[];for(let l=0;l<a.length;l+=1)e[l]=_(d(s,a,l));return{c(){t=h("div");for(let l=0;l<e.length;l+=1)e[l].c();g(t,"class","centering svelte-70e5o3"),c(t,"--angle",S+"deg")},m(l,o){u(l,t,o);for(let n=0;n<e.length;n+=1)e[n].m(t,null)},p(l,[o]){if(o&0){a={length:f};let n;for(n=0;n<a.length;n+=1){const i=d(l,a,n);e[n]?e[n].p(i,o):(e[n]=_(i),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=a.length}},i:r,o:r,d(l){l&&m(t),b(e,l)}}}let f=7,S=60;function q(s,t){return Math.random()*(t-s)+s}class G extends p{constructor(t){super(),v(this,t,null,k,x,{})}}export{G as default};

import{K as l}from"./index.70e5f663.js";function m(t){const o=t-1;return o*o*o+1}function $(t){return--t*t*t*t*t+1}function g(t,{delay:o=0,duration:s=400,easing:c=l}={}){const r=+getComputedStyle(t).opacity;return{delay:o,duration:s,easing:c,css:a=>`opacity: ${a*r}`}}function x(t,{delay:o=0,duration:s=400,easing:c=m,x:r=0,y:a=0,opacity:e=0}={}){const n=getComputedStyle(t),f=+n.opacity,u=n.transform==="none"?"":n.transform,p=f*(1-e);return{delay:o,duration:s,easing:c,css:(y,i)=>`
			transform: ${u} translate(${(1-y)*r}px, ${(1-y)*a}px);
			opacity: ${f-p*i}`}}function C(t,{delay:o=0,duration:s=400,easing:c=m,start:r=0,opacity:a=0}={}){const e=getComputedStyle(t),n=+e.opacity,f=e.transform==="none"?"":e.transform,u=1-r,p=n*(1-a);return{delay:o,duration:s,easing:c,css:(y,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${n-p*i}
		`}}export{g as a,m as c,x as f,$ as q,C as s};

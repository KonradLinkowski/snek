(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function P(t,n){const o=t.x-n.x,i=t.y-n.y;return Math.hypot(o,i)}function x(t,n,o,i=0){const e=P(t,n);if(e<=i)return t;if(e<=o)return n;const r={x:n.x-t.x,y:n.y-t.y},u=Math.hypot(r.x,r.y),f={x:r.x/u,y:r.y/u},h={x:f.x*o,y:f.y*o};return{x:t.x+h.x,y:t.y+h.y}}function M(t){const n={x:Math.floor(Math.random()*t.width),y:Math.floor(Math.random()*t.height)};function o(e){e.beginPath(),e.arc(n.x,n.y,10,0,Math.PI*2),e.closePath(),e.fillStyle="purple",e.fill()}function i(e){return P(n,e)<50}return{render:o,canDie:i}}function E(t){const n={x:t.width/2,y:t.height/2},o=t.getBoundingClientRect();window.addEventListener("mousemove",e=>{n.x=e.clientX-o.left,n.y=e.clientY-o.top}),window.addEventListener("touchstart",i),window.addEventListener("touchmove",i);function i(e){const r=e.touches[0];n.x=r.clientX-o.left,n.y=r.clientY-o.top}return{get(){return{...n}}}}function b(){const t=document.querySelector(".score");let n=0;function o(i){n+=i,t.textContent=n}return{add:o}}function q(t){const n=Math.min(50,t.width/20,t.height/20),o=2,i={x:t.width/2,y:t.height/2,head:!0},e=[i];for(let c=0;c<10;c+=1)e.unshift({x:e[0].x-n,y:e[0].y});function r(c,l){const O=l.get(),m=x(i,O,o*c);i.x=m.x,i.y=m.y;for(let d=0;d<e.length-1;d+=1){const g=x(e[d],e[d+1],o*c,n);e[d].x=g.x,e[d].y=g.y}}function u(c){for(const l of e)c.beginPath(),c.arc(l.x,l.y,n,0,Math.PI*2),c.closePath(),c.fillStyle=l.head?"red":"green",c.fill(),c.stroke()}function f(){e.unshift({x:e[0].x,y:e[0].y})}function h(){return{...i}}return{update:r,render:u,eat:f,getHead:h}}const s=document.querySelector("canvas"),p=s.getContext("2d");S(s);window.addEventListener("resize",()=>S(s));const v=b(),A=E(s),a=q(s),y=[...Array(5)].map(()=>M(s));let w=0;L(0);function L(t){const n=t-w;w=t,a.update(n,A);for(let o=0;o<y.length;o+=1)y[o].canDie(a.getHead())&&(y[o]=M(s),a.eat(),v.add(1));p.clearRect(0,0,s.width,s.height);for(const o of y)o.render(p);a.render(p),requestAnimationFrame(L)}function S(t){t.width=window.innerWidth,t.height=window.innerHeight}

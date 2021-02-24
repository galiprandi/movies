var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let g;function $(t){g=t}const y=[],v=[],b=[],_=[],k=Promise.resolve();let x=!1;function w(t){b.push(t)}let q=!1;const E=new Set;function S(){if(!q){q=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];$(e),C(e.$$)}for($(null),y.length=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];E.has(e)||(E.add(e),e())}b.length=0}while(y.length);for(;_.length;)_.pop()();x=!1,q=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const j=new Set;function A(t,e){-1===t.$$.dirty[0]&&(y.push(t),x||(x=!0,k.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(l,c,s,i,a,f,d=[-1]){const p=g;$(l);const h=l.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let m=!1;if(h.ctx=s?s(l,c.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&A(l,t)),e})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();c.intro&&((y=l.$$.fragment)&&y.i&&(j.delete(y),y.i(v))),function(t,n,l){const{fragment:c,on_mount:s,on_destroy:u,after_update:i}=t.$$;c&&c.m(n,l),w((()=>{const n=s.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(w)}(l,c.target,c.anchor),S()}var y,v;$(p)}function D(t,e,n){const r=t.slice();return r[7]=e[n].title,r[8]=e[n].poster_path,r[9]=e[n].overview,r[10]=e[n].release_date,r[11]=e[n].vote_average,r}function O(t){let e;return{c(){e=i("h1"),e.textContent="No search result"},m(t,n){s(t,e,n)},d(t){t&&u(e)}}}function F(t){let e,n,r,o;return{c(){e=i("img"),e.src!==(n="https://image.tmdb.org/t/p/original/"+t[8])&&p(e,"src",n),p(e,"alt",r=t[7]),p(e,"title",o=t[7]),p(e,"class","svelte-ksp3da")},m(t,n){s(t,e,n)},p(t,l){2&l&&e.src!==(n="https://image.tmdb.org/t/p/original/"+t[8])&&p(e,"src",n),2&l&&r!==(r=t[7])&&p(e,"alt",r),2&l&&o!==(o=t[7])&&p(e,"title",o)},d(t){t&&u(e)}}}function L(t){let e,n,r,o,l,d,m,g,$,y,v,b,_,k,x,w,q=t[7]+"",E=new Date(t[10]).getFullYear()+"",S=t[9]+"",C=t[8]&&F(t);return{c(){e=i("article"),n=i("picture"),C&&C.c(),r=f(),o=i("section"),l=i("h1"),d=a(q),m=a(" ("),g=a(E),$=a(")"),y=f(),v=i("details"),b=i("summary"),b.textContent="Summary",_=f(),k=i("p"),x=a(S),w=f(),p(l,"class","svelte-ksp3da"),p(v,"class","svelte-ksp3da"),p(o,"class","information svelte-ksp3da"),p(e,"class","svelte-ksp3da")},m(t,u){s(t,e,u),c(e,n),C&&C.m(n,null),c(e,r),c(e,o),c(o,l),c(l,d),c(l,m),c(l,g),c(l,$),c(o,y),c(o,v),c(v,b),c(v,_),c(v,k),c(k,x),c(e,w)},p(t,e){t[8]?C?C.p(t,e):(C=F(t),C.c(),C.m(n,null)):C&&(C.d(1),C=null),2&e&&q!==(q=t[7]+"")&&h(d,q),2&e&&E!==(E=new Date(t[10]).getFullYear()+"")&&h(g,E),2&e&&S!==(S=t[9]+"")&&h(x,S)},d(t){t&&u(e),C&&C.d()}}}function T(e){let n,l,a,h,g,$,y,v,b,_=e[1],k=[];for(let t=0;t<_.length;t+=1)k[t]=L(D(e,_,t));let x=null;return _.length||(x=O()),{c(){n=i("main"),l=i("form"),a=i("input"),h=f(),g=i("button"),g.textContent="Search",$=f(),y=i("section");for(let t=0;t<k.length;t+=1)k[t].c();x&&x.c(),p(a,"type","search"),p(a,"name","querySearch"),p(a,"placeholder","Search movies..."),p(a,"class","svelte-ksp3da"),p(g,"type","submit"),p(g,"class","svelte-ksp3da"),p(l,"class","svelte-ksp3da"),p(n,"class","svelte-ksp3da")},m(r,u){s(r,n,u),c(n,l),c(l,a),m(a,e[0]),c(l,h),c(l,g),c(n,$),c(n,y);for(let t=0;t<k.length;t+=1)k[t].m(y,null);var i,f;x&&x.m(y,null),v||(b=[d(a,"input",e[5]),(f=e[3].call(null,a),f&&o(f.destroy)?f.destroy:t),d(l,"submit",(i=e[6],function(t){return t.preventDefault(),i.call(this,t)}))],v=!0)},p(t,[e]){if(1&e&&m(a,t[0]),2&e){let n;for(_=t[1],n=0;n<_.length;n+=1){const r=D(t,_,n);k[n]?k[n].p(r,e):(k[n]=L(r),k[n].c(),k[n].m(y,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=_.length,_.length?x&&(x.d(1),x=null):x||(x=O(),x.c(),x.m(y,null))}},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),x&&x.d(),v=!1,r(b)}}}function Y(t,e,n){let{initialquery:r}=e,o=r,l=[];async function c(){if(o.length<2)return;const t=`https://api.themoviedb.org/3/search/movie?api_key=38d2b879e4e32254577f8d6411c67af4&query=${o}`;console.info(`Searching: ${o}`),n(1,l=await fetch(t).then((t=>t.json())).then((t=>t.results||[])))}return t.$$set=t=>{"initialquery"in t&&n(4,r=t.initialquery)},[o,l,c,t=>{t.focus()},r,function(){o=this.value,n(0,o)},()=>c()]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,Y,T,l,{initialquery:4})}}({target:document.body,props:{initialquery:""}})}();
//# sourceMappingURL=bundle.js.map
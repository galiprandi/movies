(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(6),s=r.n(a),i=r(4),u=r.n(i),o=r(7),j=r(5),l=r(2),b=r(0);var h=function(e){var t=e.overview;return Object(b.jsxs)("details",{children:[Object(b.jsx)("summary",{children:"Summary"}),Object(b.jsx)("p",{children:t})]})};function d(e){var t=e.title,r=e.poster_path,n=r?"https://image.tmdb.org/t/p/original/"+r:"https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE";return Object(b.jsx)("picture",{children:Object(b.jsx)("img",{src:n,alt:t,title:t})})}function p(e){var t=e.title,r=e.release_date,n=new Date(r).getFullYear();return Object(b.jsxs)("h1",{children:[t," (",n,")"]})}var O=function(e){var t=e.Movie;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{children:[Object(b.jsx)(d,Object(l.a)({},t)),Object(b.jsxs)("section",{className:"summary",children:[Object(b.jsx)(p,Object(l.a)({},t)),Object(b.jsx)(h,Object(l.a)({},t))]})]})})};function f(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(j.a)(a,2),i=s[0],l=s[1],h=Object(n.useRef)(null);function d(){return(d=Object(o.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<2)){e.next=2;break}return e.abrupt("return");case 2:return"38d2b879e4e32254577f8d6411c67af4",r="https://api.themoviedb.org/3/search/movie?api_key=".concat("38d2b879e4e32254577f8d6411c67af4","&query=").concat(t),n=function(e,t){return e.release_date<t.release_date?1:t.release_date<e.release_date?-1:0},e.next=7,fetch(r).then((function(e){return e.json()})).then((function(e){var t=e.results.sort(n)||[];l(t),console.log(t)}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return h.current.focus()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("main",{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){d.apply(this,arguments)}(r)},children:[Object(b.jsx)("input",{id:"querySearch",name:"querySearch",placeholder:"Search movies...",value:r,onChange:function(e){return c(e.target.value)},onFocus:function(e){return console.log(e.target.select())},ref:h}),Object(b.jsx)("button",{type:"submit",children:"Search"})]}),Object(b.jsx)("section",{children:i.map((function(e){return Object(b.jsx)(O,{Movie:e},e.id)}))}),Object(b.jsx)("p",{children:"Power by themoviedb.org"})]})})}s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d3f9d686.chunk.js.map
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(5),s=r.n(a),i=r(3),u=r.n(i),o=r(6),l=r(4),j=r(0);var b=function(e){var t=e.Movie,r=t.title,n=t.poster_path,c=t.overview,a=t.release_date,s=n?"https://image.tmdb.org/t/p/original/"+n:"https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE";return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("article",{children:[Object(j.jsx)("picture",{children:Object(j.jsx)("img",{src:s,alt:r})}),Object(j.jsxs)("section",{className:"summary",children:[Object(j.jsxs)("h1",{children:[r," (",new Date(a).getFullYear(),")"]}),Object(j.jsxs)("details",{children:[Object(j.jsx)("summary",{children:"Summary"}),Object(j.jsx)("p",{children:c})]})]})]})})};function h(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(l.a)(a,2),i=s[0],h=s[1],d=Object(n.useRef)(null);function p(){return(p=Object(o.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<2)){e.next=2;break}return e.abrupt("return");case 2:return"38d2b879e4e32254577f8d6411c67af4",r="https://api.themoviedb.org/3/search/movie?api_key=".concat("38d2b879e4e32254577f8d6411c67af4","&query=").concat(t),n=function(e,t){return e.release_date<t.release_date?1:t.release_date<e.release_date?-1:0},e.next=7,fetch(r).then((function(e){return e.json()})).then((function(e){var t=e.results.sort(n)||[];h(t),console.log(t)}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return d.current.focus()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("main",{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){p.apply(this,arguments)}(r)},children:[Object(j.jsx)("input",{id:"querySearch",name:"querySearch",placeholder:"Search movies...",value:r,onChange:function(e){return c(e.target.value)},onFocus:function(e){return console.log(e.target.select())},ref:d}),Object(j.jsx)("button",{type:"submit",children:"Search"})]}),Object(j.jsx)("section",{children:i.map((function(e){return Object(j.jsx)(b,{Movie:e},e.id)}))}),Object(j.jsx)("p",{children:"Power by themoviedb.org"})]})})}s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7d7a3337.chunk.js.map
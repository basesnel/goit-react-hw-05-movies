"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[712],{236:function(n,e,t){t.d(e,{Hg:function(){return i},TP:function(){return c},gH:function(){return o},tx:function(){return s},zv:function(){return a}});var r="5a20241834eb9a6674dc92f9938aafbf",i=function(n){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(r,"&page=").concat(n)).then((function(n){return n.json()}))},o=function(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(n)).then((function(n){return n.json()}))},c=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r)).then((function(n){return n.json()}))},a=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))},s=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}},712:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,o,c,a,s,d,p,l=t(439),u=t(791),h=t(689),v=t(168),x=t(444),f=t(87),g=x.ZP.div(r||(r=(0,v.Z)(["\n  padding: 0 16px;\n"]))),m=x.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border-bottom: 1px solid #c0c0c0;\n"]))),b=(0,x.ZP)(f.rU)(o||(o=(0,v.Z)(["\n  display: inline-block;\n  padding: 8px 16px;\n  color: orangered;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 700;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: white;\n    background-color: orangered;\n  }\n"]))),j=x.ZP.ul(c||(c=(0,v.Z)(["\n  padding: 8px;\n  list-style: none;\n"]))),k=x.ZP.li(a||(a=(0,v.Z)(["\n  padding-bottom: 8px;\n"]))),_=(0,x.ZP)(f.rU)(s||(s=(0,v.Z)(["\n  display: inline-block;\n  padding: 4px 0;\n  color: #444;\n  border-bottom: 1px solid transparent;\n  text-decoration: none;\n\n  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    border-bottom: 1px solid #444;\n  }\n"]))),w=x.ZP.div(d||(d=(0,v.Z)(["\n  width: 150px;\n  height: 50px;\n  margin: 16px auto 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #808080;\n  border-radius: 5px;\n  color: #808080;\n"]))),Z=t(184);function y(n){var e=n.backLink,t=n.movieSpec;return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(b,{to:e,children:"Go back"}),(0,Z.jsxs)(m,{children:[t.poster_path&&(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:t.tagline}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h1",{children:[t.title," (",t.release_date.slice(0,4),")"]}),(0,Z.jsxs)("p",{children:["User score: ",parseInt(10*t.vote_average,10),"%"]}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:t.overview}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)("p",{children:t.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,Z.jsx)(m,{children:(0,Z.jsxs)(j,{children:[(0,Z.jsx)(k,{children:(0,Z.jsx)(_,{to:"cast",children:"Cast"})}),(0,Z.jsx)(k,{children:(0,Z.jsx)(_,{to:"reviews",children:"Reviews"})})]})}),(0,Z.jsx)(u.Suspense,{fallback:(0,Z.jsx)(w,{children:"Loading sub-page..."}),children:(0,Z.jsx)(h.j3,{})})]})}var P=x.ZP.div(p||(p=(0,v.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 16px;\n"]))),S=t(236),U=function(){var n,e,t=(0,u.useState)(null),r=(0,l.Z)(t,2),i=r[0],o=r[1],c=(0,h.UO)().movieId,a=(0,h.TH)(),s=(0,u.useRef)(null!==(n=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,u.useEffect)((function(){(0,S.TP)(c).then((function(n){return{title:n.title,release_date:n.release_date,vote_average:n.vote_average,poster_path:n.poster_path,tagline:n.tagline,overview:n.overview,genres:n.genres}})).then((function(n){o(n)}))}),[c]),(0,Z.jsx)(P,{children:i&&(0,Z.jsx)(y,{backLink:s.current,movieSpec:i})})}}}]);
//# sourceMappingURL=712.b611d14a.chunk.js.map
(this.webpackJsonpnewsbook=this.webpackJsonpnewsbook||[]).push([[0],{18:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(29),s=c.n(r),i=(c(35),c(36),c(37),c(3)),o=c(8),u=(c(38),c(0));var l=function(e){return Object(u.jsxs)("div",{className:"categorybar",children:[Object(u.jsx)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/",children:"General"}),Object(u.jsx)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/business",children:"Business"}),Object(u.jsxs)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/entertainment",children:[" ","Entertainment"," "]}),Object(u.jsxs)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/sports",children:[" ","Sports"," "]}),Object(u.jsxs)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/science",children:[" ","Science"," "]}),Object(u.jsxs)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/technology",children:[" ","Technology"]}),Object(u.jsx)(o.b,{activeClassName:"categorybar-link-active",className:"categorybar-link",exact:!0,to:"/health",children:"Health"})]})};c(48);var j=function(e){var t=e.isOpen,c=e.setIsOpen;return Object(u.jsxs)("div",{className:"mobile",children:[Object(u.jsx)("div",{className:"close-icon",onClick:function(){return c(!t)},children:Object(u.jsx)("i",{class:"far fa-times-circle"})}),Object(u.jsx)("div",{className:"mobile-categorybar",children:Object(u.jsxs)("div",{className:"category-container",onClick:function(){return c(!t)},children:[Object(u.jsx)(l,{})," "]})})]})};c(49);var b=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("div",{className:"navbar-left",children:Object(u.jsx)("p",{className:"navbar-left-title",children:"NewsBook"})}),Object(u.jsxs)("div",{className:"categorybar-section",children:[Object(u.jsx)("div",{className:"navbar-right",children:Object(u.jsx)(l,{})}),Object(u.jsxs)("div",{className:"navbar-right-mobile",children:[Object(u.jsx)("div",{onClick:function(){return r(!a)},children:Object(u.jsx)("i",{class:"fas fa-bars categorybar-icon"})}),Object(u.jsx)("div",{children:a&&Object(u.jsx)(j,{isOpen:a,setIsOpen:r})})]})]})]})};c(50);var d=c(2),h=c.n(d),f=c(7),O=(c(52),["73be567473614bfdf5ec112c52088363","ca95c867f3bf4cede21557475a2f10fb","44ecd5895721905dae6e0625c69fca96","7045d5c0aeef7dc46b80c21b36bbbd3c","4c03eca336175a11538c4b6f30b0d518"]),p=O[Math.floor(Math.random()*O.length)];c(53);var v=function(e){return Object(u.jsx)("div",{className:"article-card",onClick:function(){return window.open("".concat(e.article.url))},children:Object(u.jsxs)("div",{className:"article-card-container",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("img",{alt:"article-poster",src:e.article.image})}),Object(u.jsxs)("div",{className:"right",children:[Object(u.jsxs)("div",{className:"title",children:[" ",e.article.title]}),Object(u.jsx)("div",{className:"share-options",children:Object(u.jsx)("button",{className:"share-button",children:"Read More.."})}),Object(u.jsxs)("div",{className:"desc",children:[" ",e.article.content]}),Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsxs)("div",{className:"source",children:["Source: ",e.article.source.name]}),Object(u.jsx)("div",{className:"published-time",children:e.article.publishedAt.slice(0,10)})]})]})]})})},x=(c(54),c(78));var m=function(e){return Object(u.jsx)("div",{className:"article-list",children:Object(u.jsx)("div",{className:"article-title",children:e.articles.map((function(e){return Object(u.jsx)(v,{article:e},Object(x.a)())}))})})},g=c(6),N=c.n(g),k="https://gnews.io/api/v4/top-headlines?lang=en&topic=breaking-news&token=".concat(p);var w=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(k)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})},y="https://gnews.io/api/v4/top-headlines?lang=en&topic=health&token=".concat(p);var S=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(y)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})},C="https://gnews.io/api/v4/top-headlines?topic=sports&lang=en&token=".concat(p);var E=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(C)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})},q="https://gnews.io/api/v4/top-headlines?topic=business&lang=en&token=".concat(p);var M=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(q)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{className:"business",children:Object(u.jsx)("div",{className:"articles-container",children:Object(u.jsx)(m,{articles:a})})})},B="https://gnews.io/api/v4/top-headlines?topic=entertainment&lang=en&token=".concat(p);var I=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(B)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})},A="https://gnews.io/api/v4/top-headlines?topic=technology&lang=en&token=".concat(p);var J=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(A)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})},T="https://gnews.io/api/v4/top-headlines?lang=en&topic=science&token=".concat(p);var D=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get("".concat(T)).then((function(e){return r(e.data.articles)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})};c(18);var G=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1];console.log(e);var s=function(){var t=Object(f.a)(h.a.mark((function t(c){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.query),t.abrupt("return",N.a.get("https://gnews.io/api/v4/search?q=".concat(e.match.params.query,"&token=").concat(p)).then((function(e){return r(e.data.articles)})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[e.match.params.query]),Object(u.jsx)("div",{children:Object(u.jsx)(m,{articles:a})})},H=(c(74),c(4));var R=function(){return Object(u.jsx)("section",{className:"contentmain",children:Object(u.jsxs)(H.c,{children:[Object(u.jsx)(H.a,{exact:!0,path:"/",component:w}),Object(u.jsx)(H.a,{exact:!0,path:"/entertainment",component:I}),Object(u.jsx)(H.a,{exact:!0,path:"/sports",component:E}),Object(u.jsx)(H.a,{exact:!0,path:"/science",component:D}),Object(u.jsx)(H.a,{exact:!0,path:"/health",component:S}),Object(u.jsx)(H.a,{exact:!0,path:"/business",component:M}),Object(u.jsx)(H.a,{exact:!0,path:"/Technology",component:J}),Object(u.jsx)(H.a,{exact:!0,path:"/q=:query",component:G})]})})};c(75);var z=function(){return Object(u.jsxs)("div",{className:"copyright-footer",children:["Made by\xa0",Object(u.jsx)("a",{href:"https://www.linkedin.com/in/aman-anand-572359191/",className:"footer-name",children:"Aman"}),"\xa0|\xa0",Object(u.jsx)("a",{href:"https://www.linkedin.com/in/sourabh-raha-29b0a81a6/",className:"footer-name",children:"Sourabh"})]})};var F=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(u.jsx)("div",{className:"search-bar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.value=""},children:[Object(u.jsx)("input",{autofocus:!0,value:a,onChange:function(e){return r(e.target.value)},placeholder:"Search keywords .."}),Object(u.jsx)(o.b,{to:"/q=".concat(a),children:Object(u.jsx)("button",{children:"Search"})})]})})};var K=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("section",{id:"navbar",children:Object(u.jsx)(b,{})}),Object(u.jsx)("section",{id:"search-bar",children:Object(u.jsx)(F,{})}),Object(u.jsx)("section",{id:"content",children:Object(u.jsx)(R,{})}),Object(u.jsx)("section",{id:"footer",children:Object(u.jsx)(z,{})})]})};var L=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(K,{})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a4056596.chunk.js.map
(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(3),r=c(1);c(10);function l(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=void 0===t?1:t,i=e.onPageChange,r=Math.ceil(a/c),s=l(1,r),d=1===n,u=n===r;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:d}),children:Object(j.jsx)("a",{href:"#prev","data-cy":"prevLink",className:"page-link","aria-disabled":d,onClick:function(){n>1&&i(n-1)},children:"\xab"})}),s.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:e===n}),children:Object(j.jsx)("a",{href:"#".concat(e),"data-cy":"pageLink",className:"page-link",onClick:function(){var a;(a=e)!==n&&i(a)},children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:u}),children:Object(j.jsx)("a",{href:"#next","data-cy":"nextLink",className:"page-link","aria-disabled":u,onClick:function(){n<r&&i(n+1)},children:"\xbb"})})]})},u=[3,5,10,20],b=u[1],h=function(){var e=Object(r.useState)([]),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(b),s=Object(i.a)(n,2),o=s[0],h=s[1],m=Object(r.useState)(1),p=Object(i.a)(m,2),g=p[0],O=p[1];Object(r.useEffect)((function(){t(l(1,42).map((function(e){return"Item ".concat(e)})))}),[]);var f=(g-1)*o,x=f+o,v=c.slice(f,x),N=c.length,k=f+1,P=Math.min(x,N);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(g," (items ").concat(k," - ").concat(P," of ").concat(N,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{id:"perPageSelector",className:"form-control","data-cy":"perPageSelector",value:o,onChange:function(e){h(+e.target.value),O(1)},children:u.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:N,perPage:o,currentPage:g,onPageChange:O}),Object(j.jsx)("ul",{children:v.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ca2ec091.chunk.js.map
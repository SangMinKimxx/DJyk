(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a,c=n(0),o=n.n(c),r=n(21),s=n.n(r),l=(n(99),n(8)),i=n(32),j=(n(100),n(20)),u=n(80),b=n(183),d=n(81),h=n(5),O=d.a.div(a||(a=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  .ant-menu {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n  }\n"])));var p=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){null!==localStorage.getItem("token")&&a(!0)}),[]),Object(h.jsx)("div",{children:Object(h.jsx)(O,{children:Object(h.jsxs)(b.a,{children:[n?Object(h.jsx)(b.a.Item,{onClick:function(){fetch("http://127.0.0.1:8000/api/v1/mall/auth/logout/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.clear(),window.location.replace("http://localhost:3000/login")}))},children:"\ub85c\uadf8\uc544\uc6c3"},"logout"):Object(h.jsx)(b.a.Item,{children:Object(h.jsx)(i.a,{to:"/login",children:"\ub85c\uadf8\uc778"})},"signin"),n?Object(h.jsx)(h.Fragment,{}):Object(h.jsx)(b.a.Item,{children:Object(h.jsx)(i.a,{to:"/signup",children:"\ud68c\uc6d0\uac00\uc785"})},"signup")]})})})},x=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(j.a)(o,2),s=r[0],l=r[1],i=Object(c.useState)(!1),u=Object(j.a)(i,2),b=u[0],d=u[1],O=Object(c.useState)(!0),p=Object(j.a)(O,2),x=p[0],f=p[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/dashboard"):f(!1)}),[]);return Object(h.jsxs)("div",{children:[!1===x&&Object(h.jsx)("h1",{children:"Login"}),!0===b&&Object(h.jsx)("h2",{children:"Cannot log in with provided credentials"}),!1===x&&Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password:s};fetch("http://127.0.0.1:8000/api/v1/mall/auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/dashboard")):(a(""),l(""),localStorage.clear(),d(!0))}))},children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address:"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"email",type:"email",value:n,required:!0,onChange:function(e){return a(e.target.value)}})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"Password:"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"password",type:"password",value:s,required:!0,onChange:function(e){return l(e.target.value)}})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Login"})]})]})},f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(j.a)(o,2),s=r[0],l=r[1],i=Object(c.useState)(""),u=Object(j.a)(i,2),b=u[0],d=u[1],O=Object(c.useState)(!1),p=Object(j.a)(O,2),x=p[0],f=p[1],g=Object(c.useState)(!0),m=Object(j.a)(g,2),v=m[0],S=m[1];Object(c.useEffect)((function(){null!==localStorage.getItem("token")?window.location.replace("http://localhost:3000/dashboard"):S(!1)}),[]);return Object(h.jsxs)("div",{children:[!1===v&&Object(h.jsx)("h1",{children:"Signup"}),!0===x&&Object(h.jsx)("h2",{children:"Cannot signup with provided credentials"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={email:n,password1:s,password2:b};fetch("http://127.0.0.1:8000/api/v1/mall/auth/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key?(localStorage.clear(),localStorage.setItem("token",e.key),window.location.replace("http://localhost:3000/dashboard")):(a(""),l(""),d(""),localStorage.clear(),f(!0))}))},children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email address:"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"email",type:"email",value:n,onChange:function(e){return a(e.target.value)},required:!0})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password1",children:"Password:"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"password1",type:"password",value:s,onChange:function(e){return l(e.target.value)},required:!0})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password2",children:"Confirm password:"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"password2",type:"password",value:b,onChange:function(e){return d(e.target.value)},required:!0})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Signup"})]})]})};var g=function(){return Object(h.jsxs)(c.Suspense,{fallback:Object(h.jsx)("div",{children:"..."}),children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(l.b,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/login",component:x})," // \ucd94\uac00",Object(h.jsx)(i.a,{exact:!0,path:"/signup",component:f})," // \ucd94\uac00"]})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(g,{})})}),document.getElementById("root")),m()},99:function(e,t,n){}},[[180,1,2]]]);
//# sourceMappingURL=main.ba9933a3.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(4),s=n.n(r),i=n(2),a=n(5),j=Object(a.createAuthProvider)({accessTokenKey:"access_token",onUpdateToken:function(e){return fetch("http://127.0.0.1:5000/user/refresh",{method:"POST",body:e.access_token}).then((function(e){return e.json()}))}}),u=Object(i.a)(j,4),l=u[0],h=u[1],b=u[2],d=u[3],O=(n(11),n(0));function p(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),a=s[0],j=s[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{action:"#",children:[Object(O.jsx)("h3",{children:"Login"}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",value:n,placeholder:"Username",name:"username",onChange:function(e){o(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",value:a,placeholder:"Password",name:"password",onChange:function(e){j(e.target.value)}})}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault();var t={username:n,password:a};fetch("http://127.0.0.1:5000/user/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.access_token?(b(e),console.log(e)):console.log("Wrong USERNAME/PASSWORD")}))},type:"submit",children:"Login"})]})})}function f(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),a=s[0],j=s[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),h=l[0],b=l[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Signup"}),Object(O.jsxs)("form",{action:"#",children:[Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",value:n,name:"username",onChange:function(e){o(e.target.value)},placeholder:"Username"})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",value:a,name:"email",onChange:function(e){j(e.target.value)},placeholder:"Email"})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",value:h,name:"password",onChange:function(e){b(e.target.value)},placeholder:"Password"})}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("Sign up");var t={username:n,email:a,password:h};fetch("http://127.0.0.1:5000/user/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))},children:"Sign-up"})]})]})}function x(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];fetch("http://127.0.0.1:5000/blog/public").then((function(e){return e.json()})).then((function(e){return o(e.blog)}));var r=function(e){e.preventDefault();var t={blogs:n};fetch("http://127.0.0.1:5000/blog/public",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.access_token?(login(e),console.log(e)):console.log("Wrong USERNAME/PASSWORD")}))},s=l(),a=Object(i.a)(s,1)[0],j=function(e){return e.length?e.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)("h4",{children:e.blog})},t)})):Object(O.jsx)("div",{children:"Not Working"})};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:"bloglines"}),a?Object(O.jsx)(u,{}):Object(O.jsx)("h5",{children:"Please Log in to send a message..."}),Object(O.jsx)("div",{children:Object(O.jsx)(j,{})})]});function u(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{}),Object(O.jsx)("button",{onClick:r,children:"Enter"})]})}}function g(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];fetch("https://dollardream.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return o(e.get)}));var r=l(),s=Object(i.a)(r,1)[0];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:n}),Object(O.jsx)("div",{children:s?Object(O.jsx)("button",{onClick:function(){return d()},children:"LogOut"}):Object(O.jsx)(a,{})}),Object(O.jsx)(j,{}),Object(O.jsx)(x,{})]});function a(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(f,{}),Object(O.jsx)(p,{})]})}function j(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){h("http://127.0.0.1:5000/user/protect").then((function(e){return 422===e.status?(o("Welcome Stanger, please Log in"),null):e.json()})).then((function(e){e&&e.message&&o(e.message)}))}),[]),Object(O.jsx)("h5",{children:n})}}s.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e29c545c.chunk.js.map
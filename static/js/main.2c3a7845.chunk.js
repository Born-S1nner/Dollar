(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(20),a=n.n(o),i=n(4),l=n(21),r=Object(l.createAuthProvider)({accessTokenKey:"access_token",onUpdateToken:function(e){return fetch("http://127.0.0.1:5000/user/refresh",{method:"POST",body:e.access_token}).then((function(e){return e.json()}))}}),j=Object(i.a)(r,4),u=j[0],b=j[1],h=j[2],d=j[3],O=n(8),p=n(2),g=(n(28),n(0));function f(e){var t=e.setToken,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],a=s[1],l=Object(c.useState)(""),r=Object(i.a)(l,2),j=r[0],u=r[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Login"}),Object(g.jsxs)("form",{className:"NavItemDropContent",action:"#",children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",value:o,placeholder:"Username",name:"username",onChange:function(e){a(e.target.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",value:j,placeholder:"Password",name:"password",onChange:function(e){u(e.target.value)}})}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault();var n={username:o,password:j};fetch("http://127.0.0.1:5000/user/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.access_token?(h(e),console.log(e),t(e.access_token)):console.log("Wrong USERNAME/PASSWORD")}))},type:"submit",children:Object(g.jsx)(O.b,{to:"/home",children:"Login"})})]})]})}function m(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),a=Object(i.a)(o,2),l=a[0],r=a[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Signup"}),Object(g.jsxs)("form",{action:"#",className:"NavItemDropContent",children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",value:n,name:"username",onChange:function(e){s(e.target.value)},placeholder:"Username"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",value:l,name:"email",onChange:function(e){r(e.target.value)},placeholder:"Email"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",value:b,name:"password",onChange:function(e){h(e.target.value)},placeholder:"Password"})}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("Sign up");var t={username:n,email:l,password:b};fetch("http://127.0.0.1:5000/user/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}))},children:"Sign-up"})]})]})}function v(e){var t=e.token,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],a=s[1],l=u(),r=Object(i.a)(l,1)[0];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"bloglines"}),r?Object(g.jsxs)("form",{action:"#",children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",value:o,placeholder:"Type whatever its in your mind...",name:"blogMessage",onChange:function(e){a(e.target.value)}})}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault();var n={blog:o};fetch("http://127.0.0.1:5000/blog/public",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t),Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})),window.location.reload(!1)},type:"submit",children:"Enter"})]}):Object(g.jsx)("h5",{children:"Please Log in to send a message..."})]})}var x=n(11),y=n(12),N=n(14),S=n(13),k=function(e){Object(N.a)(n,e);var t=Object(S.a)(n);function n(e){var c;return Object(x.a)(this,n),(c=t.call(this,e)).displayBlogs=function(e){return e.map((function(e){return Object(g.jsxs)("div",{className:"blogRow",children:[Object(g.jsx)("h5",{className:"blog_head",children:e.added_by}),Object(g.jsx)("p",{className:"blog_blog",children:e.blog}),Object(g.jsx)("button",{className:"blog_button",value:e.id,onClick:c.setId,children:Object(g.jsx)(O.b,{to:"/Blog",children:"..."})})]},e.id)}))},c.state={blogs:[],loading:!0},c}return Object(y.a)(n,[{key:"getBlogs",value:function(){var e=this;fetch("http://127.0.0.1:5000/blog/public").then((function(e){return e.json()})).then((function(t){e.setState({blogs:t,loading:!1})}))}},{key:"setId",value:function(e){console.log(e.currentTarget.value),this.setState({setId:e.currentTarget.value})}},{key:"componentDidMount",value:function(){this.getBlogs()}},{key:"render",value:function(){return Object(g.jsx)("div",{children:this.state.loading?Object(g.jsx)("h5",{children:"Loading"}):this.displayBlogs(this.state.blogs)})}}]),n}(c.Component),C=function(e){Object(N.a)(n,e);var t=Object(S.a)(n);function n(e){var c;return Object(x.a)(this,n),(c=t.call(this,e)).displayBlogs=function(e){return e.map((function(e){return Object(g.jsxs)("div",{className:"blogRow",children:[Object(g.jsx)("h5",{className:"blog_head",children:e.added_by}),Object(g.jsx)("p",{className:"blog_blog",children:e.blog}),Object(g.jsx)("button",{value:e.id,onClick:c.UpdateBlogRow,className:"blog_button",children:"Edit"}),Object(g.jsx)("button",{className:"blog_button",children:"Remove"})]},e.id)}))},c.state={blogline:[]},c}return Object(y.a)(n,[{key:"getBlogLine",value:function(){var e=this;fetch("http://127.0.0.1:5000/blog/private/605112fca3793a90b95e7993").then((function(e){return e.json()})).then((function(t){e.setState({blogline:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getBlogLine()}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[this.displayBlogs(this.state.blogline),Object(g.jsx)(O.b,{to:"/home",children:"Return"})]})}}]),n}(c.Component);function B(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(),a=Object(i.a)(o,2),l=a[0],r=a[1],j=Object(c.useState)(""),h=Object(i.a)(j,2);h[0],h[1];fetch("https://dollardream.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return s(e.get)}));var x=u(),y=Object(i.a)(x,1)[0];return Object(g.jsx)(O.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"titleStyle",children:n}),Object(g.jsxs)("ul",{className:"NavBar",children:[Object(g.jsx)("li",{className:"NavItem",children:Object(g.jsx)(m,{})}),Object(g.jsx)("li",{className:"NavItem",children:y?Object(g.jsx)("button",{className:"lgButton",onClick:function(){return d()},children:Object(g.jsx)(O.b,{to:"/",children:"LogOut"})}):Object(g.jsx)(f,{setToken:r})}),Object(g.jsx)("li",{className:"NavItem",children:Object(g.jsx)(N,{})})]}),Object(g.jsxs)("div",{className:"blogMain",children:[Object(g.jsx)(p.a,{path:"/home",component:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(v,{token:l}),Object(g.jsx)(k,{setId:k.setId})]})}}),Object(g.jsx)(p.a,{path:"/Blog",component:C})]})]})});function N(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){b("http://127.0.0.1:5000/user/protect").then((function(e){return 422===e.status?(s("Welcome Stanger, please Log in"),null):e.json()})).then((function(e){e&&e.message&&s(e.message)}))}),[]),Object(g.jsx)("h5",{children:n})}}a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2c3a7845.chunk.js.map
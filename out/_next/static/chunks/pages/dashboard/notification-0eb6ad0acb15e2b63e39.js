_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"+WMa":function(a,e,s){a.exports={heading:"Titlebar_heading__9pjH9",breadcrumb:"Titlebar_breadcrumb__2lBzf",breadcrumbitem:"Titlebar_breadcrumbitem__1zT-c"}},"8Oii":function(a,e,s){"use strict";var t=s("q1tI"),n=s.n(t),i=s("pVnL"),r=s.n(i),c=s("Bop7"),l=t.forwardRef((function(a,e){return t.createElement(c.a,r()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),t.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}));l.displayName="Home";var o=s("YARc"),d=s("ok1R"),m=s("rhny"),u=s("YFqc"),b=s.n(u),p=s("+WMa"),f=s.n(p),h=n.a.createElement;e.a=function(a){var e=a.title,s=a.crumb;return h(d.a,null,h(m.a,{sm:"12",className:f.a.heading},h("span",null," ",e,"  "),h("div",{className:f.a.breadcrumb},s.map((function(a){return h("div",{className:f.a.breadcrumbitem},"Home"===a?h(l,{size:14,style:{marginBottom:"3px"}}):h(o.a,{size:16}),h(b.a,{href:"/"},h("a",null,a)))})))))}},CoR0:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/notification",function(){return s("XvRY")}])},"Vj+5":function(a,e,s){"use strict";s.d(e,"a",(function(){return B}));var t=s("q1tI"),n=s.n(t),i=s("1Yj4"),r=s("ok1R"),c=s("rhny"),l=s("/MKj"),o=(s("KYPV"),s("UGp+"),s("8Kt/")),d=s.n(o),m=s("YFqc"),u=s.n(m),b=s("VENR"),p=s.n(b),f=s("eenl"),h=s("nOHt"),N=s("1luN"),v=s("YARc"),g=s("3IDX"),w=s("FZJb"),z=s("dq96"),I=s("791q"),j=s("BkMj"),O=s("pVnL"),_=s.n(O),E=s("Bop7"),H=t.forwardRef((function(a,e){return t.createElement(E.a,_()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),t.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}))}));H.displayName="Group";var A=s("sOKU"),k=s("2Te1"),R=s("nsn4"),S=s("K7vz"),V=s("ujA5"),y=s("4kQB"),P=s.n(y),C=s("Cwtw"),Y=n.a.createElement,q=function(){var a=Object(h.useRouter)(),e=Object(l.d)(),s=Object(l.e)((function(a){return a.auth.user})),n=Object(t.useState)({}),i=n[0],r=n[1],c=Object(t.useState)(0),o=c[0],d=(c[1],Object(t.useState)(0)),m=d[0],b=(d[1],Object(t.useState)(!1)),p=(b[0],b[1],Object(t.useState)(!1)),f=p[0],O=p[1],_=Object(t.useState)(!1),E=_[0],y=_[1],q=Object(t.useState)(!1),x=q[0],B=q[1],M=Object(t.useState)(!1);M[0],M[1];return Object(t.useEffect)((function(){r(s.root),console.log(s.token)}),[i]),Y("div",{className:P.a.sidebar,style:{scrollbarWidth:"none"}},Y("div",{className:P.a.profile},Y("img",{src:"/images/users/avatar-1.jpg",className:P.a.profilepic}),Y("div",{className:P.a.profilestatus},Y("p",{className:P.a.username}," ",i?"".concat(i.firstname," ").concat(i.lastname):""," "),Y("span",{color:"success",className:P.a.badgestatus}," ")," ",Y("span",null,"Online"))),Y(u.a,{href:"/",passHref:!0},Y(A.a,{className:P.a.sidebarbutton},Y(N.a,{size:19,className:P.a.sidebarIcon}),"Dashboard",Y(v.a,{size:20,className:P.a.sidebarIcon2}))),Y(u.a,{href:"/dashboard/chat",passHref:!0},Y(A.a,{id:"toggler",className:P.a.sidebarbutton},Y(g.a,{size:19,className:P.a.sidebarIcon}),"Chat",Y("div",{className:P.a.sidebarIcon2},o>=0&&Y(k.a,{color:"success",className:P.a.sidebadge,pill:!0},"2"),Y(v.a,{size:20,className:P.a.sidebarIcon2})))),Y(u.a,{href:"/dashboard/profile",passHref:!0},Y(A.a,{id:"toggler",className:P.a.sidebarbutton},Y(g.a,{size:19,className:P.a.sidebarIcon}),"Profile",Y("div",{className:P.a.sidebarIcon2},Y(v.a,{size:20,className:P.a.sidebarIcon2})))),Y(u.a,{href:"/dashboard/notification",passHref:!0},Y(A.a,{className:P.a.sidebarbutton},Y(w.a,{size:19,className:P.a.sidebarIcon}),"Notifications",Y("div",{className:P.a.sidebarIcon2},Y(v.a,{size:20,className:P.a.sidebarIcon2})))),Y(A.a,{id:"toggler",className:P.a.sidebarbutton,onClick:function(){return B(!x)}},Y(z.a,{size:19,className:P.a.sidebarIcon}),"Users",Y("div",{className:P.a.sidebarIcon2},Y(x?I.a:v.a,{size:20,className:P.a.sidebarIcon2}))),Y(R.a,{isOpen:x},Y(S.a,null,Y(u.a,{href:"/dashboard/adduser",passHref:!0},Y(V.a,{className:P.a.listlist},"Add User")),Y(u.a,{href:"/dashboard/userslist",passHref:!0},Y(V.a,{className:P.a.listlist},"Users List")))),Y(A.a,{id:"toggler",className:P.a.sidebarbutton,onClick:function(){return O(!f)}},Y(j.a,{size:19,className:P.a.sidebarIcon}),"Appointments",Y("div",{className:P.a.sidebarIcon2},m>=0&&Y(k.a,{color:"danger",className:P.a.sidebadge,pill:!0},"2"),Y(f?I.a:v.a,{size:20,className:P.a.sidebarIcon2}))),Y(R.a,{isOpen:f},Y(S.a,null,Y(u.a,{href:"/dashboard/appointments",passHref:!0},Y(V.a,{className:P.a.listlist},"Pending Appointments")),Y(u.a,{href:"/dashboard/appointments-all",passHref:!0},Y(V.a,{className:P.a.listlist},"All Appointments")),Y(u.a,{href:"/dashboard/appointments-history",passHref:!0},Y(V.a,{className:P.a.listlist},"Appointments history")))),Y(A.a,{id:"toggler",className:P.a.sidebarbutton,onClick:function(){return y(!E)}},Y(H,{size:19,className:P.a.sidebarIcon}),"Practice",Y("div",{className:P.a.sidebarIcon2},Y(E?I.a:v.a,{size:20,className:P.a.sidebarIcon2}))),Y(R.a,{isOpen:E},Y(S.a,null,Y(u.a,{href:"/dashboard/addgroup",passHref:!0},Y(V.a,{className:P.a.listlist},"Add Practice")),Y(u.a,{href:"/dashboard/grouplist",passHref:!0},Y(V.a,{className:P.a.listlist},"All Practice List")))),Y(A.a,{className:P.a.sidebarbutton,onClick:function(){e(C.n(a))}},Y(z.a,{size:19,className:P.a.sidebarIcon}),"Logout"))},x=n.a.createElement;function B(a){var e=a.children,s=(Object(l.d)(),Object(t.useState)(!1));s[0],s[1];return x(n.a.Fragment,null,x(d.a,null,x("meta",{charSet:"utf-8"}),x("title",null,"PractX Web Application"),x("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),x("meta",{content:"PractX Web Platform",name:"description"}),x("meta",{content:"ReverSoftwares",name:"author"}),x("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),x(f.a,null),x(i.a,{fluid:!0,className:p.a.container},x(r.a,{sm:"2",noGutters:!0},x(c.a,{sm:"2"},x(q,null)),x(c.a,{sm:"10",style:{paddingTop:"9vh"}},x("main",{className:p.a.maincontent},e)))))}},XvRY:function(a,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return o}));var t=s("q1tI"),n=s.n(t),i=(s("8Kt/"),s("ok1R")),r=s("rhny"),c=(s("KYPV"),s("UGp+"),s("YFqc"),s("Vj+5")),l=(s("8Oii"),n.a.createElement);function o(){return l(c.a,null,l(n.a.Fragment,null,l(i.a,{noGutters:!0,sm:"3"},l(r.a,{sm:"5"},l("h4",{className:"text-light"},"Notifications")),l(r.a,{sm:"7"},l("div",null)))))}}},[["CoR0",0,1,2,3,4,5,6]]]);
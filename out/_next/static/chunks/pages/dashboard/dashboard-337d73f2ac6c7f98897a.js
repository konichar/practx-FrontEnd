_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"Vj+5":function(a,e,s){"use strict";s.d(e,"a",(function(){return C}));var t=s("q1tI"),n=s.n(t),i=s("1Yj4"),c=s("ok1R"),r=s("rhny"),l=s("/MKj"),o=(s("KYPV"),s("UGp+"),s("8Kt/")),d=s.n(o),m=s("YFqc"),u=s.n(m),b=s("VENR"),p=s.n(b),f=s("eenl"),N=s("nOHt"),h=s("1luN"),g=s("YARc"),I=s("3IDX"),v=s("FZJb"),w=s("dq96"),O=s("791q"),j=s("BkMj"),z=s("pVnL"),S=s.n(z),H=s("Bop7"),A=t.forwardRef((function(a,e){return t.createElement(H.a,S()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),t.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}))}));A.displayName="Group";var E=s("sOKU"),P=s("2Te1"),_=s("nsn4"),k=s("K7vz"),V=s("ujA5"),R=s("4kQB"),T=s.n(R),y=s("Cwtw"),U=n.a.createElement,Y=function(){var a=Object(N.useRouter)(),e=Object(l.d)(),s=Object(l.e)((function(a){return a.auth.user})),n=Object(t.useState)({}),i=n[0],c=n[1],r=Object(t.useState)(0),o=r[0],d=(r[1],Object(t.useState)(0)),m=d[0],b=(d[1],Object(t.useState)(!1)),p=(b[0],b[1],Object(t.useState)(!1)),f=p[0],z=p[1],S=Object(t.useState)(!1),H=S[0],R=S[1],Y=Object(t.useState)(!1),q=Y[0],C=Y[1],K=Object(t.useState)(!1);K[0],K[1];return Object(t.useEffect)((function(){c(s.root),console.log(s.token)}),[i]),U("div",{className:T.a.sidebar,style:{scrollbarWidth:"none"}},U("div",{className:T.a.profile},U("img",{src:"/images/users/avatar-1.jpg",className:T.a.profilepic}),U("div",{className:T.a.profilestatus},U("p",{className:T.a.username}," ",i?"".concat(i.firstname," ").concat(i.lastname):""," "),U("span",{color:"success",className:T.a.badgestatus}," ")," ",U("span",null,"Online"))),U(u.a,{href:"/",passHref:!0},U(E.a,{className:T.a.sidebarbutton},U(h.a,{size:19,className:T.a.sidebarIcon}),"Dashboard",U(g.a,{size:20,className:T.a.sidebarIcon2}))),U(u.a,{href:"/dashboard/chat",passHref:!0},U(E.a,{id:"toggler",className:T.a.sidebarbutton},U(I.a,{size:19,className:T.a.sidebarIcon}),"Chat",U("div",{className:T.a.sidebarIcon2},o>=0&&U(P.a,{color:"success",className:T.a.sidebadge,pill:!0},"2"),U(g.a,{size:20,className:T.a.sidebarIcon2})))),U(u.a,{href:"/dashboard/profile",passHref:!0},U(E.a,{id:"toggler",className:T.a.sidebarbutton},U(I.a,{size:19,className:T.a.sidebarIcon}),"Profile",U("div",{className:T.a.sidebarIcon2},U(g.a,{size:20,className:T.a.sidebarIcon2})))),U(u.a,{href:"/dashboard/notification",passHref:!0},U(E.a,{className:T.a.sidebarbutton},U(v.a,{size:19,className:T.a.sidebarIcon}),"Notifications",U("div",{className:T.a.sidebarIcon2},U(g.a,{size:20,className:T.a.sidebarIcon2})))),U(E.a,{id:"toggler",className:T.a.sidebarbutton,onClick:function(){return C(!q)}},U(w.a,{size:19,className:T.a.sidebarIcon}),"Users",U("div",{className:T.a.sidebarIcon2},U(q?O.a:g.a,{size:20,className:T.a.sidebarIcon2}))),U(_.a,{isOpen:q},U(k.a,null,U(u.a,{href:"/dashboard/adduser",passHref:!0},U(V.a,{className:T.a.listlist},"Add User")),U(u.a,{href:"/dashboard/userslist",passHref:!0},U(V.a,{className:T.a.listlist},"Users List")))),U(E.a,{id:"toggler",className:T.a.sidebarbutton,onClick:function(){return z(!f)}},U(j.a,{size:19,className:T.a.sidebarIcon}),"Appointments",U("div",{className:T.a.sidebarIcon2},m>=0&&U(P.a,{color:"danger",className:T.a.sidebadge,pill:!0},"2"),U(f?O.a:g.a,{size:20,className:T.a.sidebarIcon2}))),U(_.a,{isOpen:f},U(k.a,null,U(u.a,{href:"/dashboard/appointments",passHref:!0},U(V.a,{className:T.a.listlist},"Pending Appointments")),U(u.a,{href:"/dashboard/appointments-all",passHref:!0},U(V.a,{className:T.a.listlist},"All Appointments")),U(u.a,{href:"/dashboard/appointments-history",passHref:!0},U(V.a,{className:T.a.listlist},"Appointments history")))),U(E.a,{id:"toggler",className:T.a.sidebarbutton,onClick:function(){return R(!H)}},U(A,{size:19,className:T.a.sidebarIcon}),"Practice",U("div",{className:T.a.sidebarIcon2},U(H?O.a:g.a,{size:20,className:T.a.sidebarIcon2}))),U(_.a,{isOpen:H},U(k.a,null,U(u.a,{href:"/dashboard/addgroup",passHref:!0},U(V.a,{className:T.a.listlist},"Add Practice")),U(u.a,{href:"/dashboard/grouplist",passHref:!0},U(V.a,{className:T.a.listlist},"All Practice List")))),U(E.a,{className:T.a.sidebarbutton,onClick:function(){e(y.n(a))}},U(w.a,{size:19,className:T.a.sidebarIcon}),"Logout"))},q=n.a.createElement;function C(a){var e=a.children,s=(Object(l.d)(),Object(t.useState)(!1));s[0],s[1];return q(n.a.Fragment,null,q(d.a,null,q("meta",{charSet:"utf-8"}),q("title",null,"PractX Web Application"),q("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),q("meta",{content:"PractX Web Platform",name:"description"}),q("meta",{content:"ReverSoftwares",name:"author"}),q("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),q(f.a,null),q(i.a,{fluid:!0,className:p.a.container},q(c.a,{sm:"2",noGutters:!0},q(r.a,{sm:"2"},q(Y,null)),q(r.a,{sm:"10",style:{paddingTop:"9vh"}},q("main",{className:p.a.maincontent},e)))))}},qGMv:function(a,e,s){"use strict";s.r(e),s.d(e,"__N_SSG",(function(){return p}));var t=s("q1tI"),n=s.n(t),i=(s("8Kt/"),s("/MKj"),s("nOHt"),s("ok1R")),c=s("rhny"),r=(s("KYPV"),s("UGp+"),s("YFqc"),s("Vj+5")),l=s("8Oii"),o=s("HsDA"),d=s("1c+E"),m=s("3s6Q"),u=s("YUj/"),b=n.a.createElement;var p=!0;e.default=function(a){return b(r.a,null,b(n.a.Fragment,null,b(i.a,null,b(c.a,null,b(l.a,{title:"Dashboard",crumb:["Home","Dashboard"]}))),b(i.a,{className:"mt-3"},b(c.a,{sm:"7"},b(u.a,{headingText:"HOSPITAL SURVEY"},b(d.a,null))),b(c.a,{sm:"5"},b(u.a,{headingText:"HOSPITAL SURVEY"},b(m.a,null)))),b(i.a,{className:"mt-3"},b(c.a,null,b(u.a,{headingText:"Patients List",buttonText:"Add Patient"},b(o.a,null))))))}},sIRX:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/dashboard",function(){return s("qGMv")}])}},[["sIRX",0,1,7,9,2,3,4,5,6,10]]]);
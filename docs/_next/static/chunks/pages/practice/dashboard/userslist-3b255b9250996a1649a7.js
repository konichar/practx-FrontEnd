_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{"+WMa":function(a,e,s){a.exports={heading:"Titlebar_heading__9pjH9",breadcrumb:"Titlebar_breadcrumb__2lBzf",breadcrumbitem:"Titlebar_breadcrumbitem__1zT-c"}},"/kxI":function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),r=s("q1tI"),c=s.n(r),i=s("17x9"),l=s.n(i),o=s("TSYQ"),u=s.n(o),d=s("33Jr"),m={tag:d.h,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(a){var e=a.className,s=a.cssModule,r=a.innerRef,i=a.tag,l=Object(n.a)(a,["className","cssModule","innerRef","tag"]),o=Object(d.e)(u()(e,"card-body"),s);return c.a.createElement(i,Object(t.a)({},l,{className:o,ref:r}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},"1oen":function(a,e,s){"use strict";s.d(e,"a",(function(){return H}));var t=s("q1tI"),n=s.n(t),r=s("1Yj4"),c=s("ok1R"),i=s("rhny"),l=s("/MKj"),o=(s("KYPV"),s("UGp+"),s("8Kt/")),u=s.n(o),d=s("YFqc"),m=s.n(d),p=s("VENR"),b=s.n(p),f=s("eenl"),N=s("nOHt"),h=s("1luN"),g=s("YARc"),v=s("3IDX"),j=s("FZJb"),w=s("dq96"),O=s("791q"),I=s("BkMj"),z=s("sOKU"),y=s("2Te1"),E=s("nsn4"),x=s("K7vz"),_=s("ujA5"),M=s("4kQB"),k=s.n(M),R=s("Cwtw"),T=n.a.createElement,S=function(){var a=Object(N.useRouter)(),e=Object(l.d)(),s=Object(l.e)((function(a){return a.auth.user})),n=Object(t.useState)({}),r=n[0],c=n[1],i=Object(t.useState)(),o=(i[0],i[1]),u=Object(t.useState)(0),d=u[0],p=(u[1],Object(t.useState)(0)),b=p[0],f=(p[1],Object(t.useState)(!1)),M=(f[0],f[1],Object(t.useState)(!1)),S=M[0],A=M[1],H=Object(t.useState)(!1),q=(H[0],H[1],Object(t.useState)(!1)),C=q[0],P=q[1],V=Object(t.useState)(!1);V[0],V[1];return Object(t.useEffect)((function(){c(s.practice),o(s.token)}),[r]),T("div",{className:k.a.sidebar,style:{scrollbarWidth:"none"}},T("div",{className:k.a.profile},T("img",{src:"/images/users/avatar-1.jpg",className:k.a.profilepic}),T("div",{className:k.a.profilestatus},T("p",{className:k.a.username}," ",r?"".concat(r.practiceName):""," "),T("span",{color:"success",className:k.a.badgestatus}," ")," ",T("span",null,"Online"))),T(m.a,{href:"/practice/dashboard/dashboard",passHref:!0},T(z.a,{className:k.a.sidebarbutton},T(h.a,{size:19,className:k.a.sidebarIcon}),"Dashboard",T(g.a,{size:20,className:k.a.sidebarIcon2}))),T(m.a,{href:"/practice/dashboard/chat",passHref:!0},T(z.a,{id:"toggler",className:k.a.sidebarbutton},T(v.a,{size:19,className:k.a.sidebarIcon}),"Chat",T("div",{className:k.a.sidebarIcon2},d>=0&&T(y.a,{color:"success",className:k.a.sidebadge,pill:!0},"2"),T(g.a,{size:20,className:k.a.sidebarIcon2})))),T(m.a,{href:"/practice/dashboard/profile",passHref:!0},T(z.a,{id:"toggler",className:k.a.sidebarbutton},T(v.a,{size:19,className:k.a.sidebarIcon}),"Profile",T("div",{className:k.a.sidebarIcon2},T(g.a,{size:20,className:k.a.sidebarIcon2})))),T(m.a,{href:"/practice/dashboard/notification",passHref:!0},T(z.a,{className:k.a.sidebarbutton},T(j.a,{size:19,className:k.a.sidebarIcon}),"Notifications",T("div",{className:k.a.sidebarIcon2},T(g.a,{size:20,className:k.a.sidebarIcon2})))),T(z.a,{id:"toggler",className:k.a.sidebarbutton,onClick:function(){return P(!C)}},T(w.a,{size:19,className:k.a.sidebarIcon}),"Users",T("div",{className:k.a.sidebarIcon2},T(C?O.a:g.a,{size:20,className:k.a.sidebarIcon2}))),T(E.a,{isOpen:C},T(x.a,null,T(m.a,{href:"/practice/dashboard/adduser",passHref:!0},T(_.a,{className:k.a.listlist},"Add User")),T(m.a,{href:"/practice/dashboard/userslist",passHref:!0},T(_.a,{className:k.a.listlist},"Users List")))),T(z.a,{id:"toggler",className:k.a.sidebarbutton,onClick:function(){return A(!S)}},T(I.a,{size:19,className:k.a.sidebarIcon}),"Appointments",T("div",{className:k.a.sidebarIcon2},b>=0&&T(y.a,{color:"danger",className:k.a.sidebadge,pill:!0},"2"),T(S?O.a:g.a,{size:20,className:k.a.sidebarIcon2}))),T(E.a,{isOpen:S},T(x.a,null,T(m.a,{href:"/practice/dashboard/appointments",passHref:!0},T(_.a,{className:k.a.listlist},"Pending Appointments")),T(m.a,{href:"/practice/dashboard/appointments-all",passHref:!0},T(_.a,{className:k.a.listlist},"All Appointments")),T(m.a,{href:"/practice/dashboard/appointments-history",passHref:!0},T(_.a,{className:k.a.listlist},"Appointments history")))),T(z.a,{className:k.a.sidebarbutton,onClick:function(){e(R.m(a))}},T(w.a,{size:19,className:k.a.sidebarIcon}),"Logout"))},A=n.a.createElement;function H(a){var e=a.children,s=(Object(l.d)(),Object(t.useState)(!1));s[0],s[1];return A(n.a.Fragment,null,A(u.a,null,A("meta",{charSet:"utf-8"}),A("title",null,"PractX Web Application"),A("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),A("meta",{content:"PractX Web Platform",name:"description"}),A("meta",{content:"ReverSoftwares",name:"author"}),A("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),A(f.a,null),A(r.a,{fluid:!0,className:b.a.container},A(c.a,{sm:"2",noGutters:!0},A(i.a,{sm:"2"},A(S,null)),A(i.a,{sm:"10",style:{paddingTop:"12vh"}},A("main",{className:b.a.maincontent},e)))))}},"8Oii":function(a,e,s){"use strict";var t=s("q1tI"),n=s.n(t),r=s("pVnL"),c=s.n(r),i=s("Bop7"),l=t.forwardRef((function(a,e){return t.createElement(i.a,c()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),t.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}));l.displayName="Home";var o=s("YARc"),u=s("ok1R"),d=s("rhny"),m=s("YFqc"),p=s.n(m),b=s("+WMa"),f=s.n(b),N=n.a.createElement;e.a=function(a){var e=a.title,s=a.crumb;return N(u.a,null,N(d.a,{sm:"12",className:f.a.heading},N("span",null," ",e,"  "),N("div",{className:f.a.breadcrumb},s.map((function(a){return N("div",{className:f.a.breadcrumbitem},"Home"===a?N(l,{size:14,style:{marginBottom:"3px"}}):N(o.a,{size:16}),N(p.a,{href:"/"},N("a",null,a)))})))))}},9823:function(a,e,s){"use strict";s.d(e,"a",(function(){return m}));var t=s("q1tI"),n=s.n(t),r=s("BLzl"),c=s("/kxI"),i=s("ChEw"),l=s("ezmu"),o=s("sOKU"),u=s("ZBE8"),d=n.a.createElement;function m(a){var e=a.practice,s=a.approve;return d(r.a,{style:{backgroundColor:"#353c48",justifyContent:"center",margin:"10px"}},d(c.a,null,d(i.a,{className:"text-center"},d("img",{src:"/images/users/avatar-1.jpg",style:{width:"100px",borderRadius:"50%"}})),d(l.a,{className:"text-center"},d("h4",{className:"text-primary"},e.practiceName),d("p",null," ",e.specialty),d("address",null," ",e.address," "),d(u.a,{size:16,color:"white"})," ",d("span",null," ",e.mobileNo," ")," ",d("br",null),d("p",{className:"mt-2"},"approved"===e.approvalStatus?d(o.a,{color:"success",danger:!0,rounded:!0}," Approved "):d(o.a,{color:"info",danger:!0,rounded:!0,onClick:function(){return s(e.id)}}," Click to Approve Practice ")),d(o.a,{color:"danger",danger:!0,rounded:!0,onClick:function(){return s(e.id)}},"Reject"))))}},BLzl:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),r=s("q1tI"),c=s.n(r),i=s("17x9"),l=s.n(i),o=s("TSYQ"),u=s.n(o),d=s("33Jr"),m={tag:d.h,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(a){var e=a.className,s=a.cssModule,r=a.color,i=a.body,l=a.inverse,o=a.outline,m=a.tag,p=a.innerRef,b=Object(n.a)(a,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.e)(u()(e,"card",!!l&&"text-white",!!i&&"card-body",!!r&&(o?"border":"bg")+"-"+r),s);return c.a.createElement(m,Object(t.a)({},b,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},ChEw:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),r=s("q1tI"),c=s.n(r),i=s("17x9"),l=s.n(i),o=s("TSYQ"),u=s.n(o),d=s("33Jr"),m={tag:d.h,className:l.a.string,cssModule:l.a.object},p=function(a){var e=a.className,s=a.cssModule,r=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),l=Object(d.e)(u()(e,"card-title"),s);return c.a.createElement(r,Object(t.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},ZBE8:function(a,e,s){"use strict";s.d(e,"a",(function(){return i}));var t=s("pVnL"),n=s.n(t),r=s("q1tI"),c=s("Bop7"),i=r.forwardRef((function(a,e){return r.createElement(c.a,n()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}))}));i.displayName="Phone"},acvI:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice/dashboard/userslist",function(){return s("mZvf")}])},ezmu:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),r=s("q1tI"),c=s.n(r),i=s("17x9"),l=s.n(i),o=s("TSYQ"),u=s.n(o),d=s("33Jr"),m={tag:d.h,className:l.a.string,cssModule:l.a.object},p=function(a){var e=a.className,s=a.cssModule,r=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),l=Object(d.e)(u()(e,"card-text"),s);return c.a.createElement(r,Object(t.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"p"},e.a=p},mZvf:function(a,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return d}));var t=s("q1tI"),n=s.n(t),r=(s("8Kt/"),s("YFqc"),s("ok1R")),c=s("rhny"),i=s("1oen"),l=s("8Oii"),o=s("9823"),u=n.a.createElement;function d(){return u(i.a,null,u(n.a.Fragment,null,u(r.a,null,u(c.a,null,u(l.a,{title:"Users List",crumb:["Home","Users","Users list"]}))),u(r.a,{className:"mt-3",sm:"4"},u(o.a,null),u(o.a,null),u(o.a,null),u(o.a,null),u(o.a,null),u(o.a,null),u(o.a,null),u(o.a,null))))}}},[["acvI",0,1,2,3,4,5,6]]]);
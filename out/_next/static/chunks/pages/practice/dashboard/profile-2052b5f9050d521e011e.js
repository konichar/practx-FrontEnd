_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"+WMa":function(a,e,s){a.exports={heading:"Titlebar_heading__9pjH9",breadcrumb:"Titlebar_breadcrumb__2lBzf",breadcrumbitem:"Titlebar_breadcrumbitem__1zT-c"}},"/kxI":function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),l=s("q1tI"),r=s.n(l),i=s("17x9"),o=s.n(i),c=s("TSYQ"),u=s.n(c),d=s("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(a){var e=a.className,s=a.cssModule,l=a.innerRef,i=a.tag,o=Object(n.a)(a,["className","cssModule","innerRef","tag"]),c=Object(d.e)(u()(e,"card-body"),s);return r.a.createElement(i,Object(t.a)({},o,{className:c,ref:l}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},"1oen":function(a,e,s){"use strict";s.d(e,"a",(function(){return B}));var t=s("q1tI"),n=s.n(t),l=s("1Yj4"),r=s("ok1R"),i=s("rhny"),o=s("/MKj"),c=(s("KYPV"),s("UGp+"),s("8Kt/")),u=s.n(c),d=s("YFqc"),m=s.n(d),p=s("VENR"),b=s.n(p),f=s("eenl"),h=s("nOHt"),g=s("1luN"),N=s("YARc"),v=s("3IDX"),w=s("FZJb"),j=s("dq96"),O=s("791q"),y=s("BkMj"),z=s("sOKU"),_=s("2Te1"),x=s("nsn4"),I=s("K7vz"),E=s("ujA5"),M=s("4kQB"),T=s.n(M),k=s("Cwtw"),R=n.a.createElement,A=function(){var a=Object(h.useRouter)(),e=Object(o.d)(),s=Object(o.e)((function(a){return a.auth.user})),n=Object(t.useState)({}),l=n[0],r=n[1],i=Object(t.useState)(),c=(i[0],i[1]),u=Object(t.useState)(0),d=u[0],p=(u[1],Object(t.useState)(0)),b=p[0],f=(p[1],Object(t.useState)(!1)),M=(f[0],f[1],Object(t.useState)(!1)),A=M[0],P=M[1],B=Object(t.useState)(!1),C=(B[0],B[1],Object(t.useState)(!1)),S=C[0],H=C[1],V=Object(t.useState)(!1);V[0],V[1];return Object(t.useEffect)((function(){r(s.practice),c(s.token)}),[l]),R("div",{className:T.a.sidebar,style:{scrollbarWidth:"none"}},R("div",{className:T.a.profile},R("img",{src:"/images/users/avatar-1.jpg",className:T.a.profilepic}),R("div",{className:T.a.profilestatus},R("p",{className:T.a.username}," ",l?"".concat(l.practiceName):""," "),R("span",{color:"success",className:T.a.badgestatus}," ")," ",R("span",null,"Online"))),R(m.a,{href:"/practice/dashboard/dashboard",passHref:!0},R(z.a,{className:T.a.sidebarbutton},R(g.a,{size:19,className:T.a.sidebarIcon}),"Dashboard",R(N.a,{size:20,className:T.a.sidebarIcon2}))),R(m.a,{href:"/practice/dashboard/chat",passHref:!0},R(z.a,{id:"toggler",className:T.a.sidebarbutton},R(v.a,{size:19,className:T.a.sidebarIcon}),"Chat",R("div",{className:T.a.sidebarIcon2},d>=0&&R(_.a,{color:"success",className:T.a.sidebadge,pill:!0},"2"),R(N.a,{size:20,className:T.a.sidebarIcon2})))),R(m.a,{href:"/practice/dashboard/profile",passHref:!0},R(z.a,{id:"toggler",className:T.a.sidebarbutton},R(v.a,{size:19,className:T.a.sidebarIcon}),"Profile",R("div",{className:T.a.sidebarIcon2},R(N.a,{size:20,className:T.a.sidebarIcon2})))),R(m.a,{href:"/practice/dashboard/notification",passHref:!0},R(z.a,{className:T.a.sidebarbutton},R(w.a,{size:19,className:T.a.sidebarIcon}),"Notifications",R("div",{className:T.a.sidebarIcon2},R(N.a,{size:20,className:T.a.sidebarIcon2})))),R(z.a,{id:"toggler",className:T.a.sidebarbutton,onClick:function(){return H(!S)}},R(j.a,{size:19,className:T.a.sidebarIcon}),"Users",R("div",{className:T.a.sidebarIcon2},R(S?O.a:N.a,{size:20,className:T.a.sidebarIcon2}))),R(x.a,{isOpen:S},R(I.a,null,R(m.a,{href:"/practice/dashboard/adduser",passHref:!0},R(E.a,{className:T.a.listlist},"Add User")),R(m.a,{href:"/practice/dashboard/userslist",passHref:!0},R(E.a,{className:T.a.listlist},"Users List")))),R(z.a,{id:"toggler",className:T.a.sidebarbutton,onClick:function(){return P(!A)}},R(y.a,{size:19,className:T.a.sidebarIcon}),"Appointments",R("div",{className:T.a.sidebarIcon2},b>=0&&R(_.a,{color:"danger",className:T.a.sidebadge,pill:!0},"2"),R(A?O.a:N.a,{size:20,className:T.a.sidebarIcon2}))),R(x.a,{isOpen:A},R(I.a,null,R(m.a,{href:"/practice/dashboard/appointments",passHref:!0},R(E.a,{className:T.a.listlist},"Pending Appointments")),R(m.a,{href:"/practice/dashboard/appointments-all",passHref:!0},R(E.a,{className:T.a.listlist},"All Appointments")),R(m.a,{href:"/practice/dashboard/appointments-history",passHref:!0},R(E.a,{className:T.a.listlist},"Appointments history")))),R(z.a,{className:T.a.sidebarbutton,onClick:function(){e(k.m(a))}},R(j.a,{size:19,className:T.a.sidebarIcon}),"Logout"))},P=n.a.createElement;function B(a){var e=a.children,s=(Object(o.d)(),Object(t.useState)(!1));s[0],s[1];return P(n.a.Fragment,null,P(u.a,null,P("meta",{charSet:"utf-8"}),P("title",null,"PractX Web Application"),P("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),P("meta",{content:"PractX Web Platform",name:"description"}),P("meta",{content:"ReverSoftwares",name:"author"}),P("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),P(f.a,null),P(l.a,{fluid:!0,className:b.a.container},P(r.a,{sm:"2",noGutters:!0},P(i.a,{sm:"2"},P(A,null)),P(i.a,{sm:"10",style:{paddingTop:"12vh"}},P("main",{className:b.a.maincontent},e)))))}},"8Oii":function(a,e,s){"use strict";var t=s("q1tI"),n=s.n(t),l=s("pVnL"),r=s.n(l),i=s("Bop7"),o=t.forwardRef((function(a,e){return t.createElement(i.a,r()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),t.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),t.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}));o.displayName="Home";var c=s("YARc"),u=s("ok1R"),d=s("rhny"),m=s("YFqc"),p=s.n(m),b=s("+WMa"),f=s.n(b),h=n.a.createElement;e.a=function(a){var e=a.title,s=a.crumb;return h(u.a,null,h(d.a,{sm:"12",className:f.a.heading},h("span",null," ",e,"  "),h("div",{className:f.a.breadcrumb},s.map((function(a){return h("div",{className:f.a.breadcrumbitem},"Home"===a?h(o,{size:14,style:{marginBottom:"3px"}}):h(c.a,{size:16}),h(p.a,{href:"/"},h("a",null,a)))})))))}},BLzl:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),l=s("q1tI"),r=s.n(l),i=s("17x9"),o=s.n(i),c=s("TSYQ"),u=s.n(c),d=s("33Jr"),m={tag:d.h,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(a){var e=a.className,s=a.cssModule,l=a.color,i=a.body,o=a.inverse,c=a.outline,m=a.tag,p=a.innerRef,b=Object(n.a)(a,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.e)(u()(e,"card",!!o&&"text-white",!!i&&"card-body",!!l&&(c?"border":"bg")+"-"+l),s);return r.a.createElement(m,Object(t.a)({},b,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},ChEw:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),l=s("q1tI"),r=s.n(l),i=s("17x9"),o=s.n(i),c=s("TSYQ"),u=s.n(c),d=s("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object},p=function(a){var e=a.className,s=a.cssModule,l=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),o=Object(d.e)(u()(e,"card-title"),s);return r.a.createElement(l,Object(t.a)({},i,{className:o}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},ZBE8:function(a,e,s){"use strict";s.d(e,"a",(function(){return i}));var t=s("pVnL"),n=s.n(t),l=s("q1tI"),r=s("Bop7"),i=l.forwardRef((function(a,e){return l.createElement(r.a,n()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),l.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),l.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}))}));i.displayName="Phone"},afej:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),l=s("q1tI"),r=s.n(l),i=s("17x9"),o=s.n(i),c=s("TSYQ"),u=s.n(c),d=s("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object},p=function(a){var e=a.className,s=a.cssModule,l=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),o=Object(d.e)(u()(e,"card-header"),s);return r.a.createElement(l,Object(t.a)({},i,{className:o}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},ezmu:function(a,e,s){"use strict";var t=s("wx14"),n=s("zLVn"),l=s("q1tI"),r=s.n(l),i=s("17x9"),o=s.n(i),c=s("TSYQ"),u=s.n(c),d=s("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object},p=function(a){var e=a.className,s=a.cssModule,l=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),o=Object(d.e)(u()(e,"card-text"),s);return r.a.createElement(l,Object(t.a)({},i,{className:o}))};p.propTypes=m,p.defaultProps={tag:"p"},e.a=p},fYe3:function(a,e,s){a.exports={heading:"profile_heading__1GACR",profileimage:"profile_profileimage__3gowS",detials:"profile_detials__3zDv7",listlist:"profile_listlist__32Ezv",cardTopBorder:"profile_cardTopBorder__1bAKL"}},iRJw:function(a,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return j}));var t=s("q1tI"),n=s.n(t),l=(s("8Kt/"),s("ok1R")),r=s("rhny"),i=s("BLzl"),o=s("/kxI"),c=s("ChEw"),u=s("ezmu"),d=s("K7vz"),m=s("ujA5"),p=s("sOKU"),b=s("afej"),f=(s("KYPV"),s("UGp+"),s("YFqc"),s("fYe3")),h=s.n(f),g=s("ZBE8"),N=s("1oen"),v=s("8Oii"),w=n.a.createElement;function j(){return w(N.a,null,w(n.a.Fragment,null,w(l.a,null,w(r.a,null,w(v.a,{title:"Profile",crumb:["Home","Profile"]}))),w(l.a,{className:"mt-3"},w(r.a,{md:"4"},w(i.a,{style:{backgroundColor:"#353c48",justifyContent:"center",margin:"10px"},className:h.a.cardTopBorder},w(o.a,null,w(c.a,{className:"text-center"},w("img",{src:"/images/users/avatar-1.jpg",className:h.a.profileimage})),w(u.a,{className:"text-center"},w("h4",{className:"text-primary"},"Dr Karen Patel"),w("span",null," Cardiology"),w(d.a,null,w(m.a,{className:h.a.listlist},w("span",null,"Followers")," ",w("span",null,"19 milli")),w(m.a,{className:h.a.listlist},w("span",null,"Following")," ",w("span",null,"no one")),w(m.a,{className:h.a.listlist},w("span",null,"Friends")," ",w("span",null,"7 milli"))),w(p.a,{color:"danger",size:"sm"}," Read More "),w(p.a,{color:"success",size:"sm",className:"ml-2"}," Read More ")))),w(i.a,{style:{backgroundColor:"#353c48",margin:"10px"},className:h.a.cardTopBorder},w(b.a,{style:{backgroundColor:"#353c48",margin:"10px",borderBottomWidth:"1px",borderBottomColor:"rgba( 255, 255, 255, 0.1)"}},"ABOUT ME"),w(o.a,null,w(u.a,null,"I am the best person i know in this whole world, No body is better than me, i am the best of the best in the entire univers. Period")))),w(r.a,{md:"8",className:h.a.detials},w(i.a,{style:{backgroundColor:"#353c48",justifyContent:"center",margin:"10px"}},w(b.a,{className:h.a.heading},"Details"),w(o.a,null,w(l.a,null,w(r.a,null,w(c.a,null,"Full Name"),w(u.a,null,"Dr Karen Palma")),w(r.a,null,w(c.a,null,"Mobile"),w(u.a,null,w(g.a,{size:16,color:"white"})," (123) 76572")),w(r.a,null,w(c.a,null,"Email"),w(u.a,null,"karn@gmail.com")),w(r.a,null,w(c.a,null,"Location"),w(u.a,null,"Nigeria"))),w("hr",null),w(u.a,null,w("p",null,"It is also used to identify any abnormal tissue in the uterine cavity, such as uterine fibroids, endometrial polyps, scar tissue, or retained pregnancy tissue, the presence of which may be suggested history or previous tests such as a hysterosalpingogram (x-ray of the uterus and tubes). ",w("br",null),w("br",null),"This procedure is done in the office here at IVF New England, and is done by one of the physicians.",w("br",null),"Approximately an hour before the exam we suggest that you take Ibuprofen 600 mg (Motrin/Advil) or a similar"),w("br",null),w(c.a,null,"Education ",w("hr",null)),w("ul",null,w("li",null,"Option that is option and option"),w("li",null,"Option that is option and option"),w("li",null,"Option that is option and option")),w(c.a,null,"Experience ",w("hr",null)),w("ul",null,w("li",null,"Option that is option and option"),w("li",null,"Option that is option and option"),w("li",null,"Option that is option and option")))))))))}},ow3l:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice/dashboard/profile",function(){return s("iRJw")}])}},[["ow3l",0,1,2,3,4,5,6]]]);
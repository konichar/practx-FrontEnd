_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"+WMa":function(a,e,t){a.exports={heading:"Titlebar_heading__9pjH9",breadcrumb:"Titlebar_breadcrumb__2lBzf",breadcrumbitem:"Titlebar_breadcrumbitem__1zT-c"}},"/kxI":function(a,e,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),i=t("17x9"),o=t.n(i),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(a){var e=a.className,t=a.cssModule,r=a.innerRef,i=a.tag,o=Object(n.a)(a,["className","cssModule","innerRef","tag"]),l=Object(d.e)(u()(e,"card-body"),t);return c.a.createElement(i,Object(s.a)({},o,{className:l,ref:r}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},"8Oii":function(a,e,t){"use strict";var s=t("q1tI"),n=t.n(s),r=t("pVnL"),c=t.n(r),i=t("Bop7"),o=s.forwardRef((function(a,e){return s.createElement(i.a,c()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),s.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),s.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}));o.displayName="Home";var l=t("YARc"),u=t("ok1R"),d=t("rhny"),m=t("YFqc"),p=t.n(m),b=t("+WMa"),f=t.n(b),N=n.a.createElement;e.a=function(a){var e=a.title,t=a.crumb;return N(u.a,null,N(d.a,{sm:"12",className:f.a.heading},N("span",null," ",e,"  "),N("div",{className:f.a.breadcrumb},t.map((function(a){return N("div",{className:f.a.breadcrumbitem},"Home"===a?N(o,{size:14,style:{marginBottom:"3px"}}):N(l.a,{size:16}),N(p.a,{href:"/"},N("a",null,a)))})))))}},9823:function(a,e,t){"use strict";t.d(e,"a",(function(){return m}));var s=t("q1tI"),n=t.n(s),r=t("BLzl"),c=t("/kxI"),i=t("ChEw"),o=t("ezmu"),l=t("sOKU"),u=t("ZBE8"),d=n.a.createElement;function m(a){var e=a.practice,t=a.approve;return d(r.a,{style:{backgroundColor:"#353c48",justifyContent:"center",margin:"10px"}},d(c.a,null,d(i.a,{className:"text-center"},d("img",{src:"/images/users/avatar-1.jpg",style:{width:"100px",borderRadius:"50%"}})),d(o.a,{className:"text-center"},d("h4",{className:"text-primary"},e.practiceName),d("p",null," ",e.specialty),d("address",null," ",e.address," "),d(u.a,{size:16,color:"white"})," ",d("span",null," ",e.mobileNo," ")," ",d("br",null),d("p",{className:"mt-2"},"approved"===e.approvalStatus?d(l.a,{color:"success",danger:!0,rounded:!0}," Approved "):d(l.a,{color:"info",danger:!0,rounded:!0,onClick:function(){return t(e.id)}}," Click to Approve Practice ")),d(l.a,{color:"danger",danger:!0,rounded:!0,onClick:function(){return t(e.id)}},"Reject"))))}},BLzl:function(a,e,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),i=t("17x9"),o=t.n(i),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),m={tag:d.h,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(a){var e=a.className,t=a.cssModule,r=a.color,i=a.body,o=a.inverse,l=a.outline,m=a.tag,p=a.innerRef,b=Object(n.a)(a,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.e)(u()(e,"card",!!o&&"text-white",!!i&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return c.a.createElement(m,Object(s.a)({},b,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},ChEw:function(a,e,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),i=t("17x9"),o=t.n(i),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object},p=function(a){var e=a.className,t=a.cssModule,r=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),o=Object(d.e)(u()(e,"card-title"),t);return c.a.createElement(r,Object(s.a)({},i,{className:o}))};p.propTypes=m,p.defaultProps={tag:"div"},e.a=p},D4Z0:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return u}));var s=t("q1tI"),n=t.n(s),r=(t("8Kt/"),t("YFqc"),t("ok1R")),c=t("rhny"),i=t("Vmvc"),o=t("8Oii"),l=(t("9823"),n.a.createElement);function u(){return l(i.a,null,l(n.a.Fragment,null,l(r.a,null,l(c.a,null,l(o.a,{title:"Users List",crumb:["Home","Users","Users list"]}))),l(r.a,{className:"mt-3",sm:"4"})))}},Vmvc:function(a,e,t){"use strict";t.d(e,"a",(function(){return V}));var s=t("q1tI"),n=t.n(s),r=t("1Yj4"),c=t("ok1R"),i=t("rhny"),o=t("/MKj"),l=(t("KYPV"),t("UGp+"),t("8Kt/")),u=t.n(l),d=t("YFqc"),m=t.n(d),p=t("VENR"),b=t.n(p),f=t("eenl"),N=t("nOHt"),h=t("1luN"),g=t("YARc"),v=t("3IDX"),j=t("FZJb"),w=t("BkMj"),O=t("791q"),z=t("dq96"),y=t("sOKU"),I=t("2Te1"),E=t("nsn4"),x=t("K7vz"),_=t("ujA5"),M=t("4kQB"),R=t.n(M),T=t("Cwtw"),k=n.a.createElement,S=function(){var a=Object(N.useRouter)(),e=Object(o.d)(),t=(Object(o.e)((function(a){return a.auth.user})),Object(s.useState)({})),n=t[0],r=(t[1],Object(s.useState)()),c=(r[0],r[1],Object(s.useState)(0)),i=c[0],l=(c[1],Object(s.useState)(0)),u=l[0],d=(l[1],Object(s.useState)(!1)),p=(d[0],d[1],Object(s.useState)(!1)),b=p[0],f=p[1],M=Object(s.useState)(!1),S=(M[0],M[1],Object(s.useState)(!1)),A=(S[0],S[1],Object(s.useState)(!1));A[0],A[1];return Object(s.useEffect)((function(){}),[n]),k("div",{className:R.a.sidebar,style:{scrollbarWidth:"none"}},k("div",{className:R.a.profile},k("img",{src:"/images/users/avatar-1.jpg",className:R.a.profilepic}),k("div",{className:R.a.profilestatus},k("p",{className:R.a.username}," ",n?"".concat(n.practiceName):""," "),k("span",{color:"success",className:R.a.badgestatus}," ")," ",k("span",null,"Online"))),k(m.a,{href:"/practice/dashboard/dashboard",passHref:!0},k(y.a,{className:R.a.sidebarbutton},k(h.a,{size:19,className:R.a.sidebarIcon}),"Dashboard",k(g.a,{size:20,className:R.a.sidebarIcon2}))),k(m.a,{href:"/practice/dashboard/chat",passHref:!0},k(y.a,{id:"toggler",className:R.a.sidebarbutton},k(v.a,{size:19,className:R.a.sidebarIcon}),"Chat",k("div",{className:R.a.sidebarIcon2},i>=0&&k(I.a,{color:"success",className:R.a.sidebadge,pill:!0},"2"),k(g.a,{size:20,className:R.a.sidebarIcon2})))),k(m.a,{href:"/practice/dashboard/profile",passHref:!0},k(y.a,{id:"toggler",className:R.a.sidebarbutton},k(v.a,{size:19,className:R.a.sidebarIcon}),"Profile",k("div",{className:R.a.sidebarIcon2},k(g.a,{size:20,className:R.a.sidebarIcon2})))),k(m.a,{href:"/practice/dashboard/notification",passHref:!0},k(y.a,{className:R.a.sidebarbutton},k(j.a,{size:19,className:R.a.sidebarIcon}),"Notifications",k("div",{className:R.a.sidebarIcon2},k(g.a,{size:20,className:R.a.sidebarIcon2})))),k(y.a,{id:"toggler",className:R.a.sidebarbutton,onClick:function(){return f(!b)}},k(w.a,{size:19,className:R.a.sidebarIcon}),"Appointments",k("div",{className:R.a.sidebarIcon2},u>=0&&k(I.a,{color:"danger",className:R.a.sidebadge,pill:!0},"2"),k(b?O.a:g.a,{size:20,className:R.a.sidebarIcon2}))),k(E.a,{isOpen:b},k(x.a,null,k(m.a,{href:"/practice/dashboard/appointments",passHref:!0},k(_.a,{className:R.a.listlist},"Pending Appointments")),k(m.a,{href:"/practice/dashboard/appointments-all",passHref:!0},k(_.a,{className:R.a.listlist},"All Appointments")),k(m.a,{href:"/practice/dashboard/appointments-history",passHref:!0},k(_.a,{className:R.a.listlist},"Appointments history")))),k(y.a,{className:R.a.sidebarbutton,onClick:function(){e(T.m(a))}},k(z.a,{size:19,className:R.a.sidebarIcon}),"Logout"))},A=n.a.createElement;function V(a){var e=a.children,t=(Object(o.d)(),Object(s.useState)(!1));t[0],t[1];return A(n.a.Fragment,null,A(u.a,null,A("meta",{charSet:"utf-8"}),A("title",null,"PractX Web Application"),A("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),A("meta",{content:"PractX Web Platform",name:"description"}),A("meta",{content:"ReverSoftwares",name:"author"}),A("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),A(f.a,null),A(r.a,{fluid:!0,className:b.a.container},A(c.a,{sm:"2",noGutters:!0},A(i.a,{sm:"2"},A(S,null)),A(i.a,{sm:"10",style:{paddingTop:"12vh"}},A("main",{className:b.a.maincontent},e)))))}},ZBE8:function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));var s=t("pVnL"),n=t.n(s),r=t("q1tI"),c=t("Bop7"),i=r.forwardRef((function(a,e){return r.createElement(c.a,n()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}))}));i.displayName="Phone"},ezmu:function(a,e,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),i=t("17x9"),o=t.n(i),l=t("TSYQ"),u=t.n(l),d=t("33Jr"),m={tag:d.h,className:o.a.string,cssModule:o.a.object},p=function(a){var e=a.className,t=a.cssModule,r=a.tag,i=Object(n.a)(a,["className","cssModule","tag"]),o=Object(d.e)(u()(e,"card-text"),t);return c.a.createElement(r,Object(s.a)({},i,{className:o}))};p.propTypes=m,p.defaultProps={tag:"p"},e.a=p},f7Nw:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/dashboard/userslist",function(){return t("D4Z0")}])}},[["f7Nw",0,1,2,3,4,5,6]]]);
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"+WMa":function(e,a,t){e.exports={heading:"Titlebar_heading__9pjH9",breadcrumb:"Titlebar_breadcrumb__2lBzf",breadcrumbitem:"Titlebar_breadcrumbitem__1zT-c"}},"/kxI":function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),o=t("17x9"),i=t.n(o),l=t("TSYQ"),d=t.n(l),u=t("33Jr"),m={tag:u.h,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.e)(d()(a,"card-body"),t);return c.a.createElement(o,Object(s.a)({},i,{className:l,ref:r}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},"3OM0":function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),o=t("17x9"),i=t.n(o),l=t("TSYQ"),d=t.n(l),u=t("33Jr"),m=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:m,order:m,offset:m})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.h,className:i.a.string,cssModule:i.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:i.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,l=e.check,m=e.size,b=e.for,f=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(a,s){var n=e[a];if(delete f[a],n||""===n){var r,c=!s;if(Object(u.d)(n)){var o,i=c?"-":"-"+a+"-";r=h(c,a,n.size),p.push(Object(u.e)(d()(((o={})[r]=n.size||""===n.size,o["order"+i+n.order]=n.order||0===n.order,o["offset"+i+n.offset]=n.offset||0===n.offset,o))),t)}else r=h(c,a,n),p.push(r)}}));var g=Object(u.e)(d()(a,!!r&&"sr-only",!!l&&"form-check-label",!!m&&"col-form-label-"+m,p,!!p.length&&"col-form-label"),t);return c.a.createElement(i,Object(s.a)({htmlFor:b},f,{className:g}))};g.propTypes=f,g.defaultProps=p,a.a=g},"3ao/":function(e,a,t){e.exports={card:"adduser_card__UOaXe"}},"8Oii":function(e,a,t){"use strict";var s=t("q1tI"),n=t.n(s),r=t("pVnL"),c=t.n(r),o=t("Bop7"),i=s.forwardRef((function(e,a){return s.createElement(o.a,c()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:a}),s.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),s.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}));i.displayName="Home";var l=t("YARc"),d=t("ok1R"),u=t("rhny"),m=t("YFqc"),b=t.n(m),f=t("+WMa"),p=t.n(f),h=n.a.createElement;a.a=function(e){var a=e.title,t=e.crumb;return h(d.a,null,h(u.a,{sm:"12",className:p.a.heading},h("span",null," ",a,"  "),h("div",{className:p.a.breadcrumb},t.map((function(e){return h("div",{className:p.a.breadcrumbitem},"Home"===e?h(i,{size:14,style:{marginBottom:"3px"}}):h(l.a,{size:16}),h(b.a,{href:"/"},h("a",null,e)))})))))}},9823:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t("q1tI"),n=t.n(s),r=t("BLzl"),c=t("/kxI"),o=t("ChEw"),i=t("ezmu"),l=t("sOKU"),d=t("ZBE8"),u=n.a.createElement;function m(e){var a=e.practice,t=e.approve;return u(r.a,{style:{backgroundColor:"#353c48",justifyContent:"center",margin:"10px"}},u(c.a,null,u(o.a,{className:"text-center"},u("img",{src:"/images/users/avatar-1.jpg",style:{width:"100px",borderRadius:"50%"}})),u(i.a,{className:"text-center"},u("h4",{className:"text-primary"},a.practiceName),u("p",null," ",a.specialty),u("address",null," ",a.address," "),u(d.a,{size:16,color:"white"})," ",u("span",null," ",a.mobileNo," ")," ",u("br",null),u("p",{className:"mt-2"},"approved"===a.approvalStatus?u(l.a,{color:"success",danger:!0,rounded:!0}," Approved "):u(l.a,{color:"info",danger:!0,rounded:!0,onClick:function(){return t(a.id)}}," Click to Approve Practice ")),u(l.a,{color:"danger",danger:!0,rounded:!0,onClick:function(){return t(a.id)}},"Reject"))))}},BLzl:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),o=t("17x9"),i=t.n(o),l=t("TSYQ"),d=t.n(l),u=t("33Jr"),m={tag:u.h,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,i=e.inverse,l=e.outline,m=e.tag,b=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.e)(d()(a,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return c.a.createElement(m,Object(s.a)({},f,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},ChEw:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),o=t("17x9"),i=t.n(o),l=t("TSYQ"),d=t.n(l),u=t("33Jr"),m={tag:u.h,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(u.e)(d()(a,"card-title"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},Vmvc:function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var s=t("q1tI"),n=t.n(s),r=t("1Yj4"),c=t("ok1R"),o=t("rhny"),i=t("/MKj"),l=(t("KYPV"),t("UGp+"),t("8Kt/")),d=t.n(l),u=t("YFqc"),m=t.n(u),b=t("VENR"),f=t.n(b),p=t("eenl"),h=t("nOHt"),g=t("1luN"),N=t("YARc"),v=t("3IDX"),j=t("FZJb"),O=t("BkMj"),w=t("791q"),z=t("dq96"),y=t("sOKU"),x=t("2Te1"),I=t("nsn4"),M=t("K7vz"),E=t("ujA5"),R=t("4kQB"),T=t.n(R),k=t("Cwtw"),S=n.a.createElement,V=function(){var e=Object(h.useRouter)(),a=Object(i.d)(),t=(Object(i.e)((function(e){return e.auth.user})),Object(s.useState)({})),n=t[0],r=(t[1],Object(s.useState)()),c=(r[0],r[1],Object(s.useState)(0)),o=c[0],l=(c[1],Object(s.useState)(0)),d=l[0],u=(l[1],Object(s.useState)(!1)),b=(u[0],u[1],Object(s.useState)(!1)),f=b[0],p=b[1],R=Object(s.useState)(!1),V=(R[0],R[1],Object(s.useState)(!1)),q=(V[0],V[1],Object(s.useState)(!1));q[0],q[1];return Object(s.useEffect)((function(){}),[n]),S("div",{className:T.a.sidebar,style:{scrollbarWidth:"none"}},S("div",{className:T.a.profile},S("img",{src:"/images/users/avatar-1.jpg",className:T.a.profilepic}),S("div",{className:T.a.profilestatus},S("p",{className:T.a.username}," ",n?"".concat(n.practiceName):""," "),S("span",{color:"success",className:T.a.badgestatus}," ")," ",S("span",null,"Online"))),S(m.a,{href:"/practice/dashboard/dashboard",passHref:!0},S(y.a,{className:T.a.sidebarbutton},S(g.a,{size:19,className:T.a.sidebarIcon}),"Dashboard",S(N.a,{size:20,className:T.a.sidebarIcon2}))),S(m.a,{href:"/practice/dashboard/chat",passHref:!0},S(y.a,{id:"toggler",className:T.a.sidebarbutton},S(v.a,{size:19,className:T.a.sidebarIcon}),"Chat",S("div",{className:T.a.sidebarIcon2},o>=0&&S(x.a,{color:"success",className:T.a.sidebadge,pill:!0},"2"),S(N.a,{size:20,className:T.a.sidebarIcon2})))),S(m.a,{href:"/practice/dashboard/profile",passHref:!0},S(y.a,{id:"toggler",className:T.a.sidebarbutton},S(v.a,{size:19,className:T.a.sidebarIcon}),"Profile",S("div",{className:T.a.sidebarIcon2},S(N.a,{size:20,className:T.a.sidebarIcon2})))),S(m.a,{href:"/practice/dashboard/notification",passHref:!0},S(y.a,{className:T.a.sidebarbutton},S(j.a,{size:19,className:T.a.sidebarIcon}),"Notifications",S("div",{className:T.a.sidebarIcon2},S(N.a,{size:20,className:T.a.sidebarIcon2})))),S(y.a,{id:"toggler",className:T.a.sidebarbutton,onClick:function(){return p(!f)}},S(O.a,{size:19,className:T.a.sidebarIcon}),"Appointments",S("div",{className:T.a.sidebarIcon2},d>=0&&S(x.a,{color:"danger",className:T.a.sidebadge,pill:!0},"2"),S(f?w.a:N.a,{size:20,className:T.a.sidebarIcon2}))),S(I.a,{isOpen:f},S(M.a,null,S(m.a,{href:"/practice/dashboard/appointments",passHref:!0},S(E.a,{className:T.a.listlist},"Pending Appointments")),S(m.a,{href:"/practice/dashboard/appointments-all",passHref:!0},S(E.a,{className:T.a.listlist},"All Appointments")),S(m.a,{href:"/practice/dashboard/appointments-history",passHref:!0},S(E.a,{className:T.a.listlist},"Appointments history")))),S(y.a,{className:T.a.sidebarbutton,onClick:function(){a(k.m(e))}},S(z.a,{size:19,className:T.a.sidebarIcon}),"Logout"))},q=n.a.createElement;function _(e){var a=e.children,t=(Object(i.d)(),Object(s.useState)(!1));t[0],t[1];return q(n.a.Fragment,null,q(d.a,null,q("meta",{charSet:"utf-8"}),q("title",null,"PractX Web Application"),q("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),q("meta",{content:"PractX Web Platform",name:"description"}),q("meta",{content:"ReverSoftwares",name:"author"}),q("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),q(p.a,null),q(r.a,{fluid:!0,className:f.a.container},q(c.a,{sm:"2",noGutters:!0},q(o.a,{sm:"2"},q(V,null)),q(o.a,{sm:"10",style:{paddingTop:"12vh"}},q("main",{className:f.a.maincontent},a)))))}},ZBE8:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t("pVnL"),n=t.n(s),r=t("q1tI"),c=t("Bop7"),o=r.forwardRef((function(e,a){return r.createElement(c.a,n()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:a}),r.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}))}));o.displayName="Phone"},afej:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),o=t("17x9"),i=t.n(o),l=t("TSYQ"),d=t.n(l),u=t("33Jr"),m={tag:u.h,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(u.e)(d()(a,"card-header"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},ezmu:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("q1tI"),c=t.n(r),o=t("17x9"),i=t.n(o),l=t("TSYQ"),d=t.n(l),u=t("33Jr"),m={tag:u.h,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(u.e)(d()(a,"card-text"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};b.propTypes=m,b.defaultProps={tag:"p"},a.a=b},uBiN:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),r=t("JX7q"),c=t("dI71"),o=t("q1tI"),i=t.n(o),l=t("17x9"),d=t.n(l),u=t("TSYQ"),m=t.n(u),b=t("33Jr"),f={children:d.a.node,inline:d.a.bool,tag:b.h,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,o=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(b.e)(m()(a,!!r&&"form-inline"),t);return i.a.createElement(c,Object(s.a)({},l,{ref:o,className:d}))},a}(o.Component);p.propTypes=f,p.defaultProps={tag:"form"},a.a=p}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"/kxI":function(a,e,t){"use strict";var s=t("wx14"),i=t("zLVn"),n=t("q1tI"),r=t.n(n),c=t("17x9"),o=t.n(c),l=t("TSYQ"),m=t.n(l),d=t("33Jr"),u={tag:d.h,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(a){var e=a.className,t=a.cssModule,n=a.innerRef,c=a.tag,o=Object(i.a)(a,["className","cssModule","innerRef","tag"]),l=Object(d.e)(m()(e,"card-body"),t);return r.a.createElement(c,Object(s.a)({},o,{className:l,ref:n}))};g.propTypes=u,g.defaultProps={tag:"div"},e.a=g},"1oen":function(a,e,t){"use strict";t.d(e,"a",(function(){return q}));var s=t("q1tI"),i=t.n(s),n=t("1Yj4"),r=t("ok1R"),c=t("rhny"),o=t("/MKj"),l=(t("KYPV"),t("UGp+"),t("8Kt/")),m=t.n(l),d=t("YFqc"),u=t.n(d),g=t("VENR"),p=t.n(g),f=t("eenl"),b=t("nOHt"),h=t("1luN"),N=t("YARc"),v=t("3IDX"),_=t("FZJb"),j=t("dq96"),w=t("791q"),x=t("BkMj"),z=t("sOKU"),y=t("2Te1"),I=t("nsn4"),E=t("K7vz"),O=t("ujA5"),S=t("4kQB"),M=t.n(S),A=t("Cwtw"),R=i.a.createElement,L=function(){var a=Object(b.useRouter)(),e=Object(o.d)(),t=Object(o.e)((function(a){return a.auth.user})),i=Object(s.useState)({}),n=i[0],r=i[1],c=Object(s.useState)(),l=(c[0],c[1]),m=Object(s.useState)(0),d=m[0],g=(m[1],Object(s.useState)(0)),p=g[0],f=(g[1],Object(s.useState)(!1)),S=(f[0],f[1],Object(s.useState)(!1)),L=S[0],H=S[1],q=Object(s.useState)(!1),V=(q[0],q[1],Object(s.useState)(!1)),P=V[0],T=V[1],C=Object(s.useState)(!1);C[0],C[1];return Object(s.useEffect)((function(){r(t.practice),l(t.token)}),[n]),R("div",{className:M.a.sidebar,style:{scrollbarWidth:"none"}},R("div",{className:M.a.profile},R("img",{src:"/images/users/avatar-1.jpg",className:M.a.profilepic}),R("div",{className:M.a.profilestatus},R("p",{className:M.a.username}," ",n?"".concat(n.practiceName):""," "),R("span",{color:"success",className:M.a.badgestatus}," ")," ",R("span",null,"Online"))),R(u.a,{href:"/practice/dashboard/dashboard",passHref:!0},R(z.a,{className:M.a.sidebarbutton},R(h.a,{size:19,className:M.a.sidebarIcon}),"Dashboard",R(N.a,{size:20,className:M.a.sidebarIcon2}))),R(u.a,{href:"/practice/dashboard/chat",passHref:!0},R(z.a,{id:"toggler",className:M.a.sidebarbutton},R(v.a,{size:19,className:M.a.sidebarIcon}),"Chat",R("div",{className:M.a.sidebarIcon2},d>=0&&R(y.a,{color:"success",className:M.a.sidebadge,pill:!0},"2"),R(N.a,{size:20,className:M.a.sidebarIcon2})))),R(u.a,{href:"/practice/dashboard/profile",passHref:!0},R(z.a,{id:"toggler",className:M.a.sidebarbutton},R(v.a,{size:19,className:M.a.sidebarIcon}),"Profile",R("div",{className:M.a.sidebarIcon2},R(N.a,{size:20,className:M.a.sidebarIcon2})))),R(u.a,{href:"/practice/dashboard/notification",passHref:!0},R(z.a,{className:M.a.sidebarbutton},R(_.a,{size:19,className:M.a.sidebarIcon}),"Notifications",R("div",{className:M.a.sidebarIcon2},R(N.a,{size:20,className:M.a.sidebarIcon2})))),R(z.a,{id:"toggler",className:M.a.sidebarbutton,onClick:function(){return T(!P)}},R(j.a,{size:19,className:M.a.sidebarIcon}),"Users",R("div",{className:M.a.sidebarIcon2},R(P?w.a:N.a,{size:20,className:M.a.sidebarIcon2}))),R(I.a,{isOpen:P},R(E.a,null,R(u.a,{href:"/practice/dashboard/adduser",passHref:!0},R(O.a,{className:M.a.listlist},"Add User")),R(u.a,{href:"/practice/dashboard/userslist",passHref:!0},R(O.a,{className:M.a.listlist},"Users List")))),R(z.a,{id:"toggler",className:M.a.sidebarbutton,onClick:function(){return H(!L)}},R(x.a,{size:19,className:M.a.sidebarIcon}),"Appointments",R("div",{className:M.a.sidebarIcon2},p>=0&&R(y.a,{color:"danger",className:M.a.sidebadge,pill:!0},"2"),R(L?w.a:N.a,{size:20,className:M.a.sidebarIcon2}))),R(I.a,{isOpen:L},R(E.a,null,R(u.a,{href:"/practice/dashboard/appointments",passHref:!0},R(O.a,{className:M.a.listlist},"Pending Appointments")),R(u.a,{href:"/practice/dashboard/appointments-all",passHref:!0},R(O.a,{className:M.a.listlist},"All Appointments")),R(u.a,{href:"/practice/dashboard/appointments-history",passHref:!0},R(O.a,{className:M.a.listlist},"Appointments history")))),R(z.a,{className:M.a.sidebarbutton,onClick:function(){e(A.m(a))}},R(j.a,{size:19,className:M.a.sidebarIcon}),"Logout"))},H=i.a.createElement;function q(a){var e=a.children,t=(Object(o.d)(),Object(s.useState)(!1));t[0],t[1];return H(i.a.Fragment,null,H(m.a,null,H("meta",{charSet:"utf-8"}),H("title",null,"PractX Web Application"),H("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),H("meta",{content:"PractX Web Platform",name:"description"}),H("meta",{content:"ReverSoftwares",name:"author"}),H("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css"})),H(f.a,null),H(n.a,{fluid:!0,className:p.a.container},H(r.a,{sm:"2",noGutters:!0},H(c.a,{sm:"2"},H(L,null)),H(c.a,{sm:"10",style:{paddingTop:"12vh"}},H("main",{className:p.a.maincontent},e)))))}},"4W2+":function(a,e,t){a.exports={container:"RightSideProfile_container__3L5ZJ",card:"RightSideProfile_card__2ro4E",cardhead:"RightSideProfile_cardhead__12asN",cardbody:"RightSideProfile_cardbody__24QQq",cardtext:"RightSideProfile_cardtext__3rJeS",liststyle:"RightSideProfile_liststyle__1Yhgg",profilepic:"RightSideProfile_profilepic__HzkvK",status:"RightSideProfile_status__2dHIg",active:"RightSideProfile_active__2JsY6",notactive:"RightSideProfile_notactive__3Eiae"}},BLzl:function(a,e,t){"use strict";var s=t("wx14"),i=t("zLVn"),n=t("q1tI"),r=t.n(n),c=t("17x9"),o=t.n(c),l=t("TSYQ"),m=t.n(l),d=t("33Jr"),u={tag:d.h,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g=function(a){var e=a.className,t=a.cssModule,n=a.color,c=a.body,o=a.inverse,l=a.outline,u=a.tag,g=a.innerRef,p=Object(i.a)(a,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.e)(m()(e,"card",!!o&&"text-white",!!c&&"card-body",!!n&&(l?"border":"bg")+"-"+n),t);return r.a.createElement(u,Object(s.a)({},p,{className:f,ref:g}))};g.propTypes=u,g.defaultProps={tag:"div"},e.a=g},CW8T:function(a,e,t){a.exports={chatboxtopbar:"Chat_chatboxtopbar__prXQe",icons:"Chat_icons__1Iocl",chatbox:"Chat_chatbox__1QRmG",chatboxbottombar:"Chat_chatboxbottombar__1uizl",groupslist:"Chat_groupslist__ALyWF"}},EFOt:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return w}));var s=t("q1tI"),i=t.n(s),n=(t("8Kt/"),t("ok1R")),r=t("rhny"),c=t("L3zb"),o=(t("KYPV"),t("UGp+"),t("YFqc"),t("CW8T")),l=t.n(o),m=t("TaqF"),d=t("dq96"),u=t("IRai"),g=t("W8pj"),p=t("T6Wf"),f=t("O0zH"),b=t("oSq/"),h=t("1oen"),N=t("S7PW"),v=t("F5hn"),_=t("i6+p"),j=i.a.createElement;function w(){return j(h.a,null,j(i.a.Fragment,null,j(n.a,{noGutters:!0,sm:"3"},j(r.a,{sm:"3",className:l.a.groupslist},j("h4",{className:"text-light my-4"},"Groups"),j(N.a,{img:"/images/users/avatar-5.jpg"}),j(N.a,{img:"/images/users/avatar-3.jpg"}),j(N.a,{img:"/images/users/avatar-7.jpg"}),j(N.a,{img:"/images/users/avatar-8.jpg"}),j(N.a,{img:"/images/users/avatar-5.jpg"}),j(N.a,{img:"/images/users/avatar-3.jpg"}),j(N.a,{img:"/images/users/avatar-7.jpg"}),j(N.a,{img:"/images/users/avatar-8.jpg"}),j(N.a,{img:"/images/users/avatar-5.jpg"}),j(N.a,{img:"/images/users/avatar-3.jpg"}),j(N.a,{img:"/images/users/avatar-7.jpg"}),j(N.a,{img:"/images/users/avatar-8.jpg"}),j(N.a,{img:"/images/users/avatar-5.jpg"}),j(N.a,{img:"/images/users/avatar-3.jpg"}),j(N.a,{img:"/images/users/avatar-7.jpg"}),j(N.a,{img:"/images/users/avatar-8.jpg"})),j(r.a,{sm:"6"},j("div",null,j("div",{className:l.a.chatboxtopbar},j("div",null,j("img",{src:"/images/users/avatar-4.jpg"}),j("span",null,"Group name")),j("div",{className:l.a.icons},j(m.a,{size:17}),j(d.a,{size:17}),j(u.a,{size:17}))),j("div",{className:l.a.chatbox},j("div",{style:{width:"100%"}},j(v.a,{text:"Are you getting your treatment \n in Nigeria",image:"/images/users/avatar-1.jpg",index:2,time:"1min Ago"}),j(v.a,{text:"No na... dont talk like that lol",image:"/images/users/avatar-2.jpg",index:1,time:"few Secs Ago"}),j(v.a,{text:"I would advice against that",image:"/images/users/avatar-1.jpg",index:2,time:"1min Ago"}),j(v.a,{text:"Even the president wont do that",image:"/images/users/avatar-1.jpg",index:2,time:"1min Ago"}),j(v.a,{text:"LOL... stop it",image:"/images/users/avatar-2.jpg",index:1,time:"Small time Ago"}))),j("div",{className:l.a.chatboxbottombar},j(c.a,{style:{width:"70%",display:"inline"},type:"text",id:"message",name:"message",placeholder:"Enter your message..."}),j("div",{className:l.a.icons},j(g.a,{size:20}),j(p.a,{size:20,style:{transform:"rotate(-45deg)"}}),j(f.a,{size:20}),j(b.a,{size:20}))))),j(r.a,{sm:"3"},j(_.a,null)))))}},F5hn:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var s=t("q1tI"),i=t.n(s),n=t("UU0N"),r=t("LjK8"),c=t.n(r),o=i.a.createElement;function l(a){var e=a.image,t=a.text,s=a.index,i=a.time;return 2==s?o(n.a,{className:c.a.chatmessage2},o(n.a,{left:!0,href:"#",className:c.a.profilepic},o("img",{src:e,alt:"Group thumbnail"})),o(n.a,{body:!0},o("div",{className:c.a.message},o("span",null,t)),o("span",{className:c.a.messagetime},i))):o(n.a,{className:c.a.chatmessage1},o("div",{className:c.a.floatMessageRight},o("div",{className:c.a.message},o("span",null,t)),o("span",{className:c.a.messagetime},i)),o(n.a,{left:!0,href:"#",className:c.a.profilepic},o("img",{src:e,alt:"Group thumbnail"})))}},IRai:function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var s=t("pVnL"),i=t.n(s),n=t("q1tI"),r=t("Bop7"),c=n.forwardRef((function(a,e){return n.createElement(r.a,i()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))}));c.displayName="MoreHoriz"},LjK8:function(a,e,t){a.exports={chatmessage1:"Messageblob_chatmessage1__2j-LK",message:"Messageblob_message__1nJ9D",messagetime:"Messageblob_messagetime__3Gpq6",profilepic:"Messageblob_profilepic__3YxSI",chatmessage2:"Messageblob_chatmessage2__3RAyW"}},LsjL:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice/dashboard/chat",function(){return t("EFOt")}])},O0zH:function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var s=t("pVnL"),i=t.n(s),n=t("q1tI"),r=t("Bop7"),c=n.forwardRef((function(a,e){return n.createElement(r.a,i()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}))}));c.displayName="Image"},S7PW:function(a,e,t){"use strict";var s=t("q1tI"),i=t.n(s),n=t("UU0N"),r=t("2Te1"),c=(t("YFqc"),t("aB8o")),o=t.n(c),l=i.a.createElement;e.a=function(a){var e=a.img;return l(n.a,{className:o.a.mediabox},l(n.a,{left:!0,href:"#"},l("img",{src:e,alt:"Group thumbnail",className:o.a.mediaImage})),l(n.a,{body:!0},l("div",{className:o.a.mediaheading},l("h5",null,"Media heading"),l("span",null," 1:00pm ")),l("div",{className:o.a.mediaheading},l("div",{className:o.a.text},"Donec lacinia congue felis in"),l(r.a,{color:"danger",className:o.a.badge}," 7 "))))}},T6Wf:function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var s=t("pVnL"),i=t.n(s),n=t("q1tI"),r=t("Bop7"),c=n.forwardRef((function(a,e){return n.createElement(r.a,i()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.createElement("path",{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 010-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}))}));c.displayName="Attachment"},TaqF:function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var s=t("pVnL"),i=t.n(s),n=t("q1tI"),r=t("Bop7"),c=n.forwardRef((function(a,e){return n.createElement(r.a,i()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))}));c.displayName="Search"},UU0N:function(a,e,t){"use strict";var s=t("wx14"),i=t("zLVn"),n=t("q1tI"),r=t.n(n),c=t("17x9"),o=t.n(c),l=t("TSYQ"),m=t.n(l),d=t("33Jr"),u={body:o.a.bool,bottom:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,heading:o.a.bool,left:o.a.bool,list:o.a.bool,middle:o.a.bool,object:o.a.bool,right:o.a.bool,tag:d.h,top:o.a.bool},g=function(a){var e,t=a.body,n=a.bottom,c=a.className,o=a.cssModule,l=a.heading,u=a.left,g=a.list,p=a.middle,f=a.object,b=a.right,h=a.tag,N=a.top,v=Object(i.a)(a,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);e=l?"h4":v.href?"a":v.src||f?"img":g?"ul":"div";var _=h||e,j=Object(d.e)(m()(c,{"media-body":t,"media-heading":l,"media-left":u,"media-right":b,"media-top":N,"media-bottom":n,"media-middle":p,"media-object":f,"media-list":g,media:!t&&!l&&!u&&!b&&!N&&!n&&!p&&!f&&!g}),o);return r.a.createElement(_,Object(s.a)({},v,{className:j}))};g.propTypes=u,e.a=g},W8pj:function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var s=t("pVnL"),i=t.n(s),n=t("q1tI"),r=t("Bop7"),c=n.forwardRef((function(a,e){return n.createElement(r.a,i()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),n.createElement("rect",{width:24,height:24,fill:"none"}),n.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zM12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4zm3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}))}));c.displayName="EmojiEmotions"},aB8o:function(a,e,t){a.exports={mediabox:"chatgroup_mediabox__3pBQ9",mediaImage:"chatgroup_mediaImage__1w_vr",mediaheading:"chatgroup_mediaheading__Z57rN",text:"chatgroup_text__OBTGg",badge:"chatgroup_badge__1Om_v"}},afej:function(a,e,t){"use strict";var s=t("wx14"),i=t("zLVn"),n=t("q1tI"),r=t.n(n),c=t("17x9"),o=t.n(c),l=t("TSYQ"),m=t.n(l),d=t("33Jr"),u={tag:d.h,className:o.a.string,cssModule:o.a.object},g=function(a){var e=a.className,t=a.cssModule,n=a.tag,c=Object(i.a)(a,["className","cssModule","tag"]),o=Object(d.e)(m()(e,"card-header"),t);return r.a.createElement(n,Object(s.a)({},c,{className:o}))};g.propTypes=u,g.defaultProps={tag:"div"},e.a=g},ezmu:function(a,e,t){"use strict";var s=t("wx14"),i=t("zLVn"),n=t("q1tI"),r=t.n(n),c=t("17x9"),o=t.n(c),l=t("TSYQ"),m=t.n(l),d=t("33Jr"),u={tag:d.h,className:o.a.string,cssModule:o.a.object},g=function(a){var e=a.className,t=a.cssModule,n=a.tag,c=Object(i.a)(a,["className","cssModule","tag"]),o=Object(d.e)(m()(e,"card-text"),t);return r.a.createElement(n,Object(s.a)({},c,{className:o}))};g.propTypes=u,g.defaultProps={tag:"p"},e.a=g},"i6+p":function(a,e,t){"use strict";var s=t("q1tI"),i=t.n(s),n=t("BLzl"),r=t("afej"),c=t("/kxI"),o=t("ezmu"),l=t("K7vz"),m=t("ujA5"),d=(t("YFqc"),t("4W2+")),u=t.n(d),g=i.a.createElement;e.a=function(){return g("div",{className:u.a.container},g("div",{className:u.a.profilepic},g("img",{src:"/images/users/avatar-5.jpg"}),g("h3",null,"Dr Lina Oak"),g("div",{className:u.a.status},g("div",{className:u.a.active}),g("span",null,"Active"))),g("p",null,"This is some text and text should be aligned properly to the left not centered or rightered lol"),g(n.a,{className:u.a.card},g(r.a,{className:u.a.cardhead},"ABOUT ME"),g(c.a,{className:u.a.cardbody},g(o.a,{className:u.a.cardtext},g(l.a,{className:u.a.cardlist},g(m.a,{className:u.a.liststyle},g("span",null,"Email")," ",g("span",null,"lina@practx.com")),g(m.a,{className:u.a.liststyle},g("span",null,"Phone")," ",g("span",null,"08064655310")),g(m.a,{className:u.a.liststyle},g("span",null,"Member Since")," ",g("span",null,"12 feb, 1856")))))))}},"oSq/":function(a,e,t){"use strict";t.d(e,"a",(function(){return c}));var s=t("pVnL"),i=t.n(s),n=t("q1tI"),r=t("Bop7"),c=n.forwardRef((function(a,e){return n.createElement(r.a,i()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},a,{ref:e}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),n.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}))}));c.displayName="Send"}},[["LsjL",0,1,2,3,4,5,6]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{"3QN7":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));t("8Kt/"),t("YFqc");var s=t("q1tI"),n=t.n(s),l=t("HNVq"),i=t.n(l),o=t("KYPV"),r=t("UGp+"),c=t("/MKj"),d=t("nOHt"),u=t("ok1R"),m=t("rhny"),f=t("BLzl"),b=t("afej"),p=t("/kxI"),g=t("ezmu"),h=t("aLZG"),O=t("sOKU"),v=t("uBiN"),j=t("jrRI"),N=t("3OM0"),C=t("L3zb"),w=t("hfUC"),y=t("1oen"),E=t("8Oii"),T=(t("9823"),t("Cwtw")),S=n.a.createElement;function A(){Object(d.useRouter)();var e=Object(c.d)(),a=Object(c.e)((function(e){return e.auth.user})),t=Object(c.e)((function(e){return e.auth.addStaff})),l=Object(s.useState)({}),A=(l[0],l[1]),M=Object(s.useState)(),_=M[0],k=M[1],L=Object(s.useState)(!0),R=L[0],U=L[1],P=Object(o.a)({initialValues:{email:"",designation:""},validationSchema:r.b({email:r.c().required("Please Enter Your Username"),designation:r.c().required("Select designation")}),onSubmit:function(a){e(T.s({email:a.email,designation:a.designation,token:_}))}});return Object(s.useEffect)((function(){A(a.practice),k(a.token),console.log("UseEffect called------------"),U(a.error)}),[t,R]),S(y.a,null,S(n.a.Fragment,null,S(u.a,null,S(m.a,null,S(E.a,{title:"Add User",crumb:["Home","Users","Add User"]}))),S(u.a,{className:"mt-3"},S(f.a,{className:i.a.card},S(b.a,{style:{backgroundColor:"#353c48"}},"BASIC INFORMATION"),S(p.a,null,S(g.a,{className:"px-auto"},R&&S(u.a,null,S(m.a,null,S(h.a,{color:"success"}," User added successfully...",S(O.a,{onClick:function(){U(!R),e(T.c())}}," Closs")))),S(u.a,null,S(m.a,{md:{size:6,offset:3}},S(v.a,{onSubmit:P.handleSubmit},S(j.a,{row:!0},S(N.a,{for:"email",sm:5}," Email "),S(m.a,{sm:7},S(C.a,{type:"email",id:"email",name:"email",className:"form-control bg-soft-light border-light",placeholder:"Enter email",onChange:P.handleChange,onBlur:P.handleBlur,value:P.values.email,invalid:!(!P.touched.email||!P.errors.email)}),P.touched.email&&P.errors.email?S(w.a,{type:"invalid"},P.errors.email):null)),S(j.a,{row:!0},S(N.a,{for:"designation",sm:5}," Designation "),S(m.a,{sm:7},S(C.a,{type:"select",id:"designation",name:"designation",onChange:P.handleChange,onBlur:P.handleBlur,value:P.values.designation,invalid:!(!P.touched.designation||!P.errors.designation)},S("option",null,"Select Designation"),S("option",{value:"team lead"},"Team Lead"),S("option",{value:"staff"},"Staff")),P.touched.designation&&P.errors.designation?S(w.a,{type:"invalid"},P.errors.designation):null)),S(j.a,{check:!0,row:!0},S(m.a,{md:{size:7,offset:5}},S(O.a,{color:"primary",className:" waves-effect waves-light",type:"submit"}," Add User "))))))))))))}},aLZG:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),l=t("vpQ4"),i=t("q1tI"),o=t.n(i),r=t("17x9"),c=t.n(r),d=t("TSYQ"),u=t.n(d),m=t("33Jr"),f=t("1w3K"),b=Object(l.a)({},f.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:m.h,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),p=Object(l.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:m.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,l=e.baseClassActive,i=e.className,r=e.cssModule,c=e.children,d=e.innerRef,b=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(m.g)(b,m.a),g=Object(m.f)(b,m.a);return o.a.createElement(f.Transition,p,(function(e){var n="entered"===e,f=Object(m.e)(u()(i,t,n&&l),r);return o.a.createElement(a,Object(s.a)({className:f},g,{ref:d}),c)}))}g.propTypes=b,g.defaultProps=p;var h=g,O={children:c.a.node,className:c.a.string,closeClassName:c.a.string,closeAriaLabel:c.a.string,cssModule:c.a.object,color:c.a.string,fade:c.a.bool,isOpen:c.a.bool,toggle:c.a.func,tag:m.h,transition:c.a.shape(h.propTypes),innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},v={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(l.a)({},h.defaultProps,{unmountOnExit:!0})};function j(e){var a=e.className,t=e.closeClassName,i=e.closeAriaLabel,r=e.cssModule,c=e.tag,d=e.color,f=e.isOpen,b=e.toggle,p=e.children,g=e.transition,O=e.fade,v=e.innerRef,j=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(m.e)(u()(a,"alert","alert-"+d,{"alert-dismissible":b}),r),C=Object(m.e)(u()("close",t),r),w=Object(l.a)({},h.defaultProps,{},g,{baseClass:O?g.baseClass:"",timeout:O?g.timeout:0});return o.a.createElement(h,Object(s.a)({},j,w,{tag:c,className:N,in:f,role:"alert",innerRef:v}),b?o.a.createElement("button",{type:"button",className:C,"aria-label":i,onClick:b},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}j.propTypes=O,j.defaultProps=v;a.a=j},hfUC:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),l=t("q1tI"),i=t.n(l),o=t("17x9"),r=t.n(o),c=t("TSYQ"),d=t.n(c),u=t("33Jr"),m={children:r.a.node,tag:u.h,className:r.a.string,cssModule:r.a.object,valid:r.a.bool,tooltip:r.a.bool},f={tag:"div",valid:void 0},b=function(e){var a=e.className,t=e.cssModule,l=e.valid,o=e.tooltip,r=e.tag,c=Object(n.a)(e,["className","cssModule","valid","tooltip","tag"]),m=o?"tooltip":"feedback",f=Object(u.e)(d()(a,l?"valid-"+m:"invalid-"+m),t);return i.a.createElement(r,Object(s.a)({},c,{className:f}))};b.propTypes=m,b.defaultProps=f,a.a=b},yKsq:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice/dashboard/adduser",function(){return t("3QN7")}])}},[["yKsq",0,1,2,3,4,5,6,15]]]);
(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[46],{532:function(e,t,i){"use strict";i.r(t);var a=i(551),c=i(561),r=i(147),n=i(296),o=i(77),s=i(83),l=i(51),d=i(118),j=i(1),A=i.n(j),b=i(191),m=i.n(b),h=i(12),g=i(576),p=i(1193),x=i(50),O=i(2);const u=Object(r.a)(g.a)((()=>({display:"flex",alignItems:"center",minHeight:d.c,"@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}}))),w=Object(r.a)("div")((()=>({width:"100%",display:"flex",alignItems:"center",padding:"0px 1rem",maxWidth:"1170px",margin:"0 auto"})));var f=()=>{const e=Object(o.a)(),{settings:t}=Object(l.a)(),i=t.themes[t.footer.theme]||e;return Object(O.jsx)(c.a,{theme:i,children:Object(O.jsx)(p.a,{color:"primary",position:"static",sx:{zIndex:96},children:Object(O.jsx)(u,{children:Object(O.jsxs)(w,{children:[Object(O.jsx)(x.e,{sx:{m:"auto"}}),Object(O.jsx)(x.c,{sx:{m:0},children:"Designed and Developed by C-DAC Hyderabad"})]})})})})},y=i(28);var C=e=>{let{children:t}=e;const i=Object(y.a)(),{settings:a}=Object(l.a)(),r=a.themes[a.layout1Settings.leftSidebar.theme]||i;return Object(O.jsx)(c.a,{theme:r,children:t})};var B=e=>{let{theme:t,classes:i,children:a,open:r}=e;return Object(O.jsx)(c.a,{theme:t,children:a})},I=i(567),v=i(293),Q=i(5),z=i(887),k=i(1305),D=i(295),S=i(496),E=i(505),q=i(1301),K=i(101),H=i(1300);var Y=Object(Q.a)(H.a)((()=>({top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"})));const M=Object(Q.a)(x.e)((e=>{let{theme:t}=e;return{fontWeight:700,fontSize:"1rem",cursor:"pointer",borderRadius:"4px",marginBottom:"2.5rem",letterSpacing:"1.5px",padding:".25rem .5rem",transform:"rotate(90deg)",color:t.palette.secondary.main,backgroundColor:t.palette.primary.dark,"&:hover, &.open":{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText}}})),N=Object(Q.a)("div")((e=>{let{theme:t}=e;return{top:0,right:0,zIndex:50,width:320,display:"flex",height:"100vh",position:"fixed",paddingBottom:"32px",flexDirection:"column",boxShadow:K.b[12],background:t.palette.background.default,"& .helpText":{margin:"0px .5rem 1rem"}}})),G=Object(Q.a)(Y)((()=>({width:"100%",height:"152px !important",cursor:"pointer",marginTop:"12px",marginBottom:"12px","& .layout-name":{display:"none"},"&:hover .layout-name":{zIndex:12,width:"100%",height:"100%",display:"flex",alignItems:"center",position:"absolute",justifyContent:"center",background:"rgba(0,0,0,0.3)"}}))),Z=Object(Q.a)("div")((()=>({minHeight:58,display:"flex",alignItems:"center",marginBottom:"16px",padding:"14px 20px",boxShadow:K.b[6],justifyContent:"space-between"}))),L=Object(Q.a)("img")((()=>({width:"100%"}))),R=Object(Q.a)(m.a)((()=>({paddingLeft:"16px",paddingRight:"16px"}))),J=[{isPro:!1,name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",options:{activeTheme:"blue",activeLayout:"layout1",layout1Settings:{topbar:{theme:"blueDark",fixed:!0},leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98}},footer:{theme:"slateDark1"}}},{isPro:!1,name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",options:{activeTheme:"blue",activeLayout:"layout1",layout1Settings:{topbar:{theme:"whiteBlue",fixed:!0},leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92}}}},{isPro:!1,name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",options:{activeTheme:"blue",activeLayout:"layout1",layout1Settings:{topbar:{theme:"blueDark",fixed:!0},leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92}}}}];var T=()=>{const e=Object(y.a)(),[t,i]=Object(j.useState)(!1),[a,r]=Object(j.useState)(0),{settings:n,updateSettings:o}=Object(l.a)(),s=e.palette.text.secondary,d=()=>i(!t),A=e=>r(e);let b={...n.themes[n.activeTheme]};return Object(O.jsxs)(j.Fragment,{children:[Object(O.jsx)(z.a,{title:"Theme Settings",placement:"left",children:Object(O.jsx)(M,{className:"open",onClick:d,children:"DEMOS"})}),Object(O.jsx)(c.a,{theme:b,children:Object(O.jsx)(k.a,{open:t,anchor:"right",variant:"temporary",onClose:d,ModalProps:{keepMounted:!0},children:Object(O.jsxs)(N,{children:[Object(O.jsxs)(Z,{children:[Object(O.jsxs)(D.a,{display:"flex",children:[Object(O.jsx)(v.a,{className:"icon",color:"primary",children:"settings"}),Object(O.jsx)(x.a,{sx:{ml:1,fontSize:"1rem"},children:"Theme Settings"})]}),Object(O.jsx)(I.a,{onClick:d,children:Object(O.jsx)(v.a,{className:"icon",children:"close"})})]}),Object(O.jsxs)(D.a,{px:3,mb:2,display:"flex",children:[Object(O.jsx)(S.a,{variant:"outlined",onClick:()=>A(0),color:0===a?"secondary":"primary",sx:{mr:2},children:"Demos"}),Object(O.jsx)(S.a,{variant:"outlined",onClick:()=>A(1),color:1===a?"secondary":"primary",children:"Settings"})]}),Object(O.jsxs)(R,{options:{suppressScrollX:!0},children:[0===a&&Object(O.jsxs)(D.a,{sx:{mb:4,mx:3},children:[Object(O.jsx)(D.a,{sx:{color:s},children:"Layouts"}),Object(O.jsx)(D.a,{display:"flex",flexDirection:"column",children:J.map((e=>Object(O.jsx)(G,{color:"secondary",badgeContent:"Pro",invisible:!e.isPro,children:Object(O.jsxs)(E.a,{elevation:4,sx:{position:"relative"},onClick:()=>o(e.options),children:[Object(O.jsx)(D.a,{sx:{overflow:"hidden"},className:"layout-name",children:Object(O.jsx)(S.a,{variant:"contained",color:"secondary",children:e.name})}),Object(O.jsx)(L,{src:e.thumbnail,alt:e.name})]})},e.name)))})]}),1===a&&Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"helpText",children:["We used React context API to control layout. Check out the"," ",Object(O.jsx)(q.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})},P=i(184),X=i(63),F=i(276);const U=Object(r.a)(I.a)((e=>{let{theme:t}=e;return{"& span":{color:t.palette.text.primary},"& #disable":{color:t.palette.text.disabled}}})),W=Object(r.a)("div")((e=>{let{theme:t}=e;return{height:"100%",display:"flex",flexDirection:"column",width:d.a}})),V=Object(r.a)("div")((()=>({padding:"4px",paddingLeft:"16px",display:"flex",alignItems:"center",boxShadow:K.b[6],height:d.c,"& h5":{marginTop:0,marginBottom:0,marginLeft:"16px",fontWeight:"500"}}))),_=Object(r.a)("div")((()=>({display:"flex",alignItems:"center",padding:"8px 8px",transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}))),$=Object(r.a)("img")((()=>({width:48}))),ee=Object(r.a)("div")((()=>({marginRight:"8",textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column","& h6":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block",width:120,marginBottom:"4px"}})));let te=!1;var ie=function(e){let{container:t}=e;const[i,a]=Object(j.useState)(0),[r,s]=Object(j.useState)(!1),d=Object(F.b)(),A=Object(h.o)(),{user:b}=Object(P.a)(),{cartList:m}=Object(F.c)((e=>e.ecommerce)),{settings:g}=Object(l.a)(),p=Object(o.a)().palette.text.secondary;te||(d(Object(X.j)(b.id)),te=!0);const u=()=>{s(!r)};Object(j.useEffect)((()=>{let e=0;m.forEach((t=>{e+=t.price*t.amount})),a(e)}),[m]);const{palette:w}=Object(o.a)(),f=w.text.primary;return Object(O.jsxs)(j.Fragment,{children:[Object(O.jsx)(I.a,{onClick:u,children:Object(O.jsx)(H.a,{color:"secondary",badgeContent:m.length,children:Object(O.jsx)(v.a,{sx:{color:f},children:"shopping_cart"})})}),Object(O.jsx)(c.a,{theme:g.themes[g.activeTheme],children:Object(O.jsx)(k.a,{container:t,variant:"temporary",anchor:"right",open:r,onClose:u,ModalProps:{keepMounted:!0},children:Object(O.jsxs)(W,{children:[Object(O.jsxs)(V,{children:[Object(O.jsx)(v.a,{color:"primary",children:"shopping_cart"}),Object(O.jsx)("h5",{children:"Cart"})]}),Object(O.jsx)(n.a,{flexGrow:1,overflow:"auto",children:m.map((e=>Object(O.jsxs)(_,{children:[Object(O.jsxs)(n.a,{mr:"4px",display:"flex",flexDirection:"column",children:[Object(O.jsx)(U,{size:"small",onClick:()=>d(Object(X.k)(b.id,e.id,e.amount+1)),children:Object(O.jsx)(v.a,{sx:{cursor:"pinter"},children:"keyboard_arrow_up"})}),Object(O.jsx)(U,{disabled:!(e.amount-1),size:"small",onClick:()=>d(Object(X.k)(b.id,e.id,e.amount-1)),children:Object(O.jsx)(v.a,{id:!(e.amount-1)&&"disable",children:"keyboard_arrow_down"})})]}),Object(O.jsx)(n.a,{mr:1,children:Object(O.jsx)($,{src:e.imgUrl,alt:e.title})}),Object(O.jsxs)(ee,{children:[Object(O.jsx)(x.b,{children:e.title}),Object(O.jsxs)(x.d,{sx:{color:p},children:["$",e.price," x ",e.amount]})]}),Object(O.jsx)(U,{size:"small",onClick:()=>d(Object(X.i)(b.userId,e.id)),children:Object(O.jsx)(v.a,{fontSize:"small",children:"clear"})})]},e.id)))}),Object(O.jsxs)(S.a,{sx:{width:"100%",borderRadius:0},variant:"contained",color:"primary",onClick:()=>{i>0&&(A("/ecommerce/checkout"),s(!1))},children:["Checkout ($",i.toFixed(2),")"]})]})})})]})};const ae=Object(r.a)("div")((e=>{let{theme:t,width:i}=e;return{position:"fixed",height:"100vh",width:i,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:t.shadows[8],backgroundColor:t.palette.primary.main,zIndex:98,transition:"all 0.15s ease",color:t.palette.text.primary,"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}}));var ce=()=>{const{palette:e}=Object(o.a)(),t=e.primary.contrastText;return Object(O.jsxs)(ae,{width:"50px",className:"secondary-sidebar",children:[Object(O.jsx)(x.e,{sx:{m:"auto"}}),Object(O.jsx)(T,{}),Object(O.jsx)(ie,{}),Object(O.jsx)(s.c,{icon:Object(O.jsx)(I.a,{sx:{my:"12px",color:t},size:"small",children:Object(O.jsx)(v.a,{children:"comments"})}),children:Object(O.jsx)(s.d,{})}),Object(O.jsx)(x.e,{sx:{m:"auto"}})]})},re=i(888),ne=i(36);const oe=Object(r.a)("div")((()=>({position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}})));var se=()=>{const{settings:e,updateSettings:t}=Object(l.a)(),i=()=>{t({secondarySidebar:{open:!e.secondarySidebar.open}})},{palette:a}=Object(o.a)(),c=a.primary.contrastText;return Object(O.jsxs)(oe,{className:Object(ne.a)({open:e.secondarySidebar.open}),children:[e.secondarySidebar.open&&Object(O.jsx)(I.a,{onClick:i,size:"small","aria-label":"toggle",children:Object(O.jsx)(v.a,{sx:{color:c},children:"close"})}),!e.secondarySidebar.open&&Object(O.jsx)(re.a,{color:"primary","aria-label":"expand",onClick:i,children:Object(O.jsx)(v.a,{sx:{color:c},children:"settings"})})]})};var le=()=>{const{settings:e}=Object(l.a)(),t=e.themes[e.secondarySidebar.theme];return Object(O.jsxs)(B,{theme:t,children:[e.secondarySidebar.open&&Object(O.jsx)(ce,{}),Object(O.jsx)(se,{})]})},de=i(194);const je=Object(Q.a)(D.a)((()=>({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 18px 20px 29px"})));Object(Q.a)(x.e)((e=>{let{mode:t}=e;return{fontSize:18,marginLeft:".5rem",display:"compact"===t?"none":"block"}}));var Ae=e=>{let{children:t}=e;const{settings:i}=Object(l.a)(),a=i.layout1Settings.leftSidebar,{mode:c}=a;return Object(O.jsxs)(je,{children:[Object(O.jsx)(D.a,{display:"flex",alignItems:"center",children:Object(O.jsx)("img",{src:"data:image/gif;base64,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",alt:"spmcil",width:200})}),Object(O.jsx)(D.a,{className:"sidenavHoverShow",sx:{display:"compact"===c?"none":"block"},children:t||null})]})},be=i(275);const me=Object(r.a)(m.a)((()=>({paddingLeft:"1rem",paddingRight:"1rem",position:"relative"}))),he=Object(r.a)("div")((e=>{let{theme:t}=e;return{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[t.breakpoints.up("lg")]:{display:"none"}}}));var ge=e=>{let{children:t}=e;const{settings:i,updateSettings:a}=Object(l.a)(),{user:c}=Object(P.a)();console.log(c);return Object(O.jsxs)(j.Fragment,{children:[Object(O.jsxs)(me,{options:{suppressScrollX:!0},children:[t,Object(O.jsx)(s.i,{items:"SUPERADMIN"===c.role?be.b:"ADMIN"===c.role?be.c:be.a})]}),Object(O.jsx)(he,{onClick:()=>(e=>{let t=i.activeLayout+"Settings",c=i[t];a({...i,[t]:{...c,leftSidebar:{...c.leftSidebar,...e}}})})({mode:"close"})})]})};const pe=Object(r.a)(n.a)((e=>{let{theme:t,width:i,primaryBg:a,bgImgURL:c}=e;return{position:"fixed",top:0,left:0,height:"100vh",width:i,boxShadow:K.b[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.palette.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(a,", 0.96), rgba(").concat(a,", 0.96)), url(").concat(c,")"),"&:hover":{width:d.a,"& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}})),xe=Object(r.a)(n.a)((()=>({height:"100%",display:"flex",flexDirection:"column"}))),Oe=()=>{const e=Object(o.a)(),{settings:t,updateSettings:i}=Object(l.a)(),a=t.layout1Settings.leftSidebar,{mode:c,bgImgURL:r}=a,n=Object(de.a)(e.palette.primary.main);return Object(O.jsx)(pe,{bgImgURL:r,primaryBg:n,width:"compact"===c?d.b:d.a,children:Object(O.jsxs)(xe,{children:[Object(O.jsx)(Ae,{}),Object(O.jsx)(ge,{})]})})};var ue=A.a.memo(Oe),we=i(577),fe=i(492),ye=i(564);i(32);var Ce=i(43);Object(r.a)("div")((()=>({padding:"16px",marginBottom:"16px",display:"flex",alignItems:"center",height:d.c,boxShadow:K.b[6],"& h5":{marginLeft:"8px",marginTop:0,marginBottom:0,fontWeight:"500"}}))),Object(r.a)(n.a)((e=>{let{theme:t}=e;return{position:"relative","&:hover":{"& .messageTime":{display:"none"},"& .deleteButton":{opacity:"1"}},"& .messageTime":{color:t.palette.text.secondary},"& .icon":{fontSize:"1.25rem"}}})),Object(r.a)(I.a)((e=>{let{theme:t}=e;return{opacity:"0",position:"absolute",right:5,marginTop:9,marginRight:"24px",background:"rgba(0, 0, 0, 0.01)"}})),Object(r.a)("div")((e=>{let{theme:t}=e;return{padding:"12px 8px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0, 0, 0, 0.01)","& small":{fontWeight:"500",marginLeft:"16px",color:t.palette.text.secondary}}})),Object(r.a)("span")((e=>{let{theme:t}=e;return{fontWeight:"500",marginLeft:"16px",color:t.palette.text.secondary}}));const Be=Object(r.a)(I.a)((e=>{let{theme:t}=e;return{color:t.palette.text.primary}})),Ie=Object(r.a)("div")((e=>{let{theme:t}=e;return{top:0,zIndex:96,transition:"all 0.3s ease",boxShadow:K.b[8],height:d.c}})),ve=Object(r.a)(n.a)((e=>{let{theme:t}=e;return{padding:"8px",paddingLeft:18,paddingRight:20,height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:t.palette.primary.main,[t.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[t.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}}})),Qe=Object(r.a)(n.a)((()=>({display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}}))),ze=Object(r.a)(we.a)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",minWidth:185,"& a":{width:"100%",display:"flex",alignItems:"center",textDecoration:"none"},"& span":{marginRight:"10px",color:t.palette.text.primary}}})),ke=(Object(r.a)("div")((e=>{let{theme:t}=e;return{display:"inherit",[t.breakpoints.down("md")]:{display:"none !important"}}})),()=>{const e=Object(o.a)(),{settings:t,updateSettings:i}=Object(l.a)(),{logout:c,user:r}=Object(P.a)(),d=Object(a.a)(e.breakpoints.down("md"));return Object(O.jsx)(Ie,{children:Object(O.jsxs)(ve,{children:[Object(O.jsx)(n.a,{display:"flex",children:Object(O.jsx)(Be,{onClick:()=>{let e,{layout1Settings:a}=t;var c;e=d?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",c={mode:e},i({layout1Settings:{leftSidebar:{...c}}})},children:Object(O.jsx)(v.a,{children:"menu"})})}),Object(O.jsx)(n.a,{display:"flex",alignItems:"center",children:Object(O.jsxs)(s.f,{menuButton:Object(O.jsxs)(Qe,{children:[Object(O.jsx)(fe.a,{xsDown:!0,children:Object(O.jsxs)(x.e,{children:["Hi ",Object(O.jsx)("strong",{children:r.name})]})}),Object(O.jsx)(ye.a,{sx:{cursor:"pointer"},children:"TS"})]}),children:[Object(O.jsx)(ze,{children:Object(O.jsxs)(Ce.b,{to:"/",children:[Object(O.jsx)(v.a,{children:" home "}),Object(O.jsx)(x.e,{children:" Home "})]})}),Object(O.jsx)(ze,{children:Object(O.jsxs)(Ce.b,{to:"/changepassword",children:[Object(O.jsx)(v.a,{children:" settings "}),Object(O.jsx)(x.e,{children:" Change Password "})]})}),Object(O.jsxs)(ze,{onClick:c,children:[Object(O.jsx)(v.a,{children:" power_settings_new "}),Object(O.jsx)(x.e,{children:" Logout "})]})]})})]})})});var De=A.a.memo(ke);const Se=Object(r.a)(n.a)((e=>{let{theme:t}=e;return{display:"flex",background:t.palette.background.default}})),Ee=Object(r.a)(n.a)((()=>({height:"100%",display:"flex",overflowY:"auto",overflowX:"hidden",flexDirection:"column",justifyContent:"space-between"}))),qe=Object(r.a)(m.a)((()=>({height:"100%",position:"relative",display:"flex",flexGrow:"1",flexDirection:"column"}))),Ke=Object(r.a)(n.a)((e=>{let{width:t,secondarySidebar:i}=e;return{height:"100vh",display:"flex",flexGrow:"1",flexDirection:"column",verticalAlign:"top",marginLeft:t,position:"relative",overflow:"hidden",transition:"all 0.3s ease",marginRight:i.open?50:0}})),He=()=>{const{settings:e,updateSettings:t}=Object(l.a)(),{layout1Settings:i,secondarySidebar:r}=e,A=e.themes[i.topbar.theme],{leftSidebar:{mode:b,show:m}}=i,g=(()=>{switch(b){case"full":return d.a;case"compact":return d.b;default:return"0px"}})(),p=Object(o.a)(),x=Object(a.a)(p.breakpoints.down("md")),u=Object(j.useRef)({isMdScreen:x,settings:e}),w="theme-".concat(p.palette.type);return Object(j.useEffect)((()=>{let{settings:e}=u.current,i=e.layout1Settings.leftSidebar.mode;if(e.layout1Settings.leftSidebar.show){t({layout1Settings:{leftSidebar:{mode:x?"close":i}}})}}),[x]),Object(O.jsxs)(Se,{className:w,children:[m&&"close"!==b&&Object(O.jsx)(C,{children:Object(O.jsx)(ue,{})}),Object(O.jsxs)(Ke,{width:g,secondarySidebar:r,children:[i.topbar.show&&i.topbar.fixed&&Object(O.jsx)(c.a,{theme:A,children:Object(O.jsx)(De,{fixed:!0,className:"elevation-z8"})}),e.perfectScrollbar&&Object(O.jsxs)(qe,{children:[i.topbar.show&&!i.topbar.fixed&&Object(O.jsx)(c.a,{theme:A,children:Object(O.jsx)(De,{})}),Object(O.jsx)(n.a,{flexGrow:1,position:"relative",children:Object(O.jsx)(s.g,{children:Object(O.jsx)(h.b,{})})}),e.footer.show&&!e.footer.fixed&&Object(O.jsx)(f,{})]}),!e.perfectScrollbar&&Object(O.jsxs)(Ee,{children:[i.topbar.show&&!i.topbar.fixed&&Object(O.jsx)(c.a,{theme:A,children:Object(O.jsx)(De,{})}),Object(O.jsx)(n.a,{flexGrow:1,position:"relative",children:Object(O.jsx)(s.g,{children:Object(O.jsx)(h.b,{})})}),e.footer.show&&!e.footer.fixed&&Object(O.jsx)(f,{})]}),e.footer.show&&e.footer.fixed&&Object(O.jsx)(f,{})]}),e.secondarySidebar.show&&Object(O.jsx)(le,{})]})};t.default=A.a.memo(He)}}]);
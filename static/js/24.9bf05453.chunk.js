(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[24],{1263:function(e,t,a){"use strict";a.r(t);var c=a(1318),n=a(505),o=a(565),r=a(520),i=a(566),s=a(649),l=a(147),d=a(296),b=a(77),u=a(50),m=a(184),h=a(646),j=a(1),p=a(12),O=a(43),x=a(647),g=a(592),f=a(645),v=a.n(f),k=a(2);const w=Object(l.a)(d.a)((()=>({display:"flex",alignItems:"center"}))),y=Object(l.a)(w)((()=>({justifyContent:"center"}))),z=Object(l.a)(d.a)((()=>({height:"100%",padding:"32px",position:"relative",background:"rgba(0, 0, 0, 0.01)"}))),C=Object(l.a)(y)((()=>({background:"#1A2038",minHeight:"100% !important","& .card":{maxWidth:800,minHeight:400,margin:"1rem",display:"flex",borderRadius:12,alignItems:"center"}}))),S={email:"test@spmcil.com",password:"dummyPass",remember:!0},B=x.a().shape({password:x.b().min(6,"Password must be 6 character length").required("Password is required!"),email:x.b().email("Invalid Email address").required("Email is required!")});t.default=()=>{const e=Object(b.a)(),t=Object(p.o)(),[a,l]=Object(j.useState)(!1),{login:x}=Object(m.a)();return Object(k.jsx)(C,{children:Object(k.jsx)(n.a,{className:"card",children:Object(k.jsxs)(o.a,{container:!0,children:[Object(k.jsx)(o.a,{item:!0,sm:6,xs:12,children:Object(k.jsx)(y,{p:4,height:"100%",sx:{minWidth:320},children:Object(k.jsx)("img",{src:g.a,width:"100%",alt:""})})}),Object(k.jsx)(o.a,{item:!0,sm:6,xs:12,children:Object(k.jsxs)(z,{children:[Object(k.jsx)("h1",{children:"SPMCIL"}),Object(k.jsx)("h3",{children:"Sign In"}),Object(k.jsx)(h.a,{onSubmit:async e=>{l(!0);try{await x(e.email,e.password),t("/")}catch(a){l(!1)}},initialValues:S,validationSchema:B,children:t=>{let{values:n,errors:o,touched:l,handleChange:b,handleBlur:m,handleSubmit:h}=t;return Object(k.jsxs)("form",{onSubmit:h,children:[Object(k.jsx)(r.a,{fullWidth:!0,size:"small",type:"email",name:"email",label:"Email",variant:"outlined",onBlur:m,value:n.email,onChange:b,helperText:l.email&&o.email,error:Boolean(o.email&&l.email),sx:{mb:3}}),Object(k.jsx)(r.a,{fullWidth:!0,size:"small",name:"password",type:"password",label:"Password",variant:"outlined",onBlur:m,value:n.password,onChange:b,helperText:l.password&&o.password,error:Boolean(o.password&&l.password),sx:{mb:1.5}}),Object(k.jsxs)(d.a,{children:[Object(k.jsxs)(d.a,{sx:{display:"flex"},children:[Object(k.jsx)(i.a,{sx:{border:"1px solid black",letterSpacing:5,fontWeight:"bolder",flexGrow:1},children:"syer5"}),Object(k.jsx)(v.a,{})]}),Object(k.jsx)(r.a,{size:"small",fullWidth:!0,placeholder:"Enter Captcha"})]}),Object(k.jsxs)(w,{justifyContent:"space-between",children:[Object(k.jsxs)(w,{gap:1,children:[Object(k.jsx)(s.a,{size:"small",name:"remember",onChange:b,checked:n.remember,sx:{padding:0}}),Object(k.jsx)(u.c,{children:"Remember Me"})]}),Object(k.jsx)(O.c,{to:"/session/forgot-password",style:{color:e.palette.primary.main},children:"Forgot password?"})]}),Object(k.jsx)(c.a,{type:"submit",color:"primary",loading:a,variant:"contained",sx:{my:2},children:"Login"})]})}})]})})]})})})}},583:function(e,t,a){"use strict";var c=a(6),n=a(3),o=a(1),r=a(8),i=a(98),s=a(10),l=a(5),d=a(99),b=a(44),u=a(562),m=a(57),h=a(49);function j(e){return Object(h.a)("PrivateSwitchBase",e)}Object(m.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var p=a(2);const O=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=Object(l.a)(u.a)((e=>{let{ownerState:t}=e;return Object(n.a)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),g=Object(l.a)("input",{shouldForwardProp:l.b})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),f=o.forwardRef((function(e,t){const{autoFocus:a,checked:o,checkedIcon:l,className:u,defaultChecked:m,disabled:h,disableFocusRipple:f=!1,edge:v=!1,icon:k,id:w,inputProps:y,inputRef:z,name:C,onBlur:S,onChange:B,onFocus:I,readOnly:P,required:R=!1,tabIndex:F,type:M,value:E}=e,N=Object(c.a)(e,O),[q,H]=Object(d.a)({controlled:o,default:Boolean(m),name:"SwitchBase",state:"checked"}),W=Object(b.a)();let L=h;W&&"undefined"===typeof L&&(L=W.disabled);const V="checkbox"===M||"radio"===M,J=Object(n.a)({},e,{checked:q,disabled:L,disableFocusRipple:f,edge:v}),T=(e=>{const{classes:t,checked:a,disabled:c,edge:n}=e,o={root:["root",a&&"checked",c&&"disabled",n&&"edge".concat(Object(s.a)(n))],input:["input"]};return Object(i.a)(o,j,t)})(J);return Object(p.jsxs)(x,Object(n.a)({component:"span",className:Object(r.a)(T.root,u),centerRipple:!0,focusRipple:!f,disabled:L,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),W&&W.onFocus&&W.onFocus(e)},onBlur:e=>{S&&S(e),W&&W.onBlur&&W.onBlur(e)},ownerState:J,ref:t},N,{children:[Object(p.jsx)(g,Object(n.a)({autoFocus:a,checked:o,defaultChecked:m,className:T.input,disabled:L,id:V?w:void 0,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;H(t),B&&B(e,t)},readOnly:P,ref:z,required:R,ownerState:J,tabIndex:F,type:M},"checkbox"===M&&void 0===E?{}:{value:E},y)),q?l:k]}))}));t.a=f},592:function(e,t,a){"use strict";t.a=a.p+"static/media/dreamer.b787ed08.svg"},649:function(e,t,a){"use strict";var c=a(6),n=a(3),o=a(1),r=a(8),i=a(98),s=a(478),l=a(583),d=a(35),b=a(2),u=Object(d.a)(Object(b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=Object(d.a)(Object(b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),j=a(10),p=a(11),O=a(5),x=a(57),g=a(49);function f(e){return Object(g.a)("MuiCheckbox",e)}var v=Object(x.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]);const k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=Object(O.a)(l.a,{shouldForwardProp:e=>Object(O.b)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.indeterminate&&t.indeterminate,t["size".concat(Object(j.a)(a.size))],"default"!==a.color&&t["color".concat(Object(j.a)(a.color))]]}})((e=>{let{theme:t,ownerState:a}=e;return Object(n.a)({color:(t.vars||t).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===a.color?t.vars.palette.action.activeChannel:t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):Object(s.a)("default"===a.color?t.palette.action.active:t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{["&.".concat(v.checked,", &.").concat(v.indeterminate)]:{color:(t.vars||t).palette[a.color].main},["&.".concat(v.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),y=Object(b.jsx)(m,{}),z=Object(b.jsx)(u,{}),C=Object(b.jsx)(h,{}),S=o.forwardRef((function(e,t){var a,s;const l=Object(p.a)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=y,color:u="primary",icon:m=z,indeterminate:h=!1,indeterminateIcon:O=C,inputProps:x,size:g="medium",className:v}=l,S=Object(c.a)(l,k),B=h?O:m,I=h?O:d,P=Object(n.a)({},l,{color:u,indeterminate:h,size:g}),R=(e=>{const{classes:t,indeterminate:a,color:c,size:o}=e,r={root:["root",a&&"indeterminate","color".concat(Object(j.a)(c)),"size".concat(Object(j.a)(o))]},s=Object(i.a)(r,f,t);return Object(n.a)({},t,s)})(P);return Object(b.jsx)(w,Object(n.a)({type:"checkbox",inputProps:Object(n.a)({"data-indeterminate":h},x),icon:o.cloneElement(B,{fontSize:null!=(a=B.props.fontSize)?a:g}),checkedIcon:o.cloneElement(I,{fontSize:null!=(s=I.props.fontSize)?s:g}),ownerState:P,ref:t,className:Object(r.a)(R.root,v)},S,{classes:R}))}));t.a=S}}]);
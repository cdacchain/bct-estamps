(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[35],{1276:function(a,e,n){"use strict";n.r(e);var t=n(5),i=n(295),r=n(500),o=n(501),s=n(493),b=n(626),c=n(577),l=n(570),d=n(292),m=n(571),h=n(572),j=n(573),u=n(574),v=n(575),p=(n(1),n(2));const O=Object(t.a)("div")((a=>{let{theme:e}=a;return{margin:"30px",[e.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[e.breakpoints.down("sm")]:{marginBottom:"16px"}}}})),x=[{name:"Andhra Pradesh",abbreviation:"AP"},{name:"Arunachal Pradesh",abbreviation:"AR"},{name:"Assam",abbreviation:"AS"},{name:"Bihar",abbreviation:"BR"},{name:"Chhattisgarh",abbreviation:"CT"},{name:"Goa",abbreviation:"GA"},{name:"Gujarat",abbreviation:"GJ"},{name:"Haryana",abbreviation:"HR"},{name:"Himachal Pradesh",abbreviation:"HP"},{name:"Jharkhand",abbreviation:"JH"},{name:"Karnataka",abbreviation:"KA"},{name:"Kerala",abbreviation:"KL"},{name:"Madhya Pradesh",abbreviation:"MP"},{name:"Maharashtra",abbreviation:"MH"},{name:"Manipur",abbreviation:"MN"},{name:"Meghalaya",abbreviation:"ML"},{name:"Mizoram",abbreviation:"MZ"},{name:"Nagaland",abbreviation:"NL"},{name:"Odisha",abbreviation:"OD"},{name:"Punjab",abbreviation:"PB"},{name:"Rajasthan",abbreviation:"RJ"},{name:"Sikkim",abbreviation:"SK"},{name:"Tamil Nadu",abbreviation:"TN"},{name:"Telangana",abbreviation:"TG"},{name:"Tripura",abbreviation:"TR"},{name:"Uttar Pradesh",abbreviation:"UP"},{name:"Uttarakhand",abbreviation:"UL"},{name:"West Bengal",abbreviation:"WB"}],g=[{name:"Andaman and Nicobar Islands",abbreviation:"AN"},{name:"Chandigarh",abbreviation:"CH"},{name:"Dadar and Nagar Haveli",abbreviation:"DN"},{name:"Daman and Diu",abbreviation:"DD"},{name:"Delhi",abbreviation:"DL"},{name:"Jammu and Kashmir",abbreviation:"JK"},{name:"Ladakh",abbreviation:"LA"},{name:"Lakshadweep",abbreviation:"LD"},{name:"Pondicherry",abbreviation:"PY"}],k=[{slno:1,name:"Bank of Baroda",abbreviation:"BOB",address:"123 Main Road"},{slno:2,name:"Bank of India",abbreviation:"BOI",address:"123 Main Road"},{slno:3,name:"Bank of Maharashtra",abbreviation:"BOM",address:"123 Main Road"},{slno:4,name:"Punjab National Bank",abbreviation:"PNB",address:"123 Main Road"},{slno:5,name:"Punjab & Sind Bank",abbreviation:"PSB",address:"123 Main Road"},{slno:6,name:"State Bank of India",abbreviation:"SBI",address:"123 Main Road"}];e.default=function(){return Object(p.jsxs)(O,{children:[Object(p.jsxs)(i.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mt:2},children:[Object(p.jsx)(i.a,{children:Object(p.jsx)("h2",{children:"Authorised Banks"})}),Object(p.jsxs)(r.a,{sx:{width:300},size:"small",children:[Object(p.jsx)(o.a,{id:"demo-simple-select-label",children:"Choose State"}),Object(p.jsxs)(s.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Choose State",children:[Object(p.jsx)(b.a,{children:"States"}),x.map((a=>Object(p.jsx)(c.a,{value:a.abbreviation,children:a.name},a.name))),Object(p.jsx)(b.a,{children:"Union Territories"}),g.map((a=>Object(p.jsx)(c.a,{value:a.abbreviation,children:a.name},a.name)))]})]})]}),Object(p.jsx)(l.a,{component:d.a,children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(h.a,{children:Object(p.jsxs)(j.a,{sx:{"& .MuiTableCell-head":{color:"white",backgroundColor:"#495057"}},children:[Object(p.jsx)(u.a,{align:"center",children:"SL.NO."}),Object(p.jsx)(u.a,{align:"center",colSpan:2,children:"Bank Name"}),Object(p.jsx)(u.a,{align:"center",colSpan:2,children:"Address"})]})}),Object(p.jsx)(v.a,{children:k.map((a=>Object(p.jsxs)(j.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(p.jsx)(u.a,{component:"th",scope:"row",align:"center",children:a.slno}),Object(p.jsx)(u.a,{align:"center",colSpan:2,children:a.name}),Object(p.jsx)(u.a,{align:"center",colSpan:2,children:a.address})]},a.slno)))})]})})]})}},626:function(a,e,n){"use strict";var t=n(6),i=n(3),r=n(1),o=n(8),s=n(98),b=n(5),c=n(11),l=n(10),d=n(57),m=n(49);function h(a){return Object(m.a)("MuiListSubheader",a)}Object(d.a)("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);var j=n(2);const u=["className","color","component","disableGutters","disableSticky","inset"],v=Object(b.a)("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:n}=a;return[e.root,"default"!==n.color&&e["color".concat(Object(l.a)(n.color))],!n.disableGutters&&e.gutters,n.inset&&e.inset,!n.disableSticky&&e.sticky]}})((a=>{let{theme:e,ownerState:n}=a;return Object(i.a)({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},"primary"===n.color&&{color:(e.vars||e).palette.primary.main},"inherit"===n.color&&{color:"inherit"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.inset&&{paddingLeft:72},!n.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})})),p=r.forwardRef((function(a,e){const n=Object(c.a)({props:a,name:"MuiListSubheader"}),{className:r,color:b="default",component:d="li",disableGutters:m=!1,disableSticky:p=!1,inset:O=!1}=n,x=Object(t.a)(n,u),g=Object(i.a)({},n,{color:b,component:d,disableGutters:m,disableSticky:p,inset:O}),k=(a=>{const{classes:e,color:n,disableGutters:t,inset:i,disableSticky:r}=a,o={root:["root","default"!==n&&"color".concat(Object(l.a)(n)),!t&&"gutters",i&&"inset",!r&&"sticky"]};return Object(s.a)(o,h,e)})(g);return Object(j.jsx)(v,Object(i.a)({as:d,className:Object(o.a)(k.root,r),ref:e,ownerState:g},x))}));p.muiSkipListHighlight=!0;e.a=p}}]);
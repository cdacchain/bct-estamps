(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[22],{1316:function(e,a,t){"use strict";t.r(a);var n=t(199),r=t(570),c=t(292),i=t(571),d=t(572),l=t(573),s=t(574),o=t(575),j=t(567),h=t(560),b=t(495),x=t(295),p=t(496),u=t(1),O=t.n(u),m=t(617),g=t.n(m),f=t(676),v=t.n(f),N=t(882),k=t.n(N),w=t.p+"static/media/TestData.31c72ab7.pdf",C=t(2);const P=Object(n.a)("div")((e=>{let{theme:a}=e;return{margin:"30px",[a.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[a.breakpoints.down("sm")]:{marginBottom:"16px"}}}})),M=Object(n.a)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1,border:"2px solid red"}),z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3};a.default=function(){const e=[{orderNo:1,orderDate:"20-07-2002",state:"Punjab",bankName:"Punjab National Bank",branch:"Branch 1",status:"Generated"},{orderNo:2,orderDate:"20-08-2002",state:"Tamil Nadu",bankName:"Bank of Maharashtra",branch:"Branch 2",status:"Received"},{orderNo:3,orderDate:"20-09-2002",state:"Maharastra",bankName:"State Bank of India",branch:"Branch 3",status:"Pending"},{orderNo:4,orderDate:"20-10-2002",state:"Gujurat",bankName:"Union Bank of India",branch:"Branch 4",status:"Received"}],[a,t]=O.a.useState(0),[n,u]=O.a.useState(5),[m,f]=O.a.useState(!1),N=()=>{f(!0)},[D,B]=O.a.useState(!1),H=()=>{B(!0)},y=()=>{B(!1)};return Object(C.jsxs)(P,{children:[Object(C.jsxs)(r.a,{component:c.a,children:[Object(C.jsxs)(i.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(C.jsx)(d.a,{children:Object(C.jsxs)(l.a,{sx:{"& .MuiTableCell-head":{color:"white",backgroundColor:"#495057"}},children:[Object(C.jsx)(s.a,{align:"center",children:"Order No."}),Object(C.jsx)(s.a,{align:"center",children:"State"}),Object(C.jsx)(s.a,{align:"center",children:"Bank Name"}),Object(C.jsx)(s.a,{align:"center",children:"Branch"}),Object(C.jsx)(s.a,{align:"center",children:"Order Date"}),Object(C.jsx)(s.a,{align:"center",children:"Status"}),Object(C.jsx)(s.a,{align:"center",children:"QR Code"}),Object(C.jsx)(s.a,{align:"center",children:"View Details"})]})}),Object(C.jsx)(o.a,{children:e.map((e=>Object(C.jsxs)(l.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(C.jsx)(s.a,{component:"th",scope:"row",align:"center",children:e.orderNo}),Object(C.jsx)(s.a,{align:"center",children:e.state}),Object(C.jsx)(s.a,{align:"center",children:e.bankName}),Object(C.jsx)(s.a,{align:"center",children:e.branch}),Object(C.jsx)(s.a,{align:"center",children:e.orderDate}),Object(C.jsx)(s.a,{align:"center",children:e.status}),Object(C.jsx)(s.a,{align:"center",children:"Generated"===e.status?Object(C.jsx)(j.a,{children:Object(C.jsx)("a",{href:w,download:"testfile.pdf",children:Object(C.jsx)(k.a,{})})}):"NA"}),Object(C.jsx)(s.a,{align:"center",children:Object(C.jsx)(j.a,{onClick:N,children:Object(C.jsx)(g.a,{})})})]},e.orderNo)))})]}),Object(C.jsx)(h.a,{component:"div",count:e.length,onPageChange:(e,a)=>{t(a)},onRowsPerPageChange:e=>{u(+e.target.value),t(0)},page:a,rowsPerPage:n,rowsPerPageOptions:[5,10,25]})]}),Object(C.jsx)(b.a,{open:m,onClose:()=>{f(!1)},"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:Object(C.jsxs)(x.a,{sx:{...z,width:800},children:[Object(C.jsx)("h2",{id:"parent-modal-title",children:"Order Details"}),Object(C.jsx)(r.a,{component:c.a,children:Object(C.jsxs)(i.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(C.jsx)(d.a,{children:Object(C.jsxs)(l.a,{sx:{"& .MuiTableCell-head":{color:"white",backgroundColor:"#495057"}},children:[Object(C.jsx)(s.a,{align:"center",children:"Order No."}),Object(C.jsx)(s.a,{align:"center",children:"Denomination"}),Object(C.jsx)(s.a,{align:"center",children:"Required"}),Object(C.jsx)(s.a,{align:"center"})]})}),Object(C.jsx)(o.a,{children:[{orderNo:1,denomination:10,requiredNo:20},{orderNo:2,denomination:20,requiredNo:50},{orderNo:3,denomination:50,requiredNo:10}].map((e=>Object(C.jsxs)(l.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(C.jsx)(s.a,{component:"th",scope:"row",align:"center",children:e.orderNo}),Object(C.jsx)(s.a,{align:"center",children:e.denomination}),Object(C.jsx)(s.a,{align:"center",children:e.requiredNo}),Object(C.jsx)(s.a,{align:"center",children:Object(C.jsx)(p.a,{onClick:H,children:"Upload unique IDs"})})]},e.orderNo)))})]})})]})}),Object(C.jsx)(b.a,{open:D,"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:Object(C.jsxs)(x.a,{sx:{...z,width:400},children:[Object(C.jsx)("h2",{id:"child-modal-title",children:"Upload unique IDs"}),Object(C.jsxs)(x.a,{sx:{border:"3px dashed black",borderRadius:7,display:"flex",flexDirection:"column",alignItems:"center",mt:2,mb:2,pt:1},children:[Object(C.jsx)(v.a,{}),Object(C.jsx)("p",{children:"Upload .xlsx files"}),Object(C.jsx)(M,{type:"file",accept:".xlsx"})]}),Object(C.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(p.a,{onClick:y,children:"Close"}),Object(C.jsx)(p.a,{variant:"contained",onClick:y,children:"Upload"})]})]})})]})}},617:function(e,a,t){"use strict";var n=t(297);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(298)),c=t(2),i=(0,r.default)((0,c.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");a.default=i},676:function(e,a,t){"use strict";var n=t(297);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(298)),c=t(2),i=(0,r.default)((0,c.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");a.default=i},882:function(e,a,t){"use strict";var n=t(297);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(298)),c=t(2),i=(0,r.default)((0,c.jsx)("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"}),"PictureAsPdf");a.default=i}}]);
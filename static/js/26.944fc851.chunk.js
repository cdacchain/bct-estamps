(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[26],{1166:function(e,t,a){"use strict";var r=a(297);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(298)),o=a(2),l=(0,n.default)((0,o.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");t.default=l},1287:function(e,t,a){"use strict";var r=a(6),n=a(3),o=a(1),l=a(8),i=a(98),c=a(563),s=a(281),u=a(144),d=a(489),b=a(483),m=a(179),v=a(143),p=a(484);var h={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var f=a(270);function g(e,t){return e-t}function j(e,t,a){return null==e?t:Math.min(Math.max(t,e),a)}function O(e,t){var a;const{index:r}=null!=(a=e.reduce(((e,a,r)=>{const n=Math.abs(t-a);return null===e||n<e.distance||n===e.distance?{distance:n,index:r}:e}),null))?a:{};return r}function x(e,t){if(void 0!==t.current&&e.changedTouches){const a=e;for(let e=0;e<a.changedTouches.length;e+=1){const r=a.changedTouches[e];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function k(e,t,a){return 100*(e-t)/(a-t)}function y(e,t,a){const r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function S(e){let{values:t,newValue:a,index:r}=e;const n=t.slice();return n[r]=a,n.sort(g)}function w(e){let{sliderRef:t,activeIndex:a,setActive:r}=e;var n,o;const l=Object(u.a)(t.current);var i;null!=(n=t.current)&&n.contains(l.activeElement)&&Number(null==l||null==(o=l.activeElement)?void 0:o.getAttribute("data-index"))===a||(null==(i=t.current)||i.querySelector('[type="range"][data-index="'.concat(a,'"]')).focus());r&&r(a)}function L(e,t){return"number"===typeof e&&"number"===typeof t?e===t:"object"===typeof e&&"object"===typeof t&&function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e,t)=>e===t;return e.length===t.length&&e.every(((e,r)=>a(e,t[r])))}(e,t)}const C={horizontal:{offset:e=>({left:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},"horizontal-reverse":{offset:e=>({right:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},vertical:{offset:e=>({bottom:"".concat(e,"%")}),leap:e=>({height:"".concat(e,"%")})}},R=e=>e;let z;function M(){return void 0===z&&(z="undefined"===typeof CSS||"function"!==typeof CSS.supports||CSS.supports("touch-action","none")),z}var P=a(478),T=a(11),A=a(5),N=a(28);var I=e=>!e||!Object(s.a)(e),E=a(10),V=a(57),F=a(49);function D(e){return Object(F.a)("MuiSlider",e)}var Y=Object(V.a)("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),B=a(2);const H=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function X(e){return e}const G=Object(A.a)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["color".concat(Object(E.a)(a.color))],"medium"!==a.size&&t["size".concat(Object(E.a)(a.size))],a.marked&&t.marked,"vertical"===a.orientation&&t.vertical,"inverted"===a.track&&t.trackInverted,!1===a.track&&t.trackFalse]}})((e=>{let{theme:t,ownerState:a}=e;return Object(n.a)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(t.vars||t).palette[a.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===a.orientation&&Object(n.a)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===a.size&&{height:2},a.marked&&{marginBottom:20}),"vertical"===a.orientation&&Object(n.a)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===a.size&&{width:2},a.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},["&.".concat(Y.disabled)]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},["&.".concat(Y.dragging)]:{["& .".concat(Y.thumb,", & .").concat(Y.track)]:{transition:"none"}}})})),W=Object(A.a)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})((e=>{let{ownerState:t}=e;return Object(n.a)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===t.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===t.track&&{opacity:1})})),_=Object(A.a)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})((e=>{let{theme:t,ownerState:a}=e;const r="light"===t.palette.mode?Object(P.e)(t.palette[a.color].main,.62):Object(P.b)(t.palette[a.color].main,.5);return Object(n.a)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest})},"small"===a.size&&{border:"none"},"horizontal"===a.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===a.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===a.track&&{display:"none"},"inverted"===a.track&&{backgroundColor:t.vars?t.vars.palette.Slider["".concat(a.color,"Track")]:r,borderColor:t.vars?t.vars.palette.Slider["".concat(a.color,"Track")]:r})})),J=Object(A.a)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.thumb,t["thumbColor".concat(Object(E.a)(a.color))],"medium"!==a.size&&t["thumbSize".concat(Object(E.a)(a.size))]]}})((e=>{let{theme:t,ownerState:a}=e;return Object(n.a)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest})},"small"===a.size&&{width:12,height:12},"horizontal"===a.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":Object(n.a)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"small"===a.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},["&:hover, &.".concat(Y.focusVisible)]:{boxShadow:"0px 0px 0px 8px ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.16)"):Object(P.a)(t.palette[a.color].main,.16)),"@media (hover: none)":{boxShadow:"none"}},["&.".concat(Y.active)]:{boxShadow:"0px 0px 0px 14px ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.16)"):Object(P.a)(t.palette[a.color].main,.16))},["&.".concat(Y.disabled)]:{"&:hover":{boxShadow:"none"}}})})),q=Object(A.a)((function(e){const{children:t,className:a,value:r}=e,n=(e=>{const{open:t}=e;return{offset:Object(l.a)(t&&Y.valueLabelOpen),circle:Y.valueLabelCircle,label:Y.valueLabelLabel}})(e);return t?o.cloneElement(t,{className:Object(l.a)(t.props.className)},Object(B.jsxs)(o.Fragment,{children:[t.props.children,Object(B.jsx)("span",{className:Object(l.a)(n.offset,a),"aria-hidden":!0,children:Object(B.jsx)("span",{className:n.circle,children:Object(B.jsx)("span",{className:n.label,children:r})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})((e=>{let{theme:t,ownerState:a}=e;return Object(n.a)({["&.".concat(Y.valueLabelOpen)]:{transform:"".concat("vertical"===a.orientation?"translateY(-50%)":"translateY(-100%)"," scale(1)")},zIndex:1,whiteSpace:"nowrap"},t.typography.body2,{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),transform:"".concat("vertical"===a.orientation?"translateY(-50%)":"translateY(-100%)"," scale(0)"),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===a.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"vertical"===a.orientation&&{right:"small"===a.size?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},"small"===a.size&&{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"})})),U=Object(A.a)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Object(A.c)(e)&&"markActive"!==e,overridesResolver:(e,t)=>{const{markActive:a}=e;return[t.mark,a&&t.markActive]}})((e=>{let{theme:t,ownerState:a,markActive:r}=e;return Object(n.a)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===a.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},r&&{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8})})),K=Object(A.a)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Object(A.c)(e)&&"markLabelActive"!==e,overridesResolver:(e,t)=>t.markLabel})((e=>{let{theme:t,ownerState:a,markLabelActive:r}=e;return Object(n.a)({},t.typography.body2,{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===a.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===a.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},r&&{color:(t.vars||t).palette.text.primary})})),Q=e=>{let{children:t}=e;return t},Z=o.forwardRef((function(e,t){var a,z,P,A,V,F,Y,Z,$,ee,te,ae,re,ne,oe,le,ie,ce,se,ue,de,be,me,ve;const pe=Object(T.a)({props:e,name:"MuiSlider"}),he="rtl"===Object(N.a)().direction,{"aria-label":fe,"aria-valuetext":ge,"aria-labelledby":je,component:Oe="span",components:xe={},componentsProps:ke={},color:ye="primary",classes:Se,className:we,disableSwap:Le=!1,disabled:Ce=!1,getAriaLabel:Re,getAriaValueText:ze,marks:Me=!1,max:Pe=100,min:Te=0,orientation:Ae="horizontal",size:Ne="medium",step:Ie=1,scale:Ee=X,slotProps:Ve,slots:Fe,track:De="normal",valueLabelDisplay:Ye="off",valueLabelFormat:Be=X}=pe,He=Object(r.a)(pe,H),Xe=Object(n.a)({},pe,{isRtl:he,max:Pe,min:Te,classes:Se,disabled:Ce,disableSwap:Le,orientation:Ae,marks:Me,color:ye,size:Ne,step:Ie,scale:Ee,track:De,valueLabelDisplay:Ye,valueLabelFormat:Be}),{axisProps:Ge,getRootProps:We,getHiddenInputProps:_e,getThumbProps:Je,open:qe,active:Ue,axis:Ke,focusedThumbIndex:Qe,range:Ze,dragging:$e,marks:et,values:tt,trackOffset:at,trackLeap:rt,getThumbStyle:nt}=function(e){const{"aria-labelledby":t,defaultValue:a,disabled:r=!1,disableSwap:l=!1,isRtl:i=!1,marks:c=!1,max:s=100,min:z=0,name:P,onChange:T,onChangeCommitted:A,orientation:N="horizontal",rootRef:I,scale:E=R,step:V=1,tabIndex:F,value:D}=e,Y=o.useRef(),[B,H]=o.useState(-1),[X,G]=o.useState(-1),[W,_]=o.useState(!1),J=o.useRef(0),[q,U]=Object(d.a)({controlled:D,default:null!=a?a:z,name:"Slider"}),K=T&&((e,t,a)=>{const r=e.nativeEvent||e,n=new r.constructor(r.type,r);Object.defineProperty(n,"target",{writable:!0,value:{value:t,name:P}}),T(n,t,a)}),Q=Array.isArray(q);let Z=Q?q.slice().sort(g):[q];Z=Z.map((e=>j(e,z,s)));const $=!0===c&&null!==V?[...Array(Math.floor((s-z)/V)+1)].map(((e,t)=>({value:z+V*t}))):c||[],ee=$.map((e=>e.value)),{isFocusVisibleRef:te,onBlur:ae,onFocus:re,ref:ne}=Object(b.a)(),[oe,le]=o.useState(-1),ie=o.useRef(),ce=Object(m.a)(ne,ie),se=Object(m.a)(I,ce),ue=e=>t=>{var a;const r=Number(t.currentTarget.getAttribute("data-index"));re(t),!0===te.current&&le(r),G(r),null==e||null==(a=e.onFocus)||a.call(e,t)},de=e=>t=>{var a;ae(t),!1===te.current&&le(-1),G(-1),null==e||null==(a=e.onBlur)||a.call(e,t)};Object(v.a)((()=>{var e;r&&ie.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[r]),r&&-1!==B&&H(-1),r&&-1!==oe&&le(-1);const be=o.useRef();let me=N;i&&"horizontal"===N&&(me+="-reverse");const ve=e=>{let{finger:t,move:a=!1}=e;const{current:r}=ie,{width:n,height:o,bottom:i,left:c}=r.getBoundingClientRect();let u,d;if(u=0===me.indexOf("vertical")?(i-t.y)/o:(t.x-c)/n,-1!==me.indexOf("-reverse")&&(u=1-u),d=function(e,t,a){return(a-t)*e+t}(u,z,s),V)d=y(d,V,z);else{const e=O(ee,d);d=ee[e]}d=j(d,z,s);let b=0;if(Q){b=a?be.current:O(Z,d),l&&(d=j(d,Z[b-1]||-1/0,Z[b+1]||1/0));const e=d;d=S({values:Z,newValue:d,index:b}),l&&a||(b=d.indexOf(e),be.current=b)}return{newValue:d,activeIndex:b}},pe=Object(p.a)((e=>{const t=x(e,Y);if(!t)return;if(J.current+=1,"mousemove"===e.type&&0===e.buttons)return void he(e);const{newValue:a,activeIndex:r}=ve({finger:t,move:!0});w({sliderRef:ie,activeIndex:r,setActive:H}),U(a),!W&&J.current>2&&_(!0),K&&!L(a,q)&&K(e,a,r)})),he=Object(p.a)((e=>{const t=x(e,Y);if(_(!1),!t)return;const{newValue:a}=ve({finger:t,move:!0});H(-1),"touchend"===e.type&&G(-1),A&&A(e,a),Y.current=void 0,ge()})),fe=Object(p.a)((e=>{if(r)return;M()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(Y.current=t.identifier);const a=x(e,Y);if(!1!==a){const{newValue:t,activeIndex:r}=ve({finger:a});w({sliderRef:ie,activeIndex:r,setActive:H}),U(t),K&&!L(t,q)&&K(e,t,r)}J.current=0;const n=Object(u.a)(ie.current);n.addEventListener("touchmove",pe),n.addEventListener("touchend",he)})),ge=o.useCallback((()=>{const e=Object(u.a)(ie.current);e.removeEventListener("mousemove",pe),e.removeEventListener("mouseup",he),e.removeEventListener("touchmove",pe),e.removeEventListener("touchend",he)}),[he,pe]);o.useEffect((()=>{const{current:e}=ie;return e.addEventListener("touchstart",fe,{passive:M()}),()=>{e.removeEventListener("touchstart",fe,{passive:M()}),ge()}}),[ge,fe]),o.useEffect((()=>{r&&ge()}),[r,ge]);const je=k(Q?Z[0]:z,z,s),Oe=k(Z[Z.length-1],z,s)-je,xe=e=>t=>{var a;null==(a=e.onMouseLeave)||a.call(e,t),G(-1)};return{active:B,axis:me,axisProps:C,dragging:W,focusedThumbIndex:oe,getHiddenInputProps:function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var o;const c=Object(f.a)(a),u={onChange:(d=c||{},e=>{var t;null==(t=d.onChange)||t.call(d,e);const a=Number(e.currentTarget.getAttribute("data-index")),r=Z[a],n=ee.indexOf(r);let o=e.target.valueAsNumber;if($&&null==V){const e=ee[ee.length-1];o=o>e?e:o<ee[0]?ee[0]:o<r?ee[n-1]:ee[n+1]}if(o=j(o,z,s),Q){l&&(o=j(o,Z[a-1]||-1/0,Z[a+1]||1/0));const e=o;o=S({values:Z,newValue:o,index:a});let t=a;l||(t=o.indexOf(e)),w({sliderRef:ie,activeIndex:t})}U(o),le(a),K&&!L(o,q)&&K(e,o,a),A&&A(e,o)}),onFocus:ue(c||{}),onBlur:de(c||{})};var d;const b=Object(n.a)({},c,u);return Object(n.a)({tabIndex:F,"aria-labelledby":t,"aria-orientation":N,"aria-valuemax":E(s),"aria-valuemin":E(z),name:P,type:"range",min:e.min,max:e.max,step:null===e.step&&e.marks?"any":null!=(o=e.step)?o:void 0,disabled:r},a,b,{style:Object(n.a)({},h,{direction:i?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object(f.a)(e),a={onMouseDown:(o=t||{},e=>{var t;if(null==(t=o.onMouseDown)||t.call(o,e),r)return;if(e.defaultPrevented)return;if(0!==e.button)return;e.preventDefault();const a=x(e,Y);if(!1!==a){const{newValue:t,activeIndex:r}=ve({finger:a});w({sliderRef:ie,activeIndex:r,setActive:H}),U(t),K&&!L(t,q)&&K(e,t,r)}J.current=0;const n=Object(u.a)(ie.current);n.addEventListener("mousemove",pe),n.addEventListener("mouseup",he)})};var o;const l=Object(n.a)({},t,a);return Object(n.a)({},e,{ref:se},l)},getThumbProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object(f.a)(e),a={onMouseOver:(r=t||{},e=>{var t;null==(t=r.onMouseOver)||t.call(r,e);const a=Number(e.currentTarget.getAttribute("data-index"));G(a)}),onMouseLeave:xe(t||{})};var r;return Object(n.a)({},e,t,a)},marks:$,open:X,range:Q,rootRef:se,trackLeap:Oe,trackOffset:je,values:Z,getThumbStyle:e=>({pointerEvents:-1!==B&&B!==e?"none":void 0})}}(Object(n.a)({},Xe,{rootRef:t}));Xe.marked=et.length>0&&et.some((e=>e.label)),Xe.dragging=$e,Xe.focusedThumbIndex=Qe;const ot=(e=>{const{disabled:t,dragging:a,marked:r,orientation:n,track:o,classes:l,color:c,size:s}=e,u={root:["root",t&&"disabled",a&&"dragging",r&&"marked","vertical"===n&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse",c&&"color".concat(Object(E.a)(c)),s&&"size".concat(Object(E.a)(s))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",s&&"thumbSize".concat(Object(E.a)(s)),c&&"thumbColor".concat(Object(E.a)(c))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Object(i.a)(u,D,l)})(Xe),lt=null!=(a=null!=(z=null==Fe?void 0:Fe.root)?z:xe.Root)?a:G,it=null!=(P=null!=(A=null==Fe?void 0:Fe.rail)?A:xe.Rail)?P:W,ct=null!=(V=null!=(F=null==Fe?void 0:Fe.track)?F:xe.Track)?V:_,st=null!=(Y=null!=(Z=null==Fe?void 0:Fe.thumb)?Z:xe.Thumb)?Y:J,ut=null!=($=null!=(ee=null==Fe?void 0:Fe.valueLabel)?ee:xe.ValueLabel)?$:q,dt=null!=(te=null!=(ae=null==Fe?void 0:Fe.mark)?ae:xe.Mark)?te:U,bt=null!=(re=null!=(ne=null==Fe?void 0:Fe.markLabel)?ne:xe.MarkLabel)?re:K,mt=null!=(oe=null!=(le=null==Fe?void 0:Fe.input)?le:xe.Input)?oe:"input",vt=null!=(ie=null==Ve?void 0:Ve.root)?ie:ke.root,pt=null!=(ce=null==Ve?void 0:Ve.rail)?ce:ke.rail,ht=null!=(se=null==Ve?void 0:Ve.track)?se:ke.track,ft=null!=(ue=null==Ve?void 0:Ve.thumb)?ue:ke.thumb,gt=null!=(de=null==Ve?void 0:Ve.valueLabel)?de:ke.valueLabel,jt=null!=(be=null==Ve?void 0:Ve.mark)?be:ke.mark,Ot=null!=(me=null==Ve?void 0:Ve.markLabel)?me:ke.markLabel,xt=null!=(ve=null==Ve?void 0:Ve.input)?ve:ke.input,kt=Object(c.a)({elementType:lt,getSlotProps:We,externalSlotProps:vt,externalForwardedProps:He,additionalProps:Object(n.a)({},I(lt)&&{as:Oe}),ownerState:Object(n.a)({},Xe,null==vt?void 0:vt.ownerState),className:[ot.root,we]}),yt=Object(c.a)({elementType:it,externalSlotProps:pt,ownerState:Xe,className:ot.rail}),St=Object(c.a)({elementType:ct,externalSlotProps:ht,additionalProps:{style:Object(n.a)({},Ge[Ke].offset(at),Ge[Ke].leap(rt))},ownerState:Object(n.a)({},Xe,null==ht?void 0:ht.ownerState),className:ot.track}),wt=Object(c.a)({elementType:st,getSlotProps:Je,externalSlotProps:ft,ownerState:Object(n.a)({},Xe,null==ft?void 0:ft.ownerState),className:ot.thumb}),Lt=Object(c.a)({elementType:ut,externalSlotProps:gt,ownerState:Object(n.a)({},Xe,null==gt?void 0:gt.ownerState),className:ot.valueLabel}),Ct=Object(c.a)({elementType:dt,externalSlotProps:jt,ownerState:Xe,className:ot.mark}),Rt=Object(c.a)({elementType:bt,externalSlotProps:Ot,ownerState:Xe,className:ot.markLabel}),zt=Object(c.a)({elementType:mt,getSlotProps:_e,externalSlotProps:xt,ownerState:Xe});return Object(B.jsxs)(lt,Object(n.a)({},kt,{children:[Object(B.jsx)(it,Object(n.a)({},yt)),Object(B.jsx)(ct,Object(n.a)({},St)),et.filter((e=>e.value>=Te&&e.value<=Pe)).map(((e,t)=>{const a=k(e.value,Te,Pe),r=Ge[Ke].offset(a);let i;return i=!1===De?-1!==tt.indexOf(e.value):"normal"===De&&(Ze?e.value>=tt[0]&&e.value<=tt[tt.length-1]:e.value<=tt[0])||"inverted"===De&&(Ze?e.value<=tt[0]||e.value>=tt[tt.length-1]:e.value>=tt[0]),Object(B.jsxs)(o.Fragment,{children:[Object(B.jsx)(dt,Object(n.a)({"data-index":t},Ct,!Object(s.a)(dt)&&{markActive:i},{style:Object(n.a)({},r,Ct.style),className:Object(l.a)(Ct.className,i&&ot.markActive)})),null!=e.label?Object(B.jsx)(bt,Object(n.a)({"aria-hidden":!0,"data-index":t},Rt,!Object(s.a)(bt)&&{markLabelActive:i},{style:Object(n.a)({},r,Rt.style),className:Object(l.a)(ot.markLabel,Rt.className,i&&ot.markLabelActive),children:e.label})):null]},t)})),tt.map(((e,t)=>{const a=k(e,Te,Pe),r=Ge[Ke].offset(a),o="off"===Ye?Q:ut;return Object(B.jsx)(o,Object(n.a)({},!Object(s.a)(o)&&{valueLabelFormat:Be,valueLabelDisplay:Ye,value:"function"===typeof Be?Be(Ee(e),t):Be,index:t,open:qe===t||Ue===t||"on"===Ye,disabled:Ce},Lt,{children:Object(B.jsx)(st,Object(n.a)({"data-index":t},wt,{className:Object(l.a)(ot.thumb,wt.className,Ue===t&&ot.active,Qe===t&&ot.focusVisible),style:Object(n.a)({},r,nt(t),wt.style),children:Object(B.jsx)(mt,Object(n.a)({"data-index":t,"aria-label":Re?Re(t):fe,"aria-valuenow":Ee(e),"aria-labelledby":je,"aria-valuetext":ze?ze(Ee(e),t):ge,value:tt[t]},zt))}))}),t)}))]}))}));t.a=Z},629:function(e,t,a){"use strict";var r=a(6),n=a(3),o=a(1),l=a(186),i=a(116),c=a(98),s=a(49),u=a(147),d=a(480),b=a(482),m=a(497),v=a(31),p=a(15),h=a(2);const f=["component","direction","spacing","divider","children","className","useFlexGap"],g=Object(m.a)(),j=Object(u.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function O(e){return Object(d.a)({props:e,name:"MuiStack",defaultTheme:g})}function x(e,t){const a=o.Children.toArray(e).filter(Boolean);return a.reduce(((e,r,n)=>(e.push(r),n<a.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(n)})),e)),[])}const k=e=>{let{ownerState:t,theme:a}=e,r=Object(n.a)({display:"flex",flexDirection:"column"},Object(v.b)({theme:a},Object(v.e)({values:t.direction,breakpoints:a.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=Object(p.a)(a),n=Object.keys(a.breakpoints.values).reduce(((e,a)=>(("object"===typeof t.spacing&&null!=t.spacing[a]||"object"===typeof t.direction&&null!=t.direction[a])&&(e[a]=!0),e)),{}),o=Object(v.e)({values:t.direction,base:n}),l=Object(v.e)({values:t.spacing,base:n});"object"===typeof o&&Object.keys(o).forEach(((e,t,a)=>{if(!o[e]){const r=t>0?o[a[t-1]]:"column";o[e]=r}}));const c=(a,r)=>{return t.useFlexGap?{gap:Object(p.c)(e,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((n=r?o[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]))]:Object(p.c)(e,a)}};var n};r=Object(i.a)(r,Object(v.b)({theme:a},l,c))}return r=Object(v.c)(a.breakpoints,r),r};var y=a(5),S=a(11);const w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=j,useThemeProps:a=O,componentName:i="MuiStack"}=e,u=t(k);return o.forwardRef((function(e,t){const o=a(e),d=Object(b.a)(o),{component:m="div",direction:v="column",spacing:p=0,divider:g,children:j,className:O,useFlexGap:k=!1}=d,y=Object(r.a)(d,f),S={direction:v,spacing:p,useFlexGap:k},w=Object(c.a)({root:["root"]},(e=>Object(s.a)(i,e)),{});return Object(h.jsx)(u,Object(n.a)({as:m,ownerState:S,ref:t,className:Object(l.a)(w.root,O)},y,{children:g?x(j,g):j}))}))}({createStyledComponent:Object(y.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>Object(S.a)({props:e,name:"MuiStack"})});t.a=w},876:function(e,t,a){"use strict";var r=a(297);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(298)),o=a(2),l=(0,n.default)((0,o.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");t.default=l}}]);
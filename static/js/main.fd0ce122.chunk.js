(this["webpackJsonpavatar-tool"]=this["webpackJsonpavatar-tool"]||[]).push([[0],{135:function(e,t,n){},244:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(23),j=n.n(s),l=(n(135),n(60)),r=n(255),i=n(257),o=n(258),d=n(253),h=n(256),b=n(127),x=n(84),u=(n(244),n(8)),O=r.a.Header,f=r.a.Content,p=300,g=300;var m=function(){var e=Object(a.useState)("\u6768\u660e"),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("#ffffff"),j=Object(l.a)(s,2),m=j[0],v=j[1],y=Object(a.useState)("#0000ff"),C=Object(l.a)(y,2),S=C[0],I=C[1];Object(a.useEffect)((function(){console.log(n,m,S),L()}),[n,m,S]);var L=function(){var e=document.querySelector("#avatar").getContext("2d");e.clearRect(0,0,p,g),e.fillStyle=S,e.beginPath(),e.arc(150,150,150,0,2*Math.PI,!0),e.closePath(),e.fill(),e.fillStyle=m,e.font=g/2.2+'px "Microsoft Yahei"',e.textAlign="center",e.fillText(n,150,200)};return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(O,{children:Object(u.jsx)("span",{className:"header",children:"\u5934\u50cf\u5de5\u5177"})}),Object(u.jsx)(f,{className:"App",children:Object(u.jsx)("div",{className:"app-body",children:Object(u.jsxs)(i.a,{children:[Object(u.jsxs)(o.a,{xs:24,sm:24,md:24,lg:12,xl:12,children:[Object(u.jsxs)(i.a,{children:[Object(u.jsx)(o.a,{span:6,children:"\u5185\u5bb9\uff1a"}),Object(u.jsx)(o.a,{span:12,children:Object(u.jsx)(d.a,{maxLength:"2",value:n,onInput:function(e){c(e.target.value)}})})]}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(o.a,{span:6,children:"\u6587\u5b57\u989c\u8272\uff1a"}),Object(u.jsx)(o.a,{span:12,children:Object(u.jsx)(h.a,{style:{padding:0},content:Object(u.jsx)(x.a,{color:m,onChangeComplete:function(e){return v(e.hex)}}),children:Object(u.jsx)(d.a,{maxLength:"2",value:m,onInput:function(e){v(e.target.value)}})})})]}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(o.a,{span:6,children:"\u80cc\u666f\u989c\u8272\uff1a"}),Object(u.jsx)(o.a,{span:12,children:Object(u.jsx)(h.a,{style:{padding:0},content:Object(u.jsx)(x.a,{color:S,onChangeComplete:function(e){return I(e.hex)}}),children:Object(u.jsx)(d.a,{maxLength:"2",value:S,onInput:function(e){I(e.target.value)}})})})]}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)(o.a,{span:6}),Object(u.jsx)(o.a,{span:12,children:Object(u.jsx)(b.a,{type:"primary",onClick:function(){!function(){var e=document.querySelector("#avatar"),t=document.createElement("a");t.download="avatar",t.href=e.toDataURL("image/png"),document.body.appendChild(t),t.click(),t.remove()}()},children:"\u4e0b\u8f7d\u56fe\u7247"})})]})]}),Object(u.jsx)(o.a,{xs:24,sm:24,md:24,lg:12,xl:12,children:Object(u.jsx)("canvas",{id:"avatar",width:"300",height:"300"})})]})})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,j=t.getTTFB;n(e),a(e),c(e),s(e),j(e)}))};n(248);j.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),v()}},[[249,1,2]]]);
//# sourceMappingURL=main.fd0ce122.chunk.js.map
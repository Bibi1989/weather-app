(this["webpackJsonppayoneer-reactjs"]=this["webpackJsonppayoneer-reactjs"]||[]).push([[0],{70:function(n,t,e){},71:function(n,t,e){"use strict";e.r(t);var r,a,i,c,o,d,s,l,u,b,p,h,j,f,x,g,v,O=e(0),m=e.n(O),w=e(19),C=e.n(w),y=e(7),k=e(9),D=e(15),F=e.n(D),L=e(21),_=e(10),S=e(35),E=e.n(S),z=function(){var n=Object(L.a)(F.a.mark((function n(t){var e;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.get(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),M=function(n,t){return null===n||void 0===n?void 0:n.map((function(n){var e,r,a,i;return{temperature:null===n||void 0===n||null===(e=n.main)||void 0===e?void 0:e.temp,dt_txt:null===n||void 0===n?void 0:n.dt_txt,time:null===n||void 0===n?void 0:n.dt_txt.split(" ")[1],dt:null===n||void 0===n?void 0:n.dt,icon:null===n||void 0===n||null===(r=n.weather[0])||void 0===r?void 0:r.icon,description:null===n||void 0===n||null===(a=n.weather[0])||void 0===a?void 0:a.description,main:null===n||void 0===n||null===(i=n.weather[0])||void 0===i?void 0:i.main,units:t}}))},T=Object(_.b)("GET_WEATHERS",function(){var n=Object(L.a)(F.a.mark((function n(t){var e,r,a,i,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t||"metric",n.next=3,z("".concat("http://api.openweathermap.org/data/2.5","/forecast?q=Munich,de&APPID=").concat("75f972b80e26f14fe6c920aa6a85ad57","&cnt=40&units=").concat(e));case 3:return r=n.sent,a=r.list,i=M(a,e),c=i,n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),B=e(11),P=e(12),W=e.n(P),A=function(n){return new Date(n).getDay()},N=function(n,t){var e=A(t);return W.a.filter(n,(function(n){return A(null===n||void 0===n?void 0:n.dt_txt)===e}))},I=function(n){return W.a.uniqBy(W.a.map(n,(function(n){return Object(B.a)(Object(B.a)({},n),{},{date:q(null===n||void 0===n?void 0:n.dt_txt)})})),"date")},R=function(n){var t=new Date(n).toDateString(),e=t.split(" ")[2],r=t.split(" ")[1],a=t.split(" ")[3];return"".concat(e," ").concat(r," ").concat(a)},q=function(n){return new Date(n).toDateString().split(" ")[2]},H=Object(_.c)({name:"weather",initialState:{loading:!1,weathers:[],weatherLength:0,error:null,barChartData:[]},reducers:{setWeatherToBarChartsData:function(n,t){var e=t.payload,r=e.weather,a=e.weathers;n.barChartData=N(a,null===r||void 0===r?void 0:r.dt_txt)}},extraReducers:function(n){n.addCase(T.pending,(function(n){n.loading=!0})).addCase(T.fulfilled,(function(n,t){var e;n.loading=!1,n.weathers=t.payload,n.weatherLength=I(t.payload).length,n.barChartData=N(t.payload,null===(e=t.payload[0])||void 0===e?void 0:e.dt_txt)})).addCase(T.rejected,(function(n){n.loading=!1,n.error="something went wrong"}))}}),J=H.reducer,Y=H.actions.setWeatherToBarChartsData,G=function(n){return n.weather},V=e(2),Z=e(3),K=Z.a.div(r||(r=Object(V.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n\n  label {\n    color: white;\n  }\n\n  @media (max-width: 768px) {\n    justify-content: space-between;\n  }\n"]))),Q=Z.a.div(a||(a=Object(V.a)(["\n  padding: 0 10px;\n  &.input_group {\n    margin-right: 15px;\n  }\n"]))),U=Z.a.div(i||(i=Object(V.a)(["\n  border-top: 2px solid #ffffff;\n  border-left: 2px solid #ffffff;\n  width: 20px;\n  height: 20px;\n  transform: translateY(-50%) rotate(-45deg);\n  position: absolute;\n  left: -30px;\n  top: 50%;\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    left: 10px;\n    top: -50%;\n    z-index: 4;\n    width: 16px;\n    height: 16px;\n  }\n"]))),X=Z.a.div(c||(c=Object(V.a)(["\n  border-top: 2px solid #ffffff;\n  border-right: 2px solid #ffffff;\n  width: 20px;\n  height: 20px;\n  transform: translateY(-50%) rotate(45deg);\n  position: absolute;\n  right: -30px;\n  top: 50%;\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    right: 10px;\n    top: -50%;\n    z-index: 4;\n    width: 16px;\n    height: 16px;\n  }\n"]))),$=Z.a.div(o||(o=Object(V.a)(["\n  background-color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 5px 15px;\n  cursor: pointer;\n\n  @media (max-width: 768px) {\n    margin-top: 20px;\n  }\n"]))),nn=e(1),tn=function(n){var t=n.label,e=n.onClick,r=n.className;return Object(nn.jsx)($,{onClick:e,className:r,"data-testid":"refreshBtn",children:t})},en=function(n){var t=n.onChange,e=n.units,r="metric"===e,a="imperial"===e;return Object(nn.jsxs)(K,{children:[Object(nn.jsxs)(Q,{className:"input_group",children:[Object(nn.jsx)("input",{type:"radio",name:"degree",id:"c",onChange:t,value:"metric",checked:r}),Object(nn.jsx)("label",{htmlFor:"c",children:"Celcius"})]}),Object(nn.jsxs)(Q,{children:[Object(nn.jsx)("input",{type:"radio",name:"degree",id:"f",onChange:t,value:"imperial",checked:a}),Object(nn.jsx)("label",{htmlFor:"f",children:"Fahrenheit"})]})]})},rn=Z.a.div(d||(d=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 5px;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n\n    &.btn {\n      margin-top: 10px;\n    }\n  }\n"]))),an=function(n){var t=n.refreshData,e=n.onChange,r=n.units;return Object(nn.jsxs)(rn,{children:[Object(nn.jsx)("div",{}),Object(nn.jsx)(en,{onChange:e,units:r}),Object(nn.jsx)(tn,{label:"Refresh",onClick:t,className:"btn"})]})},cn=Object(Z.b)(s||(s=Object(V.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),on=Z.a.div(l||(l=Object(V.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  z-index: 2;\n\n  p {\n    font-style: italic;\n    font-size: 14px;\n    font-weight: bold;\n  }\n"]))),dn=Z.a.div(u||(u=Object(V.a)(["\n  border: 16px solid #e3e3e3;\n  border-top: 16px solid violet;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  animation: "," 1s linear infinite;\n"])),cn),sn=function(){return Object(nn.jsxs)(on,{children:[Object(nn.jsx)(dn,{}),Object(nn.jsx)("p",{children:"Loading, Please wait..."})]})},ln=function(n){var t=n.onClick,e=n.disabled;n.isMobile;return Object(nn.jsx)(nn.Fragment,{children:e?null:Object(nn.jsx)(X,{onClick:t})})},un=function(n){var t=n.onClick,e=n.disabled;n.isMobile;return Object(nn.jsx)(nn.Fragment,{children:e?null:Object(nn.jsx)(U,{onClick:t})})},bn=Z.a.div(b||(b=Object(V.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  gap: 5px;\n  justify-content: center;\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 40px;\n"])),(function(n){return n.isMobile?"1fr":"1fr 1fr 1fr"})),pn=Z.a.div(p||(p=Object(V.a)(["\n  padding: 10px 20px;\n  margin: 0 5px;\n  background-color: violet;\n  color: white;\n  border-radius: 4px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n"]))),hn=Z.a.div(h||(h=Object(V.a)(["\n  text-align: center;\n  font-size: 18px;\n"]))),jn=Z.a.div(j||(j=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  p {\n    font-size: 13px;\n  }\n"]))),fn=Z.a.div(f||(f=Object(V.a)([""]))),xn=function(n){var t=n.weather,e=n.onClick,r="http://openweathermap.org/img/wn/".concat(t.icon,".png"),a=Object(O.useCallback)((function(){return Object(nn.jsx)(nn.Fragment,{children:"metric"===t.units?Object(nn.jsx)("span",{children:"\u2103"}):Object(nn.jsx)("span",{children:"\u2109"})})}),[t]);return Object(nn.jsxs)(pn,{onClick:function(){return e(t)},"data-testid":"weatherCard",children:[Object(nn.jsx)(hn,{children:"Temperature"}),Object(nn.jsxs)(jn,{children:[Object(nn.jsxs)("p",{children:[t.temperature," ",Object(nn.jsx)(a,{})]}),Object(nn.jsx)("img",{src:r,alt:"icon"})]}),Object(nn.jsx)(fn,{children:R(null===t||void 0===t?void 0:t.dt_txt)})]})},gn=Z.a.div(x||(x=Object(V.a)(["\n  text-align: center;\n  width: 100%;\n\n  p {\n    text-align: center;\n    color: white;\n  }\n"]))),vn=function(){return Object(nn.jsx)(gn,{"data-testid":"empty",children:Object(nn.jsx)("p",{children:"Sorry there is/are no weathers forcast"})})},On=function(n){var t,e=n.weathers,r=n.weatherLength,a=n.loading,i=Object(k.b)(),c=function(){var n=Object(O.useState)([0,0]),t=Object(y.a)(n,2),e=t[0],r=t[1],a=function(){r([document.documentElement.clientWidth,window.innerHeight])};return Object(O.useLayoutEffect)((function(){return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}}),[]),e}(),o=Object(y.a)(c,1)[0]<768,d=Object(O.useState)(0),s=Object(y.a)(d,2),l=s[0],u=s[1],b=o?1:3,p=e.length<=0||l+b===r,h=!l,j=function(n){i(Y({weather:n,weathers:e}))};return Object(nn.jsxs)(nn.Fragment,{children:[a&&Object(nn.jsx)(sn,{}),Object(nn.jsxs)(bn,{isMobile:o||e.length<=0,children:[Object(nn.jsx)(un,{onClick:function(){return u((function(n){return n-1}))},disabled:h,isMobile:o,"data-testid":"prev"}),e.length<=0?Object(nn.jsx)(vn,{}):!a&&(null===(t=I(e))||void 0===t?void 0:t.slice(l,l+b).map((function(n){return Object(nn.jsx)(xn,{weather:n,onClick:j},null===n||void 0===n?void 0:n.dt)}))),Object(nn.jsx)(ln,{onClick:function(){return u((function(n){return n+1}))},disabled:p,isMobile:o,"data-testid":"next"})]})]})},mn=e(40),wn=function(n){var t=n.weathers,e=n.barChartData,r=function(n){return{data:W.a.map(n,(function(n){return n.temperature})),label:W.a.map(n,(function(n){return n.time}))}}(e),a={labels:t.length>0?r.label:[],datasets:[{label:"# of Votes",data:t.length>0?r.data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return Object(nn.jsx)(mn.a,{data:a,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},"data-testid":e.length>0?"barchart":null})},Cn=Z.a.div(g||(g=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 480px;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    overflow-x: hidden;\n    padding: 0 10px;\n  }\n"]))),yn=function(){var n=Object(k.b)(),t=Object(k.c)(G),e=t.weathers,r=t.weatherLength,a=t.loading,i=t.barChartData,c=Object(O.useState)("metric"),o=Object(y.a)(c,2),d=o[0],s=o[1];Object(O.useEffect)((function(){n(T()),n(Y({weather:e[0],weathers:e}))}),[]);var l=Object(O.useCallback)((function(){return Object(nn.jsx)(wn,{weathers:e,barChartData:i})}),[i,e]);return Object(nn.jsxs)(Cn,{children:[Object(nn.jsx)(an,{refreshData:function(){n(T(d))},onChange:function(t){var e=t.target.value;s(e),n(T(e))},units:d}),Object(nn.jsx)(On,{weathers:e,weatherLength:r,loading:a}),Object(nn.jsx)(l,{})]})},kn=Z.a.div(v||(v=Object(V.a)(["\n  background-color: #1d3354;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var Dn=function(){return Object(nn.jsx)(kn,{children:Object(nn.jsx)(yn,{})})},Fn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,72)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;e(n),r(n),a(n),i(n),c(n)}))},Ln=e(5),_n=e(39),Sn=e.n(_n),En=e(8),zn=Object(En.b)({weather:J}),Mn=[].concat(Object(Ln.a)(Object(_.d)()),[Sn.a]),Tn=Object(_.a)({reducer:zn,middleware:Mn});e(70);C.a.render(Object(nn.jsx)(m.a.StrictMode,{children:Object(nn.jsx)(k.a,{store:Tn,children:Object(nn.jsx)(Dn,{})})}),document.getElementById("root")),Fn()}},[[71,1,2]]]);
//# sourceMappingURL=main.c7ea7e45.chunk.js.map
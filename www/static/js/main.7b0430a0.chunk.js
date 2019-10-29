(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(57)},37:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"SET_STATE",function(){return j}),n.d(a,"initialState",function(){return g}),n.d(a,"addUser",function(){return E});var r={};n.r(r),n.d(r,"SET_STATE",function(){return y}),n.d(r,"initialState",function(){return N}),n.d(r,"goTo",function(){return x}),n.d(r,"goBack",function(){return P}),n.d(r,"exit",function(){return k});var i={};n.r(i),n.d(i,"SET_STATE",function(){return S}),n.d(i,"initialState",function(){return T}),n.d(i,"setParams",function(){return _}),n.d(i,"generateGame",function(){return w});var c=n(0),o=n.n(c),s=n(18),u=n.n(s),l=(n(37),n(8)),p=n(27),d=n.n(p),m=n(28),f=n(29),v=n.n(f),h=n(6),b=n.n(h),O=function(e,t){var n=b.a.omit(e,"initialState","SET_STATE"),a=b.a.extend({},e.initialState,b.a.zipObject(b.a.keys(n),b.a.map(n,function(e){return function(n,a,r,i,c,o,s,u,l,p,d){t.dispatch(e(n,a,r,i,c,o,s,u,l,p,d))}})));return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;return n.type&&!n.type.indexOf(e.SET_STATE)?b.a.extend({},t,n.data):t}},j="SET_USERS",g={source:[]},E=function(e){return{type:j,data:e}},y="SET_NAVIGATION",N={source:[],plugin:"Menu",history:[]},x=function(e){return function(t,n){if("Exit"===e)return t(k());var a=n().navigation.history.slice(),r=n().navigation.plugin;a.push(r),t({type:y,data:{plugin:e,history:a}})}},P=function(){return function(e,t){var n=t().navigation.history,a=b.a.last(n);e({type:y,data:{plugin:a,history:n.slice().splice(-1)}})}},k=function(){return function(e,t){window.confirm("\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0438\u0433\u0440\u044b?")&&(navigator.app?navigator.app.exitApp():navigator.device?navigator.device.exitApp():window.close())}},S="SET_GAME",T={size:16,userCnt:2,planetCntForUser:1,spaceObj:{},mapGegs:{}},_=function(e){return{type:S,data:e}},w=function(e){return function(e,t){var n=t().game,a=n.userCnt,r=n.planetCntForUser,i=n.size,c=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a={};b.a.size(a)<e;)a[b.a.random(0,t-1)+"_"+b.a.random(0,n-1)]=1;return a}(a*r+Math.floor(i*i*.1),i),o={};b.a.forEach(b.a.range(i),function(e){b.a.forEach(b.a.range(i),function(t){o[e+"_"+t]=1})}),e({type:S,data:{spaceObj:c,mapGegs:o}})}},C={dispatch:function(){}},G=O(a,C),A=O(r,C),M=O(i,C),B=Object(l.c)({users:G,game:M,navigation:A}),U=Object(l.a)(d.a,v.a,m.a),I=Object(l.d)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),U);C.dispatch=I.dispatch;var z=n(7),F=n(1),X=n(2),D=n(4),L=n(3),R=n(5),V=(n(55),function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return o.a.createElement("div",{className:["app-screen",t].join(" ")},n)}}]),t}(c.Component)),J=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=e.onPress,r=e.children;return o.a.createElement("div",{style:n,className:t,onClick:a},r)}}]),t}(c.Component);J.defaultProps={className:"app-btn",onPress:function(){}},J.defaultName="Btm";var W=J,q=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return o.a.createElement(W,{onPress:this.props.onPress,className:"app-menu-btn"},this.props.text)}}]),t}(c.Component);q.defaultName="MenuBtn";var H=q,K=function(e){function t(){var e,n;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(D.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).renderBtn=function(e){return o.a.createElement(H,{key:e.id,text:e.text,onPress:function(){return n.props.goTo(e.id)}})},n}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return o.a.createElement(V,{className:"app-menu"},Q.map(this.renderBtn))}}]),t}(c.Component),Q=[{id:"GameSettings",text:"\u043d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"},{id:"SavedGames",text:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"},{id:"Settings",text:"\u043e\u043f\u0446\u0438\u0438"},{id:"Feedback",text:"\u043e\u0431\u0440\u0430\u0442\u043d\u044f \u0441\u0432\u044f\u0437\u044c"},{id:"Exit",text:"\u0432\u044b\u0445\u043e\u0434"}];K.defaultName="MenuScreen";var Y=Object(z.b)(function(e,t){return{goTo:e.navigation.goTo}})(K),Z=n(31),$=document.getElementById("root"),ee=function(e){function t(e){var n;return Object(F.a)(this,t),(n=Object(D.a)(this,Object(L.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(R.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){$.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){$.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.onPress,a=e.children;return u.a.createPortal(o.a.createElement("div",{className:"app-popup-conteiner",onClick:function(e){return n(e)}},o.a.createElement("div",{className:"app-popup-wrapper"}),o.a.createElement("div",{className:t},a)),this.el)}}]),t}(c.Component);ee.defaultProps={className:"app-popup",onPress:function(){}},ee.defaultName="Popup";var te=ee,ne=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.onPress,a=e.text;return o.a.createElement("div",{className:t,onClick:n},a)}}]),t}(c.Component);ne.defaultProps={className:"app-select-option",onPress:function(){}},ne.defaultName="Option";var ae=ne,re={primary:"#4169E1",blue:"#4169E1",red:"#e2131c"},ie=n(13),ce=function(e){function t(e){var n;return Object(F.a)(this,t),(n=Object(D.a)(this,Object(L.a)(t).call(this,e)))._show=function(){n.setState({visible:!0})},n._hide=function(){n.setState({visible:!1})},n.renderOption=function(e){var t=e.id,a=e.text;return o.a.createElement(ae,{key:t,text:a,onPress:function(){return n.props.onPress(t)}})},n.state={visible:!1},n}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.title,a=e.options,r=e.value,i=this.state.visible;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t,onClick:this._show},o.a.createElement("div",{className:t+"-title"},n),o.a.createElement("div",{className:t+"-value"},o.a.createElement(ie.a,{color:re.blue}),o.a.createElement("span",null,r>=0&&a&&b.a.find(a,{id:r}).text))),i&&o.a.createElement(te,{onPress:this._hide},b.a.map(a,this.renderOption)))}}]),t}(c.PureComponent);ce.defaultProps={className:"app-select",onPress:function(){}},ce.defaultName="Select";var oe=ce,se=n(16),ue=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.props.goBack;return o.a.createElement(W,{onPress:e,className:"app-btn-close"},o.a.createElement(ie.c,{color:re.red}))}}]),t}(c.Component);ue.defaultProps={onPress:function(){}},ue.defaultName="BtnClose";var le=Object(se.a)(function(e,t){return{goBack:e.navigation.goBack}})(ue),pe=function(e){function t(){var e,n;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(D.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).renderOptions=function(e){return o.a.createElement(oe,{key:e.id,title:e.text,onPress:function(t){return n.props.setParams(Object(Z.a)({},e.id,t))},options:e.options,value:n.props[e.id]})},n.startGame=function(){var e=n.props,t=e.goTo;(0,e.generateGame)(),t("Game")},n}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return o.a.createElement(V,{className:"app-game-settings"},de.map(this.renderOptions),o.a.createElement(W,{onPress:this.startGame,className:"app-btn-game"},o.a.createElement(ie.b,{color:re.green})),o.a.createElement(le,null))}}]),t}(c.Component),de=[{id:"size",text:"\u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",options:[{id:16,text:"\u043c\u0430\u043b\u044b\u0439 16X16"},{id:32,text:"\u0441\u0440\u0435\u0434\u043d\u0438\u0439 32X32"},{id:64,text:"\u0431\u043e\u043b\u044c\u0448\u043e\u0439 64X64"}]},{id:"userCnt",text:"\u0438\u0433\u0440\u043e\u043a\u043e\u0432",options:[{id:2,text:"2 \u0438\u0433\u0440\u043e\u043a\u0430"},{id:3,text:"3 \u0438\u0433\u0440\u043e\u043a\u0430"},{id:4,text:"5 \u0438\u0433\u0440\u043e\u043a\u0430"},{id:5,text:"5 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"},{id:6,text:"6 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"},{id:7,text:"7 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"},{id:8,text:"8 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"}]},{id:"planetCntForUser",text:"\u043c\u0438\u0440\u043e\u0432",options:[{id:1,text:"\u043c\u0430\u043b\u043e"},{id:2,text:"\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e"},{id:3,text:"\u043c\u043d\u043e\u0433\u043e"}]}];pe.defaultName="GameSettings";var me=Object(z.b)(function(e,t){var n=e.game;return{size:n.size,userCnt:n.userCnt,planetCntForUser:n.planetCntForUser,setParams:n.setParams,generateGame:n.generateGame,goTo:e.navigation.goTo}})(pe),fe=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return o.a.createElement("div",{className:t},n)}}]),t}(c.Component);fe.defaultProps={className:"app-map",onPress:function(){}},fe.defaultName="Map";var ve=fe,he=function(e){function t(){var e,n;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(D.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).renderMapItem=function(e,t){return o.a.createElement("div",{key:t,title:t,style:Plugin._getPos(t),className:"app-map-meteor"})},n.renderMapGegs=function(e, t){return o.a.createElement("div",{key:t,title:t,style:Plugin._getPos(t),className:"app-map-gegs"})},n}return Object(R.a)(t,e),Object(X.a)(t,[{key:"_getPos",value:function(e){var t=e.split("_");return{left:60*+t[0]+30,top:72*+t[1]+t[0]%2*72/2+36}}},{key:"render",value:function(){var e=this.props,t=e.spaceObj,n=e.mapGegs;return o.a.createElement(V,{className:"app-game"},o.a.createElement(ve,null,b.a.map(t,this.renderMapItem),b.a.map(n,this.renderMapGegs)))}}]),t}(c.Component);he.defaultName="Game";var be=Object(z.b)(function(e, t){return{spaceObj:e.game.spaceObj,mapGegs:e.game.mapGegs}})(he),Oe=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(X.a)(t,[{key:"renderPlugin",value:function(){switch(this.props.plugin){case"Menu":return o.a.createElement(Y,null);case"GameSettings":return o.a.createElement(me,null);case"Game":return o.a.createElement(be,null);default:return o.a.createElement("div",null,"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430")}}},{key:"componentDidMount",value:function(){window.addEventListener("hashchange",this.props.exit,!1)}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},this.renderPlugin())}}]),t}(c.Component),je=Object(z.b)(function(e,t){return{plugin:e.navigation.plugin,exit:e.navigation.exit}})(Oe),ge=function(){window.location.hash||(window.location.href+="#112"),u.a.render(o.a.createElement(z.a,{store:I},o.a.createElement(je,null)),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",ge,!1):ge()}},[[32,2,1]]]);
//# sourceMappingURL=main.7b0430a0.chunk.js.map
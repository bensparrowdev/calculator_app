(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},37:function(e,t){},38:function(e,t,n){"use strict";n.r(t);var s=n(9),a=n.n(s),c=n(16),l=n.n(c),r=(n(27),n(4)),i=n(17),u=n(18),o=n(21),v=n(20),b=(n(28),n(40)),j=n(1),m=function(e){Object(o.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={screen:["0"],keys:[{value:"AC",styling:"clear"},{value:"/",styling:"operator"},{value:"7",styling:"num"},{value:"8",styling:"num"},{value:"9",styling:"num"},{value:"*",styling:"operator"},{value:"4",styling:"num"},{value:"5",styling:"num"},{value:"6",styling:"num"},{value:"-",styling:"operator"},{value:"1",styling:"num"},{value:"2",styling:"num"},{value:"3",styling:"num"},{value:"+",styling:"operator"},{value:"0",styling:"zero"},{value:".",styling:"num"},{value:"=",styling:"operator"}]},e.inputHandle=function(t){if("AC"===t)e.setState({screen:["0"]});else if("="===t){var n=e.state.screen.join("");console.log(n);var s=Object(b.a)(n);e.setState({screen:[s]})}else{var a=[].concat(Object(r.a)(e.state.screen),[t]);"0"===a[0]&&a.shift(),e.setState({screen:a})}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h1",{}),Object(j.jsxs)("div",{className:"calculator",children:[Object(j.jsx)("div",{className:"screen",children:Object(j.jsx)("h2",{children:this.state.screen})}),Object(j.jsx)("div",{className:"buttons",children:this.state.keys.map((function(t){return Object(j.jsx)(g,{number:t.value,styling:t.styling,clickFunction:e.inputHandle})}))})]}),Object(j.jsx)("div",{className:"btm-msg",children:Object(j.jsxs)("h3",{children:["visit my github - ",Object(j.jsx)("a",{href:"https://github.com/bensparrowdev",target:"_blank",children:"bensparrowdev"})]})})]})}}]),n}(s.Component),g=function(e){return Object(j.jsx)("button",{className:"btn ".concat(e.styling),onClick:function(){return e.clickFunction(e.number)},children:e.number})},h=m;l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c8f005db.chunk.js.map
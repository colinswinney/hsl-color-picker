(this["webpackJsonpcolor-picker"]=this["webpackJsonpcolor-picker"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),o=(c(15),c(2));c(16);function i(t,e,c){c/=100;var n=e*Math.min(c,1-c)/100,a=function(e){var a=(e+t/30)%12,s=c-n*Math.max(Math.min(a-3,9-a,1),-1);return Math.round(255*s).toString(16).padStart(2,"0")};return"#".concat(a(0)).concat(a(8)).concat(a(4))}function l(t,e,c){e/=100,c/=100;var n=(1-Math.abs(2*c-1))*e,a=n*(1-Math.abs(t/60%2-1)),s=c-n/2,r=0,o=0,i=0;return 0<=t&&t<60?(r=n,o=a,i=0):60<=t&&t<120?(r=a,o=n,i=0):120<=t&&t<180?(r=0,o=n,i=a):180<=t&&t<240?(r=0,o=a,i=n):240<=t&&t<300?(r=a,o=0,i=n):300<=t&&t<=360&&(r=n,o=0,i=a),"rgb("+(r=Math.round(255*(r+s)))+", "+(o=Math.round(255*(o+s)))+", "+(i=Math.round(255*(i+s)))+")"}function u(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}c(17);var h=c(6),j=c(7),b=c(3),d=c(10),O=c(9),x=c(8),m=c.n(x),p=c(0),g=function(t){Object(d.a)(c,t);var e=Object(O.a)(c);function c(t){var n;return Object(h.a)(this,c),(n=e.call(this,t)).onSuccess=n.onSuccess.bind(Object(b.a)(n)),n.state={text:n.props.children,successClass:""},n}return Object(j.a)(c,[{key:"onSuccess",value:function(){var t=this;console.info("successfully copied"),this.setState({text:"Copied!",successClass:"success"}),setTimeout((function(){t.setState({text:t.props.children,successClass:""})}),1500)}},{key:"render",value:function(){return Object(p.jsx)(m.a,{component:"span","data-clipboard-text":this.props.clipboardText,"button-title":this.props.btnTitle,onSuccess:this.onSuccess,className:"color-name ".concat(this.state.successClass),children:this.state.text})}}]),c}(n.Component);var v=function(t){var e=t.color,c=t.hue,n=t.saturation,a=t.lightness,s=t.children;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{className:"title",children:"HSL Color Picker"}),Object(p.jsx)("p",{className:"subtitle",children:"Click on any HSL, HEX, or RGB value to copy to your clipboard!"}),Object(p.jsx)("div",{className:"color-window",style:{backgroundColor:e}}),s,Object(p.jsxs)("div",{className:"text-block",children:[Object(p.jsx)("p",{children:Object(p.jsx)(g,{clipboardText:e,btnTitle:"Copy ".concat(e),children:e})}),Object(p.jsx)("p",{children:Object(p.jsx)(g,{clipboardText:i(c,n,a),btnTitle:"Copy ".concat(i(c,n,a)),children:i(c,n,a)})}),Object(p.jsx)("p",{children:Object(p.jsx)(g,{clipboardText:l(c,n,a),btnTitle:"Copy ".concat(l(c,n,a)),children:l(c,n,a)})})]})]})};c(23);var f=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("small",{children:["Created by ",Object(p.jsx)("a",{href:"https://colinswinney.com",children:"Colin Swinney"})]})})};c(24);var S=function(t){var e=t.name,c=t.max,n=t.value,a=t.onSliderChange;return Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsx)("label",{className:"slider-label",htmlFor:e,children:function(t,e){return"hue"===t?"H: "+e:"saturation"===t?"S: "+e+"%":"lightness"===t?"L: "+e+"%":void 0}(e,n)}),Object(p.jsx)("input",{className:"slider-input",name:e,type:"range",min:"0",max:c,step:"1",value:n,onChange:a})]})};c(25);var N=function(t){var e=t.name,c=t.hue,n=t.saturation,a=t.lightness,s=Array.from({length:10},(function(t,e){return e+1}));function r(t,e){var c,n,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];a?c=t:s&&(c=100-Number(t));var r=Number(c)/10,o=Number(r)*Number(e);return a?n=Number(t)-Number(o):s&&(n=Number(t)+Number(o)),u(n,2)}function o(t,e,c){return"Shades"===t?r(e,c,!0,!1):"Tints"===t?r(e,c,!1,!0):void 0}return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"title",children:e}),Object(p.jsx)("div",{className:"color-grid",children:s.map((function(t){return Object(p.jsxs)("div",{className:"color-grid-cell",children:[Object(p.jsx)("div",{className:"color-grid-swatch",style:{backgroundColor:"hsl(".concat(c,", ").concat(n,"%, ").concat(o(e,a,t),"%)")}}),Object(p.jsxs)("div",{className:"color-grid-text-block",children:[Object(p.jsx)("p",{children:Object(p.jsx)(g,{clipboardText:"hsl(".concat(c,", ").concat(n,"%, ").concat(o(e,a,t),"%)"),btnTitle:"Copy ".concat("hsl(".concat(c,", ").concat(n,"%, ").concat(o(e,a,t),"%)")),children:"hsl(".concat(c,", ").concat(n,"%, ").concat(o(e,a,t),"%)")})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:Object(p.jsx)(g,{clipboardText:i(c,n,o(e,a,t)),btnTitle:"Copy ".concat(i(c,n,o(e,a,t))),children:i(c,n,o(e,a,t))})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:Object(p.jsx)(g,{clipboardText:l(c,n,o(e,a,t)),btnTitle:"Copy ".concat(l(c,n,o(e,a,t))),children:l(c,n,o(e,a,t))})})]})]},t)}))})]})};var C=function(){var t=Object(n.useState)((function(){var t=localStorage.getItem("hue");return t?JSON.parse(t):"180"})),e=Object(o.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)((function(){var t=localStorage.getItem("saturation");return t?JSON.parse(t):"50"})),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object(n.useState)((function(){var t=localStorage.getItem("lightness");return t?JSON.parse(t):"50"})),h=Object(o.a)(u,2),j=h[0],b=h[1],d=Object(n.useState)((function(){var t=localStorage.getItem("color");return t?JSON.parse(t):"hsl(".concat(c,", ").concat(i,"%, ").concat(j,"%)")})),O=Object(o.a)(d,2),x=O[0],m=O[1];return Object(n.useEffect)((function(){localStorage.setItem("color",JSON.stringify(x)),localStorage.setItem("hue",JSON.stringify(c)),localStorage.setItem("saturation",JSON.stringify(i)),localStorage.setItem("lightness",JSON.stringify(j))}),[x,c,i,j]),Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)(v,{color:x,hue:c,saturation:i,lightness:j,children:[Object(p.jsx)(S,{name:"hue",max:"360",value:c,onSliderChange:function(t){a(t.target.value),m("hsl(".concat(t.target.value,", ").concat(i,"%, ").concat(j,"%)"))}}),Object(p.jsx)(S,{name:"saturation",max:"100",value:i,onSliderChange:function(t){l(t.target.value),m("hsl(".concat(c,", ").concat(t.target.value,"%, ").concat(j,"%)"))}}),Object(p.jsx)(S,{name:"lightness",max:"100",value:j,onSliderChange:function(t){b(t.target.value),m("hsl(".concat(c,", ").concat(i,"%, ").concat(t.target.value,"%)"))}})]}),Object(p.jsxs)("main",{children:[Object(p.jsx)(N,{name:"Shades",hue:c,saturation:i,lightness:j}),Object(p.jsx)(N,{name:"Tints",hue:c,saturation:i,lightness:j})]}),Object(p.jsx)(f,{})]})})},y=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.67f41db8.chunk.js.map
!function(e){function t(t){for(var o,i,u=t[0],c=t[1],a=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(s&&s(t);p.length;)p.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},l=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var s=c;l.push([0,1]),n()}({"+c96":function(e,t,n){},0:function(e,t,n){e.exports=n("2YZa")},"0fMe":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){console.log("%c[33m\n                     _oo0oo_\n                    o8888888o\n                    88\" . \"88\n                    (| -_- |)\n                    0  =  /0\n                  ___/`---'___\n                .' \\|     |// '.\n               / \\|||  :  |||// \\\n              / _||||| -:- |||||- \\\n             |   | \\  -  /// |   |\n             | \\_|  ''\\---/''  |_/ |\n             \\  .-\\__  '-'  ___/-. /\n           ___'. .'  /--.--\\  \\`. .'___\n        .\"\" '<  \\`.___\\_<|>_/___.' >' \"\".\n       | | :  `- \\`./;` _ /`;.`/ - ` : | |\n       \\  \\ \\`_.   \\_ __\\ /__ _/   .-\\` /  /\n   =====`-.____`.___ _____/___.-`___.-'=====\n   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n             佛祖保佑            永無BUG\n","font-family:monospace")}},"2YZa":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("2mXy"),r=n("PAd4");o.render(o.h(r.default,null),document.getElementById("app"))},"8Or5":function(e,t,n){},DFqO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("2mXy");n("YeTj"),t.default=function({theme:e="red",onClick:t,children:n}){return o.h("button",{className:"btn "+e,onClick:t},n)}},FdF9:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return d})),n.d(t,"useReducer",(function(){return _})),n.d(t,"useEffect",(function(){return m})),n.d(t,"useLayoutEffect",(function(){return v})),n.d(t,"useRef",(function(){return y})),n.d(t,"useImperativeHandle",(function(){return b})),n.d(t,"useMemo",(function(){return g})),n.d(t,"useCallback",(function(){return w})),n.d(t,"useContext",(function(){return O})),n.d(t,"useDebugValue",(function(){return S})),n.d(t,"useErrorBoundary",(function(){return E})),n.d(t,"createElement",(function(){return i.createElement})),n.d(t,"createContext",(function(){return i.createContext})),n.d(t,"createRef",(function(){return i.createRef})),n.d(t,"Fragment",(function(){return i.Fragment})),n.d(t,"Component",(function(){return i.Component})),n.d(t,"version",(function(){return re})),n.d(t,"Children",(function(){return H})),n.d(t,"render",(function(){return Z})),n.d(t,"hydrate",(function(){return Q})),n.d(t,"unmountComponentAtNode",(function(){return ce})),n.d(t,"createPortal",(function(){return q})),n.d(t,"createFactory",(function(){return le})),n.d(t,"cloneElement",(function(){return ue})),n.d(t,"isValidElement",(function(){return ie})),n.d(t,"findDOMNode",(function(){return ae})),n.d(t,"PureComponent",(function(){return R})),n.d(t,"memo",(function(){return A})),n.d(t,"forwardRef",(function(){return L})),n.d(t,"unstable_batchedUpdates",(function(){return se})),n.d(t,"StrictMode",(function(){return fe})),n.d(t,"Suspense",(function(){return U})),n.d(t,"SuspenseList",(function(){return V})),n.d(t,"lazy",(function(){return W}));var o,r,l,i=n("2mXy"),u=0,c=[],a=i.options.__r,s=i.options.diffed,f=i.options.__c,p=i.options.unmount;function h(e,t){i.options.__h&&i.options.__h(r,e,u||t),u=0;var n=r.__H||(r.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function d(e){return u=1,_(M,e)}function _(e,t,n){var l=h(o++,2);return l.t=e,l.__c||(l.__c=r,l.__=[n?n(t):M(void 0,t),function(e){var t=l.t(l.__[0],e);l.__[0]!==t&&(l.__=[t,l.__[1]],l.__c.setState({}))}]),l.__}function m(e,t){var n=h(o++,3);!i.options.__s&&T(n.__H,t)&&(n.__=e,n.__H=t,r.__H.__h.push(n))}function v(e,t){var n=h(o++,4);!i.options.__s&&T(n.__H,t)&&(n.__=e,n.__H=t,r.__h.push(n))}function y(e){return u=5,g((function(){return{current:e}}),[])}function b(e,t,n){u=6,v((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function g(e,t){var n=h(o++,7);return T(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function w(e,t){return u=8,g((function(){return e}),t)}function O(e){var t=r.context[e.__c],n=h(o++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(r)),t.props.value):e.__}function S(e,t){i.options.useDebugValue&&i.options.useDebugValue(t?t(e):e)}function E(e){var t=h(o++,10),n=d();return t.__=e,r.componentDidCatch||(r.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}function k(){c.some((function(e){if(e.__P)try{e.__H.__h.forEach(C),e.__H.__h.forEach(N),e.__H.__h=[]}catch(t){return e.__H.__h=[],i.options.__e(t,e.__v),!0}})),c=[]}i.options.__r=function(e){a&&a(e),o=0;var t=(r=e.__c).__H;t&&(t.__h.forEach(C),t.__h.forEach(N),t.__h=[])},i.options.diffed=function(e){s&&s(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==c.push(t)&&l===i.options.requestAnimationFrame||((l=i.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),j&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);j&&(t=requestAnimationFrame(n))})(k))},i.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(C),e.__h=e.__h.filter((function(e){return!e.__||N(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],i.options.__e(n,e.__v)}})),f&&f(e,t)},i.options.unmount=function(e){p&&p(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(C)}catch(e){i.options.__e(e,t.__v)}};var j="function"==typeof requestAnimationFrame;function C(e){"function"==typeof e.u&&e.u()}function N(e){e.u=e.__()}function T(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function M(e,t){return"function"==typeof t?t(e):t}function P(e,t){for(var n in t)e[n]=t[n];return e}function F(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var o in t)if("__source"!==o&&e[o]!==t[o])return!0;return!1}var R=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.shouldComponentUpdate=function(e,t){return F(this.props,e)||F(this.state,t)},o}(i.Component);function A(e,t){function n(e){var n=this.props.ref,o=n==e.ref;return!o&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!o:F(this.props,e)}function o(t){return this.shouldComponentUpdate=n,Object(i.createElement)(e,t)}return o.prototype.isReactComponent=!0,o.displayName="Memo("+(e.displayName||e.name)+")",o.t=!0,o}var I=i.options.__b;i.options.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),I&&I(e)};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function L(e){function t(t,n){var o=P({},t);return delete o.ref,e(o,"object"!=typeof(n=t.ref||n)||"current"in n?n:null)}return t.$$typeof=x,t.render=t,t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var D=function(e,t){return e?Object(i.toChildArray)(e).reduce((function(e,n,o){return e.concat(t(n,o))}),[]):null},H={map:D,forEach:D,count:function(e){return e?Object(i.toChildArray)(e).length:0},only:function(e){if(1!==(e=Object(i.toChildArray)(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:i.toChildArray},Y=i.options.__e;function B(e){return e&&((e=P({},e)).__c=null,e.__k=e.__k&&e.__k.map(B)),e}function U(){this.__u=0,this.o=null,this.__b=null}function X(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function W(e){var t,n,o;function r(r){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){o=e})),o)throw o;if(!n)throw t;return Object(i.createElement)(n,r)}return r.displayName="Lazy",r.t=!0,r}function V(){this.i=null,this.l=null}i.options.__e=function(e,t,n){if(e.then)for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return o.__c(e,t.__c);Y(e,t,n)},(U.prototype=new i.Component).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var o=X(n.__v),r=!1,l=function(){r||(r=!0,o?o(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){l(),t.__c&&t.__c()};var i=function(){var e;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(l,l)},U.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=B(this.__b),this.__b=null),[Object(i.createElement)(i.Fragment,null,t.u?null:e.children),t.u&&e.fallback]};var J=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(V.prototype=new i.Component).u=function(e){var t=this,n=X(t.__v),o=t.l.get(e);return o[0]++,function(r){var l=function(){t.props.revealOrder?(o.push(r),J(t,e,o)):r()};n?n(l):l()}},V.prototype.render=function(e){this.i=null,this.l=new Map;var t=Object(i.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){J(e,n,t)}))};var z=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children},e}();function K(e){var t=this,n=e.container,o=Object(i.createElement)(z,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),Object(i.__u)(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,Object(i.render)(o,n),t.__k=n.__k):(t.v=document.createTextNode(""),Object(i.hydrate)("",n),n.appendChild(t.v),t.p=!0,t.s=n,Object(i.render)(o,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),Object(i.__u)(t.h)),t.h=o,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),Object(i.__u)(t.h)},null}function q(e,t){return Object(i.createElement)(K,{vnode:e,container:t})}var $=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;i.Component.prototype.isReactComponent={};var G="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function Z(e,t,n){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Object(i.render)(e,t),"function"==typeof n&&n(),e?e.__c:null}function Q(e,t,n){return Object(i.hydrate)(e,t),"function"==typeof n&&n(),e?e.__c:null}var ee=i.options.event;function te(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}i.options.event=function(e){ee&&(e=ee(e)),e.persist=function(){};var t=!1,n=!1,o=e.stopPropagation;e.stopPropagation=function(){o.call(e),t=!0};var r=e.preventDefault;return e.preventDefault=function(){r.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var ne={configurable:!0,get:function(){return this.class}},oe=i.options.vnode;i.options.vnode=function(e){e.$$typeof=G;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(ne.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",ne)),"function"!=typeof t){var o,r,l;for(l in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(Object(i.toChildArray)(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),null!=n.value&&"textarea"===t&&(n.children=n.value,delete n.value),n)if(o=$.test(l))break;if(o)for(l in r=e.props={},n)r[$.test(l)?l.replace(/[A-Z0-9]/,"-$&").toLowerCase():l]=n[l]}!function(t){var n=e.type,o=e.props;if(o&&"string"==typeof n){var r={};for(var l in o)/^on(Ani|Tra|Tou)/.test(l)&&(o[l.toLowerCase()]=o[l],delete o[l]),r[l.toLowerCase()]=l;if(r.ondoubleclick&&(o.ondblclick=o[r.ondoubleclick],delete o[r.ondoubleclick]),r.onbeforeinput&&(o.onbeforeinput=o[r.onbeforeinput],delete o[r.onbeforeinput]),r.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(o.type))){var i=r.oninput||"oninput";o[i]||(o[i]=o[r.onchange],delete o[r.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(te(t.prototype,"componentWillMount"),te(t.prototype,"componentWillReceiveProps"),te(t.prototype,"componentWillUpdate"),t.m=!0)}oe&&oe(e)};var re="16.8.0";function le(e){return i.createElement.bind(null,e)}function ie(e){return!!e&&e.$$typeof===G}function ue(e){return ie(e)?i.cloneElement.apply(null,arguments):e}function ce(e){return!!e.__k&&(Object(i.render)(null,e),!0)}function ae(e){return e&&(e.base||1===e.nodeType&&e)||null}var se=function(e,t){return e(t)},fe=i.Fragment;t.default={useState:d,useReducer:_,useEffect:m,useLayoutEffect:v,useRef:y,useImperativeHandle:b,useMemo:g,useCallback:w,useContext:O,useDebugValue:S,version:"16.8.0",Children:H,render:Z,hydrate:Q,unmountComponentAtNode:ce,createPortal:q,createElement:i.createElement,createContext:i.createContext,createFactory:le,cloneElement:ue,createRef:i.createRef,Fragment:i.Fragment,isValidElement:ie,findDOMNode:ae,Component:i.Component,PureComponent:R,memo:A,forwardRef:L,unstable_batchedUpdates:se,StrictMode:i.Fragment,Suspense:U,SuspenseList:V,lazy:W}},FiCa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=!1;return function(){if(!n){const o=this,r=arguments;e.apply(o,r),setTimeout((function(){n=!1}),t)}}}},"J+gS":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("2mXy");n("+c96"),t.default=function({size:e="s",link:t}){return o.h("div",{className:"avatar "+e,style:{backgroundImage:`url(${t})`}})}},O6vF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("2mXy");n("8Or5"),t.default=function({theme:e="blue",children:t}){return o.h("div",{className:"block "+e},t)}},PAd4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("2mXy"),r=n("FdF9"),l=n("TSYQ"),i=n("dwco"),u=n("dNiP"),c=n("O6vF"),a=n("DFqO"),s=n("J+gS"),f=n("ogA/"),p=n("hgd9"),h=n("FiCa"),d=n("0fMe");n("zI9q"),i.polyfill(),window.__forceSmoothScrollPolyfill__=!0;const _=p.calcCareerTimestampToYear(u.WORK_FROM_YEAR_TIME_STAMP);let m=[],v=[];const y=[{menu:o.h("span",null,"Home"),content:o.h(c.default,null,o.h("div",{className:"tall center-content"},o.h("h2",{className:"super-lg"},"Hi, This is Jim Lin."),o.h("p",null,"You're very welcome to download the source code to build your own resume page."),o.h("hr",null),o.h(a.default,{onClick:()=>{location.href="https://github.com/JimLin94/resume"}},o.h("span",null,"Download the source code"))))},{menu:o.h("span",null,"About Me"),content:o.h(c.default,{theme:"white"},o.h("h2",{className:"margin-bottom-lg"},"About Me"),o.h(s.default,{link:u.PROFILE_IMG_LINK,size:"lg"}),o.h("p",null,"I am Jim, web developer from Taipei, Taiwan. I have ",_," years experience of web development so far. Specialize in Front-end development."),o.h("p",{className:"margin-s"},o.h("label",null,"Name:")," ",o.h("span",null,"Jim Lin")),o.h("p",{className:"margin-s"},o.h("label",null,"Birthday:")," ",o.h("span",null,"4 September, 1987")),o.h("p",{className:"margin-s"},o.h("label",null,"location:")," ",o.h("span",null,"Taipei, Taiwan")),o.h("p",{className:"margin-s"},o.h("label",null,"Email:")," ",o.h("span",null,"jimlin7694@gmail.com")),o.h("hr",null),o.h(a.default,{onClick:()=>{const e=document.createElement("a");e.href=u.PDF_LINK,e.download="jim-resume-v2.pdf",e.dispatchEvent(new MouseEvent("click"))}},o.h("span",null,"Download CV")))},{menu:o.h("span",null,"My Skills"),content:o.h(c.default,{theme:"white"},o.h("h2",{className:"margin-bottom-lg"},"My Skills"),o.h("div",{className:"icons"},o.h(f.default,{url:"/public/Javascript.svg"}),o.h(f.default,{url:"/public/nodejs.svg"}),o.h(f.default,{url:"/public/Typescript.svg"}),o.h(f.default,{url:"/public/React.svg"}),o.h(f.default,{url:"/public/sass.svg"}),o.h(f.default,{url:"/public/Vue.svg"})),o.h("div",{className:"desc"},o.h("div",null,o.h("p",null,"Frequently used libs/frameworks/tools:"),o.h("ul",null,o.h("li",null,"React.js")," ",o.h("li",null,"Redux.js")," ",o.h("li",null,"Webpack.js"),o.h("li",null,"Express.js")," ",o.h("li",null,"Next.js"),o.h("li",null,"TradingView.js")," ",o.h("li",null,"Jest Unit Test"),o.h("li",null,"Enzyme.js")," ",o.h("li",null,"Typescript"))),o.h("div",null,o.h("p",null,"Occasionally used libs/frameworks:"),o.h("ul",null,o.h("li",null,"Vue.js"),o.h("li",null,"React Native"),o.h("li",null,"Storybook.js"),o.h("li",null,"Web3.js")))))},{menu:o.h("span",null,"Experience"),content:o.h(c.default,{theme:"white"},o.h("h2",{className:"margin-bottom-lg"},"Experience"),o.h("div",{className:"timeline"},o.h("div",{className:"spot"},o.h("div",{className:"title"},o.h("p",null,"2018 - Present")),o.h("div",{className:"content"},o.h("h3",null,"Anue.com Inc."),o.h("p",null,"Job title: Senior Front-End Developer."),o.h("p",null,"DAU (Daily Active Users): ~450k (All web products) + ~50k (All app products)."),o.h("h4",null,"Main Products: "),o.h("ul",null,o.h("li",null,o.h("a",{href:"https://www.cnyes.com",target:"_blank",rel:"noopener noreferrer"},"https://www.cnyes.com")),o.h("li",null,o.h("a",{href:"https://invest.cnyes.com",target:"_blank",rel:"noopener noreferrer"},"https://invest.cnyes.com")),o.h("li",null,o.h("a",{href:"https://fund.cnyes.com",target:"_blank",rel:"noopener noreferrer"},"https://fund.cnyes.com"," ")),o.h("li",null,o.h("a",{href:"https://stock.cnyes.com",target:"_blank",rel:"noopener noreferrer"},"https://stock.cnyes.com")),o.h("li",null,o.h("a",{href:"https://news.cnyes.com",target:"_blank",rel:"noopener noreferrer"},"https://news.cnyes.com")),o.h("li",null,o.h("a",{href:"https://www.cnyes.com",target:"_blank",rel:"noopener noreferrer"},"https://www.cnyes.com/video"))),o.h("h4",null,"Services: "),o.h("ul",null,o.h("li",null,"Financial news web applications and apps."),o.h("li",null,"Fund investment social web applications."),o.h("li",null,"Forex exchange information web application."),o.h("li",null,"Stock real-time information web application.")),o.h("h4",null,"Responsibility: "),o.h("ul",null,o.h("li",null,"Develop new web applications and maintain current web applications."),o.h("li",null,"Maintain a React-Native App (1 year)."),o.h("li",null,"Maintain the products using React.js and Redux."),o.h("li",null,"Update the products by adopting React.js v16 Hooks.")))),o.h("hr",null),o.h("div",{className:"spot"},o.h("div",{className:"title"},o.h("p",null,"2013 - 2018")),o.h("div",{className:"content"},o.h("h3",null,"Wallace Academic Editing "),o.h("p",null,"Job title: Web Developer."),o.h("p",null,"DAU (Daily Active Users): ~5k"),o.h("h4",null,"Main Products: "),o.h("ul",null,o.h("li",null,o.h("a",{href:"https://www.editing.tw",target:"_blank",rel:"noopener noreferrer"},"https://www.editing.tw"))),o.h("h4",null,"Services: "),o.h("ul",null,o.h("li",null,"Thesis Editing"),o.h("li",null,"Thesis Translation"),o.h("li",null,"Publication.")),o.h("h4",null,"Responsibility: "),o.h("ul",null,o.h("li",null,"Server maintenance."),o.h("li",null,"Web development and maintenance."),o.h("li",null,"Util development and maintenance."))))))}];for(const e in y)m.push(y[e].menu),v.push(o.h("div",{id:e},y[e].content));var b;!function(e){e[e.toggleMobileSidebar=0]="toggleMobileSidebar",e[e.ScrollToBlockId=1]="ScrollToBlockId"}(b||(b={}));const g={shouldShowSidebar:!1,activeBlock:0},w=(e,t)=>{switch(t.type){case b.toggleMobileSidebar:return Object.assign(Object.assign({},e),{shouldShowSidebar:!e.shouldShowSidebar});case b.ScrollToBlockId:return Object.assign(Object.assign({},e),{activeBlock:t.payload});default:return e}};t.default=function(){const[e,t]=r.useReducer(w,g),n=r.useRef([]),i=m.map((t,n)=>{return o.h("a",{key:t,className:l.default({active:e.activeBlock===n}),onClick:(r=n,e=>{e.preventDefault();const t=document.getElementById(""+r);t&&window.scrollTo({top:t.offsetTop,left:0,behavior:"smooth"})})},t);var r}),c=e=>{e.preventDefault(),t({type:b.toggleMobileSidebar})},a=h.default((function(){for(const e in n.current)window.scrollY>n.current[e].offsetTop-50&&n.current[e].offsetTop+n.current[e].divHeight>window.scrollY&&t({type:b.ScrollToBlockId,payload:+e})}),1e3);return r.useEffect(()=>{const e=[];for(const t in v){const n=document.getElementById(""+t);n&&e.push({offsetTop:n.offsetTop,divHeight:n.clientHeight})}n.current=e,d.default()},[]),r.useEffect(()=>(n.current.length>1&&window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[n.current]),o.h(o.Fragment,null,o.h("div",{className:l.default("main",{"offset-right":e.shouldShowSidebar})},o.h("div",{className:"m-header",onClick:c},o.h("button",null,o.h("span",null),o.h("span",null),o.h("span",null)),o.h("div",{className:"profile"},o.h(s.default,{link:u.PROFILE_IMG_LINK}),o.h("h2",null,"Jim Lin"))),v),o.h("div",{className:l.default("header-wrapper",{mDisplay:e.shouldShowSidebar})},o.h("div",{className:"header"},o.h("div",{className:"close",onClick:c}),o.h(s.default,{link:u.PROFILE_IMG_LINK,size:"m"}),o.h("h1",null,"Jim Lin"),o.h("p",{className:"uppercase"},"Front-end Developer"),o.h("nav",null,i))),o.h("div",{className:l.default("content-cover",{mDisplay:e.shouldShowSidebar}),onClick:c}))}},YeTj:function(e,t,n){},dNiP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WORK_FROM_YEAR_TIME_STAMP=t.PDF_LINK=t.PROFILE_IMG_LINK=void 0,t.PROFILE_IMG_LINK="/public/avatar.jpg",t.PDF_LINK="/public/resume-v2.pdf",t.WORK_FROM_YEAR_TIME_STAMP=new Date("2013/05/01").valueOf()},dwco:function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||u,scrollIntoView:o.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),l=this.getBoundingClientRect();n!==t.body?(h.call(this,n,n.scrollLeft+l.left-o.left,n.scrollTop+l.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function u(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function s(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=a(e,"Y")&&s(e,"Y"),n=a(e,"X")&&s(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function h(n,o,i){var c,a,s,f,p=l();n===t.body?(c=e,a=e.scrollX||e.pageXOffset,s=e.scrollY||e.pageYOffset,f=r.scroll):(c=n,a=n.scrollLeft,s=n.scrollTop,f=u),function t(n){var o,r,i,u,c=(l()-n.startTime)/468;u=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*u)),r=n.startX+(n.x-n.startX)*o,i=n.startY+(n.y-n.startY)*o,n.method.call(n.scrollable,r,i),r===n.x&&i===n.y||e.requestAnimationFrame(t.bind(e,n))}({scrollable:c,method:f,startTime:p,startX:a,startY:s,x:o,y:i})}}}}()},gWyB:function(e,t,n){},hgd9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calcCareerTimestampToYear=void 0,t.calcCareerTimestampToYear=e=>e?Math.floor((Date.now()-e)/31536e6):""},"ogA/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("2mXy"),r=n("FdF9");n("gWyB"),t.default=function({url:e,size:t="lg"}){const[n,l]=r.useState(!1);return r.useEffect(()=>{if(e){const t=new Image;t.src=e,t.onload=()=>{l(!0)}}},[e]),o.h("div",{className:"image "+t},n?o.h("img",{src:e}):o.h("div",{className:"placeholder"},o.h("div",{className:"shine"})))}},zI9q:function(e,t,n){}});
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{318:function(t,e,n){"use strict";function r(t){return decodeURI(t).replace(e.hashRE,"").replace(e.extRE,"")}function i(t){var n=t.match(e.hashRE);if(n)return n[0]}function l(t){return e.outboundRE.test(t)}function a(t){if(l(t))return t;var n=t.match(e.hashRE),i=n?n[0]:"",a=r(t);return e.endingSlashRE.test(a)?t:a+".html"+i}function s(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var l=t.replace(/^\//,"").split("/"),a=0;a<l.length;a++){var s=l[a];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var i=r(e),s=0;s<t.length;s++)if(r(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:a(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function u(t){var e=o(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function o(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function c(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}n(29),n(72),n(173),n(104),n(177),n(70),n(174),n(44),n(319),n(71),n(320),n(73),Object.defineProperty(e,"__esModule",{value:!0}),e.resolveMatchingConfig=e.resolveNavLinkItem=e.groupHeaders=e.resolveSidebarItems=e.resolvePage=e.isActive=e.ensureExt=e.isTel=e.isMailto=e.isExternal=e.getHash=e.normalize=e.outboundRE=e.endingSlashRE=e.extRE=e.hashRE=void 0,e.hashRE=/#.*$/,e.extRE=/\.(md|html)$/,e.endingSlashRE=/\/$/,e.outboundRE=/^[a-z]+:/i,e.normalize=r,e.getHash=i,e.isExternal=l,e.isMailto=function(t){return/^mailto:/.test(t)},e.isTel=function(t){return/^tel:/.test(t)},e.ensureExt=a,e.isActive=function(t,e){var n=decodeURIComponent(t.hash),l=i(e);return(!l||n===l)&&r(t.path)===r(e)},e.resolvePage=s,e.resolveSidebarItems=function(t,e,n,r){var i=n.pages,l=n.themeConfig,a=r&&l.locales&&l.locales[r]||l;if("auto"===(t.frontmatter.sidebar||a.sidebar||l.sidebar))return u(t);var o=a.sidebar||l.sidebar;if(o){var h=c(e,o),f=h.base,p=h.config;return"auto"===p?u(t):p?p.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return s(n,e,r);if(Array.isArray(e))return Object.assign(s(n,e[0],r),{title:e[1]});var l=e.children||[];return 0===l.length&&e.path?Object.assign(s(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:l.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,f)})):[]}return[]},e.groupHeaders=o,e.resolveNavLinkItem=function(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})},e.resolveMatchingConfig=c},319:function(t,e,n){"use strict";var r=n(171),i=n(5),l=n(13),a=n(19),s=n(175),u=n(172);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),o=String(this);if(!a.global)return u(a,o);var c=a.unicode;a.lastIndex=0;for(var h,f=[],p=0;null!==(h=u(a,o));){var g=String(h[0]);f[p]=g,""===g&&(a.lastIndex=s(o,l(a.lastIndex),c)),p++}return 0===p?null:f}]}))},320:function(t,e,n){"use strict";var r=n(171),i=n(176),l=n(5),a=n(19),s=n(106),u=n(175),o=n(13),c=n(172),h=n(74),f=n(1),p=[].push,g=Math.min,d=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),l=void 0===n?4294967295:n>>>0;if(0===l)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,l);for(var s,u,o,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,d=new RegExp(t.source,f+"g");(s=h.call(d,r))&&!((u=d.lastIndex)>g&&(c.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&p.apply(c,s.slice(1)),o=s[0].length,g=u,c.length>=l));)d.lastIndex===s.index&&d.lastIndex++;return g===r.length?!o&&d.test("")||c.push(""):c.push(r.slice(g)),c.length>l?c.slice(0,l):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),l=null==e?void 0:e[t];return void 0!==l?l.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var h=l(t),f=String(this),p=s(h,RegExp),v=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(d?"y":"g"),m=new p(d?h:"^(?:"+h.source+")",b),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===f.length)return null===c(m,f)?[f]:[];for(var k=0,E=0,R=[];E<f.length;){m.lastIndex=d?E:0;var I,y=c(m,d?f:f.slice(E));if(null===y||(I=g(o(m.lastIndex+(d?0:E)),f.length))===k)E=u(f,E,v);else{if(R.push(f.slice(k,E)),R.length===x)return R;for(var S=1;S<=y.length-1;S++)if(R.push(y[S]),R.length===x)return R;E=k=I}}return R.push(f.slice(k)),R}]}),!d)},321:function(t,e,n){"use strict";var r=n(0),i=n(323);r({target:"String",proto:!0,forced:n(324)("link")},{link:function(t){return i(this,"a","href",t)}})},323:function(t,e,n){var r=n(19),i=/"/g;t.exports=function(t,e,n,l){var a=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(l).replace(i,"&quot;")+'"'),s+">"+a+"</"+e+">"}},324:function(t,e,n){var r=n(1);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},414:function(t,e,n){"use strict";n.r(e);n(102),n(101),n(321);var r=n(318),i={name:"VPLink",props:{text:{type:String,required:!0},link:{type:String,required:!0},target:{type:String},rel:{type:String}},computed:{exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.isMailto)(this.link)||Object(r.isTel)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.isExternal)(this.link)&&!this.isBlankTarget},normalizedTarget:function(){return this.isNonHttpURI?null:this.target?this.target:Object(r.isExternal)(this.link)?"_blank":""},normalizedRel:function(){return this.isNonHttpURI||!1===this.rel?null:this.rel?this.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},l=n(25),a=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"vp-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._t("before"),t._v("\n  "+t._s(t.text)+"\n  "),t._t("after")],2):n("a",{staticClass:"vp-link external",attrs:{href:t.link,target:t.normalizedTarget,rel:t.normalizedRel},on:{focusout:t.focusoutAction}},[t._t("before"),t._v("\n  "+t._s(t.text)+"\n  "),t.isBlankTarget?n("VPIconExternalLink"):t._e(),t._v(" "),t._t("after")],2)}),[],!1,null,null,null);e.default=a.exports}}]);
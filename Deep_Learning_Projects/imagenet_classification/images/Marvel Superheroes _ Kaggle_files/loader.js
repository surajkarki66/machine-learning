(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);
function ea(a,b){if(b){var c=da;a=a.split(".");for(var e=0;e<a.length-1;e++){var d=a[e];d in c||(c[d]={});c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}function fa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ha(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:fa(a)}}
ea("Promise",function(a){function b(f){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function e(f){return f instanceof b?f:new b(function(h){h(f)})}if(a)return a;c.prototype.b=function(f){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(f)};var d=da.setTimeout;c.prototype.c=function(f){d(f,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var f=this.a;this.a=[];for(var h=0;h<f.length;++h){var k=
f[h];f[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(f){this.c(function(){throw f;})};b.prototype.f=function(){function f(l){return function(p){k||(k=!0,l.call(h,p))}}var h=this,k=!1;return{resolve:f(this.m),reject:f(this.g)}};b.prototype.m=function(f){if(f===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.s(f);else{a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1}h?this.l(f):this.h(f)}};
b.prototype.l=function(f){var h=void 0;try{h=f.then}catch(k){this.g(k);return}"function"==typeof h?this.u(h,f):this.h(f)};b.prototype.g=function(f){this.i(2,f)};b.prototype.h=function(f){this.i(1,f)};b.prototype.i=function(f,h){if(0!=this.b)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.b);this.b=f;this.c=h;this.j()};b.prototype.j=function(){if(null!=this.a){for(var f=0;f<this.a.length;++f)g.b(this.a[f]);this.a=null}};var g=new c;b.prototype.s=function(f){var h=this.f();
f.o(h.resolve,h.reject)};b.prototype.u=function(f,h){var k=this.f();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(f,h){function k(t,A){return"function"==typeof t?function(Y){try{l(t(Y))}catch(Z){p(Z)}}:A}var l,p,aa=new b(function(t,A){l=t;p=A});this.o(k(f,l),k(h,p));return aa};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.o=function(f,h){function k(){switch(l.b){case 1:f(l.c);break;case 2:h(l.c);break;default:throw Error("Unexpected state: "+
l.b);}}var l=this;null==this.a?g.b(k):this.a.push(k)};b.resolve=e;b.reject=function(f){return new b(function(h,k){k(f)})};b.race=function(f){return new b(function(h,k){for(var l=ha(f),p=l.next();!p.done;p=l.next())e(p.value).o(h,k)})};b.all=function(f){var h=ha(f),k=h.next();return k.done?e([]):new b(function(l,p){function aa(Y){return function(Z){t[Y]=Z;A--;0==A&&l(t)}}var t=[],A=0;do t.push(void 0),A++,e(k.value).o(aa(t.length-1),p),k=h.next();while(!k.done)})};return b});
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&(a[d]=e[d])}return a};ea("Object.assign",function(a){return a||ia});var m=this||self,ja=/^[\w+/_-]+[=]{0,2}$/,ka=null;function la(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ja.test(a)?a:""}function n(){}
function ma(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"function"==ma(a)}function na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=oa:r=pa;return r.apply(null,arguments)}
function u(a,b){a=a.split(".");var c=m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===b?c[e]&&c[e]!==Object.prototype[e]?c=c[e]:c=c[e]={}:c[e]=b}function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";function x(a,b){this.a=a===qa&&b||"";this.b=ra}x.prototype.B=!0;x.prototype.A=function(){return this.a};function sa(a){return a instanceof x&&a.constructor===x&&a.b===ra?a.a:"type_error:Const"}function y(a){return new x(qa,a)}var ra={},qa={};var ta={"gstatic.com":{loader:y("https://www.gstatic.com/charts/%{version}/loader.js"),debug:y("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),debug_i18n:y("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),compiled:y("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),compiled_i18n:y("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
css:y("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),css2:y("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),third_party:y("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"),third_party2:y("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),third_party_gen:y("https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}")},"gstatic.cn":{loader:y("https://www.gstatic.cn/charts/%{version}/loader.js"),
debug:y("https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),debug_i18n:y("https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),compiled:y("https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),compiled_i18n:y("https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),css:y("https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"),
css2:y("https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),third_party:y("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"),third_party2:y("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),third_party_gen:y("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}")}},ua=["default"],va={format:[],"default":["format"],ui:["default"],ui_base:["default"],flashui:["ui"],fw:["ui"],annotatedtimeline:["annotationchart"],
annotationchart:["ui","controls","corechart","table"],areachart:"browserchart",bar:["fw","dygraph","webfontloader"],barchart:"browserchart",browserchart:["ui"],bubbles:["fw","d3"],calendar:["fw"],charteditor:"ui corechart imagechart annotatedtimeline gauge motionchart orgchart table".split(" "),charteditor_base:"ui_base corechart imagechart annotatedtimeline gauge motionchart orgchart table_base".split(" "),circles:["fw","d3"],clusterchart:["corechart","d3"],columnchart:"browserchart",controls:["ui"],
controls_base:["ui_base"],corechart:["ui"],gantt:["fw","dygraph"],gauge:["ui"],geochart:["ui"],geomap:["flashui"],geomap_base:["ui_base"],heatmap:["vegachart"],helloworld:["fw"],imagechart:["ui"],imageareachart:"imagechart",imagebarchart:"imagechart",imagelinechart:"imagechart",imagepiechart:"imagechart",imagesparkline:"imagechart",line:["fw","dygraph","webfontloader"],linechart:"browserchart",map:["ui"],motionchart:["flashui"],orgchart:["ui"],overtimecharts:["ui","corechart"],piechart:"browserchart",
sankey:["fw","d3","d3.sankey"],scatter:["fw","dygraph","webfontloader"],scatterchart:"browserchart",sunburst:["fw","d3"],streamgraph:["fw","d3"],table:["ui"],table_base:["ui_base"],timeline:["fw","ui","dygraph"],treemap:["ui"],wordtree:["ui"]},wa={d3:{subdir1:"d3",subdir2:"v5",filename:"d3.js"},"d3.sankey":{subdir1:"d3_sankey",subdir2:"v4",filename:"d3.sankey.js"},webfontloader:{subdir:"webfontloader",filename:"webfont.js"}},xa={dygraph:{subdir:"dygraphs",filename:"dygraph-tickers-combined.js"},vegaLib:{subdir:"vega",
filename:"vega-bundle.js"}},ya={"default":[{subdir:"core",filename:"tooltip.css"}],annotationchart:[{subdir:"annotationchart",filename:"annotationchart.css"}],charteditor:[{subdir:"charteditor",filename:"charteditor.css"}],charteditor_base:[{subdir:"charteditor_base",filename:"charteditor_base.css"}],controls:[{subdir:"controls",filename:"controls.css"}],imagesparkline:[{subdir:"imagechart",filename:"imagesparkline.css"}],orgchart:[{subdir:"orgchart",filename:"orgchart.css"}],table:[{subdir:"table",
filename:"table.css"},{subdir:"util",filename:"format.css"}],table_base:[{subdir:"util",filename:"format.css"},{subdir:"table",filename:"table_base.css"}],ui:[{subdir:"util",filename:"util.css"}],ui_base:[{subdir:"util",filename:"util_base.css"}]};var za={af:!0,am:!0,az:!0,ar:!0,arb:"ar",bg:!0,bn:!0,ca:!0,cs:!0,cmn:"zh",da:!0,de:!0,el:!0,en:!0,en_gb:!0,es:!0,es_419:!0,et:!0,eu:!0,fa:!0,fi:!0,fil:!0,fr:!0,fr_ca:!0,gl:!0,ka:!0,gu:!0,he:"iw",hi:!0,hr:!0,hu:!0,hy:!0,id:!0,"in":"id",is:!0,it:!0,iw:!0,ja:!0,ji:"yi",jv:!1,jw:"jv",km:!0,kn:!0,ko:!0,lo:!0,lt:!0,lv:!0,ml:!0,mn:!0,mo:"ro",mr:!0,ms:!0,nb:"no",ne:!0,nl:!0,no:!0,pl:!0,pt:"pt_br",pt_br:!0,pt_pt:!0,ro:!0,ru:!0,si:!0,sk:!0,sl:!0,sr:!0,sv:!0,sw:!0,swh:"sw",ta:!0,te:!0,th:!0,tl:"fil",tr:!0,uk:!0,
ur:!0,vi:!0,yi:!1,zh:"zh_cn",zh_cn:!0,zh_hk:!0,zh_tw:!0,zsm:"ms",zu:!0};var z=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,d=0;d<c;d++)d in e&&b.call(void 0,e[d],d,a)},Aa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,e=[],d=0,g="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in g){var h=g[f];b.call(void 0,h,f,a)&&(e[d++]=h)}return e},B=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,
b,void 0)}:function(a,b){for(var c=a.length,e=Array(c),d="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in d&&(e[g]=b.call(void 0,d[g],g,a));return e},Ba=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,d=0;d<c;d++)if(d in e&&b.call(void 0,e[d],d,a))return!0;return!1};
function Ca(a,b){a:{for(var c="string"===typeof a?a.split(""):a,e=a.length-1;0<=e;e--)if(e in c&&b.call(void 0,c[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Da(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c],d=ma(e);if("array"==d||"object"==d&&"number"==typeof e.length){d=a.length||0;var g=e.length||0;a.length=d+g;for(var f=0;f<g;f++)a[d+f]=e[f]}else a.push(e)}};function C(a,b){this.a=a===Ea&&b||"";this.b=Fa}C.prototype.B=!0;C.prototype.A=function(){return this.a.toString()};function D(a){return a instanceof C&&a.constructor===C&&a.b===Fa?a.a:"type_error:TrustedResourceUrl"}
function Ga(a,b){var c=sa(a);if(!Ha.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(Ia,function(e,d){if(!Object.prototype.hasOwnProperty.call(b,d))throw Error('Found marker, "'+d+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));e=b[d];return e instanceof x?sa(e):encodeURIComponent(String(e))});return new C(Ea,a)}
var Ia=/%{(\w+)}/g,Ha=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Ja=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,Fa={};function Ka(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var e in c){var d=c[e];d=Array.isArray(d)?d:[d];for(var g=0;g<d.length;g++){var f=d[g];null!=f&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(String(f)))}}return b}var Ea={};var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ma(a,b){return a<b?-1:a>b?1:0};var E;a:{var Na=m.navigator;if(Na){var Oa=Na.userAgent;if(Oa){E=Oa;break a}}E=""}function F(a){return-1!=E.indexOf(a)};function Pa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var Qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(a,b){for(var c,e,d=1;d<arguments.length;d++){e=arguments[d];for(c in e)a[c]=e[c];for(var g=0;g<Qa.length;g++)c=Qa[g],Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}};function Sa(a,b){a.src=D(b);(b=a.ownerDocument&&a.ownerDocument.defaultView)&&b!=m?b=la(b.document):(null===ka&&(ka=la(m.document)),b=ka);b&&a.setAttribute("nonce",b)};function Ta(a){var b=Ua;return Object.prototype.hasOwnProperty.call(b,11)?b[11]:b[11]=a(11)};var Va=F("Opera"),Wa=F("Trident")||F("MSIE"),Xa=F("Edge"),Ya=F("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Za=-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"),$a;
a:{var ab="",bb=function(){var a=E;if(Ya)return/rv:([^\);]+)(\)|;)/.exec(a);if(Xa)return/Edge\/([\d\.]+)/.exec(a);if(Wa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Za)return/WebKit\/(\S+)/.exec(a);if(Va)return/(?:Version)[ \/]?(\S+)/.exec(a)}();bb&&(ab=bb?bb[1]:"");if(Wa){var G,cb=m.document;G=cb?cb.documentMode:void 0;if(null!=G&&G>parseFloat(ab)){$a=String(G);break a}}$a=ab}var db=$a,Ua={};
function eb(){return Ta(function(){for(var a=0,b=La(String(db)).split("."),c=La("11").split("."),e=Math.max(b.length,c.length),d=0;0==a&&d<e;d++){var g=b[d]||"",f=c[d]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];if(0==g[0].length&&0==f[0].length)break;a=Ma(0==g[1].length?0:parseInt(g[1],10),0==f[1].length?0:parseInt(f[1],10))||Ma(0==g[2].length,0==f[2].length)||Ma(g[2],f[2]);g=g[3];f=f[3]}while(0==a)}return 0<=a})};function fb(a,b){Pa(b,function(c,e){c&&"object"==typeof c&&c.B&&(c=c.A());"style"==e?a.style.cssText=c:"class"==e?a.className=c:"for"==e?a.htmlFor=c:gb.hasOwnProperty(e)?a.setAttribute(gb[e],c):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?a.setAttribute(e,c):a[e]=c})}
var gb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function hb(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function ib(a,b){this.c=a;this.f=b;this.b=0;this.a=null}ib.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function jb(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function kb(a){m.setTimeout(function(){throw a;},0)}var lb;
function mb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var d=hb("IFRAME");d.style.display="none";document.documentElement.appendChild(d);var g=d.contentWindow;d=g.document;d.open();d.close();var f="callImmediate"+Math.random(),h="file:"==g.location.protocol?"*":g.location.protocol+"//"+g.location.host;d=r(function(k){if(("*"==h||k.origin==h)&&k.data==f)this.port1.onmessage()},this);g.addEventListener("message",
d,!1);this.port1={};this.port2={postMessage:function(){g.postMessage(f,h)}}});if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},e=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var d=c.w;c.w=null;d()}};return function(d){e.next={w:d};e=e.next;b.port2.postMessage(0)}}return function(d){m.setTimeout(d,0)}};function nb(){this.b=this.a=null}var pb=new ib(function(){return new ob},function(a){a.reset()});nb.prototype.add=function(a,b){var c=pb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function qb(){var a=rb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function ob(){this.next=this.b=this.a=null}ob.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};ob.prototype.reset=function(){this.next=this.b=this.a=null};function sb(a,b){H||tb();ub||(H(),ub=!0);rb.add(a,b)}var H;function tb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);H=function(){a.then(vb)}}else H=function(){var b=vb;!q(m.setImmediate)||m.Window&&m.Window.prototype&&!F("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(lb||(lb=mb()),lb(b)):m.setImmediate(b)}}var ub=!1,rb=new nb;function vb(){for(var a;a=qb();){try{a.a.call(a.b)}catch(b){kb(b)}jb(pb,a)}ub=!1};function wb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function I(a){this.a=0;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=n)try{var b=this;a.call(void 0,function(c){J(b,2,c)},function(c){J(b,3,c)})}catch(c){J(this,3,c)}}function xb(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}xb.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var yb=new ib(function(){return new xb},function(a){a.reset()});function zb(a,b,c){var e=yb.get();e.f=a;e.b=b;e.c=c;return e}
I.prototype.then=function(a,b,c){return Ab(this,q(a)?a:null,q(b)?b:null,c)};I.prototype.$goog_Thenable=!0;I.prototype.cancel=function(a){if(0==this.a){var b=new K(a);sb(function(){Bb(this,b)},this)}};function Bb(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var e=0,d=null,g=null,f=c.b;f&&(f.g||(e++,f.a==a&&(d=f),!(d&&1<e)));f=f.next)d||(g=f);d&&(0==c.a&&1==e?Bb(c,b):(g?(e=g,e.next==c.f&&(c.f=e),e.next=e.next.next):Cb(c),Db(c,d,3,b)))}a.c=null}else J(a,3,b)}
function Eb(a,b){a.b||2!=a.a&&3!=a.a||Fb(a);a.f?a.f.next=b:a.b=b;a.f=b}function Ab(a,b,c,e){var d=zb(null,null,null);d.a=new I(function(g,f){d.f=b?function(h){try{var k=b.call(e,h);g(k)}catch(l){f(l)}}:g;d.b=c?function(h){try{var k=c.call(e,h);void 0===k&&h instanceof K?f(h):g(k)}catch(l){f(l)}}:f});d.a.c=a;Eb(a,d);return d.a}I.prototype.l=function(a){this.a=0;J(this,2,a)};I.prototype.m=function(a){this.a=0;J(this,3,a)};
function J(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var e=c,d=a.l,g=a.m;if(e instanceof I){Eb(e,zb(d||n,g||null,a));var f=!0}else if(wb(e))e.then(d,g,a),f=!0;else{if(na(e))try{var h=e.then;if(q(h)){Gb(e,h,d,g,a);f=!0;break a}}catch(k){g.call(a,k);f=!0;break a}f=!1}}f||(a.i=c,a.a=b,a.c=null,Fb(a),3!=b||c instanceof K||Hb(a,c))}}
function Gb(a,b,c,e,d){function g(k){h||(h=!0,e.call(d,k))}function f(k){h||(h=!0,c.call(d,k))}var h=!1;try{b.call(a,f,g)}catch(k){g(k)}}function Fb(a){a.h||(a.h=!0,sb(a.j,a))}function Cb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}I.prototype.j=function(){for(var a;a=Cb(this);)Db(this,a,this.a,this.i);this.h=!1};
function Db(a,b,c,e){if(3==c&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Ib(b,c,e);else try{b.g?b.f.call(b.c):Ib(b,c,e)}catch(d){Jb.call(null,d)}jb(yb,b)}function Ib(a,b,c){2==b?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function Hb(a,b){a.g=!0;sb(function(){a.g&&Jb.call(null,b)})}var Jb=kb;function K(a){w.call(this,a)}v(K,w);K.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function L(a,b){this.g=[];this.u=a;this.s=b||null;this.f=this.a=!1;this.c=void 0;this.l=this.J=this.i=!1;this.h=0;this.b=null;this.j=0}L.prototype.cancel=function(a){if(this.a)this.c instanceof L&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.j--,0>=b.j&&b.cancel())}this.u?this.u.call(this.s,this):this.l=!0;this.a||(a=new M(this),N(this),O(this,!1,a))}};L.prototype.m=function(a,b){this.i=!1;O(this,a,b)};function O(a,b,c){a.a=!0;a.c=c;a.f=!b;Kb(a)}
function N(a){if(a.a){if(!a.l)throw new P(a);a.l=!1}}function Q(a,b,c,e){a.g.push([b,c,e]);a.a&&Kb(a);return a}L.prototype.then=function(a,b,c){var e,d,g=new I(function(f,h){e=f;d=h});Q(this,e,function(f){f instanceof M?g.cancel():d(f)});return g.then(a,b,c)};L.prototype.$goog_Thenable=!0;function Lb(a){return Ba(a.g,function(b){return q(b[1])})}
function Kb(a){if(a.h&&a.a&&Lb(a)){var b=a.h,c=R[b];c&&(m.clearTimeout(c.a),delete R[b]);a.h=0}a.b&&(a.b.j--,delete a.b);b=a.c;for(var e=c=!1;a.g.length&&!a.i;){var d=a.g.shift(),g=d[0],f=d[1];d=d[2];if(g=a.f?f:g)try{var h=g.call(d||a.s,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(wb(b)||"function"===typeof m.Promise&&b instanceof m.Promise)e=!0,a.i=!0}catch(k){b=k,a.f=!0,Lb(a)||(c=!0)}}a.c=b;e&&(h=r(a.m,a,!0),e=r(a.m,a,!1),b instanceof L?(Q(b,h,e),b.J=!0):b.then(h,e));c&&(b=new Mb(b),
R[b.a]=b,a.h=b.a)}function Nb(){var a=new L;N(a);O(a,!0,null);return a}function P(){w.call(this)}v(P,w);P.prototype.message="Deferred has already fired";P.prototype.name="AlreadyCalledError";function M(){w.call(this)}v(M,w);M.prototype.message="Deferred was canceled";M.prototype.name="CanceledError";function Mb(a){this.a=m.setTimeout(r(this.c,this),0);this.b=a}Mb.prototype.c=function(){delete R[this.a];throw this.b;};var R={};var Ob,Pb=[];function Qb(a,b){function c(){var d=a.shift();d=Rb(d,b);a.length&&Q(d,c,c,void 0);return d}if(!a.length)return Nb();var e=Pb.length;Da(Pb,a);if(e)return Ob;a=Pb;return Ob=c()}
function Rb(a,b){var c=b||{};b=c.document||document;var e=D(a).toString(),d=hb("SCRIPT"),g={G:d,H:void 0},f=new L(Sb,g),h=null,k=null!=c.timeout?c.timeout:5E3;0<k&&(h=window.setTimeout(function(){S(d,!0);var l=new Tb(1,"Timeout reached for loading script "+e);N(f);O(f,!1,l)},k),g.H=h);d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(S(d,c.K||!1,h),N(f),O(f,!0,null))};d.onerror=function(){S(d,!0,h);var l=new Tb(0,"Error while loading script "+
e);N(f);O(f,!1,l)};g=c.attributes||{};Ra(g,{type:"text/javascript",charset:"UTF-8"});fb(d,g);Sa(d,a);Ub(b).appendChild(d);return f}function Ub(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function Sb(){if(this&&this.G){var a=this.G;a&&"SCRIPT"==a.tagName&&S(a,!0,this.H)}}function S(a,b,c){null!=c&&m.clearTimeout(c);a.onload=n;a.onerror=n;a.onreadystatechange=n;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}
function Tb(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);w.call(this,c);this.code=a}v(Tb,w);var Vb=Rb;function Wb(a){var b=a.C||{};a=Ga(a.format,a.v);a=Ja.exec(D(a).toString());var c=a[3]||"";return new C(Ea,a[1]+Ka("?",a[2]||"",b)+Ka("#",c,void 0))}function Xb(a){a=B(a,Wb);if(0==a.length)return Promise.resolve();var b={timeout:3E4,attributes:{async:!1,defer:!1}},c=[];!Wa||eb()?z(a,function(e){c.push(Vb(e,b))}):c.push(Qb(a,b));return Promise.all(B(c,function(e){return new Promise(function(d){return Q(e,d,null,void 0)})}))};function Yb(){return new Promise(function(a){"undefined"==typeof window||"complete"===document.readyState?a():window.addEventListener?(document.addEventListener("DOMContentLoaded",a,!0),window.addEventListener("load",a,!0)):window.attachEvent?window.attachEvent("onload",a):q(window.onload)?window.onload=function(b){window.onload(b);a()}:window.onload=a})}var T={};function Zb(a){T[a]||(T[a]={loaded:!1});T[a].loaded=!0};var $b=0;
function ac(a,b){b=b||document;var c="load-css-"+$b++,e=b.createElement("link");e.setAttribute("id",c);e.setAttribute("rel","stylesheet");e.setAttribute("type","text/css");return new Promise(function(d,g){void 0!==e.addEventListener?(e.addEventListener("load",d,!1),e.addEventListener("error",g,!1)):void 0!==e.attachEvent&&e.attachEvent("onload",function(){try{Ca(b.styleSheets,function(f){return f.id===c})&&(Zb(a),d())}catch(f){g()}});try{(b.querySelector("head")||b).appendChild(e),e.setAttribute("href",a)}catch(f){d()}})}
function bc(a,b){return Promise.all(B(a,function(c){c=Wb(c);return ac(D(c).toString(),b)}))};var U="",V="",cc=!1,dc=!1,W;function ec(a){function b(e){for(var d=[],g=0;g<e.length;g++){var f=e[g];if(!c[f]){c[f]=!0;var h=va[f]||[];d=d.concat(b("string"===typeof h?[h]:h));"string"!==typeof h&&d.push(f)}}return d}var c={};return b(a)}function fc(a){var b=[],c=[];z(a,function(e){var d=T[e]&&T[e].D;void 0!==d?b.push(d):c.push(e)});return{F:b,I:c}}
function gc(a){a=fc(ec(a));var b=a.F,c=a.I,e=Aa(B(c,function(g){var f={version:U,language:V,"package":g};wa[g]?(g=wa[g],Object.assign(f,g),g=W[g.subdir?"third_party":"third_party2"]):xa[g]?(Object.assign(f,xa[g]),g=W.third_party_gen):g=W[(cc?"debug":dc?"pseudo":"compiled")+(V?"_i18n":"")];return g?{format:g,v:f,C:void 0}:null}),function(g){return null!=g}),d=Promise.all(b).then(function(){return Xb(e)}).then(function(){z(c,function(g){Zb(g)})});z(c,function(g){T[g]={D:d,loaded:!1}});return d}
function hc(a,b){a=ec(a);var c=[];z(a,function(k){z(ya[k]||[],function(l){c.push(l)})});if(0===c.length)return Promise.resolve();var e={};a=B(c,function(k){var l=(k.subdir||k.subdir1+"/"+k.subdir2)+"/"+k.filename;e[l]=k;return l});a=fc(a);var d=a.F,g=a.I,f=B(g,function(k){k=e[k];var l=W.css,p={version:U,subdir:k.subdir,filename:k.filename};k.subdir2&&(l=W.css2,p.subdir1=k.subdir1,p.subdir2=k.subdir2);return{format:l,v:p,C:void 0}}),h=Promise.all(d).then(function(){return bc(f,b)}).then(function(){z(g,
function(k){Zb(k)})});z(g,function(k){T[k]={D:h,loaded:!1}});return h}function ic(a){for(var b=a.replace(/-/g,"_").toLowerCase();"string"===typeof b;)a=b,b=za[b],b===a&&(b=!1);b||(a.match(/_[^_]+$/)?(a=a.replace(/_[^_]+$/,""),a=ic(a)):a="en");return a}
function jc(a,b){u("goog.visualization.isSafeMode",b.safeMode||!1);var c=b.debug||!1,e=b.pseudo||!1,d=b.language||"";d=ic(d);a||(a=b.version||"unknown");if(""!==U&&U!==a||""!==V&&V!==d)throw Error("Cannot load different versions of Google Charts.");"en"===d&&(d="");U=a;V=d;cc=c;dc=e;u("google.visualization.ModulePath",W.format);u("google.visualization.Version",a);u("google.visualization.Locale",d);u("google.visualization.isDebug",c);u("google.visualization.isPseudo",e);u("google.visualization.mapsApiKey",
b.mapsApiKey)}var X=null;function kc(a,b){function c(d){return d.getRootNode?d.getRootNode():null!=d.parentNode?c(d.parentNode):d}jc(a,b);a=b.packages;Array.isArray(a)&&0!=a.length||(a=ua);a=a.map(function(d){return d.toLowerCase()});var e=c(b.element||document);return X=Promise.all([hc(a,e),gc(a),b.ignoreWindowOnLoad?Promise.resolve():Yb()]).then(function(){var d=b.callback;if(d){if(!q(d))throw Error("Callback must be a function");d()}})}
u("google.charts.loader.VersionSpecific.load",function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];c=0;"visualization"===b[c]&&c++;var e="current";"string"===typeof b[c]&&(e=b[c],c++);var d={};na(b[c])&&(d=b[c]);W||(W=ta[d.domain||"gstatic.com"]);return kc(e,d)});
u("google.charts.loader.VersionSpecific.setOnLoadCallback",function(a){if(!X)throw Error("Must call google.charts.load before google.charts.setOnLoadCallback");if(!a)return X;if(!q(a))throw Error("Callback must be a function");return X.then(a)});}).call(this);

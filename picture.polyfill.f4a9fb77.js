parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"awuu":[function(require,module,exports) {
var define;
var e;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,r=document.createElement("source"),n=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=r.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(r,n,s){"use strict";function i(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(e,t,r,n){var s,i,c;return"saveData"===b.algorithm?e>2.7?c=r+1:(i=(t-r)*(s=Math.pow(e-.6,1.5)),n&&(i+=.1*s),c=e+i):c=r>1?Math.sqrt(e*t):e,c>r}function a(e,t){return e.res-t.res}function u(e,t,r){var n;return!r&&t&&(r=(r=e[p.ns].sets)&&r[r.length-1]),(n=o(t,r))&&(t=p.makeUrl(t),e[p.ns].curSrc=t,e[p.ns].curCan=n,n.res||_(n,n.set.sizes)),n}function o(e,t){var r,n,s;if(e&&t)for(s=p.parseSet(t),e=p.makeUrl(e),r=0;r<s.length;r++)if(e===p.makeUrl(s[r].url)){n=s[r];break}return n}n.createElement("picture");var l,f,d,p={},m=!1,A=function(){},h=n.createElement("img"),g=h.getAttribute,v=h.setAttribute,w=h.removeAttribute,S=n.documentElement,y={},b={algorithm:""},x="data-pfsrc",E=x+"set",z=navigator.userAgent,T=/rident/.test(z)||/ecko/.test(z)&&z.match(/rv\:(\d+)/)&&RegExp.$1>35,C="currentSrc",R=/\s+\+?\d+(e\d+)?w/,L=/(\([^)]+\))?\s*(.+)/,M=r.picturefillCFG,P="font-size:100%!important;",D=!0,B={},I={},U=r.devicePixelRatio,$={px:1,in:96},k=n.createElement("a"),W=!1,Q=/^[ \t\n\r\u000c]+/,G=/^[, \t\n\r\u000c]+/,H=/^[^ \t\n\r\u000c]+/,F=/[,]+$/,N=/^\d+$/,O=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,q=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},j=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},V=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=j(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(r,n){var s;if(!(r in B))if(B[r]=!1,n&&(s=r.match(e)))B[r]=s[1]*$[s[2]];else try{B[r]=new Function("e",t(r))($)}catch(i){}return B[r]}}(),_=function(e,t){return e.w?(e.cWidth=p.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},K=function(e){if(m){var t,r,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),s=(t=i.elements||p.qsa(i.context||n,i.reevaluate||i.reselect?p.sel:p.selShort)).length){for(p.setupRun(i),W=!0,r=0;s>r;r++)p.fillImg(t[r],i);p.teardownRun(i)}}};r.console&&console.warn,C in h||(C="src"),y["image/jpeg"]=!0,y["image/gif"]=!0,y["image/png"]=!0,y["image/svg+xml"]=n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),p.ns=("pf"+(new Date).getTime()).substr(0,9),p.supSrcset="srcset"in h,p.supSizes="sizes"in h,p.supPicture=!!r.HTMLPictureElement,p.supSrcset&&p.supPicture&&!p.supSizes&&function(e){h.srcset="data:,a",e.src="data:,a",p.supSrcset=h.complete===e.complete,p.supPicture=p.supSrcset&&p.supPicture}(n.createElement("img")),p.supSrcset&&!p.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=n.createElement("img"),r=function(){2===t.width&&(p.supSizes=!0),f=p.supSrcset&&!p.supSizes,m=!0,setTimeout(K)};t.onload=r,t.onerror=r,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():m=!0,p.selShort="picture>img,img[srcset]",p.sel=p.selShort,p.cfg=b,p.DPR=U||1,p.u=$,p.types=y,p.setSize=A,p.makeUrl=j(function(e){return k.href=e,k.href}),p.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},p.matchesMedia=function(){return r.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?p.matchesMedia=function(e){return!e||matchMedia(e).matches}:p.matchesMedia=p.mMQ,p.matchesMedia.apply(this,arguments)},p.mMQ=function(e){return!e||V(e)},p.calcLength=function(e){var t=V(e,!0)||!1;return 0>t&&(t=!1),t},p.supportsType=function(e){return!e||y[e]},p.parseSize=j(function(e){var t=(e||"").match(L);return{media:t&&t[1],length:t&&t[2]}}),p.parseSet=function(e){return e.cands||(e.cands=function(e,t){function r(t){var r,n=t.exec(e.substring(d));return n?(r=n[0],d+=r.length,r):void 0}function n(){var e,r,n,s,i,u,o,l,f,d=!1,m={};for(s=0;s<a.length;s++)u=(i=a[s])[i.length-1],o=i.substring(0,i.length-1),l=parseInt(o,10),f=parseFloat(o),N.test(o)&&"w"===u?((e||r)&&(d=!0),0===l?d=!0:e=l):O.test(o)&&"x"===u?((e||r||n)&&(d=!0),0>f?d=!0:r=f):N.test(o)&&"h"===u?((n||r)&&(d=!0),0===l?d=!0:n=l):d=!0;d||(m.url=c,e&&(m.w=e),r&&(m.d=r),n&&(m.h=n),n||r||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function s(){for(r(Q),u="",o="in descriptor";;){if(l=e.charAt(d),"in descriptor"===o)if(i(l))u&&(a.push(u),u="",o="after descriptor");else{if(","===l)return d+=1,u&&a.push(u),void n();if("("===l)u+=l,o="in parens";else{if(""===l)return u&&a.push(u),void n();u+=l}}else if("in parens"===o)if(")"===l)u+=l,o="in descriptor";else{if(""===l)return a.push(u),void n();u+=l}else if("after descriptor"===o)if(i(l));else{if(""===l)return void n();o="in descriptor",d-=1}d+=1}}for(var c,a,u,o,l,f=e.length,d=0,p=[];;){if(r(G),d>=f)return p;c=r(H),a=[],","===c.slice(-1)?(c=c.replace(F,""),n()):s()}}(e.srcset,e)),e.cands},p.getEmValue=function(){var e;if(!l&&(e=n.body)){var t=n.createElement("div"),r=S.style.cssText,s=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",S.style.cssText=P,e.style.cssText=P,e.appendChild(t),l=t.offsetWidth,e.removeChild(t),l=parseFloat(l,10),S.style.cssText=r,e.style.cssText=s}return l||16},p.calcListLength=function(e){if(!(e in I)||b.uT){var t=p.calcLength(function(e){function t(e){return!!(o.test(e)&&parseFloat(e)>=0)||!!l.test(e)||"0"===e||"-0"===e||"+0"===e}var r,n,s,c,a,u,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){s&&(c.push(s),s="")}function r(){c[0]&&(a.push(c),c=[])}for(var n,s="",c=[],a=[],u=0,o=0,l=!1;;){if(""===(n=e.charAt(o)))return t(),r(),a;if(l){if("*"===n&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(i(n)){if(e.charAt(o-1)&&i(e.charAt(o-1))||!s){o+=1;continue}if(0===u){t(),o+=1;continue}n=" "}else if("("===n)u+=1;else if(")"===n)u-=1;else{if(","===n){t(),r(),o+=1;continue}if("/"===n&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}s+=n,o+=1}}}(e),s=n.length,r=0;s>r;r++)if(t(a=(c=n[r])[c.length-1])){if(u=a,c.pop(),0===c.length)return u;if(c=c.join(" "),p.matchesMedia(c))return u}return"100vw"}(e));I[e]=t||$.width}return I[e]},p.setRes=function(e){var t;if(e)for(var r=0,n=(t=p.parseSet(e)).length;n>r;r++)_(t[r],e.sizes);return t},p.setRes.res=_,p.applySetCandidate=function(e,t){if(e.length){var r,n,s,i,o,l,f,d,m,A=t[p.ns],h=p.DPR;if(l=A.curSrc||t[C],(f=A.curCan||u(t,l,e[0].set))&&f.set===e[0].set&&((m=T&&!t.complete&&f.res-.1>h)||(f.cached=!0,f.res>=h&&(o=f))),!o)for(e.sort(a),o=e[(i=e.length)-1],n=0;i>n;n++)if((r=e[n]).res>=h){o=e[s=n-1]&&(m||l!==p.makeUrl(r.url))&&c(e[s].res,r.res,h,e[s].cached)?e[s]:r;break}o&&(d=p.makeUrl(o.url),A.curSrc=d,A.curCan=o,d!==l&&p.setSrc(t,o),p.setSize(t))}},p.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},p.getSet=function(e){var t,r,n,s=!1,i=e[p.ns].sets;for(t=0;t<i.length&&!s;t++)if((r=i[t]).srcset&&p.matchesMedia(r.media)&&(n=p.supportsType(r.type))){"pending"===n&&(r=n),s=r;break}return s},p.parseSets=function(e,t,r){var n,i,c,a,u=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[p.ns];(l.src===s||r.src)&&(l.src=g.call(e,"src"),l.src?v.call(e,x,l.src):w.call(e,x)),(l.srcset===s||r.srcset||!p.supSrcset||e.srcset)&&(n=g.call(e,"srcset"),l.srcset=n,a=!0),l.sets=[],u&&(l.pic=!0,function(e,t){var r,n,s,i,c=e.getElementsByTagName("source");for(r=0,n=c.length;n>r;r++)(s=c[r])[p.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,l.sets)),l.srcset?(i={srcset:l.srcset,sizes:g.call(e,"sizes")},l.sets.push(i),(c=(f||l.src)&&R.test(l.srcset||""))||!l.src||o(l.src,i)||i.has1x||(i.srcset+=", "+l.src,i.cands.push({url:l.src,d:1,set:i}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=s,l.supported=!(u||i&&!p.supSrcset||c&&!p.supSizes),a&&p.supSrcset&&!l.supported&&(n?(v.call(e,E,n),e.srcset=""):w.call(e,E)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==p.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},p.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[p.ns]||(e[p.ns]={}),r=e[p.ns],(n||r.evaled!==d)&&((!r.parsed||t.reevaluate)&&p.parseSets(e,e.parentNode,t),r.supported?r.evaled=d:function(e){var t,r=p.getSet(e),n=!1;"pending"!==r&&(n=d,r&&(t=p.setRes(r),p.applySetCandidate(t,e))),e[p.ns].evaled=n}(e))},p.setupRun=function(){(!W||D||U!==r.devicePixelRatio)&&(D=!1,U=r.devicePixelRatio,B={},I={},p.DPR=U||1,$.width=Math.max(r.innerWidth||0,S.clientWidth),$.height=Math.max(r.innerHeight||0,S.clientHeight),$.vw=$.width/100,$.vh=$.height/100,d=[$.height,$.width,U].join("-"),$.em=p.getEmValue(),$.rem=$.em)},p.supPicture?(K=A,p.fillImg=A):function(){var e,t=r.attachEvent?/d$|^c/:/d$|^c|^i/,s=function r(){var s=n.readyState||"";i=setTimeout(r,"loading"===s?200:999),n.body&&(p.fillImgs(),(e=e||t.test(s))&&clearTimeout(i))},i=setTimeout(s,n.body?9:99),c=S.clientHeight;q(r,"resize",function(e,t){var r,n,s=function s(){var i=new Date-n;t>i?r=setTimeout(s,t-i):(r=null,e())};return function(){n=new Date,r||(r=setTimeout(s,t))}}(function(){D=Math.max(r.innerWidth||0,S.clientWidth)!==$.width||S.clientHeight!==c,c=S.clientHeight,D&&p.fillImgs()},99)),q(n,"readystatechange",s)}(),p.picturefill=K,p.fillImgs=K,p.teardownRun=A,K._=p,r.picturefillCFG={pf:p,push:function(e){var t=e.shift();"function"==typeof p[t]?p[t].apply(p,e):(b[t]=e[0],W&&p.fillImgs({reselect:!0}))}};for(;M&&M.length;)r.picturefillCFG.push(M.shift());r.picturefill=K,"object"==("undefined"==typeof module?"undefined":t(module))&&"object"==t(module.exports)?module.exports=K:"function"==typeof e&&e.amd&&e("picturefill",function(){return K}),p.supPicture||(y["image/webp"]=function(e,t){var n=new r.Image;return n.onerror=function(){y[e]=!1,K()},n.onload=function(){y[e]=1===n.width,K()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
},{}]},{},["awuu"], null)
//# sourceMappingURL=picture.polyfill.f4a9fb77.js.map
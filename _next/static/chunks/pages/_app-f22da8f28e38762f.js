(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8357:function(e,t,n){"use strict";n.d(t,{Z:function(){return oe}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function c(e){return e.trim()}function s(e,t,n){return e.replace(t,n)}function u(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function l(e,t,n){return e.slice(t,n)}function d(e){return e.length}function p(e){return e.length}function h(e,t){return t.push(e),e}var m=1,g=1,y=0,b=0,v=0,x="";function k(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:m,column:g,length:i,return:""}}function $(e,t){return i(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function w(){return v=b>0?f(x,--b):0,g--,10===v&&(g=1,m--),v}function O(){return v=b<y?f(x,b++):0,g++,10===v&&(g=1,m++),v}function S(){return f(x,b)}function A(){return b}function Z(e,t){return l(x,e,t)}function j(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C(e){return m=g=1,y=d(x=e),b=0,[]}function M(e){return x="",e}function _(e){return c(Z(b-1,T(91===e?e+2:40===e?e+1:e)))}function P(e){for(;(v=S())&&v<33;)O();return j(e)>2||j(v)>3?"":" "}function E(e,t){for(;--t&&O()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return Z(e,A()+(t<6&&32==S()&&32==O()))}function T(e){for(;O();)switch(v){case e:return b;case 34:case 39:34!==e&&39!==e&&T(v);break;case 40:41===e&&T(e);break;case 92:O()}return b}function R(e,t){for(;O()&&e+v!==57&&(e+v!==84||47!==S()););return"/*"+Z(t,b-1)+"*"+a(47===e?e:O())}function I(e){for(;!j(S());)O();return Z(e,b)}var z="-ms-",B="-moz-",F="-webkit-",W="comm",N="rule",D="decl",L="@keyframes";function H(e,t){for(var n="",r=p(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function G(e,t,n,r){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case W:return"";case L:return e.return=e.value+"{"+H(e.children,r)+"}";case N:e.value=e.props.join(",")}return d(n=H(e.children,r))?e.return=e.value+"{"+n+"}":""}function X(e,t){switch(function(e,t){return(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3)}(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+B+e+z+e+e;case 6828:case 4268:return F+e+z+e+e;case 6165:return F+e+z+"flex-"+e+e;case 5187:return F+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return F+e+z+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return F+e+z+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+z+s(e,"shrink","negative")+e;case 5292:return F+e+z+s(e,"basis","preferred-size")+e;case 6060:return F+"box-"+s(e,"-grow","")+F+e+z+s(e,"grow","positive")+e;case 4554:return F+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+B+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?X(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+F)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===f(e,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return F+e+z+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+z+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+z+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+z+e+e}return e}function Y(e){return M(q("",null,null,null,[""],e=C(e),0,[0],e))}function q(e,t,n,r,o,i,c,f,l){for(var p=0,m=0,g=c,y=0,b=0,v=0,x=1,k=1,$=1,Z=0,j="",C=o,M=i,T=r,z=j;k;)switch(v=Z,Z=O()){case 40:if(108!=v&&58==z.charCodeAt(g-1)){-1!=u(z+=s(_(Z),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:z+=_(Z);break;case 9:case 10:case 13:case 32:z+=P(v);break;case 92:z+=E(A()-1,7);continue;case 47:switch(S()){case 42:case 47:h(U(R(O(),A()),t,n),l);break;default:z+="/"}break;case 123*x:f[p++]=d(z)*$;case 125*x:case 59:case 0:switch(Z){case 0:case 125:k=0;case 59+m:b>0&&d(z)-g&&h(b>32?J(z+";",r,n,g-1):J(s(z," ","")+";",r,n,g-2),l);break;case 59:z+=";";default:if(h(T=V(z,t,n,p,m,o,f,j,C=[],M=[],g),i),123===Z)if(0===m)q(z,t,T,T,C,i,g,f,M);else switch(y){case 100:case 109:case 115:q(e,T,T,r&&h(V(e,T,T,0,0,o,f,j,o,C=[],g),M),o,M,g,f,r?C:M);break;default:q(z,T,T,T,[""],M,0,f,M)}}p=m=b=0,x=$=1,j=z="",g=c;break;case 58:g=1+d(z),b=v;default:if(x<1)if(123==Z)--x;else if(125==Z&&0==x++&&125==w())continue;switch(z+=a(Z),Z*x){case 38:$=m>0?1:(z+="\f",-1);break;case 44:f[p++]=(d(z)-1)*$,$=1;break;case 64:45===S()&&(z+=_(O())),y=S(),m=g=d(j=z+=I(A())),Z++;break;case 45:45===v&&2==d(z)&&(x=0)}}return i}function V(e,t,n,r,a,i,u,f,d,h,m){for(var g=a-1,y=0===a?i:[""],b=p(y),v=0,x=0,$=0;v<r;++v)for(var w=0,O=l(e,g+1,g=o(x=u[v])),S=e;w<b;++w)(S=c(x>0?y[w]+" "+O:s(O,/&\f/g,y[w])))&&(d[$++]=S);return k(e,t,n,0===a?N:f,d,h,m)}function U(e,t,n){return k(e,t,n,W,a(v),l(e,2,-2),0)}function J(e,t,n,r){return k(e,t,n,D,l(e,0,r),l(e,r+1,-1),r)}var K=function(e,t,n){for(var r=0,o=0;r=o,o=S(),38===r&&12===o&&(t[n]=1),!j(o);)O();return Z(e,b)},Q=function(e,t){return M(function(e,t){var n=-1,r=44;do{switch(j(r)){case 0:38===r&&12===S()&&(t[n]=1),e[n]+=K(b-1,t,n);break;case 2:e[n]+=_(r);break;case 4:if(44===r){e[++n]=58===S()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=a(r)}}while(r=O());return e}(C(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(n))&&!r){ee.set(e,!0);for(var o=[],a=Q(t,o),i=n.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},ne=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=X(e.value,e.length);break;case L:return H([$(e,{value:s(e.value,"@","@"+F)})],r);case N:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return H([$(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return H([$(e,{props:[s(t,/:(plac\w+)/,":-webkit-input-$1")]}),$(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[s(t,/:(plac\w+)/,z+"input-$1")]})],r)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||re;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)c[t[n]]=!0;s.push(e)}));var u,f,l=[G,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],d=function(e){var t=p(e);return function(n,r,o,a){for(var i="",c=0;c<t;c++)i+=e[c](n,r,o,a)||"";return i}}([te,ne].concat(o,l));i=function(e,t,n,r){u=n,H(Y(e?e+"{"+t.styles+"}":t.styles),d),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new r({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return h.sheet.hydrate(s),h}},2456:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},4880:function(e,t,n){"use strict";var r;n.d(t,{T:function(){return s},w:function(){return c}});var o=n(7294),a=n(8357),i=(n(3772),(0,o.createContext)("undefined"!==typeof HTMLElement?(0,a.Z)({key:"css"}):null));i.Provider;var c=function(e){return(0,o.forwardRef)((function(t,n){var r=(0,o.useContext)(i);return e(t,r,n)}))},s=(0,o.createContext)({});(r||(r=n.t(o,2))).useInsertionEffect&&(r||(r=n.t(o,2))).useInsertionEffect},917:function(e,t,n){"use strict";var r;n.d(t,{F4:function(){return l},xB:function(){return u}});var o=n(7294),a=(n(8357),n(4880)),i=(n(8679),n(444)),c=n(3772),s=(r||(r=n.t(o,2))).useInsertionEffect?(r||(r=n.t(o,2))).useInsertionEffect:o.useLayoutEffect,u=(0,a.w)((function(e,t){var n=e.styles,r=(0,c.O)([n],void 0,(0,o.useContext)(a.T)),u=(0,o.useRef)();return s((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),n.hydrate([a])),u.current=[n,o],function(){n.flush()}}),[t]),s((function(){var e=u.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==r.next&&(0,i.My)(t,r.next,!0),n.tags.length){var o=n.tags[n.tags.length-1].nextElementSibling;n.before=o,n.flush()}t.insert("",r,n,!1)}}),[t,r.name]),null}));function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.O)(t)}var l=function(){var e=f.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},3772:function(e,t,n){"use strict";n.d(t,{O:function(){return m}});var r=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=n(2456),i=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!==typeof e},f=(0,a.Z)((function(e){return s(e)?e:e.replace(i,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(c,(function(e,t,n){return p={name:t,styles:n,next:p},t}))}return 1===o[e]||s(e)||"number"!==typeof t||0===t?t:t+"px"};function d(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return p={name:n.name,styles:n.styles,next:p},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)p={name:r.name,styles:r.styles,next:p},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=d(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":u(i)&&(r+=f(a)+":"+l(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=d(e,t,i);switch(a){case"animation":case"animationName":r+=f(a)+":"+c+";";break;default:r+=a+"{"+c+"}"}}else for(var s=0;s<i.length;s++)u(i[s])&&(r+=f(a)+":"+l(a,i[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=p,a=n(e);return p=o,d(e,t,a)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var p,h=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";p=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=d(n,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=d(n,t,e[c]),o&&(a+=i[c]);h.lastIndex=0;for(var s,u="";null!==(s=h.exec(a));)u+="-"+s[1];return{name:r(a)+u,styles:a,next:p}}},444:function(e,t,n){"use strict";n.d(t,{My:function(){return a},fp:function(){return r},hC:function(){return o}});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var o=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},a=function(e,t,n){o(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}}},1265:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(7462),o=n(3366),a=n(9766),i=n(6500);var c=n(1387),s=n(1796);var u={black:"#000",white:"#fff"};var f={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var l={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var d={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var p={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var h={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var m={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var g={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};const y=["mode","contrastThreshold","tonalOffset"],b={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:u.white,default:u.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},v={text:{primary:u.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:u.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function x(e,t,n,r){const o=r.light||r,a=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=(0,s.$n)(e.main,o):"dark"===t&&(e.dark=(0,s._j)(e.main,a)))}function k(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:i=.2}=e,k=(0,o.Z)(e,y),$=e.primary||function(e="light"){return"dark"===e?{main:h[200],light:h[50],dark:h[400]}:{main:h[700],light:h[400],dark:h[800]}}(t),w=e.secondary||function(e="light"){return"dark"===e?{main:l[200],light:l[50],dark:l[400]}:{main:l[500],light:l[300],dark:l[700]}}(t),O=e.error||function(e="light"){return"dark"===e?{main:d[500],light:d[300],dark:d[700]}:{main:d[700],light:d[400],dark:d[800]}}(t),S=e.info||function(e="light"){return"dark"===e?{main:m[400],light:m[300],dark:m[700]}:{main:m[700],light:m[500],dark:m[900]}}(t),A=e.success||function(e="light"){return"dark"===e?{main:g[400],light:g[300],dark:g[700]}:{main:g[800],light:g[500],dark:g[900]}}(t),Z=e.warning||function(e="light"){return"dark"===e?{main:p[400],light:p[300],dark:p[700]}:{main:"#ed6c02",light:p[500],dark:p[900]}}(t);function j(e){return(0,s.mi)(e,v.text.primary)>=n?v.text.primary:b.text.primary}const C=({color:e,name:t,mainShade:n=500,lightShade:o=300,darkShade:a=700})=>{if(!(e=(0,r.Z)({},e)).main&&e[n]&&(e.main=e[n]),!e.hasOwnProperty("main"))throw new Error((0,c.Z)(11,t?` (${t})`:"",n));if("string"!==typeof e.main)throw new Error((0,c.Z)(12,t?` (${t})`:"",JSON.stringify(e.main)));return x(e,"light",o,i),x(e,"dark",a,i),e.contrastText||(e.contrastText=j(e.main)),e},M={dark:v,light:b};return(0,a.Z)((0,r.Z)({common:(0,r.Z)({},u),mode:t,primary:C({color:$,name:"primary"}),secondary:C({color:w,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:C({color:O,name:"error"}),warning:C({color:Z,name:"warning"}),info:C({color:S,name:"info"}),success:C({color:A,name:"success"}),grey:f,contrastThreshold:n,getContrastText:j,augmentColor:C,tonalOffset:i},M[t]),k)}const $=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const w={textTransform:"uppercase"},O='"Roboto", "Helvetica", "Arial", sans-serif';function S(e,t){const n="function"===typeof t?t(e):t,{fontFamily:i=O,fontSize:c=14,fontWeightLight:s=300,fontWeightRegular:u=400,fontWeightMedium:f=500,fontWeightBold:l=700,htmlFontSize:d=16,allVariants:p,pxToRem:h}=n,m=(0,o.Z)(n,$);const g=c/14,y=h||(e=>e/d*g+"rem"),b=(e,t,n,o,a)=>{return(0,r.Z)({fontFamily:i,fontWeight:e,fontSize:y(t),lineHeight:n},i===O?{letterSpacing:(c=o/t,Math.round(1e5*c)/1e5)+"em"}:{},a,p);var c},v={h1:b(s,96,1.167,-1.5),h2:b(s,60,1.2,-.5),h3:b(u,48,1.167,0),h4:b(u,34,1.235,.25),h5:b(u,24,1.334,0),h6:b(f,20,1.6,.15),subtitle1:b(u,16,1.75,.15),subtitle2:b(f,14,1.57,.1),body1:b(u,16,1.5,.15),body2:b(u,14,1.43,.15),button:b(f,14,1.75,.4,w),caption:b(u,12,1.66,.4),overline:b(u,12,2.66,1,w)};return(0,a.Z)((0,r.Z)({htmlFontSize:d,pxToRem:y,fontFamily:i,fontSize:c,fontWeightLight:s,fontWeightRegular:u,fontWeightMedium:f,fontWeightBold:l},v),m,{clone:!1})}function A(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}var Z=["none",A(0,2,1,-1,0,1,1,0,0,1,3,0),A(0,3,1,-2,0,2,2,0,0,1,5,0),A(0,3,3,-2,0,3,4,0,0,1,8,0),A(0,2,4,-1,0,4,5,0,0,1,10,0),A(0,3,5,-1,0,5,8,0,0,1,14,0),A(0,3,5,-1,0,6,10,0,0,1,18,0),A(0,4,5,-2,0,7,10,1,0,2,16,1),A(0,5,5,-3,0,8,10,1,0,3,14,2),A(0,5,6,-3,0,9,12,1,0,3,16,2),A(0,6,6,-3,0,10,14,1,0,4,18,3),A(0,6,7,-4,0,11,15,1,0,4,20,3),A(0,7,8,-4,0,12,17,2,0,5,22,4),A(0,7,8,-4,0,13,19,2,0,5,24,4),A(0,7,9,-4,0,14,21,2,0,5,26,4),A(0,8,9,-5,0,15,22,2,0,6,28,5),A(0,8,10,-5,0,16,24,2,0,6,30,5),A(0,8,11,-5,0,17,26,2,0,6,32,5),A(0,9,11,-5,0,18,28,2,0,7,34,6),A(0,9,12,-6,0,19,29,2,0,7,36,6),A(0,10,13,-6,0,20,31,3,0,8,38,7),A(0,10,13,-6,0,21,33,3,0,8,40,7),A(0,10,14,-6,0,22,35,3,0,8,42,7),A(0,11,14,-7,0,23,36,3,0,9,44,8),A(0,11,15,-7,0,24,38,3,0,9,46,8)];const j=["duration","easing","delay"],C={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},M={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function _(e){return`${Math.round(e)}ms`}function P(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function E(e){const t=(0,r.Z)({},C,e.easing),n=(0,r.Z)({},M,e.duration);return(0,r.Z)({getAutoHeightDuration:P,create:(e=["all"],r={})=>{const{duration:a=n.standard,easing:i=t.easeInOut,delay:c=0}=r;(0,o.Z)(r,j);return(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"===typeof a?a:_(a)} ${i} ${"string"===typeof c?c:_(c)}`)).join(",")}},e,{easing:t,duration:n})}var T={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const R=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function I(e={},...t){const{mixins:n={},palette:c={},transitions:s={},typography:u={}}=e,f=(0,o.Z)(e,R),l=k(c),d=(0,i.Z)(e);let p=(0,a.Z)(d,{mixins:(h=d.breakpoints,m=n,(0,r.Z)({toolbar:{minHeight:56,[h.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[h.up("sm")]:{minHeight:64}}},m)),palette:l,shadows:Z.slice(),typography:S(l,u),transitions:E(s),zIndex:(0,r.Z)({},T)});var h,m;return p=(0,a.Z)(p,f),p=t.reduce(((e,t)=>(0,a.Z)(e,t)),p),p}var z=I},247:function(e,t,n){"use strict";const r=(0,n(1265).Z)();t.Z=r},4502:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7462);function o(e){const{theme:t,name:n,props:o}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?function(e,t){const n=(0,r.Z)({},t);return Object.keys(e).forEach((t=>{void 0===n[t]&&(n[t]=e[t])})),n}(t.components[n].defaultProps,o):o}var a=n(9718);var i=n(247);function c({props:e,name:t}){return function({props:e,name:t,defaultTheme:n}){return o({theme:(0,a.Z)(n),name:t,props:e})}({props:e,name:t,defaultTheme:i.Z})}},4819:function(e,t,n){"use strict";const r=n(7294).createContext(null);t.Z=r},6760:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(4819);function a(){return r.useContext(o.Z)}},5408:function(e,t,n){"use strict";n.d(t,{L7:function(){return c},VO:function(){return r},W8:function(){return i},k9:function(){return a}});const r={xs:0,sm:600,md:900,lg:1200,xl:1536},o={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${r[e]}px)`};function a(e,t,n){const a=e.theme||{};if(Array.isArray(t)){const e=a.breakpoints||o;return t.reduce(((r,o,a)=>(r[e.up(e.keys[a])]=n(t[a]),r)),{})}if("object"===typeof t){const e=a.breakpoints||o;return Object.keys(t).reduce(((o,a)=>{if(-1!==Object.keys(e.values||r).indexOf(a)){o[e.up(a)]=n(t[a],a)}else{const e=a;o[e]=t[e]}return o}),{})}return n(t)}function i(e={}){var t;return(null==e||null==(t=e.keys)?void 0:t.reduce(((t,n)=>(t[e.up(n)]={},t)),{}))||{}}function c(e,t){return e.reduce(((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e}),t)}},1796:function(e,t,n){"use strict";n.d(t,{$n:function(){return l},Fq:function(){return u},_j:function(){return f},mi:function(){return s}});var r=n(1387);function o(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function a(e){if(e.type)return e;if("#"===e.charAt(0))return a(function(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?`rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error((0,r.Z)(9,e));let o,i=e.substring(t+1,e.length-1);if("color"===n){if(i=i.split(" "),o=i.shift(),4===i.length&&"/"===i[3].charAt(0)&&(i[3]=i[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o))throw new Error((0,r.Z)(10,o))}else i=i.split(",");return i=i.map((e=>parseFloat(e))),{type:n,values:i,colorSpace:o}}function i(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),r=-1!==t.indexOf("color")?`${n} ${r.join(" ")}`:`${r.join(", ")}`,`${t}(${r})`}function c(e){let t="hsl"===(e=a(e)).type?a(function(e){e=a(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,c=r*Math.min(o,1-o),s=(e,t=(e+n/30)%12)=>o-c*Math.max(Math.min(t-3,9-t,1),-1);let u="rgb";const f=[Math.round(255*s(0)),Math.round(255*s(8)),Math.round(255*s(4))];return"hsla"===e.type&&(u+="a",f.push(t[3])),i({type:u,values:f})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function s(e,t){const n=c(e),r=c(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function u(e,t){return e=a(e),t=o(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${t}`:e.values[3]=t,i(e)}function f(e,t){if(e=a(e),t=o(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return i(e)}function l(e,t){if(e=a(e),t=o(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return i(e)}},6500:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7462),o=n(3366),a=n(9766);const i=["values","unit","step"];function c(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:a=5}=e,c=(0,o.Z)(e,i),s=(e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>(0,r.Z)({},e,{[t.key]:t.val})),{})})(t),u=Object.keys(s);function f(e){return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n})`}function l(e){return`@media (max-width:${("number"===typeof t[e]?t[e]:e)-a/100}${n})`}function d(e,r){const o=u.indexOf(r);return`@media (min-width:${"number"===typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==o&&"number"===typeof t[u[o]]?t[u[o]]:r)-a/100}${n})`}return(0,r.Z)({keys:u,values:s,up:f,down:l,between:d,only:function(e){return u.indexOf(e)+1<u.length?d(e,u[u.indexOf(e)+1]):f(e)},not:function(e){const t=u.indexOf(e);return 0===t?f(u[1]):t===u.length-1?l(u[t]):d(e,u[u.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},c)}var s={borderRadius:4},u=n(8700);const f=["breakpoints","palette","spacing","shape"];var l=function(e={},...t){const{breakpoints:n={},palette:i={},spacing:l,shape:d={}}=e,p=(0,o.Z)(e,f),h=c(n),m=function(e=8){if(e.mui)return e;const t=(0,u.hB)({spacing:e}),n=(...e)=>(0===e.length?[1]:e).map((e=>{const n=t(e);return"number"===typeof n?`${n}px`:n})).join(" ");return n.mui=!0,n}(l);let g=(0,a.Z)({breakpoints:h,direction:"ltr",components:{},palette:(0,r.Z)({mode:"light"},i),spacing:m,shape:(0,r.Z)({},s,d)},p);return g=t.reduce(((e,t)=>(0,a.Z)(e,t)),g),g}},7730:function(e,t,n){"use strict";var r=n(9766);t.Z=function(e,t){return t?(0,r.Z)(e,t,{clone:!1}):e}},8700:function(e,t,n){"use strict";n.d(t,{hB:function(){return h},eI:function(){return p},ZP:function(){return k},NA:function(){return m}});var r=n(5408),o=n(4844),a=n(7730);const i={m:"margin",p:"padding"},c={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},s={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},u=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!s[e])return[e];e=s[e]}const[t,n]=e.split(""),r=i[t],o=c[n]||"";return Array.isArray(o)?o.map((e=>r+e)):[r+o]})),f=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],l=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],d=[...f,...l];function p(e,t,n,r){var a;const i=null!=(a=(0,o.D)(e,t,!1))?a:n;return"number"===typeof i?e=>"string"===typeof e?e:i*e:Array.isArray(i)?e=>"string"===typeof e?e:i[e]:"function"===typeof i?i:()=>{}}function h(e){return p(e,"spacing",8)}function m(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:`-${n}`}function g(e,t,n,o){if(-1===t.indexOf(n))return null;const a=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=m(t,n),e)),{})}(u(n),o),i=e[n];return(0,r.k9)(e,i,a)}function y(e,t){const n=h(e.theme);return Object.keys(e).map((r=>g(e,t,r,n))).reduce(a.Z,{})}function b(e){return y(e,f)}function v(e){return y(e,l)}function x(e){return y(e,d)}b.propTypes={},b.filterProps=f,v.propTypes={},v.filterProps=l,x.propTypes={},x.filterProps=d;var k=x},4844:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var r=n(8320),o=n(5408);function a(e,t,n=!0){if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n=`vars.${t}`.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=n)return n}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function i(e,t,n,r=n){let o;return o="function"===typeof e?e(n):Array.isArray(e)?e[n]||r:a(e,n)||r,t&&(o=t(o)),o}t.Z=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:c,transform:s}=e,u=e=>{if(null==e[t])return null;const u=e[t],f=a(e.theme,c)||{};return(0,o.k9)(e,u,(e=>{let o=i(f,s,e);return e===o&&"string"===typeof e&&(o=i(f,s,`${t}${"default"===e?"":(0,r.Z)(e)}`,e)),!1===n?o:{[n]:o}}))};return u.propTypes={},u.filterProps=[t],u}},9718:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(6500),o=n(6760);var a=function(e=null){const t=(0,o.Z)();return t&&(n=t,0!==Object.keys(n).length)?t:e;var n};const i=(0,r.Z)();var c=function(e=i){return a(e)}},8320:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1387);function o(e){if("string"!==typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},9766:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7462);function o(e){return null!==e&&"object"===typeof e&&e.constructor===Object}function a(e,t,n={clone:!0}){const i=n.clone?(0,r.Z)({},e):e;return o(e)&&o(t)&&Object.keys(t).forEach((r=>{"__proto__"!==r&&(o(t[r])&&r in e&&o(e[r])?i[r]=a(e[r],t[r],n):i[r]=t[r])})),i}},1387:function(e,t,n){"use strict";function r(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}n.d(t,{Z:function(){return r}})},8679:function(e,t,n){"use strict";var r=n(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var o=p(n);o&&o!==h&&e(t,o,r)}var i=f(n);l&&(i=i.concat(l(n)));for(var c=s(t),m=s(n),g=0;g<i.length;++g){var y=i[g];if(!a[y]&&(!r||!r[y])&&(!m||!m[y])&&(!c||!c[y])){var b=d(n,y);try{u(t,y,b)}catch(v){}}}}return t}},6103:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case m:case s:return e;default:return t}}case o:return t}}}function $(e){return k(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=d,t.Fragment=a,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return $(e)||k(e)===f},t.isConcurrentMode=$,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===m},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===c},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===c||e===i||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===x||e.$$typeof===y)},t.typeOf=k},1296:function(e,t,n){"use strict";e.exports=n(6103)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7866)}])},7866:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(5893),o=(n(6774),n(9008)),a=n.n(o),i=n(7294),c=n(1265),s=n(7462),u=n(4819),f=n(6760);var l="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var d=function(e){const{children:t,theme:n}=e,o=(0,f.Z)(),a=i.useMemo((()=>{const e=null===o?n:function(e,t){if("function"===typeof t)return t(e);return(0,s.Z)({},e,t)}(o,n);return null!=e&&(e[l]=null!==o),e}),[n,o]);return(0,r.jsx)(u.Z.Provider,{value:a,children:t})},p=n(4880),h=n(9718);function m(e){const t=(0,h.Z)();return(0,r.jsx)(p.T.Provider,{value:"object"===typeof t?t:{},children:e.children})}var g=function(e){const{children:t,theme:n}=e;return(0,r.jsx)(d,{theme:n,children:(0,r.jsx)(m,{children:t})})},y=n(4502),b=n(917);function v(e){const{styles:t,defaultTheme:n={}}=e,o="function"===typeof t?e=>{return t(void 0===(r=e)||null===r||0===Object.keys(r).length?n:e);var r}:t;return(0,r.jsx)(b.xB,{styles:o})}var x=n(247);var k=function(e){return(0,r.jsx)(v,(0,s.Z)({},e,{defaultTheme:x.Z}))};const $=(e,t)=>(0,s.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode}),w=e=>(0,s.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}});var O=function(e){const t=(0,y.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:o=!1}=t;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(k,{styles:e=>((e,t=!1)=>{var n,r;let o={html:$(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,s.Z)({margin:0},w(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})};const a=null==(n=e.components)||null==(r=n.MuiCssBaseline)?void 0:r.styleOverrides;return a&&(o=[o,a]),o})(e,o)}),n]})},S=n(6110),A=n.n(S),Z=(0,c.Z)({palette:{mode:"dark",background:{default:"#232323"}}}),j=(0,c.Z)({palette:{mode:"light",background:{default:"#ffffff"}}}),C=function(e){var t=(0,i.useState)(!1),n=t[0];t[1];return(0,r.jsxs)(g,{theme:n?Z:j,children:[(0,r.jsx)(O,{}),e.children,(0,r.jsx)("div",{className:A().enableDarkMode,children:"\ud83c\udf19"})]})};function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}var P=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Ign1s Reiga - Portfolio"}),(0,r.jsx)("meta",{name:"description",content:"Ign1s-Reiga's portfolio"}),(0,r.jsx)("link",{rel:"icon",href:"/icon.png"})]}),(0,r.jsx)(C,{children:(0,r.jsx)(t,_({},n))})]})}},6110:function(e){e.exports={enableDarkMode:"ThemeButton_enableDarkMode__MY1Ag"}},6774:function(){},9008:function(e,t,n){e.exports=n(3121)},7462:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(880)}));var n=e.O();_N_E=n}]);
(()=>{(function(){function t(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];var u=s.length;if(!!n)for(u||n.removeChild(this);u--;){var f=s[u];typeof f!="object"?f=this.ownerDocument.createTextNode(f):f.parentNode&&f.parentNode.removeChild(f),u?n.insertBefore(this.previousSibling,f):n.replaceChild(f,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function $t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ht(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function gt(t,e,r){return e&&ht(t.prototype,e),r&&ht(t,r),t}function Ut(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?yt(Object(r),!0).forEach(function(n){Ut(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):yt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function bt(t,e){return Vt(t)||zt(t,e)||wt(t,e)||Jt()}function T(t){return Kt(t)||Zt(t)||wt(t)||Yt()}function Kt(t){if(Array.isArray(t))return ot(t)}function Vt(t){if(Array.isArray(t))return t}function Zt(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function zt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,s=void 0;try{for(var c=t[Symbol.iterator](),u;!(n=(u=c.next()).done)&&(r.push(u.value),!(e&&r.length===e));n=!0);}catch(f){i=!0,s=f}finally{try{!n&&c.return!=null&&c.return()}finally{if(i)throw s}}return r}}function wt(t,e){if(!!t){if(typeof t=="string")return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}}function ot(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Yt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var i=Object.getOwnPropertyDescriptor(Object(t),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,s||i)},{})}function z(t){return typeof t=="string"}function ct(t){return Array.isArray(t)}function Y(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=q(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=(z(r)||ct(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function lt(t){var e=z(t)||ct(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Q(t){return t!==null&&typeof t=="object"}function Qt(t){return Q(t)&&/^(1|3|11)$/.test(t.nodeType)}function te(t){return typeof t=="number"&&t>-1&&t%1===0}function ee(t){return Q(t)&&te(t.length)}function H(t){return ct(t)?t:t==null?[]:ee(t)?Array.prototype.slice.call(t):[t]}function mt(t){var e=t;return z(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),H(e).reduce(function(r,n){return[].concat(T(r),T(H(n).filter(Qt)))},[])}var re=Object.entries,J="_splittype",N={},ne=0;function P(t,e,r){if(!Q(t))return console.warn("[data.set] owner is not an object"),null;var n=t[J]||(t[J]=++ne),i=N[n]||(N[n]={});return r===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(N[n]=vt(vt({},i),e)):e!==void 0&&(i[e]=r),r}function M(t,e){var r=Q(t)?t[J]:null,n=r&&N[r]||{};return e===void 0?n:n[e]}function St(t){var e=t&&t[J];e&&(delete t[e],delete N[e])}function oe(){Object.keys(N).forEach(function(t){delete N[t]})}function ie(){re(N).forEach(function(t){var e=bt(t,2),r=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(N[r]=null,delete N[r])})}function se(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var ut="\\ud800-\\udfff",Tt="\\u0300-\\u036f\\ufe20-\\ufe23",Et="\\u20d0-\\u20f0",Ot="\\ufe0e\\ufe0f",ae="[".concat(ut,"]"),it="[".concat(Tt).concat(Et,"]"),st="\\ud83c[\\udffb-\\udfff]",ce="(?:".concat(it,"|").concat(st,")"),At="[^".concat(ut,"]"),Lt="(?:\\ud83c[\\udde6-\\uddff]){2}",Ct="[\\ud800-\\udbff][\\udc00-\\udfff]",_t="\\u200d",xt="".concat(ce,"?"),It="[".concat(Ot,"]?"),le="(?:"+_t+"(?:"+[At,Lt,Ct].join("|")+")"+It+xt+")*",ue=It+xt+le,fe="(?:".concat(["".concat(At).concat(it,"?"),it,Lt,Ct,ae].join("|"),`
)`),pe=RegExp("".concat(st,"(?=").concat(st,")|").concat(fe).concat(ue),"g"),de=[_t,ut,Tt,Et,Ot],he=RegExp("[".concat(de.join(""),"]"));function ge(t){return t.split("")}function Nt(t){return he.test(t)}function ye(t){return t.match(pe)||[]}function ve(t){return Nt(t)?ye(t):ge(t)}function me(t){return t==null?"":String(t)}function be(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=me(t),t&&z(t)&&!e&&Nt(t)?ve(t):t.split(e)}function at(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=z(i)?i.trim():i;s===null||s===""||(n==="children"?r.append.apply(r,T(H(s))):r.setAttribute(n,s))}),r}var ft={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function we(t,e){e=q(ft,e);var r=lt(e.types),n=e.tagName,i=t.nodeValue,s=document.createDocumentFragment(),c=[],u=[];return/^\s/.test(i)&&s.append(" "),c=se(i).reduce(function(f,w,_,E){var O,S;return r.chars&&(S=be(w).map(function(x){var I=at(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:x});return P(I,"isChar",!0),u=[].concat(T(u),[I]),I})),r.words||r.lines?(O=at(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?S:w}),P(O,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(O)):S.forEach(function(x){s.appendChild(x)}),_<E.length-1&&s.append(" "),r.words?f.concat(O):f},[]),/\s$/.test(i)&&s.append(" "),t.replaceWith(s),{words:c,chars:u}}function Pt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return we(t,e);var i=H(t.childNodes);if(i.length&&(P(t,"isSplit",!0),!M(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var s=t.nextSibling,c=t.previousSibling,u=t.textContent||"",f=s?s.textContent:" ",w=c?c.textContent:" ";P(t,{isWordEnd:/\s$/.test(u)||/^\s/.test(f),isWordStart:/^\s/.test(u)||/\s$/.test(w)})}return i.reduce(function(_,E){var O=Pt(E,e),S=O.words,x=O.chars;return{words:[].concat(T(_.words),T(S)),chars:[].concat(T(_.chars),T(x))}},n)}function Se(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,s=bt(n,2),c=s[0],u=s[1],f=0,w=0;if(i&&i!==document.body){var _=i.getBoundingClientRect();f=_.x+c,w=_.y+u}var E=t.getBoundingClientRect(),O=E.width,S=E.height,x=E.x,I=E.y,G=I+u-w,U=x+c-f;return{width:O,height:S,top:G,left:U}}function Wt(t){M(t).isWord?(St(t),t.replaceWith.apply(t,T(t.childNodes))):H(t.children).forEach(function(e){return Wt(e)})}var Te=function(){return document.createDocumentFragment()};function Ee(t,e,r){var n=lt(e.types),i=e.tagName,s=t.getElementsByTagName("*"),c=[],u=[],f=null,w,_,E,O=[],S=t.parentElement,x=t.nextElementSibling,I=Te(),G=window.getComputedStyle(t),U=G.textAlign,tt=parseFloat(G.fontSize),et=tt*.2;return e.absolute&&(E={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},_=t.offsetWidth,w=t.offsetHeight,P(t,{cssWidth:t.style.width,cssHeight:t.style.height})),H(s).forEach(function(v){var m=v.parentElement===t,b=Se(v,m,e,r),W=b.width,B=b.height,R=b.top,D=b.left;/^br$/i.test(v.nodeName)||(n.lines&&m&&((f===null||R-f>=et)&&(f=R,c.push(u=[])),u.push(v)),e.absolute&&P(v,{top:R,left:D,width:W,height:B}))}),S&&S.removeChild(t),n.lines&&(O=c.map(function(v){var m=at(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(U,"; width: 100%;")});P(m,"isLine",!0);var b={height:0,top:1e4};return I.appendChild(m),v.forEach(function(W,B,R){var D=M(W),j=D.isWordEnd,C=D.top,X=D.height,K=R[B+1];b.height=Math.max(b.height,X),b.top=Math.min(b.top,C),m.appendChild(W),j&&M(K).isWordStart&&m.append(" ")}),e.absolute&&P(m,{height:b.height,top:b.top}),m}),n.words||Wt(I),t.replaceChildren(I)),e.absolute&&(t.style.width="".concat(t.style.width||_,"px"),t.style.height="".concat(w,"px"),H(s).forEach(function(v){var m=M(v),b=m.isLine,W=m.top,B=m.left,R=m.width,D=m.height,j=M(v.parentElement),C=!b&&j.isLine;v.style.top="".concat(C?W-j.top:W,"px"),v.style.left=b?"".concat(E.left,"px"):"".concat(B-(C?E.left:0),"px"),v.style.height="".concat(D,"px"),v.style.width=b?"".concat(E.width,"px"):"".concat(R,"px"),v.style.position="absolute"})),S&&(x?S.insertBefore(t,x):S.appendChild(t)),O}var $=q(ft,{}),Rt=function(){gt(t,null,[{key:"clearData",value:function(){oe()}},{key:"setDefaults",value:function(r){return $=q($,Y(r)),ft}},{key:"revert",value:function(r){mt(r).forEach(function(n){var i=M(n),s=i.isSplit,c=i.html,u=i.cssWidth,f=i.cssHeight;s&&(n.innerHTML=c,n.style.width=u||"",n.style.height=f||"",St(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return N}},{key:"defaults",get:function(){return $},set:function(r){$=q($,Y(r))}}]);function t(e,r){$t(this,t),this.isSplit=!1,this.settings=q($,Y(r)),this.elements=mt(e),this.split()}return gt(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(c){P(c,"html",c.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=q(this.settings,Y(r)));var s=lt(this.settings.types);s.none||(this.elements.forEach(function(c){P(c,"isRoot",!0);var u=Pt(c,n.settings),f=u.words,w=u.chars;n.words=[].concat(T(n.words),T(f)),n.chars=[].concat(T(n.chars),T(w))}),this.elements.forEach(function(c){if(s.lines||n.settings.absolute){var u=Ee(c,n.settings,i);n.lines=[].concat(T(n.lines),T(u))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),ie())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var k=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},Dt=function(t){if(!!t)return typeSplit=new Rt(t,{types:"lines, words"}),typeSplit};document.addEventListener("DOMContentLoaded",function(){gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(Flip),console.log("dev");let t='[lightbox-el="component"]',e='[lightbox-el="trigger"]',r='[lightbox-el="close"]',n='[lightbox-el="next"]',i='[lightbox-el="previous"]',s='[lightbox-el="image"]',c='[lightbox-el="thumbnail"]',u='[lightbox-el="video-thumbnail"]',f='[lightbox-el="video"]',w='[lightbox-el="video-wrap"]',_='[lightbox-el="works-item"]',E='[lightbox-el="works-list"]',O='[pass-el="wrap"]',S='[pass-el="component"]',x='[pass-el="bg"]',I='[pass-el="card"]',G='[pass-el="input"]',U='[pass-el="button"]',tt='[pass-el="error"]',et='[gsap-scroll="heading"]',v='[gsap-scroll="el"]',m='[gsap-scroll="line"]',b='[gsap-scroll="container"]',W='[gsap-scroll="stagger"]',B='[text-link="component"]',R='[text-link="front"]',D='[text-link="back"]',j="no-scroll",C="hide",X=document.querySelector("body"),K=!1,rt,pt,jt=function(){let p=document.querySelector(O),o=document.querySelector(S),l=document.querySelector(G),g=document.querySelector(U),a=document.querySelector(tt),d=document.querySelector(x),A=document.querySelector(I),Z=!1;if(!o||!l||!g)return;let F=function(){if(rt===pt){localStorage.setItem(L,"true");let h=gsap.timeline({onComplete:()=>{o.classList.add(C),X.classList.remove(j),dt()}});h.fromTo(d,{height:"100%"},{duration:1,height:"0%",ease:"power2.out"}),h.fromTo(A,{opacity:1},{duration:.5,opacity:0,ease:"power2.out"},.2),h.fromTo(A,{scale:1},{duration:.7,scale:.75,ease:"power2.in"},0)}else a.classList.remove(C)},y=!1,L=window.location.pathname;if(localStorage.getItem(L)!==null&&(y=!0),!p.classList.contains("w-condition-invisible")&&y===!1){let h=gsap.timeline({onStart:()=>{o.classList.remove(C),Z=!0,window.scrollTo(0,0),X.classList.add(j)},onComplete:()=>{nt()}});h.fromTo(d,{opacity:"0%"},{duration:1,opacity:"100%",ease:"power2.out"}),h.fromTo(A,{opacity:0,scale:.75},{duration:.8,opacity:1,scale:1,ease:"power2.out"},.2)}else o.classList.add(C),dt();let nt=function(){l.focus(),pt=k("oovra",g.getAttribute("pass")),l.addEventListener("input",function(){rt=this.value,a.classList.add(C),l.addEventListener("change",function(){rt=this.value,a.classList.add(C)})}),window.addEventListener("keydown",h=>{h.key=="Tab"&&h.target===l&&(h.preventDefault(),g.focus({preventScroll:!0,focusVisible:!0})),h.key=="Tab"&&h.target===g&&(h.preventDefault(),l.focus({preventScroll:!0,focusVisible:!0})),h.key=="Enter"&&h.target===l&&(h.preventDefault(),F())}),g.addEventListener("click",function(){F()})}},kt=function(){let p=document.querySelectorAll(_);if(p.length===0)return;p.forEach(a=>{let d=a.querySelector(t);if(!d)return;let A=a.querySelector(e),Z=a.querySelector(w),F=a.querySelector(f),y=!1;Z.classList.contains("w-condition-invisible")||(y=Bt(F)),a.addEventListener("keydown",L=>{L.key==="Enter"&&L.target===A&&o(d,y),L.key==="Escape"&&K!==!1&&l(d,y)}),a.addEventListener("click",L=>{if(L.target.closest(e)!==null)o(d,y);else if(L.target.closest(r)!==null)l(d,y),y&&y.pause();else if(L.target.closest(n)!==null){let h=a.nextElementSibling.querySelector(t);l(d,y),y&&y.pause(),o(h)}else if(L.target.closest(i)!==null){let h=a.previousElementSibling.querySelector(t);l(d,y),y&&y.pause(),o(h)}})});let o=function(a,d){!a||(a.showModal(),g(a,d),X.classList.add(j),K=a)},l=function(a,d){!a||(d&&d.pause(),a.close(),X.classList.remove(j),K=!1)},g=function(a,d){let A=a.querySelectorAll(c),Z=a.querySelector(s),F=a.querySelector(u),y=a.querySelector(w);A.forEach(function(L){L.addEventListener("click",function(){y.classList.add(C),source=L.src,Z.src=source,d&&d.pause()})}),F.addEventListener("click",function(){y.classList.remove(C)})}},Bt=function(p){return new Plyr(p,{controls:["play-large","play","progress","current-time","mute","fullscreen"],resetOnEnd:!0})},V=function(p){let o={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%",duration:.6};return o.toggleActions=k(o.toggleActions,p.getAttribute("gsap-toggle-actions")),o.scrub=k(o.scrub,p.getAttribute("gsap-scrub")),o.start=k(o.start,p.getAttribute("gsap-scroll-start")),o.end=k(o.end,p.getAttribute("gsap-scroll-end")),o.duration=k(o.duration,p.getAttribute("gsap-duration")),gsap.timeline({defaults:{duration:o.duration,ease:"power1.out"},scrollTrigger:{trigger:p,start:o.start,end:o.end,toggleActions:o.toggleActions,scrub:o.scrub}})},qt=function(){gsap.utils.toArray(et).forEach(o=>{let l=Dt(o);if(!l)return;o.style.opacity=1,V(o).fromTo(l.words,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:.1,from:"start"}})})},Mt=function(){gsap.utils.toArray(v).forEach(o=>{if(!o)return;o.style.opacity=1,V(o).fromTo(o,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"})})},Ht=function(){gsap.utils.toArray(m).forEach(o=>{if(!o)return;o.style.opacity=1,V(o).fromTo(o,{width:"0%"},{width:"100%"})})},Gt=function(){gsap.utils.toArray(b).forEach(o=>{if(!o)return;let l=gsap.utils.toArray(o.children);l.length!==0&&l.forEach(g=>{V(g).fromTo(g,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"})})})},Xt=function(){gsap.utils.toArray(W).forEach(o=>{let l=gsap.utils.toArray(o.children),g=k(.1,o.getAttribute("gsap-scroll-stagger"));if(l.length===0)return;V(o).fromTo(l,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:g,from:"start"}})})},Ft=function(){gsap.utils.toArray(B).forEach(o=>{if(!o)return;let l=o.querySelector(R),g=o.querySelector(D);if(!l||!g)return;let a=gsap.timeline({paused:!0,defaults:{duration:.3,ease:"power1.out"}});a.fromTo(l,{y:"150%",rotateZ:15},{y:"0%",rotateZ:0}),a.fromTo(g,{y:"0%",rotateZ:0},{y:"-150%",rotateZ:-15},0),o.addEventListener("mouseover",function(){a.play()}),o.addEventListener("mouseleave",function(){a.reverse()})})},dt=function(){let p=document.querySelector(".header_component"),o=gsap.utils.toArray('[gsap-load="h1"]'),l=gsap.utils.toArray(".header_left p"),g=document.querySelector(".header_left .line-fill"),a=gsap.utils.toArray(".nav_layout .text-link_component"),d=document.querySelector(".nav_line .line-fill"),A=gsap.timeline({defaults:{duration:.6,ease:"power1.out"}});A.set(p,{opacity:1}),A.fromTo(o,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"}),A.fromTo(l,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:.1,from:"start"}},"<.2"),A.fromTo(g,{width:"0%"},{width:"100%"},"<.2"),A.fromTo(a,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:.2,from:"start"}},"<"),A.fromTo(d,{height:"0%"},{height:"100%"},"<")};jt(),kt(),function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},o=>{let{isMobile:l,isTablet:g,isDesktop:a,reduceMotion:d}=o.conditions;d||(qt(),Mt(),Gt(),Xt(),Ht(),Ft())})}()});})();

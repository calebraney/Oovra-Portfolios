(()=>{(function(){function t(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];var f=s.length;if(!!n)for(f||n.removeChild(this);f--;){var p=s[f];typeof p!="object"?p=this.ownerDocument.createTextNode(p):p.parentNode&&p.parentNode.removeChild(p),f?n.insertBefore(this.previousSibling,p):n.replaceChild(p,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function Kt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ht(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function yt(t,e,r){return e&&ht(t.prototype,e),r&&ht(t,r),t}function Vt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function gt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function mt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?gt(Object(r),!0).forEach(function(n){Vt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function bt(t,e){return Zt(t)||Jt(t,e)||St(t,e)||te()}function E(t){return Yt(t)||zt(t)||St(t)||Qt()}function Yt(t){if(Array.isArray(t))return ot(t)}function Zt(t){if(Array.isArray(t))return t}function zt(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Jt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,s=void 0;try{for(var u=t[Symbol.iterator](),f;!(n=(f=u.next()).done)&&(r.push(f.value),!(e&&r.length===e));n=!0);}catch(p){i=!0,s=p}finally{try{!n&&u.return!=null&&u.return()}finally{if(i)throw s}}return r}}function St(t,e){if(!!t){if(typeof t=="string")return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ot(t,e)}}function ot(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var i=Object.getOwnPropertyDescriptor(Object(t),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,s||i)},{})}function Z(t){return typeof t=="string"}function ct(t){return Array.isArray(t)}function z(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=M(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=(Z(r)||ct(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function lt(t){var e=Z(t)||ct(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Q(t){return t!==null&&typeof t=="object"}function ee(t){return Q(t)&&/^(1|3|11)$/.test(t.nodeType)}function re(t){return typeof t=="number"&&t>-1&&t%1===0}function ne(t){return Q(t)&&re(t.length)}function G(t){return ct(t)?t:t==null?[]:ne(t)?Array.prototype.slice.call(t):[t]}function vt(t){var e=t;return Z(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),G(e).reduce(function(r,n){return[].concat(E(r),E(G(n).filter(ee)))},[])}var oe=Object.entries,J="_splittype",N={},ie=0;function P(t,e,r){if(!Q(t))return console.warn("[data.set] owner is not an object"),null;var n=t[J]||(t[J]=++ie),i=N[n]||(N[n]={});return r===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(N[n]=mt(mt({},i),e)):e!==void 0&&(i[e]=r),r}function H(t,e){var r=Q(t)?t[J]:null,n=r&&N[r]||{};return e===void 0?n:n[e]}function wt(t){var e=t&&t[J];e&&(delete t[e],delete N[e])}function se(){Object.keys(N).forEach(function(t){delete N[t]})}function ae(){oe(N).forEach(function(t){var e=bt(t,2),r=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(N[r]=null,delete N[r])})}function ce(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var ut="\\ud800-\\udfff",Tt="\\u0300-\\u036f\\ufe20-\\ufe23",Et="\\u20d0-\\u20f0",Lt="\\ufe0e\\ufe0f",le="[".concat(ut,"]"),it="[".concat(Tt).concat(Et,"]"),st="\\ud83c[\\udffb-\\udfff]",ue="(?:".concat(it,"|").concat(st,")"),At="[^".concat(ut,"]"),Ot="(?:\\ud83c[\\udde6-\\uddff]){2}",Ct="[\\ud800-\\udbff][\\udc00-\\udfff]",_t="\\u200d",xt="".concat(ue,"?"),It="[".concat(Lt,"]?"),fe="(?:"+_t+"(?:"+[At,Ot,Ct].join("|")+")"+It+xt+")*",pe=It+xt+fe,de="(?:".concat(["".concat(At).concat(it,"?"),it,Ot,Ct,le].join("|"),`
)`),he=RegExp("".concat(st,"(?=").concat(st,")|").concat(de).concat(pe),"g"),ye=[_t,ut,Tt,Et,Lt],ge=RegExp("[".concat(ye.join(""),"]"));function me(t){return t.split("")}function Nt(t){return ge.test(t)}function ve(t){return t.match(he)||[]}function be(t){return Nt(t)?ve(t):me(t)}function Se(t){return t==null?"":String(t)}function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=Se(t),t&&Z(t)&&!e&&Nt(t)?be(t):t.split(e)}function at(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=Z(i)?i.trim():i;s===null||s===""||(n==="children"?r.append.apply(r,E(G(s))):r.setAttribute(n,s))}),r}var ft={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Te(t,e){e=M(ft,e);var r=lt(e.types),n=e.tagName,i=t.nodeValue,s=document.createDocumentFragment(),u=[],f=[];return/^\s/.test(i)&&s.append(" "),u=ce(i).reduce(function(p,w,_,L){var A,T;return r.chars&&(T=we(w).map(function(x){var I=at(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:x});return P(I,"isChar",!0),f=[].concat(E(f),[I]),I})),r.words||r.lines?(A=at(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?T:w}),P(A,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(A)):T.forEach(function(x){s.appendChild(x)}),_<L.length-1&&s.append(" "),r.words?p.concat(A):p},[]),/\s$/.test(i)&&s.append(" "),t.replaceWith(s),{words:u,chars:f}}function kt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return Te(t,e);var i=G(t.childNodes);if(i.length&&(P(t,"isSplit",!0),!H(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var s=t.nextSibling,u=t.previousSibling,f=t.textContent||"",p=s?s.textContent:" ",w=u?u.textContent:" ";P(t,{isWordEnd:/\s$/.test(f)||/^\s/.test(p),isWordStart:/^\s/.test(f)||/\s$/.test(w)})}return i.reduce(function(_,L){var A=kt(L,e),T=A.words,x=A.chars;return{words:[].concat(E(_.words),E(T)),chars:[].concat(E(_.chars),E(x))}},n)}function Ee(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,s=bt(n,2),u=s[0],f=s[1],p=0,w=0;if(i&&i!==document.body){var _=i.getBoundingClientRect();p=_.x+u,w=_.y+f}var L=t.getBoundingClientRect(),A=L.width,T=L.height,x=L.x,I=L.y,X=I+f-w,K=x+u-p;return{width:A,height:T,top:X,left:K}}function Pt(t){H(t).isWord?(wt(t),t.replaceWith.apply(t,E(t.childNodes))):G(t.children).forEach(function(e){return Pt(e)})}var Le=function(){return document.createDocumentFragment()};function Ae(t,e,r){var n=lt(e.types),i=e.tagName,s=t.getElementsByTagName("*"),u=[],f=[],p=null,w,_,L,A=[],T=t.parentElement,x=t.nextElementSibling,I=Le(),X=window.getComputedStyle(t),K=X.textAlign,tt=parseFloat(X.fontSize),et=tt*.2;return e.absolute&&(L={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},_=t.offsetWidth,w=t.offsetHeight,P(t,{cssWidth:t.style.width,cssHeight:t.style.height})),G(s).forEach(function(v){var b=v.parentElement===t,S=Ee(v,b,e,r),W=S.width,B=S.height,R=S.top,D=S.left;/^br$/i.test(v.nodeName)||(n.lines&&b&&((p===null||R-p>=et)&&(p=R,u.push(f=[])),f.push(v)),e.absolute&&P(v,{top:R,left:D,width:W,height:B}))}),T&&T.removeChild(t),n.lines&&(A=u.map(function(v){var b=at(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(K,"; width: 100%;")});P(b,"isLine",!0);var S={height:0,top:1e4};return I.appendChild(b),v.forEach(function(W,B,R){var D=H(W),j=D.isWordEnd,C=D.top,F=D.height,V=R[B+1];S.height=Math.max(S.height,F),S.top=Math.min(S.top,C),b.appendChild(W),j&&H(V).isWordStart&&b.append(" ")}),e.absolute&&P(b,{height:S.height,top:S.top}),b}),n.words||Pt(I),t.replaceChildren(I)),e.absolute&&(t.style.width="".concat(t.style.width||_,"px"),t.style.height="".concat(w,"px"),G(s).forEach(function(v){var b=H(v),S=b.isLine,W=b.top,B=b.left,R=b.width,D=b.height,j=H(v.parentElement),C=!S&&j.isLine;v.style.top="".concat(C?W-j.top:W,"px"),v.style.left=S?"".concat(L.left,"px"):"".concat(B-(C?L.left:0),"px"),v.style.height="".concat(D,"px"),v.style.width=S?"".concat(L.width,"px"):"".concat(R,"px"),v.style.position="absolute"})),T&&(x?T.insertBefore(t,x):T.appendChild(t)),A}var U=M(ft,{}),Wt=function(){yt(t,null,[{key:"clearData",value:function(){se()}},{key:"setDefaults",value:function(r){return U=M(U,z(r)),ft}},{key:"revert",value:function(r){vt(r).forEach(function(n){var i=H(n),s=i.isSplit,u=i.html,f=i.cssWidth,p=i.cssHeight;s&&(n.innerHTML=u,n.style.width=f||"",n.style.height=p||"",wt(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return N}},{key:"defaults",get:function(){return U},set:function(r){U=M(U,z(r))}}]);function t(e,r){Kt(this,t),this.isSplit=!1,this.settings=M(U,z(r)),this.elements=vt(e),this.split()}return yt(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(u){P(u,"html",u.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=M(this.settings,z(r)));var s=lt(this.settings.types);s.none||(this.elements.forEach(function(u){P(u,"isRoot",!0);var f=kt(u,n.settings),p=f.words,w=f.chars;n.words=[].concat(E(n.words),E(p)),n.chars=[].concat(E(n.chars),E(w))}),this.elements.forEach(function(u){if(s.lines||n.settings.absolute){var f=Ae(u,n.settings,i);n.lines=[].concat(E(n.lines),E(f))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),ae())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var q=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},Rt=function(t){if(!!t)return typeSplit=new Wt(t,{types:"lines, words"}),typeSplit};document.addEventListener("DOMContentLoaded",function(){gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(Flip);let t='[lightbox-el="component"]',e='[lightbox-el="trigger"]',r='[lightbox-el="close"]',n='[lightbox-el="next"]',i='[lightbox-el="previous"]',s='[lightbox-el="image"]',u='[lightbox-el="thumbnail"]',f='[lightbox-el="video-thumbnail"]',p='[lightbox-el="video"]',w='[lightbox-el="video-wrap"]',_='[lightbox-el="works-item"]',L='[lightbox-el="works-list"]',A='[pass-el="wrap"]',T='[pass-el="component"]',x='[pass-el="bg"]',I='[pass-el="card"]',X='[pass-el="input"]',K='[pass-el="button"]',tt='[pass-el="error"]',et='[gsap-scroll="heading"]',v='[gsap-scroll="el"]',b='[gsap-scroll="line"]',S='[gsap-scroll="container"]',W='[gsap-scroll="stagger"]',B='[text-link="component"]',R='[text-link="front"]',D='[text-link="back"]',j="no-scroll",C="hide",F=document.querySelector("body"),V=!1,rt,pt,Dt=function(){let d=document.querySelector(A),o=document.querySelector(T),c=document.querySelector(X),y=document.querySelector(K),a=document.querySelector(tt),l=document.querySelector(x),h=document.querySelector(I),k=!1;if(!o||!c||!y)return;let $=function(){if(rt===pt){localStorage.setItem(O,"true");let g=gsap.timeline({onComplete:()=>{o.classList.add(C),F.classList.remove(j),dt()}});g.fromTo(l,{height:"100%"},{duration:1,height:"0%",ease:"power2.out"}),g.fromTo(h,{opacity:1},{duration:.5,opacity:0,ease:"power2.out"},.2),g.fromTo(h,{scale:1},{duration:.7,scale:.75,ease:"power2.in"},0)}else a.classList.remove(C)},m=!1,O=window.location.pathname;if(localStorage.getItem(O)!==null&&(m=!0),!d.classList.contains("w-condition-invisible")&&m===!1){let g=gsap.timeline({onStart:()=>{o.classList.remove(C),k=!0,window.scrollTo(0,0),F.classList.add(j)},onComplete:()=>{nt()}});g.fromTo(l,{opacity:"0%"},{duration:1,opacity:"100%",ease:"power2.out"}),g.fromTo(h,{opacity:0,scale:.75},{duration:.8,opacity:1,scale:1,ease:"power2.out"},.2)}else o.classList.add(C),dt();let nt=function(){c.focus(),pt=q("oovra",y.getAttribute("pass")),c.addEventListener("input",function(){rt=this.value,a.classList.add(C),c.addEventListener("change",function(){rt=this.value,a.classList.add(C)})}),window.addEventListener("keydown",g=>{g.key=="Tab"&&g.target===c&&(g.preventDefault(),y.focus({preventScroll:!0,focusVisible:!0})),g.key=="Tab"&&g.target===y&&(g.preventDefault(),c.focus({preventScroll:!0,focusVisible:!0})),g.key=="Enter"&&g.target===c&&(g.preventDefault(),$())}),y.addEventListener("click",function(){$()})}},jt=function(){let d=document.querySelectorAll(_);if(d.length===0)return;d.forEach(a=>{let l=a.querySelector(t);if(!l)return;let h=a.querySelector(e),k=a.querySelector(w),$=a.querySelector(p),m=!1;k.classList.contains("w-condition-invisible")||(m=qt($)),a.addEventListener("keydown",O=>{O.key==="Enter"&&O.target===h&&o(l,m),O.key==="Escape"&&V!==!1&&c(l,m)}),a.addEventListener("click",O=>{if(O.target.closest(e)!==null)o(l,m);else if(O.target.closest(r)!==null)c(l,m),m&&m.pause();else if(O.target.closest(n)!==null){let g=a.nextElementSibling.querySelector(t);c(l,m),m&&m.pause(),o(g)}else if(O.target.closest(i)!==null){let g=a.previousElementSibling.querySelector(t);c(l,m),m&&m.pause(),o(g)}})});let o=function(a,l){!a||(a.showModal(),y(a,l),F.classList.add(j),V=a)},c=function(a,l){!a||(l&&l.pause(),a.close(),F.classList.remove(j),V=!1)},y=function(a,l){let h=a.querySelectorAll(u),k=a.querySelector(s),$=a.querySelector(f),m=a.querySelector(w);h.forEach(function(O){O.addEventListener("click",function(){m.classList.add(C),source=O.src,k.src=source,l&&l.pause()})}),$.addEventListener("click",function(){m.classList.remove(C)})}},qt=function(d){return new Plyr(d,{controls:["play-large","play","progress","current-time","mute","fullscreen"],resetOnEnd:!0})},Bt=function(){let d=gsap.utils.toArray(".form-field-wrapper"),o=".form-input",c=".form-label",y="is-dynamic",a="is-placeholder";d.length!==0&&d.forEach(function(l){let h=l.querySelector(o),k=l.querySelector(c);!h||!k||!k.classList.contains(y)||(h.addEventListener("focusin",function(){k.classList.remove(a)}),h.addEventListener("focusout",function(){h.value.length===0&&k.classList.add(a)}))})},Y=function(d){let o={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%",duration:.6};return o.toggleActions=q(o.toggleActions,d.getAttribute("gsap-toggle-actions")),o.scrub=q(o.scrub,d.getAttribute("gsap-scrub")),o.start=q(o.start,d.getAttribute("gsap-scroll-start")),o.end=q(o.end,d.getAttribute("gsap-scroll-end")),o.duration=q(o.duration,d.getAttribute("gsap-duration")),gsap.timeline({defaults:{duration:o.duration,ease:"power1.out"},scrollTrigger:{trigger:d,start:o.start,end:o.end,toggleActions:o.toggleActions,scrub:o.scrub}})},Mt=function(){gsap.utils.toArray(et).forEach(o=>{let c=Rt(o);if(!c)return;o.style.opacity=1,Y(o).fromTo(c.words,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:.1,from:"start"}})})},Ht=function(){gsap.utils.toArray(v).forEach(o=>{if(!o)return;o.style.opacity=1,Y(o).fromTo(o,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"})})},Gt=function(){gsap.utils.toArray(b).forEach(o=>{if(!o)return;o.style.opacity=1,Y(o).fromTo(o,{width:"0%"},{width:"100%"})})},Xt=function(){gsap.utils.toArray(S).forEach(o=>{if(!o)return;let c=gsap.utils.toArray(o.children);c.length!==0&&c.forEach(y=>{Y(y).fromTo(y,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"})})})},Ft=function(){gsap.utils.toArray(W).forEach(o=>{let c=gsap.utils.toArray(o.children),y=q(.1,o.getAttribute("gsap-scroll-stagger"));if(c.length===0)return;Y(o).fromTo(c,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:y,from:"start"}})})},$t=function(){gsap.utils.toArray(B).forEach(o=>{if(!o)return;let c=o.querySelector(R),y=o.querySelector(D);if(!c||!y)return;let a=gsap.timeline({paused:!0,defaults:{duration:.3,ease:"power1.out"}});a.fromTo(c,{y:"150%",rotateZ:15},{y:"0%",rotateZ:0}),a.fromTo(y,{y:"0%",rotateZ:0},{y:"-150%",rotateZ:-15},0),o.addEventListener("mouseover",function(){a.play()}),o.addEventListener("mouseleave",function(){a.reverse()})})},dt=function(){let d=document.querySelector(".header_component"),o=gsap.utils.toArray('[gsap-load="h1"]'),c=gsap.utils.toArray(".header_left p"),y=document.querySelector(".header_left .line-fill"),a=gsap.utils.toArray(".nav_layout .text-link_component"),l=document.querySelector(".nav_line .line-fill"),h=gsap.timeline({defaults:{duration:.6,ease:"power1.out"}});h.set(d,{opacity:1}),h.fromTo(o,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"}),h.fromTo(c,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:.1,from:"start"}},"<.2"),h.fromTo(y,{width:"0%"},{width:"100%"},"<.2"),h.fromTo(a,{opacity:0,y:"2rem"},{opacity:1,y:"0rem",stagger:{each:.2,from:"start"}},"<"),h.fromTo(l,{height:"0%"},{height:"100%"},"<")},Ut=function(d){let o=gsap.utils.toArray('[linktree-el="card"]'),c=gsap.utils.toArray('[linktree-el="bg"]'),y=document.querySelector('[linktree-el="hide"]'),a=!1;if(o.length===0||!y)return;let l=gsap.timeline({defaults:{duration:1,ease:"power1.inOut"}});if(d){let h=[];h.push(document.querySelector('[linktree-card="title"]')),h.push(document.querySelector('[linktree-card="form"]')),h.push(document.querySelector('[linktree-card="links"]')),h.push(document.querySelector('[linktree-card="promo"]')),h.includes(null)||h.length,l.fromTo(h,{opacity:0,y:"3rem"},{opacity:1,y:"0rem",stagger:{each:.2,from:"start"}})}else l.fromTo(o,{opacity:0,y:"3rem"},{opacity:1,y:"0rem",stagger:{each:.2,from:"start"}});l.fromTo(c,{scale:1},{scale:1.1},"<"),y.addEventListener("click",function(){a===!1?(l.timeScale(1.5),l.reverse(),a=!0):(l.timeScale(1.5),l.play(),a=!1)})};Dt(),jt(),Bt(),function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},o=>{let{isMobile:c,isTablet:y,isDesktop:a,reduceMotion:l}=o.conditions;Ut(c),l||(Mt(),Ht(),Xt(),Ft(),Gt(),$t())})}()});})();

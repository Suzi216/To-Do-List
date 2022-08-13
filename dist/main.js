(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body div {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 25%;\r\n  right: 25%;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  justify-content: flex-start;\r\n  flex-grow: 2;\r\n  grid-gap: 10%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.item i {\r\n  margin-top: 1%;\r\n  margin-left: auto;\r\n}\r\n\r\nli {\r\n  display: none;\r\n}\r\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),d=n.n(c),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.getElementById("lists"),v=document.querySelector(".input");let y=[];const h=()=>{null===localStorage.getItem("ls")?localStorage.setItem("ls",JSON.stringify(y)):y=JSON.parse(localStorage.getItem("ls")),y.map((e=>{const t=document.createElement("li");t.classList.add("item");const n=document.createElement("input");n.type="checkbox",n.className="checkbox";const r=document.createElement("input");r.type="text",r.value=e.description,r.className="border border-0 field";const o=document.createElement("i");o.className="fa fa-trash edit",o.setAttribute("id",e.index),t.appendChild(n),t.appendChild(r),t.appendChild(o),g.appendChild(t),r.addEventListener("keydown",(t=>{13===t.keyCode&&((e,t)=>{let n=[],r="";const o=localStorage.getItem("ls");n=JSON.parse(o);const a=n.filter((n=>(n.index===t&&(n.description=e),n)));localStorage.setItem("ls",JSON.stringify(a)),r="",g.innerHTML="",h()})(r.value,e.index)})),n.addEventListener("click",(t=>{let o=n.checked;console.log(o),((e,t,n)=>{let r=[];const o=localStorage.getItem("ls");if(r=JSON.parse(o),!0===e){n.style.textDecoration="line-through";const e=r.filter((e=>(e.index===t&&(e.complete=!0),e)));localStorage.setItem("ls",JSON.stringify(e))}else{n.style.textDecoration="none";const e=r.filter((e=>(e.index===t&&(e.complete=!1),e)));localStorage.setItem("ls",JSON.stringify(e))}})(o,e.index,r)}))}))};document.addEventListener("DOMContentLoaded",(()=>{v.addEventListener("keydown",(e=>{13===e.keyCode&&(()=>{let e=[];const{value:t}=v,n={description:t,complete:!1,index:JSON.parse(localStorage.getItem("ls")).length};if(null===localStorage.getItem("ls"))e.push(n),localStorage.setItem("ls",JSON.stringify(e));else{const t=localStorage.getItem("ls");e=JSON.parse(t),e.push(n),localStorage.setItem("ls",JSON.stringify(e))}g.innerHTML="",h()})()})),g.addEventListener("click",(e=>{if(e.target.matches("i")){const{id:t}=e.target,n=e.target.parentElement;g.removeChild(n),(e=>{let t=[];t=JSON.parse(localStorage.getItem("ls")),t.splice(e,1);const n=t.filter(((e,t)=>(e.index!==t&&(e.index=t),e)));localStorage.setItem("ls",JSON.stringify(n))})(t)}})),h()}))})()})();
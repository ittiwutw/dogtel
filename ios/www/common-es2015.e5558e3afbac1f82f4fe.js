(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return o}));var s=n("dSyh"),r=n("kBU6");const o=t=>new Promise((e,n)=>{Object(s.m)(()=>{i(t),a(t).then(n=>{n.animation&&n.animation.destroy(),c(t),e(n)},e=>{c(t),n(e)})})}),i=t=>{const e=t.enteringEl,n=t.leavingEl;C(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),v(e,!1),n&&v(n,!1)},a=async t=>{const e=await d(t);return e?u(e,t):p(t)},c=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},d=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await n.e(122).then(n.bind(null,"Lu00"))).iosTransitionAnimation:(await n.e(123).then(n.bind(null,"wxTh"))).mdTransitionAnimation},u=async(t,e)=>{let s;await l(e,!0);try{const r=await n.e(13).then(n.bind(null,"gHMO"));s=await r.create(t,e.baseEl,e)}catch(o){s=t(e.baseEl,e)}w(e.enteringEl,e.leavingEl);const r=await g(s,e);return e.progressCallback&&e.progressCallback(void 0),r&&f(e.enteringEl,e.leavingEl),{hasCompleted:r,animation:s}},p=async t=>{const e=t.enteringEl,n=t.leavingEl;return await l(t,!1),w(e,n),f(e,n),{hasCompleted:!0}},l=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[b(t.enteringEl),b(t.leavingEl)];await Promise.all(n),await h(t.viewIsReady,t.enteringEl)},h=async(t,e)=>{t&&await t(e)},g=(t,e)=>{const n=e.progressCallback,s=new Promise(e=>{t.onFinish(n=>{"number"==typeof n?e(1===n):void 0!==t.hasCompleted&&e(t.hasCompleted)})});return n?(t.progressStart(!0),n(t)):t.play(),s},w=(t,e)=>{m(e,r.c),m(t,r.a)},f=(t,e)=>{m(t,r.b),m(e,r.d)},m=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},b=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),y=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(y))}},v=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},C=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},E=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},Dl6n:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a}));const s=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},i=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!i.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n)}return!1}},YtD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let s=n.length-1;s>=0;s--){const t=n[s];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const i=o(t);for(let e=0;e<i.length;e++)r(i[e])}});const s=o(e);for(let t=0;t<s.length;t++)r(s[t]);const i=document.createElement("div");i.appendChild(e);const c=i.querySelector("div");return null!==c?c.innerHTML:i.innerHTML}catch(e){return console.error(e),""}},r=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),s=e.name;if(!i.includes(s.toLowerCase())){t.removeAttribute(s);continue}const r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&t.removeAttribute(s)}const e=o(t);for(let n=0;n<e.length;n++)r(e[n])},o=t=>null!=t.children?t.children:t.childNodes,i=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},m9yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}));const s=async(t,e,n,s,r)=>{if(t)return t.attachViewToDom(e,n,r,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return s&&s.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"nN+u":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));const s=(t,e,n)=>{const s=new MutationObserver(t=>{n(r(t,e))});return s.observe(t,{childList:!0,subtree:!0}),s},r=(t,e)=>{let n;return t.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)n=o(t.addedNodes[s],e)||n}),n},o=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find(t=>!0===t.checked)}},opz7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));const s=()=>{const t=window.TapticEngine;t&&t.selection()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},qaSm:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}));class s{constructor(t,e){this.x=t,this.y=e}}const r=(t,e,n,s,r)=>{const a=i(t.y,e.y,n.y,s.y,r);return o(t.x,e.x,n.x,s.x,a[0])},o=(t,e,n,s,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*n*r+3*n+s*r))-t*Math.pow(r-1,3),i=(t,e,n,s,r)=>a((s-=r)-3*(n-=r)+3*(e-=r)-(t-=r),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),a=(t,e,n,s)=>{if(0===t)return((t,e,n)=>{const s=e*e-4*t*n;return s<0?[]:[(-e+Math.sqrt(s))/(2*t),(-e-Math.sqrt(s))/(2*t)]})(e,n,s);const r=(3*(n/=t)-(e/=t)*e)/3,o=(2*e*e*e-9*e*n+27*(s/=t))/27;if(0===r)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-r),-Math.sqrt(-r)];const i=Math.pow(o/2,2)+Math.pow(r/3,3);if(0===i)return[Math.pow(o/2,.5)-e/3];if(i>0)return[Math.pow(-o/2+Math.sqrt(i),1/3)-Math.pow(o/2+Math.sqrt(i),1/3)-e/3];const a=Math.sqrt(Math.pow(-r/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-r/3,3)))),d=2*Math.pow(a,1/3);return[d*Math.cos(c/3)-e/3,d*Math.cos((c+2*Math.PI)/3)-e/3,d*Math.cos((c+4*Math.PI)/3)-e/3]}},tnAE:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var s=n("IheW"),r=n("8Y7J");let o=(()=>{class t{constructor(t){this.http=t,this.apiUrl="https://dogtelservice.yuzudigital.com/",console.log("Hello RestProvider Provider")}login(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"login",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}register(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"registerUser",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getHotelList(){return new Promise((t,e)=>{this.http.get(this.apiUrl+"getHotelList").subscribe(e=>{t(e)},t=>{e(t)})})}searchHotel(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"searchHotel",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}bookHotel(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"bookHotel",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getBookingHotelByUserId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getBookingByUserId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}updateBookingStatus(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"updateBookingStatus",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getHotelBookingByHotelOwnerId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getHotelBookingByHotelOwnerId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}saveHotel(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"saveHotel",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}saveDog(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"saveDog",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getDogByUserId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getDogByUserId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getHotelByUserId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getHotelByUserId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}saveRoom(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"saveRoom",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getRoomByhotelId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getRoomByhotelId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}saveReview(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"saveReview",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getReviewByhotelId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getReviewByhotelId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}saveAsking(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"saveAsking",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getAskingByHotelId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getAskingByHotelId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}saveAnswer(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"saveAnswer",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getAnswerByUserId(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getAnswerByUserId",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getNotification(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getNotification",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}getDogMaster(){return new Promise((t,e)=>{const n=new s.g;n.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"getDogMaster",{},{headers:n}).subscribe(e=>{t(e)},t=>{e(t)})})}deleteDog(t){return new Promise((e,n)=>{const r=new s.g;r.append("Content-type","json/data; charset=utf-8"),this.http.post(this.apiUrl+"deleteDog",t,{headers:r}).subscribe(t=>{e(t)},t=>{n(t)})})}}return t.ngInjectableDef=r.Yb({factory:function(){return new t(r.Zb(s.c))},token:t,providedIn:"root"}),t})()}}]);
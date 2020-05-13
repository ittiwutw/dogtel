function asyncGeneratorStep(e,t,i,n,r,s,a){try{var o=e[s](a),l=o.value}catch(h){return void i(h)}o.done?t(l):Promise.resolve(l).then(n,r)}function _asyncToGenerator(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var s=e.apply(t,i);function a(e){asyncGeneratorStep(s,n,r,a,o,"next",e)}function o(e){asyncGeneratorStep(s,n,r,a,o,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"8Mb5":function(e,t,i){"use strict";i.r(t),i.d(t,"ion_virtual_scroll",(function(){return o}));var n=i("dSyh");i("AfW+");var r=function(e,t){var i=s(e,t);return i&&e.ownerDocument?e.ownerDocument.importNode(i.content,!0).children[0]:null},s=function(e,t){switch(t){case"item":return e.querySelector("template:not([name])");case"header":return e.querySelector("template[name=header]");case"footer":return e.querySelector("template[name=footer]")}},a=function(e,t,i,n,r,s,a,o,l,h,c,u){for(var d=[],f=u+c,v=c;v<f;v++){var p=e[v];if(r){var g=r(p,v,e);null!=g&&d.push({i:h++,type:"header",value:g,index:v,height:i?i(g,v):a,reads:i?0:2,visible:!!i})}if(d.push({i:h++,type:"item",value:p,index:v,height:t?t(p,v):l,reads:t?0:2,visible:!!t}),s){var m=s(p,v,e);null!=m&&d.push({i:h++,type:"footer",value:m,index:v,height:n?n(m,v):o,reads:n?0:2,visible:!!n})}}return d},o=function(){function e(t){var i=this;_classCallCheck(this,e),Object(n.l)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){i.updateVirtualScroll()}}var t,i,s;return _createClass(e,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.el.closest("ion-content"))){e.next=10;break}return e.next=4,t.getScrollElement();case 4:this.scrollEl=e.sent,this.contentEl=t,this.calcCells(),this.updateState(),e.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(e){return Promise.resolve(function(e,t,i){var n=t.find((function(t){return"item"===t.type&&t.index===e}));return n?i[n.i]:-1}(e,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var i,n,r,s,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=o.length>1&&void 0!==o[1]?o[1]:-1,this.items){e.next=3;break}return e.abrupt("return");case 3:n=-1===i?this.items.length-t:i,r=function(e,t){return 0===t?0:t===(e.length>0?e[e.length-1].index:0)+1?e.length:e.findIndex((function(e){return e.index===t}))}(this.cells,t),s=a(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,n),this.cells=function(e,t,i){if(0===i&&t.length>=e.length)return t;for(var n=0;n<t.length;n++)e[n+i]=t[n];return e}(this.cells,s,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"checkEnd",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(n.g)(this.readVS.bind(this)),Object(n.m)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var e=this.contentEl,t=this.scrollEl,i=0,n=this.el;n&&n!==e;)i+=n.offsetTop,n=n.parentElement;this.viewportOffset=i,t&&(this.viewportHeight=t.offsetHeight,this.currentScrollTop=t.scrollTop)}},{key:"writeVS",value:function(){var e,t,i=this.indexDirty,n=(e=this.currentScrollTop-this.viewportOffset,t=this.viewportHeight,{top:Math.max(e-100,0),bottom:e+t+100}),s=this.getHeightIndex(),a=function(e,t,i){for(var n=t.top,r=t.bottom,s=0;s<e.length&&!(e[s]>n);s++);for(var a=Math.max(s-2-1,0);s<e.length&&!(e[s]>=r);s++);return{offset:a,length:Math.min(s+2,e.length)-a}}(s,n);(function(e,t,i){return e<=i.offset+i.length||t.offset!==i.offset||t.length!==i.length})(i,this.range,a)&&(this.range=a,function(e,t,i,n){var r=!0,s=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var h=o.value;h.change=0,h.d=!0}}catch(y){s=!0,a=y}finally{try{r||null==l.return||l.return()}finally{if(s)throw a}}for(var c=[],u=n.offset+n.length,d=function(n){var r=i[n],s=e.find((function(e){return e.d&&e.cell===r}));if(s){var a=t[n];a!==s.top&&(s.top=a,s.change=1),s.d=!1}else c.push(r)},f=n.offset;f<u;f++)d(f);for(var v=e.filter((function(e){return e.d})),p=function(){var i=m[g],n=v.find((function(e){return e.d&&e.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=t[r]):e.push({d:!1,cell:i,visible:!0,change:2,top:t[r]})},g=0,m=c;g<m.length;g++)p();e.filter((function(e){return e.d&&-9999!==e.top})).forEach((function(e){e.change=1,e.top=-9999}))}(this.virtualDom,s,this.cells,a),this.nodeRender?function(e,t,i,n){for(var s,a=Array.from(e.children).filter((function(e){return"TEMPLATE"!==e.tagName})),o=a.length,l=0;l<i.length;l++){var h=i[l],c=h.cell;if(2===h.change){if(l<o)t(s=a[l],c,l);else{var u=r(e,c.type);(s=t(u,c,l)||u).classList.add("virtual-item"),e.appendChild(s)}s.$ionCell=c}else s=a[l];0!==h.change&&(s.style.transform="translate3d(0,".concat(h.top,"px,0)"));var d=c.visible;h.visible!==d&&(d?s.classList.remove("virtual-loading"):s.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(n(c,s),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())}},{key:"updateCellHeight",value:function(e,t){var i=this,n=function(){if(t.$ionCell===e){var n=window.getComputedStyle(t),r=t.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(e,r)}};t&&t.componentOnReady?t.componentOnReady().then(n):n()}},{key:"setCellHeight",value:function(e,t){var i=e.i;e===this.cells[i]&&(e.height===t&&!0===e.visible||(e.visible=!0,e.height=t,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var e=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return e.updateVirtualScroll()}),100)}},{key:"updateState",value:function(){var e=!(!this.scrollEl||!this.cells);e!==this.isEnabled&&(this.enableScrollEvents(e),e&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=a(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(e,t){if(!e)return new Uint32Array(t);if(e.length===t)return e;if(t>e.length){var i=new Uint32Array(t);return i.set(e),i}return e.subarray(0,t)}(this.heightIndex,this.cells.length),this.totalHeight=function(e,t,i){for(var n=e[i],r=i;r<e.length;r++)e[r]=n,n+=t[r].height;return n}(this.heightIndex,this.cells,e),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(e){var t=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=e,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",t.onScroll)})}},{key:"renderVirtualNode",value:function(e){var t=e.cell,i=t.type,n=t.value,r=t.index;switch(i){case"item":return this.renderItem(n,r);case"header":return this.renderHeader(n,r);case"footer":return this.renderFooter(n,r)}}},{key:"render",value:function(){var e=this;return Object(n.i)(n.a,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&Object(n.i)(l,{dom:this.virtualDom},this.virtualDom.map((function(t){return e.renderVirtualNode(t)}))))}},{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},{key:"style",get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]),e}(),l=function(e,t,i){var n=e.dom;return i.map(t,(function(e,t){var i=n[t],r=e.vattrs||{},s=r.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},r),{class:s,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,".concat(i.top,"px,0)")})})})}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{mmXo:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),b=u("oBZk"),a=u("ZZ/e"),o=u("s7LF"),s=u("tnAE");class r{constructor(l,n,u,t){this.activatedRoute=l,this.router=n,this.restApi=u,this.storage=t,this.asking={userId:0,hotelId:0,title:"",detail:""},this.hotelName="",this.activatedRoute.params.subscribe(l=>{this.hotel=JSON.parse(l.hotel),this.hotelName=this.hotel.name,console.log(this.hotel)})}ngOnInit(){}onClickSave(){this.validate()&&this.storage.get("user").then(l=>{this.asking.userId=l[0].id,this.asking.hotelId=this.hotel.id,this.restApi.saveAsking(this.asking).then(l=>{console.log(l),alert("\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e01\u0e32\u0e23\u0e15\u0e2d\u0e1a\u0e01\u0e25\u0e31\u0e1a"),this.router.navigateByUrl("/tabs/tab2")})})}validate(){let l=!1;return""===this.asking.title||""===this.asking.detail?alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19"):l=!0,l}}var d=u("iInd"),g=u("xgBC"),c=t.zb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,11,"ion-header",[],null,null,null,b.cb,b.p)),t.Ab(1,49152,null,0,a.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.zb,b.M)),t.Ab(3,49152,null,0,a.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.R,b.e)),t.Ab(5,49152,null,0,a.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/tabs/tab1"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Mb(l,8).onClick(u)&&e),e}),b.P,b.c)),t.Ab(7,49152,null,0,a.i,[t.j,t.p,t.F],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),t.Ab(8,16384,null,0,a.j,[[2,a.kb],a.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Bb(9,0,null,0,2,"ion-title",[],null,null,null,b.yb,b.L)),t.Ab(10,49152,null,0,a.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21"])),(l()(),t.Bb(12,0,null,null,40,"ion-content",[],null,null,null,b.Y,b.l)),t.Ab(13,49152,null,0,a.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(14,0,null,0,38,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.Bb(15,0,null,null,37,"ion-list",[],null,null,null,b.ib,b.u)),t.Ab(16,49152,null,0,a.Q,[t.j,t.p,t.F],null,null),(l()(),t.Bb(17,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),t.Ab(18,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(19,0,null,0,2,"ion-label",[],null,null,null,b.gb,b.t)),t.Ab(20,49152,null,0,a.P,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["\u0e16\u0e36\u0e07"])),(l()(),t.Bb(22,0,null,0,6,"ion-input",[["disabled","ture"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,23)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,23)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.hotelName=u)&&e),e}),b.eb,b.r)),t.Ab(23,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,o.c,(function(l){return[l]}),[a.Qb]),t.Ab(25,671744,null,0,o.h,[[8,null],[8,null],[8,null],[6,o.c]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,o.d,null,[o.h]),t.Ab(27,16384,null,0,o.e,[[4,o.d]],null,null),t.Ab(28,49152,null,0,a.I,[t.j,t.p,t.F],{disabled:[0,"disabled"]},null),(l()(),t.Bb(29,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),t.Ab(30,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(31,0,null,0,2,"ion-label",[],null,null,null,b.gb,b.t)),t.Ab(32,49152,null,0,a.P,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07"])),(l()(),t.Bb(34,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,35)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,35)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.asking.title=u)&&e),e}),b.eb,b.r)),t.Ab(35,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,o.c,(function(l){return[l]}),[a.Qb]),t.Ab(37,671744,null,0,o.h,[[8,null],[8,null],[8,null],[6,o.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,o.d,null,[o.h]),t.Ab(39,16384,null,0,o.e,[[4,o.d]],null,null),t.Ab(40,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Bb(41,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),t.Ab(42,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(43,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.gb,b.t)),t.Ab(44,49152,null,0,a.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"])),(l()(),t.Bb(46,0,null,0,6,"ion-textarea",[["placeholder","\u0e40\u0e02\u0e35\u0e22\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,47)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,47)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.asking.detail=u)&&e),e}),b.wb,b.J)),t.Ab(47,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,o.c,(function(l){return[l]}),[a.Qb]),t.Ab(49,671744,null,0,o.h,[[8,null],[8,null],[8,null],[6,o.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,o.d,null,[o.h]),t.Ab(51,16384,null,0,o.e,[[4,o.d]],null,null),t.Ab(52,49152,null,0,a.Ab,[t.j,t.p,t.F],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null),(l()(),t.Bb(53,0,null,null,4,"ion-footer",[],null,null,null,b.ab,b.n)),t.Ab(54,49152,null,0,a.B,[t.j,t.p,t.F],null,null),(l()(),t.Bb(55,0,null,0,2,"div",[["class","ion-text-center ion-padding"],["style","background-color: #265f62;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickSave()&&t),t}),null,null)),(l()(),t.Bb(56,0,null,null,1,"span",[["style","color: #ffffff;"]],null,null,null,null,null)),(l()(),t.Tb(-1,null,["\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"]))],(function(l,n){var u=n.component;l(n,7,0,"dark","/tabs/tab1"),l(n,8,0,"/tabs/tab1"),l(n,25,0,"ture",u.hotelName),l(n,28,0,"ture"),l(n,37,0,u.asking.title),l(n,44,0,"stacked"),l(n,49,0,u.asking.detail),l(n,52,0,"\u0e40\u0e02\u0e35\u0e22\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21","5")}),(function(l,n){l(n,22,0,t.Mb(n,27).ngClassUntouched,t.Mb(n,27).ngClassTouched,t.Mb(n,27).ngClassPristine,t.Mb(n,27).ngClassDirty,t.Mb(n,27).ngClassValid,t.Mb(n,27).ngClassInvalid,t.Mb(n,27).ngClassPending),l(n,34,0,t.Mb(n,39).ngClassUntouched,t.Mb(n,39).ngClassTouched,t.Mb(n,39).ngClassPristine,t.Mb(n,39).ngClassDirty,t.Mb(n,39).ngClassValid,t.Mb(n,39).ngClassInvalid,t.Mb(n,39).ngClassPending),l(n,46,0,t.Mb(n,51).ngClassUntouched,t.Mb(n,51).ngClassTouched,t.Mb(n,51).ngClassPristine,t.Mb(n,51).ngClassDirty,t.Mb(n,51).ngClassValid,t.Mb(n,51).ngClassInvalid,t.Mb(n,51).ngClassPending)}))}function p(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"app-asking",[],null,null,null,h,c)),t.Ab(1,114688,null,0,r,[d.a,d.m,s.a,g.b],null,null)],(function(l,n){l(n,1,0)}),null)}var M=t.xb("app-asking",r,p,{},{},[]),C=u("SVse");class f{}u.d(n,"AskingPageModuleNgFactory",(function(){return v}));var v=t.yb(e,[],(function(l){return t.Jb([t.Kb(512,t.m,t.jb,[[8,[i.a,M]],[3,t.m],t.D]),t.Kb(4608,C.l,C.k,[t.z,[2,C.r]]),t.Kb(4608,o.j,o.j,[]),t.Kb(4608,a.b,a.b,[t.F,t.g]),t.Kb(4608,a.Ib,a.Ib,[a.b,t.m,t.w]),t.Kb(4608,a.Mb,a.Mb,[a.b,t.m,t.w]),t.Kb(1073742336,C.b,C.b,[]),t.Kb(1073742336,o.i,o.i,[]),t.Kb(1073742336,o.b,o.b,[]),t.Kb(1073742336,a.Gb,a.Gb,[]),t.Kb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Kb(1073742336,f,f,[]),t.Kb(1073742336,e,e,[]),t.Kb(1024,d.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
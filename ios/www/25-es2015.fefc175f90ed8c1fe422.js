(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{iZyg:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),b=u("oBZk"),a=u("ZZ/e"),s=u("s7LF"),o=u("SVse"),r=u("tnAE");class d{constructor(l,n,u,e){this.activatedRoute=l,this.router=n,this.restApi=u,this.storage=e,this.answer={userId:0,hotelId:0,askingId:0,title:"",detail:""},this.isHotel=!1,this.activatedRoute.params.subscribe(l=>{this.msg=JSON.parse(l.msg),console.log(this.msg)}),this.storage.get("role").then(l=>{2===l&&(this.isHotel=!0)})}ngOnInit(){}onClickSave(){this.validate()&&this.storage.get("user").then(l=>{this.answer.userId=this.msg.userId,this.answer.hotelId=this.msg.hotelId,this.answer.askingId=this.msg.askingId,this.restApi.saveAnswer(this.answer).then(l=>{console.log(l),alert("\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27"),this.router.navigateByUrl("/tabs/account")})})}validate(){let l=!1;return""===this.answer.title||""===this.answer.detail?alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19"):l=!0,l}}var g=u("iInd"),c=u("xgBC"),h=e.zb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-list-header",[],null,null,null,b.hb,b.v)),e.Ab(1,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["\u0e04\u0e33\u0e16\u0e32\u0e21"]))],null,null)}function M(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-list-header",[],null,null,null,b.hb,b.v)),e.Ab(1,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["\u0e04\u0e33\u0e15\u0e2d\u0e1a"]))],null,null)}function C(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,29,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,28,"ion-list",[],null,null,null,b.ib,b.u)),e.Ab(2,49152,null,0,a.Q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(3,0,null,0,2,"ion-list-header",[],null,null,null,b.hb,b.v)),e.Ab(4,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["\u0e15\u0e2d\u0e1a\u0e04\u0e33\u0e16\u0e32\u0e21"])),(l()(),e.Bb(6,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),e.Ab(7,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,2,"ion-label",[],null,null,null,b.gb,b.t)),e.Ab(9,49152,null,0,a.P,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07"])),(l()(),e.Bb(11,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,12)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,12)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.answer.title=u)&&t),t}),b.eb,b.r)),e.Ab(12,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(14,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(16,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(17,49152,null,0,a.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),e.Ab(19,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.gb,b.t)),e.Ab(21,49152,null,0,a.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"])),(l()(),e.Bb(23,0,null,0,6,"ion-textarea",[["placeholder","\u0e40\u0e02\u0e35\u0e22\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,24)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,24)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.answer.detail=u)&&t),t}),b.wb,b.J)),e.Ab(24,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(26,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(28,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(29,49152,null,0,a.Ab,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null)],(function(l,n){var u=n.component;l(n,14,0,u.answer.title),l(n,21,0,"stacked"),l(n,26,0,u.answer.detail),l(n,29,0,"\u0e40\u0e02\u0e35\u0e22\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21","5")}),(function(l,n){l(n,11,0,e.Mb(n,16).ngClassUntouched,e.Mb(n,16).ngClassTouched,e.Mb(n,16).ngClassPristine,e.Mb(n,16).ngClassDirty,e.Mb(n,16).ngClassValid,e.Mb(n,16).ngClassInvalid,e.Mb(n,16).ngClassPending),l(n,23,0,e.Mb(n,28).ngClassUntouched,e.Mb(n,28).ngClassTouched,e.Mb(n,28).ngClassPristine,e.Mb(n,28).ngClassDirty,e.Mb(n,28).ngClassValid,e.Mb(n,28).ngClassInvalid,e.Mb(n,28).ngClassPending)}))}function f(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,11,"ion-header",[],null,null,null,b.cb,b.p)),e.Ab(1,49152,null,0,a.D,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.zb,b.M)),e.Ab(3,49152,null,0,a.Eb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.R,b.e)),e.Ab(5,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/tabs/tab1"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Mb(l,8).onClick(u)&&t),t}),b.P,b.c)),e.Ab(7,49152,null,0,a.i,[e.j,e.p,e.F],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),e.Ab(8,16384,null,0,a.j,[[2,a.kb],a.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.Bb(9,0,null,0,2,"ion-title",[],null,null,null,b.yb,b.L)),e.Ab(10,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["\u0e15\u0e2d\u0e1a\u0e04\u0e33\u0e16\u0e32\u0e21"])),(l()(),e.Bb(12,0,null,null,34,"ion-content",[],null,null,null,b.Y,b.l)),e.Ab(13,49152,null,0,a.w,[e.j,e.p,e.F],null,null),(l()(),e.Bb(14,0,null,0,30,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.Bb(15,0,null,null,29,"ion-list",[],null,null,null,b.ib,b.u)),e.Ab(16,49152,null,0,a.Q,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,p)),e.Ab(18,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,M)),e.Ab(20,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(21,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),e.Ab(22,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(23,0,null,0,2,"ion-label",[],null,null,null,b.gb,b.t)),e.Ab(24,49152,null,0,a.P,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07"])),(l()(),e.Bb(26,0,null,0,6,"ion-input",[["disabled","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,27)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,27)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.msg.title=u)&&t),t}),b.eb,b.r)),e.Ab(27,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(29,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(31,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(32,49152,null,0,a.I,[e.j,e.p,e.F],{disabled:[0,"disabled"]},null),(l()(),e.Bb(33,0,null,0,11,"ion-item",[],null,null,null,b.fb,b.s)),e.Ab(34,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(35,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.gb,b.t)),e.Ab(36,49152,null,0,a.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"])),(l()(),e.Bb(38,0,null,0,6,"ion-textarea",[["disabled","true"],["placeholder","\u0e40\u0e02\u0e35\u0e22\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,39)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,39)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.msg.detail=u)&&t),t}),b.wb,b.J)),e.Ab(39,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(41,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(43,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(44,49152,null,0,a.Ab,[e.j,e.p,e.F],{disabled:[0,"disabled"],placeholder:[1,"placeholder"],rows:[2,"rows"]},null),(l()(),e.qb(16777216,null,0,1,null,C)),e.Ab(46,16384,null,0,o.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(47,0,null,null,4,"ion-footer",[],null,null,null,b.ab,b.n)),e.Ab(48,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Bb(49,0,null,0,2,"div",[["class","ion-text-center ion-padding"],["style","background-color: #265f62;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickSave()&&e),e}),null,null)),(l()(),e.Bb(50,0,null,null,1,"span",[["style","color: #ffffff;"]],null,null,null,null,null)),(l()(),e.Tb(-1,null,["\u0e15\u0e2d\u0e1a\u0e04\u0e33\u0e16\u0e32\u0e21"]))],(function(l,n){var u=n.component;l(n,7,0,"dark","/tabs/tab1"),l(n,8,0,"/tabs/tab1"),l(n,18,0,u.isHotel),l(n,20,0,!u.isHotel),l(n,29,0,"true",u.msg.title),l(n,32,0,"true"),l(n,36,0,"stacked"),l(n,41,0,"true",u.msg.detail),l(n,44,0,"true","\u0e40\u0e02\u0e35\u0e22\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21","5"),l(n,46,0,u.isHotel)}),(function(l,n){l(n,26,0,e.Mb(n,31).ngClassUntouched,e.Mb(n,31).ngClassTouched,e.Mb(n,31).ngClassPristine,e.Mb(n,31).ngClassDirty,e.Mb(n,31).ngClassValid,e.Mb(n,31).ngClassInvalid,e.Mb(n,31).ngClassPending),l(n,38,0,e.Mb(n,43).ngClassUntouched,e.Mb(n,43).ngClassTouched,e.Mb(n,43).ngClassPristine,e.Mb(n,43).ngClassDirty,e.Mb(n,43).ngClassValid,e.Mb(n,43).ngClassInvalid,e.Mb(n,43).ngClassPending)}))}function A(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-answer",[],null,null,null,f,h)),e.Ab(1,114688,null,0,d,[g.a,g.m,r.a,c.b],null,null)],(function(l,n){l(n,1,0)}),null)}var v=e.xb("app-answer",d,A,{},{},[]);class B{}u.d(n,"AnswerPageModuleNgFactory",(function(){return m}));var m=e.yb(t,[],(function(l){return e.Jb([e.Kb(512,e.m,e.jb,[[8,[i.a,v]],[3,e.m],e.D]),e.Kb(4608,o.l,o.k,[e.z,[2,o.r]]),e.Kb(4608,s.j,s.j,[]),e.Kb(4608,a.b,a.b,[e.F,e.g]),e.Kb(4608,a.Ib,a.Ib,[a.b,e.m,e.w]),e.Kb(4608,a.Mb,a.Mb,[a.b,e.m,e.w]),e.Kb(1073742336,o.b,o.b,[]),e.Kb(1073742336,s.i,s.i,[]),e.Kb(1073742336,s.b,s.b,[]),e.Kb(1073742336,a.Gb,a.Gb,[]),e.Kb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),e.Kb(1073742336,B,B,[]),e.Kb(1073742336,t,t,[]),e.Kb(1024,g.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);
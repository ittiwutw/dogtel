(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"32z0":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),i=u("oBZk"),b=u("ZZ/e"),r=u("s7LF"),a=u("SVse");class s{constructor(l){this.router=l,this.email="",this.step=1,this.password1="",this.password2=""}ngOnInit(){}onClickNext(){1===this.step?this.validateEmail(this.email)&&this.validatePassword()?this.step++:alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 Email \u0e43\u0e2b\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"):this.step++}onClickFinish(){alert("\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e23\u0e2b\u0e31\u0e2a\u0e43\u0e2b\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),this.router.navigate(["/login"])}validatePassword(){let l=!1;return this.password1!==this.password2?alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e30\u0e1a\u0e38 password \u0e43\u0e2b\u0e49\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19"):l=!0,l}validateEmail(l){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(l).toLowerCase())}}var c=u("iInd"),d=t.zb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,15,"div",[["class","ion-text-center ion-padding"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Tb(-1,null,["\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e30\u0e1a\u0e38 E-mail \u0e17\u0e35\u0e48\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e01\u0e31\u0e1a Dogtel"])),(l()(),t.Bb(3,0,null,null,8,"ion-item",[["style","--ion-background-color: #fff;"]],null,null,null,i.fb,i.s)),t.Ab(4,49152,null,0,b.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(5,0,null,0,6,"ion-input",[["placeholder","E-mail"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Mb(l,6)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Mb(l,6)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.email=u)&&o),o}),i.eb,i.r)),t.Ab(6,16384,null,0,b.Qb,[t.p],null,null),t.Qb(1024,null,r.c,(function(l){return[l]}),[b.Qb]),t.Ab(8,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,r.d,null,[r.h]),t.Ab(10,16384,null,0,r.e,[[4,r.d]],null,null),t.Ab(11,49152,null,0,b.I,[t.j,t.p,t.F],{placeholder:[0,"placeholder"]},null),(l()(),t.Bb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Bb(13,0,null,null,2,"ion-button",[["color","tertiary"],["default-button",""],["shape","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickNext()&&t),t}),i.Q,i.d)),t.Ab(14,49152,null,0,b.m,[t.j,t.p,t.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Tb(-1,0,["\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d"]))],(function(l,n){l(n,8,0,n.component.email),l(n,11,0,"E-mail"),l(n,14,0,"tertiary","block")}),(function(l,n){l(n,5,0,t.Mb(n,10).ngClassUntouched,t.Mb(n,10).ngClassTouched,t.Mb(n,10).ngClassPristine,t.Mb(n,10).ngClassDirty,t.Mb(n,10).ngClassValid,t.Mb(n,10).ngClassInvalid,t.Mb(n,10).ngClassPending)}))}function g(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,12,"div",[["class","ion-text-center ion-padding"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Tb(-1,null,["\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e23\u0e2b\u0e31\u0e2a\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e15\u0e31\u0e27\u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e43\u0e2b\u0e49\u0e17\u0e32\u0e07 E-mail"])),(l()(),t.Bb(3,0,null,null,5,"ion-item",[["style","--ion-background-color: #fff;"]],null,null,null,i.fb,i.s)),t.Ab(4,49152,null,0,b.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(5,0,null,0,3,"ion-input",[["placeholder","\u0e23\u0e2b\u0e31\u0e2a\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Mb(l,8)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Mb(l,8)._handleInputEvent(u.target)&&o),o}),i.eb,i.r)),t.Qb(5120,null,r.c,(function(l){return[l]}),[b.Qb]),t.Ab(7,49152,null,0,b.I,[t.j,t.p,t.F],{placeholder:[0,"placeholder"]},null),t.Ab(8,16384,null,0,b.Qb,[t.p],null,null),(l()(),t.Bb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Bb(10,0,null,null,2,"ion-button",[["color","tertiary"],["default-button",""],["shape","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickNext()&&t),t}),i.Q,i.d)),t.Ab(11,49152,null,0,b.m,[t.j,t.p,t.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Tb(-1,0,["\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"]))],(function(l,n){l(n,7,0,"\u0e23\u0e2b\u0e31\u0e2a\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"),l(n,11,0,"tertiary","block")}),null)}function f(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,33,"div",[["class","ion-text-center ion-padding"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Tb(-1,null,["\u0e15\u0e31\u0e49\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48"])),(l()(),t.Bb(3,0,null,null,8,"ion-item",[["style","--ion-background-color: #fff;"]],null,null,null,i.fb,i.s)),t.Ab(4,49152,null,0,b.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(5,0,null,0,6,"ion-input",[["disabled","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Mb(l,6)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Mb(l,6)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.email=u)&&o),o}),i.eb,i.r)),t.Ab(6,16384,null,0,b.Qb,[t.p],null,null),t.Qb(1024,null,r.c,(function(l){return[l]}),[b.Qb]),t.Ab(8,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.c]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,r.d,null,[r.h]),t.Ab(10,16384,null,0,r.e,[[4,r.d]],null,null),t.Ab(11,49152,null,0,b.I,[t.j,t.p,t.F],{disabled:[0,"disabled"]},null),(l()(),t.Bb(12,0,null,null,8,"ion-item",[["style","--ion-background-color: #fff;"]],null,null,null,i.fb,i.s)),t.Ab(13,49152,null,0,b.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(14,0,null,0,2,"ion-label",[["position","floating"],["type","text"]],null,null,null,i.gb,i.t)),t.Ab(15,49152,null,0,b.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48"])),(l()(),t.Bb(17,0,null,0,3,"ion-input",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Mb(l,20)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Mb(l,20)._handleInputEvent(u.target)&&o),o}),i.eb,i.r)),t.Qb(5120,null,r.c,(function(l){return[l]}),[b.Qb]),t.Ab(19,49152,null,0,b.I,[t.j,t.p,t.F],null,null),t.Ab(20,16384,null,0,b.Qb,[t.p],null,null),(l()(),t.Bb(21,0,null,null,8,"ion-item",[["style","--ion-background-color: #fff;"]],null,null,null,i.fb,i.s)),t.Ab(22,49152,null,0,b.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(23,0,null,0,2,"ion-label",[["position","floating"],["type","text"]],null,null,null,i.gb,i.t)),t.Ab(24,49152,null,0,b.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"])),(l()(),t.Bb(26,0,null,0,3,"ion-input",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Mb(l,29)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Mb(l,29)._handleInputEvent(u.target)&&o),o}),i.eb,i.r)),t.Qb(5120,null,r.c,(function(l){return[l]}),[b.Qb]),t.Ab(28,49152,null,0,b.I,[t.j,t.p,t.F],null,null),t.Ab(29,16384,null,0,b.Qb,[t.p],null,null),(l()(),t.Bb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Bb(31,0,null,null,2,"ion-button",[["color","tertiary"],["default-button",""],["shape","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickFinish()&&t),t}),i.Q,i.d)),t.Ab(32,49152,null,0,b.m,[t.j,t.p,t.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Tb(-1,0,["\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e43\u0e2b\u0e21\u0e48"]))],(function(l,n){l(n,8,0,"true",n.component.email),l(n,11,0,"true"),l(n,15,0,"floating"),l(n,24,0,"floating"),l(n,32,0,"tertiary","block")}),(function(l,n){l(n,5,0,t.Mb(n,10).ngClassUntouched,t.Mb(n,10).ngClassTouched,t.Mb(n,10).ngClassPristine,t.Mb(n,10).ngClassDirty,t.Mb(n,10).ngClassValid,t.Mb(n,10).ngClassInvalid,t.Mb(n,10).ngClassPending)}))}function h(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,11,"ion-header",[],null,null,null,i.cb,i.p)),t.Ab(1,49152,null,0,b.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.zb,i.M)),t.Ab(3,49152,null,0,b.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.R,i.e)),t.Ab(5,49152,null,0,b.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/login"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Mb(l,8).onClick(u)&&o),o}),i.P,i.c)),t.Ab(7,49152,null,0,b.i,[t.j,t.p,t.F],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),t.Ab(8,16384,null,0,b.j,[[2,b.kb],b.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Bb(9,0,null,0,2,"ion-title",[],null,null,null,i.yb,i.L)),t.Ab(10,49152,null,0,b.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["\u0e25\u0e37\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"])),(l()(),t.Bb(12,0,null,null,7,"ion-content",[],null,null,null,i.Y,i.l)),t.Ab(13,49152,null,0,b.w,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,p)),t.Ab(15,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,g)),t.Ab(17,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,f)),t.Ab(19,16384,null,0,a.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"dark","/login"),l(n,8,0,"/login"),l(n,15,0,1===u.step),l(n,17,0,2===u.step),l(n,19,0,3===u.step)}),null)}function B(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"app-forgot-password",[],null,null,null,h,d)),t.Ab(1,114688,null,0,s,[c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.xb("app-forgot-password",s,B,{},{},[]);class v{}u.d(n,"ForgotPasswordPageModuleNgFactory",(function(){return C}));var C=t.yb(o,[],(function(l){return t.Jb([t.Kb(512,t.m,t.jb,[[8,[e.a,m]],[3,t.m],t.D]),t.Kb(4608,a.l,a.k,[t.z,[2,a.r]]),t.Kb(4608,r.j,r.j,[]),t.Kb(4608,b.b,b.b,[t.F,t.g]),t.Kb(4608,b.Ib,b.Ib,[b.b,t.m,t.w]),t.Kb(4608,b.Mb,b.Mb,[b.b,t.m,t.w]),t.Kb(1073742336,a.b,a.b,[]),t.Kb(1073742336,r.i,r.i,[]),t.Kb(1073742336,r.b,r.b,[]),t.Kb(1073742336,b.Gb,b.Gb,[]),t.Kb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),t.Kb(1073742336,v,v,[]),t.Kb(1073742336,o,o,[]),t.Kb(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);
function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{qq66:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},i=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),s=u("s7LF"),r=u("tnAE"),b=function(){function l(n,u){_classCallCheck(this,l),this.restApi=n,this.router=u,this.passwordNotMatch=!1}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"register",value:function(){var l=this;this.validate()&&this.restApi.register({username:this.username,password:this.password,email:this.email}).then((function(n){var u;"0001"===(u=n).response_code?alert(u.response_description):(alert("\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),l.router.navigate(["/login"]))}))}},{key:"validate",value:function(){var l=!1;return this.username&&this.password&&this.email&&this.confirmPassword?null===this.password.match(this.confirmPassword)?(this.passwordNotMatch=!0,alert("Password Not Match")):this.validateEmail(this.email)?this.password.length<8||this.password.length>18?alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 password \u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 8 \u0e15\u0e31\u0e27 \u0e2b\u0e23\u0e37\u0e2d \u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 18 \u0e15\u0e31\u0e27"):l=!0:alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 E-mail \u0e43\u0e2b\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"):alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19"),console.log(l),l}},{key:"validateEmail",value:function(l){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(l).toLowerCase())}}]),l}(),g=u("iInd"),d=e.zb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,10,"ion-header",[],null,null,null,o.cb,o.p)),e.Ab(1,49152,null,0,a.D,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.zb,o.M)),e.Ab(3,49152,null,0,a.Eb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.R,o.e)),e.Ab(5,49152,null,0,a.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/login"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Mb(l,8).onClick(u)&&t),t}),o.P,o.c)),e.Ab(7,49152,null,0,a.i,[e.j,e.p,e.F],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),e.Ab(8,16384,null,0,a.j,[[2,a.kb],a.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.Bb(9,0,null,0,1,"ion-title",[],null,null,null,o.yb,o.L)),e.Ab(10,49152,null,0,a.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(11,0,null,null,63,"ion-content",[["style","--ion-background-color: #ecd59f;"]],null,null,null,o.Y,o.l)),e.Ab(12,49152,null,0,a.w,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,61,"ion-card",[["class","welcome-card"]],null,null,null,o.V,o.f)),e.Ab(14,49152,null,0,a.o,[e.j,e.p,e.F],null,null),(l()(),e.Bb(15,0,null,0,5,"ion-card-header",[],null,null,null,o.T,o.h)),e.Ab(16,49152,null,0,a.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(17,0,null,0,3,"ion-card-title",[["style","color: #695355;"],["text-center",""]],null,null,null,o.U,o.i)),e.Ab(18,49152,null,0,a.s,[e.j,e.p,e.F],null,null),e.Ab(19,16384,null,0,a.e,[e.p],null,null),(l()(),e.Tb(-1,0,["\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"])),(l()(),e.Bb(21,0,null,0,49,"ion-card-content",[],null,null,null,o.S,o.g)),e.Ab(22,49152,null,0,a.p,[e.j,e.p,e.F],null,null),(l()(),e.Bb(23,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),e.Ab(24,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(25,0,null,0,2,"ion-label",[["position","floating"],["type","text"]],null,null,null,o.gb,o.t)),e.Ab(26,49152,null,0,a.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["USERNAME"])),(l()(),e.Bb(28,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,29)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,29)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.username=u)&&t),t}),o.eb,o.r)),e.Ab(29,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(31,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(33,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(34,49152,null,0,a.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(35,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),e.Ab(36,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.gb,o.t)),e.Ab(38,49152,null,0,a.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["PASSWORD"])),(l()(),e.Bb(40,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,41)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,41)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.password=u)&&t),t}),o.eb,o.r)),e.Ab(41,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(43,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(45,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(46,49152,null,0,a.I,[e.j,e.p,e.F],{type:[0,"type"]},null),(l()(),e.Bb(47,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),e.Ab(48,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(49,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.gb,o.t)),e.Ab(50,49152,null,0,a.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Confirm Password"])),(l()(),e.Bb(52,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,53)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,53)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.confirmPassword=u)&&t),t}),o.eb,o.r)),e.Ab(53,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(55,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(57,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(58,49152,null,0,a.I,[e.j,e.p,e.F],{type:[0,"type"]},null),(l()(),e.Bb(59,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),e.Ab(60,49152,null,0,a.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(61,0,null,0,2,"ion-label",[["position","floating"],["type","text"]],null,null,null,o.gb,o.t)),e.Ab(62,49152,null,0,a.P,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["E-MAIL"])),(l()(),e.Bb(64,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Mb(l,65)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Mb(l,65)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.email=u)&&t),t}),o.eb,o.r)),e.Ab(65,16384,null,0,a.Qb,[e.p],null,null),e.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),e.Ab(67,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Qb(2048,null,s.d,null,[s.h]),e.Ab(69,16384,null,0,s.e,[[4,s.d]],null,null),e.Ab(70,49152,null,0,a.I,[e.j,e.p,e.F],null,null),(l()(),e.Bb(71,0,null,0,0,"img",[["src","/assets/icon/00_profile_dog_0.png"],["style","height: 150px; width: 150px; margin: auto;"]],null,null,null,null,null)),(l()(),e.Bb(72,0,null,0,2,"ion-button",[["color","tertiary"],["default-button",""],["shape","full"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.register()&&e),e}),o.Q,o.d)),e.Ab(73,49152,null,0,a.m,[e.j,e.p,e.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),e.Tb(-1,0,["\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"]))],(function(l,n){var u=n.component;l(n,7,0,"dark","/login"),l(n,8,0,"/login"),l(n,26,0,"floating"),l(n,31,0,u.username),l(n,38,0,"floating"),l(n,43,0,u.password),l(n,46,0,"password"),l(n,50,0,"floating"),l(n,55,0,u.confirmPassword),l(n,58,0,"password"),l(n,62,0,"floating"),l(n,67,0,u.email),l(n,73,0,"tertiary","full")}),(function(l,n){l(n,28,0,e.Mb(n,33).ngClassUntouched,e.Mb(n,33).ngClassTouched,e.Mb(n,33).ngClassPristine,e.Mb(n,33).ngClassDirty,e.Mb(n,33).ngClassValid,e.Mb(n,33).ngClassInvalid,e.Mb(n,33).ngClassPending),l(n,40,0,e.Mb(n,45).ngClassUntouched,e.Mb(n,45).ngClassTouched,e.Mb(n,45).ngClassPristine,e.Mb(n,45).ngClassDirty,e.Mb(n,45).ngClassValid,e.Mb(n,45).ngClassInvalid,e.Mb(n,45).ngClassPending),l(n,52,0,e.Mb(n,57).ngClassUntouched,e.Mb(n,57).ngClassTouched,e.Mb(n,57).ngClassPristine,e.Mb(n,57).ngClassDirty,e.Mb(n,57).ngClassValid,e.Mb(n,57).ngClassInvalid,e.Mb(n,57).ngClassPending),l(n,64,0,e.Mb(n,69).ngClassUntouched,e.Mb(n,69).ngClassTouched,e.Mb(n,69).ngClassPristine,e.Mb(n,69).ngClassDirty,e.Mb(n,69).ngClassValid,e.Mb(n,69).ngClassInvalid,e.Mb(n,69).ngClassPending)}))}var p=e.xb("app-register",b,(function(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-register",[],null,null,null,c,d)),e.Ab(1,114688,null,0,b,[r.a,g.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),h=u("SVse"),f=function l(){_classCallCheck(this,l)};u.d(n,"RegisterPageModuleNgFactory",(function(){return C}));var C=e.yb(t,[],(function(l){return e.Jb([e.Kb(512,e.m,e.jb,[[8,[i.a,p]],[3,e.m],e.D]),e.Kb(4608,h.l,h.k,[e.z,[2,h.r]]),e.Kb(4608,s.j,s.j,[]),e.Kb(4608,a.b,a.b,[e.F,e.g]),e.Kb(4608,a.Ib,a.Ib,[a.b,e.m,e.w]),e.Kb(4608,a.Mb,a.Mb,[a.b,e.m,e.w]),e.Kb(1073742336,h.b,h.b,[]),e.Kb(1073742336,s.i,s.i,[]),e.Kb(1073742336,s.b,s.b,[]),e.Kb(1073742336,a.Gb,a.Gb,[]),e.Kb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),e.Kb(1073742336,f,f,[]),e.Kb(1073742336,t,t,[]),e.Kb(1024,g.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);
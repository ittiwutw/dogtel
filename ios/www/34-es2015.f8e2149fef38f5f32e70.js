(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{qq66:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),s=u("s7LF"),b=u("tnAE");class r{constructor(l,n){this.restApi=l,this.router=n,this.passwordNotMatch=!1}ngOnInit(){}register(){this.validate()&&this.restApi.register({username:this.username,password:this.password,email:this.email}).then(l=>{let n;n=l,"0001"===n.response_code?alert(n.response_description):(alert("\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),this.router.navigate(["/login"]))})}validate(){let l=!1;return this.username&&this.password&&this.email&&this.confirmPassword?null===this.password.match(this.confirmPassword)?(this.passwordNotMatch=!0,alert("Password Not Match")):this.validateEmail(this.email)?this.password.length<8||this.password.length>18?alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 password \u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 8 \u0e15\u0e31\u0e27 \u0e2b\u0e23\u0e37\u0e2d \u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32 18 \u0e15\u0e31\u0e27"):l=!0:alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01 E-mail \u0e43\u0e2b\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"):alert("\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19"),console.log(l),l}validateEmail(l){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(l).toLowerCase())}}var g=u("iInd"),d=t.zb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,10,"ion-header",[],null,null,null,o.cb,o.p)),t.Ab(1,49152,null,0,a.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.zb,o.M)),t.Ab(3,49152,null,0,a.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.R,o.e)),t.Ab(5,49152,null,0,a.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/login"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Mb(l,8).onClick(u)&&e),e}),o.P,o.c)),t.Ab(7,49152,null,0,a.i,[t.j,t.p,t.F],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),t.Ab(8,16384,null,0,a.j,[[2,a.kb],a.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Bb(9,0,null,0,1,"ion-title",[],null,null,null,o.yb,o.L)),t.Ab(10,49152,null,0,a.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(11,0,null,null,63,"ion-content",[["style","--ion-background-color: #ecd59f;"]],null,null,null,o.Y,o.l)),t.Ab(12,49152,null,0,a.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(13,0,null,0,61,"ion-card",[["class","welcome-card"]],null,null,null,o.V,o.f)),t.Ab(14,49152,null,0,a.o,[t.j,t.p,t.F],null,null),(l()(),t.Bb(15,0,null,0,5,"ion-card-header",[],null,null,null,o.T,o.h)),t.Ab(16,49152,null,0,a.q,[t.j,t.p,t.F],null,null),(l()(),t.Bb(17,0,null,0,3,"ion-card-title",[["style","color: #695355;"],["text-center",""]],null,null,null,o.U,o.i)),t.Ab(18,49152,null,0,a.s,[t.j,t.p,t.F],null,null),t.Ab(19,16384,null,0,a.e,[t.p],null,null),(l()(),t.Tb(-1,0,["\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"])),(l()(),t.Bb(21,0,null,0,49,"ion-card-content",[],null,null,null,o.S,o.g)),t.Ab(22,49152,null,0,a.p,[t.j,t.p,t.F],null,null),(l()(),t.Bb(23,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),t.Ab(24,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(25,0,null,0,2,"ion-label",[["position","floating"],["type","text"]],null,null,null,o.gb,o.t)),t.Ab(26,49152,null,0,a.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["USERNAME"])),(l()(),t.Bb(28,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,29)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,29)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.username=u)&&e),e}),o.eb,o.r)),t.Ab(29,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),t.Ab(31,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,s.d,null,[s.h]),t.Ab(33,16384,null,0,s.e,[[4,s.d]],null,null),t.Ab(34,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Bb(35,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),t.Ab(36,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.gb,o.t)),t.Ab(38,49152,null,0,a.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["PASSWORD"])),(l()(),t.Bb(40,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,41)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,41)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.password=u)&&e),e}),o.eb,o.r)),t.Ab(41,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),t.Ab(43,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,s.d,null,[s.h]),t.Ab(45,16384,null,0,s.e,[[4,s.d]],null,null),t.Ab(46,49152,null,0,a.I,[t.j,t.p,t.F],{type:[0,"type"]},null),(l()(),t.Bb(47,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),t.Ab(48,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(49,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.gb,o.t)),t.Ab(50,49152,null,0,a.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["Confirm Password"])),(l()(),t.Bb(52,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,53)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,53)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.confirmPassword=u)&&e),e}),o.eb,o.r)),t.Ab(53,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),t.Ab(55,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,s.d,null,[s.h]),t.Ab(57,16384,null,0,s.e,[[4,s.d]],null,null),t.Ab(58,49152,null,0,a.I,[t.j,t.p,t.F],{type:[0,"type"]},null),(l()(),t.Bb(59,0,null,0,11,"ion-item",[],null,null,null,o.fb,o.s)),t.Ab(60,49152,null,0,a.J,[t.j,t.p,t.F],null,null),(l()(),t.Bb(61,0,null,0,2,"ion-label",[["position","floating"],["type","text"]],null,null,null,o.gb,o.t)),t.Ab(62,49152,null,0,a.P,[t.j,t.p,t.F],{position:[0,"position"]},null),(l()(),t.Tb(-1,0,["E-MAIL"])),(l()(),t.Bb(64,0,null,0,6,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Mb(l,65)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Mb(l,65)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.email=u)&&e),e}),o.eb,o.r)),t.Ab(65,16384,null,0,a.Qb,[t.p],null,null),t.Qb(1024,null,s.c,(function(l){return[l]}),[a.Qb]),t.Ab(67,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Qb(2048,null,s.d,null,[s.h]),t.Ab(69,16384,null,0,s.e,[[4,s.d]],null,null),t.Ab(70,49152,null,0,a.I,[t.j,t.p,t.F],null,null),(l()(),t.Bb(71,0,null,0,0,"img",[["src","/assets/icon/00_profile_dog_0.png"],["style","height: 150px; width: 150px; margin: auto;"]],null,null,null,null,null)),(l()(),t.Bb(72,0,null,0,2,"ion-button",[["color","tertiary"],["default-button",""],["shape","full"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.register()&&t),t}),o.Q,o.d)),t.Ab(73,49152,null,0,a.m,[t.j,t.p,t.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),t.Tb(-1,0,["\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"]))],(function(l,n){var u=n.component;l(n,7,0,"dark","/login"),l(n,8,0,"/login"),l(n,26,0,"floating"),l(n,31,0,u.username),l(n,38,0,"floating"),l(n,43,0,u.password),l(n,46,0,"password"),l(n,50,0,"floating"),l(n,55,0,u.confirmPassword),l(n,58,0,"password"),l(n,62,0,"floating"),l(n,67,0,u.email),l(n,73,0,"tertiary","full")}),(function(l,n){l(n,28,0,t.Mb(n,33).ngClassUntouched,t.Mb(n,33).ngClassTouched,t.Mb(n,33).ngClassPristine,t.Mb(n,33).ngClassDirty,t.Mb(n,33).ngClassValid,t.Mb(n,33).ngClassInvalid,t.Mb(n,33).ngClassPending),l(n,40,0,t.Mb(n,45).ngClassUntouched,t.Mb(n,45).ngClassTouched,t.Mb(n,45).ngClassPristine,t.Mb(n,45).ngClassDirty,t.Mb(n,45).ngClassValid,t.Mb(n,45).ngClassInvalid,t.Mb(n,45).ngClassPending),l(n,52,0,t.Mb(n,57).ngClassUntouched,t.Mb(n,57).ngClassTouched,t.Mb(n,57).ngClassPristine,t.Mb(n,57).ngClassDirty,t.Mb(n,57).ngClassValid,t.Mb(n,57).ngClassInvalid,t.Mb(n,57).ngClassPending),l(n,64,0,t.Mb(n,69).ngClassUntouched,t.Mb(n,69).ngClassTouched,t.Mb(n,69).ngClassPristine,t.Mb(n,69).ngClassDirty,t.Mb(n,69).ngClassValid,t.Mb(n,69).ngClassInvalid,t.Mb(n,69).ngClassPending)}))}function c(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"app-register",[],null,null,null,p,d)),t.Ab(1,114688,null,0,r,[b.a,g.m],null,null)],(function(l,n){l(n,1,0)}),null)}var h=t.xb("app-register",r,c,{},{},[]),M=u("SVse");class f{}u.d(n,"RegisterPageModuleNgFactory",(function(){return C}));var C=t.yb(e,[],(function(l){return t.Jb([t.Kb(512,t.m,t.jb,[[8,[i.a,h]],[3,t.m],t.D]),t.Kb(4608,M.l,M.k,[t.z,[2,M.r]]),t.Kb(4608,s.j,s.j,[]),t.Kb(4608,a.b,a.b,[t.F,t.g]),t.Kb(4608,a.Ib,a.Ib,[a.b,t.m,t.w]),t.Kb(4608,a.Mb,a.Mb,[a.b,t.m,t.w]),t.Kb(1073742336,M.b,M.b,[]),t.Kb(1073742336,s.i,s.i,[]),t.Kb(1073742336,s.b,s.b,[]),t.Kb(1073742336,a.Gb,a.Gb,[]),t.Kb(1073742336,g.p,g.p,[[2,g.u],[2,g.m]]),t.Kb(1073742336,f,f,[]),t.Kb(1073742336,e,e,[]),t.Kb(1024,g.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
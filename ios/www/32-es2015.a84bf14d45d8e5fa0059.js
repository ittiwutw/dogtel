(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"7Csk":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),b=u("oBZk"),s=u("ZZ/e"),o=u("SVse"),r=u("tnAE");class a{constructor(l,n,u,t){this.activatedRoute=l,this.router=n,this.restApi=u,this.storage=t,this.msgList=[],this.storage.get("user").then(l=>{this.storage.get("role").then(n=>{2===n?this.restApi.getHotelByUserId({userId:l[0].id}).then(l=>{let n;n=l,this.restApi.getAskingByHotelId({hotelId:n.data.result[0].id}).then(l=>{let n;n=l,this.msgList=n.data.result,console.log(this.msgList)})}):1===n&&this.restApi.getHotelByUserId({userId:l[0].id}).then(n=>{let u;u=n,this.restApi.getAnswerByUserId({userId:l[0].id}).then(l=>{let n;n=l,this.msgList=n.data.result,console.log(this.msgList)})})})})}ngOnInit(){}onClickMsg(l){this.router.navigate(["/answer",{msg:JSON.stringify(l)}])}}var c=u("iInd"),p=u("xgBC"),g=t.zb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,12,"ion-item",[["detail",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickMsg(l.context.$implicit)&&t),t}),b.fb,b.s)),t.Ab(1,49152,null,0,s.J,[t.j,t.p,t.F],{detail:[0,"detail"]},null),(l()(),t.Bb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.O,b.b)),t.Ab(3,49152,null,0,s.h,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.Bb(5,0,null,0,7,"ion-label",[],null,null,null,b.gb,b.t)),t.Ab(6,49152,null,0,s.P,[t.j,t.p,t.F],null,null),(l()(),t.Bb(7,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Tb(8,null,["",""])),(l()(),t.Bb(9,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Tb(10,null,["",""])),(l()(),t.Bb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Tb(12,null,["",""]))],(function(l,n){l(n,1,0,"")}),(function(l,n){l(n,4,0,n.context.$implicit.userImgUrl),l(n,8,0,n.context.$implicit.username),l(n,10,0,n.context.$implicit.title),l(n,12,0,n.context.$implicit.detail)}))}function h(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,11,"ion-header",[],null,null,null,b.cb,b.p)),t.Ab(1,49152,null,0,s.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.zb,b.M)),t.Ab(3,49152,null,0,s.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.R,b.e)),t.Ab(5,49152,null,0,s.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/tabs/account"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Mb(l,8).onClick(u)&&e),e}),b.P,b.c)),t.Ab(7,49152,null,0,s.i,[t.j,t.p,t.F],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),t.Ab(8,16384,null,0,s.j,[[2,s.kb],s.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Bb(9,0,null,0,2,"ion-title",[],null,null,null,b.yb,b.L)),t.Ab(10,49152,null,0,s.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"])),(l()(),t.Bb(12,0,null,null,6,"ion-content",[],null,null,null,b.Y,b.l)),t.Ab(13,49152,null,0,s.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(14,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.Bb(15,0,null,null,3,"ion-list",[],null,null,null,b.ib,b.u)),t.Ab(16,49152,null,0,s.Q,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,d)),t.Ab(18,278528,null,0,o.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"dark","/tabs/account"),l(n,8,0,"/tabs/account"),l(n,18,0,u.msgList)}),null)}function f(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"app-message",[],null,null,null,h,g)),t.Ab(1,114688,null,0,a,[c.a,c.m,r.a,p.b],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.xb("app-message",a,f,{},{},[]),B=u("s7LF");class A{}u.d(n,"MessagePageModuleNgFactory",(function(){return k}));var k=t.yb(e,[],(function(l){return t.Jb([t.Kb(512,t.m,t.jb,[[8,[i.a,m]],[3,t.m],t.D]),t.Kb(4608,o.l,o.k,[t.z,[2,o.r]]),t.Kb(4608,B.j,B.j,[]),t.Kb(4608,s.b,s.b,[t.F,t.g]),t.Kb(4608,s.Ib,s.Ib,[s.b,t.m,t.w]),t.Kb(4608,s.Mb,s.Mb,[s.b,t.m,t.w]),t.Kb(1073742336,o.b,o.b,[]),t.Kb(1073742336,B.i,B.i,[]),t.Kb(1073742336,B.b,B.b,[]),t.Kb(1073742336,s.Gb,s.Gb,[]),t.Kb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),t.Kb(1073742336,A,A,[]),t.Kb(1073742336,e,e,[]),t.Kb(1024,c.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);
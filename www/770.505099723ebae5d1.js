"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[770],{770:(C,s,r)=>{r.r(s),r.d(s,{ProductoPageModule:()=>v});var p=r(6814),m=r(95),a=r(5548),i=r(4482),o=r(6689),P=r(6147),f=r(9237),l=r(1982);const Z=[{path:"",component:(()=>{class t{constructor(n,e){this.activatedRoute=n,this.carritoService=e,this.router=(0,o.f3M)(i.F0),this.producto={id:0,nombre:"",precio:0,ingredientes:[],imagen:""},this.cantidad=1,n.params.subscribe(d=>{console.log(d),P.P.forEach(u=>{const g=u.productos.find(b=>b.id==d.id);g&&(this.producto=g)})})}ngOnInit(){}onAgregarAlCarritoClicked(){console.log("CLICKEADO"),this.carritoService.agregarProducto(this.producto,this.cantidad),console.log(this.carritoService.carrito),this.router.navigate(["tabs/tab1"])}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(i.gz),o.Y36(f.z))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-producto"]],decls:21,vars:6,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["alt","",3,"src"],[3,"cantidadCambiada"],["fill","outline","shape","round","color","medium","expand","block",3,"click"]],template:function(n,e){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Producto"),o.qZA(),o.TgZ(4,"ion-buttons",1),o._UZ(5,"ion-back-button"),o.qZA()()(),o.TgZ(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),o._uU(10),o.qZA(),o.TgZ(11,"ion-buttons",1),o._UZ(12,"ion-back-button"),o.qZA()()(),o._UZ(13,"img",5),o.TgZ(14,"p"),o._uU(15),o.qZA(),o.TgZ(16,"p"),o._uU(17),o.qZA(),o.TgZ(18,"app-contador-cantidad",6),o.NdJ("cantidadCambiada",function(u){return e.cantidad=u}),o.qZA(),o.TgZ(19,"ion-button",7),o.NdJ("click",function(){return e.onAgregarAlCarritoClicked()}),o._uU(20,"Agregar al carrito"),o.qZA()()),2&n&&(o.Q6J("translucent",!0),o.xp6(6),o.Q6J("fullscreen",!0),o.xp6(4),o.Oqu(e.producto.nombre),o.xp6(3),o.s9C("src",e.producto.imagen,o.LSH),o.xp6(2),o.Oqu(e.producto.ingredientes),o.xp6(2),o.hij("$",e.producto.precio,""))},dependencies:[a.oU,a.YG,a.Sm,a.W2,a.Gu,a.wd,a.sr,a.cs,l.z]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.Bz.forChild(Z),i.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,m.u5,a.Pc,A,l.z]}),t})()}}]);
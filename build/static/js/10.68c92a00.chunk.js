(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[10],{143:function(e,a,n){e.exports=n.p+"static/media/sap.6eaeff9a.svg"},144:function(e,a,n){e.exports=n.p+"static/media/refund_2.6d188b8f.svg"},145:function(e,a,n){e.exports=n.p+"static/media/users.4faf48a4.svg"},146:function(e,a,n){e.exports=n.p+"static/media/akdp.9fd11fbe.svg"},147:function(e,a,n){e.exports=n.p+"static/media/akap.4b8cd217.svg"},148:function(e,a,n){e.exports=n.p+"static/media/manajemen_po.adbd8b0a.svg"},149:function(e,a,n){e.exports=n.p+"static/media/entitas.dc0694f1.svg"},150:function(e,a,n){e.exports=n.p+"static/media/pengaturan.4380352e.svg"},151:function(e,a,n){e.exports=n.p+"static/media/dashboard.45a478de.svg"},330:function(e,a,n){"use strict";n.r(a);var t=n(11),l=n(12),i=n(14),r=n(13),m=n(0),c=n.n(m),s=n(1),o=n(70),u=n.n(o),p=n(15),d=n(142),v=function(e){Object(i.a)(n,e);var a=Object(r.a)(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),localStorage.clear(),window.location.href="/"}},{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",style:{backgroundColor:"rgb(4,29,70)",opacity:"1",boxShadow:"0px 0px 18px #0000004D",backdropFilter:"blur(4px)",borderBottom:"none",position:"fixed",width:"100%"}},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.b,{className:"nav-link","data-widget":"pushmenu",to:"#",role:"button",style:{color:"#808B9D"}},c.a.createElement("i",{className:"fas fa-bars",style:{fontSize:"1.5em"}})))),c.a.createElement("ul",{style:{position:"relative",top:"0",left:"28%",margin:"0 auto"}},c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(p.b,{className:"nav-link","data-toggle":"dropdown",to:"#",style:{marginRight:"-25px"}},c.a.createElement("img",{src:"./img/logout.png",alt:"User Avatar",className:"img-size-50 mr-3 img-circle",style:{width:"30px",height:"30px",marginTop:"-5px"}})),c.a.createElement("div",{className:"dropdown-menu dropdown-menu-md dropdown-menu-right"},c.a.createElement(d.a,{className:"dropdown-item",onClick:function(a){return e.signOut(a)}},c.a.createElement("div",{className:"media"},c.a.createElement("img",{src:"./img/logout2.png",alt:"User Avatar",className:"img-size-10 mr-4 img-circle",style:{width:"20px"}}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"dropdown-item-title"},"Logout"))))))))}}]),n}(m.Component),h=window.$;var f=n(143),g=n.n(f),y=n(144),E=n.n(y),b=n(145),N=n.n(b),P=n(146),k=n.n(P),x=n(147),w=n.n(x),C=n(148),L=n.n(C),z=n(149),T=n.n(z),B=n(150),S=n.n(B),O=n(151),A=n.n(O),j=function(e){Object(i.a)(n,e);var a=Object(r.a)(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){h('[data-widget="treeview"]').Treeview("init")}},{key:"render",value:function(){return c.a.createElement("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",style:{backgroundColor:"#041D46"}},c.a.createElement(p.c,{to:"/",class:"brand-link",style:{borderBottom:"none",textAlign:"center",fontSize:"20px",fontWeight:"bold",padding:"8px 0px 8px 0px"}},c.a.createElement("span",{className:"brand-text font-weight-light"},c.a.createElement("b",null,"DASHBOARD P.O"))),c.a.createElement("div",{className:"sidebar"},c.a.createElement("nav",{className:"mt-2"},c.a.createElement("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false"},c.a.createElement("li",{className:"nav-item",style:{marginBottom:"10px",marginTop:"10px"}},c.a.createElement(p.c,{to:"/dashboard",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:A.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"Dashboard"))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/pengaturan",className:"nav-link disabled-link",activeClassName:"active"},c.a.createElement("img",{src:S.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"Pengaturan",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/pengaturan/provinsi",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Provinsi"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/pengaturan/wilayah",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Wilayah"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/pengaturan/lokasi",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Lokasi"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/pengaturan/channel",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Channel"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/pengaturan/channelPo",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Channel P.O"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/entitas",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:T.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"Entitas",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/entitas/po",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"P.O"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/entitas/partner",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Partner"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/entitas/agen",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Agen"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/entitas/loket",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Loket"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/entitas/crew",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Crew"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/manajemenPo",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:L.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"Manajemen P.O",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/manajemenPo/bus",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Bus"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/akap",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:w.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"AKAP",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/akap/trayek",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Trayek"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/akap/transaksi",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Transaksi"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/akap/settlement",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Settlement"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/bumel",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:k.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"AKDP / Bumel",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/bumel/trayek",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Trayek"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/bumel/transaksi",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Transaksi"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/bumel/settlement",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Settlement"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/bumel/invoice",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Invoice"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/refund",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:E.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"Refund",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/refund/pengajuanRefund",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Pengajuan Refund"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/user",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:N.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"User",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/user/daftarPengguna",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Daftar Pengguna"))))),c.a.createElement("li",{className:"nav-item has-treeview",style:{marginBottom:"10px"}},c.a.createElement(p.c,{to:"/sap",className:"nav-link",activeClassName:"active"},c.a.createElement("img",{src:g.a,alt:"S.A.P Logo",class:"brand-image"}),c.a.createElement("p",{style:{marginLeft:"20px"}},"S.A.P",c.a.createElement("i",{className:"right fas fa-angle-down"}))),c.a.createElement("ul",{className:"nav nav-treeview"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{to:"/sap/updateHarga",className:"nav-link",activeClassName:"active"},c.a.createElement("i",{className:"far fa-circle nav-icon",style:{visibility:"hidden"}}),c.a.createElement("p",{style:{marginLeft:"10px"}},"Update Harga")))))))))}}]),n}(m.Component),D=c.a.lazy((function(){return n.e(63).then(n.bind(null,294))})),W=c.a.lazy((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,334))})),I=c.a.lazy((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,295))})),H=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,335))})),U=c.a.lazy((function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,296))})),R=c.a.lazy((function(){return Promise.all([n.e(0),n.e(34)]).then(n.bind(null,297))})),_=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(56)]).then(n.bind(null,337))})),M=c.a.lazy((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,298))})),J=c.a.lazy((function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,299))})),K=c.a.lazy((function(){return Promise.all([n.e(0),n.e(54)]).then(n.bind(null,338))})),F=c.a.lazy((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,300))})),Y=c.a.lazy((function(){return Promise.all([n.e(0),n.e(55)]).then(n.bind(null,301))})),$=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(52)]).then(n.bind(null,339))})),q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,302))})),G=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(53)]).then(n.bind(null,303))})),Q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(50)]).then(n.bind(null,340))})),V=c.a.lazy((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,304))})),X=c.a.lazy((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,305))})),Z=c.a.lazy((function(){return Promise.all([n.e(0),n.e(49)]).then(n.bind(null,341))})),ee=c.a.lazy((function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,306))})),ae=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:D},{path:"/pengaturan/provinsi",name:"Provinsi",component:W},{path:"/pengaturan/editProvinsi/:id",name:"Edit Provinsi",component:I},{path:"/pengaturan/wilayah",name:"Wilayah",component:H},{path:"/pengaturan/editWilayah/:idWil/:idProv",name:"Edit Wilayah",component:U},{path:"/pengaturan/tambahWilayah/:id",name:"Tambah Wilayah",component:R},{path:"/pengaturan/lokasi",name:"Lokasi",component:_},{path:"/pengaturan/editLokasi/:idLok/:idWil",name:"Edit Lokasi",component:M},{path:"/pengaturan/tambahLokasi/:id",name:"Tambah Lokai",component:J},{path:"/pengaturan/channel",name:"Channel",component:K},{path:"/pengaturan/editChannel/:idChannel",name:"Edit Channel",component:F},{path:"/pengaturan/tambahChannel",name:"Tambah Channel",component:Y},{path:"/pengaturan/channelPo",name:"Channel P.O",component:$},{path:"/pengaturan/editChannelPo/:idPo/:idChannelPo",name:"Edit Channel P.O",component:q},{path:"/pengaturan/tambahChannelPo/:idPo",name:"Tambah Channel P.O",component:G},{path:"/entitas/po",name:"P.O",component:Q},{path:"/entitas/editPo/:idPo",name:"Edit P.O",component:X},{path:"/entitas/tambahPo",name:"Tambah P.O",component:V},{path:"/entitas/partner",name:"Partner",component:Z},{path:"/entitas/editPartner/:idPartner",name:"Edit Partner",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,307))}))},{path:"/entitas/tambahPartner",name:"Tambah Partner",component:ee},{path:"/entitas/agen",name:"Agen",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(43)]).then(n.bind(null,342))}))},{path:"/entitas/tambahAgen",name:"Tambah Agen",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(44)]).then(n.bind(null,308))}))},{path:"/entitas/editAgen/:idAgen",name:"Edit Agen",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,309))}))},{path:"/entitas/loket",name:"Loket",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(47)]).then(n.bind(null,343))}))},{path:"/entitas/tambahLoket/:idPo",name:"Tambah Loket",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(48)]).then(n.bind(null,310))}))},{path:"/entitas/editLoket/:idLoket",name:"Edit Loket",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(23)]).then(n.bind(null,311))}))},{path:"/entitas/crew",name:"Crew",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(45)]).then(n.bind(null,344))}))},{path:"/entitas/tambahCrew/:idPo",name:"Tambah Crew",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(46)]).then(n.bind(null,312))}))},{path:"/entitas/editCrew/:idCrew",name:"Edit Crew",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,313))}))},{path:"/manajemenPo/bus",name:"Bus",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(51)]).then(n.bind(null,345))}))},{path:"/manajemenPo/tambahBus",name:"Tambah Bus",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,314))}))},{path:"/manajemenPo/editBus/:idBus",name:"Edit Bus",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,315))}))},{path:"/akap/trayeks",name:"Trayek",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(60)]).then(n.bind(null,316))}))},{path:"/akap/trayek",name:"Trayek",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(36)]).then(n.bind(null,317))}))},{path:"/akap/tambahTrayek",name:"Tambah Trayek",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,331))}))},{path:"/bumel/trayek",name:"Trayek",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(42)]).then(n.bind(null,346))}))},{path:"/bumel/tambahTrayek",name:"Tambah Trayek",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,332))}))},{path:"/bumel/editTrayek/:idTrayek",name:"Edit Trayek",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,333))}))},{path:"/bumel/transaksi",name:"Transaksi",component:c.a.lazy((function(){return n.e(62).then(n.bind(null,318))}))},{path:"/bumel/transaksiTunai",name:"Transaksi Tunai",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(41)]).then(n.bind(null,347))}))},{path:"/bumel/transaksiNonTunai",name:"Transaksi Non Tunai",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(40)]).then(n.bind(null,348))}))},{path:"/bumel/settlement",name:"Settlement",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(39)]).then(n.bind(null,349))}))},{path:"/bumel/invoice",name:"Invoice",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,322))}))},{path:"/bumel/belumBayar",name:"Belum Bayar",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,68))}))},{path:"/bumel/detailBelumBayar/:idTagihan",name:"Detail Belum Bayar",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(37)]).then(n.bind(null,323))}))},{path:"/bumel/sudahBayar",name:"Sudah Bayar",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,69))}))},{path:"/bumel/detailSudahBayar/:idTagihan",name:"Detail Sudah Bayar",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(38)]).then(n.bind(null,324))}))},{path:"/user/daftarPengguna",name:"Daftar Pengguna",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(59)]).then(n.bind(null,350))}))},{path:"/user/tambahPengguna",name:"Tambah Pengguna",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(35)]).then(n.bind(null,325))}))},{path:"/user/editUser/:idUser",name:"Edit Pengguna",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(20)]).then(n.bind(null,326))}))},{path:"/sap/updateHarga",name:"Update Harga",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(58)]).then(n.bind(null,351))}))},{path:"/sap/tambahHarga",name:"Tambah Harga",component:c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(57)]).then(n.bind(null,327))}))}],ne=function(e){Object(i.a)(n,e);var a=Object(r.a)(n);function n(){var e;return Object(t.a)(this,n),(e=a.call(this)).handler=function(a){e.setState({online:Navigator.OnLine}),"online"===a.type?u.a.fire({icon:"info",title:"The Internet?",text:"Internet Connection is Back!",showConfirmButton:!1,timer:1500}):u.a.fire({icon:"info",title:"The Internet?",text:"Check Your Internet Connection"})},e.state={online:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("online",this.handler),window.addEventListener("offline",this.handler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.handler),window.removeEventListener("offline",this.handler)}},{key:"render",value:function(){return localStorage.getItem("token")?c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(m.Suspense,null,c.a.createElement(j,null)),c.a.createElement(m.Suspense,null,c.a.createElement(s.d,null,ae.map((function(e,a){return e.component&&localStorage.getItem("token")?c.a.createElement(s.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return c.a.createElement(e.component,a)}}):null})),localStorage.getItem("token")?c.a.createElement(s.a,{from:"/",to:"/dashboard"}):c.a.createElement(s.a,{from:"/",to:"/login"})))):c.a.createElement(s.a,{from:"/",to:"/login"})}}]),n}(m.Component);a.default=ne}}]);
//# sourceMappingURL=10.68c92a00.chunk.js.map
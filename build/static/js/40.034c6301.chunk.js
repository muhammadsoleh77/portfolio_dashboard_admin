(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[40],{33:function(e,a,t){"use strict";var n=t(36),l=t.n(n),r=localStorage.getItem("token"),s=l.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+r}});a.a=s},348:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(11),l=t(12),r=t(14),s=t(13),c=t(0),i=t.n(c),m=t(15),o=t(37),d=t(50),u=t.n(d),E=(t(48),t(49)),h=t.n(E),p=t(33),f=t(142),v=t(336),N=t(319),g=t(320),b=t(321),T=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).endpointPo=function(){p.a.get("/admin/po/getAll").then((function(e){l.setState({dataPo:e.data})}))},l.OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({idPo:e.value})},l.handleChangeStartDate=function(e){l.setState({startDate:e})},l.getDataTransaksi=function(e){e.preventDefault();var a=h()(l.state.startDate).format("YYYY-MM-DD");p.a.get("/admin/transaksi/nontunai?idPo="+l.state.idPo+"&tanggal="+a).then((function(e){0!==e.data.length?l.setState({dataIsi:!0,listDataTransaksi:e.data}):l.setState({dataKosong:!0})}))},l.toggle=function(e,a){l.setState({modal:!0,dataDetail:e,dataDetail2:e.detail})},l.modalTagihan=function(){l.setState({modalTagihans:!0})},l.closeModal=function(){l.setState({modal:!1})},l.closeModalTagihan=function(){l.setState({modalTagihans:!1})},l.pnpQris=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlPnp})),e},l.bayarQris=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlRpQris})),e},l.totalQris=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlQris})),e},l.totalMDRQRIS=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlMdrQris})),e},l.bayarMdr=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlRpTap})),e},l.totalMdr=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlTap})),e},l.totalsMDRTap=function(){var e=0;return l.props.dataTransaksi.forEach((function(a){e+=a.jmlMdrTap})),e},l.prosesTagihan=function(e){e.preventDefault(),l.setState({modalTagihans:!1});var a=l.props.dataTransaksi,t=[];a.forEach((function(e,a){t.push({kodeBus:e.kodeBus,nominalMDRQRIS:e.jmlMdrQris,nominalMDRTap:e.jmlMdrTap,nominalQRIS:e.jmlQris,nominalTap:e.jmlTap,detail:e.detail.map((function(e){return{jumlahQRIS:e.jumlahQRIS,jumlahTap:e.jumlahTap,mdrQRIS:e.mdrQRIS,mdrTap:e.mdrTap,pnpQRIS:e.pnpQRIS,pnpTap:e.pnpTap,trayek:e.namaTrayek}}))})}));var n={idPo:l.props.idPo,tanggal:h()(l.props.tglAwal).format("YYYY-MM-DD"),transaksiNonTunaiList:t};p.a.post("/admin/transaksi/nontunai",n).then((function(e){alert(e.data.message)})).catch((function(e){alert("error")}))},l.state={dataKosong:!1,dataIsi:!1,modal:!1,modalTagihans:!1,startDate:"",dataPo:[],dataDetail:{},dataDetail2:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.endpointPo()}},{key:"render",value:function(){var e=this;if(this.state.dataKosong)return i.a.createElement(D,{id:this.state.idProvinsi});if(this.state.dataIsi)return i.a.createElement(t,{dataProps:this,dataTransaksi:this.state.listDataTransaksi,idPo:this.state.idPo,tglAwal:this.state.startDate});var a=new Intl.NumberFormat;return i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Transaksi"))))))),i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"col-md-12"},i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-body",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},i.a.createElement("div",{class:"col-6 main-menu"},i.a.createElement(m.b,{to:"/bumel/transaksiTunai"},i.a.createElement("div",{class:"menu disabled"},"Tunai"))),i.a.createElement("div",{class:"col-6 main-menu"},i.a.createElement(m.b,{to:"/bumel/transaksiNonTunai"},i.a.createElement("div",{class:"menu"},"Non Tunai"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-2"},i.a.createElement(o.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))}),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-2"},i.a.createElement(u.a,{className:"form-control",placeholderText:"Tanggal",selected:this.state.startDate,onChange:this.handleChangeStartDate}),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.getDataTransaksi},i.a.createElement("i",{className:"fa fa-search"})))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("strong",null,"DATA TRANSAKSI NON TUNAI")),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-bordered table-striped text-nowrap"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Produk Bus"),i.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Pnp"),i.a.createElement("th",{colspan:"3",className:"text-center"},"QRIS"),i.a.createElement("th",{colspan:"3",className:"text-center"},"E-Money"),i.a.createElement("th",{rowspan:"2",className:"text-center",style:{width:"10%",verticalAlign:"middle"}},"Aksi")),i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center"},"Rp"),i.a.createElement("th",{className:"text-center"},"ODT"),i.a.createElement("th",{className:"text-center"},"MDR"),i.a.createElement("th",{className:"text-center"},"Rp"),i.a.createElement("th",{className:"text-center"},"ODT"),i.a.createElement("th",{className:"text-center"},"MDR"))),i.a.createElement("tbody",null,this.props.dataTransaksi.map((function(t,n){return i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},t.kodeBus),i.a.createElement("td",{className:"text-center"},t.jmlPnp),i.a.createElement("td",{className:"text-right"},a.format(t.jmlRpQris)),i.a.createElement("td",{className:"text-right"},a.format(t.jmlQris)),i.a.createElement("td",{className:"text-right"},a.format(t.jmlMdrQris)),i.a.createElement("td",{className:"text-right"},a.format(t.jmlRpTap)),i.a.createElement("td",{className:"text-right"},a.format(t.jmlTap)),i.a.createElement("td",{className:"text-right"},a.format(t.jmlMdrTap)),i.a.createElement("td",null,i.a.createElement("div",{className:"text-center"},i.a.createElement(f.a,{color:"success",onClick:function(a){return e.toggle(t,n)}},"Detail"))))}))),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},i.a.createElement("b",null,"TOTAL")),i.a.createElement("td",{className:"text-center"},this.pnpQris()),i.a.createElement("td",{className:"text-right"},a.format(this.bayarQris())),i.a.createElement("td",{className:"text-right"},a.format(this.totalQris())),i.a.createElement("td",{className:"text-right"},a.format(this.totalMDRQRIS())),i.a.createElement("td",{className:"text-right"},a.format(this.bayarMdr())),i.a.createElement("td",{className:"text-right"},a.format(this.totalMdr())),i.a.createElement("td",{className:"text-right"},a.format(this.totalsMDRTap())),i.a.createElement("td",null))))),i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-primary",onClick:this.modalTagihan,style:{float:"right"}},i.a.createElement("i",{className:"fa fa-plus"})," Create Settlement")),i.a.createElement("div",{className:"row"}))))))),i.a.createElement(v.a,{isOpen:this.state.modal,toggle:this.closeModal,centered:!0,size:"lg"},i.a.createElement(N.a,{toggle:this.closeModal},"Detail Transaksi Bus (",this.state.dataDetail.kodeBus,")"),i.a.createElement(g.a,null,i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-bordered table-striped text-nowrap"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Trayek"),i.a.createElement("th",{colspan:"3",className:"text-center"},"E-Money"),i.a.createElement("th",{colspan:"3",className:"text-center"},"QRIS")),i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center"},"Pnp"),i.a.createElement("th",{className:"text-center"},"Rp"),i.a.createElement("th",{className:"text-center"},"MDR"),i.a.createElement("th",{className:"text-center"},"Pnp"),i.a.createElement("th",{className:"text-center"},"Rp"),i.a.createElement("th",{className:"text-center"},"MDR"))),i.a.createElement("tbody",null,this.state.dataDetail2.map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",{className:"text-center"},e.namaTrayek),i.a.createElement("td",{className:"text-center"},e.pnpTap),i.a.createElement("td",{className:"text-right"},a.format(e.jumlahTap)),i.a.createElement("td",{className:"text-right"},a.format(e.mdrTap)),i.a.createElement("td",{className:"text-center"},e.pnpQRIS),i.a.createElement("td",{className:"text-right"},a.format(e.jumlahQRIS)),i.a.createElement("td",{className:"text-right"},a.format(e.mdrQRIS)))})))))),i.a.createElement(b.a,null,i.a.createElement(f.a,{color:"primary",onClick:this.closeModal},"Tutup"))),i.a.createElement(v.a,{isOpen:this.state.modalTagihans,toggle:this.closeModalTagihan,centered:!0,size:"md"},i.a.createElement(N.a,{toggle:this.closeModalTagihan},"Tagihan Non Tunai P.O"),i.a.createElement(g.a,null,i.a.createElement("div",{className:"form-horizontal"},i.a.createElement("div",{class:"form-group row"},i.a.createElement("label",{for:"inputPassword",class:"col-sm-4 col-form-label"},"ODT QRIS"),i.a.createElement("div",{class:"col-sm-8"},i.a.createElement("input",{type:"text",class:"form-control text-right",placeholder:"Keterangan",value:a.format(this.totalQris()),readOnly:!0}))),i.a.createElement("div",{class:"form-group row"},i.a.createElement("label",{for:"inputPassword",class:"col-sm-4 col-form-label"},"MDR QRIS"),i.a.createElement("div",{class:"col-sm-8"},i.a.createElement("input",{type:"text",class:"form-control text-right",placeholder:"Keterangan",value:a.format(this.totalMDRQRIS()),readOnly:!0}))),i.a.createElement("div",{class:"form-group row"},i.a.createElement("label",{for:"inputPassword",class:"col-sm-4 col-form-label"},"ODT E-Money"),i.a.createElement("div",{class:"col-sm-8"},i.a.createElement("input",{type:"text",class:"form-control text-right",placeholder:"No.Invoice",value:a.format(this.totalMdr()),readOnly:!0}))),i.a.createElement("div",{class:"form-group row"},i.a.createElement("label",{for:"inputPassword",class:"col-sm-4 col-form-label"},"MDR E-Money"),i.a.createElement("div",{class:"col-sm-8"},i.a.createElement("input",{type:"text",class:"form-control text-right",placeholder:"No.Invoice",value:a.format(this.totalsMDRTap()),readOnly:!0}))),i.a.createElement("div",{class:"text-center"},i.a.createElement("button",{class:"btn btn-primary text-center",onClick:function(a){return e.prosesTagihan(a)}},"Proses"))))))}}]),t}(c.Component),D=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).endpointPo=function(){p.a.get("/admin/po/getAll").then((function(e){l.setState({dataPo:e.data})}))},l.OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({idPo:e.value})},l.handleChangeStartDate=function(e){l.setState({startDate:e})},l.getDataTransaksi=function(e){e.preventDefault();var a=h()(l.state.startDate).format("YYYY-MM-DD");p.a.get("/admin/transaksi/nontunai?idPo="+l.state.idPo+"&tanggal="+a).then((function(e){0!==e.data.length?l.setState({dataIsi:!0,listDataTransaksi:e.data}):l.setState({dataKosong:!0})}))},l.state={dataKosong:!1,dataIsi:!1,startDate:"",dataPo:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.endpointPo()}},{key:"render",value:function(){var e=this;return this.state.dataIsi?i.a.createElement(T,{dataTransaksi:this.state.listDataTransaksi,idPo:this.state.idPo,tglAwal:this.state.startDate}):i.a.createElement("div",null,i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Transaksi"))))))),i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"col-md-12"},i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-body",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},i.a.createElement("div",{class:"col-6 main-menu"},i.a.createElement(m.b,{to:"/bumel/transaksiTunai"},i.a.createElement("div",{class:"menu disabled"},"Tunai"))),i.a.createElement("div",{class:"col-6 main-menu"},i.a.createElement(m.b,{to:"/bumel/transaksiNonTunai"},i.a.createElement("div",{class:"menu"},"Non Tunai"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-2"},i.a.createElement(o.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))})),i.a.createElement("div",{className:"col-md-2"},i.a.createElement(u.a,{className:"form-control",placeholderText:"Tanggal Awal",selected:this.state.startDate,onChange:this.handleChangeStartDate})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.getDataTransaksi},i.a.createElement("i",{className:"fa fa-search"})))),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("strong",null,"DATA TRANSAKSI NON TUNAI BUMEL KOSONG"))))))))))}}]),t}(c.Component),P=function(){return i.a.createElement("div",{class:"loader"},i.a.createElement("div",{class:"bar"}))},k=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).hideLoader=function(){l.setState({loading:!1})},l.showLoader=function(){l.setState({loading:!0})},l.endpointPo=function(){p.a.get("/admin/po/getAll").then((function(e){l.setState({dataPo:e.data})}))},l.OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({idPo:e.value})},l.handleChangeStartDate=function(e){l.setState({startDate:e})},l.getDataTransaksi=function(e){e.preventDefault();var a=h()(l.state.startDate).format("YYYY-MM-DD");l.showLoader(),p.a.get("/admin/transaksi/nontunai?idPo="+l.state.idPo+"&tanggal="+a).then((function(e){0!==e.data.length?l.setState({dataIsi:!0,listDataTransaksi:e.data}):l.setState({dataKosong:!0}),l.hideLoader()}))},l.state={loading:!1,dataKosong:!1,dataIsi:!1,startDate:"",dataPo:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.endpointPo()}},{key:"render",value:function(){var e=this;return this.state.dataKosong?i.a.createElement(D,{id:this.state.idProvinsi}):this.state.dataIsi?i.a.createElement(T,{dataProps:this,dataTransaksi:this.state.listDataTransaksi,idPo:this.state.idPo,tglAwal:this.state.startDate}):i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Transaksi"))))))),i.a.createElement("div",{class:"container-fluid"},i.a.createElement("div",{class:"col-md-12"},i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-body",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},i.a.createElement("div",{class:"col-6 main-menu"},i.a.createElement(m.b,{to:"/bumel/transaksiTunai"},i.a.createElement("div",{class:"menu disabled"},"Tunai"))),i.a.createElement("div",{class:"col-6 main-menu"},i.a.createElement(m.b,{to:"/bumel/transaksiNonTunai"},i.a.createElement("div",{class:"menu"},"Non Tunai"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-2"},i.a.createElement(o.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))}),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-2"},i.a.createElement(u.a,{className:"form-control",placeholderText:"Tanggal",selected:this.state.startDate,onChange:this.handleChangeStartDate}),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.getDataTransaksi},i.a.createElement("i",{className:"fa fa-search"})))),this.state.loading?i.a.createElement(P,null):null)))))))}}]),t}(c.Component)}}]);
//# sourceMappingURL=40.034c6301.chunk.js.map
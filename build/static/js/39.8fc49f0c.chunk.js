(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[39],{33:function(e,t,a){"use strict";var n=a(36),l=a.n(n),r=localStorage.getItem("token"),c=l.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+r}});t.a=c},349:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(11),l=a(12),r=a(14),c=a(13),s=a(0),m=a.n(s),i=a(33),o=a(49),d=a.n(o),u=a(37),h=a(50),E=a.n(h),g=(a(48),a(18)),p=a(142),N=a(336),b=a(319),f=a(320),v=a(321),P=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).endpointPo=function(){i.a.get("/admin/po/getAll").then((function(e){l.setState({dataPo:e.data})}))},l.OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({idPo:e.value})},l.handleChangeStartDate=function(e){l.setState({startDate:e})},l.getDataTransaksi=function(e){e.preventDefault();var t=d()(l.state.startDate).format("YYYY-MM-DD");i.a.get("/admin/transaksi/nontunai/laporan?idPo="+l.state.idPo+"&tanggal="+t).then((function(e){0!==e.data.length?l.setState({dataIsi:!0,dataSettlement:e.data}):l.setState({dataKosong:!0})}))},l.state={dataKosong:!1,dataIsi:!1,currentPage:1,perPage:10,dataPo:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.endpointPo()}},{key:"render",value:function(){var e=this;return this.state.dataIsi?m.a.createElement(D,{dataSettlement:this.state.dataSettlement,idPo:this.state.idPo,tglAwal:this.state.startDate}):m.a.createElement("div",{className:"content-wrapper"},m.a.createElement("div",{className:"content-header"},m.a.createElement("div",{className:"container-fluid header-fluid"},m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("ol",{className:"breadcrumb float-sm-left"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"# "},m.a.createElement("b",null,"Home"))),m.a.createElement("li",{className:"breadcrumb-item active"},m.a.createElement("b",null,"Settlement"))))))),m.a.createElement("section",{className:"content"},m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-2"},m.a.createElement(u.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(t){return e.OptionPo(t)}))}),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-md-2"},m.a.createElement(E.a,{className:"form-control",placeholderText:"Tanggal",selected:this.state.startDate,onChange:this.handleChangeStartDate}),m.a.createElement("br",null),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-md-3"},m.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.getDataTransaksi},m.a.createElement("i",{className:"fa fa-search"})))),m.a.createElement("br",null),m.a.createElement("p",null,m.a.createElement("strong",null,"DATA TRANSAKSI NON TUNAI BUMEL KOSONG")))))))))}}]),a}(s.Component),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).endpointPo=function(){i.a.get("/admin/po/getAll").then((function(e){l.setState({dataPo:e.data})}))},l.toggle=function(e,t){l.setState({modal:!0,dataDetail:e,dataDetail2:e.detail})},l.closeModal=function(){l.setState({modal:!1})},l.OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({idPo:e.value})},l.handleChangeStartDate=function(e){l.setState({startDate:e})},l.getDataTransaksi=function(e){e.preventDefault();var t=d()(l.state.startDate).format("YYYY-MM-DD");i.a.get("/admin/transaksi/nontunai/laporan?idPo="+l.state.idPo+"&tanggal="+t).then((function(e){0!==e.data.length?l.setState({dataIsi:!0,dataSettlement:e.data}):l.setState({dataKosong:!0})}))},l.handleClick=function(e){l.setState({currentPage:Number(e.target.id)})},l.state={dataKosong:!1,dataIsi:!1,currentPage:1,perPage:10,dataPo:[],modal:!1,dataDetail:{},dataDetail2:[]},l.handleClick=l.handleClick.bind(Object(g.a)(l)),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.endpointPo()}},{key:"getParsedDate",value:function(e){var t=String(e).split(" "),a=new Date(t[0]),n=a.getDate(),l=a.getMonth()+1,r=a.getFullYear();return n<10&&(n="0"+n),l<10&&(l="0"+l),(a=n+"-"+l+"-"+r).toString()}},{key:"render",value:function(){var e=this;if(this.state.dataKosong)return m.a.createElement(P,{id:this.state.idProvinsi});if(this.state.dataIsi)return m.a.createElement(a,{dataSettlement:this.state.dataSettlement,idPo:this.state.idPo,tglAwal:this.state.startDate});for(var t=new Intl.NumberFormat,n=this.props.dataSettlement,l=this.state,r=l.currentPage,c=l.perPage,s=r*c,i=s-c,o=n.slice(i,s).map((function(a,n){return m.a.createElement("tr",{key:n},m.a.createElement("td",{style:{textAlign:"center"}},n+1),m.a.createElement("td",{style:{textAlign:"center"}},a.kodeBus?a.kodeBus:"--"),m.a.createElement("td",{style:{textAlign:"right"}},t.format(a.nominalQRIS)),m.a.createElement("td",{style:{textAlign:"right"}},t.format(a.nominalMDRQRIS)),m.a.createElement("td",{style:{textAlign:"right"}},t.format(a.nominalTap)),m.a.createElement("td",{style:{textAlign:"right"}},t.format(a.nominalMDRTap)),m.a.createElement("td",{style:{textAlign:"center"}},d()(a.tanggalProses).format("DD-MM-YYYY HH:mm:ss")),m.a.createElement("td",{style:{textAlign:"center"}},m.a.createElement(p.a,{color:"success",onClick:function(t){return e.toggle(a,n)}},"Detail")))})),h=[],g=1;g<=Math.ceil(n.length/c);g++)h.push(g);var D=h.map((function(t){return m.a.createElement("li",{key:t,id:t,onClick:e.handleClick,style:{display:"inline-block",padding:"5px 9px",marginRight:"4px",border:"1px solid #c0c0c0",borderRadius:"3px",background:"#e9e9e9",fontSize:"12px",fontWeight:"bold",width:"30px",height:"30px",cursor:"pointer"}},t)}));return m.a.createElement("div",{className:"content-wrapper"},m.a.createElement("div",{className:"content-header"},m.a.createElement("div",{className:"container-fluid header-fluid"},m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("ol",{className:"breadcrumb float-sm-left"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"# "},m.a.createElement("b",null,"Home"))),m.a.createElement("li",{className:"breadcrumb-item active"},m.a.createElement("b",null,"Settlement"))))))),m.a.createElement("section",{className:"content"},m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-2"},m.a.createElement(u.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(t){return e.OptionPo(t)}))}),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-md-2"},m.a.createElement(E.a,{className:"form-control",placeholderText:"Tanggal",selected:this.state.startDate,onChange:this.handleChangeStartDate}),m.a.createElement("br",null),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-md-3"},m.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.getDataTransaksi},m.a.createElement("i",{className:"fa fa-search"})))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("p",null,m.a.createElement("strong",null,"DATA SETTLEMENT NON TUNAI")),m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table table-bordered table-striped text-nowrap"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"No"),m.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Produk(Bus)"),m.a.createElement("th",{colspan:"2",className:"text-center"},"QRIS"),m.a.createElement("th",{colspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"E-Money"),m.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Waktu Proses"),m.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Aksi")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-center"},"ODT"),m.a.createElement("th",{className:"text-center"},"MDR"),m.a.createElement("th",{className:"text-center"},"ODT"),m.a.createElement("th",{className:"text-center"},"MDR"))),m.a.createElement("tbody",null,o))),m.a.createElement("ul",{className:"text-center"},D))))))),m.a.createElement(N.a,{isOpen:this.state.modal,toggle:this.closeModal,centered:!0,size:"lg"},m.a.createElement(b.a,{toggle:this.closeModal},"Detail Transaksi Bus (",this.state.dataDetail.kodeBus,")"),m.a.createElement(f.a,null,m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table table-bordered table-striped text-nowrap"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{rowspan:"2",className:"text-center",style:{verticalAlign:"middle"}},"Trayek"),m.a.createElement("th",{colspan:"3",className:"text-center"},"E-Money"),m.a.createElement("th",{colspan:"3",className:"text-center"},"QRIS")),m.a.createElement("tr",null,m.a.createElement("th",{className:"text-center"},"Pnp"),m.a.createElement("th",{className:"text-center"},"Rp"),m.a.createElement("th",{className:"text-center"},"MDR"),m.a.createElement("th",{className:"text-center"},"Pnp"),m.a.createElement("th",{className:"text-center"},"Rp"),m.a.createElement("th",{className:"text-center"},"MDR"))),m.a.createElement("tbody",null,this.state.dataDetail2.map((function(e){return m.a.createElement("tr",null,m.a.createElement("td",{className:"text-center"},e.trayek),m.a.createElement("td",{className:"text-center"},e.pnpTap),m.a.createElement("td",{className:"text-right"},t.format(e.jumlahTap)),m.a.createElement("td",{className:"text-right"},t.format(e.mdrTap)),m.a.createElement("td",{className:"text-center"},e.pnpQRIS),m.a.createElement("td",{className:"text-right"},t.format(e.jumlahQRIS)),m.a.createElement("td",{className:"text-right"},t.format(e.mdrQRIS)))})))))),m.a.createElement(v.a,null,m.a.createElement(p.a,{color:"primary",onClick:this.closeModal},"Tutup"))))}}]),a}(s.Component),S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).endpointPo=function(){i.a.get("/admin/po/getAll").then((function(e){l.setState({dataPo:e.data})}))},l.OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({idPo:e.value})},l.handleChangeStartDate=function(e){l.setState({startDate:e})},l.getDataTransaksi=function(e){e.preventDefault();var t=d()(l.state.startDate).format("YYYY-MM-DD");i.a.get("/admin/transaksi/nontunai/laporan?idPo="+l.state.idPo+"&tanggal="+t).then((function(e){0!==e.data.length?l.setState({dataIsi:!0,dataSettlement:e.data}):l.setState({dataKosong:!0})}))},l.state={dataKosong:!1,dataIsi:!1,startDate:"",dataPo:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.endpointPo()}},{key:"render",value:function(){var e=this;return this.state.dataKosong?m.a.createElement(P,{id:this.state.idProvinsi}):this.state.dataIsi?m.a.createElement(D,{dataSettlement:this.state.dataSettlement,idPo:this.state.idPo,tglAwal:this.state.startDate}):m.a.createElement("div",{className:"content-wrapper"},m.a.createElement("div",{className:"content-header"},m.a.createElement("div",{className:"container-fluid header-fluid"},m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("ol",{className:"breadcrumb float-sm-left"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"# "},m.a.createElement("b",null,"Home"))),m.a.createElement("li",{className:"breadcrumb-item active"},m.a.createElement("b",null,"Settlement"))))))),m.a.createElement("section",{className:"content"},m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-2"},m.a.createElement(u.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(t){return e.OptionPo(t)}))}),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-md-2"},m.a.createElement(E.a,{className:"form-control",placeholderText:"Tanggal",selected:this.state.startDate,onChange:this.handleChangeStartDate}),m.a.createElement("br",null),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-md-3"},m.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.getDataTransaksi},m.a.createElement("i",{className:"fa fa-search"})))))))))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=39.8fc49f0c.chunk.js.map
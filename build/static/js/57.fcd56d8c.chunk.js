(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[57],{327:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(11),r=t(12),l=t(14),i=t(13),s=t(0),o=t.n(s),c=t(37),d=t(33),h=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).OptionTrayek=function(e){return{value:e.idTrayek,label:e.nama}},r.handleChangeTrayek=function(e){r.setState({idTrayek:e.value}),d.a.get("admin/bumeltrayek/tarif/"+e.value).then((function(e){console.log(e.data),r.setState({dataArahTrayek:e.data})}))},r.OptionArahTrayek=function(e){return{value:e.idTrayekTarif,label:e.lokasiAwalNama+" - "+e.lokasiAkhirNama}},r.handleChangeArahTrayek=function(e){r.setState({selectedArahTrayek:e.value})},r.OptionTypeBus=function(e){return{value:e.id,label:e.nama}},r.handleChangeTypeBus=function(e){r.setState({selectedTypebus:e.value}),d.a.get("/id/co/bisku/payload/sap/material?group="+e.value).then((function(e){r.setState({dataMaterial:e.data.trayek})}))},r.OptionPriceCode=function(e){return{value:e.PRICECODE,label:e.DESCRIPTION}},r.handleChangeTrayekPriceCode=function(e){r.setState({priceCode:e.value})},r.handleChangePo=function(e){r.setState({idPo:e.target.value},(function(){console.log(r.state.idPo)}))},r.state={fields:{},errors:{},selectedTypebus:"",dataPo:[],dataTrayek:[],dataArahTrayek:[],dataMaterial:[],dataTypeBus:[{id:"JA",nama:"JAC"},{id:"JR",nama:"JRC"},{id:"JG",nama:"TJR"}]},r}return Object(r.a)(t,[{key:"handleValidation",value:function(){var e=this.state.fields,a=this.state.idTrayek,t=this.state.selectedArahTrayek,n=this.state.selectedTypebus,r=this.state.priceCode,l={},i=!0;return a||(i=!1,l.idTrayek="Tidak boleh kosong"),t||(i=!1,l.arahTrayek="Tidak boleh kosong"),e.trayek||(i=!1,l.trayek="Tidak boleh kosong"),e.tanggalAwal||(i=!1,l.tanggalAwal="Tidak boleh kosong"),e.tanggalAkhir||(i=!1,l.tanggalAkhir="Tidak boleh kosong"),e.nominal||(i=!1,l.nominal="Tidak boleh kosong"),n||(i=!1,l.idTypeBus="Tidak boleh kosong"),r||(i=!1,l.priceCode="Tidak boleh kosong"),this.setState({errors:l}),i}},{key:"handleChange",value:function(e,a){var t=this.state.fields;t[e]=a.target.value,this.setState({fields:t})}},{key:"componentDidMount",value:function(){this.endpointPo(),this.endpointTrayek()}},{key:"endpointPo",value:function(){var e=this;d.a.get("/admin/po/getAll").then((function(a){e.setState({dataPo:a.data})})).catch((function(e){alert("error")}))}},{key:"endpointTrayek",value:function(){var e=this;d.a.get("/admin/bumeltrayek/List/Po/1").then((function(a){e.setState({dataTrayek:a.data})})).catch((function(e){alert("error")}))}},{key:"tambahData",value:function(e){e.preventDefault();var a={idTrayek:this.state.idTrayek,idTrayekTarif:this.state.selectedArahTrayek,nominal:this.state.fields.nominal,priceCode:this.state.priceCode,tanggalAwal:this.state.fields.tanggalAwal,tanggalAkhir:this.state.fields.tanggalAkhir,trayek:this.state.fields.trayek};this.handleValidation()&&d.a.post("/admin/sap/price/change",a).then((function(e){console.log(e),alert("Berhasil")})).catch((function(e){alert("error")}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("div",{className:"content-header"},o.a.createElement("div",{className:"container-fluid header-fluid"},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("ol",{className:"breadcrumb float-sm-left"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"# "},o.a.createElement("b",null,"Home"))),o.a.createElement("li",{className:"breadcrumb-item active"},o.a.createElement("b",null,"Add Price S.A.P"))))))),o.a.createElement("section",{class:"content"},o.a.createElement("div",{class:"container-fluid"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-md-12"},o.a.createElement("div",{class:"card card-primary"},o.a.createElement("div",{class:"card-header"},o.a.createElement("h3",{class:"card-title"},"Add Price S.A.P")),o.a.createElement("form",{onSubmit:this.tambahData.bind(this)},o.a.createElement("div",{class:"card-body"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Pilih Trayek"),o.a.createElement(c.a,{name:"idTrayek",placeholder:"Pilih Trayek",onChange:this.handleChangeTrayek,options:this.state.dataTrayek.map((function(a){return e.OptionTrayek(a)}))}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.idTrayek," ")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Pilih Arah Trayek"),o.a.createElement(c.a,{name:"idTrayekTarif",placeholder:"Pilih Arah Trayek",onChange:this.handleChangeArahTrayek,options:this.state.dataArahTrayek.map((function(a){return e.OptionArahTrayek(a)}))}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.arahTrayek," ")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Trayek"),o.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange.bind(this,"trayek")}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.trayek," ")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Tanggal Awal"),o.a.createElement("input",{className:"form-control",type:"date",onChange:this.handleChange.bind(this,"tanggalAwal")}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.tanggalAwal," ")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Tanggal Akhir"),o.a.createElement("input",{className:"form-control",type:"date",onChange:this.handleChange.bind(this,"tanggalAkhir")}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.tanggalAkhir," ")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Nominal Harga"),o.a.createElement("input",{className:"form-control",type:"number",onChange:this.handleChange.bind(this,"nominal")}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.nominal," ")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Pilih Type Bus"),o.a.createElement(c.a,{name:"typeBus",placeholder:"Pilih Type Bus",onChange:this.handleChangeTypeBus,options:this.state.dataTypeBus.map((function(a){return e.OptionTypeBus(a)}))}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.idTypeBus," ")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Price Code (S.A.P)"),o.a.createElement(c.a,{name:"priceCode",placeholder:"Pilih Trayek (Price Code)",onChange:this.handleChangeTrayekPriceCode,options:this.state.dataMaterial.map((function(a){return e.OptionPriceCode(a)}))}),o.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.priceCode," "))),o.a.createElement("div",{class:"card-footer"},o.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Tambah")))))))))}}]),t}(s.Component)},33:function(e,a,t){"use strict";var n=t(36),r=t.n(n),l=localStorage.getItem("token"),i=r.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+l}});a.a=i}}]);
//# sourceMappingURL=57.fcd56d8c.chunk.js.map
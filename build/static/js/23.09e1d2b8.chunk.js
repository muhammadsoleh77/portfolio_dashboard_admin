(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[23],{311:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));var n=t(38),i=t(11),l=t(12),r=t(14),s=t(13),o=t(0),d=t.n(o),h=t(37),c=t(33),m=function(a){Object(r.a)(t,a);var e=Object(s.a)(t);function t(a){var l;return Object(i.a)(this,t),(l=e.call(this,a)).handleChangeBandara=function(a){l.setState(Object(n.a)({},a.target.name,!l.state.isBandara))},l.handleChangeTempatBerangkat=function(a){l.setState(Object(n.a)({},a.target.name,!l.state.tempatBerangkat))},l.handleChange=function(a){l.setState(Object(n.a)({},a.target.name,a.target.value))},l.dropdownChanged=function(a){l.setState(Object(n.a)({},a.target.name,a.target.value)),l.getLokasi(a.target.value)},l.OptionPo=function(a){return{value:a.idPo,label:a.nama}},l.handleChangePo=function(a){l.setState({idPo:a.value})},l.OptionWilayah=function(a){return{value:a.id,label:a.namaWilayah}},l.handleChangeWilayah=function(a){l.setState({idWilayah:a.value}),l.getLokasi(a.value)},l.OptionLokasi=function(a){return{value:a.id,label:a.namaLokasi}},l.handleChangeLokasi=function(a){l.setState({idLokasi:a.value})},l.OptionShelter=function(a){return{value:a.id,label:a.namaShelter}},l.handleChangeShelter=function(a){l.setState({idShelter:a.value})},l.OptionJenis=function(a){return{value:a.id,label:a.namaJenis}},l.handleChangeJenis=function(a){l.setState({jenis:a.value})},l.OptionTypeBus=function(a){return{value:a.id,label:a.namaType}},l.handleChangeTypeBus=function(a){l.setState({typeBus:a.value})},l.state={fields:{},errors:{},dataPo:[],dataWilayah:[],dataLokasi:[],isBandara:!1,tempatBerangkat:!1,idWilayah:"",dataShelter:[{id:1,namaShelter:"Terminal 1"},{id:2,namaShelter:"Terminal 2"},{id:3,namaShelter:"Terminal 3"}],dataJenis:[{id:"Loket",namaJenis:"Loket"}],dataTypeBus:[{id:1,namaType:"JAC"},{id:2,namaType:"JRC"},{id:3,namaType:"TJR"}]},l}return Object(l.a)(t,[{key:"handleValidation",value:function(){var a=this.state.fields,e={},t=!0;return a.idPo||(t=!1,e.idPo="Tidak boleh kosong"),a.idShelter||(t=!1,e.idShelter="Tidak boleh kosong"),a.alamat||(t=!1,e.alamat="Tidak boleh kosong"),a.jenis||(t=!1,e.jenis="Tidak boleh kosong"),a.kontakPerson||(t=!1,e.kontakPerson="Tidak boleh kosong"),a.nama||(t=!1,e.nama="Tidak boleh kosong"),a.nomorTelepon||(t=!1,e.nomorTelepon="Tidak boleh kosong"),a.tempatBerangkat||(t=!1,e.tempatBerangkat="Tidak boleh kosong"),a.typeBus||(t=!1,e.typeBus="Tidak boleh kosong"),a.isBandara||(t=!1,e.isBandara="Tidak boleh kosong"),a.tempatBerangkat||(t=!1,e.tempatBerangkat="Tidak boleh kosong"),this.setState({errors:e}),t}},{key:"handleChange",value:function(a,e){var t=this.state.fields;t[a]=e.target.value,this.setState({fields:t})}},{key:"EndpointLoketId",value:function(){var a=this;c.a.get("/admin/loket/"+this.props.match.params.idLoket).then((function(e){a.setState({idPo:e.data.idPo,idWilayah:e.data.idWilayah,idLokasi:e.data.idLokasi,idShelter:e.data.idShelter,isBandara:e.data.isBandara,tempatBerangkat:e.data.tempatBerangkat,nama:e.data.nama,jenis:e.data.jenis,alamat:e.data.alamat,nomorTelepon:e.data.nomorTelepon,kontakPerson:e.data.kontakPerson,typeBus:e.data.typeBus}),a.getLokasi(e.data.idWilayah)}))}},{key:"EndpointPo",value:function(){var a=this;c.a.get("/admin/po/getAll").then((function(e){a.setState({dataPo:e.data})}))}},{key:"EndpointWilayah",value:function(){var a=this;c.a.get("/admin/wilayah/list").then((function(e){a.setState({dataWilayah:e.data})}))}},{key:"componentDidMount",value:function(){this.EndpointLoketId(),this.EndpointPo(),this.EndpointWilayah()}},{key:"getLokasi",value:function(a){var e=this;c.a.get("/admin/lokasi/list/wilayah/"+a).then((function(t){e.setState({idWilayahs:a,dataLokasi:t.data})}))}},{key:"tambahData",value:function(a){var e=this;a.preventDefault();var t={id:this.props.match.params.idLoket,alamat:this.state.alamat,idWilayah:this.state.idWilayah,idLokasi:this.state.idLokasi,idPo:this.state.idPo,idShelter:this.state.idShelter,isBandara:this.state.isBandara,jenis:this.state.jenis,kontakPerson:this.state.kontakPerson,nama:this.state.nama,nomorTelepon:this.state.nomorTelepon,tempatBerangkat:this.state.tempatBerangkat,typeBus:this.state.typeBus};console.log(t),c.a.put("/admin/loket/edit",t).then((function(a){alert("Berhasil Edit data Loket"),e.props.history.push("/entitas/loket")})).catch((function(a){alert("Error")}))}},{key:"render",value:function(){var a=this;return d.a.createElement("div",{className:"content-wrapper"},d.a.createElement("div",{className:"content-header"},d.a.createElement("div",{className:"container-fluid header-fluid"},d.a.createElement("div",{className:"row mb-2"},d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("ol",{className:"breadcrumb float-sm-left"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement("a",{href:"# "},d.a.createElement("b",null,"Home"))),d.a.createElement("li",{className:"breadcrumb-item active"},d.a.createElement("b",null,"Edit Loket"))))))),d.a.createElement("section",{class:"content"},d.a.createElement("div",{class:"container-fluid"},d.a.createElement("div",{class:"row"},d.a.createElement("div",{class:"col-md-12"},d.a.createElement("div",{class:"card card-primary"},d.a.createElement("div",{class:"card-header"},d.a.createElement("h3",{class:"card-title"},"Edit Loket")),d.a.createElement("form",{onSubmit:this.tambahData.bind(this)},d.a.createElement("div",{class:"card-body"},d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Pilih P.O"),d.a.createElement(h.a,{name:"po",placeholder:"Pilih P.O",value:this.state.dataPo.map((function(e){return a.OptionPo(e)})).filter((function(e){return e.value===a.state.idPo})),onChange:this.handleChangePo,options:this.state.dataPo.map((function(e){return a.OptionPo(e)}))})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Pilih Wilayah"),d.a.createElement(h.a,{name:"wilayah",placeholder:"Pilih Wilayah",value:this.state.dataWilayah.map((function(e){return a.OptionWilayah(e)})).filter((function(e){return e.value===a.state.idWilayah})),onChange:this.handleChangeWilayah,options:this.state.dataWilayah.map((function(e){return a.OptionWilayah(e)}))})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Pilih Lokasi"),d.a.createElement(h.a,{name:"lokasi",placeholder:"Pilih Lokasi",value:this.state.dataLokasi.map((function(e){return a.OptionLokasi(e)})).filter((function(e){return e.value===a.state.idLokasi})),onChange:this.handleChangeLokasi,options:this.state.dataLokasi.map((function(e){return a.OptionLokasi(e)}))})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Pilih Shelter"),d.a.createElement(h.a,{name:"shelter",placeholder:"Pilih Shelter",value:this.state.dataShelter.map((function(e){return a.OptionShelter(e)})).filter((function(e){return e.value===a.state.idShelter})),onChange:this.handleChangeShelter,options:this.state.dataShelter.map((function(e){return a.OptionShelter(e)}))})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Jenis"),d.a.createElement(h.a,{name:"jenis",placeholder:"Pilih Jenis",value:this.state.dataJenis.map((function(e){return a.OptionJenis(e)})).filter((function(e){return e.value===a.state.jenis})),onChange:this.handleChangeJenis,options:this.state.dataJenis.map((function(e){return a.OptionJenis(e)}))})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Pilih TypeBus"),d.a.createElement(h.a,{name:"typeBus",placeholder:"Pilih TypeBus",value:this.state.dataTypeBus.map((function(e){return a.OptionTypeBus(e)})).filter((function(e){return e.value===a.state.typeBus})),onChange:this.handleChangeTypeBus,options:this.state.dataTypeBus.map((function(e){return a.OptionTypeBus(e)}))})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Nama Loket"),d.a.createElement("input",{className:"form-control",type:"text",name:"nama",value:this.state.nama,onChange:this.handleChange})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Alamat"),d.a.createElement("input",{className:"form-control",type:"text",name:"alamat",value:this.state.alamat,onChange:this.handleChange})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Telepon Loket"),d.a.createElement("input",{className:"form-control",type:"number",name:"nomorTelepon",value:this.state.nomorTelepon,onChange:this.handleChange})),d.a.createElement("div",{class:"form-group"},d.a.createElement("label",null,"Kontak Person"),d.a.createElement("input",{className:"form-control",type:"number",name:"kontakPerson",value:this.state.kontakPerson,onChange:this.handleChange})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Bandara"),d.a.createElement("div",{className:"radio"},d.a.createElement("input",{type:"radio",name:"isBandara",value:"true",checked:this.state.isBandara,onChange:this.handleChangeBandara})," Ya \xa0\xa0\xa0",d.a.createElement("input",{type:"radio",name:"isBandara",value:"false",checked:!this.state.isBandara,onChange:this.handleChangeBandara})," Tidak \xa0\xa0\xa0"),d.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.isBandara," "),d.a.createElement("br",null)),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Tempat Berangkat"),d.a.createElement("div",{className:"radio"},d.a.createElement("input",{type:"radio",name:"tempatBerangkat",value:"true",checked:this.state.tempatBerangkat,onChange:this.handleChangeTempatBerangkat})," Ya \xa0\xa0\xa0",d.a.createElement("input",{type:"radio",name:"tempatBerangkat",value:"false",checked:!this.state.tempatBerangkat,onChange:this.handleChangeTempatBerangkat})," Tidak \xa0\xa0\xa0"),d.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.tempatBerangkat," "),d.a.createElement("br",null))),d.a.createElement("div",{class:"card-footer"},d.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Edit")))))))))}}]),t}(o.Component)},33:function(a,e,t){"use strict";var n=t(36),i=t.n(n),l=localStorage.getItem("token"),r=i.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+l}});e.a=r},38:function(a,e,t){"use strict";function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}t.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=23.09e1d2b8.chunk.js.map
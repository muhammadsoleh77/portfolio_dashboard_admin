(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[44],{308:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t(11),l=t(12),i=t(14),o=t(13),s=t(0),r=t.n(s),c=t(37),m=t(33),d=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).inputFileLogo=function(){void 0!==l.fileInputLogo.current&&void 0!==l.fileInputLogo.current.click&&l.fileInputLogo.current.click()},l.dropdownChanged=function(e){var a=e.target.value;m.a.get("/admin/lokasi/list/wilayah/"+a).then((function(e){l.setState({idWilayah:a,dataLokasi:e.data})}))},l.OptionWilayah=function(e){return{value:e.id,label:e.namaWilayah}},l.handleChangeWilayah=function(e){m.a.get("/admin/lokasi/list/wilayah/"+e.value).then((function(a){console.log(a),l.setState({idWilayah:e.value,dataLokasi:a.data})}))},l.OptionLokasi=function(e){return{value:e.id,label:e.namaLokasi}},l.handleChangeLokasi=function(e){l.setState({idLokasi:e.value})},l.getInitialState=function(){return{file:[]}},l.onChangeLogo=function(e){l.setState({imgLogo:e.target.files[0]})},l.handleChangeSelect=function(e){l.setState({po:e})},l.fileInputLogo=r.a.createRef(),l.state={value:"",label:"",fields:{},errors:{},dataPo:[],dataWilayah:[],dataLokasi:[],options:[],idPo:"",dataArray:[],selectedOptions:[],valuePo:[],values:""},l}return Object(l.a)(t,[{key:"handleValidation",value:function(){var e=this.state.fields,a={},t=!0;return e.namaAgen||(t=!1,a.namaAgen="Tidak boleh kosong"),e.nomorTelpon||(t=!1,a.nomorTelpon="Tidak boleh kosong"),e.longitude||(t=!1,a.longitude="Tidak boleh kosong"),e.latitude||(t=!1,a.latitude="Tidak boleh kosong"),e.status||(t=!1,a.status="Tidak boleh kosong"),e.tempatBerangkat||(t=!1,a.tempatBerangkat="Tidak boleh kosong"),this.setState({errors:a}),t}},{key:"EndpointPo",value:function(){var e=this;m.a.get("/admin/po/getAll").then((function(a){e.setState({dataPo:a.data})}))}},{key:"EndpointWilayah",value:function(){var e=this;m.a.get("/admin/wilayah/list").then((function(a){e.setState({dataWilayah:a.data})}))}},{key:"componentDidMount",value:function(){this.EndpointPo(),this.EndpointWilayah()}},{key:"MakeOption",value:function(e){return{value:e.idPo,label:e.nama}}},{key:"handleInputChange",value:function(e,a){"input-change"===a.action&&this.setState({value:e}),console.log(a)}},{key:"tambahData",value:function(e){var a=this;e.preventDefault();var t=new FormData;t.append("idLokasi",this.state.idLokasi),t.append("idWilayah",this.state.idWilayah),t.append("latitude",this.state.fields.latitude),this.state.imgLogo&&t.append("logo",this.state.imgLogo),t.append("longitude",this.state.fields.longitude),t.append("namaAgen",this.state.fields.namaAgen),t.append("nomorTelpon",this.state.fields.nomorTelpon),this.state.po&&this.state.po.forEach((function(e){t.append("po",JSON.stringify(e.value))})),t.append("status",this.state.fields.status),t.append("tempatBerangkat",this.state.fields.tempatBerangkat),this.handleValidation()&&Object(m.a)({method:"post",url:"/admin/agen/add",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),alert("Berhasil tambah data"),a.props.history.push("/entitas/agen")})).catch((function(e){alert("error"),console.log(e)}))}},{key:"handleChange",value:function(e,a){var t=this.state.fields;t[e]=a.target.value,this.setState({fields:t})}},{key:"render",value:function(){var e=this,a=[];a=a.concat(this.state.dataPo.map((function(e){return e})));var t=this.state.selectedOption;return console.log(this.state.po),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"container-fluid header-fluid"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("ol",{className:"breadcrumb float-sm-left"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"# "},r.a.createElement("b",null,"Home"))),r.a.createElement("li",{className:"breadcrumb-item active"},r.a.createElement("b",null,"Tambah Agen"))))))),r.a.createElement("section",{class:"content"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"card card-primary"},r.a.createElement("div",{class:"card-header"},r.a.createElement("h3",{class:"card-title"},"Tambah Agen")),r.a.createElement("form",{onSubmit:this.tambahData.bind(this)},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih P.O"),r.a.createElement(c.a,{isMulti:!0,name:"po",value:t,onChange:this.handleChangeSelect,closeMenuOnSelect:!1,options:a.map((function(a){return e.MakeOption(a)}))})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih Wilayah"),r.a.createElement(c.a,{name:"wilayah",placeholder:"Pilih Wilayah",onChange:this.handleChangeWilayah,options:this.state.dataWilayah.map((function(a){return e.OptionWilayah(a)}))})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih Lokasi"),r.a.createElement(c.a,{name:"lokasi",placeholder:" Pilih Lokasi",onChange:this.handleChangeLokasi,options:this.state.dataLokasi.map((function(a){return e.OptionLokasi(a)}))})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Nama Agen"),r.a.createElement("input",{className:"form-control",type:"text",name:"namaAgen",onChange:this.handleChange.bind(this,"namaAgen")}),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.namaAgen," "),r.a.createElement("br",null)),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"No. Telepon"),r.a.createElement("input",{className:"form-control",type:"number",name:"nomorTelpon",onChange:this.handleChange.bind(this,"nomorTelpon")}),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.nomorTelpon," "),r.a.createElement("br",null)),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Longitude"),r.a.createElement("input",{className:"form-control",type:"text",name:"longitude",onChange:this.handleChange.bind(this,"longitude")}),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.longitude," "),r.a.createElement("br",null)),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Latitude"),r.a.createElement("input",{className:"form-control",type:"text",name:"latitude",onChange:this.handleChange.bind(this,"latitude")}),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.latitude," "),r.a.createElement("br",null)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Status Aktif"),r.a.createElement("div",{className:"radio"},r.a.createElement("input",{type:"radio",name:"status",value:"true",onChange:this.handleChange.bind(this,"status")})," Ya \xa0\xa0\xa0",r.a.createElement("input",{type:"radio",name:"status",value:"false",onChange:this.handleChange.bind(this,"status")})," Tidak \xa0\xa0\xa0"),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.status," "),r.a.createElement("br",null)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Tempat Berangkat"),r.a.createElement("div",{className:"radio"},r.a.createElement("input",{type:"radio",name:"tempatBerangkat",value:"true",onChange:this.handleChange.bind(this,"tempatBerangkat")})," Ya \xa0\xa0\xa0",r.a.createElement("input",{type:"radio",name:"tempatBerangkat",value:"false",onChange:this.handleChange.bind(this,"tempatBerangkat")})," Tidak \xa0\xa0\xa0"),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.tempatBerangkat," "),r.a.createElement("br",null)),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih Logo"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"}),r.a.createElement("div",{className:"col-4 text-center"},this.state.imgLogo&&[this.state.imgLogo].map((function(e){return r.a.createElement("img",{src:URL.createObjectURL(e),alt:"",width:"150",height:"50"})})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"btn btn-dark",onClick:function(){return e.inputFileLogo()}},"Upload Logo"),r.a.createElement("input",{ref:this.fileInputLogo,type:"file",onChange:this.onChangeLogo,hidden:!0})),r.a.createElement("div",{className:"col-4"})))),r.a.createElement("div",{class:"card-footer"},r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Tambah")))))))))}}]),t}(s.Component)},33:function(e,a,t){"use strict";var n=t(36),l=t.n(n),i=localStorage.getItem("token"),o=l.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+i}});a.a=o}}]);
//# sourceMappingURL=44.6ff4b005.chunk.js.map
(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[43],{33:function(e,a,t){"use strict";var n=t(36),l=t.n(n),c=localStorage.getItem("token"),r=l.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+c}});a.a=r},342:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(11),l=t(12),c=t(14),r=t(13),s=t(0),i=t.n(s),m=t(37),o=t(15),d=t(33),u=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={dataPo:[],dataIsi:!1,dataKosong:!1},e.MakeOption=function(e){return{value:e.idPo,label:e.nama}},e.handleChangeSelect=function(a){e.setState({selectedId:a.value})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/admin/po/getAll").then((function(a){console.log(a),e.setState({dataPo:a.data})}))}},{key:"dropdownChanged",value:function(e){this.setState({selectedId:e.target.value})}},{key:"onClickOption",value:function(e){var a=this,t={idPo:e,orderBy:"id",pageNo:0,pageRow:100};d.a.post("/admin/agen/list",t).then((function(e){a.setState({dataIsi:!0,dataAgen:e.data.content})})).catch((function(e){a.setState({dataKosong:!0})}))}},{key:"hapusAgen",value:function(e){d.a.delete("/admin/agen/"+e+"/delete").then((function(e){console.log(e),alert("Berhasil Hapus Agen"),window.location.reload(!0)})).catch((function(e){console.log(e),alert("Error")}))}},{key:"render",value:function(){var e=this,a=this.props.dataAgen;return this.state.dataKosong?i.a.createElement(E,null):this.state.dataIsi?i.a.createElement(t,{dataAgen:this.state.dataAgen,dataPo:this.state.dataPo}):i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"List Agen"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(o.b,{className:"btn btn-primary pull-right",to:"/entitas/tambahAgen",style:{marginLeft:"auto"}},i.a.createElement("i",{className:"fa fa-plus"})," Tambah Agen")),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement(m.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangeSelect,options:this.state.dataPo.map((function(a){return e.MakeOption(a)}))}),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return e.onClickOption(e.state.selectedId)}},i.a.createElement("i",{className:"fa fa-search"})),i.a.createElement("br",null),i.a.createElement("br",null))),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-bordered table-hover text-nowrap"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center",style:{width:"1%"}},"ID"),i.a.createElement("th",{className:"text-center",style:{width:"10%"}},"Nama Agen"),i.a.createElement("th",{className:"text-center",style:{width:"10%"}},"No. Telepon"),i.a.createElement("th",{className:"text-center",style:{width:"10%"}},"Aksi"))),i.a.createElement("tbody",null,a.map((function(a){return i.a.createElement("tr",{key:a.id},i.a.createElement("td",{className:"text-center"},a.id),i.a.createElement("td",{className:"text-center"},a.namaAgen),i.a.createElement("td",{className:"text-center"},a.nomorTelpon),i.a.createElement("td",null,i.a.createElement("div",{className:"text-center"},i.a.createElement(o.b,{className:"btn btn-warning",to:"/entitas/editAgen/"+a.id},i.a.createElement("i",{className:"fa fa-pencil-alt"})),"\xa0\xa0\xa0",i.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.hapusAgen(a.id)}},i.a.createElement("i",{className:"fa fa-trash"})))))}))))))))))))}}]),t}(s.Component),E=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={dataPo:[],dataIsi:!1,dataKosong:!1},e.MakeOption=function(e){return{value:e.idPo,label:e.nama}},e.handleChangeSelect=function(a){e.setState({selectedId:a.value})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/admin/po/getAll").then((function(a){console.log(a),e.setState({dataPo:a.data})}))}},{key:"dropdownChanged",value:function(e){this.setState({selectedId:e.target.value})}},{key:"onClickOption",value:function(e){var a=this,t={idPo:e,orderBy:"id",pageNo:0,pageRow:100};d.a.post("/admin/agen/list",t).then((function(e){a.setState({dataIsi:!0,dataAgen:e.data.content})})).catch((function(e){a.setState({dataKosong:!0})}))}},{key:"render",value:function(){var e=this;return this.state.dataKosong?i.a.createElement(t,null):this.state.dataIsi?i.a.createElement(u,{dataAgen:this.state.dataAgen,dataPo:this.state.dataPo}):i.a.createElement("div",null,i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Agen"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(o.b,{className:"btn btn-primary pull-right",to:"/entitas/tambahAgen",style:{marginLeft:"auto"}},i.a.createElement("i",{className:"fa fa-plus"})," Tambah Agen")),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement(m.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangeSelect,options:this.state.dataPo.map((function(a){return e.MakeOption(a)}))}),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return e.onClickOption(e.state.selectedId)}},i.a.createElement("i",{className:"fa fa-search"})))),i.a.createElement("p",null,i.a.createElement("strong",null,"DATA AGEN KOSONG"))))))))))}}]),t}(s.Component),h=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={dataPo:[],dataIsi:!1,dataKosong:!1},e.MakeOption=function(e){return{value:e.idPo,label:e.nama}},e.handleChangeSelect=function(a){e.setState({selectedId:a.value})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/admin/po/getAll").then((function(a){console.log(a),e.setState({dataPo:a.data})}))}},{key:"dropdownChanged",value:function(e){this.setState({selectedId:e.target.value})}},{key:"onClickOption",value:function(e){var a=this,t={idPo:e,orderBy:"id",pageNo:0,pageRow:100};d.a.post("/admin/agen/list",t).then((function(e){a.setState({dataIsi:!0,dataAgen:e.data.content})})).catch((function(e){a.setState({dataKosong:!0})}))}},{key:"render",value:function(){var e=this;return this.state.dataKosong?i.a.createElement(E,null):this.state.dataIsi?i.a.createElement(u,{dataAgen:this.state.dataAgen,dataPo:this.state.dataPo}):i.a.createElement("div",null,i.a.createElement("div",{className:"content-wrapper"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Agen"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(o.b,{className:"btn btn-primary pull-right",to:"/entitas/tambahAgen",style:{marginLeft:"auto"}},i.a.createElement("i",{className:"fa fa-plus"})," Tambah Agen")),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement(m.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangeSelect,options:this.state.dataPo.map((function(a){return e.MakeOption(a)}))}),i.a.createElement("br",null)),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return e.onClickOption(e.state.selectedId)}},i.a.createElement("i",{className:"fa fa-search"}))))))))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=43.525124bd.chunk.js.map
(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[55],{301:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var s=t(11),n=t(12),r=t(14),l=t(13),i=t(0),c=t.n(i),m=t(33),o=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={fields:{},errors:{}},n}return Object(n.a)(t,[{key:"handleValidation",value:function(){var e=this.state.fields,a={},t=!0;return e.mdrName||(t=!1,a.mdrName="Tidak boleh kosong"),e.keterangan||(t=!1,a.keterangan="Tidak boleh kosong"),e.isCashless||(t=!1,a.isCashless="Tidak boleh kosong"),e.isPercentage||(t=!1,a.isPercentage="Tidak boleh kosong"),e.jmlhMdr||(t=!1,a.jmlhMdr="Tidak boleh kosong"),this.setState({errors:a}),t}},{key:"tambahData",value:function(e){var a=this;e.preventDefault();var t={isCashless:this.state.fields.isCashless,isPercentage:this.state.fields.isPercentage,jmlhMdr:this.state.fields.jmlhMdr,keterangan:this.state.fields.keterangan,mdrName:this.state.fields.mdrName,isValid:!0};this.handleValidation()&&m.a.post("/admin/channel/add",t).then((function(e){alert("Berhasil tambah data"),a.props.history.push("/pengaturan/channel")}))}},{key:"handleChange",value:function(e,a){var t=this.state.fields;t[e]=a.target.value,this.setState({fields:t})}},{key:"render",value:function(){return c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"content-header"},c.a.createElement("div",{className:"container-fluid header-fluid"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("ol",{className:"breadcrumb float-sm-left"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"# "},c.a.createElement("b",null,"Home"))),c.a.createElement("li",{className:"breadcrumb-item active"},c.a.createElement("b",null,"Tambah Channel"))))))),c.a.createElement("section",{class:"content"},c.a.createElement("div",{class:"container-fluid"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-12"},c.a.createElement("div",{class:"card card-primary"},c.a.createElement("div",{class:"card-header"},c.a.createElement("h3",{class:"card-title"},"Tambah Channel")),c.a.createElement("form",{onSubmit:this.tambahData.bind(this)},c.a.createElement("div",{class:"card-body"},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Nama MDR"),c.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange.bind(this,"mdrName")}),c.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.mdrName," ")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Keterangan"),c.a.createElement("input",{className:"form-control",type:"text",onChange:this.handleChange.bind(this,"keterangan")}),c.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.keterangan," ")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Cashless"),c.a.createElement("div",{className:"radio"},c.a.createElement("input",{type:"radio",name:"isCashless",value:"true",onChange:this.handleChange.bind(this,"isCashless")})," Ya \xa0\xa0\xa0",c.a.createElement("input",{type:"radio",name:"isCashless",value:"false",onChange:this.handleChange.bind(this,"isCashless")})," Tidak \xa0\xa0\xa0"),c.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.isCashless," ")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Presentasi"),c.a.createElement("div",{className:"radio"},c.a.createElement("input",{type:"radio",name:"isPercentage",value:"true",onChange:this.handleChange.bind(this,"isPercentage")})," Ya \xa0\xa0\xa0",c.a.createElement("input",{type:"radio",name:"isPercentage",value:"false",onChange:this.handleChange.bind(this,"isPercentage")})," Tidak \xa0\xa0\xa0"),c.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.isPercentage," ")),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",null,"Jumlah MDR"),c.a.createElement("input",{className:"form-control",type:"number",onChange:this.handleChange.bind(this,"jmlhMdr")}),c.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.jmlhMdr," "))),c.a.createElement("div",{class:"card-footer"},c.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Tambah")))))))))}}]),t}(i.Component)},33:function(e,a,t){"use strict";var s=t(36),n=t.n(s),r=localStorage.getItem("token"),l=n.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+r}});a.a=l}}]);
//# sourceMappingURL=55.3af37515.chunk.js.map
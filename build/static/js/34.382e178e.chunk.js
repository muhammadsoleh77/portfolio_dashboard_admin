(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[34],{297:function(e,a,t){"use strict";t.r(a),t.d(a,"TambahWilayah",(function(){return u}));var n=t(38),r=t(11),c=t(12),l=t(14),s=t(13),i=t(0),m=t.n(i),o=t(33),u=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={nama:""},e.handleChange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t={idProvinsi:e.props.match.params.id,namaWilayah:e.state.nama};o.a.post("/admin/wilayah/add",t).then((function(a){alert(a.data.message),e.props.history.push("/pengaturan/wilayah")})).catch((function(a){alert("Internal Server Error"),e.props.history.push("/pengaturan/wilayah")}))},e}return Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"content-wrapper"},m.a.createElement("div",{className:"content-header"},m.a.createElement("div",{className:"container-fluid header-fluid"},m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("ol",{className:"breadcrumb float-sm-left"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"# "},m.a.createElement("b",null,"Home"))),m.a.createElement("li",{className:"breadcrumb-item active"},m.a.createElement("b",null,"Tambah Wilayah"))))))),m.a.createElement("section",{class:"content"},m.a.createElement("div",{class:"container-fluid"},m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-md-12"},m.a.createElement("div",{class:"card card-primary"},m.a.createElement("div",{class:"card-header"},m.a.createElement("h3",{class:"card-title"},"Tambah Wilayah")),m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",{class:"card-body"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",null,"Nama Wilayah"),m.a.createElement("input",{className:"form-control",type:"text",name:"nama",value:this.state.nama,onChange:this.handleChange}))),m.a.createElement("div",{class:"card-footer"},m.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Tambah")))))))))}}]),t}(i.Component);a.default=u},33:function(e,a,t){"use strict";var n=t(36),r=t.n(n),c=localStorage.getItem("token"),l=r.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+c}});a.a=l},38:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=34.382e178e.chunk.js.map
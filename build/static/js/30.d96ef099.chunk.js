(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[30],{298:function(e,a,t){"use strict";t.r(a),t.d(a,"EditLokasi",(function(){return d}));var n=t(38),r=t(11),c=t(12),i=t(14),s=t(13),l=t(0),o=t.n(l),m=t(33),d=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=a.call.apply(a,[this].concat(i))).state={id:"",namaLokasi:""},e.componentDidMount=function(){var a=e.props.match.params.idLok;m.a.get("/admin/lokasi/"+a).then((function(a){e.setState({id:a.data.id,namaLokasi:a.data.namaLokasi})}))},e.handleChange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t={idLokasi:e.props.match.params.idLok,idWilayah:e.props.match.params.idWil,namaLokasi:e.state.namaLokasi};m.a.put("/admin/lokasi/edit",t).then((function(a){alert(a.data.message),e.props.history.push("/pengaturan/lokasi")}))},e}return Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("div",{className:"content-header"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("ol",{className:"breadcrumb float-sm-left"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"# "},o.a.createElement("b",null,"Home"))),o.a.createElement("li",{className:"breadcrumb-item active"},o.a.createElement("b",null,"Edit Wilayah"))))))),o.a.createElement("section",{class:"content"},o.a.createElement("div",{class:"container-fluid"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-md-12"},o.a.createElement("div",{class:"card card-primary"},o.a.createElement("div",{class:"card-header"},o.a.createElement("h3",{class:"card-title"},"Edit Lokasi")),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{class:"card-body"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Nama Lokasi"),o.a.createElement("input",{className:"form-control",type:"text",name:"namaLokasi",value:this.state.namaLokasi,onChange:this.handleChange,placeholder:"Input Lokasi"}))),o.a.createElement("div",{class:"card-footer"},o.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Edit")))))))))}}]),t}(l.Component);a.default=d},33:function(e,a,t){"use strict";var n=t(36),r=t.n(n),c=localStorage.getItem("token"),i=r.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+c}});a.a=i},38:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=30.d96ef099.chunk.js.map
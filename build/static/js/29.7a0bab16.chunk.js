(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[29],{300:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(38),s=t(11),r=t(12),l=t(14),c=t(13),i=t(0),m=t.n(i),d=t(33),h=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={id:"",isCashless:!1,isPercentage:!1,isValid:"",jmlhMdr:"",keterangan:"",mdrName:""},e.componentDidMount=function(){var a=e.props.match.params.idChannel;d.a.get("/admin/channel/"+a).then((function(a){console.log(a),e.setState({id:a.data.id,isCashless:a.data.isCashless,isPercentage:a.data.isPercentage,isValid:a.data.isValid,jmlhMdr:a.data.jmlhMdr,keterangan:a.data.keterangan,mdrName:a.data.mdrName})}))},e.handleChange=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleChangeCashless=function(a){e.setState(Object(n.a)({},a.target.name,!e.state.isCashless))},e.handleChangePrecentage=function(a){e.setState(Object(n.a)({},a.target.name,!e.state.isPercentage))},e.handleSubmit=function(a){a.preventDefault();var t={id:e.props.match.params.idChannel,isCashless:e.state.isCashless,isPercentage:e.state.isPercentage,isValid:e.state.isValid,jmlhMdr:e.state.jmlhMdr,keterangan:e.state.keterangan,mdrName:e.state.mdrName};d.a.put("/admin/channel/edit",t).then((function(a){console.log(a),alert(a.data.message),e.props.history.push("/pengaturan/channel")})).catch((function(e){alert("Error, harap input semua data")}))},e}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"content-wrapper"},m.a.createElement("div",{className:"content-header"},m.a.createElement("div",{className:"container-fluid header-fluid"},m.a.createElement("div",{className:"row mb-2"},m.a.createElement("div",{className:"col-sm-6"},m.a.createElement("ol",{className:"breadcrumb float-sm-left"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement("a",{href:"# "},m.a.createElement("b",null,"Home"))),m.a.createElement("li",{className:"breadcrumb-item active"},m.a.createElement("b",null,"Edit Channel"))))))),m.a.createElement("section",{class:"content"},m.a.createElement("div",{class:"container-fluid"},m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-md-12"},m.a.createElement("div",{class:"card card-primary"},m.a.createElement("div",{class:"card-header"},m.a.createElement("h3",{class:"card-title"},"Edit Channel")),m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",{class:"card-body"},m.a.createElement("div",{class:"form-group"},m.a.createElement("label",null,"Nama MDR"),m.a.createElement("input",{className:"form-control",name:"mdrName",type:"text",value:this.state.mdrName,onChange:this.handleChange})),m.a.createElement("div",{class:"form-group"},m.a.createElement("label",null,"Keterangan"),m.a.createElement("input",{className:"form-control",name:"keterangan",type:"text",value:this.state.keterangan,onChange:this.handleChange})),m.a.createElement("div",{class:"form-group"},m.a.createElement("label",null,"Cashless"),m.a.createElement("div",{className:"radio"},m.a.createElement("input",{type:"radio",name:"isCashless",value:"true",checked:this.state.isCashless,onChange:this.handleChangeCashless})," Ya \xa0\xa0\xa0",m.a.createElement("input",{type:"radio",name:"isCashless",value:"false",checked:!this.state.isCashless,onChange:this.handleChangeCashless})," Tidak \xa0\xa0\xa0")),m.a.createElement("div",{class:"form-group"},m.a.createElement("label",null,"Presentasi"),m.a.createElement("div",{className:"radio"},m.a.createElement("input",{type:"radio",name:"isPercentage",value:"true",checked:this.state.isPercentage,onChange:this.handleChangePrecentage})," Ya \xa0\xa0\xa0",m.a.createElement("input",{type:"radio",name:"isPercentage",value:"false",checked:!this.state.isPercentage,onChange:this.handleChangePrecentage})," Tidak \xa0\xa0\xa0")),m.a.createElement("div",{class:"form-group"},m.a.createElement("label",null,"Jumlah MDR"),m.a.createElement("input",{className:"form-control",type:"number",name:"jmlhMdr",value:this.state.jmlhMdr,onChange:this.handleChange}))),m.a.createElement("div",{class:"card-footer"},m.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Edit")))))))))}}]),t}(i.Component)},33:function(e,a,t){"use strict";var n=t(36),s=t.n(n),r=localStorage.getItem("token"),l=s.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+r}});a.a=l},38:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=29.7a0bab16.chunk.js.map
(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[51],{33:function(e,a,t){"use strict";var n=t(36),l=t.n(n),s=localStorage.getItem("token"),c=l.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+s}});a.a=c},345:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(11),l=t(12),s=t(14),c=t(13),i=t(0),o=t.n(i),r=t(37),m=t(15),d=t(70),u=t.n(d),h=(t(22),t(33)),E=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({selectedIdPo:e.value})},l.state={dataKosong:!1,dataIsi:!1,dataPo:[],dataBus:[],idPo:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.EndpointPo()}},{key:"EndpointPo",value:function(){var e=this;h.a.get("/admin/po/getAll").then((function(a){e.setState({dataPo:a.data})}))}},{key:"dropdownChanged",value:function(e){this.setState({selectedIdPo:e.target.value})}},{key:"onClickOption",value:function(e){var a=this,t={idPo:e,orderBy:"id",pageNo:0,pageRow:100};h.a.post("/admin/bus/list",t).then((function(t){a.setState({dataIsi:!0,dataBus:t.data.content,idPo:e})})).catch((function(t){a.setState({dataKosong:!0,idPo:e})}))}},{key:"hapusBus",value:function(e){u.a.fire({title:"Yakin Hapus data?",text:"Data terhapus tidak dapat dikembalikan!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, hapus!"}).then((function(a){a.value&&h.a.delete("/admin/bus/"+e+"/delete").then((function(e){u.a.fire("Terhapus!",e.data.message,"success")})).then((function(){window.location.reload()})).catch((function(e){u.a.fire("Error!","Terjadi Kesalahan","error")}))}))}},{key:"render",value:function(){var e=this,a=this.props.dataBus;return this.state.dataKosong?o.a.createElement(b,{idPo:this.state.idPo}):this.state.dataIsi?o.a.createElement(t,{dataBus:this.state.dataBus,dataPo:this.state.dataPo,idPo:this.state.idPo}):o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("div",{className:"content-header"},o.a.createElement("div",{className:"container-fluid header-fluid"},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("ol",{className:"breadcrumb float-sm-left"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"# "},o.a.createElement("b",null,"Home"))),o.a.createElement("li",{className:"breadcrumb-item active"},o.a.createElement("b",null,"List Bus"))))))),o.a.createElement("section",{className:"content"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(m.b,{className:"btn btn-primary",to:"/manajemenPo/tambahBus",style:{marginLeft:"auto"}},o.a.createElement("i",{className:"fa fa-plus"})," Tambah Bus")),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"},o.a.createElement(r.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))}),o.a.createElement("br",null)),o.a.createElement("div",{className:"col-md-3"},o.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return e.onClickOption(e.state.selectedIdPo)}},o.a.createElement("i",{className:"fa fa-search"})),o.a.createElement("br",null),o.a.createElement("br",null))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-bordered table-hover text-nowrap"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"text-center",style:{width:"1%"}},"ID"),o.a.createElement("th",{className:"text-center",style:{width:"10%"}},"Produk Bus"),o.a.createElement("th",{className:"text-center",style:{width:"10%"}},"Aksi"))),o.a.createElement("tbody",null,a.map((function(a,t){return o.a.createElement("tr",{key:a.id},o.a.createElement("td",{className:"text-center"},a.idBus),o.a.createElement("td",{className:"text-center"},a.id),o.a.createElement("td",null,o.a.createElement("div",{className:"text-center"},o.a.createElement(m.b,{className:"btn btn-warning",to:"/manajemenPo/editBus/"+a.idBus},o.a.createElement("i",{className:"fa fa-pencil-alt"})),"\xa0\xa0\xa0",o.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.hapusBus(a.idBus)}},o.a.createElement("i",{className:"fa fa-trash"})))))}))))))))))))}}]),t}(i.Component),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({selectedIdPo:e.value})},l.state={dataKosong:!1,dataIsi:!1,dataPo:[],idPo:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.EndpointPo()}},{key:"EndpointPo",value:function(){var e=this;h.a.get("/admin/po/getAll").then((function(a){e.setState({dataPo:a.data})}))}},{key:"dropdownChanged",value:function(e){this.setState({selectedIdPo:e.target.value})}},{key:"onClickOption",value:function(e){var a=this,t={idPo:e,orderBy:"id",pageNo:0,pageRow:100};h.a.post("/admin/bus/list",t).then((function(t){a.setState({dataIsi:!0,dataBus:t.data.content,idPo:e})})).catch((function(t){a.setState({dataKosong:!0,idPo:e})}))}},{key:"render",value:function(){var e=this;return this.state.dataKosong?o.a.createElement(t,{idPo:this.state.idPo}):this.state.dataIsi?o.a.createElement(E,{dataBus:this.state.dataBus,dataPo:this.state.dataPo,idPo:this.state.idPo}):o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("div",{className:"content-header"},o.a.createElement("div",{className:"container-fluid header-fluid"},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("ol",{className:"breadcrumb float-sm-left"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"# "},o.a.createElement("b",null,"Home"))),o.a.createElement("li",{className:"breadcrumb-item active"},o.a.createElement("b",null,"List Bus"))))))),o.a.createElement("section",{className:"content"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(m.b,{className:"btn btn-primary",to:"/manajemenPo/tambahBus",style:{marginLeft:"auto"}},o.a.createElement("i",{className:"fa fa-plus"})," Tambah Bus")),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"},o.a.createElement(r.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))})),o.a.createElement("div",{className:"col-md-3"},o.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return e.onClickOption(e.state.selectedIdPo)}},o.a.createElement("i",{className:"fa fa-search"})))),o.a.createElement("p",null,o.a.createElement("strong",null,"DATA BUS KOSONG")))))))))}}]),t}(i.Component),f=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).OptionPo=function(e){return{value:e.idPo,label:e.nama}},l.handleChangePo=function(e){l.setState({selectedIdPo:e.value})},l.state={dataPo:[],idPo:"",dataIsi:!1,dataKosong:!1},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.EndpointPo()}},{key:"EndpointPo",value:function(){var e=this;h.a.get("/admin/po/getAll").then((function(a){e.setState({dataPo:a.data})}))}},{key:"dropdownChanged",value:function(e){this.setState({selectedIdPo:e.target.value})}},{key:"onClickOption",value:function(e){var a=this,t={idPo:e,orderBy:"id",pageNo:0,pageRow:100};h.a.post("/admin/bus/list",t).then((function(t){a.setState({dataIsi:!0,dataBus:t.data.content,idPo:e})})).catch((function(t){a.setState({dataKosong:!0,idPo:e})}))}},{key:"render",value:function(){var e=this;return this.state.dataKosong?o.a.createElement(b,{idPo:this.state.idPo}):this.state.dataIsi?o.a.createElement(E,{dataBus:this.state.dataBus,dataPo:this.state.dataPo,idPo:this.state.idPo}):o.a.createElement("div",null,o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("div",{className:"content-header"},o.a.createElement("div",{className:"container-fluid header-fluid"},o.a.createElement("div",{className:"row mb-2"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("ol",{className:"breadcrumb float-sm-left"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"# "},o.a.createElement("b",null,"Home"))),o.a.createElement("li",{className:"breadcrumb-item active"},o.a.createElement("b",null,"Bus"))))))),o.a.createElement("section",{className:"content"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(m.b,{className:"btn btn-primary",to:"/manajemenPo/tambahBus",style:{marginLeft:"auto"}},o.a.createElement("i",{className:"fa fa-plus"})," Tambah Bus")),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3"},o.a.createElement(r.a,{name:"po",placeholder:"Pilih P.O",onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))}),o.a.createElement("br",null)),o.a.createElement("div",{className:"col-md-3"},o.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return e.onClickOption(e.state.selectedIdPo)}},o.a.createElement("i",{className:"fa fa-search"}))))))))))))}}]),t}(i.Component)}}]);
//# sourceMappingURL=51.041e70e0.chunk.js.map
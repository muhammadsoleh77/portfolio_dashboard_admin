(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[19],{105:function(e,a,t){"use strict";var n=t(2),r=t(6),l=t(0),s=t.n(l),c=t(7),i=t.n(c),o=t(42),m=t.n(o),d=t(43),u=i.a.oneOfType([i.a.number,i.a.string]),f={tag:d.n,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},v={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,c=e.tag,i=e.form,o=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];o.forEach((function(a,t){var n=e[a];if(delete u[a],n){var r=!t;f.push(r?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var v=Object(d.j)(m()(a,l?"no-gutters":null,i?"form-row":"row",f),t);return s.a.createElement(c,Object(n.a)({},u,{className:v}))};p.propTypes=f,p.defaultProps=v,a.a=p},106:function(e,a,t){"use strict";var n=t(2),r=t(6),l=t(0),s=t.n(l),c=t(7),i=t.n(c),o=t(42),m=t.n(o),d=t(43),u=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:u,offset:u})]),v={tag:d.n,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),o=[];l.forEach((function(a,n){var r=e[a];if(delete i[a],r||""===r){var l=!n;if(Object(d.h)(r)){var s,c=l?"-":"-"+a+"-",u=b(l,a,r.size);o.push(Object(d.j)(m()(((s={})[u]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),t))}else{var f=b(l,a,r);o.push(f)}}})),o.length||o.push("col");var u=Object(d.j)(m()(a,o),t);return s.a.createElement(c,Object(n.a)({},i,{className:u}))};h.propTypes=v,h.defaultProps=p,a.a=h},33:function(e,a,t){"use strict";var n=t(36),r=t.n(n),l=localStorage.getItem("token"),s=r.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+l}});a.a=s},334:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(11),r=t(12),l=t(14),s=t(13),c=t(0),i=t.n(c),o=t(105),m=t(106),d=t(2),u=t(6),f=t(54),v=t(3),p=t(7),b=t.n(p),h=t(42),E=t.n(h),g=t(43),N={children:b.a.node,type:b.a.string,size:b.a.string,bsSize:b.a.string,valid:b.a.bool,invalid:b.a.bool,tag:g.n,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),plaintext:b.a.bool,addon:b.a.bool,className:b.a.string,cssModule:b.a.object},y=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(f.a)(t)),t.focus=t.focus.bind(Object(f.a)(t)),t}Object(v.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.type,r=e.bsSize,l=e.valid,s=e.invalid,c=e.tag,o=e.addon,m=e.plaintext,f=e.innerRef,v=Object(u.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),p=["radio","checkbox"].indexOf(n)>-1,b=new RegExp("\\D","g"),h=c||("select"===n||"textarea"===n?n:"input"),N="form-control";m?(N+="-plaintext",h=c||"input"):"file"===n?N+="-file":"range"===n?N+="-range":p&&(N=o?null:"form-check-input"),v.size&&b.test(v.size)&&(Object(g.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var y=Object(g.j)(E()(a,s&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===h||c&&"function"===typeof c)&&(v.type=n),v.children&&!m&&"select"!==n&&"string"===typeof h&&"select"!==h&&(Object(g.p)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),i.a.createElement(h,Object(d.a)({},v,{ref:f,className:y,"aria-invalid":s}))},a}(i.a.Component);y.propTypes=N,y.defaultProps={type:"text"};var j=y,w=t(142),O=t(33),x=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={provinsi:""},e.handleChangeProvinsi=function(a){e.setState({provinsi:a.target.value})},e.tambahProvinsi=function(a){a.preventDefault();var t={nama:e.state.provinsi};O.a.post("/admin/provinsi/add",t).then((function(e){console.log(e),200===e.status&&window.location.reload(!0)}))},e}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(m.a,{xs:"12",lg:"12"},i.a.createElement(o.a,null,i.a.createElement(m.a,{xs:"12",lg:"3"},i.a.createElement(j,{type:"text",name:"username",placeholder:"Input Provinsi baru",autoComplete:"username",onChange:this.handleChangeProvinsi}),i.a.createElement("br",null)),i.a.createElement(m.a,{xs:"12",lg:"6"},i.a.createElement(w.a,{color:"primary",onClick:this.tambahProvinsi},i.a.createElement("i",{className:"fa fa-plus"})),i.a.createElement("br",null),i.a.createElement("br",null))))))}}]),t}(c.Component),P=t(15),z=function(e){var a=e.dataProvinsi;return i.a.createElement("div",{className:"table-responsive p-0"},i.a.createElement("table",{className:"table table-bordered table-striped text-nowrap"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center",style:{width:"1%"}},"ID"),i.a.createElement("th",{className:"text-center",style:{width:"10%"}},"Nama"),i.a.createElement("th",{className:"text-center",style:{width:"10%"}},"Aksi"))),i.a.createElement("tbody",null,a.map((function(e){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",{className:"text-center"},e.id),i.a.createElement("td",{className:"text-center"},e.nama),i.a.createElement("td",null,i.a.createElement("div",{className:"text-center"},i.a.createElement(P.b,{className:"btn btn-warning",to:"/pengaturan/editProvinsi/"+e.id},i.a.createElement("i",{className:"fa fa-pencil-alt"})),"\xa0\xa0\xa0",i.a.createElement(w.a,{color:"danger",onClick:function(){return a=e.id,void O.a.delete("/admin/provinsi/"+a+"/delete").then((function(e){alert(e.data.message),window.location.reload(!0)}));var a}},i.a.createElement("i",{className:"fa fa-trash"})))))})))))},k=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={dataProvinsi:[],dataKosong:!1},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/admin/provinsi/list").then((function(a){e.setState({dataProvinsi:a.data}),console.log(a)})).catch((function(a){e.setState({dataKosong:!0})}))}},{key:"render",value:function(){return this.state.dataKosong?i.a.createElement("div",{className:"content-wrapper",style:{backgroundColor:"#00173B"}},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Provinsi"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h3",{className:"card-title"},"Tambah Provinsi")),i.a.createElement("div",{className:"card-body"},i.a.createElement(x,null),i.a.createElement("p",null,"DATA KOSONG")))))))):i.a.createElement("div",{className:"content-wrapper",style:{backgroundColor:"#00173B"}},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"container-fluid header-fluid"},i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("ol",{className:"breadcrumb float-sm-left"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"# "},i.a.createElement("b",null,"Home"))),i.a.createElement("li",{className:"breadcrumb-item active"},i.a.createElement("b",null,"Provinsi"))))))),i.a.createElement("section",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h3",{className:"card-title"},"Tambah Provinsi")),i.a.createElement("div",{className:"card-body"},i.a.createElement(x,null),i.a.createElement(z,{dataProvinsi:this.state.dataProvinsi}))))))))}}]),t}(c.Component)}}]);
//# sourceMappingURL=19.c93bf0c8.chunk.js.map
(this.webpackJsonpreactjs_adminlte=this.webpackJsonpreactjs_adminlte||[]).push([[13],{315:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t(38),l=t(11),s=t(12),i=t(14),c=t(13),o=t(0),r=t.n(o),h=t(37),d=t(15),u=(t(74),t(33)),m=t(75),p=t.n(m),g=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).handleChangeEkonomi=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.ekonomi))},s.handleChangeSeatType=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.seatType))},s.handleChangeAc=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.ac))},s.handleChangeAirMineral=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.airMineral))},s.handleChangeAudio=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.audio))},s.handleChangeBantal=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.bantal))},s.handleChangeFootRest=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.footRest))},s.handleChangeLegRest=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.legRest))},s.handleChangePowerOutlet=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.powerOutlet))},s.handleChangeRecSeat=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.recSeat))},s.handleChangeSelimut=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.selimut))},s.handleChangeSmokingArea=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.smokingArea))},s.handleChangeSnack=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.snack))},s.handleChangeToilet=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.toilet))},s.handleChangeVideo=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.video))},s.handleChangeWifi=function(e){s.setState(Object(n.a)({},e.target.name,!s.state.wifi))},s.handleChangeBagasi=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.handleChangeVoucherMakan=function(e){s.setState({voucherMakan:e.target.value},(function(){console.log(s.state.voucherMakan)}))},s.inputFileLogo=function(){void 0!==s.fileInputLogo.current&&void 0!==s.fileInputLogo.current.click&&s.fileInputLogo.current.click()},s.getInitialState=function(){return{file:[]}},s.onChangeLogo=function(e){s.setState({imgLogo:e.target.files[0]})},s.OptionPo=function(e){return{value:e.idPo,label:e.nama}},s.handleChangePo=function(e){s.setState({idPo:e.value})},s.OptionTypeSap=function(e){return{value:e.id,label:e.namaType}},s.handleChangeTypeSap=function(e){s.setState({sapType:e.value}),s.getSapBus(e.value)},s.OptionBusSap=function(e){return console.log(e),{value:e.KODE,label:e.KODE}},s.handleChangeBusSap=function(e){s.setState({sapKode:e.value})},s.OptionTypeBus=function(e){return{value:e.id,label:e.nama}},s.handleChangeTypeBus=function(e){s.setState({typeBus:e.value})},s.OptionKelas=function(e){return{value:e.id,label:e.namaKelas}},s.handleChangeKelas=function(e){s.setState({kelas:e.value})},s.toNo=function(e,a){var t=s.state.seatNo;t[e]=a.target.value,s.setState({seatNo:t})},s.addSeat=function(){"6"===s.state.fakeSeat[s.state.fakeSeat.length-1].col?s.state.fakeSeat.push({row:parseInt(s.state.fakeSeat[s.state.fakeSeat.length-1].row)+1,col:"1",no:"",type:2,index:s.state.fakeSeat.length}):s.state.fakeSeat.push({row:s.state.fakeSeat[s.state.fakeSeat.length-1].row,col:parseInt(s.state.fakeSeat[s.state.fakeSeat.length-1].col)+1,no:"",type:2,index:s.state.fakeSeat.length})},s.deleteSeat=function(){s.state.fakeSeat.splice(s.state.fakeSeat.length-1,1)},s.fileInputLogo=r.a.createRef(),s.state={fields:{},errors:{},dataPo:[],datas:[],fakeSeat:[],seatNo:[],limit:"",dataKelas:[{id:"VIP",namaKelas:"VIP"},{id:"PREMIUM",namaKelas:"PREMIUM"},{id:"EXECUTIVE",namaKelas:"EXECUTIVE"}],dataTypeSap:[{id:"JA",namaType:"JAC"},{id:"JR",namaType:"JRC"},{id:"JG",namaType:"TJR"}],dataTypeBus:[{id:1,nama:"JAC"},{id:2,nama:"JRC"},{id:3,nama:"TJR"}],ac:!1,airMineral:!1,audio:!1,bantal:!1,footRest:!1,legRest:!1,powerOutlet:!1,recSeat:!1,selimut:!1,smokingArea:!1,snack:!1,toilet:!1,video:!1,wifi:!1,dataSapBus:[],selectedValue:null,dataBus:{}},s}return Object(s.a)(t,[{key:"getSapBus",value:function(e){var a=this;u.a.get("/id/co/bisku/payload/sap/bus?group="+e).then((function(e){console.log(e),a.setState({dataSapBus:e.data.data})}))}},{key:"handleValidation",value:function(){var e=this.state.fields,a={},t=!0;return e.kelas||(t=!1,a.kelas="Tidak boleh kosong"),e.seatType||(t=!1,a.seatType="Tidak boleh kosong"),e.seatNumber||(t=!1,a.seatNumber="Tidak boleh kosong"),this.setState({errors:a}),t}},{key:"handleChange",value:function(e,a){var t=this.state.fields;t[e]=a.target.value,this.setState({fields:t})}},{key:"componentDidMount",value:function(){this.EndpointPo(),this.EndpointBusid()}},{key:"EndpointPo",value:function(){var e=this;u.a.get("/admin/po/getAll").then((function(a){e.setState({dataPo:a.data})}))}},{key:"EndpointBusid",value:function(){var e=this;u.a.get("/admin/bus/"+this.props.match.params.idBus).then((function(a){console.log(a),e.setState({dataBus:a.data,kelas:a.data.kelas,typeBus:a.data.typeBus,idPo:a.data.idPo,id:a.data.id,sapType:a.data.sapType,sapKode:a.data.sapKode,ekonomi:a.data.ekonomi,seatType:a.data.seatType,ac:a.data.ac,aurMineral:a.data.airMineral,audio:a.data.audio,bagasi:a.data.bagasi,bantal:a.data.bantal,footRest:a.data.footRest,legRest:a.data.legRest,powerOutlet:a.data.powerOutlet,recSeat:a.data.recSeat,selimut:a.data.selimut,smokingArea:a.data.smokingArea,snack:a.data.snack,toilet:a.data.toilet,video:a.data.video,voucherMakan:a.data.voucherMakan}),e.getSapBus(a.data.sapType);var t=a.data.layout;if(t){var n=t.replace(/["\n]/gi,"").split(";"),l=[],s=[];n.forEach((function(e){l.push(e.split(","))})),l.forEach((function(e){e.forEach((function(e){s.push(e.split("|"))}))}));for(var i=0;i<s.length;i++){5===s[i].length?e.state.fakeSeat.push({row:s[i][0],col:s[i][1],no:s[i][2],type:s[i][3],status:s[i][4],index:i}):e.state.fakeSeat.push({row:s[i][0],col:s[i][1],no:s[i][2],type:s[i][3],index:i});var c=e.state.seatNo;c[i]="NO"===s[i][2]?"":s[i][2],e.setState({seatNo:c})}"2-2"===a.data.seatType?e.setState({limit:4}):e.setState({limit:5})}}))}},{key:"handleChangeJmlKursi",value:function(e){this.setState({jmlKursi:e.target.value})}},{key:"tes",value:function(e){var a=[];this.state.datas.slice(this.state.datas.length,this.state.datas.length);for(var t=1;t<=e;t++)a.push(t);return a}},{key:"tambahData",value:function(e){var a=this;e.preventDefault();for(var t="",n="",l=0;l<this.state.fakeSeat.length;l++){if(t=t+'"'+this.state.fakeSeat[l].row+'"|"'+this.state.fakeSeat[l].col+'"|"',!this.state.seatNo[l]){var s=this.state.seatNo;s[l]="NO",this.setState({seatNo:s})}"NO"===this.state.seatNo[l]?t=t+this.state.seatNo[l]+'"|"3"':(t=t+this.state.seatNo[l]+'"|"A"|"2"',n=n+'"'+this.state.seatNo[l]+'",'),6===this.state.fakeSeat[l].col?t+=";":t+=","}var i=t.slice(0,-1),c=n.slice(0,-1),o=c.split(",").length,r=new FormData;r.append("ac",this.state.ac),r.append("airMineral",this.state.airMineral),r.append("audio",this.state.audio),r.append("bagasi",this.state.fields.bagasi),r.append("bantal",this.state.bantal),r.append("ekonomi",this.state.fields.ekonomi),r.append("footRest",this.state.footRest),"1"===this.state.selectedValue?r.append("id",this.state.fields.sapKode):r.append("id",this.state.fields.id),r.append("idPo",this.state.selectedValue),r.append("kelas",this.state.fields.kelas),r.append("layout",i),r.append("legRest",this.state.legRest),this.state.imgLogo&&r.append("logo",this.state.imgLogo),r.append("plat",this.state.fields.plat),r.append("powerOutlet",this.state.powerOutlet),r.append("recSeat",this.state.recSeat),"1"===this.state.selectedValue&&(r.append("sapKode",this.state.fields.sapKode),r.append("sapType",this.state.sapType)),r.append("seat",o),r.append("seatNumber",c),r.append("seatType",this.state.fields.seatType),r.append("selimut",this.state.selimut),r.append("smokingArea",this.state.smokingArea),r.append("snack",this.state.snack),r.append("toilet",this.state.toilet),"1"===this.state.selectedValue?r.append("typeBus",this.state.fields.typeBus):r.append("typeBus",""),r.append("valid",!0),r.append("video",this.state.video),r.append("voucherMakan",this.state.fields.voucherMakan),r.append("wifi",this.state.wifi),this.handleValidation()&&Object(u.a)({method:"post",url:"/admin/bus/add",data:r,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),alert("Berhasil Tambah Bus"),a.props.history.push("/manajemenPo/bus")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state.seatNo;return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"content-header"},r.a.createElement("div",{className:"container-fluid header-fluid"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("ol",{className:"breadcrumb float-sm-left"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"# "},r.a.createElement("b",null,"Home"))),r.a.createElement("li",{className:"breadcrumb-item active"},r.a.createElement("b",null,"Tambah Bus"))))))),r.a.createElement("section",{class:"content"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12"},r.a.createElement("div",{class:"card card-primary"},r.a.createElement("div",{class:"card-header"},r.a.createElement("h3",{class:"card-title"},"Tambah Bus")),r.a.createElement("form",{onSubmit:this.tambahData.bind(this)},r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih P.O"),r.a.createElement(h.a,{name:"po",placeholder:"Pilih P.O",value:this.state.dataPo.map((function(a){return e.OptionPo(a)})).filter((function(a){return a.value===e.state.idPo})),onChange:this.handleChangePo,options:this.state.dataPo.map((function(a){return e.OptionPo(a)}))})),1===this.state.idPo&&r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"S.A.P Type"),r.a.createElement(h.a,{name:"typeSap",placeholder:"Pilih Type S.A.P",value:this.state.dataTypeSap.map((function(a){return e.OptionTypeSap(a)})).filter((function(a){return a.value===e.state.sapType})),onChange:this.handleChangeTypeSap,options:this.state.dataTypeSap.map((function(a){return e.OptionTypeSap(a)}))})),1===this.state.idPo&&r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Produk Bus S.A.P"),r.a.createElement(h.a,{name:"produkBusSap",placeholder:"Pilih Produk Bus S.A.P",value:this.state.dataSapBus.map((function(a){return e.OptionBusSap(a)})).filter((function(a){return a.value===e.state.sapKode})),onChange:this.handleChangeBusSap,options:this.state.dataSapBus.map((function(a){return e.OptionBusSap(a)}))})),1===this.state.idPo&&r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Type Bus"),r.a.createElement(h.a,{name:"typeBus",placeholder:"Pilih Type Bus",value:this.state.dataTypeBus.map((function(a){return e.OptionTypeBus(a)})).filter((function(a){return a.value===e.state.typeBus})),onChange:this.handleChangeTypeBus,options:this.state.dataTypeBus.map((function(a){return e.OptionTypeBus(a)}))})),1===this.state.idPo?r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Kode Armada"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.sapKode,readOnly:!0})):r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Kode Armada"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.dataBus.id,onChange:this.handleChange.bind(this,"id")}),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.id," ")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"No. Plat"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.dataBus.plat,onChange:this.handleChange.bind(this,"plat")}),r.a.createElement("span",{style:{color:"red"}}," ",this.state.errors.plat," ")),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Kelas Ekonomi"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"radio",name:"ekonomi",value:"true",checked:this.state.ekonomi,onChange:this.handleChangeEkonomi})," ",r.a.createElement("b",null,"Ya"),"\xa0"),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"radio",name:"ekonomi",value:"false",checked:!this.state.ekonomi,onChange:this.handleChangeEkonomi})," ",r.a.createElement("b",null,"Tidak"),"\xa0"))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Kelas (Kategori Bus)"),r.a.createElement(h.a,{name:"kelas",placeholder:"Pilih Kelas",value:this.state.dataKelas.map((function(a){return e.OptionKelas(a)})).filter((function(a){return a.value===e.state.kelas})),onChange:this.handleChangeKelas,options:this.state.dataKelas.map((function(a){return e.OptionKelas(a)}))})),r.a.createElement("hr",null),r.a.createElement("h5",null,"Layout Kursi"),r.a.createElement("br",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Tipe Kursi"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"radio",name:"seatType",value:"2-2",checked:this.state.seatType,onChange:this.handleChangeSeatType})," ",r.a.createElement("b",null,"2 - 2"),"\xa0"),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"radio",name:"seatType",value:"2-3",checked:!this.state.seatType,onChange:this.handleChangeSeatType})," ",r.a.createElement("b",null,"2 -3"),"\xa0"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Hasil Layout"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"}),r.a.createElement("div",{className:"col-4 layout"},r.a.createElement("div",{className:"row",style:{display:"flex"}},r.a.createElement("div",{class:"col-xs-6",style:{marginLeft:"auto"}},r.a.createElement("img",{src:p.a,width:"30",height:"30",alt:"",style:{marginTop:"10px",marginRight:"30px"}}))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-4"})),r.a.createElement("div",{class:"row",style:{padding:"15px"}},r.a.createElement("div",{class:"seat-form"},this.state.fakeSeat.map((function(t,n){return r.a.createElement("input",{type:"text",name:"",value:a[t.index],onChange:e.toNo.bind(e,t.index),style:{backgroundColor:"blue",color:"#ffffff",width:"14%",borderRadius:"4px"}})})))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-12"},r.a.createElement("div",{class:"row",style:{display:"flex"}},r.a.createElement(d.b,{class:"btn btn-dark btn-xs",onClick:this.addSeat},"Tambah Kursi"),r.a.createElement(d.b,{class:"btn btn-dark btn-xs",onClick:this.deleteSeat,style:{marginLeft:"auto"}},"Hapus Kursi"))))),r.a.createElement("div",{className:"col-4"}))),r.a.createElement("hr",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Fasilitas Bus"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"ac",checked:this.state.ac,onChange:this.handleChangeAc}),"\xa0\xa0",r.a.createElement("label",null,"AC")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"audio",checked:this.state.audio,onChange:this.handleChangeAudio}),"\xa0\xa0",r.a.createElement("label",null,"Audio")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"footRest",checked:this.state.footRest,onChange:this.handleChangeFootRest}),"\xa0\xa0",r.a.createElement("label",null,"Foot Rest")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"legRest",checked:this.state.legRest,onChange:this.handleChangeLegRest}),"\xa0\xa0",r.a.createElement("label",null,"Leg Rest")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"powerOutlet",checked:this.state.powerOutlet,onChange:this.handleChangePowerOutlet}),"\xa0\xa0",r.a.createElement("label",null,"Power Outlet")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"recSeat",checked:this.state.recSeat,onChange:this.handleChangeRecSeat}),"\xa0\xa0",r.a.createElement("label",null,"Rec Seat")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"smokingArea",checked:this.state.smokingArea,onChange:this.handleChangeSmokingArea}),"\xa0\xa0",r.a.createElement("label",null,"Smoking Area")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"toilet",checked:this.state.toilet,onChange:this.handleChangeToilet}),"\xa0\xa0",r.a.createElement("label",null,"Toilet")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"video",checked:this.state.video,onChange:this.handleChangeVideo}),"\xa0\xa0",r.a.createElement("label",null,"Video")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"wifi",checked:this.state.wifi,onChange:this.handleChangeWifi}),"\xa0\xa0",r.a.createElement("label",null,"Wifi")))),r.a.createElement("hr",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Fasilitas Layanan"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"airMineral",checked:this.state.airMineral,onChange:this.handleChangeAirMineral}),"\xa0\xa0",r.a.createElement("label",null,"Air Mineral")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"snack",checked:this.state.snack,onChange:this.handleChangeSnack}),"\xa0\xa0",r.a.createElement("label",null,"Snack")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"selimut",checked:this.state.selimut,onChange:this.handleChangeSelimut}),"\xa0\xa0",r.a.createElement("label",null,"Selimut")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"checkbox",name:"bantal",checked:this.state.bantal,onChange:this.handleChangeBantal}),"\xa0\xa0",r.a.createElement("label",null,"Bantal")))),r.a.createElement("hr",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Voucher Makan"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("input",{type:"radio",name:"voucherMakan",value:"0",checked:0===this.state.voucherMakan,onChange:this.handleChangeVoucherMakan.bind(this)})," ",r.a.createElement("b",null,"0"),"\xa0"),r.a.createElement("div",{className:"col-2"},r.a.createElement("input",{type:"radio",name:"voucherMakan",value:"1",checked:1===this.state.voucherMakan,onChange:this.handleChangeVoucherMakan.bind(this)})," ",r.a.createElement("b",null,"1"),"\xa0"),r.a.createElement("div",{className:"col-2"},r.a.createElement("input",{type:"radio",name:"voucherMakan",value:"2",checked:2===this.state.voucherMakan,onChange:this.handleChangeVoucherMakan.bind(this)})," ",r.a.createElement("b",null,"2"),"\xa0"),r.a.createElement("div",{className:"col-2"},r.a.createElement("input",{type:"radio",name:"voucherMakan",value:"3",checked:3===this.state.voucherMakan,onChange:this.handleChangeVoucherMakan.bind(this)})," ",r.a.createElement("b",null,"3"),"\xa0"),r.a.createElement("div",{className:"col-2"},r.a.createElement("input",{type:"radio",name:"voucherMakan",value:"4",checked:4===this.state.voucherMakan,onChange:this.handleChangeVoucherMakan.bind(this)})," ",r.a.createElement("b",null,"4"),"\xa0"),r.a.createElement("div",{className:"col-2"},r.a.createElement("input",{type:"radio",name:"voucherMakan",value:"5",checked:5===this.state.voucherMakan,onChange:this.handleChangeVoucherMakan.bind(this)})," ",r.a.createElement("b",null,"5"),"\xa0"))),r.a.createElement("hr",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Bagasi"),r.a.createElement("input",{className:"form-control",type:"number",name:"bagasi",value:this.state.bagasi,onChange:this.handleChangeBagasi.bind(this)})),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"}),r.a.createElement("div",{className:"col-4 text-center"},this.state.imgLogo?[this.state.imgLogo].map((function(e){return r.a.createElement("img",{src:URL.createObjectURL(e),alt:"",width:"150",height:"50"})})):r.a.createElement("img",{src:this.state.dataBus.logo,alt:"",width:"150",height:"50"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"btn btn-dark",onClick:function(){return e.inputFileLogo()}},"Upload Logo"),r.a.createElement("input",{ref:this.fileInputLogo,type:"file",onChange:this.onChangeLogo,hidden:!0}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-4"})))),r.a.createElement("div",{class:"card-footer"},r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Tambah")))))))))}}]),t}(o.Component)},33:function(e,a,t){"use strict";var n=t(36),l=t.n(n),s=localStorage.getItem("token"),i=l.a.create({baseURL:"http://po.bisku.id:8282",headers:{Authorization:"Bearer "+s}});a.a=i},38:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},74:function(e,a,t){},75:function(e,a){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=13.a58c4277.chunk.js.map
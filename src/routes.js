import React from 'react';

const Dashboard = React.lazy(() => import('./components/Dashboard'));

const Provinsi = React.lazy(() => import('./components/Pengaturan/Provinsi/Provinsi'));
const EditProvinsi = React.lazy(() => import('./components/Pengaturan/Provinsi/EditProvinsi'));

const Wilayah = React.lazy(() => import('./components/Pengaturan/Wilayah/Wilayah'));
const EditWilayah = React.lazy(() => import('./components/Pengaturan/Wilayah/EditWilayah'));
const TambahWilayah = React.lazy(() => import('./components/Pengaturan/Wilayah/TambahWilayah'));

const Lokasi = React.lazy(() => import('./components/Pengaturan/Lokasi/Lokasi'));
const EditLokasi = React.lazy(() => import('./components/Pengaturan/Lokasi/EditLokasi'));
const TambahLokasi = React.lazy(() => import('./components/Pengaturan/Lokasi/TambahLokasi'));

const Channel = React.lazy(() => import('./components/Pengaturan/Channel/Channel'));
const EditChannel = React.lazy(() => import('./components/Pengaturan/Channel/EditChannel'));
const TambahChannel = React.lazy(() => import('./components/Pengaturan/Channel/TambahChannel'));

const ChannelPo = React.lazy(() => import('./components/Pengaturan/ChannelPo/ChannelPo'));
const EditChannelPo = React.lazy(() => import('./components/Pengaturan/ChannelPo/EditChannelPo'));
const TambahChannelPo = React.lazy(() => import('./components/Pengaturan/ChannelPo/TambahChannelPo'));

const Po = React.lazy(() => import('./components/Entitas/Po/Po'));
const TambahPo = React.lazy(() => import('./components/Entitas/Po/TambahPo'));
const EditPo = React.lazy(() => import('./components/Entitas/Po/EditPo'));

const Partner = React.lazy(() => import('./components/Entitas/Partner/Partner'));
const TambahPartner = React.lazy(() => import('./components/Entitas/Partner/TambahPartner'));
const EditPartner = React.lazy(() => import('./components/Entitas/Partner/EditPartner'));

const Agen = React.lazy(() => import('./components/Entitas/Agen/Agen'));
const TambahAgen = React.lazy(() => import('./components/Entitas/Agen/TambahAgen'));
const EditAgen = React.lazy(() => import('./components/Entitas/Agen/EditAgen'));

const Loket = React.lazy(() => import('./components/Entitas/Loket/Loket'));
const TambahLoket = React.lazy(() => import('./components/Entitas/Loket/TambahLoket'));
const EditLoket = React.lazy(() => import('./components/Entitas/Loket/EditLoket'));

const Crew = React.lazy(() => import('./components/Entitas/Crew/Crew'));
const TambahCrew = React.lazy(() => import('./components/Entitas/Crew/TambahCrew'));
const EditCrew = React.lazy(() => import('./components/Entitas/Crew/EditCrew'));

const Bus = React.lazy(() => import('./components/ManajemenPo/Bus/Bus'));
const TambahBus = React.lazy(() => import('./components/ManajemenPo/Bus/TambahBus'));
const EditBus = React.lazy(() => import('./components/ManajemenPo/Bus/EditBus'));

const AkapTrayeks = React.lazy(() => import('./components/Akap/Trayeks/Trayeks'));

const AkapTrayek = React.lazy(() => import('./components/Akap/Trayek/Trayek'));
const AkapTambahTrayek = React.lazy(() => import('./components/Akap/Trayek/add/Add'));

const BumelTrayek = React.lazy(() => import('./components/Bumel/Trayek/Trayek'));
const TambahTrayek = React.lazy(() => import('./components/Bumel/Trayek/add/Tambah'));
const EditTrayek = React.lazy(() => import('./components/Bumel/Trayek/edit/Edit'));

const BumelTransaksi = React.lazy(() => import('./components/Bumel/Transaksi/TransaksiTemplate'));
const BumelTransaksiTunai = React.lazy(() => import('./components/Bumel/Transaksi/Tunai/TransaksiTunai'));
const BumelTransaksiNonTunai = React.lazy(() => import('./components/Bumel/Transaksi/NonTunai/TransaksiNonTunai'));

const BumelSettlement = React.lazy(() => import('./components/Bumel/Settlement/Settlement'));

const BumelInvoice = React.lazy(() => import('./components/Bumel/Invoice/Bumelinvoice'));
const BelumBayar = React.lazy(() => import('./components/Bumel/Invoice/Belumbayar/BelumBayar'));
const DetailBelumBayar = React.lazy(() => import('./components/Bumel/Invoice/Belumbayar/DetailBelumBayar'));

const SudahBayar = React.lazy(() => import('./components/Bumel/Invoice/Sudahbayar/SudahBayar'));
const DetailSudahBayar = React.lazy(() => import('./components/Bumel/Invoice/Sudahbayar/DetailSudahBayar'));

const DaftarPengguna = React.lazy(() => import('./components/Users/DaftarPengguna/DaftarPengguna'));
const TambahPengguna = React.lazy(() => import('./components/Users/DaftarPengguna/TambahPengguna'));
const EditPengguna = React.lazy(() => import('./components/Users/DaftarPengguna/EditPengguna'));

const ChangePriceSap = React.lazy(() => import('./components/Sap/ChangePrice/ChangePrice'));
const AddPriceSap = React.lazy(() => import('./components/Sap/ChangePrice/AddChangePrice'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  // { path: '/pengaturan', exact: true, name: 'Pengaturan', component: Provinsi },
  { path: '/pengaturan/provinsi', name: 'Provinsi', component: Provinsi },
  { path: '/pengaturan/editProvinsi/:id', name: 'Edit Provinsi', component: EditProvinsi },

  { path: '/pengaturan/wilayah', name: 'Wilayah', component: Wilayah },
  { path: '/pengaturan/editWilayah/:idWil/:idProv', name: 'Edit Wilayah', component: EditWilayah },
  { path: '/pengaturan/tambahWilayah/:id', name: 'Tambah Wilayah', component: TambahWilayah },

  { path: '/pengaturan/lokasi', name: 'Lokasi', component: Lokasi },
  { path: '/pengaturan/editLokasi/:idLok/:idWil', name: 'Edit Lokasi', component: EditLokasi },
  { path: '/pengaturan/tambahLokasi/:id', name: 'Tambah Lokai', component: TambahLokasi },

  { path: '/pengaturan/channel', name: 'Channel', component: Channel },
  { path: '/pengaturan/editChannel/:idChannel', name: 'Edit Channel', component: EditChannel },
  { path: '/pengaturan/tambahChannel', name: 'Tambah Channel', component: TambahChannel },

  { path: '/pengaturan/channelPo', name: 'Channel P.O', component: ChannelPo },
  { path: '/pengaturan/editChannelPo/:idPo/:idChannelPo', name: 'Edit Channel P.O', component: EditChannelPo },
  { path: '/pengaturan/tambahChannelPo/:idPo', name: 'Tambah Channel P.O', component: TambahChannelPo },

  { path: '/entitas/po', name: 'P.O', component: Po },
  { path: '/entitas/editPo/:idPo', name: 'Edit P.O', component: EditPo },
  { path: '/entitas/tambahPo', name: 'Tambah P.O', component: TambahPo },

  { path: '/entitas/partner', name: 'Partner', component: Partner },
  { path: '/entitas/editPartner/:idPartner', name: 'Edit Partner', component: EditPartner },
  { path: '/entitas/tambahPartner', name: 'Tambah Partner', component: TambahPartner },

  { path: '/entitas/agen', name: 'Agen', component: Agen },
  { path: '/entitas/tambahAgen', name: 'Tambah Agen', component: TambahAgen },
  { path: '/entitas/editAgen/:idAgen', name: 'Edit Agen', component: EditAgen },

  { path: '/entitas/loket', name: 'Loket', component: Loket },
  { path: '/entitas/tambahLoket/:idPo', name: 'Tambah Loket', component: TambahLoket },
  { path: '/entitas/editLoket/:idLoket', name: 'Edit Loket', component: EditLoket },

  { path: '/entitas/crew', name: 'Crew', component: Crew },
  { path: '/entitas/tambahCrew/:idPo', name: 'Tambah Crew', component: TambahCrew },
  { path: '/entitas/editCrew/:idCrew', name: 'Edit Crew', component: EditCrew },

  { path: '/manajemenPo/bus', name: 'Bus', component: Bus },
  { path: '/manajemenPo/tambahBus', name: 'Tambah Bus', component: TambahBus },
  { path: '/manajemenPo/editBus/:idBus', name: 'Edit Bus', component: EditBus },

  { path: '/akap/trayeks', name: 'Trayek', component: AkapTrayeks },

  { path: '/akap/trayek', name: 'Trayek', component: AkapTrayek },
  { path: '/akap/tambahTrayek', name: 'Tambah Trayek', component: AkapTambahTrayek },

  { path: '/bumel/trayek', name: 'Trayek', component: BumelTrayek },
  { path: '/bumel/tambahTrayek', name: 'Tambah Trayek', component: TambahTrayek },
  { path: '/bumel/editTrayek/:idTrayek', name: 'Edit Trayek', component: EditTrayek },

  { path: '/bumel/transaksi', name:'Transaksi', component: BumelTransaksi },
  { path: '/bumel/transaksiTunai', name:'Transaksi Tunai', component: BumelTransaksiTunai },
  { path: '/bumel/transaksiNonTunai', name:'Transaksi Non Tunai', component: BumelTransaksiNonTunai },

  { path: '/bumel/settlement', name: 'Settlement', component: BumelSettlement },

  { path: '/bumel/invoice', name:'Invoice', component: BumelInvoice },
  { path: '/bumel/belumBayar', name:'Belum Bayar', component: BelumBayar },
  { path: '/bumel/detailBelumBayar/:idTagihan', name:'Detail Belum Bayar', component: DetailBelumBayar },

  { path: '/bumel/sudahBayar', name:'Sudah Bayar', component: SudahBayar },
  { path: '/bumel/detailSudahBayar/:idTagihan', name:'Detail Sudah Bayar', component: DetailSudahBayar },

  { path: '/user/daftarPengguna', name: 'Daftar Pengguna', component: DaftarPengguna },
  { path: '/user/tambahPengguna', name: 'Tambah Pengguna', component: TambahPengguna },
  { path: '/user/editUser/:idUser', name: 'Edit Pengguna', component: EditPengguna },

  { path: '/sap/updateHarga', name: 'Update Harga', component: ChangePriceSap },
  { path: '/sap/tambahHarga', name: 'Tambah Harga', component: AddPriceSap },
  
];

export default routes;

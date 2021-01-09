export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        // text: 'NEW',
      },
    },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'Pengaturan',
      url: '/pengaturan',
      icon: 'icon-settings',
      children: [
        {
          name: 'Provinsi',
          url: '/pengaturan/provinsi',
          // icon: 'icon-puzzle',
        },
        {
          name: 'Wilayah',
          url: '/pengaturan/wilayah',
          // icon: 'icon-puzzle',
        },
        {
          name: 'Lokasi',
          url: '/pengaturan/lokasi',
          // icon: 'icon-puzzle',
        },
        {
          name: 'Channel',
          url: '/pengaturan/channel',
          // icon: 'icon-puzzle',
        },
        {
          name: 'Channel PO',
          url: '/pengaturan/channelPo',
          // icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Entitas',
      url: '/entitas',
      icon: 'icon-pencil',
      children: [
        {
          name: 'PO',
          url: '/entitas/po',
        },
        {
          name: 'Partner',
          url: '/entitas/partner',
        },
        {
          name: 'Agen',
          url: '/entitas/agen',
        },
        {
          name: 'Loket',
          url: '/entitas/loket',
        },
        {
          name: 'Crew',
          url: '/entitas/crew',
        }
      ]
    },
    {
      name: 'Manajemen PO',
      url: '/base',
      icon: 'fa fa-database',
      children: [
        {
          name: 'Bus',
          url: '/base/breadcrumbs',
        }
      ],
    },
    {
      name: 'Bumel',
      url: '/buttons',
      icon: 'fa fa-bus',
      children: [
        {
          name: 'Trayek',
          url: '/buttons/buttons',
        },
        {
          name: 'Transaksi',
          url: '/buttons/button-dropdowns',
        },
        {
          name: 'Settlement',
          url: '/buttons/button-groups',
        },
        {
          name: 'Invoice',
          url: '/buttons/brand-buttons',
        },
      ],
    },
    {
      name: 'AKAP',
      url: '/charts',
      icon: 'fa fa-bus',
      children: [
        {
          name: 'Trayek',
          url: '/buttons/brand-buttons',
        },
        {
          name: 'Transaksi',
          url: '/buttons/brand-buttons',
        },
        {
          name: 'Settlement',
          url: '/buttons/brand-buttons',
        },
      ],
    },
    {
      name: 'Refund',
      url: '/icons',
      icon: 'fa fa-money',
      children: [
        {
          name: 'Pengajuan Refund',
          url: '/icons/coreui-icons',
        },
      ],
    },
    {
      name: 'User',
      url: '/pengguna',
      icon: 'fa fa-users',
      children: [
        {
          name: 'Daftar Pengguna',
          url: '/pengguna/daftar',
          // icon: 'icon-bell',
        },
      ],
    },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   divider: true,
    // },
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
    // {
    //   name: 'Download CoreUI',
    //   url: 'https://coreui.io/react/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'https://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: "noopener" },
    // },
  ],
};

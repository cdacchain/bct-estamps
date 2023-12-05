export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  // { label: 'PAGES', type: 'label' },
  /*{
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },*/
  /*{
    name: 'Orders',
    icon: 'folder',
    children: [
      { name: 'Order List', iconText: 'SI', path: '/orders/orderlist' },
      // { name: 'View Order', iconText: 'SU', path: '/orders/vieworder' },
      { name: 'Order Form', iconText: 'ST', path: '/forms/orderform' },
    ],
  },*/
  /*{
    name: 'Current Available',
    icon: 'check',
    path: '/banks/currentavailable'
  },*/
  { name: 'Order List', icon: 'folder', path: '/orders/orderlist' },
  /*{
    name: 'Defacement',
    icon: "folder",
    path: "/defacement"
  },*/
  {
    name: 'Defacement Mgmt',
    icon: 'folder',
    children: [
      { name: 'Deface', iconText: 'DM', path: '/defacementmng' },
      // { name: 'View Order', iconText: 'SU', path: '/orders/vieworder' },
      { name: 'History', iconText: 'DH', path: '/defacementhistory' },
      { name: 'Void', iconText: 'DV', path: '/void' },
    ],
  },
  /* {
     name:"Defacement"
   }*/

  { name: 'Request Form', icon: 'article', path: '/forms/orderform' },
  // { name: 'Invoice Form', iconText: 'SU', path: '/forms/invoiceform' },


  /*{ label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },*/
];

export const srdnavigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  // { label: 'PAGES', type: 'label' },
  {
    name: 'User Management',
    icon: 'person',
    path: '/srd/usermanagement'
  },
  {
    name: 'Current Available',
    icon: 'check',
    path: '/srd/currentavailable'
  },
  {
    name: 'Orders',
    icon: 'folder',
    children: [
      { name: 'Place Orders', iconText: 'SI', path: '/srd/orders' },
      { name: 'View Orders', iconText: 'ST', path: '/srd/vieworders' },
      {
        name: 'Bank Request',
        iconText: 'ST',
        path: '/srd/bankrequest'
      },
    ],
  },
  {
    name:"Deface History",
    icon:'folder',
    path:"/srd/voiddetails"
  }
  /* {
     name: 'Order',
     icon: 'shoppingcart',
     path: '/srd/orders'
   },
   {
     name:'View Orders',
     icon:'shoppingcart',
     path:'/srd/vieworders'
   },*/
  
]

export const spmcilnavigation = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  /*{
    name: 'User Management',
    icon: 'person',
    path: '/spmcil/usermanagement'
  },*/
  {
    name: 'User Management',
    icon: 'person',
    children: [
      { name: 'SRD Managements', iconText: 'SD', path: '/spmcil/srdmanagement' },
      { name: 'Auth Banks Details', iconText: 'ABD', path: '/spmcil/abdetails' },
    ]
  },
  {
    name: 'View Orders',
    icon: 'shoppingcart',
    path: '/spmcil/orders'
  },
 {
    name: "Deface History",
    icon: "folder",
    path: '/spmcil/voiddetails'
  },
  {
    name: "Settings",
    icon: 'settings',
    children: [
      {
        name: "Denomination Mgmt",
        iconText: "SI",
        path: "/spmcil/adddenomintion"
      }
    ]
  },
]
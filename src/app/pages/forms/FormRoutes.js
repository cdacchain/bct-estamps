import { lazy } from 'react';

const InvoiceForm = lazy(() => import('./InvoiceForm'));
const OrderForm = lazy(() => import('./OrderForm'));
const CurrentAvailable = lazy(()=>import('./CurrentAvaibility'))


const formRoutes = [
  {
    path: '/forms/orderform',
    element: <OrderForm />,
  },
  {
    path: '/forms/invoiceform',
    element: <InvoiceForm />,
  },
  {
    path: '/banks/currentavailable',
    element: <CurrentAvailable />,
  },
];

export default formRoutes;
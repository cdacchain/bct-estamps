import { lazy } from 'react';

const OrderList = lazy(() => import('./OrderList'));
const ViewOrder = lazy(() => import('./ViewOrder'));


const orderRoutes = [
  {
    path: '/orders/orderlist',
    element: <OrderList />,
  },
  {
    path: '/orders/vieworder',
    element: <ViewOrder />,
  },
];

export default orderRoutes;
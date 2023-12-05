import { lazy } from 'react';

const UserMangement = lazy(() => import('./UserManagement'));
const CurrentAvailable = lazy(() => import('./CurrentAvailable'));
const Orders = lazy(() => import('./Orders'));
const ViewOrders = lazy(() => import('./ViewOrders'));
const ViewOrders2 = lazy(() => import('./ViewOrder2'));
const Transfer = lazy(() => import('./Transfer'));
const VoidDetails = lazy(() => import('./VoidDetails'));


//const OrderForm = lazy(() => import('./OrderForm'));


const allsrdroutes = [
    {
        path: '/srd/usermanagement',
        element: <UserMangement />,
    },
    {
        path: '/srd/currentavailable',
        element: <CurrentAvailable />,
    }, {
        path: '/srd/orders',
        element: <Orders />,
    }, {
        path: '/srd/vieworders',
        element: <ViewOrders />,
    }, {
        path: '/srd/bankrequest',
        element: <Transfer />,
    },
    {
        path: '/srd/bankrequestview',
        element: <ViewOrders2 />,
    },
    {
        path: '/srd/voiddetails',
        element: <VoidDetails />,
    }
];

export default allsrdroutes;
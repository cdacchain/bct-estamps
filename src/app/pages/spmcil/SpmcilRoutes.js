import { lazy } from 'react';

const UserMangement = lazy(() => import('./UserManagement'));
const Orders = lazy(() => import('./ViewOrders'));
const Transfer = lazy(() => import('./TransferPaper'));
const AddDenomination = lazy(()=>import('./AddDenomination'))
const SRDMangement = lazy(()=>import("./SRDDetails"))
const ABDetails = lazy(()=>import("./ABDetails"))
const VoidDetails = lazy(() => import('./VoidDetails'));

//const OrderForm = lazy(() => import('./OrderForm'));


const allspmcilroutes = [
    {
        path: '/spmcil/srdmanagement',
        element: <SRDMangement />,
    },
    {
        path: '/spmcil/abdetails',
        element: <ABDetails />,
    },
    {
        path: '/spmcil/orders',
        element: <Orders />,
    },
    {
        path: '/spmcil/transfer',
        element: <Transfer />,
    },
    {
        path: '/spmcil/adddenomintion',
        element: <AddDenomination />,
    },
    {
        path: '/spmcil/voiddetails',
        element: <VoidDetails />,
    },
];

export default allspmcilroutes;
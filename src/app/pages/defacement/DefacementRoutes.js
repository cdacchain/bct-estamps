import { lazy } from 'react';

const DefacementSection = lazy(() => import('./DefacementSection'));
const DefacementHistory = lazy(() => import('./DefacementHistory'));
const Void = lazy(()=>import("./Void"))


const defacementRoutes = [
  {
    path: '/defacementmng',
    element: <DefacementSection />,
  },
  {
    path: '/defacementhistory',
    element: <DefacementHistory />,
  },
  {
    path: '/void',
    element: <Void />,
  },
];

export default defacementRoutes;
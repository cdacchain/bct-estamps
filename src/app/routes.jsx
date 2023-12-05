import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import orderRoutes from './pages/orders/OrderRoutes';
import formRoutes from './pages/forms/FormRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import cpRoutes from './views/changepassword/CPRoutes';
import allsrdroutes from './pages/SRD/SRDRoutes';
import defacementRoutes from './pages/defacement/DefacementRoutes';
import allspmcilroutes from './pages/spmcil/SpmcilRoutes';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...chartsRoute,
      ...materialRoutes,
      ...orderRoutes,
      ...formRoutes,
      ...cpRoutes,
      ...allsrdroutes,
      ...defacementRoutes,
      ...allspmcilroutes
    ],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;

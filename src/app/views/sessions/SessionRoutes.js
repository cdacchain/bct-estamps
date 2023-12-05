import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const JwtLogin = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./JwtRegister')));
const StateRevenueLogin = Loadable(lazy(() => import('./SRDLogin')));
const StateRevenueRegister = Loadable(lazy(() => import('./SRDRegister')));
const SPMCILLogin = Loadable(lazy(() => import('./SPMCILLogin')));



const sessionRoutes = [
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/srdlogin', element: <StateRevenueLogin /> },
  { path: '/session/srdregister', element: <StateRevenueRegister/> },
  { path: '/session/spmcillogin', element: <SPMCILLogin/> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },
  { path: '/session/404', element: <NotFound /> },
];

export default sessionRoutes;

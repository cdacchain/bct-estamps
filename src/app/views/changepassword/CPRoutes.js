import { authRoles } from 'app/auth/authRoles';
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ChangePassword = Loadable(lazy(() => import('./ChangePassword')));

const cpRoutes = [{ path: '/changepassword', element: <ChangePassword />, auth: authRoles.editor }];

export default cpRoutes;

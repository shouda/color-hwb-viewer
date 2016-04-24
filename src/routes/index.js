import App from '../layouts/App';
import Hwb from '../containers/Hwb';

export const configureRoute = {
  path: '/',
  component: App,
  indexRoute: { component: Hwb },
  childRoutes: [
    {
      path: 'picked',
      component: Hwb,
      childRoutes: [
        {
          path: 'picked/:hex',
          component: Hwb,
        },
      ],
    },
    {
      path: '*',
      component: Hwb,
    },
  ],
};

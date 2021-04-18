import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Info from '../pages/info/Info';
import Statistics from '../pages/statistics/Statistics';

const RoutingList = () => (
  <Switch>
    <Route path='/home' key='/home'>
      <Dashboard />
    </Route>
    <Route path='/statistics' key='/statistics'>
      <Statistics />
    </Route>
    <Route path='/info' key='/info'>
      <Info />
    </Route>
  </Switch>
);

// const routes = [
//   {
//     path: '/home',
//     component: Dashboard,
//     key: '/home',
//   },
//   {
//     path: '/statistics',
//     component: Statistics,
//     key: '/statistics',
//   },
//   {
//     path: '/info',
//     component: Info,
//     key: '/info',
//   },
// ];

// const RoutingList = () => {
//   return routes.map((item) => {
//     if (item.path.split('/').length === 2) {
//       return (
//         <Route
//           exact
//           path={item.path}
//           component={item.component}
//           key={item.key}
//         />
//       );
//     }
//     return <Route path={item.path} component={item.component} key={item.key} />;
//   });
// };

export default RoutingList;

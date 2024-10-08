// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login/login';
import Inicio from './inicio/inicio';
import NotFound from './NotFound';
import Layout from './components/Layout';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/inicio">
        <Layout>
          <Inicio />
        </Layout>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;

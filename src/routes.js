import React from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/'

const Routes = (props) => {
  return(
    <Layout>
     <Switch>
 <Route component={Home} exact path="/" />
     </Switch>
    </Layout>
  )
}

export default Routes;

import React from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/'
import SignIn from './Components/SignIn/signIn'

const Routes = (props) => {
  return(
    <Layout>
     <Switch>
 
 <Route component={Home} exact path="/" />
 <Route component={SignIn} path="/login"/>
     </Switch>
    </Layout>
  )
}

export default Routes;

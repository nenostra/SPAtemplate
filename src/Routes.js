import React from 'react';
import { Router, Route} from 'react-router';
import {Home, About, Main, Car} from './components'

export const Routes = (props) => (
  <Router {...props}>
	<Route component={Main}>
		<Route path="/" component={Home} />
        <Route path="/about" component={About}/>
    </Route>
  </Router>
);

//export default Routes;
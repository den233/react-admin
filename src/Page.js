import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import App from './App';
import Home from './Home'
import Full from './Full'
export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/home/app/dashboard/index" push />} />
            <Route path="/home/app" component={App} />  
            <Route path="/home" component={Home} />      
            <Route path="/Full" component={Full} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)
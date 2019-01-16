import React, {Component} from 'react';
import {Switch,Router, Route} from 'react-router-dom';
import history  from './history'
import Commodity from './containers/Commodity/Commodity';
import Login from './containers/login/Login';
export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div style={{height:"100%"}}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/bridge/commodity" component={Commodity} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CSSModules from 'react-css-modules';

// Styles.
import styles from './App.css';

// Utilities.
import { cssModulesOptions } from '../../utilities/StylesUtil';

// Components.
import Async from '../../components/Async/Async';

class App extends Component {
    /* eslint-disable max-len */
    render() {
        return (
            <BrowserRouter>
                <div styleName="app">
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={ props => <Async load={ System.import('../HomePage/HomePage') } { ...props } /> } />
                        <Redirect
                            from="*"
                            to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
    /* eslint-enable max-len */
}

export default CSSModules(App, styles, cssModulesOptions);

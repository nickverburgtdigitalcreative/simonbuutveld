import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App'
import Header from './Header'
import WhoIAm from './pages/WhoIAm'
import WhereToAddValue from './pages/WhereToAddValue'
import WhatKindOfValue from './pages/WhatKindOfValue'
import WhyAddEmotionalValue from './pages/WhyAddEmotionalValue'
import HowToAddEmotionalValue from './pages/HowToAddEmotionalValue'

/**
 * THIS is the actual 'App', aka the main entry point
 *
 */

const WebRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' >
                    <App />
                </Route>
                <Route path='/who-i-am'>
                    <WhoIAm />
                </Route>
                <Route path='/where-to-add-value'>
                    <WhereToAddValue />
                </Route>
                <Route path='/what-kind-of-value'>
                    <WhatKindOfValue />
                </Route>
                <Route path='/why-add-emotional-value'>
                    <WhyAddEmotionalValue />
                </Route>
                <Route path='/how-to-add-value'>
                    <HowToAddEmotionalValue />
                </Route>
            </Switch>
        </Router>
    )
}

export default WebRouter;
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App'
import Header from './Header'
import WhoIAm from './pages/WhoIAm'
import WhereToAddValue from './pages/WhereToAddValue'
import WhatKindOfValue from './pages/WhatKindOfValue'
import WhyAddEmotionalValue from './pages/WhyAddEmotionalValue'
import HowToAddEmotionalValue from './pages/HowToAddEmotionalValue'

const WebRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/who-i-am' component={WhoIAm} />
                <Route path='/where-to-add-value' component={WhereToAddValue} />
                <Route path='/what-kind-of-value' component={WhatKindOfValue} />
                <Route path='/why-add-emotional-value' component={WhyAddEmotionalValue} />
                <Route path='/how-to-add-value' component={HowToAddEmotionalValue} />
            </Switch>
        </Router>
    )
}

export default WebRouter;
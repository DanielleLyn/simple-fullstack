//Here is your route page. If you are planning on making full use of navigation on the webpage, make a separate component for each page and link them here.
import React from 'react'
import { Route, Switch } from "react-router-dom" //Components from react-router-dom
import Class from "./components/stateful_component"
import DoSomething from "./components/stateless_component"

export default (
        <Switch>
            {/* Switches between components so only one can be displayed at any time */}
            <Route exact path="/"  component={ Class } />
            <Route path="/dosomething:paramteter" component={ DoSomething } />
            {/* Access this parameter from the component's file with this.props.match.params.parameter */}
        </Switch>
)
import React from "react";
import {Switch, Route} from "react-router";
import {Catalog, Error, Home} from "./pages";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/catalog/" component={Catalog}/>
            <Route path ="*" component={Error}/>
        </Switch>
)
}
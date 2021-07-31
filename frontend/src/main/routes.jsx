import React from "react"
import {Switch, Route, Redirect} from "react-router"
import Home from "../components/home/home"
import UserCrud from "../components/user/userCrud"

export default props =>
    <Switch>
        <Route exact path="/" component={Home} /> 
        {
            /* O exact serve para que eu so navegue para o home se for exatamente o barra
            isto porque a rota /users tambem começa com barra */
        }
        <Route path="/users" component={UserCrud} />
        <Redirect from="*" to="/"/>
    </Switch>
import React from "react"
import './Main.css'
import Header from "./Header"

const Main = props => 
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

export default Main
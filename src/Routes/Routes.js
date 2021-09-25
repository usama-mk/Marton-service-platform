import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../Components/Header/Header'
import Home from '../Pages/Home'

function Routes() {
    return (
        <div>
           <Router>
               {/* Header */}
               <Header/>
               <Switch>
                   {/* Routes */}
                   <Route path='/' >
                        <Home/>
                   </Route>
               </Switch>
           </Router>
        </div>
    )
}

export default Routes

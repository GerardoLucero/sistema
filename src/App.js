import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Screens
import Main from './screens/Principal'
import Login from './screens/Login'
import LockScreen from './screens/LockScreen'
import Reservaciones from './screens/Reservaciones'
import Theme from './containers/Theme'
const App = () => (
        <Theme>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/lock" component={LockScreen}/>
                    <Route exact path="/reservaciones" component={Reservaciones}/>
                </Switch>
            </Router>
        </Theme>    
    )
export default App

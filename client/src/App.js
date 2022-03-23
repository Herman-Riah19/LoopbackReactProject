import React from 'react'
import {BrowserRouter as Browser, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Footer, Navbar } from './component'
import Error404 from './Error404'
import Profile from './pages/Profile'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './security/context'
import EditUserPage from './pages/EditUserPage'

const App = () => {
    return (
        <AuthProvider>
            <Browser>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/profile/edit/" exact component={EditUserPage} /> 
                    <Route path="/sign-in" exact component={LoginPage} />
                    <Route component={Error404} />
                </Switch>
                <Footer />
            </Browser>
        </AuthProvider>
    )
}

export default App;

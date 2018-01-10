import React from 'react'

import Home from './components/Home'
import Profile from './components/Profile'

export default class App extends React.Component {
    render(){
        return (
            <div id="root">
                <Home />
                <Profile />
            </div>
            
        )
        
    }
}
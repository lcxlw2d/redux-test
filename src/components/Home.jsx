import React from 'react'
import Header from './todo/Header'
import List from './todo/List'
import Footer from './todo/Footer'

import { addToDo } from '../actions/actions'

export default class Home extends React.Component {
    render() {
        return (
            <section>
                <h1>Home Component</h1>
                <Header addToList={ () => dispatch() } />
                <List />
                <Footer />
            </section>
            
        )
    }
}
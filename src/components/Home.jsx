import React from 'react'
import { connect } from 'react-redux'

import Header from './todo/Header'
import List from './todo/List'
import Footer from './todo/Footer'

import { addToDo } from '../actions/actions'

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { dispatch,todos } = this.props
        console.log(this.props)

        return (
            <section>
                <h1>Home Component</h1>
                <Header 
                    addToList={ (text) => {
                            dispatch(addToDo(text))
                            console.log('传入action的文字：',text)
                        }
                    } />
                <List todos={ todos } />
                <Footer />
            </section>
            
        )
    }
}

export default connect()(Home)
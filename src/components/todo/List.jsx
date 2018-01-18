import React from 'react'
import { connect } from 'react-redux'

class List extends React.Component {
    render(){
        
        return (
            <section className="list">
                <ul>
                    { this.props.todos.map((v,i)=>(
                        <li key={ i }>{ v.text }</li>
                    )) }
                </ul>
            </section>
        )
    }
}

export default connect()(List)
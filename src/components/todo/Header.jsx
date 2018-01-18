import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {

    handleClick(){
        const text = this.refs.input.value
        this.props.addToList(text)
        this.refs.input.value=''
    }

    render(){
        return (
            <section className='header'>
                <h1>TODO-List</h1>
                <input type="text" ref='input'/>
                {/* <button onClick={this.handleClick}>Add To List</button> */}
                <button onClick={() => this.handleClick()}>Add</button>
            </section>
        )
    }
}

export default connect()(Header)


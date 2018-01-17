import React from 'react'

export default class Header extends React.Component {

    handleClick(){
        const text = this.refs.input.value
        this.props.addToList(text)
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


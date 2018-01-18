import React from 'react'

import Home from './components/Home'
import Profile from './components/Profile'

import { HashRouter as Router,
Route, 
Link
} from 'react-router-dom'

import { connect } from 'react-redux'

class App extends React.Component {
  constructor(){
    super()
  }
  render () {
    const { todos } = this.props
    
    return (
      // <Router>
      //   <div id='root'>
      //       <nav>
      //           <Link to="/">Home</Link>
      //           <Link to="/profile">Profile</Link>
      //       </nav>
      //       <section>
      //           <Route path="/" component={Home} exact></Route>
      //           <Route path="/profile" component={Profile} exact></Route>
      //       </section>
      //   </div>
      // </Router>
      <Home todos={ todos } />

    )
  }
}

function select(state) {
  return {
    todos: state.todos
  }
}

export default connect(select)(App);

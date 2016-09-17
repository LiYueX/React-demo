import React from 'react'
import {hashHistory} from 'react-router'
class Home extends React.Component {
  btnClick(){
    hashHistory.push('work')
  }
  render () {
    return(
        <div className="jumbotron">
          <h1>Hello, Bruce Lee!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><a className="btn btn-primary btn-lg" onClick={this.btnClick.bind(this)}>Look My Work</a></p>
        </div>
    )
  }
}

export default Home;

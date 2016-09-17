import React from 'react'
import {hashHistory} from 'react-router'
class A extends React.Component {
  btnClick(){
    hashHistory.push('/work');
  }
  render () {
    return(
        <div className="jumbotron">
          <h1>Hello, Bruce Lee!</h1>
          <h2 style={{color:'red'}}>page A</h2>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><a onClick={this.btnClick.bind(this)} className="btn btn-primary btn-lg">Look My Work</a></p>
        </div>
    )
  }
}

export default A;

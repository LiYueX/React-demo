import React, { PropTypes } from 'react';
import {Link,activeStyle} from 'react-router';
class NavBar extends React.Component {
  render () {
    let styles={
      backgroundColor:'#0ff',
      color:'#fff'
    }
    return(
        <div className="navbar ">
          <div className="container-fluid">
            <div className="navbar-inner">
              <div className='navbar-header'>
                <Link className='navbar-brand' to='/' >Bruce Lee</Link>
              </div>
              <div className='nav-collapse'>
                <ul className="nav navbar-nav">
                <li>
                  <Link to='/' activeStyle={styles} onlyActiveOnIndex={true}>Home</Link>
                </li>
                <li>
                  <Link to='/work' activeStyle={styles}>Work</Link>
                </li>
                <li>
                  <Link to='/about' activeStyle={styles}>About</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default NavBar;

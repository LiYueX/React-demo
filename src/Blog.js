import React, { PropTypes } from 'react'
import A from './A'

class Blog extends React.Component {
  render () {
    console.log(this.props);
    return(
      <div>
        {this.props.params.title=='雪山和天空' ?
          <A/> : this.props.params.title}
      </div>
    )
  }
}

export default Blog;

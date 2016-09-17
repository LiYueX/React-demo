import React from 'react';
import {hashHistory} from 'react-router';
import Bg from '../images/pic1.jpg'
class Card extends React.Component {
  aboutClick(){
    hashHistory.push('about')
  }
  homeClick(){
    hashHistory.push('/')
  }
  lookClick(){
    hashHistory.push(`/blog/${this.props.url}`)
  }
  render () {
    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="thumbnail">
            <img src={this.props.imgUrl} alt="..."/>
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.desc}</p>
              <p>
                <a style={{marginRight:'5px'}} className="btn btn-info" role="button" onClick={this.lookClick.bind(this)}>Looking</a>
                <a style={{marginRight:'5px'}} className="btn btn-primary" role="button" onClick={this.aboutClick.bind(this)}>About Me</a>
                <a style={{marginRight:'5px'}} className="btn btn-success" role="button" onClick={this.homeClick.bind(this)}>Go Home</a>
              </p>
            </div>
          </div>
        </div>
    )
  }
}
Card.defaultProps={
  imgUrl : Bg,
  title : 'Thumbnail label',
  desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
}
export default Card;

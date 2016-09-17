import React from 'react';
import {hashHistory} from 'react-router';
import Card from './Components/Card';
import Bg1 from '../src/images/pic1.jpg';
import Bg2 from '../src/images/pic2.jpg';
import Bg3 from '../src/images/pic3.jpg';
import Bg4 from '../src/images/pic4.jpg';
import Bg5 from '../src/images/pic5.jpg';
import Bg6 from '../src/images/pic6.jpg';
import Bg7 from '../src/images/pic7.jpg';
import Bg8 from '../src/images/pic8.jpg';
import Bg9 from '../src/images/pic9.jpg';
class Work extends React.Component {
  render () {
    let styles={
      backgroundColor:'#469e91',
      color:'#dccfcf',
      borderRadius:'10px'
    }
    let cardDate=[
      {imgUrl : Bg1,title : '雪山和天空',desc : 'Hello World',url:'雪山和天空'},
      {imgUrl : Bg2,title : '雪中飞车',desc : 'Hello World',url:'雪中飞车'},
      {imgUrl : Bg3,title : '晚霞',desc : 'Hello World',url:'晚霞'},
      {imgUrl : Bg4,title : '天山相接 ',desc : 'Hello World',url:'天山相接'},
      {imgUrl : Bg5,title : '冬天的果实',desc : 'Hello World',url:'冬天的果实'},
      {imgUrl : Bg6,title : '白马王子',desc : 'Hello World',url:'白马王子'},
      {imgUrl : Bg7,title : '丛林',desc : 'Hello World',url:'丛林'},
      {imgUrl : Bg8,title : '普罗旺斯',desc : 'Hello World',url:'普罗旺斯'},
      {imgUrl : Bg9,title : '大海',desc : 'Hello World',url:'大海'}
      ];
    return(
      <div style={{overflow:'hidden'}}>
        <div className="row-fluid" style={{overflow:'hidden'}}>
          {cardDate.map((item,i)=>(<Card {...item} key={i} />))}

        </div>
        <div style={styles} className='col-xs-6 col-md-6 text-center col-md-offset-3 col-xs-offset-3'>
          <h1>Nice!</h1>
        </div>
      </div>
    )
  }
}

export default Work;

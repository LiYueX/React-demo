import React from 'react';
import {hashHistory} from 'react-router';
import axios from 'axios';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data : {},
      wait : true
    }
  }
  homeClick(){
    hashHistory.push('/')
  }
  aboutClick(){
    hashHistory.push('about')
  }
  workClick(){
    hashHistory.push('work')
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/liyuex')
    .then(
      (res)=>(
        this.setState({data : res.data , wait:false})
      )
    )
  }
  render () {
    let dat = [
    {avatar_url : "https://avatars.githubusercontent.com/u/20787370?v=3"},
    {bio  :   "微信：18330116404"},
    {blog :   "liyuex.github.io"},
    {company  :  null},
    {created_at  :  "2016-08-02T05:31:24Z"},
    {email  :  "1193979065@qq.com"},
    {events_url :  "https://api.github.com/users/LiYueX/events{/privacy}"},
    {followers  :  8},
    {followers_url : "https://api.github.com/users/LiYueX/followers"},
    {following :  19},
    {following_url:"https://api.github.com/users/LiYueX/following{/other_user}"},
    {gists_url : "https://api.github.com/users/LiYueX/gists{/gist_id}"},
    {gravatar_id :  ""},
    {hireable : null},
    {html_url : "https://github.com/LiYueX"},
    {id : 20787370},
    {location : "中国"},
    {login : "LiYueX"},
    {name  : "李月喜"},
    {organizations_url : "https://api.github.com/users/LiYueX/orgs"},
    {public_gists :  0},
    {public_repos :  6},
    {received_events_url:"https://api.github.com/users/LiYueX/received_events"},
    {repos_url :  "https://api.github.com/users/LiYueX/repos"},
    {site_admin : false},
    {starred_url :"https://api.github.com/users/LiYueX/starred{/owner}{/repo}"},
    {subscriptions_url  : "https://api.github.com/users/LiYueX/subscriptions"},
    {type : "User"},
    {updated_at : "2016-08-28T08:14:35Z"},
    {  url : "https://api.github.com/users/LiYueX"}
  ];
    return(
      <div>
        {
          this.state.wait ? '正在加载。。。':
          <div>{this.state.data.name}<img src={this.state.data.avatar_url}/></div>

        }
        <table className='table table-bordered table-striped table-hover'>
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>性别</th>
              <th>生日</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>li</td>
              <td>16</td>
              <td>男</td>
              <td>9.21</td>
            </tr>
            <tr>
              <td>yue</td>
              <td>16</td>
              <td>男</td>
              <td>9.21</td>
            </tr>
            <tr>
              <td>xi</td>
              <td>16</td>
              <td>男</td>
              <td>9.21</td>
            </tr>
            <tr>
              <td>li</td>
              <td>16</td>
              <td>男</td>
              <td>9.21</td>
            </tr>
            <tr>
              <td>yue</td>
              <td>16</td>
              <td>男</td>
              <td>9.21</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-toolbar">
          <div className='btn-group'>
            <button onClick={this.homeClick.bind(this)} className='btn btn-primary'>Home</button>
            <button onClick={this.workClick.bind(this)} className='btn btn-info'>Work</button>
            <button onClick={this.aboutClick.bind(this)} className='btn btn-success'>About</button>
          </div>
        </div>
        <div className='row-fluid'>
          <div className='input-group col-sm-4'>
            <span className='input-group-addon'>&yen;</span>
            <input type='text' className='form-control' placeholder='请输入金额'/>
            <span className='input-group-addon'>.00</span>
          </div>
          <div className='input-group input-group-lg col-sm-4'>
            <span className='input-group-addon'>@</span>
            <input type='email' className='form-control' placeholder='请输入金额email  input-group-lg'/>
          </div>
          <div className='input-group input-group-sm col-sm-4'>
            <span className='input-group-addon'>@</span>
            <input type='email' className='form-control' placeholder='请输入金额email  input-group-sm'/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;

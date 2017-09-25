import React, {Component} from 'react'
import asyncComponent from './components/AsyncComponent';
import {
  Route,
  Switch,
} from 'react-router-dom';

const AsyncHome = asyncComponent(() => import('./containers/Home/Home'));
const AsyncAbout = asyncComponent(() => import('./containers/About/About'));
const AsyncPost = asyncComponent(() => import('./containers/Post/Post'));
// import About from './components/Home/Home';
// import Home from './components/About/About';

class AllRoutes extends Component{
  render(){
    return (
      <div className="content-page">
        <Switch>
          <Route path="/gioi-thieu" component={AsyncAbout}/>
          <Route path="/san-pham" component={AsyncPost}/>
          <Route path="/tin-tuc" component={AsyncPost}/>
          <Route path="/" exact component={AsyncHome}/>
        </Switch>
      </div>
    )
  }
}
export default AllRoutes;
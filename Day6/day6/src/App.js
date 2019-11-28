import React from 'react';
import './App.css';
import Homepage from './page/Homepage'
import Header from './component/Header'
import Errorpage from './page/Error404'
import {Route,Switch} from 'react-router-dom'


class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <section class="section1">
              <Header/>
              <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/Error' component={Errorpage}/>
              </Switch>
          </section>
      </div>
     );
  }
}
 
export default App;



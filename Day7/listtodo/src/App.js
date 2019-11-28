import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Homepage from './Pages/Homepage'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Homepage/>
      </div>
     );
  }
}
 
export default App;

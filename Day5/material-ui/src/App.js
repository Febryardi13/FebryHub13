import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import Content from './components/container'
import Loading from './components/loading'
import Contain from './components/contain'
import Container from './components/contain';

class App extends Component {
  state = {
      stnk:[],
      loading:true,
      angka:0

  }

  componentDidMount(){
    this.setState({stnk:
      [{nama:'Bobi',kendaraan:'Ambulance',warna:'Hot Pink'},
        {nama:'Dzaky',kendaraan:'MRT', warna:'Orange'},
        {nama:'Anya',kendaraan:'busway',warna:'ungu'}
      ]
    })
    this.setState({loading:false})
  }

  ubahAngkaOnClick=(a)=>{
    this.setState((prevstate)=>{
      return {
        angka:prevstate.angka+1
      }
    })
  }




  render(){
    const {loading,stnk} = this.state
    if(loading){
      return <div></div>
    }
    return (
      <div>
        <Header namauser={'Febry'}/>
        <div>{this.state.angka}</div>
        <Content stnk={stnk} tambahangka={this.ubahAngkaOnClick}/>
        <Container>
          Test
        </Container>
      </div>
    )
  }
}

export default App
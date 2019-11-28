import React, {Component} from 'react';
import './App.css';
import Footer from './component/Footer'

class App extends Component{

  // Penggunaan state bag. 1
  constructor(){
    super()
    this.state = {nama:'Ardi', usia:21}
  }

  //Handling event - clcik event
  klik(){
    alert('Tombol sudah diklik !')
  }

  //Click with param
  klikParam(siapa){
    alert(`Hallo kakak ${siapa} ?`)
  }

  klikUpdate(){
    this.setState({user:this.refs.nama.value})
  }

  render(){

    //updating state
    setTimeout(()=>{
      this.setState({nama:'Mukti',usia:30})
    }, 4000)
    
    //Penggunaan props bag-1
    var text = 'Hak cipta dilindungi'
    var listuser = {nama:'Permana',usia: 25}
    return (
      <div>
        <h1>Selamat Datang Febry</h1>
        {/* Penggunaan state bag. 1 */}
        <h2>Hallo {this.state.nama}</h2>
        {/* updating state */}
        <h2>{this.state.nama} berumur = {this.state.usia} tahun</h2>
        {/* Penggunaan props bag-1 */}
        {/* <Footer konten={text}/> */}

        {/* Penggunaan props bag-2 */}
        {/* <Footer userName={listuser.nama} userUsia={listuser.usia}/> */}

        {/* Penggunaan state to props*/}
        <Footer userName={this.state.nama} userUsia={this.state.usia}/>

        {/* Penggunaan click event */}
        <button onClick={this.klik}>
          Coba Klik !
        </button>
        <br></br>

        {/* Penggunaan click event with param*/}
        <button onClick={()=>this.klikParam('Febry')}>
          Coba Klik 2
        </button>
        <br></br>


      </div>
    )
  }
}

export default App



import React, {Component} from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'

class App extends Component{

  //Insert function
  hitung(x){
    return x*x
  }

  //Insert constructor
  constructor(){
    super()
    this.nama = 'Ansari'
  }

  render(){
    //Insert variable
    var nama = 'Ardi'
    
    //Inline CSS
    var styles = {
      color:'yellow',
      background:'black'
    }


    //Embedding Expression
    function namaFull(id) {
      return id.nama + ` ` + id.marga
    }

    const id = {
        nama:'Hendry',
        marga:'Siahaan'
    }

    //Conditional rendering
    const login = (x) =>{
      const udahLogin = x
      if(udahLogin){
        return 'Anda sudah login'
      }
      return 'Anda belum login'
    }


    //Rendering multiple components
    const siswa = ['Andi', 'Budi', 'Yanti']
    const listSiswa = siswa.map((siswa)=>
      <li>{siswa}</li>
    )


    //Rendering multiple components with key index
    const mobil = ['Kijang','Jazz','Toyota']
    const listMobil = mobil.map((mobil,i)=>
    <li key={i}>{mobil}</li>
    )

    return (
      // insert inline css
      <div style={styles}>
        <Header />
        <h1>Hello Febry!</h1>
        {/* insert varible */}
        <h2>Hello {nama}!</h2>
        {/* insert function */}
        <h2>Hasil hitung = {this.hitung(3)}</h2>
        {/* user value with constructor */}
        <h2>Nama "{this.nama}" diambil dari constructor</h2>
        {/* Embedding Expression */}
        <h2>Hello {namaFull(id)}</h2>
        {/* Conditional rendering */}
        <h2>Selamat anda {login(true)}</h2>
        {/* Rendering multiple components */}
        <h2>Daftar siswa: {listSiswa}</h2>
        {/* Rendering multiple components with key index */}
        <h2>{listMobil[0]}</h2>
        <Footer />
      </div>
    )
  }
}
export default App;

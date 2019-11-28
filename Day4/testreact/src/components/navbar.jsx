import React,{Component} from 'react';

class Navbar extends Component{
    state = { 
            nama:'febry',
            angka:0,
            umur:12,
            mobil:['Avanza','Inova','Jazz']
    }

    //untuk merubah state
    componentDidMount(){
        //console.log('masuk did amount')
        var nama = this.state.nama + '1'
        //console.log(this.state.nama)
        this.setState({nama})
        //console.log(this.state.nama)
        this.setState({nama:'Ardi'})
    }

    onTambahClick = ()=>{
        var angkaBaru = this.state.angka+1
        this.setState({angka:angkaBaru})
    }

    onKurangClick = () =>{
        this.setState(({angka})=>{
            var newAngka = angka-1
            if(newAngka<0){
                return{
                    angka:0
                }
            }
            return{
                angka:angka-1
            }
        })
    }


    render(){
        //console.log('render1')
        if(this.state.nama){
            return (
                <div>
                    {/* {this.state.nama}<br/>
                    {this.state.umur} */}
                    <div>
                        {this.state.angka}<br/>
                        <button onClick={this.onTambahClick} > + </button>
                        <button onClick={this.onKurangClick}> - </button>
                    </div>
                </div>
            );
        }else{
            return (<div>Loading...</div>)
        }
    }
}

export default Navbar
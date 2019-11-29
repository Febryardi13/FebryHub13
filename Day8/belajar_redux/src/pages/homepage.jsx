import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Tambahactions, Kurangactions, Resetactions} from './../redux/actions'


class Homepage extends Component {
    state = {  }

    onTambahClick = () =>{
        this.props.Tambahactions()
    }

    onKurangClick = () =>{
        this.props.Kurangactions()
    }


    render() { 
        return ( 
            <div className='d-flex justify-content-center mt-5'>
                <button onClick={this.onKurangClick} className='btn btn-primary mr-3'> - </button>
                {this.props.Angka}
                <button onClick={this.onTambahClick} className='btn btn-primary mr-3 ml-3'> + </button>
                <button onClick={this.props.Resetactions}> Reset </button>
            </div>
         );
    }
}

const MapStateToProps = (state)=>{
    return{
        Angka:state.vault
    }
}
 
export default connect(MapStateToProps,{Tambahactions, Kurangactions, Resetactions})(Homepage);
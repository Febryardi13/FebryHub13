import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return (
            <div>
                {/* Penggunaan props bag-1 */}
                <h3>{this.props.konten}</h3>
                
                {/* Penggunaan props bag-2 */}
                <h2>Hello kak {this.props.userName}</h2>
                <h2>Usianya {this.props.userUsia} ya??</h2>

                 {/* Penggunaan state to props */}
                <h2>Hello ini benar dengan kak {this.props.userName} ?</h2>

                 {/* Penggunaan click event */}
                <h2>dan usia kak {this.props.userName} adalah {this.props.userUsia} ya?</h2>

                 {/* Penggunaan click event with param*/}
                 
            </div>
        )
    }
}
export default Footer
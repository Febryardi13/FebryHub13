import React, {Component} from 'react'

class Container extends Component{
    state = { }
    render(){
        return (
            <div stye={{color:'red'}}>
                {this.props.children}
            </div>
        )
    }
}

export default Container
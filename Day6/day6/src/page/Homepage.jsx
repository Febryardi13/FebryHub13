import React, {Component} from 'react';
import Jumbotron1 from './../component/Jumbotron1'
import Jumbotron2 from './../component/Jumbotron2'
import Jumbotron3 from './../component/Jumbotron3'
import Jumbotron4 from './../component/Jumbotron4'
import Jumbotron5 from './../component/Jumbotron5'
import Jumbotron6 from './../component/Jumbotron6'
import Footer from '../component/Footer';

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section class="section1">
                    <Jumbotron1/>
                </section>
                <section cclas="bodyDua">
                    <Jumbotron2/>
                </section>
                <section class="bodyTiga">
                    <Jumbotron3/>
                </section>
                <section class="bodyEmpat">
                    <Jumbotron4/>
                </section>
                <section clas="bodyLima">
                    <Jumbotron5/>
                </section>
                <section clas="bodyEnam"> 
                    <Jumbotron6/>
                </section>
                <section clas="footerBody">
                    <Footer/>
                </section>
            </div>
         );
    }
}
 
export default Homepage;
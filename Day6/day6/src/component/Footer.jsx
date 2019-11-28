import React, {Component} from 'react';
import logo2 from './../component/img/logo2.png'
import {FaPlayCircle} from 'react-icons/fa'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="footerBody">
                <div className="elemen">
                    <h2>Take back control of your video strategy.</h2>
                    <h4>From upload to delivery, we've got you covered with sophisticated tools and <br /> expert guidance to help you successfully engage viewers and monetize.</h4>
                    <button className="buttonstarted">Get Started &nbsp;<FaPlayCircle /></button>
                </div>
                <div className="elemenbawah">
                    <div className="logobawah">
                    <img src={logo2} alt="" />
                </div>
                    <div className="copyright">
                        <p>© 2007-2019 Longtail Ad Solutions, Inc. All Rights Reserved. JW Player is a registered trademark.</p>
                    </div>
                    <div className="policy">
                        <p>Terms of Service | Privacy Policy | Ad Choices | DMCA | Contact Us</p>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Footer;
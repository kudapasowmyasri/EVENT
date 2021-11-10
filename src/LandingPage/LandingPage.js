import React from 'react'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <p className="welcome">  EVENT MANAGEMENT</p>
            <div className="footer">
            <div className="land-box ">
                <p className="call">Call us @ +91- 9848012345</p>
                <p className="mail">Mail us @ eventmail.gmail.com </p>
                <p className="located">Located @  Hyderabad</p>
            </div>
                <div>
                    <div>
                        <p>Terms and Conditions</p>
                        <ul>
                            <li><Link>FAQ</Link></li>
                            <li><Link>Terms</Link></li>
                            <li><Link>Privacy</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default LandingPage

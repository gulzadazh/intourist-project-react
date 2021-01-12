import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div>
            <div className='footer-container'>

                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>Our Mission</Link>
                            <Link to='/'>Our Team</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Destinations</h2>
                            <Link to='/sign-up'>Lakes</Link>
                            <Link to='/'>Hiking</Link>
                            <Link to='/'>Mining</Link>
                            <Link to='/'>A camping trip</Link>
                            <Link to='/'>Group tours</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/sign-up'><a href="https://www.facebook.com"><FacebookIcon style={{ fontSize: "40", color: "#f50057" }} /></a></Link>
                            <Link to='/'><a href="https://www.instagram.com"><InstagramIcon style={{ fontSize: "40", color: "#f50057" }} /></a></Link>
                            <Link to='/'><a href="https://www.twitter.com"><TwitterIcon style={{ fontSize: "40", color: "#f50057" }} /></a></Link>
 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer

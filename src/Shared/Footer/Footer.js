import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer px-20 bg-teal-200 py-10">
            <div>
                <img src={logo} alt="" className='lg:ml-4' style={{ height: '5em', width: '5em' }} />
                <p>Traveloholic Soul<br />Tale of a Traveler</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
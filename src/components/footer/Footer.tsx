import React, { useEffect } from 'react';
import './Footer.scss';
import LogoImg from '../../assets/Logo.png';
import { FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube 
} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <footer className="footer">
        <div className="footer__container wrapper" data-aos='fade-up'>
            <div className="footer__col">
                <img src={LogoImg} alt="logo-footer" />
                <p>
                    Posuere ac in in nisl sed augue. Ultrices eget pretium sit euismod mi id Posuere
                    ac in in nisl sed augue.
                </p>
            </div>

            <div className="footer__col">
                <h3>About</h3>
                <a href="#">About us</a>
                <a href="#">Features</a>
                <a href="#">News</a>
            </div>

            <div className="footer__col">
                <h3>Company</h3>
                <a href="#">Cryptocode</a>
                <a href="#">Securities</a>
                <a href="#">Rankings</a>
            </div>

            <div className="footer__col">
                <h3>Support</h3>
                <a href="#">FAQs</a>
                <a href="#">Support</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="footer__col">
                <h3>Socials</h3>
                <div className="footer__icons">
                    <a href="#" className="footer__icon">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="footer__icon">
                        <FaInstagram />
                    </a>
                    <a href="#" className="footer__icon">
                        <FaTwitter />
                    </a>
                    <a href="#" className="footer__icon">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="footer__icon">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
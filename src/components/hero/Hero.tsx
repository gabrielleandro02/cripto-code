import React, { useEffect } from 'react';
import '../hero/Hero.scss';
import Mob from '../../assets/Mob.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    });

  return (
    <section className='hero'>
        <div className="hero__container wrapper">
            <div className="hero__left" data-aos='fade-right'>
                <img src={Mob} alt="mob" />
            </div>
            <div className="hero__right" data-aos='zoom-in-up'>
                <h1>Make easer your crypto transactions.</h1>
                <p>
                    Our cryptocurrency offers a fast, secure and offordable alternative
                    for all of your financial needs. Join the cryptocurrency revolution
                    today and take control of your financial future. Sign up now to
                    start using our platform for yourself.
                </p>
                <a href="#" className='btn'>TRY FOR FREE</a>
            </div>
        </div>
    </section>
  );
}

export default Hero;
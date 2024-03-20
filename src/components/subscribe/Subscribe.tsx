import React, { useEffect } from 'react';
import './Subscribe.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <div className="section subscribe">
        <div className="subscribe__container wrapper">
            <h2 data-aos='fade-up'>Subscribe & get news updates</h2>
            <p data-aos='fade-up'>
                Duis massa posuere commodo sed tortor ultrices accumsan augue. Aliquet 
                bibendum placerat vivamus diam ullamcorper vitae sapien auctor ut.
                Suspendisse donec id aenean dian dolor nec vitae massa id. Velit
                nullan consequat orci amet fames sed. Amet tincidut adipiscing varius maecenas adipiscing.
            </p>
            <form action="#" data-aos='fade-up'>
                <input type="email" placeholder='Write Your Email Here' />
                <a href="#" className="btn">
                    Subscribe
                </a>
            </form>
        </div>
    </div>
  );
}

export default Subscribe;
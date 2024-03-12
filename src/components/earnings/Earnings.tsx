import React, { useEffect } from 'react';
import '../earnings/Earnings.scss';
import Img from '../../assets/earnings.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Earnings: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left">
          <img src={Img} alt='earnings-left' data-aos='fade-right'></img>
        </div>
        <div className="earnings__right" data-aos='zoom-in-up'>
          <h2>
            Track your earnings and cryptocode made it easy
          </h2>
          <p>
            Nulla dui ultrices sed nam ligula dignissim tellus. Sem semper lorem
            facilisis ut met tincidunt adispiscing maecenas.
          </p>
          <a href="#" className='btn'>
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
}

export default Earnings;
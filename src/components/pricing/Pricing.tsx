import React , { useEffect }from 'react';
import '../pricing/Pricing.scss';
import { pricingInfo } from '../../Data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Pricing: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <section className='pricing'>
        <h2 data-aos='fade-up'>Best crypto currency.</h2>
        <div className="pricing__container wrapper">
            {
                pricingInfo.map(({ image, name, price }, index) => (
                    <div className="pricing__card" data-aos='fade-up'>
                        <img src={image} alt={name} key={index} />
                        <h3>{name}</h3>
                        <span>{price}</span>
                        <a href="#" className="btn">Buy It Now</a>
                    </div>
                ))
            }
        </div>
    </section>
  );
}

export default Pricing;
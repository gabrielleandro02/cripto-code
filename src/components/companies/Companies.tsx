import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../companies/Companies.scss';
import { companyInfo } from '../../Data'; 

const Companies: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
    <section className="companies">
        <div className="companies__container wrapper" data-aos='fade-up'>
            {
                companyInfo.map(({ id, img }) => (
                    <img src={img} key={id} alt={`company-${id}`} />
                ))
            }
        </div>
    </section>
  );
}

export default Companies;
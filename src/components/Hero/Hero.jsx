import React from 'react';
import logo from '../../images/svg-0.svg';
import hero from '../../images/product-screen.png';
import arrowpic from '../../images/svg-1.svg';
import barcode from '../../images/svg-2.svg';
import DownloadButton from '../downloadbutton/DownloadButton';
import './hero.scss';

const Hero = ({ type }) => {
  return (
    <div className='hero-bg pb-1 pb-md-5 d-flex flex-column flex-md-row align-items-center  text-center text-md-start justify-content-md-between'>
      <div className='left-box d-flex flex-column align-items-center align-items-md-start'>
        <div className='logo-box pt-3 pt-md-0 mt-md-0 my-4'>
          <img className='img-fluid' src={logo} alt='logo-pic' />
        </div>
        <h1 className='hero-text mb-4' style={{ color: '#f8f9fa' }}>
          The simplest & coolest way to pay for anything.
        </h1>
        <p className='body-text text-center text-md-start px-1  py-3 py-md-0'>
          Pay for anything and get paid with ease; no delays, no downtime,
          highly secure. Just enter an abeg tag or phone number
        </p>
        <div className='barcode-wrapper pt-1 pt-xl-2 d-md-flex'>
          <div className='barcode-text-box '>
            <p className='scan-text text-white'>
              Scan to <br /> Download <br /> Abeg App
            </p>
            <div className='barcode-arrow' style={{ width: '3.5rem' }}>
              <img className='img-fluid' src={arrowpic} alt='hero-pic' />
            </div>
          </div>
          <div className='barcode-img-box ms-4'>
            <img className='img-fluid' src={barcode} alt='barcode' />
          </div>
        </div>
      </div>
      <div className='right-box align-self-md-baseline'>
        <div className='d-none image-lg d-md-block'>
          <img className='img-fluid' src={hero} alt='bar-code-img' />
        </div>
        <div
          className='d-md-none mb-4'
          style={{
            width: '280px',

            // background: `linear-gradient(to top, rgb(0, 0, 0), #151515), url(${hero})`,
          }}
        >
          <img className='img-fluid' src={hero} alt='bar-code-img' />
        </div>
      </div>
      <DownloadButton type='hero-props' />
    </div>
  );
};

export default Hero;

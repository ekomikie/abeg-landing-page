import React from 'react';
import sendIcon from '../../images/sendIcon.svg';
import protectIcon from '../../images/protectIcon.svg';
import wishlistIcon from '../../images/wishlistIcon.svg';

import pro from '../../images/pro.svg';
import tickets from '../../images/tickets.svg';
import shop from '../../images/shop.svg';
import badges from '../../images/badges.png';
import virtualcards from '../../images/virtualcards.svg';
import giveaways from '../../images/giveaways.svg';
import clock from '../../images/clock.svg';

import './card.scss';

const Card = ({ type }) => {
  let data;

  switch (type) {
    case 'sendMoney':
      data = {
        bodyClassName:
          'send-class d-flex flex-column col align-items-center my-4',

        icon: (
          <div className='icon-box'>
            <img src={sendIcon} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Send Money',
        text: ' Transfer money easily just enter an abeg tag or a phone number',
      };
      break;
    case 'payMoney':
      data = {
        bodyClassName:
          'pay-money d-flex flex-column col justify-content-center align-items-center my-4',

        icon: (
          <div className='icon-box'>
            <img src={protectIcon} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Pay Securely',
        text: ' Protect your money with escrow and make sure you get what you paid for',
      };
      break;
    case 'giveaways':
      data = {
        bodyClassName:
          'give-away d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={giveaways} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Giveaways',
        text: ' Join giveaways happening live, on Abeg app or host one',
      };
      break;
    case 'wishlist':
      data = {
        bodyClassName:
          'wishlist d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={wishlistIcon} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Wishlist',
        text: ' Show your friends what you want so they can help you get it in a click',
      };
      break;

    case 'pro':
      data = {
        bodyClassName:
          'pro-coming-soon d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={pro} alt='send-pic' className='img-fluid' />
            <div className='coming-soon d-flex'>
              <img src={clock} alt='clock-pic' />
              <p>Coming soon</p>
            </div>
          </div>
        ),
        title: 'Start selling on Abeg App',
        text: 'Create a stand to buya nd sell securely on Abeg App with escrow',
      };
      break;
    case 'shop':
      data = {
        bodyClassName:
          'shop d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={shop} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Shop on Abeg',
        text: 'Explore and buy from different merchants on Abeg',
      };
      break;
    case 'tickets':
      data = {
        bodyClassName:
          'tickets d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={tickets} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Buy Tickets',
        text: ' Buy concert tickets to your favorite artists shows and easily check in',
      };
      break;
    case 'virtualcards':
      data = {
        bodyClassName:
          'virtual-cards d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={virtualcards} alt='send-pic' className='img-fluid' />
            <div className='coming-soon d-flex'>
              <img src={clock} alt='clock-pic' />
              <p>Coming soon</p>
            </div>
          </div>
        ),
        title: 'Virtual cards',
        text: ' Pay for anything online without trouble with virtual cards',
      };
      break;
    case 'badges':
      data = {
        bodyClassName:
          'badges d-flex flex-column col justify-content-center align-items-center mb-4',

        icon: (
          <div className='icon-box'>
            <img src={badges} alt='send-pic' className='img-fluid' />
          </div>
        ),
        title: 'Get Badges',
        text: ' Get super rare badges just by using Abeg app',
      };
      break;
    default:
      break;
  }
  return (
    <div className={data.bodyClassName}>
      <div>{data.icon}</div>
      <h3 className='title-style'>{data.title}</h3>
      <span
        className='card-text text-center fw-bold'
        style={{ color: 'rgba(108, 117, 125, 0.5)' }}
      >
        {data.text}
      </span>
    </div>
  );
};

export default Card;

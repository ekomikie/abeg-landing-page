import Card from './Card';
import './column.scss';

const Column = ({ type }) => {
  return (
    <div className='d-flex pt-md-3 container-fluid card-container flex-column flex-md-row justify-content-md-between flex-wrap'>
      <div className='card-1'>
        <Card type='sendMoney' />
      </div>
      <div className='card-2'>
        <Card type='payMoney' />
      </div>
      <div className='card-3'>
        <Card type='wishlist' />
      </div>
      <div className='card-1'>
        <Card type='giveaways' />
      </div>
      <div className='card-5'>
        <Card type='pro' />
      </div>
      <div className='card-6'>
        <Card type='shop' />
      </div>
      <div className='card-6'>
        <Card type='tickets' />
      </div>
      <div className='card-6'>
        <Card type='virtualcards' />
      </div>
      <div className='card-6'>
        <Card type='badges' />
      </div>
    </div>
  );
};

export default Column;

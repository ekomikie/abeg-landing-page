import './wavybackground.scss';
import DownloadButton from '../downloadbutton/DownloadButton';

const WavyBackground = ({ type }) => {
  return (
    <div className='wavy-wrapper'>
      <h3 className='text-white footer-header fw-bold text-center'>
        Download the app Abeg
      </h3>
      <p
        className='download-text text-center mt-4 mb-5 mb-md-0'
        style={{ color: '#6c757d' }}
      >
        Pay for anything and get paid with ease; no delays, no downtime, highly
        secure. Just enter an abeg tag or phone number
      </p>
      <DownloadButton type='download-props' />
    </div>
  );
};

export default WavyBackground;

import apple from '../../images/apple.svg';
import googlePlay from '../../images/google.svg';
import './download.scss';
const DownloadButton = ({ type }) => {
  const blank = '_blank';
  let data;

  switch (type) {
    case 'hero-props':
      data = {
        bodyClassName:
          'hero-button-box d-flex d-md-none justify-content-center gap-3 align-items-center flex-column',
      };

      break;
    case 'download-props':
      data = {
        bodyClassName:
          'download-buttons d-flex flex-column align-items-center justify-content-center flex-md-row gap-3 gap-md-4 ',
      };
      break;
    default:
      break;
  }

  return (
    <div className={data.bodyClassName}>
      <a
        className='apple-link '
        href='https://apps.apple.com/ng/app/abeg/id1532676793'
        target={blank}
      >
        <button
          className='apple-btn d-flex flex-row align-items-center justify-content-center btn py-1 px-4 '
          style={{ backgroundColor: '#eeebf4', color: '212337' }}
        >
          <img style={{ width: '1rem' }} src={apple} alt='apple-pic' />

          <p className='app-store'>App Store</p>
        </button>
      </a>

      <a
        className='google-link'
        href='https://play.google.com/store/apps/details?id=com.abegapp'
        target={blank}
      >
        <button
          className='google-btn d-flex flex-row align-items-center justify-content-center btn py-1 px-4 '
          style={{ backgroundColor: '#eeebf4', color: '212337' }}
        >
          <img style={{ width: '1rem' }} src={googlePlay} alt='apple-pic' />

          <p className='google-play'>Google Play</p>
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;

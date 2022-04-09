import logo from '../../images/abeg-logo.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import tiktok from '../../images/tiktok.svg';
import facebook from '../../images/facebook.svg';
import './footer.scss';

const Footer = () => {
  const blank = '_blank';
  return (
    <div className='footer-container'>
      <p className='pt-5 pb-3 footer-copyright text-center'>
        <span> &#169;2022 Abeg Technologies.</span>
      </p>
      <p className='footer-text pb-4'>
        Abeg App is a lifestyle platform, not a bank. <br />
        Banking services provided by <span className='fw-bold'>VFD MFB.</span>
      </p>

      <div className='text-center my-5 mx-auto footer-logo'>
        <img className='img-fluid' src={logo} alt='logo-pic' />
      </div>
      <div className='social-icons-container pt-4 pb-3 gap-5'>
        <a
          href='https://instagram.com/abeg.app?igshid=1nap890j2n4p0'
          target={blank}
          className='social-icon'
        >
          <img className='img-fluid' src={instagram} alt='logo-pic' />
        </a>
        <a
          href='https://twitter.com/abeg_app?s=09'
          className='social-icon'
          target={blank}
        >
          <img className='img-fluid' src={twitter} alt='logo-pic' />
        </a>
        <a
          href='https://vm.tiktok.com/ZMLYJRgF4/'
          className='social-icon'
          target={blank}
        >
          <img className='img-fluid' src={tiktok} alt='logo-pic' />
        </a>
        <a
          href='https://m.facebook.com/abegapp/?ref=bookmarks'
          target={blank}
          className='social-icon'
        >
          <img className='img-fluid' src={facebook} alt='logo-pic' />
        </a>
      </div>
    </div>
  );
};

export default Footer;

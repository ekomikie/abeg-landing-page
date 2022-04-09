import { FootMenuItems } from './FootMenuItems';
import './mainlinks.scss';
const Mainlinks = () => {
  const blank = '_blank';
  return (
    <div className=''>
      <ul className='link-container pe-2 pe-md-0'>
        {FootMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a target={blank} className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Mainlinks;

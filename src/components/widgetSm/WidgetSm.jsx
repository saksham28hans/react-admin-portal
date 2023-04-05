import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="/images/saksham.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saksham Hans</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/images/saksham.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saksham Hans</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/images/saksham.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saksham Hans</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/images/saksham.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saksham Hans</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="/images/saksham.jpg" alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saksham Hans</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;

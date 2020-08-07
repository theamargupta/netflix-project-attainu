import React from 'react';
import './index.scss';
import netflix from '../../Assets/netflix.svg';

const Logo = () => {
  return (
    <div id='logo' className='Logo'>
      <img src={netflix} alt='' />
    </div>
  );
};

export default Logo;

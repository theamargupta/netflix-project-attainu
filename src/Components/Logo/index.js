import React from 'react';
import netflix from '../../Assets/netflix.svg';
import './index.scss';

const Logo = () => {
  return (
    <div id='logo' className='Logo'>
      <img src={netflix} alt='' />
    </div>
  );
};

export default Logo;

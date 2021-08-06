import React from 'react';
import editicon from '../../Assets/images/icons8-edit.svg';
import './index.scss';

const Logo = ({ src }) => {
  return (
    <div
      id='editicon'
      style={{
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='editicon'
    >
      <img src={editicon} alt='editicon' />
    </div>
  );
};

export default Logo;

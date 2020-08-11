import React from 'react';
import styled from 'styled-components';
import Img from '../../../Assets/images/tab-1-pic.png';
const TabContentDevice = () => {
  return (
    <TabContentContainer>
      <div className='container'>
        <div className='tab-content-device'>
          <span className='content-text'>
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime
          </span>
          <br />
          <button className='try-now-btn'>Try it now</button>
          <img src={Img} alt='' />
        </div>
      </div>
    </TabContentContainer>
  );
};

export default TabContentDevice;

// Main Container

const TabContentContainer = styled.div`
  background: var(--main-deep-dark);
  .container {
    margin: 0 10%;
  }
  img {
    width: 31.5rem;
    margin-top: -12rem;
    margin-left: 5rem;
  }

  .tab-content-device {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
  }

  .try-now-btn {
    background: var(--main-red);
    display: inline-block;
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 0 70%;
    padding: 1rem;
    border-radius: 0.18rem;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    margin-top: -1rem;
    margin-left: -0.01rem;
    &:hover {
      background: var(--main-red-hover);
    }
  }
  .content-text {
    margin-top: 5rem;
  }
`;

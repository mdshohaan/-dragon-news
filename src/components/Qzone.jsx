import React from 'react';
import classImg from '../assets/class.png';
import groundImg from '../assets/playground.png';
import Swim from "../assets/swimming.png";

const Qzone = () => {
  return (
    <div className='flex flex-col gap-7 bg-base-300 justify-center items-center py-3'>
      <h2 className='font-bold'>Q-Zone</h2>
      <div>
        <img src={Swim} alt="" />
      </div>
      <div>
        <img src={classImg} alt="" />
      </div>
      <div>
        <img src={groundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
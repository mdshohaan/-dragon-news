import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
            <h2 className='font-semibold mb-3'>Login with Us</h2>
            <div className="join flex join-vertical *:bg-base-100 shadow-sm">
  <button className="btn join-item justify-start"> 
    <FaFacebook color='blue'></FaFacebook> Facebook
  </button>
  <button className="btn join-item justify-start"> 
    <FaTwitter color='blue'></FaTwitter> Twitter
  </button>
  <button className="btn join-item justify-start"> 
    <FaInstagram color='pink'></FaInstagram> Instagram
  </button>

</div>
    </div>
  );
};

export default FindUs;
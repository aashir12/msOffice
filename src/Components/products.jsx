import React, { useState } from 'react';
import '../App.css';
import Pics from './pics';

const Products = () => {
  var [number, setNumber] = useState(0);

  const handleBoxClick = (index) => {
    setNumber(index);
  };

  const boxClass = (index) => {
    return `text-[10px] sm:text-2xl  box w-[33%] h-10 p-8 bg-[#F9DBD0] text-[#792000]  rounded-t-lg mt-8 flex justify-center items-center  font-semibold cursor-pointer ${number === index ? 'active' : ''}`;
  };

  return (
    <>
      <div className='cover w-full bg-[#FFF4ED]'>
        <div className='boxes w-[80%] flex justify-between  m-auto  '>
          <div className={boxClass(0)} onClick={() => handleBoxClick(0)}>
            For Home
          </div>
          <div className={boxClass(1)} onClick={() => handleBoxClick(1)}>
            For Organisations
          </div>
          <div className={boxClass(2)} onClick={() => handleBoxClick(2)}>
            For Educators
          </div>
        </div>

       
          {/* Pics Cover */}
         
          <Pics a={number}/>

         {/* QR Code page */}
         <div className='qr h-full product-bg  '>
          <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-4xl font-bold text-center'>Get the free Microsoft 365 mobile app</h1>

            <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/store-buttons-747d2c674f.png' className='w-72'/>
            <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/qr-code-2be9b68eed.png' />
          </div>
          <div className='flow flex flex-wrap gap-10 ml-8 h-24 mt-28 lg:ml-24'>
            <h3 className='text-2xl '>Fow Microsoft 365</h3>
  
       <i class="fa-brands fa-linkedin-in   cursor-pointer hover:translate-y-[-6px] transition-all lg:text-3xl"></i>
            <i class="fa-brands fa-facebook-f  cursor-pointer hover:translate-y-[-6px] transition-all lg:text-3xl"></i>
            <i class="fa-brands fa-twitter  cursor-pointer hover:translate-y-[-6px] transition-all lg:text-3xl"></i>
            <i class="fa-brands fa-instagram  cursor-pointer hover:translate-y-[-6px] transition-all lg:text-3xl"></i>
      
          </div>
         </div>
        </div>
    </>
  )
}

export default Products
import React, { useEffect, useState } from 'react';
import Data from '../Data/home';
import Organisation from '../Data/Organisations';
import Educators from '../Data/educators'

const Pics = ({a}) => {
   
   var [ali,stateFun]=useState([...Data]);
  

   
   useEffect(
    ()=>{
        if(a===0){
           
            stateFun([...Data]);
            console.log(ali)
        }
        else if(a===1){
            stateFun([...Organisation]);
            console.log(ali)

            
        }
        else if(a===2){
            stateFun([...Educators]);
            console.log(ali)
          
        }
       
    },[a]

 )
  
 

  return (
   <>
     <div className='singleBoxCover w-[100%] pb-20 rounded-b-lg
         '>
          {/* { First Pic} */}
          <div className='singleBox w-[80%] bg-white  m-auto'>
            <div className='insideBox text-center py-14'>
              <h1 className=' text-2xl  font-bold text-[#242424] '>{ali[0].heading}</h1>
              <p className='w-[70%] m-auto text-[#242424] lg:w-[35%] '>{ali[0].desc}</p>
              <img src={ali[0].image} className='mx-auto px-6'/>
            </div>
          </div>
          {/* Second pic */}
          <div className='singleBox w-[80%] bg-white  m-auto '>
            <div className='insideBox py-14 flex flex-col lg:flex-row'>
           <div className='lft ml-8 mt-36 w-full md:ml-8 lg:ml-24'>
           <h1 className='text-4xl font-black text-white bg-[#D83B01] 
            w-[50px] h-[50px]  rounded-full text-center '>{ali[1].favicon}</h1>
              <h1 className='w-[70%] text-4xl  font-bold text-[#242424] py-3 break-words'>{ali[1].heading}</h1>
              <p className='w-[70%]  text-[#242424] text-lg lg:w-[70%] py-3 break-words'>{ali[1].desc}</p>
              <p className='text-[#D83B01] py-3'>{ali[1].link}</p>
           </div>
              <img src={ali[1].image} className='mx-auto p-6  lg:w-[50%] lg: mr-24 md:w-[150%] md:h-[150%] md:my-auto'/>
            </div>
          </div>

          {/* Third pic */}
          <div className='singleBox w-[80%]  m-auto bg-white rounded-b-3xl'>
            <div className='insideBox flex flex-col lg:flex-row py-14'>
            <img src={ali[2].image} className='w-100% mx-auto p-6 md:ml-0  lg:w-[50%] lg:ml-0 md:w-[150%] md:h-[150%] '/>
           <div className='lft ml-8 mt-24 lg:lft ml-36 mt-36 md:w-full'>
            <i className={`text-4xl text-[#D83B01] ${ali[2].favicon}`}/>
              <h1 className='w-[70%] text-4xl  font-bold text-[#242424] py-3 break-words'>{ali[2].heading}</h1>
              <p className='w-[70%]  text-[#242424] text-lg lg:w-[70%] py-3 break-words'>{ali[2].desc}</p>
              <p className='text-[#D83B01] py-3'>{ali[2].link}</p>
           </div>
            </div>
          </div>
         </div>
   </>
  )
}

export default Pics
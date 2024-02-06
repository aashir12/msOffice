import React from 'react'
import '../App.css'

const Land = () => {
  return (
    <>
        <div className='cover bg-[#E4E9FC]  flex justify-center items-center flex-col '>
            <div className='boxer w-[80%] text-center md:w-[50%] lg:my-2 lg:w-[40%]' >
                <img src='/capture.png'
                    className='m-auto'
                />
                <h1 className='text-4xl font-[600] text-gradient md:text-3xl'>Office is now Microsoft 365</h1>
                <p className='text-lg p-4 my-1 text-[#014]'>The all-new Microsoft 365 lets you create, share and collaborate all in one place with your favorite apps</p>
                <button className='w-32 bg-[#434CE0] mx-2 py-1.5 rounded text-center text-white
                text-lg px-1 my-2 lg:my-0.5'>Sign in</button>
                <button className='w-auto bg-white border-2 border-[#434CE0] mx-2 py-1.5 rounded text-center text-[#434CE0]
                text-lg px-1 '>Get Microsoft 365</button>
                <p className='text-lg py-3  text-[#434CE0]'>Sign up for free version of Microsoft 365 -></p>
            </div>
            <div className='flex justify-center items-center h-[60vmax] img-bg'>
            <img src='https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/unauth-m365-hero-treatment-b-288e7c77d3.png' className='w-[90%]   rounded-3xl '/>
            </div>
        </div>
    </>
  )
}

export default Land
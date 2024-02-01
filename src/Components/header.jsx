import React from 'react'

const Header = () => {
  return (
   <>
    <div className='head-content flex justify-between font-[#262626] mx-28 '>
        <div className='lft flex gap-4 my-3'>
            <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' className='w-24 h-6'/>
            <h1 className='font-black hidden md:block'>|</h1>
            <h1 className='font-light-bold hidden md:block'>Microsoft 365</h1>

        <div className='hidden lg:block'>
        <div className='list flex gap-4'>
                <h4 className='text-sm font-light'>dropdown</h4>
                <h4 className='text-sm font-light'>dropdown</h4>
                <h4 className='text-sm font-light'>Tempelates</h4>
                <h4 className='text-sm font-light'>Tempelates</h4>
                <h4 className='text-sm font-light'>My account</h4>
                <div className='button border-solid border-2 border-black px-1 rounded'>Buy Now</div>
            </div>
        </div>
        </div>
        <div className='rft flex flex-wrap gap-3 my-3'>
        <h4 className='text-sm font-light hidden md:block '>dropdown</h4>
        <h4 className='text-sm font-light'>Sign In</h4>
        </div>
    </div>
   </>
  )
}

export default Header
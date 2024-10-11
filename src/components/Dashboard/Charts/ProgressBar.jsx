// eslint-disable-next-line no-unused-vars
import React from 'react'
import './progress.css'
function ProgressBar() {
  return (
    <>
        <hr className=" mt-8 border-gray-600 my-2" />
        <h2 className="flex justify-center text-base pl-4 text-left text-white">CUSTOMERS PROGRESS</h2>
        <div className='text-white'>
        <div className='experience-item'>
            <div className='experience-info flex justify-between'>
                <p>Nestle Pakistan</p>
                <p>80%</p>
            </div>
            <div className='progress-line '  data-percent="80%">
                <span className='bg-[#047aff]' style={{width: "80%"}}></span>
            </div>
        </div>
        <div className='experience-item'>
            <div className='experience-info flex justify-between'>
                <p>Descon Engineering</p>
                <p>70%</p>
            </div>
            <div className='bg progress-line' data-percent="70%">
                <span className='bg-[#d73948]' style={{width: "70%"}}></span>
            </div>
        </div>
        <div className='experience-item'>
            <div className='experience-info flex justify-between'>
                <p>Ramay Textile</p>
                <p>60%</p>
            </div>
            <div className='progress-line' data-percent="60%">
                <span className='bg-[#26a743]' style={{width: "60%"}}></span>
            </div>
        </div>
        <div className='experience-item'>
            <div className='experience-info flex justify-between'>
                <p>Hubco Power</p>
                <p>45%</p>
            </div>
            <div className='progress-line' data-percent="45%">
                <span className='bg-[#f7c119]' style={{width: "45%"}}></span>
            </div>
        </div>

        </div>
    </>
  )
}

export default ProgressBar
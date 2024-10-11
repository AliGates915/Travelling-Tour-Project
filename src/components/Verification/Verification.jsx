/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Verification() {
  const navigate = useNavigate();
  const move = () => navigate('/certificate')
  return (
    <div className='mt-8 ml-8'>
      <button 
         type="submit"
         onClick={move}
         className=" bg-green mr-2 text-white font-medium 
       py-3 w-[7.5rem] rounded-full cursor-pointer hover:bg-[#005a59]"
      >
        Approval
      </button>
      
        <button
            type="submit"
             onClick={move}
              className=" bg-red text-white font-medium 
            py-3 w-[7.5rem] rounded-full cursor-pointer hover:bg-[#a31b1b]" 
        >
          Reject
        </button>
    </div>
  )
}

export default Verification
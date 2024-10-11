import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

const handleMouseLeave = () => {
  const id = setTimeout(() => {
    setDropdownOpen(false);
  }, 200); // Adjust the delay as necessary
  setTimeoutId(id);
};

const handleMouseEnter = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  setDropdownOpen(true);
};


  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };


  return (
    <div className='bg-blue flex items-center justify-between p-2'>
      {/* SEARCH BAR */}
      <div className='logo2 md:flex items-center gap-2 text-2xl px-2 font-semibold text-white'>
        Dashboard
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <Link to='/signup'>
          <div className="text-gray-500 items-center">Sign Up</div>
        </Link>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <img src="/message.png" alt="Message" width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <img src="/announcement.png" alt="Announcement" width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium text-white">John Doe</span>
          <span className="text-[10px] text-gray-300 text-right">Admin</span>
        </div>
        <div 
          className='relative'
          onMouseEnter={handleMouseEnter} // Show dropdown when mouse enters
          onMouseLeave={handleMouseLeave} // Hide dropdown when mouse leaves
        >
          <img 
            src="/login.png" 
            alt="User" 
            width={36} 
            height={36} 
            className="rounded-full cursor-pointer mr-4"
            onClick={handleDropdownToggle} 
          />
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg z-10'>
              <button className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'>Logout</button>
              <button className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'>Setting</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

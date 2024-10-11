// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function ServicesTypes() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(''); // State for selected service

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelectBranch = (service) => {
    setSelectedBranch(service);
    closeDropdown();
  };

  return (
    <div className='bg-[#f4fcfe] mx-[18rem] w-88 border-blue border mt-40'>
      <h1 className='flex justify-start text-2xl font-bold mt-4 pl-8 text-blue'>
        Business Office
      </h1>

      <div className='grid grid-cols-1 mt-2 mx-[2rem] '>

        <div className="mb-4">
          <label htmlFor="services" className="flex justify-start font-semibold text-gray-800 mb-2">
            Select Branch
          </label>
          <div className="relative">
            {/* Dropdown input field */}
            <div className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer" onClick={toggleDropdown}>
              <input
                type="text"
                className="bg-transparent text-sm text-gray-900 outline-none cursor-pointer w-full"
                placeholder="Select a branch"
                value={selectedBranch} // Display the selected service
                readOnly
              />
              {/* Dropdown icon */}
              <span className="ml-2 text-gray-800">
                ▼
              </span>
            </div>

            {/* Dropdown menu - visible when isOpen is true */}
            {isOpen && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto"
                onMouseLeave={closeDropdown}
              >
                <ul className="divide-y  divide-gray-100">
                  {[
                    "Web Development",
                    "Mobile App Development",
                    "Digital Marketing",
                    "Graphic Design",
                    "Content Creation",
                    "SEO Optimization",
                    "Cloud Computing",
                    "IT Consulting",
                    "Cybersecurity",
                    "Data Analysis"
                  ].map((service) => (
                    <li
                      key={service}
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      onClick={() => handleSelectBranch(service)}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className='pb-6'>
          <button
            className="bg-blue text-white text-md font-bold w-full py-2 mt-2 rounded-full hover:bg-[#005a59]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesTypes;

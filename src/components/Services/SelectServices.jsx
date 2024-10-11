import { useState } from 'react';
import axios from 'axios';

function SelectServices() {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState('');
  // const [selectedAuditor, setSelectedAuditor] = useState('');
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [isOpenServiceType, setIsOpenServiceType] = useState(false);
  // const [isOpenService, setIsOpenService] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Graphic Design',
    'Cloud Computing',
    'Blockchain Development',
  ];

  const toggleCustomerDropdown = () => {
    setIsOpenCustomer(!isOpenCustomer);
    setIsOpenServiceType(false);
    // setIsOpenService(false);
  };

  const toggleServiceTypeDropdown = () => {
    setIsOpenServiceType(!isOpenServiceType);
    setIsOpenCustomer(false);
    // setIsOpenService(false);
  };


  const closeDropdown = (setIsOpen) => setIsOpen(false);

  const handleSave = () => {
    // Validation: Check if any field is empty
    if (!selectedCustomer || !selectedServiceType ) {
      alert('Please fill out all fields before saving.');
      return; // Prevent navigation if validation fails
    }

    // Data to send to the backend
    const data = {
      customer: selectedCustomer,
      serviceType: selectedServiceType,
      // auditor: selectedAuditor,
    };

    // Axios request to backend (assuming POST request)
    axios.post('https://your-backend-endpoint.com/api/services', data)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        setTooltipVisible(true); // Show tooltip on successful save

        // Hide the tooltip after 3 seconds
        setTimeout(() => {
          setTooltipVisible(false);
        }, 3000);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className='bg-[#f4fcfe] mx-[18rem] w-88 border border-blue mt-14'>
      {/* Tooltip for successful save */}
      {tooltipVisible && (
        <div className="absolute top-20 left-[86%] transform bg-green text-white p-2">
          Successfully saved!
        </div>
      )}  
      <h1 className='flex justify-center text-2xl font-bold mt-8 text-blue'>
        SERVICES OFFERED BY VENDORS
      </h1>

      <div className='grid grid-cols-1 mt-2  mx-[5rem] w-[70%]'>

        {/* Select Customer */}
        <div className="mb-4">
          <label className="flex justify-start font-semibold text-gray-800 mb-2">
            Vendor
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleCustomerDropdown}
              
            >
              <input
                type="text"
                required
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                placeholder="Select a vendor"
                value={selectedCustomer}
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>

            {isOpenCustomer && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10"
                onMouseLeave={() => closeDropdown(setIsOpenCustomer)}
              >
                <ul className="divide-y divide-gray-100">
                  {services.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setSelectedCustomer(option);
                        closeDropdown(setIsOpenCustomer);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Select Service Type */}
        <div className="mb-4">
          <label className="flex justify-start font-semibold text-gray-800 mb-2">
            Services
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleServiceTypeDropdown}
            >
              <input
                type="text"
                required
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                placeholder="Select a services"
                value={selectedServiceType}
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>

            {isOpenServiceType && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10"
                onMouseLeave={() => closeDropdown(setIsOpenServiceType)}
              >
                <ul className="divide-y divide-gray-100">
                  {services.map((option, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      onClick={() => {
                        setSelectedServiceType(option);
                        // onServiceTypeSelect(option); 
                        closeDropdown(setIsOpenServiceType);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Rate Input */}
        <div className='mt-2 mb-2 '>
          <label className="text-gray-800 flex justify-start font-semibold">
            Rate *
          </label>
         
          <input
            type="text"
            required
            className="flex justify-center text-gray-800 w-full bg-transparent text-sm border rounded-xl border-blue px-2 py-2 outline-none"
          />
         </div>
        
        
        {/* </div> */}

        {/* Save Button */}
        <div className='pb-8 '>
          <button 
            className="bg-blue text-white text-md font-bold w-full py-2 mt-6 rounded-full hover:bg-[#005a59]"
            onClick={handleSave}
          >
            SUBMIT
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default SelectServices;

import { useState } from 'react';

function PackageList() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        setIsOpen(!isOpen);
    };

    
    const toggleDropdown3 = () => {
      setIsOpen(!isOpen);
  };


    const closeDropdown = () => {
        setIsOpen(false);
    };

    
    return (
        <div className='bg-[#f4fcfe] mx-[10rem] w-[60%] border border-blue mt-4 p-6'>
            <h1 className='flex justify-center text-2xl font-bold mt-4 text-blue'>
                LIST OF PACKAGE
            </h1>

            <div className='grid grid-cols-2 gap-4  mx-[5rem] mt-6 w-[70%]'>
                {/* Package Name Dropdown */}
                <div className="col-span-2">
                    <label htmlFor="services" className="flex justify-start font-semibold text-gray-800 mb-2">
                        Package Name
                    </label>
                    <div className="relative">
                        <div className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer" onClick={toggleDropdown}>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                                placeholder="Select a package"
                                readOnly
                            />
                            <span className="ml-2 text-gray-800">▼</span>
                        </div>
                        {isOpen && (
                            <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto" onMouseLeave={closeDropdown}>
                                <ul className="divide-y divide-gray-100">
                                    <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Web Development</li>
                                    <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Mobile App Development</li>
                                    {/* Add other services here */}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Total Days, Days, Nights */}
                <div className='flex flex-row gap-6 w-[27rem]'>
                <div className="">
                    <label className="text-gray-800 font-semibold">Total Days</label>
                    <input type="number" className="border rounded-xl w-full px-2 py-2 border-blue outline-none" />
                </div>
                <div className="">
                    <label className="text-gray-800 font-semibold">Days</label>
                    <input type="number" className="border rounded-xl w-full px-2 py-2 border-blue outline-none" />
                </div>
                <div className="">
                    <label className="text-gray-800 font-semibold">Nights</label>
                    <input type="number" className="border rounded-xl w-full px-2 py-2 border-blue outline-none" />
                </div>
                </div>
                

                {/* Tour Type Dropdown */}
                <div className="col-span-2">
                    <label className="text-gray-800 font-semibold">Tour Type</label>
                    <div className="relative">
                        <div className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer" onClick={toggleDropdown2}>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                                placeholder="Select a package"
                                readOnly
                            />
                            <span className="ml-2 text-gray-800">▼</span>
                        </div>
                        {isOpen && (
                            <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto" onMouseLeave={closeDropdown}>
                                <ul className="divide-y divide-gray-100">
                                    <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Web Development</li>
                                    <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Mobile App Development</li>
                                    {/* Add other services here */}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Facilities Input */}
                <div className="col-span-2">
                    <label className="text-gray-800 font-semibold">Facilities</label>
                    <div className="relative">
                        <div className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer" onClick={toggleDropdown3}>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                                placeholder="Select a package"
                                readOnly
                            />
                            <span className="ml-2 text-gray-800">▼</span>
                        </div>
                        {isOpen && (
                            <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto" onMouseLeave={closeDropdown}>
                                <ul className="divide-y divide-gray-100">
                                    <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Web Development</li>
                                    <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer">Mobile App Development</li>
                                    {/* Add other services here */}
                                </ul>
                            </div>
                        )}
                    </div>
                    

                </div>

                {/* Rate and Logo Picture */}
                <div>
                    <label className="text-gray-800 font-semibold">Rate *</label>
                    <input type="number" className="border rounded-xl w-full px-2 py-2 border-blue outline-none" />
                </div>
                <div>
                    <label className="text-gray-800 font-semibold">Logo Picture *</label>
                    <input type="file" className="border rounded-xl w-full px-2 py-2 border-blue outline-none" />
                </div>

                {/* Description */}
                <div className="col-span-2">
                    <label className="text-gray-800 font-semibold">Description</label>
                    <textarea rows="3" className="border rounded-xl w-full px-2 py-2 border-blue outline-none resize-none"></textarea>
                </div>
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
                <button className="bg-blue text-white text-md font-bold w-48 py-2 mt-6 rounded-xl hover:bg-[#005a59]">
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default PackageList;

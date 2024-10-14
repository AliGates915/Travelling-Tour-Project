import  { useState } from 'react';

const CustomizePackage = () => {
  const [formData, setFormData] = useState({
    
    customerInfo: '',
    dateFrom: '',
    dateTo: '',
    selectService: 'Business Class',
    selectVendor:'',
    rate:'',
    total:'',
  });


  const travelClasses = [
    { value: 'economyPremium', label: 'Economy Premium' },
    { value: 'businessClass', label: 'Business Class' },
    { value: 'firstClass', label: 'First Class' },
  ];

  const handleInputChange = (e) => {
    const { name, options } = e.target;
    const value = Array.from(options).filter(option => option.selected).map(option => option.value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto my-4 p-6 text-gray-800 bg-white shadow-md">
      <h2 className="text-2xl font-semibold text-center pt-2 text-blue mb-2">
        Customize Package
      </h2>
      <form onSubmit={handleSubmit} className="space-y-1">
    
        <div>
          <label htmlFor="customerInfo" className="text-gray-800 block text-md font-medium">
            Customer Info
          </label>
          <input
            type="text"
            id="customerInfo"
            name="customerInfo"
            value={formData.customerInfo}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            placeholder="Enter customer info"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="dateFrom" className="block text-sm font-medium">
              Date From
            </label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="dateTo" className="block text-sm font-medium">
              Date To
            </label>
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="selectService" className="block text-md font-medium">
          {/* select multiple service */}
            Select Services 
          </label>
          <select
            id=""
            name="selectService"
            value={formData.selectService}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
          >
            {travelClasses.map((classOption) => (
              <option key={classOption.value} value={classOption.value}>
                {classOption.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="selectVendor" className="block text-md font-medium">
            Select Vendor
          </label>
          <select
            id=""
            name="selectVendor"
            value={formData.selectVendor}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
          >
            {travelClasses.map((classOption) => (
              <option key={classOption.value} value={classOption.value}>
                {classOption.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rate" className="text-gray-800 block text-md font-medium">
            Rate *
          </label>
          <input
            type="text"
            id="rate"
            name="rate"
            value={formData.rate}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            placeholder="Enter Rate"
          />
        </div>

        <div>
          <label htmlFor="total" className="text-gray-800 block text-md font-medium">
            Total Amount *
          </label>
          <input
            type="text"
            id="rate"
            name="rate"
            value={formData.rate}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            placeholder="Enter Total Amount"
          />
        </div>

  
        <div className='flex justify-center'>
        <button
          type="submit"
          className="px-3 w-48 py-3 bg-blue text-white font-semibold rounded-xl mt-6"
        >
          Submit
        </button>
        </div>      
      </form>
    </div>
  );
};

export default CustomizePackage;

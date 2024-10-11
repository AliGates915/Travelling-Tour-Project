import { useState } from 'react';

function AddQuestion() {
  const [multipleServices, setMultipleServices] = useState([]); // For multiple services
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(''); // For single service detail
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isOpenServiceType, setIsOpenServiceType] = useState(false);
  const [isOpenServiceDetail, setIsOpenServiceDetail] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'Graphic Design',
    'Cloud Computing',
    'Blockchain Development',
  ];

  // Toggle dropdowns
  const toggleServiceTypeDropdown = () => {
    setIsOpenServiceType(!isOpenServiceType);
  };
  const toggleServiceDetailDropdown = () => {
    setIsOpenServiceDetail(!isOpenServiceDetail);
  };
  const closeDropdown = () => {
    isOpenServiceDetail(false);
    isOpenServiceType(false);
  };


  // Handle service selection (multiple)
  const handleServiceSelection = (service) => {
    if (multipleServices.includes(service)) {
      setMultipleServices(multipleServices.filter((item) => item !== service));
    } else {
      setMultipleServices([...multipleServices, service]);
    }
  };

  // Handle saving
  const handleSave = () => {
    // Validation
    if (multipleServices.length === 0 || !selectedServiceDetail || !question || !answer) {
      alert('Please fill out all fields before saving.');
      return;
    }

    // Simulating the save functionality since there's no backend
    const data = {
      services: multipleServices, // Send selected services as an array
      serviceDetail: selectedServiceDetail,
      question: question,
      answer: answer,
    };
    console.log('Data to be sent to backend:', data);

    // Show tooltip for successful save
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 3000);

    // Clear form after save
    setMultipleServices([]);
    setSelectedServiceDetail('');
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className='bg-[#f4fcfe] mx-[18rem] w-88 border border-blue mt-4 p-6'>
      {tooltipVisible && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md">
          Successfully saved!
        </div>
      )}
      <h1 className='text-2xl font-bold text-center text-blue mb-4'>Add Question</h1>

      {/* Select Service Type */}
      <div className="mb-4 mx-[5rem] w-[70%]">
        <label className="block text-gray-800 font-semibold text-center mb-2">Select Multiple Service Types</label>
        <div className="relative">
          <div
            className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
            onClick={toggleServiceTypeDropdown}
          >
            <input
              type="text"
              className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
              placeholder="Select services"
              value={multipleServices.join(', ')} // Show selected services
              readOnly
            />
            <span className="ml-2 text-gray-800">▼</span>
          </div>

          {isOpenServiceType && (
            <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10">
              <ul className="divide-y divide-gray-100">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer ${multipleServices.includes(service) ? 'bg-blue-200' : ''}`}
                    onClick={() => handleServiceSelection(service)}
                  >
                    <input
                      type="checkbox"
                      checked={multipleServices.includes(service)}
                      onChange={() => {handleServiceSelection(service)
                        closeDropdown()}
                      }
                      className="mr-2"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Service Details (Single Selection) */}
      <div className="mb-4 mx-[5rem] w-[70%]">
        <label className="block text-gray-800 font-semibold text-center mb-2">Select Service Detail</label>
        <div className="relative">
          <div
            className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
            onClick={toggleServiceDetailDropdown}
          >
            <input
              type="text"
              className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
              placeholder="Select service detail"
              value={selectedServiceDetail}
              readOnly
            />
            <span className="ml-2 text-gray-800">▼</span>
          </div>

          {isOpenServiceDetail && (
            <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-10">
              <ul className="divide-y divide-gray-100">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                    onClick={() => {
                      setSelectedServiceDetail(service);
                      toggleServiceDetailDropdown();
                      closeDropdown()
                    }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Write Question */}
      <div className="mb-4 mx-[5rem] w-[70%]">
        <label className="block text-gray-800 font-semibold text-center mb-2">Write Question</label>
        <textarea
          className="w-full border rounded-xl border-blue p-2 text-sm text-gray-800"
          rows="3"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>

      {/* Select Answer (Yes/No) */}
      <div className="mb-4">
        <label className="block text-gray-800 font-semibold text-center mb-2">Select Answer</label>
        <div className="flex justify-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="answer"
              value="Yes"
              className="form-radio h-5 w-5 text-blue"
              checked={answer === 'Yes'}
              onChange={() => setAnswer('Yes')}
            />
            <span className="text-gray-800">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="answer"
              value="No"
              className="form-radio h-5 w-5 text-blue"
              checked={answer === 'No'}
              onChange={() => setAnswer('No')}
            />
            <span className="text-gray-800">No</span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          className="bg-blue text-white text-md font-bold w-48 py-2 rounded-full hover:bg-[#005a59]"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;

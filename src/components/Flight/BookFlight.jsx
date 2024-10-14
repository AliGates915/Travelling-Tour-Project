import  { useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    bookingID: '',
    date: '',
    time: '',
    customerName: '',
    phoneNumber: '',
    flightFrom: '',
    flightTo: '',
    tripType: 'roundTrip',
    departDate: '',
    returnDate: '',
    travelClass: 'economyPremium',
    adults: 1,
    children: 1,
    infants: 1,
  });

  const locations = [
    'New Orleans NEW',
    'New York JFK',
    'London Heathrow',
    'Dubai United Arab Emirates',
    'Tokyo Narita',
  ];

  const travelClasses = [
    { value: 'economyPremium', label: 'Economy Premium' },
    { value: 'businessClass', label: 'Business Class' },
    { value: 'firstClass', label: 'First Class' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto my-4 p-6 text-gray-800 bg-white shadow-md">
      <h2 className="text-2xl font-semibold text-center pt-2 text-blue mb-2">BOOKING</h2>
      <form onSubmit={handleSubmit} className="space-y-1">
        <div>
          <label htmlFor="bookingID" className="block text-md text-gray-800 font-medium">
            Booking ID
          </label>
          <input
            type="text"
            id="bookingID"
            name="bookingID"
            value={formData.bookingID}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            placeholder="Enter booking ID"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="date" className="text-gray-800 block text-md font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="time" className="text-gray-800 block text-md font-medium">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="customerName" className="text-gray-800 block text-md font-medium">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            placeholder="Enter customer name"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className=" text-gray-800 block text-md font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            placeholder="Enter phone number"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label htmlFor="flightFrom" className="text-gray-800 block text-md font-medium">
              Flying From
            </label>
            <div className="relative">
              <FaPlaneDeparture className="absolute top-2 left-3 text-gray-500" />
              <select
                id="flightFrom"
                name="flightFrom"
                value={formData.flightFrom}
                onChange={handleInputChange}
                className="pl-10 mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
              >
                <option value="">Select departure location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex-1">
            <label htmlFor="flightTo" className="text-gray-800 block text-md font-medium">
              Destination To
            </label>
            <div className="relative">
              <FaPlaneArrival className="absolute top-2 left-3 text-gray-500" />
              <select
                id="flightTo"
                name="flightTo"
                value={formData.flightTo}
                onChange={handleInputChange}
                className="pl-10 mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              >
                <option value="">Select destination</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4 gap-4">
          <button
            type="button"
            className={`w-1/2 py-2 text-center rounded-md ${
              formData.tripType === 'oneWay'
                ? 'bg-blue text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFormData({ ...formData, tripType: 'oneWay' })}
          >
            One Way
          </button>
          <button
            type="button"
            className={`w-1/2 py-2 text-center rounded-md ${
              formData.tripType === 'roundTrip'
                ? 'bg-blue text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setFormData({ ...formData, tripType: 'roundTrip' })}
          >
            Round Trip
          </button>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="departDate" className="block text-sm font-medium">
              Depart Date
            </label>
            <input
              type="date"
              id="departDate"
              name="departDate"
              value={formData.departDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="returnDate" className="block text-sm font-medium">
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-2"
              disabled={formData.tripType === 'oneWay'}
            />
          </div>
        </div>

        <div>
          <label htmlFor="travelClass" className="block text-md font-medium">
            Travel Class
          </label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
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

        {/* Passenger counts */}
        <div className="mx-20 space-y-2 ">
          <div className="mt-6 flex justify-center items-center space-x-6 border border-slate-400 p-2 w-80">
            <label className="text-sm">Adult (12+ Years)</label>
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded-md"
              onClick={() =>
                setFormData({
                  ...formData,
                  adults: Math.max(formData.adults - 1, 0),
                })
              }
            >
              -
            </button>
            <span>{formData.adults}</span>
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded-md"
              onClick={() =>
                setFormData({ ...formData, adults: formData.adults + 1 })
              }
            >
              +
            </button>
          </div>

          <div className="flex justify-center items-center space-x-6 border border-slate-400 p-2 w-80">
            <label className="text-sm">Child (2-11 Years)</label>
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded-md"
              onClick={() =>
                setFormData({
                  ...formData,
                  children: Math.max(formData.children - 1, 0),
                })
              }
            >
              -
            </button>
            <span>{formData.children}</span>
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded-md"
              onClick={() =>
                setFormData({ ...formData, children: formData.children + 1 })
              }
            >
              +
            </button>
          </div>

          <div className="flex justify-center items-center space-x-6 border border-slate-400 p-2 w-80">
            <label className="text-sm">Infant (0-23 Months)</label>
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded-md"
              onClick={() =>
                setFormData({
                  ...formData,
                  infants: Math.max(formData.infants - 1, 0),
                })
              }
            >
              -
            </button>
            <span>{formData.infants}</span>
            <button
              type="button"
              className="px-3 py-1 bg-gray-300 rounded-md"
              onClick={() =>
                setFormData({ ...formData, infants: formData.infants + 1 })
              }
            >
              +
            </button>
          </div>
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

export default BookingForm;

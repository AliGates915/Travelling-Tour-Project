import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    companyEmail : "",
    contactPerson: "",
    phoneNumber: "",
    website: "",
    description: "",
    designation: "",
    address: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const [, setUser] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Create a FormData object to send form data
      const formDataToSend = new FormData();

      // Append form fields to the FormData object
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("confirmPassword", formData.confirmPassword);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("companyEmail", formData.companyEmail);
      formDataToSend.append("contactPerson", formData.contactPerson);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("website", formData.website);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("designation", formData.designation);
      formDataToSend.append("address", formData.address);

      // Send the form data to the backend
      const response = await axios.post(
        "https://auditsoftware.vercel.app/auth/signup",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status === "success") {
        const userData = response.data.data.user;
        console.log(userData);
        const token = response.data.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        setUser(userData);
        navigate("/login");
        setSuccessMessage("Signup successful!");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || "Signup failed. Please try again."
        );
      } else {
        setErrorMessage("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div>
    <div className="w-90 h-screen bg-white ml-48 font-[sans-serif] p-3">
      <div className="flex justify-center mr-40 mb-8">
        <h4 className="text-blue text-2xl font-bold">Create a New Account</h4>
      </div>

      <form onSubmit={handleSubmit}>
      <h1 className='my-4 text-blue text-xl font-bold'>Company Information</h1>
        
        <div className="flex justify-between">
          
          <div>
            <label className="text-gray-800 text-lg mb-2 block">
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
        </div>

          <div className="mr-48 mt-6 grid sm:grid-cols-2 gap-6">
          <div>
              <label className=" text-gray-800 text-lg mb-2 block">
                Company Address *
              </label>
              <input
                type="text"
                name="companyAddress"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Company Address"
                value={formData.companyAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className=" text-gray-800 text-lg mb-2 block">
                Company Contact No.
              </label>
              <input
                type="number"
            name="companyContact"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Contact No."
                value={formData.companyContact}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Website *
              </label>
              <input
                type="text"
                   name="website"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Official Email *
              </label>
              <input
                type="text"
                 name="officialEmail"
                placeholder="Enter Official Email"
                value={formData.officialEmail}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className=" text-gray-800 text-lg mb-2 block">
                Industry/Service Sector *
              </label>
              <input
                type="text"
                name="industryService"
                required
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Industry or Service Sector"
                value={formData.industryService}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className=" text-gray-800 text-lg mb-2 block">
                City *
              </label>
              <input
                type="text"
                name="city"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Province/State
              </label>
              <input
                type="text"
                   name="province"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Province or State"
                value={formData.province}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Postal Code
              </label>
              <input
                type="number"
                 name="postalCode"
                placeholder="Enter Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Country *
              </label>
              <input
                type="text"
                name="country"
                className="w-full bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
              NTN
              </label>
              <input
                type="ntn"
               name="NTN"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter NTN"
                value={formData.NTN}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Logo
              </label>
              <input
                type="file"
                name='logo'
                value={formData.logo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-800 text-md mb-2 block">
              Company Description
            </label>
            <textarea
              rows="5"
              className="w-[73%] bg-transparent text-gray-800 text-sm border border-gray-300 focus:border-blue px-3 py-2 outline-none resize-none"
              placeholder="Enter a short description of company operations."
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          {/* Customer Data */}
          <h1 className='my-4 text-blue text-xl font-bold'>Customer Information</h1>
          <div className="mr-48 grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">City *</label>
              <input
                type="text"
                name="customerCity"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter City"
                value={formData.customerCity}
                onChange={handleInputChange}
              />
              
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Mobile Number *</label>
              <input
                type="number"
                name='customerNumber'
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Mobile Number"
                value={formData.customerNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">NTN *</label>
              <input
                
                type="number"
                name="customerNTN"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter NTN"
                value={formData.customerNTN}
                onChange={handleInputChange}
              />
              
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">STRN *</label>
              <input
              
                type="number"
                name="strn"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter STRN"
                value={formData.strn}
                onChange={handleInputChange}
              />
              
            </div>
          </div>

          <h1 className='my-4 text-blue text-xl font-bold'>Account Information</h1>
          <div className="mr-48 grid sm:grid-cols-2 gap-8 mb-5">
          <div>
              <label className="text-gray-800 text-lg mb-2 block">Username/Email address *</label>
              <input
                type="text"
                name="customerEmail"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Username or Email"
                value={formData.customerEmail}
                onChange={handleInputChange}
              />    
            </div>
            <div>
            <label className="text-gray-800 text-lg mb-2 block">
              Account ID *
            </label>
            <input
              type="text"
              name="accountId"
              className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
              placeholder="Enter account ID"
              value={formData.accountId}
              onChange={handleInputChange}
            />

            </div>
            
          </div>
          <div className="">
            {/* account id */}
          </div>

          <div className="mt-18 grid sm:grid-cols-2 gap-6 mr-48">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">
                Password *
              </label>
              <div className="relative flex">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-[5.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                  <circle cx="64" cy="64" r="8" />
                </svg>
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-md mb-2 block">
                Confirm Password *
              </label>
              <div className="relative flex">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-[5.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                  <circle cx="64" cy="64" r="8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 text-red">
            {errorMessage && <p>{errorMessage}</p>}
          </div>

            <div className="flex justify-end ">
              <button
                type="submit"
                onClick={handleSubmit}
                className=" bg-blue text-white font-medium 
              mr-[250px] py-3 w-[7.5rem] mb-4  rounded-full cursor-pointer hover:bg-[#005a59]"
              >
                Sign up
              </button>
              {/* Success message */}
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}
            </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

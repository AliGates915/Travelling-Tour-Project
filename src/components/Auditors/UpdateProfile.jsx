import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function UpdateProfile() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [description, setDescription] = useState('');
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    setError('');

    // Check if any fields are empty
    if (!data.city || !data.logo || !data.ntn || !data.strn || !data.companyAddress || !data.number || !data.email || !data.password) {
      setError('All fields are required!');
      return;
    }

    const formData = new FormData();
    // Append data to FormData object
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    axios.post('https://auditsoftware.vercel.app/auditorProfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => {
        if (res && res.data && res.data.token) {
          const token = res.data.token;
          localStorage.setItem('jwtToken', token);
          alert('Update successful!');
          navigate("/dashboard");
        } else {
          console.error('Unexpected response format:', res);
          alert('Submission failed. Please try again.');
        }
      })
      .catch(err => {
        console.error('Error during submission request:', err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(`Submission failed: ${err.response.data.message}`);
        } else {
          alert('Submission failed. Please check your credentials.');
        }
      });
  };

  return (
    <div>
      <div className="w-90 h-screen bg-white ml-36 font-[sans-serif] pt-4">
        <div className="text-center mb-8">
          <h4 className="text-blue text-2xl font-bold">VENDOR INFORMATION</h4>
         
        </div>
        
        <h1 className='ml-20 text-blue text-xl font-bold'>Company Information</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mr-48 ml-20 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Company Name *</label>
              <input
               
                type="text"
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company name"
              />
             
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Picture *</label>
              <input
                type="file"
                placeholder='No file chosen'
                
                className="w-[24rem]"
              />
              {errors.logo && <span className="text-red-500">Logo is required
              </span>}
            </div>
          </div>
          
          <div className="my-4 mr-48 ml-20 grid sm:grid-cols-2 gap-6">
          
          <div>
              <label className="text-gray-800 text-lg mb-2 block font-bold">First Name</label>
              <input
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter First Name"
              />  
            </div>
          <div className=''>
              <label className="text-gray-800 text-lg mb-2 block font-bold">Last Name</label>
              <input
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Last Name"
              />   
            </div>      
          </div>

          <div className='my-8 ml-20'>
              <label className="text-gray-800 text-lg mb-2 block">Designation *</label>
              <input
               
                type="text"
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company name"
              />   
          </div>
          <div className='my-8 ml-20'>
              <label className="text-gray-800 text-lg mb-2 block">Address</label>
              <input
               
                type="text"
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company name"
              />   
          </div>
          

          <div className="mr-48 ml-20 grid sm:grid-cols-2 gap-6">
            
          <div >
              <label className="text-gray-800 text-lg mb-2 block">City *</label>
              <input
                {...register('city', { required: true })}
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter City"
              />
              {errors.city && <span className="text-red-500">City is required</span>}
            </div>
            <div >
              <label className="text-gray-800 text-lg mb-2 block font-bold">Country </label>
              <input
                {...register('country', { required: true })}
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Country"
              />
            </div>

            <div>
              <label className="text-gray-800 text-lg mb-2 block">Company Phone No.</label>
              <input
                {...register('number', { required: true })}
                type="number"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company phone"
              />
              {errors.number && <span className="text-red-500">Mobile Number is required</span>}
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Mobile Number *</label>
              <input
                {...register('number', { required: true })}
                type="number"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Mobile Number"
              />
              {errors.number && <span className="text-red-500">Mobile Number is required</span>}
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Email *</label>
              <input
                {...register('email', { required: true })}
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Website</label>
              <input
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter website"
              />
            </div>
            
          </div>
          
          
          <h1 className='ml-20 mt-6 text-blue text-xl font-bold'>Account Information</h1>
        
          <div className='my-4 ml-20'>
              <label className="text-gray-800 text-lg mb-2 block">Username/Email address *</label>
              <input
                {...register('email', { required: true })}
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Username or Email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

          <div className='mt-4 mr-48 ml-20 grid sm:grid-cols-2 gap-6'>
          <div>
              <label className="text-gray-800 text-lg mb-2 block">Password *</label>
              <div className="relative flex">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  type={passwordVisible ? 'text' : 'password'}
                  required
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div className="flex justify-center my-6 mr-36">
            <button
              type="submit"
              className="text-white w-60 bg-blue hover:bg-[#005a59] mb-4 py-2 font-semibold rounded-full"
            >
              SUMBIT
            </button>
          </div>

          {error && <span className="text-red-500 text-center">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;

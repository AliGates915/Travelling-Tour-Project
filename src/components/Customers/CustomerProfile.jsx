import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function CustomerProfile() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

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

    axios.post('https://auditsoftware.vercel.app/customerProfile', formData, {
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
      <div className="w-90 h-screen bg-white mx-14 font-[sans-serif] pt-4">
        <div className="text-center mb-8">
          <h4 className="text-blue text-2xl font-bold">Customer Registration</h4>
          <div className='text-blue text-md'>
              Enter the details of all incoming customers.
          </div>
          
        </div>
        
        <h1 className='ml-20 text-blue text-xl font-bold'>Personal Information</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mr-48 ml-20 grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Company</label>
              <input
               
                type="text"
                className="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Company"
              />
             
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Person</label>
              <input      
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Person"
              />

            
              {/* Logo */}
              <div className="absolute top-[7.3rem] right-[-4rem] border px-4 py-4 flex mr-40 text-black">
              <img
                src="/logo-removebg-preview.png"
                alt=""
                width={30}
                height={15}
              />
              <p className="mt-2 ml-3 text-xl font-semibold">Company Logo</p>
            </div>

            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Designation</label>
              <input
               
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Designation"
              />
              
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Address</label>
              <input
               
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Address"
              />
              
            </div>
          </div>

          <div className="mr-48 ml-20 grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-lg mb-2 block">City *</label>
              <input
                {...register('city', { required: true })}
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter City"
              />
              {errors.city && <span className="text-red-500">City is required</span>}
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Website</label>
              <input
                
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter Website"
              />
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Logo Picture *</label>
              <input
                type="file"
                {...register('logo', { required: true })}
                className="w-[24rem]"
              />
              {errors.logo && <span className="text-red-500">Logo is required</span>}
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
              <label className="text-gray-800 text-lg mb-2 block">Username/Email address *</label>
              <input
                {...register('email', { required: true })}
                type="text"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Username or Email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">NTN *</label>
              <input
                {...register('ntn', { required: true })}
                type="number"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter NTN"
              />
              {errors.ntn && <span className="text-red-500">NTN is required</span>}
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">STRN *</label>
              <input
                {...register('strn', { required: true })}
                type="number"
                className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter STRN"
              />
              {errors.strn && <span className="text-red-500">STRN is required</span>}
            </div>
            <div>
              <label className="text-gray-800 text-lg mb-2 block">Password *</label>
              <div className="relative flex mr-20">
                <input
                  {...register('password', { required: true })}
                  type={passwordVisible ? 'text' : 'password'}
                  className="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Password"
                />
                <span className="absolute right-2 top-2 cursor-pointer" onClick={togglePasswordVisibility}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </span>
              </div>
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
          </div>

          <div className="flex ml-20 justify-start my-6">
            <button
              type="submit"
              className="text-white w-32 font-bold bg-blue hover:bg-[#005a59] mb-4 py-2 rounded-full"
            >
              Submit
            </button>
          </div>

          {error && <span className="text-red-500 text-center">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default CustomerProfile;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    axios
      .post("https://auditsoftware.vercel.app/auth/login", data)
      .then((res) => {
        if (res && res.data.token) {
          const token = res.data.token;
          console.log(token);
          localStorage.setItem("jwtToken", token);
          alert("Login successful!");
          const jwtToken = localStorage.getItem("jwtToken");
          if (jwtToken) {
            navigate("/dashboard");
          }
        } else {
          alert("Login failed. No token generated. Redirecting to signup.");
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Error during login request:", err);
        if (err.response && err.response.data && err.response.data.message) {
          alert(`Login failed: ${err.response.data.message}`);
        } else {
          alert("Login failed. Please check your credentials.");
        }
        navigate("/signup");
      });
  };

  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1 lg:min-w-[450px]">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>
          <form
            className="md:max-w-md w-full mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-blue">Login in</h3>
            </div>

            {/* Email input */}
            <div>
              <div className="relative flex items-center">
                <input
                  {...register("email")}
                  type="email"
                  className="w-full text-sm border-b border-gray-300 text-gray-800 focus:border-blue px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                {errors.email && (
                  <span className="text-red">Email is required</span>
                )}
              </div>
            </div>

            {/* Password input */}
            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                  {...register("password")}
                  type={passwordVisible ? "text" : "password"}
                  className="w-full text-sm border-b border-gray-300 text-gray-800 focus:border-blue px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span className="text-red">Password is required</span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  onClick={togglePasswordVisibility}
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            
            {/* Radio buttons for roles */}
            <div className="my-4 text-xs">
              <p className="text-gray-600 font-semibold">Select Role :</p>
              <div className="flex space-x-4 mt-2 text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    {...register("role")}
                    type="radio"
                    value="Customer"
                    className="form-radio h-3 w-3 text-blue"
                  />
                  <span className="text-gray-800">Customer</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    {...register("role")}
                    type="radio"
                    value="Auditor"
                    className="form-radio h-3 w-3 text-blue"
                  />
                  <span className="text-gray-800">Auditor</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    {...register("role")}
                    type="radio"
                    value="Admin"
                    className="form-radio h-3 w-3 text-blue"
                  />
                  <span className="text-gray-800">Admin</span>
                </label>
              </div>
            </div>
            
            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-blue hover:bg-[#005a59] focus:outline-none"
              >
                Login in
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">
                Do not have an account{" "}
                <Link to="/signup">
                  <span className="text-blue-600 font-semibold hover:underline text-blue ml-1 whitespace-nowrap">
                    Register here
                  </span>
                </Link>
              </p>
            </div>
            
            {/* Remember me and Forgot password */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-gray-800 ml-3 block text-sm"
                >
                  Remember me
                </label>
              </div>
              <div>
                <button
                  onClick={() => alert("Forgot password logic here")}
                  className="text-blue font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

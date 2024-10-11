// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ name, role, address, avatar, company }) => {
  return (
    <>
      <div className="relative bg-white text-gray-800 shadow-lg rounded-lg max-w-sm mx-auto sm:flex sm:max-w-none sm:w-full">
        <p className="absolute top-3 right-3 bg-red text-white px-2 font-semibold py-1 rounded-full text-xs">
          {role}
        </p>

        <div className="p-4 mt-4 flex justify-between">
          <div className="sm:flex-shrink-0">
            <img
              className="rounded-full h-24 w-24 sm:h-32 sm:w-32 object-cover"
              src={avatar}
              alt={`${name}'s Avatar`}
            />
          </div>

          <div className="mt-4 text-center sm:mt-0 sm:ml-6 sm:text-left">
            <div className="font-bold text-xl">{name}</div>
            <div className="text-gray-600">{company}</div>
            <div className="text-sm text-gray-500 mt-2">{address}</div>

            <div className="mt-4 flex space-x-2 text-md">
              <button className="bg-blue hover:bg-[#005a59] text-white px-2 py-2 rounded-full mr-1">
                Delete
              </button>
              <Link to="/customerProfile">
                <button className="bg-blue hover:bg-[#005a59] text-white px-2 py-2 rounded-full mr-1">
                  Update
                </button>
              </Link>
                <button className="bg-green hover:bg-[#005a59]  text-white px-2 py-2  rounded-full ">
                Complete Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

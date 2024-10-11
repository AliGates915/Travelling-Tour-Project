// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardsAuditor = ({ name, avatar }) => {
  return (
    <>
      <div className="relative text-gray-800 shadow-lg rounded-lg max-w-sm mx-auto sm:max-w-none sm:w-full">
        <div className="p-4">
          {/* Avatar in its own row */}
          <div className="flex justify-center mb-4">
            <img
              className="rounded-full h-24 w-24 sm:h-32 sm:w-32 object-cover"
              src={avatar}
              alt={`${name}'s Avatar`}
            />
          </div>

          {/* Name in its own row */}
          <div className="text-center mb-4">
            <div className="font-bold text-xl">{name}</div>
          </div>

          {/* Buttons in their own row */}
          <div className="flex justify-center space-x-2 mt-4 text-[0.950rem]">
            <button className="bg-blue hover:bg-[#005a59] text-white px-3 py-2 rounded-full">
              Delete
            </button>
            <Link to="/auditorProfile">
              <button className="bg-blue hover:bg-[#005a59] text-white px-2 py-2 rounded-full">
                Update
              </button>
            </Link>
            <button className="bg-green hover:bg-[#07721e] text-white px-2 py-2 rounded-full">
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsAuditor;

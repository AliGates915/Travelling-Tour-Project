// eslint-disable-next-line no-unused-vars
import React from "react";
import { ImCross } from "react-icons/im";

// Sample data for auditors (You can replace with real data)
const auditors = [
  { id: 1, name: "Alexander Pierce", date: "Today", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
  { id: 2, name: "Norman", date: "Yesterday", 
    img: "https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
  { id: 3, name: "Jane", date: "12 Jan", img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
  { id: 4, name: "John", date: "12 Jan", img: "https://images.pexels.com/photos/6829574/pexels-photo-6829574.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
  { id: 5, name: "Alexander", date: "13 Jan", img: "https://images.pexels.com/photos/6325964/pexels-photo-6325964.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
  { id: 6, name: "Sarah", date: "14 Jan", img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
  { id: 7, name: "Nora", date: "15 Jan", img: "https://images.pexels.com/photos/3764542/pexels-photo-3764542.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
  { id: 8, name: "Nadia", date: "15 Jan", img: "https://images.pexels.com/photos/694556/pexels-photo-694556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
];

const Auditor = () => {
  return (
    <div className="bg-gray-800 p-4 w-[22rem] ">
    <div className="mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center text-white mb-4">
        <h2 className="text-lg">Auditors</h2>
        <div className="flex items-center">
          <button className="bg-red-500 text-white px-2 py-1 rounded-lg mr-2 text-sm">New Auditors</button>
          <ImCross size={15} color="white" />
        </div>
      </div>

      {/* Auditor Avatars Grid */}
      <div className="grid grid-cols-4 gap-4">
        {auditors.map((auditor) => (
          <div key={auditor.id} className="text-center">
            <img
              src={auditor.img}
              alt={auditor.name}
              className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
            />
            <p className="text-white text-sm">{auditor.name}</p>
            <p className="text-gray-400 text-xs">{auditor.date}</p>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      
    </div>
    <div className="mt-4 text-center">
    <button className="bg-gray-700 text-white px-4 py-2 w-full">View All Auditors</button>
  </div>
  </div>
  );
};

export default Auditor;

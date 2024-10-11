// eslint-disable-next-line no-unused-vars
import React from 'react';
import './table.css'
import { FaWindowMinimize } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import BigCalendar from './BigCalendar'
import Auditor from './Auditor';

const data = [
  { Date: "OR9842", Time: "", name: 'Call of Duty IV', stats: 'Shipped', des: '90,80,70,61,83,63' },
  { Date: "OR7429", Time: "", name: 'Samsung Smart TV', stats: 'Pending', des: '90,80,80,61,83,63' },
  { Date: "OR4845", Time: "", name: 'iPhone 6 Plus', stats: 'Delivered', des: '90,80,70,61,83,63' },
  { Date: 'OR8586', Time: "", name: 'Samsung Smart TV', stats: 'Processing', des: '90,80,70,61,83,63' },
  { Date: 'OR2525', Time: "", name: 'Call of Duty IV', stats: 'Shipped', des: '90,80,70,61,83,63' },
];

function Table_Calen_Auditor() {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Shipped':
        return 'bg-[Green] text- font-bold text-white';
      case 'Pending':
        return 'bg-[yellow] font-bold text-black';
      case 'Delivered':
        return 'bg-[Red] text-white font-bold';
      case 'Processing':
        return 'bg-[Blue] text-white font-bold';
      default:
        return 'bg-gray-500 text-white font-bold';
    }
  };

  return (
    <div className='mt-3 flex flex-row gap-2'>
      <div className='bg-[#353a40] px-4 py-4 w-[46.5rem] shadow-md h-[24rem]'>
        {/* Header */}
        <div className='flex justify-between items-center'>
          <h2 className="text-left text-white font-semibold">Working Log</h2>
          <div className="flex space-x-2">
            <FaWindowMinimize size={15} color='white' />
            <ImCross size={15} color='white' />
          </div>
        </div>

        <hr className="border-gray-600 my-2" />

        {/* Table */}
        <table className="table-auto text-white w-full">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Time</th>
              <th className="text-left py-2 px-4">Customer / Auditor</th>
              <th className="text-left py-2 px-4">Status</th>
              <th className="text-left py-2 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2 px-4 text-blue">{user.Date}</td>
                <td className="py-2 px-4">{user.Time}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className={`text-xs px-3 rounded-md ${getStatusClass(user.stats)} text-center`}>
                  {user.stats}
                </td>
                <td className="py-2 px-4">{user.des}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col'> 
      <div className='bg-[Green] shadow-xl w-[22rem] h-[42%]'>
        <BigCalendar />
      </div>
      <div className='mt-4 w-[22rem] h-[35%]'>
        <Auditor />
      </div>
      </div>
    </div>
  );
}

export default Table_Calen_Auditor;

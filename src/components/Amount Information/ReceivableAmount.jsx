// import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
const ReceivableAmount = () => {
  
  const payableData = [
    {
      id: 1,
      supplier: 'Ali',
      balance: '0050',
    },
    {
        id: 2,
        supplier: 'Usman',
        balance: '0100',
    },
  ];

  return (
    <div className="mt-6 container  p-6 text-gray-800 ">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
        Amount Receivable Information</h2>
        
        {/* search bar */}
        <div className="flex w-80 ml-1 items-center rounded-xl gap-2 text-xs ring-[1.5px] ring-gray-600 px-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-72 p-2 bg-transparent outline-none border-e-[1px] border-gray-600"
        />
        <span className="cursor-pointer">
        <FaSearch size={15} color="gray"/>
        </span>
      </div>
      
      {/* Ledger Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-blue text-white">
              <th className="px-4 py-2">SR.#</th>
              <th className="px-4 py-2">SUPPLIER</th>
              <th className="px-4 py-2">BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {payableData.map((entry) => (
              <tr key={entry.id} className='bg-white border border-gray-800'>
                <td className="border px-4 py-2 text-center">{entry.id}</td>
                <td className="border px-4 py-2 text-center">{entry.supplier}</td>
                <td className="border px-4 py-2 text-center">{entry.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceivableAmount;

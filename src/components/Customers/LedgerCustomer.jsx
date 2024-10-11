import { useState } from 'react';

const CustomerLedger = () => {
  const [customer, setCustomer] = useState('Adil Gas');
  const [dateFrom, setDateFrom] = useState('2024-10-02');
  const [dateTo, setDateTo] = useState('2024-10-02');
  const [balance, setBalance] = useState(3);

  const ledgerData = [
    {
      id: 1,
      date: '04 Jan 24',
      voucher: '0050',
      account: 'Sales Invoice @2930, WEIGHT .2696 Ton',
      debit: '66,943',
      credit: '',
      balance: '66,943',
    },
    {
      id: 2,
      date: '04 Jan 24',
      voucher: '0050',
      account: 'Cash Received against Sales Invoice',
      debit: '',
      credit: '66,940',
      balance: '3',
    },
    {
      id: 3,
      date: '08 Jan 24',
      voucher: '',
      account: 'Opening Balance',
      debit: '66,943',
      credit: '66,940',
      balance: '3',
    },
    
    {
        id: 3,
        date: '04 Jan 24',
        voucher: '0500',
        account: 'Cash Received against Sales Invoice',
        debit: '',
        credit: '80,940',
        balance: '5',
      },
  ];

  return (
    <div className="container  p-6 text-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">CUSTOMER LEDGER</h2>

      {/* Customer selection and date range filters */}
      <div className="flex items-center gap-4 justify-between mb-6">
        <div className="w-1/4">
          <label htmlFor="customer" className="block text-sm font-medium">
            Customer
          </label>
          <select
            id="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 "
          >
            <option value="Adil Gas">Adil Gas</option>
            <option value="Other Customer">Other Customer</option>
          </select>
        </div>

        <div className="w-1/4">
          <label htmlFor="dateFrom" className="block text-sm font-medium">
            Date From
          </label>
          <input
            type="date"
            id="dateFrom"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>

        <div className="w-1/4">
          <label htmlFor="dateTo" className="block text-sm font-medium">
            Date To
          </label>
          <input
            type="date"
            id="dateTo"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>

        <div className="w-1/4">
          <label htmlFor="balance" className="block text-sm font-medium">
            Balance
          </label>
          <input
            type="number"
            id="balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
        </div>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="bg-blue text-white">
              <th className="px-4 py-2">SR.#</th>
              <th className="px-4 py-2">DATE</th>
              <th className="px-4 py-2">VOUCHER</th>
              <th className="px-4 py-2">ACCOUNT</th>
              <th className="px-4 py-2">DEBIT</th>
              <th className="px-4 py-2">CREDIT</th>
              <th className="px-4 py-2">BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {ledgerData.map((entry, index) => (
              <tr key={entry.id} className={index % 2 === 0 ? 'bg-gray-400 ' : 'bg-gray-300 '}>
                <td className="border px-4 py-2 text-center">{entry.id}</td>
                <td className="border px-4 py-2 text-center">{entry.date}</td>
                <td className="border px-4 py-2 text-center">{entry.voucher}</td>
                <td className="border px-4 py-2">{entry.account}</td>
                <td className="border px-4 py-2 text-right">{entry.debit}</td>
                <td className="border px-4 py-2 text-right">{entry.credit}</td>
                <td className="border px-4 py-2 text-right">{entry.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default CustomerLedger;

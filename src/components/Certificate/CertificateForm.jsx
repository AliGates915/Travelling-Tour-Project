import { useState } from 'react';
import html2pdf from 'html2pdf.js';

const CertificateForm = () => {
  const [name, setName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [company, setCompanyName] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && courseName && expiryDate) {
      setShowCertificate(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const downloadPDF = () => {
    const element = document.getElementById('certificate');
    html2pdf()
      .from(element)
      .save(`${name}_Certificate.pdf`);
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center bg-[#ceeff5] ">
      <div className="bg-white shadow-2xl px-10 py-4 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-1 text-center text-gray-800">
          Certificate Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-2">
          
          <div>
            <label className="block text-gray-700 mb-2"> Person Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border text-gray-600 border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Company Name:</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-2 border text-gray-600 border-gray-300 rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Course Name:</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 border text-gray-600 border-gray-300 rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Issue Date:</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full p-2 border text-gray-600 border-gray-300 rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Expiry Date:</label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-2 border text-gray-600 border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue hover:bg-[#005a59] text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Generate Certificate
          </button>
        </form>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            id="certificate"
            className="p-4 border text-gray-800 border-gray-300 rounded bg-white max-w-lg left-20 mx-auto relative"
          >
            <h2 className="text-xl font-bold mb-2 text-green text-center">Certificate of Completion</h2>
            <img
              src="https://via.placeholder.com/600x400.png?text=Certificate+Image" // Replace with an actual certificate image URL
              alt="Certificate"
              className="w-full h-auto rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">This certifies that</p>
            <p className="text-center text-2xl text-green font-bold">{name}</p>
            <p className="text-center">has successfully completed the course:</p>
            <p className="text-center  font-bold">{courseName}</p>
            <p className="text-center">Expiry Date: {expiryDate}</p>
            <div className="mt-4 text-center">
              <button
                onClick={downloadPDF}
                className="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded-full"
              >
                Download Certificate as PDF
              </button>
            </div>
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateForm;

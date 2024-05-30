import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

const Reports = () => {
  const [bugs, setBugs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bugs");
        setBugs(response.data);
      } catch (error) {
        console.error("Error fetching bugs:", error);
      }
    };
    fetchBugs();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleDownloadPDF = (bug) => {
    const doc = new jsPDF();

    doc.text(`URL: ${bug.url}`, 10, 10);
    doc.text(`Issue: ${bug.issue}`, 10, 20);
    doc.text(`Details: ${bug.details}`, 10, 30);
    doc.text(`Testing: ${bug.testing}`, 10, 40);
    doc.text(`Description: ${bug.describe}`, 10, 50);
    doc.text(`Report Sent: ${bug.sendReport ? "Yes" : "No"}`, 10, 60);

    doc.save(`bug-report-${bug._id}.pdf`);
  };

  const handleBlockBug = async (bugId) => {
    try {
      await axios.post("http://localhost:3001/block-bug", { bugId });
      setBugs((prevBugs) =>
        prevBugs.map((bug) =>
          bug._id === bugId ? { ...bug, blocked: true } : bug
        )
      );
    } catch (error) {
      console.error("Error blocking bug:", error);
    }
  };

  const handleUnblockBug = async (bugId) => {
    try {
      await axios.post("http://localhost:3001/unblock-bug", { bugId });
      setBugs((prevBugs) =>
        prevBugs.map((bug) =>
          bug._id === bugId ? { ...bug, blocked: false } : bug
        )
      );
    } catch (error) {
      console.error("Error unblocking bug:", error);
    }
  };

  const filteredBugs = bugs.filter((bug) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      bug.url.toLowerCase().includes(searchTermLowerCase) ||
      bug.issue.toLowerCase().includes(searchTermLowerCase) ||
      bug.details.toLowerCase().includes(searchTermLowerCase) ||
      bug.testing.toLowerCase().includes(searchTermLowerCase) ||
      bug.describe.toLowerCase().includes(searchTermLowerCase) ||
      (bug.sendReport ? "yes" : "no").includes(searchTermLowerCase)
    );
  });

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto">
          <div className="w-full lg:w-11/12 xl:w-10/12 p-4 lg:p-12">
            <div className="mb-6">
              <div className="flex justify-center items-center mb-4">
                <hr className="h-0.5 border-b border-solid border-gray-500 grow" />
                <h3 className="mx-4 text-4xl font-extrabold text-gray-900">
                  Bug Reports
                </h3>
                <hr className="h-0.5 border-b border-solid border-gray-500 grow" />
              </div>
              <div className="flex justify-end items-center mb-6">
                <input
                  type="text"
                  placeholder="Search by URL, Issue, Details, Testing, Description, or Report Sent"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input flex items-center w-1/2 px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-gray-900 rounded-2xl border-2 border-gray-300"
                />
                <button
                  onClick={handleClear}
                  className="px-4 h-14 flex items-center justify-center font-bold bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Clear
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-center bg-white rounded-3xl border-collapse">
                  <thead className="text-xs text-gray-950 uppercase">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 w-10 text-left bg-gray-100"
                      >
                        SN.
                      </th>
                      <th scope="col" className="px-4 py-3 w-64 text-left">
                        URL
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 w-48 text-left bg-gray-100"
                      >
                        Issue
                      </th>
                      <th scope="col" className="px-4 py-3 w-64 text-left">
                        Details
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 w-48 text-left bg-gray-100"
                      >
                        Testing
                      </th>
                      <th scope="col" className="px-4 py-3 w-64 text-left">
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 w-24 text-left bg-gray-100"
                      >
                        Report Sent
                      </th>

                      <th scope="col" className="px-4 py-3 w-32 text-left">
                        Report Download
                      </th>
                      <th scope="col" className="px-4 py-3 w-32 text-left">
                        Solution
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredBugs.map((bug, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="px-4 py-3 w-10 text-left font-semibold text-gray-900 bg-gray-100"
                        >
                          {index + 1}
                        </th>
                        <td className="px-4 py-3 w-64 text-left break-words ">
                          {bug.url}
                        </td>
                        <td className="px-4 py-3 w-48 text-left bg-gray-100 break-words">
                          {bug.issue}
                        </td>
                        <td className="px-4 py-3 w-64 text-left break-words">
                          {bug.details}
                        </td>
                        <td className="px-4 py-3 w-48 text-left bg-gray-100 break-words">
                          {bug.testing}
                        </td>
                        <td className="px-4 py-3 w-64 text-left break-words">
                          {bug.describe}
                        </td>
                        <td className="px-4 py-3 w-24 text-left bg-gray-100">
                          {bug.sendReport ? "Yes" : "No"}
                        </td>

                        <td className="px-4 py-3 w-32 text-left ">
                          <button
                            onClick={() => handleDownloadPDF(bug)}
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                          >
                            Download PDF
                          </button>
                        </td>
                        <td className="px-4 py-3 w-32 text-left">
                          {bug.blocked ? (
                            <button
                              onClick={() => handleUnblockBug(bug._id)}
                              className="px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-300"
                            >
                              Unsolve
                            </button>
                          ) : (
                            <button
                              onClick={() => handleBlockBug(bug._id)}
                              className="px-4 py-2 font-bold text-white bg-green-500  rounded-md hover:bg-green-600 transition duration-300"
                            >
                              Solve
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const SolveList = () => {
  const [blockedBugs, setBlockedBugs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/blocked-bugs")
      .then((response) => {
        const bugsWithCountdown = response.data.map((bug) => {
          const bugExpiryDate = moment(bug.bugExpiryDate);
          const countdown = moment(bugExpiryDate).diff(moment(), "days");
          return { ...bug, countdown };
        });
        setBlockedBugs(bugsWithCountdown);
      })
      .catch((error) => {
        console.error("Error fetching blocked bugs:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const filteredBugs = searchTerm
    ? blockedBugs.filter(
        (bug) =>
          bug.url.includes(searchTerm) ||
          bug.issue.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bug.details.includes(searchTerm) ||
          bug.testing.includes(searchTerm) ||
          bug.describe.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blockedBugs;

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto">
          <div className="w-full lg:w-11/12 xl:w-10/12 p-4 lg:p-12">
            <div className="mb-6">
              <div className="flex justify-center items-center mb-4">
                <hr className="h-0.5 border-b border-solid border-gray-500 grow" />
                <h3 className="mx-4 text-4xl font-extrabold text-gray-900">
                  Solved Bugs
                </h3>
                <hr className="h-0.5 border-b border-solid border-gray-500 grow" />
              </div>
              <div className="flex justify-end items-center mb-6">
                <input
                  type="text"
                  placeholder="Search by URL, Issue, Details, Testing, or Description"
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
                <table className="min-w-full text-center bg-white rounded-3xl border-collapse">
                  <thead className="text-xs text-gray-950 uppercase ">
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
                        className="px-4 py-3 w-64 text-left bg-gray-100"
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
                      <th scope="col" className="px-4 py-3 w-64 text-left ">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredBugs.map((bug, index) => (
                      <tr key={bug._id} className="border-b border-gray-200">
                        <th
                          scope="row"
                          className="px-4 py-3 w-10 text-left font-medium text-gray-900 bg-gray-100"
                        >
                          {index + 1}
                        </th>
                        <td className="px-4 py-3 w-64 text-left  break-words">
                          {bug.url}
                        </td>
                        <td className="px-4 py-3 w-64 text-left break-words bg-gray-100">
                          {bug.issue}
                        </td>
                        <td className="px-4 py-3 w-64 text-left  break-words">
                          {bug.details}
                        </td>
                        <td className="px-4 py-3 w-48 text-left break-words bg-gray-100">
                          {bug.testing}
                        </td>
                        <td className="px-4 py-3 w-64 text-left break-words">
                          {bug.describe}
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

export default SolveList;

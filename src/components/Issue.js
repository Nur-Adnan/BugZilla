import React from "react";
import { IoIosDesktop } from "react-icons/io";
import { BiCodeCurly } from "react-icons/bi";
import { BiLogo99Designs } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Issue = ({ data, setData }) => {
  // Function to update the state with the selected issue
  const handleIssueSelection = (issue) => {
    setData({ ...data, issue });
  };

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center flex-col w-full">
            <h1 className="mb-8 text-2xl font-extrabold text-dark-grey-900">
              What is wrong with the page?
            </h1>
            <div className="grid grid-cols-2 gap-4">
              {/* Each button now has an onClick event that calls handleIssueSelection with the corresponding issue */}
              <button
                onClick={() =>
                  handleIssueSelection("Desktop site instead of mobile site")
                }
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 transition duration-700 ease-out"
              >
                <IoIosDesktop className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Desktop site instead of mobile site
                </span>
              </button>
              <button
                onClick={() => handleIssueSelection("Site is not usable")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-red-500 hover:bg-red-600 transition duration-700 ease-out"
              >
                <BiCodeCurly className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Site is not usable
                </span>
              </button>
              <button
                onClick={() => handleIssueSelection("Design is broken")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-yellow-500 hover:bg-yellow-600 transition duration-700 ease-out"
              >
                <BiLogo99Designs className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium ">
                  Design is broken
                </span>
              </button>
              <button
                onClick={() =>
                  handleIssueSelection("Video or audio doesn't play")
                }
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-green-500 hover:bg-green-600 transition duration-700 ease-out"
              >
                <CiVideoOn className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Video or audio doesn't play
                </span>
              </button>
              <button
                onClick={() => handleIssueSelection("Something else")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-purple-500 hover:bg-purple-600 transition duration-700 ease-out"
              >
                <MdOutlineAdminPanelSettings className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Something else
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;

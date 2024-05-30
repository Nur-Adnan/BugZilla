import React from "react";
import { ImSafari } from "react-icons/im";
import { FaOpera } from "react-icons/fa";
import { DiFirefox } from "react-icons/di";
import { FiChrome } from "react-icons/fi";
import { FaEdgeLegacy } from "react-icons/fa6";

const Testing = ({ data, setData }) => {
  // Function to update the state with the selected browser
  const handleBrowserSelection = (browser) => {
    setData({ ...data, testing: browser });
  };

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center flex-col w-full">
            <h1 className="mb-8 text-2xl font-extrabold text-dark-grey-900">
              Please select another browser you have tested on
            </h1>
            <div className="grid grid-cols-2 gap-4">
              {/* Each button now has an onClick event that calls handleBrowserSelection with the corresponding browser */}
              <button
                onClick={() => handleBrowserSelection("Safari")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-700 ease-out"
              >
                <ImSafari className="text-4xl mb-2 text-black" />
                <span className="text-sm text-black font-medium">Safari</span>
              </button>
              <button
                onClick={() => handleBrowserSelection("Opera")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-700 ease-out"
              >
                <FaOpera className="text-4xl mb-2 text-black" />
                <span className="text-sm text-black font-medium">Opera</span>
              </button>
              <button
                onClick={() => handleBrowserSelection("Firefox")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-700 ease-out"
              >
                <DiFirefox className="text-4xl mb-2 text-black" />
                <span className="text-sm text-black font-medium ">Firefox</span>
              </button>
              <button
                onClick={() => handleBrowserSelection("Chrome")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-700 ease-out"
              >
                <FiChrome className="text-4xl mb-2 text-black" />
                <span className="text-sm text-black font-medium">Chrome</span>
              </button>
              <button
                onClick={() => handleBrowserSelection("Edge")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-700 ease-out"
              >
                <FaEdgeLegacy className="text-4xl mb-2 text-black" />
                <span className="text-sm text-black font-medium">Edge</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;

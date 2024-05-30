import React from "react";
import { CiImageOff } from "react-icons/ci";
import { IoImagesOutline } from "react-icons/io5";
import { GrDocumentImage } from "react-icons/gr";
import { MdOutlineImageAspectRatio } from "react-icons/md";

const Details = ({ data, setData }) => {
  // Function to update the state with the selected design issue
  const handleDesignIssue = (issueDetail) => {
    setData({ ...data, details: issueDetail });
  };

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center flex-col w-full">
            <h1 className="mb-8 text-2xl font-extrabold text-dark-grey-900">
              How is the design broken?
            </h1>
            <div className="grid grid-cols-2 gap-4">
              {/* Each button now has an onClick event that calls handleDesignIssue with the corresponding issue detail */}
              <button
                onClick={() => handleDesignIssue("Images not loaded")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 transition duration-700 ease-out"
              >
                <CiImageOff className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Images not loaded
                </span>
              </button>
              <button
                onClick={() => handleDesignIssue("Items are overlapped")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-red-500 hover:bg-red-600 transition duration-700 ease-out"
              >
                <IoImagesOutline className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Items are overlapped
                </span>
              </button>
              <button
                onClick={() => handleDesignIssue("Items are misaligned")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-yellow-500 hover:bg-yellow-600 transition duration-700 ease-out"
              >
                <GrDocumentImage className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium ">
                  Items are misaligned
                </span>
              </button>
              <button
                onClick={() => handleDesignIssue("Items not fully visible")}
                className="flex flex-col items-center p-4 rounded-lg shadow-md bg-green-500 hover:bg-green-600 transition duration-700 ease-out"
              >
                <MdOutlineImageAspectRatio className="text-4xl mb-2 text-white" />
                <span className="text-sm text-white font-medium">
                  Items not fully visible
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

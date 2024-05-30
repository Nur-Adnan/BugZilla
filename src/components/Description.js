import React from "react";

const Description = ({ data, setData }) => {
  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center flex-col w-full">
            <div class="items-center flex-col">
              <h1 className="mb-8 text-2xl font-extrabold text-dark-grey-900">
                Please describe what happened !
              </h1>
              <label for="url" class="mb-2 text-sm text-grey-900 font-medium">
                Describe*
              </label>
              <input
                onChange={(e) => setData({ ...data, describe: e.target.value })}
                value={data.describe}
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300 h-28"
                type="text"
                id="describe"
                placeholder="Please Describe What Happend"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

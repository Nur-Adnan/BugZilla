import React from "react";

const WebAddress = ({ data, setData }) => {
  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container flex flex-col mx-auto bg-white rounded-lg my-5">
        <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div class="flex items-center justify-center w-full">
            <div class="items-center flex-col">
              <h1 class="mb-12 text-2xl font-extrabold text-dark-grey-900">
                Please enter the URL
              </h1>
              <label
                for="url"
                class="mb-2 text-sm text-start text-grey-900 font-medium"
              >
                Url*
              </label>
              <input
                onChange={(e) => setData({ ...data, url: e.target.value })}
                value={data.url}
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                type="text"
                id="url"
                placeholder="Url"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAddress;

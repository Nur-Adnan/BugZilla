import React from "react";

const Screenshot = ({ data, setData }) => {
  // Function to handle file input change and update the state with the image data
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setData({ ...data, screenshot: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center flex-col w-full">
            <div className="items-center flex-col">
              <h1 className="mb-8 text-2xl font-extrabold text-dark-grey-900">
                Uploaded images are publicly viewable!
              </h1>
              <form className="flex flex-col items-center justify-center">
                <div className="items-center flex-col">
                  <label
                    htmlFor="screenShot"
                    className="mb-2 text-sm text-grey-900 font-medium"
                  >
                    Screenshot*
                  </label>
                  <input
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                    type="file"
                    id="screenShot"
                    name="screenShot"
                    required
                    onChange={handleFileChange} // Added onChange event handler
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screenshot;

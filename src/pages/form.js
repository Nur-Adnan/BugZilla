import WebAddress from "../components/WebAddress";
import Issue from "../components/Issue";
import Details from "../components/Details";
import Testing from "../components/Testing";
import Description from "../components/Description";
import Screenshot from "../components/Screenshot";
import SendReport from "../components/SendReport";
import logo from "../components/bug.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    url: "",
    issue: "",
    details: "",
    testing: "",
    describe: "",
    screenshot: "",
    sendReport: false, // Initialize sendReport as false
  });

  const BugFixing = async (e) => {
    const { url, issue, details, testing, describe, screenshot } = data;
    e.preventDefault();

    try {
      setData({ ...data, sendReport: true });
      await axios.post("http://localhost:3001/bugfixing", {
        url,
        issue,
        details,
        testing,
        describe,
        screenshot,
        sendReport: true, // Explicitly set sendReport to true here as well
      });
      Swal.fire("Success!", "BugFixing successful", "success");
    } catch (error) {
      Swal.fire("Error!", "BugFixing failed", "error");
      console.log(error);
    }
  };

  const titles = [
    "Web Address",
    "Issue",
    "Details",
    "Testing",
    "Description",
    "Screenshot",
    "Send Report",
  ];
  const ProgressBar = () => {
    const progress = (page / (titles.length - 1)) * 100;
    return (
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#BF202F] bg-[#FEE2E2]">
              Step {page + 1}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-[#BF202F]">
              {progress.toFixed(0)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#FEE2E2]">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#BF202F]"
          ></div>
        </div>
      </div>
    );
  };

  const validateFields = () => {
    const { url, issue, details, testing, describe, screenshot } = data;
    if (page === 0 && !url) {
      Swal.fire("Error!", "Please fill out the Web Address first.", "error");
      return false;
    } else if (page === 1 && !issue) {
      Swal.fire("Error!", "Please fill out the Issue first.", "error");
      return false;
    } else if (page === 2 && !details) {
      Swal.fire("Error!", "Please fill out the Details first.", "error");
      return false;
    } else if (page === 3 && !testing) {
      Swal.fire("Error!", "Please fill out the Testing first.", "error");
      return false;
    } else if (page === 4 && !describe) {
      Swal.fire("Error!", "Please fill out the Description first.", "error");
      return false;
    } else if (page === 5 && !screenshot) {
      Swal.fire("Error!", "Please upload the Screenshot first.", "error");
      return false;
    }
    return true;
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <WebAddress data={data} setData={setData} />;
    } else if (page === 1) {
      return <Issue data={data} setData={setData} />;
    } else if (page === 2) {
      return <Details data={data} setData={setData} />;
    } else if (page === 3) {
      return <Testing data={data} setData={setData} />;
    } else if (page === 4) {
      return <Description data={data} setData={setData} />;
    } else if (page === 5) {
      return <Screenshot data={data} setData={setData} />;
    } else {
      return <SendReport data={data} setData={setData} />;
    }
  };

  return (
    <div className="w-full h-screen min-h-full flex flex-col justify-center sm:px-6 lg:px-8 z-100 mf:h-screen">
      <div></div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-24 w-auto" src={logo} alt="/" />
        <h1 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
          {titles[page]}
        </h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <ProgressBar />
          <div>{PageDisplay()}</div>
          <div className="flex flex-row gap-3 pt-8">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Prev
            </button>
            <button
              onClick={(e) => {
                if (validateFields()) {
                  if (page === titles.length - 1) {
                    BugFixing(e);
                    console.log(data);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }
              }}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

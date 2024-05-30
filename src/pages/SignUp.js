import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [role, setRole] = useState("NormalUser");
  const navigate = useNavigate();

  const handleSendCode = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/send-code", {
        email,
      });
      if (response.data.success) {
        setIsCodeSent(true);
        Swal.fire({
          title: "Success",
          text: "Verification code sent to email",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to send verification code",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Error sending verification code",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleVerifyCode = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/verify-code", {
        fullName,
        email,
        password,
        verificationCode,
        phoneNumber,
        role,
      });
      if (response.data.success) {
        Swal.fire({
          title: "Success",
          text: "Registration Successful",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoneNumber("");
        setVerificationCode("");
        setIsCodeSent(false);
        navigate("/login");
      } else {
        Swal.fire({
          title: "Error",
          text: "Invalid verification code",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Error verifying code",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form
                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                onSubmit={isCodeSent ? handleVerifyCode : handleSendCode}
              >
                <h3 className="mb-12 text-4xl font-extrabold text-dark-grey-900">
                  Sign Up
                </h3>
                <label
                  htmlFor="fullName"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Full Name*
                </label>
                <input
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Email*
                </label>
                <input
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Password*
                </label>
                <input
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Confirm Password*
                </label>
                <input
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="phoneNumber"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Phone Number (optional)
                </label>
                <input
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label
                  htmlFor="role"
                  className="mb-2 text-sm text-start text-grey-900 font-medium"
                >
                  Role:
                </label>
                <select
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option
                    value="NormalUser"
                    className="mb-2 text-sm text-start text-grey-900 font-medium"
                  >
                    Normal User
                  </option>
                </select>
                {isCodeSent && (
                  <>
                    <label
                      htmlFor="verificationCode"
                      className="mb-2 text-sm text-start text-grey-900 font-medium"
                    >
                      Verification Code*
                    </label>
                    <input
                      className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border-2 border-gray-300"
                      type="text"
                      id="verificationCode"
                      placeholder="Enter the verification code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      required
                    />
                  </>
                )}
                <button
                  className="w-full px-6 py-5 mb-5 text-sm font-bold bg-blue-500 leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-sky-blue-600 focus:ring-4 focus:ring-sky-blue-100 bg-sky-blue-500"
                  type="submit"
                >
                  {isCodeSent ? "Verify Code" : "Send Verification Code"}
                </button>
                <div id="recaptcha-container"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

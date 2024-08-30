import React from "react";
import { FaRegUser } from "react-icons/fa";

const FullAddress = ({ formData, handleChange }) => {
  const states = [
    "Andhra Pradesh",
    "Punjab",
    "Maharashtra",
    "Jharkhand",
    "Tripura",
    "Uttar Pradesh",
    "Gujarat",
    "Mizoram",
    "Rajasthan",
    "Tamil Nadu",
    "Kerala",
    "Haryana",
    "Chhattisgarh",
    "Jammu & Kashmir",
    "Bihar",
    "West Bengal",
    "Karnataka",
    "Orissa",
    "Madhya Pradesh",
    "Nct Of Delhi",
    "Chandigarh",
    "Uttarakhand",
    "Assam",
    "Nagaland",
    "Manipur",
    "Puducherry",
    "Andaman & Nicobar Islands",
    "Meghalaya",
    "Himachal Pradesh",
    // Add more states as needed
  ];

  return (
    <div className="">
      <h2 className="text-[16px] font-[600] text-center pb-9 text-blue-700">
        Applicant Full Address
      </h2>
      <div className="flex gap-3 w-full max-[1000px]:flex-col  items-center ">
        <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            className="w-full px-4 py-5 font-[400]  rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
            placeholder="Enter House No..."
            required
          />
        </div>
        <div className="flex items-center border w-full border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2 ">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full px-4 py-5 font-[400] text-[16px]  rounded-md  shadow-lg placeholder-[#8A6112] outline-none"
            placeholder="Street"
            required
          />
        </div>
        <div className="flex items-center border w-full rounded-md  border-[#CDC4B1] bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-4 font-[400]  rounded-md text-[16px] shadow-lg placeholder-[#8A6112] outline-none"
            placeholder="City/Town"
            required
          />
        </div>
      </div>
      <div className="flex gap-5 mt-7 w-full max-[1000px]:flex-col">
        <div className="flex items-center border  border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full px-4 py-4 font-[400] text-[16px] outline-none rounded-md  shadow-lg placeholder-[#8A6112]"
            placeholder="PinCode"
            required
          />
        </div>
        <div className="flex items-center  border border-[#CDC4B1] rounded-md w-full bg-[#FFFDF9] quote">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="state w-full px-4 py-4 font-[400] text-[16px] outline-none rounded-md shadow-lg bg-[#FFFDF9]  placeholder-[#8A6112] text-[#8A6112]"
            required
          >
            <option value="" disabled>
              Select State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FullAddress;

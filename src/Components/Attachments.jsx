import React from 'react';
import { FaUpload } from "react-icons/fa";

const Attachments = ({ formData, changeHandle }) => {
  return (
    <div className="">
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
        Attachments Section
      </h2>
      <div className="flex items-center justify-center w-full gap-4 max-[1000px]:flex-col">
        <div className="flex flex-col items-center">
          <label
            htmlFor="video-upload"
            className="px-11 py-4 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed "
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Video Upload</span>
          </label>
          
          <input
            id="video-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "video")}
          />
          {formData.video && (
            <p className="mt-4 text-gray-700">{formData.video.name}</p>
          )}
        </div>
        <div className="flex flex-col items-center ">
          <label
            htmlFor="image-upload"
            className="px-11 py-4 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Image Upload</span>
          </label>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "image")}
          />
          {formData.image && (
            <p className="mt-4 text-gray-700">{formData.image.name}</p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <label
            htmlFor="electricityBill-upload"
            className="px-11 py-4 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed"
          >
            <FaUpload className="mx-auto mb-4 text-[#D3900D] active:text-white" />
            <span>Electricity Bill</span>
          </label>
          <input
            id="electricityBill-upload"
            type="file"
            className="hidden"
            onChange={(e) => changeHandle(e, "electricityBill")}
          />
          {formData.electricityBill && (
            <p className="mt-4 text-gray-700">{formData.electricityBill.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attachments;

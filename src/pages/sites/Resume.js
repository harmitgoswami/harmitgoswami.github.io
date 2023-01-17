import React from "react";
import resumepdf from "../../components/Harmit_Resume.pdf";

export default function Resume() {
  return (
    <div className="bg-[#088484] h-screen w-full centered p-3">
      <div className="bg-[#c0c0c0] w-11/12 h-full p-2 border-2 border-t-white border-l-white border-b-black border-r-black">
        <div className="inner-container w-full p-3 border-t-white border-l-white border-b-black border-r-black centered">
          <div className="inner-container w-full centered border-t-black border-l-black border-b-white border-r-white">
            
            <div className="w-full h-full centered ">
              <iframe
                src={resumepdf}
                title="resumepdf"
                className="w-full h-full centered"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

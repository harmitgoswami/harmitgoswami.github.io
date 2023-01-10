import React from "react";
import warning from "../../assets/icons/msg_warning-0.png";

export default function Projects() {
  return (
    <div className="bg-[#088484] h-screen w-full centered">
      <div className="bg-[#c0c0c0] w-9/12 h-5/6 p-2 border-2 border-t-white border-l-white border-b-black border-r-black">
        <div className="inner-container w-full p-3 border-t-white border-l-white border-b-black border-r-black centered">
          <div className="inner-container w-full centered border-t-black border-l-black border-b-white border-r-white">
            
            <div className="grid grid-cols-3 bg-white h-full w-full centered">
              <div className="">
                <img
                  src={warning}
                  alt=""
                  className={"border-white border-2"}
                ></img>
              </div>
              <div className="font-bold font-scp text-lg">WORK IN PROGRESS
              <div className="font-normal font-scp centered text-sm">please check back later!</div></div>
              <div className="">
                <img
                  src={warning}
                  alt=""
                  className={"border-white border-2"}
                ></img>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

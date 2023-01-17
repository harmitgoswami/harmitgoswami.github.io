import React from "react";
import { Link } from "react-router-dom";
import journal from "../../assets/icons/notepad-5.png";
import resume from "../../assets/icons/certificate_checklist-1.png";
import crab from "../../assets/icons/crabicon.ico";

export default function Home() {
  return (
    <div className="bg-[#088484] h-screen w-full centered">
      <div className="w-6/12 h-3/6 px-1 pb-12 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black">
        
        <div className="h-5 bg-[#080484] w-full mb-3">
          <p className="text-white text-sm font-scp ml-3 tracking-wide	">
            © Harmit Goswami 2022
          </p>
        </div>

        <div className="inner-container p-3 border-t-white border-l-white border-b-black border-r-black centered">
          <div className="inner-container centered border-t-black border-l-black border-b-white border-r-white">
            <div className="centered bg-white w-full h-full md:space-x-20 md:overflow-hidden">
              
              <div className="icon-box centered border-t-gray-300 border-l-gray-300 border-b-black border-r-black">
                <Link to="/personal" className=" ">
                  <div className="centered">
                    <img src={crab} alt="" className={"icon"}></img>
                  </div>
                  <p className="font-scp centered sm:text-sm md:text-base lg:text-lg">About me</p>
                </Link>
              </div>

              <div className="icon-box centered border-t-gray-300 border-l-gray-300 border-b-black border-r-black">
                <Link to="/resume" className=" ">
                  <div className="centered">
                    <img src={resume} alt="" className={"icon"} ></img>
                  </div>
                  <p className="font-scp centered sm:text-sm md:text-base lg:text-lg">Resumé</p>
                </Link>
              </div>

              <div className="icon-box centered border-t-gray-300 border-l-gray-300 border-b-black border-r-black">
                <Link to="/projects" className=" ">
                  <div className="centered">
                    <img src={journal} alt="" className={"icon"}></img>
                  </div>
                  <p className="font-scp centered sm:text-sm md:text-base lg:text-lg">Projects</p>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

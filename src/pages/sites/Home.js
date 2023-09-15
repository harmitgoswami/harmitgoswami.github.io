import React from "react";
import IconModule from "../../components/IconModule";
import journal from "../../assets/icons/notepad-5.png";
import resume from "../../assets/icons/certificate_checklist-1.png";
import crab from "../../assets/icons/crabicon-2.png";

export default function Home() {
  return (
    <div className="bg-[#088484] h-screen w-full flex flex-col">
      
      <div className="flex-1 flex justify-center items-center">
        <div className="w-8/12 h-3/6 px-1 pb-9 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black">
          
          <div className="h-5 bg-[#080484] w-full mb-1">
            <p className="text-white text-sm font-scp ml-3 tracking-wide">
              © Harmit Goswami 2023
            </p>
          </div>

          <div className="inner-container p-2 border-t-white border-l-white border-b-black border-r-black centered">
            <div className="inner-container centered border-t-black border-l-black border-b-white border-r-white">
              <div className="centered bg-white w-full h-full md:space-x-20 md:overflow-hidden">

                <IconModule hasLink={true} link={"/personal"} image={crab} name={"About Me"}/>
                <IconModule hasLink={true} link={"/resume"} image={resume} name={"Resumé"}/>
                <IconModule hasLink={true} link={"/projects"} image={journal} name={"Projects"}/>  

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

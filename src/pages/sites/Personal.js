import React from "react";
import harmitphoto from "../../components/IMG_8478_Original.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Personal() {
  return (
    <div className="bg-[#088484] w-full h-full centered">
      
      <div className="mx-4 my-2 w-3/6 bg-[#c0c0c0] p-2 border-2 border-t-white border-l-white border-b-black border-r-black">
        <div className="inner-container p-3 border-t-white border-l-white border-b-black border-r-black centered">
          <div className="inner-container centered border-t-black border-l-black border-b-white border-r-white w-full">
            <img src={harmitphoto} alt="" className={""}></img>
          </div>
        </div>
      </div>

      
        <div className="mx-4 w-5/6 h-5/6 border-2 bg-[#c0c0c0] p-3 border-t-white border-l-white border-b-black border-r-black centered">
          <div className="overflow-auto h-full w-full border-2 bg-[#c0c0c0] centered border-t-black border-l-black border-b-white border-r-white">
            
            <div className="bg-white h-full w-full centered px-4 pt-4 ">
              
              <div className="overflow-auto h-full">

                <p className="centered font-scp font-bold sm:text-lg md:text-3xl lg:text-5xl pb-10">
                  {" "}
                  Hey! My name is Harmit Goswami.
                </p>

                <div className="font-scp sm:text-base lg:text-lg space-y-8 h-5/6 w-full text-center">
                  <p className="centered">
                    I'm currently in my second year of Computer Engineering at
                    the University of Toronto, and I expect to graduate in 2026.
                  </p>
                  <p className="centered">
                    My passion in tech stems from my early exposures to FRC
                    Robotics, programming, and STEM. As such, I want to gain
                    even more exposure to tech, particularly in software,
                    product, and UI Design.
                  </p>
                  <p className="centered">
                    In my free time, I love listening to music (any genre!),
                    playing team sports like basketball or volleyball, playing
                    Pokémon, reading, and spending quality time with my friends.
                  </p>
                  <p className="centered">
                    (P.S. If you're confused about all the crab icons, it's
                    because my name is similar to hermit, like the hermit crab!
                    )
                  </p>
                </div>

                <div className="grid grid-cols-2 centered py-10">
                  <a
                    href="https://www.linkedin.com/in/harmit-goswami-773123217/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-6 hover:text-gray-400 "
                  >
                    <FontAwesomeIcon
                      className="sm:text-[3rem] md:text-[5rem]"
                      icon={faLinkedin}
                    />
                  </a>
                  <a
                    href="https://github.com/harmitgoswami/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-6 hover:text-gray-400"
                  >
                    <FontAwesomeIcon
                      className="sm:text-[3rem] md:text-[5rem]"
                      icon={faGithub}
                    />
                  </a>
                </div>
              </div>

            

          </div>
        </div>
      </div>
    </div>
  );
}

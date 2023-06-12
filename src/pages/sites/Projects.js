import { useState } from "react";
import globe from "../../assets/icons/entire_network_globe-0.png";
import cd from "../../assets/icons/cd_audio_cd_a-3.png";
import monitor from "../../assets/icons/monitor_windows.png";
import receipt from "../../assets/icons/script_file_teal-1.png";
import descriptions from "../../components/descriptions.json";
import IconModule from "../../components/IconModule";
import Modal from "react-modal";

Modal.setAppElement("#root"); // This line is important for accessibility purposes

export default function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleIconClick = (name) => {
    const content = descriptions[name];
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <div className="bg-[#088484] h-screen w-full centered">
      <div className="bg-[#c0c0c0] w-9/12 h-5/6 p-2 border-2 border-t-white border-l-white border-b-black border-r-black">
        <div className="inner-container w-full p-3 border-t-white border-l-white border-b-black border-r-black centered">
          <div className="inner-container w-full centered border-t-black border-l-black border-b-white border-r-white">
            <div className="grid grid-cols-2 gap-16 bg-white h-full w-full centered sm:overflow-hidden">
              <IconModule
                onClick={() => handleIconClick("GIS Mapping Software")}
                hasLink={false}
                image={globe}
                name={"GIS Mapping Software"}
              />
              <IconModule
                onClick={() => handleIconClick("Sistema Toronto App")}
                hasLink={false}
                image={cd}
                name={"Sistema Toronto App"}
              />
              <IconModule
                onClick={() => handleIconClick("Personal Website")}
                hasLink={false}
                image={monitor}
                name={"Personal Website"}
              />
              <IconModule
                onClick={() => handleIconClick("Receipt Journal")}
                hasLink={false}
                image={receipt}
                name={"Receipt Journal"}
              />
            </div>
          </div>
        </div>
      </div>

      {modalIsOpen && modalContent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: "transparent",
            },
            content: {
              backgroundColor: "transparent",
              border: "none",
            },
          }}
        >
          <div className="w-full h-full px-2 pb-12 bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black">
            <div className="h-7 bg-[#080484] w-full mb-3">
              <button
                onClick={() => setIsOpen(false)}
                className="cancel-box"
              ></button>
              <p className="text-white text-lg font-scp ml-3 tracking-wide">
                {modalContent?.name}
              </p>
            </div>

            <div className="inner-container p-3 border-t-white border-l-white border-b-black border-r-black centered">
              <div className="inner-container centered border-t-black border-l-black border-b-white border-r-white">
                <div className="bg-white w-full h-full">
                  <h1 className="centered mb-16">{modalContent?.name}</h1>
                  <p className="date-text centered mb-16">
                    {modalContent?.date}
                  </p>
                  <ul className="space-y-6">
                    {modalContent?.description &&
                      modalContent.description.map((sentence, index) => (
                        <li
                          key={index}
                          className="desc-text list-disc list-inside centered"
                        >
                          - {sentence}
                        </li>
                      ))}
                  </ul>
                  {modalContent?.url && (
                    <p className="centered date-text underline mt-12">
                      <a href={modalContent.url}>
                        Project Link: {modalContent.url}
                      </a>
                    </p>
                  )}
                  <div className="grid grid-cols-2 gap-4 mt-12">
                {
                  modalContent?.images && modalContent.images.map((image, index) => (
                    <div className="image-container overflow-hidden centered" key={index}>
                      <img src={image} alt={'Project Screenshot'} className="project-image object-cover object-center"/>
                    </div>
                  ))
                }
              </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

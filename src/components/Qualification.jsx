import React, { useState } from "react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [isModalOpen, setIsModalOpen] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const toggleModal = (index) => {
    // Toggle modal visibility based on the clicked index
    setIsModalOpen(isModalOpen === index ? null : index);
  };

  return (
    <section className="container mx-auto py-12" id="qualification">
      <h2 className="text-3xl font-medium mb-4">Qualification</h2>
      <span className="text-xl text-gray-500">My personal journey</span>

      <div className="grid gap-8">
        {/* Tabs */}
        <div className="flex justify-evenly mb-8">
          <div
            className={`cursor-pointer text-lg font-medium p-4 ${
              activeTab === "education" ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => toggleTab("education")}
          >
            <i className="uil uil-graduation-cap text-2xl mr-2"></i>
            Education
          </div>
        </div>

        {/* Content */}
        <div className={`${activeTab === "education" ? "block" : "hidden"}`}>
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Education Data */}
            <div>
              <h3 className="text-xl font-semibold">Graduation</h3>
              <span className="text-gray-600">
                Ramniranjan Jhunjhunwala College
              </span>
              <div className="text-sm text-gray-500">
                <i className="uil uil-calendar-alt"></i>- 2021 - 2024
              </div>
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => toggleModal(0)}
              >
                View More
                <i className="uil uil-arrow-right ml-2"></i>
              </span>
              {isModalOpen === 0 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-8 rounded-lg max-w-sm">
                    <h4 className="text-xl font-semibold mb-4">
                      College Summary:
                    </h4>
                    <i
                      className="uil uil-times absolute top-4 right-4 cursor-pointer"
                      onClick={() => toggleModal(0)}
                    ></i>
                    <p>
                      College name: Ramniranjan Jhunjhunwala College
                      <br />
                      Qualification: BSC <br />
                      Duration: 3 Years <br />
                      Score: 8.5
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <span className="bg-blue-500 w-4 h-4 rounded-full"></span>
              <span className="bg-blue-500 w-1 h-full mt-6 transform translate-x-1"></span>
            </div>

            {/* Certification */}
            <div>
              <h3 className="text-xl font-semibold">
                Certified Mern Stack Developer
              </h3>
              <span className="text-gray-600">
                Quality SoftWare Technologies
              </span>
              <div className="text-sm text-gray-500">
                <i className="uil uil-calendar-alt"></i>- 2024
              </div>
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => toggleModal(1)}
              >
                View More
                <i className="uil uil-arrow-right ml-2"></i>
              </span>
              {isModalOpen === 1 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-8 rounded-lg max-w-sm">
                    <h4 className="text-xl font-semibold mb-4">
                      Fullstack Developer:
                    </h4>
                    <i
                      className="uil uil-times absolute top-4 right-4 cursor-pointer"
                      onClick={() => toggleModal(1)}
                    ></i>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <i className="uil uil-check-circle text-green-500 mr-2"></i>
                        <p>
                          <strong>
                            Front-end: HTML, CSS, JavaScript, React, Node.js
                          </strong>
                        </p>
                      </li>
                      <li className="flex items-center">
                        <i className="uil uil-check-circle text-green-500 mr-2"></i>
                        <strong>Back-end: MongoDB, Express.js</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [links] = useState(["/axios", "/card"]);
  const navigate = useNavigate();

  const randomLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    navigate(selectedLink);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between gap-20 h-screen">
      <div className="w-full md:w-1/2 text-left space-y-4">
        <div className="text-red-500">
          <h1 className="text-4xl font-bold mb-4">
            Mantine UI and Axios for Production
          </h1>
          <p className="text-lg">
            With Mantine and Axios, make your coding life easy
          </p>
        </div>

        <button
          onClick={randomLink}
          className="px-6 py-2 bg-[#3B247F] text-white font-semibold rounded-lg shadow-md hover:bg-[#C5D3FF] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#C5D3FF] focus:ring-opacity-75"
        >
          Surprise!!
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/hero.jpg"
          alt="Descriptive Alt Text"
          className="w-auto h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HomePage;

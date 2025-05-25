import React from "react";
import humanbody from "../../assets/human.png";
import { ZoomIn } from "lucide-react";

const AnatomySection = ({ healthData }) => {
  return (
    <div className="w-full rounded-xl p-6 shadow-sm bg-[#F6FAFF]">
      <div className="relative h-96 flex justify-center items-center ">
        <img
          src={humanbody}
          className="object-fill h-full mix-blend-multiply select-none"
          draggable={false}
          alt="human body"
          loading="lazy"
        />
        <ZoomIn className="top-0 right-0 absolute text-gray-400" />

        {/* Health Indicators */}
        {healthData.map((item) => (
          <div key={item.id} className={`absolute ${item.position}`}>
            <div
              className={`${item.color} text-white px-3 py-1 rounded-md text-xs font-medium flex items-center space-x-1`}
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;

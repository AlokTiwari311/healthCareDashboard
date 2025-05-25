import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { calendarData } from "../../data/calendarData";

const Component = () => {
  return (
    <div className="rounded-lg  w-full xl:max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 mx-6">
        <h2 className="text-indigo-900 text-xl font-semibold">October 2021</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1  rounded">
            <svg width="100" height="30" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,20 30,10 30,30" fill="#3F3D9F" />
              <line x1="30" y1="20" x2="45" y2="20" stroke="#3F3D9F" stroke-width="2" />

              <polygon points="80,20 70,10 70,30" fill="#3F3D9F" />
              <line x1="70" y1="20" x2="55" y2="20" stroke="#3F3D9F" stroke-width="2" />
            </svg>

          </button>

        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-indigo-800 mb-2">
        {calendarData.map((day, index) => (
          <div key={index} className="py-2">
            {day.day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-lg ${day.active ? "bg-blue-100" : ""
              }`}
          >
            <div
              className={`${day.disabled ? "text-gray-400" : "text-indigo-900 "
                } text-2xl font-bold mb-2`}
            >
              {day.date}
            </div>

            {day.slots.map((slot, i) => {
              const isHighlighted = day.highlight === slot;
              return (
                <div
                  key={i}
                  className={`py-1 text-sm  ${day.disabled
                    ? "text-gray-400"
                    : isHighlighted
                      ? day.active
                        ? " bg-indigo-800 text-white rounded-2xl px-2  transform hover:scale-105 transition-transform"
                        : " bg-indigo-300 text-white rounded-2xl px-2 transform hover:scale-105 transition-transform"
                      : "text-gray-700"
                    } ${!day.disabled && !isHighlighted && slot === day.highlight
                      ? "font-bold "
                      : ""
                    }`}
                >
                  <div className="p-1">
                    {slot}
                    {isHighlighted && !day.disabled && (
                      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Component;

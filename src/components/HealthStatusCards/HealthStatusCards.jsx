import React from "react";

const HealthStatusCards = ({ healthStatusCards }) => {
  return (
    <div className=" flex flex-row  md:flex-col items-end space-y-6 space-x-4 w-full">
      {healthStatusCards.map((card) => {
        return (
          <div key={card.id} className={`${card.color} rounded-xl p-4`}>
            <div className="flex items-center space-x-3 mb-3">
              <span className=" sm:text-3xl">{card.icon}</span>
              <h3 className="font-semibold text-blue-900">{card.name}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">{card.date}</p>
            <div className="w-full bg-white rounded-full h-2">
              <div
                className={`${card.progressColor} h-2 rounded-full`}
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;

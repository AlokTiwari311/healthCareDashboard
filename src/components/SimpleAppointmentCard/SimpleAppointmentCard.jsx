import React from "react";

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div
      className={`${appointment.color}  ${
        appointment.color === "bg-blue-900" ? "text-white" : "text-blue-950"
      } p-4 rounded-2xl`}
    >
      <div className="flex items-center justify-between gap-6">
        <h4 className="font-medium  mb-1">{appointment.title} </h4>
        <span className="text-xl flex-shrink-0">{appointment.icon}</span>
      </div>
      <p className="text-sm ">{appointment.time}</p>
      {appointment.doctor && <p className="text-sm ">{appointment.doctor}</p>}
    </div>
  );
};

export default SimpleAppointmentCard;

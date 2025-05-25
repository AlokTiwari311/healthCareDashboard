import React from 'react'

const SimpleAppointmentCard = ({ appointment }) => {
    return (
        <div className={`${appointment.color} p-4 rounded-xl`}>
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                    <h4 className="font-medium text-[#2f2b9e] mb-1">{appointment.title}</h4>
                    <p className="text-sm text-[#2f2b9e]">{appointment.time}</p>
                </div>
                <span className="text-xl flex-shrink-0">{appointment.icon}</span>
            </div>
        </div>
    );
};

export default SimpleAppointmentCard
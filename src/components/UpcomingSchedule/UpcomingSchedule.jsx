import React from 'react'
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

const UpcomingSchedule = ({ upcomingSchedule }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-[#231f91] mb-6">The Upcoming Schedule</h2>
                <div className="space-y-4">
                    {upcomingSchedule.map((schedule, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-medium text-gray-400 mb-3">On {schedule.day}</h3>
                            <div className="flex gap-3">
                                {schedule.appointments.map((appointment) => (
                                    <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingSchedule
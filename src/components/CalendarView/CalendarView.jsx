import React from 'react'
import { ChevronLeft, ChevronRight, Smile, User } from 'lucide-react';

const CalendarView = ({ calendarData, appointments }) => {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#3734A9]">{calendarData.month}</h2>
                <div className="flex items-center space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronLeft className="w-4 h-4 text-[#3734A9]" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronRight className="w-4 h-4 text-[#3734A9]" />
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {calendarData.days.map((day) => (
                    <div key={day.date} className="text-center">
                        <div className="text-sm font-bold text-[#3734A9] mb-1">{day.day}</div>
                        <div className="text-sm font-medium text-[#3734A9] mb-2">{day.date}</div>
                        <div className="space-y-1">
                            {day.appointments.map((time, index) => (
                                <div key={index} className="text-xs bg-[#3734A9] text-white px-1 py-0.5 rounded">
                                    {time}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Appointment Cards */}
            <div className="p-4 max-w-2xl mx-auto">
                <div className="flex gap-4">
                    <div className="bg-[#3734A9] text-white p-4 rounded-xl h-28 flex flex-col flex-shrink-0" style={{ width: '200px' }}>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium">Dentist</span>
                            <span className="text-lg">{appointments.dentist.icon}</span>
                        </div>
                        <div className="mt-auto">
                            <p className="text-sm opacity-90">{appointments.dentist.time}</p>
                            <p className="text-sm opacity-90">{appointments.dentist.doctor}</p>
                        </div>
                    </div>

                    <div className="bg-[#DDE2F9] p-4 rounded-xl h-28 flex flex-col flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-[#3734A9]">Physiotherapy Appointment</span>
                            <span className="text-lg text-[#3734A9]">{appointments.physiotherapy.icon}</span>
                        </div>
                        <div className="mt-auto">
                            <p className="text-sm text-[#3734A9]">{appointments.physiotherapy.time}</p>
                            <p className="text-sm text-[#3734A9]">{appointments.physiotherapy.doctor}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarView
import React from 'react'
import { activityData } from '../../data/appointments';


const ActivityFeed = () => {

    const getBarColor = (color) => {
        switch (color) {
            case 'cyan':
                return 'bg-cyan-400';
            case 'navy':
                return 'bg-indigo-700';
            case 'gray':
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-md">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-[#231f91]">Activity</h2>
                <p className="text-xm text-gray-400">{activityData.weeklyAppointments} appointment on this week</p>
            </div>

            {/* Chart Container */}
            <div className="relative">
                {/* Chart Area */}
                <div className="flex items-end justify-between h-32 px-2">
                    {activityData.chartData.map((dayData, dayIndex) => (
                        <div key={dayIndex} className="flex flex-col items-center">
                            {/* Bars Container */}
                            <div className="flex items-end space-x-1 mb-3 h-24">
                                {dayData.bars.map((bar, barIndex) => (
                                    <div
                                        key={barIndex}
                                        className={`w-2 rounded-sm ${getBarColor(bar.color)}`}
                                        style={{
                                            height: `${(bar.height / 75) * 100}%`,
                                            minHeight: '8px'
                                        }}
                                    ></div>
                                ))}
                            </div>
                            {/* Day Label */}
                            <span className="text-xs text-gray-400 font-medium">
                                {dayData.day}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityFeed;
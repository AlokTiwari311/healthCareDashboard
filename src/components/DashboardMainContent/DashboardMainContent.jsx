import React from 'react';

import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const DashboardMainContent = ({
    healthData,
    healthStatusCards,
    calendarData,
    appointments,
    upcomingSchedule,
    activityData,
}) => {
    return (
        <main className="ml-64 flex-1 bg-white p-4">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600">This Week</p>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Left Section */}
                <div className="col-span-6 space-y-6">
                    {/* Top row - Anatomy and Health Status Cards side by side */}
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-3">
                            <AnatomySection healthData={healthData} />
                        </div>
                        <div className="col-span-2">
                            <HealthStatusCards healthStatusCards={healthStatusCards} />
                        </div>
                    </div>

                    {/* Bottom row - Activity chart spanning full width */}
                    <div>
                        <ActivityFeed activityData={activityData} />
                    </div>
                </div>

                {/* Right Section - Calendar and Upcoming Schedule */}
                <div className="col-span-6 space-y-6">
                    <CalendarView calendarData={calendarData} appointments={appointments} />
                    <UpcomingSchedule upcomingSchedule={upcomingSchedule} />
                </div>
            </div>
        </main>
    );
};

export default DashboardMainContent;
import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";

import { healthData, healthStatusCards } from "./data/healthData";
import { appointments, upcomingSchedule, activityData } from "./data/appointments";
import { calendarData } from "./data/calendarData";
import { navigationLinks } from "./data/navigationLinks";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar navigationLinks={navigationLinks} />
      <Header />
      <DashboardMainContent
        healthData={healthData}
        healthStatusCards={healthStatusCards}
        calendarData={calendarData}
        appointments={appointments}
        upcomingSchedule={upcomingSchedule}
        activityData={activityData}
      />
    </div>
  );
};

export default App;

import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import Calendar from "../CalendarView/Calendar";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import { Menu, MoveRightIcon } from "lucide-react";
import ActivityChart from "../ActivityFeed/ActivityChart";
import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import { Search, Bell, Plus, ChevronDown } from "lucide-react";

const DashboardMainContent = ({
  healthData,
  healthStatusCards,
  appointments,
  upcomingSchedule,
}) => {
  return (
    <main className="lg:ml-64 flex-1 bg-white">
      <div className="grid grid-cols-12 gap-6 ">
        {/* Left wala Section */}
        <div className="col-span-6 space-y-6 p-6">
          {/* Header */}
          <div className="flex justify-between items-center gap-4">
            <Menu className="w-6 h-6 text-blue-900 cursor-pointer lg:hidden" />
            <div className="relative  w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2  border border-gray-200 rounded-lg  focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
            </div>
            <div className="relative p-2 border rounded-lg  border-gray-200">
              <Bell className="w-5 h-5 text-blue-900 " fill="#3734A9" />
            </div>
            <div className="flex  justify-end space-x-4  xl:hidden">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 border rounded-md flex items-center justify-center overflow-hidden">
                  {/* <span className="text-white text-sm font-medium">JD</span> */}
                  <img
                    src="https://avatar.iran.liara.run/public"
                    alt="User Avatar"
                    draggable="false"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
              <button className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-950">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mb-6 flex justify-between text-blue-900">
            <h1 className="text-2xl font-bold ">Dashboard</h1>

            <button className="flex justify-center items-center text-blue-800 gap-1 mt-4">
              <a href="details"></a>
              This Week <ChevronDown size={12} className="mt-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-8 xl:grid-cols-6 xl:gap-8   md:px-4">
            <div className=" sm:col-span-6 xl:col-span-4 ">
              <AnatomySection healthData={healthData} />
            </div>
            <div className="w-full sm:col-span-2 xl:col-span-2 flex flex-col items-end justify-between  ">
              <HealthStatusCards healthStatusCards={healthStatusCards} />
              <button className="flex justify-center items-center text-blue-800 gap-1 mt-4">
                <a href="details"></a>
                Details <MoveRightIcon size={12} className="mt-1" />
              </button>
            </div>
          </div>


          <ActivityChart />
        </div>

        <div className="col-span-6 space-y-6 bg-blue-50 p-6">
          <div className="flex  justify-end space-x-4 max-xl:hidden">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 border rounded-md flex items-center justify-center overflow-hidden">
                {/* <span className="text-white text-sm font-medium">JD</span> */}
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="User Avatar"
                  draggable="false"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
            <button className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-950">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <Calendar />
          <div className="flex flex-row gap-4 px-4">
            <SimpleAppointmentCard
              key={appointments.id}
              appointment={appointments.dentist}
            />
            <SimpleAppointmentCard
              key={appointments.id}
              appointment={appointments.physiotherapy}
            />
          </div>
          <UpcomingSchedule upcomingSchedule={upcomingSchedule} />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;

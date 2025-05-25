// src/data/appointments.js

export const appointments = {
  dentist: {
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
  },
  physiotherapy: {
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
  },
};

export const upcomingSchedule = [
  {
    day: "Thursday",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "🩺",
        color: "bg-[#DDE2F9]",
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
        color: "bg-[#DDE2F9]",
      },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
        color: "bg-[#DDE2F9]",
      },
      {
        id: 4,
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧑🏽‍⚕️",
        color: "bg-[#DDE2F9]",
      },
    ],
  },
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    {
      day: "Mon",
      bars: [
        { height: 25, color: "cyan" },
        { height: 45, color: "navy" },
        { height: 35, color: "cyan" },
      ],
    },
    {
      day: "Tues",
      bars: [
        { height: 65, color: "cyan" },
        { height: 40, color: "navy" },
        { height: 20, color: "cyan" },
      ],
    },
    {
      day: "Wed",
      bars: [
        { height: 15, color: "gray" },
        { height: 55, color: "gray" },
        { height: 8, color: "cyan" },
      ],
    },
    {
      day: "Thurs",
      bars: [
        { height: 35, color: "gray" },
        { height: 25, color: "gray" },
        { height: 45, color: "cyan" },
        { height: 15, color: "cyan" },
      ],
    },
    {
      day: "Fri",
      bars: [
        { height: 55, color: "cyan" },
        { height: 75, color: "navy" },
        { height: 35, color: "cyan" },
        { height: 25, color: "cyan" },
      ],
    },
    {
      day: "Sat",
      bars: [
        { height: 30, color: "navy" },
        { height: 45, color: "navy" },
        { height: 20, color: "navy" },
      ],
    },
    {
      day: "Sun",
      bars: [
        { height: 50, color: "cyan" },
        { height: 35, color: "gray" },
        { height: 60, color: "navy" },
      ],
    },
  ],
};

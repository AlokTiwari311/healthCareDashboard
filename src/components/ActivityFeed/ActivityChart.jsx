import React from "react";

const activityData = [
  [
    [45, 55],
    [20, 40],
    [60, 0],
    [50, 50],
  ],
  [
    [65, 35],
    [30, 40],
    [50, 45],
    [0, 40],
  ],
  [
    [30, 50],
    [50, 40],
    [65, 35],
    [0, 50],
  ],
  [
    [55, 45],
    [50, 45],
    [35, 50],
    [50, 50],
  ],
  [
    [70, 30],
    [40, 25],
    [0, 100],
    [30, 55],
    [65, 30],
  ],
  [
    [40, 60],
    [80, 20],
    [40, 25],
    [100, 0],
    [30, 55],
  ],
  [
    [60, 40],
    [30, 50],
    [50, 50],
    [65, 35],
  ],
];

const getBarColor = (group, barIndex) => {
  const [first, second] = group;

  if (
    (first === 50 && second === 50) ||
    (first === 0 && second === 100) ||
    (first === 100 && second === 0) ||
    (first === 0 && second === 40) ||
    (first === 40 && second === 0)
  ) {
    return "bg-gray-300";
  }

  return barIndex === 0 ? "bg-indigo-500" : "bg-cyan-400";
};

export default function ActivityChart() {
  return (
    <div className="bg-gray-50 p-6 rounded-xl w-full xl:max-w-2xl border ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-medium text-gray-800">Activity</h2>
        <p className="text-sm text-gray-400">3 appointment on this week</p>
      </div>

      <div className="flex justify-between items-end h-32 px-2 ">
        {activityData.map((day, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center">
            <div className="flex items-end gap-2 lg:gap-3 mb-4 h-16">
              {day.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col-reverse gap-0.5">
                  {group.map((height, barIndex) => (
                    <div
                      key={barIndex}
                      className={`${getBarColor(
                        group,
                        barIndex
                      )} w-1 rounded-full`}
                      style={{ height: `${height}px` }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <span className="text-xs text-gray-400">
              {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"][dayIndex]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

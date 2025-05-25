import React from "react";

const Sidebar = ({ navigationLinks }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-blue-50  flex flex-col overflow-hidden max-lg:hidden">
      {/* Logo Section */}
      <div className="p-6 ">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-cyan-400">Health</span>care.
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-1">
          <div className="text-xs font-medium text-gray-400 tracking-wider mb-4 px-3">
            General
          </div>
          {navigationLinks.slice(0, 5).map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href="#"
                className={`flex items-center px-3 py-4 rounded-lg text-sm font-medium transition-colors ${link.active
                  ? " text-blue-950"
                  : "text-gray-500  hover:text-blue-950"
                  }`}
              >
                <IconComponent className="w-6 h-6 mr-3 " />
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="mt-8 space-y-1 ">
          <div className="text-xs font-medium text-gray-400 tracking-wider mb-4 px-3">
            Tools
          </div>
          {navigationLinks.slice(5, 7).map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href="#"
                className={`flex items-center px-3 py-4 rounded-lg text-sm font-medium text-gray-600  hover:text-blue-950 transition-colors ${index === 2 ? "bg-blue-50 text-blue-700" : ""
                  }`}
              >
                <IconComponent className="w-6 h-6 mr-3" />
                {link.name}
              </a>
            );
          })}
          <div className="mb-4 absolute bottom-2 w-[88%] left-4">
            {(() => {
              const link = navigationLinks[navigationLinks.length - 1];
              const IconComponent = link.icon;
              return (
                <a
                  key={"last"}
                  href="#"
                  className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600  hover:text-blue-950 transition-colors"
                >
                  <IconComponent className="w-6 h-6 mr-3" />
                  {link.name}
                </a>
              );
            })()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react'

const Sidebar = ({ navigationLinks }) => {
    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
            {/* Logo Section */}
            <div className="p-6 ">
                <h1 className="text-xl font-bold text-gray-800">
                    Health<span className="text-teal-500">care.</span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                <div className="space-y-1">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-3">
                        General
                    </div>
                    {navigationLinks.slice(0, 5).map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={index}
                                href="#"
                                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${link.active
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <IconComponent className="w-5 h-5 mr-3" />
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                <div className="mt-8 space-y-1">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-3">
                        Tools
                    </div>
                    {navigationLinks.slice(5).map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            >
                                <IconComponent className="w-5 h-5 mr-3" />
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar
import React from 'react'
import { Search, Bell, Plus } from 'lucide-react';


const Header = () => {
    return (
        <header className="bg-white top-2 px-6 py-4 flex items-center justify-between ml-64">
            <div className="flex items-center space-x-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3734A9] w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div className="relative p-2 border border-gray-200">
                    <Bell className="w-5 h-5 text-[#3734A9] " />
                </div>
            </div>
            <div className="flex items-center space-x-4">

                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">JD</span>
                    </div>
                </div>
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </header>
    );
};
export default Header
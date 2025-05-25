import React from 'react';

const AnatomySection = ({ healthData }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="relative h-96 flex justify-center items-center">
                {/* Human Body Silhouette */}
                <div className="relative w-32 h-80 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full opacity-80">

                </div>

                {/* Health Indicators */}
                {healthData.map((item) => (
                    <div key={item.id} className={`absolute ${item.position}`}>
                        <div className={`${item.color} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1`}>
                            <span className="text-sm">{item.icon}</span>
                            <span>{item.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnatomySection;
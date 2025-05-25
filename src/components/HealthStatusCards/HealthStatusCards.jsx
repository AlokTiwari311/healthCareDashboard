import React from 'react'

const HealthStatusCards = ({ healthStatusCards }) => {
    return (
        <div className="space-y-4">
            {healthStatusCards.map((card) => {
                return (
                    <div key={card.id} className={`${card.color} rounded-xl p-4`}>
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="text-xl">{card.icon}</span>
                            <h3 className="font-semibold text-[#2f2b9e]">{card.name}</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{card.date}</p>
                        <div className="w-full bg-white rounded-full h-2">
                            <div className={`${card.progressColor} h-2 rounded-full`} style={{ width: '70%' }}></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HealthStatusCards
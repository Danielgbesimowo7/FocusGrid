import React from 'react'

const ProblemCard = ({icon, iconBgColor, title, subtitle}) => {
  return (
    <div className="flex p-8 bg-white rounded-lg shadow-md flex-col gap-4 problem-card-shadow">
      <div
        className={`size-14 rounded-lg ${iconBgColor} flex items-center justify-center mr-4`}
      >
        {icon}
      </div>
      <h3 className="text-[1.1rem] font-medium">{title}</h3>
      <p className="text-[16px] lg:text-[18px] text-gray-600">{subtitle}</p>
    </div>
  );
}

export default ProblemCard

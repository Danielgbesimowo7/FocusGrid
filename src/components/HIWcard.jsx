import React from 'react'

const HIWcard = ({number, icon, iconBgColor, title, subtitle}) => {
  return (
    <div className='flex flex-col items-centergap-4'>
      <div className='hidden lg:flex bg-primary-alt text-white size-12 rounded-full items-center justify-center'>
        <h2 className='font-bold text-3xl'>{number}</h2>
      </div>
      <div className="flex p-8 bg-white rounded-lg shadow-md flex-col gap-4 problem-card-shadow">
        <div
          className={`size-14 rounded-lg ${iconBgColor} flex items-center justify-center mr-4`}
        >
          {icon}
        </div>
        <h3 className="text-[1.1rem] font-medium">{title}</h3>
        <p className="text-[16px] lg:text-[18px] text-gray-600">{subtitle}</p>
      </div>
    </div>    
  );
}

export default HIWcard

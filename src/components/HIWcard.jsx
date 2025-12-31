import React from 'react'

const HIWcard = ({number, icon, iconBgColor, title, subtitle}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='bg-primary-alt text-white size-12 rounded-full flex items-center justify-center'>
        <h2 className='font-bold text-3xl'>{number}</h2>
      </div>
      <div className="flex p-8 bg-white rounded-lg shadow-md flex-col gap-4 problem-card-shadow">
        <div
          className={`w-16 h-16 rounded-lg ${iconBgColor} flex items-center justify-center mr-4`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg lg:text-xl text-gray-600">{subtitle}</p>
      </div>
    </div>    
  );
}

export default HIWcard

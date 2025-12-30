import React from 'react'

const HeaderChips = ({title}) => {
  return (

    <div>
      <div className="text-xs font-medium bg-white p-2 inline-flex items-center gap-2 rounded-full chip-shadow  ">
        <div className="size-4 bg-green-500 rounded-full"></div>
        <p className="text-sm">{title}</p>
        </div>
    </div>   
  );
}

export default HeaderChips

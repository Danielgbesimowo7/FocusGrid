import React from 'react'
import commenticon from '../assets/comment.svg'
const CommentCard = ({userImg, userName, userDetail, comment}) => {
  return (
    <div className="flex p-8 bg-white rounded-lg shadow-md flex-col gap-4 problem-card-shadow select-none cursor-pointer hover:scale-105 transiton-all duration-300 ease-in-out">
      <div>
        <img src={commenticon} alt="" />
      </div>
      <p className="text-[#6c7278] text-[16px] lg:text-[18px]">{comment}</p>
      <div className='flex items-center gap-3'>
        <img className="w-10 h-10 rounded-full" src={userImg} alt="user" />
        <div className='space-y-0.5'>
          <h3 className="text-[16px] font-medium">{userName}</h3>
          <p className="text-gray-400 text-[16px]">{userDetail}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard

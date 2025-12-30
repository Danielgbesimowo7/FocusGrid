import React from 'react'
import commenticon from '../assets/comment.svg'
const CommentCard = ({userImg, userName, userDetail, comment}) => {
  return (
    <div className="flex p-8 bg-white rounded-lg shadow-md flex-col gap-4 problem-card-shadow select-none cursor-pointer hover:scale-105 transiton-all duration-300 ease-in-out">
      <div>
        <img src={commenticon} alt="" />
      </div>
      <p className="text-[#6c7278] text-lg">{comment}</p>
      <div className='flex items-center gap-3'>
        <img src={userImg} alt="user" />
        <div className='space-y-0.5'>
          <h3 className="text-xl font-semibold">{userName}</h3>
          <p className="text-gray-60 text-lg">{userDetail}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard

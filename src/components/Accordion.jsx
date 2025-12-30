import React from 'react'
import chevron from '../assets/chevron-right.svg'


const Accordion = ({question, answer}) => {
  return (
    <div className='bg-white p-4 space-y-2 rounded-lg problem-card-shadow'>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold'>{question}</h3>
        <img src={chevron} alt="" />
      </div>
      <p className='text-lg'>{answer}</p>
    </div>
  )
}

export default Accordion

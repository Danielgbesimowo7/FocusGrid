import React, { useState, useRef, useId, useEffect } from 'react'
import chevron from '../assets/chevron-right.svg'

const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState('0px')
  const id = useId()

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [open, answer])

  const toggle = () => setOpen(o => !o)

  return (
    <div className="w-full bg-white rounded-lg problem-card-shadow">
      <button
        aria-expanded={open}
        aria-controls={`acc-panel-${id}`}
        onClick={toggle}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <h3 className="font-semibold">{question}</h3>
        <img
          src={chevron}
          alt="toggle"
          className={`w-5 h-5 transform transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}
        />
      </button>

      <div
        id={`acc-panel-${id}`}
        ref={contentRef}
        style={{ maxHeight }}
        className="px-4 overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="py-3 text-slate-700">{answer}</div>
      </div>
    </div>
  )
}

export default Accordion

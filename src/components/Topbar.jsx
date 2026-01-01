import React from 'react'

const Topbar = ({ onToggle }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <button className="sm:hidden p-2 rounded-md hover:bg-slate-100" onClick={onToggle} aria-label="Toggle sidebar">
          <span className="text-xl">☰</span>
        </button>

        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="text-sm text-slate-500">Welcome back, Daniel — let's make today productive</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center">D</div>
      </div>
    </header>
  )
}

export default Topbar

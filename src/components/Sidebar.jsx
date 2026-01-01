import React from 'react'
import focusgridLogo from "../assets/focuslogo.svg";

const Sidebar = ({ collapsed }) => {
  const desktopWidth = collapsed ? 'w-20' : 'w-60'

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`hidden sm:flex flex-col ${desktopWidth} bg-slate-900 text-white transition-all duration-200 flex-shrink-0`}>
        <div className="p-4 flex items-center">
          <img src={focusgridLogo} alt="FocusGrid" className="h-8" />
        </div>

        <nav className="px-3 py-2">
          <ul className="space-y-1">
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Overview</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Tasks</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Projects</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Analytics</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Mobile sidebar (slide-in) */}
      <aside className={`sm:hidden fixed inset-y-0 left-0 z-40 w-60 bg-slate-900 text-white transform ${collapsed ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200` }>
        <div className="p-4 flex items-center">
          <img src={focusgridLogo} alt="FocusGrid" className="h-8" />
        </div>

        <nav className="px-3 py-2">
          <ul className="space-y-1">
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Overview</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Tasks</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Projects</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Analytics</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar

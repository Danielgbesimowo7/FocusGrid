import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(c => !c)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Topbar onToggle={toggle} />

        <main className="p-6 flex-1 overflow-y-auto">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="text-sm text-slate-500">Quick stats and recent activity</p>

            <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-4 rounded-lg shadow">Focus Sessions</div>
              <div className="bg-white p-4 rounded-lg shadow">Tasks Completed</div>
              <div className="bg-white p-4 rounded-lg shadow">Streak</div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium">Today's Tasks</h3>
            <div className="mt-3 text-slate-600">No tasks yet — add one to get started.</div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

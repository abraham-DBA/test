import { useState } from 'react'
import './App.css'

interface StatCard {
  title: string
  value: string | number
  change: string
  icon: string
}

interface ActivityItem {
  id: number
  user: string
  action: string
  timestamp: string
  status: 'success' | 'pending' | 'warning'
}

function App() {
  const stats: StatCard[] = [
    { title: 'Total Users', value: '12,543', change: '+12.5%', icon: '👥' },
    { title: 'Revenue', value: '$48,230', change: '+8.2%', icon: '💰' },
    { title: 'Orders', value: '3,842', change: '+25.1%', icon: '📦' },
    { title: 'Conversion', value: '3.24%', change: '-2.4%', icon: '📊' },
  ]

  const recentActivity: ActivityItem[] = [
    { id: 1, user: 'John Doe', action: 'Created new order #2451', timestamp: '2 mins ago', status: 'success' },
    { id: 2, user: 'Jane Smith', action: 'Updated customer profile', timestamp: '15 mins ago', status: 'success' },
    { id: 3, user: 'Mike Johnson', action: 'Pending approval for discount', timestamp: '1 hour ago', status: 'pending' },
    { id: 4, user: 'Sarah Williams', action: 'Failed payment attempt', timestamp: '3 hours ago', status: 'warning' },
    { id: 5, user: 'Tom Brown', action: 'Exported monthly report', timestamp: '5 hours ago', status: 'success' },
  ]

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <h1>Dashboard</h1>
          <p className="subtitle">Welcome back, Admin</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">Reports</button>
          <button className="btn-primary">+ New</button>
        </div>
      </header>

      <main className="main-content">
        <section className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.title}</h3>
                <p className="stat-value">{stat.value}</p>
                <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </section>

        <div className="content-grid">
          <section className="activity-section">
            <div className="section-header">
              <h2>Recent Activity</h2>
              <a href="#" className="view-all">View All</a>
            </div>
            <div className="activity-list">
              {recentActivity.map((item) => (
                <div key={item.id} className="activity-item">
                  <div className="activity-status-dot" data-status={item.status}></div>
                  <div className="activity-details">
                    <p className="activity-user">{item.user}</p>
                    <p className="activity-action">{item.action}</p>
                  </div>
                  <span className="activity-time">{item.timestamp}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="quick-stats">
            <h2>Top Products</h2>
            <div className="product-list">
              <div className="product-item">
                <div className="product-name">Premium Plan</div>
                <div className="product-metric">
                  <span>458 sales</span>
                  <span className="metric-badge">78%</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-name">Basic Plan</div>
                <div className="product-metric">
                  <span>285 sales</span>
                  <span className="metric-badge">48%</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-name">Enterprise</div>
                <div className="product-metric">
                  <span>142 sales</span>
                  <span className="metric-badge">24%</span>
                </div>
              </div>
              <div className="product-item">
                <div className="product-name">Startup</div>
                <div className="product-metric">
                  <span>89 sales</span>
                  <span className="metric-badge">15%</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App

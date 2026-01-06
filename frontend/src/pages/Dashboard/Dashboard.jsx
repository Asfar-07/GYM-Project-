import React from 'react'
import './dashboard.css'

export default function Dashboard() {
   const students = [
    { name: "John Smith", age: 28, program: "Muscle Gain", date: "2024-01-15", status: "excellent" },
    { name: "Sarah Johnson", age: 32, program: "Weight Loss", date: "2024-02-20", status: "good" },
    { name: "Emily Davis", age: 29, program: "General Fitness", date: "2024-03-25", status: "average" },
    { name: "David Brown", age: 35, program: "Weight Loss", date: "2024-04-05", status: "good" },
  ];

  return (
    <div className="dashboard">

      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">🏋️ Gym Trainer</div>

        <nav>
        <ul>
          <li className="dash-section-active">Dashboard</li>
          <li>Students</li>
          <li>Programs</li>
          <li>Analytics</li>
          <li>Income</li>
          <li>Settings</li>
          </ul>
        </nav>

        <div className="dash-logout">Logout</div>
      </aside>

      <main className="dashboard-main">

        <header className="dashboard-m-header">
          <h2>Trainer Dashboard</h2>

          <div className="dashboard-ur-profile">
            <span className="dash-notify-bell">🔔</span>
            <img src="https://i.pravatar.cc/40" alt="trainer" />
            <div>
              <strong>USER NAME</strong>
              <small>Certified Trainer</small>
            </div>
          </div>
        </header>

        <section className="user-info-card">
          <div className="user-info">
            <img src="https://i.pravatar.cc/80" alt="trainer" />
            <div>
              <small>Trainer Name</small>
              <h3>USER NAME</h3>
            </div>
          </div>

          <div className="user-status">
            <div>
              <small>Certification</small>
              <p>ACE Certified</p>
            </div>
            <div>
              <small>Experience</small>
              <p>8 Years</p>
            </div>
            <div>
              <small>Active Students</small>
              <p>10</p>
            </div>
          </div>

          <button className="add-btn">+ Add New Student</button>
        </section>

        <section className="students">
          <div className="students-header">
            <h3>My Students</h3>

            <div className="studentuser-filters">
              <input placeholder="Search students..." />
              <select>
                <option>All Programs</option>
              </select>
            </div>
          </div>

          <div className="studentuser-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Program</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {students.map((s, index) => (
                  <tr key={index}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.program}</td>
                    <td>{s.date}</td>
                    <td>
                      <span className={`badge ${s.status}`}>
                        {s.status}
                      </span>
                    </td>
                    <td>👁 ✏️</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}

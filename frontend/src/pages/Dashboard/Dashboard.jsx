import React from "react";
import {CiSettings } from "react-icons/ci";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdAttachMoney,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaRegBell,FaSearch } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { IoAnalytics,IoEyeOutline }from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { LuPencil } from "react-icons/lu";
import "./dashboard.css";

export default function Dashboard() {
  const students = [
    {
      name: "John Smith",
      age: 28,
      program: "Muscle Gain",
      date: "2024-01-15",
      status: "excellent",
    },
    {
      name: "Sarah Johnson",
      age: 32,
      program: "Weight Loss",
      date: "2024-02-20",
      status: "good",
    },
    {
      name: "Emily Davis",
      age: 29,
      program: "General Fitness",
      date: "2024-03-25",
      status: "average",
    },
    {
      name: "David Brown",
      age: 35,
      program: "Weight Loss",
      date: "2024-04-05",
      status: "good",
    },
  ];

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">🏋️ Gym Trainer</div>
        <nav>
          <ul>
            <li className="dash-section-active">
              <MdOutlineDashboard /> Dashboard
            </li>
            <li>
              {" "}
              <FiUsers /> Students
            </li>
            <li>
              {" "}
              <CgGym /> Programs
            </li>
            <li>
              {" "}
              <MdOutlineAnalytics /> Analytics
            </li>
            <li>
              {" "}
              <MdAttachMoney /> Income
            </li>
            <li>
              {" "}
              <CiSettings /> Settings
            </li>
          </ul>
        </nav>

        <div className="dash-logout">
          {" "}
          <IoIosLogOut /> Logout
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-m-header">
          <h2>Trainer Dashboard</h2>

          <div className="dashboard-ur-profile">
            <div className="dash-notify-bell">
              <button>
                <FaRegBell />
                <samp></samp>
              </button>
            </div>
            <img src="https://i.pravatar.cc/40" alt="trainer" />
            <div className="dashboard-h-username">
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
            <div>
              <small>Certification</small>
              <p>ACE Certified</p>
            </div>
            <div>
              <small>Experience</small>
              <p> <IoAnalytics /> 8 Years</p>
            </div>
            <div style={{marginRight:"80px"}}>
              <small>Active Students</small>
              <p> <FiUsers /> 10</p>
            </div>

        </section>
        <div className="add-btn">
          <button >+ Add New Student</button>
        </div>

        <section className="students">
          <div className="students-dashboard-m-header">
            <h3>My Students</h3>

            <div className="studentuser-filters">
              <label htmlFor="userSearch">
                <FaSearch />
              <input id="userSearch" placeholder="Search students..." />
              </label>
              <label htmlFor="urPrograms">
                <SiSimpleanalytics />
               <select id="urPrograms">
                <option>All Programs</option>
              </select>
              </label>
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
                      <span className={`badge ${s.status}`}>{s.status}</span>
                    </td>
                    <td><button><IoEyeOutline /></button> <button><LuPencil /></button></td>
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

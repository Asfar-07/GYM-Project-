import React, { useState } from "react";
import NavProfile from "../../components/Navbar/NavProfile";
import NotifyIcon from "../../components/UI/NotifyIcon";
import { CiSettings } from "react-icons/ci";
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdAttachMoney,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { IoAnalytics, IoEyeOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { LuPencil } from "react-icons/lu";
import DashboardPrograms from "./Dashboard-Programs";
import AnnualIncome from "./AnnualIncome";
import DashboardSettings from "./Dashboard-Settings";
import "./dashboard.css";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [activesection, setActiveSection] = useState("student");
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

  function changeSection(e) {
    const selectactive = document.querySelectorAll(".dash-section-active");
    console.log(selectactive);
    selectactive.forEach((element) => {
      element.className = "";
    });
    e.target.className = "dash-section-active";
  }

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">🏋️ Gym Trainer</div>
        <nav>
          <ul>
            <li className="dash-section-active">
              <MdOutlineDashboard /> Dashboard
            </li>
            <li
              onClick={(e) => {
                setActiveSection("student");
                changeSection(e);
              }}
            >
              {" "}
              <FiUsers /> Students
            </li>
            <li
             onClick={(e) => {
                setActiveSection("programs");
                changeSection(e);
              }}>
              {" "}
              <CgGym /> Programs
            </li>
            {/* <li>
              {" "}
              <MdOutlineAnalytics /> Analytics
            </li> */}
            <li  onClick={(e) => {
                setActiveSection("income");
                changeSection(e);
              }}>
              {" "}
              <MdAttachMoney /> Income
            </li>
            <li  onClick={(e) => {
                setActiveSection("settings");
                changeSection(e);
              }}>
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
            <NotifyIcon />
            <NavProfile />
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
            <p>
              {" "}
              <IoAnalytics /> 8 Years
            </p>
          </div>
          <div style={{ marginRight: "80px" }}>
            <small>Active Students</small>
            <p>
              {" "}
              <FiUsers /> 10
            </p>
          </div>
        </section>
        <div className="add-btn">
          <button onClick={() => setShowModal(true)}>+ Add New Student</button>
        </div>
        {activesection === "student" && (
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
                      <td className="dash-action-btn">
                        <button>
                          <IoEyeOutline />
                        </button>{" "}
                        <button>
                          <LuPencil />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {activesection === "programs" && <DashboardPrograms />}
        {activesection === "income" && <AnnualIncome />}
        {activesection === "settings" && <DashboardSettings />}
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Student</h3>
              <span className="close" onClick={() => setShowModal(false)}>
                ×
              </span>
            </div>

            <div className="modal-body">
              <label>Student Name</label>
              <input placeholder="Enter student name" />

              <label>Age</label>
              <input type="number" placeholder="Enter age" />

              <label>Fitness Goal</label>
              <select>
                <option>Select fitness goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>General Fitness</option>
              </select>

              <label>Program Type</label>
              <select>
                <option>Select program</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <label>Start Date</label>
              <input type="date" />
            </div>

            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="submit-btn">Add Student</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import "./student-view.css";

export default function StudentView({
  students,
  index,
  setStudents,
  setFilteredStudents,
}) {
  const [showStudentSidebar, setShowStudentSidebar] = useState(false);
  return (
    <div>
      <div className="dash-action-btn">
        <button
          onClick={() => {
            setShowStudentSidebar(true);
          }}
        >
          <IoEyeOutline />
        </button>{" "}
        <button
          onClick={() => {
            setShowStudentSidebar(true);
          }}
        >
          <LuPencil />
        </button>
        <button
          style={{ color: "#ff2525" }}
          onClick={() => {
            setStudents((s) => s.filter((_, i) => i !== index));
            setFilteredStudents((s) => s.filter((_, i) => i !== index));
          }}
        >
          <MdDeleteOutline />
        </button>
      </div>
      {showStudentSidebar && (
        <div className="student-sidebar-overlay">
          <aside className="student-sidebar">
            <div className="sidebar-header">
              <h3>Student Details</h3>
              <span
                onClick={() => {
                  setShowStudentSidebar(false);
                }}
              >
                ×
              </span>
            </div>

            <div className="sidebar-content">
              <div className="info-row">
                <span>Name</span>
                <strong>{students.name}</strong>
              </div>

              <div className="info-row">
                <span>Age</span>
                <strong>{students.age}</strong>
              </div>

              <div className="info-row">
                <span>Program</span>
                <strong>{students.program}</strong>
              </div>

              <div className="info-row">
                <span>Join Date</span>
                <strong>{students.date}</strong>
              </div>

              <div className="info-row highlight">
                <span>Pending (This Month)</span>
                <strong>{students.name}</strong>
              </div>
              <button
                className="edit-student-btn"
                style={{ backgroundColor: "#ff2525" }}
                onClick={() => {
                  setStudents((s) => s.filter((_, i) => i !== index));
                  setFilteredStudents((s) => s.filter((_, i) => i !== index));
                  setShowStudentSidebar(false);
                }}
              >
                <MdDeleteOutline /> Student
              </button>
              <button className="edit-student-btn">
                <LuPencil /> Edit Student
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

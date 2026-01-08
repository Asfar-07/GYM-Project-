import React, { useState } from "react";
import "./navprofile.css";
export default function NavProfile() {
  const [accountdiv, setAccountDiv] = useState(false);
  return (
    <div  className="main-h-ur-p" onClick={()=>{
      accountdiv ? setAccountDiv(false) : setAccountDiv(true);
    }}>
      <div className="header-user-profile">
        <img src="https://i.pravatar.cc/40" alt="trainer" />
        <div className="header-username">
          <strong>USER NAME</strong>
          <small>Certified Trainer</small>
        </div>
      </div>
      {
        accountdiv && 
        <div className="header-s-account">
        <ul>
          <li><a href="/">My Account</a></li>
          <li><a href="/user/manage/dashboard">Profile</a></li>
          <li><a href="/">Settings</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </div>
      }
     
    </div>
  );
}

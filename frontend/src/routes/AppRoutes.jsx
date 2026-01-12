import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/user/manage/dashboard" Component={Dashboard}></Route>
           <Route path="/login" Component={Login}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

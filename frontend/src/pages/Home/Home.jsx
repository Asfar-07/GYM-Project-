import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../../components/Navbar/Navbar'
import { toggleTheme } from '../../features/theme/themeSlice';

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div>
        <Navbar />
      Home
      <button onClick={() => dispatch(toggleTheme())}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
    </div>
  )
}

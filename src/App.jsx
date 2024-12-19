import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./assets/pages/Dashboard";
import Login from "./assets/pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Dashboard/>}/>
       <Route path="/login" element={<Login/>}/>
       </Routes>
    </Router>

  )
}
import DashPage from "../components/DashPage"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="w-full flex">
        <Sidebar/>
        <DashPage/>
    </div>
  )
}

export default Dashboard
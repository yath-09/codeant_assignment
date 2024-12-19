import DashPage from "../components/DashPage"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="w-full flex md:flex-row flex-col h-screen">
        <Sidebar/>
        <DashPage/>
    </div>
  )
}

export default Dashboard
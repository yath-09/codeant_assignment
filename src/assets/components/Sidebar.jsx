import { useState } from "react"

const githubRepos = ["Yatharth Ahuja", "Utkarsh", "Rahul"]
const sidebarRepositories = [
  { icon: "/repo.png", title: "AI Code Review" },
  { icon: "/repo1.png", title: "Cloud Security" },
  { icon: "/repo2.png", title: "How to Use" },
  { icon: "/repo3.png", title: "Settings" }
]
const sidebarFooter = [
  { icon: "/sidebarfooter.png", title: "Support" },
  { icon: "/sidebarfooter2.png", title: "Logout" },
]
const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("")
  return (
    <div className="w-[17%] h-screen border-2 flex flex-col gap-4 bg-[#FFFFFF]">

      <div className="flex mt-4 flex-col h-[9%] gap-2 pl-2">
        <div className="flex gap-2 flex-wrap">
          <img src="/logo.png" alt="logo" />
          <span className="text-[24px] font-400">
            CodeAnt AI
          </span>
        </div>
        <div className="mt-auto">
          <select
            className="h-[40px] w-[87.5%] m-auto border-2 px-2 py-1"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {githubRepos?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-grow flex flex-col h-[24%] pl-2">
        <button
          className="w-[87.5%] mt-4 h-[44px] bg-[#1570EF] text-white rounded-lg border-2 px-[14px] py-[10px] flex items-center gap-2"
        >
          <img src="/home.png" alt="img" className="h-[20px] w-[20px]" />
          Repositories
        </button>
        {sidebarRepositories &&
          sidebarRepositories.map((item, index) => (
            <div
              key={index}
              className="w-[87.5%] mt-2 h-[8%] flex items-center gap-2 rounded-lg px-[14px] py-[10px] hover:bg-gray-200 cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-[20px] w-[20px]"
              />
              <span className="text-[#414651] font-600 text-[16px]">{item.title}</span>
            </div>
          ))}
      </div>
      <div className="self-end h-[12%] w-full flex flex-col px-2">
        {sidebarFooter.map((item, index) => (
          <div
            key={index}
            className="w-[87.5%] flex items-center px-[10px] py-[6px] cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-[15px] w-[15px]"
            />
            <span className="text-[#414651] font-semibold text-[16px]">{item.title}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Sidebar
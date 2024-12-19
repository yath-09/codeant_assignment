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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className={`${!dropdownOpen ? "w-full md:w-[17%] md:h-screen border-2 flex flex-col md:gap-4 bg-[#FFFFFF]" :" inset-0 bg-white bg-opacity-50 z-50"}`}>
      <div className="flex mt-4 md:flex-col gap-2 pl-2 mb-4 md:mb-0">
        <div className="flex gap-2 flex-wrap">
          <img src="/logo.png" alt="logo" />
          <span className="text-[24px] font-400">
            CodeAnt AI
          </span>
        </div>
        <div className="block md:hidden ml-auto mr-4 h-full mt-2">
          {dropdownOpen ? (
            <img
              src="/menuclose.png"
              alt="menuclose"
              onClick={() => setDropdownOpen(false)} // Toggle to close the menu
            />
          ) : (
            <img
              src="/menuopen.png"
              alt="menuopen"
              onClick={() => setDropdownOpen(true)} // Toggle to open the menu
            />
          )}
        </div>
      </div>
      {dropdownOpen && (
        <Card />
      )}
    </div>
  )
}

export const Card = () => {
  const [selectedOption, setSelectedOption] = useState("")
  return (
    <>
      <div className="flex-grow flex flex-col md:h-[29%] pl-2 mt-4 md:mt-0">
        <div className="">
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
        <button
          className="w-[87.5%] mt-4 h-[44px] md:bg-[#1570EF] md:text-white text-[#414651] font-600 text-[16px] rounded-lg md:border-2 px-[14px] py-[10px] flex items-center gap-2"
        >
          <img src="/home.png" alt="img" className="md:block hidden h-[20px] w-[20px]" />
          <img src="/homemobile.png" alt="img" className="block md:hidden h-[20px] w-[20px]" />
          Repositories
        </button>
        {sidebarRepositories &&
          sidebarRepositories.map((item, index) => (
            <div
              key={index}
              className="w-[87.5%] md:mt-2 md:h-[8%] flex items-center gap-2 rounded-lg px-[14px] py-[10px] hover:bg-gray-200 cursor-pointer"
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
      <div className="self-end md:h-[12%] w-full flex flex-col px-4">
        {sidebarFooter.map((item, index) => (
          <div
            key={index}
            className="w-[87.5%] flex items-center px-[10px] py-[6px] cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-[20px] w-[20px]"
            />
            <span className="text-[#414651] font-600 text-[16px]">{item.title}</span>
          </div>
        ))}
      </div></>
  )
}

export default Sidebar
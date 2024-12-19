const DashPage = () => {
    const repositories = [
        { name: "design-system", type: "Public", lang: "React", size: "7320 KB", updated: "1 day ago", team: "Team BugByt3", color: "green" },
        { name: "codeant-ci-app", type: "Private", lang: "Javascript", size: "5871 KB", updated: "2 days ago" },
        { name: "analytics-dashboard", type: "Private", lang: "Python", size: "4521 KB", updated: "5 days ago", collaborators: ["V", "S"] },
        { name: "mobile-app", type: "Public", lang: "Swift", size: "3096 KB", updated: "3 days ago" },
        { name: "e-commerce-platform", type: "Private", lang: "Java", size: "6210 KB", updated: "6 days ago", collaborator: "S" },
        { name: "blog-website", type: "Public", lang: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
        { name: "social-network", type: "Private", lang: "PHP", size: "5432 KB", updated: "7 days ago", anonymous: true },
    ]
    return (
        <div className="w-full md:h-screen p-2 md:bg-[#FAFAFA]">
            <div className="h-full md:border-[1px] flex flex-col rounded-lg bg-[#FFFFFF]">
                <div className="md:h-[21%] w-full p-2 flex flex-col">
                    <div className="flex flex-col md:flex-row px-4 gap-2">
                        <div className="flex flex-col w-[75%]">
                            <div className="text-[20px] font-semibold">Repositories</div>
                            <div className="text-gray-500 text-[14px]">33 total repositories</div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex items-center justify-center gap-1 text-[#1570EF] border rounded-lg px-2 py-1 h-[90%] ">
                                <img src="/refresh.png" alt="refresh" className="w-[16px] h-[16px] " />
                                Refresh All
                            </button>
                            <button className="bg-[#1570EF] text-white rounded-lg px-2 py-1 flex items-center gap-1 h-[90%]">
                                <img src="/plus.png" alt="add" className="w-[16px] h-[16px]" />
                                Add Repository
                            </button>
                        </div>
                    </div>
                    <div className="relative m-4">
                        <input
                            type="text"
                            placeholder="Search Repositories"
                            className="w-full md:w-[30%] border border-gray-300 rounded-lg pl-10 pr-4 py-1"
                        />
                        <img src="/search.png" alt="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                    </div>
                </div>


                <div className="w-full md:h-[79%] overflow-y-auto ">
                    {repositories.map((repo, index) => (
                        <div key={index} className="border-t-[1px] py-2 flex h-[14%] flex-col p-4 hover:bg-[#F5F5F5]">
                            <div className="flex items-center gap-4">
                                <div className="text-lg font-medium">
                                    {repo.name}
                                </div>
                                <span
                                    className={`px-2 py-1 text-[12px] rounded-full bg-[#EFF8FF] text-[#175CD3]`}>
                                    {repo.type}
                                </span>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <span className="flex flex-row gap-2 items-center">
                                    {repo.lang}
                                    <img alt="ellipse" src="/ellipse.png" className="w-[8px] h-[8px] items-center" /></span>
                                <span className="">{repo.size}</span>
                                <span className="">{repo.updated}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashPage;

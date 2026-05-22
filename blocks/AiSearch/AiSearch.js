function aisearch() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="relative mb-4">
                       <input type="text" placeholder="Search components, screens..." className="w-full h-10 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-lg pl-9 pr-3 text-sm focus:outline-none focus:border-blue-500" />
                       <div className="absolute left-3 top-2.5 text-gray-400">
                          <IoSearchOutline className="w-5 h-5" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Searches</h4>
                       <div className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
                          <IoTimeOutline className="text-gray-400" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">pricing card</span>
                       </div>
                       <div className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
                          <IoTimeOutline className="text-gray-400" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">login screen layout</span>
                       </div>
                    </div>
                 </div>;
}
export {
  aisearch as default
};

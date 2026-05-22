function aiswitch() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <h3 className="font-bold text-xs text-gray-900 dark:text-white mb-4">Settings</h3>
                    <div className="space-y-3">
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">Push Notifications</span>
                          <div className="w-8 h-4 bg-blue-500 rounded-full relative">
                             <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm" />
                          </div>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                          <div className="w-8 h-4 bg-gray-200 dark:bg-gray-700 rounded-full relative">
                             <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm" />
                          </div>
                       </div>
                    </div>
                 </div>;
}
export {
  aiswitch as default
};

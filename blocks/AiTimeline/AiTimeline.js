function aitimeline() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                    <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-4 pb-2">
                       <div className="relative pl-4">
                          <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-[#1A1A1A]" />
                          <p className="text-xs font-semibold text-gray-900 dark:text-white">New order received</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">10 mins ago</p>
                       </div>
                       <div className="relative pl-4">
                          <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-[#1A1A1A]" />
                          <p className="text-xs font-semibold text-gray-900 dark:text-white">Server backup completed</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">2 hours ago</p>
                       </div>
                       <div className="relative pl-4">
                          <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-[#1A1A1A]" />
                          <p className="text-xs font-semibold text-gray-900 dark:text-white">New user signup</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Yesterday</p>
                       </div>
                    </div>
                 </div>;
}
export {
  aitimeline as default
};

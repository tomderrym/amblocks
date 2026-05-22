function aitable() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                       <span className="font-semibold text-sm text-gray-900 dark:text-white">Recent Users</span>
                       <button className="text-[10px] text-blue-500 hover:text-blue-600 font-medium">View All</button>
                    </div>
                    <div className="flex flex-col">
                       {[1, 2, 3].map((i) => <div key={i} className="px-4 py-2 border-b border-gray-100 dark:border-gray-800/50 flex items-center justify-between last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="flex items-center gap-2">
                               <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700" />
                               <div className="flex flex-col">
                                 <span className="text-[11px] font-medium text-gray-900 dark:text-gray-100">User {i}</span>
                                 <span className="text-[9px] text-gray-500">user{i}@example.com</span>
                               </div>
                            </div>
                            <div className="w-10 h-4 bg-green-100 dark:bg-green-900/30 text-green-600 rounded flex items-center justify-center text-[8px] font-bold">Active</div>
                         </div>)}
                    </div>
                 </div>;
}
export {
  aitable as default
};

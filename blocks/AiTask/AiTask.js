function aitask() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex justify-between items-center mb-4">
                       <h3 className="font-bold text-sm text-gray-900 dark:text-white">Your Tasks</h3>
                       <button className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">+</button>
                    </div>
                    <div className="space-y-2">
                       <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <input type="checkbox" className="mt-1 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
                          <div className="flex-1">
                             <h4 className="text-xs font-semibold text-gray-900 dark:text-white">Review Q3 Marketing Deck</h4>
                             <p className="text-[10px] text-gray-500 mt-0.5">Due Tomorrow • Marketing</p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-1" />
                       </div>
                       <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors opacity-60">
                          <input type="checkbox" checked readOnly className="mt-1 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-not-allowed" />
                          <div className="flex-1">
                             <h4 className="text-xs font-semibold text-gray-400 line-through">Weekly Sync Notes</h4>
                             <p className="text-[10px] text-gray-400 mt-0.5">Completed • Team</p>
                          </div>
                       </div>
                    </div>
                 </div>;
}
export {
  aitask as default
};

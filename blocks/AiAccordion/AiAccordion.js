function aiaccordion() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="space-y-2">
                       <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-2">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-bold text-gray-900 dark:text-white">Section 1</span>
                             <span className="text-[8px] text-gray-400">▼</span>
                          </div>
                          <div className="mt-2 text-[8px] text-gray-500">Content for section 1.</div>
                       </div>
                       <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-2">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-bold text-gray-900 dark:text-white">Section 2</span>
                             <span className="text-[8px] text-gray-400">▶</span>
                          </div>
                       </div>
                    </div>
                 </div>;
}
export {
  aiaccordion as default
};

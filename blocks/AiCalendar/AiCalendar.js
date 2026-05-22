function aicalendar() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-bold text-sm text-gray-900 dark:text-white">September 2026</div>
                      <div className="flex gap-1">
                         <button className="w-6 h-6 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400 transition-colors">{"<"}</button>
                         <button className="w-6 h-6 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400 transition-colors">{">"}</button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center">
                       {["S", "M", "T", "W", "T", "F", "S"].map((d) => <div key={d} className="text-[10px] font-bold text-gray-400 mb-2">{d}</div>)}
                       {Array.from({ length: 30 }).map((_, i) => <button key={i} className={`h-6 flex items-center justify-center rounded text-xs transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${i === 14 ? "bg-blue-500 hover:bg-blue-600 text-white font-bold" : "text-gray-700 dark:text-gray-300"}`}>
                           {i + 1}
                         </button>)}
                    </div>
                 </div>;
}
export {
  aicalendar as default
};

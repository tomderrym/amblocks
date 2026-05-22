function aiprogress() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm flex items-center gap-4" style={{ pointerEvents }}>
                    <div className="w-16 h-16 rounded-full border-4 border-gray-100 dark:border-gray-800 relative flex items-center justify-center text-xl shrink-0">
                       <div className="absolute inset-0 border-4 border-orange-500 rounded-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }} />
                       🔥
                    </div>
                    <div>
                       <h3 className="font-bold text-sm text-gray-900 dark:text-white">14 Day Streak!</h3>
                       <p className="text-[10px] text-gray-500 mt-1">You're doing great. Complete today's lesson.</p>
                       <div className="flex gap-1 mt-2">
                          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => <div key={i} className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold ${i < 4 ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-400 dark:bg-gray-800"}`}>{day}</div>)}
                       </div>
                    </div>
                 </div>;
}
export {
  aiprogress as default
};

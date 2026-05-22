function aiorder() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex justify-between items-center mb-4">
                       <div>
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">Order #8892</h3>
                          <p className="text-[10px] text-gray-500">Arriving today</p>
                       </div>
                       <span className="px-2 py-1 bg-green-50 text-green-600 dark:bg-green-900/20 text-[10px] font-bold rounded-md">In Transit</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div>
                       <div className="flex-1 h-1 bg-green-500 rounded-full" />
                       <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">📍</div>
                       <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-800 rounded-full" />
                       <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 text-[10px]">🏠</div>
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-500 font-medium px-1">
                       <span>Confirmed</span>
                       <span>Shipped</span>
                       <span>Delivered</span>
                    </div>
                 </div>;
}
export {
  aiorder as default
};

function aigallery() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex justify-between items-center mb-4">
                       <h3 className="font-bold text-sm text-gray-900 dark:text-white">Recent Uploads</h3>
                       <span className="text-xs text-blue-500">View All</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                       <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl">⛰️</div>
                       <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl">🏖️</div>
                       <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl">🏙️</div>
                       <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-2xl">🌲</div>
                    </div>
                 </div>;
}
export {
  aigallery as default
};

function aiprofile() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 shadow-sm flex flex-col items-center text-center" style={{ pointerEvents }}>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 mb-4">
                       <div className="w-full h-full bg-white dark:bg-[#1A1A1A] rounded-full flex items-center justify-center border-2 border-white dark:border-[#1A1A1A]">
                         <span className="text-2xl">👩‍💻</span>
                       </div>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Jane Doe</h3>
                    <p className="text-xs text-gray-500 mb-4">Senior Software Engineer</p>
                    <div className="flex gap-2 w-full">
                       <button className="flex-1 h-8 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold hover:opacity-90">Follow</button>
                       <button className="flex-1 h-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700">Message</button>
                    </div>
                 </div>;
}
export {
  aiprofile as default
};

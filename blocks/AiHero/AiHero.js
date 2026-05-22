function aihero() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 flex flex-col items-center justify-center text-center shadow-sm" style={{ pointerEvents }}>
                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-2xl flex items-center justify-center mb-4">
                      <IoSparklesOutline className="w-6 h-6" />
                   </div>
                   <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2 leading-tight">Build faster than<br />ever before.</h2>
                   <p className="text-xs text-gray-500 mb-4 max-w-[200px]">The only platform you need to build, ship, and scale your applications.</p>
                   <button className="w-32 h-10 bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity rounded-full flex items-center justify-center text-sm font-bold">
                     Get Started
                   </button>
                </div>;
}
export {
  aihero as default
};

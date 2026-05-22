function aiblog() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="h-32 bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                       <div className="text-6xl opacity-50">📰</div>
                    </div>
                    <div className="p-4">
                       <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Engineering</span>
                          <span className="text-[10px] text-gray-400">May 15, 2026</span>
                       </div>
                       <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2">The Future of Frontend Development</h3>
                       <p className="text-[10px] text-gray-500 line-clamp-2 mb-4">Exploring the shift towards AI-assisted generation and dynamic registries in modern applications.</p>
                       <span className="text-xs font-semibold text-blue-500 hover:text-blue-600 cursor-pointer">Read more →</span>
                    </div>
                 </div>;
}
export {
  aiblog as default
};

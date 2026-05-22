function aicomment() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm space-y-4" style={{ pointerEvents }}>
                    <h3 className="font-bold text-xs text-gray-900 dark:text-white">Discussions (2)</h3>
                    <div className="flex gap-3">
                       <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">JD</div>
                       <div>
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-[10px] font-bold text-gray-900 dark:text-white">John Doe</span>
                             <span className="text-[8px] text-gray-400">2h ago</span>
                          </div>
                          <p className="text-[10px] text-gray-600 dark:text-gray-400">This looks amazing! Really love the attention to detail with the subtle animations.</p>
                       </div>
                    </div>
                    <div className="flex gap-3 ml-8">
                       <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold shrink-0">AS</div>
                       <div>
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-[10px] font-bold text-gray-900 dark:text-white">Alice Smith</span>
                             <span className="text-[8px] text-gray-400">1h ago</span>
                          </div>
                          <p className="text-[10px] text-gray-600 dark:text-gray-400">Agreed. Can we get the Figma files for this?</p>
                       </div>
                    </div>
                    <div className="flex gap-2 mt-2 pt-3 border-t border-gray-100 dark:border-[#2A2A2A]">
                       <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-[#2A2A2A] shrink-0" />
                       <input type="text" placeholder="Add a comment..." className="flex-1 h-6 bg-transparent text-[10px] border-none focus:outline-none dark:text-white" />
                    </div>
                 </div>;
}
export {
  aicomment as default
};

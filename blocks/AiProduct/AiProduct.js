function aiproduct() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden mb-2 shadow-sm flex flex-col md:flex-row" style={{ pointerEvents }}>
                    <div className="w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 aspect-square md:aspect-auto flex items-center justify-center text-4xl p-4">
                       🎧
                    </div>
                    <div className="p-4 flex-1">
                       <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">Studio Headphones</h3>
                          <span className="font-bold text-gray-900 dark:text-white">$299</span>
                       </div>
                       <p className="text-[10px] text-gray-500 mb-4">Premium noise-cancelling wireless headphones with 30-hour battery life.</p>
                       <div className="flex gap-2">
                          <button className="flex-1 h-8 bg-black dark:bg-white text-white dark:text-black rounded-lg text-[10px] font-bold">Add to Cart</button>
                          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-800 rounded-lg text-gray-400">♥</button>
                       </div>
                    </div>
                 </div>;
}
export {
  aiproduct as default
};

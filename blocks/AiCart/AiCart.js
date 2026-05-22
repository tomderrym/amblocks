function aicart() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm flex flex-col" style={{ pointerEvents }}>
                    <div className="flex justify-between items-center mb-4">
                       <h3 className="font-bold text-sm text-gray-900 dark:text-white">Your Cart</h3>
                       <span className="text-[10px] font-bold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">2 Items</span>
                    </div>
                    <div className="space-y-4 mb-4">
                       <div className="flex gap-3">
                          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center text-xl shrink-0">🪴</div>
                          <div className="flex-1">
                             <div className="flex justify-between">
                                <h4 className="font-semibold text-xs text-gray-900 dark:text-white">Desk Planter</h4>
                                <span className="font-bold text-xs text-gray-900 dark:text-white">$24.00</span>
                             </div>
                             <p className="text-[10px] text-gray-500 mb-2">Ceramic • White</p>
                             <div className="flex items-center gap-2">
                                <button className="w-5 h-5 rounded border border-gray-200 dark:border-gray-800 flex items-center justify-center text-[10px]">-</button>
                                <span className="text-xs font-medium">1</span>
                                <button className="w-5 h-5 rounded border border-gray-200 dark:border-gray-800 flex items-center justify-center text-[10px]">+</button>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-[#2A2A2A] pt-4 mt-auto">
                       <div className="flex justify-between items-center mb-3">
                          <span className="text-xs text-gray-500">Total</span>
                          <span className="font-bold text-sm text-gray-900 dark:text-white">$24.00</span>
                       </div>
                       <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors">Checkout</button>
                    </div>
                 </div>;
}
export {
  aicart as default
};

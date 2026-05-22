function aifeature() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Powerful Features</h3>
                      <p className="text-xs text-gray-500 max-w-sm mx-auto">Everything you need to manage your business.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">⚡</div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Fast</h4>
                        <p className="text-[10px] text-gray-500">Lightning fast performance for your users.</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">🔒</div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Secure</h4>
                        <p className="text-[10px] text-gray-500">Bank-level security and encryption.</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">⚙️</div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Customizable</h4>
                        <p className="text-[10px] text-gray-500">Adapt to your unique workflows.</p>
                      </div>
                    </div>
                 </div>;
}
export {
  aifeature as default
};

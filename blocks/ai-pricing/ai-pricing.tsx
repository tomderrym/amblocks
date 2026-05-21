import React from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';

export default function aipricing() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">Simple Pricing</h3>
                      <p className="text-xs text-gray-500">Pick a plan that fits your needs.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-3 flex flex-col items-center hover:border-blue-500 cursor-pointer transition-colors">
                        <span className="text-[10px] font-bold uppercase text-gray-500">Basic</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white my-1">$9<span className="text-xs font-normal text-gray-500">/mo</span></span>
                        <button className="w-full h-8 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-xs font-medium mt-auto transition-colors">Choose Basic</button>
                      </div>
                      <div className="border border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-3 flex flex-col items-center relative cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors">
                        <div className="absolute -top-2 bg-blue-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full">PRO</div>
                        <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">Pro</span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white my-1">$29<span className="text-xs font-normal text-gray-500">/mo</span></span>
                        <button className="w-full h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-medium mt-auto transition-colors">Choose Pro</button>
                      </div>
                    </div>
                 </div>
  );
}

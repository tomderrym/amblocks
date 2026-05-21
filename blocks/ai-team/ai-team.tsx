import React from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';

export default function aiteam() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 shadow-sm text-center" style={{ pointerEvents }}>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Meet the Team</h3>
                    <p className="text-xs text-gray-500 mb-6">The people behind the pixels.</p>
                    <div className="flex justify-center -space-x-2 mb-4">
                       {[1, 2, 3, 4].map(i => (
                         <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-[#1A1A1A] flex items-center justify-center text-xs shadow-sm bg-gray-100 dark:bg-gray-800 z-${10-i} relative`}>
                           {['👩', '👨', '🧑', '👱'][i-1]}
                         </div>
                       ))}
                       <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1A1A1A] bg-gray-50 dark:bg-[#2A2A2A] flex items-center justify-center text-[10px] font-bold text-gray-500 relative z-0">
                         +5
                       </div>
                    </div>
                    <button className="px-4 py-1.5 border border-gray-200 dark:border-gray-800 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300">View All Members</button>
                 </div>
  );
}

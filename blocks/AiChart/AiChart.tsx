import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aichart() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex justify-between items-center mb-4">
                       <div>
                          <h3 className="font-bold text-xs text-gray-900 dark:text-white">Revenue</h3>
                          <span className="text-lg font-black text-gray-900 dark:text-white">$12,400</span>
                          <span className="text-[10px] text-green-500 ml-2">↑ 14%</span>
                       </div>
                    </div>
                    <div className="w-full h-24 flex items-end gap-1 px-1">
                       {[30, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90].map((h, i) => (
                         <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                       ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[8px] text-gray-400">
                       <span>Jan</span>
                       <span>Jun</span>
                       <span>Dec</span>
                    </div>
                 </div>
  );
}

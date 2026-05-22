import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aistats() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm grid grid-cols-2 gap-3" style={{ pointerEvents }}>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs flex items-center gap-1"><IoStatsChartOutline /> Total Views</span>
                      <span className="text-2xl font-black text-gray-900 dark:text-white mt-1">45.2K</span>
                      <span className="text-green-500 text-[10px] font-bold mt-1">+12.5% vs last week</span>
                    </div>
                    <div className="flex items-center justify-center">
                       <div className="w-full h-12 flex items-end gap-1">
                         {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                           <div key={i} className="flex-1 bg-blue-500 hover:bg-blue-400 cursor-pointer rounded-t-sm transition-colors" style={{ height: `${h}%` }}></div>
                         ))}
                       </div>
                    </div>
                 </div>
  );
}

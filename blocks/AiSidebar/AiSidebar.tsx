import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aisidebar() {
  return (
    <div className="w-full h-32 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden mb-2 shadow-sm flex" style={{ pointerEvents }}>
                    <div className="w-1/3 bg-white dark:bg-[#1A1A1A] border-r border-gray-200 dark:border-[#2A2A2A] p-3 flex flex-col gap-2 shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                       <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                       <div className="w-full h-2 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                       <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded"></div>
                       <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded"></div>
                    </div>
                    <div className="flex-1 p-3">
                       <div className="w-1/2 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                       <div className="w-full h-16 border-2 border-dashed border-gray-200 dark:border-[#2A2A2A] rounded-lg"></div>
                    </div>
                 </div>
  );
}

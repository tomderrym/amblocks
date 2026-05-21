import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aislider() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex gap-2 mb-3 overflow-hidden">
                       <div className="w-24 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg shrink-0 border border-blue-200 dark:border-blue-800"></div>
                       <div className="w-24 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg shrink-0 border border-purple-200 dark:border-purple-800"></div>
                       <div className="w-24 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg shrink-0 border border-green-200 dark:border-green-800"></div>
                    </div>
                    <div className="flex justify-center gap-1.5">
                       <div className="w-4 h-1.5 rounded-full bg-blue-500"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                 </div>
  );
}

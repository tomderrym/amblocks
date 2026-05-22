import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aialert() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm space-y-2" style={{ pointerEvents }}>
                    <div className="w-full bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 p-3 rounded-lg border border-green-200 dark:border-green-900 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                       <div className="w-4 h-4 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px]">✓</div>
                       <span className="text-xs font-semibold">Changes saved successfully.</span>
                    </div>
                    <div className="w-full bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 p-3 rounded-lg border border-red-200 dark:border-red-900 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                       <div className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[8px]">!</div>
                       <span className="text-xs font-semibold">Failed to load data.</span>
                    </div>
                 </div>
  );
}

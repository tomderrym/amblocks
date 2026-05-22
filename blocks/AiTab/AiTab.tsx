import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aitab() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="bg-gray-100 dark:bg-[#2A2A2A] rounded-lg p-1 flex gap-1 mb-4">
                       <button className="flex-1 py-1.5 bg-white dark:bg-[#1A1A1A] rounded-md shadow-sm text-[10px] font-bold text-gray-900 dark:text-white">Monthly</button>
                       <button className="flex-1 py-1.5 rounded-md text-[10px] font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Yearly</button>
                    </div>
                    <div className="h-16 flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-[#2A2A2A] rounded-lg">
                       <span className="text-[10px] text-gray-500">Tab Content</span>
                    </div>
                 </div>
  );
}

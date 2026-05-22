import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aitooltip() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-6 mb-2 shadow-sm flex items-center justify-center relative" style={{ pointerEvents }}>
                    <div className="absolute top-2 right-1/2 translate-x-1/2 bg-gray-900 text-white text-[8px] font-bold py-1 px-2 rounded">
                       Helpful tip
                       <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-[10px] font-medium mt-4">Hover me</button>
                 </div>
  );
}

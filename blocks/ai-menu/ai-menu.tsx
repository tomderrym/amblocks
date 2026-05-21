import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aimenu() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <button className="w-10 h-10 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center ml-auto mb-2 text-gray-500 transition-colors">
                       <IoCodeWorkingOutline />
                    </button>
                    <div className="w-40 bg-white dark:bg-[#222] border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg ml-auto p-1 divide-y divide-gray-100 dark:divide-gray-800/50">
                       <button className="w-full text-left p-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">Profile</button>
                       <button className="w-full text-left p-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">Settings</button>
                       <button className="w-full text-left p-2 text-xs text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">Logout</button>
                    </div>
                 </div>
  );
}

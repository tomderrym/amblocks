import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aistep() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex items-center justify-between relative mb-6">
                       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-800"></div>
                       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-0.5 bg-blue-500"></div>
                       
                       <div className="relative z-10 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">1</div>
                       <div className="relative z-10 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-white dark:ring-[#1A1A1A]">2</div>
                       <div className="relative z-10 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 flex items-center justify-center text-[10px] font-bold">3</div>
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-2 text-center">Setup Profile</h3>
                    <p className="text-[10px] text-gray-500 text-center mb-6">Add your personal details to continue.</p>
                    <div className="flex gap-3">
                       <button className="flex-1 h-8 border border-gray-200 dark:border-gray-800 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300">Back</button>
                       <button className="flex-1 h-8 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-semibold">Next Step</button>
                    </div>
                 </div>
  );
}

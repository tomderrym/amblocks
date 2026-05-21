import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aiavatar() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-sm ring-2 ring-white dark:ring-[#1A1A1A]">JD</div>
                       <div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                             Jane Doe <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          </h4>
                          <span className="text-[10px] text-gray-500">Admin</span>
                       </div>
                    </div>
                    <div className="flex gap-2">
                       <span className="px-2 py-0.5 bg-blue-50 text-blue-600 dark:bg-blue-900/20 rounded-full text-[8px] font-bold">New</span>
                       <span className="px-2 py-0.5 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full text-[8px] font-bold">Pro Member</span>
                    </div>
                 </div>
  );
}

import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aichat() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-3 mb-2 shadow-sm flex flex-col gap-3" style={{ pointerEvents }}>
                    <div className="flex gap-2 w-3/4">
                       <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0"></div>
                       <div className="bg-white dark:bg-[#222] border border-gray-200 dark:border-gray-800 p-2 rounded-2xl rounded-tl-none text-xs text-gray-700 dark:text-gray-300 shadow-sm">
                         Did you see the latest registry update?
                       </div>
                    </div>
                    <div className="flex gap-2 w-3/4 self-end flex-row-reverse">
                       <div className="bg-blue-500 text-white p-2 rounded-2xl rounded-tr-none text-xs shadow-sm">
                         Yeah, the new matrix components are sick!
                       </div>
                    </div>
                    <div className="mt-2 w-full h-10 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-full flex items-center px-3 cursor-text">
                       <span className="text-[10px] text-gray-400">Type a message...</span>
                    </div>
                 </div>
  );
}

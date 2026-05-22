import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aishortcut() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <h3 className="font-bold text-xs text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-4 gap-2">
                       <div className="flex flex-col items-center justify-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 dark:bg-blue-900/20 flex items-center justify-center shadow-sm">💸</div>
                          <span className="text-[8px] font-medium text-gray-600 dark:text-gray-400">Send</span>
                       </div>
                       <div className="flex flex-col items-center justify-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 dark:bg-green-900/20 flex items-center justify-center shadow-sm">⬇️</div>
                          <span className="text-[8px] font-medium text-gray-600 dark:text-gray-400">Receive</span>
                       </div>
                       <div className="flex flex-col items-center justify-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 dark:bg-purple-900/20 flex items-center justify-center shadow-sm">📷</div>
                          <span className="text-[8px] font-medium text-gray-600 dark:text-gray-400">Scan</span>
                       </div>
                       <div className="flex flex-col items-center justify-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-500 dark:bg-gray-800 flex items-center justify-center shadow-sm">➕</div>
                          <span className="text-[8px] font-medium text-gray-600 dark:text-gray-400">More</span>
                       </div>
                    </div>
                 </div>
  );
}

import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aicompare() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="grid grid-cols-3 bg-gray-50 dark:bg-[#121212] border-b border-gray-200 dark:border-[#2A2A2A] p-3 text-[10px] font-bold text-center">
                       <div className="text-left font-medium text-gray-500">Features</div>
                       <div className="text-gray-900 dark:text-white">Basic</div>
                       <div className="text-blue-500">Pro</div>
                    </div>
                    <div className="p-3 space-y-3">
                       <div className="grid grid-cols-3 text-center items-center">
                          <div className="text-left text-[10px] text-gray-700 dark:text-gray-300">Users</div>
                          <div className="text-[10px] font-medium">1</div>
                          <div className="text-[10px] font-medium text-blue-500">Unlimited</div>
                       </div>
                       <div className="grid grid-cols-3 text-center items-center">
                          <div className="text-left text-[10px] text-gray-700 dark:text-gray-300">Storage</div>
                          <div className="text-[10px] font-medium">5GB</div>
                          <div className="text-[10px] font-medium text-blue-500">1TB</div>
                       </div>
                       <div className="grid grid-cols-3 text-center items-center">
                          <div className="text-left text-[10px] text-gray-700 dark:text-gray-300">Support</div>
                          <div className="text-[10px] font-medium text-gray-400">-</div>
                          <div className="text-[10px] font-medium text-blue-500">24/7</div>
                       </div>
                    </div>
                 </div>
  );
}

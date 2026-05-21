import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aiform() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm space-y-4" style={{ pointerEvents }}>
                    <div>
                      <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Company Name</label>
                      <input type="text" placeholder="Acme Inc." className="w-full h-8 border border-gray-200 dark:border-gray-800 rounded-md bg-transparent px-2 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Website URL</label>
                      <input type="url" placeholder="https://..." className="w-full h-8 border border-gray-200 dark:border-gray-800 rounded-md bg-transparent px-2 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                       <span className="text-xs font-semibold text-gray-900 dark:text-white">Enable Notifications</span>
                       <div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer">
                         <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                       </div>
                    </div>
                    <button className="w-full h-8 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg text-xs font-semibold mt-2 hover:opacity-90 transition-opacity">Save Settings</button>
                 </div>
  );
}

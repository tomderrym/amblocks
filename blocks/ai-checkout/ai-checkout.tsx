import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aicheckout() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4">Payment Method</h3>
                    <div className="space-y-3">
                       <div className="border border-blue-500 bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3 flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-[4px] border-blue-500 bg-white"></div>
                          <div className="flex-1">
                             <div className="text-xs font-bold text-gray-900 dark:text-white">Credit Card</div>
                             <div className="text-[10px] text-gray-500 mt-0.5">•••• •••• •••• 4242</div>
                          </div>
                       </div>
                       <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 flex items-center gap-3 opacity-60">
                          <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">PayPal</div>
                       </div>
                       <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                          <button className="w-full h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold hover:opacity-90">Pay $49.00</button>
                       </div>
                    </div>
                 </div>
  );
}

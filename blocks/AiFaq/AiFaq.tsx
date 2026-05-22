import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aifaq() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-6 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-2">
                       <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                         <div className="flex justify-between items-center">
                           <h4 className="text-xs font-bold text-gray-900 dark:text-white">How does billing work?</h4>
                           <span className="text-gray-400">▼</span>
                         </div>
                       </div>
                       <div className="border border-gray-100 dark:border-gray-800 rounded-lg p-3">
                         <div className="flex justify-between items-center mb-2">
                           <h4 className="text-xs font-bold text-gray-900 dark:text-white">Can I cancel anytime?</h4>
                           <span className="text-gray-400">▲</span>
                         </div>
                         <p className="text-[10px] text-gray-500">Yes, you can cancel your subscription at any time from your account settings without any cancellation fees.</p>
                       </div>
                    </div>
                 </div>
  );
}

import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aitestimonial() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl p-6 mb-2 shadow-sm text-center" style={{ pointerEvents }}>
                    <div className="flex justify-center mb-4 text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-6">"This platform completely transformed the way our team works. The efficiency gains are truly unbelievable!"</p>
                    <div className="flex items-center justify-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                       <div className="text-left">
                         <h4 className="text-xs font-bold text-gray-900 dark:text-white">Sarah Jenkins</h4>
                         <p className="text-[10px] text-gray-500">VP of Operations, Acme Corp</p>
                       </div>
                    </div>
                 </div>
  );
}

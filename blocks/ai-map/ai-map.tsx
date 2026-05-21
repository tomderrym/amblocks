import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aimap() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden mb-2 shadow-sm relative" style={{ pointerEvents }}>
                    <div className="w-full h-40 bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                       <div className="w-8 h-8 relative shadow-lg">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white absolute top-0 -translate-y-1/2 rounded-bl-none rotate-45 transform origin-center">
                             <div className="-rotate-45 block w-2 h-2 rounded-full bg-white"></div>
                          </div>
                       </div>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#1A1A1A] flex justify-between items-center relative z-10 border-t border-gray-100 dark:border-[#2A2A2A]">
                       <div>
                          <h4 className="font-bold text-xs text-gray-900 dark:text-white">Headquarters</h4>
                          <p className="text-[10px] text-gray-500">123 Street Code, Dev City</p>
                       </div>
                       <button className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg text-[10px] font-bold">Directions</button>
                    </div>
                 </div>
  );
}

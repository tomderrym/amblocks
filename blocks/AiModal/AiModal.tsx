import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aimodal() {
  return (
    <div className="w-full bg-gray-900/40 relative h-48 rounded-xl overflow-hidden mb-2 shadow-sm flex items-center justify-center p-4" style={{ pointerEvents }}>
                    <div className="w-full max-w-[200px] bg-white dark:bg-[#1A1A1A] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-4">
                       <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Are you sure?</h3>
                       <p className="text-[10px] text-gray-500 mb-4 line-clamp-2">This action cannot be undone. All data will be lost.</p>
                       <div className="flex gap-2">
                         <button className="flex-1 h-7 border border-gray-200 dark:border-gray-800 rounded bg-gray-50 dark:bg-[#121212] hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 transition-colors">Cancel</button>
                         <button className="flex-1 h-7 rounded bg-red-500 hover:bg-red-600 text-white flex items-center justify-center text-[10px] font-semibold transition-colors">Delete</button>
                       </div>
                    </div>
                 </div>
  );
}

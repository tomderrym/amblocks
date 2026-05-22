import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aifile() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="w-full border-2 border-dashed border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/20">
                       <div className="w-12 h-12 rounded-full bg-white dark:bg-[#2A2A2A] flex items-center justify-center text-blue-500 shadow-sm mb-3">
                          <IoCloudUploadOutline className="w-6 h-6" />
                       </div>
                       <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">Upload File</h3>
                       <p className="text-[10px] text-gray-500 max-w-[150px]">Drag and drop your files here or click to browse.</p>
                       <button className="mt-4 px-4 py-1.5 bg-blue-500 text-white rounded-md text-xs font-medium">Select Files</button>
                    </div>
                 </div>
  );
}

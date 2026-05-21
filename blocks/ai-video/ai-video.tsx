import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aivideo() {
  return (
    <div className="w-full bg-black rounded-xl overflow-hidden mb-2 shadow-sm relative group" style={{ pointerEvents }}>
                    <div className="aspect-video flex items-center justify-center bg-gray-900 border border-gray-800">
                       <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors">
                          <IoPlayOutline className="w-6 h-6 ml-1" />
                       </button>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="flex items-center gap-3">
                          <button className="text-white hover:text-blue-400"><IoPlayOutline /></button>
                          <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                             <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-[10px] text-white font-mono">03:24 / 10:00</span>
                       </div>
                    </div>
                 </div>
  );
}

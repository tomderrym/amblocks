import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aiweather() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-5 mb-2 shadow-sm text-white overflow-hidden relative" style={{ pointerEvents }}>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-2xl"></div>
                    <div className="flex justify-between items-start relative z-10">
                       <div>
                          <h3 className="font-medium text-sm text-blue-50">San Francisco</h3>
                          <div className="text-3xl font-light mt-1">68°</div>
                       </div>
                       <div className="text-3xl">🌤️</div>
                    </div>
                    <div className="flex justify-between mt-6 text-[10px] font-medium text-blue-100 border-t border-white/20 pt-3">
                       <div className="flex flex-col items-center">
                          <span>Mon</span>
                          <span className="text-lg my-1">☀️</span>
                          <span>72°</span>
                       </div>
                       <div className="flex flex-col items-center">
                          <span>Tue</span>
                          <span className="text-lg my-1">☁️</span>
                          <span>65°</span>
                       </div>
                       <div className="flex flex-col items-center">
                          <span>Wed</span>
                          <span className="text-lg my-1">🌧️</span>
                          <span>58°</span>
                       </div>
                       <div className="flex flex-col items-center">
                          <span>Thu</span>
                          <span className="text-lg my-1">🌤️</span>
                          <span>64°</span>
                       </div>
                    </div>
                 </div>
  );
}

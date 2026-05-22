import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function ailogin() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-4 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Welcome back</h3>
                    <p className="text-xs text-gray-500 mb-4">Enter your details to sign in.</p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 mb-1 block">Email</label>
                        <input type="email" placeholder="name@example.com" className="w-full h-9 border border-gray-200 dark:border-gray-800 rounded-lg bg-transparent px-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 mb-1 block">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full h-9 border border-gray-200 dark:border-gray-800 rounded-lg bg-transparent px-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500" />
                      </div>
                      <button className="w-full h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-medium mt-2 transition-colors">Sign In</button>
                    </div>
                 </div>
  );
}

import React from 'react';
import { IoStatsChartOutline, IoPlayOutline, IoPersonOutline, IoCloudUploadOutline, IoFolderOutline, IoTimeOutline, IoDocumentTextOutline, IoImageOutline } from 'react-icons/io5';

export default function aicta() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 mb-2 shadow-lg text-center" style={{ pointerEvents }}>
                    <h2 className="text-xl font-bold text-white mb-3">Ready to dive in?</h2>
                    <p className="text-sm text-blue-100 mb-6 max-w-sm mx-auto">Join thousands of users who are already building faster.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <button className="px-6 py-2 bg-white text-blue-600 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors">Start Free Trial</button>
                      <button className="px-6 py-2 bg-transparent text-white border border-white/30 rounded-full text-xs font-bold hover:bg-white/10 transition-colors">Talk to Sales</button>
                    </div>
                 </div>
  );
}

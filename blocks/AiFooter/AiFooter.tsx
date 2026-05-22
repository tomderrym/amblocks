import React from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';

export default function aifooter() {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#121212] border-t border-gray-200 dark:border-[#2A2A2A] overflow-hidden p-6 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                       <div>
                          <h4 className="font-bold text-xs text-gray-900 dark:text-white mb-3">Product</h4>
                          <ul className="space-y-2 text-[10px] text-gray-500">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Changelog</li>
                          </ul>
                       </div>
                       <div>
                          <h4 className="font-bold text-xs text-gray-900 dark:text-white mb-3">Company</h4>
                          <ul className="space-y-2 text-[10px] text-gray-500">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                          </ul>
                       </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400">
                       <p>© 2026 Acme Corp. All rights reserved.</p>
                       <div className="flex gap-3 mt-2 md:mt-0">
                          <span>Twitter</span>
                          <span>GitHub</span>
                       </div>
                    </div>
                 </div>
  );
}

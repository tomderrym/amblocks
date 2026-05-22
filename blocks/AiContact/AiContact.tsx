import React from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';

export default function aicontact() {
  return (
    <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 shadow-sm" style={{ pointerEvents }}>
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Get in touch</h3>
                      <p className="text-xs text-gray-500">We'd love to hear from you.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">First Name</label>
                          <input type="text" className="w-full h-8 border border-gray-200 dark:border-gray-800 rounded-md bg-transparent px-2 text-xs" />
                        </div>
                        <div>
                          <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Last Name</label>
                          <input type="text" className="w-full h-8 border border-gray-200 dark:border-gray-800 rounded-md bg-transparent px-2 text-xs" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Email</label>
                        <input type="email" className="w-full h-8 border border-gray-200 dark:border-gray-800 rounded-md bg-transparent px-2 text-xs" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Message</label>
                        <textarea className="w-full h-20 border border-gray-200 dark:border-gray-800 rounded-md bg-transparent p-2 text-xs resize-none"></textarea>
                      </div>
                      <button className="w-full h-8 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold hover:opacity-90">Send Message</button>
                    </div>
                 </div>
  );
}

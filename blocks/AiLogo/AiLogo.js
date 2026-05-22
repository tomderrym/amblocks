import { IoCloudUploadOutline } from "react-icons/io5";
function ailogo() {
  return <div className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] rounded-xl overflow-hidden p-6 mb-2 shadow-sm text-center" style={{ pointerEvents }}>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-6">Trusted by innovative teams</p>
                    <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                       <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">ACME</span>
                       <span className="font-bold text-gray-800 dark:text-gray-200 text-sm flex items-center"><IoCloudUploadOutline className="mr-1" /> CLOUD</span>
                       <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">TechCorp</span>
                       <span className="font-bold text-gray-800 dark:text-gray-200 text-sm flex items-center"><IoLayersOutline className="mr-1" /> stack</span>
                    </div>
                 </div>;
}
export {
  ailogo as default
};

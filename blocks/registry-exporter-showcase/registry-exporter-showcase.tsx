import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { 
  IoDownloadOutline, 
  IoCheckmarkCircleOutline, 
  IoCloudDownloadOutline,
  IoCodeWorkingOutline,
  IoDocumentOutline,
  IoFolderOpenOutline
} from 'react-icons/io5';

const filesToExport = [
  'screen-types.json',
  'layout-types.json',
  'section-types.json',
  'component-types.json',
  'shared-registry.json',
  'placement-rules.json',
  'children-policies.json',
  'data-source-types.json',
  'states.json',
  'actions.json',
  'component-categories.json',
  'screen-to-section-map.json',
  'section-to-component-map.json',
  'starter-screen-recipes.json',
  'component-presets.json',
  'registry-manifest.json',
  'validation-report.json'
];

export default function RegistryExporterShowcase() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Ready to export');

  const handleExport = async () => {
    setIsDownloading(true);
    setProgress(0);
    setStatusText('Initializing ZIP builder...');
    
    try {
      const zip = new JSZip();
      
      for (let i = 0; i < filesToExport.length; i++) {
        const file = filesToExport[i];
        setStatusText(`Fetching ${file}...`);
        
        const response = await fetch(`/registry/${file}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file}`);
        }
        
        const content = await response.text();
        zip.file(file, content);
        
        setProgress(Math.round(((i + 1) / filesToExport.length) * 100));
      }
      
      setStatusText('Generating compression payload...');
      const blob = await zip.generateAsync({ type: 'blob' });
      
      setStatusText('Downloading package...');
      saveAs(blob, 'appmonster-registry-package.zip');
      
      setStatusText('Export complete! Check your downloads.');
      setTimeout(() => {
        setIsDownloading(false);
        setStatusText('Ready to export');
        setProgress(0);
      }, 3000);
      
    } catch (error: any) {
      console.error(error);
      setStatusText(`Error: ${error.message}`);
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Registry Exporter</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Export the finalized and validated AppMonster registry files as a single downloadable ZIP package.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                <IoFolderOpenOutline className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Validation Status</h3>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium mt-1">
                  <IoCheckmarkCircleOutline className="w-4 h-4 mr-1" />
                  Passed strict schema validation
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <IoDocumentOutline className="w-4 h-4" />
                <span>{filesToExport.length} JSON Schema Files</span>
              </div>
              <div className="flex items-center space-x-2">
                <IoCodeWorkingOutline className="w-4 h-4" />
                <span>Strict Constraints Enforced</span>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6">
               <h4 className="font-medium text-gray-900 dark:text-white mb-3">Package Contents:</h4>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {filesToExport.map(file => (
                    <div key={file} className="text-xs font-mono bg-gray-50 dark:bg-gray-800/50 px-2 py-1.5 rounded text-gray-600 dark:text-gray-300 truncate">
                      {file}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="w-full md:w-80 flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-gray-800">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500 mb-4 shadow-sm">
              <IoCloudDownloadOutline className="w-10 h-10" />
            </div>
            
            <div className="text-center mb-6 w-full">
              <div className="font-medium text-gray-900 dark:text-white mb-1">AppMonster Payload</div>
              <div className="text-xs text-gray-500 truncate h-4">{statusText}</div>
              
              {isDownloading && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-3 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </div>

            <button
              onClick={handleExport}
              disabled={isDownloading}
              className={`w-full py-3 px-4 rounded-xl flex items-center justify-center space-x-2 font-semibold text-white transition-all
                ${isDownloading 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 active:scale-95'
                }
              `}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Exporting ({progress}%)</span>
                </>
              ) : (
                <>
                  <IoDownloadOutline className="w-5 h-5 text-white stroke-[2]" />
                  <span>Download ZIP</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-5 text-sm text-blue-800 dark:text-blue-300">
         <strong className="font-semibold block mb-1">Next Steps for Implementation:</strong>
         <p>Extract this archive into your builder's core metadata repository. Ensure your logic parser maps <code className="bg-blue-100 dark:bg-blue-900/40 px-1 py-0.5 rounded mx-0.5">allowed_child_levels</code> correctly, allowing components to dynamically infer their structural allowances rather than hardcoding static ID relationships.</p>
      </div>
    </div>
  );
}

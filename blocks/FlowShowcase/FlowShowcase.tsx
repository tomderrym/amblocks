import React, { useState, useEffect } from 'react';
import { IoArrowForwardOutline, IoAnalyticsOutline, IoRefreshOutline, IoWarningOutline } from 'react-icons/io5';

interface FlowEdge {
  from: string;
  to: string;
  label: string;
}

export default function FlowShowcase() {
  const [screens, setScreens] = useState<string[]>([]);
  const [edges, setEdges] = useState<FlowEdge[]>([]);
  const [isDetecting, setIsDetecting] = useState(false);
  const [appName, setAppName] = useState<string>('');

  useEffect(() => {
    loadAppFlow();
  }, []);

  const loadAppFlow = () => {
    try {
      const loaded = localStorage.getItem('ionic_builder_apps');
      if (loaded) {
        const apps = JSON.parse(loaded);
        const name = Object.keys(apps)[0];
        if (name) {
          setAppName(name);
          const appScreens = Object.keys(apps[name]);
          setScreens(appScreens);
        }
      }
    } catch (e) {
      console.error('Failed to load apps from localStorage', e);
    }
  };

  const autoDetectFlow = () => {
    setIsDetecting(true);
    
    setTimeout(() => {
      // Dummy analysis for detecting flow
      const detectedEdges: FlowEdge[] = [];
      if (screens.length > 0) {
        // Just sequence them for simplicity if no actual routing is found in blocks
        for (let i = 0; i < screens.length - 1; i++) {
          detectedEdges.push({
            from: screens[i],
            to: screens[i + 1],
            label: 'navigate',
          });
        }
      }
      setEdges(detectedEdges);
      setIsDetecting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-[calc(100vh-64px)] p-4 md:p-8 flex flex-col">
      <div className="flex items-center justify-between bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm p-6 mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <IoAnalyticsOutline className="text-blue-500" />
            Navigation Flow 
          </h1>
          <p className="text-gray-500 mt-1 dark:text-gray-400">
            {appName ? `App: ${appName}` : 'No app found. Go to Screen Builder to create one.'}
          </p>
        </div>
        
        <button 
          onClick={autoDetectFlow}
          disabled={isDetecting || screens.length === 0}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl font-medium tracking-wide shadow-sm flex items-center gap-2 transition-all active:scale-95"
        >
          {isDetecting ? (
            <IoRefreshOutline className="animate-spin w-5 h-5" />
          ) : (
            <IoAnalyticsOutline className="w-5 h-5" />
          )}
          Auto Detect Flow
        </button>
      </div>

      <div className="flex-1 bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden relative shadow-inner p-8">
        
        {screens.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
            <IoWarningOutline className="w-16 h-16 text-yellow-500 mb-4" />
            <p className="text-lg font-medium">No screens available to display.</p>
            <p className="text-sm mt-2">Create some screens in the Screen Builder first.</p>
          </div>
        ) : (
          <div className="w-full h-full overflow-auto custom-scrollbar relative flex items-center justify-start p-10 min-w-max">
            {screens.map((screen, index) => {
              const hasNext = index < screens.length - 1;
              const edge = edges.find(e => e.from === screen);

              return (
                <div key={screen} className="flex items-center">
                  <div className="w-64 h-auto aspect-[9/16] bg-gray-50 dark:bg-black rounded-[32px] border-4 border-gray-200 dark:border-gray-800 shadow-xl flex flex-col items-center relative overflow-hidden group">
                    <div className="w-full h-8 bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0">
                      <div className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded-full" />
                    </div>
                    <div className="flex-1 w-full bg-white dark:bg-[#1C1C1E] p-4 text-center flex flex-col items-center justify-center">
                      <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{screen}</h3>
                      <p className="text-xs text-gray-400 mt-2">Screen ID: {screen.toLowerCase().replace(/\s/g, '-')}</p>
                    </div>
                  </div>

                  {hasNext && (
                    <div className="w-32 flex flex-col items-center justify-center relative px-2">
                       {edge ? (
                          <>
                           <div className="h-1 w-full bg-blue-500 rounded-full" />
                           <IoArrowForwardOutline className="text-blue-500 w-8 h-8 absolute right-0 bg-white dark:bg-[#1C1C1E] rounded-full p-1" />
                           <span className="absolute -top-6 text-xs font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded shadow-sm">{edge.label}</span>
                          </>
                       ) : (
                          <>
                           <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full border-dashed border-b-2 border-gray-300 dark:border-gray-600 bg-transparent" />
                          </>
                       )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}

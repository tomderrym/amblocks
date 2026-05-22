import { useState } from "react";
import { IoAppsOutline, IoDocumentOutline, IoExtensionPuzzleOutline, IoLayersOutline, IoAddOutline } from "react-icons/io5";
const APP_TEMPLATES = [
  {
    id: "ecommerce",
    label: "Commerce",
    description: "Complete store with cart, profile & categories.",
    screens: {
      "Home": [
        { id: `b-${Date.now()}-1`, type: "header", zone: "top", props: { title: "Store" } },
        { id: `b-${Date.now()}-2`, type: "hero", zone: "main", props: {} },
        { id: `b-${Date.now()}-3`, type: "mobile_card_grid", zone: "main", props: {} },
        { id: `b-${Date.now()}-4`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Home", icon: "home" }, { label: "Cart", icon: "cart" }, { label: "Profile", icon: "user" }] } }
      ],
      "Cart": [
        { id: `b-${Date.now()}-5`, type: "header", zone: "top", props: { title: "Cart" } },
        { id: `b-${Date.now()}-6`, type: "list", zone: "main", props: {} },
        { id: `b-${Date.now()}-t1`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Home", icon: "home" }, { label: "Cart", icon: "cart" }, { label: "Profile", icon: "user" }] } }
      ],
      "Profile": [
        { id: `b-${Date.now()}-7`, type: "header", zone: "top", props: { title: "Profile" } },
        { id: `b-${Date.now()}-8`, type: "mobile_dashboard", zone: "main", props: {} },
        { id: `b-${Date.now()}-t2`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Home", icon: "home" }, { label: "Cart", icon: "cart" }, { label: "Profile", icon: "user" }] } }
      ]
    }
  },
  {
    id: "social",
    label: "Social",
    description: "Feed, Discover, and User Profile screens.",
    screens: {
      "Feed": [
        { id: `c-${Date.now()}-1`, type: "header", zone: "top", props: { title: "Feed" } },
        { id: `c-${Date.now()}-2`, type: "list", zone: "main", props: {} },
        { id: `c-${Date.now()}-3`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Feed", icon: "home" }, { label: "Discover", icon: "search" }, { label: "Profile", icon: "user" }] } }
      ],
      "Discover": [
        { id: `c-${Date.now()}-4`, type: "header", zone: "top", props: { title: "Discover" } },
        { id: `c-${Date.now()}-5`, type: "mobile_card_grid", zone: "main", props: {} },
        { id: `c-${Date.now()}-t3`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Feed", icon: "home" }, { label: "Discover", icon: "search" }, { label: "Profile", icon: "user" }] } }
      ]
    }
  },
  {
    id: "breathing",
    label: "Breathing App",
    description: "A mindfulness breathing application template with guided exercises.",
    screens: {
      "Breathe": [
        { id: `d-${Date.now()}-1`, type: "header", zone: "top", props: { title: "Mock Breathing App" } },
        { id: `d-${Date.now()}-2`, type: "breathing_app", zone: "main", props: {} },
        { id: `d-${Date.now()}-3`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Breathe", icon: "heart" }, { label: "Stats", icon: "stats-chart" }, { label: "Settings", icon: "settings" }] } }
      ]
    }
  },
  {
    id: "elevenlabs",
    label: "ElevenLabs AI",
    description: "Dark cinematic UI, audio-waveform aesthetics, inspired by ElevenLabs.",
    screens: {
      "Landing": [
        { id: `e-${Date.now()}-1`, type: "elevenlabs_landing", zone: "main", props: {} }
      ]
    }
  }
];
const SCREEN_TEMPLATES = [
  { id: "blank", label: "Blank Screen", description: "Start from scratch", blocks: [] },
  { id: "app_shell", label: "App Shell", description: "Top Navbar + Bottom Tabbar", blocks: [
    { id: `b-${Date.now()}-1`, type: "header", zone: "top", props: { title: "New Screen" } },
    { id: `b-${Date.now()}-2`, type: "tabbar", zone: "bottom", props: { tabs: [{ label: "Home", icon: "home" }] } }
  ] },
  { id: "list_view", label: "List View", description: "Header + Search + List", blocks: [
    { id: `b-${Date.now()}-3`, type: "header", zone: "top", props: { title: "Directory" } },
    { id: `b-${Date.now()}-4`, type: "search", zone: "main", props: { placeholder: "Search..." } },
    { id: `b-${Date.now()}-5`, type: "list", zone: "main", props: { items: ["Item 1", "Item 2", "Item 3"] } }
  ] }
];
function ScreensShowcase() {
  const [marketplaceCategory, setMarketplaceCategory] = useState("All");
  const createAppFromTemplate = (template) => {
    try {
      const loaded = localStorage.getItem("ionic_builder_apps");
      const apps = loaded ? JSON.parse(loaded) : {};
      let newAppName = template.label;
      let counter = 1;
      while (apps[newAppName]) {
        newAppName = `${template.label} ${counter}`;
        counter++;
      }
      const clonedScreens = JSON.parse(JSON.stringify(template.screens));
      Object.values(clonedScreens).forEach((screenBlocks) => {
        screenBlocks.forEach((block) => {
          block.id = `${block.id}-${Date.now()}-${Math.random()}`;
        });
      });
      apps[newAppName] = clonedScreens;
      localStorage.setItem("ionic_builder_apps", JSON.stringify(apps));
      window.location.href = "/page/Builder";
    } catch (e) {
    }
  };
  const createFromTemplate = (template) => {
    try {
      const loaded = localStorage.getItem("ionic_builder_apps");
      const apps = loaded ? JSON.parse(loaded) : {};
      const appName = Object.keys(apps)[0] || "My App";
      const currentApp = apps[appName] || {};
      const newName = `Screen ${Object.keys(currentApp).length + 1}`;
      const clonedBlocks = JSON.parse(JSON.stringify(template.blocks));
      clonedBlocks.forEach((b) => b.id = `${b.id}-${Date.now()}-${Math.random()}`);
      currentApp[newName] = clonedBlocks;
      apps[appName] = currentApp;
      localStorage.setItem("ionic_builder_apps", JSON.stringify(apps));
      window.location.href = "/page/Builder";
    } catch (e) {
    }
  };
  return <div className="w-full max-w-7xl mx-auto h-[calc(100vh-64px)] p-4 md:p-8">
       <div className="w-full h-full bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300 relative">
          <div className="bg-white dark:bg-black p-6 md:p-10 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full" />
              <div className="flex items-center gap-4 relative z-10">
                 <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <IoAppsOutline className="w-8 h-8" />
                 </div>
                 <div>
                   <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marketplace</h1>
                   <p className="text-gray-500 mt-1 text-base">Discover and use pre-built templates for your project.</p>
                 </div>
              </div>
          </div>

          <div className="flex bg-gray-50/50 dark:bg-[#151515] w-full overflow-x-auto border-b border-gray-200 dark:border-gray-800 shrink-0 custom-scrollbar px-6 md:px-10 space-x-2">
              {["All", "Apps", "Flows", "Screens", "Components"].map((cat) => <button
    key={cat}
    onClick={() => setMarketplaceCategory(cat)}
    className={`px-6 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${marketplaceCategory === cat ? "border-indigo-500 text-indigo-600 dark:text-indigo-400" : "border-transparent text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`}
  >
                  {cat}
                  </button>)}
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <div className="max-w-6xl mx-auto space-y-12 pb-20">
                {(marketplaceCategory === "All" || marketplaceCategory === "Apps") && <div>
                      <div className="flex items-center gap-3 mb-6">
                         <IoLayersOutline className="w-6 h-6 text-indigo-500" />
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">App Templates</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {APP_TEMPLATES.map((t) => <button onClick={() => createAppFromTemplate(t)} key={t.id} className="group flex flex-col text-left bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-indigo-400 hover:shadow-xl transition-all hover:-translate-y-1">
                                  <div className="w-full aspect-[16/10] bg-indigo-50/50 dark:bg-indigo-900/10 flex flex-col items-center justify-center p-6 border-b border-gray-100 dark:border-gray-800 relative shadow-inner">
                                      <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors" />
                                      <IoLayersOutline className="w-12 h-12 text-indigo-400 dark:text-indigo-600 mb-4 drop-shadow-sm" />
                                      <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-100 dark:bg-indigo-900/50 px-4 py-1.5 rounded-full ring-1 ring-indigo-200 dark:ring-indigo-800">
                                          {Object.keys(t.screens).length} Screens
                                      </div>
                                  </div>
                                  <div className="p-6">
                                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{t.label}</h3>
                                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{t.description}</p>
                                  </div>
                              </button>)}
                      </div>
                  </div>}

                {(marketplaceCategory === "All" || marketplaceCategory === "Screens") && <div>
                      <div className="flex items-center gap-3 mb-6">
                         <IoDocumentOutline className="w-6 h-6 text-purple-500" />
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Screen Templates</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                          {SCREEN_TEMPLATES.map((template) => <button
    key={template.id}
    onClick={() => createFromTemplate(template)}
    className="flex flex-col text-left group hover:scale-[1.02] transition-transform"
  >
                                  <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 aspect-[9/16] rounded-[32px] w-full flex flex-col items-center justify-center p-6 mb-4 group-hover:border-purple-500 transition-all shadow-sm group-hover:shadow-lg relative overflow-hidden">
                                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors pointer-events-none" />
                                  {template.id === "blank" && <div className="w-20 h-20 border-[3px] border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex items-center justify-center">
                                      <IoAddOutline className="w-10 h-10 text-gray-400 dark:text-gray-600" />
                                      </div>}
                                  {template.id === "app_shell" && <div className="w-full h-full flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C1C1E] overflow-hidden rounded-xl shadow-sm">
                                      <div className="h-6 bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700" />
                                      <div className="flex-1" />
                                      <div className="h-10 bg-gray-100 dark:bg-[#2C2C2E] border-t border-gray-200 dark:border-gray-700 flex justify-around items-center">
                                          <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                          <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                          <div className="w-3 h-3 bg-gray-400 rounded-full" />
                                      </div>
                                      </div>}
                                  {template.id === "list_view" && <div className="w-full h-full flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C1C1E] overflow-hidden rounded-xl shadow-sm p-2">
                                      <div className="h-5 bg-gray-100 dark:bg-gray-800 mb-2 rounded-sm" />
                                      <div className="h-4 bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 rounded-sm mb-4" />
                                      <div className="flex-1 space-y-3">
                                          <div className="h-5 bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 rounded-sm flex items-center px-1.5"><div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" /></div>
                                          <div className="h-5 bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 rounded-sm flex items-center px-1.5"><div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" /></div>
                                          <div className="h-5 bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 rounded-sm flex items-center px-1.5"><div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" /></div>
                                      </div>
                                      </div>}
                                  </div>
                                  <div className="font-bold text-lg text-gray-900 dark:text-white px-2 tracking-tight">{template.label}</div>
                                  <div className="text-sm text-gray-500 mt-1 px-2">{template.description}</div>
                              </button>)}
                      </div>
                  </div>}

                {(marketplaceCategory === "Flows" || marketplaceCategory === "Components") && <div className="flex flex-col items-center justify-center py-32 opacity-60">
                       <IoExtensionPuzzleOutline className="w-20 h-20 text-gray-400 mb-6 drop-shadow-md" />
                       <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-3">{marketplaceCategory} are coming soon</h3>
                       <p className="text-gray-500 text-lg">We are working on bringing you awesome {marketplaceCategory.toLowerCase()} to accelerate your workflow.</p>
                    </div>}
            </div>
          </div>
       </div>
    </div>;
}
export {
  ScreensShowcase as default
};

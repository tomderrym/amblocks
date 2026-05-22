import { useState, useEffect, useRef } from "react";
import { Wind, Settings, Play, Pause, RotateCcw, X, Check, Activity } from "lucide-react";
const TECHNIQUES = [
  {
    id: "box",
    name: "Box Breathing",
    description: "Used by athletes and responders to stay calm and focused.",
    steps: [
      { label: "Inhale", duration: 4 },
      { label: "Hold", duration: 4 },
      { label: "Exhale", duration: 4 },
      { label: "Hold", duration: 4 }
    ],
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: "relax",
    name: "4-7-8 Relax",
    description: "A natural tranquilizer for the nervous system, great for sleep.",
    steps: [
      { label: "Inhale", duration: 4 },
      { label: "Hold", duration: 7 },
      { label: "Exhale", duration: 8 }
    ],
    color: "from-purple-400 to-pink-500"
  },
  {
    id: "balance",
    name: "Equal Breath",
    description: "Simple rhythm to balance energy and center your mind.",
    steps: [
      { label: "Inhale", duration: 5 },
      { label: "Exhale", duration: 5 }
    ],
    color: "from-emerald-400 to-teal-500"
  }
];
const PhoneFrame = ({ children }) => <div className="w-[320px] h-[640px] bg-white dark:bg-black rounded-[40px] border-[12px] border-black shadow-xl overflow-hidden relative flex flex-col shrink-0">
    {children}
  </div>;
function BreathingShowcase() {
  const [isActive, setIsActive] = useState(false);
  const [currentTech, setCurrentTech] = useState(TECHNIQUES[0]);
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TECHNIQUES[0].steps[0].duration);
  const [showSettings, setShowSettings] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            const nextStepIndex = (stepIndex + 1) % currentTech.steps.length;
            setStepIndex(nextStepIndex);
            if (nextStepIndex === 0) {
              setCyclesCompleted((c) => c + 1);
            }
            return currentTech.steps[nextStepIndex].duration;
          }
          return prevTime - 1;
        });
      }, 1e3);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, stepIndex, currentTech]);
  const toggleApp = () => setIsActive(!isActive);
  const resetApp = () => {
    setIsActive(false);
    setStepIndex(0);
    setTimeLeft(currentTech.steps[0].duration);
    setCyclesCompleted(0);
  };
  const selectTechnique = (tech) => {
    setCurrentTech(tech);
    setStepIndex(0);
    setTimeLeft(tech.steps[0].duration);
    setCyclesCompleted(0);
    setShowSettings(false);
    setIsActive(false);
  };
  const currentStep = currentTech.steps[stepIndex];
  let scale = 1;
  let transitionDuration = "1000ms";
  if (isActive) {
    if (currentStep.label === "Inhale") {
      scale = 1.6;
      transitionDuration = `${currentStep.duration}s`;
    } else if (currentStep.label === "Exhale") {
      scale = 1;
      transitionDuration = `${currentStep.duration}s`;
    } else if (currentStep.label === "Hold") {
      scale = stepIndex === 1 ? 1.6 : 1;
      transitionDuration = "1000ms";
    }
  }
  return <div className="w-full h-full min-h-screen bg-slate-900 flex flex-col items-center justify-between p-6 font-sans text-slate-100 overflow-hidden relative">
      <div
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr ${currentTech.color} opacity-10 blur-[100px] transition-all duration-1000`}
    style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
  />

      {
    /* Header */
  }
      <div className="w-full max-w-md flex justify-between items-center mt-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700/50 shadow-lg backdrop-blur-sm">
            <Wind className="text-teal-400 w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white m-0 leading-tight">Serenity</h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase m-0">{currentTech.name}</p>
          </div>
        </div>
        <button
    onClick={() => setShowSettings(true)}
    className="p-3 hover:bg-slate-800/80 rounded-2xl border border-transparent hover:border-slate-700/50 transition-all backdrop-blur-sm bg-transparent !shadow-none"
  >
          <Settings className="w-6 h-6 text-slate-300" />
        </button>
      </div>

      {
    /* Main Breathing Area */
  }
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md relative z-10 my-8">
            
            {
    /* Animated Circle Container */
  }
            <div className="relative flex items-center justify-center w-[200px] h-[200px]">
              
              {
    /* Outer Ring */
  }
              <div
    className="absolute rounded-full border border-slate-700/30 transition-transform ease-in-out"
    style={{
      width: "100%",
      height: "100%",
      transform: `scale(${scale * 1.1})`,
      transitionDuration: isActive ? transitionDuration : "1s"
    }}
  />

              {
    /* Middle Ring */
  }
              <div
    className="absolute rounded-full border border-slate-600/50 transition-transform ease-in-out"
    style={{
      width: "80%",
      height: "80%",
      transform: `scale(${scale * 1.05})`,
      transitionDuration: isActive ? transitionDuration : "1s"
    }}
  />

              {
    /* Main Breathing Orb */
  }
              <div
    className={`flex flex-col items-center justify-center rounded-full bg-gradient-to-tr ${currentTech.color} shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] transition-transform ease-in-out z-10`}
    style={{
      width: "110px",
      height: "110px",
      transform: `scale(${scale})`,
      transitionDuration: isActive ? transitionDuration : "1s"
    }}
  >
                <div className="flex flex-col items-center">
                  <span className="text-white text-3xl font-light tracking-tighter drop-shadow-md">
                    {isActive ? timeLeft : "Ready"}
                  </span>
                  {isActive && <span className="text-white/80 text-xs font-medium tracking-widest uppercase mt-1">
                      sec
                    </span>}
                </div>
              </div>
            </div>

            {
    /* Instruction Labels */
  }
            <div className="mt-12 text-center h-20 flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2 transition-all block min-h-[32px]">
                {isActive ? currentStep.label : "Begin Session"}
              </h2>
              <p className="text-slate-400 max-w-[200px] text-xs leading-relaxed">
                {isActive ? "Follow the expanding and contracting rhythm." : currentTech.description}
              </p>
            </div>
          </div>

          {
    /* Controls */
  }
          <div className="w-full max-w-md pb-4 flex flex-col gap-6 items-center z-10 relative">
            
            {
    /* Cycle Counter */
  }
            <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Cycles: {cyclesCompleted}</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-full">
              <button
    onClick={resetApp}
    className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:text-white text-slate-400 transition-all shadow-lg"
    title="Reset"
  >
                <RotateCcw className="w-5 h-5" />
              </button>

              <button
    onClick={toggleApp}
    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 border-none outline-none ${isActive ? "bg-slate-100 text-slate-900" : `bg-gradient-to-tr ${currentTech.color} text-white`}`}
  >
                {isActive ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
              </button>
              
              {
    /* Spacer to keep play button centered */
  }
              <div className="w-[44px] h-[44px]" />
            </div>
          </div>

          {
    /* Settings/Technique Drawer Overlay */
  }
          {showSettings && <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-end justify-center">
              <div className="bg-slate-800 border-t border-slate-700 w-full max-w-md rounded-t-[32px] p-6 pb-8 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-10 duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white m-0">Techniques</h3>
                    <p className="text-xs text-slate-400 m-0">Choose a breathing pattern</p>
                  </div>
                  <button
    onClick={() => setShowSettings(false)}
    className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-full transition-colors text-slate-300 border-none outline-none"
  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {TECHNIQUES.map((tech) => <button
    key={tech.id}
    onClick={() => selectTechnique(tech)}
    className={`w-full p-3 rounded-2xl flex items-center justify-between transition-all border outline-none ${currentTech.id === tech.id ? `bg-slate-700/50 border-slate-500` : "bg-slate-800/50 border-transparent hover:border-slate-600 hover:bg-slate-700/30"}`}
  >
                      <div className="text-left flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${tech.color} opacity-80 flex items-center justify-center shrink-0`}>
                          {currentTech.id === tech.id && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <p className={`font-semibold m-0 text-sm ${currentTech.id === tech.id ? "text-white" : "text-slate-300"}`}>
                            {tech.name}
                          </p>
                          <p className="text-[10px] text-slate-400 m-0 mt-0.5">
                            {tech.steps.map((s) => s.duration).join("-")} Pattern
                          </p>
                        </div>
                      </div>
                    </button>)}
                </div>
              </div>
            </div>}
        </div>;
}
export {
  BreathingShowcase as default
};

import React, { useState } from 'react';
import { Activity, Flame, Timer, Play, Home, Trophy, User, Calendar } from 'lucide-react';

const ACTIVITY_STATS = [
  { label: 'Move', value: 450, max: 600, unit: 'kcal', color: 'from-[#FF3B30] to-[#FF9500]' },
  { label: 'Exercise', value: 35, max: 45, unit: 'min', color: 'from-[#34C759] to-[#30D158]' },
  { label: 'Stand', value: 8, max: 12, unit: 'hrs', color: 'from-[#00C7BE] to-[#32ADE6]' }
];

const WORKOUTS = [
  { id: 1, title: 'HIIT Burn', duration: '20 min', intensity: 'High', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=400&h=300', tag: 'Recommended' },
  { id: 2, title: 'Core Strength', duration: '15 min', intensity: 'Medium', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=300', tag: 'New' },
  { id: 3, title: 'Yoga Flow', duration: '30 min', intensity: 'Low', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=400&h=300', tag: 'Recovery' }
];

export default function FitnessShowcase() {
  const [activeTab, setActiveTab] = useState('home');

  const renderHome = () => (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 px-5">
      {/* Header */}
      <div className="py-6 flex justify-between items-center sticky top-0 bg-[#09090B]/90 backdrop-blur-md z-10">
        <div>
          <p className="text-gray-400 text-sm font-medium">Today</p>
          <h1 className="text-2xl font-bold text-white">Activity</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#1C1C1E] flex items-center justify-center">
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Activity Rings Alternative (Progress Bars) */}
      <div className="bg-[#1C1C1E] rounded-2xl p-5 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        <div className="flex justify-between items-end mb-4 text-white">
          <h2 className="font-semibold text-lg">Daily Goal</h2>
          <span className="text-sm text-[#34C759] font-medium">+15% vs yesterday</span>
        </div>
        
        <div className="space-y-4">
          {ACTIVITY_STATS.map((stat, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1.5 font-medium text-white">
                <span className="text-gray-400 uppercase tracking-wider">{stat.label}</span>
                <span>{stat.value} / {stat.max} {stat.unit}</span>
              </div>
              <div className="h-3 w-full bg-[#2C2C2E] rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${(stat.value / stat.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200 text-white">
         <div className="bg-[#1C1C1E] rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mb-3 text-orange-500">
               <Flame className="w-4 h-4" />
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Calories</p>
            <p className="text-xl font-bold">1,240 <span className="text-sm font-normal text-gray-500">kcal</span></p>
         </div>
         <div className="bg-[#1C1C1E] rounded-2xl p-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-3 text-blue-500">
               <Activity className="w-4 h-4" />
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Heart Rate</p>
            <p className="text-xl font-bold">72 <span className="text-sm font-normal text-gray-500">bpm</span></p>
         </div>
      </div>

      {/* Workouts */}
      <div className="animate-in fade-in slide-in-from-bottom-12 duration-500 delay-300 fill-mode-both text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recommended</h2>
          <button className="text-sm text-[#0A84FF] font-medium">See All</button>
        </div>
        
        <div className="space-y-4">
          {WORKOUTS.map((workout) => (
            <div key={workout.id} className="relative h-32 rounded-2xl overflow-hidden group cursor-pointer">
              <img src={workout.image} alt={workout.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                 {workout.tag}
              </div>

              <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-end">
                <div>
                  <h3 className="font-bold text-lg mb-1">{workout.title}</h3>
                  <div className="flex items-center text-xs text-gray-300 font-medium">
                    <Timer className="w-3 h-3 mr-1" /> {workout.duration} • {workout.intensity}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center backdrop-blur-md bg-opacity-90">
                  <Play className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-[#09090B] relative flex flex-col overflow-hidden font-sans">
      {activeTab === 'home' && renderHome()}
      {activeTab !== 'home' && (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Coming soon
        </div>
      )}

      {/* Bottom Tab Bar */}
      <div className="absolute bottom-6 left-6 right-6 bg-[#1C1C1E]/90 backdrop-blur-xl rounded-full py-4 px-6 flex items-center justify-between z-30 shadow-2xl border border-white/10 animate-in slide-in-from-bottom-12 duration-700 delay-500 fill-mode-both">
        <button 
          onClick={() => setActiveTab('home')}
          className={`transition-colors ${activeTab === 'home' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <Home className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setActiveTab('workouts')}
          className={`transition-colors ${activeTab === 'workouts' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <Activity className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setActiveTab('progress')}
          className={`transition-colors ${activeTab === 'progress' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <Trophy className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`transition-colors ${activeTab === 'profile' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

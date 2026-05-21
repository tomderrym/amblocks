import React, { useState } from 'react';
import { Wallet, PieChart, ArrowUpRight, ArrowDownRight, CreditCard, Send, Plus, Bell, Home, MoreHorizontal, ArrowLeftRight } from 'lucide-react';

const TRANSACTIONS = [
  { id: 1, name: 'Apple Music', type: 'Subscription', amount: -10.99, icon: '🎵', date: 'Today, 10:00 AM', color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-500' },
  { id: 2, name: 'Salary', type: 'Income', amount: 4500.00, icon: '💼', date: 'Yesterday', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500' },
  { id: 3, name: 'Coffee Shop', type: 'Food', amount: -4.50, icon: '☕', date: 'Yesterday', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-500' },
  { id: 4, name: 'Uber Ride', type: 'Transport', amount: -12.40, icon: '🚗', date: 'Oct 24', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500' },
  { id: 5, name: 'Grocery Store', type: 'Shopping', amount: -85.20, icon: '🛒', date: 'Oct 22', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500' },
];

const CARDS = [
  { id: 1, balance: '12,450.00', last4: '4209', exp: '12/28', type: 'Pro', gradient: 'from-gray-900 to-gray-700 dark:from-white dark:to-gray-300', text: 'text-white dark:text-black' },
  { id: 2, balance: '3,200.50', last4: '8892', exp: '04/26', type: 'Travel', gradient: 'from-blue-500 to-violet-500', text: 'text-white' }
];

export default function FintechShowcase() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCard, setActiveCard] = useState(0);

  const renderHome = () => (
    <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
      {/* Header */}
      <div className="px-6 py-6 flex justify-between items-center sticky top-0 bg-[#F8F9FA]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400 p-0.5">
            <div className="w-full h-full bg-white dark:bg-[#0A0A0A] rounded-full border-2 border-transparent">
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Good morning</p>
            <h2 className="text-sm font-bold text-gray-900 dark:text-white">Alex Morgan</h2>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell className="w-4 h-4" />
        </button>
      </div>

      {/* Cards Slider */}
      <div className="px-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        <div 
          className="relative w-full aspect-[1.6] rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-xl"
          onClick={() => setActiveCard((activeCard + 1) % CARDS.length)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${CARDS[activeCard].gradient} transition-all duration-500`}></div>
          
          <div className={`relative z-10 flex justify-between items-start ${CARDS[activeCard].text}`}>
             <div>
               <p className="text-xs opacity-80 mb-1 font-medium tracking-wider uppercase">Total Balance</p>
               <h3 className="text-3xl font-bold tracking-tight">${CARDS[activeCard].balance}</h3>
             </div>
             <div className="font-bold italic text-lg opacity-90">{CARDS[activeCard].type}</div>
          </div>
          
          <div className={`relative z-10 flex justify-between items-end ${CARDS[activeCard].text}`}>
             <div className="flex gap-4">
                <div>
                   <p className="text-[10px] opacity-70 uppercase tracking-wider mb-0.5">Card Number</p>
                   <p className="font-medium tracking-widest text-sm">•••• {CARDS[activeCard].last4}</p>
                </div>
                <div>
                   <p className="text-[10px] opacity-70 uppercase tracking-wider mb-0.5">Expires</p>
                   <p className="font-medium tracking-widest text-sm">{CARDS[activeCard].exp}</p>
                </div>
             </div>
             <div className="w-10 opacity-80">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="16" cy="24" r="16" fill="currentColor" fillOpacity="0.5"/>
                   <circle cx="32" cy="24" r="16" fill="currentColor" fillOpacity="0.5"/>
                </svg>
             </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {CARDS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeCard ? 'w-4 bg-gray-900 dark:bg-white' : 'w-1.5 bg-gray-300 dark:bg-gray-700'}`} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 px-6 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200">
        {[
          { icon: Send, label: 'Send', color: 'bg-black dark:bg-white text-white dark:text-black' },
          { icon: ArrowLeftRight, label: 'Receive', color: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white' },
          { icon: Plus, label: 'Top Up', color: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white' },
          { icon: MoreHorizontal, label: 'More', color: 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white' }
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${action.color}`}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400">{action.label}</span>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="px-6 animate-in fade-in slide-in-from-bottom-12 duration-500 delay-300 fill-mode-both">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900 dark:text-white">Recent Activity</h3>
          <button className="text-xs font-semibold text-blue-600 dark:text-blue-400">See All</button>
        </div>
        
        <div className="space-y-4">
          {TRANSACTIONS.map((tx) => (
            <div key={tx.id} className="flex items-center gap-4 group cursor-pointer">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${tx.color}`}>
                {tx.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{tx.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{tx.type} • {tx.date}</p>
              </div>
              <div className={`text-sm font-bold shrink-0 ${tx.amount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-white'}`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-slate-50 dark:bg-black relative flex flex-col overflow-hidden font-sans">
      {activeTab === 'home' && renderHome()}
      {activeTab !== 'home' && (
        <div className="flex-1 flex items-center justify-center text-gray-400 dark:text-gray-600">
          Coming soon
        </div>
      )}

      {/* Bottom Tab Bar */}
      <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-[#1C1C1E] rounded-3xl py-4 px-6 flex items-center justify-between z-30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-800 animate-in slide-in-from-bottom-12 duration-700 delay-500 fill-mode-both">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-black dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <Home className="w-5 h-5 mx-auto" />
          {activeTab === 'home' && <div className="w-1 h-1 rounded-full bg-black dark:bg-white mt-0.5"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('stats')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'stats' ? 'text-black dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <PieChart className="w-5 h-5 mx-auto" />
          {activeTab === 'stats' && <div className="w-1 h-1 rounded-full bg-black dark:bg-white mt-0.5"></div>}
        </button>
        <div className="relative -top-6">
           <button className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black shadow-lg hover:scale-105 transition-transform">
             <ArrowLeftRight className="w-5 h-5" />
           </button>
        </div>
        <button 
          onClick={() => setActiveTab('wallet')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'wallet' ? 'text-black dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <Wallet className="w-5 h-5 mx-auto" />
          {activeTab === 'wallet' && <div className="w-1 h-1 rounded-full bg-black dark:bg-white mt-0.5"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'profile' ? 'text-black dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
        >
          <CreditCard className="w-5 h-5 mx-auto" />
          {activeTab === 'profile' && <div className="w-1 h-1 rounded-full bg-black dark:bg-white mt-0.5"></div>}
        </button>
      </div>
    </div>
  );
}

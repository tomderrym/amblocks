import React from 'react';

export default function ElevenLabsLandingShowcase() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] font-sans theme-elevenlabs">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-subtle)] bg-[var(--color-background)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-black" />
            <span className="font-display font-medium text-lg leading-none tracking-tight">AudioAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-[0.15px] text-[var(--color-muted-foreground)]">
            <a href="#" className="hover:text-black transition-colors">Products</a>
            <a href="#" className="hover:text-black transition-colors">Research</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
            <a href="#" className="hover:text-black transition-colors">Company</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-[15px] font-medium tracking-[0.15px] hover:text-black text-[var(--color-muted-foreground)] transition-colors">Sign In</button>
            <button className="h-9 px-4 rounded-[9999px] bg-black text-white text-[15px] font-medium transition-transform hover:scale-105 active:scale-95">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-40 text-center mx-auto max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] font-light leading-[1.08] tracking-[-0.96px] text-black mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Text to speech.
          <br />
          <span className="text-[var(--color-muted-foreground)] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">Reinvented.</span>
        </h1>
        <p className="text-lg md:text-[20px] leading-[1.35] tracking-[0.18px] text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          Generate high-quality spoken audio in any voice, style, and language. Our AI voice generator lets you bring your stories to life like never before.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <button className="w-full sm:w-auto px-[20px] py-[12px] rounded-[30px] bg-[var(--color-warm-stone)] text-black text-[15px] font-medium shadow-[var(--shadow-warm-lift)] transition-transform hover:-translate-y-0.5 active:translate-y-0">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-[20px] py-[12px] rounded-[9999px] bg-white text-black text-[15px] font-medium shadow-[var(--shadow-card)] outline outline-1 outline-[rgba(0,0,0,0.06)] transition-transform hover:-translate-y-0.5 active:translate-y-0">
            Listen to samples
          </button>
        </div>
      </section>

      {/* Audio Waveform/Product Section */}
      <section className="px-6 pb-40">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-[24px] bg-[var(--color-near-white)] p-2 shadow-[var(--shadow-outline-ring),var(--shadow-soft-elevation)] overflow-hidden">
            {/* Inner Content Area */}
            <div className="rounded-[20px] bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-inset-edge)] p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-blue-50/30 to-green-50 opacity-50" />
                
                <h3 className="font-display text-2xl font-light tracking-tight z-10 mb-8">Generate voice from text</h3>
                
                {/* Fake Audio Waveform */}
                <div className="flex items-center gap-1 z-10 mb-12">
                   {[...Array(40)].map((_, i) => (
                     <div 
                        key={i} 
                        className="w-1.5 rounded-full bg-black/80" 
                        style={{
                            height: `${Math.max(10, Math.random() * 80)}px`,
                            opacity: Math.random() > 0.5 ? 1 : 0.4
                        }}
                     />
                   ))}
                </div>

                <div className="flex items-center gap-4 w-full max-w-md bg-white rounded-full p-2 shadow-[var(--shadow-card),var(--shadow-outline-ring)] z-10">
                   <button className="h-10 w-10 shrink-0 rounded-full bg-black flex items-center justify-center text-white">
                      ▶
                   </button>
                   <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-black w-1/3 h-full rounded-full" />
                   </div>
                   <span className="text-[13px] font-mono text-gray-400 pr-4">0:12 / 0:45</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 py-32 bg-[var(--color-muted)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-[16px] bg-white p-8 shadow-[var(--shadow-outline-ring),var(--shadow-soft-elevation)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-warm-stone)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <h3 className="font-display text-[32px] leading-[1.13] tracking-normal font-light mb-4 text-black">Voice Design</h3>
              <p className="text-[16px] leading-[1.5] tracking-[0.16px] text-[var(--color-muted-foreground)] mb-6">
                Design entirely new synthetic voices from scratch. Adjust age, gender, and accent to construct a voice that fits your needs perfectly.
              </p>
              <button className="text-[14px] font-display-bold font-bold uppercase tracking-[0.7px] text-black">
                Explore voice design →
              </button>
            </div>

            <div className="rounded-[16px] bg-white p-8 shadow-[var(--shadow-outline-ring),var(--shadow-soft-elevation)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-warm-stone)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <h3 className="font-display text-[32px] leading-[1.13] tracking-normal font-light mb-4 text-black">Voice Cloning</h3>
              <p className="text-[16px] leading-[1.5] tracking-[0.16px] text-[var(--color-muted-foreground)] mb-6">
                Clone your own voice or voices you have permission and rights to use. Create a digital replica that sounds exactly like you.
              </p>
              <button className="text-[14px] font-display-bold font-bold uppercase tracking-[0.7px] text-black">
                Learn about cloning →
              </button>
            </div>

            <div className="rounded-[16px] bg-white p-8 shadow-[var(--shadow-outline-ring),var(--shadow-soft-elevation)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-warm-stone)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <h3 className="font-display text-[32px] leading-[1.13] tracking-normal font-light mb-4 text-black">Speech to Speech</h3>
              <p className="text-[16px] leading-[1.5] tracking-[0.16px] text-[var(--color-muted-foreground)] mb-6">
                Change your voice into another voice while preserving emotion, pacing, and delivery. A new way to control artificial voices.
              </p>
              <button className="text-[14px] font-display-bold font-bold uppercase tracking-[0.7px] text-black">
                Discover STS →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Code Snippet / API Section */}
      <section className="px-6 py-40">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
                <h2 className="font-display text-[36px] leading-[1.17] font-light mb-6 text-black">
                    State of the art, instantly accessible.
                </h2>
                <p className="text-[18px] leading-[1.60] tracking-[0.18px] text-[var(--color-muted-foreground)] mb-8">
                    Generate audio with low latency. Integrate the most advanced speech synthesis API into your app, game, or platform in minutes.
                </p>
                <button className="px-[14px] h-10 rounded-[9999px] bg-black text-white text-[15px] font-medium shadow-[var(--shadow-card)]">
                    View Documentation
                </button>
            </div>
            
            <div className="flex-1 w-full relative">
                <div className="absolute inset-y-0 -left-6 w-[200%] bg-gradient-to-r from-cyan-50/30 to-blue-50/10 -z-10 rounded-[40px] transform -rotate-3" />
                <div className="rounded-[18px] bg-black text-[#e5e5e5] p-6 font-mono text-[13px] leading-[1.85] shadow-2xl relative">
                    <div className="flex gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4e4e4e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4e4e4e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4e4e4e]" />
                    </div>
                    <pre className="overflow-x-auto custom-scrollbar">
{`import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({
  apiKey: "YOUR_API_KEY",
});

await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
  output_format: "mp3_44100_128",
  text: "The quick brown fox jumps over the lazy dog.",
  model_id: "eleven_multilingual_v2"
});`}
                    </pre>
                </div>
            </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-[var(--color-border-subtle)] px-6 py-20 bg-[var(--color-near-white)]">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
           <div className="flex flex-col gap-4">
              <div className="h-6 w-6 rounded-sm bg-black mb-4" />
              <p className="text-[14px] text-[var(--color-muted-foreground)]">© 2026 AudioAI Inc.</p>
           </div>
           <div className="flex flex-col gap-3">
              <h4 className="text-[13px] font-medium text-black uppercase tracking-widest mb-2">Product</h4>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Speech Synthesis</a>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Voice Cloning</a>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Voice Library</a>
           </div>
           <div className="flex flex-col gap-3">
              <h4 className="text-[13px] font-medium text-black uppercase tracking-widest mb-2">Company</h4>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">About Us</a>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Careers</a>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Research</a>
           </div>
           <div className="flex flex-col gap-3">
              <h4 className="text-[13px] font-medium text-black uppercase tracking-widest mb-2">Resources</h4>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">API Docs</a>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Blog</a>
              <a href="#" className="text-[14px] text-[var(--color-muted-foreground)] hover:text-black">Help Center</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

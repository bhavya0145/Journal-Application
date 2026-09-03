import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Feather, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  BrainCircuit, 
  BookOpen, 
  EyeOff, 
  HeartHandshake, 
  Compass, 
  Stars 
} from 'lucide-react';

export default function LandingPage() {
  const [activeMood, setActiveMood] = useState('Dreamy');

  const moods = [
    { label: 'Dreamy', icon: '☁️', color: 'bg-indigo-100/70 text-indigo-900 border-indigo-200' },
    { label: 'Chaotic', icon: '⚡', color: 'bg-amber-100/70 text-amber-900 border-amber-200' },
    { label: 'Grateful', icon: '🌻', color: 'bg-emerald-100/70 text-emerald-900 border-emerald-200' },
    { label: 'Reflective', icon: '🕯️', color: 'bg-rose-100/70 text-rose-900 border-rose-200' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f6f2ea] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-950 overflow-x-hidden">
      {/* Ambient Impressionist Glows */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[26rem] h-[26rem] bg-rose-200/30 rounded-full blur-2xl pointer-events-none" />

      {/* Navigation Header */}
      

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-20 text-center flex flex-col items-center">
        {/* Floating Sticker / Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-200 shadow-xs mb-8">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs font-medium text-stone-700 tracking-wide">
            Your mindful AI companion for unfiltered thought
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-stone-900 mb-6">
          Untangle your mind. <br />
          <span className="italic font-light text-stone-600">Paint your inner world.</span>
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
          Dump your messy, midnight monologues or daytime epiphanies. 
          <strong className="font-semibold text-stone-800"> selflekt.cool</strong> transforms your raw musings into 
          poetic reflections, gentle insights, and daily mindfulness prompts.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            to="/register"
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-stone-900 text-stone-50 text-sm font-medium shadow-md hover:shadow-lg hover:bg-stone-800 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <span>Claim Your Sanctuary</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#privacy"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-stone-200/60 hover:bg-stone-200/90 text-stone-700 text-sm font-medium border border-stone-300/60 flex items-center justify-center gap-2 transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Why Privacy Matters</span>
          </a>
        </div>

        {/* Interactive Mood Prompt Preview Card */}
        <div className="w-full max-w-2xl mt-14 p-6 sm:p-8 rounded-3xl bg-[#faf7f2] border border-stone-200/90 shadow-xl shadow-stone-800/5 text-left">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200/60">
            <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500 flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-amber-700" />
              Live Reflection Sample
            </span>
            <span className="text-xs text-stone-400 font-mono">prompt_v2.5</span>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-500">Pick your head-space:</span>
              {moods.map((mood) => (
                <button
                  key={mood.label}
                  type="button"
                  onClick={() => setActiveMood(mood.label)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                    activeMood === mood.label ? mood.color : 'bg-stone-100 text-stone-600 border-stone-200'
                  }`}
                >
                  <span className="mr-1">{mood.icon}</span>
                  {mood.label}
                </button>
              ))}
            </div>

            <blockquote className="p-4 rounded-2xl bg-[#f2ede4] border border-stone-200/70 font-serif italic text-stone-700 text-sm sm:text-base leading-relaxed">
              {activeMood === 'Dreamy' && "“I spent twenty minutes staring at rain streaks on the cafe glass wondering what my childhood self would think of where we ended up.”"}
              {activeMood === 'Chaotic' && "“Six tabs open, half a cold matcha, and three conflicting deadlines. My thoughts feel like bees in a mason jar.”"}
              {activeMood === 'Grateful' && "“A stranger smiled back on the morning metro, and suddenly the day didn’t feel so heavy.”"}
              {activeMood === 'Reflective' && "“Maybe outgrowing people isn’t cold-hearted; maybe it's just trees losing leaves so the next season can grow.”"}
            </blockquote>

            <div className="flex items-center gap-2 text-xs text-amber-800 font-medium">
              <Stars className="w-3.5 h-3.5" />
              <span>Selflekt Synthesis:</span>
              <span className="text-stone-600 font-normal">Extracting gratitude, growth patterns, and peaceful closures.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-4">
              <Feather className="w-5 h-5" />
            </div>
            <h2 className="text-base font-semibold text-stone-900 mb-2">Gentle Re-framing</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our AI doesn't lecture or judge. It asks compassionate questions that nudge you toward clarity and calm.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-base font-semibold text-stone-900 mb-2">Emotional Constellations</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Watch your recurring anxieties and joys map out across months like stars, spotting patterns before they overwhelm you.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200/80 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-100/70 text-rose-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h2 className="text-base font-semibold text-stone-900 mb-2">Zero Social Pressure</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              No likes, no follower counters, no streaks to maintain. Just you, your thoughts, and a canvas that listens.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Pledge Section */}
      <section id="privacy" className="relative z-10 max-w-5xl mx-auto px-6 py-20 scroll-mt-6">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-[#faf7f2] border border-stone-300/80 shadow-lg overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Our Sacred Covenant
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Your Vulnerability is Sacred. <br />
              <span className="italic font-light text-stone-600">Your Entries Are Strictly Inviolate.</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-2">
              A journal holds what you wouldn't dare say aloud. We believe monetizing personal pain or selling confessions to ad brokers is unforgivable. That’s why selflekt.cool is architected on radical, zero-compromise solitude.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-stone-200/80 text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 mt-0.5">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">Zero AI Training on Entries</h3>
                <p className="text-stone-500 mt-0.5">Your reflections never feed LLM training pools or public fine-tuning sets.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 mt-0.5">
                <EyeOff className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800">No Tracking or Ad Pixels</h3>
                <p className="text-stone-500 mt-0.5">We don’t run third-party tracking scripts, trackers, or marketing pixels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-200/80 py-10 text-center text-xs text-stone-500 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded bg-stone-900 flex items-center justify-center text-stone-50">
            <BookOpen className="w-3 h-3 text-amber-300" />
          </div>
          <span className="font-semibold tracking-tight text-stone-800">selflekt.cool</span>
        </div>
        <p>© {new Date().getFullYear()} selflekt.cool — A safe harbour for your wandering psyche.</p>
      </footer>
    </div>
  );
}
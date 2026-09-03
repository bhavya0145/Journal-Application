import  { useState } from 'react';
import { ArrowLeft, Sparkles, BookOpen, Lock, Mail, ArrowRight, Smile } from 'lucide-react';
 
export default function JournalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    const response = await fetch('http://localhost:8080/public/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName: email, password: password}),
    });
    
    const result = await response.json();
    console.log('Success:', result);
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#f6f2ea] overflow-hidden font-sans">
      {/* Decorative Background Elements (Impressionist/Artistic Ambient Blobs) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-rose-200/30 rounded-full blur-2xl pointer-events-none" />

      {/* Main Glassmorphic / Elevated Card */}
      <div className="relative z-10 w-full max-w-4xl min-h-[580px] bg-[#faf7f2] rounded-3xl shadow-2xl shadow-stone-800/10 border border-stone-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-all duration-300">
        
        {/* Left Side: Artistic Visual Showcase */}
        <section aria-label="Visual showcase" className="relative md:col-span-6 min-h-[260px] md:min-h-full overflow-hidden group">
          {/* Pointillism / Impressionist Aesthetic Background Image */}
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop"
            alt="Artistic impressionist painting backdrop"
            className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
          />

          {/* Artistic Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent md:bg-stone-900/10 mix-blend-multiply" />

          {/* Playful Floating Journal Badge */}
          <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 shadow-sm text-stone-800 text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>Capture the fleeting moments</span>
          </div>

          {/* Subtle Bottom Note */}
          <div className="absolute bottom-6 left-6 right-6 hidden md:block text-white">
            <p className="font-serif italic text-lg leading-snug drop-shadow-sm text-stone-100">
              “Fill your paper with the breathings of your heart.”
            </p>
            <span className="text-xs text-stone-200/80 tracking-wider uppercase mt-1 block">
              — William Wordsworth
            </span>
          </div>
        </section>

        {/* Right Side: Interactive Login Form */}
        <section aria-label="Login form section" className="md:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#faf7f2]">
          
          {/* Top Bar: Back Action */}
          <header className="flex items-center justify-between">
            <button
              type="button"
              className="group inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 text-xs font-semibold tracking-wide uppercase transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to home</span>
            </button>

            <span className="p-1.5 rounded-full bg-amber-100/60 text-amber-700">
              <Smile className="w-4 h-4" />
            </span>
          </header>

          {/* Form Header & Inputs */}
          <div className="my-auto py-6">
            <div className="space-y-1 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700/80">
                Welcome back
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 tracking-tight leading-tight">
                Where Thoughts <br />
                <span className="italic font-normal text-stone-600">Find Sanctuary.</span>
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-700">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@journal.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-stone-200/50 hover:bg-stone-200/70 focus:bg-white text-stone-800 placeholder-stone-400 rounded-xl border border-transparent focus:border-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-200/50 transition-all duration-200"
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-700">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your secret key"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-stone-200/50 hover:bg-stone-200/70 focus:bg-white text-stone-800 placeholder-stone-400 rounded-xl border border-transparent focus:border-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-200/50 transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full mt-2 py-3 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
              >
                <span>Open Journal</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>

              {/* Subtext Navigation */}
              <div className="pt-2 text-center text-xs text-stone-500">
                New to mindful reflection?{' '}
                <a href="#signup" className="font-semibold text-stone-800 hover:underline decoration-amber-500 underline-offset-4">
                  Create a journal
                </a>
              </div>
            </form>
          </div>

          {/* Footer Branding */}
          <footer className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-stone-900 flex items-center justify-center text-white">
                <BookOpen className="w-3 h-3" />
              </div>
              <span className="font-semibold tracking-tight text-stone-800">Folio.</span>
            </div>
            <span>Your daily mindful corner</span>
          </footer>
        </section>

      </div>
    </main>
  );
}
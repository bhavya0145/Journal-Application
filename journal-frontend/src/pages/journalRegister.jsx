import { useState } from 'react';
import { ArrowLeft, Sparkles, BookOpen, Lock, Mail, User, Feather, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function JournalRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    journalFocus: 'Reflections'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const journalingThemes = [
    { label: 'Reflections', icon: '🌿' },
    { label: 'Daily Dreams', icon: '✨' },
    { label: 'Gratitude', icon: '☀️' },
    { label: 'Creative Writing', icon: '🖋️' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(''); // Clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:8080/public/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.email,
          password: formData.password,
          name: formData.name,
          journalFocus: formData.journalFocus
        }),
      });

      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText || 'Server error'}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      setIsSuccess(true);
      
      // Optional: redirect after success
      // setTimeout(() => { window.location.href = '/login'; }, 2000);

    } catch (err) {
      console.error('Registration error:', err);
      setErrorMsg(err.message || 'Unable to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#f6f2ea] overflow-hidden font-sans">
      {/* Ambient Watercolor / Glow Blobs */}
      <div className="absolute -top-28 -right-28 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-rose-200/30 rounded-full blur-2xl pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-4xl min-h-[620px] bg-[#faf7f2] rounded-3xl shadow-2xl shadow-stone-800/10 border border-stone-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-all duration-300">
        
        {/* Left Side: Interactive Registration Form */}
        <section aria-label="Sign-up form section" className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-[#faf7f2] order-2 md:order-1">
          
          {/* Top Bar: Navigation */}
          <header className="flex items-center justify-between">
            <button
              type="button"
              className="group inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 text-xs font-semibold tracking-wide uppercase transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Login</span>
            </button>

            <span className="p-1.5 rounded-full bg-emerald-100/60 text-emerald-800">
              <Feather className="w-4 h-4" />
            </span>
          </header>

          {/* Form Content */}
          <div className="my-auto py-4">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700/80">
                Begin your chronicle
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-stone-800 tracking-tight leading-tight">
                Start a New <br />
                <span className="italic font-normal text-stone-600">Chapter Today.</span>
              </h1>
            </div>

            {/* Error / Success Feedback Banners */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            {isSuccess && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Journal created! Redirecting to your sanctuary...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-700">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isLoading}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your pen name or full name"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-200/50 hover:bg-stone-200/70 focus:bg-white text-stone-800 placeholder-stone-400 rounded-xl border border-transparent focus:border-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-200/50 transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-700">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isLoading}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@journal.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-200/50 hover:bg-stone-200/70 focus:bg-white text-stone-800 placeholder-stone-400 rounded-xl border border-transparent focus:border-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-200/50 transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400 group-focus-within:text-stone-700">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  disabled={isLoading}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong passphrase"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-200/50 hover:bg-stone-200/70 focus:bg-white text-stone-800 placeholder-stone-400 rounded-xl border border-transparent focus:border-stone-400 focus:outline-none focus:ring-4 focus:ring-stone-200/50 transition-all duration-200 disabled:opacity-50"
                />
              </div>

              {/* Playful Intent Selection */}
              <div className="pt-1">
                <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  What will you write about first?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {journalingThemes.map((theme) => (
                    <button
                      key={theme.label}
                      type="button"
                      disabled={isLoading}
                      onClick={() => setFormData({ ...formData, journalFocus: theme.label })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border text-left flex items-center gap-2 transition-all ${
                        formData.journalFocus === theme.label
                          ? 'bg-amber-100/70 border-amber-300 text-stone-900 shadow-xs'
                          : 'bg-stone-200/40 border-stone-200/60 text-stone-600 hover:bg-stone-200/80'
                      }`}
                    >
                      <span>{theme.icon}</span>
                      <span>{theme.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full mt-3 py-3 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-700 text-stone-50 text-sm font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-stone-300" />
                    <span>Inscribing your journal...</span>
                  </>
                ) : (
                  <>
                    <span>Claim Your Journal</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
                  </>
                )}
              </button>

              {/* Navigation Link */}
              <div className="pt-1 text-center text-xs text-stone-500">
                Already keep a journal here?{' '}
                <a href="#login" className="font-semibold text-stone-800 hover:underline decoration-amber-500 underline-offset-4">
                  Sign in
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
            <span>Encrypted & Private by design</span>
          </footer>
        </section>

        {/* Right Side: Artistic Visual Showcase */}
        <section aria-label="Visual showcase" className="relative md:col-span-6 min-h-[260px] md:min-h-full overflow-hidden group order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop"
            alt="Artistic botanical oil painting"
            className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent mix-blend-multiply" />

          <div className="absolute top-6 right-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/40 shadow-sm text-stone-800 text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            <span>A quiet space for loud thoughts</span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 hidden md:block text-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-stone-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero tracking, end-to-end encrypted notes</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Daily mindfulness writing prompts</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
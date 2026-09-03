import { Link, Outlet } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2ea] text-stone-800 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#f6f2ea]/90 backdrop-blur-md border-b border-stone-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-stone-900 flex items-center justify-center text-stone-50 shadow-sm rotate-[-3deg] group-hover:rotate-0 transition-transform">
              <BookOpen className="w-4 h-4 text-amber-300" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
              selflekt<span className="text-amber-700 font-sans font-normal text-sm">.cool</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 rounded-xl transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-sm transition-all active:scale-[0.98]"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Render Current Page */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
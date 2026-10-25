import React, { useState } from 'react';
import { Shield, PhoneCall, ChevronDown, CheckCircle2, User, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenClaims: () => void;
  onOpenCategories: () => void;
  onOpenAdvisor: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  onOpenClaims,
  onOpenCategories,
  onOpenAdvisor,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/80 shadow-xs">
      {/* Top Announcement Ribbon */}
      <div className="bg-[#001f41] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Certified Retail Advisory</span>
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">digipolicyinsurance.com</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919628400768"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-amber-300 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold tracking-wide">24X7 CLAIMS HELPLINE</span>
              <span className="font-bold text-amber-300">+91 96284 00768</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-[#001f41] flex items-center justify-center text-white shadow-md shadow-[#001f41]/10 group-hover:bg-[#0f3460] transition-colors">
                <div className="relative">
                  <Shield className="w-6 h-6 text-amber-400" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E8630A]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#001f41] leading-tight">
                  Digi<span className="text-[#E8630A]">Policy</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 -mt-0.5">
                  Insurance Broking
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#111C2C]">
            <div className="relative">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#E8630A] transition-colors py-2"
              >
                <span>Insurance Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#E8630A]' : 'text-slate-400'}`} />
              </button>

              {productsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Portfolios & Schematics
                  </div>
                  <button
                    onClick={() => { setProductsDropdownOpen(false); scrollToSection('portfolios-section'); }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-slate-50 rounded-lg flex items-center justify-between text-slate-800"
                  >
                    <span>Health & Family Floater</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">Sec 80D</span>
                  </button>
                  <button
                    onClick={() => { setProductsDropdownOpen(false); scrollToSection('portfolios-section'); }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-slate-50 rounded-lg flex items-center justify-between text-slate-800"
                  >
                    <span>Motor & Two-Wheeler (Zero Dep)</span>
                    <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded font-mono">Save 85%</span>
                  </button>
                  <button
                    onClick={() => { setProductsDropdownOpen(false); scrollToSection('portfolios-section'); }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-slate-50 rounded-lg flex items-center justify-between text-slate-800"
                  >
                    <span>Bangla Shasya Bima (BSB Crop)</span>
                    <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-mono">Govt DBT</span>
                  </button>
                  <button
                    onClick={() => { setProductsDropdownOpen(false); scrollToSection('portfolios-section'); }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-slate-50 rounded-lg flex items-center justify-between text-slate-800"
                  >
                    <span>Term Life & LIC Pure Protection</span>
                    <span className="text-[10px] text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded font-mono">10(10D)</span>
                  </button>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button
                    onClick={() => { setProductsDropdownOpen(false); onOpenCategories(); }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-[#E8630A] hover:bg-orange-50 rounded-lg flex items-center gap-1.5"
                  >
                    <span>View All 12 Insurance Categories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onOpenClaims}
              className="hover:text-[#E8630A] transition-colors py-2 flex items-center gap-1.5 text-slate-700 hover:text-slate-900"
            >
              <span>Claims Concierge</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>

            <button
              onClick={() => scrollToSection('why-digipolicy')}
              className="hover:text-[#E8630A] transition-colors py-2 text-slate-700 hover:text-slate-900"
            >
              Why DigiPolicy
            </button>

            <button
              onClick={() => scrollToSection('regional-presence')}
              className="hover:text-[#E8630A] transition-colors py-2 text-slate-700 hover:text-slate-900"
            >
              Track Record
            </button>

            <button
              onClick={() => scrollToSection('contact-section')}
              className="hover:text-[#E8630A] transition-colors py-2 text-slate-700 hover:text-slate-900"
            >
              Contact Us
            </button>
          </nav>

          {/* Action Zone: Helpline, Get a Quote, Login, IRDAI Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-[#E8630A] hover:bg-[#d35400] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </button>

            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-[#001f41] hover:text-[#E8630A] transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>

            <div className="hidden xl:flex items-center gap-1.5 pl-2 border-l border-slate-200 text-[11px] font-semibold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Secure</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden px-3.5 py-1.5 bg-[#E8630A] text-white text-xs font-bold rounded-md"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCategories(); }}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Insurance Portfolios (12 Categories)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenClaims(); }}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg flex items-center gap-2"
            >
              <span>Claims Concierge</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">24x7 Active</span>
            </button>
            <button
              onClick={() => scrollToSection('why-digipolicy')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Why DigiPolicy
            </button>
            <button
              onClick={() => scrollToSection('regional-presence')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Track Record (East India Mandates)
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Contact Us & Kolkata Office
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full py-3 bg-[#E8630A] text-white font-bold rounded-lg text-center text-sm shadow"
            >
              Get Instant Customized Quote
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="w-full py-2.5 border border-slate-200 text-slate-800 font-semibold rounded-lg text-center text-sm"
            >
              Customer & Policyholder Login
            </button>
            <a
              href="tel:+919628400768"
              className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#001f41] bg-slate-100 rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-[#E8630A]" />
              <span>Call Claim Concierge: +91 96284 00768</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

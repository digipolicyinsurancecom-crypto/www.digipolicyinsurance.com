import React from 'react';
import { Shield, Lock, CheckCircle2, PhoneCall, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenCategories: () => void;
  onOpenClaims: () => void;
  onOpenAdvisor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCategories, onOpenClaims, onOpenAdvisor }) => {
  return (
    <footer className="bg-[#001f41] text-white pt-16 pb-12 border-t border-[#0f3460]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Office Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f3460] flex items-center justify-center text-white border border-white/10">
                <Shield className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white leading-none block">
                  Digi<span className="text-[#E8630A]">Policy</span> Insurance
                </span>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  SAHI ADVICE SAHI INSURANCE
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              DigiPolicy Insurance Broking Services Pvt. Ltd. is a licensed corporate insurance broker delivering transparent comparisons, algorithmic quotes, and rapid claim settlements for families and enterprises across India.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white text-[11px] uppercase tracking-wider text-amber-300">
                Kolkata Head Office
              </div>
              <p>Cross Road No-7 1st Floor, 67/45B Strand Road, Kolkata-700007</p>
            </div>

            <div className="pt-1 text-xs">
              <span className="text-slate-400">Direct Support: </span>
              <a href="tel:+919628400768" className="text-amber-300 font-bold hover:underline font-mono">
                +91 96284 00768
              </a>
            </div>
          </div>

          {/* Column 1: Insurance Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Insurance Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenCategories} className="hover:text-amber-300 transition-colors text-left">
                  Motor & Two-Wheeler
                </button>
              </li>
              <li>
                <button onClick={onOpenCategories} className="hover:text-amber-300 transition-colors text-left">
                  Health & Critical Illness
                </button>
              </li>
              <li>
                <button onClick={onOpenCategories} className="hover:text-amber-300 transition-colors text-left">
                  Pradhan Mantri Crop
                </button>
              </li>
              <li>
                <button onClick={onOpenCategories} className="hover:text-amber-300 transition-colors text-left">
                  Term Life & Pension
                </button>
              </li>
              <li>
                <button onClick={onOpenCategories} className="hover:text-amber-300 transition-colors text-left">
                  SME & Commercial Cover
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Claims & Advisory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Claims & Advisory
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenClaims} className="hover:text-amber-300 transition-colors text-left">
                  24x7 Claims Concierge
                </button>
              </li>
              <li>
                <button onClick={onOpenClaims} className="hover:text-amber-300 transition-colors text-left">
                  Cashless Garage Network
                </button>
              </li>
              <li>
                <button onClick={onOpenClaims} className="hover:text-amber-300 transition-colors text-left">
                  Hospital Empanelment
                </button>
              </li>
              <li>
                <button onClick={onOpenClaims} className="hover:text-amber-300 transition-colors text-left">
                  Settlement Ratio Stats
                </button>
              </li>
              <li>
                <button onClick={onOpenAdvisor} className="hover:text-amber-300 transition-colors text-left">
                  Consumer Grievance Cell
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#compliance" className="hover:text-amber-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-amber-300 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-amber-300 transition-colors">
                  Disclaimers & Solvency
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-amber-300 transition-colors">
                  Whistleblower Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 DigiPolicy Insurance Broking Services Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Paperless</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

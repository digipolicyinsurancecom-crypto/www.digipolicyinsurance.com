import React from 'react';
import { GitCompare, Headphones, FileCheck2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  onLearnAlgorithm: () => void;
  onOpenClaimsConcierge: () => void;
  onOpenDigiLocker: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onLearnAlgorithm,
  onOpenClaimsConcierge,
  onOpenDigiLocker,
}) => {
  return (
    <section id="why-digipolicy" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E8630A] mb-2 font-mono">
            THE DIGIPOLICY DIFFERENCE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001f41] tracking-tight">
            Why 50 Lakh+ Policyholders Choose DigiPolicy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            We combine cutting-edge comparison algorithms with dedicated offline advisors who personally handle claim filings when life happens.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Multi-Insurance Objective Comparison */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#001f41] text-white flex items-center justify-center mb-6 shadow-md shadow-[#001f41]/10 group-hover:scale-105 transition-transform">
                <GitCompare className="w-7 h-7 text-amber-400" />
              </div>

              <h3 className="text-xl font-bold text-[#001f41] mb-3 group-hover:text-[#E8630A] transition-colors">
                Multi-Insurance Objective Comparison
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                We don't promote one insurer. Our proprietary engine analyzes inclusions, room-rent caps, waiting periods, and deductibles across 20+ top life and general insurers to find true value.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={onLearnAlgorithm}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001f41] hover:text-[#E8630A] transition-colors group/btn"
              >
                <span>Learn How Algorithms Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Dedicated Claims Concierge */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#a04100] text-white flex items-center justify-center mb-6 shadow-md shadow-[#a04100]/20 group-hover:scale-105 transition-transform">
                <Headphones className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#001f41] mb-3 group-hover:text-[#E8630A] transition-colors">
                Dedicated Claims Concierge
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                During critical health admissions or motor accidents, our team coordinates directly with hospitals and TPAs. From cashless approvals to final discharge billing, an advocate stands with you.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-[#E8630A] mb-1">
                24x7 Claims Helpline: +91 96284 00768
              </div>
              <button
                onClick={onOpenClaimsConcierge}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001f41] hover:text-[#E8630A] transition-colors group/btn"
              >
                <span>Track or File Claim</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Pillar 3: 100% Paperless & Instant e-Policy */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#001f41] mb-3 group-hover:text-[#E8630A] transition-colors">
                100% Paperless & Instant e-Policy
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Generate your verified e-Policy in under 2 minutes. Instant WhatsApp delivery, DigiLocker integration, and automated annual renewal safeguards so coverage never lapses.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenDigiLocker}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001f41] hover:text-[#E8630A] transition-colors group/btn"
              >
                <span>Instant DigiLocker Sync</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

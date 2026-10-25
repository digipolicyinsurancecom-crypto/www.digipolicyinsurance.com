import React from 'react';
import { ShieldCheck, CheckCircle2, Car, MapPin, Clock } from 'lucide-react';

interface RegionalRootsProps {
  onOpenClaimsConcierge: () => void;
}

export const RegionalRoots: React.FC<RegionalRootsProps> = ({ onOpenClaimsConcierge }) => {
  return (
    <section id="regional-presence" className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Proposition, 2x2 Stats Grid, Compliance Badge */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E8630A] mb-2 font-mono">
                UNMATCHED GROUND PRESENCE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001f41] tracking-tight leading-tight">
                Deep Regional Roots Across West Bengal, Assam & Jharkhand
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Unlike generic web portals, DigiPolicy operates physical desks and village-level grievance centers. We have anchored several of the largest state crop insurance rollouts under government mandates.
              </p>
            </div>

            {/* 2x2 Big Stat Grid */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#001f41] font-mono tracking-tight">
                  50L+
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">Bangla Shasya Bima</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Farmers insured under West Bengal state portal initiatives.
                </div>
              </div>

              <div className="border-l-2 border-[#E8630A] pl-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#001f41] font-mono tracking-tight">
                  ₹30Cr+
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">Premium Disbursed</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Direct compensation handled via PMFBY & BSB claims.
                </div>
              </div>

              <div className="border-l-2 border-[#3282b8] pl-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#001f41] font-mono tracking-tight">
                  10L+
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">Inter-State Policies</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Active coverage spanning Jharkhand, Assam, and Odisha rural corridors.
                </div>
              </div>

              <div className="border-l-2 border-emerald-500 pl-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#001f41] font-mono tracking-tight">
                  1,500+
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">Cashless Motor Fixes</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Accidental physical claims settled without out-of-pocket delays.
                </div>
              </div>
            </div>

            {/* Compliance Badge Block */}
            <div className="pt-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block">
                    Kolkata Regional Directorate Compliance
                  </span>
                  Registered Corporate Direct Broker. Regular solvency disclosure adhering strictly to statutory guidelines.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase with Overlay Cards */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              
              {/* Background Photography of Eastern India / Vehicle & Surveyor */}
              <div className="h-[420px] sm:h-[480px] w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
                  alt="Motor Claims Support across Kolkata, Howrah and Salt Lake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/aistudio/Image_1_7f125ab1.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f41]/95 via-transparent to-black/30 pointer-events-none" />

                {/* Top Floating Card: Motor Claims Support */}
                <div className="absolute top-5 left-5 right-5 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-200 text-slate-900">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#E8630A] flex items-center justify-center shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#001f41]">Motor Claims Support</div>
                      <div className="text-[11px] text-slate-600">
                        Surveys dispatched within 60 minutes across Greater Kolkata, Howrah, and Salt Lake.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Attached Card: Sahi Advice Guarantee */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#001f41]/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      SAHI ADVICE GUARANTEE
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Zero Hidden Deductions
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Dedicated Claim Concierge steps in directly with TPAs so you never battle paperwork alone.
                  </div>
                  <button
                    onClick={onOpenClaimsConcierge}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 underline"
                  >
                    <span>Connect with Claims Desk Now</span>
                    <span>→</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

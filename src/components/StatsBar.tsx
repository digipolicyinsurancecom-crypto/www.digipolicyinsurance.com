import React from 'react';
import { Users, Landmark, Shield, Award } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <div className="relative -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 pt-4 lg:pt-0 first:pt-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#001f41] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[#3282b8]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#001f41] font-mono tracking-tight">
                50 Lakh+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                Satisfied Policyholders
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#E8630A] flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6 text-[#E8630A]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#001f41] font-mono tracking-tight">
                ₹30Cr+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                BSB & PMFBY Claims
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#001f41] font-mono tracking-tight">
                20+ Top Insurers
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                LIC, HDFC, ICICI & More
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-8">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#D4A347]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#001f41] font-mono tracking-tight">
                99.1%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                Settlement Track Record
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

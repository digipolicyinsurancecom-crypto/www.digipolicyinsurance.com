import React from 'react';
import { Car, HeartPulse, Wheat, ShieldCheck, Store, Shield, Anchor, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InsuranceCategory } from '../types/insurance';

interface PortfoliosProps {
  onSelectCategory: (category: InsuranceCategory) => void;
  onOpenAllCategories: () => void;
}

export const Portfolios: React.FC<PortfoliosProps> = ({ onSelectCategory, onOpenAllCategories }) => {
  return (
    <section id="portfolios-section" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8630A] mb-2">
              <span className="w-6 h-0.5 bg-[#E8630A]"></span>
              <span>TAILORED SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001f41] tracking-tight">
              Comprehensive Insurance Portfolios
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Choose from retail policies, specialized state agro-schemes, corporate workmen compensation, and lifestyle protection designed with verified cashless claims.
            </p>
          </div>

          <button
            onClick={onOpenAllCategories}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#001f41] hover:text-[#E8630A] transition-colors group shrink-0"
          >
            <span>Compare All 12 Categories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Main Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Motor & Bike Insurance */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-slate-300 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Save up to 85%*
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#001f41] mb-2 group-hover:text-[#E8630A] transition-colors">
                Motor & Bike Insurance
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Comprehensive and 3rd-party coverages for 4-wheelers, 2-wheelers, and commercial fleets under the Indian Motor Tariff.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>4,500+ Cashless Garages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero Depreciation Add-on</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Instant Paperless Renewal</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Starts @</span>
                <span className="text-sm font-extrabold text-[#001f41] font-mono">₹2,094/yr</span>
              </div>
              <button
                onClick={() => onSelectCategory('motor')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E8630A] hover:text-[#d35400] transition-colors"
              >
                <span>Quick Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Health & Family Floater */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-slate-300 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Sec 80D Tax Benefit
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#001f41] mb-2 group-hover:text-[#E8630A] transition-colors">
                Health & Family Floater
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Medical emergency safety nets offering pre-post hospitalization, OPD coverage, and cashless TPAs across leading hospital networks.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>10,000+ Empaneled Hospitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No Pre-Medical Tests up to 55 yrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Restore Benefit & Maternity Cover</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Starts @</span>
                <span className="text-sm font-extrabold text-[#001f41] font-mono">₹490/mo</span>
              </div>
              <button
                onClick={() => onSelectCategory('health')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E8630A] hover:text-[#d35400] transition-colors"
              >
                <span>Explore Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Bangla Shasya Bima (BSB) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-slate-300 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Wheat className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Govt. Scheme Portal
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#001f41] mb-2 group-hover:text-[#E8630A] transition-colors">
                Bangla Shasya Bima (BSB)
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Specialized portal for PMFBY & West Bengal BSB schemes with 50 Lakh+ farmers registered for flood, drought & crop loss support.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Subsidized Govt. Premiums</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Assam, WB & Jharkhand Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Direct Bank DBT Settlement</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Coverage</span>
                <span className="text-sm font-extrabold text-[#001f41]">Per Acre</span>
              </div>
              <button
                onClick={() => onSelectCategory('crop')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E8630A] hover:text-[#d35400] transition-colors"
              >
                <span>Enroll Farmer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Term Life & LIC Policies */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-slate-300 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#001f41] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#3282b8]" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Cover up to 99 Yrs
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#001f41] mb-2 group-hover:text-[#E8630A] transition-colors">
                Term Life & LIC Policies
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Pure term insurance, Return of Premium (TROP), and official LIC endowment & pension schemes with 10(10D) tax exemptions.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>₹1 Crore Cover at ₹550/mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Accidental Disability Riders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>99.2% Claim Settlement Ratio</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Tax Free</span>
                <span className="text-sm font-extrabold text-[#001f41]">Payouts</span>
              </div>
              <button
                onClick={() => onSelectCategory('life')}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#E8630A] hover:text-[#d35400] transition-colors"
              >
                <span>Compare LIC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Row of 4 Secondary Mini Portfolios */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={onOpenAllCategories}
            className="bg-white rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow cursor-pointer transition-all flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Store className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#001f41]">SME & Fire Shield</div>
              <div className="text-[11px] text-slate-500">Shop, warehouse & workmen cover.</div>
            </div>
          </div>

          <div
            onClick={onOpenAllCategories}
            className="bg-white rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow cursor-pointer transition-all flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#001f41]">Cattle & Pet Insurance</div>
              <div className="text-[11px] text-slate-500">RFID tagging, veterinary cost relief.</div>
            </div>
          </div>

          <div
            onClick={onOpenAllCategories}
            className="bg-white rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow cursor-pointer transition-all flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <Anchor className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#001f41]">Marine Cargo Cover</div>
              <div className="text-[11px] text-slate-500">Transit risks across inland & sea.</div>
            </div>
          </div>

          <div
            onClick={onOpenAllCategories}
            className="bg-white rounded-xl p-4 border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow cursor-pointer transition-all flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#001f41]">Loans & Co-branded Cards</div>
              <div className="text-[11px] text-slate-500">Instant digital disbursement & cashback.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

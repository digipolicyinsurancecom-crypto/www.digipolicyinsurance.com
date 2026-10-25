import React, { useState } from 'react';
import { X, Check, ShieldCheck, Download, Send, ArrowRight, HeartPulse, Car, Wheat, Users, CheckCircle2 } from 'lucide-react';
import { InsuranceCategory, PlanComparison, QuoteFormData } from '../types/insurance';
import { POPULAR_PLANS } from '../data/mockInsuranceData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteData: QuoteFormData | null;
  onSelectPlan: (plan: PlanComparison) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  quoteData,
  onSelectPlan,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);

  if (!isOpen) return null;

  const currentCategory = quoteData?.category || 'health';
  const plans = POPULAR_PLANS.filter((p) => p.category === currentCategory);

  const handleDownloadPDF = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const handleSendWhatsapp = () => {
    setWhatsappSent(true);
    setTimeout(() => setWhatsappSent(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-[#001f41] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Comparative Quotations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {currentCategory === 'health' && 'Compare Top Health & Family Floater Policies'}
              {currentCategory === 'motor' && 'Compare Comprehensive Motor & Zero Dep Plans'}
              {currentCategory === 'crop' && 'Bangla Shasya Bima & PMFBY Agricultural Plans'}
              {currentCategory === 'life' && 'Compare Official LIC & Term Life Sovereign Covers'}
            </h3>
            {quoteData && (
              <p className="text-xs text-slate-300 mt-1">
                Customized for WhatsApp: <span className="font-mono text-white font-semibold">+91 {quoteData.whatsappNumber}</span>
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Controls Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Billing Cycle:</span>
            <div className="inline-flex p-0.5 bg-slate-200/80 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1 rounded-md transition-all ${
                  billingCycle === 'monthly' ? 'bg-white text-[#001f41] shadow-2xs' : 'text-slate-600'
                }`}
              >
                Monthly Breakdown
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-3 py-1 rounded-md transition-all ${
                  billingCycle === 'annual' ? 'bg-[#001f41] text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                Annual Total (Save 10%)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="px-3 py-1.5 text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>{downloadSuccess ? 'PDF Downloaded ✓' : 'Download Quote PDF'}</span>
            </button>

            <button
              onClick={handleSendWhatsapp}
              className="px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{whatsappSent ? 'Sent to WhatsApp ✓' : 'Send to WhatsApp'}</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPremium : plan.annualPremium;
            const periodText = billingCycle === 'monthly' ? '/ month*' : '/ year*';

            return (
              <div
                key={plan.id}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                {/* Left Plan Details */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-extrabold px-2.5 py-1 bg-[#001f41] text-white rounded tracking-wider font-mono">
                      {plan.insurerLogoText}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#001f41]">
                      {plan.planName}
                    </h4>
                    {plan.highlightBadge && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#E8630A] border border-orange-200">
                        {plan.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-600">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Sum Insured</span>
                      <span className="font-bold text-[#001f41]">{plan.coverAmount}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Claim Settlement</span>
                      <span className="font-bold text-emerald-700">{plan.claimSettlementRatio}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Cashless Network</span>
                      <span className="font-bold text-[#3282b8]">{plan.cashlessNetworkCount}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1 pt-1">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {plan.taxBenefit && (
                    <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{plan.taxBenefit}</span>
                    </div>
                  )}
                </div>

                {/* Right Price & Buy CTA */}
                <div className="w-full md:w-56 shrink-0 pt-4 md:pt-0 md:pl-6 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col justify-between items-start md:items-end text-left md:text-right space-y-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Net Starting Premium</span>
                    <div className="text-2xl font-extrabold text-[#001f41] font-mono tracking-tight">
                      {price === 0 ? (
                        <span className="text-emerald-700 text-lg">Govt. Subsidized</span>
                      ) : (
                        <>₹{price.toLocaleString()} <span className="text-xs font-medium text-slate-500">{periodText}</span></>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-700 block mt-0.5">Zero Broker Commission</span>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-2.5 px-4 bg-[#E8630A] hover:bg-[#d35400] text-white font-bold text-xs rounded-lg shadow transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <span>Proceed with Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 shrink-0">
          Licensed Corporate Insurance Broker. Premium calculations follow standard insurer underwriting directives. No spam guarantee.
        </div>

      </div>
    </div>
  );
};

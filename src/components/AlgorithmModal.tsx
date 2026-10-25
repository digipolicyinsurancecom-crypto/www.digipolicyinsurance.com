import React from 'react';
import { X, GitCompare, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

interface AlgorithmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlgorithmModal: React.FC<AlgorithmModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#001f41] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f3460] text-amber-400 flex items-center justify-center shrink-0">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 font-mono">
                OBJECTIVE AUDIT PROTOCOL
              </div>
              <h3 className="text-lg font-bold text-white">
                How DigiPolicy Comparison Engine Works
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Unlike aggregators that rank insurers based on sponsored marketing fees, DigiPolicy uses an <strong>objective mathematical score</strong> across 4 non-negotiable insurance quality parameters:
          </p>

          {/* Audit Rule 1 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#001f41]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-mono">
                1
              </div>
              <span>Room Rent Capping & Proportionate Deduction Elimination</span>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              Many policies look cheap because they sneak in a 1% sum-insured room rent cap. If you exceed this cap, the hospital and insurer deduct up to 40% proportionately from doctor and ICU charges. Our algorithm filters out or flags these penalty traps.
            </p>
          </div>

          {/* Audit Rule 2 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#001f41]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-mono">
                2
              </div>
              <span>Pre-Existing Disease (PED) Waiting Period Audit</span>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              We benchmark policies with 1 to 2 year waiting periods for diabetes, hypertension, and thyroid against archaic 4-year waiting contracts, prioritizing rapid coverage initiation.
            </p>
          </div>

          {/* Audit Rule 3 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#001f41]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-mono">
                3
              </div>
              <span>Claim Settlement Ratio (CSR) & Solvency Index (&gt;1.85)</span>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              We only empanel insurers with an official claim settlement ratio above 92% and solvency reserves exceeding 1.85x required capital, ensuring payouts are never stalled by financial distress.
            </p>
          </div>

          {/* Audit Rule 4 */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#001f41]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-mono">
                4
              </div>
              <span>True Cashless Network Density in Eastern India</span>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              We verify active cashless contracts specifically within Bengal, Assam, and Jharkhand hospitals and garages, not just generic national vanity numbers.
            </p>
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Certified Corporate Broker. Fiduciary obligation to the policyholder, not the insurance company.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#001f41] text-white text-xs font-bold rounded-lg cursor-pointer"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};

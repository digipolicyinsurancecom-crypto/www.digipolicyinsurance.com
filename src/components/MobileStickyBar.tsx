import React from 'react';
import { PhoneCall, ArrowRight, Shield } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
  onOpenClaims: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote, onOpenClaims }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,31,65,0.08)] px-4 py-2.5 safe-bottom">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        {/* Quick Helpline / Claim Trigger */}
        <button
          onClick={onOpenClaims}
          className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-[#001f41] rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#E8630A]" />
          <span>Claims 24x7</span>
        </button>

        {/* Primary Instant Quote CTA */}
        <button
          onClick={onOpenQuote}
          className="flex-[1.5] py-2.5 px-4 bg-[#E8630A] hover:bg-[#d35400] text-white rounded-lg text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <span>Calculate Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};

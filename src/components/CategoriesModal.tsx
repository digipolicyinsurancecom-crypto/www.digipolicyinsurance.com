import React, { useState } from 'react';
import { X, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { ALL_12_CATEGORIES } from '../data/mockInsuranceData';

interface CategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesModal: React.FC<CategoriesModalProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
}) => {
  const [filter, setFilter] = useState<'all' | 'retail' | 'agro' | 'commercial'>('all');

  if (!isOpen) return null;

  const filteredCategories = ALL_12_CATEGORIES.filter((cat) => {
    if (filter === 'all') return true;
    if (filter === 'retail') return ['motor', 'health', 'life', 'travel', 'cyber', 'cancer'].includes(cat.id);
    if (filter === 'agro') return ['crop', 'cattle'].includes(cat.id);
    if (filter === 'commercial') return ['sme', 'marine', 'workmen', 'loans'].includes(cat.id);
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#001f41] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Insurance Schematics</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              All 12 Insurance Portfolios & Mandates
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Select any category for algorithmic rate comparisons and direct enrollment
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto shrink-0">
          <span className="text-xs font-bold text-slate-500 mr-2 shrink-0">Segment:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filter === 'all' ? 'bg-[#001f41] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All 12 Portfolios
          </button>
          <button
            onClick={() => setFilter('retail')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filter === 'retail' ? 'bg-[#001f41] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Personal & Family Retail
          </button>
          <button
            onClick={() => setFilter('agro')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filter === 'agro' ? 'bg-[#001f41] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Agricultural & Rural Schemes
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
              filter === 'commercial' ? 'bg-[#001f41] text-white shadow-2xs' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Commercial & SME Shield
          </button>
        </div>

        {/* Categories Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-[#001f41]">
                    {cat.title}
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cat.tagColor}`}>
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                  {cat.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 font-mono">
                  {cat.startingPrice}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onSelectCategory(cat.id);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E8630A] hover:text-[#d35400] transition-colors cursor-pointer"
                >
                  <span>{cat.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Corporate Direct Broker • Solvency ratio exceeds 1.85 regulatory benchmark</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#001f41] text-white font-bold rounded-lg cursor-pointer"
          >
            Close Portfolio View
          </button>
        </div>

      </div>
    </div>
  );
};

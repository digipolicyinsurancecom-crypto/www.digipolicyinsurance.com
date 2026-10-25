import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E8630A] mb-2 font-mono">
              CLIENT STORIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001f41] tracking-tight">
              Discover Why They Trust DigiPolicy
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-amber-50/70 border border-amber-200/60 px-3.5 py-1.5 rounded-full shrink-0">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs font-bold text-slate-800 font-mono">
              4.9 / 5 (12,400+ Reviews)
            </span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Testimonial 1: Rajesh Kumar */}
          <div className="bg-[#f0f3ff]/50 rounded-2xl p-6 sm:p-7 border border-slate-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                &ldquo;DigiPolicy Insurance made insuring my sedan incredibly simple and stress-free. When a minor scrape occurred on the EM Bypass, their concierge initiated cashless claims with the garage instantly. Customer service is genuinely top-notch.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-[#111c2c] text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0">
                RK
              </div>
              <div>
                <div className="text-sm font-bold text-[#001f41]">Rajesh Kumar</div>
                <div className="text-[11px] text-slate-500">Motor Insurance • Kolkata, WB</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2: Sunita Reddy */}
          <div className="bg-[#f0f3ff]/50 rounded-2xl p-6 sm:p-7 border border-slate-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                &ldquo;As a farmer, having a reliable partner to safeguard our paddy against unseasonal floods is everything. DigiPolicy guided our self-help group through Bangla Shasya Bima enrollment. The DBT claim arrived right in our bank account without middlemen.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-[#E8630A] text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0">
                SR
              </div>
              <div>
                <div className="text-sm font-bold text-[#001f41]">Sunita Reddy</div>
                <div className="text-[11px] text-slate-500">Bangla Shasya Bima (BSB) • Bardhaman</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3: Arjun Mehta */}
          <div className="bg-[#f0f3ff]/50 rounded-2xl p-6 sm:p-7 border border-slate-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                &ldquo;Choosing term life insurance with DigiPolicy was one of the clearest financial decisions for my family's security. Their advisor explained the LIC comparison without pushy sales tactics and helped me claim Section 80C deductions.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-[#0f3460] text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0">
                AM
              </div>
              <div>
                <div className="text-sm font-bold text-[#001f41]">Arjun Mehta</div>
                <div className="text-[11px] text-slate-500">Term Life Insurance • Howrah</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

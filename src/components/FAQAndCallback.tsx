import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PhoneCall, MapPin, Mail, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { FAQS } from '../data/mockInsuranceData';
import { CallbackRequest } from '../types/insurance';

interface FAQAndCallbackProps {
  onRequestCallback: (data: CallbackRequest) => void;
}

export const FAQAndCallback: React.FC<FAQAndCallbackProps> = ({ onRequestCallback }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like screenshot
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [concern, setConcern] = useState('Health Insurance / Mediclaim');
  const [submitted, setSubmitted] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    onRequestCallback({ fullName, phoneNumber, concern });
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E8630A] mb-2 font-mono">
                GOT QUESTIONS?
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001f41] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Transparent, expert explanations for common insurance dilemmas.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3 pt-2">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#001f41] hover:text-[#E8630A] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="shrink-0 text-slate-400">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#E8630A]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Request a Free Callback & Kolkata Broker Office */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Request Callback Card */}
            <div className="bg-[#001f41] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-[#0f3460] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8630A] flex items-center justify-center text-white shrink-0 shadow">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Request a Free Callback</h3>
                  <div className="text-xs text-slate-300">
                    A certified advisor calls in 15 minutes
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-base font-bold text-white">Callback Request Confirmed!</div>
                  <div className="text-xs text-slate-200">
                    Senior Broker <span className="text-amber-300 font-semibold">Subir Roy</span> from our Strand Road Kolkata desk has been assigned to <span className="font-mono text-white">+91 {phoneNumber}</span>.
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-mono rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Estimated Call Time: Under 12 mins</span>
                  </div>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Submit another query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Subir Mukherjee"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0f3460] border border-white/15 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E8630A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      10-Digit Mobile Number
                    </label>
                    <div className="relative flex rounded-lg shadow-2xs">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-white/15 bg-white/10 text-white font-mono text-xs sm:text-sm font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="96284 00768"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0f3460] border border-white/15 rounded-r-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E8630A] font-mono"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Insurance Concern
                    </label>
                    <select
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0f3460] border border-white/15 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#E8630A]"
                    >
                      <option value="Health Insurance / Mediclaim">Health Insurance / Mediclaim</option>
                      <option value="Motor & Bike Insurance (Zero Dep)">Motor & Bike Insurance (Zero Dep)</option>
                      <option value="Bangla Shasya Bima (BSB Crop)">Bangla Shasya Bima (BSB Crop)</option>
                      <option value="Term Life & LIC Pure Protection">Term Life & LIC Pure Protection</option>
                      <option value="SME, Fire & Marine Commercial">SME, Fire & Marine Commercial</option>
                      <option value="Cashless Claim Settlement Help">Cashless Claim Settlement Help</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#E8630A] hover:bg-[#d35400] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Get Immediate Advisory</span>
                  </button>
                </form>
              )}
            </div>

            {/* Office Location Block */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2.5 text-sm font-bold text-[#001f41]">
                <MapPin className="w-4 h-4 text-[#E8630A]" />
                <span>Kolkata Corporate Broker Office</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                1st Floor, Cross Road No-7, 67/45B Strand Road, Kolkata - 700007, West Bengal.
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#001f41]">
                <a href="tel:+919628400768" className="hover:text-[#E8630A] transition-colors flex items-center gap-1.5 font-mono">
                  <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                  <span>+91 96284 00768</span>
                </a>
                <a href="mailto:info@digipolicyinsurance.com" className="hover:text-[#E8630A] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>info@digipolicyinsurance.com</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

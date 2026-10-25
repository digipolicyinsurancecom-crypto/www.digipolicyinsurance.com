import React, { useState } from 'react';
import { X, PhoneCall, Building2, CheckCircle2, Clock, ShieldCheck, Calendar, UserCheck } from 'lucide-react';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Within 15 minutes (Immediate)');
  const [scheduled, setScheduled] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#001f41] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8630A] flex items-center justify-center text-white shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 font-mono">
                STRAND ROAD, KOLKATA HEADQUARTERS
              </div>
              <h3 className="text-lg font-bold text-white">
                Personal Insurance Advisory Desk
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

        {/* Advisor Details */}
        <div className="p-6 space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#001f41] text-amber-400 flex items-center justify-center font-bold text-base shrink-0">
              SR
            </div>
            <div>
              <div className="text-sm font-bold text-[#001f41] flex items-center gap-1.5">
                <span>Subir Roy, Senior Advisor</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs text-slate-500">
                Principal Direct Broker • 14+ Yrs Eastern India Advisory
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                ● Available Now at Strand Road Desk (9 AM – 9 PM)
              </div>
            </div>
          </div>

          {scheduled ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-emerald-900">
                Advisory Appointment Confirmed!
              </div>
              <p className="text-xs text-slate-600">
                Subir Roy will dial your mobile <strong className="text-slate-900">+91 {phoneNumber}</strong> {preferredSlot.toLowerCase()}.
              </p>
              <button
                onClick={onClose}
                className="w-full py-2 bg-[#001f41] text-white text-xs font-bold rounded-lg cursor-pointer mt-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your 10-Digit Mobile Number
                </label>
                <div className="relative flex rounded-lg shadow-2xs">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="98301 22450"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-r-lg font-mono focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                >
                  <option value="Within 15 minutes (Immediate)">Within 15 minutes (Immediate)</option>
                  <option value="Today Evening (6:00 PM - 8:00 PM)">Today Evening (6:00 PM - 8:00 PM)</option>
                  <option value="Tomorrow Morning (10:00 AM - 12:00 PM)">Tomorrow Morning (10:00 AM - 12:00 PM)</option>
                </select>
              </div>

              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  DigiPolicy adheres to a strict <strong>Zero Aggressive Sales</strong> policy. You receive honest comparison, tax optimization, and claim guidance without spam.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#E8630A] hover:bg-[#d35400] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Connect with Strand Road Advisor</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

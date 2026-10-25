import React, { useState } from 'react';
import { X, Lock, FileText, CheckCircle2, ShieldCheck, Download, Smartphone } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length >= 10) {
      setOtpStep(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#001f41] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f3460] flex items-center justify-center text-white border border-white/10 shrink-0">
              <Lock className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 font-mono">
                SECURE POLICY VAULT
              </div>
              <h3 className="text-lg font-bold text-white">
                Customer & Policyholder Portal
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

        {/* Content */}
        <div className="p-6">
          {isLoggedIn ? (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-emerald-900">
                    Active Session Verified (DigiLocker Linked)
                  </div>
                  <div className="text-[11px] text-emerald-700">
                    Mobile: +91 {mobileNumber} • 2 Active Policies Found
                  </div>
                </div>
              </div>

              {/* Policy Card 1 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#001f41] font-mono">
                    HEALTH FLOATER
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Active (Renewal: Nov 2026)
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Care Supreme Health Shield — ₹10 Lakhs Cover
                </div>
                <div className="text-xs text-slate-500 font-mono">Policy No: POL-WB-99482-CS</div>
                <div className="pt-2 flex items-center gap-2">
                  <button className="flex-1 py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 flex items-center justify-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    <span>Download e-Policy</span>
                  </button>
                  <button className="flex-1 py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 flex items-center justify-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>80D Tax Receipt</span>
                  </button>
                </div>
              </div>

              {/* Policy Card 2 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#001f41] font-mono">
                    MOTOR ZERO DEP
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Active (WB-02-AL-4921)
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  HDFC ERGO Comprehensive 4-Wheeler Bumper-to-Bumper
                </div>
                <div className="text-xs text-slate-500 font-mono">Policy No: MOT-ERGO-44102</div>
                <div className="pt-2 flex items-center gap-2">
                  <button className="flex-1 py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 flex items-center justify-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    <span>Download e-Policy</span>
                  </button>
                  <button className="flex-1 py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cashless Garage Card</span>
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setOtpStep(false);
                }}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Sign out of Policy Vault
              </button>
            </div>
          ) : !otpStep ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Registered Mobile Number
                </label>
                <div className="relative flex rounded-lg shadow-2xs">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="98301 22450"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-r-lg font-mono focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                    required
                  />
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Enter the phone number given during policy purchase or BSB registration
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#001f41] hover:bg-[#0f3460] text-white font-bold text-xs sm:text-sm rounded-lg shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get OTP on Mobile & WhatsApp</span>
              </button>

              <div className="pt-2 text-center text-xs text-slate-400">
                🔒 Protected by 256-Bit Cyber Security Vault
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="text-center space-y-1">
                <span className="text-xs font-semibold text-slate-600">
                  Enter 4-digit OTP sent to <strong className="text-slate-900 font-mono">+91 {mobileNumber}</strong>
                </span>
              </div>

              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3].map((idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    defaultValue={idx === 0 ? '7' : idx === 1 ? '4' : idx === 2 ? '2' : '9'}
                    className="w-12 h-12 text-center text-lg font-extrabold font-mono bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#E8630A] hover:bg-[#d35400] text-white font-bold text-xs sm:text-sm rounded-lg shadow transition-all cursor-pointer"
              >
                Verify & Enter Vault
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setOtpStep(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Change Mobile Number
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

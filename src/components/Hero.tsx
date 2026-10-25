import React, { useState } from 'react';
import { ShieldCheck, PhoneCall, Check, ArrowRight, Sparkles, Building2, Lock, FileCheck, Award, HeartPulse, Car, Wheat, Users } from 'lucide-react';
import { InsuranceCategory, QuoteFormData } from '../types/insurance';

interface HeroProps {
  onCalculatePremium: (data: QuoteFormData) => void;
  onTalkToAdvisor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCalculatePremium, onTalkToAdvisor }) => {
  const [category, setCategory] = useState<InsuranceCategory>('health');

  // Form states
  const [healthCoverageType, setHealthCoverageType] = useState('Individual Protection (Age 18 - 65)');
  const [healthAge, setHealthAge] = useState<number>(32);
  const [healthPincode, setHealthPincode] = useState('700007');

  const [motorVehicleType, setMotorVehicleType] = useState('Private Car (4-Wheeler)');
  const [motorCityRTO, setMotorCityRTO] = useState('WB-02 (Kolkata Central)');
  const [motorPolicyType, setMotorPolicyType] = useState('Comprehensive + Zero Dep');

  const [cropStateDistrict, setCropStateDistrict] = useState('West Bengal (Bardhaman / Hooghly)');
  const [cropType, setCropType] = useState('Paddy (Aman / Boro)');
  const [cropAcreage, setCropAcreage] = useState<number>(2.5);

  const [lifeCoverAmount, setLifeCoverAmount] = useState('₹1 Crore Shield');
  const [lifeAge, setLifeAge] = useState<number>(30);
  const [lifeSmoker, setLifeSmoker] = useState<boolean>(false);

  const [whatsappNumber, setWhatsappNumber] = useState('9830122450');

  // Dynamic estimated starting premium calculation
  const getCalculatedEstimate = () => {
    switch (category) {
      case 'health': {
        const base = 490;
        const ageMultiplier = healthAge > 45 ? 1.4 : healthAge > 35 ? 1.15 : 1.0;
        const floaterMultiplier = healthCoverageType.includes('Family') ? 1.8 : 1.0;
        return Math.round(base * ageMultiplier * floaterMultiplier);
      }
      case 'motor': {
        if (motorVehicleType.includes('Two Wheeler')) return 110;
        return 175;
      }
      case 'crop': {
        return 0; // State subsidized BSB
      }
      case 'life': {
        const base = 550;
        const smokerMultiplier = lifeSmoker ? 1.5 : 1.0;
        const ageMult = lifeAge > 35 ? 1.3 : 1.0;
        return Math.round(base * smokerMultiplier * ageMult);
      }
      default:
        return 490;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculatePremium({
      category,
      healthCoverageType,
      healthAge,
      healthPincode,
      motorVehicleType,
      motorCityRTO,
      motorPolicyType,
      cropStateDistrict,
      cropType,
      cropAcreage,
      lifeCoverAmount,
      lifeAge,
      lifeSmoker,
      whatsappNumber,
    });
  };

  const estimatedAmount = getCalculatedEstimate();

  return (
    <section className="relative bg-[#001f41] text-white overflow-hidden pt-10 pb-20 lg:pt-14 lg:pb-24">
      {/* Background radial gradients for ambient depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3282b8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0f3460]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Proposition, Advisory Visual */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/10 text-xs font-semibold tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>TRUSTED BY 50 LAKH+ INDIANS ACROSS EASTERN INDIA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-tight sm:leading-[1.18] max-w-2xl">
                Coverage You Can Trust:{' '}
                <span className="text-white relative">
                  Reliable Protection
                  <span className="block h-1 w-full bg-[#E8630A] rounded-full mt-1"></span>
                </span>{' '}
                for Life’s Uncertainties
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                From family health and life plans to Eastern India's premier crop (PMFBY & BSB) and cashless vehicle coverages. Instant algorithmic rates, certified advisors, and dedicated 24x7 claim concierge.
              </p>

              {/* Feature Checkmarks Strip */}
              <div className="mt-6 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-semibold text-emerald-400">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-white">Instant e-Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-white">10,000+ Hospitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-white">4,500+ Garages</span>
                </div>
              </div>
            </div>

            {/* Advisory Desk Image & Local Ground Presence Card */}
            <div className="relative mt-4 rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <div className="h-64 sm:h-72 w-full bg-slate-800 relative">
                {/* Visual Representation of Indian family & advisor */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Personal Insurance Advisory Desk in Kolkata Strand Road"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
                  onError={(e) => {
                    // Fallback to local image or styled gradient
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/aistudio/Image_1_7f125ab1.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f41]/90 via-[#001f41]/30 to-transparent pointer-events-none" />

                {/* Floating Bottom Left Badge: Personal Insurance Advisory Desk */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#001f41]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E8630A] flex items-center justify-center text-white shrink-0 shadow">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      Personal Insurance Advisory Desk
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
                      Strand Road, Kolkata • Mon–Sun 9 AM – 9 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: INSTANT E-PREMIUM PORTAL Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 sm:p-6 text-slate-900 transition-all">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-extrabold text-[#001f41]">
                    INSTANT E-PREMIUM PORTAL
                  </div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#001f41] mt-0.5">
                    Get Your Customized Quote
                  </h2>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-[#001f41] text-[11px] font-bold rounded border border-blue-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span>Verified Portal</span>
                </div>
              </div>

              {/* 4 Category Tabs */}
              <div className="mt-4 grid grid-cols-4 gap-1 p-1 bg-slate-100/90 rounded-xl">
                <button
                  type="button"
                  onClick={() => setCategory('health')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all text-center flex flex-col items-center gap-0.5 ${
                    category === 'health'
                      ? 'bg-[#001f41] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Health</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('motor')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all text-center flex flex-col items-center gap-0.5 ${
                    category === 'motor'
                      ? 'bg-[#001f41] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Motor</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('crop')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all text-center flex flex-col items-center gap-0.5 ${
                    category === 'crop'
                      ? 'bg-[#001f41] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Wheat className="w-3.5 h-3.5" />
                  <span>Crop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('life')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all text-center flex flex-col items-center gap-0.5 ${
                    category === 'life'
                      ? 'bg-[#001f41] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Life & LIC</span>
                </button>
              </div>

              {/* Dynamic Interactive Form */}
              <form onSubmit={handleFormSubmit} className="mt-4 space-y-3.5">
                
                {/* Health Fields */}
                {category === 'health' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Coverage Type
                      </label>
                      <select
                        value={healthCoverageType}
                        onChange={(e) => setHealthCoverageType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                      >
                        <option value="Individual Protection (Age 18 - 65)">Individual Protection (Age 18 - 65)</option>
                        <option value="Family Floater (2 Adults + 2 Kids)">Family Floater (2 Adults + 2 Kids)</option>
                        <option value="Senior Citizen Shield (Parents 60+)">Senior Citizen Shield (Parents 60+)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Eldest Member Age
                        </label>
                        <input
                          type="number"
                          min="18"
                          max="95"
                          value={healthAge}
                          onChange={(e) => setHealthAge(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Pincode (Kolkata/WB)
                        </label>
                        <input
                          type="text"
                          maxLength={6}
                          value={healthPincode}
                          onChange={(e) => setHealthPincode(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent font-mono"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Motor Fields */}
                {category === 'motor' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Vehicle Type
                      </label>
                      <select
                        value={motorVehicleType}
                        onChange={(e) => setMotorVehicleType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                      >
                        <option value="Private Car (4-Wheeler)">Private Car (4-Wheeler)</option>
                        <option value="Two Wheeler / Motorcycle">Two Wheeler / Motorcycle</option>
                        <option value="Commercial Goods Vehicle">Commercial Goods Vehicle</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          RTO Location
                        </label>
                        <select
                          value={motorCityRTO}
                          onChange={(e) => setMotorCityRTO(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                        >
                          <option value="WB-02 (Kolkata Central)">WB-02 (Kolkata Central)</option>
                          <option value="WB-06 (Howrah)">WB-06 (Howrah)</option>
                          <option value="WB-26 (Barasat/North 24 Pgs)">WB-26 (Barasat)</option>
                          <option value="JH-01 (Ranchi)">JH-01 (Ranchi)</option>
                          <option value="AS-01 (Guwahati)">AS-01 (Guwahati)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Coverage Plan
                        </label>
                        <select
                          value={motorPolicyType}
                          onChange={(e) => setMotorPolicyType(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                        >
                          <option value="Comprehensive + Zero Dep">Comprehensive + Zero Dep</option>
                          <option value="Standard Comprehensive">Standard Comprehensive</option>
                          <option value="Mandatory 3rd Party">Mandatory 3rd Party</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Crop Fields (Bangla Shasya Bima & PMFBY) */}
                {category === 'crop' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        State Mandate & Region
                      </label>
                      <select
                        value={cropStateDistrict}
                        onChange={(e) => setCropStateDistrict(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                      >
                        <option value="West Bengal (Bangla Shasya Bima - BSB)">West Bengal (Bangla Shasya Bima - BSB)</option>
                        <option value="Assam (PMFBY Brahmaputra Valley)">Assam (PMFBY Brahmaputra Valley)</option>
                        <option value="Jharkhand (PMFBY Chota Nagpur)">Jharkhand (PMFBY Chota Nagpur)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Crop Sown
                        </label>
                        <select
                          value={cropType}
                          onChange={(e) => setCropType(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                        >
                          <option value="Paddy (Aman / Boro)">Paddy (Aman / Boro)</option>
                          <option value="Jute (Pat)">Jute (Pat)</option>
                          <option value="Potato (Alu)">Potato (Alu)</option>
                          <option value="Mustard / Oilseeds">Mustard / Oilseeds</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Cultivated Acres
                        </label>
                        <input
                          type="number"
                          step="0.5"
                          min="0.5"
                          max="50"
                          value={cropAcreage}
                          onChange={(e) => setCropAcreage(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent font-mono"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Life & LIC Fields */}
                {category === 'life' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Desired Life Cover Target
                      </label>
                      <select
                        value={lifeCoverAmount}
                        onChange={(e) => setLifeCoverAmount(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                      >
                        <option value="₹1 Crore Shield (Most Popular)">₹1 Crore Shield (Most Popular)</option>
                        <option value="₹50 Lakhs Basic Family Fund">₹50 Lakhs Basic Family Fund</option>
                        <option value="₹2 Crores Comprehensive Legacy">₹2 Crores Comprehensive Legacy</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Current Age
                        </label>
                        <input
                          type="number"
                          min="18"
                          max="65"
                          value={lifeAge}
                          onChange={(e) => setLifeAge(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tobacco/Smoking
                        </label>
                        <select
                          value={lifeSmoker ? 'yes' : 'no'}
                          onChange={(e) => setLifeSmoker(e.target.value === 'yes')}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent"
                        >
                          <option value="no">Non-Smoker (Save 20%)</option>
                          <option value="yes">Tobacco User / Smoker</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* WhatsApp Number Field */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number for Instant Quote PDF
                  </label>
                  <div className="relative flex rounded-lg shadow-2xs">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs sm:text-sm font-bold font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="98301 22450"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold bg-slate-50 border border-slate-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] focus:border-transparent font-mono"
                      required
                    />
                  </div>
                </div>

                {/* Estimated Rate Box */}
                <div className="p-3.5 rounded-xl bg-[#f0f3ff] border border-[#d8e3fa] flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Est. Monthly Starting Plan
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#001f41] tracking-tight">
                      {category === 'crop' ? (
                        <span className="text-emerald-700">₹0 / Govt. Subsidized*</span>
                      ) : (
                        <>₹{estimatedAmount} <span className="text-xs font-semibold text-slate-500">/ month*</span></>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Zero Brokerage Fee</span>
                    </div>
                  </div>
                </div>

                {/* Primary & Secondary Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#E8630A] hover:bg-[#d35400] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <span>Calculate Premium</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onTalkToAdvisor}
                    className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-[#001f41] border border-slate-300 text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#3282b8]" />
                    <span>Talk to Advisor</span>
                  </button>
                </div>

                {/* Footnote */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>100% Data Confidentiality</span>
                  </span>
                  <span className="text-emerald-700 font-semibold">
                    Under Section 80D / 80C Tax Saver
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Headphones, ShieldCheck, MapPin, Search, PhoneCall, AlertCircle, CheckCircle2, Clock, Car, HeartPulse, Wheat } from 'lucide-react';
import { NETWORK_LOCATIONS } from '../data/mockInsuranceData';

interface ClaimsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimsModal: React.FC<ClaimsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'initiate' | 'network' | 'track'>('initiate');
  
  // Initiate Claim Form
  const [claimType, setClaimType] = useState<'health' | 'motor' | 'crop'>('motor');
  const [patientOrVehicle, setPatientOrVehicle] = useState('');
  const [locationCity, setLocationCity] = useState('Kolkata (Salt Lake / EM Bypass)');
  const [contactPhone, setContactPhone] = useState('');
  const [ticketGenerated, setTicketGenerated] = useState<string | null>(null);

  // Search in network
  const [searchQuery, setSearchQuery] = useState('');

  // Track claim state
  const [trackingId, setTrackingId] = useState('CLM-WB-88421');
  const [trackedStatus, setTrackedStatus] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleInitiateClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `CLM-WB-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketGenerated(randomTicket);
  };

  const filteredLocations = NETWORK_LOCATIONS.filter((loc) =>
    loc.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#001f41] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8630A] flex items-center justify-center text-white shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
                24X7 EMERGENCY CLAIM DESK
              </div>
              <h3 className="text-xl font-bold text-white">
                DigiPolicy Claims Concierge
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Helpline Notification Bar */}
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 flex items-center justify-between text-xs text-amber-900 shrink-0">
          <span className="flex items-center gap-1.5 font-medium">
            <AlertCircle className="w-4 h-4 text-[#E8630A]" />
            <span>In an emergency hospital or road accident? Our concierge coordinates directly with TPAs.</span>
          </span>
          <a
            href="tel:+919628400768"
            className="font-bold text-[#E8630A] hover:underline flex items-center gap-1 shrink-0 ml-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>+91 96284 00768</span>
          </a>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 shrink-0">
          <button
            onClick={() => setActiveTab('initiate')}
            className={`flex-1 py-3 text-center border-b-2 transition-all cursor-pointer ${
              activeTab === 'initiate'
                ? 'border-[#E8630A] text-[#001f41] bg-white'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Initiate Cashless Claim
          </button>
          <button
            onClick={() => setActiveTab('network')}
            className={`flex-1 py-3 text-center border-b-2 transition-all cursor-pointer ${
              activeTab === 'network'
                ? 'border-[#E8630A] text-[#001f41] bg-white'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Cashless Hospital & Garage Network
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`flex-1 py-3 text-center border-b-2 transition-all cursor-pointer ${
              activeTab === 'track'
                ? 'border-[#E8630A] text-[#001f41] bg-white'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Track Active Claim Ticket
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* TAB 1: INITIATE CLAIM */}
          {activeTab === 'initiate' && (
            <div>
              {ticketGenerated ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block font-mono">
                      Claim Ticket Dispatched
                    </span>
                    <h4 className="text-2xl font-extrabold text-[#001f41] font-mono mt-1">
                      {ticketGenerated}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                    Our on-ground claims officer in <strong className="text-slate-900">{locationCity}</strong> has received your incident alert. We are contacting the insurance TPA desk now.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-emerald-300 rounded-full text-xs font-semibold text-emerald-800">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Average On-Site Contact: Within 35 minutes</span>
                  </div>
                  <div>
                    <button
                      onClick={() => setTicketGenerated(null)}
                      className="mt-3 text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                    >
                      File another claim
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInitiateClaim} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Claim Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setClaimType('motor')}
                        className={`p-3 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                          claimType === 'motor'
                            ? 'border-[#001f41] bg-[#001f41] text-white shadow'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Car className="w-4 h-4" />
                        <span>Motor Accident</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setClaimType('health')}
                        className={`p-3 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                          claimType === 'health'
                            ? 'border-[#001f41] bg-[#001f41] text-white shadow'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <HeartPulse className="w-4 h-4" />
                        <span>Hospitalization</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setClaimType('crop')}
                        className={`p-3 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                          claimType === 'crop'
                            ? 'border-[#001f41] bg-[#001f41] text-white shadow'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <Wheat className="w-4 h-4" />
                        <span>BSB Crop Loss</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {claimType === 'motor' ? 'Vehicle Number / Model' : claimType === 'health' ? 'Patient Name & Policy Number' : 'Farmer Name & KCC Number'}
                    </label>
                    <input
                      type="text"
                      value={patientOrVehicle}
                      onChange={(e) => setPatientOrVehicle(e.target.value)}
                      placeholder={claimType === 'motor' ? 'e.g. WB-02-AL-4921 (Hyundai Creta)' : claimType === 'health' ? 'e.g. Subir Mukherjee (POL-99201)' : 'e.g. Ramen Pal (KCC-WB-410)'}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Incident Location / District
                      </label>
                      <select
                        value={locationCity}
                        onChange={(e) => setLocationCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                      >
                        <option value="Kolkata (Central, South & North)">Kolkata (Central, South & North)</option>
                        <option value="Salt Lake & New Town (Rajarhat)">Salt Lake & New Town (Rajarhat)</option>
                        <option value="Howrah & Hooghly">Howrah & Hooghly</option>
                        <option value="Siliguri & Jalpaiguri">Siliguri & Jalpaiguri</option>
                        <option value="Bardhaman & Durgapur">Bardhaman & Durgapur</option>
                        <option value="Ranchi & Dhanbad Corridor">Ranchi & Dhanbad Corridor</option>
                        <option value="Guwahati & Kamrup">Guwahati & Kamrup</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Emergency Contact Phone
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="98301 22450"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8] font-mono"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E8630A] hover:bg-[#d35400] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Headphones className="w-4 h-4" />
                    <span>Dispatch Dedicated Claim Concierge</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CASHLESS NETWORK */}
          {activeTab === 'network' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search city, district, or corridor (e.g. Kolkata, Howrah, Siliguri)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3282b8]"
                />
              </div>

              <div className="space-y-2.5">
                {filteredLocations.map((loc, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#E8630A]" />
                        <span className="font-bold text-sm text-[#001f41]">{loc.city}</span>
                      </div>
                      <div className="text-xs text-slate-600 flex flex-wrap gap-3">
                        <span className="text-emerald-700 font-semibold">{loc.hospitals}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-blue-700 font-semibold">{loc.garages}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">Avg Response</span>
                      <span className="text-xs font-mono font-bold text-[#001f41]">{loc.avgResponseTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TRACK CLAIM */}
          {activeTab === 'track' && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Claim Ticket (e.g. CLM-WB-88421)"
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg font-mono"
                />
                <button
                  onClick={() => setTrackedStatus(true)}
                  className="px-4 py-2.5 bg-[#001f41] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Lookup
                </button>
              </div>

              {trackedStatus && (
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Claim ID</span>
                      <div className="text-sm font-extrabold text-[#001f41] font-mono">{trackingId}</div>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-full">
                      Cashless TPA Approved
                    </span>
                  </div>

                  {/* Status Steps */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                      <div>
                        <strong className="text-slate-900 block">Incident Reported on EM Bypass</strong>
                        <span className="text-slate-500 text-[11px]">Surveys assigned within 30 mins</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">✓</div>
                      <div>
                        <strong className="text-slate-900 block">Authorized Cashless Garage Inspection</strong>
                        <span className="text-slate-500 text-[11px]">Full Zero Dep approval granted without deductible disputes</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-6 h-6 rounded-full bg-[#E8630A] text-white flex items-center justify-center text-[10px] font-bold animate-pulse">3</div>
                      <div>
                        <strong className="text-[#001f41] block">Vehicle Ready for Delivery</strong>
                        <span className="text-slate-500 text-[11px]">Direct cashless discharge scheduled today at 4:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

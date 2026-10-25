import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Portfolios } from './components/Portfolios';
import { RegionalRoots } from './components/RegionalRoots';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQAndCallback } from './components/FAQAndCallback';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ClaimsModal } from './components/ClaimsModal';
import { CategoriesModal } from './components/CategoriesModal';
import { AdvisorModal } from './components/AdvisorModal';
import { LoginModal } from './components/LoginModal';
import { AlgorithmModal } from './components/AlgorithmModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { InsuranceCategory, PlanComparison, QuoteFormData, CallbackRequest } from './types/insurance';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

export default function App() {
  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [claimsModalOpen, setClaimsModalOpen] = useState(false);
  const [categoriesModalOpen, setCategoriesModalOpen] = useState(false);
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [algorithmModalOpen, setAlgorithmModalOpen] = useState(false);

  // Active Quote Data for comparison modal
  const [activeQuoteData, setActiveQuoteData] = useState<QuoteFormData | null>({
    category: 'health',
    healthCoverageType: 'Individual Protection (Age 18 - 65)',
    healthAge: 32,
    healthPincode: '700007',
    motorVehicleType: 'Private Car (4-Wheeler)',
    motorCityRTO: 'WB-02 (Kolkata Central)',
    motorPolicyType: 'Comprehensive + Zero Dep',
    cropStateDistrict: 'West Bengal (Bardhaman / Hooghly)',
    cropType: 'Paddy (Aman / Boro)',
    cropAcreage: 2.5,
    lifeCoverAmount: '₹1 Crore Shield',
    lifeAge: 30,
    lifeSmoker: false,
    whatsappNumber: '9830122450',
  });

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleCalculatePremium = (data: QuoteFormData) => {
    setActiveQuoteData(data);
    setQuoteModalOpen(true);
  };

  const handleSelectCategoryFromPortfolio = (cat: InsuranceCategory) => {
    setActiveQuoteData((prev) => ({
      ...(prev || {
        category: cat,
        healthCoverageType: 'Individual Protection (Age 18 - 65)',
        healthAge: 32,
        healthPincode: '700007',
        motorVehicleType: 'Private Car (4-Wheeler)',
        motorCityRTO: 'WB-02 (Kolkata Central)',
        motorPolicyType: 'Comprehensive + Zero Dep',
        cropStateDistrict: 'West Bengal (Bardhaman / Hooghly)',
        cropType: 'Paddy (Aman / Boro)',
        cropAcreage: 2.5,
        lifeCoverAmount: '₹1 Crore Shield',
        lifeAge: 30,
        lifeSmoker: false,
        whatsappNumber: '9830122450',
      }),
      category: cat,
    }));
    setQuoteModalOpen(true);
  };

  const handleSelectPlan = (plan: PlanComparison) => {
    setQuoteModalOpen(false);
    showToast(`Proposal initialized for ${plan.planName} (${plan.insurerName}). Our Strand Road desk will coordinate your paperless issuance.`);
  };

  const handleRequestCallback = (data: CallbackRequest) => {
    showToast(`Thank you ${data.fullName || 'Sir/Madam'}! Advisor Subir Roy will contact you at +91 ${data.phoneNumber} shortly.`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111C2C] flex flex-col font-sans selection:bg-[#E8630A]/20 selection:text-[#001f41]">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 max-w-md bg-[#001f41] text-white p-4 rounded-xl shadow-2xl border border-white/20 flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-slate-200 leading-snug">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenClaims={() => setClaimsModalOpen(true)}
        onOpenCategories={() => setCategoriesModalOpen(true)}
        onOpenAdvisor={() => setAdvisorModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main Body Content Sections */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero Section */}
        <Hero
          onCalculatePremium={handleCalculatePremium}
          onTalkToAdvisor={() => setAdvisorModalOpen(true)}
        />

        {/* 4-Column Stats Strip */}
        <StatsBar />

        {/* Tailored Portfolios Section */}
        <Portfolios
          onSelectCategory={handleSelectCategoryFromPortfolio}
          onOpenAllCategories={() => setCategoriesModalOpen(true)}
        />

        {/* Deep Regional Roots Section */}
        <RegionalRoots
          onOpenClaimsConcierge={() => setClaimsModalOpen(true)}
        />

        {/* Why Choose Us: 3 Core Pillars */}
        <WhyChooseUs
          onLearnAlgorithm={() => setAlgorithmModalOpen(true)}
          onOpenClaimsConcierge={() => setClaimsModalOpen(true)}
          onOpenDigiLocker={() => setLoginModalOpen(true)}
        />

        {/* Client Stories / Testimonials */}
        <Testimonials />

        {/* FAQ Accordion and Request Free Callback */}
        <FAQAndCallback onRequestCallback={handleRequestCallback} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCategories={() => setCategoriesModalOpen(true)}
        onOpenClaims={() => setClaimsModalOpen(true)}
        onOpenAdvisor={() => setAdvisorModalOpen(true)}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenQuote={() => setQuoteModalOpen(true)}
        onOpenClaims={() => setClaimsModalOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        quoteData={activeQuoteData}
        onSelectPlan={handleSelectPlan}
      />

      <ClaimsModal
        isOpen={claimsModalOpen}
        onClose={() => setClaimsModalOpen(false)}
      />

      <CategoriesModal
        isOpen={categoriesModalOpen}
        onClose={() => setCategoriesModalOpen(false)}
        onSelectCategory={(catId) => {
          if (['health', 'motor', 'crop', 'life'].includes(catId)) {
            handleSelectCategoryFromPortfolio(catId as InsuranceCategory);
          } else {
            showToast(`Selected ${catId.toUpperCase()} policy. Our commercial broker desk is preparing your quote prospectus.`);
          }
        }}
      />

      <AdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <AlgorithmModal
        isOpen={algorithmModalOpen}
        onClose={() => setAlgorithmModalOpen(false)}
      />

    </div>
  );
}

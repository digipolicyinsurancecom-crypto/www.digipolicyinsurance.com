export type InsuranceCategory = 'health' | 'motor' | 'crop' | 'life';

export interface PlanComparison {
  id: string;
  insurerName: string;
  insurerLogoText: string;
  planName: string;
  category: InsuranceCategory;
  coverAmount: string;
  monthlyPremium: number;
  annualPremium: number;
  claimSettlementRatio: string;
  cashlessNetworkCount: string;
  highlightBadge?: string;
  features: string[];
  taxBenefit?: string;
}

export interface QuoteFormData {
  category: InsuranceCategory;
  // Health
  healthCoverageType: string;
  healthAge: number;
  healthPincode: string;
  // Motor
  motorVehicleType: string;
  motorCityRTO: string;
  motorPolicyType: string;
  // Crop
  cropStateDistrict: string;
  cropType: string;
  cropAcreage: number;
  // Life
  lifeCoverAmount: string;
  lifeAge: number;
  lifeSmoker: boolean;
  // Common
  whatsappNumber: string;
}

export interface CallbackRequest {
  fullName: string;
  phoneNumber: string;
  concern: string;
  preferredTime?: string;
}

export interface ClaimTicket {
  policyNumber: string;
  claimType: 'health' | 'motor' | 'crop';
  patientOrVehicle: string;
  hospitalOrGarageCity: string;
  incidentDate: string;
  description: string;
}

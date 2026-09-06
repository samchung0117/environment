export type EnvironmentId = 'dev' | 'staging' | 'prod';

export interface EnvironmentInfo {
  id: EnvironmentId;
  title: string;
  subtitle: string;
  tool: string;
  tagline: string;
  badgeText: string;
  badgeVariant: 'dev' | 'staging' | 'prod';
  location: string;
  urlExample: string;
  audience: string;
  riskLevel: string;
  riskDescription: string;
  internetRequired: boolean;
  searchEngineStatus: string;
  primaryPurpose: string;
  whatYouDoHere: string[];
  whatYouNeverDoHere: string[];
  hostGatorSetupTip?: string;
  localWpSetupTip?: string;
}

export interface ComparisonRow {
  feature: string;
  category: 'General' | 'Infrastructure' | 'Access & Security' | 'Workflow';
  dev: string;
  staging: string;
  prod: string;
  hint?: string;
}

export interface ScenarioItem {
  id: string;
  question: string;
  recommendedEnv: EnvironmentId;
  explanation: string;
  cautionNotice?: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  env: EnvironmentId;
  tool: string;
  description: string;
  action: string;
}

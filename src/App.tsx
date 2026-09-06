import React, { useState } from 'react';
import {
  Laptop,
  Server,
  Globe,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Wifi,
  WifiOff,
  Lock,
  Search,
  ExternalLink,
  Layers,
  FileCode2,
  HardDrive,
  Cpu,
} from 'lucide-react';
import { ENVIRONMENTS, COMPARISON_ROWS, WORKFLOW_STEPS, SCENARIO_ITEMS } from './data/environmentData';
import { EnvironmentId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'matrix' | 'workflow' | 'scenarios'>('overview');
  const [selectedEnvFilter, setSelectedEnvFilter] = useState<EnvironmentId | 'all'>('all');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCENARIO_ITEMS[0].id);

  const selectedScenario = SCENARIO_ITEMS.find((s) => s.id === selectedScenarioId) || SCENARIO_ITEMS[0];

  const getEnvColor = (env: EnvironmentId) => {
    switch (env) {
      case 'dev':
        return '#4D96FF';
      case 'staging':
        return '#FFD93D';
      case 'prod':
        return '#6BCB77';
    }
  };

  const getEnvBorderClass = (env: EnvironmentId) => {
    switch (env) {
      case 'dev':
        return 'border-t-[#4D96FF] border-t-2';
      case 'staging':
        return 'border-t-[#FFD93D] border-t-2';
      case 'prod':
        return 'border-t-[#6BCB77] border-t-2';
    }
  };

  const filteredEnvironments = selectedEnvFilter === 'all'
    ? ENVIRONMENTS
    : ENVIRONMENTS.filter((e) => e.id === selectedEnvFilter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans selection:bg-[#4D96FF]/20 selection:text-white flex flex-col">
      {/* Top Notification Bar */}
      <div className="bg-[#111111] border-b border-[#222222] px-4 py-2 text-xs text-[#888888] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#6BCB77] animate-pulse"></span>
          <span className="font-mono text-[#AAAAAA]">STACK CONSTRAINTS:</span>
          <span className="text-[#E0E0E0] font-medium">LocalWP (Local Desktop) & HostGator (Remote Server) Only</span>
        </div>
        <div className="hidden sm:flex items-center space-x-2 text-[11px] text-[#666666]">
          <span>Simplified 3-Tier Web Architecture</span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-10 flex-grow flex flex-col">
        {/* Header section matching Elegant Dark */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-[#333333] pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-0.5 bg-[#1A1A1A] border border-[#333333] rounded text-[10px] font-mono text-[#4D96FF] uppercase tracking-widest">
                Web Environments 101
              </span>
              <span className="px-2 py-0.5 bg-[#1A1A1A] border border-[#333333] rounded text-[10px] font-mono text-[#888888] uppercase tracking-widest">
                LocalWP vs HostGator
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Environment Architecture
            </h1>
            <p className="text-[#888888] mt-2 uppercase tracking-[0.18em] text-xs font-semibold">
              Simplified Comparison: Local Website (LocalWP) vs. Test Website (HostGator) vs. Live Website (HostGator)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1.5 bg-[#141414] border border-[#333333] rounded-lg text-[11px] font-mono text-[#AAAAAA] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6BCB77]"></span>
              Status: All Systems Optimal
            </span>
          </div>
        </header>

        {/* Quick Summary Pill Row: The 30-Second Takeaway */}
        <div className="mb-8 bg-[#121212] border border-[#222222] rounded-xl p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#1C1C1C] border border-[#2D2D2D] text-[#FFD93D]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">The Golden Rule in 10 Seconds</h2>
              <p className="text-xs text-[#999999] mt-0.5">
                Build on <strong className="text-[#4D96FF]">LocalWP</strong> (Zero Risk) → Preview on <strong className="text-[#FFD93D]">HostGator Staging</strong> (Test Sandbox) → Deploy to <strong className="text-[#6BCB77]">HostGator Production</strong> (Live Customers).
              </p>
            </div>
          </div>

          {/* Quick filter buttons */}
          <div className="flex items-center gap-1.5 self-stretch lg:self-auto bg-[#0A0A0A] p-1 rounded-lg border border-[#262626]">
            <button
              id="filter-all-btn"
              onClick={() => setSelectedEnvFilter('all')}
              className={`px-3 py-1 text-xs rounded-md font-mono transition-colors ${
                selectedEnvFilter === 'all'
                  ? 'bg-[#222222] text-white font-medium shadow-sm'
                  : 'text-[#777777] hover:text-[#CCCCCC]'
              }`}
            >
              All 3
            </button>
            <button
              id="filter-dev-btn"
              onClick={() => setSelectedEnvFilter('dev')}
              className={`px-3 py-1 text-xs rounded-md font-mono transition-colors flex items-center gap-1.5 ${
                selectedEnvFilter === 'dev'
                  ? 'bg-[#16253B] text-[#4D96FF] border border-[#4D96FF]/30'
                  : 'text-[#777777] hover:text-[#4D96FF]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4D96FF]"></span>
              Dev
            </button>
            <button
              id="filter-staging-btn"
              onClick={() => setSelectedEnvFilter('staging')}
              className={`px-3 py-1 text-xs rounded-md font-mono transition-colors flex items-center gap-1.5 ${
                selectedEnvFilter === 'staging'
                  ? 'bg-[#2A2412] text-[#FFD93D] border border-[#FFD93D]/30'
                  : 'text-[#777777] hover:text-[#FFD93D]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD93D]"></span>
              Staging
            </button>
            <button
              id="filter-prod-btn"
              onClick={() => setSelectedEnvFilter('prod')}
              className={`px-3 py-1 text-xs rounded-md font-mono transition-colors flex items-center gap-1.5 ${
                selectedEnvFilter === 'prod'
                  ? 'bg-[#15271A] text-[#6BCB77] border border-[#6BCB77]/30'
                  : 'text-[#777777] hover:text-[#6BCB77]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6BCB77]"></span>
              Prod
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#222222] mb-8 space-x-1 sm:space-x-6 overflow-x-auto text-xs font-mono tracking-wider uppercase">
          <button
            id="tab-overview"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-2 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'border-[#4D96FF] text-white font-medium'
                : 'border-transparent text-[#666666] hover:text-[#AAAAAA]'
            }`}
          >
            <Layers className="w-4 h-4" />
            Side-by-Side Cards
          </button>
          <button
            id="tab-matrix"
            onClick={() => setActiveTab('matrix')}
            className={`pb-3 px-2 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'matrix'
                ? 'border-[#4D96FF] text-white font-medium'
                : 'border-transparent text-[#666666] hover:text-[#AAAAAA]'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            Simplified Comparison Matrix
          </button>
          <button
            id="tab-workflow"
            onClick={() => setActiveTab('workflow')}
            className={`pb-3 px-2 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'workflow'
                ? 'border-[#4D96FF] text-white font-medium'
                : 'border-transparent text-[#666666] hover:text-[#AAAAAA]'
            }`}
          >
            <ArrowRight className="w-4 h-4" />
            LocalWP → HostGator Workflow
          </button>
          <button
            id="tab-scenarios"
            onClick={() => setActiveTab('scenarios')}
            className={`pb-3 px-2 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'scenarios'
                ? 'border-[#4D96FF] text-white font-medium'
                : 'border-transparent text-[#666666] hover:text-[#AAAAAA]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            "Where Do I Do This?" Guide
          </button>
        </div>

        {/* TAB 1: OVERVIEW CARDS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className={`grid grid-cols-1 ${filteredEnvironments.length === 1 ? 'max-w-2xl mx-auto w-full' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
              {filteredEnvironments.map((env) => {
                const color = getEnvColor(env.id);
                return (
                  <div
                    key={env.id}
                    id={`env-card-${env.id}`}
                    className={`bg-[#141414] border border-[#222222] rounded-2xl p-6 sm:p-8 flex flex-col relative group transition-all duration-200 hover:border-[#333333] ${getEnvBorderClass(env.id)}`}
                  >
                    {/* Background Icon Silhouette */}
                    <div className="absolute top-0 right-0 p-5 opacity-5 pointer-events-none">
                      {env.id === 'dev' && <Laptop className="w-24 h-24 text-white" />}
                      {env.id === 'staging' && <Server className="w-24 h-24 text-white" />}
                      {env.id === 'prod' && <Globe className="w-24 h-24 text-white" />}
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-xs font-bold uppercase tracking-wider block"
                          style={{ color }}
                        >
                          {env.id === 'dev' ? 'Development' : env.id === 'staging' ? 'Testing & QA' : 'Live Launch'}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A1A1A] border border-[#2C2C2C] text-[#888888]">
                          {env.badgeText}
                        </span>
                      </div>
                      <h2 className="text-2xl font-medium text-white mb-1">{env.title}</h2>
                      <p className="text-[#666666] text-sm">{env.subtitle}</p>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-5 flex-grow">
                      {/* Tool & Platform */}
                      <div>
                        <p className="text-[10px] text-[#555555] uppercase tracking-widest mb-1 font-mono">Platform / Tool</p>
                        <p className="text-lg font-mono font-medium" style={{ color }}>
                          {env.tool}
                        </p>
                      </div>

                      {/* Tagline / Mission */}
                      <div className="p-3 rounded-lg bg-[#0E0E0E] border border-[#1E1E1E] text-xs text-[#AAAAAA] italic">
                        "{env.tagline}"
                      </div>

                      {/* Key Characteristics */}
                      <div className="py-4 border-y border-[#222222] space-y-3">
                        <p className="text-[10px] text-[#555555] uppercase tracking-widest mb-2 font-mono">Quick Facts</p>
                        
                        <div className="flex items-start text-xs text-[#CCCCCC]">
                          <span className="w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0" style={{ backgroundColor: color }}></span>
                          <div>
                            <span className="text-[#777777] font-mono">URL Example:</span>{' '}
                            <code className="text-white font-mono bg-[#1E1E1E] px-1.5 py-0.5 rounded text-[11px]">{env.urlExample}</code>
                          </div>
                        </div>

                        <div className="flex items-start text-xs text-[#CCCCCC]">
                          <span className="w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0" style={{ backgroundColor: color }}></span>
                          <div>
                            <span className="text-[#777777] font-mono">Risk Level:</span>{' '}
                            <span className={env.id === 'dev' ? 'text-[#4D96FF] font-medium' : env.id === 'staging' ? 'text-[#FFD93D] font-medium' : 'text-[#FF6B6B] font-medium'}>
                              {env.riskLevel}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start text-xs text-[#CCCCCC]">
                          <span className="w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0" style={{ backgroundColor: color }}></span>
                          <div>
                            <span className="text-[#777777] font-mono">Internet:</span>{' '}
                            <span className="text-white">
                              {env.internetRequired ? 'Required (Cloud Host)' : 'Not Required (100% Offline)'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start text-xs text-[#CCCCCC]">
                          <span className="w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0" style={{ backgroundColor: color }}></span>
                          <div>
                            <span className="text-[#777777] font-mono">Google SEO:</span>{' '}
                            <span className="text-white">{env.searchEngineStatus}</span>
                          </div>
                        </div>
                      </div>

                      {/* What you DO here */}
                      <div>
                        <p className="text-[10px] text-[#6BCB77] uppercase tracking-widest mb-2 font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          What You Do Here
                        </p>
                        <ul className="space-y-2 text-xs text-[#BBBBBB]">
                          {env.whatYouDoHere.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#6BCB77] mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What you NEVER do here */}
                      <div>
                        <p className="text-[10px] text-[#FF6B6B] uppercase tracking-widest mb-2 font-mono flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5" />
                          What You NEVER Do Here
                        </p>
                        <ul className="space-y-2 text-xs text-[#999999]">
                          {env.whatYouNeverDoHere.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#FF6B6B] mr-2">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom User Access footer matching Elegant Dark */}
                    <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-[#444444] uppercase tracking-widest mb-0.5 font-mono">Audience</p>
                        <p className="text-xs italic text-[#888888]">{env.audience}</p>
                      </div>
                      <div className="text-right font-mono text-[10px] text-[#555555]">
                        {env.id === 'dev' ? 'LOCAL DISK' : env.id === 'staging' ? 'HOSTGATOR SUBDOMAIN' : 'HOSTGATOR PUBLIC_HTML'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* HostGator Specific Implementation Box */}
            <div className="bg-[#121212] border border-[#222222] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-[#1B1B1B] border border-[#2A2A2A] text-[#FFD93D]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white">How This Maps Directly to HostGator & LocalWP</h3>
                  <p className="text-xs text-[#888888]">Practical folder and cPanel setup tips for your specific stack</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-[#161616] border border-[#242424]">
                  <span className="text-[#4D96FF] font-mono font-semibold block mb-1">1. LocalWP On Laptop</span>
                  <p className="text-[#AAAAAA] leading-relaxed">
                    Install LocalWP desktop app. Creates independent sites in your <code className="text-white font-mono bg-[#202020] px-1 rounded">~/Local Sites/</code> folder. Uses local Nginx/Apache and local MySQL. No HostGator server credentials needed during active code creation.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#161616] border border-[#242424]">
                  <span className="text-[#FFD93D] font-mono font-semibold block mb-1">2. HostGator Staging Subdomain</span>
                  <p className="text-[#AAAAAA] leading-relaxed">
                    In HostGator cPanel, create a Subdomain (e.g. <code className="text-white font-mono bg-[#202020] px-1 rounded">staging.mysite.com</code>). Turn on <strong className="text-white">Directory Privacy</strong> in cPanel to require a username/password so Google crawlers cannot index your test site.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#161616] border border-[#242424]">
                  <span className="text-[#6BCB77] font-mono font-semibold block mb-1">3. HostGator Live (public_html)</span>
                  <p className="text-[#AAAAAA] leading-relaxed">
                    Your live domain files live inside HostGator’s <code className="text-white font-mono bg-[#202020] px-1 rounded">/public_html/</code> directory. Only transfer thoroughly tested themes and plugins from Staging to here. Keep automated backups running.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SIMPLIFIED COMPARISON MATRIX */}
        {activeTab === 'matrix' && (
          <div className="space-y-6">
            <div className="bg-[#141414] border border-[#222222] rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-[#222222]">
                <h2 className="text-xl font-medium text-white">Direct Feature Comparison</h2>
                <p className="text-xs text-[#888888] mt-1">
                  Simplified side-by-side checklist of the three environments using only LocalWP and HostGator.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#262626] bg-[#0F0F0F] text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                      <th className="py-3.5 px-4 sm:px-6 w-1/4">Feature / Question</th>
                      <th className="py-3.5 px-4 sm:px-6 w-1/4 text-[#4D96FF]">
                        <div className="flex items-center gap-1.5">
                          <Laptop className="w-3.5 h-3.5" />
                          LocalWP (Development)
                        </div>
                      </th>
                      <th className="py-3.5 px-4 sm:px-6 w-1/4 text-[#FFD93D]">
                        <div className="flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5" />
                          HostGator (Staging)
                        </div>
                      </th>
                      <th className="py-3.5 px-4 sm:px-6 w-1/4 text-[#6BCB77]">
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" />
                          HostGator (Production)
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1D1D1D] text-xs">
                    {COMPARISON_ROWS.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#181818] transition-colors"
                      >
                        <td className="py-3.5 px-4 sm:px-6 font-medium text-[#E0E0E0]">
                          <div>{row.feature}</div>
                          <span className="text-[10px] font-mono text-[#555555] uppercase tracking-wider">
                            {row.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#AAAAAA] font-mono text-[11px]">
                          {row.dev}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#AAAAAA] font-mono text-[11px]">
                          {row.staging}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-white font-mono text-[11px]">
                          {row.prod}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick takeaway summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#121212] border border-[#222222] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-[#4D96FF] text-xs font-mono font-semibold mb-2">
                  <WifiOff className="w-4 h-4" />
                  LocalWP Advantage
                </div>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Fastest possible feedback loop. Zero upload time for big files, no internet required, and zero chance of bringing down the real site.
                </p>
              </div>

              <div className="bg-[#121212] border border-[#222222] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-[#FFD93D] text-xs font-mono font-semibold mb-2">
                  <Lock className="w-4 h-4" />
                  HostGator Staging Advantage
                </div>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Real server hardware test. Verifies that HostGator's exact PHP version and MySQL settings match your code, while giving clients an interactive demo link.
                </p>
              </div>

              <div className="bg-[#121212] border border-[#222222] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-[#6BCB77] text-xs font-mono font-semibold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  HostGator Production Rule
                </div>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Treat like gold. No experimentation, no live editing in the cPanel file manager without a backup, and SSL caching always enforced.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WORKFLOW PIPELINE */}
        {activeTab === 'workflow' && (
          <div className="space-y-8">
            <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-[#4D96FF] text-xs font-mono uppercase tracking-widest block mb-1">
                  Step-By-Step Release Cycle
                </span>
                <h2 className="text-2xl font-light text-white">
                  The Safe LocalWP → HostGator Pipeline
                </h2>
                <p className="text-xs text-[#888888] mt-1">
                  How a feature moves from your laptop safely into the hands of real customers.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const color = getEnvColor(step.env);
                  return (
                    <div
                      key={step.stepNumber}
                      className={`bg-[#0F0F0F] border border-[#222222] rounded-xl p-6 flex flex-col justify-between relative ${getEnvBorderClass(step.env)}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs"
                            style={{ backgroundColor: `${color}20`, color }}
                          >
                            0{step.stepNumber}
                          </span>
                          <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                            {step.tool}
                          </span>
                        </div>

                        <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                        <p className="text-xs text-[#999999] leading-relaxed mb-4">
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#1C1C1C]">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-[#555555] mb-1">
                          Key Milestone
                        </p>
                        <p className="text-xs font-medium text-[#E0E0E0]">{step.action}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Practical Migration / Sync Guide */}
            <div className="bg-[#121212] border border-[#222222] rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#4D96FF]" />
                How to Move Websites Between LocalWP and HostGator
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#AAAAAA]">
                <div className="space-y-3">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4D96FF]"></span>
                    Recommended Tool: Migration Plugin (Easiest)
                  </h4>
                  <p>
                    Use standard WordPress migration plugins like <strong className="text-white">All-in-One WP Migration</strong> or <strong className="text-white">WP Migrate DB</strong>.
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-[#888888]">
                    <li>Export your site from LocalWP as a single file.</li>
                    <li>Log into your HostGator Staging WordPress dashboard and click "Import".</li>
                    <li>The plugin automatically updates URLs from <code className="text-white font-mono bg-[#1E1E1E] px-1 rounded">mysite.local</code> to <code className="text-white font-mono bg-[#1E1E1E] px-1 rounded">staging.mysite.com</code>.</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFD93D]"></span>
                    HostGator cPanel Staging (Softaculous)
                  </h4>
                  <p>
                    If you created your WordPress site through HostGator cPanel's <strong className="text-white">Softaculous App Installer</strong>:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-[#888888]">
                    <li>Click the "Create Staging" icon next to your live site inside Softaculous.</li>
                    <li>Test changes on the staging clone.</li>
                    <li>When ready, click "Push to Live" inside Softaculous to sync back to Production.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: "WHERE DO I DO THIS?" DECISION HELPER */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            <div className="bg-[#141414] border border-[#222222] rounded-2xl p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-[#FFD93D] text-xs font-mono uppercase tracking-widest block mb-1">
                  Interactive Decision Helper
                </span>
                <h2 className="text-2xl font-light text-white">
                  "Where Should I Do This?"
                </h2>
                <p className="text-xs text-[#888888] mt-1">
                  Pick a real-world task to see whether you should perform it in LocalWP, HostGator Staging, or HostGator Production.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Scenario List */}
                <div className="lg:col-span-5 space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#555555] mb-2">
                    Common Real-World Situations:
                  </p>
                  {SCENARIO_ITEMS.map((item) => {
                    const isSelected = item.id === selectedScenarioId;
                    const envColor = getEnvColor(item.recommendedEnv);
                    return (
                      <button
                        key={item.id}
                        id={`scenario-btn-${item.id}`}
                        onClick={() => setSelectedScenarioId(item.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#1C1C1C] border-[#3D3D3D] text-white shadow-lg'
                            : 'bg-[#101010] border-[#202020] text-[#888888] hover:text-[#CCCCCC] hover:border-[#2A2A2A]'
                        }`}
                      >
                        <span className="line-clamp-2">{item.question}</span>
                        <span
                          className="font-mono text-[10px] px-2 py-0.5 rounded flex-shrink-0"
                          style={{
                            backgroundColor: `${envColor}20`,
                            color: envColor,
                          }}
                        >
                          {item.recommendedEnv === 'dev'
                            ? 'LocalWP'
                            : item.recommendedEnv === 'staging'
                            ? 'Staging'
                            : 'Prod'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Scenario Detail Card */}
                <div className="lg:col-span-7 bg-[#0E0E0E] border border-[#222222] rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                        Task Recommendation
                      </span>
                      <span
                        className="font-mono text-xs font-semibold px-2.5 py-1 rounded border"
                        style={{
                          borderColor: `${getEnvColor(selectedScenario.recommendedEnv)}40`,
                          backgroundColor: `${getEnvColor(selectedScenario.recommendedEnv)}15`,
                          color: getEnvColor(selectedScenario.recommendedEnv),
                        }}
                      >
                        Use:{' '}
                        {selectedScenario.recommendedEnv === 'dev'
                          ? 'Development (LocalWP)'
                          : selectedScenario.recommendedEnv === 'staging'
                          ? 'Staging (HostGator Subdomain)'
                          : 'Production (HostGator Live)'}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-white mb-4">
                      "{selectedScenario.question}"
                    </h3>

                    <div className="p-4 rounded-lg bg-[#161616] border border-[#242424] mb-4">
                      <p className="text-xs text-[#CCCCCC] leading-relaxed">
                        {selectedScenario.explanation}
                      </p>
                    </div>

                    {selectedScenario.cautionNotice && (
                      <div className="p-3 rounded-lg bg-[#2A1A1A] border border-[#442222] text-xs text-[#FF8888] flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>{selectedScenario.cautionNotice}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-[#1C1C1C] flex items-center justify-between text-xs text-[#666666]">
                    <span>HostGator / LocalWP Best Practice</span>
                    <span className="font-mono text-[11px] text-[#888888]">
                      Risk Mitigation First
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer matching Elegant Dark */}
        <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#222222] text-[10px] text-[#555555] uppercase tracking-[0.2em]">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#4D96FF] mr-3"></span>
            <span className="mr-3 font-mono text-[#888888]">Phase 01</span>
            <span>Iteration & Build (LocalWP)</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#FFD93D] mr-3"></span>
            <span className="mr-3 font-mono text-[#888888]">Phase 02</span>
            <span>Validation & QA (HostGator Test)</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#6BCB77] mr-3"></span>
            <span className="mr-3 font-mono text-[#888888]">Phase 03</span>
            <span>Live Customers (HostGator Prod)</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

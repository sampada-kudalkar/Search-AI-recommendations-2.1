import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Check, AlertTriangle } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'
import SourceReferenceRow from './SourceReferenceRow'
import ContentGapTag from './ContentGapTag'
import GeneratedAssetCard from './GeneratedAssetCard'

const TABS = ['Why it works', 'Implementation', 'References', 'Intelligence']

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { recommendations, completeRec, activeDetailTab, setDetailTab } = useAppStore()

  const rec = recommendations.find(r => r.id === id)
  const activeTab = activeDetailTab[id!] ?? 0 // default to Why it works
  const setTab = (i: number) => setDetailTab(id!, i)

  if (!rec) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 text-text-secondary gap-3">
        <AlertTriangle size={32} />
        <p className="text-[16px]">Recommendation not found</p>
        <button onClick={() => navigate('/recommendations')} className="text-primary text-[14px]">← Back to recommendations</button>
      </div>
    )
  }


  return (
    <>
      <div className="flex flex-col flex-1 min-h-0 bg-white">
        {/* Summary banner — Figma 33-8313 */}
        {(() => {
          const currentScore = useAppStore.getState().metrics.searchAiScore
          const potentialScore = Math.min(100, currentScore + 8)
          const currentPct = currentScore
          const potentialPct = potentialScore
          const acceptedDate = rec.acceptedAt
            ? new Date(rec.acceptedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            : null

          return (
            <div className="mx-6 mt-4 flex-shrink-0 flex gap-4 items-stretch">
              {/* Left card */}
              <div className="flex-[7] border border-[#eaeaea] rounded-[8px] p-6 flex flex-col gap-3">
                {/* Chips */}
                <div className="flex items-center gap-2">
                  <span className="text-[12px] px-2 py-1 rounded-[4px] bg-[#eaeaea] text-[#212121] leading-[18px] tracking-[-0.24px]">{rec.category}</span>
                  {rec.effort === 'Quick win' && (
                    <span className="text-[12px] px-2 py-1 rounded-[4px] bg-[#f1faf0] text-[#377e2c] leading-[18px] tracking-[-0.24px]">Quick wins</span>
                  )}
                </div>
                {/* Title + description */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] text-[#212121] leading-[22px] tracking-[-0.28px]">{rec.title}</p>
                  <p className="text-[14px] text-[#555] leading-[20px] tracking-[-0.28px]">{rec.description}</p>
                </div>
                {/* Meta row */}
                <div className="flex items-center gap-3">
                  {rec.assignedTo && (
                    <div className="flex items-center gap-1">
                      {/* person icon */}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                        <mask id="pm" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                          <rect width="16" height="16" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#pm)">
                          <path d="M7.99985 7.79491C7.42486 7.79491 6.93668 7.59422 6.53529 7.19284C6.1339 6.79145 5.9332 6.30326 5.9332 5.72827C5.9332 5.15327 6.1339 4.66508 6.53529 4.2637C6.93668 3.86232 7.42486 3.66162 7.99985 3.66162C8.57484 3.66162 9.06303 3.86232 9.46442 4.2637C9.86581 4.66508 10.0665 5.15327 10.0665 5.72827C10.0665 6.30326 9.86581 6.79145 9.46442 7.19284C9.06303 7.59422 8.57484 7.79491 7.99985 7.79491ZM3.5332 11.459V11.1231C3.5332 10.9189 3.5941 10.7221 3.7159 10.5328C3.83769 10.3434 4.00799 10.1796 4.22679 10.0411C4.80799 9.7069 5.4188 9.4507 6.05922 9.2725C6.69964 9.0943 7.34536 9.0052 7.99639 9.0052C8.64741 9.0052 9.29429 9.0943 9.93702 9.2725C10.5798 9.4507 11.1917 9.7069 11.7729 10.0411C11.9917 10.1684 12.162 10.3296 12.2838 10.5244C12.4056 10.7193 12.4665 10.9189 12.4665 11.1231V11.459C12.4665 11.7035 12.381 11.9112 12.21 12.0821C12.0389 12.253 11.8311 12.3385 11.5864 12.3385H4.40795C4.16324 12.3385 3.95628 12.253 3.78705 12.0821C3.61782 11.9112 3.5332 11.7035 3.5332 11.459ZM4.39985 11.4718H11.5999V11.1231C11.5999 11.0528 11.5745 10.9866 11.5238 10.9246C11.4731 10.8626 11.4031 10.8099 11.314 10.7667C10.8285 10.4727 10.3039 10.25 9.74032 10.0988C9.1767 9.94748 8.59654 9.87184 7.99985 9.87184C7.40316 9.87184 6.82301 9.94748 6.25939 10.0988C5.69576 10.25 5.17122 10.4727 4.68575 10.7667C4.59601 10.8282 4.52593 10.8872 4.4755 10.9435C4.42507 10.9999 4.39985 11.0597 4.39985 11.1231V11.4718ZM8.00339 6.92827C8.33436 6.92827 8.61652 6.81042 8.84985 6.57472C9.08319 6.33903 9.19985 6.0557 9.19985 5.72472C9.19985 5.39375 9.08201 5.1116 8.84632 4.87827C8.61062 4.64494 8.32729 4.52827 7.99632 4.52827C7.66534 4.52827 7.38319 4.64612 7.14985 4.88181C6.91652 5.11751 6.79985 5.40084 6.79985 5.73181C6.79985 6.06278 6.9177 6.34494 7.15339 6.57827C7.38909 6.8116 7.67242 6.92827 8.00339 6.92827Z" fill="#555"/>
                        </g>
                      </svg>
                      <span className="text-[13px] text-[#555] whitespace-nowrap">{rec.assignedTo}</span>
                    </div>
                  )}
                  {acceptedDate && (
                    <div className="flex items-center gap-1">
                      {/* calendar icon */}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                        <mask id="cm" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                          <rect width="16" height="16" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#cm)">
                          <path d="M3.8052 14.0667C3.50511 14.0667 3.25145 13.9611 3.04423 13.75C2.83701 13.5389 2.7334 13.2872 2.7334 12.9949V4.60516C2.7334 4.31285 2.83701 4.06114 3.04423 3.85003C3.25145 3.63892 3.50511 3.53336 3.8052 3.53336H5.26162V2.30258C5.26162 2.17532 5.30382 2.06915 5.38823 1.98406C5.47264 1.89898 5.57798 1.85645 5.70425 1.85645C5.83052 1.85645 5.93703 1.89898 6.02378 1.98406C6.11053 2.06915 6.1539 2.17532 6.1539 2.30258V3.53336H9.87183V2.28976C9.87183 2.16677 9.91297 2.06381 9.99525 1.98086C10.0775 1.89792 10.1796 1.85645 10.3016 1.85645C10.4236 1.85645 10.5269 1.89792 10.6115 1.98086C10.6962 2.06381 10.7385 2.16677 10.7385 2.28976V3.53336H12.1949C12.495 3.53336 12.7486 3.63892 12.9559 3.85003C13.1631 4.06114 13.2667 4.31285 13.2667 4.60516V12.9949C13.2667 13.2872 13.1631 13.5389 12.9559 13.75C12.7486 13.9611 12.495 14.0667 12.1949 14.0667H3.8052ZM3.8052 13.2H12.1949C12.2462 13.2 12.2932 13.1786 12.3359 13.1359C12.3787 13.0932 12.4 13.0462 12.4 12.9949V7.40516H3.60005V12.9949C3.60005 13.0462 3.62141 13.0932 3.66415 13.1359C3.70689 13.1786 3.75391 13.2 3.8052 13.2ZM3.60005 6.53851H12.4V4.60516C12.4 4.55387 12.3787 4.50686 12.3359 4.46411C12.2932 4.42138 12.2462 4.40001 12.1949 4.40001H3.8052C3.75391 4.40001 3.70689 4.42138 3.66415 4.46411C3.62141 4.50686 3.60005 4.55387 3.60005 4.60516V6.53851ZM8.00357 9.6513C7.8602 9.6513 7.73659 9.60055 7.63275 9.49905C7.5289 9.39753 7.47698 9.2751 7.47698 9.13173C7.47698 8.98837 7.52773 8.86477 7.62923 8.76093C7.73074 8.65708 7.85318 8.60516 7.99653 8.60516C8.1399 8.60516 8.2635 8.65591 8.36735 8.75741C8.47119 8.85892 8.52312 8.98136 8.52312 9.12471C8.52312 9.26808 8.47237 9.39168 8.37087 9.49553C8.26935 9.59937 8.14692 9.6513 8.00357 9.6513ZM5.40357 9.6513C5.2602 9.6513 5.13659 9.60055 5.03275 9.49905C4.9289 9.39753 4.87698 9.2751 4.87698 9.13173C4.87698 8.98837 4.92773 8.86477 5.02923 8.76093C5.13074 8.65708 5.25318 8.60516 5.39653 8.60516C5.5399 8.60516 5.6635 8.65591 5.76735 8.75741C5.87119 8.85892 5.92312 8.98136 5.92312 9.12471C5.92312 9.26808 5.87237 9.39168 5.77087 9.49553C5.66935 9.59937 5.54692 9.6513 5.40357 9.6513ZM10.6036 9.6513C10.4602 9.6513 10.3366 9.60055 10.2327 9.49905C10.1289 9.39753 10.077 9.2751 10.077 9.13173C10.077 8.98837 10.1277 8.86477 10.2292 8.76093C10.3307 8.65708 10.4532 8.60516 10.5965 8.60516C10.7399 8.60516 10.8635 8.65591 10.9673 8.75741C11.0712 8.85892 11.1231 8.98136 11.1231 9.12471C11.1231 9.26808 11.0724 9.39168 10.9709 9.49553C10.8694 9.59937 10.7469 9.6513 10.6036 9.6513ZM8.00357 12C7.8602 12 7.73659 11.9493 7.63275 11.8477C7.5289 11.7462 7.47698 11.6238 7.47698 11.4804C7.47698 11.3371 7.52773 11.2135 7.62923 11.1096C7.73074 11.0058 7.85318 10.9539 7.99653 10.9539C8.1399 10.9539 8.2635 11.0046 8.36735 11.1061C8.47119 11.2076 8.52312 11.3301 8.52312 11.4734C8.52312 11.6168 8.47237 11.7404 8.37087 11.8442C8.26935 11.9481 8.14692 12 8.00357 12ZM5.40357 12C5.2602 12 5.13659 11.9493 5.03275 11.8477C4.9289 11.7462 4.87698 11.6238 4.87698 11.4804C4.87698 11.3371 4.92773 11.2135 5.02923 11.1096C5.13074 11.0058 5.25318 10.9539 5.39653 10.9539C5.5399 10.9539 5.6635 11.0046 5.76735 11.1061C5.87119 11.2076 5.92312 11.3301 5.92312 11.4734C5.92312 11.6168 5.87237 11.7404 5.77087 11.8442C5.66935 11.9481 5.54692 12 5.40357 12ZM10.6036 12C10.4602 12 10.3366 11.9493 10.2327 11.8477C10.1289 11.7462 10.077 11.6238 10.077 11.4804C10.077 11.3371 10.1277 11.2135 10.2292 11.1096C10.3307 11.0058 10.4532 10.9539 10.5965 10.9539C10.7399 10.9539 10.8635 11.0046 10.9673 11.1061C11.0712 11.2076 11.1231 11.3301 11.1231 11.4734C11.1231 11.6168 11.0724 11.7404 10.9709 11.8442C10.8694 11.9481 10.7469 12 10.6036 12Z" fill="#555"/>
                        </g>
                      </svg>
                      <span className="text-[13px] text-[#555] whitespace-nowrap">Accepted on {acceptedDate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right card — Score impact */}
              <div className="flex-[3] border border-[#eaeaea] rounded-[8px] px-7 py-5 flex flex-col gap-2 min-w-0">
                <p className="text-[18px] text-[#555] leading-[26px]">Score impact</p>
                {/* KPIs */}
                <div className="flex items-end gap-5">
                  <div className="flex flex-col">
                    <span className="text-[32px] text-[#212121] leading-[48px] tracking-[-0.64px]">{currentScore}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#1976d2]" />
                      <span className="text-[12px] text-[#555]">Current score</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[32px] text-[#212121] leading-[48px] tracking-[-0.64px]">{potentialScore}</span>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#377e2c]" />
                      <span className="text-[12px] text-[#555]">Potential impact</span>
                    </div>
                  </div>
                </div>
                {/* Dual progress bar */}
                <div className="relative mt-2 h-6 w-full">
                  {/* Gray track — full width */}
                  <div className="absolute left-0 right-0 top-[9px] h-[4px] rounded-full bg-[#eaeaea]" />
                  {/* Green bar (goal — full width, underneath) */}
                  <div className="absolute left-0 right-0 top-[9px] h-[4px] rounded-full bg-[#7ed321]" />
                  {/* Blue bar (current — shorter, on top) */}
                  <div
                    className="absolute left-0 top-[9px] h-[4px] rounded-full bg-[#09f]"
                    style={{ width: `${currentPct}%` }}
                  />
                  {/* Blue dot marker — current score */}
                  <div
                    className="absolute top-[3px] w-4 h-4 rounded-full bg-[#1976d2] border-2 border-white"
                    style={{ left: `calc(${currentPct}% - 8px)` }}
                  />
                  {/* Green dot marker — anchored to right end */}
                  <div className="absolute top-[3px] right-0 w-4 h-4 rounded-full bg-[#377e2c] border-2 border-white" />
                </div>
              </div>
            </div>
          )
        })()}

        {/* Tabs */}
        <div className="flex border-b border-border-primary px-6 mt-4 flex-shrink-0">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setTab(i)}
              className={`px-4 py-2.5 text-[14px] border-b-2 transition-all ${
                activeTab === i
                  ? 'text-primary border-primary font-medium'
                  : 'text-text-secondary border-transparent hover:text-text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto py-5">
        <div className="w-[70%] mx-auto">

          {/* TAB 0: Why it works */}
          {activeTab === 0 && (
            <div className="fade-in flex flex-col gap-3">
              {/* Card 1 — Why this works */}
              <div className="border border-[#eaeaea] rounded-[8px] p-5 flex flex-col gap-3">
                <p className="text-[14px] text-[#212121] leading-[22px] tracking-[-0.28px]">Why this works</p>
                <ul className="list-disc pl-6 flex flex-col gap-1">
                  {rec.whyItWorks.map((point, i) => (
                    <li key={i} className="text-[14px] text-[#212121] leading-[22px] tracking-[-0.28px]">{point}</li>
                  ))}
                </ul>
              </div>

              {/* Card 2 — Why does it matter */}
              <div className="border border-[#eaeaea] rounded-[8px] p-5 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] text-[#212121] leading-[22px] tracking-[-0.28px]">Why does it matter?</p>
                  <p className="text-[14px] text-[#555] leading-[20px] tracking-[-0.28px]">
                    When someone asks an AI <em>"{rec.promptsTriggeringThis[0]}"</em> — these businesses are showing up instead of you:
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {rec.competitors.map(c => (
                    <div key={c.id} className="border border-[#eaeaea] rounded-[8px] p-4 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-[15px] flex-shrink-0">
                        {c.name[0]}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="text-[14px] text-[#212121] leading-[20px] tracking-[-0.28px]">{c.name}</p>
                        <p className="text-[14px] text-[#555] leading-[20px] tracking-[-0.28px]">
                          Cited {c.totalCitations} times · {c.whyTheyWin}{' '}
                          <span className="text-[#1976d2] cursor-pointer hover:underline">View citations</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: Implementation — vertical stepper */}
          {activeTab === 1 && (
            <div className="fade-in">
              <div className="border border-[#e5e9f0] rounded-[8px] p-5">
                {rec.checklist.map((step, idx) => {
                  const isLast = idx === rec.checklist.length - 1
                  const hasAsset = step.ctaAction === 'approve_asset' && rec.generatedAsset
                  return (
                    <div key={step.id} className="flex gap-3 items-stretch">
                      {/* Left col: badge + connector line */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-5 h-5 border border-[#eaeaea] rounded-full flex items-center justify-center text-[12px] text-[#555] leading-none flex-shrink-0">
                          {idx + 1}
                        </div>
                        {!isLast && <div className="w-px flex-1 bg-[#eaeaea] mt-1" />}
                      </div>

                      {/* Right col: step content */}
                      <div className={`flex flex-col gap-2 flex-1 min-w-0 ${!isLast ? 'pb-5' : ''}`}>
                        <p className="text-[14px] text-[#212121] leading-[20px]">{step.label}</p>
                        <p className="text-[14px] text-[#555] leading-[20px]">{step.description}</p>

                        {/* Purple box — GeneratedAssetCard embedded in the approve step */}
                        {hasAsset && (
                          <div className="mt-1">
                            <GeneratedAssetCard asset={rec.generatedAsset!} recId={rec.id} />
                            {/* Action buttons below asset */}
                            <div className="flex items-center gap-1.5 mt-2">
                              <button className="h-8 px-3 bg-[#1976d2] text-white text-[12px] rounded-[4px] hover:bg-[#1565c0] transition-colors">
                                Download
                              </button>
                              <button className="w-8 h-8 border border-[#e5e9f0] rounded-[4px] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors" title="View code">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                                </svg>
                              </button>
                              <button className="w-8 h-8 border border-[#e5e9f0] rounded-[4px] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors" title="Edit">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Mark as complete button on last step */}
                        {isLast && (
                          <div className="mt-1">
                            <button
                              onClick={() => completeRec(rec.id)}
                              disabled={rec.status === 'completed'}
                              className={`h-8 px-3 text-[12px] rounded-[4px] transition-colors ${
                                rec.status === 'completed'
                                  ? 'bg-green-bg text-green-text border border-green-text/30 cursor-default'
                                  : 'bg-[#1976d2] text-white hover:bg-[#1565c0] cursor-pointer'
                              }`}
                            >
                              {rec.status === 'completed' ? '✓ Completed' : 'Mark as complete'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* TAB 2: References */}
          {activeTab === 2 && (
            <div className="max-w-3xl fade-in">
              {/* Source gap callout */}
              <div className="bg-orange-bg border border-orange-text/20 rounded-md px-4 py-3 mb-4 flex items-start gap-2">
                <AlertTriangle size={16} className="text-orange-text flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-medium text-orange-text mb-0.5">Source gap detected</p>
                  <p className="text-[13px] text-text-secondary">
                    Your competitors are cited from Zocdoc ({rec.sources.filter(s => s.platform === 'Zocdoc').reduce((a, b) => a + b.referencedInAnswers, 0)}×) and Healthgrades ({rec.sources.filter(s => s.platform === 'Healthgrades').reduce((a, b) => a + b.referencedInAnswers, 0)}×). You are not listed on these platforms.
                  </p>
                </div>
              </div>

              <h2 className="text-[16px] font-medium text-text-primary mb-3">Competitor source references</h2>
              {Object.entries(
                rec.sources.reduce((acc, s) => {
                  if (!acc[s.competitorName]) acc[s.competitorName] = []
                  acc[s.competitorName].push(s)
                  return acc
                }, {} as Record<string, typeof rec.sources>)
              ).map(([name, sources]) => (
                <div key={name} className="mb-5">
                  <p className="text-[13px] font-medium text-text-secondary mb-2">{name}</p>
                  <div className="bg-white border border-border-primary rounded-md px-3">
                    {sources.map((s, i) => <SourceReferenceRow key={i} source={s} />)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Intelligence */}
          {activeTab === 3 && (
            <div className="max-w-3xl fade-in">
              {/* Prompts triggering */}
              <h2 className="text-[16px] font-medium text-text-primary mb-3">Prompts triggering this recommendation</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {rec.promptsTriggeringThis.map((p, i) => (
                  <span key={i} className="text-[13px] px-3 py-1.5 rounded-full bg-blue-bg text-primary border border-primary/20">
                    "{p}"
                  </span>
                ))}
              </div>

              {/* Content gaps */}
              <h2 className="text-[16px] font-medium text-text-primary mb-3">Content gaps — phrases AI uses for your competitors</h2>
              {rec.contentGaps.map((gap, i) => (
                <ContentGapTag key={i} gap={gap} />
              ))}

              {/* LLM coverage gap */}
              <h2 className="text-[16px] font-medium text-text-primary mb-3">LLM coverage gap</h2>
              <div className="bg-white border border-border-primary rounded-md p-4 mb-4">
                <p className="text-[14px] text-text-secondary mb-3">{rec.llmCoverageGap.summary}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px] text-text-secondary">Not citing you:</span>
                  {rec.llmCoverageGap.platforms.map(p => (
                    <span key={p} className="text-[12px] px-2 py-0.5 rounded-sm bg-red-bg text-red-text border border-red-text/20">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
        </div>
      </div>

    </>
  )
}

import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MoreVertical, Sparkles, Lock, Check, ChevronRight, AlertTriangle } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'
import StatusBadge from '../recommendations/StatusBadge'
import EffortBadge from '../recommendations/EffortBadge'
import AssignModal from '../recommendations/AssignModal'
import ChecklistItem from './ChecklistItem'
import CompetitorCard from './CompetitorCard'
import SourceReferenceRow from './SourceReferenceRow'
import ContentGapTag from './ContentGapTag'
import GeneratedAssetCard from './GeneratedAssetCard'

const TABS = ['Why it works', 'Implementation', 'References', 'Intelligence']

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { recommendations, rejectRec, completeRec, toggleChecklistItem, activeDetailTab, setDetailTab } = useAppStore()
  const [showAssign, setShowAssign] = useState(false)

  const rec = recommendations.find(r => r.id === id)
  const activeTab = activeDetailTab[id!] ?? 1 // default to Implementation
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

  const isPending = rec.status === 'pending'
  const allManualDone = rec.checklist.filter(s => !s.autoCompleted).every(s => s.completed)
  const completedCount = rec.checklist.filter(s => s.completed).length

  return (
    <>
      <div className="flex flex-col flex-1 min-h-0 bg-white">
        {/* Back bar */}
        <div className="flex items-center gap-3 px-6 py-3 border-b border-border-primary flex-shrink-0">
          <button
            onClick={() => navigate('/recommendations')}
            className="flex items-center gap-1.5 text-[14px] text-text-secondary hover:text-text-primary transition-all"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-text-disabled">/</span>
          <span className="text-[14px] text-text-secondary truncate">{rec.title}</span>
        </div>

        {/* Header */}
        <div className="px-6 py-4 border-b border-border-primary flex-shrink-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h1 className="text-[20px] font-normal text-text-primary leading-[28px] flex-1">{rec.title}</h1>
            <button className="text-text-secondary hover:text-text-primary mt-0.5 flex-shrink-0">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[12px] px-2 py-0.5 rounded-sm bg-selected text-text-secondary">{rec.category}</span>
            <EffortBadge effort={rec.effort} />
            <StatusBadge status={rec.status} />
            <span className="text-[12px] px-2 py-0.5 rounded-sm bg-green-bg text-green-text">{rec.impactLabel}</span>
            {rec.assignedTo && (
              <span className="text-[12px] text-text-secondary">→ {rec.assignedTo}</span>
            )}
          </div>
        </div>

        {/* AI Coach banner */}
        <div className="mx-6 mt-4 flex-shrink-0">
          <div className="bg-ai-purple-bg border border-ai-purple-border rounded-md px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <path d="M8 0L9.5 6H16L10.5 9.5L12.5 16L8 12L3.5 16L5.5 9.5L0 6H6.5L8 0Z" fill="#6834b7"/>
              </svg>
              <div>
                <p className="text-[14px] font-medium text-ai-purple">
                  This task could move your score from {useAppStore.getState().metrics.searchAiScore} → {Math.min(100, useAppStore.getState().metrics.searchAiScore + 8)}
                </p>
                <p className="text-[13px] text-text-secondary">
                  {rec.llmCoverageGap.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

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
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* TAB 0: Why it works */}
          {activeTab === 0 && (
            <div className="max-w-3xl fade-in">
              <h2 className="text-[16px] font-medium text-text-primary mb-3">Why this works</h2>
              <ul className="flex flex-col gap-2 mb-6">
                {rec.whyItWorks.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-text-primary">
                    <span className="w-5 h-5 rounded-full bg-green-bg flex items-center justify-center text-green-text flex-shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <h2 className="text-[16px] font-medium text-text-primary mb-1">Why does it matter?</h2>
              <p className="text-[13px] text-text-secondary mb-3">
                When someone asks AI <em>"{rec.promptsTriggeringThis[0]}"</em> — these businesses show up instead of you:
              </p>
              <div className="flex flex-col gap-3">
                {rec.competitors.map(c => (
                  <CompetitorCard key={c.id} competitor={c} />
                ))}
              </div>
            </div>
          )}

          {/* TAB 1: Implementation */}
          {activeTab === 1 && (
            <div className="max-w-3xl fade-in">
              {isPending ? (
                /* LOCKED state */
                <div className="relative">
                  <div className="filter blur-sm pointer-events-none select-none">
                    {rec.checklist.map(step => (
                      <div key={step.id} className="flex items-start gap-3 py-3 border-b border-border-primary">
                        <div className="w-5 h-5 rounded-sm border-2 border-border-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[14px] font-medium text-text-primary">{step.label}</p>
                          <p className="text-[13px] text-text-secondary">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-md">
                    <div className="flex flex-col items-center gap-4 p-6 text-center max-w-sm">
                      <div className="w-14 h-14 rounded-full bg-selected flex items-center justify-center">
                        <Lock size={24} className="text-text-secondary" />
                      </div>
                      <div>
                        <p className="text-[16px] font-medium text-text-primary mb-1">Accept this task to unlock your action steps</p>
                        <p className="text-[14px] text-text-secondary">Your personalized implementation checklist is ready.</p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => rejectRec(rec.id)}
                          className="flex items-center gap-1.5 px-4 py-2 text-[14px] text-text-secondary border border-border-primary rounded-sm hover:bg-red-bg hover:text-red-text transition-all"
                        >
                          Skip this task
                        </button>
                        <button
                          onClick={() => setShowAssign(true)}
                          className="flex items-center gap-1.5 px-4 py-2 text-[14px] text-white bg-ai-purple rounded-sm hover:bg-ai-purple/90 transition-all"
                        >
                          <Check size={15} /> Accept this task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* UNLOCKED state */
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[16px] font-medium text-text-primary">Your action steps</h2>
                    <span className="text-[13px] text-text-secondary">{completedCount}/{rec.checklist.length} completed</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-border-primary rounded-full mb-4 overflow-hidden">
                    <div
                      className="h-full bg-ai-purple rounded-full transition-all duration-500"
                      style={{ width: `${(completedCount / rec.checklist.length) * 100}%` }}
                    />
                  </div>

                  {rec.checklist.map(step => (
                    <ChecklistItem
                      key={step.id}
                      step={step}
                      onToggle={() => toggleChecklistItem(rec.id, step.id)}
                      onCta={() => {
                        if (step.ctaAction === 'approve_asset') {
                          useAppStore.getState().approveAsset(rec.id)
                        }
                      }}
                    />
                  ))}

                  {/* Generated asset */}
                  {rec.generatedAsset && (
                    <div className="mt-4">
                      <h3 className="text-[14px] font-medium text-text-primary mb-2">Generated content</h3>
                      <GeneratedAssetCard asset={rec.generatedAsset} recId={rec.id} />
                    </div>
                  )}

                  {/* Team assignment section */}
                  {!rec.assignedTo && (
                    <div className="mt-4 pt-4 border-t border-border-primary">
                      <p className="text-[13px] text-text-secondary mb-2">Or assign to your web team:</p>
                      <input
                        type="email"
                        placeholder="team@smilebrightdental.com"
                        className="w-full border border-border-primary rounded-sm px-3 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary"
                      />
                    </div>
                  )}

                  {/* Complete button */}
                  <div className="mt-6 pt-4 border-t border-border-primary">
                    <button
                      onClick={() => completeRec(rec.id)}
                      disabled={rec.status === 'completed' || !allManualDone}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 text-[15px] rounded-sm transition-all font-medium ${
                        rec.status === 'completed'
                          ? 'bg-green-bg text-green-text border border-green-text/30 cursor-default'
                          : allManualDone
                          ? 'bg-green-value text-white hover:bg-green-text cursor-pointer'
                          : 'bg-selected text-text-disabled cursor-not-allowed'
                      }`}
                    >
                      <Check size={16} strokeWidth={2.5} />
                      {rec.status === 'completed' ? 'Completed!' : 'Mark as complete'}
                    </button>
                    {!allManualDone && rec.status !== 'completed' && (
                      <p className="text-[12px] text-text-secondary text-center mt-1.5">
                        Complete all steps above to enable this button
                      </p>
                    )}
                  </div>
                </div>
              )}
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

      {showAssign && <AssignModal recId={rec.id} onClose={() => setShowAssign(false)} />}
    </>
  )
}

import { useState } from 'react'
import { Loader2, Check, MoreVertical } from 'lucide-react'
import type { Recommendation } from '../../types'
import { useAppStore } from '../../store/useAppStore'
import AssignModal from './AssignModal'

/* ── helpers ─────────────────────────────────────────────────── */

const EFFORT_STYLE: Record<string, string> = {
  'Quick win':   'bg-[#fff9ea] text-[#c69204]',
  'Medium':      'bg-[#fff9ea] text-[#c69204]',
  'Bigger lift': 'bg-[#fff0e8] text-[#c65c04]',
}

const STATUS_DOT: Record<string, string> = {
  pending:     'bg-[#a3a3a3]',
  accepted:    'bg-[#1976d2]',
  in_progress: 'bg-[#9c27b0]',
  completed:   'bg-[#4cae3d]',
  rejected:    'bg-[#de1b0c]',
}

const STATUS_LABEL: Record<string, string> = {
  pending:     'Pending',
  accepted:    'Accepted',
  in_progress: 'In Progress',
  completed:   'Completed',
  rejected:    'Skipped',
}

function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[12px] leading-[18px] tracking-[-0.24px] whitespace-nowrap font-normal ${className}`}>
      {children}
    </span>
  )
}

function StatusDot({ status }: { status: string }) {
  return (
    <div className="flex items-center gap-1.5">
      {status === 'pending'
        ? <img src="/assets/pending-icon.svg" alt="pending" className="w-3 h-3 flex-shrink-0" />
        : <span className={`w-3 h-3 rounded-full border-2 border-white flex-shrink-0 ${STATUS_DOT[status] ?? 'bg-[#a3a3a3]'}`} />
      }
      <span className="text-[12px] text-[#555] leading-[18px] tracking-[-0.24px]">{STATUS_LABEL[status] ?? status}</span>
    </div>
  )
}

/* ── asset preview ───────────────────────────────────────────── */
function AssetPreview({
  recId,
  asset,
  onApprove,
}: {
  recId: string
  asset: NonNullable<Recommendation['generatedAsset']>
  onApprove?: (recId: string) => void
}) {
  const typeLabel = { blog: 'view blog', faq: 'view FAQ', schema: 'view schema', social: 'view post' }[asset.type] ?? 'view'

  return (
    <div className="bg-[#f9f7fd] rounded-[8px] px-4 py-[18px]">
      <div className="flex gap-5 items-start">
        {/* Thumbnail */}
        <div className="w-[88px] h-[87px] rounded-[8px] overflow-hidden flex-shrink-0 bg-[#e2d8f5]">
          <img
            src="/assets/Frame 2147224172.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* "Created by Content hub" with AI icon */}
          <div className="flex items-center gap-1 mb-2 relative pl-[22px]">
            <img
              src="/assets/AI Icon.svg"
              alt=""
              className="absolute left-0 top-[-2px] w-[22px] h-[22px]"
            />
            <span className="text-[12px] text-[#212121] leading-[18px] tracking-[-0.24px]">
              Created by Content hub
            </span>
          </div>

          {/* Asset title */}
          <p className="text-[14px] text-[#212121] leading-[20px] tracking-[-0.28px] mb-1">
            {asset.title}
          </p>

          {/* Preview + link */}
          <p className="text-[12px] text-[#555] leading-[18px] tracking-[-0.24px]">
            <span>{asset.previewText.slice(0, 90)}</span>
            <span>{' ... '}</span>
            {onApprove ? (
              <button
                onClick={() => onApprove(recId)}
                className="text-[#1976d2] hover:underline"
              >
                {asset.approved ? '✓ Approved' : 'Approve →'}
              </button>
            ) : (
              <button className="text-[#1976d2] hover:underline">{typeLabel}</button>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── checklist ───────────────────────────────────────────────── */
function Checklist({
  rec,
  onToggle,
  onApprove,
}: {
  rec: Recommendation
  onToggle: (stepId: string) => void
  onApprove: (recId: string) => void
}) {
  const done = rec.checklist.filter(s => s.completed).length
  const total = rec.checklist.length
  const pct = total ? (done / total) * 100 : 0

  return (
    <div className="border-t border-[#eaeaea] pt-4 mt-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-medium text-[#212121] uppercase tracking-[0.04em]">Your steps</span>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#555]">{done} of {total} done</span>
          <div className="w-[72px] h-1.5 bg-[#eaeaea] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#6834b7] rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-2">
        {rec.checklist.map(step => (
          <div
            key={step.id}
            className={`flex items-start gap-3 py-2 px-3 rounded-[6px] transition-colors ${step.completed ? 'bg-[#f8fdf7]' : ''}`}
          >
            {/* Checkbox */}
            <button
              onClick={() => !step.autoCompleted && onToggle(step.id)}
              disabled={step.autoCompleted}
              className={`flex-shrink-0 w-[18px] h-[18px] rounded border mt-0.5 flex items-center justify-center transition-all ${
                step.completed
                  ? step.autoCompleted
                    ? 'bg-[#a3a3a3] border-[#a3a3a3]'
                    : 'bg-[#1976d2] border-[#1976d2]'
                  : 'border-[#d0d0d0] hover:border-[#1976d2]'
              } ${step.autoCompleted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {step.completed && <Check size={11} color="white" strokeWidth={3} />}
            </button>

            {/* Label + sub-label */}
            <div className="flex-1 min-w-0">
              <p className={`text-[13px] leading-[18px] tracking-[-0.26px] ${step.completed ? 'text-[#aaa] line-through decoration-[#ccc]' : 'text-[#212121]'}`}>
                {step.label}
              </p>
              {step.completed && step.autoCompleted && (
                <span className="inline-block mt-0.5 text-[11px] bg-[#f0f0f0] text-[#555] px-1.5 py-0.5 rounded">
                  Done by Birdeye AI
                </span>
              )}
            </div>

            {/* Step CTA */}
            {!step.completed && step.ctaLabel && (
              <button
                onClick={() => step.ctaAction === 'approve_asset' && onApprove(rec.id)}
                className="flex-shrink-0 text-[12px] px-2.5 py-1 border border-[#d0d0d0] rounded hover:bg-[#f5f5f5] text-[#212121] transition-colors"
              >
                {step.ctaLabel}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
interface Props {
  rec: Recommendation
  isKanban?: boolean
}

export default function RecommendationCard({ rec, isKanban = false }: Props) {
  const { rejectRec, toggleChecklistItem, approveAsset, completeRec, regeneratingIds } = useAppStore()
  const [showAssign, setShowAssign] = useState(false)
  const [showOverflow, setShowOverflow] = useState(false)
  const isRegenerating = regeneratingIds.has(rec.id)

  /* ── rejected ── */
  if (rec.status === 'rejected') {
    return (
      <div className="bg-white border border-[#eaeaea] pt-5 px-5 pb-5 opacity-60 transition-opacity duration-300">
        <div className="flex items-center gap-2.5">
          {isRegenerating ? (
            <>
              <Loader2 size={14} className="animate-spin text-[#6834b7] flex-shrink-0" />
              <span className="text-[13px] text-[#555]">Generating a replacement recommendation…</span>
            </>
          ) : (
            <>
              <StatusDot status="rejected" />
              <span className="text-[14px] text-[#aaa] line-through decoration-[#ccc] ml-1">{rec.title}</span>
            </>
          )}
        </div>
      </div>
    )
  }

  /* ── kanban compact ── */
  if (isKanban) {
    const doneSt = rec.checklist.filter(s => s.completed).length
    const totalSt = rec.checklist.length
    return (
      <>
        <div className="bg-white border border-[#eaeaea] p-3 hover:border-[#c0c0c0] transition-all">
          <div className="flex flex-wrap gap-1.5 mb-2">
            <Chip className="bg-[#eaeaea] text-[#212121]">{rec.category}</Chip>
            <Chip className={EFFORT_STYLE[rec.effort] ?? 'bg-[#fff9ea] text-[#c69204]'}>{rec.effort}</Chip>
          </div>
          <p className="text-[13px] text-[#212121] leading-[18px] tracking-[-0.26px] line-clamp-2 mb-2 font-normal">
            {rec.title}
          </p>
          <p className="text-[12px] text-[#377e2c] mb-2">{rec.impactLabel}</p>
          {(rec.status === 'in_progress' || rec.status === 'accepted') && totalSt > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 h-1 bg-[#eaeaea] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6834b7] rounded-full"
                  style={{ width: `${(doneSt / totalSt) * 100}%` }}
                />
              </div>
              <span className="text-[11px] text-[#888]">{doneSt}/{totalSt}</span>
            </div>
          )}
          <button
            onClick={() => rec.status === 'pending' && setShowAssign(true)}
            className="w-full text-[13px] py-1.5 rounded text-center border border-[#e5e9f0] text-[#212121] hover:bg-[#f5f5f5] transition-colors"
          >
            {rec.status === 'pending' ? 'Start →'
              : rec.status === 'in_progress' || rec.status === 'accepted' ? 'Continue →'
              : '✅ Done'}
          </button>
        </div>
        {showAssign && <AssignModal recId={rec.id} onClose={() => setShowAssign(false)} />}
      </>
    )
  }

  /* ── full card ── */
  const allStepsDone = rec.checklist.length > 0 && rec.checklist.every(s => s.completed)
  const isActive = rec.status === 'accepted' || rec.status === 'in_progress'
  const isCompleted = rec.status === 'completed'

  return (
    <>
      <div
        className={`bg-white border border-[#eaeaea] pt-5 px-5 pb-[30px] hover:border-[#c0c0c0] transition-all ${
          isActive ? 'border-l-[3px] border-l-[#6834b7]' : ''
        } ${isCompleted ? 'border-l-[3px] border-l-[#4cae3d]' : ''}`}
      >
        {/* ── chips row ── */}
        <div className="flex flex-wrap gap-[9px] items-center mb-3">
          <Chip className="bg-[#eaeaea] text-[#212121]">{rec.category}</Chip>
          <Chip className={EFFORT_STYLE[rec.effort] ?? 'bg-[#fff9ea] text-[#c69204]'}>{rec.effort}</Chip>
          {rec.status !== 'pending' && <StatusDot status={rec.status} />}
          {rec.status === 'pending' && <StatusDot status="pending" />}
        </div>

        {/* ── title + description ── */}
        <div className="flex flex-col gap-1 mb-3">
          <p className={`text-[14px] leading-[20px] tracking-[-0.28px] font-normal ${isCompleted ? 'text-[#888]' : 'text-[#212121]'}`}>
            {rec.title}
          </p>
          {!isCompleted && (
            <p className="text-[14px] text-[#555] leading-[20px] tracking-[-0.28px] font-light">
              {rec.description}
            </p>
          )}
        </div>

        {/* ── asset preview ── */}
        {rec.generatedAsset && !isCompleted && (
          <div className="mb-3">
            <AssetPreview
              recId={rec.id}
              asset={rec.generatedAsset}
              onApprove={isActive ? approveAsset : undefined}
            />
          </div>
        )}

        {/* ── checklist ── */}
        {isActive && rec.checklist.length > 0 && (
          <div className="mb-4">
            <Checklist
              rec={rec}
              onToggle={stepId => toggleChecklistItem(rec.id, stepId)}
              onApprove={approveAsset}
            />
          </div>
        )}

        {/* ── completed summary ── */}
        {isCompleted && (
          <div className="mb-4 py-3 px-4 bg-[#f1faf0] rounded-[6px] flex items-start gap-2">
            <img src="/assets/check_circle.svg" alt="" className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[13px] text-[#377e2c]">All {rec.checklist.length} steps completed</p>
              <p className="text-[12px] text-[#555] mt-0.5 leading-[18px]">
                Results updating in 2–3 weeks as LLMs recrawl your content.
              </p>
            </div>
          </div>
        )}

        {/* ── bottom row ── */}
        <div className="flex items-center justify-between mt-1 relative">
          {/* Left: impact */}
          <Chip className="bg-[#f1faf0] text-[#377e2c]">{rec.impactLabel}</Chip>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            {/* Overflow */}
            <div className="relative">
              <button
                onClick={() => setShowOverflow(v => !v)}
                className="w-8 h-8 flex items-center justify-center text-[#555] hover:bg-[#f5f5f5] rounded transition-colors"
              >
                <MoreVertical size={16} />
              </button>
              {showOverflow && (
                <div className="absolute right-0 bottom-9 z-20 bg-white border border-[#eaeaea] rounded shadow-md min-w-[160px] py-1">
                  {['View full details', 'Remind me later', 'Skip task'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => {
                        setShowOverflow(false)
                        if (opt === 'Skip task') rejectRec(rec.id)
                      }}
                      className="w-full text-left px-3 py-2 text-[13px] text-[#212121] hover:bg-[#f5f5f5] transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pending actions */}
            {rec.status === 'pending' && (
              <>
                <button
                  onClick={() => rejectRec(rec.id)}
                  className="border border-[#e5e9f0] text-[16px] text-[#212121] leading-[24px] tracking-[-0.32px] px-3 py-2 rounded-sm hover:bg-[#f5f5f5] transition-colors font-normal"
                >
                  Reject
                </button>
                <button
                  onClick={() => setShowAssign(true)}
                  className="bg-[#1976d2] text-[16px] text-white leading-[24px] tracking-[-0.32px] px-3 py-2 rounded-sm hover:bg-[#1565c0] transition-colors font-normal"
                >
                  Accept
                </button>
              </>
            )}

            {/* Active actions */}
            {isActive && (
              <button
                onClick={() => allStepsDone && completeRec(rec.id)}
                disabled={!allStepsDone}
                className={`text-[14px] leading-[20px] px-3 py-2 rounded-sm transition-colors font-normal ${
                  allStepsDone
                    ? 'bg-[#4cae3d] text-white hover:bg-[#3d9c31] cursor-pointer'
                    : 'bg-[#eaeaea] text-[#aaa] cursor-not-allowed'
                }`}
              >
                ✓ Mark as done
              </button>
            )}

            {/* Completed */}
            {isCompleted && (
              <button className="text-[14px] text-[#377e2c] border border-[#b8ddb4] px-3 py-2 rounded-sm hover:bg-[#f1faf0] transition-colors font-normal">
                See results →
              </button>
            )}
          </div>
        </div>
      </div>

      {showAssign && <AssignModal recId={rec.id} onClose={() => setShowAssign(false)} />}
    </>
  )
}

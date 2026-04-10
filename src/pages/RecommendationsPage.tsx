import { useAppStore } from '../store/useAppStore'
import ListView from '../components/recommendations/ListView'
import KanbanBoard from '../components/recommendations/KanbanBoard'

export default function RecommendationsPage() {
  const { viewMode, recommendations, activeTab, setActiveTab } = useAppStore()

  const pending   = recommendations.filter(r => r.status === 'pending').length
  const accepted  = recommendations.filter(r => r.status === 'accepted').length
  const completed = recommendations.filter(r => r.status === 'completed').length
  const rejected  = recommendations.filter(r => r.status === 'rejected').length

  const tiles = [
    { count: pending,   label: 'Pending',   icon: `${import.meta.env.BASE_URL}assets/pending-icon.svg`,   tab: 'pending'   as const },
    { count: accepted,  label: 'Accepted',  icon: `${import.meta.env.BASE_URL}assets/check_circle.svg`,   tab: 'accepted'  as const },
    { count: completed, label: 'Completed', icon: `${import.meta.env.BASE_URL}assets/check_circle.svg`,   tab: 'completed' as const },
    { count: rejected,  label: 'Rejected',  icon: `${import.meta.env.BASE_URL}assets/Component 75-1.svg`, tab: 'rejected'  as const },
  ]

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">

      {/* ── Metrics tiles (matches Figma) ── */}
      <div className="flex gap-3 items-stretch px-6 py-3 border-b border-[#eaeaea] flex-shrink-0">
        {tiles.map(tile => (
          <button
            key={tile.label}
            onClick={() => setActiveTab(tile.tab)}
            className={`flex-1 flex flex-col items-start pb-4 pt-3 px-4 rounded-[8px] text-left transition-all ${
              activeTab === tile.tab
                ? 'bg-[#ecf5fd] ring-1 ring-[#1976d2]/20'
                : 'bg-white hover:bg-[#f5f9fe]'
            }`}
          >
            <div className="h-12 flex items-center">
              <span className="text-[32px] leading-[48px] text-[#1976d2] font-normal">{tile.count}</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <img src={tile.icon} alt="" className="w-4 h-4 flex-shrink-0" />
              <span className="text-[14px] text-[#212121] leading-[20px] tracking-[-0.28px] font-normal">{tile.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* ── AI banner (matches Figma) ── */}
      <div className="mx-5 mt-3 flex-shrink-0">
        <div className="bg-[#f9f7fd] rounded-[4px] px-2 py-1 flex items-center gap-0">
          {/* Left: AI icon + text */}
          <div className="flex flex-1 items-center gap-0">
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <img src={`${import.meta.env.BASE_URL}assets/AI Icon.svg`} alt="" className="w-5 h-5" />
            </div>
            <p className="text-[14px] text-[#212121] leading-[20px] tracking-[-0.28px]">
              Increase your search AI score by ~{pending * 3}% by completing these {pending} task{pending !== 1 ? 's' : ''}
            </p>
          </div>
          {/* Dismiss */}
          <button className="w-9 h-9 flex items-center justify-center text-[#555] hover:bg-[#ece8f7] rounded transition-colors flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={`flex-1 min-h-0 ${viewMode === 'kanban' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
        {viewMode === 'list' ? (
          <div className="px-5 pb-6 max-w-[70%] mx-auto">
            <ListView />
          </div>
        ) : (
          <KanbanBoard />
        )}
      </div>

    </div>
  )
}

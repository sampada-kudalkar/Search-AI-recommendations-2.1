import { useAppStore } from '../../store/useAppStore'
import RecommendationCard from './RecommendationCard'
import RecommendationCardLean from './RecommendationCardLean'
import type { Recommendation } from '../../types'

const EFFORT_ORDER: Record<Recommendation['effort'], number> = {
  'Quick win':   0,
  'Bigger lift': 1,
  'Medium':      2,
}

export default function ListView() {
  const { recommendations, activeTab } = useAppStore()

  const filtered =
    activeTab === 'all'
      ? recommendations
      : recommendations.filter(r => r.status === activeTab)

  const sorted = [...filtered].sort(
    (a, b) => EFFORT_ORDER[a.effort] - EFFORT_ORDER[b.effort],
  )

  if (sorted.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#555]">
        <div className="w-12 h-12 rounded-full bg-[#e5e9f0] flex items-center justify-center mb-3">
          <span className="text-[24px]">✓</span>
        </div>
        <p className="text-[16px] font-normal">No tasks in this category</p>
        <p className="text-[14px] mt-1 font-light">Click a status tile above to switch views</p>
      </div>
    )
  }

  // Completed tab → lean rows
  if (activeTab === 'completed') {
    return (
      <div className="divide-y divide-[#eaeaea]">
        {sorted.map(rec => (
          <RecommendationCardLean key={rec.id} rec={rec} />
        ))}
      </div>
    )
  }

  // All other tabs → full list cards (full width, no extra wrapper)
  return (
    <div className="flex flex-col">
      {sorted.map(rec => (
        <RecommendationCard key={rec.id} rec={rec} />
      ))}
    </div>
  )
}

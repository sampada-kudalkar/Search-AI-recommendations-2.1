import { useAppStore } from '../../store/useAppStore'
import RecommendationCard from './RecommendationCard'
import RecommendationCardLean from './RecommendationCardLean'

export default function ListView() {
  const { recommendations, activeTab } = useAppStore()

  const filtered = activeTab === 'all'
    ? recommendations
    : recommendations.filter(r => r.status === activeTab)

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-text-secondary">
        <div className="w-12 h-12 rounded-full bg-selected flex items-center justify-center mb-3">
          <span className="text-[24px]">✓</span>
        </div>
        <p className="text-[16px]">No tasks in this category</p>
        <p className="text-[14px] mt-1">Click a tile above to switch views</p>
      </div>
    )
  }

  // Completed tab → Apple-style lean rows (no boxes, dividers only)
  if (activeTab === 'completed') {
    return (
      <div className="divide-y divide-[#f0f0f0] pt-2">
        {filtered.map(rec => (
          <RecommendationCardLean key={rec.id} rec={rec} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 pt-4">
      {filtered.map(rec => (
        <RecommendationCard key={rec.id} rec={rec} />
      ))}
    </div>
  )
}

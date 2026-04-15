import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom'
import L1 from './components/shell/L1'
import L2 from './components/shell/L2'
import Header from './components/shell/Header'
import DashboardPage from './pages/DashboardPage'
import RecommendationsPage from './pages/RecommendationsPage'
import TaskDetailPage from './components/taskDetail/TaskDetailPage'
import Toast from './components/common/Toast'
import { useAppStore } from './store/useAppStore'

const BASE = import.meta.env.BASE_URL

// ── Icon button matching GitHub header.html .icon-btn spec ───────────────────
// 36×36, border 1px #e5e9f0, radius 4px, hover #f5f5f5
function IconBtn({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <button
      title={title}
      style={{ width: 36, height: 36, border: '1px solid #e5e9f0', borderRadius: 4, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
      className="hover:bg-[#f5f5f5] transition-colors"
    >
      {children}
    </button>
  )
}

// ── Recommendations page header right: Search + More + Filter ────────────────
function RecsHeaderRight() {
  return (
    <div className="flex items-center gap-2">
      {/* Search */}
      <IconBtn title="Search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </IconBtn>
      {/* More options */}
      <IconBtn title="More options">
        <img src={`${BASE}assets/more_vert.svg`} alt="More" className="w-5 h-5" />
      </IconBtn>
      {/* Filter */}
      <IconBtn title="Filter">
        <img src={`${BASE}assets/filter_list.svg`} alt="Filter" className="w-5 h-5" />
      </IconBtn>
    </div>
  )
}

// ── Shared app shell ──────────────────────────────────────────────────────────
function AppShell({
  children,
  title,
  showInfoIcon = false,
  headerRight,
  onBack,
  showL2 = true,
}: {
  children: React.ReactNode
  title: string
  showInfoIcon?: boolean
  headerRight?: React.ReactNode
  onBack?: () => void
  showL2?: boolean
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-roboto">
      <L1 />
      {showL2 && <L2 />}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header
          title={title}
          showInfoIcon={showInfoIcon}
          headerRight={headerRight}
          onBack={onBack}
        />
        <main className="flex flex-col flex-1 min-h-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}

// ── Detail page shell — wires Reject / Accept into the header ─────────────────
function TaskDetailShell() {
  const navigate = useNavigate()
  const { id }   = useParams<{ id: string }>()
  const { recommendations, acceptRec, rejectRec } = useAppStore()

  const rec = id ? recommendations.find(r => r.id === id) : undefined

  const handleReject = () => {
    if (!id) return
    rejectRec(id)
    navigate('/recommendations')
  }

  const handleAccept = () => {
    if (!id) return
    acceptRec(id, 'self')
  }

  const headerRight = rec ? (
    <div className="flex items-center gap-2">
      {rec.status === 'pending' && (
        <button
          onClick={handleReject}
          style={{ height: 36, padding: '8px 12px', border: '1px solid #e5e9f0', borderRadius: 4, background: 'white', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.28px', color: '#212121', cursor: 'pointer', fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
          className="hover:bg-[#f5f5f5] transition-colors whitespace-nowrap"
        >
          Reject
        </button>
      )}
      {(rec.status === 'pending' || rec.status === 'accepted') && (
        <button
          onClick={rec.status === 'pending' ? handleAccept : undefined}
          disabled={rec.status === 'accepted'}
          style={{ height: 36, padding: '8px 12px', border: 'none', borderRadius: 4, background: rec.status === 'accepted' ? '#4caf50' : '#1976d2', fontSize: 14, lineHeight: '20px', letterSpacing: '-0.28px', color: 'white', cursor: rec.status === 'accepted' ? 'default' : 'pointer', fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
          className="whitespace-nowrap transition-colors hover:opacity-90"
        >
          {rec.status === 'accepted' ? '✓ Accepted' : 'Accept'}
        </button>
      )}
      <IconBtn title="More options">
        <img src={`${BASE}assets/more_vert.svg`} alt="More" className="w-5 h-5" />
      </IconBtn>
    </div>
  ) : null

  return (
    <AppShell
      title="Recommendation details"
      onBack={() => navigate('/recommendations')}
      headerRight={headerRight}
      showL2={false}
    >
      <TaskDetailPage />
    </AppShell>
  )
}

// ── Router ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter basename={BASE}>
      <Routes>
        {/* Default landing → Recommendations (not Overview) */}
        <Route path="/"            element={<Navigate to="/recommendations" replace />} />
        <Route path="/overview"    element={<AppShell title="Overview"><DashboardPage /></AppShell>} />
        <Route
          path="/recommendations"
          element={
            <AppShell title="Recommendations" showInfoIcon headerRight={<RecsHeaderRight />}>
              <RecommendationsPage />
            </AppShell>
          }
        />
        <Route path="/recommendations/:id" element={<TaskDetailShell />} />
        <Route path="*" element={<Navigate to="/recommendations" replace />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  )
}

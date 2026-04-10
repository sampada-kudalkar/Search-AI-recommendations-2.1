import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import L1 from './components/shell/L1'
import L2 from './components/shell/L2'
import Header from './components/shell/Header'
import DashboardPage from './pages/DashboardPage'
import RecommendationsPage from './pages/RecommendationsPage'
import TaskDetailPage from './components/taskDetail/TaskDetailPage'
import Toast from './components/common/Toast'
import ViewToggle from './components/recommendations/ViewToggle'

function AppShell({
  children,
  title,
  showInfoIcon = false,
  headerRight,
  onBack,
}: {
  children: React.ReactNode
  title: string
  showInfoIcon?: boolean
  headerRight?: React.ReactNode
  onBack?: () => void
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-roboto">
      <L1 />
      <L2 />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header title={title} showInfoIcon={showInfoIcon} headerRight={headerRight} onBack={onBack} />
        <main className="flex flex-col flex-1 min-h-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}

function TaskDetailShell() {
  const navigate = useNavigate()
  return (
    <AppShell title="Recommendation detail" onBack={() => navigate('/recommendations')}>
      <TaskDetailPage />
    </AppShell>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AppShell title="Overview">
            <DashboardPage />
          </AppShell>
        } />
        <Route path="/recommendations" element={
          <AppShell title="Recommendations" showInfoIcon headerRight={<ViewToggle />}>
            <RecommendationsPage />
          </AppShell>
        } />
        <Route path="/recommendations/:id" element={<TaskDetailShell />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toast />
    </BrowserRouter>
  )
}

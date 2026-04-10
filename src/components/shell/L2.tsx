import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const sections = [
  { id: 'overview', label: 'Overview', type: 'standalone', path: '/' },
  {
    id: 'actions',
    label: 'Actions',
    type: 'accordion',
    defaultOpen: true,
    items: [
      { label: 'Recommendations', path: '/recommendations' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    type: 'accordion',
    items: [
      { label: 'Overview', path: '/reports/overview' },
      { label: 'Citations', path: '/reports/citations' },
      { label: 'Visibility', path: '/reports/visibility' },
      { label: 'Rankings', path: '/reports/rankings' },
      { label: 'Accuracy', path: '/reports/accuracy' },
      { label: 'Sentiment', path: '/reports/sentiment' },
      { label: 'Prompts', path: '/reports/prompts' },
    ],
  },
  {
    id: 'agents',
    label: 'Agents',
    type: 'accordion',
    items: [
      { label: 'FAQ generation agent', path: '/agents/faq' },
      { label: 'Recommendation agent', path: '/agents/recommendations' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    type: 'accordion',
    items: [
      { label: 'Prompts', path: '/settings/prompts' },
      { label: 'Report', path: '/settings/report' },
    ],
  },
]

export default function L2() {
  const navigate = useNavigate()
  const location = useLocation()
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['actions']))

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      if (prev.has(id)) return new Set()
      return new Set([id])
    })
  }

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <div className="flex flex-col h-full w-[222px] bg-l2-bg border-r border-border-primary flex-shrink-0">
      {/* Title */}
      <div className="h-[52px] flex items-center px-6 border-b border-border-primary flex-shrink-0">
        <span className="text-[18px] font-normal text-text-primary tracking-[-0.36px]">Search AI</span>
      </div>

      {/* Nav items */}
      <div className="flex flex-col gap-1 px-4 py-2 flex-1 overflow-y-auto">
        {sections.map(section => {
          if (section.type === 'standalone') {
            return (
              <button
                key={section.id}
                onClick={() => navigate(section.path!)}
                className={`flex h-7 items-center px-2 py-1 rounded-sm text-[14px] font-light w-full text-left transition-all ${
                  isActive(section.path!)
                    ? 'bg-selected text-text-primary'
                    : 'text-text-primary hover:bg-selected/50'
                }`}
              >
                {section.label}
              </button>
            )
          }

          const isOpen = openSections.has(section.id)
          return (
            <div key={section.id} className="flex flex-col">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center gap-2 h-7 px-2 py-1 rounded-sm text-[14px] font-normal text-text-primary hover:bg-selected/50 w-full text-left"
              >
                <span className="flex-1">{section.label}</span>
                <img
                  src={isOpen ? '/assets/chevron_up.svg' : '/assets/chevron_down.svg'}
                  alt=""
                  className="w-5 h-5 flex-shrink-0"
                />
              </button>
              {isOpen && section.items && (
                <div className="flex flex-col mt-0.5">
                  {section.items.map(item => (
                    <button
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      className={`flex h-7 items-center px-2 py-1 rounded-sm text-[14px] font-light w-full text-left transition-all ${
                        isActive(item.path)
                          ? 'bg-selected text-text-primary'
                          : 'text-text-secondary hover:bg-selected/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

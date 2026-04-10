import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { src: '/assets/Navigation buttons-2.svg', label: 'Home' },
  { src: '/assets/Navigation buttons.svg',   label: 'Inbox' },
  { src: '/assets/Navigation buttons-1.svg', label: 'Listings' },
  { src: '/assets/Component 73.svg',         label: 'Search AI', path: '/', activeBuiltIn: true },
  { src: '/assets/Component 63.svg',         label: 'Reviews' },
  { src: '/assets/Component 64.svg',         label: 'Referrals' },
  { src: '/assets/Component 65.svg',         label: 'Payments' },
  { src: '/assets/Component 66.svg',         label: 'Appointments' },
  { src: '/assets/Component 67.svg',         label: 'Social' },
  { src: '/assets/Component 68.svg',         label: 'Surveys' },
  { src: '/assets/Component 69.svg',         label: 'Ticketing' },
  { src: '/assets/Component 70.svg',         label: 'Contacts' },
  { src: '/assets/Component 71.svg',         label: 'Campaigns' },
  { src: '/assets/Component 72.svg',         label: 'Reports' },
  { src: '/assets/Component 74.svg',         label: 'Competitors' },
]

export default function L1() {
  const navigate = useNavigate()
  const location = useLocation()
  const isSearchAI = location.pathname === '/' || location.pathname.startsWith('/recommendations')

  return (
    <div className="flex flex-col h-full w-10 bg-selected border-r border-border-primary flex-shrink-0">
      {/* Birdeye Logo */}
      <div className="flex items-center justify-center h-[52px] border-b border-border-primary flex-shrink-0">
        <img src="/assets/agent icons/Birdeye.svg" alt="Birdeye" className="w-7 h-7" />
      </div>

      {/* Nav icons */}
      <div className="flex flex-col items-center gap-1 py-2 flex-1 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = item.label === 'Search AI' && isSearchAI
          return (
            <button
              key={item.label}
              title={item.label}
              onClick={() => item.path && navigate(item.path)}
              className={`flex items-center justify-center w-7 h-7 rounded-sm transition-all duration-150 overflow-hidden ${
                isActive && !item.activeBuiltIn ? 'bg-l1-active' : ''
              } ${item.path ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <img src={item.src} alt={item.label} className="w-7 h-7 block flex-shrink-0" />
            </button>
          )
        })}

        <div className="w-5 h-px bg-border-primary my-1 flex-shrink-0" />

        <button
          title="Settings"
          className="flex items-center justify-center w-7 h-7 rounded-sm cursor-default overflow-hidden"
        >
          <img src="/assets/Component 75.svg" alt="Settings" className="w-7 h-7 block flex-shrink-0" />
        </button>
      </div>
    </div>
  )
}

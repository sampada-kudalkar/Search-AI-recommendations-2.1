interface HeaderProps {
  title: string
  showInfoIcon?: boolean
  headerRight?: React.ReactNode
  onBack?: () => void
}

const TOP_NAV_ICONS = [
  { src: '/assets/topnav-63.svg', alt: 'Add',      label: 'add_circle' },
  { src: '/assets/topnav-64.svg', alt: 'Help',     label: 'help' },
  { src: '/assets/topnav-65.svg', alt: 'Settings', label: 'settings' },
  { src: '/assets/topnav-66.svg', alt: 'Profile',  label: 'avatar' },
  { src: '/assets/topnav-67.svg', alt: 'Menu',     label: 'menu' },
]

export default function Header({ title, showInfoIcon = false, headerRight, onBack }: HeaderProps) {
  return (
    <div className="flex flex-col flex-shrink-0">
      {/* Top Nav — 56px */}
      <div className="h-[56px] bg-white border-b border-[#e9e9eb] flex items-center justify-end px-6 overflow-clip">
        <div className="flex items-center gap-1">
          {TOP_NAV_ICONS.map(icon => (
            <button
              key={icon.label}
              className="flex items-center justify-center hover:bg-[#f5f5f5] rounded-sm transition-all flex-shrink-0"
              title={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} className="w-8 h-8 block" />
            </button>
          ))}
        </div>
      </div>

      {/* Page Header — 64px */}
      <div className="h-16 bg-white flex items-center px-6 gap-2">
        {/* Left: back button (optional) + title + info icon */}
        <div className="flex-1 flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center justify-center size-8 rounded-sm hover:bg-[#f5f5f5] transition-all flex-shrink-0 -ml-1 mr-0.5"
              title="Back"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
              </svg>
            </button>
          )}
          <span className="text-[18px] font-normal text-[#212121] tracking-[-0.36px] leading-[26px] whitespace-nowrap">
            {title}
          </span>
          {showInfoIcon && (
            <img src="/assets/info.svg" alt="info" className="w-5 h-5 flex-shrink-0 opacity-60" />
          )}
        </div>

        {/* Right: injected controls + more_vert + filter_list */}
        <div className="flex items-center gap-2">
          {headerRight}

          {/* more_vert */}
          <button className="flex items-center justify-center size-9 bg-white border border-[#e5e9f0] rounded-[4px] hover:bg-[#f5f5f5] transition-all">
            <img src="/assets/more_vert.svg" alt="More" className="w-5 h-5" />
          </button>

          {/* filter_list */}
          <button className="flex items-center justify-center size-9 bg-white border border-[#e5e9f0] rounded-[4px] hover:bg-[#f5f5f5] transition-all">
            <img src="/assets/filter_list.svg" alt="Filter" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

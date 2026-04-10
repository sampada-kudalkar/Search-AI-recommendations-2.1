export type RecStatus = 'pending' | 'accepted' | 'in_progress' | 'completed' | 'rejected'
export type RecCategory = 'Website content' | 'Website improvement' | 'Reviews' | 'Social' | 'FAQ'
export type LLMPlatform = 'ChatGPT' | 'Gemini' | 'Perplexity' | 'Claude'
export type AssignChoice = 'self' | 'team' | 'remind'
export type ViewMode = 'list' | 'kanban'

export interface Competitor {
  id: string
  name: string
  llmSnippet: string
  citedBy: LLMPlatform[]
  totalCitations: number
  sourceGaps: string[]
  whyTheyWin: string
}

export interface SourceReference {
  platform: string
  competitorName: string
  url: string
  snippet: string
  referencedInAnswers: number
}

export interface ContentGap {
  phrase: string
  frequency: number
  competitors: string[]
  recommendation: string
}

export interface ChecklistStep {
  id: string
  label: string
  description: string
  completed: boolean
  autoCompleted: boolean
  ctaLabel?: string
  ctaAction?: 'approve_asset' | 'copy_link' | 'assign' | 'open_content_hub' | 'mark_done'
}

export interface GeneratedAsset {
  type: 'blog' | 'faq' | 'schema' | 'social' | 'content_suggestions' | 'citations'
  title: string
  previewText: string
  fullContent: string
  approved: boolean
}

export interface Recommendation {
  id: string
  title: string
  description: string
  category: RecCategory
  impactLabel: string
  effort: 'Quick win' | 'Medium' | 'Bigger lift'
  status: RecStatus
  assignedTo: string | null
  assignChoice: AssignChoice | null
  acceptedAt: string | null
  completedAt: string | null
  whyItWorks: string[]
  competitors: Competitor[]
  sources: SourceReference[]
  contentGaps: ContentGap[]
  promptsTriggeringThis: string[]
  llmCoverageGap: {
    platforms: LLMPlatform[]
    summary: string
  }
  generatedAsset: GeneratedAsset | null
  checklist: ChecklistStep[]
}

export interface BusinessMetrics {
  searchAiScore: number
  scoreTrend: number
  visibility: number
  citationShare: number
  rank: number
  sentiment: number
}

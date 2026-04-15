import type { BusinessMetrics, ChecklistStep, Competitor, Recommendation, SourceReference } from '../types'

export const seedBusiness = {
  name: 'Raine & Horne Dubbo',
  location: 'Dubbo, NSW',
}

export const seedMetrics: BusinessMetrics = {
  searchAiScore: 54,
  scoreTrend: 2,
  visibility: 48,
  citationShare: 62,
  rank: 3,
  sentiment: 71,
}

// ─── helpers ────────────────────────────────────────────────────────────────

function makeChecklist(valueId: string, steps: string[]): ChecklistStep[] {
  return steps.map((step, i) => ({
    id: `${valueId}-step-${i + 1}`,
    label: step.replace(/^\d+\.\s*/, '').split(' ').slice(0, 7).join(' '),
    description: step,
    completed: false,
    autoCompleted: false,
  }))
}

function makeCompetitors(
  comps: { name: string; pageUrl?: string; gap: string }[],
): Competitor[] {
  return comps.map(c => ({
    id: c.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    name: c.name,
    llmSnippet: c.gap,
    citedBy: [],
    totalCitations: 0,
    sourceGaps: [c.gap],
    whyTheyWin: c.gap,
  }))
}

function makeSources(
  refs: { title: string; source: string; snippet: string }[],
  targetPage: string,
): SourceReference[] {
  return refs.map(r => ({
    platform: r.source,
    competitorName: r.title,
    url: targetPage,
    snippet: r.snippet,
    referencedInAnswers: 0,
  }))
}

const CREATED_AT = '2025-03-15'
const LOCATION_NAMES = ['Dubbo', 'NSW']

// ─── recommendations ────────────────────────────────────────────────────────

export const seedRecommendations: Recommendation[] = [
  // location counts by scope:
  //   brand/website-wide → 20 | moderately broad → 8–15 | niche/specific → 2–7

  // 1 — 69de016e9c10756b6b61329f
  {
    id: '69de016e9c10756b6b61329f',
    title: 'Win More Dubbo Searches with Local Market Content',
    description:
      'Your perfect 5.0 rating from 457 reviews shows buyers and sellers trust you, but you\'re missing opportunities to capture local search traffic. Publishing regular Dubbo market updates and suburb guides will help more people find you when researching property in your area. This positions your 40+ years of local expertise front and center, turning searches into enquiries.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 20, // brand/website-wide
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish monthly market updates and guides',
    expectedImpact:
      'Creating Dubbo-focused content will significantly increase your organic search visibility, bringing more qualified buyers and sellers to your website. Each suburb guide and market update becomes a lead generation asset that works 24/7, pre-qualifying prospects before they call.',
    keyInsights: [
      'Despite 457 five-star reviews, your digital presence doesn\'t reflect your market dominance',
      'Local property searches are high-intent moments where buyers and sellers choose their agent',
    ],
    swotDrivers: [
      'Leverage 40+ years of established market presence since 1982',
      'Convert top national rankings into local digital dominance',
    ],
    competitorsInsight: [
      'Competitors capture local search traffic with basic market updates despite inferior reviews',
      'Your absence in content marketing lets newer agencies appear more digitally savvy',
    ],
    targetPages: [
      'https://raineandhorne.com.au/dubbo-market-updates',
      'https://raineandhorne.com.au/suburb-guides-dubbo',
    ],
    whyItWorks: [
      'Buyers and sellers actively search for Dubbo market insights but can\'t find them on your site',
      'Your competitors rank for these searches while you miss out on qualified leads',
      'Content gaps mean Google shows competitors instead of your proven local expertise',
    ],
    competitors: makeCompetitors([
      {
        name: 'Local Dubbo Agencies',
        pageUrl: 'https://competitor-sites.com.au',
        gap: 'Competitors publish regular market content while R&H Dubbo relies solely on reputation',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Local Content Impact Analysis',
          source: 'gemini',
          snippet: 'Mixed sentiment data suggests strong local reputation but limited digital content presence',
        },
        {
          title: 'Market Search Behavior Study',
          source: 'perplexity',
          snippet: 'Buyers and sellers actively search for local market updates and suburb insights before choosing agents',
        },
      ],
      'https://raineandhorne.com.au/dubbo-market-updates',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'Sentiment is mixed: strong praise exists, but some sources say public data is thin. The site lacks consistent Dubbo-specific updates and guides.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de016e9c10756b6b61329f', [
      '1. Create a content calendar for monthly Dubbo market reports highlighting median prices, days on market, and inventory levels',
      '2. Write comprehensive suburb profiles covering schools, amenities, lifestyle factors, and recent sales results',
      '3. Add prominent \'Get Your Free Appraisal\' calls-to-action on every content page',
      '4. Set up automated distribution to email subscribers and social media channels',
      '5. Track enquiries from each piece of content to measure ROI',
    ]),
  },

  // 2 — 69de016e9c10756b6b6132a0
  {
    id: '69de016e9c10756b6b6132a0',
    title: 'Create Dubbo Client Success Stories Hub',
    description:
      'Despite perfect 5.0 ratings from 457 reviews, your testimonials aren\'t visible enough online. Creating a dedicated Dubbo testimonials hub will showcase real client success stories, case studies, and third-party reviews in one powerful location. This trust-building asset will help convert more website visitors into enquiries.',
    category: 'Trust & Reputation',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 20, // brand/website-wide
    tags: ['Trust & Reputation', 'Trust Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Build Dubbo testimonials hub',
    expectedImpact:
      'A centralized proof hub will significantly increase enquiry-to-appointment conversion rates by reducing hesitation and building immediate trust. Prospects will see real Dubbo success stories, making them more confident to reach out.',
    keyInsights: [
      'You have a perfect 5.0 rating from 457 reviews but limited public visibility',
      'Specialized teams deliver high client satisfaction that isn\'t being leveraged online',
    ],
    swotDrivers: [
      'Strength: High client satisfaction and successful outcomes',
      'Weakness: Limited online reviews visibility',
    ],
    competitorsInsight: [
      'Competitors with more visible reviews appear more established even with lower ratings',
      'Agencies showcasing local success stories generate more trust and enquiries',
    ],
    targetPages: [
      'https://raineandhorne.com.au/reviews-dubbo',
      'https://raineandhorne.com.au/case-studies-dubbo',
    ],
    whyItWorks: [
      'Prospects compare agencies by reading local testimonials before choosing who to call',
      'Your excellent client satisfaction isn\'t translating into visible online proof',
      'Competitors may appear more trustworthy simply by having more visible reviews',
    ],
    competitors: makeCompetitors([
      {
        name: 'Local Dubbo Agencies',
        gap: 'More visible online reviews and testimonials despite potentially lower satisfaction scores',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Client Satisfaction Analysis',
          source: 'Multiple sources',
          snippet: 'Perfect 5.0 rating from 457 reviews indicates exceptional service delivery',
        },
      ],
      'https://raineandhorne.com.au/reviews-dubbo',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'Sentiment shows delighted clients, yet two sources report limited publicly visible reviews.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de016e9c10756b6b6132a0', [
      '1. Collect recent testimonials from sellers, buyers, and landlords with written permissions',
      '2. Write 5-10 short case studies highlighting challenge, approach, and results',
      '3. Embed third-party review snippets and badges from Google, RateMyAgent where allowed',
      '4. Create dedicated hub pages for Dubbo testimonials and case studies',
      '5. Add strong calls-to-action for free appraisals and rental assessments on each page',
    ]),
  },

  // 3 — 69de016e9c10756b6b6132a1
  {
    id: '69de016e9c10756b6b6132a1',
    title: 'Transform Dubbo Property Management Page Into Lead Machine',
    description:
      'Your Dubbo property management page needs critical optimization to convert more landlord visitors into enquiries. By adding clear processes, response time guarantees, and prominent contact forms, you\'ll address current administration concerns while showcasing your specialized team\'s expertise.',
    category: 'Conversion',
    impactLabel: 'High impact',
    effort: 'Bigger lift',
    themeId: 'residential-property-leasing',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 8, // region-specific page
    tags: ['Conversion', 'High Impact'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Optimize PM page with processes and CTAs',
    expectedImpact:
      'Significantly increased landlord enquiries and appraisal requests by removing friction points and building trust through transparency. Clear service standards and easy contact options will convert hesitant visitors into qualified leads.',
    keyInsights: [
      'Administration issues in property management are damaging your reputation',
      'Changing consumer expectations demand transparency and speed',
      'Your specialized teams are a competitive advantage not being leveraged',
      'Simple process clarity can dramatically improve conversion rates',
    ],
    swotDrivers: [
      'Occasional complaints about administration in property management',
      'Specialized teams committed to client service',
      'Changing Consumer Expectations',
    ],
    competitorsInsight: [
      'Competitors with detailed PM processes are capturing more landlord leads',
      'Clear service standards and guarantees are becoming industry expectations',
    ],
    targetPages: [
      'https://raineandhorne.com.au/property-management-dubbo',
      'https://raineandhorne.com.au/landlords-dubbo',
    ],
    whyItWorks: [
      'Current administration complaints are costing you potential landlord clients',
      'Landlords expect clear processes and response times before choosing a property manager',
      'Your specialized PM team\'s expertise isn\'t effectively communicated online',
      'Competitors with clearer value propositions are winning your leads',
    ],
    competitors: [],
    sources: makeSources(
      [
        {
          title: 'Property Management Page Optimization',
          source: 'perplexity',
          snippet: 'Clear processes and response times are critical for converting landlord enquiries',
        },
        {
          title: 'Landlord Conversion Best Practices',
          source: 'gemini',
          snippet: 'Transparency in fees and services increases trust and conversion rates',
        },
        {
          title: 'PM Service Page Elements',
          source: 'perplexity',
          snippet: 'Above-the-fold CTAs and social proof drive higher enquiry rates',
        },
      ],
      'https://raineandhorne.com.au/property-management-dubbo',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'Overall sentiment is strong, but mentions of administration issues in property management suggest clarity gaps.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de016e9c10756b6b6132a1', [
      '1. Create comprehensive step-by-step property management process with specific response time commitments (24-48 hour turnarounds)',
      '2. Develop transparent fee structure page showing all inclusions, exclusions, and service guarantees',
      '3. Design and place prominent \'Get Free Rental Appraisal\' forms above the fold on all PM pages',
      '4. Add dedicated testimonials section featuring recent property management success stories and landlord reviews',
      '5. Implement live chat or callback widget specifically for landlord enquiries',
    ]),
  },

  // 4 — 69de01cb9c10756b6b6132a9
  {
    id: '69de01cb9c10756b6b6132a9',
    title: 'Claim LocalSearch and API Profiles for Dubbo Appraisals',
    description:
      'Your business lacks consistent presence on key local directories where Dubbo residents search for property appraisals. LocalSearch and Australian Property Institute (API) profiles are missing or incomplete, limiting your visibility in local searches and AI-powered answers.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'property-appraisals',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 5, // niche: two specific platforms
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Claim and optimize local directory profiles',
    expectedImpact:
      'Increased visibility in local search results and directory listings will drive more direct phone calls and appraisal inquiries. Consistent business information across platforms strengthens Google\'s confidence in your location data.',
    keyInsights: [
      'LocalSearch and API are trusted sources that Google uses to verify business information',
      'Competitors actively maintain these profiles and highlight free appraisal services prominently',
    ],
    swotDrivers: [
      'Opportunity: Untapped local directory channels for lead generation',
      'Threat: Competitors dominating directory listings for appraisal searches',
    ],
    competitorsInsight: [
      'Leading competitors use directory profiles as additional lead generation channels beyond their websites',
      'Successful agents emphasize \'free\' and \'no-obligation\' messaging consistently across all platforms',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'Missing profiles mean lost opportunities when locals search directories for free property appraisals',
      'Consistent NAP (Name, Address, Phone) across directories boosts Google\'s trust and local rankings',
      'Professional API membership listing builds immediate credibility for high-value appraisal services',
    ],
    competitors: makeCompetitors([
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au/property-appraisal/',
        gap: 'Maintains complete directory profiles with clear free appraisal messaging across all channels',
      },
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubbo.eldersrealestate.com.au/about-us/',
        gap: 'Actively promotes no-obligation appraisals through optimized directory listings',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'LocalSearch business directory',
          source: 'localsearch.com.au',
          snippet: 'Local directory where complete profiles can highlight services like free appraisals.',
        },
        {
          title: 'Australian Property Institute member directory',
          source: 'api.org.au',
          snippet: 'Professional directory; complete profiles build credibility for property appraisal services.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People search for free property appraisals and home value in Dubbo. Your site lacks consistent, matching listings that highlight "Obligation-free property appraisal" for Dubbo.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de01cb9c10756b6b6132a9', [
      '1. Claim or create profiles on LocalSearch.com.au and API.org.au within 24 hours',
      '2. Ensure exact NAP consistency: business name, phone, address matching website',
      '3. Add service keywords: \'Free property appraisal Dubbo\' and \'Rental appraisal Dubbo NSW\'',
      '4. Upload 3-5 professional photos of team and recent appraisal work',
      '5. Add business description emphasizing free appraisals and fast response times',
    ]),
  },

  // 5 — 69de01cb9c10756b6b6132aa
  {
    id: '69de01cb9c10756b6b6132aa',
    title: 'Create Dubbo Property Appraisal Hub Page',
    description:
      'Your competitors are capturing valuable appraisal leads with dedicated local pages while your site lacks this critical conversion tool. Creating a comprehensive Dubbo property appraisal hub with online forms and clear value propositions will help you rank for high-intent searches.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'property-appraisals',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 12, // region-specific
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Add appraisal hub page',
    expectedImpact:
      'This dedicated appraisal page will become your primary lead generation tool for property valuations. It will rank prominently in local searches, get cited by AI assistants, and provide a clear conversion path for homeowners. Expect steady growth in qualified appraisal requests within 1-2 months of launch.',
    keyInsights: [
      'Competitors present one clear destination for all appraisal requests with strong value propositions',
      'They explain benefits upfront and set clear expectations about the process',
    ],
    swotDrivers: [
      'Opportunity: Capture high-intent local searches for property appraisals',
      'Threat: Competitors already dominating this valuable lead source',
    ],
    competitorsInsight: [
      'Competitors present one clear destination to request property appraisals',
      'They explain benefits upfront and set expectations about the process',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'People actively search for \'free property appraisal Dubbo\' and \'home value Dubbo\' — missing high-intent traffic',
      'Competitors like Ray White and Matt Hansen capture these leads with dedicated appraisal pages',
      'A focused hub helps Google and AI assistants understand and recommend your appraisal services',
    ],
    competitors: makeCompetitors([
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhitedubbo.com.au/sell/property-appraisal',
        gap: 'Dedicated Dubbo appraisal page with detailed offer and form',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au/property-appraisal/',
        gap: 'Clear appraisal value promise and easy lead capture',
      },
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubbo.eldersrealestate.com.au/about-us/',
        gap: 'Prominently promotes free local appraisals on their site',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Property Appraisal – Ray White Dubbo',
          source: 'raywhitedubbo.com.au',
          snippet: 'Dedicated Dubbo appraisal page with clear benefits and lead form.',
        },
        {
          title: 'Home Valuation – Matt Hansen Real Estate',
          source: 'matthansenrealestate.com.au',
          snippet: 'Free market appraisal page tailored to local sellers.',
        },
        {
          title: 'About Us – Elders Real Estate Dubbo',
          source: 'dubbo.eldersrealestate.com.au',
          snippet: 'Promotes free, no-obligation appraisals for Dubbo homeowners.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People search for "free property appraisal Dubbo", "home value Dubbo", and rental appraisal help. Competitors capture these leads with dedicated pages.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de01cb9c10756b6b6132aa', [
      '1. Draft a clear \'Dubbo Property Appraisal\' page title and compelling introduction',
      '2. Add online request form with fields for both residential and rental appraisals',
      '3. List all Dubbo suburbs served and typical turnaround times',
      '4. Include comprehensive FAQs covering pricing, methodology, and what to expect',
      '5. Add recent local sale examples and team contact details with photos',
    ]),
  },

  // 6 — 69de01cb9c10756b6b6132ab
  {
    id: '69de01cb9c10756b6b6132ab',
    title: 'Add Quick Appraisal Form with 1-Hour Callback Promise',
    description:
      'Your website needs a prominent appraisal request form with a 1-hour callback guarantee and mobile-optimized call button. Competitors like Ray White Dubbo capture more leads with simple, fast-response forms that make it easy for property sellers to request valuations.',
    category: 'Conversion',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'property-appraisals',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 4, // niche: single form element
    tags: ['Conversion', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Add appraisal form with callback promise',
    expectedImpact:
      'Transform more website visitors into qualified seller leads by removing friction from the inquiry process. A streamlined form with callback guarantee builds trust and urgency, while mobile-optimized contact options capture prospects at their moment of highest intent.',
    keyInsights: [
      'Ray White Dubbo\'s simple appraisal form captures leads immediately at the top of their page',
      'Local property sellers prioritize agents who promise fast response times',
      'Mobile-first design with sticky call buttons significantly improves conversion rates',
    ],
    swotDrivers: [
      'Opportunity to differentiate with faster response promise than competitors',
      'Weakness in current form visibility limiting lead capture potential',
    ],
    competitorsInsight: [
      'Leading agencies use streamlined forms to reduce friction in the inquiry process',
      'Fast response promises create urgency and differentiation in competitive markets',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'Property sellers expect instant response options when researching agents',
      'Mobile users need prominent call buttons and simple forms to convert',
      'Fast callback promises differentiate you from slower-responding competitors',
    ],
    competitors: makeCompetitors([
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhitedubbo.com.au/sell/property-appraisal',
        gap: 'Captures appraisal requests immediately with prominent form placement and simple fields',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Property Appraisal – Ray White Dubbo',
          source: 'raywhitedubbo.com.au',
          snippet: 'Uses a direct, simple form to request local appraisals.',
        },
        {
          title: 'Ray White Dubbo agency profile – Domain',
          source: 'domain.com.au',
          snippet: 'Prompts users to request a free appraisal from agents.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching in Dubbo want quick ways to request a free appraisal. Your site needs a short, mobile-friendly form with a 1-hour callback promise.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de01cb9c10756b6b6132ab', [
      '1. Design and add 6-field appraisal form above the fold on relevant pages',
      '2. Include prominent \'1-hour callback guarantee\' messaging next to submit button',
      '3. Add brief privacy statement to build trust and comply with regulations',
      '4. Implement sticky \'Call Now\' button for mobile devices',
      '5. Set up automated lead routing to ensure 1-hour response promise is met',
    ]),
  },

  // 7 — 69de02549c10756b6b6132b3
  {
    id: '69de02549c10756b6b6132b3',
    title: 'Create Dubbo Suburb Service Pages for Sales & Rentals',
    description:
      'Your Dubbo office lacks dedicated suburb-specific service pages, limiting your visibility in local property searches. With mixed sentiment data but strong 5.0 rating signals, creating targeted pages for each suburb will capture more local searches and convert your established market presence into digital leads.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 15, // moderately broad: multiple suburbs
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Build suburb pages',
    expectedImpact:
      'Immediate increase in local search visibility across Dubbo suburbs, capturing property owners actively searching for agents. Each suburb page becomes a lead generation tool, showcasing your local expertise and converting searches into listing appointments.',
    keyInsights: [
      'No existing suburb-specific service pages found despite strong local presence',
      'Mixed sentiment data suggests visibility gaps affecting your online reputation',
      'Changing consumer expectations require detailed local information before contact',
    ],
    swotDrivers: [
      'Digital Expansion opportunity to match established offline presence',
      'Combat competition from other agencies with better local content',
    ],
    competitorsInsight: [
      'Active local competition requires stronger digital presence',
      'Suburb pages are standard for successful agencies in regional markets',
    ],
    targetPages: [
      'https://raineandhorne.com.au/dubbo',
      'https://raineandhorne.com.au/dubbo/sales',
      'https://raineandhorne.com.au/dubbo/property-management',
    ],
    whyItWorks: [
      'Missing suburb pages means losing potential sellers and landlords searching for \'property management [suburb name]\'',
      'Competitors are capturing these high-intent local searches while you remain invisible',
      'Your 5.0 rating and established presence aren\'t discoverable without proper pages',
    ],
    competitors: makeCompetitors([
      {
        name: 'Local Dubbo Agencies',
        gap: 'Competitors likely have suburb pages capturing local searches you\'re missing',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Local Search Optimization',
          source: 'chatGPT',
          snippet: 'Suburb-specific pages are essential for local real estate visibility',
        },
        {
          title: 'Content Strategy Analysis',
          source: 'gemini',
          snippet: 'Missing local content creates gaps in search presence',
        },
        {
          title: 'SWOT Analysis',
          source: 'SWOT',
          snippet: 'Digital expansion identified as key opportunity',
        },
      ],
      'https://raineandhorne.com.au/dubbo',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'Prospects with changing expectations look online for clear, local service information. No Dubbo suburb-specific pages exist.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de02549c10756b6b6132b3', [
      '1. List priority Dubbo suburbs and core services: sales and property management',
      '2. Write plain-language pages covering what you do, process, FAQs, and contact',
      '3. Show recent local outcomes and agent names to prove expertise',
      '4. Link these pages from the homepage and relevant profiles',
    ]),
  },

  // 8 — 69de02549c10756b6b6132b4
  {
    id: '69de02549c10756b6b6132b4',
    title: 'Showcase Dubbo Success Stories to Drive More Enquiries',
    description:
      'Your agency has earned perfect 5.0 ratings and high client satisfaction, but this powerful proof isn\'t visible online. By publishing local case studies and testimonials, you\'ll convert more website visitors into enquiries by showing real results from real Dubbo clients.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 10, // region-specific
    tags: ['Content', 'Trust Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish case studies with outcomes',
    expectedImpact:
      'Transform your hidden success into visible proof that drives enquiries. When prospects see specific Dubbo properties you\'ve sold, prices achieved, and happy client testimonials, they\'ll choose you over competitors who only make claims without evidence.',
    keyInsights: [
      'You have excellent client satisfaction but insufficient public visibility of these results',
      'Strong brand recognition provides the perfect platform to showcase real outcomes',
      'Local proof matters more than generic promises in property decisions',
    ],
    swotDrivers: [
      'High Client Satisfaction — leverage your perfect ratings',
      'Successful Outcomes — turn past wins into future listings',
      'Strong Brand Recognition — add substance to your known name',
    ],
    competitorsInsight: [
      'Competitors with visible case studies likely winning listings despite inferior service',
      'Market lacks sufficient location-specific review data, creating opportunity for first-movers',
    ],
    targetPages: [
      'https://raineandhorne.com.au/dubbo/case-studies',
      'https://raineandhorne.com.au/dubbo/testimonials',
    ],
    whyItWorks: [
      'Perfect 5.0 rating and high satisfaction are invisible to potential clients searching online',
      'Buyers and sellers want proof of local success before choosing an agent',
      'Competitors may be winning listings simply by showing their results better',
    ],
    competitors: [],
    sources: makeSources(
      [
        {
          title: 'Market Analysis',
          source: 'chatGPT',
          snippet: 'Reports excellent satisfaction but lacks public visibility',
        },
        {
          title: 'Competitive Research',
          source: 'perplexity',
          snippet: 'Insufficient publicly available data despite strong performance',
        },
        {
          title: 'Business Strengths',
          source: 'SWOT',
          snippet: 'High client satisfaction and successful outcomes identified',
        },
      ],
      'https://raineandhorne.com.au/dubbo/case-studies',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'One source reports excellent satisfaction, but other sources say there isn\'t enough public data.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de02549c10756b6b6132b4', [
      '1. Contact 10 recent satisfied clients for permission to share their success stories',
      '2. Document each story: property details, challenge faced, solution provided, outcome achieved',
      '3. Capture client testimonials via video (best), written quotes, or audio recordings',
      '4. Create dedicated case studies page showing property photos, sale prices, and client quotes',
      '5. Add testimonial widgets to homepage and key service pages for instant credibility',
    ]),
  },

  // 9 — 69de02549c10756b6b6132b5
  {
    id: '69de02549c10756b6b6132b5',
    title: 'Set Clear PM Response Standards to Convert More Leads',
    description:
      'Property management inquiries often stall when landlords can\'t find clear communication standards and response times. By publishing explicit service commitments, you\'ll reduce friction in the decision process and showcase your professionalism.',
    category: 'Conversion',
    impactLabel: 'High impact',
    effort: 'Bigger lift',
    themeId: 'residential-property-leasing',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 6, // niche: internal process page
    tags: ['Conversion', 'High Impact'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish service standards',
    expectedImpact:
      'Publishing clear service standards will reduce objections during the inquiry process and increase conversion rates from website visitors to actual property management leads. Landlords who see defined response times are more likely to trust you with their investment properties.',
    keyInsights: [
      'Despite a perfect 5.0 rating showing strong satisfaction, this strength isn\'t being leveraged on the website',
      'The absence of published communication standards creates unnecessary friction for potential clients',
      'Competitors who clearly state service commitments capture leads that might otherwise choose you',
    ],
    swotDrivers: [
      'Occasional complaints about administration in property management',
      'Changing Consumer Expectations',
      'Professionalism and Expertise',
    ],
    competitorsInsight: [
      'Competitors who publish clear service standards capture trust-sensitive landlords earlier in the decision process',
      'The absence of visible communication commitments creates an opportunity gap competitors can exploit',
    ],
    targetPages: [
      'https://raineandhorne.com.au/dubbo/property-management-support',
      'https://raineandhorne.com.au/dubbo/communication-standards',
    ],
    whyItWorks: [
      'Landlords choose property managers based on trust and clear communication expectations',
      'Admin complaints noted in SWOT analysis indicate gaps in setting proper expectations',
      'Changing consumer expectations demand transparency before they even inquire',
    ],
    competitors: [],
    sources: makeSources(
      [
        {
          title: 'SWOT Analysis - Administrative Weaknesses',
          source: 'SWOT',
          snippet: 'Occasional complaints about administration in property management',
        },
        {
          title: 'Market Threat Assessment',
          source: 'SWOT',
          snippet: 'Changing Consumer Expectations',
        },
        {
          title: 'Customer Satisfaction Data',
          source: 'gemini',
          snippet: 'Perfect 5.0 rating indicating strong satisfaction',
        },
      ],
      'https://raineandhorne.com.au/dubbo/property-management-support',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'Before landlords enquire, they want simple, clear communication standards they can trust. No such page exists.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de02549c10756b6b6132b5', [
      '1. Define and document your actual response times for urgent (4 hours), routine (24 hours), and maintenance requests (48 hours)',
      '2. Create a simple service standards page listing communication commitments, update frequencies, and escalation procedures',
      '3. Add direct contact information for different request types: urgent repairs, routine inquiries, and after-hours emergencies',
      '4. Include a brief FAQ addressing the most common administrative concerns raised by landlords',
      '5. Place a prominent inquiry form and phone number on every property management page',
    ]),
  },

  // 10 — 69de03209c10756b6b6132bd
  {
    id: '69de03209c10756b6b6132bd',
    title: 'Complete Domain, Realestate and Farmbuy Rural Profiles',
    description:
      'Major property portals like Domain, Realestate.com.au, and Farmbuy dominate rural property searches in Dubbo, appearing frequently in search results and citation sources. Completing and optimizing your profiles on these platforms will significantly increase your visibility to rural buyers and sellers.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'rural-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 20, // brand/website-wide portals
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Complete key portal profiles',
    expectedImpact:
      'By establishing a strong presence on these dominant property portals, you\'ll capture more leads from rural property seekers. This increased visibility will drive more direct inquiries, phone calls, and website traffic while simultaneously strengthening your local SEO through improved citation consistency.',
    keyInsights: [
      'Property portals serve as both lead generation platforms and critical citation sources for local SEO',
      'Rural property searches have unique characteristics that require specialized portal optimization',
    ],
    swotDrivers: [
      'Opportunity to leverage established portal traffic for rural property searches',
      'Threat from competitors who maintain active, optimized portal profiles',
    ],
    competitorsInsight: [
      'Major property portals rank prominently for rural property searches, making profile optimization essential',
      'Competitors with complete, active portal profiles capture leads before prospects reach agency websites',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'These portals appear prominently in your citation sources, indicating Google uses them to verify business information',
      'Rural buyers and sellers typically start their property search on these major portals before contacting agents',
      'Consistent business details across portals strengthen Google\'s trust signals and improve local search rankings',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: 'Competitors likely have established portal presence capturing rural property searches',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au',
        gap: 'Active portal profiles provide competitive advantage in rural market visibility',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhiterichardsonandsinclair.com.au',
        gap: 'Major franchise benefits from strong portal relationships and visibility',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Domain Australia',
          source: 'domain.com.au',
          snippet: 'Major Australian property portal used by buyers and sellers.',
        },
        {
          title: 'realestate.com.au',
          source: 'realestate.com.au',
          snippet: 'Leading property portal where agencies list and promote properties.',
        },
        {
          title: 'Farmbuy',
          source: 'farmbuy.com',
          snippet: 'Specialist portal for farms and rural properties in Australia.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching on Google for rural property sales in Dubbo often start on big property portals. Your site likely lacks fully completed, rural-focused profiles.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de03209c10756b6b6132bd', [
      '1. Claim or verify your agency profiles on Domain.com.au, Realestate.com.au, and Farmbuy.com',
      '2. Ensure exact business name, address, and phone number consistency across all platforms',
      '3. Add rural-specific service descriptions, highlighting expertise in farms, lifestyle blocks, and acreage',
      '4. Upload professional team photos and direct website links to build trust',
      '5. Populate profiles with current rural listings and recent sales with detailed, keyword-rich descriptions',
    ]),
  },

  // 11 — 69de03209c10756b6b6132be
  {
    id: '69de03209c10756b6b6132be',
    title: 'Add Rural Sales Results Hub with Local Proof',
    description:
      'Competitors like Elders and Ray White showcase dedicated rural property sales results that build seller trust and improve search visibility. Creating a browsable hub of your recent rural sales with filters, case studies, and agent links will demonstrate your local market expertise.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'rural-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 9, // region-specific: rural Dubbo
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish rural sales results hub',
    expectedImpact:
      'A professional rural sales hub will position your agency as the local rural property expert, leading to more seller inquiries and buyer registrations. This social proof will improve your search rankings for rural property queries.',
    keyInsights: [
      'Rural property sellers specifically look for agencies with proven local results before making contact',
      'Search engines favor websites that demonstrate expertise through comprehensive result showcases',
    ],
    swotDrivers: [
      'Competitors display detailed rural sales data that attracts seller trust',
      'Missing rural proof content limits visibility in local property searches',
    ],
    competitorsInsight: [
      'Leading agencies use rural sales proof as a primary trust signal for high-value property sellers',
      'Detailed sales results pages serve as powerful content for search engines and AI systems to reference',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'Rural sellers research agencies online before choosing who to trust with their valuable properties',
      'Google and AI systems prioritize websites with clear, citable proof of local market activity',
      'Competitors already showcase rural results, putting you at a disadvantage for seller inquiries',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubborural.eldersrealestate.com.au/rural/sold/',
        gap: 'Features a comprehensive sold rural listings hub that builds immediate seller confidence',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhiterichardsonandsinclair.com.au/properties/sold-rural/nsw/dubbo-2830/lifestyle/3110494',
        gap: 'Displays detailed individual rural property sales pages with comprehensive information',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au/farms-for-sale/',
        gap: 'Maintains an active rural property hub that attracts and engages potential buyers',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Sold Rural Land & Properties | Elders Real Estate Dubbo Rural',
          source: 'dubborural.eldersrealestate.com.au',
          snippet: 'Shows a hub of sold rural properties for the Dubbo area.',
        },
        {
          title: '169L Narromine Road, Dubbo – Sold Rural Lifestyle Property',
          source: 'raywhiterichardsonandsinclair.com.au',
          snippet: 'Example of a detailed rural sold page with key property details.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching on Google for rural property sales in Dubbo want to see proven local results. Your site is missing an easy-to-browse page showing recent rural sales.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de03209c10756b6b6132be', [
      '1. Create a dedicated Rural Sales Results page featuring your recent rural and lifestyle property sales',
      '2. Include filterable property details: type, acreage, water features, location, and results',
      '3. Add brief case studies for each sale highlighting unique challenges and outcomes',
      '4. Link each result to the responsible agent\'s profile to build individual credibility',
      '5. Prominently link the hub from your homepage and rural services pages',
    ]),
  },

  // 12 — 69de03209c10756b6b6132bf
  {
    id: '69de03209c10756b6b6132bf',
    title: 'Create Rural Property Sales Page to Capture Dubbo Market',
    description:
      'Your competitors are winning rural property searches in Dubbo with dedicated rural service pages. Without a clear rural property page, you\'re invisible to farmers and lifestyle buyers searching online. Creating this page will immediately boost your visibility in Google and AI answers for high-value rural sales.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'rural-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 7, // niche: single rural landing page
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish rural property sales page',
    expectedImpact:
      'Capturing even 2-3 more rural listings per year significantly boosts revenue given higher sale prices. You\'ll appear in Google searches for \'rural property Dubbo\' and \'farms for sale Dubbo\', driving qualified inquiries from both buyers and sellers.',
    keyInsights: [
      'Elders Dubbo runs an entire subdomain for rural properties showing market demand',
      'Matt Hansen\'s dedicated farms hub positions them as the rural expert',
      'Your site lacks any focused rural content despite Dubbo\'s strong agricultural market',
    ],
    swotDrivers: [
      'Weakness: No dedicated rural content while competitors have full sections',
      'Opportunity: Rural properties offer higher commissions and less competition',
      'Threat: Losing high-value rural listings to digitally-focused competitors',
    ],
    competitorsInsight: [
      'Competitors treat rural as a distinct market segment requiring dedicated content',
      'Focused rural pages help Google and AI understand and recommend their services',
      'Rural-specific content builds trust with farmers who want specialized expertise',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'Rural properties command higher commissions but you\'re missing from searches',
      'Elders and Matt Hansen dominate Google with dedicated rural pages',
      'Buyers and sellers can\'t find your rural expertise without a clear landing page',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubborural.eldersrealestate.com.au/',
        gap: 'Entire subdomain dedicated to rural properties captures all rural searches',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au/farms-for-sale/',
        gap: 'Farms hub page ranks highly and positions them as rural specialists',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhiterichardsonandsinclair.com.au',
        gap: 'Active rural listings visible online attract buyer inquiries',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Elders Real Estate Dubbo Rural | Local Rural Experts',
          source: 'dubborural.eldersrealestate.com.au',
          snippet: 'Dedicated rural site for the Dubbo office.',
        },
        {
          title: 'Farms for Sale | Matt Hansen Real Estate',
          source: 'matthansenrealestate.com.au',
          snippet: 'Hub page promoting farm and rural listings near Dubbo.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching for rural properties for sale in Dubbo need a clear page explaining your rural sales service. No dedicated rural page exists.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de03209c10756b6b6132bf', [
      '1. Create \'Rural Property Sales Dubbo\' page with clear service offering',
      '2. Include sections: Selling Process, Property Types, Market Insights, FAQs',
      '3. Add recent rural sales results with prices and testimonials',
      '4. Feature your rural agents with their expertise and direct contact details',
      '5. Place prominent \'Free Rural Appraisal\' and \'View Rural Listings\' CTAs',
    ]),
  },

  // 13 — 69de03de9c10756b6b6132c7
  {
    id: '69de03de9c10756b6b6132c7',
    title: 'Claim and Optimize Top Property Directory Profiles',
    description:
      'Major property directories like Domain and Commercial Real Estate rank highly for Dubbo searches, but your business appears to have incomplete or unclaimed profiles. Strengthening your presence on these trusted platforms will increase visibility, capture more leads, and reinforce your market position.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'commercial-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 20, // brand/website-wide directories
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Upgrade directory profiles now',
    expectedImpact:
      'Immediate increase in qualified commercial property inquiries through multiple trusted channels. Enhanced local search visibility as Google recognizes consistent business information across authoritative sites.',
    keyInsights: [
      'Property directories dominate first page results for Dubbo commercial searches',
      'Competitors like Elders (22.4% visibility) are capturing leads through better directory optimization',
    ],
    swotDrivers: [
      'Weakness: Incomplete directory presence losing leads to competitors',
      'Opportunity: Quick implementation can immediately capture market share',
    ],
    competitorsInsight: [
      'Competitors are capturing significant market share through directory dominance',
      'Directory listings often outrank agency websites, making them critical lead sources',
    ],
    targetPages: [
      'https://commercialrealestate.com.au',
      'https://domain.com.au',
      'https://lease.com.au',
      'https://localsearch.com.au',
      'https://rhcommercial.com.au',
    ],
    whyItWorks: [
      'Trusted property sites consistently outrank individual agency websites in local searches',
      'Missing profiles mean lost leads going directly to competitors with stronger directory presence',
      'Google uses directory citations to verify business legitimacy and boost local rankings',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: '22.4% visibility advantage through comprehensive directory presence',
      },
      {
        name: 'Elders Commercial Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: '20.8% visibility from optimized commercial property profiles',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://domain.com.au',
        gap: '17.1% visibility leveraging Domain.com.au prominence',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://domain.com.au',
        gap: '14.6% visibility through established directory profiles',
      },
    ]),
    sources: [],
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People in Dubbo search for commercial property sales and companies. Citation sources like commercialrealestate.com.au and domain.com.au show higher presence than Raine & Horne Dubbo.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de03de9c10756b6b6132c7', [
      '1. Audit and claim profiles on Commercial Real Estate, Domain, and Lease.com.au within 24 hours',
      '2. Standardize NAP exactly as \'Raine & Horne Dubbo\' across all platforms',
      '3. Upload recent commercial property photos and current team member details',
      '4. Add active commercial listings and recent sales to showcase market activity',
      '5. Set quarterly calendar reminders to refresh content and maintain accuracy',
    ]),
  },

  // 14 — 69de03de9c10756b6b6132c8
  {
    id: '69de03de9c10756b6b6132c8',
    title: 'Build Dubbo Commercial Property Sales Hub to Capture More Leads',
    description:
      'Your competitors are winning valuable commercial property searches because you lack dedicated pages for office, retail, industrial, and land sales in Dubbo. Creating a comprehensive commercial sales hub with property-type specific pages will help you capture more seller and buyer inquiries.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'commercial-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 11, // region-specific: commercial Dubbo
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Build hub pages',
    expectedImpact:
      'By creating dedicated commercial property pages, you\'ll capture more specific searches from both sellers looking to list and buyers searching for properties. This will increase qualified inquiries and help you maintain your market leadership position.',
    keyInsights: [
      'You currently lead overall visibility but lack the specific topic pages that drive extra commercial property wins',
      'Type-focused pages (office, retail, industrial) defend against competitors\' brand searches and capture long-tail terms',
    ],
    swotDrivers: [
      'Strength: Market leadership position to build from',
      'Opportunity: Unserved search demand for property-type specific content',
      'Threat: Competitors gaining ground with targeted commercial pages',
    ],
    competitorsInsight: [
      'While you lead in overall visibility, competitors are capturing valuable commercial property searches with targeted pages',
      'Type-specific pages (office, retail, industrial) are proven to defend against competitors\' brand search advantages',
    ],
    targetPages: [
      'https://raineandhorne.com.au/dubbo-commercial-property-sales',
      'https://raineandhorne.com.au/dubbo-commercial-office-sales',
      'https://raineandhorne.com.au/dubbo-commercial-retail-sales',
      'https://raineandhorne.com.au/dubbo-industrial-property-sales',
      'https://raineandhorne.com.au/dubbo-commercial-land-sales',
    ],
    whyItWorks: [
      'People search for commercial properties by specific type (office, retail, industrial) and you\'re missing these targeted searches',
      'Strong citation sites dominate these terms — clear topic pages help you compete effectively',
      'Google and AI systems need focused pages to properly route commercial property seekers to your business',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: 'They have 22.4% visibility in commercial searches — topic pages will help you widen your lead',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://domain.com.au',
        gap: 'Capturing 14.6% of commercial searches — your dedicated pages will outcompete their generic content',
      },
    ]),
    sources: [],
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People search for commercial property for sale in Dubbo by type. Your site lacks a single hub with dedicated pages by property type.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de03de9c10756b6b6132c8', [
      '1. Build main Dubbo commercial sales hub covering your services, sales process, and commercial valuations',
      '2. Create dedicated child pages for office sales, retail sales, industrial property, and commercial land',
      '3. Add 3-5 recent notable sales with brief case studies on each property type page',
      '4. Place clear contact forms and free appraisal CTAs prominently on every page',
      '5. Implement smart internal linking between hub, child pages, and related listings',
    ]),
  },

  // 15 — 69de03de9c10756b6b6132c9
  {
    id: '69de03de9c10756b6b6132c9',
    title: 'Add Machine-Readable Business Details to Boost Google Trust',
    description:
      'Your website needs consistent, machine-readable business information across all pages to help Google and AI systems properly understand your office details and property listings. This technical improvement will strengthen your search visibility against competitors.',
    category: 'Technical SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'commercial-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 20, // brand/website-wide schema markup
    tags: ['Technical SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Add structured business details sitewide',
    expectedImpact:
      'Implementing structured data will create stronger trust signals with Google, leading to improved visibility across all commercial property searches in Dubbo. This technical foundation protects your current search rankings while opening opportunities for featured snippets.',
    keyInsights: [
      'Your business details aren\'t consistently presented in a way search engines can easily understand',
      'Trusted competitors like Elders Real Estate have strong citation profiles that Google relies on',
      'Simple technical improvements can defend your market position with minimal effort',
    ],
    swotDrivers: [
      'Protects current search visibility against technically stronger competitors',
      'Creates foundation for future AI-driven search features',
    ],
    competitorsInsight: [
      'Competitors with trusted, consistent business details are better positioned for AI-generated search results',
      'Technical clarity is becoming a key differentiator in local commercial property searches',
    ],
    targetPages: [
      'https://raineandhorne.com.au/',
      'https://raineandhorne.com.au/dubbo-commercial-property-sales',
      'https://raineandhorne.com.au/commercial-listings',
    ],
    whyItWorks: [
      'Google relies on consistent business information to trust and rank local businesses higher',
      'Machine-readable data helps your listings appear correctly in search results and AI-generated answers',
      'Competitors with better technical implementation can overtake your current market position',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: 'Their consistent business details help them maintain strong local search presence',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://domain.com.au',
        gap: 'Better technical implementation could help them overtake your current rankings',
      },
    ]),
    sources: [],
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'Trusted citation sources present strong, consistent business information that Google relies on. Your site may not present business details in a consistent, machine-readable way.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de03de9c10756b6b6132c9', [
      '1. Add consistent NAP (Name, Address, Phone) markup to all pages using Schema.org LocalBusiness format',
      '2. Implement structured data for property listings including price, size, location, and agent details',
      '3. Ensure office hours, contact information, and business details appear identically across all pages',
      '4. Validate implementation using Google\'s Rich Results Test and fix any detected errors',
    ]),
  },

  // 16 — 69de04cc9c10756b6b6132d1
  {
    id: '69de04cc9c10756b6b6132d1',
    title: 'Strengthen Directory Profiles to Capture More Dubbo Leads',
    description:
      'Major property directories like Realcommercial.com.au and CommercialRealEstate.com.au dominate Dubbo commercial property searches. Your incomplete or missing profiles on these high-traffic sites means lost inquiries while competitors capture leads.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'commercial-property-leasing',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 13, // moderately broad: Dubbo directories
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Claim and optimize directory listings',
    expectedImpact:
      'Immediately expand your digital footprint across platforms where active property seekers search. These optimized profiles will generate direct inquiry calls, website referrals, and strengthen your overall online presence. Directory listings work 24/7 to capture leads you\'re currently missing.',
    keyInsights: [
      'Top directories command significant search visibility with Realcommercial holding 11.9% share of voice',
      'Your competitors maintain active profiles capturing leads while your listings remain incomplete',
      'Directory optimization requires minimal effort but delivers ongoing lead generation',
    ],
    swotDrivers: [
      'Opportunity: Untapped lead sources from high-traffic property platforms',
      'Threat: Competitors with complete profiles capture your potential customers',
    ],
    competitorsInsight: [
      'All major competitors maintain active profiles on top property directories',
      'Directory listings often outrank agency websites for commercial property searches',
      'Competitors use directories as lead generation funnels directing to their services',
    ],
    targetPages: [
      'https://realcommercial.com.au',
      'https://commercialrealestate.com.au',
      'https://localsearch.com.au',
    ],
    whyItWorks: [
      'Property seekers search multiple directories before contacting agents; missing profiles mean lost opportunities',
      'Complete listings on trusted directories boost Google\'s confidence in your business legitimacy',
      'Directory traffic converts at higher rates because users have high commercial intent',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: 'Maintains 22.4% visibility with active directory presence while you remain unlisted',
      },
      {
        name: 'Elders Commercial Dubbo',
        pageUrl: 'https://eldersrealestate.com.au',
        gap: 'Captures 20.8% market visibility through comprehensive directory profiles',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au',
        gap: 'Achieves 17.1% visibility by maintaining updated directory listings',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Realcommercial.com.au directory dominance',
          source: 'Market Analysis',
          snippet: 'Commands 11.9% share of voice in commercial property searches',
        },
        {
          title: 'CommercialRealEstate.com.au market presence',
          source: 'Market Analysis',
          snippet: 'Captures 8.33% of commercial property search visibility',
        },
        {
          title: 'Localsearch.com.au local impact',
          source: 'Market Analysis',
          snippet: 'Holds 5.95% share for local business searches',
        },
      ],
      'https://realcommercial.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching for commercial property leasing in Dubbo check top directories. Your business is missing fully built, consistent Dubbo profiles on these portals.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de04cc9c10756b6b6132d1', [
      '1. Claim or create business profiles on Realcommercial, CommercialRealEstate, and Localsearch within 24 hours',
      '2. Complete all profile fields including Dubbo office address, direct phone, business hours, and service areas',
      '3. Upload professional team photos, office images, and 10-15 recently leased property examples',
      '4. Write compelling business descriptions highlighting your Dubbo expertise and commercial property specialization',
      '5. Add direct links to your website\'s commercial leasing pages and contact forms',
      '6. Set monthly reminders to update listings with new properties and refresh content',
    ]),
  },

  // 17 — 69de04cc9c10756b6b6132d2
  {
    id: '69de04cc9c10756b6b6132d2',
    title: 'Upgrade Property Listings with Floorplans, Terms & Photos',
    description:
      'Your commercial property listings lack essential details that tenants need to make decisions. Adding floorplans, lease terms, zoning information, and high-quality photos will help your listings rank better in Google searches and convert more visitors into qualified inspection requests.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'commercial-property-leasing',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 14, // moderately broad: all active listings
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Enhance listing details now',
    expectedImpact:
      'Transform your property listings into lead-generating assets by providing all the information tenants need in one place. This will improve your Google visibility for property-specific searches, keep visitors on your site longer, and generate more qualified inspection requests.',
    keyInsights: [
      'Competitors are winning searches with address-specific pages containing detailed specifications',
      'Missing property details force potential tenants to call for basic information, creating friction',
      'Rich listings with photos and floorplans convert browsers into inspection bookings',
    ],
    swotDrivers: [
      'Weakness: Incomplete listings losing to competitor pages in search results',
      'Opportunity: Capture high-intent commercial property searches with enhanced content',
    ],
    competitorsInsight: [
      'Competitors publish individual pages for each property address, improving their search visibility',
      'Clear \'Enquire Now\' and inspection booking buttons appear prominently on all competitor listings',
      'Detailed specifications help competitors pre-qualify leads before they make contact',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'Specific details answer key tenant questions upfront, reducing unqualified inquiries',
      'Detailed property pages rank significantly better in Google searches for \'commercial property Dubbo\'',
      'Rich media and comprehensive information builds trust and attracts serious, qualified tenants',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://www.eldersrealestate.com.au/commercial/rent/280-gipps-street-dubbo-nsw-2830-300P134693/',
        gap: 'Features complete lease terms, zoning details, building specifications, and prominent enquiry buttons that convert visitors',
      },
      {
        name: 'Elders Commercial Dubbo',
        pageUrl: 'https://www.eldersrealestate.com.au/commercial/rent/24-church-street-dubbo-nsw-2830-300P135282/',
        gap: 'Maintains current Dubbo commercial listings with comprehensive property details that rank well in searches',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://www.raywhite.com/nsw/dubbo/2104266',
        gap: 'Actively promotes commercial availability with clear contact information and property specifications',
      },
    ]),
    sources: makeSources(
      [
        {
          title: '2/80 Gipps Street, Dubbo – Leased | Elders Real Estate',
          source: 'eldersrealestate.com.au',
          snippet: 'Shows detailed lease terms, zoning, building area, and enquiry options.',
        },
        {
          title: '24 Church Street, Dubbo – For Lease | Elders Real Estate',
          source: 'eldersrealestate.com.au',
          snippet: 'Active Dubbo lease page with specifics and contact options.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching for commercial properties to lease in Dubbo want clear details like floor area, zoning, lease terms, and viewing info. Your site is missing consistently structured property details.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de04cc9c10756b6b6132d2', [
      '1. Create standard template sections for all listings: floor area, zoning, lease terms, outgoings, parking details',
      '2. Upload professional photos, floorplans, and 360-degree virtual tours where available',
      '3. Add downloadable PDF brochures with property specifications and agent contact details',
      '4. Install clear \'Book Inspection\' and \'Enquire Now\' buttons prominently on each listing',
      '5. Link each property listing to your main Dubbo commercial leasing hub page for better SEO',
    ]),
  },

  // 18 — 69de04cc9c10756b6b6132d3
  {
    id: '69de04cc9c10756b6b6132d3',
    title: 'Create Dubbo Commercial Leasing Hub for Local Search Dominance',
    description:
      'Your competitors are capturing valuable commercial leasing searches in Dubbo with dedicated service hubs. Creating a comprehensive leasing hub that explains processes, pricing, and FAQs will establish your authority in the local market and capture high-intent searches.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'commercial-property-leasing',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 9, // region-specific: commercial Dubbo hub
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Build Dubbo commercial leasing service hub',
    expectedImpact:
      'This hub will capture broad commercial leasing searches in Dubbo, positioning your agency as the go-to resource for businesses seeking commercial property. You\'ll see increased organic traffic, more qualified inquiries, and improved visibility in both traditional search results and AI-powered answers.',
    keyInsights: [
      'Local businesses actively search for commercial leasing guidance specific to Dubbo',
      'Comprehensive service pages outrank basic listing pages in modern search results',
    ],
    swotDrivers: [
      'Opportunity: Capture unmet demand for commercial leasing information in Dubbo',
      'Threat: Competitors are already establishing authority in this space',
    ],
    competitorsInsight: [
      'Competitors with clear local leasing pages are winning comparison searches',
      'Comprehensive explainers combined with current listings create trust and drive conversions',
    ],
    targetPages: ['https://raineandhorne.com.au'],
    whyItWorks: [
      'Businesses searching for commercial leasing in Dubbo need clear information about processes, costs, and legal requirements',
      'Competitors like Elders Commercial Dubbo are already ranking for these high-value searches',
      'Google and AI search tools prioritize comprehensive service hubs that answer common questions',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://commercialdubbo.eldersrealestate.com.au/commercial/rent/',
        gap: 'They have dedicated local leasing pages that capture Dubbo-specific commercial property searches',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au',
        gap: 'Achieving 17.1% visibility in local searches, competing directly for commercial leasing attention',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Commercial Properties For Lease | Elders Commercial Dubbo',
          source: 'eldersrealestate.com.au',
          snippet: 'Local commercial leasing pages attract searchers comparing agents in Dubbo.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching for commercial property leasing in Dubbo also look for how leasing works, typical costs, and legal steps. Your site lacks a focused Dubbo leasing hub.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de04cc9c10756b6b6132d3', [
      '1. Create main hub page covering commercial leasing services for office, retail, and industrial properties',
      '2. Add detailed sections on leasing process, typical pricing ranges, and timeline expectations',
      '3. Include FAQ section addressing legal documents, solicitor requirements, and maintenance responsibilities',
      '4. Showcase recent successful lease transactions with client testimonials',
      '5. Integrate strong calls-to-action and direct links to current commercial listings',
    ]),
  },

  // 19 — 69de062f9c10756b6b6132db
  {
    id: '69de062f9c10756b6b6132db',
    title: 'Update Auction Details on Key Property Portals',
    description:
      'Your profiles on realestate.com.au and Domain may not clearly highlight auction services and upcoming events. Strengthening these listings will help you show up higher in search results for Dubbo auction searches and appear in AI answers, driving more calls and inquiries.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'real-estate-auctions',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 18, // moderately broad: key national portals
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Update portal auction listings',
    whyItWorks: [
      'Major property directories appear on page one for Dubbo auction searches and feed AI answers',
      'Completing and improving these listings adds more places your business can be discovered',
      'Strong directory pages often appear on page one and feed AI answers with accurate data',
    ],
    competitors: [],
    sources: makeSources(
      [
        {
          title: 'realestate.com.au (citation source)',
          source: 'https://realestate.com.au',
          snippet: 'Listed in provided citations with notable Share of Voice.',
        },
        {
          title: 'domain.com.au (citation source)',
          source: 'https://domain.com.au',
          snippet: 'Listed in provided citations as a key directory.',
        },
      ],
      'https://realestate.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People in Dubbo search for real estate auctions and agencies that run them. Your profiles may not clearly highlight auction services and upcoming events.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de062f9c10756b6b6132db', [
      'Claim or access your profiles on realestate.com.au and Domain.',
      'Add clear \'Real Estate Auctions in Dubbo\' service wording and service area.',
      'Upload recent auction results, upcoming dates, photos, and team contacts.',
      'Confirm phone, address, hours, and website are accurate and consistent.',
      'Review monthly to keep listings fresh and active.',
    ]),
  },

  // 20 — 69de062f9c10756b6b6132dc
  {
    id: '69de062f9c10756b6b6132dc',
    title: 'Create Upcoming Auctions Page for Dubbo',
    description:
      'People search for real estate auctions today and upcoming auction dates in Dubbo. Matt Hansen Real Estate and Ray White Dubbo show upcoming auctions on their sites, helping customers act fast. Your site lacks a single page listing all upcoming auctions in one place.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'real-estate-auctions',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 7, // niche: single Dubbo auction calendar page
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish upcoming auctions page',
    whyItWorks: [
      'Captures \'auctions Dubbo\' and \'auctions today\' searches with clear, current information',
      'Builds authority and repeat visits as buyers and sellers check dates regularly',
      'Competitors showcase upcoming auctions prominently, directing motivated buyers to their sites',
    ],
    competitors: makeCompetitors([
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au/upcoming-auctions/',
        gap: 'Dedicated page showing upcoming auctions in Dubbo captures time-sensitive search traffic',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhitedubbo.com.au/',
        gap: 'Highlights professional auction sales and shows new upcoming auctions on homepage',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Upcoming Property Auctions in Dubbo - Matt Hansen Real Estate',
          source: 'https://matthansenrealestate.com.au/upcoming-auctions/',
          snippet: 'Dedicated page showing upcoming auctions in Dubbo.',
        },
        {
          title: 'Ray White Dubbo — Homepage mentions auctions',
          source: 'https://raywhitedubbo.com.au/',
          snippet: 'Highlights professional auction sales and shows new upcoming auctions.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People search for real estate auctions today and upcoming auction dates in Dubbo. Your site lacks a single page listing all upcoming auctions.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de062f9c10756b6b6132dc', [
      'Publish an \'Upcoming Auctions – Dubbo\' page with a simple weekly calendar.',
      'List property address/suburb, auction date/time, on-site/online, and contact.',
      'Add filters for residential/commercial and link to each property detail page.',
      'Link this page from the homepage and main menu; update weekly.',
      'Include a short form: \'Get auction alerts\' to capture emails.',
    ]),
  },

  // 21 — 69de062f9c10756b6b6132dd
  {
    id: '69de062f9c10756b6b6132dd',
    title: 'Build Auction Services Page with Process and FAQs',
    description:
      'People search for real estate auction services in Dubbo to understand the selling method and costs. Your site lacks one detailed page that explains the full auction service, process, pricing approach, and local coverage. Creating this page will help you show up higher in search results and appear in AI answers.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'real-estate-auctions',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 6, // niche: single auction services page
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish auction services page',
    whyItWorks: [
      'A focused service page answers key questions and attracts sellers ready to act',
      'It also gives AI and Google clear information to cite about your auction services',
      'Elders publishes a comprehensive seller guide explaining auction as a method — this is the standard buyers expect',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubbo.eldersrealestate.com.au/wp-content/uploads/sites/82/2025/07/Elders_GuidetoSelling_Print.pdf',
        gap: 'Explains auction as a method of sale within a comprehensive seller guide that Google indexes',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Elders Real Estate Dubbo – Guide to Selling (PDF)',
          source: 'https://dubbo.eldersrealestate.com.au',
          snippet: 'Explains auction as a method of sale within a seller guide.',
        },
      ],
      'https://raineandhorne.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People search for real estate auction services in Dubbo to understand the selling method and costs. No dedicated auction service page exists on your site.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de062f9c10756b6b6132dd', [
      'Outline service steps: appraisal, campaign, open homes, auction day, settlement.',
      'Explain pricing approach, marketing packages, typical timelines, and vendor checklist.',
      'Show recent local auction examples and plain-language FAQs for buyers and sellers.',
      'State service area: Dubbo and nearby suburbs; add contact options.',
      'Link this page from Buy, Sell, and homepage navigation.',
    ]),
  },

  // 22 — 69de06ba9c10756b6b6132e5
  {
    id: '69de06ba9c10756b6b6132e5',
    title: 'Create Dubbo Residential Sales Hub',
    description:
      'People searching on Google want residential property sales help in Dubbo and clear next steps. Competitors have dedicated residential sale and sold pages. Your site lacks a single, detailed Dubbo sales hub bringing process, pricing guidance, suburb coverage and FAQs together.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 15, // moderately broad: residential Dubbo hub
    tags: ['Content', 'Content Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Build residential sales hub page',
    whyItWorks: [
      'A focused hub helps Google understand your offer and directs visitors to contact you',
      'Expect more qualified inquiries from people ready to sell their Dubbo property',
      'Competitors with dedicated sales hubs capture sellers earlier in the research process',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubbo.eldersrealestate.com.au',
        gap: 'Competitor page listing residential properties for sale in Dubbo',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhitedubbo.com.au',
        gap: 'Competitor page listing sold homes in Dubbo and nearby suburbs',
      },
      {
        name: 'Matt Hansen Real Estate',
        pageUrl: 'https://matthansenrealestate.com.au',
        gap: 'Competitor appraisal page encouraging sellers to request valuations',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Residential Properties For Sale | Elders Real Estate Dubbo',
          source: 'dubbo.eldersrealestate.com.au',
          snippet: 'Competitor page listing residential properties for sale in Dubbo.',
        },
        {
          title: 'Homes sold in Dubbo and nearby - Ray White Dubbo',
          source: 'raywhitedubbo.com.au',
          snippet: 'Competitor page listing sold homes in Dubbo.',
        },
      ],
      'https://raineandhorne.com.au/dubbo',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching on Google want residential property sales help in Dubbo and clear next steps. Your site lacks a single, detailed Dubbo sales hub.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de06ba9c10756b6b6132e5', [
      'Outline sections: why choose you, sales timeline, selling methods, marketing plan, FAQs.',
      'Add Dubbo suburb coverage and nearby towns; link to listings and contacts.',
      'Explain selling costs and inclusions clearly; invite a free sales appraisal.',
      'Place strong phone and form CTAs; link from top navigation.',
    ]),
  },

  // 23 — 69de06ba9c10756b6b6132e6
  {
    id: '69de06ba9c10756b6b6132e6',
    title: 'Show Dubbo Sold Results Gallery',
    description:
      'People searching on Google look for proven Dubbo residential sales results and local experience. Elders Real Estate Dubbo and Ray White Dubbo both display sold pages that prove activity and outcomes. Your site\'s recent sold proof is unclear or not prominent in one place.',
    category: 'Content',
    impactLabel: 'High impact',
    effort: 'Medium',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 11, // region-specific: Dubbo sold gallery
    tags: ['Content', 'Trust Boost'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Publish sold results gallery',
    whyItWorks: [
      'Public, organized sold results build confidence and encourage contact',
      'This also gives Google fresh local proof to rank your pages higher',
      'Competitors already showcase sold results, making them the default choice for sellers',
    ],
    competitors: makeCompetitors([
      {
        name: 'Elders Real Estate Dubbo',
        pageUrl: 'https://dubbo.eldersrealestate.com.au',
        gap: 'Competitor page showing recent sold results in Dubbo with suburb filters',
      },
      {
        name: 'Ray White Dubbo',
        pageUrl: 'https://raywhitedubbo.com.au',
        gap: 'Competitor page listing sold homes in Dubbo and nearby suburbs',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Sold Residential Properties | Elders Real Estate Dubbo',
          source: 'dubbo.eldersrealestate.com.au',
          snippet: 'Competitor page showing recent sold results in Dubbo.',
        },
        {
          title: 'Homes sold in Dubbo and nearby - Ray White Dubbo',
          source: 'raywhitedubbo.com.au',
          snippet: 'Competitor page listing sold homes in Dubbo.',
        },
      ],
      'https://raineandhorne.com.au/dubbo/sold',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching on Google look for proven Dubbo residential sales results. Your recent sold proof is not prominent in one place.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de06ba9c10756b6b6132e6', [
      'Collect 12–24 months of Dubbo sales with allowed details and dates.',
      'Add suburb filters and a simple map view.',
      'Write one-line stories per sale highlighting challenge and outcome.',
      'Link each sale to agent profile and a contact form.',
    ]),
  },

  // 24 — 69de06ba9c10756b6b6132e7
  {
    id: '69de06ba9c10756b6b6132e7',
    title: 'Update Key Property Portal Profiles for Dubbo Sales',
    description:
      'People searching on Google also check realestate.com.au, Domain, and RateMyAgent when choosing who to sell with in Dubbo. These citation sites are active in your market and often appear for local searches. Your profiles may be incomplete or not showing recent Dubbo sales and reviews.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'residential-property-sales',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 17, // moderately broad: multiple portals
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Improve portal profiles with recent sales',
    whyItWorks: [
      'Stronger directory profiles create more citations and discovery paths back to your site',
      'Expect more referral calls from buyers and sellers finding you on trusted platforms',
      'Recent sales and reviews on portal profiles build immediate credibility',
    ],
    competitors: [],
    sources: [],
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'These citation sites are active in your market and often appear for local residential sales searches. Your profiles may be incomplete or not showing recent Dubbo sales.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de06ba9c10756b6b6132e7', [
      'Claim or verify each profile and match your business details exactly.',
      'Add recent Dubbo sales, agent photos, and a link to your sales hub.',
      'Upload fresh seller reviews and invite recent clients to review.',
      'Add tracking links so inquiries route to your team quickly.',
    ]),
  },

  // 25 — 69de07349c10756b6b6132ef
  {
    id: '69de07349c10756b6b6132ef',
    title: 'Claim and Align Key Dubbo Directory Listings',
    description:
      'People searching for residential property leasing in Dubbo often check well-known local directories. DubboRealEstateAgency shows stronger presence among listings, and customers also use Domain, LocalSearch, and RateMyAgent. Your site likely lacks fully aligned, consistent listings with matching details across these places.',
    category: 'Local SEO',
    impactLabel: 'High impact',
    effort: 'Quick win',
    themeId: 'residential-property-leasing',
    createdAt: CREATED_AT,
    locationNames: LOCATION_NAMES,
    locations: 13, // region-specific: Dubbo directory listings
    tags: ['Local SEO', 'Quick Win'],
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    shortAction: 'Claim and align directory listings',
    whyItWorks: [
      'Cleaner, consistent listings boost presence across Google and directory sites',
      'This increases referral calls and inquiries from motivated tenants and landlords',
      'Missing or mismatched listings actively harm your local SEO trust signals',
    ],
    competitors: makeCompetitors([
      {
        name: 'Dubbo Real Estate Agency',
        pageUrl: 'https://dubborealestateagency.com.au',
        gap: 'Notable presence in Dubbo directory searches with complete, consistent listings',
      },
    ]),
    sources: makeSources(
      [
        {
          title: 'Dubbo Real Estate Agency directory',
          source: 'https://dubborealestateagency.com.au',
          snippet: 'Local directory with notable presence in Dubbo searches.',
        },
        {
          title: 'Domain',
          source: 'https://domain.com.au',
          snippet: 'Major Australian real estate marketplace used by renters and landlords.',
        },
        {
          title: 'LocalSearch',
          source: 'https://localsearch.com.au',
          snippet: 'Australian local business directory with service area pages.',
        },
        {
          title: 'RateMyAgent',
          source: 'https://ratemyagent.com.au',
          snippet: 'Agent and agency review platform used by property owners.',
        },
      ],
      'https://localsearch.com.au',
    ),
    contentGaps: [],
    promptsTriggeringThis: [],
    llmCoverageGap: {
      platforms: [],
      summary:
        'People searching for residential property leasing in Dubbo often check well-known local directories. Your listings may be incomplete or mismatched across these platforms.',
    },
    generatedAsset: null,
    checklist: makeChecklist('69de07349c10756b6b6132ef', [
      'Claim or update profiles on Domain, LocalSearch, and RateMyAgent for Dubbo.',
      'Match business name, phone, address, hours, and services exactly.',
      'Add recent photos, team members, and a short leasing services summary.',
      'Link to your leasing page and encourage a few new client reviews.',
    ]),
  },
]

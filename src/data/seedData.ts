import type { BusinessMetrics, Recommendation } from '../types'

export const seedBusiness = {
  name: 'Smile Bright Dental',
  location: 'Austin, TX',
}

export const seedMetrics: BusinessMetrics = {
  searchAiScore: 61,
  scoreTrend: 3,
  visibility: 58,
  citationShare: 79,
  rank: 2,
  sentiment: 67,
}

export const seedRecommendations: Recommendation[] = [
  // 1. Pending - Website content (Invisalign)
  {
    id: 'rec-1',
    title: 'Publish a comprehensive Invisalign service page with cost, process, and FAQs',
    description:
      'AI engines are citing competitors for Invisalign queries because they have detailed pages covering costs, timeline, and patient FAQs. Your site lacks this content entirely.',
    category: 'Website content',
    impactLabel: 'Improve Citation score by ~8%',
    effort: 'Quick win',
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    whyItWorks: [
      'ChatGPT and Gemini cite competitors because their pages directly answer "How much does Invisalign cost in Austin?" — your site does not',
      'Detailed service pages with FAQs match the exact format LLMs use to extract citation snippets',
      'Adding local pricing context (e.g. "$3,000–$7,000 in Austin") triggers geo-specific LLM citations',
      'Competitors with FAQ schema get cited 3× more often on Perplexity for treatment-related queries',
    ],
    competitors: [
      {
        id: 'c1',
        name: 'Austin Orthodontics Group',
        llmSnippet:
          'Austin Orthodontics Group offers Invisalign clear aligners starting at $3,200 with flexible 0% APR payment plans, free consultations, and an average treatment time of 12–18 months for Austin adults.',
        citedBy: ['ChatGPT', 'Gemini', 'Perplexity'],
        totalCitations: 47,
        sourceGaps: ['Has dedicated Invisalign cost page', 'Listed on Zocdoc', 'Has FAQ schema markup'],
        whyTheyWin: 'Their page answers the top 5 Invisalign questions LLMs are trained to surface, with local pricing context.',
      },
      {
        id: 'c2',
        name: 'Heartland Dental Austin',
        llmSnippet:
          'Heartland Dental Austin provides Invisalign for teens and adults with in-house financing, same-day consultations, and a patient satisfaction guarantee. Most cases complete in under 14 months.',
        citedBy: ['ChatGPT', 'Claude'],
        totalCitations: 31,
        sourceGaps: ['Listed on Healthgrades', 'Has blog content about Invisalign vs braces'],
        whyTheyWin: 'Their financing options and speed-of-treatment claims are directly cited by ChatGPT in comparison queries.',
      },
      {
        id: 'c3',
        name: 'Lakeway Modern Dentistry',
        llmSnippet:
          'Lakeway Modern Dentistry is an Invisalign Platinum Provider in the Austin area, offering virtual check-ins, no-interest financing, and a 5-star rated treatment experience per Google and Healthgrades reviews.',
        citedBy: ['Perplexity', 'Gemini'],
        totalCitations: 22,
        sourceGaps: ['Has "Platinum Provider" badge displayed prominently', 'Has patient before/after gallery'],
        whyTheyWin: 'Their Platinum Provider status is a trust signal that LLMs include as a differentiator.',
      },
    ],
    sources: [
      { platform: 'Zocdoc', competitorName: 'Austin Orthodontics Group', url: '#', snippet: 'Top-rated Invisalign provider in Austin with 200+ reviews', referencedInAnswers: 40 },
      { platform: 'Healthgrades', competitorName: 'Heartland Dental Austin', url: '#', snippet: 'Invisalign provider accepting new patients, offering free consultations', referencedInAnswers: 28 },
      { platform: 'Google', competitorName: 'Lakeway Modern Dentistry', url: '#', snippet: 'Invisalign Platinum Provider near Austin TX — 4.9 stars', referencedInAnswers: 35 },
      { platform: 'Bing', competitorName: 'Austin Orthodontics Group', url: '#', snippet: 'Clear aligner specialist serving Austin since 2009', referencedInAnswers: 18 },
    ],
    contentGaps: [
      { phrase: 'flexible payment plans', frequency: 41, competitors: ['Austin Orthodontics Group', 'Heartland Dental Austin'], recommendation: 'Add a dedicated financing section to the Invisalign page highlighting your payment options' },
      { phrase: 'Invisalign cost Austin', frequency: 34, competitors: ['Austin Orthodontics Group', 'Lakeway Modern Dentistry'], recommendation: 'Include a price range table comparing different treatment tiers' },
      { phrase: 'free consultation', frequency: 29, competitors: ['Heartland Dental Austin', 'Austin Orthodontics Group'], recommendation: 'Prominently feature your free consultation offer on the service page and in metadata' },
    ],
    promptsTriggeringThis: [
      'best Invisalign dentist in Austin TX',
      'how much does Invisalign cost in Austin',
      'Invisalign vs braces Austin adult',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Gemini', 'Perplexity'],
      summary: 'You are not cited by any major AI engine for Invisalign-related queries in Austin. Competitors appear in 100% of tested prompts while you appear in 0%.',
    },
    generatedAsset: {
      type: 'blog',
      title: 'Why Invisalign Is the Smile Solution Austin Adults Are Choosing in 2025',
      previewText:
        "Straightening your teeth isn't just something for teenagers anymore. More Austin adults are turning to Invisalign clear aligners that fit seamlessly into busy professional lives...",
      fullContent: `# Why Invisalign Is the Smile Solution Austin Adults Are Choosing in 2025

Straightening your teeth isn't just something for teenagers anymore. In fact, more Austin adults than ever are turning to Invisalign clear aligners — a modern orthodontic solution that fits seamlessly into busy professional lives.

## What Is Invisalign?

Invisalign uses a series of custom-made, clear plastic aligners that gradually shift your teeth into the desired position. Unlike traditional metal braces, Invisalign aligners are:
- **Virtually invisible** — most people won't even notice you're wearing them
- **Removable** — eat, drink, and brush normally
- **Comfortable** — no metal wires or brackets to irritate your mouth

## How Much Does Invisalign Cost in Austin?

At Smile Bright Dental, Invisalign treatment typically ranges from **$3,500–$6,500** depending on case complexity. We offer flexible payment plans starting at $150/month with 0% APR financing available through CareCredit.

## Free Consultation Available

Not sure if Invisalign is right for you? Schedule a **free consultation** at our Austin office. We'll take digital scans and show you a preview of your projected results — no commitment required.

*Ready to smile brighter? Call us at (512) 555-0100 or book online.*`,
      approved: false,
    },
    checklist: [
      { id: 'step-1', label: 'AI-generated blog post ready for review', description: 'Birdeye AI has drafted an Invisalign blog post optimized for LLM citations. Review and approve below.', completed: true, autoCompleted: true, ctaLabel: 'Approve blog', ctaAction: 'approve_asset' },
      { id: 'step-2', label: 'Publish blog to your website', description: 'Once approved, publish the post at /blog/invisalign-austin or similar path.', completed: false, autoCompleted: false, ctaLabel: 'Open Content Hub', ctaAction: 'open_content_hub' },
      { id: 'step-3', label: 'Add FAQ schema markup to service page', description: 'Birdeye will generate JSON-LD schema for your Invisalign FAQs to improve LLM extractability.', completed: false, autoCompleted: false },
      { id: 'step-4', label: 'Mark as complete', description: 'Confirm the page is live and indexed.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },

  // 2. Pending - Website content (Veneers)
  {
    id: 'rec-2',
    title: 'Expand veneers service page with procedures, benefits, FAQs, and local testimonials',
    description:
      'Porcelain veneers is your second-highest traffic keyword but your page has minimal content. Competitors are being cited for veneers queries across all AI platforms.',
    category: 'Website content',
    impactLabel: 'Improve Citation score by ~5%',
    effort: 'Medium',
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    whyItWorks: [
      'LLMs extract structured content — procedure steps, cost ranges, recovery info — directly as citation snippets',
      'Your competitors have 1,200+ word veneer pages; your current page has under 200 words',
      'Adding before/after results and testimonials increases LLM trust score signals',
      'Local search intent ("Austin veneers cost") triggers geo-specific citations when local data is present',
    ],
    competitors: [
      {
        id: 'c4',
        name: 'Capital City Smiles',
        llmSnippet:
          'Capital City Smiles in Austin offers porcelain veneers starting at $800 per tooth with a comprehensive 2-visit process, including a smile design consultation and digital preview.',
        citedBy: ['ChatGPT', 'Gemini'],
        totalCitations: 29,
        sourceGaps: ['Has dedicated veneers cost page', 'Has patient before/after gallery', 'Has Google reviews mentioning veneers'],
        whyTheyWin: 'Their per-tooth pricing is the #1 data point LLMs extract for veneers cost queries.',
      },
      {
        id: 'c5',
        name: 'Austin Cosmetic Dentistry',
        llmSnippet:
          'Austin Cosmetic Dentistry specializes in porcelain veneers with same-day CEREC technology, offering permanent results with stain-resistant materials and a 10-year warranty.',
        citedBy: ['Perplexity', 'Claude'],
        totalCitations: 24,
        sourceGaps: ['Has CEREC same-day technology page', 'Has warranty information', 'Listed on RealSelf'],
        whyTheyWin: 'Their CEREC same-day offer and warranty differentiate them in AI responses.',
      },
    ],
    sources: [
      { platform: 'Google', competitorName: 'Capital City Smiles', url: '#', snippet: 'Porcelain veneers expert in Austin — 4.8 stars, 150+ reviews', referencedInAnswers: 32 },
      { platform: 'RealSelf', competitorName: 'Austin Cosmetic Dentistry', url: '#', snippet: 'CEREC veneers worth it — Austin patients share results', referencedInAnswers: 19 },
      { platform: 'Healthgrades', competitorName: 'Capital City Smiles', url: '#', snippet: 'Cosmetic dentist accepting new patients, veneers specialist', referencedInAnswers: 22 },
    ],
    contentGaps: [
      { phrase: 'porcelain veneers cost per tooth', frequency: 38, competitors: ['Capital City Smiles'], recommendation: 'Add transparent pricing or a price range with factors that affect cost' },
      { phrase: 'veneers vs composite bonding', frequency: 26, competitors: ['Austin Cosmetic Dentistry', 'Capital City Smiles'], recommendation: 'Create a comparison section or FAQ addressing this common question' },
    ],
    promptsTriggeringThis: [
      'porcelain veneers Austin TX cost',
      'best cosmetic dentist veneers Austin',
      'veneers same day Austin',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Gemini', 'Perplexity'],
      summary: 'You appear in 0 out of 8 tested prompts about veneers in Austin. Capital City Smiles appears in 7 of 8.',
    },
    generatedAsset: {
      type: 'content_suggestions',
      title: 'Suggested content to add to your Veneers page',
      previewText: 'Your porcelain veneers page is missing the key sections competitors use to earn LLM citations.',
      fullContent: `Per-tooth pricing range ($800–$1,500) with factors that affect cost
2-visit process walkthrough: smile design consultation → custom fabrication → bonding
Porcelain vs composite veneers comparison with longevity data
Before & after patient results gallery with consent forms
FAQs: "How long do veneers last?", "Are veneers reversible?", "Do veneers hurt?"
Local testimonials mentioning specific procedures and outcomes
Care & maintenance instructions to signal comprehensive expertise`,
      approved: false,
    },
    checklist: [
      { id: 'step-1', label: 'Audit current veneers page content', description: 'Review existing page and identify content gaps compared to competitors.', completed: false, autoCompleted: false },
      { id: 'step-2', label: 'Add cost, process, and FAQ sections', description: 'Expand the page with per-tooth pricing, the 2-visit process, and at least 5 FAQs with structured markup.', completed: false, autoCompleted: false },
      { id: 'step-3', label: 'Upload before/after patient photos', description: 'Add a gallery section with real patient results (with consent).', completed: false, autoCompleted: false },
      { id: 'step-4', label: 'Mark as complete', description: 'Confirm changes are live.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },

  // 3. Pending - Schema
  {
    id: 'rec-3',
    title: 'Add LocalBusiness and DentistSchema markup to your homepage and service pages',
    description:
      'You are missing structured data that AI engines use to confidently cite your practice. Adding schema markup can increase LLM citation confidence by up to 40%.',
    category: 'Website improvement',
    impactLabel: 'Improve Visibility score by ~6%',
    effort: 'Quick win',
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    whyItWorks: [
      'LLMs like Perplexity use structured data to extract factual information (hours, services, location) with higher confidence',
      'DentistSchema is a specific schema type that signals authoritative dental practice data to crawlers',
      'Competitors with schema markup get cited 2.5× more in local intent queries',
      'One-time implementation provides compounding benefits across all AI platforms',
    ],
    competitors: [
      {
        id: 'c6',
        name: 'Domain Dental Care',
        llmSnippet:
          'Domain Dental Care at 11101 Domain Dr, Austin TX accepts new patients for general and cosmetic dentistry, open Monday–Saturday 8am–6pm, with same-day emergency appointments available.',
        citedBy: ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'],
        totalCitations: 52,
        sourceGaps: ['Has complete LocalBusiness schema', 'Has DentistSchema on all service pages', 'Listed on multiple directories'],
        whyTheyWin: 'Their schema markup lets LLMs extract exact hours, services, and location with zero ambiguity.',
      },
    ],
    sources: [
      { platform: 'Google', competitorName: 'Domain Dental Care', url: '#', snippet: 'Dentist near Domain Austin — structured data verified', referencedInAnswers: 45 },
      { platform: 'Bing', competitorName: 'Domain Dental Care', url: '#', snippet: 'Domain Dental Care — open 6 days a week, same-day emergency', referencedInAnswers: 31 },
    ],
    contentGaps: [
      { phrase: 'same-day emergency dental Austin', frequency: 22, competitors: ['Domain Dental Care'], recommendation: 'Add EmergencyService schema and a dedicated emergency page with schema markup' },
      { phrase: 'dental practice hours Austin', frequency: 35, competitors: ['Domain Dental Care'], recommendation: 'Ensure OpeningHoursSpecification in schema matches Google Business Profile exactly' },
    ],
    promptsTriggeringThis: [
      'dentist open Saturday Austin TX',
      'emergency dentist Austin same day',
      'dental office near me Austin accepts new patients',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'],
      summary: 'Missing structured data means AI engines cannot confidently extract your business details. Domain Dental Care is cited in 100% of directory-type queries.',
    },
    generatedAsset: {
      type: 'schema',
      title: 'LocalBusiness + DentistSchema for Smile Bright Dental',
      previewText: '{"@context":"https://schema.org","@type":"Dentist","name":"Smile Bright Dental","address":{"@type":"PostalAddress","streetAddress":"1234 South Congress Ave"...',
      fullContent: `{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Smile Bright Dental",
  "image": "https://smilebrightdental.com/logo.png",
  "url": "https://smilebrightdental.com",
  "telephone": "+1-512-555-0100",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 South Congress Ave, Suite 200",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78704",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2500,
    "longitude": -97.7500
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
  ],
  "medicalSpecialty": ["Dentistry", "Orthodontics", "Cosmetic Dentistry"],
  "hasMap": "https://maps.google.com/?q=Smile+Bright+Dental+Austin",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "247" },
  "priceRange": "$$"
}`,
      approved: false,
    },
    checklist: [
      { id: 'step-1', label: 'Schema JSON-LD generated by Birdeye AI', description: 'Review the generated schema for your practice details.', completed: true, autoCompleted: true, ctaLabel: 'Approve schema', ctaAction: 'approve_asset' },
      { id: 'step-2', label: 'Verify business details are accurate', description: 'Confirm address, phone, hours, and services match your Google Business Profile.', completed: false, autoCompleted: false },
      { id: 'step-3', label: 'Add schema to website <head>', description: 'Paste the JSON-LD into your homepage and service page templates.', completed: false, autoCompleted: false, ctaLabel: 'Copy schema', ctaAction: 'copy_link' },
      { id: 'step-4', label: 'Mark as complete', description: 'Validate using Google Rich Results Test and confirm.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },

  // 4. Accepted - FAQ
  {
    id: 'rec-4',
    title: 'Create a dental FAQ page covering the top 15 questions patients ask AI engines',
    description:
      'Patients are asking AI chatbots questions your competitors answer but you do not. A dedicated FAQ page with schema will capture these citations.',
    category: 'FAQ',
    impactLabel: 'Improve Citation score by ~7%',
    effort: 'Quick win',
    status: 'accepted',
    assignedTo: 'Sarah Chen',
    assignChoice: 'team',
    acceptedAt: '2025-01-08T10:00:00Z',
    completedAt: null,
    whyItWorks: [
      'FAQ pages with Q&A schema are the #1 content type cited by ChatGPT for informational dental queries',
      'Covering questions like "Is teeth whitening safe?" and "How often should I visit a dentist?" captures high-volume informational intent',
      'LLMs prefer structured Q&A format — it reduces hallucination risk and increases citation confidence',
      'One FAQ page can cover 15–20 citation opportunities with a single content investment',
    ],
    competitors: [
      {
        id: 'c7',
        name: 'Brushy Creek Family Dental',
        llmSnippet:
          'Brushy Creek Family Dental recommends dental visits every 6 months for most adults, though patients with gum disease or high cavity risk may need quarterly checkups. They offer comprehensive exams with digital X-rays.',
        citedBy: ['ChatGPT', 'Gemini'],
        totalCitations: 38,
        sourceGaps: ['Has 20-question FAQ page with Q&A schema', 'FAQ covers preventive, cosmetic, and emergency topics'],
        whyTheyWin: 'Their FAQ page directly answers the 20 most common dental questions, making them the default citation for informational queries.',
      },
    ],
    sources: [
      { platform: 'Google', competitorName: 'Brushy Creek Family Dental', url: '#', snippet: 'Dental FAQ — answers to your top dental questions in Austin', referencedInAnswers: 38 },
      { platform: 'Facebook', competitorName: 'Brushy Creek Family Dental', url: '#', snippet: 'Check out our FAQ page — we answer your top dental questions!', referencedInAnswers: 12 },
    ],
    contentGaps: [
      { phrase: 'how often should I go to the dentist', frequency: 56, competitors: ['Brushy Creek Family Dental'], recommendation: 'Add "Dental Visit Frequency" as your first FAQ with evidence-based recommendation' },
      { phrase: 'is teeth whitening safe', frequency: 44, competitors: ['Brushy Creek Family Dental'], recommendation: 'Include a safety FAQ covering whitening sensitivity and candidacy' },
      { phrase: 'dental insurance accepted Austin', frequency: 33, competitors: ['Brushy Creek Family Dental'], recommendation: 'Add insurance FAQ section with list of accepted plans' },
    ],
    promptsTriggeringThis: [
      'how often should I get my teeth cleaned',
      'is teeth whitening safe for sensitive teeth',
      'what dental insurance does Smile Bright Dental accept',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Gemini'],
      summary: 'You are missing from all informational dental queries. Brushy Creek Family Dental captures 38 of 50 tested informational prompts.',
    },
    generatedAsset: {
      type: 'faq',
      title: '15 Most Common Dental Questions — Answered by Smile Bright Dental',
      previewText: 'Q: How often should I visit the dentist?\nA: Most adults should visit every 6 months for cleanings and exams. Patients with gum disease or high cavity risk may benefit from visits every 3–4 months...',
      fullContent: `## Frequently Asked Questions — Smile Bright Dental, Austin TX

**Q: How often should I visit the dentist?**
A: Most adults should visit every 6 months for professional cleanings and comprehensive exams. If you have gum disease, dry mouth, or are prone to cavities, your dentist may recommend more frequent visits — typically every 3–4 months.

**Q: Is teeth whitening safe?**
A: Yes, professional teeth whitening is safe when performed or supervised by a dentist. Some patients experience temporary sensitivity, which typically resolves within 24–48 hours. We offer take-home whitening kits designed to minimize sensitivity.

**Q: What dental insurance do you accept?**
A: We accept most major PPO plans including Delta Dental, Cigna, Aetna, MetLife, and United Healthcare. We also offer in-house financing through CareCredit for uninsured patients.

**Q: Do you offer emergency dental appointments?**
A: Yes. We reserve same-day slots for dental emergencies including toothaches, broken teeth, lost fillings, and dental trauma. Call our office at (512) 555-0100 first thing in the morning.

**Q: How much does a dental cleaning cost without insurance?**
A: A standard adult cleaning and exam at Smile Bright Dental costs $150–$250 depending on whether X-rays are needed. We offer a New Patient Special for $99.`,
      approved: false,
    },
    checklist: [
      { id: 'step-1', label: 'FAQ content generated by Birdeye AI', description: '15 questions and answers drafted for your review.', completed: true, autoCompleted: true, ctaLabel: 'Review FAQ content', ctaAction: 'approve_asset' },
      { id: 'step-2', label: 'Assign to web team for publishing', description: 'Sarah Chen has been notified. She will publish to /faq within 3 business days.', completed: true, autoCompleted: true },
      { id: 'step-3', label: 'Add Q&A schema markup', description: 'Apply FAQPage schema to each question for LLM extractability.', completed: false, autoCompleted: false },
      { id: 'step-4', label: 'Mark as complete', description: 'Confirm page is live and validate schema.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },

  // 5. In progress - Website content (Teeth Whitening)
  {
    id: 'rec-5',
    title: 'Build a dedicated teeth whitening page with before/after results and pricing transparency',
    description:
      'Teeth whitening is your #3 search term but you have no standalone page. Competitors get cited because they answer price and safety questions you do not.',
    category: 'Website content',
    impactLabel: 'Improve Visibility score by ~4%',
    effort: 'Medium',
    status: 'in_progress',
    assignedTo: 'Mike Torres',
    assignChoice: 'team',
    acceptedAt: '2025-01-05T09:00:00Z',
    completedAt: null,
    whyItWorks: [
      'Price transparency is the top trigger for LLM citations in cosmetic dentistry queries',
      'Before/after results with schema increase citation probability by 60% for cosmetic procedures',
      'Competitor pages that mention "sensitive teeth" in whitening content capture the safety-conscious query segment',
      'Professional whitening vs. at-home comparison content drives informational citations',
    ],
    competitors: [
      {
        id: 'c8',
        name: 'Pearl Dental Studio',
        llmSnippet:
          'Pearl Dental Studio in Austin offers Zoom! Whitening treatments starting at $299, with results lasting 1–3 years. They also provide custom take-home trays for $179, with free touch-up syringes for 12 months.',
        citedBy: ['ChatGPT', 'Perplexity'],
        totalCitations: 33,
        sourceGaps: ['Has Zoom whitening dedicated page', 'Shows before/after photos with consent', 'Has pricing transparency'],
        whyTheyWin: 'Their specific price points ($299 and $179) are extracted directly by LLMs for "teeth whitening cost Austin" queries.',
      },
    ],
    sources: [
      { platform: 'Google', competitorName: 'Pearl Dental Studio', url: '#', snippet: 'Professional teeth whitening Austin — Zoom Whitening $299', referencedInAnswers: 29 },
      { platform: 'Bing', competitorName: 'Pearl Dental Studio', url: '#', snippet: 'Best teeth whitening Austin TX — before and after photos', referencedInAnswers: 18 },
    ],
    contentGaps: [
      { phrase: 'teeth whitening cost Austin', frequency: 48, competitors: ['Pearl Dental Studio'], recommendation: 'Add a clear pricing section for both in-office and take-home whitening options' },
      { phrase: 'professional whitening vs crest strips', frequency: 31, competitors: ['Pearl Dental Studio'], recommendation: 'Create a comparison FAQ or section addressing why professional whitening outperforms OTC products' },
    ],
    promptsTriggeringThis: [
      'how much does teeth whitening cost at a dentist Austin',
      'best professional teeth whitening Austin TX',
      'teeth whitening for sensitive teeth Austin',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Perplexity'],
      summary: 'Pearl Dental Studio captures 33 citations for whitening queries. You have 0. The gap is entirely due to missing price and procedure content.',
    },
    generatedAsset: {
      type: 'blog',
      title: 'Professional Teeth Whitening in Austin: What to Expect, How Much It Costs, and Why It Works',
      previewText: 'If you\'ve been considering teeth whitening, you probably have questions — How much does it cost? How long do results last? Is it safe for sensitive teeth? We answer all of them...',
      fullContent: `# Professional Teeth Whitening in Austin: What to Expect, Costs, and Results

If you've been considering teeth whitening, you likely have questions. How much does it cost? How long do results last? Is it safe if you have sensitive teeth? Let us walk you through everything.

## In-Office Whitening: Zoom! Treatment

Our most popular option is the Philips Zoom! in-office whitening system. In a single 60-minute appointment, most patients see teeth 6–8 shades whiter.

**Cost:** $299 per session
**Results:** Last 1–3 years with proper maintenance

## Take-Home Whitening Trays

Prefer to whiten at your own pace? Our custom take-home trays with professional-strength gel deliver salon-quality results over 10–14 days.

**Cost:** $179
**Included:** 12 months of complimentary touch-up syringes

## Is It Safe for Sensitive Teeth?

Yes. We use a desensitizing gel before and after treatment. Most sensitivity resolves within 24 hours. If you have significant sensitivity, we'll recommend our gentler take-home option.`,
      approved: false,
    },
    checklist: [
      { id: 'step-1', label: 'Blog drafted and approved', description: 'Content ready for publishing.', completed: true, autoCompleted: true, ctaLabel: 'View blog', ctaAction: 'open_content_hub' },
      { id: 'step-2', label: 'Upload before/after patient photos', description: 'Mike Torres is collecting consent forms from 3 patients. Expected completion: Jan 15.', completed: true, autoCompleted: false },
      { id: 'step-3', label: 'Publish whitening page to site', description: 'Publish at /services/teeth-whitening with schema markup.', completed: false, autoCompleted: false },
      { id: 'step-4', label: 'Mark as complete', description: 'Confirm page is live.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },

  // 6. Completed - Reviews
  {
    id: 'rec-6',
    title: 'Launch a proactive review request campaign targeting recent patients',
    description:
      'Your review velocity has slowed. AI engines weight recency of reviews heavily. Getting 20+ reviews in 30 days would significantly boost your citation confidence score.',
    category: 'Reviews',
    impactLabel: 'Improve Sentiment score by ~9%',
    effort: 'Quick win',
    status: 'completed',
    assignedTo: 'Dr. Sarah Williams',
    assignChoice: 'self',
    acceptedAt: '2024-12-15T08:00:00Z',
    completedAt: '2025-01-03T17:00:00Z',
    whyItWorks: [
      'ChatGPT and Gemini cite practices with high review counts and recent activity as "trusted" providers',
      'Reviews mentioning specific procedures (Invisalign, veneers, whitening) create keyword-rich citation material',
      'A practice with 50+ reviews in the past 90 days gets cited 3× more than one with the same total but older reviews',
      'Review response rates above 90% signal active management to LLM training data sources',
    ],
    competitors: [
      {
        id: 'c9',
        name: 'South Lamar Dental',
        llmSnippet:
          'South Lamar Dental is a top-rated Austin dentist with 4.9 stars from 380+ Google reviews, praised for painless procedures, friendly staff, and same-day appointments.',
        citedBy: ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'],
        totalCitations: 61,
        sourceGaps: ['Has 380+ Google reviews', '4.9 average rating', 'Reviews mention specific procedures'],
        whyTheyWin: 'Their volume and recency of reviews makes them the default "safe" recommendation across all AI platforms.',
      },
    ],
    sources: [
      { platform: 'Google', competitorName: 'South Lamar Dental', url: '#', snippet: '4.9 stars · 380 reviews · Dentist near South Congress Austin', referencedInAnswers: 55 },
    ],
    contentGaps: [
      { phrase: 'highly rated dentist Austin', frequency: 67, competitors: ['South Lamar Dental'], recommendation: 'Maintain review velocity above 5 reviews/week to close the citation gap' },
    ],
    promptsTriggeringThis: [
      'best rated dentist Austin TX',
      'top dentist near South Austin',
      'most reviewed dentist Austin',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Gemini'],
      summary: 'Completed. You gained 31 new reviews in December, improving your rating from 4.6 to 4.8. Citation rate for "top dentist Austin" improved from 0% to 18%.',
    },
    generatedAsset: null,
    checklist: [
      { id: 'step-1', label: 'Set up automated review request sequence', description: 'Birdeye automated post-appointment review requests via SMS and email.', completed: true, autoCompleted: true },
      { id: 'step-2', label: 'Send review requests to past 90-day patients', description: '147 requests sent. 31 reviews received.', completed: true, autoCompleted: false },
      { id: 'step-3', label: 'Respond to all new reviews', description: 'Dr. Williams responded to all 31 reviews within 24 hours.', completed: true, autoCompleted: false },
      { id: 'step-4', label: 'Mark as complete', description: 'Campaign completed successfully.', completed: true, autoCompleted: false, ctaLabel: 'See results', ctaAction: 'mark_done' },
    ],
  },

  // 7. Rejected - Social
  {
    id: 'rec-7',
    title: 'Post 3× per week on Instagram and Facebook showcasing smile transformations',
    description:
      'Social proof from real patient transformations is increasingly cited by AI engines. Consistent posting builds citation authority on social platforms.',
    category: 'Social',
    impactLabel: 'Improve Citation score by ~3%',
    effort: 'Bigger lift',
    status: 'rejected',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    whyItWorks: [
      'Instagram and Facebook posts with before/after results get indexed by Perplexity',
      'Consistent posting signals active practice management to social media algorithms',
      'Patient transformation content increases engagement that flows back to citation signals',
    ],
    competitors: [
      {
        id: 'c10',
        name: 'Bouldin Creek Dental',
        llmSnippet:
          'Bouldin Creek Dental is known for stunning smile transformations, with an active Instagram presence showing real patient results in Austin.',
        citedBy: ['Perplexity'],
        totalCitations: 12,
        sourceGaps: ['Posts 5× per week on Instagram', 'Has 2,400 Instagram followers'],
        whyTheyWin: 'Active social media creates additional citation surfaces on platforms that index social content.',
      },
    ],
    sources: [
      { platform: 'Facebook', competitorName: 'Bouldin Creek Dental', url: '#', snippet: 'Before & after — patient smile transformation at Bouldin Creek Dental', referencedInAnswers: 8 },
    ],
    contentGaps: [
      { phrase: 'smile transformation Austin dentist', frequency: 14, competitors: ['Bouldin Creek Dental'], recommendation: 'Post before/after content with local hashtags and procedure callouts' },
    ],
    promptsTriggeringThis: [
      'dentist Instagram Austin before after',
    ],
    llmCoverageGap: {
      platforms: ['Perplexity'],
      summary: 'Social media has low citation impact (3% of total). This recommendation was skipped in favor of higher-impact tasks.',
    },
    generatedAsset: null,
    checklist: [
      { id: 'step-1', label: 'Set up social posting schedule', description: 'Define 3× weekly content calendar for Instagram and Facebook.', completed: false, autoCompleted: false },
      { id: 'step-2', label: 'Create transformation content templates', description: 'Design before/after post templates with brand guidelines.', completed: false, autoCompleted: false },
      { id: 'step-3', label: 'Mark as complete', description: 'Launch social campaign.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },

  // 8. Pending replacement for rejected
  {
    id: 'rec-8',
    title: 'Get listed on Zocdoc and Healthgrades — both are primary LLM citation sources',
    description:
      'Zocdoc and Healthgrades are among the top 5 sources LLMs use when citing dentists. Your competitors are listed; you are not. This is a fast, high-impact gap to close.',
    category: 'Reviews',
    impactLabel: 'Improve Visibility score by ~11%',
    effort: 'Quick win',
    status: 'pending',
    assignedTo: null,
    assignChoice: null,
    acceptedAt: null,
    completedAt: null,
    whyItWorks: [
      'Zocdoc listings are cited by ChatGPT in 68% of "dentist near me" type queries',
      'Healthgrades is one of the top 3 sources Google uses to validate healthcare provider information',
      'Being listed on both platforms instantly doubles your citation surface area across AI platforms',
      'Directory listings take <30 minutes to set up and have zero recurring cost',
    ],
    competitors: [
      {
        id: 'c11',
        name: 'Domain Dental Care',
        llmSnippet:
          'Domain Dental Care is available for booking on Zocdoc with same-day appointments, rated 4.8 on Healthgrades with 142 verified reviews, and listed as a top dentist in Austin by multiple health platforms.',
        citedBy: ['ChatGPT', 'Gemini', 'Perplexity'],
        totalCitations: 44,
        sourceGaps: ['Listed on Zocdoc with online booking', 'Listed on Healthgrades with 142 reviews', 'Listed on US News Health'],
        whyTheyWin: 'Multi-platform presence means they show up no matter which source an LLM uses for validation.',
      },
    ],
    sources: [
      { platform: 'Zocdoc', competitorName: 'Domain Dental Care', url: '#', snippet: 'Book a dentist appointment online — Domain Dental Care, Austin', referencedInAnswers: 40 },
      { platform: 'Healthgrades', competitorName: 'Domain Dental Care', url: '#', snippet: 'Domain Dental Care — 4.8 stars, 142 ratings, Austin TX', referencedInAnswers: 35 },
    ],
    contentGaps: [
      { phrase: 'dentist accepting new patients Austin', frequency: 52, competitors: ['Domain Dental Care'], recommendation: 'Zocdoc listing with "accepting new patients" flag will immediately surface you for this query' },
      { phrase: 'book dentist appointment online Austin', frequency: 38, competitors: ['Domain Dental Care'], recommendation: 'Enable online booking via Zocdoc and add booking widget to your website' },
    ],
    promptsTriggeringThis: [
      'find a dentist in Austin TX accepting new patients',
      'book dentist appointment Austin online',
      'dentist Zocdoc Austin TX',
    ],
    llmCoverageGap: {
      platforms: ['ChatGPT', 'Gemini', 'Perplexity'],
      summary: 'Not listed on Zocdoc or Healthgrades means you are invisible to the primary citation sources LLMs use for local dentist discovery.',
    },
    generatedAsset: {
      type: 'citations',
      title: 'Citation gap: Zocdoc & Healthgrades',
      previewText: 'Your top competitors are being cited on Zocdoc and Healthgrades — two of the top 5 sources LLMs use for local dentist discovery. You are not listed on either.',
      fullContent: JSON.stringify({
        platforms: [
          { name: 'Zocdoc', competitors: [{ name: 'Domain Dental Care', citations: 44 }, { name: 'Austin Orthodontics Group', citations: 40 }], youCitations: 0 },
          { name: 'Healthgrades', competitors: [{ name: 'Domain Dental Care', reviews: 142 }, { name: 'Heartland Dental Austin', reviews: 98 }], youCitations: 0 },
        ],
      }),
      approved: false,
    },
    checklist: [
      { id: 'step-1', label: 'Create Zocdoc provider profile', description: 'Go to zocdoc.com/join and complete your provider profile. Takes 20–30 minutes.', completed: false, autoCompleted: false, ctaLabel: 'Open Zocdoc', ctaAction: 'copy_link' },
      { id: 'step-2', label: 'Claim or create Healthgrades listing', description: 'Claim your Healthgrades profile at healthgrades.com/provider-resources.', completed: false, autoCompleted: false, ctaLabel: 'Open Healthgrades', ctaAction: 'copy_link' },
      { id: 'step-3', label: 'Verify and complete both profiles', description: 'Ensure name, address, phone, hours, and services are 100% complete and match your website.', completed: false, autoCompleted: false },
      { id: 'step-4', label: 'Mark as complete', description: 'Confirm both profiles are live.', completed: false, autoCompleted: false, ctaLabel: 'Mark complete', ctaAction: 'mark_done' },
    ],
  },
]

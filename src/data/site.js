// Everything a visitor reads lives here, so copy edits never touch the components.

export const brand = {
  name: 'Design by Dae',
  owner: 'Daeshawn Bullock',
  tagline: 'Websites for local businesses that don’t have one yet',
  location: 'Northern Virginia',
  // Drop a portrait in public/ (about 800×1000) and set its path here to replace the monogram card.
  photo: null,
  // Contact details stay hidden until set, e.g. phone: '(571) 555-0100', email: 'hello@designbydae.com',
  // booking: 'https://cal.com/designbydae/intro'. Each one then appears in the contact section and the site's business info.
  phone: null,
  email: null,
  booking: null,
}

// The public address once deployed. Used for the canonical link and social preview tags.
export const siteUrl = 'https://design-by-dae.netlify.app'

export const nav = [
  { label: 'What you get', href: '#included' },
  { label: 'Samples', href: '#samples' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const heroFacts = ['Live 5–10 days after you send your content', 'From $697', 'You own your site']

// The hero's typed word cycles through these.
export const heroTrades = ['detailing', 'cleaning', 'landscaping', 'barber', 'painting', 'plumbing', 'local']

// "Where are you starting from?" Each answer preselects an option in the contact form.
export const startingPoints = [
  {
    id: 'none',
    label: 'No website at all.',
    note: 'a fresh start',
    text: 'I build it from scratch around your services, your area and how customers should reach you. A Starter site is usually live 5–10 days after you send your content.',
    choice: 'Starter Website',
  },
  {
    id: 'social',
    label: 'Just a Facebook or Instagram page.',
    note: 'a head start',
    text: 'Your page already has photos and reviews. I’ll use them to build a site that shows up on Google, then link it to your page.',
    choice: 'Starter Website',
  },
  {
    id: 'old',
    label: 'An old site I’m not proud of.',
    note: 'very fixable',
    text: 'I keep what still works, like your domain and any search ranking, and rebuild the rest so it matches how your business looks and runs now.',
    choice: 'A redesign',
  },
]

export const included = [
  {
    title: 'Designed around your business',
    text: 'Built from scratch for what you do and who you serve, not a template with your logo dropped in.',
  },
  {
    title: 'Made for phones first',
    text: 'People usually look you up on their phone, so every page loads fast and reads well on a small screen.',
  },
  {
    title: 'Easy to call or book',
    text: 'A tap-to-call button and a short request form on every page, so nobody has to hunt for your number.',
  },
  {
    title: 'Found on Google',
    text: 'Local search basics set up from day one, and a connection to your Google Business Profile.',
  },
  {
    title: 'Help with the words',
    text: 'After a short chat, I draft the text for each page and you tell me what to change.',
  },
  {
    title: 'Kept up to date',
    text: 'On the Care Plan, I take care of hosting, security and small edits, so your hours and photos stay current.',
  },
]

export const samples = [
  {
    id: 'apex',
    name: 'Apex Mobile Detailing',
    industry: 'Mobile car detailing',
    url: 'https://apex-mobile-detailing-example.netlify.app',
    note: 'Bold and direct, with prices up front and a call button always in reach.',
    images: {
      desktopSmall: '/work/apex-desktop-640.webp',
      desktop: '/work/apex-desktop-960.webp',
      desktopLarge: '/work/apex-desktop.webp',
      mobileSmall: '/work/apex-mobile-260.webp',
      mobile: '/work/apex-mobile.webp',
    },
  },
  {
    id: 'lumen',
    name: 'Lumen Clean Co.',
    industry: 'House cleaning',
    url: 'https://lumen-clean-co.netlify.app',
    note: 'Calm and reassuring, built for a service people let into their homes.',
    images: {
      desktopSmall: '/work/lumen-desktop-640.webp',
      desktop: '/work/lumen-desktop-960.webp',
      desktopLarge: '/work/lumen-desktop.webp',
      mobileSmall: '/work/lumen-mobile-260.webp',
      mobile: '/work/lumen-mobile.webp',
    },
  },
]

export const steps = [
  {
    title: 'Quick call',
    text: 'A 20-minute call about your business and what you want the site to do for you.',
  },
  {
    title: 'I build it',
    text: 'I design the site and draft the text, and send you a live preview link as it comes together.',
  },
  {
    title: 'You review',
    text: 'You click around the real thing and tell me what to change. Two rounds of revisions are included.',
  },
  {
    title: 'You go live',
    text: 'Your site goes live on your own domain with the form and Google set up, usually 5–10 days after you send your content.',
  },
]

export const pricing = {
  // Founding-client rates: the first few clients pay `price`; `regular` is the standard rate shown struck through.
  founding: {
    // Lower spotsLeft as founding clients sign on; at 0, switch the packages to their regular prices.
    spotsTotal: 3,
    spotsLeft: 3,
    text: 'My first three clients get a lower founding rate for the same work. In return, I’ll ask for feedback and, if you’re happy with the result, a short review.',
  },
  packages: [
    {
      id: 'starter',
      name: 'Starter Website',
      price: '$697',
      regular: '$997',
      tagline: 'What a local business needs to look professional online and get more calls.',
      badge: 'Recommended',
      features: [
        'Up to 5 pages: Home, Services, About, Contact, plus Gallery or Reviews',
        'Mobile-friendly, fast-loading design built around calls and quote requests',
        'Contact form and click-to-call buttons',
        'Local SEO basics and a connection to your Google Business Profile',
        'Domain setup and launch',
        '2 rounds of revisions',
        '30 days of support after launch',
      ],
      timeline: 'Usually 5–10 days once I have your content',
    },
    {
      id: 'growth',
      name: 'Growth Website',
      price: '$997',
      regular: '$1,497',
      from: true,
      tagline: 'For businesses that need a little more room: more pages, bookings and insight.',
      features: [
        'Everything in Starter',
        'Extra pages as needed',
        'Booking or request form integration',
        'An optimized photo gallery',
        'Google Analytics setup',
        'An extra round of revisions and more design polish',
      ],
    },
  ],
  care: {
    name: 'Care Plan',
    price: '$69',
    text: 'Hosting, security updates, backups and speed checks, plus up to 30–45 minutes of small changes each month, like new photos, hours or prices.',
  },
  terms: '50% to start and 50% when your site is ready to launch. The Care Plan is optional: without it, you host the site yourself and I hand off all the files and logins. Extra pages, a logo refresh or rush delivery are quoted up front.',
}

const { spotsLeft, spotsTotal } = pricing.founding
export const spotsText = `${spotsLeft} of ${spotsTotal} spots left`

export const about = {
  paragraphs: [
    'I’m Daeshawn, a web designer and developer in Northern Virginia. I started Design by Dae for local businesses that do great work but still don’t have a website, like the detailer who’s booked solid through word of mouth but doesn’t show up when someone searches.',
    'I’m taking on my first clients now, so you’ll work with me directly, from the first call until well after launch.',
  ],
  promises: ['You’ll know the price before any work starts', 'Every reply comes from me'],
}

export const faqs = [
  {
    q: 'I’m not good with technology. Is that a problem?',
    a: 'No. I handle the design and the technical setup. Your part is telling me about your business and giving feedback on the preview.',
  },
  {
    q: 'What do you need from me?',
    a: 'A short call, your logo if you have one, a few photos of your work, and the basics: services, service area, hours and how customers should reach you. No photos or logo yet? I’ll work around it.',
  },
  {
    q: 'Do I need to buy a domain?',
    a: 'You’ll want your own address, like yourbusiness.com. You can buy it yourself and I’ll connect it, or I can walk you through it. Either way, it stays in your name.',
  },
  {
    q: 'How long does it take?',
    a: 'A Starter site usually goes live 5–10 days after you send your content. The sooner I have your details and photos, the sooner you’re online.',
  },
  {
    q: 'What if I want changes after launch?',
    a: 'Small fixes are covered for 30 days after launch. After that, the Care Plan includes small monthly updates like new photos, hours or text changes. Bigger additions are quoted up front.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes. Your domain is in your name, and the site is yours. If you ever move on, I’ll hand over everything you need to take it with you.',
  },
  {
    q: 'I already have a Facebook page. Do I still need this?',
    a: 'Facebook is great for staying in touch, but it doesn’t show up well on Google, and you don’t control it. A website gives customers one trustworthy place to see your services, prices and how to reach you, and you can link it right from your page.',
  },
  {
    q: 'How do I pay?',
    a: '50% to get started and 50% when your site is ready to launch, by card or bank transfer. If you choose the Care Plan, it’s billed monthly from launch, and you can cancel any time.',
  },
  {
    q: 'Do I have to sign up for the Care Plan?',
    a: 'No, it’s optional. Without it, you host the site yourself and I hand off all the files and logins at launch. With it, I take care of hosting, security and updates for you.',
  },
]

// Add quotes here as founding clients share them; the section stays hidden while this list is empty.
// Example: { quote: 'Dae made the whole thing easy…', name: 'Maria L.', business: 'Bright Paws Grooming' }
export const testimonials = []

export const projectTypes = ['Starter Website', 'Growth Website', 'A redesign', 'Not sure yet']

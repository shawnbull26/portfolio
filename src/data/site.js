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

export const heroFacts = ['Live in about a week', 'From $697', 'You own it', 'No tech talk']

// The hero's typed word cycles through these.
export const heroTrades = ['detailing', 'cleaning', 'landscaping', 'barber', 'painting', 'plumbing', 'local']

// "Where are you starting from?" Each answer preselects an option in the contact form.
export const startingPoints = [
  {
    id: 'none',
    label: 'No website at all.',
    note: 'where most owners start',
    text: 'Perfect. We start from a blank page: your services, your area and how customers reach you. Most Starter sites are live in about a week.',
    choice: 'Starter Website',
  },
  {
    id: 'social',
    label: 'Just a Facebook or Instagram page.',
    note: 'a great head start',
    text: 'Your page already has photos and reviews. I’ll turn them into a real site that shows up on Google, and link the two so they work together.',
    choice: 'Starter Website',
  },
  {
    id: 'old',
    label: 'An old site I’m not proud of.',
    note: 'we can fix that',
    text: 'We keep what works, like your domain and any search ranking, and rebuild the rest so it looks like the business you are today.',
    choice: 'A redesign',
  },
]

export const included = [
  {
    title: 'Designed around your business',
    text: 'No cookie-cutter template. A clean, modern look built around what you do and who you serve.',
  },
  {
    title: 'Made for phones first',
    text: 'Most of your customers will find you on a phone, so every page is built to load fast and read well there.',
  },
  {
    title: 'Easy to call or book',
    text: 'Click-to-call buttons and a simple request form on every page, so interest turns into a conversation.',
  },
  {
    title: 'Found on Google',
    text: 'Local search basics set up from day one, and a connection to your Google Business Profile.',
  },
  {
    title: 'Words written for you',
    text: 'Not a writer? No problem. I help shape the wording from a quick chat about your business.',
  },
  {
    title: 'Looked after afterwards',
    text: 'Hosting, security and small updates handled for you on the Care Plan, so the site never goes stale.',
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
    text: 'A relaxed 20-minute chat about your business, your customers and what you want the site to do.',
  },
  {
    title: 'I build it',
    text: 'I design the site and write the words with you, sharing a live preview as it comes together.',
  },
  {
    title: 'You review',
    text: 'You click around the real thing and tell me what to change. Two rounds of revisions are included.',
  },
  {
    title: 'You go live',
    text: 'Your site launches on your own domain, with forms and Google set up, usually 5–10 days after I have your content.',
  },
]

export const pricing = {
  // Founding-client rates: the first few clients pay `price`; `regular` is the standard rate shown struck through.
  founding: {
    label: 'Founding-client rates',
    // Lower spotsLeft as founding clients sign on; at 0, switch the packages to their regular prices.
    spotsTotal: 3,
    spotsLeft: 3,
    text: 'I’m taking on my first three clients at a founding rate. You get the same work at a lower price, and I ask for your honest feedback and, if you’re happy, a testimonial.',
  },
  packages: [
    {
      id: 'starter',
      name: 'Starter Website',
      price: '$697',
      regular: '$997',
      tagline: 'Everything most local businesses need to look professional and get more calls.',
      badge: 'Most popular',
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
    text: 'Hosting, security updates, regular backups, performance checks and priority support, plus small changes each month like new photos, hours or text updates (about 30–45 minutes).',
  },
  terms: '50% to start, 50% when your site is ready to launch. The Care Plan is optional, and most clients keep it. Extra pages, logo refreshes and rush delivery are available as add-ons.',
}

const { spotsLeft, spotsTotal } = pricing.founding
export const spotsText = `${spotsLeft} of ${spotsTotal} spots left`

export const about = {
  heading: 'Hi, I’m Dae.',
  paragraphs: [
    'I’m Daeshawn, a web designer and developer in Northern Virginia. I started Design by Dae for the businesses that keep a neighborhood running but still don’t have a website: the detailer booked solid through word of mouth, the cleaning crew everyone recommends, the contractor with a great reputation and no way to be found online.',
    'I’m taking on my first clients now, which means you work directly with me from the first call to well after launch. No account managers, no jargon, and no disappearing for weeks.',
  ],
  promises: ['Clear prices before we start', 'Replies from me, not a ticket system', 'A site you’re proud to send people to'],
}

export const faqs = [
  {
    q: 'I’m not good with technology. Is that a problem?',
    a: 'Not at all. That’s exactly who this is for. I handle the setup, the design and the technical side. You tell me about your business and let me know what you think of the preview.',
  },
  {
    q: 'What do you need from me?',
    a: 'A short call, your logo if you have one, a few photos of your work, and the basics: services, service area, hours and how customers should reach you. No photos or logo yet? We’ll work around it.',
  },
  {
    q: 'Do I need to buy a domain?',
    a: 'You’ll want your own address, like yourbusiness.com. You can buy it yourself and I’ll connect it, or I can walk you through it. Either way, it stays in your name.',
  },
  {
    q: 'How long does it take?',
    a: 'Most Starter sites go live 5–10 days after I have your content. The quicker the details come in, the quicker you’re online.',
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
    a: 'No, it’s optional. Most owners keep it because it means never thinking about hosting, security or updates, but the choice is yours.',
  },
]

// Add quotes here as founding clients share them; the section stays hidden while this list is empty.
// Example: { quote: 'Dae made the whole thing easy…', name: 'Maria L.', business: 'Bright Paws Grooming' }
export const testimonials = []

export const projectTypes = ['Starter Website', 'Growth Website', 'A redesign', 'Not sure yet']

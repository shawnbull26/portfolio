// Everything a visitor reads lives here, so copy edits never touch the components.

export const person = {
  name: 'Daeshawn Bullock',
  role: 'Web design & development',
  location: 'Northern Virginia',
  github: 'https://github.com/shawnbull26',
  // Drop a portrait in public/ (about 800×1000) and set its path here to replace the monogram card.
  photo: null,
}

// The public address once deployed. Used for the canonical link and social preview tags.
export const siteUrl = 'https://daeshawn-bullock.netlify.app'

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    id: 'apex',
    index: '01',
    name: 'Apex Mobile Detailing',
    industry: 'Mobile car detailing',
    url: 'https://apex-mobile-detailing-example.netlify.app',
    description:
      'A detailer who comes to your driveway needs a site as polished as the finish they leave on a car. Bold, direct and confident, with nothing standing between a visitor and a booking.',
    focus:
      'Every section ends in a way to book. Phones get a sticky call bar, and choosing a service opens the form with it already filled in.',
    stats: [
      { value: '98', label: 'Performance' },
      { value: '100', label: 'Accessibility' },
      { value: '100', unit: 'KB', label: 'JavaScript, compressed' },
    ],
    images: {
      desktop: '/work/apex-desktop-960.webp',
      desktopLarge: '/work/apex-desktop.webp',
      mobile: '/work/apex-mobile.webp',
    },
    story: {
      problem:
        'Mobile detailing customers are busy, usually on a phone, and want two answers fast: what will it cost, and can you come to me? Most local detailing sites bury both under stock photos and vague "premium service" copy.',
      decisions: [
        {
          title: 'Prices up front',
          text: 'Every service shows its price by vehicle size, so people feel safe reaching out instead of guessing.',
        },
        {
          title: 'One tap to book',
          text: 'Book and call buttons in the header, the hero and every closing section, plus a floating call bar on phones.',
        },
        {
          title: 'A real local voice',
          text: 'Written in the owner\'s own voice, with local details like traffic on 495 and winter road salt, so it reads like a neighbor, not a franchise.',
        },
        {
          title: 'A form that quotes',
          text: 'It asks only what a detailer needs to quote the job, and says up front that no payment is taken.',
        },
      ],
      next: 'For a real client: photos from actual jobs, online scheduling, and tracking every call tap and form submission.',
    },
  },
  {
    id: 'lumen',
    index: '02',
    name: 'Lumen Clean Co.',
    industry: 'Eco-friendly house cleaning',
    url: 'https://lumen-clean-co.netlify.app',
    description:
      'Customers hand a cleaning company the key to their home. This brand had to feel calm, safe and accountable from the very first scroll.',
    focus:
      'A hero that shows a visit being completed, prices that update as you choose your home size, and reassurance placed exactly where people hesitate.',
    stats: [
      { value: '97', label: 'Performance' },
      { value: '100', label: 'Accessibility' },
      { value: '0', label: 'Layout shift' },
    ],
    images: {
      desktop: '/work/lumen-desktop-960.webp',
      desktopLarge: '/work/lumen-desktop.webp',
      mobile: '/work/lumen-mobile.webp',
    },
    story: {
      problem:
        'House cleaning is a trust purchase. Before anyone books, they want to know who is coming into their home, what it will really cost, and whether the cleaner will actually show up.',
      decisions: [
        {
          title: 'A hero that explains the service',
          text: 'Instead of a stock photo, a "today\'s visit" card ticks off its checklist and ends with photo proof. The whole service, understood in seconds.',
        },
        {
          title: 'Honest pricing',
          text: 'Price ranges by home size for every package, with a toggle that updates them all at once, so visitors can qualify themselves.',
        },
        {
          title: 'Reassurance where people hesitate',
          text: 'The same cleaner every visit, vetted staff and a free redo guarantee appear exactly where doubts tend to come up.',
        },
        {
          title: 'Motion with a job to do',
          text: 'Every animation directs attention or confirms an action, and all of it respects reduced-motion settings.',
        },
      ],
      next: 'For a real client: photos of the actual team, booking with live availability, and an instant quote calculator.',
    },
  },
]

export const steps = [
  {
    title: 'Listen',
    text: 'A relaxed call about your business: who your best customers are, what they ask before they hire you, and what makes you the right choice.',
  },
  {
    title: 'Shape',
    text: 'Words and structure come first. I map out what a visitor needs to see, in what order, to trust you and pick up the phone.',
  },
  {
    title: 'Build',
    text: 'I design and hand-build the site, sharing a live preview as it comes together. You give feedback on the real thing, not a sketch.',
  },
  {
    title: 'Launch',
    text: 'We go live with forms, search basics and speed all checked. After that, the Care Plan keeps your site secure, backed up and up to date.',
  },
]

export const principles = [
  {
    title: 'You always know where things stand.',
    text: 'Clear dates, quick replies, and no disappearing for weeks at a time.',
  },
  {
    title: 'Taste, with a reason behind it.',
    text: 'Every choice, from a font to a button, is there to make you look trustworthy and easy to hire.',
  },
  {
    title: 'I think like your customer.',
    text: 'Usually on a phone, often in a hurry, and deciding in seconds whether to call you or the next result.',
  },
]

export const pricing = {
  // Founding-client rates: the first few clients pay `price`; `regular` is the standard rate shown struck through.
  founding: {
    label: 'Founding-client rates',
    spots: 'For my first 3 clients',
    text: "I'm taking on my first three clients at a founding rate. You get the same work at a lower price, and I ask for your honest feedback and, if you're happy, a testimonial.",
  },
  packages: [
    {
      id: 'starter',
      name: 'Starter Website',
      price: '$697',
      regular: '$997',
      tagline: 'Everything most local businesses need to look professional and get more calls.',
      badge: 'Where most businesses start',
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

export const projectTypes = ['Starter Website', 'Growth Website', 'A redesign', 'Not sure yet']

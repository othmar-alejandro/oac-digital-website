// Homepage content. English strings; translate at render with useTx().

export type Tab = { title: string; desc: string; kind?: "wa" | "auto" | "crm" | "app"; shot?: { src: string; alt: string; cap: string } };

export const TABS: Tab[] = [
  { title: 'AI agents', desc: 'An agent on your site, your phone line or your messages that answers questions and books the job.', kind: 'wa' },
  { title: 'Automations', desc: 'The reply, the reminder, the review request and the follow-up go out without you touching them.', kind: 'auto' },
  { title: 'AI search', desc: 'More people now ask ChatGPT instead of Google. We set up your business so the AI can read it, trust it and name it.', shot: { src: '/images/home/chatgpt-fitoria.png', alt: 'ChatGPT answer listing Fitoria Tile and Marble first for best tile contractor near me', cap: 'ChatGPT, unedited. Client: Fitoria Tile & Marble.' } },
  { title: 'CRM built for you', desc: 'Not a giant system with a hundred buttons. One built around how your business works, with your contacts moved in.', kind: 'crm' },
  { title: 'Apps for your clients', desc: 'For barbers, salons, groomers and anyone with regulars. They rebook from their phone. You see your week at a glance.', kind: 'app' },
  { title: 'Custom business tools', desc: 'When no app fits how you work, we build the one that does. Pace turns an owner\'s spreadsheet into one screen and tells him the three things to do today.', shot: { src: '/images/home/pace.png', alt: 'Pace dashboard showing sold this month, the three things to do today and blocked jobs', cap: 'Pace, built for a Miami painting contractor. Shown with demo data.' } },
];

export const STORIES = [
  { name: 'Noah G Paint & Design', url: 'https://www.noahgpaint.net/', what: 'Website, SEO, AI search and the Pace dashboard', line: 'Before we started, Noah G didn\'t show up on Google. Now ask ChatGPT for the best painting contractor in Kendall and it names him first.', img: '/images/home/site-noahgpaint.jpg' },
  { name: 'Fitoria Tile & Marble', url: 'https://fitoriatileandmarble.com/', what: 'Website, SEO and AI search', line: 'Fitoria wasn\'t showing up on Google when we started. Now ChatGPT lists them first for tile contractors nearby, and the phone started ringing.', img: '/images/home/site-fitoria.jpg' },
  { name: 'Broke & Fixed Home Solutions', url: 'https://brokeandfixed.com/en', what: 'Website and the Brokie agent team', line: 'Broke & Fixed has its own team of AI agents in Telegram: one for proposals, one for leads and estimates, others for SEO, social and video.', img: '/images/home/site-brokeandfixed.jpg' },
];

export const PAINS = [
  { idx: '01', time: '7:40 am', img: '/images/home/pain-2.jpg', alt: 'Hands on a laptop on a couch', ico: 'G', app: 'Google', svc: 'AI search', line: 'People search for what you do and find your competitor.', t1: 'this morning', title1: '"tile contractor near me" · you are on page 3', chip1: 'Competitor listed first', t2: 'now', title2: '"tile contractor near me" · your business', chip2: 'Listed first' },
  { idx: '02', time: '10:15 am', img: '/images/home/pain-4.jpg', alt: 'A truck dashboard with a notebook and sticky notes', ico: 'C', app: 'Clients', svc: 'Your CRM', line: 'Your client list lives in your phone, your head and three notebooks.', t1: 'today', title1: '3 notebooks · 40 unread texts · 1 memory', chip1: 'Two leads lost this month', t2: 'today', title2: 'Every lead and client in one list, with the next step', chip2: 'Nothing forgotten' },
  { idx: '03', time: '2:30 pm', img: '/images/home/pain-3.jpg', alt: 'An empty barber chair in a quiet shop', ico: 'B', app: 'Bookings', svc: 'Rebooking app', line: 'Clients come once and never come back.', t1: '11 weeks', title1: 'Carlos M. · last visit 11 weeks ago', chip1: 'No rebook', t2: 'Friday', title2: 'Carlos M. · haircut with Luis, 4:30 pm', chip2: 'Rebooked · reminder set' },
  { idx: '04', time: '9:14 pm', img: '/images/home/pain-1.jpg', alt: 'A kitchen table at night with a phone glowing', ico: 'M', app: 'Messages', svc: 'AI agent', line: 'They wrote at 9pm. You answered at 9am. They hired someone else.', t1: '9:14 pm', title1: 'Do you do bathroom tile? Need a quote this week.', chip1: 'Seen at 9:02 am', t2: '9:14 pm', title2: 'Yes. Free estimate Thursday at 10 or Friday at 2?', chip2: 'Booked Thursday 10:00' },
  { idx: '05', time: '11:48 pm', img: '/images/home/pain-5.jpg', alt: 'A kitchen table late at night with a laptop and invoices', ico: 'I', app: 'Invoices', svc: 'Automations', line: 'You do the admin at night instead of resting.', t1: '11:48 pm', title1: 'Four invoices, two reminders, one review request. Still to do.', chip1: 'Started at 11:48 pm', t2: '5:02 pm', title2: 'Four invoices, two reminders, one review request. Sent.', chip2: 'Done before dinner' },
];

export const FAQS = [
  { q: 'What is an AI agent, in plain words?', a: 'A program that talks with your customers the way a good receptionist would. It answers questions, takes details and books appointments, at any hour.' },
  { q: 'Will it sound like a robot?', a: 'It uses your prices, your services and your way of talking. You approve what it says before it goes live.' },
  { q: 'Do I own what you build?', a: 'Yes. The domain, the site, the accounts and the logins are in your name.' },
  { q: "I'm not good with technology. Is that a problem?", a: "No. We set it up and show you the one or two things you'll use." },
  { q: 'Do you work in Spanish?', a: 'Yes. Calls, the site and the messages your customers get can be in Spanish, English or both.' },
];

// Service chips in the consultation form: [label, plain-words explanation].
export const SV: [string, string][] = [
  ['A website', 'A site you own that turns visitors into calls.'],
  ['Show up on Google', 'When locals search for what you do, you appear. People call this SEO.'],
  ['Show up in ChatGPT', 'More people ask ChatGPT instead of Google. We set you up so it can find you and recommend you.'],
  ['Automatic follow-up', 'Replies, reminders and review requests that send themselves.'],
  ['An AI agent', 'A program that answers your customers and books appointments, day and night.'],
  ['A personal assistant', 'Your own AI on WhatsApp, Telegram or text. You ask, it gets done.'],
  ['A CRM', 'Every lead and client in one place, built around how you work.'],
  ['An app for my clients', 'A booking app so your regulars rebook in one tap.'],
  ['Something custom', 'A dashboard or tool built for the way your business runs.'],
  ['Not sure yet', "That's fine. We'll figure it out together on the call."],
];
export const NOT_SURE = 9;

export const SITES = [
  { name: "Noah G Paint & Design", trade: "Painting, Miami", img: "/images/home/site-noahgpaint.jpg", url: "https://www.noahgpaint.net/" },
  { name: "Fitoria Tile & Marble", trade: "Tile and marble, Miami", img: "/images/home/site-fitoria.jpg", url: "https://fitoriatileandmarble.com/" },
  { name: "Broke & Fixed Home Solutions", trade: "Kitchen and bath remodeling, Miami-Dade", img: "/images/home/site-brokeandfixed.jpg", url: "https://brokeandfixed.com/en" },
  { name: "D-Tail Wash", trade: "Mobile auto detailing", img: "/images/home/site-dtailwash.jpg", url: "https://www.dtailwash.com/en" },
  { name: "Keep Her Light Alive Foundation", trade: "Nonprofit and memorial", img: "/images/home/site-keepherlightalive.jpg", url: "https://www.keepherlightalive.com/" },
];

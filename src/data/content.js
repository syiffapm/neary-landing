// Public-facing copy for visitors — kept in plain language on purpose.
// Numbers mirror what's actually tracked in the Neary admin console.

export const APP_URL = "https://neary-app.vercel.app";
export const CMS_URL = "https://neary-cms.vercel.app";
// Deep-links straight into the app's Register/Login screen — skips its own
// Welcome choice screen, since the choice was already made by which button
// was clicked here.
export const REGISTER_URL = `${APP_URL}/?auth=register`;
export const LOGIN_URL = `${APP_URL}/?auth=login`;

export const STATS = [
  { value: "1,312", label: "Women already using Neary" },
  { value: "4", label: "Provinces served today" },
  { value: "29", label: "Loans approved through partner banks" },
  { value: "US$68,140", label: "Financing unlocked so far" },
];

export const PROVINCES = ["Phnom Penh", "Siem Reap", "Battambang", "Kampong Cham"];

export const SERVICES = [
  { key: "learn", icon: "GraduationCap", title: "Learn", text: "Short, practical lessons on bookkeeping, cash flow, pricing and more — in Khmer, at your own pace." },
  { key: "manage", icon: "Receipt", title: "Track your sales", text: "Record what comes in and what goes out every day, by hand or automatically through QR payments." },
  { key: "coach", icon: "Bot", title: "Ask Neary AI", text: "Get quick answers to everyday business questions, any time. If it can't help safely, a real officer will." },
  { key: "health", icon: "HeartPulse", title: "Check your readiness", text: "See a simple score for how ready your business is — and exactly what would raise it." },
  { key: "mentors", icon: "Users", title: "Talk to a mentor", text: "Verified women who've grown a business like yours, matched by sector and province." },
  { key: "finance", icon: "Landmark", title: "Get connected to financing", text: "When you're ready, we introduce you to a partner bank — only with your say-so, every time." },
];

export const HOW_IT_WORKS = [
  { n: 1, title: "Sign up", text: "Pick your language, add a few details about your business. Takes a few minutes." },
  { n: 2, title: "Build your records", text: "Learn a little, track your sales, and watch your readiness score grow." },
  { n: 3, title: "Get ready for financing", text: "Register your business and see your score clear the bar for a bank referral." },
  { n: 4, title: "Connect, on your terms", text: "Choose to be introduced to a partner bank. You can change your mind at any time." },
];

export const NEWS = [
  { date: "18 Jan 2028", tag: "New feature", icon: "Users", title: "Verified Mentors is here", text: "Ask for a mentor in your sector and province — sessions are by phone or message, whenever suits you both." },
  { date: "9 Jan 2028", tag: "Partnership", icon: "Handshake", title: "Wing Bank joins as a lending partner", text: "Women who reach a finance-ready score can now also be referred to Wing Bank, alongside ABA Bank and PRASAC." },
  { date: "2 Jan 2028", tag: "Milestone", icon: "TrendingUp", title: "Over 1,300 women now on Neary", text: "Across Phnom Penh, Siem Reap, Battambang and Kampong Cham — with 29 loans approved so far." },
  { date: "21 Dec 2027", tag: "New content", icon: "BookOpen", title: "New lesson: Selling online", text: "A short guide to listing your products online and taking orders through social media." },
  { date: "14 Dec 2027", tag: "Programme", icon: "Sparkles", title: "Digital Selling Bootcamp — applications open", text: "A free training programme with 120 places, run with an e-commerce partner." },
];

// Illustrated, anonymous — seeds a stylized avatar (never a real photo) and
// a sector/province, the same way the admin console shows entrepreneurs.
export const COMMUNITY = [
  { seed: "NSB-01", sector: "Tailoring & handicraft", province: "Siem Reap" },
  { seed: "NSB-02", sector: "Food & beverage", province: "Phnom Penh" },
  { seed: "NSB-03", sector: "Retail & grocery", province: "Battambang" },
  { seed: "NSB-04", sector: "Beauty & personal care", province: "Kampong Cham" },
  { seed: "NSB-05", sector: "Agro-processing", province: "Siem Reap" },
  { seed: "NSB-06", sector: "Other services", province: "Phnom Penh" },
];

export const FAQS = [
  { q: "Is Neary a bank? Will I get a loan directly from Neary?", a: "No. Neary does not lend money and never makes the credit decision. We help you get ready — with records, formalization and a clear readiness score — then introduce you to a partner bank if you choose to be. The bank decides." },
  { q: "Is it free to use?", a: "Yes. Neary is a Ministry of Women's Affairs programme, operated by LinkIT, and is free for women entrepreneurs to use." },
  { q: "Is my information safe?", a: "You control what's shared and with whom. Nothing goes to a bank unless you start that referral yourself and approve it. You can withdraw your consent at any time, and you can ask to see, correct or delete your data." },
  { q: "Do I need to already have a registered business?", a: "No — you can start recording your sales and learning right away. Registering your business is a step inside the app when you're ready, with a guided checklist." },
  { q: "What languages does Neary support?", a: "Khmer first, with Burmese, Lao, English and Bahasa Indonesia also available in the app." },
  { q: "What is 'Neary AI'?", a: "A chat assistant for everyday business questions — pricing, cash flow, what documents you need. It gives advice only, never a credit, legal or tax decision, and always offers to connect you to a real officer." },
  { q: "I already have an account. How do I get back in?", a: "Open the app and choose \"I already have an account\" — you'll just need your phone number, no need to go through sign-up again." },
  { q: "Who can join?", a: "Women running or starting a small business in the provinces Neary currently serves. It's rolling out to more provinces over time." },
];

export const LENDERS = [
  { name: "ABA Bank", status: "Active partner" },
  { name: "PRASAC", status: "Active partner" },
  { name: "Wing Bank", status: "Active partner" },
  { name: "CGCC", status: "Guarantee scheme — coming soon" },
];

export const SCOPE_TRUTHS = [
  "We don't lend money, and we don't decide who gets a loan — that's always the bank's decision.",
  "We don't hold your money. Payments go straight through to your own account.",
  "We don't replace government registration — we guide you to it, and help you keep track.",
  "Our AI coach gives advice only. For anything serious, it hands you to a real person.",
];

export const LEARNING_CATS = ["Bookkeeping", "Cash flow", "Payments", "Finance & lending readiness", "Growth", "Formalization & legal"];

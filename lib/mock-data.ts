// Mock analytics data — replace with your API in production.
// All values deterministic so the dashboard renders identically on every reload.

export const STATS = [
  { label: "Revenue", value: 284_521, prefix: "$", delta: 12.4, accent: "#00bcd4" },
  { label: "Active users", value: 18_492, delta: 4.8, accent: "#a78bfa" },
  { label: "Conversion", value: 3.42, suffix: "%", delta: -0.3, accent: "#34d399" },
  { label: "Avg session", value: 4.6, suffix: "m", delta: 8.1, accent: "#fbbf24" },
];

export const REVENUE_SERIES = [
  { day: "Mon", value: 32_100 },
  { day: "Tue", value: 38_900 },
  { day: "Wed", value: 35_400 },
  { day: "Thu", value: 44_200 },
  { day: "Fri", value: 52_800 },
  { day: "Sat", value: 48_600 },
  { day: "Sun", value: 55_100 },
];

export const TRAFFIC_SOURCES = [
  { name: "Direct", value: 42, color: "#00bcd4" },
  { name: "Organic", value: 28, color: "#a78bfa" },
  { name: "Referral", value: 18, color: "#34d399" },
  { name: "Social", value: 12, color: "#f472b6" },
];

export const TOP_PRODUCTS = [
  { name: "Cosmic Landing Kit", sales: 1284, revenue: 62_916 },
  { name: "Luminor Persona Pack", sales: 892, revenue: 25_868 },
  { name: "Motion Primitives Pro", sales: 746, revenue: 36_554 },
  { name: "Arcanea Design System", sales: 512, revenue: 49_664 },
  { name: "World Engine Starter", sales: 318, revenue: 47_382 },
];

export const RECENT_ACTIVITY = [
  { who: "Aiyami", what: "reviewed Starlight Vault proposal", when: "2m ago", gate: "Crown" },
  { who: "Draconia", what: "shipped chat template v2.1", when: "14m ago", gate: "Fire" },
  { who: "Lyria", what: "flagged 3 anomalies in traffic data", when: "31m ago", gate: "Sight" },
  { who: "Maylinn", what: "opened 2 feedback threads", when: "1h ago", gate: "Heart" },
  { who: "Alera", what: "published weekly digest", when: "2h ago", gate: "Voice" },
  { who: "Lyssandria", what: "refactored auth middleware", when: "3h ago", gate: "Foundation" },
];

export const FUNNEL_STEPS = [
  { stage: "Visitors", count: 48_210 },
  { stage: "Signup", count: 18_492 },
  { stage: "Activated", count: 9_420 },
  { stage: "Paying", count: 1_847 },
];

import {
  Clock,
  CloudSun,
  Thermometer,
  Lightbulb,
  MonitorSmartphone,
  Timer,
  BatteryCharging,
  Hand,
  Cpu,
  Wifi,
  Sun,
  Droplets,
  CircuitBoard,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Specs', href: '#specs' },
  { label: 'Pricing', href: '#pricing' },
]

export const STATUS_PILLS = [
  { label: 'Weather Sync', icon: CloudSun },
  { label: 'Rechargeable', icon: BatteryCharging },
  { label: 'Smart Dashboard', icon: MonitorSmartphone },
  { label: 'RGB Ambient', icon: Lightbulb },
]

export const FEATURES = [
  {
    title: 'Smart Clock',
    desc: 'Crisp always-readable time with auto NTP sync and elegant analog or digital faces.',
    icon: Clock,
    accent: 'from-neon-blue/30',
    metric: '14:32',
    metricLabel: 'LOCAL TIME',
  },
  {
    title: 'Weather Sync',
    desc: 'Live conditions pulled over WiFi every few minutes, beautifully visualized at a glance.',
    icon: CloudSun,
    accent: 'from-neon-cyan/30',
    metric: '24°C',
    metricLabel: 'PARTLY CLOUDY',
  },
  {
    title: 'Room Climate',
    desc: 'On-board BME280 tracks temperature, humidity and pressure right at your desk.',
    icon: Thermometer,
    accent: 'from-neon-violet/30',
    metric: '48%',
    metricLabel: 'HUMIDITY',
  },
  {
    title: 'Ambient RGB',
    desc: 'WS2812 lighting reacts to focus sessions, alerts and your custom desk mood.',
    icon: Lightbulb,
    accent: 'from-neon-indigo/30',
    metric: 'AURA',
    metricLabel: 'RGB SCENE',
  },
  {
    title: 'AOD Mode',
    desc: 'Always-On Display sips power while keeping your essentials permanently visible.',
    icon: MonitorSmartphone,
    accent: 'from-neon-blue/30',
    metric: 'ON',
    metricLabel: 'ALWAYS-ON',
  },
  {
    title: 'Productivity Timer',
    desc: 'Built-in Pomodoro flow with focus / break cycles and gentle ambient cues.',
    icon: Timer,
    accent: 'from-neon-cyan/30',
    metric: '25:00',
    metricLabel: 'FOCUS BLOCK',
  },
  {
    title: 'Rechargeable Battery',
    desc: 'Internal LiPo with USB-C top-ups means a truly wireless desk presence.',
    icon: BatteryCharging,
    accent: 'from-neon-violet/30',
    metric: '92%',
    metricLabel: 'CHARGING',
  },
  {
    title: 'Touch Controls',
    desc: 'Capacitive touch surface to swap modes, dismiss timers and tune scenes instantly.',
    icon: Hand,
    accent: 'from-neon-indigo/30',
    metric: 'TAP',
    metricLabel: 'GESTURE',
  },
]

export const USE_CASES = [
  {
    title: 'Developers',
    desc: 'Keep build timers, focus blocks and ambient status lights in your peripheral vision without breaking flow.',
    icon: Code2,
    tag: '// stay in flow',
  },
  {
    title: 'Students',
    desc: 'Pomodoro study sprints, room comfort tracking and a calm clock that keeps revision sessions on track.',
    icon: GraduationCap,
    tag: '/* focus mode */',
  },
  {
    title: 'Desk Setup Enthusiasts',
    desc: 'A centerpiece that ties your battlestation together with synced RGB and a clean futuristic dashboard.',
    icon: Sparkles,
    tag: '<aesthetic />',
  },
]

export const TECH_SPECS = [
  { label: 'Processor', value: 'ESP32-S3', sub: 'Dual-core Xtensa LX7', icon: Cpu },
  { label: 'Connectivity', value: 'WiFi + BLE', sub: '2.4GHz + Bluetooth 5', icon: Wifi },
  { label: 'Display', value: 'Touch Display', sub: 'Round IPS, capacitive', icon: MonitorSmartphone },
  { label: 'Climate Sensor', value: 'BME280', sub: 'Temp · Humidity · Pressure', icon: Thermometer },
  { label: 'Light Sensor', value: 'BH1750', sub: 'Ambient lux auto-dim', icon: Sun },
  { label: 'RGB Lighting', value: 'WS2812', sub: 'Addressable LEDs', icon: Lightbulb },
  { label: 'Battery', value: 'LiPo', sub: '2000mAh Rechargeable cell', icon: BatteryCharging },
  { label: 'Charging', value: 'USB-C', sub: 'Fast & reversible', icon: CircuitBoard },
]

export const PRICING = [
  {
    name: 'Early Access',
    tagline: 'For the first wave of desk pioneers.',
    price: '₹4999',
    original: '₹6999',
    badge: 'LIMITED',
    highlight: false,
    perks: [
      'DeskMate X1 unit (ESP32-S3)',
      'Always-On Display + Clock',
      'Live Weather & Climate sync',
      'Pomodoro productivity timer',
      'Early firmware updates',
    ],
    cta: 'Notify Me',
  },
  {
    name: 'Creator Edition',
    tagline: 'Maxed-out hardware for power desks.',
    price: '₹7999',
    original: '₹9999',
    badge: 'MOST POPULAR',
    highlight: true,
    perks: [
      'Everything in Early Access',
      'Premium machined aluminum shell',
      'Enhanced WS2812 RGB ring',
      'Extended LiPo battery cell',
      'Priority WhatsApp support',
      'Lifetime feature drops',
    ],
    cta: 'Notify Me',
  },
]

export const STATS = [
  { value: '12k+', label: 'On the waitlist' },
  { value: '8', label: 'Smart modules' },
  { value: '< 2W', label: 'Power draw' },
  { value: 'USB-C', label: 'Recharge' },
]

export const WHATSAPP_LINK = import.meta.env.VITE_WHATSAPP_LINK || '#'

export const FOOTER_LINKS = {
  Product: ['Features', 'Showcase', 'Tech Specs', 'Pricing'],
  Company: ['About', 'Blog', 'Careers', 'Press Kit'],
  Support: ['Docs', 'Firmware', 'Warranty', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
}

// Popup content for each resume entry.
// `image` paths point to /images/ — drop real files in there and they'll appear automatically.
// Leave `image: null` for a plain text popup.

const POPUP_DATA = {
  header: {
    title: "Ayan Chandrasekaran",
    image: "images/headshot.jpg",
    position: "50% 30%",
    aspect: "3 / 4",
    text: "CS @ Michigan, minor in Music. Building things that sit at the intersection of software, hardware, and sound.",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/ayanchan/" },
      { label: "GitHub (ayanumich)", url: "https://github.com/ayanumich" },
      { label: "GitHub (bl0opy)", url: "https://github.com/bl0opy" }
    ]
  },
  umich: {
    title: "University of Michigan",
    image: "images/umich.png",
    logo: true,
    text: "College of Engineering, B.S. Computer Science, minor in Music. Focused coursework in systems, ML, and security.",
    links: []
  },
  snephew: {
    title: "Smith+Nephew",
    image: "images/smith-nephew.svg",
    logo: true,
    text: "Two summers of ML and computer vision for surgical robotics — a full-stack ResNet-50 pressure ulcer staging app presented at the company-wide AI Conference, and CORI Total-Knee surgery time prediction across 6,500+ cases.",
    links: [
      { label: "CORI Surgical System", url: "https://www.smith-nephew.com/en-us/health-care-professionals/products/orthopaedics/cori" }
    ]
  },
  gsd: {
    title: "Google Student Developers @ Michigan",
    image: "images/gsd.svg",
    logo: true,
    text: "Project Manager — led an 8-person team building a wellness-check and automated alert system for HomeRise, a shelter network with 18 locations across San Francisco.",
    links: []
  },
  emanate: {
    title: "Emanate",
    image: "images/emanate.png",
    fit: true,
    text: "Music technology startup producing interactive visuals for concerts — gesture-controlled granular synthesis and projection-mapped installations, including a walkable projected piano.",
    links: [
      { label: "emanate.studio", url: "https://www.emanate.studio/" },
      { label: "Video Demo", url: "https://youtube.com/shorts/_eDrTClHqNM?feature=share" },
      { label: "Code", url: "https://github.com/bl0opy/floor-piano" }
    ]
  },
  piano: {
    title: "Multiplayer Piano",
    image: "images/multiplayer-piano.svg",
    text: "A browser piano several people play at once. Each room is a single Cloudflare Durable Object — one authoritative actor that owns the WebSocket connections, note events, presence, and live cursors for everyone in that room, so there is no shared state to reconcile. Idle rooms hibernate out of memory and cost zero compute.",
    links: [
      { label: "Play it live", url: "https://bl0opy.github.io/multiplayer-piano/" },
      { label: "Cloudflare Durable Objects docs", url: "https://developers.cloudflare.com/durable-objects/" }
    ]
  },
  synqd: {
    title: "synqd",
    image: "images/synqd.png",
    text: "iOS app for long-distance couples — home/lock screen widgets showing partner timezone and location, synced in under a second on a Supabase backend. Live on TestFlight.",
    links: [
      { label: "mysynqd.com", url: "https://mysynqd.com/" }
    ]
  },
  soloai: {
    title: "SOLO.AI",
    image: "images/soloai.png",
    aspect: "1 / 1",
    text: "Privacy-first iOS chat app running a language model fully on-device — it detects PII, reformulates sensitive prompts, and escalates high-risk ones before any cloud LLM sees them.",
    links: []
  },
  yc: {
    title: "Y Combinator Startup School",
    image: "images/yc.png",
    logo: true,
    text: "Accepted from a pool of 30,000+ applicants.",
    links: []
  },
  jei: {
    title: "Journal of Emerging Investigators",
    image: "images/oxidemems.svg",
    logo: true,
    text: "Peer-reviewed paper from a Purdue OxideMEMS research internship — testing MEMS switches and prototyping an Enhanced 911 altimeter locator system.",
    links: [
      { label: "Read the paper", url: "https://emerginginvestigators.org/articles/23-064" }
    ]
  }
};

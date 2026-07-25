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
      { label: "GitHub", url: "https://github.com/ayanumich" }
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
    text: "Two summers building ML and audio systems for surgical robotics — from CORI Total-Knee time prediction to a real-time noise gating pipeline for the OR.",
    links: [
      { label: "CORI Surgical System", url: "https://www.smith-nephew.com/en-us/health-care-professionals/products/orthopaedics/cori" }
    ]
  },
  emanate: {
    title: "Emanate",
    image: "images/emanate.png",
    fit: true,
    text: "Music technology studio producing audio-reactive visuals for live concerts using DSP and computer vision — including a walkable projected piano installation.",
    links: [
      { label: "emanate.studio", url: "https://www.emanate.studio/" },
      { label: "Video Demo", url: "https://youtube.com/shorts/_eDrTClHqNM?feature=share" },
      { label: "Code", url: "https://github.com/bl0opy/floor-piano" }
    ]
  },
  aoc: {
    title: "Art of Culture",
    image: "images/reflections.png",
    text: "Studio internship under Grammy-winning rapper Rhymefest — songwriting, beatmaking, mixing, and community events on Chicago's South Side.",
    links: [
      { label: "Reflections", url: "https://www.youtube.com/watch?v=H0-Z6m_PnhU" }
    ]
  },
  oxide: {
    title: "OxideMEMS",
    image: "images/oxidemems.svg",
    logo: true,
    text: "Purdue research internship testing MEMS switches and prototyping an Enhanced 911 altimeter locator system. Paper peer-reviewed and published.",
    links: [
      { label: "Journal of Emerging Investigators", url: "https://emerginginvestigators.org/articles/23-064" }
    ]
  },
  synqd: {
    title: "synqd",
    image: "images/synqd.png",
    text: "iOS app for long-distance couples — home/lock screen widgets showing partner timezone, location, and countdown, plus custom push notifications. Live on TestFlight.",
    links: [
      { label: "mysynqd.com", url: "https://mysynqd.com/" }
    ]
  },
  crispy: {
    title: "Crispy",
    image: "images/crispy.png",
    logo: true,
    text: "VST/AU vocal processing plugin built in C++ with JUCE — EQ, multiband compression, sibilance reduction, and saturation in a beginner-friendly UI.",
    links: [
      { label: "GitHub", url: "https://github.com/ayanumich/crispy" }
    ]
  },
  music: {
    title: "Independent Music",
    image: "images/music.svg",
    logo: true,
    text: "100k+ streams and 3k+ monthly listeners self-produced under two projects, plus live performances including a 400-person show at the Blind Pig.",
    links: [
      { label: "Spotify", url: "https://open.spotify.com/artist/6BPgJxMu5S3uSpWTO5PM8W" }
    ]
  },
  yc: {
    title: "Y Combinator Startup School",
    image: "images/yc.png",
    logo: true,
    text: "Accepted from a pool of 30,000+ applicants.",
    links: []
  },
  mmbc: {
    title: "Michigan Music Business Club",
    image: "images/mmbc.webp",
    logo: true,
    dark: true,
    text: "Director of Creative Technology — bringing tech and production tools into the club's music industry programming.",
    links: []
  },
  gsd: {
    title: "Google Student Developers @ Michigan",
    image: "images/gsd.svg",
    logo: true,
    text: "Member of the campus developer community - built automatic attendance monitoring and email automation system for HomeRise homeless shelter",
    links: []
  }
};

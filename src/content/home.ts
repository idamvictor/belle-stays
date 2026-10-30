// All copy and media for the home page. Edit text here, not in the components.
// Anything marked "TODO: confirm" is a placeholder that needs real Belle Stays details.

import {
  BathIcon,
  BedDoubleIcon,
  CookingPotIcon,
  HeadsetIcon,
  KeyRoundIcon,
  WifiIcon,
} from "lucide-react"

export const site = {
  name: "Belle Stays",
  description:
    "Belle Stays offers comfortable, stylish short-term accommodations in Portland, Oregon for vacations, business trips, and weekend getaways.",
  // TODO: confirm contact details
  phone: "+1 (503) 000-0000",
  email: "hello@bellestays.com",
  address: ["Downtown Portland", "Portland, Oregon"],
}

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stays", href: "#stays" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
] as const

// TODO: confirm social profile links
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com", icon: "/icons/social-instagram.svg" },
  { label: "Facebook", href: "https://www.facebook.com", icon: "/icons/social-facebook.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "/icons/social-linkedin.svg" },
  { label: "X", href: "https://x.com", icon: "/icons/social-x.svg" },
  { label: "YouTube", href: "https://www.youtube.com", icon: "/icons/social-youtube.svg" },
]

export const hero = {
  title: ["Stylish Stays,", "Made to Feel Like Home"],
  location: "Downtown Portland, Oregon",
  pitch: "Comfortable, stylish stays for vacations, business trips, and weekend getaways.",
  // Set to a YouTube/Vimeo embed URL to turn the photo card into a video player.
  videoUrl: "",
}

export const stats = {
  statement:
    "Welcoming spaces and attentive service, so every guest feels at home from the moment they arrive.",
  // TODO: confirm these figures
  items: [
    { prefix: "", value: "4.9", unit: "/ 5", label: "Average guest rating" },
    { prefix: "", value: "1,200", unit: "+", label: "Stays hosted" },
    { prefix: "", value: "24", unit: "/ 7", label: "Guest support" },
    { prefix: "from", value: "3", unit: "pm", label: "Self check-in" },
  ],
}

export const host = {
  name: "Belle Stays Guest Team",
  role: "Your hosts",
  // TODO: confirm contact details and photo
  phone: "+1 (503) 000-0000",
  email: "stay@bellestays.com",
  instagram: "https://www.instagram.com",
  photo: "/images/intro/agent.jpg",
}

export const intro = {
  eyebrow: "About Belle Stays",
  title: "Welcoming spaces, attentive service",
  body: "We look after every detail, from spotless spaces to quick, friendly help, so you can settle in and enjoy Portland like a local.",
}

export type Hotspot = { x: number; y: number; title: string; text: string }

export const rooms: {
  name: string
  image: string
  alt: string
  hotspots: Hotspot[]
}[] = [
  {
    name: "Living Room",
    image: "/images/strip/grid-04.jpg",
    alt: "Bright living room with a large sofa and city views",
    hotspots: [
      { x: 30, y: 62, title: "Room to unwind", text: "Generous seating for movie nights, catching up, or doing nothing at all." },
      { x: 72, y: 30, title: "Natural light", text: "Big windows keep the space bright from morning coffee to sunset." },
    ],
  },
  {
    name: "Bedroom",
    image: "/images/interior/bedroom.jpg",
    alt: "Calm bedroom with a fireplace, a freestanding bath and a view",
    hotspots: [
      { x: 17, y: 36, title: "Cozy evenings", text: "Thoughtful touches that make a short stay feel like a retreat." },
      { x: 60, y: 65, title: "Hotel-quality bedding", text: "Fresh, crisp linens and plush pillows for a great night's sleep." },
    ],
  },
  {
    name: "Bathroom",
    image: "/images/strip/grid-03.jpg",
    alt: "Bright bathroom with a freestanding tub and timber vanity",
    hotspots: [
      { x: 80, y: 62, title: "Fresh towels & toiletries", text: "Everything you need is waiting for you when you arrive." },
    ],
  },
  {
    name: "Kitchen",
    image: "/images/strip/grid-02.jpg",
    alt: "Modern kitchen with a marble island",
    hotspots: [
      { x: 45, y: 58, title: "Fully equipped kitchen", text: "Cookware, utensils, and coffee essentials for meals in." },
    ],
  },
  {
    name: "Terrace",
    image: "/images/amenities/lounge.jpg",
    alt: "Outdoor terrace lounge at sunset",
    hotspots: [
      { x: 42, y: 70, title: "Outdoor space", text: "A spot to slow down with a morning coffee or an evening drink." },
    ],
  },
]

export const included = {
  eyebrow: "The Belle Stays standard",
  title: "Every stay, thoughtfully prepared",
  body: "From the moment you book to the moment you check out, we take care of the details so you can relax and enjoy your time away.",
  items: [
    { icon: KeyRoundIcon, label: "Easy self check-in" },
    { icon: BedDoubleIcon, label: "Fresh linens every stay" },
    { icon: HeadsetIcon, label: "Responsive guest support" },
  ],
}

export const features = [
  {
    title: "Fast Wi-Fi",
    text: "Reliable high-speed internet for streaming, video calls, and working on the go.",
    icon: WifiIcon,
  },
  {
    title: "Self check-in",
    text: "Arrive on your schedule with simple, contactless check-in instructions.",
    icon: KeyRoundIcon,
  },
  {
    title: "Fully equipped kitchens",
    text: "Cook a favorite meal or grab breakfast at home with everything you need.",
    icon: CookingPotIcon,
  },
  {
    title: "Fresh linens & toiletries",
    text: "Crisp bedding, soft towels, and bathroom essentials ready for every guest.",
    icon: BathIcon,
  },
]

export const stayTypes = [
  { name: "Studios", option: "Studio", sleeps: "Up to 2 guests", image: "/images/stays/studio.jpg" },
  { name: "Apartments", option: "Apartment", sleeps: "Up to 4 guests", image: "/images/stays/apartment.jpg" },
  { name: "Family Homes", option: "Family home", sleeps: "Up to 6 guests", image: "/images/stays/family-home.jpg" },
]

export const featuredTitle = "Find the stay that suits your trip"

// TODO: confirm names, sizes and rates for your listings
export const featuredStays = [
  {
    name: "The Pearl Studio",
    type: "Studio",
    price: "Rates on request",
    guests: "2 guests",
    beds: "1 bed",
    baths: "1 bath",
    plan: "/images/floorplans/vista.jpg",
    photo: "/images/floorplans/vista-photo.jpg",
  },
  {
    name: "The Willamette Suite",
    type: "Apartment",
    price: "Rates on request",
    guests: "4 guests",
    beds: "2 beds",
    baths: "2 baths",
    plan: "/images/floorplans/horizon.jpg",
    photo: "/images/floorplans/horizon-photo.jpg",
  },
  {
    name: "The Rose City Home",
    type: "Family home",
    price: "Rates on request",
    guests: "6 guests",
    beds: "3 beds",
    baths: "2.5 baths",
    plan: "/images/floorplans/panorama.jpg",
    photo: "/images/strip/grid-01.jpg",
  },
]

// TODO: confirm which of these your properties offer
export const amenities = [
  { eyebrow: "Unwind", title: "Sunset Terraces", image: "/images/amenities/lounge.jpg", icon: "/icons/amenity-lounge.svg" },
  { eyebrow: "Relax", title: "Pool Days", image: "/images/amenities/pool.jpg", icon: "/icons/amenity-pool.svg" },
  { eyebrow: "Stay active", title: "Fitness on Your Schedule", image: "/images/amenities/fitness.jpg", icon: "/icons/amenity-fitness.svg" },
  { eyebrow: "Step outside", title: "Green Spaces Nearby", image: "/images/amenities/gardens.jpg", icon: "/icons/amenity-gardens.svg" },
]

// Downtown Portland. TODO: confirm the exact Belle Stays address.
export const location = {
  center: [45.5196, -122.6762] as [number, number],
  building: { name: "Belle Stays", note: "Downtown Portland", position: [45.5205, -122.677] as [number, number] },
  places: [
    { name: "Pioneer Courthouse Square", kind: "Transit & events", icon: "/icons/map-transit.svg", position: [45.5189, -122.6793] as [number, number] },
    { name: "Powell's City of Books", kind: "Shopping", icon: "/icons/map-shopping.svg", position: [45.5231, -122.6814] as [number, number] },
    { name: "Voodoo Doughnut", kind: "Food & drink", icon: "/icons/map-dining.svg", position: [45.5226, -122.6731] as [number, number] },
    { name: "Tom McCall Waterfront Park", kind: "Park", icon: "/icons/map-park.svg", position: [45.5163, -122.6731] as [number, number] },
  ],
}

export const journey = {
  title: "Easy from the first search to the moment you arrive",
  steps: [
    {
      step: "Step 01",
      title: "Discover",
      text: "Browse our stays and find the space that fits your trip, whether it's a weekend away or a work week in the city.",
      icon: "/icons/step-discover.svg",
    },
    {
      step: "Step 02",
      title: "Book",
      text: "Send a booking request with your dates and guests, and we'll confirm the details quickly.",
      icon: "/icons/step-reserve.svg",
    },
    {
      step: "Step 03",
      title: "Check In",
      text: "Arrive, let yourself in, and settle in. We're a message away if you need anything.",
      icon: "/icons/step-move-in.svg",
    },
  ],
}

export const cta = {
  title: "Find the perfect stay for your next trip",
}

export const strip = [
  { src: "/images/strip/grid-03.jpg", alt: "Bathroom with a freestanding tub" },
  { src: "/images/strip/grid-04.jpg", alt: "Living room with city views" },
  { src: "/images/strip/grid-05.jpg", alt: "Calm, minimal bedroom" },
  { src: "/images/strip/grid-01.jpg", alt: "Open bedroom suite" },
  { src: "/images/strip/grid-02.jpg", alt: "Modern kitchen" },
]

export const footer = {
  about:
    "Belle Stays offers comfortable, stylish short-term accommodations for vacations, business trips, and weekend getaways. We focus on welcoming spaces and attentive service to help every guest feel at home.",
  menu: [
    { label: "Home", href: "#home" },
    { label: "Stays", href: "#stays" },
    { label: "Amenities", href: "#amenities" },
    { label: "Contact", href: "#contact" },
  ],
  copyrightYear: 2026,
  enquiryEyebrow: "Get in touch",
  enquiryTitle:
    "Planning a trip to Portland? Send us a message and we'll help you find the right stay.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
}

// Choices for the "Stay" field in the booking form
export const stayOptions = [
  ...featuredStays.map((stay) => stay.name),
  ...stayTypes.map((type) => type.option),
  "Not sure yet",
]

export const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"]

export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {
  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };
  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };
  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };
  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };
  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
    };
  };
  seo: {
    title: string;
    description: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };
  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };
  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };
  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };
  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {
  "brand": {
    "name": "Coastal Alabama Cooling",
    "shortName": "Coastal Alabama Cooling",
    "logo": "https://lirp.cdn-website.com/ec5ed960/dms3rep/multi/opt/logo-1920w.png",
    "logoLight": "https://lirp.cdn-website.com/ec5ed960/dms3rep/multi/opt/logo-1920w.png",
    "region": "Gulf Shores · Baldwin County, Alabama"
  },
  "theme": {
    "style": "technical",
    "colors": {
      "brandPrimary": "#173C65",
      "brandSecondary": "#69C6D0",
      "brandAccent": "#E8B34E",
      "page": "#101E30",
      "surfaceDark": "#162B43",
      "surfaceDarkAlt": "#1E3A58",
      "surfaceElevated": "#244B70",
      "surfaceSoft": "#EFF6F7",
      "textPrimary": "#FCFDFE",
      "textSecondary": "#DDE9F0",
      "textMuted": "#91A6B8",
      "textOnBrand": "#FFFFFF",
      "borderSubtle": "#2B4358",
      "borderStrong": "#537089",
      "glowPrimary": "#173C65",
      "glowSecondary": "#69C6D0",
      "networkLine": "#E8B34E",
      "success": "#69A880",
      "service1": "#173C65",
      "service2": "#E8B34E",
      "service3": "#69C6D0",
      "service4": "#1E3A58",
      "service5": "#244B70"
    }
  },
  "header": {
    "navServices": "Services",
    "navAreas": "Service areas",
    "navContact": "Contact",
    "helpLabel": "Call (251) 365-COOL",
    "ctaLabel": "Schedule an appointment",
    "mobileEyebrow": "GULF SHORES · BALDWIN COUNTY, ALABAMA",
    "mobileCallLabel": "Call now"
  },
  "opening": {
    "enabled": false,
    "durationMs": 1400,
    "eyebrow": "GULF SHORES · OPEN 24/7",
    "line1": "Comfort without",
    "line2": "the wallet shock.",
    "detail": "Coastal Alabama Cooling · Gulf Shores · Baldwin County, Alabama",
    "location": "24/7 emergency service",
    "skipLabel": "Skip intro"
  },
  "hero": {
    "layout": "service-craft",
    "eyebrow": "GULF SHORES · OPEN 24/7",
    "headlineLine1": "Comfort without",
    "headlineLine2": "the wallet shock.",
    "description": "Local heating and cooling, honest recommendations, and emergency service any day of the week.",
    "primaryCta": "Schedule an appointment",
    "secondaryCta": "Call Coastal Alabama Cooling",
    "locationLabel": "GULF SHORES · BALDWIN COUNTY, ALABAMA",
    "locationValue": "Gulf Shores · Orange Beach · Foley",
    "edgeLabel": "HVAC CARE FOR ALABAMA’S GULF COAST",
    "bottomStatement": "Local team · Gulf Shores · Alabama License #2022263",
    "sillLabel": "24/7 EMERGENCY SERVICE",
    "serviceLabels": [
      "Cooling",
      "Heating",
      "Air quality"
    ],
    "discoverLabel": "Explore services",
    "motion": {
      "enabled": true,
      "pace": "balanced",
      "ambient": false
    },
    "system": {
      "eyebrow": "LOCAL COMFORT / IN MOTION",
      "modes": [
        {
          "id": "cool",
          "label": "Cooling",
          "detail": "A considered path from warm intake to balanced, conditioned air."
        },
        {
          "id": "warm",
          "label": "Heating",
          "detail": "Steady circulation, carefully controlled for colder days."
        },
        {
          "id": "pure",
          "label": "Air quality",
          "detail": "A focus on filtration and the air moving through every room."
        }
      ]
    },
    "media": {
      "primarySrc": "https://irp.cdn-website.com/ec5ed960/dms3rep/multi/opt/20251223_095855-353adbde-29fd053d-1920w.png",
      "primaryAlt": "Coastal Alabama Cooling HVAC technician at work, in a photo from the company website.",
      "primaryPosition": "center 48%",
      "fit": "cover",
      "backdrop": "matte"
    }
  },
  "seo": {
    "title": "Coastal Alabama Cooling | HVAC Services in Gulf Shores, AL",
    "description": "Locally owned heating and cooling for Gulf Shores, Foley, Orange Beach and surrounding Alabama Gulf Coast communities. Call 251-365-COOL, available 24/7."
  },
  "contact": {
    "phoneDisplay": "(251) 365-COOL",
    "phoneHref": "tel:+12513652665",
    "email": "",
    "address": "3639 Gulf Shores Parkway, Suite 3, Gulf Shores, AL 36542",
    "contactUrl": "#contact",
    "servicesUrl": "#services"
  },
  "brandStandard": {
    "eyebrow": "GOOD COMFORT. FAIR COST.",
    "titleLine1": "Coastal Alabama comfort, made straightforward.",
    "titleLine2": "Good comfort. Fair cost.",
    "bodyTitle": "Coastal Alabama comfort, made straightforward.",
    "body": "Coastal Alabama Cooling is a locally owned Gulf Shores HVAC team focused on reliable work and fair, practical recommendations. The team serves homes across the coast with repairs, installations, mini-splits, ductwork, and air purification.",
    "callLabel": "Call now",
    "availabilityLabel": "Gulf Shores · Baldwin County, Alabama",
    "panelEyebrow": "COASTAL ALABAMA COOLING",
    "panelTitle": "A full-service local HVAC team with round-the-clock availability and practical options for coastal homes.",
    "panelFooter": "Local team · Gulf Shores · Alabama License #2022263",
    "handoff": "Explore Coastal Alabama Cooling services.",
    "items": [
      {
        "icon": "cooling",
        "label": "Cooling service",
        "detail": "Comfortable, efficient cooling from repair to replacement."
      },
      {
        "icon": "heating",
        "label": "Heating & installation",
        "detail": "Ductless comfort for additions, condos, and rooms without ductwork."
      },
      {
        "icon": "maintenance",
        "label": "Local expertise",
        "detail": "Responsive troubleshooting for Gulf Coast heat and humidity."
      }
    ]
  },
  "services": {
    "eyebrow": "YEAR-ROUND HOME COMFORT",
    "introLine1": "Service shaped",
    "introLine2": "around your home.",
    "summaryEyebrow": "COASTAL ALABAMA COOLING",
    "summaryTitle": "A full-service local HVAC team with round-the-clock availability and practical options for coastal homes.",
    "summaryBody": "Coastal Alabama Cooling is a locally owned Gulf Shores HVAC team focused on reliable work and fair, practical recommendations. The team serves homes across the coast with repairs, installations, mini-splits, ductwork, and air purification.",
    "summaryCta": "Talk to the team",
    "items": [
      {
        "name": "AC installation & replacement",
        "shortName": "Cooling",
        "image": "/services/01.svg",
        "description": "Comfortable, efficient cooling from repair to replacement."
      },
      {
        "name": "AC mini-splits",
        "shortName": "Heating",
        "image": "/services/02.svg",
        "description": "Ductless comfort for additions, condos, and rooms without ductwork."
      },
      {
        "name": "AC service & repair",
        "shortName": "Installation",
        "image": "/services/03.svg",
        "description": "Responsive troubleshooting for Gulf Coast heat and humidity."
      },
      {
        "name": "Ductwork",
        "shortName": "Maintenance",
        "image": "/services/04.svg",
        "description": "Professional duct installation and airflow improvements."
      },
      {
        "name": "Air purification",
        "shortName": "Air quality",
        "image": "/services/05.svg",
        "description": "Cleaner indoor air with tailored filtration and purification options."
      }
    ]
  },
  "coverage": {
    "eyebrow": "LOCAL SERVICE AREA",
    "titleLine1": "Close to home.",
    "titleLine2": "Here when you need us.",
    "description": "Gulf Shores · Baldwin County, Alabama — Gulf Shores, AL, Orange Beach, AL, Foley, AL, Fort Morgan, AL, Bon Secour, AL, Robertsdale, AL.",
    "featuredLocation": "Gulf Shores, AL",
    "locationDetail": "Proud to serve Gulf Shores · Baldwin County, Alabama.",
    "ctaLabel": "Schedule an appointment",
    "networkLabel": "THE LOCAL SERVICE NETWORK",
    "regionLabel": "Gulf Shores · Baldwin County, Alabama",
    "metrics": [
      {
        "value": "6 communities",
        "label": "Service area"
      },
      {
        "value": "24/7 emergency service",
        "label": "Local commitment"
      },
      {
        "value": "Local team",
        "label": "Gulf Shores · Baldwin County, Alabama"
      }
    ],
    "locations": [
      {
        "name": "Gulf Shores, AL",
        "kind": "city",
        "lat": 30.246,
        "lng": -87.7008,
        "hub": true
      },
      {
        "name": "Orange Beach, AL",
        "kind": "city",
        "lat": 30.2944,
        "lng": -87.5736,
        "hub": false
      },
      {
        "name": "Foley, AL",
        "kind": "city",
        "lat": 30.4066,
        "lng": -87.6836,
        "hub": false
      },
      {
        "name": "Fort Morgan, AL",
        "kind": "city",
        "lat": 30.229,
        "lng": -88.022,
        "hub": false
      },
      {
        "name": "Bon Secour, AL",
        "kind": "city",
        "lat": 30.314,
        "lng": -87.735,
        "hub": false
      },
      {
        "name": "Robertsdale, AL",
        "kind": "city",
        "lat": 30.5538,
        "lng": -87.7111,
        "hub": false
      }
    ]
  },
  "contactSection": {
    "eyebrow": "TALK WITH A LOCAL TEAM",
    "titleLine1": "Let’s get your",
    "titleLine2": "comfort back.",
    "body": "Tell Coastal Alabama Cooling what you need, or call the team directly to get started.",
    "primaryCta": "Schedule an appointment",
    "secondaryCta": "Call Coastal Alabama Cooling",
    "submissionMode": "demo",
    "formEndpoint": "",
    "successMessage": "Thanks for reaching out. This concept form is a preview and is not connected yet; call (251) 365-COOL to contact Coastal Alabama Cooling directly."
  }
};

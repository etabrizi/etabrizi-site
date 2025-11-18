export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  images: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "devhub",
    title: "DeveloperHub",
    subtitle: "A next-generation API portal for livestock data integration",
    summary:
      "I built the Developer Hub site for Livestock Information (LIS) using Next.js, providing a clean, accessible, and future-ready front-end platform for third-party developers to connect with LIS’s livestock-data services. The portal guides users through registration, sandbox testing, API subscription, and go-live workflows, and includes comprehensive documentation, tutorials and best-practice resources.",
    tags: ["React", "Next.js", "Msal.js"],
    images: ["/images/developerhub.png"],
    link: "https://developers.livestockinformation.org.uk/",
  },
  {
    id: "moj",
    title: "MOJ Design System Website",
    subtitle: "A central design-system portal for MOJ services",
    summary:
      "I collaborated with a UX design team to build the Design System site for MOJ, the hub where components, patterns, pages, guidance and standards are published for MOJ digital teams. This platform supports cross-team reuse of UI building-blocks, prototyping guidance and production-ready front-end tooling.",
    tags: ["Nunjuks", "11ty", "JS", "CSS", "GDS toolkit"],
    images: ["/images/moj.png"],
    link: "https://design-patterns.service.justice.gov.uk/",
  },
  {
    id: "bp",
    title: "Blood Pressure Logger – Apple app",
    subtitle: "A native React / Capacitor app for tracking blood pressure trends",
    summary:
      "A privacy-focused blood pressure companion that lets users log manual readings, track symptoms and lifestyle factors, and visualise trends over time. I designed and built the app using a reusable design system, ensuring accessibility, a mobile-first layout and clear data visualisation. The app also surfaces NHS-aligned guidance and exportable summaries to support more informed conversations with healthcare professionals.",
    tags: ["React", "TypeScript", "Capacitor", "Design system"],
    images: ["/images/bp.png"],
    link: "https://bp-logger.netlify.app/",
  },
  {
    id: "bcu",
    title: "Birmingham City University (BCU) Website",
    subtitle: "A central touchpoint for thousands of students and staff",
    summary:
      "I collaborated with a UX design team to help deliver the revamped main website of Birmingham City University (BCU). The project was focused on creating a modern, accessible, performance-optimised digital presence to better serve current/prospective students, staff, alumni and other key audiences.",
    tags: ["UI/UX", "JS", "CSS", "HTML"],
    images: ["/images/bcu2.png"],
    link: "https://www.bcu.ac.uk/",
  },
  {
    id: "household",
    title: "Npower Household comparison",
    subtitle: "Interactive tool to compare energy usage with other households",
    summary:
      "I collaborated with a cross-functional digital team to design and build an intuitive, interactive comparison tool that enabled users to compare their household energy usage with others. The interface included engaging visual animations to enhance understanding while maintaining accessibility and usability across devices.",
    tags: ["UI/UX", "JS", "CSS", "HTML", "GSAP"],
    images: ["/images/household.png"],
  },
  {
    id: "leicester",
    title: "Leicester City Council Public Website",
    subtitle:
      "Supporting iterative improvements to a widely used public service platform",
    summary:
      "I worked alongside UX and design specialists to develop and refine page templates and component variations across the council’s main website. The focus was on usability, accessibility, and consistency, ensuring key services and information were easy to find and use for a diverse public audience.",
    tags: ["UI/UX", "JS", "CSS", "HTML"],
    images: ["/images/leicester.png"],
  },
];

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
    id: "Livestock-Information-Design system",
    title: "DeveloperHub",
    subtitle: "A next-generation API portal for livestock data integration",
    summary:
      "I built the Developer Hub site for Livestock Information (LIS) using Next.js, providing a clean, accessible, and future-ready front-end platform for third-party developers to connect with LIS’s livestock-data services. The portal guides users through registration, sandbox testing, API subscription, and go-live workflows, and includes comprehensive documentation, tutorials and best-practice resources.",
    tags: ["React", "Next.js", "Msal.js"],
    images: ["/images/project-1b.png"],
    link: "https://developers.livestockinformation.org.uk/"
  },
  {
    id: "moj",
    title: "MOJ Design System Website",
    subtitle: "A central design-system portal for MOJ services",
    summary:
      "I collaborated with a UX design team to build the Design System site for MOJ, the hub where components, patterns, pages, guidance and standards are published for MOJ digital teams. This platform supports cross-team reuse of UI building-blocks, prototyping guidance and production-ready front-end tooling.",
    tags: ["Nunjuks", "11ty", "JS", "CSS", "GDS toolkit"],
    images: ["/images/moj.png"],
    link: "https://design-patterns.service.justice.gov.uk/"
  },
  {
    id: "bcu",
    title: "Birmingham City University (BCU) Website",
    subtitle: "A central touchpoint for thousands of students and staff",
    summary:
      "I collaborated with a UX design team to help deliver the revamped main website of Birmingham City University (BCU). The project was focused on creating a modern, accessible, performance-optimised digital presence to better serve current/prospective students, staff, alumni and other key audiences.",
    tags: ["UI/UX", "JS", "CSS", "HTML"],
    images: ["/images/bcu2.png"],
    link : "https://www.bcu.ac.uk/"
  }
];

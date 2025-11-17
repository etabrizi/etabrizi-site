import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";

type ProjectsResponse = {
  projects: {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    tags: string[];
    images: string[];
    link?: string;
  }[];
};

export const meta: MetaFunction = () => [
  { title: "Home | Etabrizi - UI Engineer" },
  {
    name: "description",
    content: "Portfolio overview with selected work and ways to connect."
  }
];

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch(new URL("/api/projects", request.url));
  const data = (await res.json()) as ProjectsResponse;
  return json({ featured: data.projects.slice(0, 1) });
}

export default function IndexRoute() {
  const { featured } = useLoaderData<typeof loader>();
  const bubbleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const maxDist = 180;
      const maxPush = 16;

      bubbleRefs.current.forEach((bubble) => {
        if (!bubble) return;
        const rect = bubble.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - event.clientX;
        const dy = cy - event.clientY;
        const dist = Math.hypot(dx, dy) || 1;
        const strength = Math.max(0, maxDist - dist) / maxDist;
        const pushX = (dx / dist) * strength * maxPush;
        const pushY = (dy / dist) * strength * maxPush;

        bubble.style.setProperty("--repel-x", `${pushX}px`);
        bubble.style.setProperty("--repel-y", `${pushY}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <main className="page">
      <div className="bubble-group" aria-hidden="true">
        <div
          className="bubble-wrap"
          ref={(el) => el && (bubbleRefs.current[0] = el)}
        >
          <div className="bubble bubble-red">HTML</div>
        </div>
        <div
          className="bubble-wrap"
          ref={(el) => el && (bubbleRefs.current[1] = el)}
        >
          <div className="bubble bubble-green">JS</div>
        </div>
        <div
          className="bubble-wrap"
          ref={(el) => el && (bubbleRefs.current[2] = el)}
        >
          <div className="bubble bubble-blue">CSS</div>
        </div>
      </div>
      <section className="hero">
        <div>
          <h1>Hi, I&apos;m Emyr Tabrizi.</h1>
          <p>
            Specialising in creating intuitive, accessible, and inclusive digital
            experiences, I combine a deep understanding of accessibility standards
            with user-centred design principles and technical expertise to deliver
            impactful, high-quality solutions.
          </p>
          <div className="button-row">
            <Link to="/work" prefetch="intent" className="button">
              View projects →
            </Link>
            <Link to="/contact" prefetch="intent" className="button secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="section-title">Featured work</h2>
          <Link to="/work" className="button secondary" prefetch="intent">
            See all
          </Link>
        </div>
        {featured.map((project) => {
          const [primaryImage, ...restImages] = project.images;
          return (
            <article key={project.id} className="panel home-feature">
              <div className="home-media">
                {primaryImage ? (
                  <img
                    src={primaryImage}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <div className="home-copy">
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ margin: "0.35rem 0" }}>{project.title}</h3>
                <p style={{ color: "#666", fontWeight: 600 }}>{project.subtitle}</p>
                <p style={{ color: "#475569" }}>{project.summary}</p>
                {restImages.length ? (
                  <div className="home-thumbs">
                    {restImages.map((src, idx) => (
                      <img
                        key={src + idx}
                        src={src}
                        alt={`${project.title} visual ${idx + 2}`}
                        className="project-img"
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>

      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="section-title">Videos</h2>
        </div>
        <div className="video-grid">
          <article className="panel video-card">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/EfHhUHGawvo?start=2"
                title="Demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h3 style={{ margin: "0 0 0.35rem" }}>Javascript for, forEach and map loops</h3>
              <p style={{ margin: 0, color: "#5a5a5a" }}>
                Short video overview of Loops in JS.
              </p>
            </div>
          </article>
          <article className="panel video-card">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/QUwB2o3Ak-w?start=18"
                title="Demo video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h3 style={{ margin: "0 0 0.35rem" }}>Next.js Server Actions</h3>
              <p style={{ margin: 0, color: "#5a5a5a" }}>
                Overview of Server Actions in Next.js
              </p>
            </div>
          </article>
          <article className="panel video-card">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/l35kog5Am40?start=25"
                title="Demo video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div>
              <h3 style={{ margin: "0 0 0.35rem" }}>Illustrator - Making a glossy button</h3>
              <p style={{ margin: 0, color: "#5a5a5a" }}>
             How to create a glossy button in Adobe illustrator.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

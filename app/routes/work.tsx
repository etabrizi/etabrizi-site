import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

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
  { title: "Work | ETabrizi — UI Engineer" },
  {
    name: "description",
    content: "A closer look at shipped projects and systems work."
  }
];

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch(new URL("/api/projects", request.url));
  const data = (await res.json()) as ProjectsResponse;
  return json({ projects: data.projects });
}

export default function WorkRoute() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <main className="page">
      <section className="panel">
        <h1 className="section-title">Selected work</h1>
        <p style={{ marginTop: 0, color: "#475569" }}>
          Work that blends product thinking, UX craft, and front-end execution.
        </p>
        <div className="work-list">
          {projects.map((project) => {
            const [primaryImage, ...restImages] = project.images;
            return (
              <article key={project.id} className="panel work-item">
                <div className="work-media">
                  {primaryImage ? (
                    <img
                      src={primaryImage}
                      alt={`${project.title} visual`}
                      className="project-img"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div className="work-copy">
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
                    <div className="work-thumbs">
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
                  {project.link ? (
                    <Link
                      to={project.link}
                      className="button secondary"
                      target="_blank"
                      rel="noreferrer"
                      style={{ width: "fit-content" }}
                    >
                      View details
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

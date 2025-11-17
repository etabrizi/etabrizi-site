import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Contact | ETabrizi — UI Engineer" },
  {
    name: "description",
    content: "Ways to reach Emyr, ask about collaborations, or say hello."
  }
];

export default function ContactRoute() {
  return (
    <main className="page">
      <section className="panel contact-card">
        <div>
          <h1 className="section-title">Let&apos;s connect</h1>
          <p style={{ color: "#475569", marginTop: 0 }}>
            I&apos;m open to collaborations, consulting, and full-time
            opportunities. If you&apos;d like to see a CV or chat about work,
            let&apos;s connect on LinkedIn.
          </p>
          <div className="grid" style={{ marginTop: "1rem" }}>
            <div className="panel card">
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0ea5e9" }}
              >
                linkedin.com/in/emyrtabrizi
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

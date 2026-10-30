const stages = [
  { name: "Build", detail: "Compile & bundle", time: "0:42", state: "complete" },
  { name: "Test", detail: "148 checks passed", time: "1:18", state: "complete" },
  { name: "Deploy", detail: "Production · us-east", time: "now", state: "active" },
];

const benefits = [
  {
    number: "01",
    title: "Every change gets a path",
    description:
      "Push to your branch and let automated checks catch issues before they reach production.",
  },
  {
    number: "02",
    title: "Know what shipped",
    description:
      "Follow each build, test, and deployment in one clear, traceable workflow.",
  },
  {
    number: "03",
    title: "Recover with confidence",
    description:
      "Release in small steps, spot problems early, and get back to a healthy build faster.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      <path d="M4.25 10h11.5m-4.5-4.5 4.5 4.5-4.5 4.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="check-icon"
    >
      <path d="m3.25 8.25 3 3 6.5-6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Relay home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>relay<span className="brand-period">.</span></span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#workflow">Workflow</a>
          <a href="#benefits">Why CI/CD</a>
        </nav>
        <a className="header-cta" href="#workflow">
          See the pipeline <ArrowIcon />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            A better way to ship
          </p>
          <h1 id="hero-title">
            Good code
            <br />
            moves <span>forward.</span>
          </h1>
          <p className="hero-description">
            From the first commit to production, make every release predictable.
            A clear CI/CD workflow keeps your team moving and your software
            reliable.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#workflow">
              Explore the workflow <ArrowIcon />
            </a>
            <a className="text-link" href="#benefits">
              Why automate?
            </a>
          </div>
          <div className="hero-note">
            <span className="note-indicator" />
            Built for teams that ship thoughtfully
          </div>
        </div>

        <div className="pipeline-card" id="workflow">
          <div className="pipeline-topline">
            <div>
              <p className="card-overline">Latest pipeline</p>
              <h2>Production release</h2>
            </div>
            <span className="run-status">
              <span /> Running
            </span>
          </div>

          <div className="commit-row">
            <span className="commit-avatar">AM</span>
            <div className="commit-copy">
              <strong>Polish dashboard experience</strong>
              <span>
                <code>main</code> · commit <code>8f3c2a1</code>
              </span>
            </div>
            <span className="commit-time">2m ago</span>
          </div>

          <div className="stage-list">
            {stages.map((stage, index) => (
              <div className={`stage stage-${stage.state}`} key={stage.name}>
                <div className="stage-marker">
                  {stage.state === "complete" ? (
                    <CheckIcon />
                  ) : (
                    <span className="spinner" />
                  )}
                </div>
                {index < stages.length - 1 && <span className="stage-line" />}
                <div className="stage-copy">
                  <strong>{stage.name}</strong>
                  <span>{stage.detail}</span>
                </div>
                <span className="stage-time">{stage.time}</span>
              </div>
            ))}
          </div>

          <div className="pipeline-footer">
            <span className="footer-dot" />
            <span>All checks passed</span>
            <span className="footer-divider" />
            <span>Preview changes</span>
            <ArrowIcon />
          </div>
        </div>

        <span className="hero-orbit orbit-one" aria-hidden="true" />
        <span className="hero-orbit orbit-two" aria-hidden="true" />
      </section>

      <section className="benefits" id="benefits" aria-labelledby="benefits-title">
        <div className="section-heading">
          <p className="eyebrow">From commit to confidence</p>
          <h2 id="benefits-title">A calmer way to deliver.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit" key={benefit.number}>
              <span className="benefit-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#" aria-label="Relay home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>relay<span className="brand-period">.</span></span>
        </a>
        <p>Ship with care. Ship with confidence.</p>
        <a href="#hero-title">Back to top ↑</a>
      </footer>
    </main>
  );
}

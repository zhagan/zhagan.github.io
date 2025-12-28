import { FiExternalLink, FiGithub, FiLayers, FiMonitor, FiZap } from 'react-icons/fi'

const highlights = [
  {
    title: 'Product-minded engineer',
    description:
      'Thoughtful about the full stack: expressive UI systems, resilient APIs, and cloud automation that fades into the background.',
    icon: <FiMonitor />
  },
  {
    title: 'Creative technologist',
    description:
      'Combines experience as a musician with code to ship playful interactions, audiovisual experiments, and generative tools.',
    icon: <FiZap />
  },
  {
    title: 'Systems thinker',
    description:
      'Obsessed with design systems, accessibility, and repeatable workflows that help teams deliver quickly without sacrificing quality.',
    icon: <FiLayers />
  }
]

const projects = [
  {
    name: 'Portfolio & music hub',
    repo: 'zhagan/zhagan.github.io',
    description: 'Source code for this circuit-inspired portfolio that blends music and development work.',
    link: 'https://github.com/zhagan/zhagan.github.io',
    tags: ['Vite', 'React', 'Design system']
  },
  {
    name: 'Open source catalog',
    repo: 'github.com/zhagan?tab=repositories',
    description: 'Browse Zack’s public repositories, experiments, and archived prototypes on GitHub.',
    link: 'https://github.com/zhagan?tab=repositories',
    tags: ['GitHub', 'Experiments']
  },
  {
    name: 'Automation & gists',
    repo: 'gist.github.com/zhagan',
    description: 'Reusable snippets for audio tooling, creative coding, and automation scripts.',
    link: 'https://gist.github.com/zhagan',
    tags: ['Scripts', 'Audio', 'Tooling']
  }
]

function DeveloperSpotlight() {
  return (
    <div className="dev-section">
      <div className="dev-hero">
        <p className="eyebrow">Developer</p>
        <h2>Design-forward software with a musical ear.</h2>
        <p className="muted">
          Zack builds immersive web experiences, data-driven visuals, and reliable APIs. The same curiosity that fuels his music
          practice shows up in his code: thoughtful details, rich textures, and a willingness to experiment.
        </p>
        <a className="primary-link" href="mailto:hello@zackhagan.com">
          Start a collaboration <FiExternalLink />
        </a>
      </div>
      <div className="dev-right">
        <div className="dev-grid">
          {highlights.map((item) => (
            <article className="glass-card" key={item.title}>
              <div className="icon-circle">{item.icon}</div>
              <h4>{item.title}</h4>
              <p className="muted">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="dev-projects">
          <div className="projects-header">
            <div>
              <p className="eyebrow">GitHub projects</p>
              <h4>Recent repos & experiments</h4>
            </div>
            <a className="repo-link" href="https://github.com/zhagan" target="_blank" rel="noreferrer">
              View profile ↗
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className="project-card" href={project.link} key={project.repo} target="_blank" rel="noreferrer">
                <div className="project-meta">
                  <h5>{project.name}</h5>
                  <FiGithub size={18} />
                </div>
                <p className="repo-link">{project.repo}</p>
                <p className="muted">{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="cta">
                  View on GitHub <FiExternalLink />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperSpotlight

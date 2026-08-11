import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiMonitor,
  FiZap,
  FiGrid,
  FiFileText,
  FiCode,
  FiMusic,
  FiLink,
  FiRepeat,
  FiUserCheck,
  FiRefreshCw,
  FiTool,
  FiCompass
} from 'react-icons/fi'

const highlights = [
  {
    title: 'Design systems builder',
    description:
      'Builds and maintains component systems that scale across teams, products, and frameworks without losing visual or behavioral consistency.',
    icon: <FiGrid />
  },
  {
    title: 'PDF & document systems specialist',
    description:
      'Deep experience turning messy, real-world documents into interactive, inspectable, and repairable user experiences.',
    icon: <FiFileText />
  },
  {
    title: 'Full-stack problem solver',
    description:
      'Comfortable moving between frontend, backend, and infrastructure to remove friction and ship end-to-end solutions.',
    icon: <FiCode />
  },
  {
    title: 'Creative audio engineer',
    description:
      'Applies synthesis, MIDI, and audio-routing knowledge to build tools that bridge music hardware, software, and the web.',
    icon: <FiMusic />
  },
  {
    title: 'Blockchain systems engineer',
    description:
      'Designs and ships on-chain programs, wallets, and bots with a focus on correctness, transparency, and real economic behavior.',
    icon: <FiLink />
  },
  {
    title: 'Workflow automator',
    description:
      'Eliminates manual toil through CI/CD, build pipelines, and deployment automation that teams can trust.',
    icon: <FiRepeat />
  },
  {
    title: 'UX-driven engineer',
    description:
      'Treats usability, performance, and accessibility as first-class requirements—not afterthoughts.',
    icon: <FiUserCheck />
  },
  {
    title: 'Systems modernizer',
    description:
      'Refactors legacy platforms into modern, maintainable architectures while keeping production stable.',
    icon: <FiRefreshCw />
  },
  {
    title: 'Toolmaker at heart',
    description:
      'Builds internal tools and interfaces that make complex systems understandable and enjoyable to use.',
    icon: <FiTool />
  },
  {
    title: 'Curious by default',
    description:
      'Continuously explores new platforms—from web frameworks to hardware—to find better ways to build and create.',
    icon: <FiCompass />
  }
]

const projects = [
  {
    name: 'major-midi',
    repo: 'https://github.com/zhagan/major-midi',
    page: 'https://zhagan.github.io/major-midi/',
    description: 'A browser-based MIDI playground for experimenting with notes, harmony, and musical ideas.',
    tags: ['MIDI', 'Music', 'Web audio']
  },
  {
    name: 'sdts',
    repo: 'https://github.com/zhagan/sdts',
    page: 'https://zhagan.github.io/sdts/',
    description: 'An interactive web project that makes its tools and experiments easy to explore right in the browser.',
    tags: ['Interactive', 'Web', 'Open source']
  },
  {
    name: 'CMSS-Trail-Mod',
    repo: 'https://github.com/zhagan/CMSS-Trail-Mod',
    page: 'https://zhagan.github.io/CMSS-Trail-Mod/',
    description: 'A community-made trail modification project, with its source and playable web build available for anyone to explore.',
    tags: ['Game mod', 'Community', 'Web build']
  },
  {
    name: 'mod',
    repo: 'https://github.com/zhagan/mod',
    page: 'https://zhagan.github.io/mod/',
    description: 'My fork of mod, where I can test changes and share a live version alongside the source.',
    tags: ['Fork', 'Experiment', 'Open source']
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
          Zack works at the intersection of engineering and music, using AI as both a creative collaborator and a systems tool.
          He has built AI-driven interfaces that generate, transform, and analyze complex data,
          with a strong emphasis on usability and intent. Across documents, audio, and interactive UI,
          Zack focuses on making AI systems feel responsive, legible, and grounded in human goals.
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
              <article className="project-card" key={project.repo}>
                <div className="project-meta">
                  <h5>{project.name}</h5>
                  <FiGithub size={18} />
                </div>
                <p className="muted">{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="cta" href={project.repo} target="_blank" rel="noreferrer">
                    <FiGithub /> Repository <FiExternalLink />
                  </a>
                  <a className="cta project-page-link" href={project.page} target="_blank" rel="noreferrer">
                    <FiMonitor /> Live project <FiExternalLink />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperSpotlight

import { useMemo, useState } from 'react'
import {
  FiExternalLink,
  FiGithub,
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
  const [flippedCards, setFlippedCards] = useState(new Set())
  const puzzleImage = '/assets/images/zackPortfolio.jpg'
  const gridColumns = 5

  const puzzleHighlights = useMemo(
    () =>
      highlights.map((item, index) => ({
        ...item,
        col: index % gridColumns,
        row: Math.floor(index / gridColumns)
      })),
    [gridColumns]
  )

  const gridRows = useMemo(() => Math.ceil(puzzleHighlights.length / gridColumns), [puzzleHighlights.length, gridColumns])

  const handleFlip = (title) => {
    setFlippedCards((prev) => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }
      return next
    })
  }

  const allRevealed = flippedCards.size === puzzleHighlights.length

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
        <div className="puzzle-status">
          <p className="muted">
            Flip each highlight tile to reveal a fragment of the full portrait. {flippedCards.size}/
            {puzzleHighlights.length} revealed{allRevealed ? ' — full image unlocked!' : ''}
          </p>
        </div>
        <div className="dev-grid">
          {puzzleHighlights.map((item) => {
            const isFlipped = flippedCards.has(item.title)
            return (
              <article
                className={`glass-card flip-card ${isFlipped ? 'is-flipped' : ''}`}
                key={item.title}
                onClick={() => handleFlip(item.title)}
              >
                <div className="flip-inner">
                  <div className="card-face card-front">
                    <div className="icon-circle">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p className="muted">{item.description}</p>
                  </div>
                  <div
                    className="card-face card-back puzzle-piece"
                    style={{
                      '--tile-col': item.col,
                      '--tile-row': item.row,
                      '--tile-cols': gridColumns,
                      '--tile-rows': gridRows,
                      backgroundImage: `url(${puzzleImage})`
                    }}
                  >
                    <span className="puzzle-overlay">{item.title}</span>
                  </div>
                </div>
              </article>
            )
          })}
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

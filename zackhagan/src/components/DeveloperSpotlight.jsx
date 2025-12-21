import { FiExternalLink, FiLayers, FiMonitor, FiZap } from 'react-icons/fi'

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
      <div className="dev-grid">
        {highlights.map((item) => (
          <article className="glass-card" key={item.title}>
            <div className="icon-circle">{item.icon}</div>
            <h4>{item.title}</h4>
            <p className="muted">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default DeveloperSpotlight

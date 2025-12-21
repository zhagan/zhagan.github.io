import { useMemo, useState } from 'react'
import Header from './components/Header'
import AlbumCard from './components/AlbumCard'
import DeveloperSpotlight from './components/DeveloperSpotlight'
import Footer from './components/Footer'
import { albums } from './data/albums'

function App() {
  const [activeTab, setActiveTab] = useState('music')
  const [activeAlbum, setActiveAlbum] = useState(albums[0])

  const albumButtons = useMemo(
    () =>
      albums.map((album) => ({
        label: album.title,
        id: album.title
      })),
    []
  )

  return (
    <div className="app-shell">
      <div className="background-grid" />
      <Header activeTab={activeTab} onNavigate={setActiveTab} />

      <main className="content">
        <section className="hero">
          <div>
            <p className="eyebrow">Producer · Engineer · Designer</p>
            <h2>
              Denver based sounds and beautifully crafted digital products by{' '}
              <span className="gradient-text">Zack Hagan</span>.
            </h2>
            <p className="muted">
              Pick a lane to explore the latest releases or peek at the software craft that powers Zack&apos;s creative work.
            </p>
          </div>
        </section>

        {activeTab === 'music' ? (
          <section className="music-section">
            <div className="profile-card">
              <img src="/assets/images/zackPortfolio.jpg" alt="Zack Hagan" />
              <div>
                <p className="eyebrow">Musician</p>
                <h3>Discography</h3>
                <p className="muted">
                  A catalog built from home-made synths, guitars, and collaborations with long-time friends. Toggle an album to
                  drop into a different era of Zack&apos;s sound.
                </p>
                <div className="chip-row">
                  {albumButtons.map((item) => (
                    <button
                      key={item.id}
                      className={`chip ${activeAlbum.title === item.label ? 'is-active' : ''}`}
                      onClick={() => setActiveAlbum(albums.find((a) => a.title === item.label))}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <AlbumCard album={activeAlbum} />
          </section>
        ) : (
          <DeveloperSpotlight />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App

function AlbumCard({ album }) {
  if (!album) return null

  return (
    <div className="album-card">
      <div className="album-meta">
        <div>
          <h3>{album.title}</h3>
        </div>
        <a className="ghost-link" href={album.bandcamp?.link} target="_blank" rel="noreferrer">
          Listen on Bandcamp ↗
        </a>
      </div>
      <div className="album-body">
        {album.bandcamp?.src && (
          <iframe
            title={`${album.title} player`}
            className="album-embed"
            src={album.bandcamp.src}
            style={{ border: 0 }}
            allowTransparency="true"
            loading="lazy"
          >
            <a href={album.bandcamp.link}>{album.bandcamp.text}</a>
          </iframe>
        )}
        <div className="album-notes">
          <p className="eyebrow">Story</p>
          <p>{album.blurb}</p>
        </div>
      </div>
    </div>
  )
}

export default AlbumCard

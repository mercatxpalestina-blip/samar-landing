import posterImage from '../../../assets/EVENTO_HORARIOS-ad3cbdc6-e761-446a-88c7-5663161b1356.png'
import { LANDING_PAGE_CONTENT } from './landing_page_content'
import defaultAvatar from '../../../assets/avatar_default.svg'
import { toInstagramUrl } from './utils/instagram'
import './landing.css'

const avatarAssets = import.meta.glob('../../../assets/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function toAvatarKey(handle: string): string[] {
  const normalized = handle.trim().replace(/^@/, '')
  const noDots = normalized.replaceAll('.', '')
  const dotsToUnderscore = normalized.replaceAll('.', '_')
  return [normalized, noDots, dotsToUnderscore]
}

function getLocalAvatarSrc(handle: string): string {
  // Allow a few alias keys (e.g. la.cocota -> la.cocote.png)
  const aliasKeys = handle === 'la.cocota' ? ['la.cocote'] : []
  const candidates = [...toAvatarKey(handle), ...aliasKeys]

  for (const key of candidates) {
    for (const ext of ['png', 'jpg', 'jpeg', 'webp', 'svg']) {
      const matchPathSuffix = `/assets/${key}.${ext}`
      const match = Object.entries(avatarAssets).find(([path]) => path.endsWith(matchPathSuffix))
      if (match) return match[1]
    }
  }

  return defaultAvatar
}

export function LandingPage(): JSX.Element {
  const musica = LANDING_PAGE_CONTENT.musicaYpoesia
  return (
    <main className="landingRoot">
      <header className="landingHeader" aria-label="Títol del mercat">
        <div className="landingTitle" role="heading" aria-level={2}>
          {LANDING_PAGE_CONTENT.siteTitle}
        </div>
      </header>

      <div className="landingContent">
        <section className="eventHero" aria-label="Presentació de l'esdeveniment">
          <h1 className="eventTitle">{LANDING_PAGE_CONTENT.eventTitle}</h1>
          <p className="eventDate">
            Data: <span className="eventDateValue">{LANDING_PAGE_CONTENT.eventDateLabel}</span>
          </p>
        </section>

        <section className="sectionCard" aria-labelledby="talleres-fam">
          <h3 id="talleres-fam" className="sectionHeading">
            Talleres Familiares
          </h3>
          <ul className="landingList">
            {LANDING_PAGE_CONTENT.talleresFamiliares.map((item) => (
              <li key={item.name} className="landingListItem">
                {item.instagramHandle ? (
                  <img
                    className="accountAvatar"
                    src={getLocalAvatarSrc(item.instagramHandle.handle)}
                    alt={`Portada de ${item.instagramHandle.handle}`}
                    loading="lazy"
                  />
                ) : null}
                <span className="landingListItemName">{item.name}</span>
                {item.instagramHandle ? (
                  <a
                    className="pillLink"
                    href={toInstagramUrl(item.instagramHandle.handle)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{item.instagramHandle.handle}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="sectionCard" aria-labelledby="musica-poesia">
          <h3 id="musica-poesia" className="sectionHeading">
            {musica.heading}
          </h3>

          <div className="subHeading">{musica.artistsHeading}</div>
          <div className="artistsGrid">
            {musica.artists.map((artist) => (
              <div key={artist.name} className="personCard">
                {artist.instagramHandle ? (
                  <img
                    className="personAvatar"
                    src={getLocalAvatarSrc(artist.instagramHandle.handle)}
                    alt={`Portada de ${artist.instagramHandle.handle}`}
                    loading="lazy"
                  />
                ) : null}
                <div className="personName">{artist.name}</div>
                {artist.instagramHandle ? (
                  <a
                    className="pillLink personLink"
                    href={toInstagramUrl(artist.instagramHandle.handle)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{artist.instagramHandle.handle}
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          {musica.photos.length > 0 ? (
            <>
              <div className="subHeading">Fotos</div>
              <div className="photoGrid" role="list">
                {musica.photos.map((photo) => (
                  <div key={photo.src} className="photoItem" role="listitem">
                    <img className="photoImage" src={photo.src} alt={photo.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="mutedText">Galeria de fotos: afegeix les imatges al fitxer de configuració.</p>
          )}
        </section>

        <section className="sectionCard" aria-labelledby="menjar-arab">
          <h3 id="menjar-arab" className="sectionHeading">
            {LANDING_PAGE_CONTENT.comidaArabe.heading}
          </h3>
          <ul className="landingList">
            {LANDING_PAGE_CONTENT.comidaArabe.items.map((item) => (
              <li key={item.name} className="landingListItem">
                {item.instagramHandle ? (
                  <img
                    className="accountAvatar"
                    src={getLocalAvatarSrc(item.instagramHandle.handle)}
                    alt={`Portada de ${item.instagramHandle.handle}`}
                    loading="lazy"
                  />
                ) : null}
                <span className="landingListItemName">{item.name}</span>
                {item.instagramHandle ? (
                  <a
                    className="pillLink"
                    href={toInstagramUrl(item.instagramHandle.handle)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{item.instagramHandle.handle}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="sectionCard" aria-labelledby="cartel">
          <h3 id="cartel" className="sectionHeading">
            {LANDING_PAGE_CONTENT.cartelHeading}
          </h3>
          <img
            className="posterLarge"
            src={posterImage}
            alt="Cartell del 2 anys de solidaritat amb Palestina"
            loading="lazy"
          />
        </section>

        <section className="sectionCard" aria-labelledby="lloc">
          <h3 id="lloc" className="sectionHeading">
            {LANDING_PAGE_CONTENT.locationHeading}
          </h3>
          <div className="locationText">{LANDING_PAGE_CONTENT.location.addressLine1}</div>
          <div className="locationText">{LANDING_PAGE_CONTENT.location.addressLine2}</div>

          <div className="mapWrap">
            <iframe
              title="Mapa del event"
              className="mapFrame"
              src={LANDING_PAGE_CONTENT.location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </main>
  )
}


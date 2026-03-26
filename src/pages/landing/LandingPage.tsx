import posterImage from '../../../assets/EVENTO_HORARIOS-ad3cbdc6-e761-446a-88c7-5663161b1356.png'
import titleImage from '../../../assets/title.png'
import footerLogoImage from '../../../assets/mercatxpalestina.jpg'
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
          <h1 className="srOnly">{LANDING_PAGE_CONTENT.eventTitle}</h1>
          <img className="eventTitleImage" src={titleImage} alt={LANDING_PAGE_CONTENT.eventTitle} />
        </section>

        <section className="sectionCard" aria-labelledby="talleres-fam">
          <div className="sectionHeaderRow">
            <h3 id="talleres-fam" className="sectionHeading">
              Tallers familiars
            </h3>
            <div className="sectionTime" aria-label="Horari">
              {LANDING_PAGE_CONTENT.sectionTimes.talleresFamiliares}
            </div>
          </div>
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
          <div className="sectionHeaderRow">
            <h3 id="musica-poesia" className="sectionHeading">
              {musica.heading}
            </h3>
            <div className="sectionTime" aria-label="Horari">
              {LANDING_PAGE_CONTENT.sectionTimes.musicaYpoesia}
            </div>
          </div>
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
        </section>

        <section className="sectionCard" aria-labelledby="menjar-arab">
          <div className="sectionHeaderRow">
            <h3 id="menjar-arab" className="sectionHeading">
              {LANDING_PAGE_CONTENT.comidaArabe.heading}
            </h3>
            <div className="sectionTime" aria-label="Horari">
              {LANDING_PAGE_CONTENT.sectionTimes.comida}
            </div>
          </div>
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

        <section className="sectionCard sectionCardCentered" aria-labelledby="pintura-directe">
          <h3 id="pintura-directe" className="sectionHeading sectionHeadingCentered">
            {LANDING_PAGE_CONTENT.pinturaEnDirecte.heading}
          </h3>
          <div className="centerStack">
            <img
              className="centerAvatar"
              src={getLocalAvatarSrc(LANDING_PAGE_CONTENT.pinturaEnDirecte.instagramHandle.handle)}
              alt={`Portada de ${LANDING_PAGE_CONTENT.pinturaEnDirecte.instagramHandle.handle}`}
              loading="lazy"
            />
            <div className="centerName">{LANDING_PAGE_CONTENT.pinturaEnDirecte.artistName}</div>
            <a
              className="pillLink"
              href={toInstagramUrl(LANDING_PAGE_CONTENT.pinturaEnDirecte.instagramHandle.handle)}
              target="_blank"
              rel="noreferrer"
            >
              @{LANDING_PAGE_CONTENT.pinturaEnDirecte.instagramHandle.handle}
            </a>
          </div>
        </section>

        <section className="sectionCard" aria-labelledby="cartel">
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
          <div className="locationText">{LANDING_PAGE_CONTENT.location.addressLine3}</div>

          <div className="mapWrap">
            <iframe
              title="Mapa de l'esdeveniment"
              className="mapFrame"
              src={LANDING_PAGE_CONTENT.location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      <footer className="landingFooter" aria-label="Peu de pàgina">
        <div className="landingFooterBrand">
          <p className="landingFooterText">{LANDING_PAGE_CONTENT.footer.organizerLine}</p>
          <img
            className="landingFooterLogo"
            src={footerLogoImage}
            alt="Logotip del Mercat Solidari x Palestina"
            loading="lazy"
          />
        </div>
        <a
          className="landingFooterInsta"
          href={LANDING_PAGE_CONTENT.footer.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram de Mercat Solidari x Palestina"
        >
          <svg className="landingFooterInstaIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.12 1.97a1.19 1.19 0 1 1 0 2.38 1.19 1.19 0 0 1 0-2.38zm-4.42 2.7a4.55 4.55 0 1 1 0 9.09 4.55 4.55 0 0 1 0-9.09zm0 1.5a3.05 3.05 0 1 0 0 6.09 3.05 3.05 0 0 0 0-6.09z"
            />
          </svg>
        </a>
      </footer>
    </main>
  )
}


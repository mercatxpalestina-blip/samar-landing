import { useLayoutEffect, useState } from 'react'
import posterImage from '../../../assets/EVENTO_HORARIOS-ad3cbdc6-e761-446a-88c7-5663161b1356.png'
import titleImage from '../../../assets/title.png'
import footerLogoImage from '../../../assets/mercatxpalestina.jpg'
import { LANDING_PAGE_CONTENT } from './landing_page_content'
import defaultAvatar from '../../../assets/avatar_default.svg'
import { toInstagramUrl } from './utils/instagram'
import { RevealOnScroll } from './RevealOnScroll'
import './landing.css'

const MOBILE_HEADER_BREAKPOINT_PX = 520
const HEADER_COMPACT_SCROLL_Y = 40

function readMobileHeaderCompact(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia(`(max-width: ${MOBILE_HEADER_BREAKPOINT_PX}px)`).matches &&
    window.scrollY > HEADER_COMPACT_SCROLL_Y
  )
}

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
  const [headerCompact, setHeaderCompact] = useState(readMobileHeaderCompact)

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_HEADER_BREAKPOINT_PX}px)`)

    const syncCompact = () => {
      if (!mq.matches) {
        setHeaderCompact(false)
        return
      }
      setHeaderCompact(window.scrollY > HEADER_COMPACT_SCROLL_Y)
    }

    syncCompact()
    window.addEventListener('scroll', syncCompact, { passive: true })
    mq.addEventListener('change', syncCompact)
    const onPageShow = () => syncCompact()
    window.addEventListener('pageshow', onPageShow)
    return () => {
      window.removeEventListener('scroll', syncCompact)
      mq.removeEventListener('change', syncCompact)
      window.removeEventListener('pageshow', onPageShow)
    }
  }, [])

  const headerCompactClass = headerCompact ? ' landingHeader--compact' : ''
  const rootCompactClass = headerCompact ? ' landingRoot--headerCompact' : ''

  return (
    <main className={`landingRoot${rootCompactClass}`}>
      <header className={`landingHeader${headerCompactClass}`} aria-label="Títol del mercat">
        <h2 className="landingHeaderRow">
          <span className="landingTitle">{LANDING_PAGE_CONTENT.siteTitle}</span>
          <span className="landingHeaderSep" aria-hidden="true">
            ·
          </span>
          <span className="landingHeaderDescriptionWrap">
            <span className="landingDescription">{LANDING_PAGE_CONTENT.siteDescription}</span>
          </span>
        </h2>
      </header>

      <div className="landingContent">
        <RevealOnScroll>
          <section className="eventHero" aria-label="Presentació de l'esdeveniment">
            <h1 className="srOnly">{LANDING_PAGE_CONTENT.eventTitle}</h1>
            <img
              className="eventTitleImage"
              src={titleImage}
              alt={LANDING_PAGE_CONTENT.eventTitle}
              width={1048}
              height={498}
              decoding="async"
            />
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
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
        </RevealOnScroll>

        <RevealOnScroll>
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
        </RevealOnScroll>

        <RevealOnScroll>
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
          <p className="centerRaffleNotice">
            {LANDING_PAGE_CONTENT.comidaArabe.raffleNotice.before}
            <a
              className="centerRaffleNoticeLink"
              href={LANDING_PAGE_CONTENT.comidaArabe.raffleNotice.href}
              target="_blank"
              rel="noreferrer"
            >
              {LANDING_PAGE_CONTENT.comidaArabe.raffleNotice.linkLabel}
            </a>
            {LANDING_PAGE_CONTENT.comidaArabe.raffleNotice.after}
          </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
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
          <p className="centerRaffleNotice">
            {LANDING_PAGE_CONTENT.pinturaEnDirecte.raffleNotice}
          </p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="sectionCard" aria-labelledby="vendes-solidaries">
          <h3 id="vendes-solidaries" className="sectionHeading sectionHeadingCentered">
            {LANDING_PAGE_CONTENT.solidarySales.heading}
          </h3>
          <ul className="landingList">
            {LANDING_PAGE_CONTENT.solidarySales.items.map((item) => (
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
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="sectionCard" aria-labelledby="cartel">
          <img
            className="posterLarge"
            src={posterImage}
            alt="Cartell del 2 anys de solidaritat amb Palestina"
            loading="lazy"
          />
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
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
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <footer className="landingFooter" aria-label="Peu de pàgina">
        <div className="landingFooterBrand">
          <p className="landingFooterText">{LANDING_PAGE_CONTENT.footer.organizerLine}</p>
        </div>
        <a
          href={LANDING_PAGE_CONTENT.footer.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram de Mercat Solidari x Palestina"
        >
          <img
            className="landingFooterLogo"
            src={footerLogoImage}
            alt="Logotip del Mercat Solidari x Palestina"
            loading="lazy"
          />
        </a>
        </footer>
      </RevealOnScroll>
    </main>
  )
}


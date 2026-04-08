export type LandingInstagramHandle = {
  handle: string
}

export type LandingWorkshop = {
  name: string
  instagramHandle?: LandingInstagramHandle
}

export type LandingArtist = {
  name: string
  instagramHandle?: LandingInstagramHandle
}

export type LandingFood = {
  name: string
  instagramHandle?: LandingInstagramHandle
}

export type LandingNoticeWithLink = {
  before: string
  linkLabel: string
  href: string
  after: string
}

export type LandingComidaArabe = {
  heading: string
  raffleNotice: LandingNoticeWithLink
  items: LandingFood[]
}

export type LandingLivePainting = {
  heading: string
  artistName: string
  instagramHandle: LandingInstagramHandle
  raffleNotice: string
}

export type LandingSolidarySale = {
  name: string
  instagramHandle?: LandingInstagramHandle
}

export const LANDING_PAGE_CONTENT = {
  siteTitle: 'MERCAT SOLIDARI X PALESTINA',
  siteDescription: 'Un projecte de asocioació SAMAR',
  eventTitle: '2 anys de solidaritat amb palestina',
  eventDateLabel: '11/04',
  sectionTimes: {
    talleresFamiliares: '10:30–12:00h',
    musicaYpoesia: '12:00–16:00h',
    comida: '14:00–15:30h',
  },
  talleresFamiliares: [
    { name: 'Taller de xapes', instagramHandle: { handle: 'mercatxpalestina' } },
    { name: 'Taller de serigrafia', instagramHandle: { handle: 'la.cocota' } },
    { name: 'Taller d’escriptura àrab', instagramHandle: { handle: 'associacioeccit' } },
  ] satisfies LandingWorkshop[],
  musicaYpoesia: {
    heading: 'Música i poesia',
    instagramUrl: 'https://www.instagram.com/',
    instagramLabel: 'Instagram',
    artistsHeading: 'Artistes',
    artists: [
      { name: 'Katou Sheng Morrison', instagramHandle: { handle: 'aeioukatou' } },
      { name: 'Taha Salim Ghyadh', instagramHandle: { handle: 'tahasalimghyadh' } },
      { name: 'Dal Yah', instagramHandle: { handle: 'dal_yah__' } },
      { name: 'DJ Nada', instagramHandle: { handle: 'nhalawa' } },
    ] satisfies LandingArtist[],
  },
  comidaArabe: {
    heading: 'Menjar àrab',
    raffleNotice: {
      before:
        'En reservar plaça ajudes a que no es malgasti el menjar i, a canvi, us obsequiarem amb una papereta per al sorteig del quadre de la pintura en directe. Reserveu la vostra plaça ',
      linkLabel: 'aquí',
      href: 'https://forms.gle/Mw4d1Qme18ofNob87',
      after: '',
    },
    items: [
      { name: 'El Forn Fatayer', instagramHandle: { handle: 'elfornfatayer' } },
      { name: 'Saj Zuzu', instagramHandle: { handle: 'saj_zuzu' } },
      { name: 'Chef Yasser Saadoune', instagramHandle: { handle: 'yassersaadoune' } },
      { name: 'Forn Yara Gracia', instagramHandle: { handle: 'fornyaragracia' } },
    ],
  } satisfies LandingComidaArabe,
  pinturaEnDirecte: {
    heading: 'Pintura en directe',
    artistName: 'Juan Kantor',
    instagramHandle: { handle: '_juan_kantor_' },
    raffleNotice: 'Aquesta obra es sortejarà amb la venda de paperetes.',
  } satisfies LandingLivePainting,
  solidarySales: {
    heading: 'Vendes solidàries',
    items: [
      { name: 'Mercat Solidari x Palestina', instagramHandle: { handle: 'mercatxpalestina' } },
      { name: 'Palmira Almalika', instagramHandle: { handle: 'palmiraalmalika' } },
      { name: 'Lovely Things By Afnan', instagramHandle: { handle: '__lovely._.things__' } },
    ] satisfies LandingSolidarySale[],
  },
  cartelHeading: 'Cartell',
  locationHeading: 'Lloc',
  location: {
    addressLine1: 'Av. del Cardenal Vidal i Barraquer, 28,',
    addressLine2: 'Horta-Guinardó, 08035, Barcelona.',
    addressLine3: 'Metro L3 - Montbau',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Av.+del+Cardenal+Vidal+i+Barraquer,+28,+Horta-Guinard%C3%B3,+08035,+Barcelona&output=embed',
  },
  footer: {
    organizerLine: 'Organiza Mercat Solidari x Palestina',
    instagramUrl: 'https://www.instagram.com/mercatxpalestina',
  },
} as const


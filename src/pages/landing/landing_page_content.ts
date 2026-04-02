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

export type LandingLivePainting = {
  heading: string
  artistName: string
  instagramHandle: LandingInstagramHandle
}

export const LANDING_PAGE_CONTENT = {
  siteTitle: 'MERCAT SOLIDARI X PALESTINA',
  eventTitle: '2 anys de solidaritat amb palestina',
  eventDateLabel: '11/04',
  sectionTimes: {
    talleresFamiliares: '10:30–12:00h',
    musicaYpoesia: '12:00–14:00h',
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
    items: [
      { name: 'El Forn Fatayer', instagramHandle: { handle: 'elfornfatayer' } },
      { name: 'Saj Zuzu', instagramHandle: { handle: 'saj_zuzu' } },
      { name: 'Chef Yasser Saadoune', instagramHandle: { handle: 'yassersaadoune' } },
    ] satisfies LandingFood[],
  },
  pinturaEnDirecte: {
    heading: 'Pintura en directe',
    artistName: 'Juan Kantor',
    instagramHandle: { handle: '_juan_kantor_' },
  } satisfies LandingLivePainting,
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


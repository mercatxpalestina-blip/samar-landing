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

export type LandingGalleryPhoto = {
  src: string
  alt: string
}

export const LANDING_PAGE_CONTENT = {
  siteTitle: 'MERCAT SOLIDARI X PALESTINA',
  eventTitle: '2 anys de solidaritat amb palestina',
  eventDateLabel: '11/04',
  talleresFamiliares: [
    { name: 'Taller de chapas' },
    { name: 'Taller de serigrafia', instagramHandle: { handle: 'la.cocota' } },
    { name: 'Taller de escritura árabe', instagramHandle: { handle: 'associoeccit' } },
  ] satisfies LandingWorkshop[],
  musicaYpoesia: {
    heading: 'Música y poesía',
    instagramUrl: 'https://www.instagram.com/',
    instagramLabel: 'Instagram',
    artistsHeading: 'Artistes',
    artists: [
      { name: 'Katou Sheng Morrison', instagramHandle: { handle: 'aeioukatou' } },
      { name: 'Taha Salim Ghyadh', instagramHandle: { handle: 'tahasalimghyadh' } },
      { name: 'Dal Yah', instagramHandle: { handle: 'dal_yah__' } },
      { name: 'DJ Nada Halaweh', instagramHandle: { handle: 'nhalawa' } },
    ] satisfies LandingArtist[],
    photos: [] as LandingGalleryPhoto[],
  },
  comidaArabe: {
    heading: 'Comida árabe',
    items: [
      { name: 'El Forn Fatayer', instagramHandle: { handle: 'elfornfatayer' } },
      { name: 'Saj Zuzu', instagramHandle: { handle: 'saj_zuzu' } },
      { name: 'Chef Yasser Saadoune', instagramHandle: { handle: 'yassersaadoune' } },
    ] satisfies LandingFood[],
  },
  cartelHeading: 'Cartel',
  locationHeading: 'Lugar',
  location: {
    addressLine1: 'Av. del Cardenal Vidal i Barraquer, 28,',
    addressLine2: 'Horta-Guinardó, 08035, Barcelona.',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Av.+del+Cardenal+Vidal+i+Barraquer,+28,+Horta-Guinard%C3%B3,+08035,+Barcelona&output=embed',
  },
} as const


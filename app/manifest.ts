import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RoofVue — Independent Roof Surveys Kent',
    short_name: 'RoofVue',
    description: 'Independent, unbiased roof surveys for homeowners, buyers, landlords and businesses across Kent.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0f172a',
    theme_color: '#f59e0b',
    categories: ['business', 'productivity'],
    lang: 'en-GB',
    icons: [
      {
        src: '/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/images/roofvue-og.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
      },
    ],
    shortcuts: [
      {
        name: 'Book a Survey',
        url: '/contact',
        description: 'Book an independent roof survey',
      },
      {
        name: 'Our Services',
        url: '/services',
        description: 'View all RoofVue roof survey services',
      },
    ],
  }
}

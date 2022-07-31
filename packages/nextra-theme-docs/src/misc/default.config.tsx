import React from 'react'
import { DocsThemeConfig } from '../types'

const defaultTheme: DocsThemeConfig = {
  titleSuffix: ' – Playlolly',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
    storageKey: 'theme'
  },
  defaultMenuCollapsed: false,
  // @TODO: Can probably introduce a set of options to use Google Fonts directly
  // font: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Playlolly.`,
  gitTimestamp: 'Last updated on',
  logo: (
    <>
      <span className="mr-2 hidden font-extrabold md:inline">Playlolly</span>
      <span className="hidden font-normal text-gray-600 md:inline">
        Playlolly
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Playlolly" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@playlolly" />
      <meta property="og:title" content="Playlolly" />
      <meta property="og:description" content="Playlolly" />
      <meta name="apple-mobile-web-app-title" content="Playlolly" />
    </>
  ),
  searchPlaceholder: () => {
    return 'Search documentation...'
  },
  unstable_searchResultEmpty: () => (
    <span className="block select-none p-8 text-center text-sm text-gray-400">
      No results found.
    </span>
  )
}

export default defaultTheme

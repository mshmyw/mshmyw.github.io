import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}>西门吹雪的博客^_^</div>,
  topNavs: [
    { label: 'Home', path: '/' },
    { label: '内容', path: '/content/earth', activeIfMatch: '/content' },
    { label: '关于', path: '/users', activeIfMatch: '/users' },
    {
      label: 'Guide',
      path: '/guide/introduce',
      activeIfMatch: '/guide',
    },
    {
      label: 'Reference',
      path: '/reference/glossary',
      activeIfMatch: '/reference',
    },
    { label: 'lanyue', href: 'http://lanyue.eksma.xyz' },
  ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        reference: {
          concepts: {
            label: 'Concepts',
            order: 1,
          },
          'cli-commands': {
            label: 'CLI Commands',
            order: 2,
          },
          'error-codes': {
            label: 'Error Codes',
            order: 3,
          },
        },
      },
    })
  },
})

import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}>📘 西门吹雪</div>,
  topNavs: [
    { label: 'Home', path: '/' },
    {label: '内容', path: '/content', activeIfMatch: 'content'},
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
    { label: 'Vite', href: 'https://github.com/vitejs/vite' },
    {
      label: 'Vite Pages',
      href: 'https://github.com/vitejs/vite-plugin-react-pages',
    },
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

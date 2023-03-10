import * as React from 'react'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'

export default function MyApp (props) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

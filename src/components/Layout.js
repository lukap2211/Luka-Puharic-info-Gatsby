import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children, info }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{info.name} CV</title>
        <meta name="description" content={info.summary} />

        <link rel="shortcut icon" href={`${withPrefix('/')}static/favicon.ico`} />

        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://avatars0.githubusercontent.com/" />
        <meta name="msapplication-TileColor" content="#d11878" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="manifest" href={`${withPrefix('/')}static/manifest.json`} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          s
          href={`${withPrefix('/')}static/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}static/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}static/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}static/safari-pinned-tab.svg`}
          color="#d11878"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={info.name} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}static/og-image.jpg`}
        />
      </Helmet>
      <div>{children}</div>s
    </div>
  )
}

export default TemplateWrapper

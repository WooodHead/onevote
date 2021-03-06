import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Text, Heading } from '@hackclub/design-system'
import Search from '../components/search'
import theme from '../theme/config'

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

const Highlight = styled(Text.span)`
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`

export default class extends Component {
  static getInitialProps() {
    return { googleMapsApiKey }
  }

  render() {
    const pageDescription =
      'Millennials and us Gen Z don’t show up to the polls. Know your candidates and get out to vote with OneVote.'
    const pageTitle = 'OneVote'
    const url = 'https://onevote-pennapps.herokuapp.com'
    const imageUrl = '' // TODO
    return (
      <Fragment>
        <Head>
          <title children={pageTitle} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content={theme.colors.brand} />
          <meta name="description" content={pageDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:domain" content={url} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={imageUrl} />
          <meta property="og:site_name" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${
              this.props.googleMapsApiKey
            }&libraries=geometry,drawing,places`}
          />
        </Head>
        <Header />
        <Container width={1} maxWidth={48} px={3} pb={4}>
          <Heading.h1 f={[5, 6]} regular>
            Your vote counts. <Text.span bold>Cast it.</Text.span>
          </Heading.h1>
          <Text f={3} mt={2} mb={2}>
            While young people are more informed and engaged than ever, we’re
            not turning up at the polls.{' '}
            <Highlight>Our votes are critical to the future we want.</Highlight>
          </Text>
          <Text f={3} mb={[3, 4]}>
            <Text.span bold>Know who you’re voting for, then vote.</Text.span>{' '}
            We’re here to help.
          </Text>
          <Search />
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

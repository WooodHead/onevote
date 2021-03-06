import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import ThemeProvider from '../theme'
import NProgress from 'nprogress'
import { debounce } from 'lodash'
import RouterEvents from '../lib/router-events'

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', () => {
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

const meta = tags =>
  tags.map((m, i) => {
    m.key = i
    return React.createElement('meta', m, null)
  })

const title = 'OneVote'
const description = 'Work in progress'
const img = '/static/card.png'

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      )
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <html lang="en" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {this.props.styleTags}
        </Head>
        <body>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
          <NextScript />
        </body>
      </html>
    )
  }
}

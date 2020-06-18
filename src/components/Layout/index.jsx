import Head from 'next/head';
import { Header, Footer } from 'components';

const Layout = ({
  children,
  siteTitle = 'CinemaKing',
  description = 'CinemaKing - The leading movie news outlet.',
}) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caladea&family=Poppins:ital,wght@0,200;0,400;0,600;0,700;0,900;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </>
);

export default Layout;
